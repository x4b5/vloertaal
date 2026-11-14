import type { JSX } from 'react';
import { Bust } from './bust';
import { ExclaimMark, Ground, Hand, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 44 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The sector lessons of 14 November 2026: Horeca (u.horeca: l.dishes, l.rush).
 *  - "Washing up" (l.dishes): the washing-up (a steel sink: plates and a blue cup standing in
 *    suds), the dishwasher (a machine, its door open, a blue rack of plates pulled out), the plate
 *    (one empty plate with a blue band, nothing else), the glass (one tall light-blue glass), the
 *    cutlery (fork, knife and spoon upright, all steel) and to dry (a face-on plate, a red tea
 *    towel and a hand over it, sparkles). Six silhouettes: a wide tub, a tall cabinet, a flat
 *    oval, a tall cone, three thin bars, a round disc with a red cloth.
 *  - "When it is busy" (l.rush): hot (a dark pot, red heat waves above it, a yellow warning
 *    triangle on it), the chef (Henk in a tall white chef's hat and white jacket), the terrace
 *    (an orange parasol over a bare table and two chairs), the table (one round table with a long
 *    cloth, laid with a plate and a glass, no parasol) and the tray (a round tray with two glasses
 *    on one hand). "wachten" has no picture.
 */

const TINT = '#e3f5ff';

/** A plate seen at an angle: a depth edge, the rim with a blue band, the well. */
function Plate({ cx, cy, rx, ry, band = true }: { cx: number; cy: number; rx: number; ry: number; band?: boolean }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy + Math.max(2, ry * 0.14)} rx={rx} ry={ry} fill={PAL.steel} />
      <Shade color={PAL.mist} opacity={0.8} at={[cx + rx, cy, rx * 0.55, ry * 1.3]}>
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={PAL.paper} />
      </Shade>
      {band && <ellipse cx={cx} cy={cy} rx={rx * 0.84} ry={ry * 0.82} fill="none" stroke={PAL.blueLight} strokeWidth={Math.max(1.4, rx * 0.07)} />}
      <ellipse cx={cx} cy={cy + ry * 0.05} rx={rx * 0.6} ry={ry * 0.56} fill={PAL.paperShade} />
    </g>
  );
}

/** A plate standing on its edge, seen almost from the side (in a sink or a rack). */
function PlateUp({ cx, cy, rx = 6, ry = 20, rot = 0 }: { cx: number; cy: number; rx?: number; ry?: number; rot?: number }) {
  return (
    <g transform={`rotate(${rot} ${cx} ${cy + ry})`}>
      <ellipse cx={cx + 3} cy={cy} rx={rx} ry={ry} fill={PAL.steel} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={PAL.paper} />
      <ellipse cx={cx - 0.4} cy={cy} rx={rx * 0.5} ry={ry * 0.66} fill={PAL.paperShade} />
    </g>
  );
}

/** A drinking glass (a light-blue tumbler), standing on `base`; `drink` fills it for two thirds. */
function Glass({ cx, base, w = 22, h = 34, drink }: { cx: number; base: number; w?: number; h?: number; drink?: string }) {
  const top = base - h;
  const a = w / 2;
  const b = w * 0.36;
  const r = Math.min(4, w * 0.12);
  const lvl = base - h * 0.62;
  const al = b + (a - b) * 0.62;
  const cup = (x0: number, y0: number) =>
    `M${cx - x0} ${y0}H${cx + x0}L${cx + b} ${base - r}Q${cx + b} ${base} ${cx + b - r} ${base}H${cx - b + r}Q${cx - b} ${base} ${cx - b} ${base - r}Z`;
  return (
    <g>
      <Shade color={PAL.sky} opacity={0.45} at={[cx + a, base - h / 2, a * 0.6, h]}>
        <g>
          <path d={cup(a, top)} fill={PAL.ice} />
          {drink && <path d={cup(al, lvl)} fill={drink} />}
        </g>
      </Shade>
      <ellipse cx={cx} cy={top} rx={a} ry={Math.max(1.6, w * 0.1)} fill={TINT} />
      <ellipse cx={cx} cy={top + 0.4} rx={a * 0.78} ry={Math.max(1, w * 0.06)} fill={PAL.blueLight} />
      <Shine d={`M${cx - a * 0.62} ${top + h * 0.22}L${cx - b * 0.72} ${base - h * 0.2}`} width={Math.max(2, w * 0.1)} opacity={0.75} />
    </g>
  );
}

/** A round foam bubble of the suds. */
const sud = (x: number, y: number, r: number, key: number) => (
  <g key={key}>
    <circle cx={x + 1} cy={y + 1.4} r={r} fill={PAL.ice} />
    <circle cx={x} cy={y} r={r} fill={TINT} />
  </g>
);

/** The chef's jacket over a bust's shoulders (in the bust's own box), with an open V at the neck. */
const JACKET = 'M25 134L26.5 109Q28.5 96.5 42 93.5H47L60 111L73 93.5H78Q91.5 96.5 93.5 109L95 134Z';

export default {
  // "de afwas": the washing-up — a steel sink with plates and a blue cup standing in the suds
  'w.afwas': () => (
    <g>
      {/* The tap */}
      <path d="M102 58V30Q102 18 90 18H84V26" fill="none" stroke={PAL.steel} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {/* What stands in the sink */}
      <PlateUp cx={30} cy={42} ry={22} rx={7} rot={-10} />
      <PlateUp cx={44} cy={42} ry={22} rx={7} rot={-10} />
      <PlateUp cx={58} cy={42} ry={22} rx={7} rot={-10} />
      <path d="M86 44H96Q101 44 101 50Q101 56 96 56H86" fill="none" stroke={PAL.blueShade} strokeWidth="4.5" />
      <rect x="66" y="36" width="24" height="28" rx="4" fill={PAL.blue} />
      <rect x="66" y="36" width="24" height="6" rx="3" fill={PAL.blueLight} />
      {/* The sink */}
      <Shade color={PAL.steel} opacity={0.75} at={[112, 84, 28, 40]}>
        <path d="M12 62H108L101 98Q100 104 94 104H26Q20 104 19 98Z" fill={PAL.mist} />
      </Shade>
      <rect x="8" y="58" width="104" height="9" rx="4.5" fill={PAL.steel} />
      <Shine d="M24 76L27 92" width={3.4} opacity={0.7} />
      {/* Suds along the rim */}
      {[[18, 56, 7], [30, 59, 8], [44, 55, 9], [58, 59, 8], [70, 56, 7], [82, 59, 8], [94, 57, 6]].map(([x, y, r], i) => sud(x, y, r, i))}
      {sud(14, 30, 4.5, 90)}
      {sud(74, 20, 3.6, 91)}
    </g>
  ),

  // "de vaatwasser": the dishwasher — a machine with its door open; a blue rack of plates pulled out
  'w.vaatwasser': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      <Shade color={PAL.steel} opacity={0.7} at={[100, 44, 16, 50]}>
        <rect x="24" y="10" width="72" height="68" rx="6" fill={PAL.mist} />
      </Shade>
      <path d="M24 16Q24 10 30 10H90Q96 10 96 16V23H24Z" fill={PAL.slate} />
      <circle cx="34" cy="16.5" r="3" fill={PAL.leaf} />
      <rect x="66" y="14" width="22" height="5" rx="2.5" fill={PAL.steel} />
      {/* The dark inside */}
      <rect x="30" y="28" width="60" height="46" rx="3" fill={PAL.slateDark} />
      {/* The open door, lying flat towards us */}
      <path d="M27 74H93L107 98H13Z" fill={PAL.paperShade} stroke={PAL.paperShade} strokeWidth="2" strokeLinejoin="round" />
      <rect x="12" y="97" width="96" height="7" rx="3.5" fill={PAL.steel} />
      {/* The rack with plates */}
      <path d="M36 62H84" stroke={PAL.sky} strokeWidth="3.4" strokeLinecap="round" />
      <PlateUp cx={40} cy={60} rx={5.5} ry={19} />
      <PlateUp cx={53} cy={60} rx={5.5} ry={19} />
      <PlateUp cx={66} cy={60} rx={5.5} ry={19} />
      <PlateUp cx={79} cy={60} rx={5.5} ry={19} />
      <path d="M36 62L27 88H93L84 62M27 76H93" fill="none" stroke={PAL.sky} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),

  // "het bord": the plate — one empty plate with a blue band, seen at an angle (no food: "eten")
  'w.bord': () => (
    <g>
      <Ground cx={60} cy={98} rx={46} ry={6} />
      <Plate cx={60} cy={60} rx={48} ry={33} />
      <Shine d="M24 50Q30 36 48 31" width={4} opacity={0.9} />
    </g>
  ),

  // "het glas": the glass — one tall empty drinking glass, light blue
  'w.glas': () => (
    <g>
      <Ground cx={60} cy={104} rx={26} ry={5} />
      <Glass cx={60} base={104} w={56} h={86} />
      <path d="M40.5 92H79.5V98Q79.5 104 73 104H47Q40.5 104 40.5 98Z" fill={PAL.blueLight} />
    </g>
  ),

  // "het bestek": the cutlery — a fork, a knife and a spoon side by side, all steel
  'w.bestek': () => (
    <g>
      {/* Fork */}
      <Shade color={PAL.slate} opacity={0.4} at={[44, 60, 11, 60]}>
        <g fill={PAL.steel}>
          <rect x="18" y="14" width="5.6" height="34" rx="2.8" />
          <rect x="26.2" y="14" width="5.6" height="34" rx="2.8" />
          <rect x="34.4" y="14" width="5.6" height="34" rx="2.8" />
          <path d="M18 38H40V44Q40 56 29 56Q18 56 18 44Z" />
          <rect x="25" y="50" width="8" height="56" rx="4" />
        </g>
      </Shade>
      {/* Knife */}
      <Shade color={PAL.slate} opacity={0.4} at={[72, 60, 10, 60]}>
        <g fill={PAL.steel}>
          <path d="M54 62V20Q54 14 58 14Q68 22 68 48V62Z" />
          <rect x="55" y="58" width="11" height="48" rx="5" />
        </g>
      </Shade>
      <path d="M55 61H67" stroke={PAL.slate} strokeWidth="2.4" strokeLinecap="round" opacity=".5" />
      <Shine d="M56.5 24V50" width={2.6} opacity={0.55} />
      <Shine d="M20.8 18V40" width={2.2} opacity={0.5} />
      {/* Spoon */}
      <Shade color={PAL.slate} opacity={0.4} at={[104, 60, 11, 60]}>
        <g fill={PAL.steel}>
          <ellipse cx="90" cy="33" rx="12.5" ry="19" />
          <rect x="86" y="46" width="8" height="60" rx="4" />
        </g>
      </Shade>
      <ellipse cx="88.5" cy="32" rx="6.5" ry="12" fill={PAL.mist} opacity=".9" />
    </g>
  ),

  // "afdrogen": to dry with a cloth — a hand rubs a red tea towel over a plate; it shines
  'w.afdrogen': () => (
    <g>
      <circle cx="48" cy="66" r="36" fill={PAL.steel} />
      <circle cx="46" cy="62" r="36" fill={PAL.paper} />
      <circle cx="46" cy="62" r="29" fill="none" stroke={PAL.blueLight} strokeWidth="3.4" />
      <circle cx="46" cy="63" r="20" fill={PAL.paperShade} />
      {/* The tea towel */}
      <Shade color={PAL.redShade} opacity={0.9} at={[112, 70, 16, 44]}>
        <path d="M58 40Q80 28 104 38Q110 62 108 96Q98 104 88 96Q78 106 66 96Q54 70 58 40Z" fill={PAL.red} />
      </Shade>
      <path d="M68 42Q64 68 74 96M82 37Q80 66 88 93" fill="none" stroke={PAL.redLight} strokeWidth="3.4" strokeLinecap="round" />
      <Hand pose="fist" x={100} y={86} rotate={-42} scale={0.86} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      <Sparkle x={22} y={22} r={9} />
      <Sparkle x={48} y={12} r={5} />
    </g>
  ),

  // "heet": hot — a dark pot with red heat waves above it and a yellow warning triangle on it
  'w.heet': () => (
    <g>
      <Ground cx={60} cy={104} rx={44} ry={5} />
      <path d="M38 48Q30 40 38 31Q46 22 38 13M60 48Q52 40 60 31Q68 22 60 13M82 48Q74 40 82 31Q90 22 82 13" fill="none" stroke={PAL.red} strokeWidth="6.4" strokeLinecap="round" />
      <rect x="10" y="68" width="18" height="8" rx="4" fill={PAL.slateDark} />
      <rect x="92" y="68" width="18" height="8" rx="4" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={0.9} at={[98, 82, 16, 30]}>
        <rect x="24" y="60" width="72" height="42" rx="7" fill={PAL.slate} />
      </Shade>
      <rect x="20" y="56" width="80" height="9" rx="4.5" fill={PAL.steel} />
      <path d="M60 68L76 95H44Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="5" strokeLinejoin="round" />
      <ExclaimMark x={60} y={84} size={19} color={PAL.ink} />
    </g>
  ),

  // "de chef": the chef, the boss of the kitchen — Henk in a tall white chef's hat and a white jacket
  'w.chef': () => (
    <g>
      <Bust who="henk" x={60} y={126} scale={0.72} expr="pleased" />
      <g transform="translate(60 126) scale(0.72) translate(-60 -134)">
        {/* White jacket with two rows of buttons */}
        <path d={JACKET} fill={PAL.paper} />
        <path d="M80 94Q91.5 96.5 93.5 109L95 134H82Z" fill={PAL.mist} />
        <path d="M47 93.5L60 111L73 93.5" fill="none" stroke={PAL.mist} strokeWidth="3" strokeLinejoin="round" />
        <g fill={PAL.slate}>
          <circle cx="50" cy="116" r="2.6" /><circle cx="70" cy="116" r="2.6" />
          <circle cx="50" cy="127" r="2.6" /><circle cx="70" cy="127" r="2.6" />
        </g>
        {/* The hat */}
        <Shade color={PAL.mist} opacity={1} at={[98, 6, 24, 50]}>
          <g fill={PAL.paperShade}>
            <circle cx="40" cy="-4" r="17" />
            <circle cx="60" cy="-12" r="20" />
            <circle cx="80" cy="-4" r="17" />
            <rect x="33" y="-2" width="54" height="30" />
          </g>
        </Shade>
        <rect x="31" y="22" width="58" height="17" rx="3" fill={PAL.mist} />
        <rect x="74" y="22" width="15" height="17" rx="3" fill={PAL.steel} opacity=".55" />
        <path d="M47 4V18M60 0V18" stroke={PAL.mist} strokeWidth="2.6" strokeLinecap="round" />
        <Shine d="M30 -8Q34 -18 44 -19" width={4} opacity={0.9} />
      </g>
    </g>
  ),

  // "het terras": the terrace — an orange parasol over a small bare table and two chairs outside
  'w.terras': () => (
    <g>
      <Ground cx={60} cy={106} rx={48} ry={4} />
      {/* Chairs */}
      <g fill={PAL.blue}>
        <rect x="10" y="64" width="5" height="42" rx="2" />
        <rect x="10" y="84" width="22" height="5" rx="2" />
        <rect x="28" y="86" width="4.4" height="20" rx="2" />
        <rect x="105" y="64" width="5" height="42" rx="2" fill={PAL.blueShade} />
        <rect x="88" y="84" width="22" height="5" rx="2" fill={PAL.blueShade} />
        <rect x="87.6" y="86" width="4.4" height="20" rx="2" fill={PAL.blueShade} />
      </g>
      {/* Pole and foot */}
      <rect x="57.5" y="30" width="5" height="74" rx="2" fill={PAL.slate} />
      <rect x="48" y="100" width="24" height="6" rx="3" fill={PAL.slateDark} />
      {/* Table */}
      <ellipse cx="60" cy="77" rx="25" ry="6" fill={PAL.cardDark} />
      <ellipse cx="60" cy="74" rx="25" ry="6" fill={PAL.card} />
      {/* Parasol */}
      <circle cx="60" cy="12" r="3.4" fill={PAL.slate} />
      <Shade color={PAL.orangeShade} opacity={0.9} at={[108, 34, 22, 30]}>
        <path d="M10 46C18 22 40 13 60 13C80 13 102 22 110 46Q101 40 93.3 46Q85 40 76.7 46Q68 40 60 46Q52 40 43.3 46Q35 40 26.7 46Q19 40 10 46Z" fill={PAL.orange} />
      </Shade>
      <path d="M60 13C50 20 45 32 43.3 46Q52 40 60 46Q68 40 76.7 46C75 32 70 20 60 13Z" fill={PAL.yellow} />
      <Shine d="M24 34Q32 23 44 19" color={PAL.yellowShine} opacity={0.7} />
    </g>
  ),

  // "de tafel": the table — one round restaurant table with a long cloth, laid with a plate and a glass
  'w.tafel': () => (
    <g>
      <Ground cx={60} cy={106} rx={30} ry={4} />
      <rect x="55" y="78" width="10" height="24" fill={PAL.wood} />
      <rect x="40" y="99" width="40" height="7" rx="3.5" fill={PAL.cardDark} />
      {/* The cloth: the skirt, then the top */}
      <Shade color={PAL.steel} opacity={0.5} at={[110, 66, 22, 30]}>
        <path d="M12 46V80Q20 88 28 80Q36 88 44 80Q52 88 60 80Q68 88 76 80Q84 88 92 80Q100 88 108 80V46Z" fill={PAL.mist} />
      </Shade>
      <path d="M28 62V78M44 64V78M60 64V78M76 64V78M92 62V78" stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" opacity=".6" />
      <ellipse cx="60" cy="46" rx="48" ry="15" fill={PAL.paper} />
      {/* Laid: a plate, cutlery, a glass */}
      <Glass cx={88} base={44} w={13} h={20} />
      <Plate cx={56} cy={47} rx={20} ry={7} />
      <path d="M29 43L26 51M84 49L87 55" stroke={PAL.steel} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),

  // "het dienblad": the tray — a round tray with two glasses, carried on one hand
  'w.dienblad': () => (
    <g>
      <Hand pose="open" x={60} y={116} scale={0.95} skin={SKIN.jada} sleeve={[PAL.slate, PAL.slateDark]} />
      <ellipse cx="60" cy="72" rx="50" ry="15" fill={PAL.slateDark} />
      <ellipse cx="60" cy="67" rx="50" ry="15" fill={PAL.steel} />
      <ellipse cx="60" cy="67" rx="43" ry="11" fill={PAL.slate} />
      <Glass cx={42} base={68} w={26} h={42} drink={PAL.orange} />
      <Glass cx={78} base={66} w={26} h={42} drink={PAL.sky} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
