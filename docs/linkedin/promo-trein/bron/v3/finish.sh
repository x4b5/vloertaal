#!/bin/bash
# v3 proof: encode v3/frames (0–9.0 s, 271 frames), mux film-v2's audio slice, sheet
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
set -e
N=$(ls v3/frames/f*.png | wc -l); [ "$N" = 271 ] || { echo "missing frames: $N"; exit 1; }
ffmpeg -y -loglevel error -framerate 30 -i v3/frames/f%04d.png -c:v libx264 -preset slow -crf 15 -pix_fmt yuv420p -r 30 v3/tmp/proof-silent.mp4
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 v3/tmp/proof-silent.mp4)
ffmpeg -y -loglevel error -i v3/tmp/proof-silent.mp4 -i tmp/aud.m4a -map 0:v -map 1:a -c:v copy -af "atrim=0:$DUR,afade=t=out:st=$(python3 -c "print($DUR-0.35)"):d=0.35" -c:a aac -b:a 192k -movflags +faststart -shortest v3/proof-amina.mp4
python3 v3/sheet3.py
echo FINISHED
