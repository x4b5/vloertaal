#!/bin/bash
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
S=$(date +%s)
( node v3/render3.cjs v3/shot2 --from 0 --to 65 --out v3/frames2 > v3/tmp/s2r1.log 2>&1; echo doneA ) &
( node v3/render3.cjs v3/shot2 --from 66 --to 179 --out v3/frames2 > v3/tmp/s2r2.log 2>&1; echo doneB ) &
wait; echo ALLDONE $(( $(date +%s) - S )) s
