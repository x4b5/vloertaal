#!/bin/bash
# v7 (textures, contact shadow, reflections on metal): shots A and B in full, the end card (fC, fCsq) is unchanged.
#   shot A 270–419 (fA7): 1.5× with every sub-frame (the close-ups of Amina, the first part of the night render);
#   shot A 420–494 and shot B 0–869 (fB7): 1.5× with sub-frames × 0.8 (subk), as in v6, to have the film sooner;
#   shot A 0–269 (the drone over the polder and the train): 1.25×, sub-frames × 0.8.
# 4 workers, heaviest chunks first; a chunk whose frames are all there is skipped, so the script can be
# restarted after an interruption.
cd "$(dirname "$0")/.."
S=$(date +%s)
{
  for a in $(seq 420 15 494); do echo "A fA7 $a $((a+14 > 494 ? 494 : a+14)) 1.5 0.8"; done
  for a in $(seq 0 15 869); do echo "B fB7 $a $((a+14 > 869 ? 869 : a+14)) 1.5 0.8"; done
  for a in $(seq 0 15 269); do echo "A fA7 $a $((a+14)) 1.25 0.8"; done
  for a in $(seq 270 15 419); do echo "A fA7 $a $((a+14)) 1.5 1"; done
} | xargs -P 4 -L 1 bash -c 'n=0; for f in $(seq $2 $3); do [ -s v5/$1/f$(printf %04d $f).png ] && n=$((n+1)); done; [ $n -eq $(($3-$2+1)) ] && { echo "skip $1 $2"; exit 0; }; node v5/render5.cjs v5/shot$0 --dpr $4 --q hi --h 1350 --qs subk=$5 --from $2 --to $3 --out v5/$1 > v5/tmp/r7_$1_$2.log 2>&1; echo "done $1 $2 $3 $(date +%H:%M) $(tail -1 v5/tmp/r7_$1_$2.log)"'
echo V7DONE $(( $(date +%s) - S )) s
