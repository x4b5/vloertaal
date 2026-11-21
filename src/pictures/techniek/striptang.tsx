import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** Copper: a lighter and a darker step of terracotta (no new hue). */
const COPPER = PAL.clayLight;
const COPPER_DARK = PAL.clay;

export default {
  // "de striptang": the wire stripper — pliers with orange handles and big notched steel jaws, a blue wire in one
  // notch: on the right the insulation is pulled off and the copper core shows
  'w.striptang': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={34} ry={4} />
      {/* The wire, behind the jaws: insulated on the left */}
      <path d="M12 34H52" stroke={PAL.blueShade} strokeWidth="9" strokeLinecap="round" />
      <path d="M12 32.6H52" stroke={PAL.blue} strokeWidth="5.6" strokeLinecap="round" />
      {/* On the right: the bare copper core, then the piece of insulation being pulled off */}
      <path d="M66 34H84" stroke={COPPER} strokeWidth="4.4" strokeLinecap="round" />
      <path d="M68 35.6H83" stroke={COPPER_DARK} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M86 34H100" stroke={PAL.blueShade} strokeWidth="9" strokeLinecap="round" />
      <path d="M86 32.6H100" stroke={PAL.blue} strokeWidth="5.6" strokeLinecap="round" />
      <path d="M100 26L106 24M101 42L107 44" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      {/* The handles: steel near the pivot, orange grips spreading down */}
      <path d="M53 58L36 96" stroke={PAL.steel} strokeWidth="9" strokeLinecap="round" />
      <path d="M67 58L84 96" stroke={PAL.steel} strokeWidth="9" strokeLinecap="round" />
      <path d="M47 70L30 104" stroke={PAL.orange} strokeWidth="14" strokeLinecap="round" />
      <path d="M73 70L90 104" stroke={PAL.orangeShade} strokeWidth="14" strokeLinecap="round" />
      <Shine d="M44.5 73L35 92" width={3} opacity={0.6} />
      {/* The jaws: two steel halves meeting in the middle, closed on the wire */}
      <Shade color={PAL.steel} opacity={1} at={[76, 36, 16, 34]}>
        <path d="M60 12Q46 14 45 28V54Q45 62 52 64H68Q75 62 75 54V28Q74 14 60 12Z" fill={PAL.mist} />
      </Shade>
      {/* The cutting line with its notches, the wire in the middle one */}
      <path d="M60 15V58" stroke={PAL.slate} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="60" cy="23" r="3" fill={PAL.slate} />
      <circle cx="60" cy="34" r="4" fill={COPPER} />
      <circle cx="60" cy="46" r="4.6" fill={PAL.slate} />
      <Shine d="M50 24Q51 18 56 16" width={2.6} opacity={0.9} />
      {/* The pivot */}
      <circle cx="60" cy="58" r="6" fill={PAL.slate} />
      <circle cx="60" cy="58" r="2.6" fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
