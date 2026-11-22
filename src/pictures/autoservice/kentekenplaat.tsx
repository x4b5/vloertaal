import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** A blocky placeholder character on the plate: a dark rounded block (no readable letters). */
const ch = (x: number) => <rect key={x} x={x} y="49" width="8" height="21" rx="1.6" fill={PAL.ink} />;
/** A dash between the groups. */
const dash = (x: number) => <rect key={`d${x}`} x={x} y="58" width="5" height="3.4" rx="1.2" fill={PAL.ink} />;

export default {
  // "de kentekenplaat": the number plate — a yellow Dutch plate with a dark rim, a blue strip with a
  // ring of yellow stars on the left, and three groups of dark blocks for the characters.
  'w.kentekenplaat': () => (
    <g strokeLinejoin="round">
      {/* The depth edge, the dark rim, the yellow face */}
      <rect x="10" y="40" width="100" height="42" rx="6" fill={PAL.yellowShade} />
      <rect x="10" y="36" width="100" height="42" rx="6" fill={PAL.slateDark} />
      <rect x="12.5" y="38.5" width="95" height="37" rx="4" fill={PAL.yellow} />
      {/* The blue strip with a ring of stars and a light bar */}
      <path d="M12.5 42.5A4 4 0 0 1 16.5 38.5H28V75.5H16.5A4 4 0 0 1 12.5 71.5Z" fill={PAL.blue} />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return <circle key={i} cx={20.2 + 5 * Math.cos(a)} cy={51 + 5 * Math.sin(a)} r="1.3" fill={PAL.yellowLight} />;
      })}
      <rect x="16" y="64" width="8.5" height="5" rx="1.6" fill={PAL.white} />
      {/* The characters: two blocks, three, one */}
      {ch(33)}
      {ch(43)}
      {dash(53.5)}
      {ch(60.5)}
      {ch(70.5)}
      {ch(80.5)}
      {dash(91)}
      {ch(98)}
      {/* The highlight */}
      <Shine d="M33 43H72" color={PAL.yellowShine} width={2.4} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
