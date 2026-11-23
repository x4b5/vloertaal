import type { JSX } from 'react';
import { Arrow, Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** A block in the slanted view: front rectangle (x, y, w, h), its top and right faces `d` deep. */
const block = (x: number, y: number, w: number, h: number, d: number, front: string, top: string, side: string) => {
  const ox = r1(d * DX);
  const oy = r1(d * DY);
  return (
    <g>
      <path d={`M${x} ${y}L${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + ox)} ${r1(y + oy)}Z`} fill={top} />
      <path d={`M${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + w + ox)} ${r1(y + h + oy)}L${x + w} ${y + h}Z`} fill={side} />
      <rect x={x} y={y} width={w} height={h} fill={front} />
    </g>
  );
};

export default {
  // "de tilhulp": the lifting aid — a vacuum lifter: a ribbed grey tube hanging from a rail, an orange
  // handle at its head, and a wide black suction pad holding a flat cardboard box up off the floor.
  // Once and slowly: a load is lifted once (the owner's sunrise rule; lifting it three times looks odd).
  'w.tilhulp': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={106} rx={40} ry={4} />
      {/* The rail at the top, with the trolley */}
      {block(14, 12, 84, 7, 8, PAL.slate, PAL.steel, PAL.slateDark)}
      <rect x="49" y="19" width="22" height="6" rx="2" fill={PAL.steel} />
      {/* The tube's lower end, hidden under the head: seen only while the head is lower */}
      <rect x="51" y="56" width="18" height="10" rx="2" fill={PAL.mist} />
      <rect x="62" y="56" width="7" height="10" rx="2" fill={PAL.steel} />
      <path d="M52 60H68" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      {/* The ribbed vacuum tube */}
      <rect x="51" y="24" width="18" height="34" rx="4" fill={PAL.mist} />
      <rect x="62" y="24" width="7" height="34" rx="3" fill={PAL.steel} />
      <path d="M52 30H68M52 36H68M52 42H68M52 48H68M52 54H68" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      {/* The lift: the head, the pad and the box come up from the floor */}
      <Move kind="from" dy={9} once>
      {/* The head with its orange handle */}
      <rect x="44" y="56" width="32" height="11" rx="3" fill={PAL.slate} />
      <rect x="68" y="56" width="8" height="11" rx="3" fill={PAL.slateDark} />
      <path d="M76 61H88V48" fill="none" stroke={PAL.slate} strokeWidth="4.5" strokeLinecap="round" />
      <rect x="83" y="34" width="10" height="17" rx="4" fill={PAL.orange} />
      <rect x="88.5" y="34" width="4.5" height="17" rx="2.2" fill={PAL.orangeShade} />
      {/* The flat box, lifted off the floor */}
      {block(22, 77, 70, 18, 12, PAL.card, '#f0c48a', PAL.cardShade)}
      {/* The black suction pad on the box's top */}
      {block(36, 72, 42, 5, 7, PAL.ink, PAL.slateDark, PAL.ink)}
      <Shine d="M27 83H44" width={2.6} opacity={0.5} />
      </Move>
      {/* The way it goes: up */}
      <Move kind="show">
        <Arrow from={[14, 70]} to={[14, 36]} width={6.5} head={10} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
