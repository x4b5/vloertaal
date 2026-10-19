#!/bin/bash
# v5 final, shot B (1.5×, soft shadows) in 30-frame chunks on 3 workers, plus shot A's dive frames (470–494, 1×,
# as the v4 frames 0–469 they follow).
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
S=$(date +%s)
{
  for a in $(seq 0 30 569); do echo "B fB $a $((a+29 > 569 ? 569 : a+29)) 1.5"; done
} | xargs -P 3 -L 1 bash -c 'Q=""; [ "$4" = "1.5" ] && Q="--q hi"; node v5/render5.cjs v5/shot$0 --dpr $4 $Q --from $2 --to $3 --out v5/$1 > v5/tmp/r_$1_$2.log 2>&1; echo "done $1 $2 $3 $(tail -1 v5/tmp/r_$1_$2.log)"'
echo BDONE $(( $(date +%s) - S )) s
