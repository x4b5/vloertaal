import type { JSX } from 'react';
import { CurveArrow, Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de inlener": the hirer (the company where the agency sends you to work) — a big factory with a
  // sawtooth roof and a chimney, and, small at its side, the agency's shop (striped awning, a job card
  // in the window); an orange arrow goes from the agency to the factory: there you go to work.
  'w.inlener': () => (
    <g strokeLinejoin="round">
      <Ground cx={64} cy={105} rx={50} ry={4} />
      {/* The factory: chimney, sawtooth roof and wall */}
      <rect x="94" y="22" width="9" height="24" rx="2" fill={PAL.slate} />
      <rect x="94" y="22" width="9" height="5" rx="2" fill={PAL.red} />
      <Shade color={PAL.blueShade} opacity={1} at={[114, 76, 14, 50]}>
        <path d="M48 104V50L68 38V50L88 38V50L108 38V104Z" fill={PAL.blue} stroke={PAL.blue} strokeWidth="2" />
      </Shade>
      {/* Windows and the big door */}
      {[54, 70, 86].map((x) => <rect key={x} x={x} y="58" width="12" height="10" rx="2" fill={PAL.ice} />)}
      <rect x="66" y="78" width="26" height="26" rx="2" fill={PAL.slateDark} />
      <path d="M66 85H92M66 92H92M66 99H92" stroke={PAL.slate} strokeWidth="2" />
      <Shine d="M52 56V70" width={2.6} opacity={0.5} />
      {/* The agency, small at the side */}
      <Shade color={PAL.paperShade} opacity={1} at={[44, 92, 6, 20]}>
        <rect x="12" y="78" width="30" height="26" rx="2" fill={PAL.paper} />
      </Shade>
      <path d="M10 72H44L42 80H12Z" fill={PAL.orange} />
      <path d="M17 72L16 80M27 72V80M37 72L38 80" stroke={PAL.white} strokeWidth="3.4" />
      <rect x="16" y="84" width="22" height="13" rx="1.5" fill={PAL.ice} />
      <rect x="23" y="86" width="8" height="9" rx="1" fill={PAL.yellow} />
      {/* From the agency to the factory */}
      <CurveArrow from={[22, 62]} to={[52, 34]} bend={14} color={PAL.orange} width={6} head={11} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
