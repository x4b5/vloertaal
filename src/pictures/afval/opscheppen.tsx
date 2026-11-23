import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "opscheppen": to scoop up — the front of the yellow wheel loader (its big front tyre on the right)
  // has just scooped into a sand heap: the steel bucket, full to the brim with sand, comes up on the
  // lift arm, a few lumps still falling back onto the heap.
  // On the intro card the bucket swings up out of the heap (three rounds: the machine at work).
  'w.opscheppen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={52} ry={4} />
      {/* The heap, a bite taken out of its top */}
      <path d="M6 104Q10 84 24 82Q32 90 44 88Q50 80 58 82Q70 86 74 104Z" fill={PAL.cardShade} />
      <path d="M12 96Q16 88 24 86" fill="none" stroke={PAL.card} strokeWidth="3" />
      {/* The front of the loader: frame and front tyre */}
      <path d="M86 50H116V88H80Z" fill={PAL.yellowShade} />
      <path d="M90 40H116V52H86Z" fill={PAL.yellow} />
      <circle cx="98" cy="88" r="17" fill={PAL.slateDark} />
      <circle cx="98" cy="88" r="8" fill={PAL.yellowShade} />
      <circle cx="98" cy="88" r="3.4" fill={PAL.slate} />
      <Move kind="turn" turn={-30} at={[94, 58]}>
        {/* The lift arm */}
        <path d="M56 46L94 58" stroke={PAL.yellow} strokeWidth="11" />
        <path d="M58 51L94 63" stroke={PAL.yellowShade} strokeWidth="3.4" />
        {/* The bucket and the sand in it */}
        <path d="M10 42Q22 30 38 36Q50 32 60 40L56 62Q52 70 42 70H20Q8 68 8 54Z" fill={PAL.card} />
        <path d="M8 44L60 40L56 62Q52 70 42 70H20Q8 68 8 54Z" fill={PAL.slate} />
        <path d="M50 42L60 40L56 62Q52 70 44 70Z" fill={PAL.slateDark} />
        <path d="M6 44L62 40" stroke={PAL.steel} strokeWidth="4" />
        <path d="M12 40Q22 34 32 36" fill="none" stroke="#f0c48a" strokeWidth="3" />
        <Shine d="M14 52Q15 60 20 63" width={3} opacity={0.4} />
        {/* A few lumps falling back */}
        <g fill={PAL.cardShade}>
          <circle cx="24" cy="78" r="3" />
          <circle cx="38" cy="76" r="2.4" />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
