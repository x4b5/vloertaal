# python3 v4/assemble4.py — film v4 (42 s): shot1 v4/frames1 (0–479) + shot2 v4/frames2 (0–239) + shot3 v4/frames3 (0–269)
# + shot4 v3/frames4 (0–269, unchanged) = 1260 frames, hard cuts at 16.0 / 24.0 / 33.0.
# Audio: v4/tmp/aud42.wav (m4 with one extra 12-s cycle, +100 ms, −14 LUFS).
# 1:1: shots 1–3 are a crop of the 4:5 frames (window y0 per time); shot 4 is its own square render (v3/frames4sq).
import os, glob, subprocess
from PIL import Image, ImageDraw, ImageFont
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FF = '/usr/bin/ffmpeg'
SRC = [('v4/frames1', 480), ('v4/frames2', 240), ('v4/frames3', 270), ('v3/frames4', 270)]
N = sum(n for _, n in SRC); assert N == 1260
fd, fq = 'v4/film', 'v4/film-sq'
for d in (fd, fq):
    os.makedirs(d, exist_ok=True)
    for f in glob.glob(d + '/*.png'): os.remove(f)
paths = []
for d, n in SRC:
    for i in range(n):
        p = f'{d}/f{i:04d}.png'; assert os.path.exists(p), p; paths.append(p)
for i, p in enumerate(paths): os.symlink(os.path.abspath(p), f'{fd}/f{i:04d}.png')
subprocess.run([FF, '-y', '-loglevel', 'error', '-i', 'v4/tmp/aud42.wav', '-c:a', 'aac', '-b:a', '192k', 'v4/tmp/aud42.m4a'], check=True)
enc = ['-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-r', '30']
def mux(silent, out):
    subprocess.run([FF, '-y', '-loglevel', 'error', '-i', silent, '-i', 'v4/tmp/aud42.m4a', '-map', '0:v', '-map', '1:a', '-c', 'copy', '-movflags', '+faststart', '-t', '42', out], check=True)
    print('wrote', out)
subprocess.run([FF, '-y', '-loglevel', 'error', '-framerate', '30', '-i', f'{fd}/f%04d.png', *enc, 'v4/film-v4-silent.mp4'], check=True)
mux('v4/film-v4-silent.mp4', 'v4/film-v4.mp4')
# ---- 1:1
sm = lambda x: x * x * (3 - 2 * x)
cl = lambda x: max(0.0, min(1.0, x))
Y = [(0, 20), (13.4, 20), (15.0, 270), (16.0, 270), (16.35, 20), (22.1, 20), (23.05, 190), (24.0, 190), (24.3, 20),
     (30.9, 20), (31.8, 60), (33.0, 60)]
def y0(t):
    for (a, ya), (b, yb) in zip(Y, Y[1:]):
        if t <= b: return ya + (yb - ya) * sm(cl((t - a) / (b - a))) if b > a else yb
    return Y[-1][1]
for i in range(990):
    y = round(y0(i / 30))
    Image.open(paths[i]).convert('RGB').crop((0, y, 1080, y + 1080)).save(f'{fq}/f{i:04d}.png', compress_level=1)
for i in range(270):
    p = f'v3/frames4sq/f{i:04d}.png'; assert os.path.exists(p), p
    os.symlink(os.path.abspath(p), f'{fq}/f{990 + i:04d}.png')
subprocess.run([FF, '-y', '-loglevel', 'error', '-framerate', '30', '-i', f'{fq}/f%04d.png', *enc, 'v4/tmp/film-v4-1x1-silent.mp4'], check=True)
mux('v4/tmp/film-v4-1x1-silent.mp4', 'v4/film-v4-1x1.mp4')
# ---- sheet + poster
F = [(1.5, 'drone over the polder'), (6.0, 'through the window'), (8.6, 'facing 3D Amina'), (10.0, 'she looks up and smiles'),
     (13.3, 'behind Amina\'s head'), (15.9, '"Goed zo!"'), (18.0, 'facing 3D Jada'), (23.9, '"Dag 7 op rij"'),
     (25.8, 'facing 3D Henk'), (28.6, 'behind Henk\'s head'), (32.9, 'shared with colleagues'), (41.9, 'end card, Bram waves')]
TW, TH, G, LAB = 450, 562, 16, 50
cols, rows = 4, 3
s = Image.new('RGB', (cols * TW + (cols + 1) * G, rows * (TH + LAB) + (rows + 1) * G), '#1e2226'); d = ImageDraw.Draw(s)
fb = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 24); fr = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 21)
for i, (t, lab) in enumerate(F):
    im = Image.open(f'{fd}/f{min(N - 1, round(t * 30)):04d}.png').convert('RGB').resize((TW, TH), Image.LANCZOS)
    x, y = G + (i % cols) * (TW + G), G + (i // cols) * (TH + LAB + G)
    s.paste(im, (x, y + LAB)); d.rectangle([x, y + 8, x + 92, y + LAB - 8], fill='#ffc414'); d.text((x + 8, y + 11), f'{t:.1f} s', fill='#1e2226', font=fb)
    d.text((x + 104, y + 13), lab, fill='#eef1f3', font=fr)
s.save('v4/film-v4-sheet.png')
Image.open(f'{fd}/f{N - 1:04d}.png').convert('RGB').save('v4/film-v4-poster.png')
print('sheet + poster done')
