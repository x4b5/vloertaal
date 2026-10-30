import { useId, type JSX } from 'react';
import { CastHead } from '../components/Characters';
import { Arrow, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 26 (keyed by id): words that were "abstract" (picture: false) but are
 * concrete enough for one clear drawing.
 *  - the body (l.body): one plain body chart seen from the side (no face, a nose and hair show
 *    which way it looks), with one part in orange and a sky arrow at it: the head, the belly
 *    (front), the back (rear). Side on, so belly and back can't be mixed up.
 *  - the workshop and power (l.workshop, l.power): to grind (an angle grinder on a bar, sparks),
 *    the cable (a coil with bare copper ends, no plug), the power (a big yellow bolt).
 *  - the garage (l.garage): the car lift (a car up on two posts), flat (a flat tyre with a nail and
 *    air escaping).
 *  - broken (l.handover): a plate broken in two, with a shard.
 *  - the judge (l.police): Amina in a black gown with the white bands, with a gavel.
 * Look-alikes kept apart in LOOKALIKES (src/lib/wordPicture.ts): slijpen/de vonk (sparks),
 * de kabel/de stekker, lek/de band. See docs/tekenstijl.md and ./kit.tsx.
 */

const BODY = PAL.steel;
const BODY_DARK = '#76828c';
const MARK = PAL.orange;
const MARK_SHADE = PAL.orangeShade;

/**
 * A plain body chart seen from the side, looking right. `mark` colours one part orange.
 */
function BodyChart({ mark }: { mark: 'head' | 'belly' | 'back' }) {
  const c = (part: 'head' | 'belly' | 'back') => (mark === part ? MARK : BODY);
  return (
    <g>
      <Ground cx={60} cy={106} rx={26} ry={4} />
      {/* Legs and feet (the back leg a step darker) */}
      <rect x="51" y="76" width="11" height="28" rx="5" fill={BODY_DARK} />
      <rect x="51" y="98" width="20" height="8" rx="4" fill={BODY_DARK} />
      <rect x="60" y="76" width="11" height="28" rx="5" fill={BODY} />
      <rect x="60" y="98" width="21" height="8" rx="4" fill={BODY} />
      {/* Neck */}
      <rect x="57" y="30" width="10" height="10" rx="3" fill={BODY_DARK} />
      {/* Torso: back on the left, belly on the right */}
      <path d="M50 38H70Q78 38 78 47V56Q83 63 81 72Q79 82 70 82H52Q44 82 44 74V46Q44 38 50 38Z" fill={BODY} />
      {mark === 'back' && (
        <path d="M50 38H58V82H52Q44 82 44 74V46Q44 38 50 38Z" fill={MARK} />
      )}
      {mark === 'belly' && (
        <path d="M68 56H78Q83 63 81 72Q79 82 70 82H66Q62 70 68 56Z" fill={MARK} />
      )}
      <path d="M78 56Q83 63 81 72Q79 82 70 82" fill="none" stroke={mark === 'belly' ? MARK_SHADE : BODY_DARK} strokeWidth="2" strokeLinecap="round" opacity=".5" />
      {/* Arm hanging down in front */}
      <rect x="57" y="40" width="10" height="38" rx="5" fill={BODY_DARK} />
      <circle cx="62" cy="79" r="5.5" fill={BODY_DARK} />
      {/* Head: hair at the back, a nose at the front */}
      <circle cx="63" cy="20" r="13" fill={c('head')} />
      <path d="M50.5 22A13 13 0 0 1 70 9Q62 12 60 22Z" fill={mark === 'head' ? MARK_SHADE : BODY_DARK} />
      <path d="M75 18L78.5 22.5L75 24Z" fill={c('head')} stroke={c('head')} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="61" cy="21" r="2.6" fill={mark === 'head' ? MARK_SHADE : BODY_DARK} />
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

/** A white plate with a blue rim, broken in two halves along a jagged line, and one shard. */
function BrokenPlate() {
  const id = `bp-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const crack = 'M58 14L66 34L54 48L68 64L56 80L64 110';
  const plate = (
    <g>
      <ellipse cx="60" cy="66" rx="44" ry="40" fill={PAL.paperShade} />
      <ellipse cx="60" cy="62" rx="44" ry="40" fill={PAL.white} />
      <ellipse cx="60" cy="62" rx="37" ry="33.5" fill="none" stroke={PAL.sky} strokeWidth="4" />
      <ellipse cx="60" cy="64" rx="24" ry="21" fill={PAL.paperShade} />
      <ellipse cx="60" cy="62" rx="23" ry="20" fill={PAL.paper} />
    </g>
  );
  return (
    <g>
      <defs>
        <clipPath id={`${id}l`}><path d={`${crack}H0V14Z`} /></clipPath>
        <clipPath id={`${id}r`}><path d={`${crack}H120V14Z`} /></clipPath>
      </defs>
      <Ground cx={60} cy={108} rx={46} ry={4.5} />
      <g transform="translate(-10 3) rotate(-9 40 90)">
        <g clipPath={`url(#${id}l)`}>{plate}</g>
      </g>
      <g transform="translate(10 4) rotate(10 80 90)">
        <g clipPath={`url(#${id}r)`}>{plate}</g>
      </g>
      {/* A small shard in the gap, and a few chips */}
      <path d="M56 96L66 99L58 104Z" fill={PAL.paperShade} stroke={PAL.paperShade} strokeWidth="2" strokeLinejoin="round" />
      <Shine d="M24 46Q30 32 44 26" opacity={0.55} />
      <Motion x={60} y={20} dir={-90} spread={80} n={3} len={7} gap={6} color={PAL.line} width={3} />
    </g>
  );
}

export default {
  // "het hoofd": the head — the body chart with the head in orange, an arrow at it
  'w.hoofd': () => (
    <g>
      <BodyChart mark="head" />
      <Arrow from={[108, 52]} to={[86, 28]} color={PAL.sky} width={7} head={12} />
    </g>
  ),

  // "de buik": the belly — the body chart with the belly (front, below) in orange
  'w.buik': () => (
    <g>
      <BodyChart mark="belly" />
      <Arrow from={[112, 52]} to={[88, 66]} color={PAL.sky} width={7} head={12} />
    </g>
  ),

  // "de rug": the back — the body chart with the back (rear) in orange, the arrow from behind
  'w.rug': () => (
    <g>
      <BodyChart mark="back" />
      <Arrow from={[10, 40]} to={[38, 56]} color={PAL.sky} width={7} head={12} />
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

  // "kapot": broken — a plate broken in two, with a shard in the gap
  'w.kapot': () => (
    <g>
      <BrokenPlate />
    </g>
  ),

  // "de rechter": the judge — Amina in the black gown with the white bands, a gavel beside her
  'w.rechter': () => (
    <g>
      <g transform="translate(48 114) scale(0.74) translate(-60 -134)">
        {/* Gown */}
        <path d="M14 152C14 108 34 95 60 95C86 95 106 108 106 152Z" fill={PAL.slate} />
        <path d="M86 100C99 108 106 124 106 152H86C88 132 88 114 86 100Z" fill={PAL.slateDark} />
        {/* Velvet front edges */}
        <path d="M46 98L52 152M74 98L68 152" stroke={PAL.slateDark} strokeWidth="7" strokeLinecap="round" />
        {/* Headscarf drape, then the white bands */}
        <path d="M36 92L43 96H77L84 92L86 105H34Z" fill={PAL.purple} />
        <path d="M78 96L84 92L86 105H80Z" fill={PAL.purpleShade} />
        <path d="M53 100H67L66 126Q60 129 54 126Z" fill={PAL.white} />
        <path d="M60 101V127" stroke={PAL.paperShade} strokeWidth="2" />
        <CastHead who="amina" expr="neutral" bold />
      </g>
      {/* Gavel on its block */}
      <rect x="80" y="98" width="30" height="8" rx="3" fill={PAL.cardDark} />
      <rect x="80" y="98" width="30" height="3.5" rx="1.8" fill={PAL.card} />
      <g transform="rotate(-30 94 82)">
        <rect x="92" y="70" width="5" height="34" rx="2.5" fill={PAL.wood} />
        <rect x="82" y="62" width="26" height="14" rx="4" fill={PAL.brown} />
        <rect x="82" y="62" width="5" height="14" rx="2" fill={PAL.cardDark} />
        <rect x="103" y="62" width="5" height="14" rx="2" fill={PAL.cardDark} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
