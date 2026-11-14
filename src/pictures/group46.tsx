import type { JSX, ReactNode } from 'react';
import { Bust } from './bust';
import { Arrow, Box, Cross, Ground, Hand, PAL, SKIN, Shade, Shine, Sparkle, r1 } from './kit';

/**
 * Word pictures, group 46 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The sector lessons of 14 November 2026: Winkel (u.shop: l.shophelp, l.shoptrouble).
 *
 *  - "Helping a customer" (l.shophelp), six silhouettes and six main colours:
 *    the special offer (a brown pack of coffee on a shelf edge under a big red star-burst), the
 *    discount (a green tag with a percent sign drawn as shapes, and a blue arrow going down: the
 *    yellow tag with the euro is "het prijskaartje"), sold out (a grey shop shelf with nothing on
 *    it and a red cross: "het schap" is full), the stockroom (a doorway with a rolled-up door and
 *    racks with boxes behind it: "de stelling" is the bare rack, "de voorraad" a heap of boxes),
 *    the bag (one purple shopping bag with rope handles: "de zak" is a see-through carrier bag
 *    with food in it) and to order (a finger taps the button on a phone, an arrow goes to a box:
 *    "de bestelling" is the waiter's notepad).
 *  - "Difficult moments" (l.shoptrouble): two people, two acts, a sound and money.
 *    The store manager (Amina with a name badge, holding up the key of the shop: "de baas" is
 *    Henk above his team), the security guard (Henk in a grey jacket with yellow shoulder bands,
 *    a yellow badge and an earpiece; no cap, so not "de agent"), the thief (no face: a hand slips
 *    a tin under an open coat), to steal (a hand takes a tin off a shop shelf, a red cross on it:
 *    a shelf, not a coat), to shout (Jada, mouth wide open, three big red jagged lines) and money
 *    back (a green banknote on an open hand, under a blue arrow that turns round and comes back:
 *    "het wisselgeld" is coins falling into a hand).
 */

/** A tin with a paper band: (x, y) is its top-left corner. */
function Tin({ x, y, w = 16, h = 22, color = PAL.red, shade = PAL.redShade }: { x: number; y: number; w?: number; h?: number; color?: string; shade?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="3" fill={color} />
      <rect x={x + w * 0.66} y={y} width={w * 0.34} height={h} rx="3" fill={shade} />
      <rect x={x} y={y + h * 0.32} width={w} height={h * 0.36} fill={PAL.paper} />
      <rect x={x + w * 0.66} y={y + h * 0.32} width={w * 0.34} height={h * 0.36} fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height="3" rx="1.5" fill={PAL.mist} />
    </g>
  );
}

/** A shelf board of a shop gondola seen from the front, with white price strips on its edge. */
function ShelfBoard({ x, y, w, strips = 3 }: { x: number; y: number; w: number; strips?: number }) {
  const gap = w / strips;
  return (
    <g>
      <rect x={x} y={y} width={w} height="9" rx="2" fill={PAL.steel} />
      <rect x={x} y={y} width={w} height="3" rx="1.5" fill={PAL.line} />
      {Array.from({ length: strips }, (_, i) => (
        <rect key={i} x={r1(x + gap * i + gap / 2 - 7)} y={y + 3.4} width="14" height="4.6" rx="1.2" fill={PAL.white} />
      ))}
    </g>
  );
}

/** A star-burst (an offer sign): `n` points round (cx, cy). */
function Burst({ cx, cy, r, n = 12, fill }: { cx: number; cy: number; r: number; n?: number; fill: string }) {
  const points = Array.from({ length: n * 2 }, (_, i) => {
    const a = (i * Math.PI) / n - Math.PI / 2;
    const k = i % 2 === 0 ? r : r * 0.74;
    return `${r1(cx + Math.cos(a) * k)} ${r1(cy + Math.sin(a) * k)}`;
  }).join(' ');
  return <polygon points={points} fill={fill} stroke={fill} strokeWidth="2" strokeLinejoin="round" />;
}

/** Art laid over a bust, in the bust's own 120 x 140 box (the same place and scale as the Bust). */
function OnBust({ x, y, scale, children }: { x: number; y: number; scale: number; children: ReactNode }) {
  return <g transform={`translate(${x} ${y}) scale(${scale}) translate(-60 -134)`}>{children}</g>;
}

const COAT = PAL.steel;
const COAT_SHADE = '#6d7882';
/** The guard's jacket: a step lighter than slate, so it also shows on the dark card. */
const GUARD = '#506170';

export default {
  /* ---------------------------------------------------------------------------------------
   * l.shophelp: helping a customer
   * ------------------------------------------------------------------------------------- */

  // "de aanbieding": the special offer — a pack of coffee on a shelf edge, a big red star-burst on it.
  'w.aanbieding': () => (
    <g>
      {/* The pack of coffee */}
      <path d="M20 40L24 28H60L64 40Z" fill={PAL.cardDark} />
      <Shade color="#4d2c17" opacity={1} at={[70, 64, 14, 40]}>
        <rect x="20" y="38" width="44" height="50" rx="3" fill={PAL.brown} />
      </Shade>
      <rect x="20" y="52" width="44" height="22" fill={PAL.card} />
      <ellipse cx="38" cy="63" rx="6" ry="8" fill={PAL.brown} transform="rotate(24 38 63)" />
      <path d="M36 57Q41 63 39 70" fill="none" stroke={PAL.card} strokeWidth="1.8" strokeLinecap="round" />
      <ShelfBoard x={10} y={88} w={100} />
      {/* The offer sign */}
      <Burst cx={80} cy={43} r={29} fill={PAL.redShade} />
      <Burst cx={80} cy={40} r={29} fill={PAL.red} />
      <Sparkle x={80} y={40} r={15} color={PAL.white} />
      <Shine d="M61 30Q65 21 73 17" width={3} opacity={0.45} />
    </g>
  ),

  // "de korting": the discount — a green tag with a percent sign (a slash and two rings), and an
  // arrow going down: you pay less.
  'w.korting': () => (
    <g>
      <path d="M44 28Q36 12 46 10Q54 9 52 20" fill="none" stroke={PAL.slate} strokeWidth="3" strokeLinecap="round" />
      <g transform="rotate(-8 44 60)">
        <path d="M18 36L44 14L70 36V98Q70 104 64 104H24Q18 104 18 98Z" fill={PAL.greenShade} transform="translate(0 4)" />
        <Shade color={PAL.greenShade} opacity={1} at={[76, 60, 14, 60]}>
          <path d="M18 36L44 14L70 36V98Q70 104 64 104H24Q18 104 18 98Z" fill={PAL.green} stroke={PAL.green} strokeWidth="2" strokeLinejoin="round" />
        </Shade>
        <circle cx="44" cy="29" r="5" fill={PAL.white} />
        {/* Percent: a shape, not a letter */}
        <path d="M56 50L32 90" stroke={PAL.white} strokeWidth="6.5" strokeLinecap="round" />
        <circle cx="32" cy="56" r="6.5" fill="none" stroke={PAL.white} strokeWidth="5" />
        <circle cx="56" cy="84" r="6.5" fill="none" stroke={PAL.white} strokeWidth="5" />
      </g>
      <Arrow from={[94, 30]} to={[94, 100]} color={PAL.sky} width={10} head={16} />
    </g>
  ),

  // "uitverkocht": sold out — a shop shelf with nothing on it but the price strips, and a red cross.
  'w.uitverkocht': () => (
    <g>
      <Ground cx={60} cy={107} rx={48} ry={4} />
      <rect x="16" y="14" width="88" height="92" rx="3" fill={PAL.mist} />
      <rect x="92" y="14" width="12" height="92" rx="3" fill={PAL.line} opacity=".55" />
      <rect x="12" y="12" width="6" height="95" rx="2" fill={PAL.slate} />
      <rect x="102" y="12" width="6" height="95" rx="2" fill={PAL.slateDark} />
      <ShelfBoard x={14} y={38} w={92} />
      <ShelfBoard x={14} y={68} w={92} />
      <ShelfBoard x={14} y={97} w={92} />
      <Cross x={60} y={56} r={21} />
    </g>
  ),

  // "het magazijn": the stockroom — a doorway with its roller door rolled up; behind it racks with boxes.
  'w.magazijn': () => (
    <g>
      <Ground cx={60} cy={107} rx={52} ry={4} />
      {/* The wall and the dark room behind the doorway */}
      <Shade color={PAL.line} opacity={1} at={[112, 60, 12, 60]}>
        <rect x="10" y="12" width="100" height="95" rx="4" fill={PAL.mist} />
      </Shade>
      <rect x="22" y="22" width="76" height="85" fill={PAL.slate} />
      {/* Racks with boxes */}
      <rect x="35" y="56" width="20" height="16" rx="1.5" fill={PAL.card} />
      <rect x="58" y="60" width="24" height="12" rx="1.5" fill={PAL.cardShade} />
      <rect x="35" y="83" width="24" height="17" rx="1.5" fill={PAL.cardShade} />
      <rect x="62" y="80" width="20" height="20" rx="1.5" fill={PAL.card} />
      <rect x="28" y="48" width="5" height="59" fill={PAL.blue} />
      <rect x="86" y="48" width="5" height="59" fill={PAL.blueShade} />
      <rect x="28" y="72" width="63" height="5.5" rx="1.5" fill={PAL.orange} />
      <rect x="28" y="100" width="63" height="5.5" rx="1.5" fill={PAL.orange} />
      {/* The roller door, rolled up */}
      <rect x="22" y="22" width="76" height="20" fill={PAL.paper} />
      <path d="M22 28.5H98M22 35H98" stroke={PAL.line} strokeWidth="1.8" />
      <rect x="22" y="40" width="76" height="6" rx="1.5" fill={PAL.yellow} />
    </g>
  ),

  // "de tas": the bag — one purple shopping bag with two rope handles.
  'w.tas': () => (
    <g>
      <Ground cx={60} cy={106} rx={40} ry={4.5} />
      <path d="M52 40Q50 12 68 12Q86 12 86 40" fill="none" stroke={PAL.yellowShade} strokeWidth="5" strokeLinecap="round" />
      <path d="M26 46L38 38H98L86 46Z" fill={PAL.slateDark} />
      <path d="M86 46L98 38L100 98L88 105Z" fill={PAL.purpleShade} />
      <path d="M26 46H86L88 105H24Z" fill={PAL.purple} stroke={PAL.purple} strokeWidth="2" strokeLinejoin="round" />
      <path d="M38 48Q36 16 56 16Q76 16 74 48" fill="none" stroke={PAL.yellow} strokeWidth="5" strokeLinecap="round" />
      <circle cx="38" cy="50" r="3.4" fill={PAL.purpleShade} />
      <circle cx="74" cy="50" r="3.4" fill={PAL.purpleShade} />
      <Sparkle x={56} y={78} r={14} color={PAL.purpleLight} />
      <Shine d="M31 54L30 84" width={3.4} opacity={0.35} />
    </g>
  ),

  // "bestellen": to order — a finger taps the button on a phone that shows a box; an arrow goes
  // to the box that will come.
  'w.bestellen': () => (
    <g>
      <rect x="10" y="12" width="52" height="94" rx="8" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={1} at={[66, 60, 8, 60]}>
        <rect x="10" y="10" width="52" height="94" rx="8" fill={PAL.slate} />
      </Shade>
      <rect x="15" y="18" width="42" height="76" rx="3" fill="#e3f5ff" />
      <Box x={22} y={36} w={22} h={18} depth={7} />
      <rect x="20" y="66" width="32" height="15" rx="7.5" fill={PAL.green} />
      <path d="M30 73.5L34.5 78L42 69.5" fill="none" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* The box that comes */}
      <Arrow from={[68, 40]} to={[82, 40]} color={PAL.sky} width={6} head={9} />
      <Box x={84} y={32} w={18} h={18} depth={6} />
      <Hand pose="point" x={62} y={114} rotate={-25} scale={0.82} skin={SKIN.jada} sleeve={[PAL.yellow, PAL.yellowShade]} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.shoptrouble: difficult moments
   * ------------------------------------------------------------------------------------- */

  // "de bedrijfsleider": the store manager — Amina with a name badge, holding up the key of the shop.
  'w.bedrijfsleider': () => (
    <g>
      <Bust who="amina" x={42} y={122} scale={0.9} expr="pleased" />
      <OnBust x={42} y={122} scale={0.9}>
        <rect x="64" y="113" width="22" height="15" rx="2.5" fill={PAL.paperShade} />
        <rect x="64" y="111" width="22" height="15" rx="2.5" fill={PAL.white} />
        <rect x="64" y="111" width="22" height="5" rx="2" fill={PAL.red} />
        <path d="M68 120.5H82" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      </OnBust>
      {/* The key */}
      <path d="M96 52V96M96 66H105M96 76H103" stroke={PAL.yellowShade} strokeWidth="6" strokeLinecap="round" />
      <circle cx="96" cy="38" r="11" fill="none" stroke={PAL.yellow} strokeWidth="7" />
      <path d="M96 50V96M96 65H104M96 75H102" stroke={PAL.yellow} strokeWidth="5" strokeLinecap="round" />
      <Hand pose="hold" x={95} y={118} scale={0.72} skin={SKIN.amina} sleeve={['#2f8f3e', '#23722f']} />
    </g>
  ),

  // "de beveiliger": the security guard — Henk in a grey jacket with yellow shoulder bands, a
  // yellow badge and an earpiece (no cap: that is "de agent").
  'w.beveiliger': () => (
    <g>
      <Bust who="henk" x={60} y={119} scale={1} expr="neutral" />
      <OnBust x={60} y={119} scale={1}>
        <path d="M25 134L26.5 109Q28.5 96.5 42 93.5H50L60 108L70 93.5H78Q91.5 96.5 93.5 109L95 134Z" fill={GUARD} />
        <path d="M81 94.5Q91.5 97 93.5 109L95 134H84Z" fill={PAL.slate} />
        <path d="M60 108V134" stroke={PAL.slate} strokeWidth="2" />
        {/* Shoulder bands and the badge */}
        <path d="M29 103Q32 96.5 42 94.5L44 101Q36 102.5 33 108Z" fill={PAL.yellow} />
        <path d="M91 103Q88 96.5 78 94.5L76 101Q84 102.5 87 108Z" fill={PAL.yellowShade} />
        <path d="M66 110L74 106.5L82 110V119Q82 125 74 129Q66 125 66 119Z" fill={PAL.yellow} />
        <path d="M74 106.5L82 110V119Q82 125 74 129Z" fill={PAL.yellowShade} />
        {/* Earpiece: a bud in the ear and a curly wire down to the collar */}
        <circle cx="83" cy="66" r="3.4" fill={PAL.slateDark} />
        <path d="M84 69Q89 72 85 76Q81 80 86 83Q90 86 85 90Q82 92 83 96" fill="none" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      </OnBust>
    </g>
  ),

  // "de dief": the thief — no face: a hand slips a tin from the shop under an open coat.
  'w.dief': () => (
    <g>
      {/* The inside of the coat */}
      <path d="M58 20L46 120H88L68 20Z" fill={PAL.slateDark} />
      <Tin x={47} y={56} w={24} h={32} />
      {/* The coat: the left front lies over the tin */}
      <path d="M12 120V44Q12 24 34 18L46 14H60L50 120Z" fill={COAT} />
      <path d="M108 120V44Q108 24 86 18L74 14H62L86 120Z" fill={COAT} />
      <path d="M96 22Q108 28 108 44V120H96Z" fill={COAT_SHADE} />
      <path d="M59 16L49.5 120" stroke={COAT_SHADE} strokeWidth="2.4" strokeLinecap="round" />
      <ellipse cx="60" cy="16" rx="17" ry="6" fill={COAT_SHADE} />
      <Hand pose="hold" x={92} y={84} rotate={-72} scale={0.8} skin={SKIN.bram} sleeve={[COAT, COAT_SHADE]} />
    </g>
  ),

  // "stelen": to steal — a hand takes a tin off a shop shelf; a red cross: this is not allowed.
  'w.stelen': () => (
    <g>
      <rect x="10" y="30" width="64" height="62" rx="3" fill={PAL.mist} />
      <Tin x={15} y={56} w={16} h={24} color={PAL.blue} shade={PAL.blueShade} />
      <Tin x={34} y={56} w={16} h={24} color={PAL.blue} shade={PAL.blueShade} />
      <ShelfBoard x={8} y={80} w={68} strips={3} />
      <Tin x={64} y={50} w={17} h={25} />
      <Hand pose="hold" x={86} y={98} rotate={-38} scale={0.82} skin={SKIN.henk} sleeve={[COAT, COAT_SHADE]} />
      <Cross x={90} y={28} r={17} />
    </g>
  ),

  // "schreeuwen": to shout — Jada with her mouth wide open; three big red jagged lines come out.
  'w.schreeuwen': () => (
    <g>
      <Bust who="jada" x={40} y={124} scale={0.74} emotion="angry" bold />
      <ellipse cx="40" cy="82.4" rx="5.4" ry="6.4" fill={PAL.mouth} />
      <g fill="none" stroke={PAL.red} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M66 64L78 50L82 60L98 40" />
        <path d="M68 80L84 74L86 84L106 78" />
        <path d="M72 94L86 96L84 105L102 108" />
      </g>
    </g>
  ),

  // "geld terug": money back — a banknote on an open hand, under an arrow that turns round and comes back.
  'w.geldterug': () => (
    <g>
      <Hand pose="open" x={40} y={122} scale={1.3} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      {/* The banknote, on the palm */}
      <g transform="rotate(-8 42 100)">
        <rect x="16" y="90" width="52" height="26" rx="3" fill={PAL.greenShade} />
        <rect x="16" y="87" width="52" height="26" rx="3" fill={PAL.green} />
        <rect x="20" y="91" width="44" height="18" rx="2" fill="none" stroke={PAL.lime} strokeWidth="2" />
        <circle cx="42" cy="100" r="6" fill={PAL.lime} />
      </g>
      {/* The arrow that turns back */}
      <path d="M28 20H80Q102 20 102 44Q102 70 88 79" fill="none" stroke={PAL.sky} strokeWidth="8" strokeLinecap="round" />
      <polygon points="72 93 88 93.7 73.5 77.1" fill={PAL.sky} stroke={PAL.sky} strokeWidth="4" strokeLinejoin="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
