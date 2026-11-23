import type { JSX } from 'react';
import { CastHead, type CharacterId } from '../../components/Characters';
import { Ground, Move, PAL, SKIN, Shade } from '../kit';

/** A cast member's own head, its neck base at (x, y). */
const head = (who: CharacterId, x: number, y: number, s = 0.42) => (
  <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -96)`}>
    <CastHead who={who} expr="pleased" gaze={[0, 0]} bold />
  </g>
);

/** Legs, boots and body of a standing worker at x (neck at y 50). */
const body = (x: number, cloth: string, shade: string) => (
  <g>
    <path d={`M${x - 5} 78L${x - 6} 101M${x + 5} 78L${x + 6} 101`} stroke={PAL.navy} strokeWidth="9" />
    <path d={`M${x + 5} 78L${x + 6} 101`} stroke={PAL.navyShade} strokeWidth="9" />
    <ellipse cx={x - 7} cy="102.5" rx="6" ry="3.2" fill={PAL.slateDark} />
    <ellipse cx={x + 7} cy="102.5" rx="6" ry="3.2" fill={PAL.slateDark} />
    <Shade color={shade} opacity={1} at={[x + 14, 64, 7, 24]}>
      <rect x={x - 13} y="48" width="26" height="35" rx="9" fill={cloth} />
    </Shade>
  </g>
);

export default {
  // "de aflosser": the relief — at a machine panel (right), Bram has finished his shift and pulls off his
  // yellow work glove; Jada, his relief, has just come in from the left and lays her hand on his shoulder
  // to take over. On the intro card Jada walks in from the left (once: she arrives).
  'w.aflosser': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={62} cy={104} rx={52} ry={4} />
      {/* The machine panel */}
      <rect x="92" y="44" width="16" height="60" rx="2" fill={PAL.steel} />
      <rect x="95" y="50" width="10" height="12" rx="1.5" fill={PAL.slateDark} />
      <circle cx="100" cy="72" r="3.4" fill={PAL.leaf} />
      {/* Bram, at his machine, taking off his glove */}
      {body(72, PAL.blue, PAL.blueShade)}
      {head('bram', 72, 50)}
      <path d="M62 60L66 74M82 60L78 74" stroke={PAL.blueShade} strokeWidth="7" />
      <circle cx="78" cy="76" r="4.4" fill={SKIN.bram[0]} />
      <g transform="rotate(-20 66 78)">
        <rect x="61" y="73" width="11" height="12" rx="3.5" fill={PAL.yellow} />
        <rect x="63" y="83" width="7" height="10" rx="2.6" fill={PAL.yellowShade} />
        <path d="M61 78H72" stroke={PAL.yellowShade} strokeWidth="1.6" />
      </g>
      {/* Jada, his relief, arriving: her hand on his shoulder */}
      <Move kind="slow" dx={-30} once>
        {body(36, PAL.orange, PAL.orangeShade)}
        <path d="M44 56L60 52" stroke={PAL.orangeShade} strokeWidth="7" />
        <circle cx="62" cy="52" r="4.6" fill={SKIN.jada[0]} />
        <path d="M30 58L27 74" stroke={PAL.orange} strokeWidth="7" />
        {head('jada', 36, 50)}
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
