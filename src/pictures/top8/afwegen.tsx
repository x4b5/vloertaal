import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "afwegen": to weigh out (to weigh exactly as much as the recipe says) — a blue bucket on a low floor
  // scale with a round dial on a post; a hand with a steel scoop pours white powder into the bucket, and
  // the dial's needle stands on the green mark (no numbers). On the intro card the scoop tips to pour
  // and the needle swings up to the mark (three rounds: scoop after scoop).
  'w.afwegen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={62} cy={105} rx={46} ry={4} />
      {/* The floor scale: its plate and the post with the dial */}
      <path d="M22 98L28 92H100L94 98Z" fill={PAL.mist} />
      <rect x="22" y="98" width="72" height="6" rx="1.6" fill={PAL.steel} />
      <path d="M94 98L100 92V98L94 104Z" fill={PAL.slate} />
      <rect x="93" y="44" width="6" height="50" rx="2" fill={PAL.slate} />
      <Shade color={PAL.slateDark} opacity={1} at={[112, 38, 7, 18]}>
        <circle cx="96" cy="38" r="14" fill={PAL.slate} />
      </Shade>
      <circle cx="96" cy="38" r="10.6" fill={PAL.white} />
      <path d="M96 38L92.4 28.4A10.2 10.2 0 0 1 99.6 28.4Z" fill={PAL.green} />
      <Move kind="turn" turn={-80} at={[96, 38]}>
        <path d="M96 38L96 29" stroke={PAL.red} strokeWidth="2.6" />
      </Move>
      <circle cx="96" cy="38" r="2.2" fill={PAL.ink} />
      {/* The bucket, the powder heaped in it */}
      <ellipse cx="56" cy="60" rx="16" ry="4.4" fill={PAL.paperShade} />
      <path d="M44 60Q48 52 56 52Q64 52 68 60Z" fill={PAL.white} />
      <Shade color={PAL.blueShade} opacity={1} at={[78, 78, 8, 22]}>
        <path d="M38 60H74L70 94Q70 96 67 96H45Q42 96 42 94Z" fill={PAL.blue} />
      </Shade>
      <rect x="36" y="58" width="40" height="5" rx="2.5" fill={PAL.blueLight} />
      <Shine d="M44 68V86" width={2.8} opacity={0.5} />
      {/* The hand and scoop, pouring */}
      <Move kind="turn" turn={28} at={[26, 38]}>
        <path d="M47 42V58" stroke={PAL.paperShade} strokeWidth="7" />
        <path d="M47 42V58" stroke={PAL.white} strokeWidth="3.4" />
        <path d="M24 37H38" stroke={PAL.slate} strokeWidth="5" />
        <path d="M34 30L52 33Q55 40 51 45L36 45Z" fill={PAL.steel} />
        <path d="M36 45L51 45Q53 43 53 40L38 38Z" fill={PAL.mist} />
        <Hand pose="fist" x={8} y={37} rotate={90} scale={0.5} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
