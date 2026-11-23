import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de kassamedewerker": the cashier — Amina sitting at the checkout: in front of her the wooden counter
  // with the dark till and its green screen on her left, the scanner's glass window in the counter
  // top, and a little belt with a product coming in on her right. A person: it stays still.
  'w.kassamedewerker': () => (
    <g strokeLinejoin="round">
      <Bust who="amina" x={58} y={108} scale={0.7} expr="pleased" />
      {/* The counter */}
      <rect x="4" y="92" width="112" height="18" rx="3" fill={PAL.cardDark} />
      <rect x="4" y="88" width="112" height="10" rx="3" fill={PAL.wood} />
      <rect x="42" y="90" width="30" height="5" rx="1.5" fill={PAL.slate} />
      <rect x="44" y="91" width="26" height="3" rx="1" fill={PAL.ice} opacity=".8" />
      {/* The belt with a product */}
      <rect x="80" y="89" width="36" height="6" rx="2" fill={PAL.slateDark} />
      <rect x="96" y="76" width="14" height="14" rx="2" fill={PAL.green} />
      <rect x="105" y="76" width="5" height="14" fill={PAL.greenShade} />
      {/* The till on her left: screen on a stand */}
      <rect x="20" y="70" width="5" height="20" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={1} at={[40, 60, 8, 16]}>
        <rect x="6" y="46" width="32" height="22" rx="3" fill={PAL.slate} />
      </Shade>
      <rect x="9" y="49" width="24" height="15" rx="2" fill={PAL.lime} />
      <path d="M14 56H28" stroke={PAL.greenShade} strokeWidth="2.4" strokeLinecap="round" />
      <Shine d="M10 92H40" width={2.2} opacity={0.35} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
