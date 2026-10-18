#!/bin/bash
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
S=$(date +%s)
R="node v3/render3.cjs v3/shot1 --out v3/frames"
( $R --from 60 --to 61 > v3/tmp/g1a.log 2>&1; $R --from 107 --to 123 > v3/tmp/g1b.log 2>&1; echo doneA ) &
( $R --from 158 --to 176 > v3/tmp/g2.log 2>&1; echo doneB ) &
( $R --from 177 --to 185 > v3/tmp/g3a.log 2>&1; $R --from 223 --to 232 > v3/tmp/g3b.log 2>&1; echo doneC ) &
( $R --from 233 --to 270 > v3/tmp/g4.log 2>&1; echo doneD ) &
wait
echo ALLDONE $(( $(date +%s) - S )) s
