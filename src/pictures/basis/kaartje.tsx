import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het kaartje": the ticket — a paper train ticket, a little tilted: a yellow band with a dark train
  // front on the left, grey lines (the journey) and a square code; on the right a stub behind a dotted
  // tear line, with round notches in the edges.
  'w.kaartje': () => {
    const ticket = 'M12 34Q12 30 16 30H104Q108 30 108 34V52A6 6 0 0 0 108 64V82Q108 86 104 86H16Q12 86 12 82V64A6 6 0 0 0 12 52Z';
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <g transform="rotate(-10 60 58)">
          <path d={ticket} fill={PAL.paperShade} transform="translate(0 5)" />
          <path d={ticket} fill={PAL.white} />
          {/* The yellow band with the train front */}
          <path d="M12 34Q12 30 16 30H80V86H16Q12 86 12 82V64A6 6 0 0 0 12 52Z" fill={PAL.yellow} />
          <path d="M22 72V50Q22 44 28 44H38Q44 44 44 50V72Z" fill={PAL.slate} />
          <rect x="25" y="48" width="16" height="9" rx="2" fill={PAL.ice} />
          <circle cx="27" cy="66" r="2.2" fill={PAL.yellowLight} />
          <circle cx="39" cy="66" r="2.2" fill={PAL.yellowLight} />
          <path d="M25 72L21 78M41 72L45 78" stroke={PAL.slate} strokeWidth="3" />
          {/* The journey lines */}
          <path d="M52 46H72M52 56H68M52 66H74" stroke={PAL.yellowShade} strokeWidth="3.4" />
          {/* The tear line and the stub with its code */}
          <path d="M80 34V82" stroke={PAL.line} strokeWidth="2.2" strokeDasharray="1 5" />
          <rect x="86" y="44" width="16" height="16" rx="2" fill={PAL.slate} />
          <rect x="89" y="47" width="5" height="5" fill={PAL.white} />
          <rect x="95" y="53" width="4" height="4" fill={PAL.white} />
          <path d="M87 70H101M87 76H97" stroke={PAL.line} strokeWidth="2.4" />
          <Shine d="M18 38H40" color={PAL.yellowShine} width={3} opacity={0.8} />
        </g>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
