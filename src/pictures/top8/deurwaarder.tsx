import type { JSX } from 'react';
import { Ground, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de deurwaarder": the bailiff (an official who collects a debt, often after a judge has decided) — a
  // man in a long dark coat (no face: a stranger, not one of the cast) stands calmly at a front door,
  // a briefcase in one hand and in the other an official paper with a red seal, held out to the door.
  'w.deurwaarder': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={66} cy={105} rx={46} ry={4} />
      {/* The front door in its frame, a step under it */}
      <rect x="10" y="14" width="44" height="90" rx="2" fill={PAL.mist} />
      <rect x="14" y="18" width="36" height="86" fill={PAL.green} />
      <rect x="42" y="18" width="8" height="86" fill={PAL.greenShade} />
      <rect x="19" y="24" width="20" height="18" rx="2" fill={PAL.ice} opacity=".8" />
      <rect x="20" y="58" width="18" height="4" rx="2" fill={PAL.slateDark} />
      <circle cx="42" cy="68" r="3" fill={PAL.yellow} />
      <rect x="6" y="102" width="52" height="5" rx="2" fill={PAL.steel} />
      {/* His legs and shoes */}
      <path d="M74 92V102M86 92V102" stroke={PAL.slateDark} strokeWidth="7" />
      <ellipse cx="72" cy="103" rx="6" ry="3" fill={PAL.ink} />
      <ellipse cx="86" cy="103" rx="6" ry="3" fill={PAL.ink} />
      {/* The long dark coat, the shirt and tie */}
      <Shade color={PAL.slateDark} opacity={1} at={[100, 74, 9, 30]}>
        <path d="M64 96V62Q64 46 80 46Q96 46 96 62V96Z" fill={PAL.slate} />
      </Shade>
      <path d="M74 47L80 62L86 47Z" fill={PAL.white} />
      <path d="M78.6 49H81.4L82.4 62L80 65L77.6 62Z" fill={PAL.navy} />
      <path d="M80 66V94" stroke={PAL.slateDark} strokeWidth="1.6" />
      {/* A plain head: no face */}
      <circle cx="80" cy="34" r="11" fill={SKIN.henk[0]} />
      <circle cx="84" cy="36" r="7" fill={SKIN.henk[1]} opacity=".45" />
      <path d="M69 34Q68 21 80 21Q92 21 91 33Q85 27 69 34Z" fill={PAL.ink} />
      {/* His arm out with the official paper */}
      <path d="M68 56L56 68" stroke={PAL.slate} strokeWidth="8.5" />
      <g transform="rotate(-8 46 66)">
        <rect x="34" y="50" width="26" height="32" rx="2.4" fill={PAL.paperShade} transform="translate(2 3)" />
        <rect x="34" y="50" width="26" height="32" rx="2.4" fill={PAL.white} />
        <path d="M39 57H55M39 63H55M39 69H49" stroke={PAL.line} strokeWidth="2" />
        <circle cx="53" cy="75" r="4.4" fill={PAL.red} />
      </g>
      <circle cx="57" cy="68" r="4.4" fill={SKIN.henk[0]} />
      {/* His other hand with the briefcase */}
      <path d="M94 58L98 80" stroke={PAL.slateDark} strokeWidth="8" />
      <path d="M96 80V76Q96 73 99 73H103Q106 73 106 76V80" fill="none" stroke={PAL.brown} strokeWidth="2.6" />
      <rect x="88" y="80" width="22" height="18" rx="3" fill={PAL.cardDark} />
      <rect x="102" y="80" width="8" height="18" rx="2" fill={PAL.brown} opacity=".6" />
      <rect x="97" y="86" width="5" height="3" rx="1" fill={PAL.yellow} />
      <Shine d="M69 58Q69 52 73 50" width={2.6} opacity={0.35} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
