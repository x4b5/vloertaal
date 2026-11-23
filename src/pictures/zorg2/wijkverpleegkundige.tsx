import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { PAL, SKIN } from '../kit';

export default {
  // "de wijkverpleegkundige": the district nurse — Amina as the nurse of the home care team: a white tunic
  // with a sky-blue collar and a small house badge (the care at home), the navy care bag in his hand.
  'w.wijkverpleegkundige': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <g transform="translate(52 126) scale(0.86) translate(-60 -134)">
        {/* The tunic */}
        <path d="M18 134C18 106 36 96 60 96C84 96 102 106 102 134Z" fill={PAL.white} />
        <path d="M86 104C95 110 102 120 102 134H86C88 122 88 112 86 104Z" fill={PAL.paperShade} />
        <path d="M46 96L60 114L74 96" fill="none" stroke={PAL.sky} strokeWidth="4" />
        <path d="M30 134V118M90 134V118" stroke={PAL.sky} strokeWidth="3" />
        {/* The house badge */}
        <rect x="66" y="110" width="18" height="16" rx="3" fill={PAL.sky} />
        <path d="M69 118L75 112.5L81 118V123H69Z" fill={PAL.white} />
        <CastHead who="amina" expr="pleased" />
      </g>
      {/* The care bag in his hand */}
      <path d="M86 84Q96 72 106 84" fill="none" stroke={PAL.navyShade} strokeWidth="4" />
      <rect x="80" y="82" width="32" height="26" rx="5" fill={PAL.navy} />
      <rect x="98" y="82" width="14" height="26" rx="5" fill={PAL.navyShade} />
      <rect x="92" y="88" width="6" height="14" rx="1.4" fill={PAL.white} />
      <path d="M88 95H102" stroke={PAL.white} strokeWidth="5" />
      <circle cx="84" cy="80" r="5" fill={SKIN.amina[0]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
