#!/bin/bash
# turnaround sheets for all four (full body + close-ups), like Amina's
cd /tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/promo3d
for w in ${@:-amina jada henk bram}; do
  OPTS='{"labels":["front","3/4","side","back"],"dist":5.3,"lookY":0.92,"camY":1.05}' node v3/turnshot.cjs $w v3/tmp/tf_$w.png 0 35 90 180 > /dev/null 2>&1
  OPTS='{"labels":["","","",""],"dist":1.55,"lookY":1.5,"camY":1.6}' node v3/turnshot.cjs $w v3/tmp/th_$w.png 0 35 90 180 > /dev/null 2>&1
  python3 - $w <<'PY'
import sys
from PIL import Image, ImageDraw, ImageFont
w=sys.argv[1]; idx={'amina':0,'jada':1,'henk':2,'bram':3}[w]
a=Image.open(f'v3/tmp/tf_{w}.png'); b=Image.open(f'v3/tmp/th_{w}.png').crop((0,170,2560,960))
ref=Image.open('v3/ref-chars.png').crop((40+idx*390,20,340+idx*390,470))
W=a.width; H=100+a.height+b.height+70
s=Image.new('RGB',(W,H),'#eef1f3'); d=ImageDraw.Draw(s)
f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',40); f2=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',26)
d.text((24,24),f'{w.capitalize()} in 3D (lib/char3d.js): front · 3/4 · side · back',fill='#1e2226',font=f)
d.text((26,72),'Toon shading (flat fill + one crisp shade); face = the app SVG features on a modelled oval head; hair / hat / glasses are real geometry.',fill='#55606a',font=f2)
s.paste(a,(0,110)); y2=110+a.height+10
d.text((24,y2+6),'close-up',fill='#1e2226',font=f2); s.paste(b,(0,y2+40))
r=ref.resize((220,330)); s.paste(r,(W-250,140)); d.rectangle([W-250,140,W-30,470],outline='#9aa5ab',width=2); d.text((W-250,476),'the app figure',fill='#55606a',font=f2)
s.save(f'v3/{w}-turnaround.png'); print('wrote', w)
PY
done
