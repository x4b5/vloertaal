import type { JSX } from 'react';
import { Ground, Move, PAL, Shade } from '../kit';

export default {
  // "doseren": to measure out — a purple bottle of product, tipped over a clear measuring cup, pours a
  // purple stream into it; the liquid stands exactly at the red line on the cup's scale (the right amount).
  // Once: the bottle tips over into the pour while the liquid rises to the red line; then the stream shows.
  'w.doseren': () => (
    <g strokeLinejoin="round">
      <Ground cx={74} cy={105} rx={26} ry={4} />
      {/* The cup's back wall */}
      <path d="M52 58H98L95 101Q95 105 91 105H59Q55 105 55 101Z" fill={PAL.ice} opacity=".35" />
      {/* The liquid, up to the red line */}
      <Move kind="sag" grow={0.25} once>
        <path d="M53.6 78H96.6L95 101Q95 105 91 105H59Q55 105 55 101Z" fill={PAL.purple} />
        <path d="M86 80H96.5L95 101Q95 105 91 105H86Q90 100 88 80Z" fill={PAL.purpleShade} />
        <ellipse cx="75" cy="78" rx="21.5" ry="3.2" fill={PAL.purpleLight} />
      </Move>
      {/* The cup's wall, rim and scale */}
      <path d="M52 58L55 101M98 58L95 101" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="75" cy="58" rx="23" ry="4.4" fill="none" stroke={PAL.mist} strokeWidth="3" />
      <path d="M58 68H64M58 88H64M58 98H64" stroke={PAL.navy} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M56 78H70" stroke={PAL.red} strokeWidth="3.4" strokeLinecap="round" />
      {/* The stream */}
      <Move kind="show">
        <path d="M66 52Q71 60 72 77" fill="none" stroke={PAL.purple} strokeWidth="4.4" strokeLinecap="round" />
      </Move>
      {/* The bottle, tipped over the cup */}
      <Move kind="turn" turn={-75} at={[38, 44]} once>
        <g transform="translate(38 44) rotate(122)">
          <rect x="-4.5" y="-34" width="9" height="12" rx="2" fill={PAL.purpleShade} />
          <rect x="-6.5" y="-26" width="13" height="7" rx="2" fill={PAL.paperShade} />
          <Shade color={PAL.purpleShade} opacity={1} at={[0, 32, 24, 10]}>
            <rect x="-14" y="-21" width="28" height="48" rx="7" fill={PAL.purple} />
          </Shade>
          <rect x="-9" y="-6" width="18" height="18" rx="2.5" fill={PAL.white} />
          <path d="M-5 0H5M-5 6H3" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
