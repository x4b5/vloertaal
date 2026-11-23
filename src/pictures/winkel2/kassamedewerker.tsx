import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de kassamedewerker": the cashier — Amina sitting at the checkout: in front of her the wooden counter
  // with the dark till and its green screen on her left, the scanner's glass window in the counter
  // top, and a little belt with a product coming in on her right. A person: it stays still.
  'w.kassamedewerker': () => (
    <g strokeLinejoin="round">
      <Bust who="amina" x={62} y={112} scale={0.82} expr="pleased" />
      {/* The counter */}
      <rect x="4" y="88" width="112" height="26" rx="3" fill={PAL.cardDark} />
      <rect x="4" y="84" width="112" height="10" rx="3" fill={PAL.wood} />
      <rect x="44" y="86" width="30" height="5" rx="1.5" fill={PAL.slate} />
      <rect x="46" y="87" width="26" height="3" rx="1" fill={PAL.ice} opacity=".8" />
      {/* The belt with a product */}
      <rect x="82" y="85" width="36" height="6" rx="2" fill={PAL.slateDark} />
      <rect x="98" y="72" width="14" height="14" rx="2" fill={PAL.green} />
      <rect x="107" y="72" width="5" height="14" fill={PAL.greenShade} />
      {/* The till on her left: screen on a stand */}
      <rect x="20" y="66" width="5" height="20" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={1} at={[40, 60, 8, 16]}>
        <rect x="6" y="46" width="32" height="22" rx="3" fill={PAL.slate} />
      </Shade>
      <rect x="9" y="49" width="24" height="15" rx="2" fill={PAL.lime} />
      <path d="M14 56H28" stroke={PAL.greenShade} strokeWidth="2.4" strokeLinecap="round" />
      <Shine d="M10 88H40" width={2.2} opacity={0.35} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
