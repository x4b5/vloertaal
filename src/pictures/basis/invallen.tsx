import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Bust } from '../bust';
import { CurveArrow, Cross, Move, PAL } from '../kit';

export default {
  // "invallen": to fill in (work for someone who is away) — top left, Bram's head in a grey circle with
  // a red cross (he is away today); a curved arrow goes from him to Jada, who stands in his place in her
  // work clothes, ready. On the intro card Jada comes in from the right to his place (once: she takes
  // over his shift).
  'w.invallen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* Bram, away */}
      <circle cx="30" cy="32" r="21" fill={PAL.paperShade} />
      <circle cx="30" cy="30" r="21" fill={PAL.mist} />
      <g transform="translate(30 31) scale(0.44) translate(-60 -56)" opacity=".8">
        <CastHead who="bram" expr="neutral" />
      </g>
      <Cross x={46} y={47} r={9} />
      {/* The arrow from his place to her */}
      <CurveArrow from={[38, 60]} to={[52, 86]} bend={10} color={PAL.sky} width={6} head={11} />
      {/* Jada, filling in */}
      <Move kind="slow" dx={36} once>
        <Bust who="jada" x={80} y={112} scale={0.72} expr="pleased" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
