import { useId, type JSX } from 'react';
import { CastHead, type CharacterId } from '../../components/Characters';
import { Arrow, BUST_TORSO, Hand, PAL, SKIN } from '../kit';

/** A cast member as a bust (as Bust in ../bust), but with the eyes turned to where they look. */
const looking = (id: string, who: CharacterId, x: number, y: number, s: number, gaze: [number, number]) => (
  <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -134)`}>
    {BUST_TORSO[who](`${id}-${who}`)}
    <CastHead who={who} expr="pleased" gaze={gaze} bold />
  </g>
);

export default {
  // "de rondleiding": the tour (someone shows you around the building) — a hall going away from the
  // viewer: grey floor, a door at the far end and doors along both walls, a sky-blue arrow on the floor
  // going into it; in front, Amina points along the hall and Bram, the new worker, next to her looks where
  // she points.
  'w.rondleiding': () => {
    const id = `rl-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The hall: the far wall, the side walls, the floor, the doors */}
        <rect x="50" y="12" width="62" height="84" fill={PAL.paper} />
        <path d="M50 12L72 32V58L50 96Z" fill={PAL.paperShade} />
        <path d="M112 12L92 32V58L112 96Z" fill={PAL.mist} />
        <rect x="72" y="32" width="20" height="26" fill={PAL.white} />
        <path d="M50 96L72 58H92L112 96Z" fill={PAL.steel} opacity=".55" />
        <rect x="77" y="38" width="10" height="20" rx="1" fill={PAL.blue} />
        <path d="M56 44L64 39V62L56 74Z" fill={PAL.blue} />
        <path d="M107 46L100 41V62L107 72Z" fill={PAL.blueShade} />
        <Arrow from={[90, 92]} to={[83, 64]} color={PAL.sky} width={6} head={10} />
        {/* Amina, pointing along the hall, and Bram looking there */}
        {looking(id, 'bram', 22, 124, 0.5, [1, -0.6])}
        {looking(id, 'amina', 50, 126, 0.52, [1, -0.4])}
        <path d="M62 102L74 82" stroke={PAL.green} strokeWidth="8" />
        <Hand pose="point" x={75} y={84} rotate={34} scale={0.44} skin={SKIN.amina} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
