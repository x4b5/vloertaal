import type { JSX } from 'react';
import { Move, PAL, SKIN, Shade, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "aanhouden": to hold someone (until the police come) — Henk, the guard in his navy uniform (right),
  // holds a person in a grey hood (seen from behind, left) firmly by the upper arm; a blue police light
  // (top left) says the police are on their way.
  // On the intro card Henk's hand comes to the person's arm and takes hold. Once (it happens once).
  'w.aanhouden': () => {
    const [s, sh] = SKIN.henk;
    return (
      <g strokeLinejoin="round">
        {/* The police light: the police are coming */}
        <path d="M22 8V12M12 14L15 17M32 14L29 17" stroke={PAL.sky} strokeWidth="3" strokeLinecap="round" />
        <path d="M14 30V24Q14 17 22 17Q30 17 30 24V30Z" fill={PAL.sky} />
        <path d="M23 17Q30 18 30 24V30H23Z" fill={PAL.skyShade} />
        <rect x="11" y="29" width="22" height="6" rx="2" fill={PAL.slate} />
        {/* Henk, the guard */}
        <Bust who="henk" x={88} y={122} scale={0.66} expr="neutral" bold />
        {/* The person in the hood, from behind */}
        <Shade color={PAL.slate} opacity={0.45} at={[70, 100, 10, 30]}>
          <path d="M14 122L16 92Q18 78 34 76H54Q68 78 70 92L72 122Z" fill={PAL.steel} />
        </Shade>
        <Shade color={PAL.slate} opacity={0.45} at={[62, 60, 8, 24]}>
          <path d="M26 66Q26 42 43 42Q60 42 60 66Q60 80 43 80Q26 80 26 66Z" fill={PAL.steel} />
        </Shade>
        <path d="M43 46V60" stroke={PAL.slate} strokeWidth="1.8" strokeLinecap="round" opacity=".6" />
        <Shine d="M31 58Q32 49 38 46" width={3} opacity={0.4} />
        {/* Henk's arm and hand round the upper arm */}
        <Move kind="from" dx={24} once>
          <path d="M84 104L66 96" stroke="#2d5a92" strokeWidth="11" strokeLinecap="round" />
          <rect x="66" y="88" width="5" height="15" rx="2" fill={PAL.navyShade} transform="rotate(24 68 96)" />
          <g transform="translate(60 92) rotate(-8)">
            <rect x="-8" y="-9" width="13" height="18" rx="3.5" fill={s} />
            <path d="M-8 -4H4M-8 0.5H4M-8 5H4" stroke={sh} strokeWidth="1.3" />
            <rect x="-10" y="-6" width="6" height="11" rx="2.6" fill={s} />
          </g>
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
