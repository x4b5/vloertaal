#!/bin/bash
# v6 (more realistic shading, faces, fixes): everything except the end card is new.
#   shot A 270–494 at 1.25× with depth of field (fA15), shot B 0–869 at 1.25× (fB), shot A 0–269 at 1× (fA1);
#   sub-frames × 0.8 (subk) to fit the time. 4 workers, heaviest chunks first.
cd "$(dirname "$0")/.."
S=$(date +%s)
{
  for a in $(seq 270 15 494); do echo "A fA15 $a $((a+14 > 494 ? 494 : a+14)) 1350 --dpr 1.25 --q hi"; done
  for a in $(seq 0 25 869); do echo "B fB $a $((a+24 > 869 ? 869 : a+24)) 1350 --dpr 1.25 --q hi"; done
  for a in $(seq 0 15 269); do echo "A fA1 $a $((a+14 > 269 ? 269 : a+14)) 1350 --dpr 1"; done
} | xargs -P 4 -L 1 bash -c 'node v5/render5.cjs v5/shot$0 ${@:5} --qs subk=0.8 --h $4 --from $2 --to $3 --out v5/$1 > v5/tmp/r6_$1_$2.log 2>&1; echo "done $1 $2 $3 $(tail -1 v5/tmp/r6_$1_$2.log)"'
echo V6DONE $(( $(date +%s) - S )) s
