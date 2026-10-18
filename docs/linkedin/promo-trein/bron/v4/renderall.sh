#!/bin/bash
# v4: render shot1 (0–479), shot2 (0–239), shot3 (0–269) in 40-frame chunks on 4 workers
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
S=$(date +%s)
{
  for a in $(seq 0 40 479); do echo "1 $a $((a+39))"; done
  for a in $(seq 0 40 239); do echo "2 $a $((a+39 > 239 ? 239 : a+39))"; done
  for a in $(seq 0 40 269); do echo "3 $a $((a+39 > 269 ? 269 : a+39))"; done
} | xargs -P 4 -L 1 bash -c 'node v3/render3.cjs v4/shot$0 --from $1 --to $2 --out v4/frames$0 > v4/tmp/r$0_$1.log 2>&1; echo "done shot$0 $1 $2 $(tail -1 v4/tmp/r$0_$1.log)"'
echo ALLDONE $(( $(date +%s) - S )) s
