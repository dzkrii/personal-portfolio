from PIL import Image
import os

scratch_dir = r"C:\Users\server\.gemini\antigravity\brain\886d6f74-68c2-4d2a-90f3-2b5442412985\scratch"
target_dir = r"d:\projects\personal\personal-portfolio\public\media\projects"

mapping = {
    "evoting-raw-login.png": "evoting-simpang-tiga-login",
    "evoting-raw-dashboard.png": "evoting-simpang-tiga-dashboard",
    "evoting-raw-candidates.png": "evoting-simpang-tiga-candidates",
    "evoting-raw-results.png": "evoting-simpang-tiga-results",
    "evoting-raw-ktp.png": "evoting-simpang-tiga-ktp",
}

for src_name, dest_base in mapping.items():
    src_path = os.path.join(scratch_dir, src_name)
    if not os.path.exists(src_path):
        print(f"Error: {src_path} does not exist!")
        continue

    img = Image.open(src_path).convert("RGBA")
    # Downscale from 2560x1600 to 1280x800 using high quality Lanczos
    resized = img.resize((1280, 800), Image.Resampling.LANCZOS)

    # Save PNG
    png_path = os.path.join(target_dir, f"{dest_base}.png")
    resized.save(png_path, "PNG", optimize=True)

    # Convert to RGB for WebP (or keep RGBA)
    webp_path = os.path.join(target_dir, f"{dest_base}.webp")
    resized.save(webp_path, "WEBP", quality=92, method=6)

    print(f"Successfully processed {dest_base} -> PNG & WEBP (1280x800)")

print("All evoting screenshots converted successfully.")

