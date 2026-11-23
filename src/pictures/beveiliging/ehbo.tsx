import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de EHBO": first aid — a green first-aid case standing on the floor, with its dark handle on top, the
  // lid seam, and a big white cross on the front.
  'w.ehbo': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={46} ry={5} />
      {/* The handle */}
      <path d="M44 34V26Q44 20 50 20H70Q76 20 76 26V34" fill="none" stroke={PAL.slateDark} strokeWidth="7" strokeLinecap="round" />
      {/* The case */}
      <Shade color={PAL.greenShade} opacity={1} at={[112, 70, 16, 44]}>
        <rect x="12" y="32" width="96" height="70" rx="10" fill={PAL.green} />
      </Shade>
      <path d="M12 46H108" stroke={PAL.greenShade} strokeWidth="2.4" />
      <rect x="22" y="42" width="8" height="8" rx="2" fill={PAL.slate} />
      <rect x="90" y="42" width="8" height="8" rx="2" fill={PAL.slate} />
      <Shine d="M18 58V82" width={3.4} opacity={0.5} />
      {/* The white cross */}
      <path d="M52 54H68V64H78V80H68V90H52V80H42V64H52Z" fill={PAL.white} stroke={PAL.white} strokeWidth="2" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
