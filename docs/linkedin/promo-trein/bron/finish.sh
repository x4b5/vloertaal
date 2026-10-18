#!/bin/bash
# v2 finish: assemble 4:5 + 1:1, mux the v2 audio (tmp/aud.m4a: m4.mp3 +100 ms, −14 LUFS, ≤ −1 dBTP, 0.5 s fade), sheet, poster
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
set -e
python3 assemble2.py ${S2:-frames/v3/shot2} frames/v3/shot3 frames/v3/shot4 film-v2-silent.mp4
ffmpeg -y -loglevel error -i film-v2-silent.mp4 -i tmp/aud.m4a -map 0:v -map 1:a -c copy -movflags +faststart -t 30 film-v2.mp4
python3 assemble_sq2.py frames/film2 frames/v3/sq4 tmp/film-v2-1x1-silent.mp4
ffmpeg -y -loglevel error -i tmp/film-v2-1x1-silent.mp4 -i tmp/aud.m4a -map 0:v -map 1:a -c copy -movflags +faststart -t 30 film-v2-1x1.mp4
python3 sheet.py frames/film2 film-v2-sheet.png 1 4.5 7 9.1 11.5 13.9 15.2 18 19.8 21.4 23.5 29.5
python3 -c "from PIL import Image; Image.open('frames/film2/f0899.png').convert('RGB').save('film-v2-poster.png')"
echo FINISHED
