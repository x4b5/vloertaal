import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as in group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The can: the centre of its drum's bottom, and how far it is tipped forward to pour. */
const C: [number, number] = [36, 70];
const TILT = 24;
/** A point of the upright can (x right, y up from the drum's bottom) after the tilt. */
const tip = ([x, y]: [number, number]): [number, number] => {
  const a = (TILT * Math.PI) / 180;
  return [C[0] + x * Math.cos(a) - y * Math.sin(a), C[1] + x * Math.sin(a) + y * Math.cos(a)];
};

/** The round drum: half width, the curve of its rims seen from a little above, its height. */
const RX = 21;
const RY = 7;
const H = 21;
/** The front of the drum: from the front half of the top rim down to the front half of the bottom rim. */
const DRUM = `M${-RX} ${-H}A${RX} ${RY} 0 0 0 ${RX} ${-H}V0A${RX} ${RY} 0 0 1 ${-RX} 0Z`;
/** The cone on the drum, up to the neck. */
const CONE = `M${-RX + 2} ${-H}L-4.5 -43H4.5L${RX - 2} ${-H}Z`;

/** The long thin spout: from the neck to its tip, tapering. */
const NECK = tip([0, -46]);
const SPOUT_END: [number, number] = [97, 48];

/** The gear the drop falls on: centre, the radius of its teeth and its thickness in depth. */
const G: [number, number] = [84, 89];
const GR = 16;
const GD = 6;
/** A gear of eight square teeth round (cx, cy), as a path. */
const gear = (cx: number, cy: number) => {
  const n = 8;
  const r0 = GR - 4.5;
  const pts: string[] = [];
  for (let i = 0; i < n; i += 1) {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    const w = Math.PI / n / 1.7;
    const p = (r: number, b: number) => `${r1(cx + r * Math.cos(b))} ${r1(cy + r * Math.sin(b))}`;
    pts.push(p(r0, a - w * 1.6), p(GR, a - w), p(GR, a + w), p(r0, a + w * 1.6));
  }
  return `M${pts.join('L')}Z`;
};

/** The spout as a tapering band from the neck to the end. */
const spout = () => {
  const [x0, y0] = NECK;
  const [x1, y1] = SPOUT_END;
  const len = Math.hypot(x1 - x0, y1 - y0);
  const nx = -(y1 - y0) / len;
  const ny = (x1 - x0) / len;
  const w0 = 3.4;
  const w1 = 1.6;
  return `M${r1(x0 + nx * w0)} ${r1(y0 + ny * w0)}L${r1(x1 + nx * w1)} ${r1(y1 + ny * w1)}L${r1(x1 - nx * w1)} ${r1(y1 - ny * w1)}L${r1(x0 - nx * w0)} ${r1(y0 - ny * w0)}Z`;
};

export default {
  // "het oliekannetje": the oil can — a small brass oiler with a round drum, a cone, a dark loop
  // handle and a thumb pump, tipped forward; its long thin spout lets one golden drop fall on a
  // grey gear below.
  'w.oliekannetje': () => (
    <g strokeLinejoin="round">
      <Ground cx={68} cy={105} rx={40} ry={4} />
      {/* The gear: its thickness behind (shifted along the depth axis), then the face and the hub */}
      <path d={gear(G[0] + GD * DX, G[1] + GD * DY)} fill={PAL.slate} />
      <Shade color={PAL.steel} opacity={1} at={[G[0] + 16, G[1] + 8, 10, 22]}>
        <path d={gear(G[0], G[1])} fill={PAL.mist} />
      </Shade>
      <circle cx={G[0]} cy={G[1]} r="5" fill={PAL.slate} />
      {/* The can, tipped forward */}
      <g transform={`translate(${C[0]} ${C[1]}) rotate(${TILT})`}>
        {/* The dark loop handle on the left, and the thumb pump on top of it */}
        <path d="M-18 -5C-41 -3 -41 -30 -17 -28" fill="none" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
        <path d="M-24 -29L-13 -36" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="-12" cy="-37" rx="5.5" ry="3.4" fill={PAL.slate} />
        {/* The drum and its light top */}
        <Shade color={PAL.yellowShade} opacity={1} at={[RX + 4, -6, 14, 30]}>
          <path d={DRUM} fill={PAL.yellow} />
        </Shade>
        <ellipse cx="0" cy={-H} rx={RX} ry={RY} fill={PAL.yellowLight} />
        {/* The cone and the neck nut */}
        <Shade color={PAL.yellowShade} opacity={1} at={[RX, -26, 12, 20]}>
          <path d={CONE} fill={PAL.yellow} />
        </Shade>
        <rect x="-5.5" y="-49" width="11" height="7" rx="2" fill={PAL.yellowShade} />
        <Shine d="M-16 -14V-5" color={PAL.yellowShine} width={3.4} opacity={0.8} />
      </g>
      {/* The long thin spout */}
      <path d={spout()} fill={PAL.yellowShade} />
      {/* The drop of oil, falling on the gear */}
      <path d="M97 54Q103 62 103 65.5A6 6 0 0 1 91 65.5Q91 62 97 54Z" fill={PAL.yellowShade} />
      <path d="M94.2 64.6Q94.4 62.2 95.8 60.6" stroke={PAL.yellowShine} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
