import type { JSX } from 'react';
import { Bust } from './bust';
import { Arrow, Box, CurveArrow, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 52 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The basis unit "Instructies" (u.do, 14 November 2026): what a colleague tells you to do with
 * your hands. Three of its four lessons are drawn here: l.putdown, l.onoff and l.fillempty. Every
 * verb is a hand doing it, with an arrow where the direction is the meaning. The six words of the
 * fourth lesson (l.order: nu, dan, altijd, genoeg, meer, alles) have no picture (`picture: false`,
 * like "straks", "meteen" and "even"): a picture would be a guess, and "dan" would be the list of
 * "daarna" once more. They are also short words that stand in many sentences of other lessons: as
 * pictured words they would take over those sentences' pictures (src/lib/exercises.ts
 * sentencePicture). "stoppen" has a memory picture only (`picture: 'hook'`: on its intro card,
 * never in a picture choice): the word also means to stop working or to quit ("Ik denk erover om
 * te stoppen"), where a red bar would be the wrong picture for the sentence.
 *
 * The words of one lesson stand side by side in a picture choice, so each has its own main shape
 * and colour, and the pairs differ in more than an arrow:
 *  - "Put it there" (l.putdown): to put (a blue bucket, standing, lowered by its handle onto a
 *    table), to lay (a purple book lying flat, a flat hand on it: low and wide against tall), to
 *    bring (Jada carries a box, an arrow to a spot further on; "inladen" is a box into a van), to
 *    give (a yellow roll of tape on an open palm, held out to a second open hand; "doorgeven" is
 *    a note between two people), to hold (two hands tight on the sides of a box, grip lines) and
 *    to let go (the same box, the hands open and away from it, the box drops).
 *  - "On and off, open and closed" (l.onoff): to switch on (a finger on a wall switch, the lamp
 *    lights up; "uitzetten" is a phone whose screen goes black), to open (the green door swung
 *    wide, the bright doorway free, an arrow away from the post), to close (the same door nearly
 *    shut, a flat hand pushes it, an arrow to the post), to press (a finger from above on a blue
 *    button, an arrow down; "de noodstop" is a red mushroom on a yellow box, no hand), to turn (a
 *    hand on a round knob, an arrow round it) and, as a memory picture, to stop (an arrow that
 *    ends at a red bar, a raised hand behind it; "stop" is the red sign, "de noodstop" the button).
 *  - "Push, pull, fill" (l.fillempty): to push (two flat hands against a cardboard box, the arrow
 *    away from the hands), to pull (a fist round the handle of a blue cart, the arrow towards the
 *    hand), to fill (water runs from a tap into a jug that is half full, an arrow up), full (the
 *    same jug, the water at the brim, no tap), to empty (a green bin held upside down, the
 *    rubbish falls out; "de prullenbak" stands, lid up) and to clean (a hand wipes a worktop with
 *    a yellow sponge: clean and shining where it has been, spots where it has not).
 */

type Tone = [string, string];
const NAVY: Tone = ['#2d5a92', PAL.navyShade];
const GREEN: Tone = [PAL.green, PAL.greenShade];
const BLUE: Tone = [PAL.blue, PAL.blueShade];
const ORANGE: Tone = [PAL.orange, PAL.orangeShade];

/** A table top seen from the side, its upper edge at `y`. */
function Table({ y = 94 }: { y?: number }) {
  return (
    <g>
      <rect x="6" y={y + 6} width="108" height="5" rx="2" fill={PAL.cardDark} />
      <rect x="6" y={y} width="108" height="8" rx="3" fill={PAL.wood} />
      <path d={`M10 ${y + 2.4}H70`} stroke={PAL.card} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/** A clear jug standing on the floor (x 30-86, y 46-104), water up to `level` (a y). */
function Jug({ level }: { level: number }) {
  return (
    <g>
      <Ground cx={58} cy={105} rx={34} ry={4} />
      {/* The ear */}
      <path d="M84 60H96Q102 60 102 66V82Q102 88 96 88H84" fill="none" stroke={PAL.steel} strokeWidth="6" strokeLinecap="round" />
      <Shade color={PAL.steel} opacity={0.5} at={[90, 76, 10, 40]}>
        <path d="M28 46H88L84 99Q84 104 78 104H38Q32 104 32 99Z" fill={PAL.mist} />
      </Shade>
      <path d={`M33.6 52H82.4L79.4 97Q79.2 99.500 77 99.500H39Q36.800 99.500 36.600 97Z`} fill={PAL.white} />
      <path d={`M${33.6 + (level - 52) * 0.067} ${level}H${82.4 - (level - 52) * 0.067}L79.400 97Q79.200 99.500 77 99.500H39Q36.800 99.500 36.600 97Z`} fill={PAL.sky} />
      <rect x={35 + (level - 52) * 0.067} y={level} width={46 - (level - 52) * 0.134} height="4" rx="2" fill={PAL.ice} />
      <Shine d="M40 60V90" width={3} opacity={0.6} />
    </g>
  );
}

/** A door post with a bright doorway (x 44-102, y 34-106), for the door of "opendoen" and "dichtdoen". */
function Doorway() {
  return (
    <g>
      <Ground cx={66} cy={106} rx={46} ry={3.5} />
      <rect x="44" y="34" width="58" height="72" rx="3" fill={PAL.slate} />
      <rect x="50" y="40" width="46" height="66" fill={PAL.yellowShine} />
    </g>
  );
}

/** A crumpled ball of paper. */
function PaperBall({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-8 1L-4 -7L4 -8L9 -2L7 6L-2 8Z" fill={PAL.mist} stroke={PAL.mist} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M-4 -7L0 0L-8 1M0 0L9 -2M0 0L-2 8" fill="none" stroke={PAL.steel} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

export default {
  /* ---------------------------------------------------------------------------------------
   * l.putdown: put it there
   * ------------------------------------------------------------------------------------- */

  // "zetten": to put (something that stands) — a blue bucket, held by its handle, is lowered onto
  // a table: it stands.
  'w.zetten': () => (
    <g>
      <Table />
      <Hand pose="hold" x={50} y={2} rotate={180} scale={0.92} skin={SKIN.bram} sleeve={ORANGE} />
      <path d="M30 56Q30 21 50 21Q70 21 70 56" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      <Shade color={PAL.skyShade} opacity={1} at={[78, 74, 12, 30]}>
        <path d="M24 52H76L70 90Q69.500 94 65 94H35Q30.500 94 30 90Z" fill={PAL.sky} />
      </Shade>
      <rect x="22" y="48" width="56" height="8" rx="4" fill={PAL.skyShade} />
      <Shine d="M33 62L36 86" width={3.4} opacity={0.5} />
      <Arrow from={[98, 30]} to={[98, 84]} color={PAL.sky} />
    </g>
  ),

  // "leggen": to lay (something that lies flat) — a purple book lying on the table, a flat hand
  // on it: low and wide, where "zetten" is tall.
  'w.leggen': () => (
    <g>
      <Table />
      <rect x="20" y="78" width="66" height="16" rx="3" fill={PAL.purple} />
      <rect x="24" y="82" width="62" height="8" fill={PAL.paper} />
      <path d="M26 86H84" stroke={PAL.line} strokeWidth="1.4" strokeLinecap="round" />
      <rect x="20" y="90" width="66" height="4" rx="2" fill={PAL.purpleShade} />
      <Hand pose="open" x={22} y={64} rotate={90} scale={0.9} skin={SKIN.henk} sleeve={NAVY} />
      <Arrow from={[100, 26]} to={[100, 82]} color={PAL.sky} />
    </g>
  ),

  // "brengen": to bring, to take — Jada carries a box; an arrow to the spot where it must go.
  'w.brengen': () => (
    <g>
      <Bust who="jada" x={38} y={128} scale={0.74} bold />
      <Box x={18} y={96} w={40} h={26} depth={9} />
      <circle cx="19" cy="108" r="6" fill={SKIN.jada[0]} />
      <circle cx="59" cy="108" r="6" fill={SKIN.jada[0]} />
      <ellipse cx="96" cy="100" rx="15" ry="4.6" fill="none" stroke={PAL.sky} strokeWidth="3.4" />
      <ellipse cx="96" cy="100" rx="6" ry="2" fill={PAL.sky} />
      <CurveArrow from={[72, 50]} to={[97, 88]} bend={16} color={PAL.sky} width={8} head={13} />
    </g>
  ),

  // "geven": to give — a yellow roll of tape on an open palm, held out to a second open hand.
  'w.geven': () => (
    <g>
      <Hand pose="open" x={112} y={92} rotate={-90} scale={0.84} skin={SKIN.amina} sleeve={GREEN} mirror />
      <Hand pose="open" x={8} y={74} rotate={90} scale={0.9} skin={SKIN.bram} sleeve={BLUE} />
      <Shade color={PAL.yellowShade} opacity={1} at={[50, 46, 8, 20]}>
        <circle cx="38" cy="46" r="15" fill={PAL.yellow} />
      </Shade>
      <circle cx="38" cy="46" r="6" fill={PAL.card} />
      <Shine d="M27 42A12 12 0 0 1 34 35" color={PAL.yellowShine} width={3} opacity={1} />
      <CurveArrow from={[62, 34]} to={[92, 62]} bend={12} color={PAL.sky} width={8} head={13} />
    </g>
  ),

  // "vasthouden": to hold — two hands tight on the sides of a box; short grip lines.
  'w.vasthouden': () => (
    <g>
      <Box x={36} y={42} w={44} h={44} depth={12} />
      <Hand pose="open" x={6} y={66} rotate={90} scale={0.78} skin={SKIN.amina} sleeve={GREEN} />
      <Hand pose="open" x={114} y={66} rotate={-90} scale={0.78} skin={SKIN.amina} sleeve={GREEN} mirror />
      <path d="M22 96L30 104M98 96L90 104M22 34L30 26M98 34L90 26" stroke={PAL.orange} strokeWidth="3.6" strokeLinecap="round" opacity=".85" />
    </g>
  ),

  // "loslaten": to let go — the same box: the hands are open and away from it, the box drops.
  'w.loslaten': () => (
    <g>
      <g transform="rotate(9 58 84)">
        <Box x={38} y={64} w={40} h={38} depth={11} />
      </g>
      <path d="M46 34V48M60 28V46M74 34V48" stroke={PAL.line} strokeWidth="3.4" strokeLinecap="round" opacity=".8" />
      <Hand pose="open" x={2} y={30} rotate={82} scale={0.74} skin={SKIN.jada} sleeve={[PAL.yellow, PAL.yellowShade]} />
      <Hand pose="open" x={118} y={30} rotate={-82} scale={0.74} skin={SKIN.jada} sleeve={[PAL.yellow, PAL.yellowShade]} mirror />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.onoff: on and off, open and closed
   * ------------------------------------------------------------------------------------- */

  // "aanzetten": to switch on — a finger on a wall switch; the lamp is on.
  'w.aanzetten': () => (
    <g>
      <path d="M36 4V16" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
      <rect x="27" y="14" width="18" height="12" rx="3" fill={PAL.slate} />
      <Shade color={PAL.yellowShade} opacity={0.8} at={[56, 46, 10, 26]}>
        <circle cx="36" cy="44" r="21" fill={PAL.yellow} />
      </Shade>
      <Shine d="M22 44A14 14 0 0 1 30 31" color={PAL.yellowShine} width={4} opacity={1} />
      <Motion x={36} y={44} dir={90} spread={200} n={5} len={9} gap={27} color={PAL.yellowShade} width={4} />
      <rect x="46" y="62" width="38" height="50" rx="6" fill={PAL.steel} />
      <rect x="46" y="58" width="38" height="50" rx="6" fill={PAL.mist} />
      <rect x="55" y="66" width="20" height="34" rx="4" fill={PAL.slate} />
      <rect x="55" y="66" width="20" height="17" rx="4" fill={PAL.leaf} />
      <Hand pose="point" x={112} y={70} rotate={-90} scale={0.86} skin={SKIN.henk} sleeve={NAVY} />
    </g>
  ),

  // "opendoen": to open — the green door is swung wide open, the bright doorway is free; a hand
  // on the handle, the arrow goes away from the post.
  'w.opendoen': () => (
    <g>
      <Doorway />
      <path d="M50 40L20 30V114L50 106Z" fill={PAL.green} stroke={PAL.green} strokeWidth="2" strokeLinejoin="round" />
      <path d="M26 32L20 30V114L26 112.400Z" fill={PAL.greenShade} />
      <rect x="28" y="68" width="14" height="6" rx="3" fill={PAL.yellow} />
      <Hand pose="fist" x={12} y={96} rotate={38} scale={0.62} skin={SKIN.bram} sleeve={ORANGE} />
      <CurveArrow from={[92, 24]} to={[30, 18]} bend={-9} color={PAL.sky} width={8} head={13} />
    </g>
  ),

  // "dichtdoen": to close — the same door, nearly shut: only a strip of the doorway is left; a
  // flat hand pushes it, the arrow goes to the post.
  'w.dichtdoen': () => (
    <g>
      <Doorway />
      <path d="M50 40L88 36V110L50 106Z" fill={PAL.green} stroke={PAL.green} strokeWidth="2" strokeLinejoin="round" />
      <path d="M80 36.800L88 36V110L80 109.200Z" fill={PAL.greenShade} />
      <rect x="68" y="66" width="12" height="6" rx="3" fill={PAL.yellow} />
      <Hand pose="open" x={62} y={126} rotate={-4} scale={0.8} skin={SKIN.amina} sleeve={GREEN} />
      <CurveArrow from={[26, 26]} to={[94, 22]} bend={9} color={PAL.sky} width={8} head={13} />
    </g>
  ),

  // "drukken": to press — a finger comes down on a big blue button; an arrow down.
  'w.drukken': () => (
    <g>
      <Ground cx={62} cy={106} rx={40} ry={4} />
      <Shade color={PAL.slateDark} opacity={1} at={[100, 94, 14, 20]}>
        <rect x="26" y="84" width="72" height="21" rx="6" fill={PAL.slate} />
      </Shade>
      <rect x="38" y="78" width="48" height="9" rx="4.500" fill={PAL.steel} />
      <Shade color={PAL.blueShade} opacity={1} at={[84, 70, 12, 20]}>
        <path d="M42 80Q42 60 62 60Q82 60 82 80Z" fill={PAL.blue} />
      </Shade>
      <Shine d="M49 72Q51 66 58 64.500" width={3} opacity={0.6} />
      <Hand pose="point" x={55.500} y={18} rotate={180} scale={0.84} skin={SKIN.jada} sleeve={[PAL.yellow, PAL.yellowShade]} />
      <Arrow from={[20, 22]} to={[20, 68]} color={PAL.sky} />
      <path d="M92 62L100 56M94 72H104" stroke={PAL.orange} strokeWidth="3.6" strokeLinecap="round" opacity=".85" />
    </g>
  ),

  // "draaien": to turn — a hand on a round knob; an arrow goes round it.
  'w.draaien': () => (
    <g>
      <rect x="22" y="22" width="76" height="76" rx="12" fill={PAL.mist} />
      <rect x="84" y="22" width="14" height="76" rx="7" fill={PAL.paperShade} />
      <Shade color={PAL.slateDark} opacity={1} at={[86, 60, 14, 34]}>
        <circle cx="60" cy="58" r="27" fill={PAL.slate} />
      </Shade>
      <path d="M60 37V50" stroke={PAL.white} strokeWidth="5" strokeLinecap="round" />
      <Shine d="M40 52A21 21 0 0 1 50 39" opacity={0.35} />
      <Hand pose="hold" x={60} y={112} scale={0.96} skin={SKIN.bram} sleeve={BLUE} />
      <CurveArrow from={[18, 40]} to={[100, 36]} bend={30} color={PAL.sky} width={8} head={13} />
    </g>
  ),

  // "stoppen": to stop — an arrow that ends at a red bar; behind it a raised hand: no further.
  // A memory picture (`picture: 'hook'`).
  'w.stoppen': () => (
    <g>
      <Arrow from={[10, 56]} to={[48, 56]} color={PAL.sky} width={10} head={15} />
      <rect x="56" y="22" width="12" height="76" rx="6" fill={PAL.redShade} />
      <rect x="54" y="20" width="12" height="76" rx="6" fill={PAL.red} />
      <Hand pose="open" x={92} y={92} scale={0.98} skin={SKIN.henk} sleeve={NAVY} mirror />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.fillempty: push, pull, fill
   * ------------------------------------------------------------------------------------- */

  // "duwen": to push — two flat hands against a cardboard box; the arrow goes away from the hands.
  'w.duwen': () => (
    <g>
      <Ground cx={74} cy={105} rx={32} ry={4} />
      <Box x={54} y={52} w={40} h={52} depth={11} />
      <Hand pose="open" x={18} y={64} rotate={90} scale={0.72} skin={SKIN.henk} sleeve={NAVY} />
      <Hand pose="open" x={18} y={90} rotate={90} scale={0.72} skin={SKIN.henk} sleeve={NAVY} />
      <Arrow from={[52, 24]} to={[104, 24]} color={PAL.sky} />
    </g>
  ),

  // "trekken": to pull — a fist round the handle of a blue cart; the arrow goes towards the hand.
  'w.trekken': () => (
    <g>
      <Ground cx={84} cy={106} rx={30} ry={3.5} />
      <path d="M66 70H38" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d="M38 50V90" stroke={PAL.steel} strokeWidth="7" strokeLinecap="round" />
      <Hand pose="hold" x={20} y={70} rotate={90} scale={0.9} skin={SKIN.amina} sleeve={GREEN} />
      <circle cx="74" cy="99" r="7.500" fill={PAL.slate} />
      <circle cx="100" cy="99" r="7.500" fill={PAL.slate} />
      <circle cx="74" cy="99" r="2.600" fill={PAL.mist} />
      <circle cx="100" cy="99" r="2.600" fill={PAL.mist} />
      <Shade color={PAL.blueShade} opacity={1} at={[110, 74, 12, 30]}>
        <rect x="62" y="52" width="48" height="42" rx="5" fill={PAL.blue} />
      </Shade>
      <rect x="62" y="52" width="48" height="6" rx="3" fill={PAL.blueLight} />
      <Arrow from={[84, 26]} to={[16, 26]} color={PAL.sky} />
    </g>
  ),

  // "vullen": to fill — water runs from a tap into a jug that is half full; an arrow up.
  'w.vullen': () => (
    <g>
      <Jug level={76} />
      <rect x="54" y="30" width="8" height="48" rx="4" fill={PAL.ice} />
      <path d="M8 18H50Q58 18 58 26V30" fill="none" stroke={PAL.steel} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="4" width="20" height="7" rx="3.500" fill={PAL.red} />
      <rect x="31" y="9" width="6" height="7" fill={PAL.slate} />
      <Arrow from={[110, 98]} to={[110, 60]} color={PAL.sky} width={7} head={12} />
    </g>
  ),

  // "leegmaken": to empty — a green bin held upside down; the rubbish falls out.
  'w.leegmaken': () => (
    <g>
      <g transform="translate(52 44) rotate(140)">
        <Shade color={PAL.greenShade} opacity={1} at={[-22, 0, 12, 40]}>
          <path d="M-26 -30H26L20 30H-20Z" fill={PAL.green} stroke={PAL.green} strokeWidth="3" strokeLinejoin="round" />
        </Shade>
        <rect x="-29" y="-35" width="58" height="9" rx="4" fill={PAL.greenShade} />
      </g>
      <Hand pose="open" x={-6} y={30} rotate={76} scale={0.74} skin={SKIN.bram} sleeve={ORANGE} />
      <PaperBall x={84} y={66} s={1.15} />
      <path d="M68 84Q72 70 86 82Q78 84 78 92Z" fill={PAL.yellow} />
      <PaperBall x={98} y={92} />
      <rect x="62" y="96" width="14" height="10" rx="2" fill={PAL.card} transform="rotate(-18 69 101)" />
      <path d="M104 52V66M94 38V46" stroke={PAL.line} strokeWidth="3.2" strokeLinecap="round" opacity=".8" />
    </g>
  ),

  // "schoonmaken": to clean — a hand wipes a worktop with a yellow sponge: clean and shining
  // where it has been, spots where it has not.
  'w.schoonmaken': () => (
    <g>
      <rect x="6" y="62" width="108" height="46" rx="6" fill={PAL.steel} />
      <rect x="6" y="58" width="108" height="46" rx="6" fill={PAL.mist} />
      <rect x="10" y="68" width="52" height="26" rx="13" fill={PAL.white} />
      <circle cx="96" cy="70" r="5" fill={PAL.wood} />
      <circle cx="104" cy="88" r="4" fill={PAL.wood} />
      <circle cx="88" cy="92" r="5.500" fill={PAL.wood} />
      <rect x="44" y="70" width="34" height="22" rx="5" fill={PAL.yellowShade} />
      <rect x="44" y="67" width="34" height="20" rx="5" fill={PAL.yellow} />
      <Hand pose="open" x={61} y={30} rotate={180} scale={0.94} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      <Sparkle x={22} y={44} r={9} />
      <Sparkle x={28} y={81} r={6} color={PAL.sky} />
    </g>
  ),

  // "vol": full — the jug of "vullen": the water is at the brim, the tap is gone.
  'w.vol': () => (
    <g>
      <Jug level={54} />
      <path d="M22 40L28 46M58 30V38M94 40L88 46" stroke={PAL.sky} strokeWidth="3.6" strokeLinecap="round" opacity=".85" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
