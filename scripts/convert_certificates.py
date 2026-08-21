import os
import pymupdf
from PIL import Image

base_dir = r"d:\projects\personal\personal-portfolio\public\certificates"
output_dir = r"d:\projects\personal\personal-portfolio\public\certificates\optimized"
os.makedirs(output_dir, exist_ok=True)

# Mapping of original files to new clean names and categories
certificate_mappings = [
    # Achievement
    {
        "cat": "achievement",
        "original": "Juara 2 Desain Web COMFTIK 2025.jpg",
        "new_name": "juara-2-desain-web-comftik-2025.webp"
    },
    {
        "cat": "achievement",
        "original": "Juara 3 Lomba Mobile Apps Corisindo.png",
        "new_name": "juara-3-mobile-apps-corisindo.webp"
    },
    {
        "cat": "achievement",
        "original": "PKM-PI_FATAHUL AHMAD DZIKRI_110123114_PIMNAS_Peserta_0446 (1).pdf",
        "new_name": "pimnas-peserta-pkm-pi-2025.webp"
    },
    {
        "cat": "achievement",
        "original": "PKM-PI_FATAHUL AHMAD DZIKRI_110123114_pendanaan_0446 (1).pdf",
        "new_name": "pkm-pi-peraih-pendanaan-2025.webp"
    },
    
    # Competence
    {
        "cat": "competence",
        "original": "Alibaba Cloud Certified Developer.pdf",
        "new_name": "alibaba-cloud-certified-developer.webp"
    },
    {
        "cat": "competence",
        "original": "Certificate of Completion – Cloud Computing with AWS for Beginners.pdf",
        "new_name": "dicoding-aws-cloud-practitioner-essentials.webp"
    },
    {
        "cat": "competence",
        "original": "Certificate of Completion – Dart Programming for Beginners.pdf",
        "new_name": "dicoding-memulai-pemrograman-dart.webp"
    },
    {
        "cat": "competence",
        "original": "Certificate of Completion – Flutter for Beginners.pdf",
        "new_name": "dicoding-flutter-pemula.webp"
    },
    {
        "cat": "competence",
        "original": "Certificate of Completion – Introduction to Artificial Intelligence.pdf",
        "new_name": "dicoding-belajar-dasar-ai.webp"
    },
    {
        "cat": "competence",
        "original": "Fatahul-Ahmad-Dzikri-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers.pdf",
        "new_name": "idn-jaringan-komputer-dasar.webp"
    },
    {
        "cat": "competence",
        "original": "Introduction HTML SoloLearn.pdf",
        "new_name": "sololearn-introduction-to-html.webp"
    },
    {
        "cat": "competence",
        "original": "Sertifikat CSS SoloLearn.jpg",
        "new_name": "sololearn-introduction-to-css.webp"
    },
    
    # Participation
    {
        "cat": "participation",
        "original": "Conference 3rd INCONITBIS 2025 organized by Lembah Dempo University.pdf",
        "new_name": "conference-3rd-inconitbis-2025.webp"
    },
    {
        "cat": "participation",
        "original": "Conference ICoFEMATICS 2025 organized by Methodist University.jpg",
        "new_name": "conference-icofematics-2025.webp"
    },
    {
        "cat": "participation",
        "original": "Lomba TEKNOFEST HIMATEKNO.pdf",
        "new_name": "lomba-teknofest-himatekno.webp"
    },
    {
        "cat": "participation",
        "original": "Partisipasi Google Cloud x AI Medan.pdf",
        "new_name": "google-cloud-x-ai-medan.webp"
    },
    {
        "cat": "participation",
        "original": "Peserta Lomba Mobile Apps Corisindo.png",
        "new_name": "peserta-mobile-apps-corisindo.webp"
    },
    {
        "cat": "participation",
        "original": "Seminar Pendidikan Karakter Proasta 2025.jpg",
        "new_name": "seminar-pendidikan-karakter-proasta-2025.webp"
    },
    {
        "cat": "participation",
        "original": "Seminar _Menuju Jurnal Bereputasi_ Peningkatan Akreditasi dan Indeksasi yang Berdampak bagi PTS di Lingkungan LLDIKTI Wilayah I_.pdf",
        "new_name": "seminar-jurnal-bereputasi-lldikti-1.webp"
    },
    {
        "cat": "participation",
        "original": "Workshop ExpressJS Proasta.pdf",
        "new_name": "workshop-expressjs-proasta.webp"
    },
    {
        "cat": "participation",
        "original": "Workshop Mastering Laravel Skilvul.pdf",
        "new_name": "workshop-mastering-laravel-skilvul.webp"
    }
]

for item in certificate_mappings:
    src_path = os.path.join(base_dir, item["cat"], item["original"])
    cat_output_dir = os.path.join(output_dir, item["cat"])
    os.makedirs(cat_output_dir, exist_ok=True)
    dst_path = os.path.join(cat_output_dir, item["new_name"])
    
    if not os.path.exists(src_path):
        print(f"File not found: {src_path}")
        continue
    
    ext = os.path.splitext(src_path)[1].lower()
    
    if ext == ".pdf":
        doc = pymupdf.open(src_path)
        page = doc.load_page(0) # First page
        # 2x scale matrix for crystal-clear render (approx 200-300 dpi)
        mat = pymupdf.Matrix(2.0, 2.0)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        img.save(dst_path, "WEBP", quality=90)
        print(f"Converted PDF: {item['original']} -> {item['cat']}/{item['new_name']} ({pix.width}x{pix.height})")
    else:
        img = Image.open(src_path)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        img.save(dst_path, "WEBP", quality=90)
        print(f"Optimized Image: {item['original']} -> {item['cat']}/{item['new_name']}")

print("All certificates processed!")

