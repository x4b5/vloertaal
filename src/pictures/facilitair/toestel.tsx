import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het toestel": the extension — one office desk phone: a dark sloping base with a grey keypad of
  // twelve keys and a small lit display, the handset lying on top, its curly cord at the side.
  'w.toestel': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={48} ry={4} />
      {/* The base: a wedge, its front and its sloping top */}
      <path d="M14 100L22 52H98L106 100Z" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={1} at={[104, 76, 14, 30]}>
        <path d="M16 96L24 54H96L104 96Z" fill={PAL.slate} />
      </Shade>
      <rect x="14" y="96" width="92" height="8" rx="3" fill={PAL.slateDark} />
      {/* The display */}
      <rect x="30" y="60" width="26" height="12" rx="2.5" fill={PAL.ice} />
      <path d="M34 66H50" stroke={PAL.sky} strokeWidth="2" strokeLinecap="round" />
      {/* The keypad: three by four keys */}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => (
          <rect key={`${r}${c}`} x={62 + c * 11 + r * -0.6} y={60 + r * 9} width="8.5" height="6.5" rx="1.8" fill={PAL.mist} />
        )),
      )}
      {/* Two big keys under the display */}
      <rect x="28" y="78" width="12" height="8" rx="2" fill={PAL.leaf} />
      <rect x="44" y="78" width="12" height="8" rx="2" fill={PAL.red} />
      {/* The curly cord */}
      <path d="M14 70Q8 74 12 78Q16 82 10 86Q6 90 12 92" fill="none" stroke={PAL.slateDark} strokeWidth="3" strokeLinecap="round" />
      {/* The handset lying on top */}
      <path d="M14 40Q12 30 22 30H96Q106 30 104 40L102 46Q100 52 92 50L86 48Q82 46 80 42H38Q36 46 32 48L26 50Q18 52 16 46Z" fill={PAL.slateDark} transform="translate(0 4)" />
      <path d="M14 40Q12 30 22 30H96Q106 30 104 40L102 46Q100 52 92 50L86 48Q82 46 80 42H38Q36 46 32 48L26 50Q18 52 16 46Z" fill={PAL.slate} />
      <Shine d="M22 34H44" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
