import type { JSX, ReactNode } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import type { Expr } from '../components/Faces';
import { Arrow, Bubble, Bust, CurveArrow, ExclaimMark, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/** Word pictures, group 9 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

/** A yellow crescent moon around (x, y). */
function Moon({ x, y, r = 20 }: { x: number; y: number; r?: number }) {
  const d =
    `M${x + r * 0.15} ${y - r}A${r} ${r} 0 1 0 ${x + r * 0.95} ${y + r * 0.35}` +
    `A${r * 0.82} ${r * 0.82} 0 0 1 ${x + r * 0.15} ${y - r}Z`;
  return (
    <g>
      <Shade color={PAL.yellowShade} opacity={0.9} at={[x + r * 0.5, y + r * 1.1, r * 0.9, r * 0.5]}>
        <path d={d} fill={PAL.yellow} />
      </Shade>
    </g>
  );
}

/** Simple bike pictogram (as painted on a Dutch bike path), centred on (x, y), about 40 wide at s = 1. */
function BikeSign({ x, y, s = 1, sy = 1, color = PAL.white, w = 3.4 }: { x: number; y: number; s?: number; sy?: number; color?: string; w?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s} ${s * sy})`} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="-13" cy="4" r="8.5" />
      <circle cx="13" cy="4" r="8.5" />
      <path d="M-13 4L-1 4L-5 -10H9L-1 4M9 -10L13 4M-8 -13H-2M7 -14H12" />
    </g>
  );
}

/** A bank card (blue, gold chip, contactless waves), top-left (x, y), width w, rotated `rot` degrees. */
function BankCard({ x, y, w = 60, rot = 0 }: { x: number; y: number; w?: number; rot?: number }) {
  const k = w / 60;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${k})`}>
      <rect x="0" y="3" width="60" height="38" rx="6" fill={PAL.navyShade} />
      <Shade color={PAL.blueShade} opacity={1} at={[64, 22, 14, 30]}>
        <rect x="0" y="0" width="60" height="38" rx="6" fill={PAL.blue} />
      </Shade>
      <rect x="0" y="27" width="60" height="5" fill={PAL.navy} opacity=".35" />
      <rect x="7" y="10" width="13" height="10" rx="2.4" fill={PAL.yellow} />
      <path d="M7 15H20M13.5 10V20" stroke={PAL.yellowShade} strokeWidth="1.3" />
      <path d="M44 9Q48 15 44 21M49 7Q54 15 49 23" fill="none" stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" opacity=".85" />
      <path d="M7 34H24M29 34H38" stroke={PAL.blueLight} strokeWidth="2.4" strokeLinecap="round" />
      <Shine d="M4 8Q4 4 8 4" width={2.4} opacity={0.6} />
    </g>
  );
}

/** A cast head on custom clothes (a bust like the kit's, but with `torso` drawn in the 120 x 134 bust box). */
function Person({ who, torso, x = 60, y = 110, scale = 0.7, expr = 'neutral', flip = false }: {
  who: CharacterId; torso: ReactNode; x?: number; y?: number; scale?: number; expr?: Expr; flip?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale}) translate(-60 -134)`}>
      {torso}
      <CastHead who={who} expr={expr} />
    </g>
  );
}

/** OV check-in pole (the reader on a post), reader face centred near (x, y - 28); foot at (x, 104). */
function CardPole({ x, y = 50, lamp = PAL.ok }: { x: number; y?: number; lamp?: string }) {
  return (
    <g>
      <Ground cx={x} cy={105} rx={18} ry={4} />
      <Shade color={PAL.slateDark} opacity={1} at={[x + 10, 80, 5, 40]}>
        <rect x={x - 7} y={y} width="14" height="56" rx="4" fill={PAL.slate} />
      </Shade>
      <rect x={x - 12} y={101} width="24" height="5" rx="2.5" fill={PAL.slateDark} />
      {/* Head of the pole: yellow housing with the reader face */}
      <rect x={x - 19} y={y - 46} width="38" height="52" rx="10" fill={PAL.yellowShade} transform="translate(2 3)" />
      <Shade color={PAL.yellowShade} opacity={1} at={[x + 24, y - 20, 9, 40]}>
        <rect x={x - 19} y={y - 46} width="38" height="52" rx="10" fill={PAL.yellow} />
      </Shade>
      <rect x={x - 13} y={y - 38} width="26" height="26" rx="6" fill={PAL.slate} />
      <path d={`M${x - 5} ${y - 31}Q${x + 1} ${y - 25} ${x - 5} ${y - 19}M${x + 1} ${y - 34}Q${x + 9} ${y - 25} ${x + 1} ${y - 16}`} fill="none" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" />
      <circle cx={x} cy={y - 4} r="3.6" fill={lamp} />
      <Shine d={`M${x - 15} ${y - 30}Q${x - 15} ${y - 41} ${x - 8} ${y - 42}`} color={PAL.yellowShine} width={3} opacity={0.9} />
    </g>
  );
}

/** A white plate seen a little from above, centred on (cx, cy). */
function Plate({ cx, cy, rx = 18, food = false }: { cx: number; cy: number; rx?: number; food?: boolean }) {
  const ry = rx * 0.42;
  return (
    <g>
      <ellipse cx={cx} cy={cy + 2.5} rx={rx} ry={ry} fill={PAL.steel} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={PAL.white} />
      <ellipse cx={cx} cy={cy + 0.6} rx={rx * 0.62} ry={ry * 0.58} fill={PAL.paperShade} />
      {food && (
        <g>
          <ellipse cx={cx - rx * 0.18} cy={cy} rx={rx * 0.24} ry={ry * 0.32} fill={PAL.clay} />
          <ellipse cx={cx + rx * 0.22} cy={cy + 0.6} rx={rx * 0.2} ry={ry * 0.26} fill={PAL.leaf} />
        </g>
      )}
    </g>
  );
}

/** A gold coin, standing up and seen face-on, centred on (cx, cy). */
function Coin({ cx, cy, r = 8 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx + r * 0.12} cy={cy + r * 0.14} r={r} fill={PAL.yellowShade} />
      <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      <circle cx={cx} cy={cy} r={r * 0.62} fill="none" stroke={PAL.yellowShade} strokeWidth={Math.max(1.3, r * 0.14)} />
      <Shine d={`M${cx - r * 0.55} ${cy - r * 0.1}A${r * 0.6} ${r * 0.6} 0 0 1 ${cx - r * 0.1} ${cy - r * 0.55}`} color={PAL.yellowShine} width={Math.max(1.6, r * 0.2)} opacity={0.9} />
    </g>
  );
}

/** A frying pan, pan centred on (cx, cy), handle to the right. */
function FryingPan({ cx = 52, cy = 66, rx = 36, handle = true }: { cx?: number; cy?: number; rx?: number; handle?: boolean }) {
  const ry = rx * 0.5;
  return (
    <g>
      {handle && (
        <g>
          <path d={`M${cx + rx - 4} ${cy}L${cx + rx + 30} ${cy - 10}`} stroke={PAL.slateDark} strokeWidth={rx * 0.26} strokeLinecap="round" />
          <path d={`M${cx + rx + 6} ${cy - 3.4}L${cx + rx + 30} ${cy - 10}`} stroke={PAL.ink} strokeWidth={rx * 0.3} strokeLinecap="round" />
        </g>
      )}
      {/* Body: outer wall and the dark cooking surface */}
      <path d={`M${cx - rx} ${cy}A${rx} ${ry} 0 0 0 ${cx + rx} ${cy}V${cy + rx * 0.2}A${rx} ${ry} 0 0 1 ${cx - rx} ${cy + rx * 0.2}Z`} fill={PAL.slateDark} />
      <ellipse cx={cx} cy={cy + rx * 0.18} rx={rx * 0.96} ry={ry * 0.95} fill={PAL.slateDark} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={PAL.steel} />
      <ellipse cx={cx} cy={cy + 1.5} rx={rx * 0.86} ry={ry * 0.8} fill={PAL.slate} />
      <Shine d={`M${cx - rx * 0.6} ${cy - ry * 0.25}Q${cx - rx * 0.4} ${cy - ry * 0.6} ${cx - rx * 0.05} ${cy - ry * 0.65}`} width={3} opacity={0.35} />
    </g>
  );
}

/** A pot (cooking pan with two handles), base centred on (cx, base). */
function Pot({ cx, base, w = 30, h = 20, color = PAL.mist, shade = PAL.steel }: { cx: number; base: number; w?: number; h?: number; color?: string; shade?: string }) {
  return (
    <g>
      <rect x={cx - w / 2 - 6} y={base - h + 3} width={w + 12} height="5" rx="2.5" fill={shade} />
      <Shade color={shade} opacity={1} at={[cx + w * 0.62, base - h / 2, w * 0.22, h]}>
        <rect x={cx - w / 2} y={base - h} width={w} height={h} rx="3" fill={color} />
      </Shade>
      <rect x={cx - w / 2 - 1.5} y={base - h - 3} width={w + 3} height="5" rx="2.5" fill={shade} />
      <rect x={cx - 4} y={base - h - 7} width="8" height="5" rx="2" fill={PAL.slate} />
    </g>
  );
}

export default {
  // "het fietspad": the bike path — a red Dutch bike path running into the distance with a
  // white bike painted on it; a round blue bike sign beside it
  'w.fietspad': () => (
    <g>
      <path d="M6 108L44 20H76L114 108Z" fill={PAL.leaf} opacity=".55" />
      <Shade color="#000" opacity={0.16} at={[112, 64, 30, 60]}>
        <path d="M20 108L50 20H70L100 108Z" fill={PAL.redShade} />
      </Shade>
      <path d="M26 104L52 26M94 104L68 26" stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="7 6" opacity=".9" />
      <BikeSign x={60} y={78} s={1.15} sy={0.62} w={4.2} />
      <BikeSign x={60} y={42} s={0.55} sy={0.6} w={4} />
      {/* Blue round sign on a pole */}
      <rect x="99" y="34" width="4" height="40" rx="2" fill={PAL.steel} />
      <circle cx="101" cy="30" r="12" fill={PAL.white} />
      <circle cx="101" cy="30" r="10.4" fill={PAL.blue} />
      <BikeSign x={101} y={30} s={0.34} w={6.4} />
    </g>
  ),

  // "de bel": the bike bell — a round bell on a bike's handlebar (grips, stem), its lever
  // pushed, ringing
  'w.bel': () => (
    <g>
      {/* Handlebar: stem, bar and two black grips */}
      <path d="M60 78V112" stroke={PAL.steel} strokeWidth="9" strokeLinecap="round" />
      <path d="M14 70Q30 80 60 80Q90 80 106 70" fill="none" stroke={PAL.steel} strokeWidth="8" strokeLinecap="round" />
      <path d="M8 66L22 74M98 74L112 66" stroke={PAL.ink} strokeWidth="12" strokeLinecap="round" />
      <rect x="53" y="74" width="14" height="12" rx="4" fill={PAL.slate} />
      {/* Bell on the right half */}
      <rect x="76" y="70" width="10" height="12" rx="3" fill={PAL.slate} />
      <ellipse cx="81" cy="68" rx="22" ry="6" fill={PAL.skyShade} />
      <Shade color={PAL.skyShade} opacity={1} at={[104, 48, 10, 28]}>
        <path d="M59 66A22 26 0 0 1 103 66Q103 72 81 72Q59 72 59 66Z" fill={PAL.sky} />
      </Shade>
      <Shine d="M65 58Q67 47 75 43" width={4} opacity={0.75} />
      {/* Lever */}
      <path d="M66 76L50 70" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <circle cx="48" cy="69" r="4.6" fill={PAL.slateDark} />
      <Motion x={81} y={48} dir={-90} spread={120} n={5} len={9} gap={22} color={PAL.orange} width={4} />
    </g>
  ),

  // "het licht": the bike light — a lamp on the front of a bike, shining a beam ahead
  'w.licht': () => (
    <g>
      <Ground cx={38} cy={106} rx={26} ry={4} />
      {/* Beam */}
      <path d="M58 40L112 14V80Z" fill={PAL.yellowLight} opacity=".55" />
      <path d="M58 40L112 30V58Z" fill={PAL.yellowShine} opacity=".9" />
      {/* Front wheel and fork */}
      <circle cx="38" cy="80" r="24" fill="none" stroke={PAL.ink} strokeWidth="6" />
      <circle cx="38" cy="80" r="17" fill="none" stroke={PAL.mist} strokeWidth="1.6" />
      <circle cx="38" cy="80" r="3.6" fill={PAL.steel} />
      <path d="M38 80L48 34" stroke={PAL.blue} strokeWidth="6" strokeLinecap="round" />
      <path d="M48 34L50 22" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d="M36 22H60" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d="M22 24L34 22" stroke={PAL.ink} strokeWidth="7" strokeLinecap="round" />
      {/* Lamp */}
      <rect x="40" y="31" width="20" height="17" rx="5" fill={PAL.slate} />
      <ellipse cx="59" cy="39.5" rx="4" ry="8" fill={PAL.yellow} />
      <ellipse cx="59" cy="39.5" rx="2" ry="4.6" fill={PAL.white} />
      <Shine d="M44 35H52" width={2.4} opacity={0.5} />
      <Motion x={90} y={44} dir={0} spread={60} n={3} len={8} gap={16} color={PAL.yellowShade} width={3.6} />
    </g>
  ),

  // "inchecken": to check in — a hand holds the card against the yellow reader pole (arrow in),
  // the reader beeps green
  'w.inchecken': () => (
    <g>
      <CardPole x={86} y={60} />
      <Hand pose="hold" x={42} y={38} rotate={90} scale={0.72} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      <BankCard x={52} y={26} w={30} rot={0} />
      <Arrow from={[14, 74]} to={[60, 74]} color={PAL.ok} width={7} head={11} />
      <Tick x={104} y={16} r={11} />
      <Motion x={86} y={36} dir={-30} spread={60} n={3} len={6} gap={26} color={PAL.ok} width={3.4} />
    </g>
  ),

  // "uitchecken": to check out — the hand takes the card away from the reader again (arrow out)
  'w.uitchecken': () => (
    <g>
      <CardPole x={34} y={60} />
      <Hand pose="hold" x={102} y={38} rotate={-90} scale={0.72} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} mirror />
      <BankCard x={66} y={26} w={30} rot={0} />
      <Motion x={70} y={36} dir={180} spread={50} n={3} len={6} gap={6} color={PAL.line} width={3.4} />
      <Arrow from={[60, 74]} to={[106, 74]} color={PAL.orange} width={7} head={11} />
    </g>
  ),

  // "de bankpas": the bank card — a big blue card with a gold chip
  'w.bankpas': () => (
    <g>
      <BankCard x={10} y={38} w={100} rot={-8} />
    </g>
  ),

  // "de huisartsenpost": the out-of-hours GP — a doctor's post with a red cross over the
  // door, lit up at night under the moon
  'w.huisartsenpost': () => (
    <g>
      <Ground cx={58} cy={106} rx={44} ry={4} />
      <Moon x={92} y={22} r={13} />
      <Sparkle x={72} y={14} r={4.5} color={PAL.yellowLight} />
      {/* Building */}
      <Shade color={PAL.navyShade} opacity={1} at={[98, 74, 12, 40]}>
        <rect x="14" y="40" width="88" height="66" rx="4" fill={PAL.navy} />
      </Shade>
      <path d="M8 44L58 22L108 44Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="5" strokeLinejoin="round" />
      {/* Lit windows and door */}
      <rect x="22" y="58" width="18" height="16" rx="3" fill={PAL.yellowLight} />
      <rect x="76" y="58" width="18" height="16" rx="3" fill={PAL.yellowLight} />
      <rect x="48" y="70" width="20" height="36" rx="3" fill={PAL.yellowShine} />
      <rect x="58" y="70" width="10" height="36" rx="2" fill={PAL.yellowLight} />
      <circle cx="63" cy="89" r="1.8" fill={PAL.yellowShade} />
      {/* Cross sign above the door */}
      <circle cx="58" cy="52" r="11" fill={PAL.white} />
      <path d="M58 45V59M51 52H65" stroke={PAL.red} strokeWidth="5.2" strokeLinecap="round" />
    </g>
  ),

  // "de apotheek": the pharmacy — the green pharmacy cross with a medicine box and pills
  'w.apotheek': () => (
    <g>
      <Ground cx={60} cy={106} rx={42} ry={4} />
      {/* Green cross sign */}
      <g transform="translate(60 34)">
        <path d="M-8 -24H8V-8H24V8H8V24H-8V8H-24V-8H-8Z" fill={PAL.greenShade} stroke={PAL.greenShade} strokeWidth="5" strokeLinejoin="round" transform="translate(0 3)" />
        <path d="M-8 -24H8V-8H24V8H8V24H-8V8H-24V-8H-8Z" fill={PAL.green} stroke={PAL.green} strokeWidth="5" strokeLinejoin="round" />
        <Shine d="M-18 -3V-5H-4" width={3} opacity={0.6} />
      </g>
      {/* Medicine box */}
      <path d="M18 70L26 64H62L54 70Z" fill={PAL.paperShade} />
      <path d="M54 70L62 64V100L54 106Z" fill={PAL.mist} />
      <rect x="18" y="70" width="36" height="36" rx="2" fill={PAL.white} />
      <rect x="18" y="80" width="36" height="9" fill={PAL.green} />
      <path d="M24 96H44" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      {/* Pill bottle */}
      <Shade color={PAL.clayShade} opacity={1} at={[92, 90, 7, 24]}>
        <rect x="70" y="74" width="24" height="32" rx="5" fill={PAL.clay} />
      </Shade>
      <rect x="68" y="66" width="28" height="10" rx="3" fill={PAL.white} />
      <rect x="68" y="74" width="28" height="2.4" fill={PAL.paperShade} />
      <rect x="73" y="84" width="18" height="13" rx="2" fill={PAL.white} />
      {/* Pills */}
      <g transform="rotate(-30 100 102)">
        <rect x="92" y="98" width="16" height="7" rx="3.5" fill={PAL.white} />
        <rect x="100" y="98" width="8" height="7" rx="3.5" fill={PAL.red} />
        <rect x="100" y="98" width="4" height="7" fill={PAL.red} />
      </g>
    </g>
  ),

  // "het recept": the prescription — a doctor's note with a red cross, a pill and a signature
  'w.recept': () => (
    <g>
      <g transform="rotate(-4 60 60)">
        <rect x="24" y="14" width="68" height="92" rx="5" fill={PAL.paperShade} transform="translate(3 3)" />
        <rect x="24" y="14" width="68" height="92" rx="5" fill={PAL.white} />
        <circle cx="40" cy="31" r="9" fill={PAL.red} />
        <path d="M40 25.5V36.5M34.5 31H45.5" stroke={PAL.white} strokeWidth="3.6" strokeLinecap="round" />
        <path d="M56 27H82M56 35H74" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
        {/* The pill */}
        <g transform="rotate(-30 58 62)">
          <rect x="38" y="54" width="40" height="16" rx="8" fill={PAL.sky} />
          <rect x="58" y="54" width="20" height="16" rx="8" fill={PAL.white} />
          <rect x="58" y="54" width="8" height="16" fill={PAL.white} />
          <rect x="38" y="54" width="40" height="16" rx="8" fill="none" stroke={PAL.mist} strokeWidth="1.6" />
          <Shine d="M43 58H52" width={2.6} opacity={0.7} />
        </g>
        <path d="M34 84H82" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
        {/* Signature */}
        <path d="M54 98Q58 88 61 96Q64 102 67 93Q70 88 72 95Q74 99 82 94" fill="none" stroke={PAL.blue} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
  ),

  // "de pincode": the PIN — a card terminal shows four hidden digits; a finger types while
  // the other hand shields the keypad
  'w.pincode': () => (
    <g>
      <rect x="26" y="12" width="56" height="94" rx="10" fill={PAL.slateDark} transform="translate(3 3)" />
      <rect x="26" y="12" width="56" height="94" rx="10" fill={PAL.slate} />
      <rect x="32" y="19" width="44" height="22" rx="4" fill="#e3f5ff" />
      {[40, 49, 58, 67].map((cx) => (
        <circle key={cx} cx={cx + 0.5} cy="30" r="3.4" fill={PAL.ink} />
      ))}
      {[0, 1, 2].flatMap((c) => [0, 1, 2, 3].map((r) => (
        <rect key={`${c}${r}`} x={33 + c * 15} y={49 + r * 13} width="12" height="9" rx="2.5" fill={r === 3 && c === 2 ? PAL.ok : r === 3 && c === 0 ? PAL.red : PAL.mist} />
      )))}
      <Hand pose="point" x={58} y={118} rotate={-8} scale={0.8} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
      {/* Shielding hand, held flat over the keys from the right */}
      <Hand pose="open" x={108} y={56} rotate={-90} scale={0.8} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
    </g>
  ),

  // "de sms": the text message — a phone with a new text in a bubble and an envelope badge
  'w.sms': () => (
    <g>
      <rect x="30" y="12" width="52" height="94" rx="9" fill={PAL.slateDark} transform="translate(3 3)" />
      <rect x="30" y="12" width="52" height="94" rx="9" fill={PAL.slate} />
      <rect x="35" y="20" width="42" height="76" rx="4" fill="#e3f5ff" />
      <rect x="50" y="99" width="12" height="3" rx="1.5" fill={PAL.steel} />
      {/* One incoming text: a green bubble with lines */}
      <Bubble x={40} y={38} w={46} h={30} tail="left" fill={PAL.leaf} depth={PAL.leafShade}>
        <path d="M48 47H78M48 55H70" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" />
      </Bubble>
      {/* New-message dot */}
      <circle cx="82" cy="18" r="9" fill={PAL.redShade} />
      <circle cx="82" cy="16" r="9" fill={PAL.red} />
      <circle cx="82" cy="16" r="3" fill={PAL.white} />
      <Motion x={82} y={16} dir={-45} spread={70} n={3} len={5} gap={12} color={PAL.red} width={3} />
    </g>
  ),

  // "de oplichter": the scammer — an anonymous hooded figure, face in shadow, with a phone on a
  // fishing line: he is fishing for your bank card
  'w.oplichter': () => (
    <g>
      {/* Hooded figure */}
      <path d="M8 118C8 92 22 80 40 80C58 80 72 92 72 118Z" fill={PAL.slate} />
      <path d="M58 86C66 92 72 102 72 118H60C62 104 61 94 58 86Z" fill={PAL.slateDark} opacity=".6" />
      <path d="M33 86L40 98L47 86" fill="none" stroke={PAL.slateDark} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 96V108M44 96V108" stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 86C10 52 22 26 40 26C58 26 70 52 68 86Q54 92 40 92Q26 92 12 86Z" fill={PAL.slate} />
      <ellipse cx="40" cy="62" rx="17" ry="21" fill={PAL.slateDark} />
      <path d="M26 72Q40 86 54 72Q52 84 40 84Q28 84 26 72Z" fill={SKIN.henk[1]} opacity=".7" />
      <Shine d="M18 60Q19 40 32 31" width={3} opacity={0.3} />
      {/* Phone in his hand, with a fishing line and hook */}
      <circle cx="66" cy="96" r="7" fill={SKIN.henk[0]} />
      <rect x="62" y="70" width="14" height="24" rx="3" fill={PAL.ink} />
      <rect x="64" y="73" width="10" height="16" rx="1.5" fill={PAL.ice} />
      <path d="M70 70Q78 30 96 22V44" fill="none" stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
      <BankCard x={80} y={50} w={30} />
      <path d="M96 42V52Q96 58 101 56" fill="none" stroke={PAL.slateDark} strokeWidth="3" strokeLinecap="round" />
      <ExclaimMark x={100} y={92} size={24} />
    </g>
  ),

  // "aankleden": helping someone get dressed — a carer holds out the other half of the
  // cardigan, Henk already has one sleeve on; the arrow shows it going over his shoulder
  'w.aankleden': () => (
    <g>
      <Person
        who="henk"
        x={44}
        y={120}
        scale={0.7}
        expr="pleased"
        torso={(
          <>
            <path d="M18 134C18 104 35 92 60 92C85 92 102 104 102 134Z" fill={PAL.paper} />
            <path d="M86 102C95 108 102 118 102 134H86Z" fill={PAL.paperShade} />
            {/* Cardigan on his right side (viewer's left), and its collar */}
            <path d="M18 134C18 104 35 92 54 92L58 134Z" fill={PAL.purple} />
            <path d="M54 92L60 112L56 134" fill="none" stroke={PAL.purpleShade} strokeWidth="5" strokeLinecap="round" />
            <circle cx="50" cy="112" r="3.2" fill={PAL.purpleLight} />
            <circle cx="50" cy="125" r="3.2" fill={PAL.purpleLight} />
          </>
        )}
      />
      {/* The other half of the cardigan, held open by the carer: front panel and hanging sleeve */}
      <path d="M92 62L106 66L110 112H96Z" fill={PAL.purpleShade} />
      <path d="M70 70Q80 60 94 62L100 112H74Q74 92 70 70Z" fill={PAL.purple} />
      <path d="M72 72Q80 64 92 64" fill="none" stroke={PAL.purpleShade} strokeWidth="4" strokeLinecap="round" />
      <Hand pose="hold" x={110} y={86} rotate={-14} scale={0.6} skin={SKIN.amina} sleeve={[PAL.sky, PAL.skyShade]} mirror />
      <CurveArrow from={[94, 44]} to={[64, 62]} bend={14} color={PAL.sky} width={6} head={10} />
    </g>
  ),

  // "de verpleegkundige": the nurse — Jada in a white nurse's tunic with a fob watch and a
  // red cross badge
  'w.verpleegkundige': () => (
    <g>
      <Person
        who="jada"
        x={60}
        y={124}
        scale={0.88}
        expr="pleased"
        torso={(
          <>
            <path d="M22 134C22 107 38 96 60 96C82 96 98 107 98 134Z" fill={PAL.white} />
            <path d="M84 104C92 110 98 120 98 134H82C84 122 85 112 84 104Z" fill={PAL.paperShade} />
            <path d="M48 96L60 112L72 96Z" fill={PAL.sky} />
            <path d="M46 96L60 114L74 96" fill="none" stroke={PAL.sky} strokeWidth="3.4" strokeLinejoin="round" />
            <path d="M28 134V118M92 134V118" stroke={PAL.sky} strokeWidth="3" strokeLinecap="round" />
            {/* Fob watch */}
            <path d="M40 106V114" stroke={PAL.sky} strokeWidth="2.4" />
            <circle cx="40" cy="119" r="5.6" fill={PAL.skyShade} />
            <circle cx="40" cy="119" r="3.6" fill={PAL.white} />
            {/* Cross badge */}
            <rect x="70" y="112" width="16" height="16" rx="4" fill={PAL.red} />
            <path d="M78 115.5V124.5M73.5 120H82.5" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" />
          </>
        )}
      />
    </g>
  ),

  // "gevallen": fallen — an older man lies on the floor, his walking stick dropped beside him
  'w.gevallen': () => (
    <g>
      <Ground cx={60} cy={102} rx={52} ry={5} />
      {/* Walking stick */}
      <path d="M50 108L98 96" stroke={PAL.wood} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M98 96Q106 94 105 100" fill="none" stroke={PAL.wood} strokeWidth="4.5" strokeLinecap="round" />
      {/* Legs */}
      <path d="M58 92H96" stroke={PAL.navyShade} strokeWidth="13" strokeLinecap="round" />
      <path d="M58 86L92 74" stroke={PAL.navy} strokeWidth="13" strokeLinecap="round" />
      <rect x="94" y="64" width="9" height="16" rx="4" fill={PAL.ink} transform="rotate(-20 98 72)" />
      <rect x="98" y="83" width="9" height="16" rx="4" fill={PAL.ink} />
      {/* Body */}
      <rect x="26" y="76" width="40" height="24" rx="11" fill={PAL.purple} />
      <rect x="26" y="90" width="40" height="10" rx="5" fill={PAL.purpleShade} />
      {/* Arm reaching up */}
      <path d="M46 80L54 58" stroke={PAL.purple} strokeWidth="9" strokeLinecap="round" />
      <circle cx="55" cy="55" r="5.4" fill={SKIN.henk[0]} />
      {/* Head: Henk, turned on his side */}
      <g transform="translate(14 86) rotate(-90) scale(0.4) translate(-60 -92)">
        <CastHead who="henk" expr="disappointed" />
      </g>
      <Motion x={20} y={56} dir={-90} spread={90} n={3} len={7} gap={10} color={PAL.red} width={3.4} />
      <ExclaimMark x={84} y={34} size={30} />
    </g>
  ),

  // "de keuken": the (professional) kitchen — a steel cooker with pots, steam and the hood
  'w.keuken': () => (
    <g>
      <Ground cx={60} cy={106} rx={46} ry={4} />
      {/* Extractor hood */}
      <rect x="50" y="8" width="20" height="10" fill={PAL.steel} />
      <path d="M22 30L38 16H82L98 30Z" fill={PAL.mist} stroke={PAL.mist} strokeWidth="3" strokeLinejoin="round" />
      <rect x="20" y="28" width="80" height="6" rx="2" fill={PAL.steel} />
      {/* Steam */}
      <path d="M38 48Q34 44 38 40M80 50Q76 46 80 42" fill="none" stroke={PAL.mist} strokeWidth="3.4" strokeLinecap="round" />
      {/* Pots on the cooker */}
      <Pot cx={38} base={68} w={28} h={14} />
      <Pot cx={80} base={68} w={26} h={12} color={PAL.red} shade={PAL.redShade} />
      {/* Cooker */}
      <rect x="14" y="68" width="92" height="6" rx="2" fill={PAL.slate} />
      <Shade color={PAL.steel} opacity={1} at={[112, 90, 16, 30]}>
        <rect x="16" y="72" width="88" height="34" rx="3" fill={PAL.mist} />
      </Shade>
      <rect x="26" y="82" width="68" height="20" rx="3" fill={PAL.slate} />
      <rect x="32" y="77" width="56" height="3" rx="1.5" fill={PAL.steel} />
      <rect x="30" y="86" width="60" height="12" rx="2" fill={PAL.slateDark} />
      <circle cx="22" cy="78" r="2.4" fill={PAL.slate} />
      <circle cx="98" cy="78" r="2.4" fill={PAL.slate} />
    </g>
  ),

  // "snijden": to cut — a knife slicing a carrot on a wooden board
  'w.snijden': () => (
    <g>
      <Ground cx={58} cy={104} rx={50} ry={4} />
      {/* Board */}
      <rect x="10" y="78" width="96" height="22" rx="7" fill={PAL.cardDark} transform="translate(0 4)" />
      <rect x="10" y="78" width="96" height="22" rx="7" fill={PAL.card} />
      <circle cx="98" cy="88" r="3.4" fill={PAL.cardDark} />
      {/* Carrot: whole part and slices */}
      <path d="M24 78Q24 70 32 70H58V84H32Q24 84 24 78Z" fill={PAL.orange} transform="translate(0 -4)" />
      <path d="M22 72L12 64M22 76L10 74" stroke={PAL.leaf} strokeWidth="4" strokeLinecap="round" />
      <path d="M34 68V76M44 68V78" stroke={PAL.orangeShade} strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="74" cy="80" rx="4" ry="6.6" fill={PAL.orangeShade} />
      <ellipse cx="73" cy="80" rx="4" ry="6.6" fill={PAL.orangeLight} />
      <ellipse cx="86" cy="80" rx="4" ry="6.4" fill={PAL.orangeShade} />
      <ellipse cx="85" cy="80" rx="4" ry="6.4" fill={PAL.orangeLight} />
      {/* Knife: blade cutting down into the carrot */}
      <g transform="rotate(-24 62 60)">
        <path d="M58 76L60 24Q66 22 70 30L68 76Z" fill={PAL.mist} />
        <path d="M66 76L68 32Q69 28 70 30L68 76Z" fill={PAL.steel} />
        <rect x="56" y="74" width="14" height="5" rx="2" fill={PAL.slate} />
        <rect x="57" y="78" width="12" height="28" rx="5" fill={PAL.ink} />
        <circle cx="63" cy="86" r="1.6" fill={PAL.steel} />
        <circle cx="63" cy="97" r="1.6" fill={PAL.steel} />
      </g>
      <Arrow from={[96, 34]} to={[96, 60]} color={PAL.sky} width={6} head={10} />
    </g>
  ),

  // "de koelcel": the walk-in cold room — a heavy steel door with a big handle, a
  // snowflake sign and a thermometer far below zero
  'w.koelcel': () => {
    const flake = Array.from({ length: 3 }, (_, k) => {
      const a = (k * Math.PI) / 3;
      return `M${48 - Math.cos(a) * 11} ${40 - Math.sin(a) * 11}L${48 + Math.cos(a) * 11} ${40 + Math.sin(a) * 11}`;
    }).join('');
    return (
      <g>
        <Ground cx={56} cy={106} rx={42} ry={4} />
        <rect x="16" y="10" width="76" height="96" rx="6" fill={PAL.steel} />
        <Shade color={PAL.steel} opacity={1} at={[96, 60, 14, 60]}>
          <rect x="20" y="14" width="64" height="92" rx="4" fill={PAL.mist} />
        </Shade>
        <path d="M22 30H82M22 90H82" stroke={PAL.paperShade} strokeWidth="2" />
        {/* Frost along the bottom and the edge */}
        <path d="M20 100Q28 94 34 100Q42 94 50 100Q58 94 66 100Q74 94 84 100V106H20Z" fill={PAL.white} />
        {/* Snowflake sign */}
        <circle cx="48" cy="40" r="16" fill={PAL.sky} />
        <path d={flake} stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" />
        {/* Big handle */}
        <rect x="70" y="52" width="9" height="30" rx="4.5" fill={PAL.slate} />
        <rect x="64" y="56" width="10" height="5" rx="2" fill={PAL.slateDark} />
        <rect x="64" y="73" width="10" height="5" rx="2" fill={PAL.slateDark} />
        {/* Thermometer, low */}
        <rect x="94" y="24" width="14" height="66" rx="7" fill={PAL.white} />
        <rect x="98" y="30" width="6" height="52" rx="3" fill={PAL.paperShade} />
        <rect x="98" y="66" width="6" height="16" rx="3" fill={PAL.sky} />
        <circle cx="101" cy="86" r="7.4" fill={PAL.sky} />
        <path d="M94 40H98M94 50H98M94 60H98" stroke={PAL.line} strokeWidth="1.6" strokeLinecap="round" />
      </g>
    );
  },

  // "de gast": the guest — Amina sits at a laid restaurant table, plate and glass in front of her
  'w.gast': () => (
    <g>
      <Bust who="amina" x={60} y={100} scale={0.62} expr="joy" />
      {/* Table with a cloth */}
      <rect x="8" y="84" width="104" height="26" rx="4" fill={PAL.paperShade} />
      <rect x="8" y="80" width="104" height="10" rx="4" fill={PAL.white} />
      <rect x="8" y="88" width="104" height="22" fill={PAL.red} opacity=".85" />
      <path d="M26 88V110M46 88V110M66 88V110M86 88V110M106 88V110" stroke={PAL.white} strokeWidth="5" opacity=".7" />
      <Plate cx={58} cy={82} rx={20} food />
      {/* Fork and knife */}
      <path d="M30 76V88M88 76V88" stroke={PAL.steel} strokeWidth="3.2" strokeLinecap="round" />
      {/* Glass */}
      <path d="M94 52H106L104 66Q100 70 96 66Z" fill={PAL.ice} />
      <path d="M95.5 58H104.5L103.6 65Q100 68 96.4 65Z" fill={PAL.red} opacity=".8" />
      <path d="M100 68V80M94 81H106" stroke={PAL.ice} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),

  // "de bestelling": the order — the waiter writes on a notepad what the guest wants (a plate
  // of food in the bubble)
  'w.bestelling': () => (
    <g>
      <Bubble x={12} y={10} w={50} h={34} tail="left" fill="#fff3d6" depth={PAL.yellowLight}>
        <Plate cx={37} cy={28} rx={16} food />
      </Bubble>
      {/* Notepad, held in the left hand */}
      <Hand pose="hold" x={36} y={116} scale={0.86} skin={SKIN.bram} sleeve={[PAL.ink, PAL.slateDark]} />
      <rect x="26" y="50" width="54" height="62" rx="4" fill={PAL.paperShade} transform="rotate(-6 53 81) translate(3 3)" />
      <g transform="rotate(-6 53 81)">
        <rect x="26" y="50" width="54" height="62" rx="4" fill={PAL.white} />
        <rect x="26" y="50" width="54" height="9" rx="3" fill={PAL.red} />
        <path d="M33 68H70M33 78H64M33 88H58" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      </g>
      {/* Pen in the right hand */}
      <g transform="rotate(32 76 96)">
        <rect x="72" y="58" width="8" height="40" rx="3" fill={PAL.blue} />
        <path d="M72 96L76 104L80 96Z" fill={PAL.slate} />
      </g>
      <Hand pose="fist" x={98} y={118} rotate={-20} scale={0.66} skin={SKIN.bram} sleeve={[PAL.ink, PAL.slateDark]} mirror />
    </g>
  ),

  // "het menu": the menu — an open menu card: a fork and knife on top, dishes and prices
  'w.menu': () => (
    <g>
      <Ground cx={60} cy={106} rx={48} ry={4} />
      <path d="M8 22L60 16L112 22V104L60 98L8 104Z" fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="4" strokeLinejoin="round" />
      <path d="M14 24L58 20V94L14 98Z" fill={PAL.white} />
      <path d="M62 20L106 24V98L62 94Z" fill={PAL.paperShade} />
      {[0, 1].map((p) => {
        const x0 = p === 0 ? 20 : 68;
        return (
          <g key={p}>
            {[46, 60, 74, 88].map((y) => (
              <g key={y}>
                <path d={`M${x0} ${y}H${x0 + 22}`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
                <circle cx={x0 + 30} cy={y} r="2.4" fill={PAL.redShade} />
              </g>
            ))}
          </g>
        );
      })}
      {/* Fork and knife */}
      <path d="M32 26V38M28 26V31Q28 34 32 34Q36 34 36 31V26" fill="none" stroke={PAL.slate} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M44 26Q48 28 48 34L46 34V39" fill="none" stroke={PAL.slate} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M76 30H98" stroke={PAL.slate} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),

  // "afruimen": to clear the table — dirty plates go from the table onto a tray
  'w.afruimen': () => (
    <g>
      {/* Tray with a stack of used plates */}
      <Hand pose="open" x={78} y={78} rotate={-90} scale={0.5} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} mirror />
      <rect x="50" y="44" width="58" height="7" rx="3.5" fill={PAL.cardDark} />
      <Plate cx={79} cy={40} rx={22} />
      <Plate cx={79} cy={34} rx={22} />
      <Plate cx={79} cy={28} rx={22} food />
      {/* Table with one plate left */}
      <rect x="8" y="88" width="104" height="8" rx="3" fill={PAL.cardShade} />
      <rect x="8" y="84" width="104" height="6" rx="3" fill={PAL.card} />
      <rect x="16" y="94" width="7" height="14" rx="2" fill={PAL.cardDark} />
      <rect x="97" y="94" width="7" height="14" rx="2" fill={PAL.cardDark} />
      <Plate cx={32} cy={80} rx={18} food />
      <CurveArrow from={[28, 64]} to={[52, 26]} bend={-14} color={PAL.sky} width={6} head={11} />
    </g>
  ),

  // "de fooi": the tip — a hand drops a coin into a tip jar full of coins
  'w.fooi': () => (
    <g>
      <Ground cx={58} cy={106} rx={30} ry={4} />
      {/* Jar */}
      <rect x="30" y="38" width="56" height="68" rx="12" fill={PAL.ice} opacity=".45" />
      <Coin cx={44} cy={96} r={8} />
      <Coin cx={60} cy={98} r={8} />
      <Coin cx={74} cy={95} r={8} />
      <Coin cx={52} cy={84} r={8} />
      <Coin cx={67} cy={83} r={8} />
      <Coin cx={58} cy={70} r={8} />
      <rect x="30" y="38" width="56" height="68" rx="12" fill="none" stroke={PAL.ice} strokeWidth="3" />
      <rect x="26" y="32" width="64" height="9" rx="4" fill={PAL.skyShade} />
      <Shine d="M36 54V90" width={4} opacity={0.8} />
      {/* Heart on the jar */}
      <path d="M58 58C52 52 46 56 50 61L58 67L66 61C70 56 64 52 58 58Z" fill={PAL.red} />
      {/* Coin dropped in */}
      <Coin cx={58} cy={20} r={9} />
      <Hand pose="hold" x={92} y={46} rotate={-110} scale={0.5} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <Motion x={58} y={20} dir={90} spread={1} n={1} len={6} gap={11} color={PAL.line} width={3} />
      <Sparkle x={20} y={22} r={6} />
    </g>
  ),

  // "de pan": the frying pan
  'w.pan': () => (
    <g>
      <Ground cx={56} cy={92} rx={40} ry={6} />
      <FryingPan cx={48} cy={64} rx={38} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
