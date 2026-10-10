"""Make web-sized copies of every photo in media/.

For each .png/.jpg in media/<project>/ this writes, next to the original:
  <name>.webp     long edge up to 1800px, used in project galleries
  <name>.sm.webp  long edge up to 720px, used for cards and thumbnails

If tools/crops.json lists the photo, the copies are cropped to that box.
Originals are never changed. Re-running only redoes copies that are missing,
older than their original, or older than crops.json.

    pip install pillow
    python tools/optimize_images.py
"""
import json
from pathlib import Path
from PIL import Image, ImageOps

TOOLS = Path(__file__).resolve().parent
ROOT = TOOLS.parent / "media"
CROPS_FILE = TOOLS / "crops.json"
SIZES = {".webp": 1800, ".sm.webp": 720}
SOURCE_EXT = {".png", ".jpg", ".jpeg"}


def main():
    crops = json.loads(CROPS_FILE.read_text()) if CROPS_FILE.exists() else {}
    crops_time = CROPS_FILE.stat().st_mtime if CROPS_FILE.exists() else 0
    made = 0
    for src in sorted(ROOT.rglob("*")):
        if src.suffix.lower() not in SOURCE_EXT or src.name.startswith("."):
            continue
        key = src.relative_to(ROOT).as_posix()
        box = crops.get(key)
        newest_input = max(src.stat().st_mtime, crops_time if box else 0)
        for suffix, edge in SIZES.items():
            out = src.with_name(src.stem + suffix)
            if out.exists() and out.stat().st_mtime >= newest_input:
                continue
            with Image.open(src) as im:
                im = ImageOps.exif_transpose(im)
                im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
                if box:
                    w, h = im.size
                    l, t, r, b = box
                    im = im.crop((round(l * w), round(t * h), round(r * w), round(b * h)))
                im.thumbnail((edge, edge), Image.LANCZOS)
                im.save(out, "WEBP", quality=82, method=6)
            made += 1
            print("wrote", out.relative_to(ROOT.parent))
    print(f"{made} file(s) written")


if __name__ == "__main__":
    main()
