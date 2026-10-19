import type { JSX, ReactNode } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import type { Emotion, Expr } from '../components/Faces';
import { Box, Bust, Clock, ExclaimMark, Ground, Hand, PAL, SKIN, Shade, Shine } from './kit';

/**
 * Word pictures, group 19 (keyed by id): "Een ongeluk melden" (l.accident), "gevaarlijk"
 * (l.notyet), "Werken via een uitzendbureau" (l.agency) and "Schappen en voorraad" (l.shelves).
 * The safety pictures sit side by side in a choice, so each has its own shape and colour: a
 * person with an arm in a sling, a bleeding finger, a green case, a person in a yellow vest, a building
 * and a yellow warning sign. See docs/tekenstijl.md and ./kit.tsx.
 */

const r1 = (n: number) => Math.round(n * 10) / 10;

/** The bust outline of the kit (Bust), for people in their own clothes. */
const BUST = 'M25 134L26.5 109Q28.5 96.5 42 93.5H78Q91.5 96.5 93.5 109L95 134Z';

/**
 * A cast head on clothes of the picture's own (`torso`, in the bust's 120 x 134 box), bottom
 * middle at (x, y); `over` is drawn over the head in the same box (a bandage, a headset).
 */
function Person({ who, torso, over, x = 60, y = 110, scale = 0.7, expr = 'neutral', emotion }: {
  who: CharacterId; torso: ReactNode; over?: ReactNode; x?: number; y?: number; scale?: number; expr?: Expr; emotion?: Emotion;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale}) translate(-60 -134)`}>
      {torso}
      <path d="M78 93.5Q91.5 96.5 93.5 109L95 134H84Z" fill="#000" opacity=".13" />
      <CastHead who={who} expr={expr} emotion={emotion} bold gaze={[0, 0]} />
      {over}
    </g>
  );
}

/** Draws `art` in the bust's own 120 x 134 box, placed like <Bust x y scale>. */
function InBust({ x, y, scale, children }: { x: number; y: number; scale: number; children: ReactNode }) {
  return <g transform={`translate(${x} ${y}) scale(${scale}) translate(-60 -134)`}>{children}</g>;
}

/** The euro sign as strokes, centred on (cx, cy), `s` = radius of the C. */
function EuroSign({ cx, cy, s, color, width }: { cx: number; cy: number; s: number; color: string; width?: number }) {
  const w = width ?? Math.max(2.4, s * 0.32);
  const ox = cx + s * 0.2;
  const a = (55 * Math.PI) / 180;
  const sx = r1(ox + Math.cos(a) * s);
  const sy = Math.sin(a) * s;
  return (
    <path
      d={`M${sx} ${r1(cy - sy)}A${s} ${s} 0 1 0 ${sx} ${r1(cy + sy)}M${r1(ox - s * 1.35)} ${r1(cy - s * 0.24)}H${r1(ox + s * 0.15)}M${r1(ox - s * 1.35)} ${r1(cy + s * 0.24)}H${r1(ox + s * 0.05)}`}
      fill="none"
      stroke={color}
      strokeWidth={w}
      strokeLinecap="round"
    />
  );
}

/** A drop of blood, its tip at the top (x, y), `h` tall. */
function Drop({ x, y, h }: { x: number; y: number; h: number }) {
  const w = h * 0.62;
  const b = y + h;
  const d = `M${x} ${y}Q${r1(x + w * 0.55)} ${r1(y + h * 0.45)} ${r1(x + w / 2)} ${r1(b - w / 2)}A${r1(w / 2)} ${r1(w / 2)} 0 0 1 ${r1(x - w / 2)} ${r1(b - w / 2)}Q${r1(x - w * 0.55)} ${r1(y + h * 0.45)} ${x} ${y}Z`;
  return (
    <Shade color={PAL.redShade} opacity={1} at={[x + w * 0.62, b - w * 0.4, w * 0.42, h * 0.6]}>
      <path d={d} fill={PAL.red} />
    </Shade>
  );
}

/** A plus-shaped cross centred on (cx, cy): arms `s` long from the centre, `t` thick. */
const plus = (cx: number, cy: number, s: number, t: number) =>
  `M${r1(cx - t / 2)} ${r1(cy - s)}H${r1(cx + t / 2)}V${r1(cy - t / 2)}H${r1(cx + s)}V${r1(cy + t / 2)}H${r1(cx + t / 2)}V${r1(cy + s)}H${r1(cx - t / 2)}V${r1(cy + t / 2)}H${r1(cx - s)}V${r1(cy - t / 2)}H${r1(cx - t / 2)}Z`;

/** A sheet of paper: light fill, grey shade on the right, a depth edge underneath. */
function Paper({ x, y, w, h, rot = 0, children }: { x: number; y: number; w: number; h: number; rot?: number; children?: ReactNode }) {
  return (
    <g transform={rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined}>
      <rect x={x} y={y + 4} width={w} height={h} rx="5" fill={PAL.mist} />
      <Shade color={PAL.paperShade} opacity={1} at={[x + w + 4, y + h / 2, 12, h]}>
        <rect x={x} y={y} width={w} height={h} rx="5" fill={PAL.paper} />
      </Shade>
      {children}
    </g>
  );
}

export default {
  // "gewond": hurt — Jada in pain, her arm in a white sling with a red stain on it and a crossed
  // plaster on her cheek
  'w.gewond': () => (
    <g>
      <Bust who="jada" x={60} y={124} scale={0.86} emotion="pain" bold />
      <InBust x={60} y={124} scale={0.86}>
        {/* Crossed plaster on her cheek (one on the forehead sat over her brow: left out) */}
        <g transform="translate(73 71)">
          <rect x="-9" y="-3.2" width="18" height="6.4" rx="2.4" fill="#f0c48a" transform="rotate(40)" />
          <rect x="-9" y="-3.2" width="18" height="6.4" rx="2.4" fill="#f0c48a" transform="rotate(-40)" />
        </g>
        {/* Sling strap round the neck */}
        <path d="M30 108L46 94M90 108L74 94" stroke={PAL.paperShade} strokeWidth="7" strokeLinecap="round" />
        {/* The forearm across the chest: elbow out on the left, the hand out on the right */}
        <rect x="16" y="98" width="92" height="16" rx="8" fill={SKIN.jada[0]} />
        <rect x="16" y="107" width="92" height="7" rx="3.5" fill={SKIN.jada[1]} />
        {/* The white sling cradling it, with a red stain */}
        <path d="M30 96H92L90 112Q62 128 32 112Z" fill={PAL.paperShade} transform="translate(0 3)" />
        <path d="M30 96H92L90 112Q62 128 32 112Z" fill={PAL.white} />
        <path d="M40 108Q62 118 84 108" fill="none" stroke={PAL.paperShade} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M58 99Q62 96 66 99Q71 98 71 103Q74 107 69 109Q66 113 61 110Q55 111 56 106Q53 102 58 99Z" fill={PAL.red} />
      </InBust>
    </g>
  ),

  // "bloeden": to bleed — a finger with a cut, a drop hanging under it and drops falling into a
  // small red puddle
  'w.bloeden': () => (
    <g>
      <Hand pose="point" x={18} y={48} rotate={78} scale={1.2} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <path d="M70 35L70 44" stroke={PAL.redShade} strokeWidth="3.4" strokeLinecap="round" />
      <Drop x={70} y={40} h={22} />
      <Drop x={70} y={68} h={18} />
      <ellipse cx="70" cy="102" rx="26" ry="5.5" fill={PAL.redShade} />
      <ellipse cx="68" cy="100.5" rx="22" ry="4" fill={PAL.red} />
    </g>
  ),

  // "de EHBO-doos": the first-aid kit — a green case with a handle and a white cross
  'w.ehbodoos': () => (
    <g>
      <Ground cx={60} cy={102} rx={46} ry={4.5} />
      <path d="M44 34V26Q44 20 50 20H70Q76 20 76 26V34" fill="none" stroke={PAL.slate} strokeWidth="7" strokeLinecap="round" />
      <rect x="14" y="36" width="92" height="64" rx="10" fill={PAL.greenShade} transform="translate(0 4)" />
      <Shade color={PAL.greenShade} opacity={1} at={[112, 68, 16, 40]}>
        <rect x="14" y="36" width="92" height="64" rx="10" fill={PAL.green} />
      </Shade>
      <rect x="14" y="52" width="92" height="5" fill={PAL.greenShade} opacity=".7" />
      <path d={plus(60, 72, 19, 13)} fill={PAL.white} stroke={PAL.white} strokeWidth="3" strokeLinejoin="round" />
      <Shine d="M22 46Q22 41 27 41" width={3.4} opacity={0.5} />
    </g>
  ),

  // "de BHV'er": the company emergency helper — Henk in a yellow hi-vis vest with reflective
  // stripes and a round first-aid badge (green cross) on his chest
  "w.bhver": () => (
    <g>
      <Person
        who="henk"
        x={60}
        y={128}
        scale={0.98}
        expr="pleased"
        torso={
          <>
            <path d={BUST} fill={PAL.blue} />
            <path d="M33 134L34 108Q36 99 46 96L52 94L60 112L68 94L74 96Q84 99 86 108L87 134Z" fill={PAL.yellowLight} />
            <path d="M34 118H86V125H34Z" fill={PAL.paperShade} />
            <path d="M46 96L52 94L60 112L68 94L74 96" fill="none" stroke={PAL.yellowShade} strokeWidth="2" strokeLinejoin="round" />
            <circle cx="73" cy="109" r="9.5" fill={PAL.white} />
            <path d={plus(73, 109, 6.5, 4)} fill={PAL.green} />
          </>
        }
      />
    </g>
  ),

  // "het ziekenhuis": the hospital — a tall white building with rows of windows, a wide glass
  // entrance and a big red cross on a sign at the top
  'w.ziekenhuis': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      <Shade color={PAL.mist} opacity={1} at={[112, 66, 14, 50]}>
        <rect x="14" y="34" width="92" height="72" rx="3" fill={PAL.paper} />
      </Shade>
      <rect x="14" y="34" width="92" height="5" rx="2" fill={PAL.paperShade} />
      {[0, 1].map((r) =>
        [0, 1, 2, 3].map((c) => (c === 1 || c === 2) && r === 1 ? null : (
          <rect key={`${r}${c}`} x={21 + c * 21} y={46 + r * 22} width="15" height="13" rx="2" fill={PAL.sky} />
        )),
      )}
      <rect x="44" y="72" width="32" height="34" rx="2" fill={PAL.skyShade} />
      <path d="M60 74V106" stroke={PAL.ice} strokeWidth="2" />
      <rect x="40" y="8" width="40" height="32" rx="6" fill={PAL.redShade} transform="translate(0 3)" />
      <rect x="40" y="8" width="40" height="32" rx="6" fill={PAL.white} />
      <path d={plus(60, 24, 12, 8.5)} fill={PAL.red} stroke={PAL.red} strokeWidth="2" strokeLinejoin="round" />
    </g>
  ),

  // "gevaarlijk": dangerous — a yellow warning sign with a black rim and an exclamation mark,
  // on a black-and-yellow striped post
  'w.gevaarlijk': () => (
    <g>
      <Ground cx={60} cy={106} rx={22} ry={3.5} />
      <rect x="55" y="78" width="10" height="28" rx="3" fill={PAL.slate} />
      <path d="M55 86L65 80M55 96L65 90M55 106L65 100" stroke={PAL.yellow} strokeWidth="4" />
      <path d="M60 12L108 92H12Z" fill={PAL.slateDark} stroke={PAL.slateDark} strokeWidth="10" strokeLinejoin="round" />
      <path d="M60 28L94 86H26Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="4" strokeLinejoin="round" />
      <path d="M60 50L94 86H72Z" fill={PAL.yellowShade} opacity=".35" />
      <ExclaimMark x={60} y={64} size={36} color={PAL.slateDark} />
      <Shine d="M50 38L36 62" color={PAL.yellowShine} width={3.4} opacity={0.6} />
    </g>
  ),

  // "de intercedent": the agency contact person — Amina in a blazer with a headset, smiling,
  // a folder on the desk in front of her
  'w.intercedent': () => (
    <g>
      <Person
        who="amina"
        x={58}
        y={116}
        scale={0.86}
        expr="pleased"
        torso={
          <>
            <path d={BUST} fill={PAL.purple} />
            <path d="M50 92H70L60 112Z" fill={PAL.paper} />
            <path d="M48 93L58 112L52 116L44 98ZM72 93L62 112L68 116L76 98Z" fill={PAL.purpleShade} />
          </>
        }
        over={
          <>
            <path d="M24 64Q24 14 60 14Q96 14 96 64" fill="none" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
            <rect x="17" y="56" width="12" height="20" rx="5" fill={PAL.slateDark} />
            <path d="M24 74Q28 90 46 88" fill="none" stroke={PAL.slate} strokeWidth="3.4" strokeLinecap="round" />
            <circle cx="47" cy="88" r="4" fill={PAL.slateDark} />
          </>
        }
      />
      <rect x="6" y="96" width="108" height="12" rx="3" fill={PAL.wood} />
      <rect x="6" y="96" width="108" height="4" rx="2" fill={PAL.card} />
      <rect x="68" y="86" width="34" height="11" rx="2" fill={PAL.orangeShade} />
      <rect x="66" y="84" width="34" height="11" rx="2" fill={PAL.orange} />
    </g>
  ),

  // "het urenbriefje": the timesheet — a sheet with a table of days and hours (grey bars) and a
  // clock in its corner
  'w.urenbriefje': () => (
    <g>
      <Paper x={18} y={14} w={70} h={90} rot={-3}>
        <rect x="26" y="22" width="54" height="9" rx="3" fill={PAL.sky} />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="26" y={38 + i * 12} width="54" height="9" rx="2" fill={i % 2 ? PAL.paper : PAL.paperShade} />
            <path d={`M30 ${42.5 + i * 12}H40`} stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
            <path d={`M50 ${42.5 + i * 12}H${[70, 74, 66, 72, 62][i]}`} stroke={PAL.navy} strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
        <path d="M46 36V98" stroke={PAL.mist} strokeWidth="1.6" />
      </Paper>
      <Clock cx={88} cy={84} r={20} hour={8} minute={0} />
    </g>
  ),

  // "de voorraad": the stock — a big stack of cardboard boxes in the storeroom
  'w.voorraad': () => (
    <g>
      <Ground cx={60} cy={106} rx={52} ry={4.5} />
      <Box x={8} y={76} w={30} h={28} depth={8} tape={false} />
      <Box x={40} y={76} w={30} h={28} depth={8} tape={false} />
      <Box x={72} y={76} w={30} h={28} depth={8} tape={false} />
      <Box x={22} y={46} w={30} h={28} depth={8} tape={false} />
      <Box x={56} y={46} w={30} h={28} depth={8} tape={false} />
      <Box x={38} y={16} w={30} h={28} depth={8} tape={false} label />
    </g>
  ),

  // "het prijskaartje": the price tag — a yellow tag on a string, with the euro sign
  'w.prijskaartje': () => (
    <g>
      <path d="M34 34Q20 18 30 10Q40 4 46 14" fill="none" stroke={PAL.slate} strokeWidth="3.4" strokeLinecap="round" />
      <g transform="rotate(32 60 60)">
        <path d="M22 60L40 38H100Q106 38 106 44V76Q106 82 100 82H40Z" fill={PAL.yellowShade} transform="translate(0 4)" strokeLinejoin="round" />
        <Shade color={PAL.yellowShade} opacity={1} at={[110, 60, 14, 30]}>
          <path d="M22 60L40 38H100Q106 38 106 44V76Q106 82 100 82H40Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="3" strokeLinejoin="round" />
        </Shade>
        <circle cx="38" cy="60" r="5.5" fill={PAL.white} />
        <EuroSign cx={74} cy={60} s={13} color={PAL.slateDark} width={5} />
      </g>
      <Shine d="M44 30L56 22" color={PAL.yellowShine} width={3.4} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
