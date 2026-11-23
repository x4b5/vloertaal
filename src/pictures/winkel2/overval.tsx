import type { JSX } from 'react';
import { ExclaimMark, PAL, Shade, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de overval": the robbery (someone takes money with threats) — on the right Henk at the till with
  // both hands up, afraid; on the left a robber in a dark balaclava (only an eye slit) and a dark jacket
  // grabbing a money bag with a coin on it; a red exclamation mark between them. No weapon and no
  // violence shown: the raised hands and the mask tell it. A scene: it stays still.
  'w.overval': () => (
    <g strokeLinejoin="round">
      {/* Henk, hands up */}
      <Bust who="henk" x={84} y={120} scale={0.6} emotion="afraid" arms="raised" />
      {/* The robber: jacket, balaclava with an eye slit */}
      <Shade color={PAL.ink} opacity={0.5} at={[52, 100, 10, 30]}>
        <path d="M6 120V100Q6 84 28 82Q48 84 48 100V120Z" fill={PAL.slateDark} />
      </Shade>
      <ellipse cx="27" cy="62" rx="15" ry="18" fill={PAL.ink} />
      <rect x="16" y="56" width="22" height="7" rx="3.5" fill="#f0b791" />
      <circle cx="22" cy="59.5" r="2" fill={PAL.ink} />
      <circle cx="32" cy="59.5" r="2" fill={PAL.ink} />
      <Shine d="M17 50Q20 45 26 44" width={2.4} opacity={0.3} />
      {/* His arm reaching out with the money bag */}
      <path d="M40 94L52 86" stroke={PAL.slateDark} strokeWidth="10" strokeLinecap="round" />
      <circle cx="56" cy="84" r="5" fill="#f0b791" />
      <path d="M52 66Q54 60 58 62Q62 60 64 66" fill={PAL.cardShade} />
      <Shade color={PAL.cardDark} opacity={1} at={[72, 80, 6, 14]}>
        <path d="M50 70Q48 64 58 64Q68 64 66 70Q72 76 70 84Q68 92 58 92Q48 92 46 84Q44 76 50 70Z" fill={PAL.card} />
      </Shade>
      <circle cx="58" cy="80" r="5.4" fill={PAL.yellow} />
      <circle cx="58" cy="80" r="2.8" fill="none" stroke={PAL.yellowShade} strokeWidth="1.4" />
      <ExclaimMark x={54} y={26} size={26} color={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
