import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

export default {
  // "uitbenen": to bone (to cut the bones out of meat) — a red piece of meat on a wooden board with its
  // long white bone half cut free and sticking out at the right; a boning knife cuts along the bone.
  // On the intro card the knife cuts along the bone (three rounds: work you do again and again).
  'w.uitbenen': () => (
    <g strokeLinejoin="round">
      {/* The cutting board */}
      <rect x="8" y="90" width="104" height="14" rx="4" fill={PAL.cardShade} />
      <rect x="8" y="88" width="104" height="9" rx="4" fill={PAL.card} />
      <Shine d="M14 91H40" width={2.2} opacity={0.6} />
      {/* The meat, its fat rim on top */}
      <Shade color={PAL.redShade} opacity={1} at={[92, 82, 16, 20]}>
        <path d="M14 82Q10 62 30 54Q54 44 78 54Q92 62 88 80Q86 92 72 92H26Q16 92 14 82Z" fill={PAL.red} />
      </Shade>
      <path d="M18 66Q26 54 44 50Q62 47 76 54" fill="none" stroke={PAL.redLight} strokeWidth="5" strokeLinecap="round" />
      {/* The bone: a white bar with knobbly ends, cut half free */}
      <path d="M40 72L96 50" stroke={PAL.paperShade} strokeWidth="11" strokeLinecap="round" />
      <path d="M40 70L96 48" stroke={PAL.paper} strokeWidth="8" strokeLinecap="round" />
      <circle cx="98" cy="42" r="7" fill={PAL.paper} />
      <circle cx="104" cy="52" r="6" fill={PAL.paperShade} />
      <circle cx="101" cy="49" r="6" fill={PAL.paper} />
      {/* The boning knife, cutting along the bone */}
      <Move kind="from" dx={-20} dy={-10}>
        <path d="M34 78L66 66L70 69L38 82Z" fill={PAL.mist} />
        <path d="M38 82L70 69L66 72L40 83Z" fill={PAL.steel} />
        <path d="M14 88L36 79" stroke={PAL.slateDark} strokeWidth="9" strokeLinecap="round" />
        <path d="M16 85L28 80" stroke={PAL.slate} strokeWidth="2.6" strokeLinecap="round" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
