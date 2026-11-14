import type { JSX } from 'react';
import { Bust } from './bust';
import { Arrow, Box, Clock, ExclaimMark, Ground, Hand, PAL, QuestionMark, SKIN, Shade, Shine } from './kit';

/**
 * Word pictures, group 50 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The four logistics lessons of 14 November 2026: Magazijn (u.warehouse: l.picking, l.loading) and
 * Vervoer en bezorging (u.delivery: l.vancheck, l.delay).
 *
 * The words of one lesson stand side by side in a picture choice, so each has its own main shape
 * and colour:
 *  - "Order picking" (l.picking): the item (ONE purple product carton, not the cardboard of "de
 *    doos" or the flat parcel of "het pakket"), the slot (the rack of "de stelling", faded, with
 *    one place framed in sky blue), the sticker (a sheet of yellow stickers, one peeled up; "het
 *    etiket" is one white label on cardboard under a finger), to collect (products going into a
 *    blue picking bin), to be missing (a shelf with two boxes, a dashed empty place and a question
 *    mark between them) and the location (a red pin on the label of a rack beam, seen close up).
 *  - "Loading and unloading" (l.loading): the truck (a long grey trailer with a blue stripe and a
 *    red cab; "de bestelbus" is one white van with an orange stripe), the driver (Bram behind a
 *    steering wheel; "rijden" is two hands on a wheel, no face), to unload (the open back of the
 *    trailer, an arrow out of it to boxes on a pallet; "inladen" is an arrow INTO a van), the
 *    pallet truck (low steel forks under a pallet, an orange pump and a long handle; "de
 *    steekwagen" stands up, "de kar" has a deck, "de heftruck" has a mast and a seat), the wrap (a
 *    stack of boxes under a shiny blue film, the roll next to it) and the waybill (a form with a
 *    small truck at the top and its pink and yellow copies under it; "de werkbon" is a clipboard
 *    with a wrench).
 *  - "Checking the van" (l.vancheck): the damage (the whole white van, scratches and a broken
 *    light at the back, a red warning mark above them), the dent (a door panel close up with one
 *    round hollow), the mirror (a dark side mirror on its arm, light-blue glass), to fill up (a
 *    green nozzle in the filler of the van, a golden drop; "de benzine" is the whole pump), to
 *    charge (a battery, two of three bars full, a lightning bolt, on a cable and plug; "de
 *    elektrische auto" is a car at a post) and to park (a van seen from above between the white
 *    lines of a bay, an arrow in).
 *  - "Delays on the road" (l.delay): the traffic jam (two rows of cars bumper to bumper, brake
 *    lights on), the delay (a clock with half an hour marked orange and a red plus; "te laat" has
 *    Bram coming in, "duren" is an hourglass), the diversion (a road closed by a red and white
 *    barrier, a blue arrow round it), the navigation (a phone with a road map, a blue way and an
 *    arrow on it; "de route" is a folded paper map), the planner (Henk at a screen with a route
 *    of stops) and the return (a parcel under an arrow that turns back).
 */

const TINT = '#e3f5ff';
/** The floor of a dent: a step between the palette's steel and mist. */
const DENT = '#aab6bf';

/** A wheel seen from the side. */
function Wheel({ cx, cy, r = 10 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={PAL.slateDark} />
      <circle cx={cx} cy={cy} r={r * 0.5} fill={PAL.mist} />
      <circle cx={cx} cy={cy} r={r * 0.2} fill={PAL.steel} />
    </g>
  );
}

/** A flat cardboard box seen from the front (the boxes of "de stelling", ./group4.tsx). */
function FlatBox({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill={PAL.card} />
      <rect x={x + w * 0.72} y={y} width={w * 0.28} height={h} rx="2" fill={PAL.cardShade} />
      <rect x={x + w / 2 - 3} y={y} width="6" height={h * 0.4} fill="#f6dcae" />
      <path d={`M${x + 2.5} ${y + 2}H${x + w * 0.68}`} stroke="#f6d3a2" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/** A barcode: dark bars of two widths. */
function Bars({ x, y, h, k = 1 }: { x: number; y: number; h: number; k?: number }) {
  const widths = [2.4, 1.2, 1.2, 2.4, 1.2, 2.4, 1.2, 2.4];
  const starts = widths.map((_, i) => widths.slice(0, i).reduce((sum, w) => sum + (w + 1.6) * k, x));
  return (
    <g fill={PAL.ink}>
      {widths.map((w, i) => <rect key={i} x={starts[i]} y={y} width={w * k} height={h} />)}
    </g>
  );
}

/** A map pin, its point at (x, y), `s` tall. */
function Pin({ x, y, s }: { x: number; y: number; s: number }) {
  const d = 'M60 52C52 42 45 34 45 26A15 15 0 0 1 75 26C75 34 68 42 60 52Z';
  return (
    <g transform={`translate(${x} ${y}) scale(${s / 41}) translate(-60 -52)`}>
      <path d={d} fill={PAL.redShade} transform="translate(1.5 2)" />
      <path d={d} fill={PAL.red} />
      <circle cx="60" cy="26" r="6" fill={PAL.white} />
    </g>
  );
}

/** A drop, its point up at (x, y), `s` tall. */
function Drop({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s / 24})`}>
      <path d="M0 0Q8 12 8 16A8 8 0 0 1 -8 16Q-8 12 0 0Z" fill={PAL.yellowShade} />
      <path d="M-4 17Q-4 13 -2 10" fill="none" stroke={PAL.yellowShine} strokeWidth="2.2" strokeLinecap="round" />
    </g>
  );
}

/** A lightning bolt, `s` tall, centred on (x, y). */
function Bolt({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s / 104}) translate(-61 -60)`}>
      <Shade color={PAL.yellowShade} opacity={1} at={[96, 60, 22, 70]}>
        <path d="M70 8L28 66H56L44 112L94 46H66L80 8Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="6" strokeLinejoin="round" />
      </Shade>
    </g>
  );
}

/** A wooden pallet seen from the front, `w` wide, standing on y + 12. */
function PalletFront({ x, y, w }: { x: number; y: number; w: number }) {
  return (
    <g>
      <rect x={x} y={y + 3} width={w} height="6" fill={PAL.brown} opacity=".85" />
      <rect x={x} y={y} width={w} height="4" rx="1.5" fill={PAL.card} />
      {[x, x + w / 2 - 3.5, x + w - 7].map((bx) => <rect key={bx} x={bx} y={y + 3} width="7" height="6" fill={PAL.cardShade} />)}
      <rect x={x} y={y + 8} width={w} height="4" rx="1.5" fill={PAL.card} />
    </g>
  );
}

/**
 * The white delivery van of "de bestelbus" (./group36.tsx), side on, nose to the right: the same
 * van in "de schade". Keep the two in step.
 */
function Van() {
  return (
    <g>
      <Shade color={PAL.paperShade} opacity={1} at={[60, 104, 72, 22]}>
        <path d="M8 92V34Q8 26 16 26H78V92Z" fill={PAL.paper} />
      </Shade>
      <Shade color={PAL.mist} opacity={1} at={[112, 80, 16, 30]}>
        <path d="M76 92V38Q76 34 80 34H92Q97 34 100 39L109 58Q112 61 112 68V92Z" fill={PAL.paper} />
      </Shade>
      <path d="M83 41H93L102 58H83Z" fill={TINT} stroke={TINT} strokeWidth="2" strokeLinejoin="round" />
      <path d="M78 30V90" stroke={PAL.paperShade} strokeWidth="2.4" />
      <rect x="8" y="64" width="104" height="9" fill={PAL.orange} />
      <rect x="8" y="70" width="104" height="3" fill={PAL.orangeShade} />
      <rect x="104" y="78" width="8" height="6" rx="2" fill={PAL.yellow} />
      <Wheel cx={30} cy={92} r={11} />
      <Wheel cx={92} cy={92} r={11} />
    </g>
  );
}

/**
 * A small car from the side, nose to the left, its brake light on. (0, 0) is on the sill between
 * the wheels, at the height of the wheel centres; about 90 wide and 51 tall at scale 1 (the car
 * of ./group49.tsx).
 */
function Car({ x, y, k, body, shade }: { x: number; y: number; k: number; body: string; shade: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <Shade color={shade} opacity={1} at={[52, -20, 22, 40]}>
        <path d="M-44 -4V-14Q-44 -21 -37 -22L-26 -24L-15 -38Q-12 -41 -7 -41H14Q19 -41 22 -37L32 -24L39 -22Q46 -20 46 -13V-4Q46 0 42 0H-40Q-44 0 -44 -4Z" fill={body} />
      </Shade>
      <path d="M-20 -24L-11 -35Q-10 -36 -7 -36H1V-24Z" fill={PAL.ice} />
      <path d="M5 -36H13Q16 -36 18 -34L25 -24H5Z" fill={PAL.ice} />
      <rect x="38" y="-19" width="8" height="8" rx="2.5" fill={PAL.red} />
      <Wheel cx={-25} cy={0} r={10} />
      <Wheel cx={26} cy={0} r={10} />
    </g>
  );
}

export default {
  /* ---------------------------------------------------------------------------------------
   * l.picking: order picking
   * ------------------------------------------------------------------------------------- */

  // "het artikel": the item — ONE product: a purple carton with a picture of what is in it and a
  // barcode (no cardboard, no shipping label: not "de doos" or "het pakket").
  'w.artikel': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={104} rx={36} ry={5} />
      <path d="M80 28L94 19V91L80 100Z" fill={PAL.purpleShade} stroke={PAL.purpleShade} strokeWidth="2" />
      <path d="M30 28H80L94 19H44Z" fill={PAL.purpleLight} stroke={PAL.purpleLight} strokeWidth="2" />
      <rect x="30" y="28" width="50" height="72" rx="2" fill={PAL.purple} />
      <circle cx="55" cy="52" r="15" fill={PAL.yellow} />
      <path d="M46 48A10 10 0 0 1 54 42" fill="none" stroke={PAL.yellowShine} strokeWidth="3" strokeLinecap="round" />
      <rect x="37" y="76" width="36" height="17" rx="2.5" fill={PAL.white} />
      <Bars x={42} y={80} h={9} k={1.15} />
      <Shine d="M35 34V60" opacity={0.35} width={3} />
    </g>
  ),

  // "het vak": the slot — the rack of "de stelling", its boxes faded; one place is framed in sky
  // blue, with its box.
  'w.vak': () => (
    <g>
      <Ground cx={60} cy={106} rx={52} ry={4} />
      <rect x="19" y="43" width="39" height="28" rx="3" fill={TINT} />
      <g opacity=".4">
        <FlatBox x={25} y={18} w={26} h={20} />
        <FlatBox x={69} y={16} w={26} h={22} />
        <FlatBox x={69} y={50} w={26} h={20} />
        <FlatBox x={25} y={80} w={26} h={22} />
        <FlatBox x={69} y={82} w={26} h={20} />
      </g>
      <FlatBox x={26} y={49} w={26} h={21} />
      {[12, 56, 100].map((ux) => (
        <g key={ux}>
          <rect x={ux} y="10" width="8" height="97" rx="2.5" fill={PAL.blue} />
          <rect x={ux + 5} y="10" width="3" height="97" rx="1.5" fill={PAL.blueShade} />
        </g>
      ))}
      {[38, 70, 102].map((by) => (
        <g key={by}>
          <rect x="14" y={by} width="92" height="6" rx="2" fill={PAL.orange} />
          <rect x="14" y={by + 4} width="92" height="2" rx="1" fill={PAL.orangeShade} />
        </g>
      ))}
      <rect x="18.500" y="42.500" width="40" height="30" rx="4" fill="none" stroke={PAL.sky} strokeWidth="6" />
    </g>
  ),

  // "de sticker": the sticker — a sheet with yellow stickers (a barcode and lines on each); the
  // bottom one is peeled up from the sheet.
  'w.sticker': () => (
    <g>
      <rect x="16" y="16" width="88" height="92" rx="6" fill={PAL.mist} />
      <rect x="16" y="12" width="88" height="92" rx="6" fill={PAL.paper} />
      {[22, 48].map((sy) => (
        <g key={sy}>
          <rect x="26" y={sy} width="68" height="20" rx="4" fill={PAL.yellow} />
          <Bars x={32} y={sy + 5} h={10} />
          <path d={`M62 ${sy + 7}H86M62 ${sy + 13}H78`} stroke={PAL.yellowShade} strokeWidth="2.6" strokeLinecap="round" />
        </g>
      ))}
      {/* Where the third one sat */}
      <rect x="26" y="74" width="68" height="20" rx="4" fill={PAL.paperShade} />
      <g transform="rotate(-13 26 92)">
        <rect x="26" y="74" width="68" height="20" rx="4" fill={PAL.yellowShade} transform="translate(1 3.5)" />
        <rect x="26" y="74" width="68" height="20" rx="4" fill={PAL.yellow} />
        <Bars x={32} y={79} h={10} />
        <path d="M62 81H82M62 87H76" stroke={PAL.yellowShade} strokeWidth="2.6" strokeLinecap="round" />
        {/* Curl */}
        <path d="M94 80L82 94Q92 100 100 88Q96 85 94 80Z" fill={PAL.yellowShine} />
      </g>
    </g>
  ),

  // "verzamelen": to collect — products in a blue picking bin; one more goes in (an arrow down).
  'w.verzamelen': () => (
    <g>
      <Ground cx={60} cy={105} rx={42} ry={4.5} />
      {/* What is in the bin already */}
      <rect x="26" y="34" width="24" height="34" rx="2.5" fill={PAL.purple} />
      <rect x="43" y="34" width="7" height="34" rx="2.5" fill={PAL.purpleShade} />
      <rect x="54" y="44" width="20" height="24" rx="2.5" fill={PAL.yellow} />
      <rect x="68" y="44" width="6" height="24" rx="2.5" fill={PAL.yellowShade} />
      {/* The bin */}
      <Shade color={PAL.blueShade} opacity={1} at={[104, 82, 20, 30]}>
        <path d="M17 60H103L95 102H25Z" fill={PAL.blue} stroke={PAL.blue} strokeWidth="3" strokeLinejoin="round" />
      </Shade>
      <rect x="13" y="56" width="94" height="10" rx="4" fill={PAL.blueShade} />
      <rect x="47" y="76" width="26" height="8" rx="4" fill={PAL.blueShade} />
      <Shine d="M19 59.500H50" color={PAL.blueLight} width={2.6} opacity={0.8} />
      {/* One more */}
      <rect x="80" y="10" width="16" height="22" rx="4" fill={PAL.red} />
      <rect x="80" y="17" width="16" height="8" fill={PAL.paper} />
      <Arrow from={[88, 36]} to={[88, 54]} color={PAL.sky} width={7} head={10} />
    </g>
  ),

  // "ontbreken": to be missing — a shelf with a box, an empty place (dashed) and a box; a
  // question mark over the empty place.
  'w.ontbreken': () => (
    <g>
      <Ground cx={60} cy={106} rx={52} ry={4} />
      <FlatBox x={21} y={56} w={26} h={28} />
      <FlatBox x={75} y={56} w={26} h={28} />
      <rect x="49" y="57" width="24" height="26" rx="3" fill="none" stroke={PAL.line} strokeWidth="2.8" strokeDasharray="5 4.500" strokeLinecap="round" />
      {[8, 104].map((ux) => (
        <g key={ux}>
          <rect x={ux} y="14" width="8" height="93" rx="2.5" fill={PAL.blue} />
          <rect x={ux + 5} y="14" width="3" height="93" rx="1.5" fill={PAL.blueShade} />
        </g>
      ))}
      <rect x="10" y="84" width="100" height="7" rx="2" fill={PAL.orange} />
      <rect x="10" y="88.500" width="100" height="2.500" rx="1.2" fill={PAL.orangeShade} />
      <QuestionMark x={61} y={33} size={38} color={PAL.red} />
    </g>
  ),

  // "de locatie": the location — a rack seen close up: the label on the beam says which place it
  // is, and a red pin points at it.
  'w.locatie': () => (
    <g>
      {/* Upright with its holes */}
      <rect x="8" y="10" width="18" height="100" rx="3" fill={PAL.blue} />
      <rect x="20" y="10" width="6" height="100" rx="2" fill={PAL.blueShade} />
      <path d="M15 20V102" stroke={PAL.blueShade} strokeWidth="3" strokeLinecap="round" strokeDasharray="3 9" />
      {/* Beam */}
      <rect x="24" y="64" width="88" height="24" rx="3" fill={PAL.orange} />
      <rect x="24" y="81" width="88" height="7" rx="3" fill={PAL.orangeShade} />
      {/* The label */}
      <rect x="42" y="65" width="54" height="20" rx="3" fill={PAL.white} />
      <Bars x={47} y={69} h={12} k={1.1} />
      <path d="M74 72H90M74 78H84" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      <Pin x={69} y={62} s={50} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.loading: loading and unloading
   * ------------------------------------------------------------------------------------- */

  // "de vrachtwagen": the truck — a long grey trailer with a blue stripe behind a red cab, on
  // three wheels (not the white van of "de bestelbus").
  'w.vrachtwagen': () => (
    <g>
      <Ground cx={60} cy={104} rx={54} ry={4} />
      <rect x="8" y="82" width="104" height="7" rx="2" fill={PAL.slate} />
      {/* Trailer */}
      <Shade color={PAL.steel} opacity={0.5} at={[40, 92, 50, 16]}>
        <rect x="6" y="26" width="70" height="58" rx="4" fill={PAL.mist} />
      </Shade>
      <path d="M29 30V56M53 30V56" stroke={PAL.steel} strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
      <rect x="6" y="58" width="70" height="8" fill={PAL.sky} />
      <rect x="6" y="63.500" width="70" height="2.500" fill={PAL.skyShade} />
      <Shine d="M12 32H34" opacity={0.8} width={3} />
      {/* Cab */}
      <Shade color={PAL.redShade} opacity={1} at={[114, 70, 12, 30]}>
        <path d="M80 86V46Q80 40 86 40H97Q102 40 104 45L112 62V86Z" fill={PAL.red} />
      </Shade>
      <path d="M86 46H96L103 62H86Z" fill={TINT} stroke={TINT} strokeWidth="2" strokeLinejoin="round" />
      <rect x="106" y="71" width="6" height="7" rx="2" fill={PAL.yellow} />
      <Wheel cx={22} cy={92} />
      <Wheel cx={44} cy={92} />
      <Wheel cx={95} cy={92} />
    </g>
  ),

  // "de chauffeur": the driver — Bram behind the steering wheel, both hands on it ("rijden" is
  // the wheel and two hands, no face).
  'w.chauffeur': () => (
    <g>
      <Bust who="bram" x={60} y={98} scale={0.62} expr="pleased" />
      <ellipse cx="60" cy="92" rx="31" ry="13" fill="none" stroke={PAL.slate} strokeWidth="8" />
      <path d="M31 92H89M60 92V104" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="60" cy="92" rx="9" ry="5" fill={PAL.steel} />
      <Hand pose="fist" x={29} y={101} rotate={-14} scale={0.5} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      <Hand pose="fist" x={91} y={101} rotate={14} scale={0.5} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} mirror />
    </g>
  ),

  // "lossen": to unload — the open back of the trailer; an arrow comes out of it to the boxes
  // that stand on a pallet on the floor ("inladen" is an arrow into a van).
  'w.lossen': () => (
    <g>
      <Ground cx={60} cy={106} rx={52} ry={4} />
      <rect x="8" y="82" width="48" height="6" rx="2" fill={PAL.slate} />
      <rect x="8" y="22" width="48" height="62" rx="4" fill={PAL.mist} />
      <rect x="8" y="56" width="36" height="8" fill={PAL.sky} />
      <rect x="8" y="61.500" width="36" height="2.500" fill={PAL.skyShade} />
      {/* The open back */}
      <rect x="40" y="26" width="16" height="54" rx="2" fill={PAL.slateDark} />
      <rect x="56" y="22" width="5" height="62" rx="2" fill={PAL.steel} />
      <Wheel cx={26} cy={94} />
      {/* On the floor */}
      <PalletFront x={66} y={92} w={44} />
      <Box x={70} y={62} w={30} h={30} depth={9} />
      <Arrow from={[48, 42]} to={[98, 42]} color={PAL.sky} width={8} head={13} />
    </g>
  ),

  // "de pompwagen": the pallet truck — long low steel forks under a pallet with a box, an orange
  // pump on a big wheel and a long handle to pull it by.
  'w.pompwagen': () => (
    <g>
      <Ground cx={62} cy={106} rx={50} ry={4} />
      <Box x={52} y={42} w={40} h={36} depth={12} />
      <PalletFront x={42} y={78} w={66} />
      {/* Forks and their small wheel */}
      <rect x="30" y="91" width="80" height="6" rx="2.5" fill={PAL.steel} />
      <circle cx="101" cy="101" r="4.500" fill={PAL.slateDark} />
      {/* Handle */}
      <path d="M28 68L19 28" stroke={PAL.slate} strokeWidth="5.5" strokeLinecap="round" />
      <ellipse cx="17" cy="21" rx="8" ry="6.500" fill="none" stroke={PAL.slate} strokeWidth="5" transform="rotate(-12 17 21)" />
      {/* Pump */}
      <Shade color={PAL.orangeShade} opacity={1} at={[40, 82, 8, 24]}>
        <rect x="18" y="64" width="20" height="34" rx="5" fill={PAL.orange} />
      </Shade>
      <Shine d="M23 70V84" color={PAL.yellowShine} opacity={0.6} width={3} />
      <circle cx="28" cy="98" r="8.500" fill={PAL.slateDark} />
      <circle cx="28" cy="98" r="3.500" fill={PAL.mist} />
    </g>
  ),

  // "de folie": the wrap — a stack of boxes on a pallet under thin shiny blue film; the roll
  // stands next to it, the film still on the stack.
  'w.folie': () => (
    <g>
      <Ground cx={58} cy={106} rx={52} ry={4} />
      <PalletFront x={12} y={92} w={72} />
      <FlatBox x={16} y={68} w={32} h={24} />
      <FlatBox x={50} y={68} w={30} h={24} />
      <FlatBox x={19} y={44} w={28} h={24} />
      <FlatBox x={49} y={46} w={30} h={22} />
      {/* The film from the stack to the roll */}
      <path d="M84 46L96 58V98L84 88Z" fill={PAL.ice} opacity=".75" />
      {/* The film round the stack */}
      <rect x="11" y="39" width="74" height="56" rx="6" fill={PAL.ice} opacity=".62" />
      <path d="M11 57H85M11 75H85" stroke={PAL.sky} strokeWidth="2" opacity=".45" />
      <path d="M22 86L42 48M44 88L58 60" stroke={PAL.white} strokeWidth="4" strokeLinecap="round" opacity=".8" />
      {/* The roll */}
      <Shade color={PAL.sky} opacity={0.55} at={[112, 78, 8, 30]}>
        <rect x="94" y="54" width="17" height="50" rx="3.500" fill={PAL.ice} />
      </Shade>
      <ellipse cx="102.500" cy="54" rx="8.500" ry="3.600" fill={PAL.sky} />
      <ellipse cx="102.500" cy="54" rx="3.600" ry="1.600" fill={PAL.cardDark} />
    </g>
  ),

  // "de vrachtbrief": the waybill — a form with a small truck at the top, rows of what is in the
  // load and a signature; its pink and yellow copies lie under it.
  'w.vrachtbrief': () => (
    <g>
      <rect x="28" y="22" width="72" height="88" rx="4" fill={PAL.yellowLight} />
      <rect x="22" y="16" width="72" height="88" rx="4" fill={PAL.redLight} />
      <rect x="16" y="10" width="72" height="88" rx="4" fill={PAL.white} />
      {/* Header: the truck */}
      <rect x="22" y="16" width="60" height="20" rx="3" fill={TINT} />
      <rect x="27" y="20" width="20" height="10" rx="1.6" fill={PAL.blue} />
      <path d="M48 30V25Q48 23 50 23H53L57 27V30Z" fill={PAL.red} />
      <circle cx="32" cy="31" r="2.800" fill={PAL.slateDark} />
      <circle cx="42" cy="31" r="2.800" fill={PAL.slateDark} />
      <circle cx="53" cy="31" r="2.800" fill={PAL.slateDark} />
      <path d="M63 23H77M63 29H72" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      {/* Rows */}
      {[43, 54, 65].map((ry, i) => (
        <g key={ry}>
          <rect x="22" y={ry} width="8" height="7" rx="1.8" fill={PAL.paperShade} />
          <path d={`M35 ${ry + 3.5}H${[70, 62, 74][i]}`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
        </g>
      ))}
      {/* Signature */}
      <path d="M22 91H56" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M25 89Q28 78 32 84Q35 90 38 82Q41 76 45 86Q47 89 52 82" fill="none" stroke={PAL.blue} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="64" y="78" width="18" height="13" rx="2.500" fill={PAL.paperShade} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.vancheck: checking the van
   * ------------------------------------------------------------------------------------- */

  // "de schade": the damage — the white van of "de bestelbus": long scratches, a crumpled corner
  // and a broken light at its back, with a red warning mark above them.
  'w.schade': () => (
    <g>
      <Ground cx={60} cy={104} rx={48} ry={4} />
      <g transform="translate(60 104) scale(0.84) translate(-60 -104)">
        <Van />
        {/* Crumpled corner, scratches, the broken light */}
        <path d="M8 72L18 79L11 85L20 92H8Z" fill={PAL.steel} />
        <rect x="8" y="46" width="7" height="13" rx="2" fill={PAL.red} />
        <path d="M8 52L15 49M11 59L13 53" stroke={PAL.white} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 34L36 46L29 52L46 62M40 32L54 46M24 56L38 62" fill="none" stroke={PAL.slate} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle cx="34" cy="21.500" r="14" fill={PAL.redShade} />
      <circle cx="34" cy="20" r="14" fill={PAL.red} />
      <ExclaimMark x={34} y={20} size={18} color={PAL.white} />
    </g>
  ),

  // "de deuk": the dent — a grey door panel seen close up, with one round hollow pressed into it
  // (dark at the top left, light on its lower edge).
  'w.deuk': () => (
    <g>
      <Shade color={PAL.steel} opacity={0.45} at={[114, 60, 18, 60]}>
        <rect x="10" y="12" width="100" height="94" rx="9" fill={PAL.mist} />
      </Shade>
      <rect x="10" y="86" width="100" height="9" fill={PAL.orange} />
      <rect x="10" y="92" width="100" height="3" fill={PAL.orangeShade} />
      <rect x="82" y="22" width="20" height="7" rx="3.500" fill={PAL.slate} />
      {/* The dent */}
      <ellipse cx="52" cy="53" rx="29" ry="23" fill={PAL.steel} />
      <ellipse cx="56" cy="57" rx="23" ry="17" fill={DENT} />
      <path d="M34 72Q54 84 76 66" fill="none" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" opacity=".85" />
      {/* Creases round it */}
      <path d="M16 38L23 42M17 68L24 64M52 20V26M86 44L80 47M84 70L78 67" stroke={PAL.steel} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),

  // "de spiegel": the mirror — the side mirror of the van: a dark housing on its arm at the
  // door, light-blue glass with a glint.
  'w.spiegel': () => (
    <g>
      {/* The door it sits on */}
      <rect x="6" y="10" width="22" height="100" rx="4" fill={PAL.mist} />
      <rect x="20" y="10" width="8" height="100" rx="3" fill={PAL.steel} opacity=".6" />
      <path d="M26 74H46" stroke={PAL.slate} strokeWidth="10" strokeLinecap="round" />
      <Shade color={PAL.slateDark} opacity={1} at={[104, 62, 14, 50]}>
        <rect x="40" y="20" width="62" height="84" rx="16" fill={PAL.slate} />
      </Shade>
      <rect x="48" y="28" width="46" height="68" rx="10" fill={PAL.ice} />
      <rect x="48" y="78" width="46" height="18" rx="9" fill={PAL.sky} opacity=".35" />
      <path d="M56 62L72 38M66 70L78 52" stroke={PAL.white} strokeWidth="4.5" strokeLinecap="round" opacity=".8" />
    </g>
  ),

  // "tanken": to fill up — a green fuel nozzle in the filler of the white van, its hose hanging
  // down; a golden drop falls ("de benzine" is the whole pump).
  'w.tanken': () => (
    <g>
      {/* The side of the van */}
      <Shade color={PAL.mist} opacity={0.7} at={[84, 60, 14, 60]}>
        <rect x="6" y="10" width="76" height="100" rx="6" fill={PAL.paperShade} />
      </Shade>
      <rect x="6" y="80" width="76" height="9" fill={PAL.orange} />
      <rect x="6" y="86" width="76" height="3" fill={PAL.orangeShade} />
      {/* The open flap and the filler */}
      <rect x="18" y="30" width="11" height="34" rx="3.500" fill={PAL.steel} />
      <circle cx="48" cy="47" r="17" fill={PAL.slate} />
      <circle cx="48" cy="47" r="10.500" fill={PAL.slateDark} />
      <Drop x={44} y={66} s={15} />
      {/* Hose, spout and nozzle */}
      <path d="M103 60Q110 90 94 110" fill="none" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <path d="M50 46L78 36" stroke={PAL.steel} strokeWidth="7.5" strokeLinecap="round" />
      <path d="M88 44Q88 58 100 60" fill="none" stroke={PAL.slateDark} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M97 30L104 60" stroke={PAL.greenShade} strokeWidth="11" strokeLinecap="round" />
      <path d="M76 31L100 22L105 35L81 44Z" fill={PAL.green} stroke={PAL.green} strokeWidth="5" strokeLinejoin="round" />
      <Shine d="M80 33L96 27" opacity={0.45} width={2.8} />
    </g>
  ),

  // "opladen": to charge — a battery, two of its three bars full, a lightning bolt on it, on a
  // cable with a plug ("de elektrische auto" is a car at a charging post).
  'w.opladen': () => (
    <g>
      <rect x="96" y="38" width="9" height="22" rx="3.500" fill={PAL.steel} />
      <Shade color={PAL.slateDark} opacity={1} at={[100, 49, 14, 34]}>
        <rect x="12" y="22" width="86" height="54" rx="10" fill={PAL.slate} />
      </Shade>
      <rect x="19" y="29" width="72" height="40" rx="5" fill={PAL.paper} />
      <rect x="23" y="33" width="19" height="32" rx="3" fill={PAL.leaf} />
      <rect x="45.500" y="33" width="19" height="32" rx="3" fill={PAL.leaf} />
      <rect x="68" y="33" width="19" height="32" rx="3" fill={PAL.mist} />
      <Bolt x={55} y={49} s={38} />
      {/* Cable and plug */}
      <path d="M34 76Q34 99 58 98H82" fill="none" stroke={PAL.steel} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M98 93H108M98 103H108" stroke={PAL.steel} strokeWidth="3.6" strokeLinecap="round" />
      <rect x="80" y="88" width="19" height="20" rx="5" fill={PAL.slate} />
    </g>
  ),

  // "parkeren": to park — seen from above: the white van stands between the white lines of a
  // parking bay, an arrow shows the way in; a grey car stands in the bay next to it.
  'w.parkeren': () => (
    <g>
      <rect x="10" y="12" width="100" height="96" rx="8" fill={PAL.slate} />
      <path d="M40 12V84M80 12V84" stroke={PAL.paper} strokeWidth="3.6" strokeLinecap="round" />
      {/* The neighbour */}
      <rect x="16" y="24" width="18" height="46" rx="6" fill={PAL.steel} />
      <rect x="19" y="32" width="12" height="8" rx="2.500" fill={PAL.slateDark} opacity=".6" />
      {/* The van, nose to the top */}
      <rect x="44" y="30" width="5" height="6" rx="2" fill={PAL.mist} />
      <rect x="71" y="30" width="5" height="6" rx="2" fill={PAL.mist} />
      <Shade color={PAL.mist} opacity={1} at={[76, 50, 8, 40]}>
        <rect x="47" y="18" width="26" height="60" rx="6" fill={PAL.paper} />
      </Shade>
      <rect x="50" y="24" width="20" height="10" rx="3" fill={PAL.ice} />
      <rect x="47" y="64" width="26" height="6" fill={PAL.orange} />
      <Arrow from={[60, 104]} to={[60, 86]} color={PAL.ice} width={7} head={11} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.delay: delays on the road
   * ------------------------------------------------------------------------------------- */

  // "de file": the traffic jam — two rows of cars standing bumper to bumper, their brake lights
  // on.
  'w.file': () => (
    <g>
      <Ground cx={60} cy={55} rx={52} ry={3} />
      <Car x={24} y={50} k={0.38} body={PAL.green} shade={PAL.greenShade} />
      <Car x={60} y={50} k={0.38} body={PAL.steel} shade={PAL.slate} />
      <Car x={96} y={50} k={0.38} body={PAL.clay} shade={PAL.clayShade} />
      <Ground cx={60} cy={101} rx={54} ry={4} />
      <Car x={35} y={95} k={0.52} body={PAL.blue} shade={PAL.blueShade} />
      <Car x={85} y={95} k={0.52} body={PAL.yellow} shade={PAL.yellowShade} />
    </g>
  ),

  // "de vertraging": the delay — a clock: the half hour that came on top is marked orange, with
  // a red plus ("te laat" has Bram coming in, "duren" is an hourglass).
  'w.vertraging': () => (
    <g>
      <Clock
        cx={56}
        cy={64}
        r={40}
        hour={3}
        minute={30}
        face={<path d="M56 64V34A30 30 0 0 1 56 94Z" fill={PAL.orangeLight} opacity=".75" />}
      />
      <circle cx="94" cy="25.500" r="14" fill={PAL.redShade} />
      <circle cx="94" cy="24" r="14" fill={PAL.red} />
      <path d="M94 16.500V31.500M86.500 24H101.500" stroke={PAL.white} strokeWidth="4.5" strokeLinecap="round" />
    </g>
  ),

  // "de omleiding": the diversion — the road straight on is closed by a red and white barrier; a
  // blue arrow goes round it and comes back onto the road.
  'w.omleiding': () => (
    <g>
      <rect x="38" y="8" width="28" height="104" rx="3" fill={PAL.slate} />
      <path d="M52 14V108" stroke={PAL.paper} strokeWidth="3" strokeDasharray="8 8" />
      {/* The way round */}
      <path d="M52 94H88Q100 94 100 82V34Q100 22 88 22H82" fill="none" stroke={PAL.sky} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M66 22L82 10V34Z" fill={PAL.sky} stroke={PAL.sky} strokeWidth="4" strokeLinejoin="round" />
      {/* The barrier */}
      <path d="M30 62V74M74 62V74" stroke={PAL.steel} strokeWidth="4.5" strokeLinecap="round" />
      <rect x="20" y="49" width="64" height="16" rx="3.500" fill={PAL.redShade} />
      <rect x="20" y="46" width="64" height="16" rx="3.500" fill={PAL.red} />
      <path d="M32 46H42L34 62H24ZM52 46H62L54 62H44ZM72 46H82L74 62H64Z" fill={PAL.white} />
    </g>
  ),

  // "de navigatie": the navigation — a phone with a road map: the way in blue, an arrow where
  // you are and a pin where you go ("de route" is a folded paper map).
  'w.navigatie': () => (
    <g>
      <rect x="30.500" y="11" width="64" height="100" rx="12" fill={PAL.slateDark} />
      <rect x="28" y="8" width="64" height="100" rx="12" fill={PAL.slate} />
      <rect x="34" y="15" width="52" height="86" rx="6" fill={PAL.lime} />
      {/* Roads */}
      <path d="M34 80H60M34 34H86" stroke={PAL.white} strokeWidth="8" />
      <path d="M60 101V66Q60 50 74 50H86" fill="none" stroke={PAL.white} strokeWidth="13" />
      {/* The way */}
      <path d="M60 94V66Q60 50 74 50H78" fill="none" stroke={PAL.sky} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M60 72L69 92L60 87L51 92Z" fill={PAL.navy} stroke={PAL.navy} strokeWidth="2" strokeLinejoin="round" />
      <Pin x={78} y={51} s={26} />
    </g>
  ),

  // "de planner": the planner — Henk at a screen with a route on it: a line along four stops.
  'w.planner': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      <Bust who="henk" x={36} y={106} scale={0.62} expr="thinking" />
      {/* The screen */}
      <rect x="78" y="74" width="10" height="26" rx="2" fill={PAL.steel} />
      <rect x="68" y="98" width="30" height="6" rx="3" fill={PAL.steel} />
      <rect x="58" y="26" width="52" height="52" rx="6" fill={PAL.slate} />
      <rect x="63" y="31" width="42" height="40" rx="3" fill={TINT} />
      <path d="M70 62L80 44L90 58L98 40" fill="none" stroke={PAL.sky} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="70" cy="62" r="4" fill={PAL.navy} />
      <circle cx="80" cy="44" r="4" fill={PAL.orange} />
      <circle cx="90" cy="58" r="4" fill={PAL.orange} />
      <circle cx="98" cy="40" r="4" fill={PAL.red} />
    </g>
  ),

  // "het retour": the return — a parcel with its label under an arrow that sets off and turns
  // back to where it came from.
  'w.retour': () => (
    <g>
      <Ground cx={58} cy={106} rx={42} ry={4.5} />
      <Box x={20} y={66} w={58} h={38} depth={16} label />
      <path d="M46 46H88Q104 46 104 31Q104 16 88 16H44" fill="none" stroke={PAL.sky} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 16L44 4V28Z" fill={PAL.sky} stroke={PAL.sky} strokeWidth="4" strokeLinejoin="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
