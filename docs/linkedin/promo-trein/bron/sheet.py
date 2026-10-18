# python3 sheet.py <frames dir> <out.png> [times…]  — contact sheet (4 per row) of frames f%04d.png at 30 fps, labelled with the time
import sys, glob
from PIL import Image, ImageDraw, ImageFont
src, out = sys.argv[1], sys.argv[2]
times = [float(t) for t in sys.argv[3:]] or [0, 1.5, 3, 4, 5, 6, 7.5, 9]
TW, TH, G, LAB = 405, 506, 14, 46
cols = 4; rows = (len(times) + cols - 1) // cols
sheet = Image.new('RGB', (cols * TW + (cols + 1) * G, rows * (TH + LAB) + (rows + 1) * G), '#1e2226')
font = None
for f in glob.glob('/usr/share/fonts/**/DejaVuSans-Bold.ttf', recursive=True): font = ImageFont.truetype(f, 28)
font = font or ImageFont.load_default()
d = ImageDraw.Draw(sheet)
for i, t in enumerate(times):
    im = Image.open(f'{src}/f{round(t * 30):04d}.png').convert('RGB').resize((TW, TH), Image.LANCZOS)
    x, y = G + (i % cols) * (TW + G), G + (i // cols) * (TH + LAB + G)
    sheet.paste(im, (x, y + LAB))
    d.rectangle([x, y + 6, x + 92, y + LAB - 6], fill='#ffc414')
    d.text((x + 10, y + 9), f'{t:.1f} s', fill='#1e2226', font=font)
sheet.save(out)
print('wrote', out, sheet.size)
