import type { JSX, ReactNode } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import type { Expr } from '../components/Faces';
import { Arrow, Cross, Ground, Hand, Motion, PAL, QuestionMark, SKIN, Shade, Shine, Sparkle } from './kit';

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

  // "bewaren": to keep (papers) — a sheet goes into the open top drawer of a filing cabinet,
  // in between the other papers in their folders
  'w.bewaren': () => (
    <g>
      <Ground cx={60} cy={106} rx={40} ry={4} />
      {/* Cabinet */}
      <Shade color={PAL.slate} opacity={0.6} at={[100, 80, 12, 50]}>
        <rect x="28" y="36" width="64" height="70" rx="4" fill={PAL.steel} />
      </Shade>
      {/* Folders in the open top drawer, and the sheet going in */}
      <rect x="32" y="28" width="17" height="20" rx="2" fill={PAL.sky} />
      <rect x="71" y="28" width="17" height="20" rx="2" fill={PAL.yellow} />
      <g transform="rotate(-4 60 24)">
        <rect x="45" y="6" width="30" height="40" rx="3" fill={PAL.paperShade} transform="translate(2 2)" />
        <rect x="45" y="6" width="30" height="40" rx="3" fill={PAL.white} />
        <path d="M50 13H69M50 20H70M50 27H64" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      </g>
      <rect x="54" y="32" width="17" height="16" rx="2" fill={PAL.green} />
      {/* Drawer fronts: the top one pulled out */}
      <rect x="24" y="40" width="72" height="20" rx="3" fill={PAL.slate} transform="translate(0 3)" />
      <rect x="24" y="40" width="72" height="20" rx="3" fill={PAL.mist} />
      <rect x="50" y="47" width="20" height="5" rx="2.5" fill={PAL.slate} />
      <rect x="32" y="66" width="56" height="15" rx="3" fill={PAL.mist} />
      <rect x="50" y="71" width="20" height="4.4" rx="2.2" fill={PAL.slate} />
      <rect x="32" y="86" width="56" height="15" rx="3" fill={PAL.mist} />
      <rect x="50" y="91" width="20" height="4.4" rx="2.2" fill={PAL.slate} />
      <Arrow from={[104, 8]} to={[104, 40]} color={PAL.sky} width={6} head={10} />
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

  // "het gat": the hole — a deep hole dug in the ground on the building site, red-and-white
  // tape behind it
  'w.gat': () => (
    <g>
      {/* Posts and tape behind */}
      <rect x="16" y="22" width="6" height="56" rx="3" fill={PAL.slate} />
      <rect x="98" y="22" width="6" height="56" rx="3" fill={PAL.slate} />
      <path d="M19 32L101 32" stroke={PAL.red} strokeWidth="7" />
      <path d="M19 32L101 32" stroke={PAL.white} strokeWidth="7" strokeDasharray="8 8" strokeDashoffset="4" />
      {/* Ground */}
      <path d="M6 76Q18 60 50 62Q84 58 106 66Q118 80 106 96Q72 108 30 104Q2 94 6 76Z" fill={PAL.card} />
      <path d="M106 66Q118 80 106 96Q72 108 30 104Q14 100 8 90Q40 100 76 94Q104 88 106 66Z" fill={PAL.cardShade} />
      {/* Heap of dug-out earth */}
      <path d="M98 64L101 24" stroke={PAL.wood} strokeWidth="4.4" strokeLinecap="round" />
      <path d="M95 24H107" stroke={PAL.ink} strokeWidth="5" strokeLinecap="round" />
      <path d="M93 54H107L105 68Q100 74 95 68Z" fill={PAL.steel} />
      <path d="M80 72Q90 50 104 58Q114 64 112 76Z" fill={PAL.cardDark} />
      {/* The hole: far wall, then the dark depth */}
      <path d="M24 80Q26 68 54 67Q86 66 90 78Q92 92 60 94Q24 94 24 80Z" fill={PAL.cardDark} />
      <path d="M28 84Q34 76 58 76Q84 76 86 84Q84 92 60 93Q30 93 28 84Z" fill={PAL.ink} />
      <path d="M32 74Q44 68 58 68" fill="none" stroke={PAL.brown} strokeWidth="2.4" strokeLinecap="round" opacity=".7" />
    </g>
  ),

  // "afkeuren": to reject — the product gets a red cross and a thumbs down: it is not good
  'w.afkeuren': () => (
    <g>
      <Ground cx={42} cy={106} rx={30} ry={4} />
      {/* Product box (blue retail box with label) */}
      <path d="M16 46L26 38H66L56 46Z" fill={PAL.blueLight} />
      <path d="M56 46L66 38V96L56 104Z" fill={PAL.blueShade} />
      <rect x="16" y="46" width="40" height="58" rx="2" fill={PAL.blue} />
      <rect x="22" y="76" width="28" height="18" rx="2" fill={PAL.white} />
      <path d="M26 81V89M29 81V89M33 81V89M36 81V89M40 81V89M44 81V89M46 81V89" stroke={PAL.ink} strokeWidth="1.6" />
      <circle cx="36" cy="60" r="7" fill={PAL.yellow} />
      <Cross x={52} y={40} r={16} />
      {/* Thumbs down */}
      <Hand pose="thumb" x={92} y={18} rotate={180} scale={1.1} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),

  // "het etiket": the label — a big sticky label on a box, its corner peeled up by a finger
  'w.etiket': () => (
    <g>
      {/* Cardboard behind */}
      <rect x="6" y="14" width="108" height="92" rx="6" fill={PAL.card} />
      <path d="M6 96H114V100Q114 106 108 106H12Q6 106 6 100Z" fill={PAL.cardShade} />
      {/* The label, a bit crooked, its bottom-right corner peeled up */}
      <g transform="rotate(-8 60 56)">
        <path d="M20 30Q20 24 26 24H94Q100 24 100 30V68L84 84H26Q20 84 20 78Z" fill={PAL.cardDark} transform="translate(1 3)" />
        <path d="M20 30Q20 24 26 24H94Q100 24 100 30V68L84 84H26Q20 84 20 78Z" fill={PAL.white} />
        <path d="M20 30Q20 24 26 24H94Q100 24 100 30V36H20Z" fill={PAL.sky} />
        <path d="M28 46H62M28 55H56M28 64H50" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M68 44V70M72 44V70M77 44V70M80 44V70M85 44V64M89 44V64" stroke={PAL.ink} strokeWidth="2" />
        {/* Curl */}
        <path d="M100 68L84 84Q96 92 108 80Q104 76 100 68Z" fill={PAL.paperShade} />
      </g>
      <Hand pose="point" x={117} y={112} rotate={-28} scale={0.66} skin={SKIN.jada} sleeve={[PAL.slate, PAL.slateDark]} />
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
      <Hand pose="open" x={102} y={64} rotate={-150} scale={0.62} skin={SKIN.amina} sleeve={[PAL.sky, PAL.skyShade]} />
    </g>
  ),

  // "wassen": to wash (a client) — the carer washes Henk's face with a soapy washcloth; a bowl
  // of water in front
  'w.wassen': () => (
    <g>
      <Person who="henk" x={42} y={118} scale={0.64} expr="pleased" torso={CARDIGAN(PAL.purple, PAL.purpleShade)} />
      {/* Carer's hand with the washcloth, foam */}
      <Hand pose="hold" x={88} y={76} rotate={-70} scale={0.62} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
      <g transform="rotate(-14 72 70)">
        <rect x="60" y="60" width="24" height="20" rx="5" fill={PAL.blue} />
        <path d="M64 66H80M64 73H80" stroke={PAL.blueLight} strokeWidth="1.8" strokeLinecap="round" />
      </g>
      {[[58, 58, 6], [52, 68, 4.4], [64, 47, 4.6], [76, 50, 3.4], [50, 50, 3.2], [70, 38, 2.8]].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={PAL.white} stroke={PAL.ice} strokeWidth="1.6" />
      ))}
      {/* Wash bowl */}
      <path d="M72 96H112L106 110H78Z" fill={PAL.skyShade} />
      <ellipse cx="92" cy="96" rx="20" ry="4.6" fill={PAL.ice} />
      <circle cx="87" cy="94" r="2.4" fill={PAL.white} />
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
      <circle cx="96" cy="24" r="2.6" fill={PAL.sky} />
      <circle cx="104" cy="31" r="2.6" fill={PAL.sky} />
      <circle cx="102" cy="17" r="2.2" fill={PAL.sky} />
      <circle cx="110" cy="23" r="2.2" fill={PAL.sky} />
      <circle cx="96" cy="35" r="2" fill={PAL.sky} />
      {/* Trigger head */}
      <path d="M58 30Q54 42 60 50" fill="none" stroke={PAL.blueShade} strokeWidth="6" strokeLinecap="round" />
      <path d="M40 32Q40 18 54 18H82Q88 18 88 24V30H74L72 38H44Z" fill={PAL.blue} />
      <path d="M44 38H72L74 30H88Q88 34 84 34H76L74 42H44Z" fill={PAL.blueShade} />
      <rect x="86" y="21" width="6" height="7" rx="2" fill={PAL.slate} />
      <Shine d="M46 28Q47 23 53 22" width={2.6} opacity={0.6} />
      <rect x="42" y="40" width="30" height="8" rx="2" fill={PAL.slate} />
      {/* Bottle */}
      <Shade color={PAL.leafShade} opacity={1} at={[86, 80, 12, 34]}>
        <path d="M44 48H70Q74 56 80 64V100Q80 106 74 106H40Q34 106 34 100V64Q40 56 44 48Z" fill={PAL.leaf} />
      </Shade>
      <rect x="40" y="70" width="34" height="24" rx="3" fill={PAL.white} />
      <circle cx="50" cy="82" r="4.4" fill="none" stroke={PAL.sky} strokeWidth="2" />
      <circle cx="60" cy="78" r="3" fill="none" stroke={PAL.sky} strokeWidth="2" />
      <circle cx="62" cy="87" r="2.6" fill="none" stroke={PAL.sky} strokeWidth="2" />
      <Shine d="M39 66V96" width={3} opacity={0.5} />
      <Sparkle x={102} y={60} r={7} color={PAL.sky} />
      <Sparkle x={18} y={42} r={6} color={PAL.yellow} />
    </g>
  ),

  // "de prullenbak": the bin — a pedal bin with its lid up, rubbish in it, a paper ball
  // going in
  'w.prullenbak': () => (
    <g>
      <Ground cx={58} cy={106} rx={34} ry={5} />
      {/* Lid, standing up at the back */}
      <ellipse cx="58" cy="26" rx="30" ry="16" fill={PAL.slateDark} />
      <ellipse cx="58" cy="24" rx="30" ry="16" fill={PAL.slate} />
      <Shine d="M36 20Q42 12 54 10" width={3} opacity={0.35} />
      {/* Opening and rubbish */}
      <ellipse cx="58" cy="44" rx="32" ry="8" fill={PAL.ink} />
      <path d="M37 40L41 32L49 31L55 37L53 45L44 47Z" fill={PAL.mist} stroke={PAL.mist} strokeWidth="2" strokeLinejoin="round" />
      <path d="M41 32L46 39L37 40M46 39L55 37M46 39L44 47" fill="none" stroke={PAL.steel} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M56 44Q58 30 72 30Q68 38 70 44Z" fill={PAL.yellow} />
      <path d="M62 44Q70 34 80 38Q74 40 74 44Z" fill={PAL.yellowShade} />
      {/* Body */}
      <Shade color={PAL.slate} opacity={0.5} at={[96, 80, 14, 40]}>
        <path d="M26 46Q58 56 90 46L86 100Q86 106 80 106H36Q30 106 30 100Z" fill={PAL.steel} />
      </Shade>
      <path d="M26 46Q58 56 90 46" fill="none" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M36 58L39 94" width={3.4} opacity={0.5} />
      {/* Pedal */}
      <rect x="44" y="100" width="22" height="7" rx="3.5" fill={PAL.slate} />
      {/* Paper ball dropping in */}
      <path d="M90 18L95 11L103 12L107 19L104 27L96 29L90 25Z" fill={PAL.mist} stroke={PAL.mist} strokeWidth="2" strokeLinejoin="round" />
      <path d="M95 11L98 19L90 25M98 19L107 19M98 19L96 29" fill="none" stroke={PAL.steel} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <Arrow from={[100, 36]} to={[90, 50]} color={PAL.sky} width={4.4} head={8} />
    </g>
  ),

  // "de bel": the bike bell — a big bell on the handlebar of a bike, right next to the grip;
  // the rider's thumb flicks the lever and it rings
  'w.bel': () => (
    <g>
      {/* Front of the bike: head tube, fork and the top of the front wheel */}
      <path d="M8 120A26 26 0 0 1 60 120" fill="none" stroke={PAL.slate} strokeWidth="6" />
      <path d="M4 116A30 30 0 0 1 64 116" fill="none" stroke={PAL.blueShade} strokeWidth="3" />
      <path d="M34 84V112" stroke={PAL.blue} strokeWidth="7" strokeLinecap="round" />
      {/* Handlebar and grip */}
      <path d="M4 88Q30 80 70 82" fill="none" stroke={PAL.steel} strokeWidth="8" strokeLinecap="round" />
      <path d="M70 82H112" stroke={PAL.ink} strokeWidth="14" strokeLinecap="round" />
      {/* Bell, clamped on the bar */}
      <rect x="44" y="72" width="14" height="14" rx="3" fill={PAL.slate} />
      <ellipse cx="51" cy="68" rx="28" ry="6.6" fill={PAL.skyShade} />
      <Shade color={PAL.skyShade} opacity={1} at={[82, 50, 12, 28]}>
        <path d="M23 66Q23 34 51 34Q79 34 79 66Q79 70 51 70Q23 70 23 66Z" fill={PAL.sky} />
      </Shade>
      <circle cx="51" cy="33" r="4.6" fill={PAL.slate} />
      <Shine d="M31 58Q33 45 44 40" width={4.4} opacity={0.75} />
      {/* Lever, under the thumb */}
      <path d="M56 74L76 72" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      {/* Rider's hand round the grip, thumb on the lever */}
      <Hand pose="thumb" x={107} y={89} rotate={-60} scale={0.7} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
      {/* Ringing */}
      <path d="M14 46Q8 36 14 26M24 32Q22 20 32 14M76 14Q86 18 88 30" fill="none" stroke={PAL.orange} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),

  // "aankleden": helping someone get dressed — the carer's hands pull a jumper down over
  // Henk's head; he sits in his vest, the arrows show the jumper going on
  'w.aankleden': () => (
    <g>
      <Person
        who="henk"
        x={60}
        y={126}
        scale={0.64}
        expr="pleased"
        torso={(
          <>
            <path d="M18 134C18 104 35 92 60 92C85 92 102 104 102 134Z" fill={SKIN.henk[0]} />
            <path d="M34 134V104Q34 96 44 94Q52 104 60 104Q68 104 76 94Q86 96 86 104V134Z" fill={PAL.white} />
            <path d="M76 94Q86 96 86 104V134H78Z" fill={PAL.paperShade} />
          </>
        )}
      />
      {/* The jumper, held up over his head */}
      <path d="M50 8Q60 14 70 8L88 14L106 36L96 43L82 30V46H38V30L24 43L14 36L32 14Z" fill={PAL.clayShade} transform="translate(0 2.5)" stroke={PAL.clayShade} strokeWidth="3" strokeLinejoin="round" />
      <Shade color={PAL.clayShade} opacity={0.8} at={[100, 30, 14, 26]}>
        <path d="M50 8Q60 14 70 8L88 14L106 36L96 43L82 30V46H38V30L24 43L14 36L32 14Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="3" strokeLinejoin="round" />
      </Shade>
      <path d="M40 42H80" stroke={PAL.clayShade} strokeWidth="5" strokeLinecap="round" />
      <path d="M50 8Q60 14 70 8" fill="none" stroke={PAL.clayShade} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M30 20L40 16" width={3} opacity={0.5} />
      {/* The carer's hands on the hem */}
      <Hand pose="hold" x={22} y={50} rotate={70} scale={0.5} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      <Hand pose="hold" x={98} y={50} rotate={-70} scale={0.5} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} mirror />
      <Arrow from={[12, 68]} to={[12, 94]} color={PAL.sky} width={5} head={8} />
      <Arrow from={[108, 68]} to={[108, 94]} color={PAL.sky} width={5} head={8} />
    </g>
  ),

  // "de pincode": the PIN — a card terminal with the bank card in it and the code hidden as
  // four stars; one hand types, the other hand covers the keypad
  'w.pincode': () => (
    <g>
      {/* Bank card in the slot */}
      <rect x="38" y="2" width="36" height="16" rx="3" fill={PAL.blue} />
      <rect x="44" y="6" width="8" height="6" rx="1.5" fill={PAL.yellow} />
      <rect x="24" y="14" width="64" height="96" rx="10" fill={PAL.slateDark} transform="translate(3 3)" />
      <rect x="24" y="14" width="64" height="96" rx="10" fill={PAL.slate} />
      <rect x="34" y="14" width="44" height="4" rx="2" fill={PAL.slateDark} />
      <rect x="30" y="22" width="52" height="18" rx="4" fill="#e3f5ff" />
      {[38, 50, 62, 74].map((cx) => (
        <path key={cx} d={`M${cx} 26V36M${cx - 4.4} 28.5L${cx + 4.4} 33.5M${cx - 4.4} 33.5L${cx + 4.4} 28.5`} stroke={PAL.ink} strokeWidth="2.4" strokeLinecap="round" />
      ))}
      {['123', '456', '789', '-0-'].flatMap((row, r) => [...row].map((c, k) => {
        const x = 31 + k * 17;
        const y = 46 + r * 15;
        const fill = r === 3 && k === 0 ? PAL.red : r === 3 && k === 2 ? PAL.ok : PAL.mist;
        return (
          <g key={`${r}${k}`}>
            <rect x={x} y={y} width="14" height="11" rx="3" fill={fill} />
            {c !== '-' && <Digits x={x + 5} y={y + 2.6} h={6} text={c} color={PAL.slate} width={1.5} />}
          </g>
        );
      }))}
      {/* Covering hand, held flat over the keys from the right */}
      <Hand pose="open" x={114} y={54} rotate={-80} scale={0.84} skin={SKIN.jada} sleeve={[PAL.purple, PAL.purpleShade]} />
    </g>
  ),

} as Record<string, () => JSX.Element>;
