import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de sportclub": the sports club — the club's football goal on a patch of grass, with the club's
  // red pennant on the post and a football in front of it.
  'w.sportclub': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The grass */}
      <ellipse cx="60" cy="98" rx="52" ry="11" fill={PAL.leafShade} />
      <ellipse cx="60" cy="96" rx="50" ry="9" fill={PAL.leaf} />
      {/* The net: back frame and mesh */}
      <path d="M26 38L34 30H94L98 38" fill="none" stroke={PAL.mist} strokeWidth="2.6" />
      <path d="M24 44H96M24 54H96M24 64H96M24 74H96M24 84H96M36 36V92M48 36V92M60 36V92M72 36V92M84 36V92" stroke={PAL.mist} strokeWidth="1.6" />
      {/* The goal frame: posts and bar, white with a shaded right post */}
      <rect x="16" y="32" width="88" height="7" rx="3" fill={PAL.paper} />
      <rect x="16" y="32" width="7" height="62" rx="3" fill={PAL.paper} />
      <rect x="97" y="32" width="7" height="62" rx="3" fill={PAL.paperShade} />
      {/* The club pennant on the left post */}
      <rect x="18" y="12" width="3" height="22" rx="1.5" fill={PAL.steel} />
      <path d="M21 13L40 19L21 25Z" fill={PAL.red} />
      <path d="M21 19L40 19L21 25Z" fill={PAL.redShade} />
      {/* The ball */}
      <Shade color={PAL.paperShade} opacity={1} at={[80, 94, 10, 20]}>
        <circle cx="64" cy="88" r="15" fill={PAL.white} />
      </Shade>
      <path d="M64 81L70 85L68 92H60L58 85Z" fill={PAL.slate} />
      <path d="M50.5 84L55 83L53 92L50 92ZM76 82L78.5 86L77 92L74 91Z M60 101L63 97H68L71 101Z" fill={PAL.slate} />
      <Shine d="M53 82Q56 76 61 75" width={2.6} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
