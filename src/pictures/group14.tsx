import type { JSX, ReactNode } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import type { Expr } from '../components/Faces';
import { Arrow, Box, Bust, Cross, CurveArrow, Ground, Hand, Motion, PAL, QuestionMark, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/** Word pictures, group 14 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

const r1 = (n: number) => Math.round(n * 10) / 10;

/** Digits (and '-') drawn as round strokes, top-left (x, y), `h` tall. */
function Digits({ x, y, h, text, color, width }: { x: number; y: number; h: number; text: string; color: string; width?: number }) {
  const W = h * 0.52;
  const H = h;
  const glyph = (c: string): ReactNode => {
    switch (c) {
      case '0':
        return <rect x={0} y={0} width={W} height={H} rx={W / 2} fill="none" />;
      case '1':
        return <path d={`M${r1(W * 0.15)} ${r1(H * 0.22)}L${r1(W * 0.6)} 0V${H}`} fill="none" />;
      case '2':
        return <path d={`M0 ${r1(H * 0.24)}Q0 0 ${r1(W / 2)} 0Q${W} 0 ${W} ${r1(H * 0.27)}Q${W} ${r1(H * 0.45)} ${r1(W * 0.6)} ${r1(H * 0.6)}L0 ${H}H${W}`} fill="none" />;
      case '3':
        return <path d={`M0 ${r1(H * 0.12)}Q${r1(W * 0.3)} 0 ${r1(W * 0.55)} 0Q${W} 0 ${W} ${r1(H * 0.25)}Q${W} ${r1(H * 0.47)} ${r1(W * 0.35)} ${r1(H * 0.47)}Q${W} ${r1(H * 0.47)} ${W} ${r1(H * 0.74)}Q${W} ${H} ${r1(W * 0.5)} ${H}Q${r1(W * 0.2)} ${H} 0 ${r1(H * 0.88)}`} fill="none" />;
      case '4':
        return <path d={`M${r1(W * 0.75)} ${H}V0L0 ${r1(H * 0.66)}H${W}`} fill="none" />;
      case '5':
        return <path d={`M${W} 0H${r1(W * 0.08)}L0 ${r1(H * 0.45)}Q${r1(W * 0.3)} ${r1(H * 0.38)} ${r1(W * 0.5)} ${r1(H * 0.38)}Q${W} ${r1(H * 0.38)} ${W} ${r1(H * 0.7)}Q${W} ${H} ${r1(W * 0.45)} ${H}Q${r1(W * 0.15)} ${H} 0 ${r1(H * 0.88)}`} fill="none" />;
      case '6':
        return (
          <g fill="none">
            <ellipse cx={W / 2} cy={H * 0.69} rx={W / 2} ry={H * 0.31} />
            <path d={`M${r1(W * 0.85)} 0Q0 ${r1(H * 0.15)} 0 ${r1(H * 0.69)}`} />
          </g>
        );
      case '7':
        return <path d={`M0 0H${W}L${r1(W * 0.3)} ${H}`} fill="none" />;
      case '8':
        return (
          <g fill="none">
            <ellipse cx={W / 2} cy={H * 0.25} rx={W * 0.42} ry={H * 0.25} />
            <ellipse cx={W / 2} cy={H * 0.72} rx={W / 2} ry={H * 0.28} />
          </g>
        );
      case '9':
        return (
          <g fill="none">
            <ellipse cx={W / 2} cy={H * 0.31} rx={W / 2} ry={H * 0.31} />
            <path d={`M${W} ${r1(H * 0.31)}Q${W} ${r1(H * 0.85)} ${r1(W * 0.15)} ${H}`} />
          </g>
        );
      case '-':
        return <path d={`M${r1(W * 0.1)} ${r1(H / 2)}H${r1(W * 0.9)}`} fill="none" />;
      default:
        return null;
    }
  };
  const step = W + h * 0.32;
  return (
    <g stroke={color} strokeWidth={width ?? Math.max(1.6, h * 0.16)} strokeLinecap="round" strokeLinejoin="round">
      {[...text].map((c, i) => (
        <g key={i} transform={`translate(${r1(x + i * step)} ${y})`}>
          {glyph(c)}
        </g>
      ))}
    </g>
  );
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

/** A bike or wheelchair wheel: dark tyre, steel rim, spokes and hub, centred on (cx, cy). */
function Wheel({ cx, cy, r, tyre = PAL.slate, spokes = 6, width }: { cx: number; cy: number; r: number; tyre?: string; spokes?: number; width?: number }) {
  const tw = width ?? Math.max(4, r * 0.2);
  const d = Array.from({ length: spokes }, (_, k) => {
    const a = (k * Math.PI) / spokes;
    const rr = r - tw / 2;
    return `M${r1(cx - Math.cos(a) * rr)} ${r1(cy - Math.sin(a) * rr)}L${r1(cx + Math.cos(a) * rr)} ${r1(cy + Math.sin(a) * rr)}`;
  }).join('');
  return (
    <g>
      <path d={d} stroke={PAL.mist} strokeWidth="1.4" />
      <circle cx={cx} cy={cy} r={r - tw * 0.55} fill="none" stroke={PAL.steel} strokeWidth="2" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={tyre} strokeWidth={tw} />
      <circle cx={cx} cy={cy} r={Math.max(2.6, r * 0.13)} fill={PAL.steel} />
    </g>
  );
}

/** A cast head on custom clothes (the 120 x 134 bust box, like the kit's Bust). */
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

/** Henk as an older client: a soft cardigan over a light shirt. */
const CARDIGAN = (color: string, shade: string): ReactNode => (
  <>
    <path d="M18 134C18 104 35 92 60 92C85 92 102 104 102 134Z" fill={color} />
    <path d="M50 92L60 116L70 92Z" fill={PAL.paper} />
    <path d="M50 92L60 116L70 92" fill="none" stroke={shade} strokeWidth="3" strokeLinejoin="round" />
    <path d="M60 116V134" stroke={shade} strokeWidth="2.4" />
    <circle cx="64" cy="124" r="2.6" fill={shade} />
    <path d="M86 102C95 108 102 118 102 134H86Z" fill={shade} opacity=".6" />
  </>
);

/** A white plate seen a little from above, centred on (cx, cy). */
function Plate({ cx, cy, rx = 18 }: { cx: number; cy: number; rx?: number }) {
  const ry = rx * 0.5;
  return (
    <g>
      <ellipse cx={cx} cy={cy + 3} rx={rx} ry={ry} fill={PAL.steel} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={PAL.white} />
      <ellipse cx={cx} cy={cy + 0.8} rx={rx * 0.72} ry={ry * 0.68} fill={PAL.paperShade} />
    </g>
  );
}

export default {
  // "de fiets": the bike — a Dutch city bike seen from the side: upright handlebar, step-through
  // frame, chain guard, mudguards and a rack on the back
  'w.fiets': () => (
    <g>
      <Ground cx={60} cy={104} rx={50} ry={4} />
      <Wheel cx={29} cy={80} r={21} />
      <Wheel cx={91} cy={80} r={21} />
      {/* Mudguards */}
      <path d="M8 76A21 21 0 0 1 44 64M76 64A21 21 0 0 1 112 76" fill="none" stroke={PAL.blueShade} strokeWidth="3.4" strokeLinecap="round" />
      {/* Rack */}
      <path d="M14 54H48M18 54L29 80" stroke={PAL.slate} strokeWidth="3.4" strokeLinecap="round" />
      {/* Frame: chain stay, seat stay, seat tube, step-through tubes, fork */}
      <path d="M29 80L58 82L50 46M29 80L49 52" fill="none" stroke={PAL.blue} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 82Q66 60 84 52M55 72Q66 54 83 46" fill="none" stroke={PAL.blue} strokeWidth="5" strokeLinecap="round" />
      <path d="M83 44L91 80" stroke={PAL.blueShade} strokeWidth="5" strokeLinecap="round" />
      {/* Chain guard */}
      <path d="M26 76H58Q64 80 58 86H26Q22 81 26 76Z" fill={PAL.slateDark} />
      <circle cx="58" cy="82" r="5" fill={PAL.slate} />
      {/* Stem, handlebar and grip */}
      <path d="M83 46L80 32Q74 28 66 32" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M68 31L60 34" stroke={PAL.ink} strokeWidth="6" strokeLinecap="round" />
      {/* Saddle and post */}
      <path d="M50 46L49 40" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M38 38Q46 34 56 37Q56 41 49 41Q42 42 38 38Z" fill={PAL.brown} />
      {/* Front lamp */}
      <rect x="86" y="46" width="9" height="7" rx="2.4" fill={PAL.slate} />
      <circle cx="95" cy="49.5" r="2.6" fill={PAL.yellow} />
      <Shine d="M54 75Q60 62 72 56" width={2} opacity={0.5} />
    </g>
  ),

  // "het slot": the bike lock — a heavy U-lock clamped through a bike wheel, the key still in it
  'w.slot': () => (
    <g>
      <Ground cx={60} cy={106} rx={46} ry={4} />
      {/* Back leg of the shackle, behind the wheel */}
      <path d="M68 86V44" stroke={PAL.yellowShade} strokeWidth="11" strokeLinecap="round" />
      <Wheel cx={42} cy={64} r={38} spokes={8} width={8} />
      {/* Front of the shackle */}
      <path d="M68 50A14 14 0 0 1 96 50V86" fill="none" stroke={PAL.yellow} strokeWidth="11" strokeLinecap="round" />
      <path d="M71 47A11 11 0 0 1 82 37" fill="none" stroke={PAL.yellowShine} strokeWidth="3" strokeLinecap="round" opacity=".9" />
      {/* Lock body (cross bar) */}
      <rect x="56" y="80" width="54" height="17" rx="8.5" fill={PAL.slateDark} transform="translate(1.5 2.5)" />
      <rect x="56" y="80" width="54" height="17" rx="8.5" fill={PAL.slate} />
      <Shine d="M62 84H96" width={2.6} opacity={0.35} />
      {/* Key */}
      <circle cx="83" cy="88.5" r="3.2" fill={PAL.slateDark} />
      <rect x="81" y="88" width="4" height="10" rx="1.5" fill={PAL.mist} />
      <circle cx="83" cy="103" r="6" fill={PAL.mist} />
      <circle cx="83" cy="103" r="2.2" fill={PAL.slate} />
    </g>
  ),

  // "het stoplicht": the traffic light — a black traffic light on a pole, the red light on
  'w.stoplicht': () => (
    <g>
      <Ground cx={60} cy={106} rx={20} ry={4} />
      <rect x="56" y="84" width="8" height="22" rx="3" fill={PAL.steel} />
      <rect x="40" y="10" width="40" height="80" rx="11" fill={PAL.slateDark} transform="translate(2.5 3)" />
      <Shade color={PAL.slateDark} opacity={1} at={[84, 50, 8, 44]}>
        <rect x="40" y="10" width="40" height="80" rx="11" fill={PAL.slate} />
      </Shade>
      {/* Red, on: with a glow */}
      <circle cx="60" cy="27" r="16" fill={PAL.red} opacity=".25" />
      <circle cx="60" cy="27" r="11" fill={PAL.red} />
      <Shine d="M53.5 25A7 7 0 0 1 58 20.5" width={2.6} opacity={0.75} />
      {/* Amber and green, off */}
      <circle cx="60" cy="50" r="11" fill={PAL.yellowShade} opacity=".35" />
      <circle cx="60" cy="73" r="11" fill={PAL.ok} opacity=".45" />
      {/* Visors */}
      <path d="M48 20A13 13 0 0 1 72 20M48 43A13 13 0 0 1 72 43M48 66A13 13 0 0 1 72 66" fill="none" stroke={PAL.slateDark} strokeWidth="3.4" strokeLinecap="round" />
      <Motion x={60} y={27} dir={180} spread={70} n={3} len={6} gap={20} color={PAL.red} width={3} />
      <Motion x={60} y={27} dir={0} spread={70} n={3} len={6} gap={20} color={PAL.red} width={3} />
    </g>
  ),

  // "de bus": the bus — a city bus from the side, big front window, doors, route number on top
  'w.bus': () => (
    <g>
      <Ground cx={60} cy={104} rx={52} ry={4} />
      <rect x="30" y="20" width="58" height="10" rx="4" fill={PAL.mist} />
      <rect x="8" y="27" width="104" height="66" rx="11" fill={PAL.redShade} transform="translate(0 2)" />
      <Shade color={PAL.redShade} opacity={1} at={[60, 98, 70, 14]}>
        <rect x="8" y="27" width="104" height="66" rx="11" fill={PAL.red} />
      </Shade>
      {/* Front window and route display */}
      <path d="M10 44Q10 36 18 36H26V72H10Z" fill={PAL.ice} />
      <rect x="12" y="30" width="22" height="5" rx="2" fill={PAL.slateDark} />
      <Digits x={16} y={30.6} h={3.8} text="12" color={PAL.yellowLight} width={1.3} />
      {/* Door */}
      <rect x="30" y="38" width="16" height="52" rx="2.5" fill={PAL.slate} />
      <rect x="32" y="40" width="5.4" height="46" rx="1.6" fill={PAL.ice} />
      <rect x="38.6" y="40" width="5.4" height="46" rx="1.6" fill={PAL.ice} />
      {/* Side windows */}
      <rect x="50" y="38" width="58" height="26" rx="4" fill={PAL.ice} />
      <path d="M70 38V64M90 38V64" stroke={PAL.red} strokeWidth="3" />
      <Shine d="M54 42L60 42" width={2.4} opacity={0.8} />
      {/* Stripe, headlight */}
      <rect x="50" y="70" width="60" height="5" rx="2.5" fill={PAL.white} opacity=".85" />
      <rect x="9" y="78" width="8" height="6" rx="2.4" fill={PAL.yellowLight} />
      {/* Wheels */}
      <circle cx="30" cy="93" r="12" fill={PAL.redShade} />
      <circle cx="90" cy="93" r="12" fill={PAL.redShade} />
      <circle cx="30" cy="94" r="10" fill={PAL.ink} />
      <circle cx="90" cy="94" r="10" fill={PAL.ink} />
      <circle cx="30" cy="94" r="4" fill={PAL.steel} />
      <circle cx="90" cy="94" r="4" fill={PAL.steel} />
    </g>
  ),

  // "de trein": the train — a yellow Dutch train on the rails, with its pantograph on the overhead wire
  'w.trein': () => (
    <g>
      {/* Overhead wire and pantograph */}
      <path d="M8 13H112" stroke={PAL.steel} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M64 31L76 22L66 14M58 14H74" fill="none" stroke={PAL.slate} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* Body */}
      <path d="M12 86L16 52Q20 33 40 31H110V86Z" fill={PAL.yellowShade} transform="translate(0 2)" />
      <Shade color={PAL.yellowShade} opacity={1} at={[60, 92, 70, 12]}>
        <path d="M12 86L16 52Q20 33 40 31H110V86Z" fill={PAL.yellow} />
      </Shade>
      {/* Windscreen, side windows, door */}
      <path d="M16 52Q19 39 34 37V56H15.4Z" fill={PAL.slateDark} />
      <rect x="40" y="40" width="20" height="16" rx="3" fill={PAL.slateDark} />
      <rect x="84" y="40" width="22" height="16" rx="3" fill={PAL.slateDark} />
      <rect x="64" y="38" width="16" height="44" rx="2" fill={PAL.yellowShade} />
      <rect x="66.5" y="41" width="11" height="15" rx="2" fill={PAL.slateDark} />
      {/* Blue band and red front */}
      <rect x="40" y="64" width="70" height="7" fill={PAL.blue} />
      <path d="M13.6 72L14.5 64H34V72Z" fill={PAL.red} />
      <rect x="18" y="66" width="7" height="4" rx="2" fill={PAL.white} />
      <Shine d="M22 44Q26 38 32 37" width={2.4} opacity={0.4} />
      {/* Bogies and rails */}
      <rect x="22" y="86" width="24" height="7" rx="3" fill={PAL.slate} />
      <rect x="80" y="86" width="24" height="7" rx="3" fill={PAL.slate} />
      <circle cx="28" cy="94" r="5" fill={PAL.slateDark} />
      <circle cx="40" cy="94" r="5" fill={PAL.slateDark} />
      <circle cx="86" cy="94" r="5" fill={PAL.slateDark} />
      <circle cx="98" cy="94" r="5" fill={PAL.slateDark} />
      <path d="M14 104V100M30 104V100M46 104V100M62 104V100M78 104V100M94 104V100M110 104V100" stroke={PAL.wood} strokeWidth="5" strokeLinecap="round" />
      <path d="M6 99.5H114" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
    </g>
  ),

  // "zoeken": to look for — a big magnifying glass sweeps around, a question mark in the lens
  'w.zoeken': () => (
    <g>
      <path d="M20 96Q10 74 22 54" fill="none" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" strokeDasharray="1 9" />
      <Motion x={52} y={48} dir={200} spread={50} n={3} len={8} gap={38} color={PAL.line} width={3.4} />
      {/* Handle */}
      <path d="M73 69L98 96" stroke={PAL.slate} strokeWidth="9" strokeLinecap="round" />
      <path d="M80 77L100 98" stroke={PAL.ink} strokeWidth="13" strokeLinecap="round" />
      {/* Lens and rim */}
      <circle cx="54" cy="50" r="28" fill="#e3f5ff" />
      <circle cx="54" cy="50" r="28" fill="none" stroke={PAL.slate} strokeWidth="8" />
      <QuestionMark x={54} y={51} size={34} color={PAL.sky} />
      <Shine d="M36 44A19 19 0 0 1 48 31" width={4} opacity={0.9} />
    </g>
  ),

  // "bewaren": to keep (papers) — a sheet goes into the open drawer of a filing cabinet, with the
  // other papers in their folders
  'w.bewaren': () => (
    <g>
      <Ground cx={60} cy={106} rx={42} ry={4} />
      {/* Cabinet */}
      <Shade color={PAL.steel} opacity={1} at={[100, 80, 12, 40]}>
        <rect x="26" y="50" width="68" height="56" rx="4" fill={PAL.mist} />
      </Shade>
      {/* Folders standing in the open top drawer */}
      <rect x="30" y="48" width="18" height="18" rx="2" fill={PAL.sky} />
      <rect x="50" y="46" width="18" height="20" rx="2" fill={PAL.green} />
      <rect x="70" y="48" width="18" height="18" rx="2" fill={PAL.yellow} />
      {/* Drawer fronts */}
      <rect x="22" y="62" width="76" height="18" rx="3" fill={PAL.steel} transform="translate(0 2.5)" />
      <rect x="22" y="62" width="76" height="18" rx="3" fill={PAL.paper} />
      <rect x="50" y="68" width="20" height="5" rx="2.5" fill={PAL.slate} />
      <rect x="30" y="86" width="60" height="14" rx="3" fill={PAL.paperShade} />
      <rect x="50" y="91" width="20" height="4.4" rx="2.2" fill={PAL.steel} />
      {/* The sheet going in */}
      <g transform="rotate(-6 58 26)">
        <rect x="40" y="8" width="34" height="40" rx="3" fill={PAL.paperShade} transform="translate(2 2)" />
        <rect x="40" y="8" width="34" height="40" rx="3" fill={PAL.white} />
        <path d="M46 16H66M46 23H68M46 30H62" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      </g>
      <Arrow from={[94, 12]} to={[94, 42]} color={PAL.sky} width={6} head={10} />
    </g>
  ),

  // "gratis": free — a price tag that says €0, with sparkles: it costs nothing
  'w.gratis': () => (
    <g>
      <g transform="rotate(-14 60 62)">
        <path d="M16 62L36 34H100Q106 34 106 40V84Q106 90 100 90H36Z" fill={PAL.leafShade} stroke={PAL.leafShade} strokeWidth="6" strokeLinejoin="round" transform="translate(0 4)" />
        <path d="M16 62L36 34H100Q106 34 106 40V84Q106 90 100 90H36Z" fill={PAL.leaf} stroke={PAL.leaf} strokeWidth="6" strokeLinejoin="round" />
        <circle cx="32" cy="62" r="5" fill={PAL.white} />
        <EuroSign cx={56} cy={62} s={11} color={PAL.white} width={5} />
        <Digits x={74} y={46} h={32} text="0" color={PAL.white} width={6} />
        <Shine d="M40 40H62" width={3} opacity={0.6} />
      </g>
      <path d="M32 58Q20 40 30 22" fill="none" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      <Sparkle x={98} y={22} r={9} />
      <Sparkle x={104} y={98} r={6} />
    </g>
  ),

  // "de ladder": the ladder — an orange ladder leaning against a wall
  'w.ladder': () => (
    <g>
      <Ground cx={58} cy={106} rx={40} ry={4} />
      {/* Wall */}
      <rect x="92" y="8" width="18" height="98" rx="2" fill={PAL.clay} />
      <rect x="104" y="8" width="6" height="98" fill={PAL.clayShade} />
      <path d="M92 26H110M92 46H110M92 66H110M92 86H110M100 8V26M100 46V66M104 26V46M104 66V86" stroke={PAL.clayShade} strokeWidth="1.6" />
      {/* Rails and rungs */}
      <path d="M33 101L48 41M38 42L62 49M33 56L57 63" stroke="none" />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const t = (i + 0.6) / 6.4;
        const ax = 26 + (68 - 26) * t;
        const ay = 102 - 90 * t;
        return <path key={i} d={`M${r1(ax)} ${r1(ay)}H${r1(ax + 24)}`} stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />;
      })}
      <path d="M26 102L68 12" stroke={PAL.orange} strokeWidth="7" strokeLinecap="round" />
      <path d="M50 102L92 12" stroke={PAL.orangeShade} strokeWidth="7" strokeLinecap="round" />
      <rect x="20" y="99" width="12" height="7" rx="3" fill={PAL.ink} />
      <rect x="44" y="99" width="12" height="7" rx="3" fill={PAL.ink} />
    </g>
  ),

  // "de hamer": the hammer — a claw hammer about to hit a nail into a plank
  'w.hamer': () => (
    <g>
      <Ground cx={60} cy={106} rx={46} ry={4} />
      {/* Plank and nail */}
      <rect x="14" y="90" width="92" height="14" rx="3" fill={PAL.cardDark} />
      <rect x="14" y="88" width="92" height="11" rx="3" fill={PAL.card} />
      <rect x="31" y="74" width="4" height="16" rx="1.5" fill={PAL.steel} />
      <rect x="27" y="72" width="12" height="4" rx="2" fill={PAL.slate} />
      <Motion x={33} y={66} dir={-90} spread={110} n={3} len={6} gap={10} color={PAL.orange} width={3.2} />
      {/* Hammer */}
      <g transform="rotate(-30 70 50)">
        <rect x="64" y="38" width="12" height="62" rx="5" fill={PAL.wood} />
        <rect x="64" y="70" width="12" height="30" rx="5" fill={PAL.ink} />
        <path d="M71 42V66" stroke={PAL.card} strokeWidth="2.4" strokeLinecap="round" />
        {/* Head: striking face (left), claw (right) */}
        <rect x="38" y="24" width="12" height="22" rx="3" fill={PAL.slate} />
        <Shade color={PAL.slate} opacity={0.6} at={[80, 50, 30, 8]}>
          <path d="M46 26H80Q96 28 104 42Q90 36 80 40H46Z" fill={PAL.steel} />
        </Shade>
        <path d="M80 40Q92 37 104 42" fill="none" stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" />
        <Shine d="M50 29H74" width={2.6} opacity={0.6} />
      </g>
    </g>
  ),

  // "het gat": the hole — a deep hole in the ground on the building site, red-and-white tape
  // round it
  'w.gat': () => (
    <g>
      <ellipse cx="60" cy="80" rx="54" ry="26" fill={PAL.card} />
      <ellipse cx="60" cy="84" rx="54" ry="24" fill={PAL.cardShade} opacity=".35" />
      {/* The hole: far wall, then the dark depth */}
      <ellipse cx="60" cy="80" rx="36" ry="15" fill={PAL.cardDark} />
      <ellipse cx="60" cy="86" rx="32" ry="10" fill={PAL.ink} />
      <path d="M30 76Q44 68 60 67" fill="none" stroke={PAL.brown} strokeWidth="2.4" strokeLinecap="round" opacity=".6" />
      {/* Posts and tape behind */}
      <rect x="16" y="28" width="6" height="52" rx="3" fill={PAL.slate} />
      <rect x="98" y="28" width="6" height="52" rx="3" fill={PAL.slate} />
      <path d="M19 38L101 38" stroke={PAL.red} strokeWidth="7" />
      <path d="M19 38L101 38" stroke={PAL.white} strokeWidth="7" strokeDasharray="8 8" strokeDashoffset="4" />
      <ExclaimBadge />
    </g>
  ),

  // "afkeuren": to reject — the product gets a red cross and a thumbs down: it is not good
  'w.afkeuren': () => (
    <g>
      <Ground cx={46} cy={106} rx={34} ry={4} />
      {/* Product box (blue retail box with label) */}
      <path d="M20 46L30 38H70L60 46Z" fill={PAL.blueLight} />
      <path d="M60 46L70 38V96L60 104Z" fill={PAL.blueShade} />
      <rect x="20" y="46" width="40" height="58" rx="2" fill={PAL.blue} />
      <rect x="26" y="76" width="28" height="18" rx="2" fill={PAL.white} />
      <path d="M30 81V89M33 81V89M37 81V89M40 81V89M44 81V89M48 81V89M50 81V89" stroke={PAL.ink} strokeWidth="1.6" />
      <circle cx="40" cy="60" r="7" fill={PAL.yellow} />
      <Cross x={56} y={40} r={16} />
      {/* Thumbs down */}
      <Hand pose="thumb" x={94} y={34} rotate={180} scale={0.92} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),

  // "het etiket": the label — a big sticky label being peeled off its backing sheet by a hand
  'w.etiket': () => (
    <g>
      {/* Backing sheet with the next label */}
      <rect x="14" y="58" width="70" height="50" rx="4" fill={PAL.yellowShade} />
      <rect x="14" y="56" width="70" height="50" rx="4" fill={PAL.yellowLight} />
      <rect x="22" y="80" width="54" height="22" rx="3" fill={PAL.white} />
      <path d="M28 86H58M28 92H50" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      {/* The label being peeled off */}
      <g transform="rotate(-12 60 40)">
        <rect x="26" y="20" width="62" height="38" rx="4" fill={PAL.paperShade} transform="translate(2 3)" />
        <rect x="26" y="20" width="62" height="38" rx="4" fill={PAL.white} />
        <rect x="26" y="20" width="62" height="10" rx="4" fill={PAL.sky} />
        <rect x="26" y="26" width="62" height="4" fill={PAL.sky} />
        <path d="M32 38H62M32 45H54" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M66 36V52M69 36V52M73 36V52M75.5 36V52M79 36V52M82 36V52" stroke={PAL.ink} strokeWidth="1.6" />
        {/* Curled corner */}
        <path d="M88 46V54Q88 58 84 58H78Q86 54 88 46Z" fill={PAL.paperShade} />
      </g>
      <Hand pose="hold" x={106} y={70} rotate={-60} scale={0.66} skin={SKIN.jada} sleeve={[PAL.slate, PAL.slateDark]} />
    </g>
  ),

  // "de lijst": the list — a clipboard with a checklist: boxes and lines, the first two ticked
  'w.lijst': () => (
    <g>
      <rect x="22" y="14" width="76" height="94" rx="7" fill={PAL.cardDark} transform="translate(2 3)" />
      <rect x="22" y="14" width="76" height="94" rx="7" fill={PAL.card} />
      <rect x="29" y="22" width="62" height="80" rx="3" fill={PAL.paperShade} transform="translate(0 2)" />
      <rect x="29" y="22" width="62" height="80" rx="3" fill={PAL.white} />
      <rect x="44" y="9" width="32" height="13" rx="4" fill={PAL.steel} />
      <rect x="50" y="6" width="20" height="8" rx="4" fill={PAL.slate} />
      {[0, 1, 2, 3].map((i) => {
        const y = 34 + i * 17;
        const done = i < 2;
        return (
          <g key={i}>
            <rect x="35" y={y} width="11" height="11" rx="2.4" fill={done ? PAL.ok : PAL.white} stroke={done ? PAL.ok : PAL.line} strokeWidth="2" />
            {done && <path d={`M37.5 ${y + 5.5}L40 ${y + 8}L44 ${y + 3}`} fill="none" stroke={PAL.white} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />}
            <path d={`M52 ${y + 5.5}H${[82, 76, 84, 72][i]}`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
          </g>
        );
      })}
    </g>
  ),

  // "de cliënt": the client — an older man in his armchair; the carer's hand rests on his shoulder
  'w.client': () => (
    <g>
      {/* Armchair back */}
      <path d="M18 112V50Q18 26 42 26H78Q102 26 102 50V112Z" fill={PAL.greenShade} />
      <path d="M24 112V52Q24 32 44 32H76Q96 32 96 52V112Z" fill={PAL.green} />
      <Person who="henk" x={60} y={124} scale={0.74} expr="pleased" torso={CARDIGAN(PAL.purple, PAL.purpleShade)} />
      {/* Arm rests */}
      <rect x="8" y="88" width="20" height="26" rx="8" fill={PAL.greenShade} />
      <rect x="92" y="88" width="20" height="26" rx="8" fill={PAL.greenShade} />
      <Hand pose="open" x={102} y={60} rotate={150} scale={0.62} skin={SKIN.amina} sleeve={[PAL.sky, PAL.skyShade]} />
    </g>
  ),

  // "wassen": to wash (a client) — the carer washes Henk's arm with a soapy washcloth; a bowl of water
  'w.wassen': () => (
    <g>
      <Bust who="henk" x={42} y={118} scale={0.64} expr="pleased" />
      {/* Washcloth in the carer's hand, on his shoulder, with foam */}
      <Hand pose="hold" x={98} y={62} rotate={-70} scale={0.62} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
      <rect x="58" y="70" width="22" height="18" rx="5" fill={PAL.blue} transform="rotate(-14 69 79)" />
      <path d="M62 76H76M62 82H76" stroke={PAL.blueLight} strokeWidth="1.6" strokeLinecap="round" transform="rotate(-14 69 79)" />
      {[[60, 66, 4], [52, 72, 3], [70, 62, 3.4], [58, 58, 2.6]].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={PAL.white} stroke={PAL.ice} strokeWidth="1.4" />
      ))}
      {/* Wash bowl */}
      <path d="M74 96H112L106 110H80Z" fill={PAL.skyShade} />
      <ellipse cx="93" cy="96" rx="19" ry="4.6" fill={PAL.ice} />
      <circle cx="88" cy="94" r="2.4" fill={PAL.white} />
      <circle cx="96" cy="93" r="2" fill={PAL.white} />
    </g>
  ),

  // "het eten": the food — a hot plate of food: potatoes, vegetables and meat, steaming, with a
  // fork and knife
  'w.eten': () => (
    <g>
      <Ground cx={60} cy={96} rx={50} ry={6} />
      <path d="M44 34Q38 26 44 18M60 32Q54 24 60 14M76 34Q70 26 76 18" fill="none" stroke={PAL.mist} strokeWidth="3.6" strokeLinecap="round" />
      <ellipse cx="60" cy="74" rx="46" ry="22" fill={PAL.steel} />
      <ellipse cx="60" cy="70" rx="46" ry="22" fill={PAL.white} />
      <ellipse cx="60" cy="71" rx="34" ry="15" fill={PAL.paperShade} />
      {/* Potatoes */}
      <ellipse cx="42" cy="66" rx="9" ry="7" fill={PAL.yellowShade} />
      <ellipse cx="41" cy="65" rx="8" ry="6" fill={PAL.yellowLight} />
      <ellipse cx="52" cy="74" rx="9" ry="7" fill={PAL.yellowShade} />
      <ellipse cx="51" cy="73" rx="8" ry="6" fill={PAL.yellowLight} />
      {/* Meat */}
      <ellipse cx="74" cy="76" rx="13" ry="8" fill={PAL.brown} />
      <path d="M66 74Q74 70 82 74" fill="none" stroke={PAL.cardDark} strokeWidth="2" strokeLinecap="round" />
      {/* Vegetables (broccoli) */}
      <circle cx="68" cy="61" r="5" fill={PAL.green} />
      <circle cx="75" cy="59" r="5" fill={PAL.green} />
      <circle cx="80" cy="64" r="4.6" fill={PAL.greenShade} />
      <circle cx="61" cy="64" r="4.4" fill={PAL.greenShade} />
      {/* Fork and knife */}
      <path d="M10 60V92M6 60V68Q6 72 10 72Q14 72 14 68V60" fill="none" stroke={PAL.steel} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M110 92V60Q104 64 104 74H110" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),

  // "de rolstoel": the wheelchair — an empty wheelchair from the side
  'w.rolstoel': () => (
    <g>
      <Ground cx={58} cy={106} rx={46} ry={4} />
      {/* Frame */}
      <path d="M78 22H90M78 22V64H34L26 92M40 64L28 100M34 50H72" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M86 22H94" stroke={PAL.ink} strokeWidth="6" strokeLinecap="round" />
      {/* Back rest and seat */}
      <rect x="70" y="26" width="10" height="40" rx="4" fill={PAL.blue} />
      <rect x="32" y="58" width="48" height="10" rx="4" fill={PAL.blueShade} />
      <rect x="32" y="56" width="46" height="8" rx="4" fill={PAL.blue} />
      <rect x="40" y="46" width="34" height="6" rx="3" fill={PAL.slate} />
      {/* Footrest */}
      <rect x="16" y="90" width="18" height="5" rx="2.5" fill={PAL.slate} />
      {/* Big wheel and small front wheel */}
      <Wheel cx={66} cy={78} r={27} spokes={8} />
      <circle cx="66" cy="78" r="20" fill="none" stroke={PAL.mist} strokeWidth="2.4" />
      <circle cx="28" cy="100" r="6" fill={PAL.slate} />
      <circle cx="28" cy="100" r="2" fill={PAL.steel} />
    </g>
  ),

  // "de datum": the date — a food tub in the kitchen with a date sticker (a calendar and the date)
  'w.datum': () => (
    <g>
      <Ground cx={60} cy={106} rx={46} ry={4} />
      {/* Tub */}
      <path d="M16 46H104L98 104H22Z" fill={PAL.paperShade} />
      <path d="M78 46H104L98 104H80Z" fill={PAL.mist} />
      <rect x="12" y="38" width="96" height="12" rx="4" fill={PAL.skyShade} />
      <rect x="12" y="36" width="96" height="10" rx="4" fill={PAL.sky} />
      {/* Date sticker */}
      <rect x="22" y="54" width="76" height="40" rx="5" fill={PAL.steel} transform="translate(0 2.5)" />
      <rect x="22" y="54" width="76" height="40" rx="5" fill={PAL.white} />
      <rect x="28" y="60" width="24" height="28" rx="3" fill={PAL.paperShade} />
      <rect x="28" y="60" width="24" height="9" rx="3" fill={PAL.red} />
      <rect x="28" y="65" width="24" height="4" fill={PAL.red} />
      <circle cx="40" cy="78.5" r="5" fill={PAL.red} />
      <Digits x={57} y={62} h={11} text="18" color={PAL.ink} width={2.4} />
      <Digits x={57} y={77} h={11} text="06" color={PAL.ink} width={2.4} />
      <path d="M78 64V74M78 79V89" stroke="none" />
    </g>
  ),

  // "de rekening": the bill — the restaurant bill in its folder: a receipt with the dishes and
  // the total in euros, on a small plate with a mint
  'w.rekening': () => (
    <g>
      <Ground cx={60} cy={104} rx={48} ry={5} />
      {/* Bill folder */}
      <rect x="20" y="26" width="80" height="78" rx="6" fill={PAL.slateDark} transform="rotate(8 60 66)" />
      <rect x="20" y="24" width="80" height="78" rx="6" fill={PAL.slate} transform="rotate(8 60 66)" />
      {/* Receipt */}
      <g transform="rotate(-4 60 60)">
        <path d="M34 10H86V96L81 92L76 96L71 92L66 96L61 92L56 96L51 92L46 96L41 92L34 96Z" fill={PAL.paperShade} transform="translate(2 3)" />
        <path d="M34 10H86V96L81 92L76 96L71 92L66 96L61 92L56 96L51 92L46 96L41 92L34 96Z" fill={PAL.white} />
        {/* Fork and knife logo */}
        <path d="M54 16V28M51 16V20Q51 23 54 23Q57 23 57 20V16M66 16Q69 18 69 23H67V28" fill="none" stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {[36, 45, 54].map((y) => (
          <g key={y}>
            <path d={`M41 ${y}H62`} stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
            <path d={`M70 ${y}H79`} stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
          </g>
        ))}
        <path d="M40 63H80" stroke={PAL.mist} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 3" />
        <EuroSign cx={50} cy={77} s={8} color={PAL.ink} width={3} />
        <path d="M62 77H80" stroke={PAL.ink} strokeWidth="4" strokeLinecap="round" />
      </g>
    </g>
  ),

  // "de emmer": the bucket — a blue plastic bucket with water and a handle
  'w.emmer': () => (
    <g>
      <Ground cx={60} cy={106} rx={36} ry={5} />
      {/* Handle */}
      <path d="M22 42Q22 8 60 8Q98 8 98 42" fill="none" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <rect x="50" y="4" width="20" height="8" rx="4" fill={PAL.slate} />
      {/* Bucket */}
      <Shade color={PAL.skyShade} opacity={1} at={[96, 76, 14, 40]}>
        <path d="M18 42H102L92 100Q91 106 84 106H36Q29 106 28 100Z" fill={PAL.sky} />
      </Shade>
      <ellipse cx="60" cy="42" rx="44" ry="10" fill={PAL.skyShade} />
      <ellipse cx="60" cy="43" rx="38" ry="7" fill={PAL.ice} />
      <path d="M44 42Q50 40 56 42" fill="none" stroke={PAL.white} strokeWidth="2" strokeLinecap="round" opacity=".9" />
      <path d="M22 60H98" stroke={PAL.skyShade} strokeWidth="2.4" opacity=".6" />
      <Shine d="M30 54L36 92" width={4} opacity={0.5} />
      <circle cx="22" cy="44" r="4" fill={PAL.skyShade} />
      <circle cx="98" cy="44" r="4" fill={PAL.skyShade} />
    </g>
  ),

  // "het schoonmaakmiddel": the cleaning product — a spray bottle of cleaner, spraying, with sparkles
  'w.schoonmaakmiddel': () => (
    <g>
      <Ground cx={56} cy={106} rx={28} ry={4} />
      {/* Spray */}
      <circle cx="94" cy="24" r="2.6" fill={PAL.ice} />
      <circle cx="102" cy="32" r="2.6" fill={PAL.ice} />
      <circle cx="100" cy="18" r="2.2" fill={PAL.ice} />
      <circle cx="108" cy="24" r="2.2" fill={PAL.ice} />
      <circle cx="94" cy="36" r="2" fill={PAL.ice} />
      {/* Trigger head */}
      <path d="M40 30Q40 18 52 18H80Q86 18 86 24V28H72L70 36H44Z" fill={PAL.white} />
      <path d="M44 36H70L72 28H86V30Q86 34 82 34H74L72 40H44Z" fill={PAL.paperShade} />
      <path d="M54 30Q50 42 56 50" fill="none" stroke={PAL.mist} strokeWidth="6" strokeLinecap="round" />
      <rect x="84" y="21" width="6" height="7" rx="2" fill={PAL.slate} />
      <rect x="42" y="38" width="30" height="8" rx="2" fill={PAL.mist} />
      {/* Bottle */}
      <Shade color={PAL.leafShade} opacity={1} at={[86, 80, 12, 34]}>
        <path d="M44 46H70Q74 54 80 62V100Q80 106 74 106H40Q34 106 34 100V62Q40 54 44 46Z" fill={PAL.leaf} />
      </Shade>
      <rect x="40" y="70" width="34" height="24" rx="3" fill={PAL.white} />
      <circle cx="50" cy="82" r="4.4" fill="none" stroke={PAL.sky} strokeWidth="2" />
      <circle cx="60" cy="78" r="3" fill="none" stroke={PAL.sky} strokeWidth="2" />
      <circle cx="62" cy="87" r="2.6" fill="none" stroke={PAL.sky} strokeWidth="2" />
      <Shine d="M39 64V96" width={3} opacity={0.5} />
      <Sparkle x={100} y={58} r={7} color={PAL.ice} />
      <Sparkle x={18} y={40} r={6} color={PAL.yellow} />
    </g>
  ),

  // "de prullenbak": the bin — a pedal bin with its lid open, paper and rubbish going in
  'w.prullenbak': () => (
    <g>
      <Ground cx={58} cy={106} rx={34} ry={5} />
      {/* Lid, open */}
      <path d="M30 40Q28 18 50 14L84 8Q88 8 86 12L36 42Z" fill={PAL.slate} />
      {/* Body */}
      <Shade color={PAL.slateDark} opacity={0.5} at={[96, 80, 14, 40]}>
        <path d="M28 44H90L86 100Q86 106 80 106H38Q32 106 32 100Z" fill={PAL.steel} />
      </Shade>
      {/* Bin bag folded over the rim */}
      <rect x="26" y="40" width="66" height="12" rx="4" fill={PAL.slateDark} />
      {/* Rubbish sticking out */}
      <circle cx="48" cy="38" r="8" fill={PAL.white} />
      <path d="M44 34L50 38L46 42" fill="none" stroke={PAL.mist} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M58 40Q62 28 74 30Q70 36 68 42Z" fill={PAL.yellow} />
      {/* Paper ball falling in */}
      <circle cx="96" cy="22" r="8" fill={PAL.white} />
      <path d="M92 18L98 22L93 26" fill="none" stroke={PAL.mist} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M90 34L82 42" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" strokeDasharray="2 5" />
      {/* Pedal */}
      <rect x="42" y="100" width="20" height="6" rx="3" fill={PAL.slate} />
      <Shine d="M38 54L41 94" width={3.4} opacity={0.5} />
    </g>
  ),

  // "de bel": the bike bell — a big round bell clamped on the handlebar, its lever flicked,
  // ringing loudly
  'w.bel': () => (
    <g>
      {/* Handlebar with grip */}
      <path d="M6 92H96" stroke={PAL.steel} strokeWidth="9" strokeLinecap="round" />
      <path d="M90 92H112" stroke={PAL.ink} strokeWidth="13" strokeLinecap="round" />
      <rect x="44" y="76" width="18" height="20" rx="4" fill={PAL.slate} />
      {/* Bell dome */}
      <ellipse cx="53" cy="74" rx="34" ry="8" fill={PAL.skyShade} />
      <Shade color={PAL.skyShade} opacity={1} at={[90, 54, 14, 30]}>
        <path d="M19 72Q19 34 53 34Q87 34 87 72Q87 76 53 76Q19 76 19 72Z" fill={PAL.sky} />
      </Shade>
      <circle cx="53" cy="33" r="5" fill={PAL.slate} />
      <Shine d="M28 62Q30 46 44 40" width={5} opacity={0.75} />
      {/* Lever, flicked */}
      <path d="M30 78L12 70" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <circle cx="11" cy="69" r="5" fill={PAL.slateDark} />
      {/* Ringing */}
      <path d="M94 44Q102 54 94 64M101 36Q114 54 101 72" fill="none" stroke={PAL.orange} strokeWidth="4" strokeLinecap="round" />
      <path d="M14 46Q8 40 12 30M24 34Q22 24 28 18" fill="none" stroke={PAL.orange} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),

  // "aankleden": helping someone get dressed — the carer holds the coat open, Henk already has
  // one arm in; the arrow shows the coat going round his shoulders
  'w.aankleden': () => (
    <g>
      <Person
        who="henk"
        x={46}
        y={122}
        scale={0.7}
        expr="pleased"
        torso={(
          <>
            <path d="M18 134C18 104 35 92 60 92C85 92 102 104 102 134Z" fill={PAL.paper} />
            <path d="M86 102C95 108 102 118 102 134H86Z" fill={PAL.paperShade} />
            {/* Coat on his right side (viewer's left), with its collar */}
            <path d="M18 134C18 104 35 92 54 92L60 134Z" fill={PAL.orange} />
            <path d="M54 92L60 110L56 134" fill="none" stroke={PAL.orangeShade} strokeWidth="5" strokeLinecap="round" />
            <circle cx="49" cy="114" r="3.4" fill={PAL.orangeShade} />
            <circle cx="49" cy="127" r="3.4" fill={PAL.orangeShade} />
          </>
        )}
      />
      {/* Other half of the coat, held up: front panel and empty sleeve */}
      <path d="M96 52L110 60L112 110H100Z" fill={PAL.orangeShade} />
      <path d="M74 60Q84 50 98 52L104 110H78Q78 86 74 60Z" fill={PAL.orange} />
      <path d="M76 62Q84 54 96 54" fill="none" stroke={PAL.orangeShade} strokeWidth="4" strokeLinecap="round" />
      <Hand pose="hold" x={112} y={74} rotate={-20} scale={0.6} skin={SKIN.amina} sleeve={[PAL.sky, PAL.skyShade]} mirror />
      <CurveArrow from={[92, 36]} to={[66, 56]} bend={14} color={PAL.sky} width={6} head={10} />
    </g>
  ),

  // "de pincode": the PIN — a payment keypad with the code hidden as four stars; a hand
  // covers the keys while typing
  'w.pincode': () => (
    <g>
      <rect x="24" y="8" width="64" height="100" rx="10" fill={PAL.slateDark} transform="translate(3 3)" />
      <rect x="24" y="8" width="64" height="100" rx="10" fill={PAL.slate} />
      <rect x="30" y="15" width="52" height="20" rx="4" fill="#e3f5ff" />
      {[38, 50, 62, 74].map((cx) => (
        <path key={cx} d={`M${cx} 19.5V30.5M${cx - 4.8} 22.2L${cx + 4.8} 27.8M${cx - 4.8} 27.8L${cx + 4.8} 22.2`} stroke={PAL.ink} strokeWidth="2.4" strokeLinecap="round" />
      ))}
      {['123', '456', '789', '-0-'].flatMap((row, r) => [...row].map((c, k) => {
        const x = 31 + k * 17;
        const y = 41 + r * 16;
        const fill = r === 3 && k === 0 ? PAL.red : r === 3 && k === 2 ? PAL.ok : PAL.mist;
        return (
          <g key={`${r}${k}`}>
            <rect x={x} y={y} width="14" height="12" rx="3" fill={fill} />
            {c !== '-' && <Digits x={x + 5} y={y + 3} h={6} text={c} color={PAL.slate} width={1.5} />}
          </g>
        );
      }))}
      {/* Shielding hand over the keys */}
      <Hand pose="open" x={118} y={58} rotate={-100} scale={0.82} skin={SKIN.jada} sleeve={[PAL.purple, PAL.purpleShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;

/** A small yellow warning triangle (for the hole). */
function ExclaimBadge() {
  return (
    <g>
      <path d="M60 8L74 32H46Z" fill={PAL.yellowShade} stroke={PAL.yellowShade} strokeWidth="5" strokeLinejoin="round" transform="translate(0 2)" />
      <path d="M60 8L74 32H46Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="5" strokeLinejoin="round" />
      <path d="M60 15V24" stroke={PAL.ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="29" r="1.8" fill={PAL.ink} />
    </g>
  );
}
