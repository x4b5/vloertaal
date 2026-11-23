import { useId, type JSX } from 'react';
import { Move, PAL, Shade, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** A block in the slanted view: front rectangle (x, y, w, h), its top and right faces `d` deep. */
const block = (x: number, y: number, w: number, h: number, d: number, front: string, top: string, side: string) => {
  const ox = r1(d * DX);
  const oy = r1(d * DY);
  return (
    <g>
      <path d={`M${x} ${y}L${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + ox)} ${r1(y + oy)}Z`} fill={top} />
      <path d={`M${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + w + ox)} ${r1(y + h + oy)}L${x + w} ${y + h}Z`} fill={side} />
      <rect x={x} y={y} width={w} height={h} fill={front} />
    </g>
  );
};

/** The chain: links one under the other, from y0 down to y1 at x. */
const chain = (x: number, y0: number, y1: number) => {
  const out: JSX.Element[] = [];
  for (let y = y0, i = 0; y < y1; y += 6, i += 1) {
    out.push(
      i % 2 === 0 ? (
        <rect key={y} x={x - 3.2} y={y} width="6.4" height="8" rx="3.2" fill="none" stroke={PAL.slate} strokeWidth="2.2" />
      ) : (
        <rect key={y} x={x - 1.2} y={y} width="2.4" height="8" rx="1.2" fill={PAL.slateDark} />
      ),
    );
  }
  return out;
};

export default {
  // "de takel": the hoist — a yellow electric chain hoist hanging from a steel beam, its chain going
  // down to a steel hook, and a small dark push-button pendant with an up and a down arrow.
  // Once and slowly: a load is lifted once (the owner's sunrise rule; lifting it three times looks odd).
  'w.takel': () => {
    const id = `tk-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
    <g strokeLinejoin="round">
      {/* The steel I-beam across the top */}
      {block(10, 16, 92, 9, 10, PAL.slate, PAL.steel, PAL.slateDark)}
      {/* The trolley on the beam */}
      <rect x="40" y="25" width="28" height="6" rx="2" fill={PAL.steel} />
      <circle cx="45" cy="24" r="4" fill={PAL.slateDark} />
      <circle cx="63" cy="24" r="4" fill={PAL.slateDark} />
      {/* The pendant cable */}
      <path d="M72 50C84 52 87 58 87 66" fill="none" stroke={PAL.slateDark} strokeWidth="2.2" strokeLinecap="round" />
      {/* The hoist body: the motor drum on the left, the gear box on the right */}
      <Shade color={PAL.yellowShade} opacity={1} at={[80, 50, 12, 30]}>
        <rect x="30" y="30" width="46" height="28" rx="7" fill={PAL.yellow} />
      </Shade>
      <rect x="24" y="33" width="10" height="22" rx="4" fill={PAL.orange} />
      <rect x="28" y="33" width="6" height="22" rx="2" fill={PAL.orangeShade} />
      <path d="M41 38V50M47 38V50" stroke={PAL.yellowShade} strokeWidth="1.6" strokeLinecap="round" />
      <Shine d="M38 34H54" color={PAL.yellowShine} width={3} opacity={0.8} />
      {/* The chain and the hook */}
      <rect x="49" y="57" width="12" height="5" rx="2" fill={PAL.slate} />
      {/* The hook comes up on its chain: the links above the chain's top are only seen while it is lower (clipped) */}
      <clipPath id={id}>
        <rect x="40" y="63" width="30" height="60" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <Move kind="from" dy={18} once>{chain(55, 37, 61)}</Move>
      </g>
      <Move kind="from" dy={18}>
        {chain(55, 61, 82)}
        <rect x="50" y="80" width="10" height="7" rx="2" fill={PAL.slate} />
        <path d="M55 86V90A11 11 0 0 1 33 90V87" fill="none" stroke={PAL.steel} strokeWidth="7.5" strokeLinecap="round" />
        <path d="M53.4 87V90A9.4 9.4 0 0 1 50.6 96.6" fill="none" stroke={PAL.mist} strokeWidth="2.4" strokeLinecap="round" />
      </Move>
      {/* The pendant with its up and down buttons */}
      <rect x="79" y="64" width="16" height="32" rx="4" fill={PAL.slate} />
      <rect x="90" y="64" width="5" height="32" rx="2.5" fill={PAL.slateDark} />
      <path d="M87 69.5L91.6 76H82.4Z" fill={PAL.ok} stroke={PAL.ok} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M87 90.5L91.6 84H82.4Z" fill={PAL.red} stroke={PAL.red} strokeWidth="1.5" strokeLinejoin="round" />
    </g>
    );
  },
} as Record<string, () => JSX.Element>;
