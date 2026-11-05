import { useId, type JSX, type ReactNode } from 'react';
import { Arrow, Box, Ground, Hand, Motion, PAL, SKIN, Shade, Shine } from './kit';

/**
 * Word pictures, group 36 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Two new lessons of the sector unit "Vervoer en bezorging" (u.delivery, 5 November 2026) and one
 * in "In de productie" (u.factory). The words of one lesson stand side by side in a choice, so each
 * has its own main shape:
 *  - delivering parcels (l.parcel): the parcel (a flat box with a big white label and a barcode,
 *    not the tall box of "de doos"), the delivery van (a white van with an orange stripe and no
 *    side windows, not the blue minibus of "het busje"), to deliver (a parcel going to a front
 *    door), to load (a parcel going into the open back of the van), to ring the doorbell (a
 *    finger on the bell button, ringing);
 *  - on the road (l.road): to drive (two hands on the steering wheel), heavy (an iron weight
 *    pressing on the floor), the hand truck (two boxes on a hand truck), the route (a folded map
 *    with a dotted way to a pin);
 *  - working with food (l.food): the knife (a big knife with a blue handle, alone; "snijden" is a
 *    knife cutting a carrot), the cut-resistant glove (a steel mesh glove), the freezer room (an
 *    icy blue door with icicles; "de koelcel" is a grey door with a sign and a thermometer), the
 *    jewellery (a ring and a watch), the plaster (one blue plaster), the meat (a steak on a tray).
 */

const TINT = '#e3f5ff';

/** Draws `children` only inside `shape` (an alpha mask: a pattern inside a silhouette). */
function Inside({ shape, children }: { shape: ReactNode; children: ReactNode }) {
  const id = `g36-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <g>
      <mask id={id} style={{ maskType: 'alpha' }}>{shape}</mask>
      <g mask={`url(#${id})`}>{children}</g>
    </g>
  );
}

/** A wheel seen from the side. */
function Wheel({ cx, cy, r = 11 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={PAL.slateDark} />
      <circle cx={cx} cy={cy} r={r * 0.42} fill={PAL.steel} />
    </g>
  );
}

/** A front door in its frame, (x, y) the top-left of the frame, standing on y + h. */
function FrontDoor({ x, y, w = 40, h = 80 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="3" fill={PAL.mist} />
      <Shade color={PAL.navyShade} opacity={1} at={[x + w - 2, y + h / 2, 8, h]}>
        <rect x={x + 5} y={y + 5} width={w - 10} height={h - 5} rx="2" fill={PAL.navy} />
      </Shade>
      <rect x={x + 11} y={y + 12} width={w - 22} height={h * 0.26} rx="2" fill={TINT} />
      <rect x={x + w - 15} y={y + h * 0.56} width="8" height="4" rx="2" fill={PAL.yellow} />
      <Shine d={`M${x + 9} ${y + h * 0.5}V${y + h - 8}`} opacity={0.3} width={3} />
    </g>
  );
}

/** A barcode: dark bars of two widths. */
function Barcode({ x, y, h }: { x: number; y: number; h: number }) {
  const bars = [2.4, 1.2, 1.2, 2.4, 1.2, 2.4, 1.2, 1.2, 2.4];
  let at = x;
  return (
    <g fill={PAL.ink}>
      {bars.map((w, i) => {
        const r = <rect key={i} x={at} y={y} width={w} height={h} />;
        at += w + 1.6;
        return r;
      })}
    </g>
  );
}

/** A plain six-armed snowflake, centred on (x, y). */
function Snowflake({ x, y, r, color = PAL.white, width = 4 }: { x: number; y: number; r: number; color?: string; width?: number }) {
  const arms = Array.from({ length: 3 }, (_, k) => {
    const a = (k * Math.PI) / 3 + Math.PI / 2;
    return `M${x - Math.cos(a) * r} ${y - Math.sin(a) * r}L${x + Math.cos(a) * r} ${y + Math.sin(a) * r}`;
  }).join('');
  const tips = Array.from({ length: 6 }, (_, k) => {
    const a = (k * Math.PI) / 3 + Math.PI / 2;
    const px = x + Math.cos(a) * r * 0.62;
    const py = y + Math.sin(a) * r * 0.62;
    const l = r * 0.28;
    const a1 = a + 0.7;
    const a2 = a - 0.7;
    return `M${px + Math.cos(a1) * l} ${py + Math.sin(a1) * l}L${px} ${py}L${px + Math.cos(a2) * l} ${py + Math.sin(a2) * l}`;
  }).join('');
  return <path d={arms + tips} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />;
}

export default {
  // "het pakket": the parcel — a flat parcel with a big white shipping label and its barcode
  'w.pakket': () => (
    <g>
      <Ground cx={60} cy={104} rx={46} ry={5} />
      <Box x={14} y={52} w={74} h={48} depth={20} />
      <rect x="22" y="62" width="46" height="30" rx="3" fill={PAL.paperShade} transform="translate(0 2.5)" />
      <rect x="22" y="62" width="46" height="30" rx="3" fill={PAL.white} />
      <path d="M27 68H50M27 73H44" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      <Barcode x={28} y={78} h={10} />
    </g>
  ),

  // "de bestelbus": the delivery van — a white van side on, with an orange stripe, the cab in
  // front and no windows in the back
  'w.bestelbus': () => (
    <g>
      <Ground cx={60} cy={104} rx={52} ry={4} />
      <Shade color={PAL.paperShade} opacity={1} at={[60, 104, 72, 22]}>
        <path d="M8 92V34Q8 26 16 26H78V92Z" fill={PAL.paper} />
      </Shade>
      <Shade color={PAL.mist} opacity={1} at={[112, 80, 16, 30]}>
        <path d="M76 92V38Q76 34 80 34H92Q97 34 100 39L109 58Q112 61 112 68V92Z" fill={PAL.paper} />
      </Shade>
      {/* Cab window and the seam between cab and the back */}
      <path d="M83 41H93L102 58H83Z" fill={TINT} stroke={TINT} strokeWidth="2" strokeLinejoin="round" />
      <path d="M78 30V90" stroke={PAL.paperShade} strokeWidth="2.4" />
      <path d="M44 30V90" stroke={PAL.paperShade} strokeWidth="1.8" />
      {/* Orange stripe, bumper and light */}
      <rect x="8" y="64" width="104" height="9" fill={PAL.orange} />
      <rect x="8" y="70" width="104" height="3" fill={PAL.orangeShade} />
      <rect x="104" y="78" width="8" height="6" rx="2" fill={PAL.yellow} />
      <rect x="86" y="62" width="9" height="3" rx="1.5" fill={PAL.steel} />
      <Shine d="M14 34Q15 31 19 31" opacity={0.9} width={3} />
      <Wheel cx={30} cy={92} />
      <Wheel cx={92} cy={92} />
    </g>
  ),

  // "bezorgen": to deliver — a parcel goes to the front door of a house (an arrow)
  'w.bezorgen': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      <FrontDoor x={12} y={24} w={42} h={82} />
      <rect x="8" y="102" width="50" height="5" rx="2" fill={PAL.cardDark} />
      <Box x={66} y={64} w={30} h={26} depth={12} />
      <Arrow from={[96, 40]} to={[60, 40]} color={PAL.sky} width={8} head={13} />
    </g>
  ),

  // "inladen": to load — the back of the van open, a parcel goes in (an arrow)
  'w.inladen': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      {/* The van's back, seen from behind */}
      <Shade color={PAL.paperShade} opacity={1} at={[104, 60, 14, 60]}>
        <rect x="18" y="14" width="84" height="80" rx="8" fill={PAL.paper} />
      </Shade>
      <rect x="27" y="22" width="66" height="62" rx="3" fill={PAL.slateDark} />
      <rect x="27" y="76" width="66" height="8" fill={PAL.slate} />
      {/* Open doors at both sides */}
      <rect x="8" y="18" width="12" height="70" rx="3" fill={PAL.mist} />
      <rect x="100" y="18" width="12" height="70" rx="3" fill={PAL.mist} />
      <rect x="18" y="88" width="84" height="7" rx="2" fill={PAL.slate} />
      <Wheel cx={32} cy={98} r={8} />
      <Wheel cx={88} cy={98} r={8} />
      {/* One parcel already inside, one going in */}
      <Box x={66} y={60} w={20} h={16} depth={6} tape={false} />
      <Box x={34} y={50} w={28} h={24} depth={9} />
      <Arrow from={[48, 106]} to={[48, 82]} color={PAL.sky} width={8} head={12} />
    </g>
  ),

  // "aanbellen": to ring the doorbell — a finger presses the bell button next to the door; the
  // bell rings (lines)
  'w.aanbellen': () => (
    <g>
      <rect x="22" y="10" width="44" height="98" rx="3" fill={PAL.mist} />
      <rect x="26" y="10" width="40" height="98" fill={PAL.navy} opacity=".18" />
      {/* Bell plate with its button */}
      <rect x="66" y="24" width="30" height="46" rx="8" fill={PAL.steel} transform="translate(0 3)" />
      <rect x="66" y="24" width="30" height="46" rx="8" fill={PAL.paper} />
      <circle cx="81" cy="40" r="9" fill={PAL.yellowShade} />
      <circle cx="81" cy="39" r="8" fill={PAL.yellow} />
      <rect x="72" y="56" width="18" height="6" rx="2" fill={PAL.line} />
      <Motion x={81} y={39} dir={-60} spread={60} n={3} len={8} gap={14} color={PAL.sky} width={3.4} />
      <Hand pose="point" x={89} y={93} rotate={-4} scale={1.05} skin={SKIN.amina} sleeve={[PAL.orange, PAL.orangeShade]} />
    </g>
  ),

  // "rijden": to drive — two hands on the steering wheel
  'w.rijden': () => (
    <g>
      <circle cx="60" cy="64" r="38" fill="none" stroke={PAL.slate} strokeWidth="10" />
      <path d="M30 42A38 38 0 0 1 56 26" fill="none" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" opacity=".7" />
      <path d="M24 66H96M60 66V100" stroke={PAL.slate} strokeWidth="9" strokeLinecap="round" />
      <circle cx="60" cy="66" r="13" fill={PAL.slateDark} />
      <circle cx="60" cy="66" r="5" fill={PAL.steel} />
      <Hand pose="fist" x={24} y={58} rotate={-28} scale={0.66} skin={SKIN.henk} sleeve={[PAL.blue, PAL.blueShade]} />
      <Hand pose="fist" x={96} y={58} rotate={28} scale={0.66} skin={SKIN.henk} sleeve={[PAL.blue, PAL.blueShade]} mirror />
    </g>
  ),

  // "zwaar": heavy — an iron weight with a handle presses on the floor (lines pushed down)
  'w.zwaar': () => (
    <g>
      <Ground cx={60} cy={102} rx={50} ry={6} />
      <path d="M44 42V34A16 16 0 0 1 76 34V42" fill="none" stroke={PAL.slateDark} strokeWidth="9" strokeLinecap="round" />
      <Shade color={PAL.slateDark} opacity={1} at={[98, 74, 14, 34]}>
        <path d="M34 40H86L100 100H20Z" fill={PAL.slate} strokeLinejoin="round" stroke={PAL.slate} strokeWidth="4" />
      </Shade>
      <Shine d="M36 50L30 82" opacity={0.35} width={4} />
      <path d="M6 96L16 104M114 96L104 104" stroke={PAL.line} strokeWidth="3.4" strokeLinecap="round" />
      <Arrow from={[10, 46]} to={[10, 82]} color={PAL.sky} width={6} head={10} />
      <Arrow from={[110, 46]} to={[110, 82]} color={PAL.sky} width={6} head={10} />
    </g>
  ),

  // "de steekwagen": the hand truck — two boxes on a hand truck with one wheel, leaning back
  'w.steekwagen': () => (
    <g>
      <Ground cx={62} cy={106} rx={42} ry={4} />
      <g transform="rotate(-10 40 98)">
        <Box x={46} y={66} w={36} h={30} depth={10} />
        <Box x={48} y={38} w={30} h={28} depth={9} label />
        {/* Frame, handle and toe plate */}
        <path d="M40 98V20Q40 12 32 12H26" fill="none" stroke={PAL.red} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="38" y="95" width="48" height="6" rx="2" fill={PAL.steel} />
      </g>
      <Wheel cx={38} cy={98} r={10} />
    </g>
  ),

  // "de route": the route — a folded map with a dotted way from a dot to the pin
  'w.route': () => (
    <g>
      <path d="M12 26L42 18L78 26L108 18V96L78 104L42 96L12 104Z" fill={PAL.paperShade} transform="translate(0 3)" />
      <path d="M12 26L42 18V96L12 104Z" fill={PAL.lime} />
      <path d="M42 18L78 26V104L42 96Z" fill="#d9f5a0" />
      <path d="M78 26L108 18V96L78 104Z" fill={PAL.lime} />
      <path d="M42 18V96M78 26V104" stroke={PAL.leafShade} strokeWidth="1.4" opacity=".5" />
      <path d="M24 90Q34 64 56 70Q80 76 84 50" fill="none" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" strokeDasharray="1 9" />
      <circle cx="24" cy="90" r="6" fill={PAL.sky} />
      <g transform="translate(26 -4)">
        <path d="M60 52C52 42 45 34 45 26A15 15 0 0 1 75 26C75 34 68 42 60 52Z" fill={PAL.redShade} transform="translate(1.5 2)" />
        <path d="M60 52C52 42 45 34 45 26A15 15 0 0 1 75 26C75 34 68 42 60 52Z" fill={PAL.red} />
        <circle cx="60" cy="26" r="6" fill={PAL.white} />
      </g>
    </g>
  ),

  // "het mes": the knife — one big knife with a blue handle, lying on its side
  'w.mes': () => (
    <g transform="rotate(-28 60 62)">
      <path d="M8 66H64V54L60 52Q30 52 8 66Z" fill={PAL.mist} />
      <path d="M8 66Q30 58 64 58V66Z" fill={PAL.steel} opacity=".55" />
      <Shine d="M24 58Q40 53 56 54" opacity={0.9} width={2.6} />
      <rect x="62" y="50" width="7" height="20" rx="2.5" fill={PAL.slate} />
      <Shade color={PAL.blueShade} opacity={1} at={[100, 70, 40, 6]}>
        <rect x="68" y="53" width="44" height="14" rx="6" fill={PAL.blue} />
      </Shade>
      <circle cx="80" cy="60" r="2" fill={PAL.paper} />
      <circle cx="98" cy="60" r="2" fill={PAL.paper} />
    </g>
  ),

  // "de snijhandschoen": the cut-resistant glove — a glove of steel mesh with a strap at the wrist
  'w.snijhandschoen': () => {
    const glove = (
      <g>
        {([[-15, -60], [-5, -68], [5, -66], [15, -56]] as const).map(([fx, top]) => (
          <rect key={fx} x={fx - 5.2} y={top} width="10.4" height={-20 - top} rx="5.2" />
        ))}
        <rect x="-21" y="-34" width="42" height="40" rx="12" />
        <rect x="-26" y="-34" width="12" height="30" rx="6" transform="rotate(-36 -20 -10)" />
      </g>
    );
    return (
      <g>
        <g transform="translate(60 92)">
          <g fill={PAL.mist}>{glove}</g>
          <Inside shape={glove}>
            <path
              d={Array.from({ length: 12 }, (_, i) => `M-40 ${-76 + i * 7.5}H40`).join('') + Array.from({ length: 12 }, (_, i) => `M${-40 + i * 7.5} -80V10`).join('')}
              stroke={PAL.steel}
              strokeWidth="2"
            />
            <path d="M-10 -40V-22M0 -44V-22M10 -42V-24" stroke={PAL.slate} strokeWidth="2.2" strokeLinecap="round" />
            <ellipse cx="26" cy="-30" rx="14" ry="50" fill={PAL.steel} opacity=".45" />
          </Inside>
          <rect x="-22" y="2" width="44" height="14" rx="4" fill={PAL.red} />
          <rect x="-22" y="12" width="44" height="4" rx="2" fill={PAL.redShade} />
          <rect x="10" y="4" width="8" height="10" rx="2" fill={PAL.slate} />
        </g>
        <Shine d="M44 30V44" opacity={0.8} width={3} />
      </g>
    );
  },

  // "de vriescel": the freezer room — a thick ice-blue door with icicles along the top, a big
  // snowflake and frost at the bottom
  'w.vriescel': () => (
    <g>
      <Ground cx={60} cy={106} rx={44} ry={4} />
      <rect x="14" y="12" width="92" height="94" rx="6" fill={PAL.slate} />
      <Shade color={PAL.sky} opacity={0.9} at={[100, 60, 16, 60]}>
        <rect x="20" y="18" width="80" height="88" rx="4" fill={PAL.ice} />
      </Shade>
      {/* Icicles along the top */}
      <path d="M20 18H100V24L94 38L88 24L80 34L72 24L64 44L56 24L48 34L40 24L32 40L26 24L20 30Z" fill={PAL.white} />
      <Snowflake x={52} y={66} r={20} color={PAL.white} width={4.4} />
      {/* Handle */}
      <rect x="84" y="54" width="9" height="30" rx="4.5" fill={PAL.slateDark} />
      <path d="M20 100Q28 94 36 100Q44 94 52 100Q60 94 68 100Q76 94 84 100Q92 94 100 100V106H20Z" fill={PAL.white} />
    </g>
  ),

  // "de sieraden": the jewellery — a gold ring with a stone and a watch
  'w.sieraden': () => (
    <g>
      <Ground cx={60} cy={102} rx={48} ry={4} />
      {/* Ring */}
      <ellipse cx="38" cy="72" rx="24" ry="25" fill="none" stroke={PAL.yellowShade} strokeWidth="9" />
      <ellipse cx="38" cy="70" rx="24" ry="25" fill="none" stroke={PAL.yellow} strokeWidth="8" />
      <path d="M20 58A24 25 0 0 1 30 47" fill="none" stroke={PAL.yellowShine} strokeWidth="3" strokeLinecap="round" />
      <path d="M30 46L38 36L46 46L38 52Z" fill={PAL.skyShade} />
      <path d="M30 46L38 36L38 52Z" fill={PAL.ice} />
      {/* Watch: strap and face */}
      <rect x="76" y="20" width="18" height="84" rx="7" fill={PAL.navy} />
      <path d="M80 30H90M80 90H90" stroke={PAL.navyShade} strokeWidth="2" strokeLinecap="round" />
      <circle cx="85" cy="62" r="19" fill={PAL.steel} />
      <circle cx="85" cy="62" r="14.5" fill={PAL.white} />
      <path d="M85 62V53M85 62L91 65" stroke={PAL.ink} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),

  // "de pleister": the plaster — one blue plaster (the kind used where food is made)
  'w.pleister': () => (
    <g transform="rotate(-32 60 60)">
      <rect x="10" y="40" width="100" height="40" rx="20" fill={PAL.skyShade} transform="translate(0 3)" />
      <rect x="10" y="40" width="100" height="40" rx="20" fill={PAL.sky} />
      <rect x="42" y="44" width="36" height="32" rx="5" fill={PAL.ice} />
      <path d="M22 54V56M22 64V66M30 52V54M30 60V62M30 68V70M90 54V56M90 64V66M98 58V62M84 52V54M84 68V70" stroke={PAL.skyShade} strokeWidth="2.4" strokeLinecap="round" />
      <Shine d="M18 50Q22 44 30 43" opacity={0.6} width={3} />
    </g>
  ),

  // "het vlees": the meat — a steak with a strip of fat and a bone, on a grey tray
  'w.vlees': () => (
    <g>
      <rect x="10" y="62" width="100" height="40" rx="10" fill={PAL.steel} />
      <rect x="10" y="58" width="100" height="40" rx="10" fill={PAL.mist} />
      <rect x="16" y="62" width="88" height="32" rx="7" fill={PAL.paperShade} />
      <path d="M22 52Q20 30 46 26Q74 22 92 34Q104 44 96 60Q88 76 62 78Q32 80 22 52Z" fill={PAL.redLight} />
      <Shade color={PAL.redShade} opacity={1} at={[92, 60, 16, 26]}>
        <path d="M28 52Q28 34 48 31Q72 28 87 38Q96 46 90 58Q82 71 61 72Q36 73 28 52Z" fill={PAL.red} />
      </Shade>
      <path d="M50 36Q56 52 50 68" fill="none" stroke={PAL.paper} strokeWidth="6" strokeLinecap="round" />
      <path d="M40 46Q46 44 44 52M70 44Q76 48 72 56" fill="none" stroke={PAL.redLight} strokeWidth="2" strokeLinecap="round" opacity=".7" />
      <Shine d="M32 46Q34 38 42 35" opacity={0.5} width={3} />
    </g>
  ),
} as Record<string, () => JSX.Element>;

