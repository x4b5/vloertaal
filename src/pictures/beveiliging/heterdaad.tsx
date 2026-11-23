import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "op heterdaad": in the act (you see it happen) — a big watching eye (top left) looks along a dashed
  // line straight at a hand that is just slipping a red can into an open bag.
  // On the intro card the hand with the can goes down into the bag. Once (it happens once, and you see it).
  'w.heterdaad': () => (
    <g strokeLinejoin="round">
      {/* The eye that sees it */}
      <path d="M10 30Q30 10 54 30Q30 50 10 30Z" fill={PAL.paperShade} transform="translate(0 2)" />
      <path d="M10 30Q30 10 54 30Q30 50 10 30Z" fill={PAL.white} />
      <circle cx="33" cy="30" r="10" fill={PAL.sky} />
      <circle cx="33" cy="30" r="5" fill={PAL.ink} />
      <circle cx="30" cy="27" r="2.2" fill={PAL.white} />
      <path d="M12 26Q30 6 52 26" fill="none" stroke={PAL.ink} strokeWidth="3" strokeLinecap="round" />
      {/* Its look */}
      <path d="M48 40L66 56" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" strokeDasharray="1 7" />
      {/* The open bag */}
      <Shade color={PAL.purpleShade} opacity={1} at={[110, 90, 14, 30]}>
        <path d="M54 72H106L102 106H58Z" fill={PAL.purple} />
      </Shade>
      <path d="M64 72Q64 58 80 58Q96 58 96 72" fill="none" stroke={PAL.purpleShade} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M56 72H104" stroke={PAL.purpleLight} strokeWidth="4" strokeLinecap="round" />
      {/* The hand slipping the can in */}
      <Move kind="from" dy={-24} once>
        <Hand pose="hold" x={80} y={48} rotate={180} scale={0.74} skin={SKIN.bram} sleeve={[PAL.steel, PAL.slate]} />
        <rect x="72" y="60" width="16" height="26" rx="3" fill={PAL.red} />
        <rect x="83" y="60" width="5" height="26" rx="2" fill={PAL.redShade} />
        <rect x="72" y="70" width="16" height="6" fill={PAL.white} opacity=".85" />
        <Shine d="M75 64V80" width={2.2} opacity={0.5} />
      </Move>
      {/* The bag's front edge over the can */}
      <path d="M56 84H104L102 106H58Z" fill={PAL.purple} />
      <path d="M90 84H104L102 106H90Z" fill={PAL.purpleShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
