import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** A tomato centred on (x, y): red or still green, a calyx and a highlight. */
function Tomato({ x, y, r, ripe = true }: { x: number; y: number; r: number; ripe?: boolean }) {
  const [c, sh] = ripe ? [PAL.red, PAL.redShade] : [PAL.leaf, PAL.leafShade];
  return (
    <g>
      <Shade color={sh} opacity={1} at={[x + r * 0.9, y + r * 0.4, r * 0.6, r * 1.2]}>
        <circle cx={x} cy={y} r={r} fill={c} />
      </Shade>
      <path d={`M${x - r * 0.45} ${y - r * 0.8}L${x} ${y - r * 0.55}L${x + r * 0.45} ${y - r * 0.8}`} fill="none" stroke={PAL.greenShade} strokeWidth={Math.max(1.6, r * 0.24)} strokeLinecap="round" />
      <circle cx={x - r * 0.4} cy={y - r * 0.2} r={r * 0.2} fill={PAL.white} opacity=".55" />
    </g>
  );
}

/** A plastic crate, front face (x, y) w x h, with its top edge seen a little from above. */
const crate = (x: number, y: number, w: number, h: number, c: string, sh: string) => (
  <g>
    <path d={`M${x} ${y}H${x + w}V${y + h - 2}Q${x + w} ${y + h} ${x + w - 2} ${y + h}H${x + 2}Q${x} ${y + h} ${x} ${y + h - 2}Z`} fill={c} />
    <rect x={x + w - 7} y={y} width={7} height={h} rx={2} fill={sh} />
    <rect x={x + 5} y={y + 5} width={w - 16} height={4} rx={2} fill={sh} />
  </g>
);

export default {
  // "de sorteermachine": the sorting machine — a dark conveyor belt carries red and green
  // tomatoes under a grey camera head with a yellow lamp; below it two steel chutes drop them
  // into two crates: the green ones in a small crate on the left, the red ones in a big one.
  'w.sorteermachine': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={46} ry={4} />
      {/* The chutes under the belt */}
      <path d="M24 60H48L42 78H30Z" fill={PAL.steel} />
      <path d="M62 60H96L88 76H70Z" fill={PAL.steel} />
      <path d="M42 60L36 78H42L48 60Z" fill={PAL.slate} opacity=".35" />
      <path d="M90 60L82 76H88L96 60Z" fill={PAL.slate} opacity=".35" />
      {/* The crates and what is already in them */}
      <Tomato x={28} y={79} r={6} ripe={false} />
      <Tomato x={40} y={80} r={6} ripe={false} />
      <Tomato x={66} y={77} r={7} />
      {/* This one drops from under the belt down the chute into the crate (Move) */}
      <Move kind="drop" dy={-22}>
        <Tomato x={78} y={77} r={7} />
      </Move>
      <Tomato x={90} y={77} r={7} />
      {crate(16, 80, 34, 22, PAL.blue, PAL.blueShade)}
      {crate(58, 78, 44, 24, PAL.blue, PAL.blueShade)}
      {/* The lamp's light on the belt */}
      <path d="M38 30L26 50H58L48 30Z" fill={PAL.yellowLight} opacity=".55" />
      {/* The belt: a dark band with a lighter top, a roller at each end */}
      <rect x="12" y="48" width="96" height="12" rx="6" fill={PAL.slateDark} />
      <rect x="15" y="48" width="90" height="4" rx="2" fill={PAL.steel} />
      <circle cx="18" cy="54" r="3" fill={PAL.mist} />
      <circle cx="102" cy="54" r="3" fill={PAL.mist} />
      {/* The tomatoes riding on the belt */}
      <Tomato x={24} y={40} r={8} ripe={false} />
      <Tomato x={68} y={40} r={8} />
      <Tomato x={90} y={40} r={8} />
      {/* The camera head on its arm, with the yellow lamp underneath */}
      <path d="M10 48V14H24" fill="none" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <Shade color={PAL.steel} opacity={1} at={[58, 22, 10, 16]}>
        <rect x="22" y="10" width="40" height="20" rx="4" fill={PAL.mist} />
      </Shade>
      <rect x="35" y="28" width="14" height="5" rx="2" fill={PAL.yellow} />
      <circle cx="31" cy="20" r="5" fill={PAL.slate} />
      <circle cx="31" cy="20" r="2" fill={PAL.ice} />
      <Shine d="M27 13H45" width={2.4} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
