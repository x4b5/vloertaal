import { useId, type JSX } from 'react';
import { CurveArrow, Ground, PAL, Shine, r1 } from '../kit';

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

/** Where the tap goes into the block's top. */
const HX = 58;
const HY = 70;

export default {
  // "de draadtap": the tap and tap wrench — a steel block, a short threaded tap going down into a hole
  // in its top, held in a dark two-handled tap wrench, a blue curved arrow over it for turning.
  'w.draadtap': () => {
    const id = `dt-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    const threads: string[] = [];
    for (let y = 48; y < 74; y += 4) threads.push(`M${HX - 6} ${y + 2}L${HX + 6} ${y - 1}`);
    return (
      <g strokeLinejoin="round">
        <Ground cx={60} cy={104} rx={42} ry={4} />
        {/* The steel block and the hole in its top */}
        {block(24, 80, 62, 22, 20, PAL.steel, PAL.mist, PAL.slate)}
        <ellipse cx={HX} cy={HY} rx="9" ry="3.6" fill={PAL.slateDark} />
        {/* The tap: a threaded steel bit, its lower end in the hole */}
        <clipPath id={id}>
          <path d={`M${HX - 6} 40H${HX + 6}V${HY}A6 2.4 0 0 1 ${HX - 6} ${HY}Z`} />
        </clipPath>
        <path d={`M${HX - 6} 40H${HX + 6}V${HY}A6 2.4 0 0 1 ${HX - 6} ${HY}Z`} fill={PAL.mist} />
        <rect x={HX + 2} y="40" width="4" height="34" fill={PAL.steel} clipPath={`url(#${id})`} />
        <path d={threads.join('')} stroke={PAL.slate} strokeWidth="1.8" clipPath={`url(#${id})`} />
        {/* The tap wrench: two long handles and the holder in the middle */}
        <path d="M14 52L102 30" stroke={PAL.slateDark} strokeWidth="7" strokeLinecap="round" transform="translate(1 2)" />
        <path d="M14 52L102 30" stroke={PAL.slate} strokeWidth="7" strokeLinecap="round" />
        <path d="M14 52L34 47M82 35L102 30" stroke={PAL.ink} strokeWidth="7.4" strokeLinecap="round" />
        <rect x={HX - 9} y="32" width="18" height="14" rx="3" fill={PAL.steel} />
        <rect x={HX - 9} y="32" width="18" height="12" rx="3" fill={PAL.mist} />
        <Shine d={`M${HX - 5} 35.5H${HX + 3}`} width={2.4} opacity={0.9} />
        {/* Turning */}
        <CurveArrow from={[30, 30]} to={[86, 16]} bend={14} color={PAL.sky} width={6} head={11} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
