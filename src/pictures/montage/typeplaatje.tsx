import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** The shaded side of the metal plate and the blue housing's dark side: one step down. */
const STEEL_DARK = '#5d6a75';
const BLUE_DEEP = '#0f5690';

export default {
  // "het typeplaatje": the rating plate — the front of a blue machine housing in a slanted view, with a
  // big silver plate on it: four rivets, dark text lines and a small barcode.
  'w.typeplaatje': () => (
    <g strokeLinejoin="round">
      {/* Shadow under the housing */}
      <path d="M10 104L92 104L108 92L26 92Z" fill="#000" opacity="0.14" />
      {/* The housing: right side, top, front */}
      <path d="M90 102L90 34L108 20L108 88Z" fill={PAL.blueShade} />
      <path d="M12 34L90 34L108 20L30 20Z" fill={PAL.blueLight} />
      <Shade color={BLUE_DEEP} opacity={0.35} at={[96, 70, 10, 40]}>
        <rect x="12" y="34" width="78" height="68" fill={PAL.blue} />
      </Shade>
      <Shine d="M16 40V60" opacity={0.5} width={3} />
      {/* The plate: depth edge, then the silver face */}
      <rect x="24" y="45" width="58" height="47" rx="3.5" fill={STEEL_DARK} />
      <Shade color={PAL.steel} opacity={0.8} at={[82, 70, 7, 30]}>
        <rect x="22" y="43" width="58" height="47" rx="3.5" fill={PAL.mist} />
      </Shade>
      <path d="M28 47H50" stroke={PAL.white} strokeWidth="2.2" strokeLinecap="round" opacity="0.8" />
      {/* Four rivets in the corners */}
      <circle cx="27.5" cy="48.5" r="2.4" fill={PAL.steel} />
      <circle cx="74.5" cy="48.5" r="2.4" fill={PAL.steel} />
      <circle cx="27.5" cy="84.5" r="2.4" fill={PAL.steel} />
      <circle cx="74.5" cy="84.5" r="2.4" fill={PAL.steel} />
      {/* The text lines */}
      <path d="M34 53H68" stroke={PAL.slate} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M34 61H60M34 67.5H64" stroke={PAL.slate} strokeWidth="2.2" strokeLinecap="round" />
      {/* The barcode */}
      <path d="M35 74V84M38.2 74V84M42 74V84M44.6 74V84M48.6 74V84M52.4 74V84M55 74V84M58.6 74V84" stroke={PAL.slateDark} strokeWidth="1.8" />
      <path d="M40.2 74V84M50.6 74V84M61.2 74V84" stroke={PAL.slateDark} strokeWidth="1.2" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
