#!/bin/bash
# v8 (finished extras, hands with fingers, fixed walking routes, calmer textures): shots A and B in full at 1.25×,
# sub-frames × 0.8 (as v6); the end card (fC, fCsq) is unchanged. 4 workers, heaviest chunks first; a chunk whose
# frames are all there is skipped, so the script can be restarted after an interruption.
cd "$(dirname "$0")/.."
S=$(date +%s)
{
  for a in $(seq 270 15 494); do echo "A fA8 $a $((a+14 > 494 ? 494 : a+14))"; done
  for a in $(seq 0 15 869); do echo "B fB8 $a $((a+14 > 869 ? 869 : a+14))"; done
  for a in $(seq 0 15 269); do echo "A fA8 $a $((a+14))"; done
} | xargs -P 4 -L 1 bash -c 'n=0; for f in $(seq $2 $3); do [ -s v5/$1/f$(printf %04d $f).png ] && n=$((n+1)); done; [ $n -eq $(($3-$2+1)) ] && { echo "skip $1 $2"; exit 0; }; node v5/render5.cjs v5/shot$0 --dpr 1.25 --q hi --h 1350 --qs subk=0.8 --from $2 --to $3 --out v5/$1 > v5/tmp/r8_$1_$2.log 2>&1; echo "done $1 $2 $3 $(date +%H:%M) $(tail -1 v5/tmp/r8_$1_$2.log)"'
echo V8DONE $(( $(date +%s) - S )) s
