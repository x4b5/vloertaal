import type { JSX } from 'react';
import { Arrow, Box, Bust, Clock, Cross, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 16 (keyed by id): "Uitdrukkingen en gezegden" (src/content/sayings.ts).
 * A saying is drawn as what its words say literally (the funny picture), not what it means:
 *  - w.*: the twelve sayings taught as words in the unit u.sayings;
 *  - zg.*: the sayings of the "Zo zeggen ze het" card in later lessons (lessonSayings).
 * See docs/tekenstijl.md and ./kit.tsx.
 */

/** A forearm coming up from below, its sleeve rolled up (wrist at x, y): for "de handen uit de mouwen". */
function RolledArm({ x, y, rotate, skin, sleeve, mirror = false }: {
  x: number; y: number; rotate: number; skin: [string, string]; sleeve: [string, string, string]; mirror?: boolean;
}) {
  const [cloth, roll, rollShade] = sleeve;
  return (
    <g>
      <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
        {/* The sleeve, down to the edge */}
        <rect x="-15" y="34" width="30" height="60" rx="3" fill={cloth} />
        {/* Bare forearm */}
        <Shade color={skin[1]} opacity={0.9} at={[13, 18, 5, 30]}>
          <rect x="-10.5" y="-2" width="21" height="40" rx="5" fill={skin[0]} />
        </Shade>
        {/* The rolled-up cuff: a fat band with a fold */}
        <rect x="-16.5" y="28" width="33" height="14" rx="6" fill={roll} />
        <path d="M-12 35.5H12" stroke={rollShade} strokeWidth="2" strokeLinecap="round" />
      </g>
      <Hand pose="open" x={x} y={y} rotate={rotate} scale={0.9} skin={skin} mirror={mirror} />
    </g>
  );
}

/** A thermometer standing upright, bulb at the bottom (x = middle, y = bottom of the bulb). */
function Thermometer({ x, y, h = 66 }: { x: number; y: number; h?: number }) {
  return (
    <g>
      <rect x={x - 8} y={y - h} width="16" height={h - 10} rx="8" fill={PAL.mist} transform="translate(2 2)" />
      <rect x={x - 8} y={y - h} width="16" height={h - 10} rx="8" fill={PAL.white} />
      <rect x={x - 3.2} y={y - h * 0.62} width="6.4" height={h * 0.5} rx="3" fill={PAL.red} />
      <path d={`M${x + 8} ${y - h + 16}h-4M${x + 8} ${y - h + 26}h-4M${x + 8} ${y - h + 36}h-4`} stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx={x} cy={y - 11} r="11" fill={PAL.redShade} />
      <circle cx={x - 0.8} cy={y - 12} r="10" fill={PAL.red} />
      <Shine d={`M${x - 5} ${y - 14}A6 6 0 0 1 ${x - 2} ${y - 18}`} width={2.6} opacity={0.6} />
    </g>
  );
}

/** A heart centred on (cx, cy), `s` = about its width. */
const heart = (cx: number, cy: number, s: number) => {
  const k = s / 40;
  const p = (dx: number, dy: number) => `${Math.round((cx + dx * k) * 10) / 10} ${Math.round((cy + dy * k) * 10) / 10}`;
  return `M${p(0, 16)}C${p(-6, 10)} ${p(-20, 2)} ${p(-20, -7)}C${p(-20, -15)} ${p(-14, -19)} ${p(-9, -19)}C${p(-4, -19)} ${p(-1, -16)} ${p(0, -12)}` +
    `C${p(1, -16)} ${p(4, -19)} ${p(9, -19)}C${p(14, -19)} ${p(20, -15)} ${p(20, -7)}C${p(20, 2)} ${p(6, 10)} ${p(0, 16)}Z`;
};

export default {
  /* ---------------------------------------------------------------------------------------
   * Lesson l.easy: when work goes well
   * ------------------------------------------------------------------------------------- */

  // "een eitje": a little egg (very easy) — one brown egg in a red egg cup, a twinkle.
  'w.eitje': () => (
    <g>
      <Ground cx={60} cy={104} rx={30} ry={5} />
      <Shade color={PAL.card} opacity={1} at={[90, 50, 18, 44]}>
        <path d="M60 14C78 14 88 42 88 58C88 76 76 84 60 84C44 84 32 76 32 58C32 42 42 14 60 14Z" fill="#f6dcae" />
      </Shade>
      <Shine d="M46 28Q40 37 39 48" width={4} opacity={0.75} />
      {/* The egg cup */}
      <ellipse cx="60" cy="99" rx="24" ry="6" fill={PAL.redShade} />
      <rect x="51" y="84" width="18" height="14" rx="3" fill={PAL.redShade} />
      <Shade color={PAL.redShade} opacity={1} at={[92, 76, 14, 20]}>
        <path d="M28 62H92Q92 90 60 90Q28 90 28 62Z" fill={PAL.red} />
      </Shade>
      <Shine d="M35 68Q37 79 46 84" width={3.4} opacity={0.45} />
      <Sparkle x={97} y={24} r={9} />
      <Sparkle x={22} y={36} r={5} />
    </g>
  ),

  // "als een trein": like a train (going very well) — a cheerful red steam engine on the
  // rails, puffs of smoke trailing back.
  'w.alseentrein': () => (
    <g>
      <rect x="10" y="100" width="100" height="5" rx="2.5" fill={PAL.slate} />
      {/* Smoke */}
      <g fill={PAL.mist}>
        <circle cx="76" cy="22" r="8" />
        <circle cx="61" cy="17" r="6.5" />
        <circle cx="48" cy="15" r="5" />
      </g>
      {/* Chimney */}
      <rect x="71" y="34" width="12" height="22" fill={PAL.slate} />
      <rect x="67" y="29" width="20" height="8" rx="2.5" fill={PAL.slateDark} />
      {/* Boiler */}
      <Shade color={PAL.redShade} opacity={1} at={[72, 86, 40, 12]}>
        <rect x="44" y="52" width="54" height="32" rx="12" fill={PAL.red} />
      </Shade>
      <rect x="58" y="52" width="5" height="32" fill={PAL.yellow} />
      <rect x="80" y="52" width="5" height="32" fill={PAL.yellow} />
      <path d="M52 50Q58 38 64 50Z" fill={PAL.yellow} />
      <rect x="95" y="54" width="8" height="28" rx="3" fill={PAL.slateDark} />
      <circle cx="104" cy="60" r="4" fill={PAL.yellowLight} />
      {/* Cab */}
      <Shade color={PAL.navyShade} opacity={1} at={[50, 62, 7, 30]}>
        <rect x="16" y="40" width="34" height="46" rx="3" fill={PAL.navy} />
      </Shade>
      <rect x="12" y="33" width="42" height="9" rx="3" fill={PAL.slateDark} />
      <rect x="22" y="47" width="20" height="15" rx="3" fill={PAL.ice} />
      {/* Chassis, wheels, rod, cow-catcher */}
      <rect x="14" y="82" width="88" height="7" rx="2" fill={PAL.slateDark} />
      <path d="M98 84L108 100H96Z" fill={PAL.yellowShade} stroke={PAL.yellowShade} strokeWidth="2" strokeLinejoin="round" />
      {[[33, 87, 13], [68, 91.5, 8.5], [88, 91.5, 8.5]].map(([cx, cy, r]) => (
        <g key={cx}>
          <circle cx={cx} cy={cy} r={r} fill={PAL.slate} />
          <circle cx={cx} cy={cy} r={r * 0.35} fill={PAL.steel} />
        </g>
      ))}
      <path d="M33 90L88 93" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <Shine d="M50 58Q47 64 48 72" width={3} opacity={0.5} />
    </g>
  ),

  // "de handen uit de mouwen": the hands out of the sleeves (get to work) — two hands come up
  // out of rolled-up blue work sleeves, ready to start.
  'w.mouwen': () => (
    <g>
      <RolledArm x={34} y={60} rotate={-10} skin={SKIN.henk} sleeve={[PAL.blue, PAL.blueLight, PAL.blue]} />
      <RolledArm x={86} y={60} rotate={10} skin={SKIN.henk} sleeve={[PAL.blue, PAL.blueLight, PAL.blue]} mirror />
      <Sparkle x={60} y={30} r={8} />
    </g>
  ),

  // "een handje helpen": to help with a little hand — a small hand holds up a big box from below; up it goes.
  'w.handje': () => (
    <g>
      <Box x={18} y={30} w={58} h={38} depth={16} />
      <Hand pose="open" x={50} y={108} scale={0.8} skin={SKIN.jada} sleeve={[PAL.green, PAL.greenShade]} />
      <Arrow from={[98, 96]} to={[98, 56]} color={PAL.sky} width={7} head={11} />
    </g>
  ),

  // "onder de knie hebben": to have it under the knee (to know it well) — a leg in work
  // trousers, bent with the knee up; a red ball lies right under the knee.
  'w.knie': () => (
    <g>
      <Ground cx={62} cy={104} rx={46} ry={5} />
      {/* The ball, under the knee */}
      <Shade color={PAL.redShade} opacity={1} at={[70, 96, 10, 14]}>
        <circle cx="58" cy="89" r="14" fill={PAL.red} />
      </Shade>
      <Shine d="M49 84A9 9 0 0 1 55 79" width={3} opacity={0.6} />
      {/* Seat and thigh up to the knee, shin down to the boot */}
      <path d="M60 32L88 88" stroke={PAL.blueShade} strokeWidth="22" strokeLinecap="round" />
      <circle cx="24" cy="88" r="15" fill={PAL.blue} />
      <path d="M26 88L58 32" stroke={PAL.blue} strokeWidth="26" strokeLinecap="round" />
      <path d="M20 80L44 40" stroke={PAL.blueLight} strokeWidth="3.4" strokeLinecap="round" opacity=".7" />
      {/* Knee pad on the knee */}
      <ellipse cx="62" cy="30" rx="13" ry="12" fill={PAL.orange} />
      <path d="M55 33Q62 38 69 33" fill="none" stroke={PAL.orangeShade} strokeWidth="2.2" strokeLinecap="round" />
      {/* Boot */}
      <path d="M80 84Q88 78 96 82L106 92Q110 98 104 101H82Q76 100 78 92Z" fill={PAL.brown} />
      <rect x="78" y="98" width="30" height="5" rx="2.5" fill={PAL.slateDark} />
    </g>
  ),

  // "voor de bakker": for the baker (done, sorted) — a golden loaf wearing a baker's hat.
  'w.bakker': () => (
    <g>
      <Ground cx={60} cy={104} rx={44} ry={5} />
      {/* Baker's hat */}
      <g>
        <circle cx="44" cy="31" r="12" fill={PAL.white} />
        <circle cx="76" cy="31" r="12" fill={PAL.paperShade} />
        <circle cx="60" cy="24" r="14" fill={PAL.white} />
        <rect x="40" y="34" width="40" height="22" rx="3" fill={PAL.white} />
        <rect x="64" y="34" width="16" height="22" rx="3" fill={PAL.paperShade} />
        <path d="M44 46H76" stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* The loaf */}
      <Shade color={PAL.cardDark} opacity={0.8} at={[96, 92, 34, 22]}>
        <path d="M14 88Q14 54 60 52Q106 54 106 88Q106 102 92 102H28Q14 102 14 88Z" fill={PAL.card} />
      </Shade>
      <g stroke="#f0c48a" strokeWidth="5" strokeLinecap="round">
        <path d="M30 76L40 66M50 76L60 64M70 76L80 66M88 80L95 72" />
      </g>
      <Shine d="M22 80Q24 66 36 60" width={3.5} opacity={0.5} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * Lesson l.plain: saying how it is
   * ------------------------------------------------------------------------------------- */

  // "aan de bel trekken": to pull the bell (to warn) — an old brass bell on a beam, a hand
  // pulls its rope down; it rings.
  'w.aandebel': () => (
    <g>
      <rect x="26" y="10" width="64" height="9" rx="3" fill={PAL.wood} />
      <rect x="54" y="16" width="8" height="8" fill={PAL.slate} />
      <Shade color={PAL.yellowShade} opacity={1} at={[82, 44, 14, 30]}>
        <path d="M58 20C71 20 74 32 74 42C74 52 78 57 86 62H30C38 57 42 52 42 42C42 32 45 20 58 20Z" fill={PAL.yellow} />
      </Shade>
      <rect x="27" y="59" width="62" height="7" rx="3.5" fill={PAL.yellowShade} />
      <Shine d="M49 28Q46 36 46 46" color={PAL.yellowShine} width={3.5} opacity={0.8} />
      <circle cx="58" cy="70" r="5.5" fill={PAL.slate} />
      {/* The rope, pulled down by a hand */}
      <path d="M58 72V108" stroke={PAL.card} strokeWidth="5" strokeLinecap="round" />
      <path d="M56 78l4 3M56 85l4 3M56 92l4 3" stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" />
      <Hand pose="hold" x={58} y={118} scale={0.7} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      <Motion x={58} y={42} dir={180} spread={50} n={2} len={9} gap={26} color={PAL.orange} width={3.6} />
      <Motion x={58} y={42} dir={0} spread={50} n={2} len={9} gap={26} color={PAL.orange} width={3.6} />
      <path d="M90 78V96" stroke={PAL.sky} strokeWidth="6" strokeLinecap="round" />
      <path d="M83 92L90 101L97 92" fill="none" stroke={PAL.sky} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),

  // "op je tandvlees lopen": to walk on your gums (very tired) — a tooth in its pink gum,
  // walking on two little legs, a drop of sweat.
  'w.tandvlees': () => (
    <g>
      <Ground cx={60} cy={104} rx={30} ry={4} />
      {/* Legs and shoes */}
      <path d="M50 76L42 98M70 76L80 96" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <path d="M34 100Q34 94 42 94Q48 95 48 101Z" fill={PAL.slateDark} stroke={PAL.slateDark} strokeWidth="2" strokeLinejoin="round" />
      <path d="M78 98Q78 92 86 92Q92 93 92 99Z" fill={PAL.slateDark} stroke={PAL.slateDark} strokeWidth="2" strokeLinejoin="round" />
      {/* The tooth: a grey depth edge so it shows on a white card */}
      <path d="M34 30Q34 12 48 14Q55 16 60 20Q65 16 72 14Q86 12 86 30L83 66H37Z" fill={PAL.mist} transform="translate(2 3)" />
      <Shade color={PAL.paperShade} opacity={1} at={[90, 40, 16, 40]}>
        <path d="M34 30Q34 12 48 14Q55 16 60 20Q65 16 72 14Q86 12 86 30L83 66H37Z" fill={PAL.paper} />
      </Shade>
      <Shine d="M40 34Q40 24 47 21" width={3.5} opacity={0.9} />
      {/* The gum */}
      <Shade color={PAL.blush} opacity={0.9} at={[96, 76, 18, 16]}>
        <path d="M28 66Q28 58 38 58Q48 62 60 62Q72 62 82 58Q92 58 92 66Q92 80 76 80H44Q28 80 28 66Z" fill={PAL.redLight} />
      </Shade>
      <path d="M100 26Q106 36 106 40A6 6 0 0 1 94 40Q94 36 100 26Z" fill={PAL.ice} />
      <Motion x={30} y={44} dir={180} spread={40} n={3} len={8} gap={0} color={PAL.line} width={3.2} />
    </g>
  ),

  // "met de deur in huis vallen": to fall into the house with the door (say it straight
  // away) — a house whose green front door tips over into the dark doorway.
  'w.deur': () => (
    <g>
      <Ground cx={60} cy={105} rx={46} ry={4} />
      <path d="M12 52L60 14L108 52Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="4" strokeLinejoin="round" />
      <Shade color={PAL.clayShade} opacity={1} at={[106, 76, 14, 40]}>
        <rect x="20" y="48" width="80" height="56" rx="2" fill={PAL.clay} />
      </Shade>
      <rect x="28" y="58" width="16" height="14" rx="2" fill={PAL.ice} />
      <rect x="44" y="60" width="32" height="44" rx="2" fill={PAL.slateDark} />
      {/* The door, falling in: tilted round its bottom left corner */}
      <g transform="rotate(24 46 104)">
        <rect x="46" y="62" width="28" height="42" rx="2" fill={PAL.green} />
        <rect x="64" y="62" width="10" height="42" rx="2" fill={PAL.greenShade} />
        <circle cx="68" cy="84" r="2.6" fill={PAL.yellow} />
      </g>
      <path d="M80 56Q90 60 94 70" fill="none" stroke={PAL.yellow} strokeWidth="4" strokeLinecap="round" />
      <path d="M86 50Q98 56 102 68" fill="none" stroke={PAL.yellow} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),

  // "geen blad voor de mond nemen": to put no leaf in front of your mouth (to say honestly
  // what you think) — Henk speaks freely; the leaf next to his mouth is crossed out.
  'w.blad': () => (
    <g>
      <Bust who="henk" x={44} y={122} scale={0.72} talk bold />
      <path d="M72 66Q72 32 106 26Q108 62 72 66Z" fill={PAL.leaf} />
      <path d="M72 66Q86 50 100 34" fill="none" stroke={PAL.leafShade} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M72 66L66 72" stroke={PAL.leafShade} strokeWidth="3" strokeLinecap="round" />
      <Cross x={96} y={70} r={13} />
    </g>
  ),

  // "het regent pijpenstelen": it rains pipe stems (it rains very hard) — a grey cloud
  // dropping straight sticks.
  'w.pijpenstelen': () => (
    <g>
      <g>
        <circle cx="40" cy="34" r="16" fill={PAL.steel} />
        <circle cx="62" cy="26" r="19" fill={PAL.steel} />
        <circle cx="84" cy="36" r="15" fill={PAL.steel} />
        <rect x="22" y="34" width="78" height="20" rx="10" fill={PAL.steel} />
        <rect x="26" y="46" width="70" height="8" rx="4" fill={PAL.slate} />
      </g>
      <Shine d="M30 32Q32 24 40 21" width={3.5} opacity={0.45} />
      {[[30, 62, 24], [46, 74, 26], [62, 60, 26], [78, 76, 24], [94, 62, 24], [38, 92, 14], [70, 94, 13]].map(([x, y, h]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 3} y={y} width="6" height={h} rx="3" fill={PAL.card} />
          <rect x={x} y={y} width="3" height={h} rx="1.5" fill={PAL.cardDark} />
        </g>
      ))}
    </g>
  ),

  // "een hart onder de riem": a heart under the belt (kind words) — a red heart tucked
  // behind the belt of work trousers.
  'w.hart': () => (
    <g>
      {/* Trousers, waist up */}
      <Shade color={PAL.navyShade} opacity={1} at={[110, 80, 16, 40]}>
        <path d="M20 54H100L104 108H66L60 86L54 108H16Z" fill={PAL.navy} strokeLinejoin="round" stroke={PAL.navy} strokeWidth="3" />
      </Shade>
      <path d="M60 74V86" stroke={PAL.navyShade} strokeWidth="2" strokeLinecap="round" />
      <path d="M26 74Q34 82 40 74" fill="none" stroke={PAL.navyShade} strokeWidth="2" strokeLinecap="round" />
      {/* The heart, tucked under the belt */}
      <path d={heart(80, 56, 46)} fill={PAL.redShade} transform="translate(1 2)" />
      <path d={heart(80, 56, 46)} fill={PAL.red} />
      <Shine d="M66 44Q67 38 72 37" width={3.4} opacity={0.6} />
      {/* Belt with buckle */}
      <rect x="12" y="56" width="96" height="16" rx="3" fill={PAL.brown} />
      <path d="M16 60H106" stroke={PAL.wood} strokeWidth="1.4" strokeLinecap="round" opacity=".8" />
      <rect x="28" y="52" width="24" height="24" rx="4" fill={PAL.yellow} />
      <rect x="33" y="57" width="14" height="14" rx="2" fill={PAL.brown} />
      <rect x="38" y="62" width="9" height="4" rx="2" fill={PAL.yellowShade} />
      <circle cx="98" cy="64" r="2" fill={PAL.slateDark} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * "Zo zeggen ze het": one saying in a later lesson
   * ------------------------------------------------------------------------------------- */

  // "een oogje in het zeil houden": to keep a little eye in the sail (to watch that all goes
  // well) — a sailboat on the water with an eye in its sail.
  'zg.zeil': () => (
    <g>
      {/* Water */}
      <path d="M10 98Q20 93 30 98T50 98T70 98T90 98T110 98V106H10Z" fill={PAL.sky} />
      {/* Sails */}
      <Shade color={PAL.paperShade} opacity={1} at={[96, 70, 18, 40]}>
        <path d="M62 12L62 80H102Z" fill={PAL.paper} stroke={PAL.paper} strokeWidth="4" strokeLinejoin="round" />
      </Shade>
      <path d="M56 22L56 80H28Z" fill="#e3f5ff" stroke="#e3f5ff" strokeWidth="4" strokeLinejoin="round" />
      <rect x="57" y="10" width="5" height="76" rx="2" fill={PAL.wood} />
      {/* The eye in the sail, looking out */}
      <path d="M64 58Q74 46 86 58Q74 70 64 58Z" fill={PAL.white} />
      <path d="M64 58Q74 46 86 58" fill="none" stroke={PAL.ink} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="77" cy="58" r="5" fill={PAL.sky} />
      <circle cx="78" cy="58" r="2.4" fill={PAL.ink} />
      {/* Hull */}
      <path d="M20 84H106L94 100H32Z" fill={PAL.red} stroke={PAL.red} strokeWidth="3" strokeLinejoin="round" />
      <path d="M26 90H101" stroke={PAL.redShade} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),

  // "ik voel me niet lekker": I don't feel tasty (a bit ill) — Bram looks ill; a thermometer
  // with the red high.
  'zg.lekker': () => (
    <g>
      <Bust who="bram" x={46} y={122} scale={0.74} emotion="sick" tilt={-8} bold />
      <Thermometer x={94} y={100} h={70} />
      <Motion x={94} y={28} dir={-90} spread={90} n={3} len={6} gap={6} color={PAL.red} width={3.4} />
    </g>
  ),

  // "mijn batterij opladen": to charge my battery (to rest) — a battery filling up with
  // green bars, a lightning bolt, the cable plugged in.
  'zg.batterij': () => (
    <g>
      <Ground cx={56} cy={106} rx={26} ry={4} />
      <path d="M78 92Q100 96 100 76V64" fill="none" stroke={PAL.slateDark} strokeWidth="5" strokeLinecap="round" />
      <rect x="93" y="50" width="14" height="16" rx="3" fill={PAL.slate} />
      <path d="M96 50V43M104 50V43" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      <rect x="48" y="12" width="18" height="10" rx="3" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={1} at={[82, 62, 8, 50]}>
        <rect x="32" y="20" width="50" height="84" rx="9" fill={PAL.slate} />
      </Shade>
      <rect x="38" y="27" width="38" height="70" rx="5" fill={PAL.slateDark} />
      <rect x="42" y="77" width="30" height="16" rx="3" fill={PAL.leaf} />
      <rect x="42" y="57" width="30" height="16" rx="3" fill={PAL.leaf} />
      <rect x="42" y="37" width="30" height="16" rx="3" fill={PAL.leaf} opacity=".35" />
      <path d="M62 30L46 62H58L52 90L72 54H60L66 30Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="2" strokeLinejoin="round" />
      <Shine d="M36 32V50" width={3} opacity={0.35} />
    </g>
  ),

  // "het is niet pluis": it is not fluffy (something is wrong) — a ball of wool gone messy,
  // a tangled thread hanging out.
  'zg.pluis': () => (
    <g>
      <Ground cx={56} cy={100} rx={32} ry={5} />
      <Shade color={PAL.purpleShade} opacity={1} at={[92, 76, 22, 36]}>
        <circle cx="54" cy="60" r="36" fill={PAL.purple} />
      </Shade>
      <g fill="none" stroke={PAL.purpleShade} strokeWidth="2.4" strokeLinecap="round">
        <path d="M26 44Q54 28 84 48" />
        <path d="M20 62Q54 42 90 66" />
        <path d="M26 82Q56 60 86 84" />
        <path d="M44 26Q30 58 46 94" />
      </g>
      <g fill="none" stroke={PAL.purpleLight} strokeWidth="2.6" strokeLinecap="round">
        <path d="M34 34Q42 30 48 36Q42 44 52 46" />
        <path d="M60 30Q70 24 76 32" />
      </g>
      {/* Fluff sticking out and a loose, tangled thread */}
      <path d="M40 22L36 14M58 22L60 13M74 28L80 20" stroke={PAL.purpleLight} strokeWidth="3" strokeLinecap="round" />
      <path d="M86 74Q104 74 102 88Q100 100 88 96Q78 92 88 86Q98 82 104 96Q107 104 96 106" fill="none" stroke={PAL.purple} strokeWidth="3.4" strokeLinecap="round" />
      <Shine d="M30 52Q32 40 40 34" width={3.5} opacity={0.4} />
    </g>
  ),

  // "oefening baart kunst": practice gives birth to art — a painting on an easel, a brush
  // with fresh paint in front.
  'zg.oefening': () => (
    <g>
      <Ground cx={56} cy={105} rx={36} ry={4} />
      <path d="M40 70L28 104M72 70L84 104M56 70V100" stroke={PAL.cardDark} strokeWidth="5" strokeLinecap="round" />
      <rect x="18" y="14" width="76" height="60" rx="3" fill={PAL.cardDark} />
      <rect x="23" y="19" width="66" height="50" rx="2" fill="#e3f5ff" />
      <circle cx="74" cy="34" r="8" fill={PAL.yellow} />
      <path d="M23 69V56Q40 40 58 54Q72 46 89 54V69Z" fill={PAL.leaf} />
      <path d="M23 69V62Q46 52 89 64V69Z" fill={PAL.green} />
      {/* The brush */}
      <path d="M106 104L84 74" stroke={PAL.red} strokeWidth="7" strokeLinecap="round" />
      <path d="M84 74L78 66" stroke={PAL.steel} strokeWidth="8" strokeLinecap="butt" />
      <path d="M79 67Q72 58 70 52Q78 54 83 63Z" fill={PAL.blue} stroke={PAL.blue} strokeWidth="3" strokeLinejoin="round" />
      <path d="M44 34Q50 26 58 32" fill="none" stroke={PAL.blue} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),

  // "zwart op wit": black on white (in writing) — a white sheet with black lines of writing
  // and a signature.
  'zg.zwartwit': () => (
    <g>
      <g transform="rotate(-4 60 60)">
        <path d="M28 12H80L94 26V108H28Z" fill={PAL.mist} transform="translate(3 3)" />
        <path d="M28 12H80L94 26V108H28Z" fill={PAL.white} />
        <path d="M80 12V26H94Z" fill={PAL.paperShade} />
        <g stroke={PAL.ink} strokeWidth="4.2" strokeLinecap="round">
          <path d="M37 32H70M37 44H84M37 56H84M37 68H78M37 80H84" />
        </g>
        <path d="M58 98Q62 88 66 96Q70 104 74 92Q78 86 82 96" fill="none" stroke={PAL.blue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M54 102H86" stroke={PAL.line} strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </g>
  ),

  // "te mooi om waar te zijn": too beautiful to be true — a shiny gift box with a big bow,
  // twinkles all round.
  'zg.temooi': () => (
    <g>
      <Ground cx={60} cy={105} rx={40} ry={5} />
      <Shade color={PAL.purpleShade} opacity={1} at={[96, 80, 12, 30]}>
        <rect x="26" y="56" width="68" height="48" rx="3" fill={PAL.purple} />
      </Shade>
      <rect x="22" y="44" width="76" height="16" rx="3" fill={PAL.purpleLight} />
      <rect x="53" y="44" width="14" height="60" fill={PAL.yellow} />
      <rect x="61" y="44" width="6" height="60" fill={PAL.yellowShade} />
      {/* Bow */}
      <path d="M60 44Q42 22 36 34Q32 46 60 44Z" fill={PAL.yellow} />
      <path d="M60 44Q78 22 84 34Q88 46 60 44Z" fill={PAL.yellowShade} />
      <circle cx="60" cy="43" r="5" fill={PAL.yellowLight} />
      <Shine d="M30 66V86" width={3.4} opacity={0.4} />
      <Sparkle x={98} y={22} r={10} />
      <Sparkle x={18} y={26} r={7} />
      <Sparkle x={106} y={58} r={5} />
    </g>
  ),

  // "haastige spoed is zelden goed": hasty speed is rarely good — an alarm clock running on
  // two legs, speed lines behind it, a drop of sweat.
  'zg.haast': () => (
    <g>
      <Ground cx={64} cy={104} rx={30} ry={4} />
      <path d="M58 78L46 98M72 78L88 92" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <path d="M38 101Q38 95 46 95Q52 96 52 102Z" fill={PAL.slateDark} stroke={PAL.slateDark} strokeWidth="2" strokeLinejoin="round" />
      <path d="M86 96Q86 90 94 90Q100 91 100 97Z" fill={PAL.slateDark} stroke={PAL.slateDark} strokeWidth="2" strokeLinejoin="round" />
      <g transform="rotate(14 66 50)">
        <Clock cx={66} cy={50} r={30} hour={2} minute={45} rim={PAL.orange} rimShade={PAL.orangeShade} bells />
      </g>
      <path d="M12 40H26M10 54H24M14 68H28" stroke={PAL.line} strokeWidth="4" strokeLinecap="round" />
      <path d="M104 14Q110 24 110 28A6 6 0 0 1 98 28Q98 24 104 14Z" fill={PAL.ice} />
    </g>
  ),

  // "wie niet waagt, die niet wint": who does not dare does not win — a target with an arrow
  // right in the middle.
  'zg.waagt': () => (
    <g>
      <circle cx="54" cy="64" r="42" fill={PAL.redShade} />
      <circle cx="52" cy="62" r="42" fill={PAL.red} />
      <circle cx="52" cy="62" r="31" fill={PAL.white} />
      <circle cx="52" cy="62" r="20" fill={PAL.red} />
      <circle cx="52" cy="62" r="9" fill={PAL.white} />
      <Shine d="M20 48A34 34 0 0 1 36 28" width={3.5} opacity={0.5} />
      {/* The arrow, stuck in the bull's eye */}
      <path d="M53 61L96 20" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <path d="M96 20L94 10L104 14Z" fill={PAL.sky} stroke={PAL.sky} strokeWidth="3" strokeLinejoin="round" />
      <path d="M96 20L106 22L102 12Z" fill={PAL.skyShade} stroke={PAL.skyShade} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="52" cy="62" r="3.4" fill={PAL.slateDark} />
    </g>
  ),

  // "de klant is koning": the customer is king — a golden crown with jewels.
  'zg.koning': () => (
    <g>
      <Ground cx={60} cy={100} rx={40} ry={5} />
      <Shade color={PAL.yellowShade} opacity={1} at={[100, 64, 18, 40]}>
        <path d="M18 36L38 58L60 28L82 58L102 36L96 86H24Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="4" strokeLinejoin="round" />
      </Shade>
      <rect x="22" y="80" width="76" height="16" rx="4" fill={PAL.yellowShade} />
      <circle cx="18" cy="34" r="6" fill={PAL.yellowLight} />
      <circle cx="60" cy="25" r="7" fill={PAL.yellowLight} />
      <circle cx="102" cy="34" r="6" fill={PAL.yellowLight} />
      <circle cx="60" cy="66" r="7" fill={PAL.red} />
      <circle cx="38" cy="72" r="5" fill={PAL.sky} />
      <circle cx="82" cy="72" r="5" fill={PAL.green} />
      <circle cx="40" cy="88" r="3.2" fill={PAL.yellowLight} />
      <circle cx="60" cy="88" r="3.2" fill={PAL.yellowLight} />
      <circle cx="80" cy="88" r="3.2" fill={PAL.yellowLight} />
      <Shine d="M30 54L28 68" color={PAL.yellowShine} width={3.5} opacity={0.8} />
      <Sparkle x={100} y={14} r={7} />
    </g>
  ),

  // "tijd is geld": time is money — a big gold coin whose face is a clock, on a stack of coins.
  'zg.tijdgeld': () => (
    <g>
      <Ground cx={60} cy={106} rx={44} ry={4} />
      {/* The stack of coins in front, bottom left */}
      {[100, 92, 84].map((y) => (
        <g key={y}>
          <ellipse cx="30" cy={y + 3} rx="18" ry="6" fill={PAL.yellowShade} />
          <rect x="12" y={y - 2} width="36" height="5" fill={PAL.yellowShade} />
          <ellipse cx="30" cy={y - 2} rx="18" ry="6" fill={PAL.yellow} />
        </g>
      ))}
      {/* The coin-clock, standing on its edge */}
      <circle cx="70" cy="58" r="38" fill={PAL.yellowShade} />
      <Shade color={PAL.yellowShade} opacity={1} at={[112, 56, 18, 50]}>
        <circle cx="66" cy="56" r="38" fill={PAL.yellow} />
      </Shade>
      <circle cx="66" cy="56" r="29" fill={PAL.yellowLight} />
      <path d="M66 31V36M91 56H86M66 81V76M41 56H46" stroke={PAL.yellowShade} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M66 56V37M66 56L80 64" stroke={PAL.ink} strokeWidth="4.4" strokeLinecap="round" />
      <circle cx="66" cy="56" r="4" fill={PAL.ink} />
      <Shine d="M36 44A32 32 0 0 1 52 24" color={PAL.yellowShine} width={4} opacity={0.8} />
      <Sparkle x={104} y={16} r={8} />
      <ellipse cx="30" cy="82" rx="10" ry="3" fill={PAL.yellowLight} opacity=".8" />
    </g>
  ),

  // "de eindjes aan elkaar knopen": to tie the little ends together (hard to make ends meet)
  // — two ropes tied together in a fat knot, their short ends sticking out.
  'zg.eindjes': () => (
    <g>
      <g fill="none" strokeLinecap="round">
        {/* The ropes from the left and the right, a darker underside */}
        <path d="M12 74Q34 56 54 60" stroke={PAL.cardDark} strokeWidth="12" transform="translate(0 2.5)" />
        <path d="M108 74Q86 56 66 60" stroke={PAL.cardDark} strokeWidth="12" transform="translate(0 2.5)" />
        <path d="M12 74Q34 56 54 60" stroke={PAL.card} strokeWidth="12" />
        <path d="M108 74Q86 56 66 60" stroke={PAL.card} strokeWidth="12" />
        {/* The two short ends, out of the knot */}
        <path d="M54 66Q46 82 34 90" stroke={PAL.cardShade} strokeWidth="10" />
        <path d="M66 54Q74 38 86 32" stroke={PAL.card} strokeWidth="10" />
        {/* The twist of the rope */}
        <path d="M20 66l3 5M30 60l3 5M41 57l2 5M100 66l-3 5M90 60l-3 5M79 57l-2 5M80 38l3 4M42 80l3 4" stroke={PAL.cardShade} strokeWidth="2.2" />
      </g>
      {/* The knot */}
      <Shade color={PAL.cardShade} opacity={1} at={[76, 64, 9, 18]}>
        <ellipse cx="60" cy="60" rx="15" ry="13" fill={PAL.card} />
      </Shade>
      <path d="M48 55Q60 64 72 54M48 66Q60 58 72 66" fill="none" stroke={PAL.cardDark} strokeWidth="2.4" strokeLinecap="round" />
      {/* Frayed tips */}
      <path d="M31 92L26 96M34 93L32 99M89 30L95 28M89 33L95 35" stroke={PAL.cardShade} strokeWidth="2.6" strokeLinecap="round" />
      <Shine d="M18 68Q28 60 40 57" color="#f6d3a2" width={3} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
