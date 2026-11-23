import type { JSX } from 'react';
import { Ground, PAL, r1 } from '../kit';

/** A point on the keyboard's top: u along the front (0–1), v into the depth (0–1). */
const P = (u: number, v: number): [number, number] => [r1(8 + u * 78 + v * 24), r1(90 - v * 42)];
const quad = (u0: number, v0: number, u1: number, v1: number) =>
  `M${P(u0, v0).join(' ')}L${P(u1, v0).join(' ')}L${P(u1, v1).join(' ')}L${P(u0, v1).join(' ')}Z`;

/** The key rows from the front: [number of keys, start, end] in u; the front row has the long space bar. */
const ROWS: [number, number, number][] = [[10, 0.05, 0.95], [10, 0.08, 0.95], [10, 0.05, 0.92]];

export default {
  // "het toetsenbord": the keyboard — a dark computer keyboard lying flat, seen from the front left: rows of
  // light keys and the long space bar in front.
  'w.toetsenbord': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={98} rx={52} ry={6} />
      {/* The base: front edge, right edge and top */}
      <path d={`M${P(0, 0).join(' ')}L${P(1, 0).join(' ')}L${P(1, 0)[0]} ${P(1, 0)[1] + 7}L${P(0, 0)[0]} ${P(0, 0)[1] + 7}Z`} fill={PAL.slateDark} />
      <path d={`M${P(1, 0).join(' ')}L${P(1, 1).join(' ')}L${P(1, 1)[0]} ${P(1, 1)[1] + 7}L${P(1, 0)[0]} ${P(1, 0)[1] + 7}Z`} fill={PAL.slateDark} />
      <path d={quad(0, 0, 1, 1)} fill={PAL.slate} />
      {/* The space bar and the rows of keys */}
      <path d={quad(0.28, 0.08, 0.7, 0.22)} fill={PAL.paperShade} />
      <path d={quad(0.06, 0.08, 0.24, 0.22)} fill={PAL.paperShade} />
      <path d={quad(0.74, 0.08, 0.94, 0.22)} fill={PAL.paperShade} />
      {ROWS.map(([n, a, b], r) => {
        const v0 = 0.3 + r * 0.22;
        const w = (b - a) / n;
        return Array.from({ length: n }, (_, i) => (
          <g key={`${r}-${i}`}>
            <path d={quad(a + i * w + 0.008, v0, a + (i + 1) * w - 0.008, v0 + 0.15)} fill={PAL.paperShade} />
            <path d={quad(a + i * w + 0.008, v0 + 0.04, a + (i + 1) * w - 0.016, v0 + 0.15)} fill={PAL.paper} />
          </g>
        ));
      })}
      <path d={quad(0.28, 0.12, 0.69, 0.22)} fill={PAL.paper} />
      <path d={quad(0.06, 0.12, 0.23, 0.22)} fill={PAL.paper} />
      <path d={quad(0.74, 0.12, 0.93, 0.22)} fill={PAL.paper} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
