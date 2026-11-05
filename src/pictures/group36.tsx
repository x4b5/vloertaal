import type { JSX } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import type { Expr } from '../components/Faces';
import { Arrow, Box, CurveArrow, Ground, Hand, Motion, Move, PAL, SKIN, Shade, Shine, Tick, Cross, type Pt } from './kit';

/**
 * Word pictures, group 36 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Moving pictures of abstract words, the second round (the owner's "go on" after the trial, 5
 * November 2026; docs/tekenstijl.md "Beweging"). Each of these words is `picture: 'motion'`: the
 * picture is on its intro card only, where it moves once; standing still it says too little, so it
 * is never in a picture choice or a match. The people in them are cast heads (no Bust), so the
 * word's voice stays the default one (pictureCast finds no bust).
 */

/** A cast member's head, centred on (x, y), `s` times its own size. */
function Head({ who, x, y, s, expr = 'pleased' }: { who: CharacterId; x: number; y: number; s: number; expr?: Expr }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -58)`}>
      <CastHead who={who} expr={expr} gaze={[0, 0]} />
    </g>
  );
}

/** Shoulders in work clothes under a head centred on (x, y) (scale 0.32). */
function Shoulders({ x, y, color, shade }: { x: number; y: number; color: string; shade: string }) {
  return (
    <Shade color={shade} opacity={1} at={[x + 18, y + 30, 6, 14]}>
      <path d={`M${x - 20} ${y + 40}Q${x - 20} ${y + 18} ${x} ${y + 18}Q${x + 20} ${y + 18} ${x + 20} ${y + 40}Z`} fill={color} />
    </Shade>
  );
}

/** A shift card, centred on (x, y): a day shift (a sun) or an evening shift (a moon). */
function ShiftCard({ x, y, night }: { x: number; y: number; night: boolean }) {
  return (
    <g>
      <rect x={x - 14} y={y - 12} width="28" height="26" rx="4" fill={night ? PAL.navyShade : PAL.paperShade} />
      <rect x={x - 14} y={y - 13} width="28" height="25" rx="4" fill={night ? PAL.navy : PAL.white} />
      {night ? (
        <path d={`M${x + 2} ${y - 8}A8 8 0 1 0 ${x + 6} ${y + 6}A6.5 6.5 0 1 1 ${x + 2} ${y - 8}Z`} fill={PAL.yellowLight} />
      ) : (
        <g>
          <path d={`M${x} ${y - 10}V${y - 7}M${x} ${y + 6}V${y + 9}M${x - 9.5} ${y - 0.5}H${x - 6.5}M${x + 6.5} ${y - 0.5}H${x + 9.5}`} stroke={PAL.yellowShade} strokeWidth="2.4" strokeLinecap="round" />
          <circle cx={x} cy={y - 0.5} r="5" fill={PAL.yellow} />
        </g>
      )}
    </g>
  );
}

/** A sheet of paper with rows, top-left at (x, y). */
function Sheet({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill={PAL.paperShade} transform="translate(0 4)" />
      <rect x={x} y={y} width={w} height={h} rx="6" fill={PAL.white} />
    </g>
  );
}

/** An empty box to tick, centred on (x, y). */
function CheckBox({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x - 8} y={y - 8} width="16" height="16" rx="3" fill={PAL.white} />
      <rect x={x - 8} y={y - 8} width="16" height="16" rx="3" fill="none" stroke={PAL.line} strokeWidth="2.6" />
    </g>
  );
}

/** A pen lying at an angle, its tip at (x, y). */
function Pen({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-40)`}>
      <path d="M0 0L6 -4H10V4H6Z" fill={PAL.cardShade} />
      <path d="M0 0L3 -2V2Z" fill={PAL.ink} />
      <rect x="10" y="-4.5" width="34" height="9" rx="2.5" fill={PAL.blue} />
      <rect x="10" y="0.5" width="34" height="4" rx="2" fill={PAL.blueShade} />
      <rect x="40" y="-4.5" width="6" height="9" rx="2" fill={PAL.slate} />
    </g>
  );
}

/** One turn of a part around `c` (an arc), the part itself kept upright around its centre `own`. */
function Arc({ c, own, turn, children }: { c: Pt; own: Pt; turn: number; children: JSX.Element }) {
  return (
    <Move kind="turn" turn={turn} at={c}>
      <Move kind="turn" turn={-turn} at={own}>{children}</Move>
    </Move>
  );
}

export default {
  // "ruilen": to swap (a shift) — Bram and Jada each have a shift card: Bram now the evening
  // (a moon), Jada the day (a sun); swap arrows between them. On the intro card the two cards
  // change places: one over the top, the other underneath (each turns half a circle around the
  // middle and stays upright).
  'w.ruilen': () => (
    <g>
      <Shoulders x={30} y={30} color={PAL.orange} shade={PAL.orangeShade} />
      <Head who="bram" x={30} y={30} s={0.32} />
      <Shoulders x={90} y={30} color={PAL.sky} shade={PAL.skyShade} />
      <Head who="jada" x={90} y={30} s={0.32} />
      <Move kind="show">
        <CurveArrow from={[46, 98]} to={[74, 98]} bend={-8} color={PAL.sky} width={4.6} head={8} />
        <CurveArrow from={[74, 64]} to={[48, 64]} bend={-8} color={PAL.sky} width={4.6} head={8} />
      </Move>
      <Arc c={[60, 82]} own={[30, 82]} turn={180}>
        <ShiftCard x={30} y={82} night />
      </Arc>
      <Arc c={[60, 82]} own={[90, 82]} turn={180}>
        <ShiftCard x={90} y={82} night={false} />
      </Arc>
    </g>
  ),

  // "versturen": to send — a laptop, and the e-mail (an envelope) flying away from its screen to
  // the top right, motion lines behind it. On the intro card the envelope leaves the screen.
  // Standing still it would be close to "de mail" (an envelope on a laptop) of the same lesson.
  'w.versturen': () => (
    <g>
      <Ground cy={104} rx={48} ry={4} />
      <rect x="12" y="38" width="76" height="54" rx="6" fill={PAL.slate} />
      <rect x="17" y="43" width="66" height="43" rx="3" fill="#e3f5ff" />
      <path d="M26 54H64M26 63H72M26 72H54" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <path d="M6 94H94L88 106Q87 108 84 108H16Q13 108 12 106Z" fill={PAL.mist} />
      <path d="M6 94H94L92.6 98H7.4Z" fill={PAL.steel} />
      <Move kind="show">
        <Motion x={76} y={34} dir={-140} spread={50} n={3} len={8} gap={4} color={PAL.line} width={3} />
      </Move>
      <Move kind="from" dx={-38} dy={40}>
        <g transform="rotate(-14 96 22)">
          <rect x="78" y="10" width="36" height="25" rx="3" fill={PAL.paperShade} />
          <rect x="78" y="8" width="36" height="25" rx="3" fill={PAL.white} />
          <path d="M80 10L96 22L112 10" fill="none" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </Move>
    </g>
  ),

  // "doorgeven": to pass on (information) — Jada hands a note to Henk, who takes it: what she
  // knows goes on to him. On the intro card the note goes from her hand to his.
  'w.doorgeven': () => (
    <g>
      <Ground cy={108} rx={50} ry={3.5} />
      <Shoulders x={26} y={52} color={PAL.sky} shade={PAL.skyShade} />
      <Head who="jada" x={26} y={52} s={0.36} />
      <Shoulders x={94} y={52} color={PAL.navy} shade={PAL.navyShade} />
      <Head who="henk" x={94} y={52} s={0.36} />
      {/* Their arms, to the middle */}
      <path d="M38 80Q46 88 52 84" fill="none" stroke={PAL.sky} strokeWidth="7" strokeLinecap="round" />
      <circle cx="54" cy="83" r="4.4" fill={SKIN.jada[0]} />
      <path d="M82 80Q74 88 70 84" fill="none" stroke={PAL.navy} strokeWidth="7" strokeLinecap="round" />
      <Move kind="from" dx={-22} dy={2}>
        <g transform="rotate(8 70 76)">
          <rect x="60" y="64" width="20" height="24" rx="2.5" fill={PAL.paperShade} />
          <rect x="60" y="62" width="20" height="24" rx="2.5" fill={PAL.white} />
          <path d="M64 69H76M64 75H76M64 81H72" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
        </g>
      </Move>
      <circle cx="69" cy="84" r="4.4" fill={SKIN.henk[0]} />
    </g>
  ),

  // "automatisch": automatic, by itself — a sliding door has opened with nobody near it; the
  // sensor over it is lit. On the intro card the two glass panels slide apart on their own.
  'w.automatisch': () => (
    <g>
      <rect x="28" y="30" width="64" height="76" fill={PAL.paperShade} />
      <Ground cx={60} cy={106} rx={50} ry={3.5} />
      <Move kind="from" dx={24}>
        <rect x="8" y="30" width="32" height="76" rx="2" fill={PAL.slate} />
        <rect x="11" y="33" width="26" height="70" rx="1.5" fill={PAL.ice} />
        <path d="M30 40L20 58" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" opacity=".6" />
      </Move>
      <Move kind="from" dx={-24}>
        <rect x="80" y="30" width="32" height="76" rx="2" fill={PAL.slate} />
        <rect x="83" y="33" width="26" height="70" rx="1.5" fill={PAL.ice} />
        <path d="M102 40L92 58" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" opacity=".6" />
      </Move>
      {/* The wall on both sides (the panels slide behind it) and the beam with the sensor */}
      <Shade color={PAL.steel} opacity={0.4} at={[30, 70, 4, 40]}>
        <rect x="2" y="22" width="26" height="86" rx="2" fill={PAL.mist} />
      </Shade>
      <Shade color={PAL.steel} opacity={0.4} at={[118, 70, 10, 40]}>
        <rect x="92" y="22" width="26" height="86" rx="2" fill={PAL.mist} />
      </Shade>
      <rect x="2" y="16" width="116" height="14" rx="3" fill={PAL.steel} />
      <rect x="50" y="18" width="20" height="9" rx="3" fill={PAL.slateDark} />
      <circle cx="60" cy="22.5" r="2.8" fill={PAL.lime} />
    </g>
  ),

  // "verbeteren": to improve, to correct — a list of three, the middle one was wrong (a red
  // cross on a red row) and is now right (a tick), the pen beside it. On the intro card the pen
  // comes to the wrong row, and the cross becomes a tick. Standing still it would look like "de
  // fout" (a list with a cross) of the same lesson.
  'w.verbeteren': () => (
    <g>
      <Sheet x={14} y={10} w={80} h={98} />
      <Tick x={30} y={28} r={9} />
      <path d="M46 28H82" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <rect x={18} y={46} width={72} height={26} rx="5" fill="#ffe1db" />
      <path d="M46 59H80" stroke={PAL.redLight} strokeWidth="4" strokeLinecap="round" />
      <Cross x={30} y={59} r={11} />
      <Move kind="show">
        <rect x={18} y={46} width={72} height={26} rx="5" fill="#dcf2ff" />
        <path d="M46 59H80" stroke={PAL.ice} strokeWidth="4" strokeLinecap="round" />
        <Tick x={30} y={59} r={11} />
      </Move>
      <Tick x={30} y={90} r={9} />
      <path d="M46 90H78" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <Move kind="from" dx={24} dy={30}>
        <Pen x={84} y={66} />
      </Move>
    </g>
  ),

  // "eerst": first — a list of two jobs; the hand points at the top one, and it gets its tick
  // (the bottom one is still open). On the intro card the hand comes to the top row, then the
  // tick comes. ("daarna" is the same list one step on.)
  'w.eerst': () => (
    <g>
      <Sheet x={10} y={14} w={84} h={90} />
      <rect x="14" y="20" width="76" height="34" rx="5" fill={PAL.yellowShine} />
      <CheckBox x={28} y={37} />
      <path d="M44 37H76" stroke={PAL.cardShade} strokeWidth="4" strokeLinecap="round" />
      <CheckBox x={28} y={80} />
      <path d="M44 80H70" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <Move kind="show">
        <Tick x={28} y={37} r={10} />
      </Move>
      <Move kind="from" dx={30}>
        <Hand pose="point" x={112} y={44} rotate={-90} scale={0.62} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      </Move>
    </g>
  ),

  // "daarna": after that — the same list as "eerst": the top job already has its tick, the hand
  // has moved on to the bottom one, and it gets its tick. On the intro card the hand goes down
  // from the top row to the bottom one, then the tick comes.
  'w.daarna': () => (
    <g>
      <Sheet x={10} y={14} w={84} h={90} />
      <rect x="14" y="63" width="76" height="34" rx="5" fill={PAL.yellowShine} />
      <Tick x={28} y={37} r={10} />
      <path d="M44 37H76" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <CheckBox x={28} y={80} />
      <path d="M44 80H70" stroke={PAL.cardShade} strokeWidth="4" strokeLinecap="round" />
      <Move kind="show">
        <Tick x={28} y={80} r={10} />
      </Move>
      <Move kind="from" dy={-43}>
        <Hand pose="point" x={112} y={87} rotate={-90} scale={0.62} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      </Move>
    </g>
  ),

  // "voordoen": to show how (by doing it first) — Henk and Jada each have a stack of two boxes.
  // On the intro card Henk puts his top box on first; then Jada puts hers on the same way.
  'w.voordoen': () => (
    <g>
      <Ground cx={60} cy={106} rx={54} ry={3.5} />
      <Shoulders x={30} y={26} color={PAL.navy} shade={PAL.navyShade} />
      <Head who="henk" x={30} y={26} s={0.32} />
      <Shoulders x={90} y={26} color={PAL.sky} shade={PAL.skyShade} />
      <Head who="jada" x={90} y={26} s={0.32} expr="thinking" />
      <Box x={14} y={84} w={26} h={20} depth={8} />
      <Move kind="from" dy={-22}>
        <Box x={14} y={64} w={26} h={20} depth={8} />
      </Move>
      <Box x={74} y={84} w={26} h={20} depth={8} />
      <Move kind="then" dy={-22}>
        <Box x={74} y={64} w={26} h={20} depth={8} />
      </Move>
    </g>
  ),

  // "verlengen": to extend (make longer) — a row of weeks with the contract as a bar over them;
  // a dashed line where it used to end, the bar now goes on past it. On the intro card the bar
  // grows from the old end to the new one.
  'w.verlengen': () => (
    <g>
      <rect x="8" y="38" width="104" height="52" rx="8" fill={PAL.paperShade} transform="translate(0 4)" />
      <rect x="8" y="38" width="104" height="52" rx="8" fill={PAL.white} />
      <path d="M8 46A8 8 0 0 1 16 38H104A8 8 0 0 1 112 46V52H8Z" fill={PAL.slate} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={15 + i * 16} y="43" width="10" height="4" rx="2" fill={PAL.white} opacity=".7" />
      ))}
      <path d="M28 52V90M44 52V90M60 52V90M76 52V90M92 52V90" stroke={PAL.paperShade} strokeWidth="1.6" />
      <Move kind="grow" grow={0.62}>
        <rect x="13" y="62" width="94" height="16" rx="6" fill={PAL.sky} />
        <rect x="13" y="71" width="94" height="7" rx="3.5" fill={PAL.skyShade} opacity=".6" />
      </Move>
      <path d="M76 56V86" stroke={PAL.slate} strokeWidth="2.6" strokeDasharray="4 4" strokeLinecap="round" />
      <Move kind="show">
        <Arrow from={[80, 26]} to={[104, 26]} color={PAL.sky} width={5} head={9} />
      </Move>
      <Shine d="M18 66H40" opacity={0.5} width={3} />
    </g>
  ),

  // "tellen": to count — three boxes in a row, a finger over the last one. On the intro card the
  // finger taps the boxes one by one, left to right: one, two, three (it stops at each).
  'w.tellen': () => (
    <g>
      <Ground cx={60} cy={104} rx={54} ry={3.5} />
      {[8, 44, 80].map((x) => <Box key={x} x={x} y={74} w={26} h={28} depth={8} />)}
      <Move kind="steps" dx={-72}>
        <Hand pose="point" x={97} y={24} rotate={180} scale={0.66} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
