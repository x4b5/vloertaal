import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

/** A kiln cart on the rails at x (its left end): a steel deck on wheels, a stack of pale tiles on it. */
const cart = (x: number) => (
  <g>
    <circle cx={x + 5} cy="96" r="3.4" fill={PAL.slateDark} />
    <circle cx={x + 19} cy="96" r="3.4" fill={PAL.slateDark} />
    <rect x={x} y="88" width="24" height="6" rx="1.4" fill={PAL.steel} />
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x={x + 3} y={83 - i * 6} width="18" height="5" rx="1" fill={i % 2 ? PAL.paperShade : PAL.paper} />
    ))}
  </g>
);

export default {
  // "de tunneloven": the tunnel kiln (a long oven; the products ride slowly through it) — a long, low
  // kiln seen from the side, two short stacks on its roof, a long open slot in its wall glowing red and
  // orange; on the rails in front of its open end a cart with a stack of pale tiles, the next one already
  // inside (dark against the glow). On the intro card the cart rides slowly into the kiln (three rounds:
  // the carts keep going in).
  'w.tunneloven': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The rails */}
      <rect x="6" y="99" width="108" height="4" rx="2" fill={PAL.slate} />
      {/* The cart going in (behind the kiln's wall once it is in) */}
      <Move kind="slow" dx={-26}>{cart(6)}</Move>
      {/* The stacks on the roof */}
      <rect x="62" y="38" width="8" height="18" rx="1" fill={PAL.slate} />
      <rect x="92" y="34" width="8" height="22" rx="1" fill={PAL.slate} />
      <rect x="66" y="38" width="4" height="18" fill={PAL.slateDark} />
      <rect x="96" y="34" width="4" height="22" fill={PAL.slateDark} />
      {/* The kiln body: roof, end, wall */}
      <path d="M34 60L40 54H114L108 60Z" fill={PAL.steel} />
      <path d="M34 60H108V99H34Z" fill={PAL.clayShade} />
      <path d="M34 60H108V66H34Z" fill={PAL.clay} />
      <path d="M108 60L114 54V95L108 99Z" fill={PAL.brown} />
      {/* The glowing slot, from the open end along the wall */}
      <rect x="34" y="70" width="68" height="25" rx="3" fill={PAL.red} />
      <rect x="34" y="73" width="64" height="19" rx="3" fill={PAL.orange} />
      <rect x="34" y="77" width="58" height="11" rx="3" fill={PAL.yellow} />
      {/* The cart inside, dark against the glow */}
      <g opacity=".5">
        <rect x="66" y="72" width="20" height="21" fill={PAL.clayShade} />
      </g>
      {/* The open end of the tunnel */}
      <rect x="32" y="66" width="5" height="33" rx="1.5" fill={PAL.brown} />
      <Shine d="M38 57H70" width={2.4} opacity={0.55} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
