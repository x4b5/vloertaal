#!/bin/bash
# Rebuild sfx54.wav, mix54.wav (-14 LUFS, TP<=-1) and mix54.m4a from mix.py
set -e
cd "$(dirname "$0")"
python3 mix.py "$@"
ffmpeg -hide_banner -i mix54_pre.wav -af loudnorm=I=-14:TP=-1.0:LRA=11:print_format=json -f null - 2>&1 | sed -n '/{/,/}/p' > ln1.json
python3 - <<'PY'
import json,subprocess
m=json.load(open('ln1.json'))
af=f"loudnorm=I=-14:TP=-1.0:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true:print_format=json"
r=subprocess.run(['ffmpeg','-hide_banner','-y','-i','mix54_pre.wav','-af',af,'-ar','48000','-ac','2','-c:a','pcm_s16le','mix54.wav'],capture_output=True,text=True)
t=r.stderr; print(t[t.rfind('{'):])
PY
ffmpeg -v error -y -i mix54.wav -c:a aac -b:a 192k -ar 48000 -ac 2 mix54.m4a
for f in sfx54.wav mix54.wav mix54.m4a; do echo "== $f"; ffprobe -v error -show_entries stream=duration_ts,duration -of compact $f; ffmpeg -hide_banner -nostats -i $f -af ebur128=peak=true -f null - 2>&1 | grep -E "^\s+(I:|Peak:)"; done
