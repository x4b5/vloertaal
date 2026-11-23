import type { JSX } from 'react';
import { PAL } from '../kit';
import { Bust } from '../bust';

/** An eye seen from the front: white almond, blue iris, dark pupil. */
const eye = (cx: number, cy: number) => (
  <g>
    <path d={`M${cx - 10} ${cy}Q${cx} ${cy - 10} ${cx + 10} ${cy}Q${cx} ${cy + 10} ${cx - 10} ${cy}Z`} fill={PAL.white} stroke={PAL.slate} strokeWidth="2.4" />
    <circle cx={cx} cy={cy} r="4.4" fill={PAL.sky} />
    <circle cx={cx} cy={cy} r="2" fill={PAL.ink} />
  </g>
);

export default {
  // "het oogcontact": the eye contact — Henk (the driver, in his navy jacket) and Bram (the banksman, in hi-vis)
  // face each other; between their eyes a dashed line with an arrow head at both ends, and an eye over it.
  'w.oogcontact': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bust who="henk" x={28} y={112} scale={0.6} expr="neutral" />
      <Bust who="bram" x={92} y={112} scale={0.6} expr="neutral" flip />
      {/* The line of sight between their eyes, both ways */}
      <path d="M44 68H76" stroke={PAL.sky} strokeWidth="4" strokeDasharray="2 7" />
      <path d="M48 62L41 68L48 74" fill="none" stroke={PAL.sky} strokeWidth="4" />
      <path d="M72 62L79 68L72 74" fill="none" stroke={PAL.sky} strokeWidth="4" />
      {eye(60, 22)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
