import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** A five-pointed star centred on (x, y), outer radius r. */
const star = (x: number, y: number, r: number) => {
  const p: string[] = [];
  for (let i = 0; i < 10; i += 1) {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 === 0 ? r : r * 0.45;
    p.push(`${Math.round((x + Math.cos(a) * rr) * 10) / 10} ${Math.round((y + Math.sin(a) * rr) * 10) / 10}`);
  }
  return `M${p.join('L')}Z`;
};

export default {
  // "de klantenkaart": the customer card (a card to save points) — a purple plastic card on a key ring,
  // with a big yellow star (the shop's points) and a row of five point dots, three of them filled.
  // No chip, no bank stripe: so it is not the bank card of "pinnen". A thing: it stays still.
  'w.klantenkaart': () => (
    <g strokeLinejoin="round">
      <g transform="rotate(-10 62 64)">
        {/* Depth edge, then the card */}
        <rect x="18" y="38" width="88" height="56" rx="8" fill={PAL.purpleShade} />
        <rect x="18" y="33" width="88" height="56" rx="8" fill={PAL.purple} />
        <path d="M78 33H98A8 8 0 0 1 106 41V81A8 8 0 0 1 98 89H70Z" fill={PAL.purpleShade} opacity=".45" />
        {/* The key-ring hole */}
        <circle cx="29" cy="44" r="4" fill={PAL.white} opacity=".9" />
        {/* The star */}
        <path d={star(48, 58, 17)} fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="2" />
        <path d={star(48, 58, 17)} fill={PAL.yellowShade} opacity=".0" />
        {/* Name line */}
        <path d="M72 50H96M72 58H90" stroke={PAL.purpleLight} strokeWidth="3" strokeLinecap="round" />
        {/* The points: three of five saved */}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={34 + i * 14} cy="79" r="4.6" fill={i < 3 ? PAL.yellow : PAL.purpleLight} opacity={i < 3 ? 1 : 0.7} />
        ))}
        <Shine d="M26 38H50" width={3} opacity={0.45} />
      </g>
      {/* The key ring through the hole */}
      <circle cx="20" cy="30" r="10" fill="none" stroke={PAL.steel} strokeWidth="3.2" />
      <path d="M13 24A10 10 0 0 1 22 20.3" fill="none" stroke={PAL.mist} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
