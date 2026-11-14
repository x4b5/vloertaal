import type { JSX } from 'react';
import { Arrow, Ground, Motion, PAL, Shade, Shine } from './kit';

/**
 * Word pictures, group 49 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The sector lessons of 14 November 2026: Garage (u.garage: l.carparts, l.carsafe).
 *
 * The words of one lesson stand side by side in a picture choice, so each has its own main shape
 * and colour:
 *  - "Parts of the car" (l.carparts): the engine (a grey block under a blue cover, a belt over two
 *    pulleys), the bonnet (a grey car from the side, its green bonnet standing open), the brake (a
 *    round steel disc with a red caliper: no tyre, so it is not "de band"), the light (a dark car
 *    seen from the front, both headlights lit yellow; "het lampje" is a red signal light, "het
 *    licht" a bike lamp), the windscreen wiper (a pale blue windscreen in the rain, one wiper and
 *    the clean arc it wiped) and the seat (a tan car seat from the side, with a headrest).
 *  - "Petrol, gas and power" (l.carsafe): the jack (a yellow scissor jack lifts one end of a navy
 *    car, the car tilts; "de hefbrug" is a level car high on two posts), the petrol (a green petrol
 *    pump with a golden drop; "de olie" is a red oil can), the electric car (a sky-blue car on a
 *    cable to a charging post, a big lightning bolt above it), orange (the paint splash
 *    of the other colour words, in hi-vis orange), to spill (a blue can on its side, its golden contents running out into a puddle)
 *    and the rag (a crumpled grey-blue cloth with dark oil stains).
 */

/** Grey-blue of the rag: a muted step between the palette's steel and work-shirt blue. */
const RAG = { base: '#8fa9bd', shade: '#6c8aa1', light: '#b7cad8' } as const;

/**
 * A splat of paint with loose drops round it: the shape of the colour words in ./group45.tsx
 * ("rood", "blauw", "geel", "groen"), copied one to one so the colours form one family. Keep the
 * two in step.
 */
function Splash({ color, shade, shine = PAL.white }: { color: string; shade: string; shine?: string }) {
  const blobs = (
    <g>
      <circle cx="60" cy="60" r="34" />
      <circle cx="32" cy="41" r="12" />
      <circle cx="54" cy="27" r="13" />
      <circle cx="83" cy="35" r="14" />
      <circle cx="95" cy="61" r="11" />
      <circle cx="81" cy="85" r="14" />
      <circle cx="54" cy="94" r="12" />
      <circle cx="31" cy="79" r="13" />
      <circle cx="22" cy="59" r="8" />
      <circle cx="101" cy="22" r="5" />
      <circle cx="18" cy="24" r="4" />
      <circle cx="102" cy="98" r="5.5" />
      <circle cx="20" cy="102" r="4" />
    </g>
  );
  return (
    <g>
      <g fill={shade} transform="translate(1.5 3)">{blobs}</g>
      <g fill={color} transform="translate(-1.5 -2)">{blobs}</g>
      <Shine d="M36 54Q38 40 52 35" color={shine} width={5} opacity={0.6} />
    </g>
  );
}

/** A lightning bolt, `s` tall, centred on (x, y). */
function Bolt({ x, y, s, color = PAL.yellow, shade = PAL.yellowShade }: { x: number; y: number; s: number; color?: string; shade?: string }) {
  const k = s / 104;
  return (
    <g transform={`translate(${x} ${y}) scale(${k}) translate(-61 -60)`}>
      <Shade color={shade} opacity={1} at={[96, 60, 22, 70]}>
        <path d="M70 8L28 66H56L44 112L94 46H66L80 8Z" fill={color} stroke={color} strokeWidth="6" strokeLinejoin="round" />
      </Shade>
    </g>
  );
}

/** A drop, its point up at (x, y), `s` tall. */
function Drop({ x, y, s, color = PAL.yellowShade, shine = PAL.yellowShine }: { x: number; y: number; s: number; color?: string; shine?: string }) {
  const k = s / 24;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <path d="M0 0Q8 12 8 16A8 8 0 0 1 -8 16Q-8 12 0 0Z" fill={color} />
      <path d="M-4 17Q-4 13 -2 10" fill="none" stroke={shine} strokeWidth="2.2" strokeLinecap="round" />
    </g>
  );
}

/** A car wheel seen from the side. */
function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={PAL.slateDark} />
      <circle cx={cx} cy={cy} r={r * 0.52} fill={PAL.mist} />
      <circle cx={cx} cy={cy} r={r * 0.2} fill={PAL.steel} />
    </g>
  );
}

/**
 * A small car from the side, nose to the left. (0, 0) is on the sill between the wheels, at
 * the height of the wheel centres; about 90 wide and 51 tall (wheels included) at scale 1.
 */
function Car({ body, shade }: { body: string; shade: string }) {
  return (
    <g>
      <Shade color={shade} opacity={1} at={[52, -20, 22, 40]}>
        <path d="M-44 -4V-14Q-44 -21 -37 -22L-26 -24L-15 -38Q-12 -41 -7 -41H14Q19 -41 22 -37L32 -24L39 -22Q46 -20 46 -13V-4Q46 0 42 0H-40Q-44 0 -44 -4Z" fill={body} />
      </Shade>
      <path d="M-20 -24L-11 -35Q-10 -36 -7 -36H1V-24Z" fill={PAL.ice} />
      <path d="M5 -36H13Q16 -36 18 -34L25 -24H5Z" fill={PAL.ice} />
      <Wheel cx={-25} cy={0} r={10} />
      <Wheel cx={26} cy={0} r={10} />
    </g>
  );
}

export default {
  /* ---------------------------------------------------------------------------------------
   * l.carparts: parts of the car
   * ------------------------------------------------------------------------------------- */

  // "de motor": the engine — a grey engine block under a blue cover with three plug caps, an oil
  // pan under it, and a black belt over two pulleys on its front.
  'w.motor': () => (
    <g>
      <Ground cx={62} cy={105} rx={40} ry={4.5} />
      {/* Oil pan */}
      <path d="M40 88H96L90 102H46Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="2" strokeLinejoin="round" />
      {/* Plug caps */}
      <rect x="45" y="15" width="9" height="14" rx="3" fill={PAL.slate} />
      <rect x="62" y="15" width="9" height="14" rx="3" fill={PAL.slate} />
      <rect x="79" y="15" width="9" height="14" rx="3" fill={PAL.slate} />
      {/* Block */}
      <Shade color={PAL.steel} opacity={1} at={[104, 70, 14, 30]}>
        <rect x="32" y="46" width="72" height="46" rx="5" fill={PAL.mist} />
      </Shade>
      <circle cx="74" cy="70" r="4" fill={PAL.steel} />
      <circle cx="90" cy="70" r="4" fill={PAL.slate} opacity=".55" />
      {/* Valve cover */}
      <Shade color={PAL.blueShade} opacity={1} at={[104, 36, 14, 18]}>
        <rect x="36" y="25" width="64" height="25" rx="7" fill={PAL.blue} />
      </Shade>
      <path d="M46 40H90" stroke={PAL.blueShade} strokeWidth="2.4" strokeLinecap="round" />
      <Shine d="M43 33H60" opacity={0.55} />
      {/* Belt over two pulleys */}
      <path d="M32 52L44 82" stroke={PAL.slateDark} strokeWidth="31" strokeLinecap="round" />
      <path d="M32 52L44 82" stroke={PAL.steel} strokeWidth="22" strokeLinecap="round" />
      <circle cx="32" cy="52" r="9" fill={PAL.yellow} />
      <circle cx="32" cy="52" r="3.4" fill={PAL.yellowShade} />
      <circle cx="44" cy="82" r="9" fill={PAL.yellow} />
      <circle cx="44" cy="82" r="3.4" fill={PAL.yellowShade} />
    </g>
  ),

  // "de motorkap": the bonnet — a grey car from the side; its bonnet, in green, stands open on a
  // rod over the dark engine bay.
  'w.motorkap': () => (
    <g>
      <Ground cx={60} cy={105} rx={50} ry={4} />
      {/* Engine in the open bay */}
      <rect x="24" y="52" width="24" height="14" rx="4" fill={PAL.slateDark} />
      {/* Car body */}
      <Shade color={PAL.steel} opacity={1} at={[112, 66, 20, 44]}>
        <path d="M12 88V72Q12 66 20 65L52 62L60 42Q62 37 68 37H92Q100 37 102 44L106 62Q110 63 110 70V88Q110 92 106 92H16Q12 92 12 88Z" fill={PAL.mist} />
      </Shade>
      <path d="M58 61L64 45Q65 42 68 42H79V61Z" fill={PAL.ice} />
      <path d="M84 42H92Q96 42 97 46L100 61H84Z" fill={PAL.ice} />
      <path d="M16 66L52 62V69H14Z" fill={PAL.slate} />
      <rect x="12" y="71" width="7" height="8" rx="2.5" fill={PAL.yellow} />
      <Wheel cx={34} cy={92} r={11.5} />
      <Wheel cx={88} cy={92} r={11.5} />
      {/* Prop rod and the open bonnet */}
      <path d="M21 65L31 38" stroke={PAL.steel} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M53 60L22 27" stroke={PAL.greenShade} strokeWidth="10" strokeLinecap="round" />
      <path d="M54.5 58.500L23.5 25.500" stroke={PAL.green} strokeWidth="7" strokeLinecap="round" />
      <Shine d="M27 28L38 40" opacity={0.5} width={2.6} />
    </g>
  ),

  // "de rem": the brake — a round steel brake disc with holes in it and a red caliper gripping
  // its edge (no tyre: "de band" is the black tyre).
  'w.rem': () => (
    <g>
      <Shade color={PAL.steel} opacity={0.85} at={[100, 62, 26, 60]}>
        <circle cx="56" cy="62" r="42" fill={PAL.mist} />
      </Shade>
      {/* Holes in the disc */}
      <g fill={PAL.steel}>
        <circle cx="56" cy="30" r="2.8" />
        <circle cx="33.400" cy="39.400" r="2.8" />
        <circle cx="24" cy="62" r="2.8" />
        <circle cx="33.400" cy="84.600" r="2.8" />
        <circle cx="56" cy="94" r="2.8" />
        <circle cx="78.600" cy="84.600" r="2.8" />
      </g>
      {/* Hub with wheel bolts */}
      <circle cx="56" cy="62" r="20" fill={PAL.slate} />
      <g fill={PAL.mist}>
        <circle cx="56" cy="50" r="3" />
        <circle cx="67.400" cy="58.300" r="3" />
        <circle cx="63" cy="71.700" r="3" />
        <circle cx="49" cy="71.700" r="3" />
        <circle cx="44.600" cy="58.300" r="3" />
      </g>
      <circle cx="56" cy="62" r="5" fill={PAL.slateDark} />
      <Shine d="M22 48Q28 32 42 25" opacity={0.7} />
      {/* Caliper */}
      <path d="M79.100 34.400A36 36 0 0 1 91.900 65.100" fill="none" stroke={PAL.redShade} strokeWidth="26" strokeLinecap="round" />
      <path d="M77.500 36.300A33.500 33.500 0 0 1 89.400 64.900" fill="none" stroke={PAL.red} strokeWidth="19" strokeLinecap="round" />
      <circle cx="82" cy="41" r="3" fill={PAL.redLight} />
      <circle cx="89" cy="59" r="3" fill={PAL.redLight} />
    </g>
  ),

  // "de lamp": the light of a car — a dark car seen from the front, both headlights lit yellow,
  // with rays round them.
  'w.lamp': () => (
    <g>
      <Ground cx={60} cy={103} rx={40} ry={4} />
      <rect x="27" y="82" width="15" height="19" rx="4" fill={PAL.slateDark} />
      <rect x="78" y="82" width="15" height="19" rx="4" fill={PAL.slateDark} />
      <path d="M33 52L40 28Q42 22 49 22H71Q78 22 80 28L87 52Z" fill={PAL.slate} />
      <path d="M40 50L46 31Q47 28 50 28H70Q73 28 74 31L80 50Z" fill={PAL.ice} />
      <Shade color={PAL.slateDark} opacity={1} at={[104, 68, 16, 30]}>
        <rect x="22" y="46" width="76" height="42" rx="12" fill={PAL.slate} />
      </Shade>
      <rect x="24" y="80" width="72" height="10" rx="5" fill={PAL.mist} />
      <rect x="49" y="60" width="22" height="12" rx="4" fill={PAL.slateDark} />
      <path d="M53 64H67M53 68H67" stroke={PAL.steel} strokeWidth="1.6" strokeLinecap="round" />
      {/* Headlights, lit */}
      <circle cx="37" cy="63" r="12" fill={PAL.yellow} />
      <circle cx="37" cy="63" r="6.500" fill={PAL.yellowShine} />
      <circle cx="83" cy="63" r="12" fill={PAL.yellow} />
      <circle cx="83" cy="63" r="6.500" fill={PAL.yellowShine} />
      <g opacity="1">
        <Motion x={37} y={63} dir={180} spread={110} n={3} len={9} gap={15} color={PAL.yellowShade} width={4} />
        <Motion x={83} y={63} dir={0} spread={110} n={3} len={9} gap={15} color={PAL.yellowShade} width={4} />
      </g>
    </g>
  ),

  // "de ruitenwisser": the windscreen wiper — a windscreen with raindrops on it; one wiper has
  // wiped a clean arc.
  'w.ruitenwisser': () => (
    <g>
      <path d="M26 20H94Q102 20 104 28L110 84Q111 94 102 94H18Q9 94 10 84L16 28Q18 20 26 20Z" fill={PAL.slate} />
      <path d="M27 26H93Q97 26 98 30L104 82Q104 87 100 87H20Q16 87 16 82L22 30Q23 26 27 26Z" fill={PAL.ice} />
      {/* The wiped arc */}
      <path d="M17.500 53.500A46 46 0 0 1 87.700 59.600L59 79.100A11 11 0 0 0 42.200 78.200Z" fill="#e3f5ff" />
      {/* Rain on the rest of the glass */}
      <g fill={PAL.blue}>
        <Drop x={90} y={32} s={11} color={PAL.blue} shine={PAL.ice} />
        <Drop x={30} y={30} s={10} color={PAL.blue} shine={PAL.ice} />
        <Drop x={96} y={64} s={11} color={PAL.blue} shine={PAL.ice} />
        <Drop x={78} y={70} s={10} color={PAL.blue} shine={PAL.ice} />
        <Drop x={24} y={66} s={10} color={PAL.blue} shine={PAL.ice} />
      </g>
      {/* Arm and blade */}
      <path d="M50 86L69 63.400" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M58.400 76L84.500 56.900" stroke={PAL.slateDark} strokeWidth="5.5" strokeLinecap="round" />
      <circle cx="50" cy="86" r="5" fill={PAL.slateDark} />
      <Shine d="M24 34L22 48" opacity={0.6} width={3} />
    </g>
  ),

  // "de stoel": the seat — a tan car seat from the side: seat, back and headrest, on its rails.
  'w.stoel': () => (
    <g>
      <Ground cx={58} cy={106} rx={40} ry={4.5} />
      <rect x="24" y="94" width="66" height="7" rx="3" fill={PAL.slate} />
      <rect x="30" y="99" width="8" height="6" rx="2" fill={PAL.slateDark} />
      <rect x="76" y="99" width="8" height="6" rx="2" fill={PAL.slateDark} />
      <Shade color={PAL.cardShade} opacity={1} at={[108, 60, 22, 60]}>
        <g fill={PAL.card}>
          <g transform="rotate(11 77 90)">
            <rect x="74.500" y="26" width="5" height="12" fill={PAL.steel} />
            <rect x="66" y="12" width="22" height="18" rx="7" />
            <rect x="65" y="34" width="24" height="58" rx="10" />
          </g>
          <path d="M22 82Q20 70 32 70H76Q84 70 84 78V88Q84 94 78 94H30Q23 94 22 86Z" />
        </g>
      </Shade>
      <path d="M32 82H68" stroke={PAL.cardShade} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M77 46L73 66" stroke={PAL.cardShade} strokeWidth="2.4" strokeLinecap="round" />
      <Shine d="M28 76Q30 73 36 73" opacity={0.6} width={3} />
      {/* Belt buckle */}
      <rect x="86" y="78" width="7" height="13" rx="2.5" fill={PAL.red} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.carsafe: petrol, gas and power
   * ------------------------------------------------------------------------------------- */

  // "de krik": the jack — a yellow scissor jack lifts the front of a navy car: the car tilts,
  // its front wheel is off the ground, an arrow points up.
  'w.krik': () => (
    <g>
      <Ground cx={62} cy={106} rx={48} ry={4} />
      <g transform="translate(80 93.500) rotate(24) scale(1.05) translate(-26 0)">
        <Car body={PAL.navy} shade={PAL.navyShade} />
      </g>
      {/* The jack, under the sill */}
      <rect x="35" y="100" width="34" height="5" rx="2" fill={PAL.slate} />
      <path d="M26 91H66" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      <path d="M52 83L35 91L52 100L69 91Z" fill="none" stroke={PAL.yellow} strokeWidth="5.5" strokeLinejoin="round" />
      <path d="M52 83L69 91L52 100" fill="none" stroke={PAL.yellowShade} strokeWidth="5.5" strokeLinejoin="round" strokeLinecap="round" />
      <rect x="44" y="78" width="16" height="6" rx="2" fill={PAL.slate} />
      <circle cx="25" cy="91" r="3.600" fill={PAL.slate} />
      <Arrow from={[15, 90]} to={[15, 68]} color={PAL.sky} width={6} head={9} />
    </g>
  ),

  // "de benzine": the petrol — a green petrol pump with its hose and nozzle; a big golden drop on
  // its front.
  'w.benzine': () => (
    <g>
      <Ground cx={56} cy={106} rx={38} ry={4.5} />
      {/* Hose and nozzle */}
      <path d="M72 82Q100 88 96 52" fill="none" stroke={PAL.slateDark} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M92 36L76 30" stroke={PAL.steel} strokeWidth="5.5" strokeLinecap="round" />
      <rect x="88" y="30" width="14" height="24" rx="5" fill={PAL.slate} />
      {/* Pump */}
      <rect x="22" y="96" width="56" height="8" rx="3" fill={PAL.slate} />
      <Shade color={PAL.greenShade} opacity={1} at={[78, 60, 14, 50]}>
        <rect x="26" y="16" width="48" height="82" rx="9" fill={PAL.green} />
      </Shade>
      <rect x="33" y="24" width="34" height="18" rx="4" fill={PAL.paper} />
      <path d="M38 30H62M38 36H54" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      <Drop x={50} y={50} s={38} color={PAL.yellow} />
      <Shine d="M31 52V70" opacity={0.45} />
    </g>
  ),

  // "de elektrische auto": the electric car — a sky-blue car on a yellow cable to a charging post,
  // and a big lightning bolt above it.
  'w.elektrischeauto': () => (
    <g>
      <Ground cx={58} cy={104} rx={50} ry={4} />
      {/* Charging post */}
      <rect x="98" y="52" width="12" height="52" rx="3.500" fill={PAL.slate} />
      <rect x="101" y="57" width="6" height="8" rx="2" fill={PAL.lime} />
      <g transform="translate(52 93) scale(0.94)">
        <Car body={PAL.sky} shade={PAL.skyShade} />
      </g>
      {/* Cable and plug */}
      <path d="M100 68C100 98 87 100 87 84" fill="none" stroke={PAL.yellow} strokeWidth="4.5" strokeLinecap="round" />
      <rect x="82.500" y="74" width="9" height="10" rx="2.500" fill={PAL.slateDark} />
      <Bolt x={50} y={30} s={40} />
    </g>
  ),

  // "oranje": orange — a splash of paint in hi-vis orange: the same splash as "rood", "blauw",
  // "geel" and "groen" (group45), only the colour differs.
  'w.oranje': () => <Splash color={PAL.orange} shade={PAL.orangeShade} />,

  // "morsen": to spill — a blue can lies on its side; its golden contents run out into a puddle
  // that spreads over the floor.
  'w.morsen': () => (
    <g>
      {/* The puddle */}
      <path d="M40 90Q58 84 78 88Q104 86 109 95Q112 105 94 106Q66 110 44 106Q28 102 40 90Z" fill={PAL.yellowShade} />
      <path d="M56 100Q72 103 90 100" fill="none" stroke={PAL.yellowShine} strokeWidth="2.6" strokeLinecap="round" opacity=".8" />
      {/* The stream out of the can */}
      <path d="M60 62Q74 68 74 94H54Q60 82 54 74Z" fill={PAL.yellowShade} />
      {/* The can, tipped over */}
      <g transform="rotate(14 38 64)">
        <Shade color={PAL.blueShade} opacity={1} at={[38, 88, 40, 12]}>
          <rect x="12" y="44" width="50" height="40" rx="5" fill={PAL.blue} />
        </Shade>
        <rect x="26" y="44" width="20" height="40" fill={PAL.paper} />
        <path d="M31 54V74M38 54V68" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
        <ellipse cx="62" cy="64" rx="6" ry="20" fill={PAL.slateDark} />
        <ellipse cx="62" cy="72" rx="4" ry="11" fill={PAL.yellowShade} />
        <Shine d="M17 50H24" opacity={0.6} width={3} />
      </g>
      {/* Splashes */}
      <Drop x={96} y={64} s={13} />
      <Drop x={86} y={50} s={10} />
    </g>
  ),

  // "de lap": the rag — a crumpled grey-blue cloth with dark oil stains on it (a clean, folded
  // cloth is "de doek").
  'w.lap': () => (
    <g>
      <Ground cx={60} cy={104} rx={42} ry={4.5} />
      <Shade color={RAG.shade} opacity={1} at={[108, 60, 26, 60]}>
        <path d="M18 34Q38 22 56 31Q76 38 96 22Q106 42 98 56Q95 64 99 70L80 99Q72 95 64 94Q44 90 24 102Q14 82 22 66Q28 48 18 34Z" fill={RAG.base} stroke={RAG.base} strokeWidth="4" strokeLinejoin="round" />
      </Shade>
      {/* The corner folded over */}
      <path d="M99 70L80 99L73 71Z" fill={RAG.light} stroke={RAG.light} strokeWidth="4" strokeLinejoin="round" />
      {/* Creases */}
      <path d="M32 42Q44 54 36 76M60 36Q66 42 63 50M52 80Q47 88 53 94M84 36Q78 48 86 58" fill="none" stroke={RAG.shade} strokeWidth="3" strokeLinecap="round" />
      <path d="M24 40Q32 34 42 33" fill="none" stroke={RAG.light} strokeWidth="3" strokeLinecap="round" />
      {/* Oil stains */}
      <path d="M44 58Q52 50 60 58Q68 62 62 72Q54 80 46 72Q38 66 44 58Z" fill={PAL.slateDark} />
      <ellipse cx="78" cy="46" rx="6.500" ry="4.500" fill={PAL.slateDark} transform="rotate(20 78 46)" />
      <ellipse cx="30" cy="86" rx="5" ry="3.600" fill={PAL.slateDark} />
      <circle cx="70" cy="78" r="2.800" fill={PAL.slateDark} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
