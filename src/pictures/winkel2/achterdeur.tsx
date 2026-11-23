import type { JSX } from 'react';
import { Box, Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de achterdeur": the back door — the plain back of the shop: a grey wall with brick lines, a heavy
  // steel door with a push bar and a small lamp above it, a concrete step, and a stack of flattened and
  // closed boxes next to it (where deliveries and rubbish go). Not the orange front door of "de deur".
  // A thing: it stays still.
  'w.achterdeur': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={106} rx={52} ry={3.6} />
      {/* The wall */}
      <rect x="6" y="12" width="108" height="92" rx="2" fill={PAL.mist} />
      <path d="M6 26H114M6 40H114M6 54H114M6 68H114M6 82H114M6 96H114" stroke={PAL.paperShade} strokeWidth="1.6" />
      <path d="M26 12V26M60 26V40M94 12V26M16 40V54M98 40V54M26 54V68M100 68V82M20 82V96" stroke={PAL.paperShade} strokeWidth="1.6" />
      {/* The lamp */}
      <path d="M38 18H56L52 24H42Z" fill={PAL.slate} />
      <ellipse cx="47" cy="25" rx="5" ry="2.4" fill={PAL.yellowLight} />
      {/* The steel door in its frame */}
      <rect x="22" y="28" width="50" height="74" rx="1.5" fill={PAL.slateDark} />
      <Shade color={PAL.slate} opacity={1} at={[72, 66, 10, 40]}>
        <rect x="26" y="32" width="42" height="70" fill={PAL.steel} />
      </Shade>
      <rect x="30" y="64" width="34" height="6" rx="3" fill={PAL.slate} />
      <rect x="28" y="62" width="4" height="10" rx="1.5" fill={PAL.slateDark} />
      <rect x="62" y="62" width="4" height="10" rx="1.5" fill={PAL.slateDark} />
      <Shine d="M30 38V56" width={2.6} opacity={0.5} />
      {/* The step */}
      <rect x="18" y="100" width="58" height="6" rx="1.5" fill={PAL.line} />
      {/* The boxes next to it */}
      <Box x={80} y={80} w={24} h={24} depth={6} />
      <Box x={83} y={60} w={18} h={18} depth={5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
