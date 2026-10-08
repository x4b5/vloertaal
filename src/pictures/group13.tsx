import type { JSX, ReactNode } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import type { Expr } from '../components/Faces';
import { Bubble, Bust, Dots, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/** Word pictures, group 13 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

const r1 = (n: number) => Math.round(n * 10) / 10;

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

/** A gold euro coin seen from the front, centred on (cx, cy). */
function Coin({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy + r * 0.14} r={r} fill={PAL.yellowShade} />
      <Shade color={PAL.yellowShade} opacity={0.8} at={[cx + r * 1.15, cy, r * 0.5, r * 1.3]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      </Shade>
      <EuroSign cx={cx} cy={cy} s={r * 0.44} color={PAL.yellowShade} />
      <Shine d={`M${r1(cx - r * 0.62)} ${r1(cy - r * 0.18)}A${r * 0.66} ${r * 0.66} 0 0 1 ${r1(cx - r * 0.18)} ${r1(cy - r * 0.62)}`} color={PAL.yellowShine} width={Math.max(2.4, r * 0.14)} opacity={0.9} />
    </g>
  );
}

/** A stack of coins seen from the side, bottom centred on (cx, base). */
function CoinStack({ cx, base, n = 4, rx = 13 }: { cx: number; base: number; n?: number; rx?: number }) {
  const ry = rx * 0.38;
  const h = 6;
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const y = base - ry - i * h;
        return (
          <g key={i}>
            <path d={`M${cx - rx} ${y - h}V${y}A${rx} ${ry} 0 0 0 ${cx + rx} ${y}V${y - h}Z`} fill={PAL.yellowShade} />
            <path d={`M${cx + rx * 0.45} ${y + ry * 0.9}A${rx} ${ry} 0 0 0 ${cx + rx} ${y}V${y - h}H${cx + rx * 0.45}Z`} fill="#c48f00" opacity=".6" />
            <ellipse cx={cx} cy={y - h} rx={rx} ry={ry} fill={PAL.yellow} />
          </g>
        );
      })}
      <ellipse cx={cx} cy={base - ry - n * h} rx={rx * 0.62} ry={ry * 0.6} fill="none" stroke={PAL.yellowShade} strokeWidth="1.6" />
    </g>
  );
}

/** A euro banknote, top-left (x, y), rotated `rot` degrees about its centre. */
function Note({ x, y, w = 60, h = 32, color, shade, rot = 0 }: { x: number; y: number; w?: number; h?: number; color: string; shade: string; rot?: number }) {
  return (
    <g transform={rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined}>
      <rect x={x} y={y + 3} width={w} height={h} rx="4" fill={shade} />
      <rect x={x} y={y} width={w} height={h} rx="4" fill={color} />
      <rect x={x + 3.5} y={y + 3.5} width={w - 7} height={h - 7} rx="2.5" fill="none" stroke={PAL.white} strokeWidth="1.6" opacity=".55" />
      <circle cx={x + w * 0.64} cy={y + h / 2} r={h * 0.3} fill={PAL.white} opacity=".92" />
      <EuroSign cx={x + w * 0.64} cy={y + h / 2} s={h * 0.15} color={shade} />
      <path d={`M${x + 8} ${y + h * 0.38}h${w * 0.22}M${x + 8} ${y + h * 0.64}h${w * 0.14}`} stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" opacity=".7" />
    </g>
  );
}

/** A white envelope seen from the front (closed flap as a V), top-left (x, y). */
function Envelope({ x, y, w, h, fill = PAL.white, shade = PAL.paperShade, depth = PAL.mist, rot = 0, children }: {
  x: number; y: number; w: number; h: number; fill?: string; shade?: string; depth?: string; rot?: number; children?: ReactNode;
}) {
  return (
    <g transform={rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined}>
      <rect x={x} y={y + 3.5} width={w} height={h} rx="4" fill={depth} />
      <Shade color={shade} opacity={1} at={[x + w + 4, y + h / 2, w * 0.18, h]}>
        <rect x={x} y={y} width={w} height={h} rx="4" fill={fill} />
      </Shade>
      <path d={`M${x + 3} ${y + 3}L${x + w / 2} ${y + h * 0.56}L${x + w - 3} ${y + 3}`} fill="none" stroke={shade} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      {children}
    </g>
  );
}

/** A cast head on custom clothes, in the kit's 120 x 134 bust box. */
function Person({ who, torso, x = 60, y = 110, scale = 0.7, expr = 'neutral', bold = false, flip = false }: {
  who: CharacterId; torso: ReactNode; x?: number; y?: number; scale?: number; expr?: Expr; bold?: boolean; flip?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale}) translate(-60 -134)`}>
      {torso}
      <CastHead who={who} expr={expr} bold={bold} />
    </g>
  );
}

/** A wheel seen from the side. */
function Wheel({ cx, cy, r = 11 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={PAL.slateDark} />
      <circle cx={cx} cy={cy} r={r * 0.48} fill={PAL.mist} />
      <circle cx={cx} cy={cy} r={r * 0.18} fill={PAL.steel} />
    </g>
  );
}

/** A sun: yellow disc with orange rays. */
function Sun({ cx, cy, r = 14 }: { cx: number; cy: number; r?: number }) {
  const rays = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4;
    return `M${r1(cx + Math.cos(a) * r * 1.3)} ${r1(cy + Math.sin(a) * r * 1.3)}L${r1(cx + Math.cos(a) * r * 1.65)} ${r1(cy + Math.sin(a) * r * 1.65)}`;
  });
  return (
    <g>
      <path d={rays.join('')} stroke={PAL.orange} strokeWidth={Math.max(2.6, r * 0.2)} strokeLinecap="round" />
      <Shade color={PAL.yellowShade} opacity={0.9} at={[cx + r, cy + r * 0.4, r * 0.55, r * 1.2]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      </Shade>
    </g>
  );
}

/** A six-armed "star of life" (as on Dutch ambulances), centred on (cx, cy). */
function StarOfLife({ cx, cy, r, color = PAL.blue }: { cx: number; cy: number; r: number; color?: string }) {
  return (
    <g fill={color}>
      {[0, 60, 120].map((a) => (
        <rect key={a} x={cx - r * 0.3} y={cy - r} width={r * 0.6} height={r * 2} rx={r * 0.12} transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
      <path d={`M${cx} ${cy + r * 0.62}V${cy - r * 0.62}`} stroke={PAL.white} strokeWidth={Math.max(1.4, r * 0.14)} strokeLinecap="round" />
    </g>
  );
}

export default {
  // "het salaris": the salary — a work briefcase with banknotes sticking out of it and a coin:
  // the money your job brings in (cf. "het loon": the pay packet)
  'w.salaris': () => (
    <g>
      <Ground cx={58} cy={106} rx={44} ry={4.5} />
      {/* Notes behind the case, sticking out at the top */}
      <Note x={26} y={30} w={52} h={28} color={PAL.green} shade={PAL.greenShade} rot={-12} />
      <Note x={44} y={26} w={52} h={28} color={PAL.orange} shade={PAL.orangeShade} rot={8} />
      {/* Briefcase */}
      <path d="M46 52V44Q46 39 51 39H69Q74 39 74 44V52" fill="none" stroke={PAL.brown} strokeWidth="5.5" strokeLinecap="round" />
      <rect x="16" y="55" width="88" height="50" rx="7" fill={PAL.brown} />
      <Shade color="#4f2d17" opacity={1} at={[110, 80, 16, 40]}>
        <rect x="16" y="52" width="88" height="50" rx="7" fill={PAL.wood} />
      </Shade>
      <path d="M16 68H104" stroke={PAL.cardDark} strokeWidth="3" />
      <rect x="53" y="63" width="14" height="11" rx="2.5" fill={PAL.yellow} />
      <rect x="57.5" y="67" width="5" height="3.4" rx="1" fill={PAL.yellowShade} />
      <Shine d="M22 62Q22 57 27 57" width={3} opacity={0.5} />
      <Coin cx={92} cy={92} r={13} />
    </g>
  ),

  // "het loon": the pay, the wage — a brown pay envelope stuffed with banknotes, coins
  // stacked in front
  'w.loon': () => (
    <g>
      <Ground cx={56} cy={106} rx={44} ry={4.5} />
      {/* Notes in the envelope */}
      <Note x={22} y={24} w={52} h={30} color={PAL.sky} shade={PAL.skyShade} rot={-10} />
      <Note x={36} y={20} w={52} h={30} color={PAL.green} shade={PAL.greenShade} rot={6} />
      {/* Kraft envelope, open at the top */}
      <rect x="16" y="44" width="76" height="60" rx="5" fill={PAL.cardDark} />
      <Shade color={PAL.cardShade} opacity={1} at={[98, 74, 14, 40]}>
        <rect x="16" y="42" width="76" height="60" rx="5" fill={PAL.card} />
      </Shade>
      <path d="M16 44L54 66L92 44" fill="none" stroke={PAL.cardShade} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <Shine d="M22 54V50" width={3} opacity={0.5} />
      <CoinStack cx={94} base={106} n={4} rx={13} />
    </g>
  ),

  // "betalen": to pay — a bank card tapped on a pay terminal (euro on its screen), with the
  // contactless waves
  'w.betalen': () => (
    <g>
      <Ground cx={52} cy={106} rx={30} ry={4} />
      {/* Terminal */}
      <rect x="27" y="35" width="50" height="72" rx="10" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={1} at={[80, 70, 8, 40]}>
        <rect x="24" y="32" width="50" height="72" rx="10" fill={PAL.slate} />
      </Shade>
      <rect x="31" y="40" width="36" height="24" rx="4" fill="#e3f5ff" />
      <EuroSign cx={47} cy={52} s={7} color={PAL.blue} width={3.4} />
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
        <rect key={`${r}${c}`} x={33 + c * 11} y={70 + r * 9} width="8" height="5.5" rx="2" fill={r === 2 && c === 2 ? PAL.leaf : PAL.steel} />
      )))}
      <Shine d="M29 46Q29 38 36 37" width={3} opacity={0.35} />
      {/* Contactless waves */}
      <path d="M80 50Q85 56 80 62M86 46Q93 56 86 66" fill="none" stroke={PAL.sky} strokeWidth="3.6" strokeLinecap="round" />
      {/* Card */}
      <g transform="translate(-9 6) rotate(-24 98 40)">
        <rect x="76" y="27" width="44" height="28" rx="5" fill={PAL.navyShade} />
        <rect x="76" y="24" width="44" height="28" rx="5" fill={PAL.blue} />
        <rect x="82" y="31" width="10" height="8" rx="2" fill={PAL.yellow} />
        <path d="M82 46H100" stroke={PAL.blueLight} strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </g>
  ),

  // "roken": to smoke — a lit cigarette (orange filter, glowing tip) with curling smoke
  'w.roken': () => (
    <g>
      <g transform="rotate(-18 60 78)">
        {/* Body */}
        <rect x="14" y="74" width="80" height="15" rx="4" fill={PAL.paperShade} />
        <rect x="14" y="71" width="80" height="15" rx="4" fill={PAL.white} />
        <rect x="14" y="83" width="80" height="4" fill={PAL.paperShade} />
        {/* Filter */}
        <path d="M18 71H38V89H18Q14 89 14 85V75Q14 71 18 71Z" fill={PAL.orange} />
        <path d="M18 85H38V89H18Q14 89 14 85Z" fill={PAL.orangeShade} />
        <circle cx="24" cy="77" r="1.4" fill={PAL.orangeShade} />
        <circle cx="31" cy="80" r="1.4" fill={PAL.orangeShade} />
        {/* Ash and ember */}
        <rect x="88" y="71" width="10" height="17" rx="2" fill={PAL.steel} />
        <path d="M96 71H100Q104 71 104 75V84Q104 88 100 88H96Z" fill={PAL.red} />
        <path d="M98 74H101V85H98Z" fill={PAL.orangeLight} />
      </g>
      {/* Smoke */}
      <path d="M100 56Q90 46 100 36Q110 26 100 16" fill="none" stroke={PAL.steel} strokeWidth="6" strokeLinecap="round" opacity=".75" />
      <path d="M84 50Q78 42 84 34" fill="none" stroke={PAL.steel} strokeWidth="4.5" strokeLinecap="round" opacity=".55" />
    </g>
  ),

  // "verboden": not allowed, forbidden — the round red "forbidden" sign with the bar across
  'w.verboden': () => (
    <g>
      <circle cx="60" cy="63" r="44" fill={PAL.redShade} />
      <circle cx="60" cy="59" r="44" fill={PAL.red} />
      <circle cx="60" cy="59" r="32" fill={PAL.white} />
      <path d="M60 27A32 32 0 0 1 92 59A32 32 0 0 1 60 91Z" fill={PAL.paperShade} opacity=".7" />
      <path d="M37 36L83 82" stroke={PAL.red} strokeWidth="12" />
      <Shine d="M24 50A38 38 0 0 1 44 24" width={4} opacity={0.45} />
    </g>
  ),

  // "de alcohol": alcohol — a beer bottle and a glass of red wine
  'w.alcohol': () => (
    <g>
      <Ground cx={60} cy={106} rx={44} ry={4.5} />
      {/* Beer bottle */}
      <Shade color="#3d2412" opacity={1} at={[56, 70, 8, 50]}>
        <path d="M34 16H44V34Q54 42 54 54V100Q54 106 48 106H30Q24 106 24 100V54Q24 42 34 34Z" fill={PAL.brown} />
      </Shade>
      <rect x="32" y="12" width="14" height="7" rx="2" fill={PAL.yellow} />
      <rect x="24" y="62" width="30" height="24" fill={PAL.yellowLight} />
      <rect x="44" y="62" width="10" height="24" fill={PAL.yellowShade} opacity=".6" />
      <ellipse cx="39" cy="74" rx="8" ry="6" fill={PAL.red} />
      <Shine d="M29 52Q29 46 33 42" width={3.2} opacity={0.5} />
      {/* Wine glass */}
      <path d="M86 78V100" stroke={PAL.mist} strokeWidth="4.5" strokeLinecap="round" />
      <ellipse cx="86" cy="102" rx="14" ry="4" fill={PAL.mist} />
      <path d="M68 40H104Q104 78 86 80Q68 78 68 40Z" fill={PAL.ice} opacity=".55" />
      <path d="M69.5 56H102.5Q100 78 86 79Q72 78 69.5 56Z" fill={PAL.redShade} />
      <path d="M86 56H102.5Q100 78 86 79Z" fill="#8c2414" />
      <path d="M72 46Q72 54 74 60" fill="none" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" opacity=".8" />
    </g>
  ),

  // "het medicijn": the medicine — a blister strip of pills and a big red-and-white capsule
  'w.medicijn': () => (
    <g>
      {/* Blister strip */}
      <g transform="rotate(-14 52 52)">
        <rect x="14" y="22" width="74" height="54" rx="7" fill={PAL.steel} />
        <rect x="14" y="19" width="74" height="54" rx="7" fill={PAL.mist} />
        {[0, 1, 2].map((c) => [0, 1].map((r) => (
          <g key={`${c}${r}`}>
            <circle cx={30 + c * 21} cy={36 + r * 21} r="8.5" fill={PAL.paperShade} />
            <circle cx={29 + c * 21} cy={35 + r * 21} r="7" fill={PAL.white} />
          </g>
        )))}
        <Shine d="M19 34V28Q19 24 23 24" width={3} opacity={0.7} />
      </g>
      {/* Capsule */}
      <g transform="rotate(-38 76 82)">
        <rect x="50" y="72" width="54" height="22" rx="11" fill={PAL.paperShade} />
        <rect x="50" y="70" width="54" height="22" rx="11" fill={PAL.white} />
        <path d="M77 70H61A11 11 0 0 0 61 92H77Z" fill={PAL.red} />
        <path d="M77 86H55A11 11 0 0 0 61 92H77Z" fill={PAL.redShade} />
        <path d="M77 86H99A11 11 0 0 1 93 92H77Z" fill={PAL.paperShade} />
        <Shine d="M58 76H70" width={3} opacity={0.6} />
      </g>
    </g>
  ),

  // "de koffie": coffee — a coffee jug pouring a brown stream into a cup on a saucer
  'w.koffie': () => (
    <g>
      <Ground cx={70} cy={107} rx={34} ry={4} />
      {/* Stream */}
      <path d="M48 40Q62 44 66 70" fill="none" stroke={PAL.brown} strokeWidth="5" strokeLinecap="round" />
      {/* Jug, tilted */}
      <g transform="rotate(-38 30 34)">
        <path d="M14 20H46L44 52Q44 56 40 56H20Q16 56 16 52Z" fill={PAL.ice} opacity=".6" />
        <path d="M15 34H45L44 52Q44 56 40 56H20Q16 56 16 52Z" fill={PAL.brown} />
        <rect x="12" y="14" width="36" height="9" rx="3" fill={PAL.slate} />
        <path d="M46 24Q58 26 56 38Q55 46 45 46" fill="none" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
        <Shine d="M20 26V48" width={2.8} opacity={0.6} />
      </g>
      {/* Saucer and cup */}
      <ellipse cx="70" cy="102" rx="34" ry="7" fill={PAL.steel} />
      <ellipse cx="70" cy="99" rx="34" ry="7" fill={PAL.white} />
      <path d="M96 78Q110 78 108 88Q106 96 94 94" fill="none" stroke={PAL.paperShade} strokeWidth="5" strokeLinecap="round" />
      <Shade color={PAL.paperShade} opacity={1} at={[104, 86, 14, 30]}>
        <path d="M44 72H96V84Q96 100 80 100H60Q44 100 44 84Z" fill={PAL.white} />
      </Shade>
      <ellipse cx="70" cy="72" rx="26" ry="6" fill={PAL.paperShade} />
      <ellipse cx="70" cy="73" rx="22" ry="4.4" fill={PAL.brown} />
      <Shine d="M50 80Q50 90 56 95" width={3} opacity={0.4} color={PAL.paperShade} />
    </g>
  ),

  // "het weer": the weather — sun, a cloud and rain together (what is it like outside?)
  'w.weer': () => (
    <g>
      <Sun cx={40} cy={40} r={20} />
      {/* Rain */}
      <path d="M50 88L46 98M66 88L62 98M82 88L78 98" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" />
      {/* Cloud */}
      <g>
        <path d="M38 84Q24 84 24 72Q24 60 38 60Q40 44 58 44Q74 44 78 56Q96 54 98 70Q98 84 84 84Z" fill={PAL.paperShade} transform="translate(0 3.5)" />
        <Shade color={PAL.paperShade} opacity={1} at={[104, 76, 18, 30]}>
          <path d="M38 84Q24 84 24 72Q24 60 38 60Q40 44 58 44Q74 44 78 56Q96 54 98 70Q98 84 84 84Z" fill={PAL.white} />
        </Shade>
        <Shine d="M32 68Q34 63 40 62" width={3} opacity={0.6} color={PAL.ice} />
      </g>
    </g>
  ),

  // "de verjaardag": the birthday — a cake with three lit candles
  'w.verjaardag': () => (
    <g>
      <Ground cx={60} cy={106} rx={46} ry={4.5} />
      <ellipse cx="60" cy="101" rx="46" ry="7" fill={PAL.steel} />
      <ellipse cx="60" cy="98" rx="46" ry="7" fill={PAL.white} />
      {/* Cake */}
      <Shade color={PAL.cardShade} opacity={1} at={[102, 80, 14, 30]}>
        <path d="M22 60H98V92Q98 98 60 98Q22 98 22 92Z" fill={PAL.card} />
      </Shade>
      <path d="M22 78Q60 84 98 78" fill="none" stroke={PAL.redLight} strokeWidth="4" />
      {/* Icing with drips */}
      <path d="M22 58Q22 52 60 52Q98 52 98 58V66Q94 72 90 66Q84 74 78 66Q70 74 62 66Q54 74 46 66Q38 74 32 66Q26 72 22 66Z" fill={PAL.white} />
      <ellipse cx="60" cy="56" rx="38" ry="5" fill={PAL.paper} />
      <path d="M86 58Q94 60 96 64" fill="none" stroke={PAL.paperShade} strokeWidth="3" strokeLinecap="round" />
      {/* Candles */}
      {[[40, PAL.sky], [60, PAL.red], [80, PAL.leaf]].map(([x, c]) => (
        <g key={x as number}>
          <rect x={(x as number) - 3.5} y="30" width="7" height="26" rx="2" fill={c as string} />
          <path d={`M${x} 16Q${(x as number) + 6} 24 ${x} 28Q${(x as number) - 6} 24 ${x} 16Z`} fill={PAL.orange} />
          <path d={`M${x} 21Q${(x as number) + 3} 25 ${x} 27Q${(x as number) - 3} 25 ${x} 21Z`} fill={PAL.yellow} />
        </g>
      ))}
    </g>
  ),

  // "gefeliciteerd": congratulations — a party popper bursting with confetti and streamers
  'w.gefeliciteerd': () => (
    <g>
      {/* Confetti */}
      <Sparkle x={70} y={20} r={8} />
      <Sparkle x={100} y={56} r={7} color={PAL.sky} />
      <Sparkle x={40} y={30} r={6} color={PAL.leaf} />
      <rect x="84" y="24" width="8" height="5" rx="1.5" fill={PAL.red} transform="rotate(30 88 26)" />
      <rect x="54" y="38" width="8" height="5" rx="1.5" fill={PAL.sky} transform="rotate(-20 58 40)" />
      <rect x="92" y="80" width="8" height="5" rx="1.5" fill={PAL.purple} transform="rotate(50 96 82)" />
      <circle cx="82" cy="46" r="3.6" fill={PAL.orange} />
      <circle cx="24" cy="44" r="3.2" fill={PAL.red} />
      <circle cx="104" cy="34" r="3" fill={PAL.leaf} />
      {/* Streamers */}
      <path d="M54 62Q50 48 60 44Q70 40 66 28" fill="none" stroke={PAL.purple} strokeWidth="4" strokeLinecap="round" />
      <path d="M60 68Q72 56 82 64Q92 72 102 66" fill="none" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" />
      <path d="M58 64Q74 42 90 40" fill="none" stroke={PAL.yellow} strokeWidth="4" strokeLinecap="round" />
      {/* Popper cone */}
      <g transform="rotate(45 38 82)">
        <path d="M24 64H52L42 108Q38 112 34 108Z" fill={PAL.sky} />
        <path d="M26 74H50M29 86H47M32 98H44" stroke={PAL.yellow} strokeWidth="5" />
        <path d="M44 64H52L42 108Q40 110 38 110Z" fill={PAL.skyShade} opacity=".6" />
        <ellipse cx="38" cy="64" rx="14" ry="4.5" fill={PAL.yellowShade} />
      </g>
    </g>
  ),

  // "de vakantiedagen": the days off — a calendar page with a whole row of days marked, and
  // a beach umbrella in front
  'w.vakantiedagen': () => (
    <g>
      {/* Calendar */}
      <rect x="12" y="20" width="80" height="76" rx="8" fill={PAL.paperShade} />
      <rect x="12" y="16" width="80" height="76" rx="8" fill={PAL.white} />
      <path d="M12 24A8 8 0 0 1 20 16H84A8 8 0 0 1 92 24V32H12Z" fill={PAL.red} />
      <rect x="28" y="10" width="6" height="13" rx="3" fill={PAL.slate} />
      <rect x="70" y="10" width="6" height="13" rx="3" fill={PAL.slate} />
      {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => (r === 1 ? null : (
        <rect key={`${r}${c}`} x={20 + c * 17} y={40 + r * 17} width="12" height="10" rx="2" fill={PAL.mist} />
      ))))}
      {/* Marked days: a whole row */}
      <rect x="17" y="54" width="70" height="16" rx="8" fill={PAL.yellow} />
      {[0, 1, 2, 3].map((c) => <circle key={c} cx={26 + c * 17} cy={62} r="3" fill={PAL.yellowShade} />)}
      {/* Beach umbrella */}
      <path d="M96 52L90 108" stroke={PAL.wood} strokeWidth="4" strokeLinecap="round" />
      <path d="M70 58Q76 34 100 36Q120 40 116 64Q110 56 104 60Q98 52 90 56Q84 50 78 56Q74 54 70 58Z" fill={PAL.orange} />
      <path d="M90 56Q92 40 100 36Q102 46 104 60Q98 52 90 56Z" fill={PAL.white} />
      <path d="M100 36Q112 42 116 64Q110 56 104 60Z" fill={PAL.orangeShade} />
      <ellipse cx="90" cy="108" rx="16" ry="3.5" fill={PAL.yellowLight} />
    </g>
  ),

  // "de politie": the police — a Dutch police car: white, with blue and red-orange stripes and
  // a blue light on the roof
  'w.politie': () => (
    <g>
      <Ground cx={60} cy={102} rx={50} ry={4.5} />
      {/* Light bar and flashes */}
      <Motion x={56} y={30} dir={-90} spread={120} n={5} len={8} gap={14} color={PAL.sky} width={3.6} />
      <rect x="46" y="28" width="22" height="8" rx="3" fill={PAL.blue} />
      <rect x="57" y="28" width="11" height="8" rx="3" fill={PAL.blueShade} />
      {/* Body */}
      <path d="M30 40Q34 34 42 34H76Q84 34 90 42L98 56H108Q112 56 112 62V86Q112 92 106 92H14Q8 92 8 86V64Q8 58 14 58H22Z" fill={PAL.mist} transform="translate(0 3)" />
      <Shade color={PAL.paperShade} opacity={1} at={[118, 80, 20, 30]}>
        <path d="M30 40Q34 34 42 34H76Q84 34 90 42L98 56H108Q112 56 112 62V86Q112 92 106 92H14Q8 92 8 86V64Q8 58 14 58H22Z" fill={PAL.white} />
      </Shade>
      {/* Windows */}
      <path d="M33 56L38 43Q40 40 44 40H56V56Z" fill={PAL.slate} />
      <path d="M62 40H74Q80 40 84 45L92 56H62Z" fill={PAL.slate} />
      <path d="M40 46L44 42" stroke={PAL.steel} strokeWidth="2.4" strokeLinecap="round" />
      {/* Stripes */}
      <path d="M8 66H112V76H8Z" fill={PAL.blue} />
      <path d="M8 76H112V81H8Z" fill={PAL.red} />
      {/* Bumper lamp */}
      <rect x="104" y="60" width="7" height="5" rx="2" fill={PAL.yellowLight} />
      <Wheel cx={32} cy={92} r={12} />
      <Wheel cx={88} cy={92} r={12} />
    </g>
  ),

  // "de hulp": the help — a red-and-white life ring (help for someone in trouble)
  'w.hulp': () => {
    const cx = 60;
    const cy = 58;
    const seg = (a0: number, a1: number) => {
      const p = (r: number, a: number) => `${r1(cx + Math.cos((a * Math.PI) / 180) * r)} ${r1(cy + Math.sin((a * Math.PI) / 180) * r)}`;
      return `M${p(44, a0)}A44 44 0 0 1 ${p(44, a1)}L${p(22, a1)}A22 22 0 0 0 ${p(22, a0)}Z`;
    };
    const ring = `M${cx - 44} ${cy}A44 44 0 1 0 ${cx + 44} ${cy}A44 44 0 1 0 ${cx - 44} ${cy}ZM${cx - 22} ${cy}A22 22 0 1 1 ${cx + 22} ${cy}A22 22 0 1 1 ${cx - 22} ${cy}Z`;
    return (
      <g>
        {/* Rope */}
        <path d="M24 40Q6 58 22 84M96 76Q114 58 98 32M78 22Q60 6 40 20M40 98Q60 112 82 96" fill="none" stroke={PAL.card} strokeWidth="3.6" strokeLinecap="round" />
        <path d={ring} fill={PAL.redShade} fillRule="evenodd" transform="translate(0 4)" />
        <path d={ring} fill={PAL.red} fillRule="evenodd" />
        {[-70, 20, 110, 200].map((a) => <path key={a} d={seg(a, a + 40)} fill={PAL.white} />)}
        <path d={seg(20, 60)} fill={PAL.paperShade} />
        <Shine d="M24 44A40 40 0 0 1 40 24" width={4} opacity={0.5} />
      </g>
    );
  },

  // "het gevaar": the danger — the Dutch road sign for danger: a white triangle with a red
  // border and a black exclamation mark (cf. "pas op": a yellow warning sign)
  'w.gevaar': () => (
    <g>
      <Ground cx={60} cy={106} rx={20} ry={3.5} />
      <rect x="56" y="80" width="8" height="26" rx="3" fill={PAL.steel} />
      <path d="M60 16L106 88H14Z" fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="10" strokeLinejoin="round" transform="translate(0 4)" />
      <path d="M60 16L106 88H14Z" fill={PAL.red} stroke={PAL.red} strokeWidth="10" strokeLinejoin="round" />
      <path d="M60 36L88 80H32Z" fill={PAL.white} stroke={PAL.white} strokeWidth="4" strokeLinejoin="round" />
      <path d="M60 50V66" stroke={PAL.ink} strokeWidth="7" strokeLinecap="round" />
      <circle cx="60" cy="75" r="4" fill={PAL.ink} />
      <Shine d="M50 28L32 58" width={3.6} opacity={0.4} />
    </g>
  ),

  // "bang": afraid — Bram with wide eyes, worried brows and clenched teeth, hands up in
  // front of him, shaking (tremble lines) and sweating
  'w.bang': () => (
    <g>
      <Bust who="bram" x={60} y={126} scale={0.8} expr="disappointed" />
      <path d="M16 40Q11 50 16 60M8 34Q1 50 8 66M104 40Q109 50 104 60M112 34Q119 50 112 66" fill="none" stroke={PAL.line} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M90 22Q96 31 96 35A6 6 0 0 1 84 35Q84 31 90 22Z" fill={PAL.ice} />
      <Hand pose="open" x={28} y={118} rotate={14} scale={0.66} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
      <Hand pose="open" x={92} y={118} rotate={-14} scale={0.66} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} mirror />
    </g>
  ),

  // "het telefoontje": the phone call — Bram on the phone, phone at his ear, talking
  'w.telefoontje': () => (
    <g>
      <Bust who="bram" x={44} y={122} scale={0.74} expr="pleased" />
      {/* Phone held to the ear */}
      <g transform="rotate(14 66 66)">
        <rect x="58" y="46" width="15" height="32" rx="4" fill={PAL.slateDark} />
        <rect x="56" y="44" width="15" height="32" rx="4" fill={PAL.slate} />
      </g>
      <Hand pose="fist" x={70} y={96} rotate={-10} scale={0.6} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
      <Bubble x={74} y={12} w={38} h={26} tail="left">
        <Dots cx={93} cy={25} gap={9} r={3.2} color={PAL.sky} />
      </Bubble>
      <path d="M86 52Q92 58 86 64M92 48Q100 58 92 68" fill="none" stroke={PAL.sky} strokeWidth="3.2" strokeLinecap="round" />
    </g>
  ),

  // "kijken": to look, to check — a big pair of eyes, looking to the side
  'w.kijken': () => (
    <g>
      {[36, 84].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy={64} rx="22" ry="30" fill={PAL.mist} />
          <Shade color={PAL.paperShade} opacity={1} at={[cx + 26, 66, 12, 34]}>
            <ellipse cx={cx} cy={60} rx="22" ry="30" fill={PAL.white} />
          </Shade>
          <circle cx={cx + 9} cy={62} r="12" fill={PAL.brown} />
          <circle cx={cx + 10} cy={62} r="7" fill={PAL.ink} />
          <circle cx={cx + 6} cy={57} r="3.2" fill={PAL.white} />
        </g>
      ))}
      <Shine d="M20 50Q22 40 30 36" width={3} opacity={0.9} color={PAL.ice} />
    </g>
  ),

  // "het diploma": the diploma — a rolled-up certificate tied with a red ribbon and a
  // graduation cap
  'w.diploma': () => (
    <g>
      <Ground cx={62} cy={106} rx={44} ry={4} />
      {/* Scroll */}
      <g transform="rotate(-20 62 80)">
        <rect x="16" y="70" width="92" height="22" rx="11" fill={PAL.paperShade} />
        <rect x="16" y="68" width="92" height="22" rx="11" fill={PAL.paper} />
        <rect x="16" y="82" width="92" height="8" rx="4" fill={PAL.paperShade} />
        <ellipse cx="104" cy="79" rx="6" ry="11" fill={PAL.mist} />
        <ellipse cx="104" cy="79" rx="2.6" ry="5" fill={PAL.steel} />
        {/* Ribbon */}
        <rect x="56" y="66" width="10" height="26" fill={PAL.red} />
        <path d="M60 90L52 106L58 103L61 108L64 92Z" fill={PAL.redShade} />
        <path d="M62 90L70 104L64 102L62 108Z" fill={PAL.red} />
      </g>
      {/* Graduation cap */}
      <path d="M30 34V46Q46 56 62 46V34Z" fill={PAL.slate} />
      <path d="M8 30L46 16L84 30L46 44Z" fill={PAL.slateDark} stroke={PAL.slateDark} strokeWidth="3" strokeLinejoin="round" />
      <path d="M8 28L46 14L84 28L46 42Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="46" cy="28" r="3" fill={PAL.yellow} />
      <path d="M46 28L74 36V50" fill="none" stroke={PAL.yellow} strokeWidth="2.6" strokeLinecap="round" />
      <rect x="71" y="48" width="6" height="10" rx="2" fill={PAL.yellowShade} />
    </g>
  ),

  // "de huisarts": the family doctor (GP) — Amina in a white coat with a stethoscope, next to
  // a small house: the doctor in your own neighbourhood (cf. de bedrijfsarts, Henk with a
  // hard hat on his clipboard)
  'w.huisarts': () => (
    <g>
      {/* House */}
      <Ground cx={94} cy={106} rx={18} ry={3.5} />
      <rect x="78" y="72" width="32" height="34" rx="2" fill={PAL.cardShade} />
      <rect x="78" y="72" width="26" height="34" rx="2" fill="#f0c48a" />
      <path d="M74 74L94 56L114 74Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="4" strokeLinejoin="round" />
      <path d="M94 56L114 74H104Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="4" strokeLinejoin="round" />
      <rect x="88" y="88" width="11" height="18" rx="2" fill={PAL.green} />
      <rect x="82" y="78" width="9" height="8" rx="1.5" fill={PAL.ice} />
      {/* Doctor */}
      <Person
        who="amina"
        x={46}
        y={110}
        scale={0.7}
        expr="neutral"
        torso={
          <>
            <path d="M14 152C14 108 34 95 60 95C86 95 106 108 106 152Z" fill={PAL.paper} />
            <path d="M14 152C14 114 24 101 38 97L48 152Z" fill={PAL.paperShade} opacity=".7" />
            <path d="M86 100C99 108 106 124 106 152H86C88 132 88 114 86 100Z" fill={PAL.mist} />
            <path d="M46 96L60 130L74 96Z" fill={PAL.sky} />
            <path d="M44 97L58 152M76 97L62 152" stroke={PAL.mist} strokeWidth="3.4" strokeLinecap="round" />
            <path d="M38 104Q24 128 40 140M82 104Q96 118 86 130" fill="none" stroke={PAL.slate} strokeWidth="6.5" strokeLinecap="round" />
            <circle cx="86" cy="134" r="10" fill={PAL.steel} />
            <circle cx="86" cy="134" r="5" fill={PAL.mist} />
            <circle cx="40" cy="141" r="4.5" fill={PAL.slate} />
          </>
        }
      />
    </g>
  ),

  // "de ambulance": the ambulance — a Dutch yellow ambulance with the blue-and-yellow check
  // band, a blue light on the roof and the blue star of life
  'w.ambulance': () => (
    <g>
      <Ground cx={60} cy={102} rx={50} ry={4.5} />
      <Motion x={36} y={28} dir={-90} spread={120} n={5} len={8} gap={12} color={PAL.sky} width={3.6} />
      <rect x="28" y="24" width="18" height="8" rx="3" fill={PAL.blue} />
      {/* Body: box at the back (left), cab at the front (right) */}
      <path d="M14 30H78Q82 30 82 34V46H96Q100 46 103 50L110 62Q112 65 112 69V86Q112 92 106 92H14Q8 92 8 86V36Q8 30 14 30Z" fill={PAL.yellowShade} transform="translate(0 3)" />
      <Shade color={PAL.yellowShade} opacity={1} at={[120, 80, 18, 34]}>
        <path d="M14 30H78Q82 30 82 34V46H96Q100 46 103 50L110 62Q112 65 112 69V86Q112 92 106 92H14Q8 92 8 86V36Q8 30 14 30Z" fill={PAL.yellow} />
      </Shade>
      {/* Cab window */}
      <path d="M86 52H96Q99 52 101 55L106 64H86Z" fill={PAL.slate} />
      {/* Check band */}
      {Array.from({ length: 13 }, (_, i) => (
        <rect key={i} x={8 + i * 8} y={i % 2 ? 72 : 66} width="8" height="6" fill={PAL.blue} />
      ))}
      {Array.from({ length: 13 }, (_, i) => (
        <rect key={`b${i}`} x={8 + i * 8} y={i % 2 ? 66 : 72} width="8" height="6" fill={PAL.yellowLight} />
      ))}
      {/* Star of life */}
      <circle cx="40" cy="48" r="13" fill={PAL.white} />
      <StarOfLife cx={40} cy={48} r={10} />
      <Shine d="M13 44V38Q13 35 16 35" width={3} opacity={0.6} color={PAL.yellowShine} />
      <Wheel cx={30} cy={92} r={12} />
      <Wheel cx={90} cy={92} r={12} />
    </g>
  ),

  // "de brief": the letter — an opened envelope with the letter (a page of text) coming out
  'w.brief': () => (
    <g>
      {/* Back of the envelope and open flap */}
      <path d="M14 56L60 26L106 56Z" fill={PAL.paperShade} stroke={PAL.paperShade} strokeWidth="4" strokeLinejoin="round" />
      <rect x="14" y="54" width="92" height="50" rx="4" fill={PAL.mist} />
      {/* Letter */}
      <rect x="26" y="20" width="68" height="64" rx="4" fill={PAL.paperShade} />
      <rect x="25" y="18" width="66" height="64" rx="4" fill={PAL.white} />
      <rect x="32" y="26" width="18" height="7" rx="2" fill={PAL.navy} />
      <path d="M32 42H82M32 50H78M32 58H82M32 66H70" stroke={PAL.line} strokeWidth="3.2" strokeLinecap="round" />
      {/* Front of the envelope */}
      <path d="M14 60L60 86L106 60V100Q106 106 100 106H20Q14 106 14 100Z" fill={PAL.paperShade} transform="translate(0 2)" />
      <Shade color={PAL.paperShade} opacity={1} at={[112, 90, 14, 30]}>
        <path d="M14 60L60 86L106 60V100Q106 104 100 104H20Q14 104 14 100Z" fill={PAL.paper} />
      </Shade>
      <path d="M16 102L52 80M104 102L68 80" stroke={PAL.paperShade} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),

  // "de post": the mail — the orange street post box with letters going into its slot
  'w.post': () => (
    <g>
      <Ground cx={52} cy={106} rx={30} ry={4} />
      <rect x="46" y="84" width="12" height="22" rx="2" fill={PAL.slate} />
      {/* Box */}
      <rect x="22" y="36" width="64" height="54" rx="8" fill={PAL.orangeShade} transform="translate(2 3)" />
      <Shade color={PAL.orangeShade} opacity={1} at={[92, 64, 12, 40]}>
        <rect x="22" y="36" width="64" height="54" rx="8" fill={PAL.orange} />
      </Shade>
      <path d="M22 44Q22 26 54 26Q86 26 86 44Z" fill={PAL.orangeShade} />
      <path d="M26 42Q28 30 54 30Q80 30 82 42Z" fill={PAL.orange} />
      <rect x="32" y="50" width="44" height="7" rx="3.5" fill={PAL.slateDark} />
      <rect x="40" y="66" width="28" height="14" rx="3" fill={PAL.orangeLight} />
      <path d="M44 73H64" stroke={PAL.orangeShade} strokeWidth="2.4" strokeLinecap="round" />
      <Shine d="M27 50V60" width={3} opacity={0.5} />
      {/* Letters */}
      <Envelope x={46} y={30} w={34} h={22} rot={-28} />
      <Envelope x={78} y={14} w={30} h={20} rot={-16} />
    </g>
  ),

  // "de link": the link — the chain-link symbol, a finger tapping it
  'w.link': () => (
    <g>
      <g transform="translate(2 -8) rotate(-45 54 50)">
        <rect x="12" y="38" width="48" height="26" rx="13" fill="none" stroke={PAL.skyShade} strokeWidth="9" transform="translate(1.5 3)" />
        <rect x="48" y="38" width="48" height="26" rx="13" fill="none" stroke={PAL.skyShade} strokeWidth="9" transform="translate(1.5 3)" />
        <rect x="12" y="38" width="48" height="26" rx="13" fill="none" stroke={PAL.sky} strokeWidth="9" />
        <rect x="48" y="38" width="48" height="26" rx="13" fill="none" stroke={PAL.blueLight} strokeWidth="9" />
        <path d="M52 38.5H48A13 13 0 0 0 48 38.5" stroke={PAL.sky} strokeWidth="9" />
      </g>
      <Hand pose="point" x={90} y={112} rotate={-40} scale={0.85} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
