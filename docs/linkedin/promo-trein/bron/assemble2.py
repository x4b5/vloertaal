# python3 assemble.py <s2 dir> <s3 dir> <s4 dir> <out.mp4> [--hold poster.png] [--sq]
# Film = shot1 frames/final f0000–f0269 (0–9 s) + shot2 f0000–f0179 + shot3 f0000–f0179 + shot4 f0000–f0269
# (shot4 frames past its last rendered frame hold that frame, or --hold image). A short dissolve from
# shot 1's last frame (its t = 9.0 screen) into shot 2's first frames (app screen → app screen).
import sys, os, glob, subprocess
from PIL import Image
ROOT = os.path.dirname(os.path.abspath(__file__))
a = sys.argv[1:]
s2, s3, s4, out = a[:4]
hold = a[a.index('--hold') + 1] if '--hold' in a else None
sq = '--sq' in a
fd = os.path.join(ROOT, 'frames', 'film2' + ('-sq' if sq else ''))
os.makedirs(fd, exist_ok=True)
for f in glob.glob(fd + '/*.png'): os.remove(f)
n = 0
def put(src):
    global n
    os.symlink(os.path.abspath(src), f'{fd}/f{n:04d}.png'); n += 1
def putimg(im):
    global n
    im.save(f'{fd}/f{n:04d}.png', compress_level=1); n += 1
s1 = os.path.join(ROOT, 'frames', 'v3', 'shot1')
for i in range(270): put(f'{s1}/f{i:04d}.png')
last1 = Image.open(f'{s1}/f0270.png').convert('RGB')
DIS = 0  # v2: hard cut at 9.0 (no dissolve)
for i in range(180):
    f = f'{s2}/f{i:04d}.png'
    if i < DIS:
        x = (i + 1) / (DIS + 1); x = x * x * (3 - 2 * x)
        putimg(Image.blend(last1, Image.open(f).convert('RGB'), x))
    else: put(f)
for i in range(180): put(f'{s3}/f{i:04d}.png')
r4 = sorted(glob.glob(f'{s4}/f*.png')); last = r4[-1]
for i in range(270):
    f = f'{s4}/f{i:04d}.png'
    if os.path.exists(f) and f != last: put(f)
    else: put(hold or last)
assert n == 900, n
vf = ['-vf', 'crop=1080:1080:0:60'] if sq else []
subprocess.run(['/usr/bin/ffmpeg', '-y', '-loglevel', 'error', '-framerate', '30', '-i', f'{fd}/f%04d.png', *vf,
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-r', '30', out], check=True)
print('wrote', out, n, 'frames')
