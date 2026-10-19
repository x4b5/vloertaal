#!/bin/bash
# the rest of shot B (chunks 210–569) on 4 workers, after the first run's chunks 0–209
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
S=$(date +%s)
for a in $(seq 210 30 569); do echo "B fB $a $((a+29 > 569 ? 569 : a+29)) 1.5"; done | xargs -P 4 -L 1 bash -c 'node v5/render5.cjs v5/shot$0 --dpr $4 --q hi --from $2 --to $3 --out v5/$1 > v5/tmp/r_$1_$2.log 2>&1; echo "done $1 $2 $3 $(tail -1 v5/tmp/r_$1_$2.log)"'
echo B2DONE $(( $(date +%s) - S )) s
