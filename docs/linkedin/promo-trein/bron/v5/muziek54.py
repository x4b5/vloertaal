# Run in a folder with m4-42.wav (from bron/v4/muziek42.py, before loudness): writes m4-54.wav; then the same
# ffmpeg chain as muziek42.py (adelay 100 ms, loudnorm −14 LUFS, fade from 53.4 s), cut at 54 s.
# m4 → 54 s: two extra 12-s cycles (0–24, 12–24, 12–30), each seam 25 ms before a downbeat, 20 ms crossfade
import numpy as np, wave
w = wave.open('m4-42.wav'); sr = w.getframerate(); x = np.frombuffer(w.readframes(w.getnframes()), np.int16).reshape(-1, 2).astype(np.float32) / 32768
m = x.mean(1); A, B = 36 * sr, 24 * sr          # in m4-42: 36 s = m4's 24 s, 24 s = m4's 12 s
best = max(((m[A - 2880:A + 2880] @ m[B + d - 2880:B + d + 2880]) / np.sqrt((m[A - 2880:A + 2880] ** 2).sum() * (m[B + d - 2880:B + d + 2880] ** 2).sum()), d) for d in range(-720, 721, 4))
d = best[1]; print('offset', d)
S = A - int(0.025 * sr); n = int(0.020 * sr); t = np.linspace(0, 1, n)[:, None]
head, tail = x[:S + n], x[S - A + B + d:]
y = np.concatenate([head[:S], head[S:S + n] * np.cos(t * np.pi / 2) + tail[:n] * np.sin(t * np.pi / 2), tail[n:]])
print('len', len(y) / sr)
o = wave.open('m4-54.wav', 'wb'); o.setnchannels(2); o.setsampwidth(2); o.setframerate(sr); o.writeframes((np.clip(y, -1, 1) * 32767).astype(np.int16).tobytes()); o.close()
