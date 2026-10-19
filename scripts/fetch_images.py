#!/usr/bin/env python3
"""Busca e baixa imagens para o site Micael & Vanusa Fotografia."""
import subprocess, json, re, time, os, urllib.request

BASE = "/home/z/my-project"
IMG_DIR = os.path.join(BASE, "public", "img")
os.makedirs(IMG_DIR, exist_ok=True)

SEARCHES = [
    ("casais", "romantic couple photoshoot at golden hour embracing outdoors", 5),
    ("familias", "happy family with children outdoor lifestyle photoshoot laughing", 5),
    ("gestantes", "elegant pregnant woman maternity photoshoot flowing dress", 5),
    ("casamentos", "wedding ceremony bride groom emotional documentary photography", 6),
    ("aniversarios", "birthday party celebration girl candles sparklers night", 4),
    ("bio", "photographer holding camera working outdoor portrait", 3),
    ("hero", "wedding couple silhouette sunset dramatic cinematic photography", 4),
    ("nova", "newborn baby family tender moment photography", 4),
]

def run_search(query: str, count: int, retries: int = 4) -> list:
    for attempt in range(1, retries + 1):
        try:
            r = subprocess.run(
                ["z-ai", "image-search", "-q", query, "--count", str(count),
                 "--gl", "us", "--no-rank"],
                capture_output=True, text=True, timeout=150
            )
            out = r.stdout
            m = re.search(r"\{.*\}", out, re.DOTALL)
            if not m:
                raise ValueError(f"no JSON in output: {out[:200]}")
            data = json.loads(m.group(0))
            if data.get("success") and data.get("results"):
                return data["results"]
            raise ValueError(f"success=false: {data.get('error')}")
        except Exception as e:
            print(f"  attempt {attempt} failed: {e}")
            if attempt < retries:
                time.sleep(25)
    return []

def download(url: str, dest: str) -> bool:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as resp, open(dest, "wb") as f:
            f.write(resp.read())
        return os.path.getsize(dest) > 10000
    except Exception as e:
        print(f"  download failed {url}: {e}")
        return False

manifest = {}
for key, query, count in SEARCHES:
    print(f"\n=== {key.upper()}: {query}")
    results = run_search(query, count)
    files = []
    for i, item in enumerate(results):
        url = item["original_url"]
        ext = ".jpg"
        if ".png" in url.lower():
            ext = ".png"
        elif ".webp" in url.lower():
            ext = ".webp"
        fname = f"{key}-{i+1}{ext}"
        dest = os.path.join(IMG_DIR, fname)
        if download(url, dest):
            files.append(fname)
            print(f"  OK {fname} ({item.get('original_width','?')}x{item.get('original_height','?')}) [{item.get('source','')}]")
        else:
            try: os.remove(dest)
            except: pass
    manifest[key] = files
    time.sleep(8)

with open(os.path.join(BASE, "scripts", "images-manifest.json"), "w") as f:
    json.dump(manifest, f, indent=2, ensure_ascii=False)

print("\n=== MANIFEST ===")
print(json.dumps(manifest, indent=2))
total = sum(len(v) for v in manifest.values())
print(f"TOTAL: {total} images")
