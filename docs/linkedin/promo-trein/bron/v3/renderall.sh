#!/bin/bash
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
S=$(date +%s)
( node v3/render3.cjs v3/shot1 --from 0 --to 61 --out v3/frames > v3/tmp/r1.log 2>&1; echo doneA ) &
( node v3/render3.cjs v3/shot1 --from 62 --to 123 --out v3/frames > v3/tmp/r2.log 2>&1; echo doneB ) &
( node v3/render3.cjs v3/shot1 --from 124 --to 185 --out v3/frames > v3/tmp/r3.log 2>&1; echo doneC ) &
( node v3/render3.cjs v3/shot1 --from 186 --to 270 --out v3/frames > v3/tmp/r4.log 2>&1; echo doneD ) &
wait
echo ALLDONE $(( $(date +%s) - S )) s
