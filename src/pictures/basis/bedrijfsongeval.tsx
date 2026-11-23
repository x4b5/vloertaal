import type { JSX } from 'react';
import { ExclaimMark, Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "het bedrijfsongeval": the accident at work — a yellow warning triangle with an exclamation mark,
  // and in front of it on the floor a fallen ladder and a yellow hard hat lying on its side. Nobody is
  // shown hurt. On the intro card the ladder tips over from standing and falls to the floor, once.
  'w.bedrijfsongeval': () => (
    <g strokeLinejoin="round">
      {/* The warning triangle */}
      <path d="M72 14L108 74H36Z" fill={PAL.yellowShade} stroke={PAL.yellowShade} strokeWidth="8" transform="translate(0 3)" />
      <path d="M72 14L108 74H36Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="8" />
      <ExclaimMark x={72} y={52} size={30} color={PAL.ink} />
      <Ground cx={58} cy={104} rx={50} ry={4.5} />
      {/* The hard hat, lying on the floor */}
      <g transform="rotate(-16 92 92)">
        <path d="M76 98Q76 78 92 78Q108 78 108 98Z" fill={PAL.yellow} />
        <path d="M96 79Q108 82 108 98H98Z" fill={PAL.yellowShade} />
        <rect x="72" y="96" width="40" height="6" rx="3" fill={PAL.yellowShade} />
        <Shine d="M81 92Q82 84 89 82" color={PAL.yellowShine} width={3} opacity={0.9} />
      </g>
      {/* The ladder: it falls over from standing (pivot on its foot) */}
      <Move kind="tip" turn={-75} at={[14, 100]} once>
        <g transform="rotate(-8 14 100)">
          <rect x="14" y="88" width="66" height="5" rx="2.5" fill={PAL.steel} />
          <rect x="14" y="99" width="66" height="5" rx="2.5" fill={PAL.slate} />
          {[22, 34, 46, 58, 70].map((x) => (
            <rect key={x} x={x} y="90" width="4" height="12" rx="1.5" fill={PAL.mist} />
          ))}
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
