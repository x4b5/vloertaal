# proof sheet: 8 labelled frames from v3/frames
from PIL import Image, ImageDraw, ImageFont
F = [(0.0, 'drone over the polder'), (3.0, 'alongside the train'), (5.13, 'through the glass'), (6.25, 'facing 3D Amina'),
     (6.9, 'arc past her side'), (7.5, 'behind her head'), (7.8, 'over the shoulder: thumb tap'), (9.0, 'hand-off: "Goed zo!"')]
TW, TH, G, LAB = 480, 600, 16, 50
cols = 4; rows = 2
s = Image.new('RGB', (cols * TW + (cols + 1) * G, rows * (TH + LAB) + (rows + 1) * G), '#1e2226')
d = ImageDraw.Draw(s)
fb = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 24)
fr = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 22)
for i, (t, lab) in enumerate(F):
    im = Image.open(f'v3/frames/f{round(t * 30):04d}.png').convert('RGB').resize((TW, TH), Image.LANCZOS)
    x, y = G + (i % cols) * (TW + G), G + (i // cols) * (TH + LAB + G)
    s.paste(im, (x, y + LAB))
    d.rectangle([x, y + 8, x + 84, y + LAB - 8], fill='#ffc414'); d.text((x + 8, y + 11), f'{t:.1f} s', fill='#1e2226', font=fb)
    d.text((x + 96, y + 13), lab, fill='#eef1f3', font=fr)
s.save('v3/proof-amina-sheet.png'); print('sheet', s.size)
