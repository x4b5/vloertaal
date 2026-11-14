import type { JSX, ReactNode } from 'react';
import type { CharacterId } from '../components/Characters';
import { Bust } from './bust';
import { Arrow, Ground, Hand, PAL, SKIN, Shade, Shine, Sparkle, r1, type Pt } from './kit';

/**
 * Word pictures, group 43 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The sector lessons of 14 November 2026: Zorg (u.care: l.signals, l.transfer).
 *
 *  - "Zeg wat je ziet" (l.signals): four signs you see on a client, each with its own person, its
 *    own place for the hand and its own colour cue. Dizzy: Jada, her head tilted, a hand on her
 *    forehead and a big blue spiral above her head. Sick: Bram, a hand over his mouth, green
 *    cheeks and a green wavy line. Short of breath: Amina, her mouth open, a hand flat on her
 *    chest, pale-blue breath puffs. The fever: an object, a big thermometer with the red column
 *    high, and a small flushed Henk next to it. None of them is the "ziek" of group5 (Amina with a
 *    thermometer in her mouth) or the "hoofd" of group26 (Henk, red pain lines).
 *  - "Iemand helpen opstaan" (l.transfer): three aids with their own outline and colour: the
 *    hoist (a blue mast and boom, a purple sling hanging from it), the walking frame (a red frame,
 *    two small wheels, a basket; not the big wheel of "de rolstoel") and the bed (long and low, the
 *    head end raised, a green blanket). And a pair on the same chair: to get up (the figure stands
 *    in front of the chair, a green arrow up) and to sit down (the figure is on the seat, an
 *    orange arrow down): the pair differs in posture, arrow direction and arrow colour.
 */

/** Sleeve and cuff colour per cast member (as on their busts). */
const SLEEVE: Record<CharacterId, [string, string]> = {
  bram: [PAL.blue, PAL.blueShade],
  amina: ['#2f8f3e', '#23722f'],
  henk: ['#2d5a92', PAL.navyShade],
  jada: ['#ffc929', PAL.yellowShade],
};

/** Extra art in the bust's own 120 x 134 box (see Bust: the same placing). */
function OnBust({ x, y, scale, children }: { x: number; y: number; scale: number; children: ReactNode }) {
  return <g transform={`translate(${r1(x)} ${r1(y)}) scale(${scale}) translate(-60 -134)`}>{children}</g>;
}

/** A forearm from a to b in a sleeve, with a darker cuff at b (bust box units). */
function Forearm({ who, a, b, t = 13 }: { who: CharacterId; a: Pt; b: Pt; t?: number }) {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const ang = (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI;
  const bare = who === 'jada';
  return (
    <g transform={`translate(${r1(a[0])} ${r1(a[1])}) rotate(${r1(ang)})`}>
      <rect x={-t / 2} y={-t / 2} width={r1(len + t / 2)} height={t} rx={t / 2} fill={bare ? SKIN[who][0] : SLEEVE[who][0]} />
      {!bare && <rect x={r1(len - 5)} y={-t / 2} width="5" height={t} fill={SLEEVE[who][1]} />}
      <rect x={-t / 2} y={r1(t * 0.1)} width={r1(len + t / 2)} height={r1(t * 0.4)} fill="#000" opacity=".1" />
    </g>
  );
}

/** A spiral (the sign of "everything turns"), centred on (cx, cy). */
function Spiral({ cx, cy, r, turns = 2.25, color = PAL.sky, width = 4.6 }: { cx: number; cy: number; r: number; turns?: number; color?: string; width?: number }) {
  const n = Math.round(turns * 24);
  const d = Array.from({ length: n + 1 }, (_, i) => {
    const t = i / n;
    const a = t * turns * 2 * Math.PI;
    const rr = r * (0.08 + 0.92 * t);
    return `${i ? 'L' : 'M'}${r1(cx + Math.cos(a) * rr)} ${r1(cy + Math.sin(a) * rr * 0.8)}`;
  }).join('');
  return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />;
}

/** A small castor wheel. */
function Castor({ cx, cy, r = 6 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={PAL.slateDark} />
      <circle cx={cx} cy={cy} r={r * 0.42} fill={PAL.mist} />
    </g>
  );
}

/** A wooden chair seen from the side, its back on the left. */
function Chair() {
  return (
    <g>
      <rect x="20" y="76" width="7" height="29" rx="2.5" fill={PAL.cardDark} />
      <rect x="50" y="76" width="7" height="29" rx="2.5" fill={PAL.cardDark} />
      <rect x="18" y="34" width="9" height="46" rx="3.5" fill={PAL.wood} />
      <rect x="18" y="70" width="42" height="9" rx="3.5" fill={PAL.card} />
      <path d="M22 72.6H56" stroke="#f0c48a" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/**
 * A plain person from the side (no face: a small figure, like the walkers of group35): purple
 * top, navy trousers. The joints are given, so the same figure stands or sits.
 */
function Figure({ head, shoulder, hip, knee, foot, hand }: { head: Pt; shoulder: Pt; hip: Pt; knee: Pt; foot: Pt; hand: Pt }) {
  const [s, sh] = SKIN.henk;
  const line = (a: Pt, b: Pt) => `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d={`${line(hip, knee)}L${foot[0]} ${foot[1]}`} stroke={PAL.navy} strokeWidth="10" />
      <rect x={foot[0] - 5} y={foot[1] - 4} width="17" height="8" rx="4" fill={PAL.slateDark} />
      <path d={line(shoulder, hip)} stroke={PAL.purple} strokeWidth="15" />
      <path d={line(shoulder, hand)} stroke={PAL.purpleShade} strokeWidth="6.5" />
      <circle cx={hand[0]} cy={hand[1]} r="4.2" fill={s} />
      <circle cx={head[0]} cy={head[1]} r="9.5" fill={s} />
      <circle cx={head[0] + 3.2} cy={head[1] + 1.4} r="5.8" fill={sh} opacity=".45" />
    </g>
  );
}

export default {
  // "duizelig": dizzy — Jada, her head tilted, a hand on her forehead; a big blue spiral above her head.
  'w.duizelig': () => (
    <g>
      <Bust who="jada" x={56} y={126} scale={0.72} emotion="confused" arms="forehead" tilt={9} bold />
      <Spiral cx={66} cy={24} r={17} width={5} />
      <Sparkle x={96} y={44} r={6} />
      <Sparkle x={24} y={30} r={4.5} />
    </g>
  ),

  // "misselijk": sick, about to throw up — Bram with green cheeks, a hand over his mouth, a green wavy line.
  'w.misselijk': () => (
    <g>
      <Bust who="bram" x={52} y={128} scale={0.92} emotion="sick" tilt={-5} bold />
      <OnBust x={52} y={128} scale={0.92}>
        <ellipse cx="46" cy="70" rx="7" ry="5.5" fill={PAL.leaf} opacity=".75" />
        <ellipse cx="73" cy="67" rx="6.5" ry="5" fill={PAL.leaf} opacity=".75" />
        <Forearm who="bram" a={[98, 134]} b={[81, 83]} />
        {/* The hand flat over the mouth, fingers across it */}
        <g transform="translate(80 77) rotate(174) scale(1.12)">
          <rect x="-3" y="-7" width="30" height="14" rx="4" fill={SKIN.bram[0]} />
          <path d="M9 -2.4H25M9 2.2H25" stroke={SKIN.bram[1]} strokeWidth="1.4" strokeLinecap="round" />
          <rect x="-3" y="-7" width="30" height="5" rx="2.5" fill={SKIN.bram[1]} opacity=".5" />
        </g>
      </OnBust>
      <path d="M90 24Q95 18 100 24T110 24M92 36Q96 31 100 36T108 36" fill="none" stroke={PAL.leaf} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),

  // "benauwd": short of breath — Amina, her mouth open, a hand flat on her chest; short breath puffs.
  'w.benauwd': () => (
    <g>
      <Bust who="amina" x={46} y={128} scale={0.9} emotion="worried" talk bold />
      <OnBust x={46} y={128} scale={0.9}>
        <Forearm who="amina" a={[100, 132]} b={[80, 114]} />
        <Hand pose="open" x={82} y={113} rotate={-80} scale={0.7} skin={SKIN.amina} />
      </OnBust>
      {/* Breath: three short puffs going out from the mouth */}
      <g fill="none" stroke={PAL.blueLight} strokeWidth="4.6" strokeLinecap="round">
        <path d="M78 76L87 70M80 86H90M78 96L87 102" />
      </g>
      <path d="M96 60a5 5 0 0 1 8 -3a5 5 0 0 1 6 6a4.5 4.5 0 0 1 -2 8.5h-10a5 5 0 0 1 -2 -11.5z" fill={PAL.ice} transform="translate(-3 19)" />
    </g>
  ),

  // "de koorts": the fever — a big thermometer, the red column high; next to it a small flushed Henk.
  'w.koorts': () => (
    <g>
      <Bust who="henk" x={84} y={114} scale={0.56} emotion="sick" bold />
      <OnBust x={84} y={114} scale={0.56}>
        <ellipse cx="42" cy="68" rx="9" ry="6" fill={PAL.red} opacity=".55" />
        <ellipse cx="78" cy="68" rx="9" ry="6" fill={PAL.red} opacity=".55" />
      </OnBust>
      <path d="M104 26Q109 34 109 38A5 5 0 0 1 99 38Q99 34 104 26Z" fill={PAL.ice} />
      {/* The thermometer */}
      <path d="M22 22A12 12 0 0 1 46 22V76A17 17 0 1 1 22 76Z" fill={PAL.mist} />
      <Shade color={PAL.paperShade} opacity={1} at={[46, 56, 8, 60]}>
        <path d="M25.5 22A8.5 8.5 0 0 1 42.5 22V78A13.5 13.5 0 1 1 25.5 78Z" fill={PAL.paper} />
      </Shade>
      <circle cx="34" cy="88" r="11.5" fill={PAL.red} />
      <rect x="29.5" y="24" width="9" height="60" rx="4.5" fill={PAL.red} />
      <path d="M38.5 30V80" stroke={PAL.redShade} strokeWidth="3" strokeLinecap="round" />
      <path d="M52 26H60M52 38H57M52 50H60M52 62H57" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      <Shine d="M27 26V58" width={3} opacity={0.8} />
    </g>
  ),

  // "de tillift": the hoist — a wheeled base, a blue mast and boom, a purple sling hanging from the bar.
  'w.tillift': () => (
    <g>
      <Ground cx={58} cy={107} rx={46} ry={4} />
      {/* Base with castors, push handle */}
      <rect x="18" y="92" width="84" height="8" rx="4" fill={PAL.steel} />
      <Castor cx={26} cy={102} />
      <Castor cx={94} cy={102} />
      <path d="M32 54H17" stroke={PAL.steel} strokeWidth="6" strokeLinecap="round" />
      {/* Lifting strut, mast and boom */}
      <path d="M33 76L56 34" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d="M32 94V30L84 18" fill="none" stroke={PAL.sky} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 92V36" stroke={PAL.skyShade} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M36 26L74 17" width={2.6} opacity={0.55} />
      {/* Hanger bar and sling */}
      <path d="M84 18V36" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
      <path d="M66 38H102" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <Shade color={PAL.purpleShade} opacity={1} at={[108, 66, 12, 30]}>
        <path d="M65 40L69 40L74 62Q84 70 94 62L99 40L103 40L106 66Q104 88 84 88Q64 88 62 66Z" fill={PAL.purple} stroke={PAL.purple} strokeWidth="2" strokeLinejoin="round" />
      </Shade>
      <Shine d="M68 70Q70 80 79 83" color={PAL.purpleLight} width={3} opacity={0.9} />
    </g>
  ),

  // "de rollator": the walking frame with wheels — a red frame, two small wheels, a seat, a basket, hand grips.
  'w.rollator': () => (
    <g>
      <Ground cx={60} cy={107} rx={44} ry={4} />
      {/* Basket in front, under the seat */}
      <path d="M64 60H98L93 82H69Z" fill={PAL.mist} stroke={PAL.mist} strokeWidth="2" strokeLinejoin="round" />
      <path d="M73 62L75 82M81 62V82M90 62L87 82M66 71H96" stroke={PAL.steel} strokeWidth="1.8" strokeLinecap="round" />
      {/* Frame: two legs, and the post up to the hand grip */}
      <path d="M60 56L30 94M58 56L90 94" stroke={PAL.redShade} strokeWidth="8" strokeLinecap="round" />
      <path d="M68 58L40 18" stroke={PAL.red} strokeWidth="8" strokeLinecap="round" />
      <path d="M20 26Q28 34 38 27" fill="none" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      <path d="M42 17H20" stroke={PAL.slate} strokeWidth="9" strokeLinecap="round" />
      {/* Seat */}
      <rect x="42" y="52" width="50" height="10" rx="4.5" fill={PAL.slate} />
      <path d="M47 55H86" stroke={PAL.steel} strokeWidth="2.2" strokeLinecap="round" />
      <Castor cx={30} cy={94} r={12} />
      <Castor cx={90} cy={94} r={12} />
    </g>
  ),

  // "het bed": the bed — a care bed from the side: the head end raised, a pillow, a green blanket, wheels.
  'w.bed': () => (
    <g>
      <Ground cx={60} cy={107} rx={50} ry={4} />
      <rect x="20" y="78" width="6" height="20" rx="2" fill={PAL.steel} />
      <rect x="94" y="78" width="6" height="20" rx="2" fill={PAL.steel} />
      <Castor cx={23} cy={101} r={5.5} />
      <Castor cx={97} cy={101} r={5.5} />
      <path d="M34 76L28 58" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      {/* Head and foot board, frame */}
      <rect x="9" y="26" width="8" height="58" rx="3.5" fill={PAL.wood} />
      <rect x="103" y="50" width="8" height="34" rx="3.5" fill={PAL.cardDark} />
      <rect x="12" y="72" width="96" height="9" rx="3" fill={PAL.slate} />
      {/* Mattress: flat part and the raised head end */}
      <rect x="48" y="60" width="56" height="13" rx="4" fill={PAL.mist} />
      <path d="M52 66.5L22 40" stroke={PAL.mist} strokeWidth="13" strokeLinecap="round" />
      <path d="M40 46L26 33.5" stroke="#e3f5ff" strokeWidth="11" strokeLinecap="round" />
      <path d="M41 51L27 38.5" stroke={PAL.ice} strokeWidth="3" strokeLinecap="round" opacity=".7" />
      {/* Blanket */}
      <Shade color={PAL.greenShade} opacity={1} at={[108, 64, 14, 16]}>
        <path d="M60 55H100Q104 55 104 59V73H56V59Q56 55 60 55Z" fill={PAL.green} />
      </Shade>
      <rect x="56" y="55" width="12" height="18" rx="3" fill={PAL.lime} />
    </g>
  ),

  // "opstaan": to get up — the figure stands up in front of the chair; a green arrow up.
  'w.opstaan': () => (
    <g>
      <Ground cx={52} cy={107} rx={40} ry={4} />
      <Chair />
      <Figure head={[74, 22]} shoulder={[71, 42]} hip={[67, 68]} knee={[72, 86]} foot={[68, 102]} hand={[80, 62]} />
      <Arrow from={[100, 92]} to={[100, 22]} color={PAL.leafShade} width={9} head={14} />
    </g>
  ),

  // "gaan zitten": to sit down — the figure is down on the seat of the same chair; an orange arrow down.
  'w.gaanzitten': () => (
    <g>
      <Ground cx={52} cy={107} rx={40} ry={4} />
      <Chair />
      <Figure head={[42, 26]} shoulder={[40, 44]} hip={[40, 64]} knee={[66, 66]} foot={[68, 102]} hand={[58, 58]} />
      <Arrow from={[100, 22]} to={[100, 92]} color={PAL.orange} width={9} head={14} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
