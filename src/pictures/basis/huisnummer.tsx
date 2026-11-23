import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het huisnummer": the house number — a piece of brick front wall with the edge of the front door,
  // and next to it a big white enamel number plate with a dark rim; the number is two thick dark
  // blocks (no digits), as the numbers in "het nummer".
  'w.huisnummer': () => (
    <g strokeLinejoin="round">
      {/* The brick wall */}
      <rect x="12" y="12" width="96" height="96" rx="6" fill={PAL.clay} />
      <path d="M88 12H102Q108 12 108 18V102Q108 108 102 108H88Z" fill={PAL.clayShade} />
      <path d="M12 28H108M12 46H108M12 64H108M12 82H108M12 100H108M60 12V28M84 28V46M60 46V64M84 64V82M60 82V100M36 28V46M36 64V82" stroke={PAL.clayShade} strokeWidth="1.8" strokeLinecap="round" />
      {/* The edge of the front door, with its frame */}
      <rect x="12" y="20" width="26" height="88" rx="2" fill={PAL.paper} />
      <rect x="12" y="25" width="20" height="83" fill={PAL.wood} />
      <circle cx="27" cy="68" r="2.6" fill={PAL.yellow} />
      {/* The number plate: depth edge, white face, dark rim, two dark number blocks */}
      <rect x="48" y="34" width="52" height="40" rx="7" fill={PAL.paperShade} transform="translate(0 4)" />
      <rect x="48" y="34" width="52" height="40" rx="7" fill={PAL.white} />
      <rect x="52.5" y="38.5" width="43" height="31" rx="4.5" fill="none" stroke={PAL.navy} strokeWidth="3" />
      <rect x="61" y="44" width="10" height="20" rx="3" fill={PAL.navy} />
      <rect x="77" y="44" width="10" height="20" rx="3" fill={PAL.navy} />
      <Shine d="M51 46Q51 38 58 38" width={2.4} opacity={0.9} color={PAL.paperShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
