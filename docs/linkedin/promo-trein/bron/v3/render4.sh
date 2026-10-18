#!/bin/bash
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
S=$(date +%s)
( node v3/render3.cjs v3/shot4 --from 0 --to 269 --out v3/frames4 > v3/tmp/s4r1.log 2>&1; echo doneA ) &
( node v3/render3.cjs v3/shot4 --from 0 --to 269 --h 1080 --out v3/frames4sq > v3/tmp/s4r2.log 2>&1; echo doneB ) &
wait; echo ALLDONE $(( $(date +%s) - S )) s
