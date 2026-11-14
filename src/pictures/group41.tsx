import type { JSX } from 'react';
import { Bust } from './bust';
import { ExclaimMark, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Tick, type Pt } from './kit';

/**
 * Word pictures, group 41 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The sector lessons of 14 November 2026: Bouw (u.build: l.measure, l.siteday).
 *
 *  - "Measuring" (l.measure): the tape measure (a square yellow case, the tape pulled out), the
 *    spirit level (a long blue bar with a green bubble glass), to measure (a plank with the tape
 *    along it, a hand on the case and a double arrow over the measured length), straight (a red
 *    brick wall standing upright next to a plumb line, with a tick: the opposite of the leaning
 *    stack of "scheef", group40), the plank (one bare board, seen at an angle) and the screw (one
 *    big grey screw with a thread and a cross head: no tool as "de boor", no hexagon as a nut).
 *    Six silhouettes and colours: yellow square, blue bar, wood + arrow, red upright, wood slanting,
 *    grey spike.
 *  - "A tidy building site" (l.siteday): the building site (a half-built wall and a heap of sand
 *    behind a red and white barrier: no poles and decks as "de steiger", no jib as "de kraan"), the
 *    site manager (Henk in a yellow hard hat holding a blue building plan; "de leidinggevende" has
 *    a white helmet, an orange vest and empty hands), the site cabin (a blue cabin on blocks with a
 *    door and a window), the waste (a tied rubbish bag with broken wood and stone beside it: no
 *    bin as "de prullenbak"), the skip (a very big green open bin, wide at the top, rubble sticking
 *    out) and to trip (a boot catching on a plank on the ground: only legs, no falling figure as
 *    "vallen" and no ice as "glad").
 */

/** A limb or bar from a to b with round ends. */
const cap = (a: Pt, b: Pt, w: number, fill: string) => (
  <path d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`} stroke={fill} strokeWidth={w} strokeLinecap="round" />
);

/** A piece of brick wall: `rows` courses of `rh` high, the joints in the shade colour. */
function Bricks({ x, y, w, rows, rh = 10, bw = 16 }: { x: number; y: number; w: number; rows: number; rh?: number; bw?: number }) {
  const joints: string[] = [];
  for (let r = 0; r < rows; r += 1) {
    if (r > 0) joints.push(`M${x} ${y + r * rh}H${x + w}`);
    for (let jx = x + (r % 2 ? bw / 2 : bw); jx < x + w - 2; jx += bw) joints.push(`M${jx} ${y + r * rh}V${y + (r + 1) * rh}`);
  }
  return (
    <g>
      <rect x={x} y={y} width={w} height={rows * rh} rx="1.5" fill={PAL.clay} />
      <path d={joints.join('')} stroke={PAL.clayShade} strokeWidth="1.6" />
    </g>
  );
}

/** The yellow case of a tape measure, (x, y) its top-left corner, `s` its size. */
function TapeCase({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g>
      <rect x={x + s * 0.56} y={y - s * 0.08} width={s * 0.3} height={s * 0.2} rx={s * 0.05} fill={PAL.slate} />
      <Shade color={PAL.yellowShade} opacity={1} at={[x + s * 1.1, y + s * 0.5, s * 0.3, s]}>
        <rect x={x} y={y} width={s} height={s} rx={s * 0.22} fill={PAL.yellow} />
      </Shade>
      <circle cx={x + s * 0.5} cy={y + s * 0.5} r={s * 0.28} fill={PAL.yellowShade} />
      <circle cx={x + s * 0.5} cy={y + s * 0.5} r={s * 0.12} fill={PAL.slate} />
    </g>
  );
}

/** A strip of measuring tape from x0 to x1 (top at y), with short and long marks. */
function Tape({ x0, x1, y, h = 12 }: { x0: number; x1: number; y: number; h?: number }) {
  const marks: string[] = [];
  for (let x = x0 + 6, i = 0; x < x1 - 3; x += 6, i += 1) marks.push(`M${x} ${y}V${y + (i % 2 ? h * 0.38 : h * 0.62)}`);
  return (
    <g>
      <rect x={x0} y={y} width={x1 - x0} height={h} fill={PAL.yellowShine} />
      <rect x={x0} y={y + h - 2.4} width={x1 - x0} height="2.4" fill={PAL.yellowLight} />
      <path d={marks.join('')} stroke={PAL.ink} strokeWidth="1.8" />
    </g>
  );
}

/** A work boot, ankle at (0, 0), toe to the right. */
function Boot({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <path d="M-9 -12H9V2H22Q30 2 30 10V15H-9Z" fill={PAL.cardDark} stroke={PAL.cardDark} strokeWidth="3" strokeLinejoin="round" />
      <rect x="-11" y="13" width="43" height="6" rx="2.5" fill={PAL.slateDark} />
      <path d="M16 5Q26 5 28 11" fill="none" stroke={PAL.card} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
}

export default {
  // "de rolmaat": the tape measure — a square yellow case, the tape pulled out to the right with
  // its marks and a metal hook at the end.
  'w.rolmaat': () => (
    <g>
      <Ground cx={58} cy={104} rx={48} ry={4} />
      <Tape x0={56} x1={106} y={82} h={15} />
      <rect x="104" y="78" width="5.5" height="24" rx="1.5" fill={PAL.slate} />
      <TapeCase x={12} y={42} s={58} />
      <Shine d="M21 62Q23 53 33 50" color={PAL.yellowShine} width={4.5} opacity={0.85} />
    </g>
  ),

  // "de waterpas": the spirit level — a long blue bar; in the middle a green glass with the
  // bubble between two lines, a round glass at each end.
  'w.waterpas': () => (
    <g>
      <Ground cx={60} cy={86} rx={50} ry={4} />
      <rect x="10" y="42" width="100" height="38" rx="5" fill={PAL.blue} />
      <rect x="10" y="68" width="100" height="12" rx="5" fill={PAL.blueShade} />
      <rect x="10" y="66" width="100" height="6" fill={PAL.blueShade} />
      {/* The middle glass */}
      <rect x="40" y="46" width="40" height="20" rx="8" fill={PAL.lime} />
      <path d="M52 47.5V64.5M68 47.5V64.5" stroke={PAL.greenShade} strokeWidth="2.4" />
      <ellipse cx="60" cy="56" rx="5.2" ry="5.8" fill={PAL.white} />
      {/* The end glasses */}
      <circle cx="24" cy="56" r="7.5" fill={PAL.lime} />
      <circle cx="96" cy="56" r="7.5" fill={PAL.lime} />
      <circle cx="24" cy="54" r="2.8" fill={PAL.white} />
      <circle cx="96" cy="54" r="2.8" fill={PAL.white} />
      <Shine d="M15 46H34" color={PAL.blueLight} width={2.6} opacity={0.9} />
    </g>
  ),

  // "meten": to measure — a plank with the tape along it, a hand on the case, and a double
  // arrow over the length that is measured.
  'w.meten': () => (
    <g>
      <Ground cx={58} cy={104} rx={50} ry={4} />
      {/* The double arrow */}
      <path d="M22 30H78" stroke={PAL.sky} strokeWidth="7" strokeLinecap="round" />
      <path d="M24 20L12 30L24 40ZM76 20L88 30L76 40Z" fill={PAL.sky} stroke={PAL.sky} strokeWidth="3" strokeLinejoin="round" />
      {/* The plank */}
      <rect x="10" y="70" width="98" height="30" rx="2" fill={PAL.card} />
      <rect x="10" y="90" width="98" height="10" rx="2" fill={PAL.cardShade} />
      <path d="M18 78H52M64 83H98" stroke={PAL.cardShade} strokeWidth="1.8" strokeLinecap="round" />
      {/* The tape, hooked over the end */}
      <Tape x0={11} x1={78} y={59} h={11} />
      <rect x="8" y="57" width="4.5" height="19" rx="1.5" fill={PAL.slate} />
      <TapeCase x={70} y={42} s={30} />
      <Hand pose="hold" x={111} y={56} rotate={-90} scale={0.62} skin={SKIN.jada} />
    </g>
  ),

  // "recht": straight, not crooked — a brick wall standing perfectly upright, a plumb line
  // hanging exactly along it, and a tick.
  'w.rechtlijn': () => (
    <g>
      <Ground cx={46} cy={105} rx={32} ry={4} />
      <Bricks x={22} y={24} w={36} rows={8} bw={18} />
      <rect x="46" y="24" width="12" height="80" fill="#000" opacity=".12" />
      {/* The plumb line */}
      <rect x="40" y="13" width="34" height="6" rx="2" fill={PAL.slate} />
      <path d="M68 18V78" stroke={PAL.slate} strokeWidth="2.2" />
      <path d="M62 76H74L68 96Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2.4" strokeLinejoin="round" />
      <Tick x={95} y={52} r={14} />
    </g>
  ),

  // "de plank": the plank — one bare wooden board seen at an angle, with its grain, a knot and
  // the rings on its sawn end.
  'w.plank': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={103} rx={46} ry={4} />
      <polygon points="32,86 106,34 106,48 32,100" fill={PAL.cardShade} stroke={PAL.cardShade} strokeWidth="2" />
      <polygon points="12,74 32,86 32,100 12,88" fill="#f0c48a" stroke="#f0c48a" strokeWidth="2" />
      <polygon points="12,74 86,22 106,34 32,86" fill={PAL.card} stroke={PAL.card} strokeWidth="2" />
      <path d="M24 73L60 48M44 74L92 40M66 44L84 31" stroke={PAL.cardShade} strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="52" cy="60" rx="4.6" ry="2.8" fill={PAL.cardDark} transform="rotate(-35 52 60)" />
      <path d="M18 82Q22 86 19 90M25 85Q28 90 26 94" fill="none" stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  ),

  // "de schroef": the screw — one big grey screw, slanting: a flat head with a cross, a shaft
  // with a thread, a sharp point.
  'w.schroef': () => (
    <g>
      <Ground cx={48} cy={104} rx={26} ry={3.5} />
      <g transform="rotate(28 60 60)">
        <Shade color={PAL.slate} opacity={0.55} at={[76, 60, 12, 60]}>
          <g>
            <path d="M34 20H86L70 40H50Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2" strokeLinejoin="round" />
            <path d="M51 38H69V88L60 108L51 88Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2" strokeLinejoin="round" />
            {/* The thread: slanting ridges that stick out on both sides */}
            <path d="M46 52L74 45M46 64L74 57M46 76L74 69M47 88L73 81" stroke={PAL.mist} strokeWidth="5" strokeLinecap="round" />
          </g>
        </Shade>
        <ellipse cx="60" cy="19" rx="27" ry="8" fill={PAL.mist} />
        <path d="M46 19H74M60 14V24" stroke={PAL.slate} strokeWidth="3.4" strokeLinecap="round" />
      </g>
    </g>
  ),

  // "de bouwplaats": the building site — a half-built brick wall and a heap of sand with a
  // shovel, behind a red and white barrier.
  'w.bouwplaats': () => (
    <g>
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* The wall, built up in steps */}
      <Bricks x={12} y={26} w={24} rows={2} />
      <Bricks x={12} y={46} w={44} rows={2} />
      <Bricks x={12} y={66} w={64} rows={4} />
      {/* Sand and a shovel */}
      <path d="M58 106Q84 18 110 106Z" fill="#f0c48a" />
      <path d="M88 66Q100 80 110 106H94Z" fill={PAL.card} />
      <path d="M98 26L90 62" stroke={PAL.wood} strokeWidth="4" strokeLinecap="round" />
      <path d="M93 24H103" stroke={PAL.wood} strokeWidth="4.4" strokeLinecap="round" />
      {/* The barrier */}
      <rect x="20" y="80" width="6" height="26" rx="2" fill={PAL.slate} />
      <rect x="94" y="80" width="6" height="26" rx="2" fill={PAL.slate} />
      <rect x="10" y="78" width="100" height="16" rx="3" fill={PAL.paper} />
      {[12, 46, 80].map((x) => (
        <path key={x} d={`M${x} 94L${x + 10} 78H${x + 26}L${x + 16} 94Z`} fill={PAL.red} />
      ))}
      <rect x="10" y="90" width="100" height="4" rx="2" fill="#000" opacity=".12" />
    </g>
  ),

  // "de uitvoerder": the site manager, the boss on the building site — Henk in a yellow hard hat,
  // holding a blue building plan.
  'w.uitvoerder': () => (
    <g>
      <Bust who="henk" x={44} y={120} scale={0.7} expr="pleased" />
      <g transform="translate(44 120) scale(0.7) translate(-60 -134)">
        <Shade color={PAL.yellowShade} opacity={1} at={[92, 26, 18, 34]}>
          <path d="M30 40C30 18 42 6 60 6C78 6 90 18 90 40Z" fill={PAL.yellow} />
        </Shade>
        <rect x="55" y="6" width="10" height="34" rx="5" fill={PAL.yellowLight} />
        <rect x="22" y="36" width="76" height="10" rx="5" fill={PAL.yellowShade} />
      </g>
      {/* The plan: a blue sheet with the white lines of a floor plan */}
      <g transform="rotate(-6 84 82)">
        <rect x="58" y="62" width="52" height="42" rx="3" fill={PAL.blueShade} />
        <rect x="58" y="60" width="52" height="42" rx="3" fill={PAL.blue} />
        <path d="M67 69H101V93H67ZM67 81H84M84 69V86M92 93V84" fill="none" stroke={PAL.white} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
      </g>
      <Hand pose="hold" x={72} y={116} rotate={8} scale={0.5} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
    </g>
  ),

  // "de keet": the site cabin — a blue cabin like a container, on blocks, with a white door, a
  // step and a window.
  'w.keet': () => (
    <g>
      <Ground cx={60} cy={106} rx={52} ry={4} />
      <rect x="18" y="96" width="16" height="9" rx="2" fill={PAL.slate} />
      <rect x="86" y="96" width="16" height="9" rx="2" fill={PAL.slate} />
      <Shade color={PAL.blueShade} opacity={0.7} at={[112, 66, 16, 50]}>
        <rect x="10" y="36" width="100" height="62" rx="3" fill={PAL.blue} />
      </Shade>
      <path d="M54 46V94M104 46V94M60 82H98M60 88H98" stroke={PAL.blueShade} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="7" y="30" width="106" height="10" rx="3" fill={PAL.navy} />
      {/* Door and step */}
      <rect x="20" y="50" width="26" height="48" rx="2" fill={PAL.paper} />
      <rect x="39" y="50" width="7" height="48" rx="2" fill={PAL.paperShade} />
      <rect x="23" y="55" width="13" height="13" rx="2" fill={PAL.ice} />
      <rect x="36" y="74" width="3" height="8" rx="1.5" fill={PAL.slate} />
      <rect x="16" y="97" width="34" height="6" rx="2" fill={PAL.steel} />
      {/* Window */}
      <rect x="60" y="50" width="40" height="26" rx="3" fill={PAL.paper} />
      <rect x="63.5" y="53.5" width="33" height="19" rx="1.5" fill={PAL.ice} />
      <path d="M80 53.5V72.5" stroke={PAL.paper} strokeWidth="3" />
    </g>
  ),

  // "het afval": the waste — a full, tied rubbish bag with broken wood and pieces of stone
  // lying beside it.
  'w.afval': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={50} ry={4.5} />
      {/* The bag */}
      <path d="M44 30L38 16L50 22L56 12L60 24L72 16L64 32Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2" />
      <Shade color={PAL.slate} opacity={0.6} at={[86, 72, 18, 44]}>
        <path d="M46 30H62C70 38 84 52 84 76C84 96 72 104 50 104C28 104 16 96 16 76C16 54 36 40 46 30Z" fill={PAL.steel} />
      </Shade>
      <rect x="43" y="27" width="22" height="7" rx="3.5" fill={PAL.yellow} />
      <Shine d="M26 72Q28 56 40 46" width={4} opacity={0.45} />
      {/* Broken wood and stone */}
      <path d="M74 100L92 54L98 60L103 56L86 104Z" fill={PAL.card} stroke={PAL.card} strokeWidth="2" />
      <path d="M92 104L108 78L112 86L102 104Z" fill={PAL.cardShade} stroke={PAL.cardShade} strokeWidth="2" />
      <rect x="84" y="92" width="18" height="12" rx="2" fill={PAL.clay} transform="rotate(-14 93 98)" />
      <path d="M62 104L66 96L74 95L78 104Z" fill={PAL.mist} stroke={PAL.mist} strokeWidth="2" />
    </g>
  ),

  // "de container": the skip — a very big green open bin, wide at the top, on two feet, with
  // rubble and wood sticking out.
  'w.container': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={48} ry={4} />
      {/* What is in it */}
      <path d="M30 46L44 16L52 20L48 46Z" fill={PAL.card} stroke={PAL.card} strokeWidth="2" />
      <path d="M64 46L84 20L92 26L80 46Z" fill={PAL.cardShade} stroke={PAL.cardShade} strokeWidth="2" />
      <path d="M22 46Q30 30 46 34Q58 24 70 36Q88 32 98 46Z" fill={PAL.steel} />
      <rect x="52" y="28" width="16" height="10" rx="2" fill={PAL.clay} transform="rotate(12 60 33)" />
      {/* The bin */}
      <rect x="26" y="98" width="12" height="7" rx="2" fill={PAL.slate} />
      <rect x="82" y="98" width="12" height="7" rx="2" fill={PAL.slate} />
      <Shade color={PAL.greenShade} opacity={0.75} at={[108, 72, 22, 44]}>
        <path d="M8 46H112L96 100H24Z" fill={PAL.green} stroke={PAL.green} strokeWidth="3" />
      </Shade>
      <path d="M38 56L44 94M60 56V94M82 56L76 94" stroke={PAL.greenShade} strokeWidth="3" strokeLinecap="round" />
      <rect x="6" y="42" width="108" height="10" rx="4" fill={PAL.greenShade} />
      <Shine d="M12 45.5H52" color={PAL.lime} width={2.6} opacity={0.6} />
    </g>
  ),

  // "struikelen": to trip over something — a walking leg: the boot catches on a plank lying on
  // the ground, with lines at the bump and a warning mark.
  'w.struikelen': () => (
    <g>
      <Ground cx={58} cy={107} rx={50} ry={4} />
      {/* The back leg, still on the ground */}
      {cap([30, 14], [24, 82], 15, '#2d5a92')}
      <Boot x={22} y={86} />
      {/* The plank it catches on */}
      <g transform="rotate(-7 92 96)">
        <rect x="76" y="92" width="34" height="12" rx="2" fill={PAL.card} />
        <rect x="76" y="100" width="34" height="4" rx="2" fill={PAL.cardShade} />
      </g>
      {/* The front leg: swinging forward, the toe hits the plank */}
      {cap([36, 14], [48, 48], 15, PAL.blue)}
      {cap([48, 48], [54, 76], 14, PAL.blue)}
      <Boot x={54} y={78} rotate={14} />
      <Motion x={84} y={84} dir={-60} spread={80} n={3} len={9} gap={6} color={PAL.orange} width={3.6} />
      <ExclaimMark x={100} y={40} size={30} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
