import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de koffieautomaat": the coffee machine — a tall dark machine with a small lit screen and a column
  // of buttons, and below them an open niche where a white cup stands under the nozzle, a stream of
  // coffee running into it.
  // On the intro card the stream runs down out of the nozzle, then the coffee shows in the cup. Once and
  // slowly (one cup is filled).
  'w.koffieautomaat': () => {
    const id = `koffieautomaat-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={42} ry={4} />
      {/* The machine */}
      <Shade color={PAL.slateDark} opacity={1} at={[98, 60, 12, 60]}>
        <rect x="22" y="10" width="76" height="96" rx="7" fill={PAL.slate} />
      </Shade>
      <Shine d="M28 18V40" width={3} opacity={0.4} />
      {/* The screen and the buttons */}
      <rect x="32" y="18" width="34" height="18" rx="3" fill={PAL.ice} />
      <path d="M37 27H58" stroke={PAL.sky} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="82" cy="22" r="4.6" fill={PAL.brown} />
      <circle cx="82" cy="34" r="4.6" fill={PAL.card} />
      <circle cx="82" cy="46" r="4.6" fill={PAL.white} />
      {/* The niche, the nozzle, the drip tray */}
      <rect x="34" y="46" width="40" height="48" rx="4" fill={PAL.slateDark} />
      <rect x="48" y="46" width="12" height="8" rx="2" fill={PAL.steel} />
      <rect x="36" y="88" width="36" height="6" rx="2" fill={PAL.steel} />
      {/* The stream, running down out of the nozzle (clipped under it) */}
      <clipPath id={id}>
        <rect x="46" y="54" width="16" height="24" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <Move kind="from" dy={-24} once>
          <path d="M54 52V78" stroke={PAL.brown} strokeWidth="4" strokeLinecap="round" />
        </Move>
      </g>
      {/* The cup, and the coffee rising in it */}
      <path d="M42 70H66V80Q66 88 58 88H50Q42 88 42 80Z" fill={PAL.white} />
      <path d="M60 70H66V80Q66 88 58 88H58Z" fill={PAL.paperShade} />
      <ellipse cx="54" cy="70" rx="12" ry="3" fill={PAL.paperShade} />
      <Move kind="show">
        <ellipse cx="54" cy="71" rx="10" ry="2.2" fill={PAL.brown} />
      </Move>
      <path d="M66 74Q73 74 72 79Q71 83 66 82" fill="none" stroke={PAL.paperShade} strokeWidth="3" strokeLinecap="round" />
    </g>
    );
  },
} as Record<string, () => JSX.Element>;
