import type { JSX } from 'react';
import { Bust } from '../bust';
import { Move, PAL, SKIN, Shade, Shine } from '../kit';

/** A gold coin, seen a little from the side. */
const coin = (x: number, y: number) => (
  <g>
    <ellipse cx={x} cy={y + 2.4} rx="9" ry="8" fill={PAL.yellowShade} />
    <ellipse cx={x} cy={y} rx="9" ry="8" fill={PAL.yellow} />
    <ellipse cx={x} cy={y} rx="5" ry="4.2" fill="none" stroke={PAL.yellowShade} strokeWidth="1.6" />
  </g>
);

export default {
  // "de tussenpersoon": the middleman (someone who arranges work for money) — a man in a dark suit (no
  // face: a stranger, not one of the cast) holds up a yellow hard hat, the job; Amina, on the left, has
  // to give him a coin for it, his other hand open for the money. On the intro card the coin goes from
  // her to his open hand (once: she pays him).
  'w.tussenpersoon': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The middleman: suit, shirt and tie, a plain head */}
      <Shade color={PAL.slateDark} opacity={1} at={[112, 96, 14, 30]}>
        <path d="M64 112V84Q64 66 86 66Q108 66 108 84V112Z" fill={PAL.slate} />
      </Shade>
      <path d="M80 66L86 82L92 66Z" fill={PAL.white} />
      <path d="M84 68H88L89 84L86 88L83 84Z" fill={PAL.red} />
      <circle cx="86" cy="50" r="13" fill={SKIN.henk[0]} />
      <circle cx="90" cy="52" r="8" fill={SKIN.henk[1]} opacity=".45" />
      <path d="M73 49Q72 35 86 35Q100 35 99 49Q92 41 73 49Z" fill={PAL.ink} />
      {/* His arm up with the hard hat (the job) */}
      <path d="M102 74L106 40" stroke={PAL.slate} strokeWidth="9" />
      <circle cx="106" cy="38" r="5" fill={SKIN.henk[0]} />
      <path d="M90 30Q90 14 104 14Q118 14 118 30Z" fill={PAL.yellow} transform="translate(-4 0) scale(0.94)" />
      <rect x="80" y="27" width="30" height="5" rx="2.5" fill={PAL.yellowShade} />
      <Shine d="M92 24Q93 18 98 16" color={PAL.yellowShine} width={2.8} opacity={0.9} />
      {/* His other hand, open for the money */}
      <path d="M70 78L60 70" stroke={PAL.slate} strokeWidth="9" />
      <path d="M48 66Q48 72 56 72H64Q66 72 66 70V66Z" fill={SKIN.henk[0]} />
      {/* Amina, who must pay */}
      <Bust who="amina" x={28} y={124} scale={0.6} expr="disappointed" />
      {/* The coin, going into his hand */}
      <Move kind="slow" dx={-24} dy={32} once>
        {coin(57, 60)}
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
