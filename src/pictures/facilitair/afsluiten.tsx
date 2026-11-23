import type { JSX } from 'react';
import { CurveArrow, Hand, Move, PAL, SKIN } from '../kit';

export default {
  // "afsluiten": to lock up — a hand turns a brass key in the lock of a wooden door (the key's bow lies
  // flat, turned), next to the door handle; a curved blue arrow shows the turn.
  // Once: the key turns a quarter in the lock, from upright to flat (the door is locked once).
  'w.afsluiten': () => (
    <g strokeLinejoin="round">
      {/* The door and its edge */}
      <path d="M96 8L104 4V112L96 116Z" fill={PAL.cardShade} />
      <rect x="8" y="8" width="88" height="108" rx="3" fill={PAL.card} />
      {/* The handle above */}
      <rect x="66" y="16" width="16" height="72" rx="7" fill={PAL.steel} />
      <path d="M74 26H46" stroke={PAL.mist} strokeWidth="9" strokeLinecap="round" />
      <circle cx="74" cy="26" r="6.5" fill={PAL.mist} />
      {/* The keyhole's rose */}
      <circle cx="74" cy="72" r="8" fill={PAL.slate} />
      {/* The key and the hand turn together */}
      <Move kind="turn" turn={90} at={[74, 72]} once>
        <path d="M74 72H54" stroke={PAL.yellowShade} strokeWidth="6" strokeLinecap="round" />
        <rect x="26" y="62" width="30" height="20" rx="9" fill={PAL.yellow} />
        <circle cx="34" cy="72" r="3.6" fill={PAL.yellowShade} />
        <Hand pose="hold" x={38} y={84} rotate={0} scale={0.62} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
      </Move>
      <CurveArrow from={[64, 44]} to={[22, 52]} bend={10} color={PAL.sky} width={6} head={11} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
