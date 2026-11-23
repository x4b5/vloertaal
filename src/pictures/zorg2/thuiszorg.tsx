import type { JSX } from 'react';
import { CastHead, type CharacterId } from '../../components/Characters';
import { Ground, Move, PAL, SKIN, Shade, Shine } from '../kit';

/** A cast member's own head (no bust), its neck base at (x, y), `s` times the bust's size. */
function Head({ who, x, y, s = 0.5 }: { who: CharacterId; x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -96)`}>
      <CastHead who={who} expr="pleased" gaze={[0, 0]} />
    </g>
  );
}

export default {
  // "de thuiszorg": home care — a client's own house (red roof, the front door open) and the carer (Jada,
  // in her sky-blue care tunic, a blue care bag in her hand) walking up to the door.
  // On the intro card she walks in from the left to the door. Once and slowly (she arrives once).
  'w.thuiszorg': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={64} cy={105} rx={48} ry={4} />
      {/* The house */}
      <Shade color={PAL.cardShade} opacity={1} at={[112, 76, 12, 40]}>
        <rect x="50" y="50" width="58" height="54" fill={PAL.card} />
      </Shade>
      <path d="M44 54L79 22L114 54Z" fill={PAL.clayShade} />
      <path d="M44 52L79 20L106 45" fill="none" stroke={PAL.clay} strokeWidth="6" />
      <rect x="88" y="60" width="14" height="14" rx="2" fill={PAL.ice} />
      <path d="M95 60V74M88 67H102" stroke={PAL.white} strokeWidth="2" />
      {/* The open front door */}
      <rect x="60" y="66" width="18" height="38" fill={PAL.slateDark} />
      <path d="M60 66L52 70V104L60 104Z" fill={PAL.green} />
      <Shine d="M54 50V60" width={0} opacity={0} />
      {/* The carer walking up to the door */}
      <Move kind="from" dx={-30} once>
        <path d="M28 78L23 102M34 78L40 102" stroke={PAL.navy} strokeWidth="7.5" />
        <ellipse cx="22" cy="103" rx="5.4" ry="3" fill={PAL.slateDark} />
        <ellipse cx="42" cy="103" rx="5.4" ry="3" fill={PAL.slateDark} />
        <Shade color={PAL.skyShade} opacity={1} at={[44, 62, 6, 24]}>
          <rect x="18" y="46" width="24" height="36" rx="9" fill={PAL.sky} />
        </Shade>
        <path d="M24 46L30 56L36 46" fill="none" stroke={PAL.white} strokeWidth="2.6" />
        {/* Her arm and the care bag */}
        <path d="M38 52L44 72" stroke={PAL.sky} strokeWidth="6.5" />
        <circle cx="45" cy="75" r="3.6" fill={SKIN.jada[0]} />
        <path d="M40 76Q45 70 50 76" fill="none" stroke={PAL.navyShade} strokeWidth="2.4" />
        <rect x="36" y="76" width="18" height="14" rx="3" fill={PAL.navy} />
        <rect x="43" y="80" width="4" height="7" rx="1" fill={PAL.white} />
        <path d="M41.5 83.5H48.5" stroke={PAL.white} strokeWidth="2.4" />
        <Head who="jada" x={30} y={48} s={0.42} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
