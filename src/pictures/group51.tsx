import type { JSX, ReactNode } from 'react';
import { Bust } from './bust';
import { Arrow, Box, Bubble, Clock, Ground, Hand, Motion, PAL, QuestionMark, SKIN, Shade, Shine } from './kit';

/**
 * Word pictures, group 51 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The three lessons of 14 November 2026 that bring "Hulp vragen" (u.help) to four lessons:
 * l.howto, l.mayask and l.whereis. Six of their eighteen words have no picture at all (hoe, zo,
 * weten, dat klopt, even, twijfelen: `picture: false`, a picture would be a guess), and two have
 * a memory picture only (moeilijk, makkelijk: `picture: 'hook'`, on the intro card, never in a
 * picture choice).
 *
 * The words of one lesson stand side by side in a picture choice, so each has its own main shape
 * and colour:
 *  - "How do I do this?" (l.howto), memory pictures: difficult (Bram, worried, a red tangle in
 *    his bubble) and easy (Jada, pleased, one straight green line from dot to dot in hers). The
 *    two are a pair: the same scene, a knot against a straight line.
 *  - "May I ask something?" (l.mayask): to ask (Bram asks Henk: TWO people, the question mark in
 *    the bubble of the one who talks; "een vraag stellen" is Jada alone with her hand up, "ik
 *    begrijp het niet" is Amina shrugging), who (a grey figure without a face, a question mark
 *    where the face is; "waar" is a pin with a question mark), the time (a watch on a wrist: the
 *    time you have, not a time of day; the clocks of "het uur", "op tijd" and "de werktijd" hang
 *    on a wall) and to disturb (Henk is on the phone; a finger taps his shoulder).
 *  - "Where is it?" (l.whereis): here (a big red pin on the spot at your feet), there (the spot
 *    at your feet is empty; an arrow goes to a small pin far away), lost (the dashed outline of
 *    a key and a question mark: it is not there; "zoeken" is a magnifying glass, "ontbreken" a
 *    shelf with an empty place), the exit (the building of "de ingang", the arrow coming OUT of
 *    the door; "de nooduitgang" is the green sign), to point at (a hand, its finger out, a
 *    dotted line to a box in a ring) and next to (a grey locker and a blue bin side by side, an
 *    arrow down to the bin; "boven" and "beneden" are a rack with one box).
 */

/** A map pin, its point at (x, y), `s` tall (the pin of ./group50.tsx, without its dot's hole). */
function Pin({ x, y, s }: { x: number; y: number; s: number }) {
  const d = 'M60 52C52 42 45 34 45 26A15 15 0 0 1 75 26C75 34 68 42 60 52Z';
  return (
    <g transform={`translate(${x} ${y}) scale(${s / 41}) translate(-60 -52)`}>
      <path d={d} fill={PAL.redShade} transform="translate(1.5 2)" />
      <path d={d} fill={PAL.red} />
      <circle cx="60" cy="26" r="6" fill={PAL.white} />
      <path d="M50 24A10.500 10.500 0 0 1 56 16.500" fill="none" stroke={PAL.redLight} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
}

/** The spot on the floor where you stand: a sky-blue ring, seen at an angle, round (cx, cy). */
function Spot({ cx, cy, rx, filled = false }: { cx: number; cy: number; rx: number; filled?: boolean }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={rx} ry={rx * 0.3} fill="none" stroke={PAL.sky} strokeWidth={Math.max(2.4, rx * 0.16)} />
      {filled && <ellipse cx={cx} cy={cy} rx={rx * 0.42} ry={rx * 0.13} fill={PAL.sky} />}
    </g>
  );
}

/** A person and what goes through their head: a bust on the left, a bubble top right. */
function Thought({ who, children, ...face }: { who: 'bram' | 'jada'; children: ReactNode; expr?: 'pleased'; emotion?: 'worried' }) {
  return (
    <g>
      <Bust who={who} x={42} y={124} scale={0.68} bold {...face} />
      <Bubble x={60} y={8} w={52} h={42} tail="left">
        {children}
      </Bubble>
    </g>
  );
}

export default {
  /* ---------------------------------------------------------------------------------------
   * l.howto: how do I do this? (memory pictures: `picture: 'hook'`)
   * ------------------------------------------------------------------------------------- */

  // "moeilijk": difficult — Bram, worried; in his bubble a red line in a knot.
  'w.moeilijk': () => (
    <Thought who="bram" emotion="worried">
      <path
        d="M70 34C66 16 90 12 91 27C92 42 72 44 76 29C79 16 104 18 102 32C100 44 82 42 85 30"
        fill="none"
        stroke={PAL.red}
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Thought>
  ),

  // "makkelijk": easy — Jada, pleased; in her bubble one straight green line from dot to dot.
  'w.makkelijk': () => (
    <Thought who="jada" expr="pleased">
      <path d="M72 29H100" stroke={PAL.leaf} strokeWidth="5" strokeLinecap="round" />
      <circle cx="72" cy="29" r="6" fill={PAL.leafShade} />
      <circle cx="100" cy="29" r="6" fill={PAL.leafShade} />
    </Thought>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.mayask: may I ask something?
   * ------------------------------------------------------------------------------------- */

  // "vragen": to ask — Bram asks Henk something: a question mark in the bubble above Bram, Henk
  // turned to him.
  'w.vragen': () => (
    <g>
      <Bust who="henk" x={88} y={124} scale={0.54} flip bold />
      <Bust who="bram" x={32} y={124} scale={0.54} talk bold />
      <Bubble x={34} y={6} w={46} h={40} tail="left">
        <QuestionMark x={57} y={26} size={30} color={PAL.sky} />
      </Bubble>
    </g>
  ),

  // "wie": who — a grey figure without a face: a question mark where the face is.
  'w.wie': () => (
    <g>
      <Shade color={PAL.slate} opacity={0.55} at={[104, 70, 30, 60]}>
        <g fill={PAL.steel}>
          <circle cx="60" cy="42" r="27" />
          <path d="M16 110Q16 80 42 75H78Q104 80 104 110Z" />
        </g>
      </Shade>
      <QuestionMark x={60} y={43} size={36} color={PAL.white} />
      <Shine d="M38 36A24 24 0 0 1 50 21" opacity={0.4} />
    </g>
  ),

  // "de tijd": the time — a watch on a wrist (the time you have; no wall clock, no time of day).
  'w.tijd': () => (
    <g>
      <Shade color={SKIN.amina[1]} opacity={1} at={[60, 96, 80, 16]}>
        <rect x="-6" y="46" width="132" height="40" fill={SKIN.amina[0]} />
      </Shade>
      <rect x="-6" y="42" width="30" height="48" rx="3" fill={PAL.blue} />
      <rect x="18" y="41" width="8" height="50" rx="2" fill={PAL.blueShade} />
      <rect x="48" y="40" width="30" height="52" rx="4" fill={PAL.slate} />
      <rect x="68" y="40" width="10" height="52" rx="4" fill={PAL.slateDark} />
      <rect x="86" y="62" width="7" height="8" rx="2" fill={PAL.yellowShade} />
      <Clock cx={63} cy={66} r={27} hour={10} minute={10} rim={PAL.yellow} rimShade={PAL.yellowShade} />
    </g>
  ),

  // "storen": to disturb — Henk is busy, on the phone; a finger taps his shoulder.
  'w.storen': () => (
    <g>
      <Bust who="henk" x={74} y={124} scale={0.64} talk bold />
      {/* The phone at his ear, in his hand */}
      <g transform="rotate(8 99 74)">
        <rect x="93" y="54" width="13" height="38" rx="4" fill={PAL.slate} />
        <rect x="93" y="54" width="4" height="38" rx="2" fill={PAL.steel} />
        <rect x="91" y="72" width="17" height="18" rx="4" fill={SKIN.henk[0]} />
        <path d="M92 78H107M92 84H107" stroke={SKIN.henk[1]} strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <Hand pose="point" x={10} y={117} rotate={58} scale={0.86} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      <Motion x={45} y={86} dir={-110} spread={70} n={3} len={8} gap={5} color={PAL.orange} width={3.6} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.whereis: where is it?
   * ------------------------------------------------------------------------------------- */

  // "hier": here — a big red pin on the spot at your feet.
  'w.hier': () => (
    <g>
      <Ground cx={60} cy={99} rx={20} ry={4} />
      <Spot cx={60} cy={98} rx={40} filled />
      <Pin x={60} y={98} s={78} />
    </g>
  ),

  // "daar": there — the spot at your feet is empty; an arrow goes to a small pin far away.
  'w.daar': () => (
    <g>
      <Spot cx={32} cy={98} rx={22} />
      <Spot cx={92} cy={46} rx={13} filled />
      <Arrow from={[40, 88]} to={[76, 58]} color={PAL.sky} width={8} head={13} />
      <Pin x={92} y={46} s={34} />
    </g>
  ),

  // "kwijt": lost — the dashed outline of a key (it is not there) and a question mark.
  'w.kwijt': () => (
    <g>
      <g fill="none" stroke={PAL.steel} strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="7 7">
        <circle cx="38" cy="50" r="19" />
        <path d="M52 64L88 100M74 86L82 78M84 96L91 89" />
      </g>
      <circle cx="38" cy="50" r="6" fill={PAL.mist} />
      <QuestionMark x={88} y={38} size={46} color={PAL.sky} />
    </g>
  ),

  // "de uitgang": the exit — the building of "de ingang" (./group18.tsx); the arrow comes OUT of
  // the open door.
  'w.uitgang': () => (
    <g>
      <Ground cx={52} cy={105} rx={46} ry={4} />
      <Shade color={PAL.clayShade} opacity={1} at={[92, 70, 14, 50]}>
        <rect x="10" y="30" width="78" height="74" rx="3" fill={PAL.clay} />
      </Shade>
      <rect x="6" y="24" width="86" height="10" rx="3" fill={PAL.slate} />
      <rect x="30" y="54" width="42" height="50" rx="2" fill={PAL.slateDark} />
      <rect x="30" y="54" width="8" height="50" rx="1.500" fill={PAL.ice} />
      <rect x="64" y="54" width="8" height="50" rx="1.500" fill={PAL.ice} />
      <rect x="24" y="46" width="54" height="9" rx="2.500" fill={PAL.yellow} />
      <rect x="64" y="46" width="14" height="9" rx="2.500" fill={PAL.yellowShade} />
      <Arrow from={[52, 80]} to={[110, 92]} color={PAL.sky} width={10} head={16} />
      <Shine d="M14 38V62" opacity={0.45} />
    </g>
  ),

  // "aanwijzen": to point at — a hand with its finger out, a dotted line to the box in a ring:
  // "that one".
  'w.aanwijzen': () => (
    <g>
      <Ground cx={86} cy={98} rx={24} ry={4} />
      <circle cx="84" cy="74" r="29" fill="none" stroke={PAL.sky} strokeWidth="4" strokeDasharray="1 9" strokeLinecap="round" />
      <Box x={68} y={62} w={28} h={28} depth={9} />
      <Hand pose="point" x={7} y={86} rotate={84} scale={0.92} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
    </g>
  ),

  // "naast": next to — a grey locker and a blue bin side by side on the floor; an arrow down to
  // the bin: the one next to the locker.
  'w.naast': () => (
    <g>
      <Ground cx={58} cy={105} rx={48} ry={4} />
      <Shade color={PAL.steel} opacity={1} at={[62, 60, 12, 60]}>
        <rect x="18" y="14" width="40" height="90" rx="3" fill={PAL.mist} />
      </Shade>
      <path d="M24 24H40M24 30H40" stroke={PAL.steel} strokeWidth="2.6" strokeLinecap="round" />
      <rect x="42" y="54" width="5" height="12" rx="2" fill={PAL.slate} />
      <Shade color={PAL.blueShade} opacity={1} at={[102, 84, 12, 30]}>
        <path d="M64 66H100L96 104H68Z" fill={PAL.blue} stroke={PAL.blue} strokeWidth="2" strokeLinejoin="round" />
      </Shade>
      <rect x="61" y="61" width="42" height="8" rx="3" fill={PAL.blueShade} />
      <Arrow from={[82, 14]} to={[82, 50]} color={PAL.sky} width={9} head={14} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
