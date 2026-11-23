import type { JSX } from 'react';
import { Ground, PAL, Shade, twinkle } from '../kit';

export default {
  // "de kerstdagen": Christmas — a green Christmas tree in three tiers with a yellow star on top and red, blue and
  // yellow baubles, on a brown trunk, with two wrapped presents at its foot.
  'w.kerstdagen': () => (
    <g>
      <Ground cx={60} cy={104} rx={44} ry={4} />
      <rect x="54" y="88" width="12" height="14" fill={PAL.brown} />
      <Shade color={PAL.greenShade} opacity={1} at={[90, 64, 18, 50]}>
        <path d="M60 22L84 52H36Z" fill={PAL.green} />
        <path d="M60 36L92 72H28Z" fill={PAL.green} />
        <path d="M60 52L100 92H20Z" fill={PAL.green} />
      </Shade>
      {[[50, 46, PAL.red], [68, 62, PAL.yellow], [44, 70, PAL.blue], [76, 82, PAL.red], [54, 84, PAL.yellow], [36, 88, PAL.purple]].map(([x, y, c]) => (
        <circle key={`${x}-${y}`} cx={x as number} cy={y as number} r="4.6" fill={c as string} />
      ))}
      <path d={twinkle(60, 18, 11)} fill={PAL.yellow} />
      {/* Presents */}
      <rect x="14" y="88" width="20" height="16" rx="2" fill={PAL.red} />
      <path d="M24 88V104M14 95H34" stroke={PAL.yellow} strokeWidth="3.4" />
      <rect x="84" y="84" width="24" height="20" rx="2" fill={PAL.blue} />
      <path d="M96 84V104M84 93H108" stroke={PAL.white} strokeWidth="3.4" />
      <path d="M96 84Q90 77 92 76Q96 78 96 84Q100 77 102 78Q102 81 96 84Z" fill={PAL.white} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
