import os
from PIL import Image

def process_image(src_name, target_name):
    scratch = r"C:\Users\server\.gemini\antigravity\brain\886d6f74-68c2-4d2a-90f3-2b5442412985\scratch"
    src_path = os.path.join(scratch, src_name)
    im = Image.open(src_path)

    # Maintain 1280x800 canvas
    target_w, target_h = 1280, 800
    resized = im.resize((target_w, target_h), Image.Resampling.LANCZOS)

    out_webp = f"public/media/projects/{target_name}.webp"
    out_png = f"public/media/projects/{target_name}.png"

    resized.convert('RGB').save(out_webp, 'WEBP', quality=92)
    resized.convert('RGB').save(out_png, 'PNG', optimize=True)
    print(f"Generated: {out_webp} and {out_png}")

if __name__ == "__main__":
    process_image("shortlink-login.png", "shortlink-battuta-login")
    process_image("shortlink-dashboard.png", "shortlink-battuta-dashboard")
    process_image("shortlink-create.png", "shortlink-battuta-create")
    process_image("shortlink-qrcode.png", "shortlink-battuta-qrcode")

