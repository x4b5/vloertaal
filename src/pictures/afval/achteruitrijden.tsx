import type { JSX } from 'react';
import { Arrow, Ground, Move, PAL, Shade, Shine } from '../kit';

/** A wheel of the lorry: black tyre, steel hub. */
const wheel = (cx: number, cy: number, r = 10) => (
  <g key={cx}>
    <circle cx={cx} cy={cy} r={r} fill={PAL.ink} />
    <circle cx={cx} cy={cy} r={r * 0.42} fill={PAL.steel} />
  </g>
);

export default {
  // "achteruitrijden": to reverse — the bin lorry of "de vuilniswagen" (facing left), a little smaller, with
  // its white reversing lights on at the back, and over it a big blue arrow pointing backwards (to the right).
  // On the intro card the lorry rolls backwards into place, once (a manoeuvre with an end, as "parkeren").
  'w.achteruitrijden': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={52} ry={4} />
      <Arrow from={[26, 20]} to={[104, 20]} color={PAL.sky} width={9} head={15} />
      <Move kind="from" dx={-28} once>
        <g transform="translate(6 30) scale(.84)">
          <rect x="12" y="78" width="98" height="9" rx="2" fill={PAL.slate} />
          <Shade color={PAL.greenShade} opacity={1} at={[104, 66, 14, 44]}>
            <path d="M40 82V36Q40 24 52 24H88Q98 24 98 36V82Z" fill={PAL.green} />
          </Shade>
          <path d="M60 30V62M78 30V62" stroke={PAL.greenShade} strokeWidth="2.2" strokeLinecap="round" />
          <rect x="40" y="66" width="58" height="6" fill={PAL.yellow} />
          <Shine d="M46 40Q46 30 56 30H70" width={3.6} opacity={0.5} />
          <path d="M98 28L106 32L112 84H98Z" fill={PAL.slate} />
          <path d="M106 32L112 84H107Z" fill={PAL.slateDark} />
          {/* The reversing light, on, with its glow */}
          <circle cx="112" cy="72" r="7" fill={PAL.white} opacity=".5" />
          <rect x="107" y="68" width="8" height="8" rx="2" fill={PAL.white} />
          <path d="M22 40H32V44H22Z" fill={PAL.orangeShade} />
          <path d="M21 41A6 6 0 0 1 33 41Z" fill={PAL.orange} />
          <Shade color={PAL.mist} opacity={1} at={[42, 70, 6, 36]}>
            <path d="M10 84V56Q10 44 21 42H34Q38 42 38 46V84Z" fill={PAL.paper} />
          </Shade>
          <rect x="10" y="66" width="28" height="18" fill={PAL.mist} />
          <path d="M14 57Q15 48 22 48H34V60H14Z" fill={PAL.ice} />
          <rect x="7" y="76" width="10" height="9" rx="2" fill={PAL.slateDark} />
          <path d="M30 66V82" stroke={PAL.steel} strokeWidth="1.6" strokeLinecap="round" />
          {wheel(24, 92)}
          {wheel(74, 92)}
          {wheel(94, 92)}
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
