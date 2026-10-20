# python3 v5/assemble5.py [previz|final] — the one-shot film v5b (54 s, 1620 frames at 30 fps):
#   film 0–494      shot A (Amina; ends square on her screen)                        A frames 0–494 (270+ at 1.5×)
#   film 495–1364   shot B (29 s: the page turn, Jada, the town, Henk, the dive)      B frames 0–869
#   film 1356–1364  B's dive fades into the end card (C frames 0–8)
#   film 1365–1619  shot C, the end card (v3/shot4, local frames 9–263)
# The A→B seam needs no fade: both show the same screen image at the same pose.
# final: frames are 1.5× (1620 × 2025); 4:5 = Lanczos down to 1080 × 1350; 1:1 = a 1620 × 1620 window
# (y per time) down to 1080 × 1080, the end card from its own square render.
import os, sys, glob, subprocess
from PIL import Image
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MODE = sys.argv[1] if len(sys.argv) > 1 else 'previz'
FF = '/usr/bin/ffmpeg'
N = 1620
NB = 870                     # shot B's frames
FADE0 = 495 + NB - 9         # the dive's last 9 frames fade into the end card
if MODE == 'previz':
    A = lambda i: f'v4/frames1/f{i:04d}.png' if i < 470 else f'v5/pvA/f{i:04d}.png'
    B = lambda k: f'v5/pvB/f{k - k % 2:04d}.png'
    C = lambda c: f'v3/frames4/f{c:04d}.png'
    CSQ = lambda c: f'v3/frames4sq/f{c:04d}.png'
else:
    # v5b: 0–59 v4's render (the train far off), 60–269 re-rendered with the passengers, 270+ at 1.5× with depth of field
    A = lambda i: f'v5/fA15/f{i:04d}.png' if i >= 270 else f'v5/fA1/f{i:04d}.png' if i >= 60 else f'v5/fA/f{i:04d}.png'
    B = lambda k: f'v5/fB/f{k:04d}.png'
    C = lambda c: f'v5/fC/f{c:04d}.png'
    CSQ = lambda c: f'v5/fCsq/f{c:04d}.png'
out, outsq = f'v5/film-{MODE}', f'v5/film-{MODE}-sq'
for d in (out, outsq):
    os.makedirs(d, exist_ok=True)
    for f in glob.glob(d + '/*.png'): os.remove(f)
FW, FH = 1080, 1350
import numpy as np
_vig = {}
def grade(im, i):
    """v5 grade, the same on every frame of every shot: a touch more saturation and contrast, a little
    warmth, a soft vignette and fine moving grain (hides banding in the sky)."""
    a = np.asarray(im).astype(np.float32) / 255
    h, w = a.shape[:2]
    if (w, h) not in _vig:
        yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
        q = np.sqrt(((xx / w - 0.5) * 0.85) ** 2 + (yy / h - 0.5) ** 2)
        t = np.clip((q - 0.32) / (0.78 - 0.32), 0, 1); t = t * t * (3 - 2 * t)
        _vig[(w, h)] = (1 - 0.12 * t)[..., None]
    l = (a @ np.array([0.2126, 0.7152, 0.0722], np.float32))[..., None]
    a = l + (a - l) * 1.07
    a = (a - 0.5) * 1.03 + 0.5
    a = a * np.array([1.012, 1.0, 0.985], np.float32) * _vig[(w, h)]
    rng = np.random.default_rng(1000 + i)
    a = a + (rng.random((h, w, 1), np.float32) - 0.5) * 0.018
    return Image.fromarray(np.clip(a * 255 + 0.5, 0, 255).astype(np.uint8))
def load(p):
    im = Image.open(p).convert('RGB')
    return im
def src(i):
    """(image path, end-card path or None, blend) for film frame i."""
    if i < 495: return A(i), None, 0
    k = i - 495
    if i < FADE0: return B(k), None, 0
    if i < 495 + NB:
        c = i - FADE0
        return B(k), C(c), (c + 1) / 10
    return C(i - FADE0), None, 0
# 1:1 window (in 1350-high units): y0 per film time, keeps the captions and the screens inside
sm = lambda x: x * x * (3 - 2 * x)
cl = lambda x: max(0.0, min(1.0, x))
# shot B's keys are on its own 19-s clock u (as in v5): mapped to film time through the inverse of its WARP
WARP = [[0, 0], [0.55, 0.55], [3.6, 2.6], [10.8, 7.3], [17.95, 11.45], [21.85, 13.85], [26.65, 17.15], [29.0, 19.0]]
def unwarp(u):
    for (w0, u0), (w1, u1) in zip(WARP, WARP[1:]):
        if u <= u1: return w0 + (w1 - w0) * (u - u0) / (u1 - u0)
    return WARP[-1][0]
fB = lambda u: 16.5 + unwarp(u)
Y = [(0, 20), (13.4, 20), (15.0, 170), (16.5, 170), (fB(0.5), 135), (fB(3.0), 135), (fB(4.5), 20), (fB(7.5), 20), (fB(8.5), 135),
     (fB(17.5), 135), (fB(18.5), 135)]
def y0(t):
    for (a, ya), (b, yb) in zip(Y, Y[1:]):
        if t <= b: return ya + (yb - ya) * sm(cl((t - a) / (b - a))) if b > a else yb
    return Y[-1][1]
for i in range(N):
    p, c, w = src(i)
    im = load(p)
    s = im.width / FW                      # 1.0 (previz) or 1.5 (final)
    if c:
        imc = load(c)
        if imc.size != im.size: imc = imc.resize(im.size, Image.LANCZOS)
        im = Image.blend(im, imc, w)
    grade(im.resize((FW, FH), Image.LANCZOS), i).save(f'{out}/f{i:04d}.png', compress_level=1)
    if i < FADE0:
        y = round(y0(i / 30) * s)
        grade(im.crop((0, y, im.width, y + im.width)).resize((1080, 1080), Image.LANCZOS), i).save(f'{outsq}/f{i:04d}.png', compress_level=1)
    else:
        csq = load(CSQ(i - FADE0))
        if i < 495 + NB:
            y = round(y0(i / 30) * s)
            b = im.crop((0, y, im.width, y + im.width)).resize(csq.size, Image.LANCZOS)
            csq = Image.blend(b.convert('RGB'), csq, (i - FADE0 + 1) / 10)
        grade(csq.resize((1080, 1080), Image.LANCZOS), i).save(f'{outsq}/f{i:04d}.png', compress_level=1)
enc = ['-c:v', 'libx264', '-preset', 'slow', '-crf', '14' if MODE == 'final' else '20', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-r', '30']
aud = 'v5/tmp/aud54.m4a'
for d, name in ((out, f'film-v5-{MODE}'), (outsq, f'film-v5-{MODE}-1x1')):
    subprocess.run([FF, '-y', '-loglevel', 'error', '-framerate', '30', '-i', f'{d}/f%04d.png', *enc, f'v5/tmp/{name}-silent.mp4'], check=True)
    subprocess.run([FF, '-y', '-loglevel', 'error', '-i', f'v5/tmp/{name}-silent.mp4', '-i', aud, '-map', '0:v', '-map', '1:a', '-c', 'copy', '-movflags', '+faststart', '-t', '54', f'v5/{name}.mp4'], check=True)
    print('wrote', f'v5/{name}.mp4')
# ---- overview sheet (12 labelled frames) + poster (last frame)
from PIL import ImageDraw, ImageFont
F = [(1.5, 'drone over the polder'), (10.0, 'Amina looks up and smiles'), (15.9, 'into her screen'), (round(fB(0.3), 1), 'the page turns: Jada'),
     (round(fB(2.6), 1), '"Dag 7 op rij"'), (round(fB(5.5), 1), 'the terrace'), (round(fB(9.0), 1), 'up as a drone'), (round(fB(11.1), 1), 'the business park'),
     (round(fB(12.7), 1), 'through the loading door'), (round(fB(14.5), 1), 'Henk in the canteen'), (round(fB(17.5), 1), 'shared with colleagues'), (53.9, 'end card, Bram waves')]
TW, TH, G, LAB = 450, 562, 16, 50
cols, rows = 4, 3
s = Image.new('RGB', (cols * TW + (cols + 1) * G, rows * (TH + LAB) + (rows + 1) * G), '#1e2226'); d = ImageDraw.Draw(s)
fb = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 24); fr = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 21)
for k, (t, lab) in enumerate(F):
    im = Image.open(f'{out}/f{min(N - 1, round(t * 30)):04d}.png').convert('RGB').resize((TW, TH), Image.LANCZOS)
    x, y = G + (k % cols) * (TW + G), G + (k // cols) * (TH + LAB + G)
    s.paste(im, (x, y + LAB)); d.rectangle([x, y + 8, x + 92, y + LAB - 8], fill='#ffc414'); d.text((x + 8, y + 11), f'{t:.1f} s', fill='#1e2226', font=fb)
    d.text((x + 104, y + 13), lab, fill='#eef1f3', font=fr)
s.save(f'v5/film-v5-{MODE}-sheet.png')
Image.open(f'{out}/f{N - 1:04d}.png').convert('RGB').save(f'v5/film-v5-{MODE}-poster.png')
print('sheet + poster done')
