# v7 in post: tame the textures, the contact shadow and the metal against the v6 render of the same frame.
# Critic (v7 round 1): the new detail was too loud: cork-like blotches on the walls of the hall and the canteen,
# a near-white, mottled laptop, a fleecy café table. v6 and v7 are the same camera at the same moment, so per pixel
# the change in brightness log(L7 / L6) is exactly what v7 added (textures, weathering, contact shadow, metal).
# That change is split into a coarse part (blotches, contact shadow) and a fine part (grain, mortar, wood), and only
# a share of each is kept; brightening (the metal) is kept least. Colour comes from v7.
import numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter

K_LOW, K_HIGH, K_UP = 0.4, 0.5, 0.35   # share kept: coarse change, fine change, and of any brightening
SIGMA = 12                             # px at 1080 wide: the split between coarse and fine


def tame(im7, im6):
    """im7: the v7 render, im6: the v6 render of the same frame (any size). Returns im7 with the change toned down."""
    a7 = np.asarray(im7.convert('RGB')).astype(np.float32) / 255
    a6 = np.asarray(im6.convert('RGB').resize(im7.size, Image.BILINEAR)).astype(np.float32) / 255
    w = np.array([0.2126, 0.7152, 0.0722], np.float32)
    d = np.log((a7 @ w + 0.03) / (a6 @ w + 0.03))
    low = gaussian_filter(d, SIGMA * im7.width / 1080)
    high = d - low
    keep = K_LOW * low + K_HIGH * high
    keep = np.where(keep > 0, keep * K_UP / max(K_LOW, K_HIGH), keep)   # brightening: keep even less
    f = np.exp(np.clip(keep - d, -1.5, 1.5))[..., None]
    return Image.fromarray(np.clip(a7 * f * 255 + 0.5, 0, 255).astype(np.uint8))
