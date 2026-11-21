import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** Copper: a lighter and a darker step of terracotta (no new hue). */
const COPPER = PAL.clayLight;
const COPPER_DARK = PAL.clay;

/** The tang is drawn lying flat along x (handles left, jaws right) and turned to rise to the top right. */
const TURN = 'translate(64 58) rotate(-38) scale(0.8) translate(-60 -60)';

export default {
  // "de striptang": the wire stripper — lying on a slant, orange handles at the bottom left, big steel jaws at the top right
  // with their row of notches; a blue wire comes in from the top right, a bit of bare copper and the pulled-off insulation below
  'w.striptang': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={105} rx={40} ry={4} />
      <g transform={TURN}>
        {/* The wire, behind the jaws, across the middle notch: insulated above (coming from the top right) */}
        <path d="M116 34Q94 32 88 44V52" fill="none" stroke={PAL.blueShade} strokeWidth="9" strokeLinecap="round" />
        <path d="M116 34Q94 32 88 44V52" fill="none" stroke={PAL.blue} strokeWidth="5.6" strokeLinecap="round" transform="translate(-1.2 0)" />
        {/* Below the jaws: the bare copper core, then the piece of insulation pulled off */}
        <path d="M88 68V82" stroke={COPPER} strokeWidth="4.6" strokeLinecap="round" />
        <path d="M89.6 70V81" stroke={COPPER_DARK} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M88 88V102" stroke={PAL.blueShade} strokeWidth="9" strokeLinecap="round" />
        <path d="M86.8 88V102" stroke={PAL.blue} strokeWidth="5.6" strokeLinecap="round" />
        {/* The handles: steel by the pivot, then the orange grips */}
        <path d="M60 55L36 46" stroke={PAL.steel} strokeWidth="9" strokeLinecap="round" />
        <path d="M60 65L36 72" stroke={PAL.steel} strokeWidth="9" strokeLinecap="round" />
        <path d="M42 47L2 36" stroke={PAL.orange} strokeWidth="14" strokeLinecap="round" />
        <path d="M42 72L2 80" stroke={PAL.orangeShade} strokeWidth="14" strokeLinecap="round" />
        <Shine d="M36 42.6L10 35.6" width={3} opacity={0.65} />
        {/* The jaws: two big steel halves meeting along the middle */}
        <Shade color={PAL.steel} opacity={1} at={[88, 80, 44, 17]}>
          <path d="M56 49Q62 41 74 41L102 44Q118 48 118 60Q118 72 102 76L74 79Q62 79 56 71Z" fill={PAL.mist} />
        </Shade>
        {/* The cutting line and its notches; the wire's copper in the middle one */}
        <path d="M66 60H115" stroke={PAL.slate} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="75" cy="60" r="3.8" fill={PAL.slate} />
        <circle cx="88" cy="60" r="5" fill={COPPER} />
        <circle cx="101" cy="60" r="3.2" fill={PAL.slate} />
        <Shine d="M74 45.4L100 47.4" width={2.6} opacity={0.9} />
        {/* The pivot */}
        <circle cx="62" cy="60" r="6.4" fill={PAL.slate} />
        <circle cx="62" cy="60" r="2.8" fill={PAL.steel} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
