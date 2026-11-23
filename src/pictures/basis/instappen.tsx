import type { JSX } from 'react';
import { Arrow, Ground, Move, PAL, SKIN, Shade, Shine, type Pt } from '../kit';

/** The work van from the side, nose to the left, its sliding door open (the dark opening, a step). */
function Van() {
  return (
    <g strokeLinejoin="round">
      <Shade color={PAL.paperShade} opacity={1} at={[104, 70, 14, 40]}>
        <path d="M6 86V58Q6 50 12 46L26 35Q29 33 34 33H96Q100 33 100 38V86Q100 90 96 90H10Q6 90 6 86Z" fill={PAL.white} />
      </Shade>
      <path d="M12 52L26 39H34V52Z" fill={PAL.ice} />
      <rect x="37" y="39" width="10" height="13" rx="2" fill={PAL.ice} />
      <rect x="6" y="68" width="94" height="6" fill={PAL.orange} />
      {/* The open sliding door: the dark inside with a seat, the step */}
      <rect x="51" y="38" width="30" height="48" rx="2" fill={PAL.slateDark} />
      <path d="M58 70V58Q58 54 62 54H66Q70 54 70 58V70H76V76H58Z" fill={PAL.slate} />
      <rect x="49" y="86" width="34" height="5" rx="2" fill={PAL.steel} />
      <rect x="84" y="40" width="12" height="12" rx="2" fill={PAL.ice} />
      <rect x="6" y="58" width="6" height="6" rx="2" fill={PAL.yellowLight} />
      <Shine d="M16 46L25 38.5" width={2.8} opacity={0.8} />
      <circle cx="22" cy="91" r="10" fill={PAL.slateDark} />
      <circle cx="22" cy="91" r="4" fill={PAL.steel} />
      <circle cx="90" cy="91" r="10" fill={PAL.slateDark} />
      <circle cx="90" cy="91" r="4" fill={PAL.steel} />
    </g>
  );
}

/** A worker from the side (orange top, blue trousers), from the joints given. */
function Walker({ head, shoulder, hip, knees, feet, hand }: { head: Pt; shoulder: Pt; hip: Pt; knees: [Pt, Pt]; feet: [Pt, Pt]; hand: Pt }) {
  const [s, sh] = SKIN.amina;
  const leg = (k: Pt, f: Pt, c: string) => <path d={`M${hip[0]} ${hip[1]}L${k[0]} ${k[1]}L${f[0]} ${f[1]}`} fill="none" stroke={c} strokeWidth="9" />;
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {leg(knees[1], feet[1], PAL.blueShade)}
      <ellipse cx={feet[1][0]} cy={feet[1][1] + 1} rx="7" ry="4" fill={PAL.slateDark} />
      {leg(knees[0], feet[0], PAL.blue)}
      <ellipse cx={feet[0][0]} cy={feet[0][1] + 1} rx="7" ry="4" fill={PAL.slateDark} />
      <path d={`M${shoulder[0]} ${shoulder[1]}L${hip[0]} ${hip[1]}`} stroke={PAL.orange} strokeWidth="16" />
      <path d={`M${shoulder[0]} ${shoulder[1]}L${hand[0]} ${hand[1]}`} stroke={PAL.orangeShade} strokeWidth="7" />
      <circle cx={hand[0]} cy={hand[1]} r="4" fill={s} />
      <circle cx={head[0]} cy={head[1]} r="9" fill={s} />
      <circle cx={head[0] + 3} cy={head[1] + 1.6} r="5.4" fill={sh} opacity=".45" />
      <path d={`M${head[0] - 9.6} ${head[1]}Q${head[0] - 9.6} ${head[1] - 10.6} ${head[0]} ${head[1] - 10.6}Q${head[0] + 9.6} ${head[1] - 10.6} ${head[0] + 9.6} ${head[1]}Q${head[0]} ${head[1] - 5} ${head[0] - 9.6} ${head[1]}Z`} fill={PAL.ink} />
    </g>
  );
}

export default {
  // "instappen": to get in (a car, a bus or a train) — the work van with its side door open; a worker
  // steps up onto the step and into the van, a green arrow points in. ("uitstappen" is the same van:
  // she steps down and walks away, an orange arrow out.) On the intro card she walks to the door and
  // in (once: she gets in).
  'w.instappen': () => (
    <g>
      <Ground cx={56} cy={104} rx={50} ry={4} />
      <Van />
      <Move kind="slow" dx={28} once>
        <Walker head={[70, 44]} shoulder={[74, 55]} hip={[78, 76]} knees={[[66, 78], [84, 92]]} feet={[[62, 86], [92, 102]]} hand={[60, 58]} />
      </Move>
      <Arrow from={[108, 22]} to={[60, 22]} color={PAL.ok} width={7} head={12} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
