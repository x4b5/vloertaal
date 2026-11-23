import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "het vreemde voorwerp": the foreign body (something in the food that does not belong there) — a
  // slice of bread with a steel bolt stuck in its soft middle, ringed in red: that does not belong there.
  'w.vreemdvoorwerp': () => (
    <g strokeLinejoin="round">
      {/* The slice of bread: brown crust, light crumb, its depth edge below */}
      <path d="M22 102V56Q12 52 12 40Q12 20 36 18Q50 16 60 22Q70 16 84 18Q108 20 108 40Q108 52 98 56V102Q98 108 92 108H28Q22 108 22 102Z" fill={PAL.cardDark} transform="translate(0 0)" />
      <Shade color="#efd4a6" opacity={1} at={[100, 70, 14, 40]}>
        <path d="M28 98V54Q19 50 19 41Q19 25 38 24Q51 23 60 29Q69 23 82 24Q101 25 101 41Q101 50 92 54V98Q92 101 89 101H31Q28 101 28 98Z" fill="#f6dcae" />
      </Shade>
      <g fill={PAL.cardShade} opacity=".55">
        <circle cx="40" cy="44" r="2" /><circle cx="78" cy="40" r="2.4" /><circle cx="44" cy="84" r="2.2" /><circle cx="80" cy="88" r="2" /><circle cx="36" cy="64" r="1.6" />
      </g>
      <Shine d="M26 36Q30 28 40 27" width={3} opacity={0.7} />
      {/* The bolt, stuck in at a slant: threaded shank and hex head */}
      <g transform="rotate(-30 62 66)">
        <rect x="58" y="62" width="9" height="26" rx="2" fill={PAL.steel} />
        <path d="M58 68H67M58 74H67M58 80H67" stroke={PAL.slate} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M52 56L56 50H70L74 56L70 62H56Z" fill={PAL.mist} />
        <path d="M70 50L74 56L70 62H64V50Z" fill={PAL.steel} />
      </g>
      {/* The red ring: that does not belong there */}
      <circle cx="63" cy="66" r="24" fill="none" stroke={PAL.red} strokeWidth="5" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
