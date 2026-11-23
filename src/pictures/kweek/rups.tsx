import { useId, type JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

/** The caterpillar's segments, tail first: centre and radius. */
const SEG: [number, number, number][] = [
  [24, 78, 6.4],
  [32, 72, 7],
  [40, 68, 7.4],
  [49, 67, 7.6],
  [58, 68, 7.6],
  [67, 66, 7.4],
  [75, 61, 7.2],
];
/** The head. */
const HEAD: [number, number] = [83, 54];

function Rups() {
  const id = `rups-bite-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <g strokeLinejoin="round">
      {/* The bite out of the top edge of the leaf: a mask with three round notches */}
      <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
        <rect x="0" y="0" width="120" height="120" fill="#fff" />
        <circle cx="70" cy="27" r="8.5" fill="#000" />
        <circle cx="83" cy="27" r="8" fill="#000" />
        <circle cx="59" cy="30" r="6" fill="#000" />
      </mask>
      {/* The stalk and the leaf */}
      <path d="M8 96L18 84" stroke={PAL.greenShade} strokeWidth="4.5" strokeLinecap="round" />
      <g mask={`url(#${id})`}>
        <Shade color={PAL.greenShade} opacity={1} at={[96, 82, 34, 34]}>
          <path d="M16 86C20 44 66 22 110 30C104 78 60 104 16 86Z" fill={PAL.green} />
        </Shade>
        <path d="M18 85C46 70 78 50 106 32" fill="none" stroke={PAL.greenShade} strokeWidth="2.2" strokeLinecap="round" />
      </g>
      <Move kind="from" dx={-24} dy={14} once>
        {/* Little feet under the segments */}
        {SEG.map(([x, y, r]) => (
          <path key={`f${x}`} d={`M${x - 2} ${y + r - 1}V${y + r + 3}M${x + 2} ${y + r - 1}V${y + r + 3}`} stroke={PAL.leafShade} strokeWidth="2" strokeLinecap="round" />
        ))}
        {/* The segments: a darker ring under each light ball */}
        {SEG.map(([x, y, r]) => (
          <g key={x}>
            <circle cx={x} cy={y} r={r} fill={PAL.leaf} />
            <circle cx={x - 1.2} cy={y - 1.4} r={r - 2} fill={PAL.lime} />
          </g>
        ))}
        {/* The head, eating at the bite */}
        <path d="M81 46L78 39M87 46L89 39" stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" />
        <circle cx={HEAD[0]} cy={HEAD[1]} r="9" fill={PAL.leaf} />
        <circle cx={HEAD[0] - 1} cy={HEAD[1] - 1.2} r="7.4" fill={PAL.lime} />
        <circle cx="86" cy="52" r="2.4" fill={PAL.ink} />
        <circle cx="85.3" cy="51.2" r="0.8" fill={PAL.white} />
        <path d="M86 58Q89 58.5 90 56" fill="none" stroke={PAL.leafShade} strokeWidth="1.6" strokeLinecap="round" />
        <Shine d="M36 64Q44 60 52 60" color={PAL.white} width={2.6} opacity={0.75} />
      </Move>
    </g>
  );
}

export default {
  // "de rups": the caterpillar — a fat lime-green caterpillar of round segments with a small head,
  // crawling over a dark-green leaf that has a round bite out of its top edge.
  // On the intro card the caterpillar crawls up the leaf to the bite and stops. Once and slowly (an animal walks: once).
  'w.rups': () => <Rups />,
} as Record<string, () => JSX.Element>;
