# python3 v3/grid.py <out.png> <cols> <tile_w> img... (label = file stem)
import sys, os
from PIL import Image, ImageDraw, ImageFont
out, cols, tw = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]); fs = sys.argv[4:]
ims = [Image.open(f).convert('RGB') for f in fs]; th = round(tw * ims[0].height / ims[0].width)
rows = (len(ims) + cols - 1) // cols; s = Image.new('RGB', (cols * tw, rows * (th + 34)), '#1e2226'); d = ImageDraw.Draw(s)
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
for i, (f, im) in enumerate(zip(fs, ims)):
    x, y = (i % cols) * tw, (i // cols) * (th + 34)
    s.paste(im.resize((tw, th), Image.LANCZOS), (x, y + 34)); d.text((x + 8, y + 6), os.path.splitext(os.path.basename(f))[0], fill='#ffc414', font=font)
s.save(out)
