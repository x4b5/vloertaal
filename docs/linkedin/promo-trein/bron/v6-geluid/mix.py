#!/usr/bin/env python3
"""Build the SFX stem (sfx54.wav) and the pre-loudnorm mix (mix54_pre.wav).

Levels are set relative to the music: ambiences by RMS (target dB below the
local 3 s music RMS), one-shots by peak (target dB below the local +-1 s music
sample peak).  Cue times follow the current video (see sfx-notes.md).
"""
import json, os, wave, sys
import numpy as np
from scipy import signal

SR = 48000
N = 54 * SR
D = os.path.dirname(os.path.abspath(__file__))   # (made in a scratch folder; the wav/ files are made from raw/)
MUSIC = os.environ.get('MUSIC', os.path.join(D, 'aud54.wav'))   # the 54-s music master (bron/v5/muziek54.py)


def rd(p):
    w = wave.open(p)
    a = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).reshape(-1, 2).astype(np.float64) / 32768
    return a


def wr(p, a):
    a = np.clip(a, -1, 1)
    w = wave.open(p, 'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((a * 32767).round().astype(np.int16).tobytes()); w.close()


def db(x):
    return 20 * np.log10(max(x, 1e-12))


def filt(a, hp=None, lp=None):
    if hp:
        sos = signal.butter(2, hp, 'highpass', fs=SR, output='sos'); a = signal.sosfiltfilt(sos, a, axis=0)
    if lp:
        sos = signal.butter(2, lp, 'lowpass', fs=SR, output='sos'); a = signal.sosfiltfilt(sos, a, axis=0)
    return a


def loop_to(a, n, xf=0.5):
    """Tile a (loopable) clip to n samples with short equal-power crossfades."""
    if len(a) >= n:
        return a[:n]
    x = int(xf * SR)
    out = a.copy()
    t = np.linspace(0, np.pi / 2, x)[:, None]
    while len(out) < n:
        out = np.concatenate([out[:-x], out[-x:] * np.cos(t) + a[:x] * np.sin(t), a[x:]])
    return out[:n]


def fades(a, fi, fo):
    a = a.copy(); n = len(a)
    fi = min(int(fi * SR), n); fo = min(int(fo * SR), n)
    if fi: a[:fi] *= np.sin(np.linspace(0, np.pi / 2, fi))[:, None] ** 2
    if fo: a[-fo:] *= np.cos(np.linspace(0, np.pi / 2, fo))[:, None] ** 2
    return a


music = rd(MUSIC)
music = np.concatenate([music, np.zeros((N - len(music), 2))])[:N]


def music_rms(t0, t1):
    s = music[int(max(0, t0) * SR):int(min(54, t1) * SR)]
    return db(np.sqrt((s ** 2).mean()))


def music_peak(t0, t1):
    s = music[int(max(0, t0) * SR):int(min(54, t1) * SR)]
    return db(np.abs(s).max())


# name, clip, clip_in, clip_out(None=end), start(film s), mode, target dB, hp, lp, fade_in, fade_out, loop_len, pan, speed
CUES = [
    # --- 0-6 s polder
    dict(name='polder wind + birds', clip='polder_L', a=0.0, b=None, t=0.0, mode='amb', tgt=-16, hp=80, lp=None, fi=0.6, fo=1.2, dur=6.6),
    dict(name='train pass-by', clip='train_pass_L', a=0.0, b=None, t=3.13, mode='peak', tgt=-8, hp=35, lp=None, fi=0.5, fo=1.6),
    # --- 6-16 s train interior
    dict(name='train interior', clip='train_int_L', a=0.0, b=None, t=5.0, mode='amb', tgt=-17, hp=40, lp=6000, fi=1.5, fo=0.8, dur=11.8, loop=True),
    dict(name='phone tap (Amina)', clip='tap', a=0.0, b=0.20, t=14.045, mode='peak', tgt=-11, hp=150, lp=None, fi=0.0, fo=0.06),
    dict(name='"Goed zo" chime', clip='ping_a', a=0.0, b=None, t=14.28, mode='peak', tgt=-9, hp=200, lp=None, fi=0.0, fo=0.3, duck=(14.25, 14.65, -3)),
    # --- 16-17 s swipe
    dict(name='screen swipe', clip='swipe', a=0.0, b=1.2, t=16.52, mode='peak', tgt=-9, hp=150, lp=None, fi=0.02, fo=0.5),
    # --- 16.5-27 s cafe
    dict(name='cafe terrace', clip='cafe_L', a=0.0, b=None, t=16.55, mode='amb', tgt=-16, hp=100, lp=3500, fi=0.7, fo=1.0, dur=11.45, loop=True),
    dict(name='phone tap (Jada)', clip='tap', a=0.0, b=0.20, t=17.795, mode='peak', tgt=-11, hp=150, lp=None, fi=0.0, fo=0.06),
    dict(name='"Goed zo" chime (cafe, softer)', clip='ping_a', a=0.0, b=None, t=18.38, mode='peak', tgt=-11, hp=200, lp=None, fi=0.0, fo=0.3, duck=(18.35, 18.75, -2)),
    dict(name='streak sparkle', clip='sparkle_a', a=0.0, b=1.4, t=19.45, mode='peak', tgt=-9, hp=500, lp=None, fi=0.0, fo=0.5, duck=(19.42, 19.85, -3)),
    dict(name='bicycle bell', clip='bell', a=0.0, b=None, t=22.0, mode='peak', tgt=-13, hp=300, lp=7000, fi=0.0, fo=0.3, pan=0.35),
    # --- 27-33 s drone rise
    dict(name='rising whoosh', clip='rise_L', a=0.0, b=None, t=26.6, mode='peak', tgt=-9, hp=60, lp=None, fi=0.6, fo=1.2),
    dict(name='high-altitude wind', clip='highwind_L', a=0.0, b=None, t=27.7, mode='amb', tgt=-15, hp=50, lp=None, fi=1.0, fo=1.5, dur=7.6, loop=True),
    # --- 33-38.5 s business park / warehouse
    dict(name='truck reversing beeper (distant)', clip='beeper_L', a=0.0, b=2.3, t=33.2, mode='peak', tgt=-17, hp=400, lp=2500, fi=0.05, fo=0.5, pan=-0.4),
    dict(name='warehouse hall air/hum', clip='hall_L', a=0.0, b=None, t=34.6, mode='amb', tgt=-15, hp=40, lp=None, fi=0.8, fo=0.8, dur=4.2, loop=True),
    dict(name='forklift electric whine', clip='forklift_L', a=0.05, b=2.7, t=35.8, mode='peak', tgt=-14, hp=120, lp=7000, fi=0.35, fo=0.6, pan=0.3),
    dict(name='glass wall shimmer', clip='glass', a=0.0, b=None, t=37.4, mode='peak', tgt=-11, hp=1000, lp=None, fi=0.0, fo=0.35),
    # --- 38.5-45.5 s canteen
    dict(name='canteen murmur', clip='canteen_L', a=0.0, b=None, t=38.3, mode='amb', tgt=-17, hp=120, lp=3500, fi=0.8, fo=0.8, dur=7.5, loop=True),
    dict(name='trackpad click', clip='trackpad', a=1.25, b=1.45, t=43.2, mode='peak', tgt=-11, hp=200, lp=None, fi=0.0, fo=0.05),
    dict(name='notification ping', clip='chime_b', a=0.0, b=1.4, t=43.55, mode='peak', tgt=-9, hp=200, lp=None, fi=0.0, fo=0.4, duck=(43.52, 43.95, -3)),
    # --- 45.5-54 s end card
    dict(name='title stamp thud', clip='stamp_a', a=0.0, b=None, t=45.55, mode='peak', tgt=-6, hp=40, lp=3000, fi=0.0, fo=0.3),
    dict(name='tick 1 (Gratis)', clip='tick', a=0.0, b=0.25, t=46.30, mode='peak', tgt=-11, hp=300, lp=None, fi=0.0, fo=0.1, speed=1.0),
    dict(name='tick 2 (Geen account)', clip='tick', a=0.0, b=0.25, t=46.80, mode='peak', tgt=-11, hp=300, lp=None, fi=0.0, fo=0.1, speed=1.06),
    dict(name='tick 3 (Geen reclame)', clip='tick', a=0.0, b=0.25, t=47.30, mode='peak', tgt=-11, hp=300, lp=None, fi=0.0, fo=0.1, speed=1.12),
    dict(name='light whoosh (wave / url sign)', clip='wave', a=0.0, b=1.2, t=47.44, mode='peak', tgt=-13, hp=150, lp=None, fi=0.0, fo=0.5),
]

if len(sys.argv) > 1:  # optional JSON with {"name": start_time} overrides
    over = json.load(open(sys.argv[1]))
    for c in CUES:
        if c['name'] in over:
            c['t'] = over[c['name']]

sfx = np.zeros((N, 2))
duck = np.zeros(N)  # dB
log = []
for c in CUES:
    a = rd(f"{D}/wav/{c['clip']}.wav")
    i0 = int(c['a'] * SR); i1 = len(a) if c['b'] is None else int(c['b'] * SR)
    a = a[i0:i1]
    if c.get('speed', 1.0) != 1.0:  # pitch/speed up by resampling
        a = signal.resample_poly(a, 100, int(round(100 * c['speed'])), axis=0)
    if c.get('dur'):
        n = int(c['dur'] * SR)
        a = loop_to(a, n) if c.get('loop') or len(a) < n else a[:n]
    a = filt(a, c['hp'], c['lp'])
    a = fades(a, c['fi'], c['fo'])
    if c.get('pan'):
        p = c['pan']; a = a * np.array([np.sqrt((1 - p) / 2) * np.sqrt(2), np.sqrt((1 + p) / 2) * np.sqrt(2)])
    t0 = c['t']; t1 = t0 + len(a) / SR
    if c['mode'] == 'amb':
        ref = music_rms(t0, t1)
        cur = db(np.sqrt((a ** 2).mean()))
    else:
        ref = music_peak(t0 - 1, t0 + 1)
        cur = db(np.abs(a).max())
    g = ref + c['tgt'] - cur
    a = a * 10 ** (g / 20)
    s = int(round(t0 * SR)); e = min(N, s + len(a))
    sfx[s:e] += a[:e - s]
    if c.get('duck'):
        d0, d1, dd = c['duck']; r = int(0.06 * SR)
        k0, k1 = int(d0 * SR), int(d1 * SR)
        env = np.zeros(N); env[k0:k1] = 1
        ramp = np.ones(r) / r
        env = np.convolve(env, ramp, 'same')
        duck = np.minimum(duck, env * dd)
    log.append(dict(name=c['name'], clip=c['clip'], start=round(t0, 3), end=round(min(t1, 54), 3),
                     mode=c['mode'], target_db_vs_music=c['tgt'], gain_db=round(g, 1),
                     ref_music_db=round(ref, 1), out_level_db=round(ref + c['tgt'], 1)))

music_d = music * (10 ** (duck / 20))[:, None]
mix = music_d + sfx
print('sfx peak', round(db(np.abs(sfx).max()), 2), 'mix peak', round(db(np.abs(mix).max()), 2))
wr(f'{D}/sfx54.wav', sfx)
wr(f'{D}/mix54_pre.wav', mix)
np.save(f'{D}/duck.npy', duck)
json.dump(log, open(f'{D}/cues.json', 'w'), indent=1)
for l in log:
    print(f"{l['start']:6.2f}-{l['end']:6.2f} {l['name']:34s} {l['clip']:12s} {l['mode']:4s} tgt {l['target_db_vs_music']:+d} -> gain {l['gain_db']:+.1f} dB")
