"""Fetch Instagram follower count and total views, and save them to stats.json.

Runs daily from .github/workflows/instagram-stats.yml. Needs the IG_TOKEN
secret: an Instagram user access token from the "API setup with Instagram
login" page of a Meta developer app, with the instagram_business_basic and
instagram_business_manage_insights permissions.

The site reads stats.json; if this script can't reach Instagram it leaves the
old file alone, so the site never shows a zero.
"""
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

API = "https://graph.instagram.com/v23.0"
OUT = Path(__file__).resolve().parent.parent / "stats.json"


def get(url, params):
    query = urllib.parse.urlencode(params)
    with urllib.request.urlopen(f"{url}?{query}" if "?" not in url else url, timeout=30) as r:
        return json.load(r)


def main():
    token = os.environ.get("IG_TOKEN", "").strip()
    if not token:
        print("IG_TOKEN is not set yet; skipping. Add it under Settings > Secrets and variables > Actions.")
        return 0

    try:
        me = get(f"{API}/me", {"fields": "username,followers_count,media_count", "access_token": token})
    except urllib.error.HTTPError as e:
        print("Instagram rejected the token:", e.read().decode(errors="replace")[:500])
        return 1

    # every post and reel on the account
    media, url, params = [], f"{API}/me/media", {"fields": "id,media_type,media_product_type", "limit": 100, "access_token": token}
    while url:
        page = get(url, params)
        media += page.get("data", [])
        url, params = page.get("paging", {}).get("next"), {}

    views, counted, skipped = 0, 0, 0
    for m in media:
        try:
            ins = get(f"{API}/{m['id']}/insights", {"metric": "views", "access_token": token})
            v = next((x["values"][0]["value"] for x in ins.get("data", []) if x.get("name") == "views"), None)
            if v is None:
                skipped += 1
                continue
            views += int(v)
            counted += 1
        except urllib.error.HTTPError:
            skipped += 1  # some older or unsupported posts have no view metric
        time.sleep(0.2)

    print(f"@{me.get('username')}: {me.get('followers_count')} followers, {views} views across {counted} posts ({skipped} skipped)")

    if counted == 0:
        print("No view data came back; keeping the old stats.json.")
        return 1

    stats = {
        "username": me.get("username"),
        "followers": me.get("followers_count"),
        "views": views,
        "posts": me.get("media_count"),
        "updated": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
    }
    OUT.write_text(json.dumps(stats, indent=2) + "\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
