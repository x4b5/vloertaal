# v6 grade: natural colour and the time of day, keyed on film time t (s).
#   0–6 s     polder at morning: haze on the horizon, a cool-shadow / warm-highlight split
#   6–15.8 s  in the train: morning sun from the window side, soft bands of window light inside the carriage
#   15.8–20.4 s  the app fills the frame (dive, page turn, Jada's lesson): neutral, so the brand colours stay true
#   20.4–34 s terrace and the flight: late afternoon, golden, a warm glow from the sun; haze over the town
#   34–42.8 s the park, hall and canteen: warm indoor light
#   42.8–45.2 s Henk's laptop page: neutral again
#   45.2–54 s end card: the neutral v5 grade (its colours are the brand's)
# Realism in post (critic, v6 round 1): the toy colours are tamed by hue (lime grass to olive-green, cyan sky
# softer, pure yellow a touch down), a gentle filmic S-curve, haze, and a soft bloom. Captions and screens keep
# clean whites. Looks cross-fade over the gaps between the keys.
import numpy as np
from PIL import Image, ImageFilter
LOOKS = {   # warm (R+, B−), split (shadows cool / highlights warm), glow (+ sun centre), bloom, contrast, sat, bands, haze, tame
  'morning':   dict(warm=0.03, split=0.05, glow=0.06, sx=0.95, sy=0.12, bloom=0.08, con=1.04, sat=0.94, bands=0.0, haze=0.15, tame=1.0),
  'train':     dict(warm=0.08, split=0.05, glow=0.14, sx=-0.10, sy=0.35, bloom=0.10, con=1.05, sat=0.95, bands=0.10, haze=0.0, tame=1.0),
  'screen':    dict(warm=0.01, split=0.0, glow=0.0, sx=0.9, sy=0.2, bloom=0.03, con=1.03, sat=1.04, bands=0.0, haze=0.0, tame=0.0),
  'afternoon': dict(warm=0.08, split=0.07, glow=0.22, sx=0.88, sy=0.18, bloom=0.08, con=1.08, sat=0.92, bands=0.0, haze=0.10, tame=1.0),
  'park':      dict(warm=0.05, split=0.06, glow=0.0, sx=0.85, sy=0.10, bloom=0.0, con=1.12, sat=1.0, bands=0.0, haze=0.0, tame=1.0),
  'indoor':    dict(warm=0.07, split=0.04, glow=0.05, sx=0.85, sy=0.10, bloom=0.08, con=1.05, sat=0.95, bands=0.0, haze=0.0, tame=1.0),
  'card':      dict(warm=0.012, split=0.0, glow=0.0, sx=0.9, sy=0.2, bloom=0.0, con=1.03, sat=1.07, bands=0.0, haze=0.0, tame=0.0),
}
KEYS = [(0, 'morning'), (5.2, 'morning'), (6.6, 'train'), (15.2, 'train'), (15.8, 'screen'), (20.4, 'screen'), (21.6, 'afternoon'),
        (32.6, 'afternoon'), (33.4, 'park'), (35.6, 'park'), (36.4, 'indoor'), (42.4, 'indoor'), (42.8, 'screen'), (45.2, 'screen'), (46.2, 'card'), (60, 'card')]
# caption boxes sit in the top of the frame at these film times: no haze there
CAPS = [(0, 3.9), (6.6, 12.8), (24.4, 28.4), (38.4, 42.8)]
def look_at(t):
    for (a, la), (b, lb) in zip(KEYS, KEYS[1:]):
        if t <= b:
            x = 0 if b == a else min(1, max(0, (t - a) / (b - a))); x = x * x * (3 - 2 * x)
            A, B = LOOKS[la], LOOKS[lb]
            return {k: A[k] + (B[k] - A[k]) * x for k in A}
    return LOOKS['card']
_cache = {}
def _grid(w, h):
    if (w, h) not in _cache:
        yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
        q = np.sqrt(((xx / w - 0.5) * 0.85) ** 2 + (yy / h - 0.5) ** 2)
        tv = np.clip((q - 0.32) / (0.78 - 0.32), 0, 1); tv = tv * tv * (3 - 2 * tv)
        _cache[(w, h)] = ((1 - 0.12 * tv)[..., None], xx / w, yy / h)
    return _cache[(w, h)]
sm = lambda e0, e1, x: (lambda u: u * u * (3 - 2 * u))(np.clip((x - e0) / (e1 - e0), 0, 1))
def grade(im, i, t=None):
    t = i / 30 if t is None else t
    L = look_at(t)
    a = np.asarray(im).astype(np.float32) / 255
    h, w = a.shape[:2]
    vig, X, Y = _grid(w, h)
    R, G, B = a[..., 0], a[..., 1], a[..., 2]
    lum = (a @ np.array([0.2126, 0.7152, 0.0722], np.float32))[..., None]
    mx, mn = a.max(-1), a.min(-1); chroma = mx - mn; sat = chroma / np.maximum(mx, 1e-4)
    hue = (np.degrees(np.arctan2(np.sqrt(3) * (G - B), 2 * R - G - B)) + 360) % 360
    # tame the toy colours by hue: greens (80–150°) to 0.75 and a little toward olive, sky blue (185–235°) to 0.8,
    # saturated yellows (40–65°) to 0.9
    if L['tame'] > 0:
        band = lambda h0, h1, s: sm(h0 - s, h0, hue) * (1 - sm(h1, h1 + s, hue))
        gm, bm, ym = band(80, 150, 12), band(185, 235, 12), band(40, 65, 8) * sm(0.55, 0.75, sat)
        f = 1 - L['tame'] * (0.33 * gm + 0.2 * bm + 0.1 * ym)
        a = lum + (a - lum) * f[..., None]
        a = a + (L['tame'] * 0.015 * gm * sat)[..., None] * np.array([0.5, -0.1, -0.4], np.float32)   # toward olive
    a = lum + (a - lum) * L['sat']
    a = (a - 0.5) * L['con'] + 0.5
    if L['split'] > 0: c = np.clip(a, 0, 1); a = a + 0.22 * (c * c * (3 - 2 * c) - c)   # filmic S-curve in the scenes
    keep = (1 - sm(0.93, 0.99, lum[..., 0]))[..., None]       # clean whites: captions, screens, the app's cards
    # warmth and a split tone: highlights to amber, shadows a touch to teal
    a = a * (1 + L['warm'] * keep * np.array([1, 0.25, -1], np.float32))
    a = a + L['split'] * keep * (lum - 0.5) * np.array([0.6, 0.2, -0.6], np.float32)
    # window light in the train: soft diagonal bands that slide past, only on the carriage (not on the green and
    # blue landscape outside)
    if L['bands'] > 0:
        ph = (X * 1.0 + Y * 0.45) * 3.2 - t * 0.9
        bandv = np.clip(np.sin(ph * np.pi * 2) * 1.6 - 0.6, 0, 1) ** 2
        outside = np.clip(band(80, 235, 12) * sm(0.15, 0.35, sat), 0, 1) if L['tame'] > 0 else 0
        a = a + L['bands'] * (bandv * (1 - outside))[..., None] * keep * np.array([1.0, 0.86, 0.6], np.float32) * (0.4 + lum)
    if L['glow'] > 0:
        sun = np.exp(-(((X - L['sx']) / 0.55) ** 2 + ((Y - L['sy']) / 0.45) ** 2))[..., None]
        a = a + L['glow'] * sun * keep * np.array([1.0, 0.72, 0.38], np.float32) * (1 - a * 0.6)
    # haze toward the horizon (top of the frame), warm grey; not over a caption box
    if L['haze'] > 0:
        capt = any(c0 <= t <= c1 for c0, c1 in CAPS)
        hz = L['haze'] * sm(0.42, 0.06, Y) * ((Y > 0.15) if capt else 1)
        a = a * (1 - hz[..., None]) + hz[..., None] * np.array([0.80, 0.84, 0.88], np.float32)   # distance turns cool and pale (atmospheric perspective)
    # bloom: the bright parts bleed a little light
    if L['bloom'] > 0:
        small = Image.fromarray(np.clip(np.clip(a - 0.72, 0, 1) * 3.0 * 255, 0, 255).astype(np.uint8)).resize((w // 4, h // 4), Image.BILINEAR)
        bl = np.asarray(small.filter(ImageFilter.GaussianBlur(w / 4 / 60)).resize((w, h), Image.BILINEAR)).astype(np.float32) / 255
        a = a + L['bloom'] * bl * np.array([1.0, 0.93, 0.8], np.float32)
    a = a * vig
    rng = np.random.default_rng(1000 + i)
    a = a + (rng.random((h, w, 1), np.float32) - 0.5) * 0.018
    return Image.fromarray(np.clip(a * 255 + 0.5, 0, 255).astype(np.uint8))
