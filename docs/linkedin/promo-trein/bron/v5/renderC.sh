#!/bin/bash
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
S=$(date +%s)
( node v5/render5.cjs v5/shotC --dpr 1.5 --q hi --h 1350 --from 0 --to 203 --out v5/fC > v5/tmp/rC.log 2>&1 ) &
( node v5/render5.cjs v5/shotC --dpr 1.5 --q hi --h 1080 --from 0 --to 203 --out v5/fCsq > v5/tmp/rCsq.log 2>&1 ) &
wait
echo CDONE $(( $(date +%s) - S )) s
