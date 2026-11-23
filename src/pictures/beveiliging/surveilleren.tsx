import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Arrow, Ground, Move, PAL, SKIN, Shade } from '../kit';

export default {
  // "surveilleren": to patrol (to walk around and watch) — a guard (Jada, in a navy uniform with a peaked
  // cap and a yellow badge) walks along with her torch lit in front of her; a dashed blue route runs
  // behind her and on past her, ending in an arrow: she walks her round.
  // Once and slowly: she walks in from the left along the route.
  'w.surveilleren': () => (
    <g strokeLinejoin="round" transform="translate(-6 -8) scale(1.1)">
      <Ground cx={56} cy={105} rx={40} ry={4} />
      <path d="M16 104H82" fill="none" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" strokeDasharray="7 6" />
      <Arrow from={[84, 104]} to={[105, 104]} color={PAL.sky} width={6} head={11} />
      <Move kind="slow" dx={-34} once>
        {/* The legs mid-step */}
        <path d="M50 76L42 101M56 76L66 101" stroke={PAL.slateDark} strokeWidth="9" strokeLinecap="round" />
        <ellipse cx="40" cy="102" rx="6" ry="3.2" fill={PAL.ink} />
        <ellipse cx="69" cy="102" rx="6" ry="3.2" fill={PAL.ink} />
        {/* The beam of the torch */}
        <path d="M76 58L106 45V75Z" fill={PAL.yellowShine} opacity=".85" />
        {/* The navy jacket, the badge */}
        <Shade color={PAL.navyShade} opacity={1} at={[70, 62, 7, 24]}>
          <rect x="40" y="42" width="27" height="38" rx="9" fill={PAL.navy} />
        </Shade>
        <path d="M43 47L54 47" stroke={PAL.slateDark} strokeWidth="3" strokeLinecap="round" />
        <rect x="45" y="52" width="8" height="9" rx="2" fill={PAL.yellow} />
        {/* The arm with the torch */}
        <path d="M60 50L68 62L76 60" fill="none" stroke={PAL.navy} strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="76" cy="60" r="4.2" fill={SKIN.jada[0]} />
        <rect x="70" y="55" width="12" height="7" rx="2.5" fill={PAL.slate} transform="rotate(-18 76 58)" />
        <rect x="80" y="51" width="4" height="10" rx="1.5" fill={PAL.yellow} transform="rotate(-18 82 56)" />
        {/* The head and the peaked cap */}
        <g transform="translate(53 44) scale(0.44) translate(-60 -96)">
          <CastHead who="jada" expr="neutral" gaze={[0.6, 0]} bold />
        </g>
        <path d="M41 19Q42 9 53 9Q64 9 65 19Z" fill={PAL.navy} />
        <path d="M40 19H70Q70 23 64 23H41Z" fill={PAL.slateDark} />
        <rect x="50" y="11" width="6" height="5" rx="1.5" fill={PAL.yellow} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
