import type { JSX } from 'react';
import { Clock, Ground, Move, PAL, SKIN, type Pt } from '../kit';

/** A worker from the side, walking to the right (green top, navy trousers, a bag on the shoulder). */
function Walker({ head, shoulder, hip, knees, feet, hand }: { head: Pt; shoulder: Pt; hip: Pt; knees: [Pt, Pt]; feet: [Pt, Pt]; hand: Pt }) {
  const [s, sh] = SKIN.henk;
  const leg = (k: Pt, f: Pt, c: string) => <path d={`M${hip[0]} ${hip[1]}L${k[0]} ${k[1]}L${f[0]} ${f[1]}`} fill="none" stroke={c} strokeWidth="9" />;
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {leg(knees[1], feet[1], PAL.navyShade)}
      <ellipse cx={feet[1][0] + 2} cy={feet[1][1] + 1} rx="7" ry="4" fill={PAL.slateDark} />
      {leg(knees[0], feet[0], PAL.navy)}
      <ellipse cx={feet[0][0] + 2} cy={feet[0][1] + 1} rx="7" ry="4" fill={PAL.slateDark} />
      <rect x={shoulder[0] - 14} y={shoulder[1] + 4} width="11" height="14" rx="3" fill={PAL.orange} />
      <path d={`M${shoulder[0]} ${shoulder[1]}L${hip[0]} ${hip[1]}`} stroke={PAL.green} strokeWidth="16" />
      <path d={`M${shoulder[0]} ${shoulder[1]}L${hand[0]} ${hand[1]}`} stroke={PAL.greenShade} strokeWidth="7" />
      <circle cx={hand[0]} cy={hand[1]} r="4" fill={s} />
      <circle cx={head[0]} cy={head[1]} r="9" fill={s} />
      <circle cx={head[0] + 2.6} cy={head[1] + 1.6} r="5.4" fill={sh} opacity=".4" />
      <path d={`M${head[0] - 9.6} ${head[1] + 1}Q${head[0] - 10} ${head[1] - 10.6} ${head[0]} ${head[1] - 10.6}Q${head[0] + 8} ${head[1] - 10.6} ${head[0] + 9} ${head[1] - 4}Q${head[0]} ${head[1] - 6} ${head[0] - 3} ${head[1] + 2}Z`} fill={PAL.steel} />
    </g>
  );
}

export default {
  // "eerder weg": to leave early — a clock at three o'clock, the rest of the working day (three to
  // five) still marked orange on it; Henk walks out of the open door to the right, with his bag, before
  // the end of the day. On the intro card he walks out of the door (once: he leaves).
  'w.eerderweg': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={70} cy={104} rx={42} ry={4} />
      {/* The clock: the hours still to go marked orange */}
      <Clock cx={30} cy={32} r={21} hour={3} minute={0} face={<path d="M30 32L46.8 32A16.8 16.8 0 0 1 38.4 46.5Z" fill={PAL.orangeLight} />} />
      {/* The door, open */}
      <rect x="44" y="44" width="34" height="62" rx="2" fill={PAL.slate} />
      <rect x="48" y="48" width="26" height="58" fill={PAL.slateDark} />
      <path d="M48 48L38 52V102L48 106Z" fill={PAL.blue} />
      <circle cx="42" cy="78" r="2" fill={PAL.yellow} />
      {/* Henk, walking out */}
      <Move kind="slow" dx={-30} once>
        <Walker head={[90, 52]} shoulder={[88, 63]} hip={[86, 83]} knees={[[94, 93], [80, 94]]} feet={[[100, 102], [72, 102]]} hand={[98, 76]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
