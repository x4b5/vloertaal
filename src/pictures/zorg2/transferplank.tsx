import type { JSX } from 'react';
import { CurveArrow, Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de transferplank": the transfer board — a smooth wooden board with hand holes, bridging from the edge of
  // the bed (left) to the seat of a wheelchair (right); a curved arrow shows the slide from bed to chair.
  'w.transferplank': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* The bed's end */}
      <rect x="6" y="60" width="38" height="16" rx="5" fill={PAL.mist} />
      <rect x="6" y="60" width="38" height="6" rx="3" fill={PAL.paper} />
      <rect x="6" y="76" width="38" height="8" rx="3" fill={PAL.slate} />
      <rect x="16" y="84" width="6" height="16" rx="2" fill={PAL.steel} />
      {/* The wheelchair */}
      <path d="M100 30V70H72" fill="none" stroke={PAL.steel} strokeWidth="4" />
      <rect x="94" y="32" width="10" height="38" rx="4" fill={PAL.blue} />
      <rect x="70" y="68" width="34" height="9" rx="4" fill={PAL.blueShade} />
      <circle cx="94" cy="86" r="18" fill={PAL.slate} />
      <circle cx="94" cy="86" r="12" fill="none" stroke={PAL.mist} strokeWidth="2.4" />
      <circle cx="94" cy="86" r="3" fill={PAL.steel} />
      <circle cx="70" cy="100" r="4.6" fill={PAL.slate} />
      {/* The board */}
      <path d="M26 64Q24 56 34 56L86 62Q94 64 92 70Q90 74 82 74L32 72Q26 70 26 64Z" fill={PAL.cardDark} transform="translate(1 3)" />
      <Shade color={PAL.cardShade} opacity={1} at={[92, 70, 10, 12]}>
        <path d="M26 64Q24 56 34 56L86 62Q94 64 92 70Q90 74 82 74L32 72Q26 70 26 64Z" fill={PAL.card} />
      </Shade>
      <ellipse cx="38" cy="63" rx="5" ry="2.6" fill={PAL.cardDark} />
      <ellipse cx="80" cy="67" rx="5" ry="2.6" fill={PAL.cardDark} />
      <Shine d="M34 59L60 61.5" color={PAL.white} width={2} opacity={0.6} />
      <CurveArrow from={[22, 44]} to={[84, 48]} bend={-18} color={PAL.sky} width={6} head={11} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
