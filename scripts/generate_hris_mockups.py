import os
from PIL import Image, ImageDraw, ImageFilter

canvas_w, canvas_h = 1280, 800

def create_phone_mockup(src_path, out_base_name):
    # 1. Background studio gradient
    bg = Image.new('RGB', (canvas_w, canvas_h))
    draw = ImageDraw.Draw(bg)
    for y in range(canvas_h):
        ratio = y / canvas_h
        r = int(248 + (238 - 248) * ratio)
        g = int(250 + (242 - 250) * ratio)
        b = int(252 + (246 - 252) * ratio)
        draw.line([(0, y), (canvas_w, y)], fill=(r, g, b))
    bg = bg.convert('RGBA')

    # 2. Open mobile screenshot
    mob = Image.open(src_path).convert('RGBA')

    # Dimensions
    phone_h = 744
    aspect = mob.width / mob.height
    phone_w = int(phone_h * aspect)

    mob_resized = mob.resize((phone_w, phone_h), Image.Resampling.LANCZOS)

    # Rounded screen corners
    corner_r = 38
    mask = Image.new('L', (phone_w, phone_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([(0, 0), (phone_w, phone_h)], radius=corner_r, fill=255)

    bezel = 8
    frame_w = phone_w + bezel * 2
    frame_h = phone_h + bezel * 2

    # Drop shadow
    shadow_pad = 60
    shadow_img = Image.new('RGBA', (frame_w + shadow_pad * 2, frame_h + shadow_pad * 2), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow_img)
    sdraw.rounded_rectangle(
        [(shadow_pad - 4, shadow_pad + 12), (shadow_pad + frame_w + 4, shadow_pad + frame_h + 12)],
        radius=corner_r + bezel + 4,
        fill=(15, 23, 42, 35)
    )
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(28))

    # Outer phone frame
    frame_img = Image.new('RGBA', (frame_w, frame_h), (0, 0, 0, 0))
    fdraw = ImageDraw.Draw(frame_img)
    fdraw.rounded_rectangle(
        [(0, 0), (frame_w, frame_h)],
        radius=corner_r + bezel,
        fill=(15, 23, 42, 255),
        outline=(203, 213, 225, 255),
        width=2
    )

    # Paste screen inside frame
    frame_img.paste(mob_resized, (bezel, bezel), mask)

    # Sleek speaker slit at top bezel
    speaker_w, speaker_h = 44, 4
    speaker_x = (frame_w - speaker_w) // 2
    speaker_y = 3
    s_mask = Image.new('RGBA', (speaker_w, speaker_h), (60, 70, 85, 255))
    frame_img.paste(s_mask, (speaker_x, speaker_y))

    # Center on canvas
    cx = (canvas_w - frame_w) // 2
    cy = (canvas_h - frame_h) // 2

    bg.paste(shadow_img, (cx - shadow_pad, cy - shadow_pad), shadow_img)
    bg.paste(frame_img, (cx, cy), frame_img)

    out_webp = f"public/media/projects/{out_base_name}.webp"
    out_png = f"public/media/projects/{out_base_name}.png"

    final_img = bg.convert('RGB')
    final_img.save(out_webp, 'WEBP', quality=92)
    final_img.save(out_png, 'PNG', optimize=True)
    print(f"Generated: {out_webp} and {out_png}")

def process_cover():
    src = r"C:\Users\server\.gemini\antigravity\brain\886d6f74-68c2-4d2a-90f3-2b5442412985\scratch\hris-login-desktop.png"
    im = Image.open(src)
    target_w = 1280
    target_h = int(im.height * (target_w / im.width))
    resized = im.resize((target_w, target_h), Image.Resampling.LANCZOS)

    out_webp = "public/media/projects/hris-battuta-login.webp"
    out_png = "public/media/projects/hris-battuta-login.png"
    resized.save(out_webp, 'WEBP', quality=92)
    resized.save(out_png, 'PNG', optimize=True)
    print(f"Generated cover: {out_webp} and {out_png}")

if __name__ == "__main__":
    scratch = r"C:\Users\server\.gemini\antigravity\brain\886d6f74-68c2-4d2a-90f3-2b5442412985\scratch"
    
    # 1. Cover
    process_cover()

    # 2. Detail screenshots (all in mobile view mockups)
    create_phone_mockup(os.path.join(scratch, "hris-screen-dashboard.png"), "hris-battuta-dashboard")
    create_phone_mockup(os.path.join(scratch, "hris-screen-absen.png"), "hris-battuta-absen")
    create_phone_mockup(os.path.join(scratch, "hris-screen-rekap.png"), "hris-battuta-rekap")
    create_phone_mockup(os.path.join(scratch, "hris-screen-profile.png"), "hris-battuta-profile")

