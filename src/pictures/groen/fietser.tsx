import type { JSX } from 'react';
import { Ground, Move, PAL, SKIN } from '../kit';

/** A bike wheel: black tyre, thin spokes, steel hub. */
const wheel = (cx: number, cy: number, r: number) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill="none" stroke={PAL.ink} strokeWidth="4.6" />
    <path d={`M${cx - r + 3} ${cy}H${cx + r - 3}M${cx} ${cy - r + 3}V${cy + r - 3}`} stroke={PAL.line} strokeWidth="1.4" />
    <circle cx={cx} cy={cy} r="3" fill={PAL.steel} />
  </g>
);

export default {
  // "de fietser": the cyclist — a person riding a city bike to the right, seen from the side: blue jacket,
  // navy trousers, one foot down on the pedal, hands on the handlebar.
  // Moves: she rides in from the left and stops where she is drawn, the wheels turning (once).
  'w.fietser': () => {
    const [s, sh] = SKIN.amina;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={60} cy={106} rx={50} ry={4} />
        <Move kind="from" dx={-40} once>
        <Move kind="turn" turn={-135} at={[29, 86]}>{wheel(29, 86, 18)}</Move>
        <Move kind="turn" turn={-135} at={[91, 86]}>{wheel(91, 86, 18)}</Move>
        {/* The far leg, behind the frame */}
        <path d="M50 54L64 70L60 92" fill="none" stroke={PAL.navyShade} strokeWidth="8" />
        {/* The frame */}
        <path d="M29 86L56 88L48 54M29 86L46 60M56 88Q66 66 82 58M84 50L91 86" fill="none" stroke={PAL.red} strokeWidth="4.4" />
        <circle cx="56" cy="88" r="4.6" fill={PAL.slate} />
        {/* Saddle and handlebar */}
        <path d="M40 52Q48 48 56 51" stroke={PAL.brown} strokeWidth="5" />
        <path d="M84 50L82 40L74 40" fill="none" stroke={PAL.steel} strokeWidth="3.6" />
        {/* The near leg: thigh to the knee, shin down to the pedal */}
        <path d="M50 52L70 62L64 86" fill="none" stroke={PAL.navy} strokeWidth="9" />
        <rect x="60" y="84" width="14" height="6" rx="3" fill={PAL.slateDark} />
        {/* The body leaning forward, the arm to the bar */}
        <path d="M50 50L62 26" stroke={PAL.blue} strokeWidth="15" />
        <path d="M62 28L74 40" stroke={PAL.blueShade} strokeWidth="6.5" />
        <circle cx="75" cy="40" r="3.8" fill={s} />
        {/* The head with short dark hair */}
        <circle cx="68" cy="15" r="9" fill={s} />
        <circle cx="71" cy="17" r="5.4" fill={sh} opacity=".45" />
        <path d="M59.5 14A9 9 0 0 1 76 10.5Q68 10 62 17Z" fill={PAL.ink} />
        </Move>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
