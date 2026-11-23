import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** A full black rubbish bag standing on the ground at (cx, bottom), tied at the top. */
const bag = (cx: number, b: number, s: number, tilt = 0) => (
  <g transform={`translate(${cx} ${b}) rotate(${tilt}) scale(${s})`}>
    <path d="M-4 -46Q-14 -58 -18 -52Q-14 -46 -5 -44Z" fill={PAL.slate} />
    <path d="M4 -46Q14 -60 19 -54Q16 -46 5 -44Z" fill={PAL.slateDark} />
    <Shade color={PAL.slateDark} opacity={1} at={[24, -20, 12, 30]}>
      <path d="M-6 -44H6Q10 -38 20 -30Q30 -20 28 -10Q26 0 0 0Q-26 0 -28 -10Q-30 -20 -20 -30Q-10 -38 -6 -44Z" fill={PAL.slate} />
    </Shade>
    <circle cx="0" cy="-44" r="4.5" fill={PAL.slateDark} />
    <path d="M-4 -36Q-10 -24 -12 -18M6 -36Q10 -26 12 -22" fill="none" stroke={PAL.slateDark} strokeWidth="2" strokeLinecap="round" />
    <Shine d="M-22 -12Q-20 -24 -12 -30" width={3.4} opacity={0.35} />
  </g>
);

export default {
  // "de bijplaatsing": the extra rubbish (bags left next to the bin) — a green wheelie bin with its lid shut,
  // and two full black rubbish bags put on the ground next to it.
  'w.bijplaatsing': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={52} ry={4.5} />
      {/* The bin, on the left */}
      <path d="M50 34L58 30L56 98L48 102Z" fill={PAL.greenShade} />
      <circle cx="52" cy="98" r="6" fill={PAL.ink} />
      <Shade color={PAL.greenShade} opacity={0.5} at={[54, 70, 6, 40]}>
        <path d="M12 34H50L47 100Q47 102 45 102H20Q18 102 18 100Z" fill={PAL.green} />
      </Shade>
      <path d="M22 48H44M23 60H43" stroke={PAL.greenShade} strokeWidth="2" strokeLinecap="round" />
      <path d="M9 28L50 24L60 22L59 27L50 32H10Z" fill="#256b31" />
      <Shine d="M18 42V80" width={3.2} opacity={0.5} />
      {/* The two bags next to it */}
      {bag(98, 104, 0.62, 6)}
      {bag(74, 104, 0.82)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
