import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de printer": the printer — a grey label printer with a sloping top, a small blue screen and a green
  // button; a strip of white labels with grey lines comes out of the slot at its right side.
  // On the intro card the strip of labels comes out of the printer (three rounds: the machine at work).
  'w.printer': () => (
    <g strokeLinejoin="round">
      <Ground cx={52} cy={102} rx={46} ry={4} />
      {/* The strip of labels coming out to the right */}
      <Move kind="grow" grow={0.1}>
        <rect x="62" y="72" width="46" height="24" rx="1.5" fill={PAL.paperShade} />
        <rect x="62" y="69" width="46" height="24" rx="1.5" fill={PAL.white} />
        <path d="M84 69V93" stroke={PAL.paperShade} strokeWidth="1.8" />
        <path d="M70 76H80M70 82H78M70 88H79M89 76H102M89 82H98M89 88H100" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      </Move>
      {/* The body: a box with a sloping top */}
      <path d="M66 52L74 46V94L66 102Z" fill={PAL.slate} />
      <Shade color={PAL.steel} opacity={1} at={[72, 80, 8, 30]}>
        <path d="M12 56Q12 50 18 48L60 40Q66 40 66 46V102H12Z" fill={PAL.mist} />
      </Shade>
      <path d="M18 48L60 40Q66 40 66 46L74 46L66 38Q62 34 56 35L20 42Z" fill={PAL.paper} />
      {/* The slot */}
      <rect x="62" y="66" width="5" height="30" rx="1.5" fill={PAL.slateDark} />
      {/* Screen and button */}
      <rect x="20" y="58" width="26" height="14" rx="2.5" fill={PAL.slateDark} />
      <rect x="23" y="61" width="20" height="8" rx="1.5" fill={PAL.ice} />
      <circle cx="54" cy="65" r="4.5" fill={PAL.leaf} />
      <rect x="20" y="82" width="38" height="6" rx="3" fill={PAL.steel} />
      <Shine d="M16 62V92" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
