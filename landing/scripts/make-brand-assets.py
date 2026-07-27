#!/usr/bin/env python3
"""Generate the derived brand assets served by the landing site.

  public/og-image.png         1200x630 Open Graph / Twitter card
  public/apple-touch-icon.png 180x180 iOS home-screen icon

Both are COMMITTED (the static export ships them as-is); this script exists so
they are reproducible from the brand source files instead of being opaque
binaries nobody can regenerate.

Run:  python3 landing/scripts/make-brand-assets.py
Deps: Pillow  (pip3 install Pillow)
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630

# Pulled from landing/src/app/globals.css so the card matches the live site.
BG = (0x0B, 0x11, 0x16)
BRAND = (0x30, 0x8A, 0xFF)
BRAND_ALT = (0x72, 0x6D, 0xFF)
TEXT = (0xE6, 0xF1, 0xF8)
TEXT_SUBTLE = (0xB8, 0xC6, 0xD1)

ROOT = Path(__file__).resolve().parents[1]
LOGO = ROOT / "public" / "brand" / "prepwise-logo.png"
ICON = ROOT / "public" / "brand" / "prepwise-icon.png"
OUT = ROOT / "public" / "og-image.png"
OUT_ICON = ROOT / "public" / "apple-touch-icon.png"

TAGLINE = "Meal Planner & Pantry Tracker"
SUBLINE = "Plan meals from what you already have. Track macros. Shop smarter."

FONT_CANDIDATES = [
    "/System/Library/Fonts/SFNS.ttf",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial.ttf",
]


def load_font(size: int):
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except OSError:
                continue
    return ImageFont.load_default(size)


def radial_glow(img: Image.Image, cx: int, cy: int, radius: int, color, peak: float) -> None:
    """Soft brand-coloured glow, drawn as concentric alpha rings."""
    glow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(glow)
    steps = 60
    for i in range(steps, 0, -1):
        r = int(radius * i / steps)
        alpha = int(peak * 255 * (1 - i / steps) ** 2)
        d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(*color, alpha))
    img.alpha_composite(glow)


def make_apple_touch_icon() -> None:
    src = Image.open(ICON).convert("RGBA")
    # iOS composites apple-touch-icon over BLACK, so flatten onto the brand
    # background rather than shipping alpha (a transparent icon renders as a
    # dark blob on the home screen).
    flat = Image.new("RGBA", src.size, (*BG, 255))
    flat.alpha_composite(src)
    flat.convert("RGB").resize((180, 180), Image.LANCZOS).save(
        OUT_ICON, "PNG", optimize=True
    )
    print(f"wrote {OUT_ICON} (180x180)")


def main() -> None:
    for asset in (LOGO, ICON):
        if not asset.exists():
            raise SystemExit(f"missing brand asset: {asset}")

    card = Image.new("RGBA", (W, H), (*BG, 255))
    radial_glow(card, int(W * 0.12), int(H * 0.18), 560, BRAND, 0.30)
    radial_glow(card, int(W * 0.92), int(H * 0.95), 520, BRAND_ALT, 0.22)

    logo = Image.open(LOGO).convert("RGBA")
    logo_w = 520
    logo = logo.resize((logo_w, round(logo.height * logo_w / logo.width)), Image.LANCZOS)
    card.alpha_composite(logo, (80, 150))

    d = ImageDraw.Draw(card)
    d.text((84, 300), TAGLINE, font=load_font(58), fill=TEXT)
    d.text((84, 380), SUBLINE, font=load_font(30), fill=TEXT_SUBTLE)

    # Brand rule under the copy, fading out to the right.
    for x in range(84, 640):
        alpha = int(255 * (1 - (x - 84) / (640 - 84)))
        d.line((x, 452, x + 1, 452), fill=(*BRAND, alpha), width=4)

    d.text((84, 500), "prepwise-app.com", font=load_font(28), fill=BRAND)
    d.text((84, 548), "Free on the App Store  ·  iOS", font=load_font(24), fill=TEXT_SUBTLE)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    card.convert("RGB").save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({W}x{H})")

    make_apple_touch_icon()


if __name__ == "__main__":
    main()
