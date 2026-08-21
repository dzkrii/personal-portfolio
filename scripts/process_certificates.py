import os
import pymupdf
import json

base_dir = r"d:\projects\personal\personal-portfolio\public\certificates"
categories = ["achievement", "competence", "participation"]

results = []

for category in categories:
    cat_dir = os.path.join(base_dir, category)
    if not os.path.exists(cat_dir):
        continue
    files = sorted(os.listdir(cat_dir))
    for f in files:
        file_path = os.path.join(cat_dir, f)
        ext = os.path.splitext(f)[1].lower()
        
        info = {
            "category": category,
            "filename": f,
            "path": file_path,
            "ext": ext,
            "extracted_text": ""
        }
        
        if ext == ".pdf":
            try:
                doc = pymupdf.open(file_path)
                text = ""
                for page in doc:
                    text += page.get_text() + "\n"
                info["extracted_text"] = text.strip()
                info["page_count"] = len(doc)
            except Exception as e:
                info["error"] = str(e)
        
        results.append(info)

with open(r"d:\projects\personal\personal-portfolio\scripts\certificates_raw.json", "w", encoding="utf-8") as out:
    json.dump(results, out, indent=2, ensure_ascii=False)

print(f"Processed {len(results)} files successfully!")

