from PIL import Image
import os

scratch_dir = r"C:\Users\server\.gemini\antigravity\brain\886d6f74-68c2-4d2a-90f3-2b5442412985\scratch"
target_dir = r"d:\projects\personal\personal-portfolio\public\media\projects"
user_img_path = r"C:\Users\server\.gemini\antigravity\brain\886d6f74-68c2-4d2a-90f3-2b5442412985\.user_uploaded\media_1790226999702.png"

# 1-4: Captured screenshots to resize
direct_mapping = {
    "protype-dark-home.png": "protype-battuta-home",
    "protype-dark-lobby.png": "protype-battuta-lobby",
    "protype-dark-arena.png": "protype-battuta-arena",
    "protype-dark-racing.png": "protype-battuta-racing",
}

for src_name, dest_base in direct_mapping.items():
    src_path = os.path.join(scratch_dir, src_name)
    if not os.path.exists(src_path):
        print(f"Error: {src_path} does not exist!")
        continue

    img = Image.open(src_path).convert("RGBA")
    # Downscale from 2560x1600 to 1280x800 using Lanczos
    resized = img.resize((1280, 800), Image.Resampling.LANCZOS)

    # Save PNG
    png_path = os.path.join(target_dir, f"{dest_base}.png")
    resized.save(png_path, "PNG", optimize=True)

    # Save WebP
    webp_path = os.path.join(target_dir, f"{dest_base}.webp")
    resized.save(webp_path, "WEBP", quality=92, method=6)

    print(f"Successfully processed {dest_base} -> PNG & WEBP (1280x800)")

# 5: Process finish screen from user upload
src = Image.open(user_img_path).convert("RGB")
# The card content goes from y=12 to y=498, x=238 to x=786
card = src.crop((238, 12, 786, 498))
card_w, card_h = card.size
target_h = 730
target_w = int(card_w * (target_h / card_h))

card_resized = card.resize((target_w, target_h), Image.Resampling.LANCZOS)
canvas = Image.new("RGB", (1280, 800), (3, 7, 18))
pos_x = (1280 - target_w) // 2
pos_y = (800 - target_h) // 2
canvas.paste(card_resized, (pos_x, pos_y))

dest_base = "protype-battuta-results"
png_path = os.path.join(target_dir, f"{dest_base}.png")
canvas.save(png_path, "PNG", optimize=True)

webp_path = os.path.join(target_dir, f"{dest_base}.webp")
canvas.save(webp_path, "WEBP", quality=92, method=6)

print(f"Successfully processed {dest_base} -> PNG & WEBP (1280x800)")
print("All 5 ProType screenshots converted successfully.")
