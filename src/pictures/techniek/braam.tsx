import type { JSX } from 'react';
import { Ground, Motion, PAL, Shine, r1 } from '../kit';

/** The cut end of the tube: centre and radii of the outer rim, and of the bore. */
const CX = 40;
const CY = 64;
const OR: [number, number] = [17, 30];
const IR: [number, number] = [11, 21];

/** The burr: a ragged ring of sharp points along the bore's edge, pointing into the bore. */
const burr = () => {
  const n = 22;
  const p: string[] = [];
  for (let i = 0; i < n * 2; i += 1) {
    const t = (i / (n * 2)) * Math.PI * 2;
    const k = i % 2 === 0 ? 1.04 : i % 4 === 1 ? 0.72 : 0.8;
    p.push(`${r1(CX + IR[0] * k * Math.cos(t))} ${r1(CY + IR[1] * k * Math.sin(t))}`);
  }
  return `M${p.join('L')}Z`;
};

export default {
  // "de braam": the burr — the freshly cut end of a steel tube seen from the front left: a light cut face
  // round a dark bore, and along the bore's edge a ragged white ring of sharp points; red lines warn
  // that the edge is sharp.
  'w.braam': () => (
    <g strokeLinejoin="round">
      <Ground cx={68} cy={100} rx={40} ry={4} />
      {/* The tube going back to the right */}
      <path d={`M${CX} ${CY - OR[1]}L100 ${CY - OR[1] - 8}A10 ${OR[1]} 0 0 1 100 ${CY + OR[1] - 8}L${CX} ${CY + OR[1]}Z`} fill={PAL.steel} />
      <path d={`M${CX} ${CY + 10}L100 ${CY + 2}A10 ${OR[1]} 0 0 1 100 ${CY + OR[1] - 8}L${CX} ${CY + OR[1]}Z`} fill={PAL.slate} opacity="0.55" />
      <Shine d={`M${CX + 6} ${CY - OR[1] + 5}L94 ${CY - OR[1] - 2}`} width={3.4} opacity={0.6} />
      {/* The cut face and the dark bore */}
      <ellipse cx={CX} cy={CY} rx={OR[0]} ry={OR[1]} fill={PAL.mist} />
      <ellipse cx={CX} cy={CY} rx={IR[0]} ry={IR[1]} fill={PAL.slateDark} />
      {/* The burr */}
      <path d={burr()} fill={PAL.white} />
      <ellipse cx={CX + 1.5} cy={CY + 1} rx={IR[0] * 0.55} ry={IR[1] * 0.58} fill={PAL.slateDark} />
      {/* Sharp! */}
      <Motion x={24} y={34} dir={-130} spread={80} n={3} len={12} gap={4} color={PAL.red} width={4.2} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
