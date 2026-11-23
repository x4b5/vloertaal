import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** A flame centred on (x, y) at its base, s times its size. */
const flame = (x: number, y: number, s: number) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0 -34C8 -24 16 -18 16 -6C16 4 9 10 0 10C-9 10 -16 4 -16 -6C-16 -14 -10 -18 -8 -24C-5 -18 -4 -15 -2 -14C-2 -22 -2 -28 0 -34Z" fill={PAL.orange} />
    <path d="M0 -10C5 -5 8 -2 8 3C8 7 4 10 0 10C-4 10 -8 7 -8 3C-8 -1 -4 -5 0 -10Z" fill={PAL.yellow} />
  </g>
);

export default {
  // "de branddriehoek": the fire triangle — a big orange triangle with a flame in the middle and the three
  // things a fire needs in round badges on its sides: wood (left), air (right, blue wind lines) and heat
  // (bottom, a red badge with a yellow sun). No text.
  'w.branddriehoek': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The triangle */}
      <path d="M60 16L104 92H16Z" fill="none" stroke={PAL.orangeShade} strokeWidth="7" transform="translate(0 3)" />
      <path d="M60 16L104 92H16Z" fill="#fff3e6" stroke={PAL.orange} strokeWidth="7" />
      {flame(60, 70, 0.95)}
      {/* Wood: two logs */}
      <circle cx="31" cy="52" r="15" fill={PAL.cardShade} />
      <circle cx="31" cy="50" r="15" fill={PAL.card} />
      <rect x="20" y="44" width="22" height="7" rx="3.5" fill={PAL.wood} transform="rotate(-16 31 47)" />
      <rect x="20" y="52" width="22" height="7" rx="3.5" fill={PAL.brown} transform="rotate(12 31 55)" />
      {/* Air: wind lines */}
      <circle cx="89" cy="52" r="15" fill={PAL.skyShade} />
      <circle cx="89" cy="50" r="15" fill={PAL.sky} />
      <path d="M80 45H92Q97 45 97 41Q97 38 94 38M80 52H96M80 58H90Q94 58 94 62" fill="none" stroke={PAL.white} strokeWidth="2.8" />
      {/* Heat: a sun */}
      <circle cx="60" cy="96" r="15" fill={PAL.redShade} />
      <circle cx="60" cy="94" r="15" fill={PAL.red} />
      <circle cx="60" cy="94" r="5.5" fill={PAL.yellow} />
      <path d="M60 83V86M60 102V105M49 94H52M68 94H71M52 86L54 88M66 100L68 102M68 86L66 88M54 100L52 102" stroke={PAL.yellow} strokeWidth="2.4" />
      <Shine d="M44 40L52 28" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
