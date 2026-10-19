#!/bin/bash
# Busca sequencial de imagens (evita 429)
cd /home/z/my-project

search() {
  local q="$1" out="$2" n="$3"
  if [ -f "scripts/$out" ]; then echo "SKIP $out (exists)"; return 0; fi
  echo ">>> Searching: $q"
  for attempt in 1 2 3; do
    z-ai image-search -q "$q" --count $n --gl us --no-rank -o "scripts/$out" 2>&1 | tail -1
    if [ -f "scripts/$out" ]; then echo "OK -> scripts/$out"; return 0; fi
    echo "Retry $attempt for $out after 20s..."
    sleep 20
  done
  echo "FAILED: $out"
}

search "romantic couple photoshoot at golden hour embracing" img-casais.json 5
sleep 5
search "happy family with children outdoor lifestyle photoshoot" img-familias.json 5
sleep 5
search "elegant pregnant woman maternity photoshoot" img-gestantes.json 5
sleep 5
search "wedding ceremony bride groom emotional documentary photography" img-casamentos.json 6
sleep 5
search "birthday party celebration candles sparkler night" img-aniversarios.json 4
sleep 5
search "professional photographer with camera portrait" img-bio.json 4
sleep 5
search "wedding couple silhouette dramatic cinematic photo" img-hero.json 4

echo "=== DONE ==="
ls -la scripts/*.json 2>/dev/null
