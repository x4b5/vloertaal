#!/bin/bash
# v5b with extras: shot A 270–494 at 1.5× + depth of field (fA15), shot B 0–869 at 1.5× (fB), shot A 60–269 at 1×
# as v4 rendered it, now with the passengers (fA1), the end card's extra frames 204–263 (fC, fCsq). 4 workers.
cd "$(dirname "$0")/.."
S=$(date +%s)
{
  for a in $(seq 270 15 494); do echo "A fA15 $a $((a+14 > 494 ? 494 : a+14)) 1350 --dpr 1.5 --q hi"; done
  for a in $(seq 0 30 869); do echo "B fB $a $((a+29 > 869 ? 869 : a+29)) 1350 --dpr 1.5 --q hi"; done
  for a in $(seq 60 15 269); do echo "A fA1 $a $((a+14 > 269 ? 269 : a+14)) 1350 --dpr 1"; done
  echo "C fC 204 263 1350 --dpr 1.5 --q hi"; echo "C fCsq 204 263 1080 --dpr 1.5 --q hi"
} | xargs -P 4 -L 1 bash -c 'node v5/render5.cjs v5/shot$0 ${@:5} --h $4 --from $2 --to $3 --out v5/$1 > v5/tmp/rx_$1_$2.log 2>&1; echo "done $1 $2 $3 $(tail -1 v5/tmp/rx_$1_$2.log)"'
echo XDONE $(( $(date +%s) - S )) s
