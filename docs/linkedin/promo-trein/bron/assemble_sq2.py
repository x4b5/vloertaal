# python3 assemble_sq.py <film frames dir (4:5, from assemble.py)> <shot4 square dir> <out.mp4> [--hold sq-poster.png]
# 1:1 (1080×1080): shots 1–3 are a reframed crop of the 4:5 frames (window y0 = 60 keeps the captions inside,
# gliding down to y0 = 270 for shot 1's phone ending and back up by 9.4 s); shot 4 is a square re-render.
import sys, os, glob, subprocess
from PIL import Image
a = sys.argv[1:]
src, s4, out = a[:3]
hold = a[a.index('--hold') + 1] if '--hold' in a else None
fd = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'frames', 'film2-sq')
os.makedirs(fd, exist_ok=True)
for f in glob.glob(fd + '/*.png'): os.remove(f)
sm = lambda x: x * x * (3 - 2 * x)
cl = lambda x: max(0.0, min(1.0, x))
def y0(t):
    if t < 7.6: return 20
    if t < 9.0: return 20 + 250 * sm(cl((t - 7.6) / 1.0))
    return 270 - 250 * sm(cl((t - 9.0) / 0.4))
for i in range(630):
    Image.open(f'{src}/f{i:04d}.png').convert('RGB').crop((0, round(y0(i / 30)), 1080, round(y0(i / 30)) + 1080)).save(f'{fd}/f{i:04d}.png', compress_level=1)
r4 = sorted(glob.glob(f'{s4}/f*.png')); last = r4[-1]
for i in range(270):
    f = f'{s4}/f{i:04d}.png'
    os.symlink(os.path.abspath(f if os.path.exists(f) and f != last else (hold or last)), f'{fd}/f{630 + i:04d}.png')
subprocess.run(['/usr/bin/ffmpeg', '-y', '-loglevel', 'error', '-framerate', '30', '-i', f'{fd}/f%04d.png',
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-r', '30', out], check=True)
print('wrote', out)
