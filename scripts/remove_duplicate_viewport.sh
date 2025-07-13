#!/usr/bin/env bash
set -e
files=$(grep -rl 'name="viewport"' servicios 2>/dev/null)
for file in $files; do
  awk 'BEGIN{c=0}
    /<meta name="viewport"/{c++; if(c>1) next}
    {print}' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done
