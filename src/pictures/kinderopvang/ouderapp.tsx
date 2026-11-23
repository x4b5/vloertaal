import type { JSX } from 'react';
import { Ground, PAL, SKIN, Shade, Shine } from '../kit';

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
  // "de ouderapp": the parent app — a phone with the app open: a photo of the child at play, a message
  // bubble with a heart under it, and a red dot for the new message.
  'w.ouderapp': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={108} rx={30} ry={3} />
      {/* The phone */}
      <rect x="32" y="10" width="56" height="96" rx="9" fill={PAL.slateDark} />
      <rect x="28" y="10" width="56" height="96" rx="9" fill={PAL.slate} />
      <rect x="33" y="18" width="46" height="80" rx="4" fill={PAL.paper} />
      {/* The app's top bar */}
      <rect x="33" y="18" width="46" height="10" rx="4" fill={PAL.green} />
      {/* The photo of the child, with a block */}
      <rect x="37" y="32" width="38" height="34" rx="3" fill={PAL.ice} />
      <rect x="44" y="54" width="24" height="12" rx="5" fill={PAL.yellow} />
      <ChildHead x={56} y={46} r={10} skin={SKIN.jada} hair="#2e201a" />
      <rect x="64" y="56" width="8" height="8" rx="1.5" fill={PAL.red} />
      {/* The message bubble with a heart */}
      <path d="M37 74Q37 70 41 70H71Q75 70 75 74V84Q75 88 71 88H48L41 93V88Q37 88 37 84Z" fill={PAL.paperShade} />
      <path d="M56 85C53.6 83 50 81 50 78C50 76.4 51.2 75.2 52.8 75.2C54 75.2 55.4 76 56 77.2C56.6 76 58 75.2 59.2 75.2C60.8 75.2 62 76.4 62 78C62 81 58.4 83 56 85Z" fill={PAL.red} />
      {/* The red dot of the new message */}
      <circle cx="84" cy="14" r="7" fill={PAL.red} />
      <Shine d="M30 20V36" width={2.6} opacity={0.35} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
