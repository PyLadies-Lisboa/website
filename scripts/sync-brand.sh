#!/usr/bin/env bash
# Copia os ficheiros da marca do kit de identidade visual para o site.
# Uso: scripts/sync-brand.sh [caminho/para/pyladies-lisboa-design]
set -euo pipefail
cd "$(dirname "$0")/.."
KIT="${1:-../pyladies-lisboa-design}"
[ -d "$KIT/logo" ] || { echo "Kit de marca não encontrado em: $KIT" >&2; exit 1; }

mkdir -p images fonts
cp "$KIT"/logo/{pyladies-lisboa-sticker,wordmark,wordmark-on-dark,mascot,skyline,skyline-on-dark}.svg images/
cp "$KIT"/logo/pyladies-lisboa-sticker-512.png images/
cp "$KIT"/patterns/azulejo-tiles.svg images/
cp "$KIT"/social/avatar-1080.png images/og-image.png
cp "$KIT"/social/favicon.ico .
cp "$KIT"/social/favicon-{32,180}.png "$KIT"/social/favicon.svg images/
cp -r "$KIT"/brand/fonts/. fonts/
echo "Marca sincronizada a partir de $KIT"
