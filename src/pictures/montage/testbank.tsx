import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

const INK_DARK = '#1b232a';

export default {
  // "de testbank": the test bench — a workbench with a product on it, plugged into a tester whose
  // screen shows a big green tick and a green lamp; a red and a black cable run between them.
  'w.testbank': () => (
    <g strokeLinejoin="round">
      {/* Shadow on the floor */}
      <ellipse cx="60" cy="106" rx="50" ry="4" fill="#000" opacity="0.14" />
      {/* The bench: legs, then the top with its front edge */}
      <rect x="16" y="72" width="7" height="34" rx="1.5" fill={PAL.cardDark} />
      <rect x="97" y="72" width="7" height="34" rx="1.5" fill={PAL.cardDark} />
      <path d="M14 92H106" stroke={PAL.cardDark} strokeWidth="3" />
      <path d="M10 66L104 66L110 60L16 60Z" fill="#f0c48a" />
      <rect x="10" y="66" width="94" height="8" rx="1.5" fill={PAL.card} />
      {/* The product under test: a blue housing */}
      <path d="M48 62L48 38L54 33L54 57Z" fill={PAL.blueShade} />
      <path d="M16 38L48 38L54 33L22 33Z" fill={PAL.blueLight} />
      <rect x="16" y="38" width="32" height="24" rx="1" fill={PAL.blue} />
      <circle cx="40" cy="53" r="3.2" fill={PAL.slateDark} />
      <circle cx="28" cy="53" r="3.2" fill={PAL.slateDark} />
      {/* The cables, from the tester to the product */}
      <path d="M66 56C60 64 46 66 40 54" stroke={PAL.red} strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M70 58C62 70 34 70 28 54" stroke={PAL.slateDark} strokeWidth="3.2" strokeLinecap="round" fill="none" />
      {/* The tester: a dark box with a screen and a lamp */}
      <path d="M104 62L104 24L110 19L110 57Z" fill={INK_DARK} />
      <path d="M62 24L104 24L110 19L68 19Z" fill={PAL.steel} />
      <Shade color={PAL.slateDark} opacity={1} at={[106, 44, 6, 30]}>
        <rect x="62" y="24" width="42" height="38" rx="2" fill={PAL.slate} />
      </Shade>
      <rect x="67" y="28" width="32" height="21" rx="2.5" fill={INK_DARK} />
      <path d="M74 38.5L80 44L92 32" fill="none" stroke={PAL.lime} strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="94" cy="55.5" r="3.6" fill={PAL.lime} />
      <circle cx="84" cy="55.5" r="2.4" fill={PAL.steel} />
      <Shine d="M65 30V44" opacity={0.35} width={2.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
