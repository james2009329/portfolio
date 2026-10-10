"""Make web-sized copies of every photo in media/.

For each .png/.jpg in media/<project>/ this writes, next to the original:
  <name>.webp     long edge up to 1800px, used in project galleries and the lightbox
  <name>.sm.webp  long edge up to 720px, used for grid covers and gallery thumbnails

Originals are kept untouched. Re-running only processes images that are new
or have changed since their copies were made.

    pip install pillow
    python tools/optimize_images.py
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent / "media"
SIZES = {".webp": 1800, ".sm.webp": 720}
SOURCE_EXT = {".png", ".jpg", ".jpeg"}


def main():
    made = 0
    for src in sorted(ROOT.rglob("*")):
        if src.suffix.lower() not in SOURCE_EXT or src.name.startswith("."):
            continue
        for suffix, edge in SIZES.items():
            out = src.with_name(src.stem + suffix)
            if out.exists() and out.stat().st_mtime >= src.stat().st_mtime:
                continue
            with Image.open(src) as im:
                im = ImageOps.exif_transpose(im)
                im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
                im.thumbnail((edge, edge), Image.LANCZOS)
                im.save(out, "WEBP", quality=82, method=6)
            made += 1
            print("wrote", out.relative_to(ROOT.parent))
    print(f"{made} file(s) written")


if __name__ == "__main__":
    main()
