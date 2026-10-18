# python3 v3/assemble3.py — film v3: shot1 v3/frames (0–269) + shot2 v3/frames2 (0–179) + shot3 v3/frames3 (0–179)
# + shot4 v3/frames4 (0–269) = 900 frames, hard cuts at 9.0 / 15.0 / 21.0. Audio: film-v2's master (tmp/aud.m4a).
# 1:1: shots 1–3 are a crop of the 4:5 frames (window y0 per time, keeps captions and end screens inside);
# shot 4 is its own square render (v3/frames4sq). Also: sheet (12 labelled frames) + poster (last frame).
import os, glob, subprocess, sys
from PIL import Image, ImageDraw, ImageFont
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FF = '/usr/bin/ffmpeg'
SRC = [('v3/frames', 270), ('v3/frames2', 180), ('v3/frames3', 180), ('v3/frames4', 270)]
fd, fq = 'v3/film', 'v3/film-sq'
for d in (fd, fq):
    os.makedirs(d, exist_ok=True)
    for f in glob.glob(d + '/*.png'): os.remove(f)
paths = []
for d, n in SRC:
    for i in range(n):
        p = f'{d}/f{i:04d}.png'; assert os.path.exists(p), p; paths.append(p)
assert len(paths) == 900
for i, p in enumerate(paths): os.symlink(os.path.abspath(p), f'{fd}/f{i:04d}.png')
enc = ['-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-r', '30']
subprocess.run([FF, '-y', '-loglevel', 'error', '-framerate', '30', '-i', f'{fd}/f%04d.png', *enc, 'v3/film-v3-silent.mp4'], check=True)
subprocess.run([FF, '-y', '-loglevel', 'error', '-i', 'v3/film-v3-silent.mp4', '-i', 'tmp/aud.m4a', '-map', '0:v', '-map', '1:a', '-c', 'copy', '-movflags', '+faststart', '-t', '30', 'v3/film-v3.mp4'], check=True)
print('wrote film-v3.mp4')
# ---- 1:1
sm = lambda x: x * x * (3 - 2 * x)
cl = lambda x: max(0.0, min(1.0, x))
Y = [(0, 20), (7.6, 20), (8.6, 270), (9.0, 270), (9.35, 20), (13.6, 20), (14.3, 190), (15.0, 190), (15.3, 20), (19.6, 20), (20.2, 60), (21.0, 60)]
def y0(t):
    for (a, ya), (b, yb) in zip(Y, Y[1:]):
        if t <= b: return ya + (yb - ya) * sm(cl((t - a) / (b - a))) if b > a else yb
    return Y[-1][1]
for i in range(630):
    t = i / 30; y = round(y0(t))
    if 269 < i < 271: pass
    Image.open(paths[i]).convert('RGB').crop((0, y, 1080, y + 1080)).save(f'{fq}/f{i:04d}.png', compress_level=1)
for i in range(270):
    p = f'v3/frames4sq/f{i:04d}.png'; assert os.path.exists(p), p
    os.symlink(os.path.abspath(p), f'{fq}/f{630 + i:04d}.png')
subprocess.run([FF, '-y', '-loglevel', 'error', '-framerate', '30', '-i', f'{fq}/f%04d.png', *enc, 'v3/tmp/film-v3-1x1-silent.mp4'], check=True)
subprocess.run([FF, '-y', '-loglevel', 'error', '-i', 'v3/tmp/film-v3-1x1-silent.mp4', '-i', 'tmp/aud.m4a', '-map', '0:v', '-map', '1:a', '-c', 'copy', '-movflags', '+faststart', '-t', '30', 'v3/film-v3-1x1.mp4'], check=True)
print('wrote film-v3-1x1.mp4')
# ---- sheet + poster
F = [(1.0, 'drone over the polder'), (6.2, 'facing 3D Amina'), (7.6, 'behind Amina\'s head'), (8.9, 'hand-off: "Goed zo!"'),
     (10.3, 'facing 3D Jada'), (11.0, 'behind Jada\'s head'), (12.3, 'her thumb taps'), (14.9, '"Dag 7 op rij"'),
     (16.0, 'facing 3D Henk'), (17.4, 'behind Henk\'s head'), (20.9, 'shared with colleagues'), (29.9, 'end card, Bram waves')]
TW, TH, G, LAB = 450, 562, 16, 50
cols, rows = 4, 3
s = Image.new('RGB', (cols * TW + (cols + 1) * G, rows * (TH + LAB) + (rows + 1) * G), '#1e2226'); d = ImageDraw.Draw(s)
fb = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 24); fr = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 21)
for i, (t, lab) in enumerate(F):
    im = Image.open(f'{fd}/f{min(899, round(t * 30)):04d}.png').convert('RGB').resize((TW, TH), Image.LANCZOS)
    x, y = G + (i % cols) * (TW + G), G + (i // cols) * (TH + LAB + G)
    s.paste(im, (x, y + LAB)); d.rectangle([x, y + 8, x + 92, y + LAB - 8], fill='#ffc414'); d.text((x + 8, y + 11), f'{t:.1f} s', fill='#1e2226', font=fb)
    d.text((x + 104, y + 13), lab, fill='#eef1f3', font=fr)
s.save('v3/film-v3-sheet.png')
Image.open(f'{fd}/f0899.png').convert('RGB').save('v3/film-v3-poster.png')
print('sheet + poster done')
