import type { JSX } from 'react';
import { CurveArrow, Ground, Move, PAL, Shade, Shine } from '../kit';

/** A loose bolt lying at (x, y): a hex head and a short threaded shank. */
const bolt = (x: number, y: number, a: number) => (
  <g transform={`rotate(${a} ${x} ${y})`}>
    <rect x={x} y={y - 2.5} width="12" height="5" rx="1.5" fill={PAL.steel} />
    <rect x={x - 5} y={y - 5} width="6" height="10" rx="1.5" fill={PAL.slate} />
  </g>
);

export default {
  // "demonteren": to take apart — a steel machine housing with its cover lifted off and away, so you see
  // the dark inside with a yellow gear; its four bolts lie loose beside it, a curved arrow shows the
  // cover going off.
  // On the intro card the cover comes up off the housing. Once and slowly (it is taken apart once).
  'w.demonteren': () => (
    <g strokeLinejoin="round">
      <Ground cx={52} cy={104} rx={44} ry={4} />
      {/* The housing: right side, front, the open top with the inside */}
      <path d="M76 66L92 54V92L76 104Z" fill={PAL.steel} />
      <Shade color={PAL.steel} opacity={0.4} at={[80, 90, 8, 20]}>
        <rect x="14" y="66" width="62" height="38" rx="2" fill={PAL.mist} />
      </Shade>
      <path d="M14 66L30 54H92L76 66Z" fill={PAL.slateDark} />
      {/* The gear inside */}
      <circle cx="50" cy="60" r="9" fill={PAL.yellowShade} />
      <path d="M50 49V71M39 60H61M42 52L58 68M58 52L42 68" stroke={PAL.yellowShade} strokeWidth="4" />
      <circle cx="50" cy="59" r="6" fill={PAL.yellow} />
      <circle cx="50" cy="59" r="2" fill={PAL.slateDark} />
      <Shine d="M18 74V96" width={3} opacity={0.7} />
      {/* The four bolts, out */}
      {bolt(20, 112 - 8, -10)}
      {bolt(98, 100, 20)}
      {/* The cover, lifted off and up to the right */}
      <Move kind="from" dx={-26} dy={30} once>
        <g transform="rotate(-14 74 30)">
          <path d="M44 30L60 18H120L104 30Z" fill={PAL.paper} />
          <path d="M44 30H104V36H44Z" fill={PAL.steel} />
          <circle cx="52" cy="26" r="2.6" fill={PAL.slate} />
          <circle cx="96" cy="26" r="2.6" fill={PAL.slate} />
        </g>
      </Move>
      <CurveArrow from={[24, 46]} to={[36, 20]} bend={-10} color={PAL.sky} width={6} head={10} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
