import type { JSX, ReactNode } from 'react';
import { CastHead, type CharacterId } from '../../components/Characters';
import type { Emotion } from '../../components/Faces';
import { Arrow, Ground, PAL, Shade } from '../kit';

/** A cast member's own head (no bust), its neck base at (x, y). */
function Head({ who, x, y, s = 0.44, emotion }: { who: CharacterId; x: number; y: number; s?: number; emotion?: Emotion }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -96)`}>
      <CastHead who={who} expr="neutral" emotion={emotion} gaze={[0, 0]} bold />
    </g>
  );
}

/** A standing person: legs, body (colour, shade), arms down, head on top. */
const person = (x: number, body: string, shade: string, legs: string, head: ReactNode) => (
  <g>
    <path d={`M${x - 5} 76L${x - 7} 102M${x + 5} 76L${x + 7} 102`} stroke={legs} strokeWidth="8.5" strokeLinecap="round" />
    <ellipse cx={x - 8} cy="103" rx="6" ry="3" fill={PAL.slateDark} />
    <ellipse cx={x + 8} cy="103" rx="6" ry="3" fill={PAL.slateDark} />
    <Shade color={shade} opacity={1} at={[x + 14, 62, 7, 24]}>
      <rect x={x - 13} y="42" width="26" height="38" rx="9" fill={body} />
    </Shade>
    {head}
  </g>
);

export default {
  // "de afstand": the distance — Jada, the guard in navy (left), and an angry Bram (right) stand far apart;
  // a big blue double arrow on the floor between them shows the space she keeps.
  'w.afstand': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={54} ry={4} />
      {person(24, PAL.navy, PAL.navyShade, PAL.slate, <Head who="jada" x={24} y={44} />)}
      {person(96, PAL.blue, PAL.blueShade, PAL.navy, <Head who="bram" x={96} y={44} emotion="angry" />)}
      <Arrow from={[60, 70]} to={[40, 70]} color={PAL.sky} width={7} head={12} />
      <Arrow from={[60, 70]} to={[80, 70]} color={PAL.sky} width={7} head={12} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
