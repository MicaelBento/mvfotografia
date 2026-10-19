#!/usr/bin/env python3
"""Otimiza imagens para web: redimensiona (max 1800px) e comprime."""
import os
from PIL import Image

IMG_DIR = "/home/z/my-project/public/img"

total_before = 0
total_after = 0

for fname in sorted(os.listdir(IMG_DIR)):
    if not fname.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
        continue
    path = os.path.join(IMG_DIR, fname)
    size_before = os.path.getsize(path)
    total_before += size_before
    try:
        img = Image.open(path)
        img = img.convert("RGB")
        w, h = img.size
        max_side = 1800
        if max(w, h) > max_side:
            ratio = max_side / max(w, h)
            img = img.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)
        # Padroniza como JPEG otimizado
        new_name = os.path.splitext(fname)[0] + ".jpg"
        new_path = os.path.join(IMG_DIR, new_name)
        img.save(new_path, "JPEG", quality=82, optimize=True, progressive=True)
        size_after = os.path.getsize(new_path)
        total_after += size_after
        if new_name != fname:
            os.remove(path)
        orient = "H" if img.size[0] >= img.size[1] else "V"
        print(f"{new_name:24s} {img.size[0]}x{img.size[1]} {orient}  {size_before//1024}KB -> {size_after//1024}KB")
    except Exception as e:
        print(f"ERRO {fname}: {e}")

print(f"\nTotal: {total_before//1024//1024}MB -> {total_after//1024//1024}MB")
