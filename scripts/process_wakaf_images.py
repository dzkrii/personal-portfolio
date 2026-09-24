from PIL import Image
import os

target_dir = r"d:\projects\personal\personal-portfolio\public\media\projects"

images = [
    "wakaf-kitabina-hero",
    "wakaf-kitabina-transparansi",
    "wakaf-kitabina-alur",
    "wakaf-kitabina-aset",
    "wakaf-kitabina-login",
    "wakaf-kitabina-lokasi",
    "wakaf-kitabina-scan-qr",
    "wakaf-kitabina-program",
]

for base_name in images:
    png_path = os.path.join(target_dir, f"{base_name}.png")
    if not os.path.exists(png_path):
        print(f"Warning: {png_path} does not exist!")
        continue

    img = Image.open(png_path).convert("RGBA")
    print(f"Original {base_name} size: {img.size}")
    
    # Resize to standard 1280x800 if not already
    if img.size != (1280, 800):
        resized = img.resize((1280, 800), Image.Resampling.LANCZOS)
    else:
        resized = img

    # Overwrite optimized PNG
    resized.save(png_path, "PNG", optimize=True)

    # Save high-fidelity WebP
    webp_path = os.path.join(target_dir, f"{base_name}.webp")
    resized.save(webp_path, "WEBP", quality=92, method=6)

    print(f"Processed {base_name}: PNG & WebP (1280x800) generated.")

print("All Wakaf Kitabina screenshots processed successfully.")
