import type { JSX } from 'react';
import { PAL, Shade } from '../kit';

/** A small house seen from the front: wall (shaded right), roof (shaded right), window, door. */
const house = (x: number, y: number, w: number, wall: string, roof: string, roofShade: string) => {
  const h = w * 0.72;
  return (
    <g>
      <Shade color={PAL.paperShade} opacity={1} at={[x + w, y + h / 2, w * 0.25, h]}>
        <rect x={x} y={y} width={w} height={h} rx="1.5" fill={wall} />
      </Shade>
      <path d={`M${x - 4} ${y + 2}L${x + w / 2} ${y - w * 0.5}L${x + w + 4} ${y + 2}Z`} fill={roof} stroke={roof} strokeWidth="3" />
      <path d={`M${x + w / 2} ${y - w * 0.5}L${x + w + 4} ${y + 2}H${x + w / 2}Z`} fill={roofShade} stroke={roofShade} strokeWidth="3" />
      <rect x={x + w * 0.14} y={y + h * 0.2} width={w * 0.28} height={w * 0.26} rx="1" fill={PAL.sky} />
      <rect x={x + w * 0.58} y={y + h * 0.38} width={w * 0.26} height={h * 0.62} rx="1" fill={PAL.wood} />
    </g>
  );
};

/** A round tree: trunk and a crown, shaded on the right. */
const tree = (x: number, y: number, r: number) => (
  <g>
    <rect x={x - 2.5} y={y - 4} width="5" height={r + 6} rx="2" fill={PAL.wood} />
    <Shade color={PAL.greenShade} opacity={1} at={[x + r, y - r * 0.4, r * 0.6, r * 1.4]}>
      <circle cx={x} cy={y - r * 0.4} r={r} fill={PAL.green} />
    </Shade>
  </g>
);

export default {
  // "de buurt": the neighbourhood — a round green patch with several houses close together (white,
  // red and grey roofs), trees between them and a path running through: the homes around yours.
  'w.buurt': () => (
    <g strokeLinejoin="round">
      {/* The ground of the neighbourhood and the path */}
      <ellipse cx="60" cy="88" rx="54" ry="20" fill={PAL.leaf} />
      <path d="M60 88Q60 98 72 104" stroke={PAL.card} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M20 84Q40 92 60 88Q80 84 100 90" stroke={PAL.card} strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* Back row */}
      {house(18, 50, 24, PAL.paper, PAL.steel, PAL.slate)}
      {tree(52, 64, 9)}
      {house(76, 46, 26, PAL.yellowLight, PAL.clay, PAL.clayShade)}
      {/* Front row */}
      {house(34, 70, 28, PAL.paper, PAL.clay, PAL.clayShade)}
      {tree(18, 90, 8)}
      {house(74, 76, 22, PAL.ice, PAL.navy, PAL.navyShade)}
      {tree(104, 92, 7)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
