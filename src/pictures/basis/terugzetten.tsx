import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "terugzetten": to put back (in its place) — a tool board with the painted shapes of its tools:
  // a wrench and a screwdriver hang in their shapes, and a hand hangs the hammer back in its own
  // dark shape. On the intro card the hammer comes in from the bottom right into its place (once).
  'w.terugzetten': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The board with its peg holes */}
      <rect x="10" y="12" width="100" height="84" rx="4" fill={PAL.cardShade} transform="translate(0 4)" />
      <Shade color={PAL.cardShade} opacity={1} at={[112, 54, 14, 60]}>
        <rect x="10" y="12" width="100" height="84" rx="4" fill={PAL.card} />
      </Shade>
      <g fill={PAL.cardDark} opacity=".55">
        {[20, 100].map((x) => [22, 50, 78].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" />))}
      </g>
      {/* The wrench in its shape */}
      <path d="M26 24V76" stroke={PAL.slateDark} strokeWidth="11" />
      <circle cx="26" cy="22" r="9" fill={PAL.slateDark} />
      <path d="M26 24V74" stroke={PAL.steel} strokeWidth="7" />
      <circle cx="26" cy="22" r="7" fill={PAL.steel} />
      <rect x="23" y="12" width="6" height="9" rx="1" fill={PAL.card} />
      {/* The screwdriver in its shape */}
      <rect x="38" y="20" width="14" height="28" rx="5" fill={PAL.slateDark} />
      <path d="M45 46V78" stroke={PAL.slateDark} strokeWidth="7" />
      <rect x="40" y="22" width="10" height="24" rx="4" fill={PAL.red} />
      <path d="M45 46V76" stroke={PAL.steel} strokeWidth="3.6" />
      {/* The hammer's painted shape */}
      <rect x="60" y="20" width="40" height="15" rx="3" fill={PAL.slateDark} />
      <path d="M80 33V84" stroke={PAL.slateDark} strokeWidth="11" />
      {/* The hammer, put back by the hand */}
      <Move kind="from" dx={22} dy={30} once>
        <path d="M80 34V82" stroke={PAL.wood} strokeWidth="7" />
        <rect x="62" y="22" width="36" height="11" rx="2.5" fill={PAL.steel} />
        <rect x="88" y="22" width="10" height="11" rx="2" fill={PAL.slate} opacity=".5" />
        <Shine d="M66 25H80" width={2.4} opacity={0.7} />
        <Hand pose="hold" x={80} y={104} scale={0.6} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
