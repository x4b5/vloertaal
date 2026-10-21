# Quick v6 preview (540 × 675) from the frames on disk now, with the v6 grade; audio: argv[1] (default the music).
import sys, os, subprocess, glob
sys.path.insert(0, 'v5')
from PIL import Image
from grade6 import grade
aud = sys.argv[1] if len(sys.argv) > 1 else 'v5/tmp/aud54.m4a'
NB, N = 870, 1620; FADE0 = 495 + NB - 9
A = lambda i: f'v5/fA15/f{i:04d}.png' if i >= 270 else f'v5/fA1/f{i:04d}.png'
B = lambda k: f'v5/fB/f{k:04d}.png'; C = lambda c: f'v5/fC/f{c:04d}.png'
out = 'v5/tmp/prev6'; os.makedirs(out, exist_ok=True)
for f in glob.glob(out + '/*.png'): os.remove(f)
for i in range(N):
    if i < 495: im = Image.open(A(i)).convert('RGB').resize((540, 675))
    elif i < FADE0: im = Image.open(B(i - 495)).convert('RGB').resize((540, 675))
    elif i < 495 + NB:
        c = i - FADE0; im = Image.blend(Image.open(B(i - 495)).convert('RGB').resize((540, 675)), Image.open(C(c)).convert('RGB').resize((540, 675)), (c + 1) / 10)
    else: im = Image.open(C(i - FADE0)).convert('RGB').resize((540, 675))
    grade(im, i).save(f'{out}/f{i:04d}.png', compress_level=1)
subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-framerate', '30', '-i', f'{out}/f%04d.png', '-i', aud, '-map', '0:v', '-map', '1:a', '-c:v', 'libx264', '-crf', '23', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '160k', '-t', '54', '-movflags', '+faststart', 'v5/tmp/preview6.mp4'], check=True)
print('wrote v5/tmp/preview6.mp4')
