import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shine } from '../kit';

/** The whorl of a fingerprint, centred on (cx, cy): nested open loops. */
const whorl = (cx: number, cy: number, s: number) =>
  [5, 10, 15, 20, 25].map((r, i) => {
    const rx = r * 0.78 * s;
    const ry = r * s;
    const gap = 0.5 + (i % 2) * 0.3;
    const a0 = -Math.PI / 2 + gap;
    const a1 = (3 * Math.PI) / 2 - gap * 0.4;
    const p = (a: number) => `${(cx + rx * Math.cos(a)).toFixed(1)} ${(cy + ry * Math.sin(a)).toFixed(1)}`;
    return `M${p(a0)}A${rx.toFixed(1)} ${ry.toFixed(1)} 0 1 1 ${p(a1)}`;
  }).join('');

export default {
  // "de vingerafdruk": the fingerprint — a dark scanner with a green glass plate on which the swirl of a
  // fingerprint shows, and the finger just lifted off it, above at the top right. On the intro card the finger comes down to the
  // glass, then the print appears (once).
  'w.vingerafdruk': () => (
    <g>
      <Ground cx={62} cy={104} rx={46} ry={4} />
      {/* Scanner body, seen from above */}
      <path d="M12 86L24 50H106L98 86Z" fill={PAL.slate} />
      <path d="M12 86H98V100H12Z" fill={PAL.slateDark} />
      <path d="M98 86L106 50V84L98 100Z" fill="#1d262d" />
      {/* Glass */}
      <path d="M24 80L32 56H90L84 80Z" fill={PAL.lime} />
      {/* The print on the glass */}
      <Move kind="show" once>
        <g transform="translate(58 68) scale(1.3 0.62) translate(-58 -68)">
          <path d={whorl(58, 68, 0.66)} stroke={PAL.okShade} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </g>
      </Move>
      {/* The finger above, pointing down, just lifted off */}
      <Move kind="from" dy={22} once>
        <Hand pose="point" x={88} y={8} rotate={180} scale={0.82} skin={SKIN.jada} sleeve={[PAL.purple, PAL.purpleShade]} />
      </Move>
      <Shine d="M30 58L27 68" opacity={0.6} width={2.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
