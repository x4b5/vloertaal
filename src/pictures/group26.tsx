import type { JSX } from 'react';
import { CastHead } from '../components/Characters';
import { Arrow, Bust, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 26 (keyed by id): words that were "abstract" (picture: false) but are
 * concrete enough for one clear drawing.
 *  - the body (l.body, "Waar doet het pijn?"): three cast members, each seen another way and each
 *    holding the sore part: the head (Henk, close up, a hand on his forehead), the back (Bram
 *    from behind, both hands on the small of his back) and the belly (Jada from the front, both
 *    hands on her belly). They are asked together, so each is a picture of its own.
 *  - the workshop and power (l.workshop, l.power): to grind (an angle grinder on a bar, sparks),
 *    the cable (a coil with bare copper ends, no plug), the power (a big yellow bolt).
 *  - the garage (l.garage): the car lift (a car up on two posts), flat (a flat tyre with a nail and
 *    air escaping).
 *  - broken (l.handover): a hammer snapped in two, splinters flying.
 *  - the judge (l.police): Amina in a black gown with the white bands, behind a table with a
 *    case file (no gavel: Dutch judges don't use one).
 * Look-alikes kept apart in LOOKALIKES (src/lib/wordPicture.ts): slijpen/de vonk (sparks),
 * de kabel/de stekker, lek/de band. See docs/tekenstijl.md and ./kit.tsx.
 */

const GOWN = '#4f5e6b';

/**
 * "de rug": Bram seen from behind (no face: the back of his hard hat, the back of his head and
 * his ears), in his hi-vis vest, both hands pressed on the small of his back, elbows out, the
 * sore spot in red between them.
 */
function BackView() {
  const [skin, skinShade] = SKIN.bram;
  /** An arm bent back: upper arm from the shoulder out to the elbow, forearm in to the hand,
   *  which lies flat on the back beside the sore spot, fingers pointing in. */
  const arm = (side: 1 | -1) => (
    <g transform={side === 1 ? undefined : 'translate(120 0) scale(-1 1)'}>
      <path d="M84 56L101 80L82 92" fill="none" stroke={side === 1 ? PAL.blueShade : PAL.blue} strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="rotate(-14 80 92)">
        <rect x="64" y="86" width="20" height="12" rx="5" fill={side === 1 ? skinShade : skin} />
        <path d="M66 89.6H74M66 94H74" stroke={side === 1 ? PAL.brown : skinShade} strokeWidth="1.4" strokeLinecap="round" opacity=".6" />
      </g>
    </g>
  );
  return (
    <g>
      {/* Trousers, cut off at the bottom */}
      <rect x="36" y="94" width="48" height="30" rx="4" fill={PAL.navy} />
      <path d="M60 100V124" stroke={PAL.navyShade} strokeWidth="2" />
      {/* Back: the orange vest with its reflective stripes, shade on the right */}
      <Shade color={PAL.orangeShade} opacity={1} at={[96, 76, 12, 40]}>
        <path d="M32 64Q32 50 46 48H74Q88 50 88 64L86 100H34Z" fill={PAL.orange} />
      </Shade>
      <path d="M46 50V70M74 50V70" stroke="#eef5f7" strokeWidth="4.4" />
      <rect x="33" y="68" width="54" height="5" fill="#eef5f7" />
      <rect x="34" y="94" width="52" height="6" rx="2" fill={PAL.slateDark} />
      {/* The sore spot */}
      <ellipse cx="60" cy="88" rx="12" ry="8" fill={PAL.redShade} opacity=".8" />
      {arm(1)}
      {arm(-1)}
      {/* Neck with the blue collar, ears, the back of the head and of the hard hat */}
      <rect x="52" y="36" width="16" height="15" rx="4" fill={skinShade} />
      <path d="M46 49Q60 44 74 49L72 52Q60 48 48 52Z" fill={PAL.blue} />
      <circle cx="41" cy="31" r="4.6" fill={skinShade} />
      <circle cx="79" cy="31" r="4.6" fill={skinShade} />
      <path d="M42 22H78V30Q78 44 60 44Q42 44 42 30Z" fill={PAL.brown} />
      <path d="M48 32Q50 38 54 41M60 33V42M72 32Q70 38 66 41" fill="none" stroke={PAL.ink} strokeWidth="1.6" strokeLinecap="round" opacity=".45" />
      <path d="M38 24C38 11 47 4 60 4C73 4 82 11 82 24Z" fill={PAL.yellow} />
      <path d="M71 6.6C78 10 82 16 82 24H74C74 16 73.2 10.6 71 6.6Z" fill={PAL.yellowShade} />
      <rect x="34" y="21" width="52" height="5.4" rx="2" fill={PAL.yellowShade} />
      <Shine d="M44 17Q46 11 52 8" color={PAL.yellowShine} width={3} opacity={0.9} />
    </g>
  );
}

/**
 * "de buik": Jada from the front, half length, both hands spread on her belly (on the bib of her
 * blue overalls), her face tight with pain, red lines at both sides of the belly.
 */
function BellyView() {
  const [skin, skinShade] = SKIN.jada;
  return (
    <g>
      {/* Yellow shirt, the blue bib of the overalls over the belly, straps */}
      <Shade color={PAL.yellowShade} opacity={0.9} at={[96, 84, 12, 44]}>
        <path d="M32 68Q32 52 46 50H74Q88 52 88 68L90 124H30Z" fill="#ffc929" />
      </Shade>
      <path d="M38 72H82L84 124H36Z" fill={PAL.sky} />
      <path d="M76 72H82L84 124H78Z" fill={PAL.skyShade} />
      <path d="M43 52L41 74M77 52L79 74" stroke={PAL.sky} strokeWidth="5.5" />
      <rect x="39" y="70" width="5" height="5" rx="1" fill={PAL.yellow} />
      <rect x="76" y="70" width="5" height="5" rx="1" fill={PAL.yellow} />
      {/* Arms: short sleeves, bare arms down the sides */}
      <rect x="24" y="54" width="15" height="18" rx="7" fill="#ffc929" />
      <rect x="81" y="54" width="15" height="18" rx="7" fill={PAL.yellowShade} />
      <rect x="25" y="62" width="12" height="34" rx="6" fill={skin} transform="rotate(4 31 62)" />
      <rect x="83" y="62" width="12" height="34" rx="6" fill={skinShade} transform="rotate(-4 89 62)" />
      {/* Both hands spread on the belly, fingers pointing in */}
      <Hand pose="open" x={29} y={98} rotate={70} scale={0.54} skin={SKIN.jada} />
      <Hand pose="open" x={91} y={98} rotate={-70} scale={0.54} skin={SKIN.jada} mirror />
      {/* Head */}
      <g transform="translate(60 54) scale(.56) translate(-60 -96)">
        <CastHead who="jada" emotion="pain" bold />
      </g>
      {/* Where it hurts */}
      <Motion x={20} y={90} dir={180} spread={80} n={3} len={7} gap={6} color={PAL.red} width={3.6} />
      <Motion x={100} y={90} dir={0} spread={80} n={3} len={7} gap={6} color={PAL.red} width={3.6} />
    </g>
  );
}

/** A wheel seen from the side. */
function Wheel({ cx, cy, r = 10 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={PAL.slateDark} />
      <circle cx={cx} cy={cy} r={r * 0.5} fill={PAL.mist} />
      <circle cx={cx} cy={cy} r={r * 0.18} fill={PAL.steel} />
    </g>
  );
}

/**
 * A hammer snapped in two: the head with the top of the handle tips one way, the lower handle
 * (red grip) the other, jagged wood showing at the break, with splinters flying.
 */
function BrokenHammer() {
  return (
    <g>
      <Ground cx={60} cy={107} rx={44} ry={4.5} />
      {/* Upper part: head and the top of the handle */}
      <g transform="translate(-8 4) rotate(-18 55 70)">
        <path d="M50 38H60V66L57.5 71L55 65.5L52.5 71.5L50 66Z" fill={PAL.card} />
        <path d="M56 38H60V66L57.5 71L56 68Z" fill={PAL.cardShade} />
        <Shade color={PAL.slateDark} opacity={1} at={[90, 30, 14, 20]}>
          <rect x="26" y="18" width="60" height="22" rx="5" fill={PAL.slate} />
        </Shade>
        <rect x="22" y="20" width="10" height="18" rx="3" fill={PAL.steel} />
        <Shine d="M36 24H62" width={3.4} opacity={0.45} />
      </g>
      {/* Lower part: the rest of the handle with its grip */}
      <g transform="translate(14 2) rotate(24 55 72)">
        <path d="M50 75L52.5 70.5L55 76L57.5 70L60 75V100Q60 105 55 105Q50 105 50 100Z" fill={PAL.card} />
        <path d="M56 73L57.5 70L60 75V100Q60 105 56 105Z" fill={PAL.cardShade} />
        <rect x="48.5" y="84" width="13" height="22" rx="5" fill={PAL.red} />
        <rect x="56" y="84" width="5.5" height="22" rx="2.7" fill={PAL.redShade} />
      </g>
      {/* Splinters and the snap */}
      <path d="M62 60L68 56L66 62Z M70 74L77 76L71 79Z M58 50L60 44L62 50Z" fill={PAL.cardDark} />
      <Motion x={66} y={68} dir={-20} spread={80} n={3} len={9} gap={10} color={PAL.red} width={3.6} />
    </g>
  );
}

export default {
  // "het hoofd": the head — Henk, his hand pressed to his forehead, his face tight with pain,
  // red lines above his head (front view, close up: unlike the back and the belly)
  'w.hoofd': () => (
    <g>
      <Bust who="henk" x={62} y={128} scale={0.98} emotion="pain" arms="forehead" bold />
      <Motion x={64} y={16} dir={-90} spread={100} n={3} len={6} gap={4} color={PAL.red} width={3.8} />
    </g>
  ),

  // "de buik": the belly — Jada from the front, half length, both hands on her belly
  'w.buik': () => (
    <g>
      <BellyView />
    </g>
  ),

  // "de rug": the back — Bram seen from behind, a hand on the small of his back
  'w.rug': () => (
    <g>
      <BackView />
    </g>
  ),

  // "slijpen": to grind — a hand holds an angle grinder; its disc on a metal bar throws sparks
  'w.slijpen': () => (
    <g>
      {/* Metal bar on two blocks */}
      <Ground cx={46} cy={106} rx={38} ry={3.5} />
      <rect x="14" y="94" width="10" height="12" rx="2" fill={PAL.cardShade} />
      <rect x="64" y="94" width="10" height="12" rx="2" fill={PAL.cardShade} />
      <rect x="8" y="84" width="74" height="12" rx="2" fill={PAL.steel} />
      <rect x="8" y="91" width="74" height="5" rx="2" fill={PAL.slate} opacity=".45" />
      <path d="M12 86.5H78" stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      {/* Sparks flying off to the left */}
      <Motion x={36} y={84} dir={-165} spread={50} n={4} len={11} gap={4} color={PAL.orange} width={3.4} />
      <Sparkle x={14} y={66} r={6} />
      <Sparkle x={22} y={52} r={4.5} color={PAL.orangeLight} />
      {/* Disc and its guard */}
      <circle cx="44" cy="70" r="15" fill={PAL.slate} />
      <circle cx="44" cy="70" r="4" fill={PAL.mist} />
      <path d="M27 66A17 17 0 0 1 61 66H55A11 11 0 0 0 33 66Z" fill={PAL.mist} />
      {/* Grinder body going right, held by a hand */}
      <rect x="40" y="62" width="14" height="12" rx="3" fill={PAL.slateDark} />
      <Shade color={PAL.orangeShade} opacity={1} at={[90, 74, 60, 6]}>
        <rect x="50" y="56" width="58" height="20" rx="9" fill={PAL.orange} />
      </Shade>
      <path d="M96 60V72M101 60V72" stroke={PAL.orangeShade} strokeWidth="1.8" strokeLinecap="round" />
      <Shine d="M56 60H72" opacity={0.6} />
      <Hand pose="hold" x={80} y={88} scale={0.82} skin={SKIN.amina} sleeve={[PAL.blue, PAL.blueShade]} />
    </g>
  ),

  // "de kabel": the cable — an orange cable rolled up in a coil, two ends with bare copper wires
  'w.kabel': () => (
    <g>
      <Ground cx={60} cy={104} rx={40} ry={4.5} />
      {/* One end out of the back of the coil, up and over */}
      <path d="M86 40Q100 26 98 14" fill="none" stroke={PAL.orangeShade} strokeWidth="8" strokeLinecap="round" />
      <path d="M96 13L94 6M100 13L102 6" stroke={PAL.cardShade} strokeWidth="2.6" strokeLinecap="round" />
      {/* The coil: loops one behind the other */}
      <ellipse cx="54" cy="64" rx="38" ry="32" fill="none" stroke={PAL.orangeShade} strokeWidth="8" />
      <ellipse cx="57" cy="66" rx="34" ry="28" fill="none" stroke={PAL.orange} strokeWidth="8" />
      <ellipse cx="60" cy="68" rx="30" ry="25" fill="none" stroke={PAL.orangeShade} strokeWidth="8" />
      <ellipse cx="63" cy="70" rx="26" ry="22" fill="none" stroke={PAL.orange} strokeWidth="8" />
      <Shine d="M30 48Q38 38 52 35" opacity={0.55} />
      {/* The other end out of the front, to the floor */}
      <path d="M86 84Q100 98 112 96" fill="none" stroke={PAL.orange} strokeWidth="8" strokeLinecap="round" />
      <rect x="110" y="93" width="4" height="6" rx="1" fill={PAL.slate} />
      <path d="M112 93L117 90M113 97L118 99" stroke={PAL.cardShade} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),

  // "de stroom": the power, electricity — a big yellow lightning bolt
  'w.stroom': () => (
    <g>
      <Shade color={PAL.yellowShade} opacity={1} at={[96, 60, 22, 70]}>
        <path d="M70 8L28 66H56L44 112L94 46H66L80 8Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="5" strokeLinejoin="round" />
      </Shade>
      <Shine d="M64 18L44 48" color={PAL.yellowShine} width={4} opacity={0.8} />
      <Sparkle x={20} y={30} r={7} color={PAL.orange} />
      <Sparkle x={100} y={92} r={6} color={PAL.orange} />
    </g>
  ),

  // "de hefbrug": the car lift — a car up on two blue posts, an arrow under it
  'w.hefbrug': () => (
    <g>
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* Posts with feet */}
      <rect x="10" y="20" width="10" height="86" rx="2" fill={PAL.blue} />
      <rect x="16" y="20" width="4" height="86" fill={PAL.blueShade} />
      <rect x="6" y="100" width="18" height="6" rx="2" fill={PAL.blueShade} />
      <rect x="100" y="20" width="10" height="86" rx="2" fill={PAL.blue} />
      <rect x="106" y="20" width="4" height="86" fill={PAL.blueShade} />
      <rect x="96" y="100" width="18" height="6" rx="2" fill={PAL.blueShade} />
      {/* Lift arms under the car */}
      <rect x="14" y="58" width="92" height="6" rx="2" fill={PAL.slate} />
      {/* The car */}
      <path d="M22 54V46Q22 40 30 39L42 38L52 26Q55 23 60 23H78Q83 23 86 27L94 38L100 40Q104 41 104 46V54Z" fill={PAL.red} stroke={PAL.red} strokeWidth="2" strokeLinejoin="round" />
      <path d="M84 26L94 38L100 40Q104 41 104 46V54H86Z" fill={PAL.redShade} />
      <path d="M48 38L56 29Q57 28 60 28H67V38Z" fill={PAL.ice} />
      <path d="M71 28H78Q80 28 81 30L88 38H71Z" fill={PAL.ice} />
      <Wheel cx={38} cy={56} r={9} />
      <Wheel cx={86} cy={56} r={9} />
      <Shine d="M30 43Q40 41 46 41" opacity={0.6} />
      {/* Going up */}
      <Arrow from={[60, 100]} to={[60, 72]} color={PAL.sky} width={7} head={12} />
    </g>
  ),

  // "lek": flat — a tyre seen from the side, squashed flat at the bottom, a nail in the tread
  // and air hissing out sideways
  'w.lek': () => (
    <g>
      <Ground cx={56} cy={106} rx={46} ry={4.5} />
      {/* Tyre: round on top, squashed and bulging wide at the bottom */}
      <path d="M14 60A40 40 0 0 1 94 60C96 76 104 92 102 98Q100 105 92 105H16Q8 105 6 98C4 92 12 76 14 60Z" fill={PAL.slate} />
      <path d="M84 30A40 40 0 0 1 94 60C96 76 104 92 102 98Q100 105 92 105H84Z" fill="#000" opacity=".2" />
      {/* Side wall and rim, sitting low */}
      <ellipse cx="54" cy="66" rx="29" ry="28" fill={PAL.slateDark} />
      <circle cx="54" cy="66" r="21" fill={PAL.mist} />
      <path d="M54 66V48M54 66L71 60M54 66L64 81M54 66L44 81M54 66L37 60" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <circle cx="54" cy="66" r="6" fill={PAL.steel} />
      <Shine d="M22 44Q30 28 46 22" color={PAL.steel} opacity={0.9} />
      {/* Nail in the side of the tread, air hissing out to the right */}
      <rect x="92" y="54" width="10" height="4" rx="1.5" fill={PAL.mist} transform="rotate(-10 97 56)" />
      <rect x="101" y="49" width="4.5" height="13" rx="2" fill={PAL.steel} transform="rotate(-10 103 56)" />
      <Motion x={98} y={70} dir={20} spread={60} n={3} len={9} gap={8} color={PAL.sky} width={3.6} />
    </g>
  ),

  // "kapot": broken — a hammer snapped in two (the lesson: "Deze boor is kapot", "Deze kabel is
  // kapot"; a tool, not a plate, which at card size read as two blue arcs)
  'w.kapot': () => (
    <g>
      <BrokenHammer />
    </g>
  ),

  // "de rechter": the judge — Amina in the black gown with the white bands (the Dutch judge's
  // toga and bef), behind a table with a case file on it. No gavel: Dutch judges don't use one.
  'w.rechter': () => (
    <g>
      <g transform="translate(60 104) scale(0.78) translate(-60 -134)">
        {/* Gown */}
        {/* A step lighter than slate, so the gown keeps its shape on the dark card */}
        <path d="M14 152C14 108 34 95 60 95C86 95 106 108 106 152Z" fill={GOWN} />
        <path d="M22 140C22 120 30 108 42 102" fill="none" stroke={PAL.white} strokeWidth="4" strokeLinecap="round" opacity=".3" />
        <path d="M86 100C99 108 106 124 106 152H86C88 132 88 114 86 100Z" fill={PAL.slateDark} />
        {/* Velvet front edges */}
        <path d="M46 98L52 152M74 98L68 152" stroke={PAL.slateDark} strokeWidth="7" strokeLinecap="round" />
        {/* Headscarf drape, then the white bands (short, so they show above the table) */}
        <path d="M36 92L43 96H77L84 92L86 105H34Z" fill={PAL.purple} />
        <path d="M78 96L84 92L86 105H80Z" fill={PAL.purpleShade} />
        <path d="M52 100H68L67 122Q60 125 53 122Z" fill={PAL.white} />
        <path d="M60 101V123" stroke={PAL.paperShade} strokeWidth="2.2" />
        <CastHead who="amina" expr="neutral" bold />
      </g>
      {/* The table in front, with the case file on it */}
      <rect x="8" y="104" width="104" height="18" rx="2" fill={PAL.cardShade} />
      <rect x="92" y="104" width="20" height="18" rx="2" fill={PAL.cardDark} />
      <rect x="8" y="102" width="104" height="5" rx="2" fill={PAL.card} />
      <rect x="72" y="91" width="38" height="11" rx="2" fill={PAL.paperShade} />
      <path d="M75 94.5H107M75 98.5H107" stroke={PAL.white} strokeWidth="1.8" />
      <rect x="70" y="88" width="40" height="5" rx="1.8" fill={PAL.sky} />
      <rect x="70" y="99" width="40" height="4" rx="1.6" fill={PAL.skyShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
