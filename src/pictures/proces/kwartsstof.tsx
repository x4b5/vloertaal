import type { JSX } from 'react';
import { Ground, Move, PAL, SKIN } from '../kit';

/** The dust: small grey dots on a curve from the top of the heap to the nose. */
const DOTS: [number, number, number][] = [
  [34, 70, 2.6], [28, 62, 2], [40, 60, 2.8], [34, 52, 2.2], [46, 50, 2.6], [42, 42, 2], [54, 44, 2.6],
  [52, 36, 2.2], [62, 40, 2.4], [66, 34, 1.8], [70, 40, 1.8], [24, 54, 1.6], [48, 30, 1.6],
];

export default {
  // "het kwartsstof": the quartz dust — a heap of light sand/clay at the bottom left; a cloud of fine grey dust
  // dots rises from it and drifts to the nose of a man (seen from the side, right), whose lungs show pink on
  // his chest. On the intro card the dust keeps drifting from the heap to his nose (three rounds).
  'w.kwartsstof': () => {
    const [s, sh] = SKIN.henk;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={36} cy={105} rx={28} ry={3.5} />
        {/* The heap of sand */}
        <path d="M8 104Q14 80 34 76Q52 78 62 104Z" fill={PAL.card} />
        <path d="M40 77Q54 82 62 104H46Q48 88 40 77Z" fill={PAL.cardShade} />
        <circle cx="24" cy="94" r="1.6" fill={PAL.cardDark} />
        <circle cx="36" cy="88" r="1.6" fill={PAL.cardDark} />
        <circle cx="46" cy="96" r="1.6" fill={PAL.cardDark} />
        {/* The man from the side, facing left: shirt, neck, head with nose and hair */}
        <path d="M70 112V80Q70 64 88 62H96Q112 64 112 80V112Z" fill={PAL.blue} />
        <path d="M104 64Q112 68 112 80V112H104Z" fill={PAL.blueShade} />
        <rect x="86" y="50" width="12" height="16" rx="4" fill={sh} />
        <path d="M80 40Q80 20 94 20Q106 20 106 34Q106 52 92 54Q84 54 82 48L78 47Q75 46 76 43L74 39Q73 37 76 36L80 35Z" fill={s} />
        <path d="M80 30Q82 16 96 17Q108 18 107 32Q106 40 102 44Q100 34 94 30Q88 30 80 30Z" fill={PAL.steel} />
        <circle cx="99" cy="38" r="3.4" fill={sh} />
        <circle cx="84" cy="33" r="1.8" fill={PAL.ink} />
        {/* His lungs */}
        <path d="M89 74Q82 74 81 86Q80 96 88 96Q92 96 92 90V76Q92 74 89 74Z" fill={PAL.redLight} />
        <path d="M95 74Q102 74 103 86Q104 96 96 96Q92 96 92 90V76Q92 74 95 74Z" fill={PAL.redLight} />
        <path d="M92 68V78M92 78L87 84M92 78L97 84" stroke={PAL.red} strokeWidth="2" />
        {/* The dust drifting to his nose */}
        <Move kind="from" dx={-20} dy={22}>
          {DOTS.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill={PAL.steel} />
          ))}
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
