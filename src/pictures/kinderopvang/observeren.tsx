import type { JSX } from 'react';
import { Ground, Move, PAL, SKIN, Shade, Shine } from '../kit';
import { Bust } from '../bust';

/** A child's head in the cast's flat style (as in group24), centred on (x, y), radius `r`. */
function ChildHead({ x, y, r = 12, skin = SKIN.bram, hair = PAL.brown }: { x: number; y: number; r?: number; skin?: [string, string]; hair?: string }) {
  const k = r / 12;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <circle cx="0" cy="-1.5" r="13.2" fill={hair} />
      <circle cx="-12" cy="2" r="3.2" fill={skin[0]} />
      <circle cx="12" cy="2" r="3.2" fill={skin[1]} />
      <Shade color={skin[1]} opacity={1} at={[13, 4, 6, 16]}>
        <ellipse cx="0" cy="2" rx="11.6" ry="11.2" fill={skin[0]} />
      </Shade>
      <path d="M-12.4 -1Q-12 -13 0 -13.6Q12 -13 12.4 -1Q8 -6.5 1 -7Q-4 -4 -12.4 -1Z" fill={hair} />
      <ellipse cx="-4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <ellipse cx="4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <path d="M-3.6 7Q0 11 3.6 7" fill={PAL.mouth} stroke={PAL.mouth} strokeWidth="1.4" strokeLinecap="round" />
    </g>
  );
}

export default {
  // "observeren": to observe, to watch carefully and write it down — Henk holds a clipboard and writes
  // while he watches a toddler stacking blocks on the floor next to him.
  // On the intro card the pen writes along the line (three rounds).
  'w.observeren': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={90} cy={106} rx={22} ry={3} />
      <Bust who="henk" x={38} y={116} scale={0.74} expr="thinking" bold />
      {/* The clipboard */}
      <rect x="14" y="70" width="38" height="44" rx="4" fill={PAL.cardDark} transform="rotate(-8 33 92)" />
      <rect x="12" y="68" width="38" height="44" rx="4" fill={PAL.card} transform="rotate(-8 31 90)" />
      <g transform="rotate(-8 31 90)">
        <rect x="16" y="74" width="30" height="34" rx="1.5" fill={PAL.white} />
        <rect x="24" y="64" width="14" height="7" rx="2.5" fill={PAL.steel} />
        <path d="M20 82H42M20 90H42M20 98H34" stroke={PAL.line} strokeWidth="2.2" />
        {/* The pen, writing along the last line */}
        <Move kind="fast" dx={-20}>
          <path d="M36 98L52 82" stroke={PAL.sky} strokeWidth="4.4" />
          <path d="M36 98L33.6 100.6" stroke={PAL.ink} strokeWidth="2.2" />
        </Move>
      </g>
      {/* The toddler stacking blocks */}
      <rect x="78" y="88" width="24" height="18" rx="8" fill={PAL.green} />
      <ChildHead x={90} y={76} r={12} skin={SKIN.amina} hair="#2e201a" />
      <rect x="100" y="92" width="12" height="12" rx="2" fill={PAL.red} />
      <rect x="101" y="80" width="11" height="11" rx="2" fill={PAL.yellow} />
      <Shine d="M18 72L28 70.6" width={2.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
