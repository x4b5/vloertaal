# python3 muziek42.py [in.mp3] [out.wav] — the 42-s soundtrack from muziek-m4.mp3 (30 s, 120 BPM).
# The arrangement repeats every 12 s, so one extra cycle is spliced in: play 0–24 s, then continue from 12 s
# (seam 25 ms before the downbeat at 24 ↔ 12, 20 ms equal-power crossfade). Then +100 ms, −14 LUFS, 0.6 s fade.
import os, subprocess, sys, tempfile, wave
import numpy as np
here = os.path.dirname(os.path.abspath(__file__))
src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(here, '..', 'muziek-m4.mp3')
out = sys.argv[2] if len(sys.argv) > 2 else os.path.join(here, 'aud42.wav')
tmp = tempfile.mkdtemp()
subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', src, '-ac', '2', '-ar', '48000', f'{tmp}/m4.wav'], check=True)
w = wave.open(f'{tmp}/m4.wav'); sr = w.getframerate()
x = np.frombuffer(w.readframes(w.getnframes()), np.int16).reshape(-1, 2).astype(np.float32) / 32768
m = x.mean(1); A, B = 24 * sr, 12 * sr
# fine alignment (±15 ms) on the 120 ms around the seam
best = max(((m[A - 2880:A + 2880] @ m[B + d - 2880:B + d + 2880]) / np.sqrt((m[A - 2880:A + 2880] ** 2).sum() * (m[B + d - 2880:B + d + 2880] ** 2).sum()), d)
           for d in range(-720, 721, 4))
d = best[1]
S = A - int(0.025 * sr); n = int(0.020 * sr); t = np.linspace(0, 1, n)[:, None]
head, tail = x[:S + n], x[S - A + B + d:]
y = np.concatenate([head[:S], head[S:S + n] * np.cos(t * np.pi / 2) + tail[:n] * np.sin(t * np.pi / 2), tail[n:]])
o = wave.open(f'{tmp}/m42.wav', 'wb'); o.setnchannels(2); o.setsampwidth(2); o.setframerate(sr)
o.writeframes((np.clip(y, -1, 1) * 32767).astype(np.int16).tobytes()); o.close()
subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', f'{tmp}/m42.wav', '-af',
                'adelay=100|100,loudnorm=I=-14:TP=-1.5:LRA=11:linear=true,volume=0.6dB,afade=t=out:st=41.4:d=0.6',
                '-t', '42', '-ar', '48000', out], check=True)
print(f'seam offset {d} samples, {len(y) / sr:.2f} s → {out}')
