import type { JSX, ReactNode } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import type { Emotion, Expr } from '../components/Faces';
import { Bust, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 17 (keyed by id): "Klanken" (src/content/sounds.ts). The words come in
 * pairs that differ in one sound (man – maan, pak – bak), and the two pictures of a pair are
 * shown side by side in a choice, so each picture is one clear thing and the two of a pair look
 * nothing alike (other shapes, other colours). See docs/tekenstijl.md and ./kit.tsx.
 */

const r1 = (n: number) => Math.round(n * 10) / 10;

/** The bust outline of the kit (Bust), for people in their own clothes. */
const BUST = 'M25 134L26.5 109Q28.5 96.5 42 93.5H78Q91.5 96.5 93.5 109L95 134Z';

/**
 * A cast head on clothes of the picture's own (`torso`, in the bust's 120 x 134 box), bottom
 * middle at (x, y); `hat` is drawn over the head in the same box.
 */
function Person({ who, torso, hat, x = 60, y = 110, scale = 0.7, expr = 'neutral', emotion }: {
  who: CharacterId; torso: ReactNode; hat?: ReactNode; x?: number; y?: number; scale?: number; expr?: Expr; emotion?: Emotion;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale}) translate(-60 -134)`}>
      {torso}
      <path d="M81 92L100 92L100 134L84 134Z" fill="#000" opacity=".13" />
      <CastHead who={who} expr={expr} emotion={emotion} bold gaze={[0, 0]} />
      {hat}
    </g>
  );
}

/** An egg standing up: top (cx, top), `w` wide and `h` tall. */
const egg = (cx: number, top: number, w: number, h: number) => {
  const b = top + h;
  const m = top + h * 0.6;
  return `M${cx} ${top}C${r1(cx + w * 0.36)} ${top} ${r1(cx + w / 2)} ${r1(top + h * 0.34)} ${r1(cx + w / 2)} ${r1(m)}` +
    `C${r1(cx + w / 2)} ${r1(top + h * 0.86)} ${r1(cx + w * 0.28)} ${b} ${cx} ${b}` +
    `C${r1(cx - w * 0.28)} ${b} ${r1(cx - w / 2)} ${r1(top + h * 0.86)} ${r1(cx - w / 2)} ${r1(m)}` +
    `C${r1(cx - w / 2)} ${r1(top + h * 0.34)} ${r1(cx - w * 0.36)} ${top} ${cx} ${top}Z`;
};

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

/** A six-armed snowflake centred on (x, y), arms `r` long. */
function Snowflake({ x, y, r, color = PAL.sky, width = 3 }: { x: number; y: number; r: number; color?: string; width?: number }) {
  const arms = [0, 60, 120].map((deg) => {
    const a = (deg * Math.PI) / 180;
    const dx = Math.sin(a) * r;
    const dy = Math.cos(a) * r;
    return `M${r1(x - dx)} ${r1(y - dy)}L${r1(x + dx)} ${r1(y + dy)}`;
  });
  return <path d={arms.join('')} stroke={color} strokeWidth={width} strokeLinecap="round" />;
}

/** A gold bar seen from the front and a little from above: bottom-left (x, y), `w` wide. */
function GoldBar({ x, y, w }: { x: number; y: number; w: number }) {
  const h = 20;
  const top = 8;
  return (
    <g>
      {/* Top face */}
      <path d={`M${x + 7} ${y - h}H${x + w - 7}L${x + w - 13} ${y - h - top}H${x + 13}Z`} fill={PAL.yellowLight} stroke={PAL.yellowLight} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Front face, its right end in shade */}
      <path d={`M${x} ${y}H${x + w}L${x + w - 7} ${y - h}H${x + 7}Z`} fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="1.5" strokeLinejoin="round" />
      <path d={`M${x + w - 12} ${y}H${x + w}L${x + w - 7} ${y - h}H${x + w - 16}Z`} fill={PAL.yellowShade} />
      {/* The stamp */}
      <rect x={x + w / 2 - 9} y={y - h + 6} width="14" height="8" rx="2" fill={PAL.yellowShade} />
      <Shine d={`M${x + 12} ${y - h - 3}H${x + w / 2 - 2}`} color={PAL.yellowShine} width={2.6} opacity={0.9} />
    </g>
  );
}

export default {
  /* ---------------------------------------------------------------------------------------
   * Lesson l.shortlong: short or long? (a – aa, ui – ei)
   * ------------------------------------------------------------------------------------- */

  // "de man": the man — Henk, head and shoulders, big and plain.
  'w.kl.man': () => (
    <g>
      <Bust who="henk" x={60} y={118} scale={0.84} expr="pleased" bold />
    </g>
  ),

  // "de maan": the moon — a big yellow crescent on a round piece of night sky, with stars.
  'w.kl.maan': () => {
    const x = 56;
    const y = 62;
    const r = 30;
    const d =
      `M${x + r * 0.15} ${y - r}A${r} ${r} 0 1 0 ${x + r * 0.95} ${y + r * 0.35}` +
      `A${r * 0.82} ${r * 0.82} 0 0 1 ${x + r * 0.15} ${y - r}Z`;
    return (
      <g>
        <circle cx="60" cy="63" r="48" fill={PAL.navyShade} />
        <circle cx="60" cy="60" r="48" fill={PAL.navy} />
        <Shade color={PAL.yellowShade} opacity={0.9} at={[x + r * 0.5, y + r * 1.1, r * 0.9, r * 0.5]}>
          <path d={d} fill={PAL.yellow} />
        </Shade>
        <Shine d={`M${x - r * 0.72} ${y + r * 0.1}A${r * 0.74} ${r * 0.74} 0 0 1 ${x - r * 0.3} ${y - r * 0.6}`} color={PAL.yellowShine} width={4} opacity={0.9} />
        <Sparkle x={86} y={36} r={8} color={PAL.yellowLight} />
        <Sparkle x={90} y={74} r={5.5} color={PAL.white} />
        <Sparkle x={36} y={30} r={4.5} color={PAL.white} />
      </g>
    );
  },

  // "de zak": the bag — a plastic carrier bag with two loop handles, bread and a leek in it.
  'w.kl.zak': () => (
    <g>
      <Ground cx={60} cy={105} rx={40} ry={4.5} />
      {/* Handles (the back one first) */}
      <path d="M66 50Q64 18 79 18Q92 18 90 50" fill="none" stroke={PAL.ice} strokeWidth="6" strokeLinecap="round" />
      {/* What is in it */}
      <g transform="rotate(-16 46 40)">
        <rect x="38" y="16" width="16" height="44" rx="8" fill={PAL.card} />
        <path d="M42 24L50 21M42 32L50 29M42 40L50 37" stroke={PAL.cardShade} strokeWidth="2.6" strokeLinecap="round" />
      </g>
      <path d="M64 50L70 22M66 50L80 26" stroke={PAL.leaf} strokeWidth="6" strokeLinecap="round" />
      {/* The bag */}
      <Shade color={PAL.ice} opacity={1} at={[106, 80, 18, 40]}>
        <path d="M24 46H96L102 98Q102 104 96 104H24Q18 104 18 98Z" fill="#e3f5ff" />
      </Shade>
      <path d="M30 48Q28 18 43 18Q56 18 54 48" fill="none" stroke="#e3f5ff" strokeWidth="6" strokeLinecap="round" />
      <path d="M30 48Q28 18 43 18" fill="none" stroke={PAL.ice} strokeWidth="2" strokeLinecap="round" opacity=".8" />
      <path d="M40 62L46 90M70 60L66 92" stroke={PAL.ice} strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="46" width="84" height="5" rx="2.5" fill={PAL.ice} />
    </g>
  ),

  // "de zaak": the shop — a small shop front: red and white awning, a big window with goods,
  // the door on the right.
  'w.kl.zaak': () => (
    <g>
      <Ground cx={60} cy={105} rx={48} ry={4} />
      {/* Facade */}
      <Shade color={PAL.blueShade} opacity={1} at={[108, 70, 10, 40]}>
        <rect x="16" y="26" width="88" height="78" rx="2" fill={PAL.blue} />
      </Shade>
      <rect x="12" y="16" width="96" height="10" rx="3" fill={PAL.slate} />
      {/* Window with goods on a shelf */}
      <rect x="22" y="56" width="48" height="40" rx="2" fill={PAL.ice} />
      <rect x="22" y="80" width="48" height="4" fill={PAL.white} opacity=".9" />
      <circle cx="32" cy="74" r="6" fill={PAL.red} />
      <rect x="42" y="64" width="10" height="16" rx="2" fill={PAL.leaf} />
      <path d="M56 80Q56 68 63 68Q70 68 70 80Z" fill={PAL.card} />
      <Shine d="M27 61L33 61" width={2.6} opacity={0.8} />
      {/* Door */}
      <rect x="76" y="54" width="22" height="50" rx="2" fill={PAL.wood} />
      <rect x="80" y="59" width="14" height="18" rx="2" fill={PAL.ice} />
      <circle cx="93" cy="84" r="2.4" fill={PAL.yellow} />
      {/* Awning: stripes and a scalloped edge */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <g key={i} fill={i % 2 ? PAL.white : PAL.red}>
          <rect x={12 + i * 12} y="26" width="12" height="14" />
          <path d={`M${12 + i * 12} 40A6 6 0 0 0 ${24 + i * 12} 40Z`} />
        </g>
      ))}
      <rect x="12" y="26" width="96" height="3.5" fill={PAL.redShade} />
    </g>
  ),

  // "de ui": the onion — a red onion with its pointed top, dry roots and a green shoot.
  'w.kl.ui': () => (
    <g>
      <Ground cx={60} cy={104} rx={30} ry={4.5} />
      <path d="M60 30Q56 18 48 12M60 30Q64 18 72 13" fill="none" stroke={PAL.leaf} strokeWidth="5" strokeLinecap="round" />
      <path d="M55 100L51 106M60 101V107M65 100L69 106" stroke={PAL.cardShade} strokeWidth="2.4" strokeLinecap="round" />
      <Shade color={PAL.purpleShade} opacity={1} at={[96, 74, 18, 34]}>
        <path d="M60 26C66 40 94 46 94 70C94 90 79 101 60 101C41 101 26 90 26 70C26 46 54 40 60 26Z" fill={PAL.purple} />
      </Shade>
      <path d="M58 34C46 50 40 78 50 98M62 34C74 50 80 78 70 98M60 36V100" fill="none" stroke={PAL.purpleShade} strokeWidth="2" strokeLinecap="round" opacity=".8" />
      <Shine d="M34 66Q36 54 46 47" color={PAL.purpleLight} width={4} opacity={0.9} />
    </g>
  ),

  // "het ei": the egg — two plain eggs side by side, a white one and a brown one (no egg cup).
  'w.kl.ei': () => (
    <g>
      <Ground cx={60} cy={103} rx={44} ry={5} />
      <Shade color={PAL.mist} opacity={1} at={[64, 68, 12, 40]}>
        <path d={egg(42, 20, 46, 82)} fill={PAL.paper} />
      </Shade>
      <Shine d="M30 44Q26 54 26 64" width={4} opacity={0.9} color={PAL.white} />
      <Shade color={PAL.cardShade} opacity={1} at={[100, 80, 12, 30]}>
        <path d={egg(80, 40, 40, 64)} fill={PAL.card} />
      </Shade>
      <Shine d="M70 56Q66 64 66 72" width={3.6} opacity={0.6} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * Lesson l.roundsounds: uu, oe and eu
   * ------------------------------------------------------------------------------------- */

  // "de muur": the wall — a stretch of red brick wall, the bricks in staggered rows.
  'w.kl.muur': () => {
    const x0 = 14;
    const x1 = 106;
    const rows = 6;
    const bricks: ReactNode[] = [];
    for (let r = 0; r < rows; r++) {
      const y = 28 + r * 12.5;
      const off = r % 2 ? -12 : 0;
      for (let bx = x0 + off; bx < x1; bx += 24) {
        const a = Math.max(bx, x0);
        const b = Math.min(bx + 21.5, x1);
        if (b - a < 4) continue;
        bricks.push(<rect key={`${r}-${bx}`} x={a} y={y} width={b - a} height="10" rx="2" fill={(r + Math.round(bx / 24)) % 3 === 0 ? PAL.clayShade : PAL.clay} />);
      }
    }
    return (
      <g>
        <Ground cx={60} cy={104} rx={50} ry={4} />
        <rect x={x0 - 1} y="26" width={x1 - x0 + 2} height="78" rx="2" fill={PAL.mist} />
        {bricks}
        <rect x="94" y="26" width="13" height="78" fill="#000" opacity=".1" />
        <Shine d="M20 31H34" width={2.6} opacity={0.5} />
      </g>
    );
  },

  // "de moer": the nut (for a bolt) — a big steel hex nut screwed onto a bolt.
  'w.kl.moer': () => (
    <g>
      <Ground cx={60} cy={102} rx={42} ry={5} />
      {/* Side faces of the nut */}
      <path d="M18 56L39 75V97L18 78Z" fill="#a3aeb6" />
      <path d="M39 75H81V97H39Z" fill={PAL.steel} />
      <path d="M81 75L102 56V78L81 97Z" fill="#6b7782" />
      {/* Top face with the hole */}
      <path d="M18 56L39 37H81L102 56L81 75H39Z" fill={PAL.mist} stroke={PAL.mist} strokeWidth="2" strokeLinejoin="round" />
      <ellipse cx="60" cy="56" rx="19" ry="10" fill={PAL.slateDark} />
      {/* The bolt coming up through it */}
      <path d="M48 56V18H72V56A12 5 0 0 1 48 56Z" fill={PAL.paperShade} />
      <path d="M64 18H72V56A12 5 0 0 1 64 60.6Z" fill={PAL.steel} opacity=".55" />
      <ellipse cx="60" cy="18" rx="12" ry="5" fill={PAL.paper} />
      <path d="M48 28L72 24M48 36L72 32M48 44L72 40M48 52L72 48" stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" />
      <Shine d="M26 55L38 44" width={3} opacity={0.8} />
    </g>
  ),

  // "de buur": the neighbour — Amina waves over the garden fence, her house behind her.
  'w.kl.buur': () => (
    <g>
      {/* The house */}
      <path d="M10 46L32 24L54 46Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="4" strokeLinejoin="round" />
      <rect x="14" y="44" width="36" height="46" fill={PAL.clay} />
      <rect x="21" y="52" width="12" height="12" rx="2" fill={PAL.ice} />
      {/* Amina, waving */}
      <Bust who="amina" x={66} y={118} scale={0.62} expr="joy" bold />
      <Hand pose="open" x={98} y={80} rotate={12} scale={0.62} skin={SKIN.amina} sleeve={['#2f8f3e', '#23722f']} />
      <Motion x={98} y={46} dir={-60} spread={70} n={3} len={6} gap={8} color={PAL.sky} width={3} />
      {/* The garden fence in front */}
      <rect x="10" y="88" width="100" height="5" rx="2" fill={PAL.cardShade} />
      {[12, 26, 40, 54, 68, 82, 96].map((x) => (
        <path key={x} d={`M${x} 106V86L${x + 5} 80L${x + 10} 86V106Z`} fill={PAL.card} stroke={PAL.card} strokeWidth="1.5" strokeLinejoin="round" />
      ))}
      <rect x="10" y="96" width="100" height="5" rx="2" fill={PAL.cardShade} />
    </g>
  ),

  // "de boer": the farmer — Bram in a straw hat and dungarees, with a pitchfork.
  'w.kl.boer': () => (
    <g>
      {/* Pitchfork */}
      <path d="M96 110V40" stroke={PAL.wood} strokeWidth="5" strokeLinecap="round" />
      <path d="M84 16V34Q84 40 90 40H102Q108 40 108 34V16M96 16V40" fill="none" stroke={PAL.steel} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <Person
        who="bram"
        x={50}
        y={118}
        scale={0.74}
        expr="pleased"
        torso={
          <>
            <path d={BUST} fill={PAL.red} />
            <path d="M34 112H44V134H34ZM76 112H86V134H76Z" fill={PAL.redShade} opacity=".5" />
            {/* Dungarees: bib and straps */}
            <path d="M44 110H76V134H44Z" fill={PAL.blueShade} />
            <path d="M44 112L38 95M76 112L82 95" stroke={PAL.blueShade} strokeWidth="6" strokeLinecap="round" />
            <circle cx="48" cy="114" r="2.6" fill={PAL.yellow} />
            <circle cx="72" cy="114" r="2.6" fill={PAL.yellow} />
          </>
        }
        hat={
          <g>
            <ellipse cx="60" cy="36" rx="48" ry="11" fill={PAL.cardShade} />
            <ellipse cx="60" cy="33" rx="48" ry="10" fill="#f0c48a" />
            <path d="M34 34Q34 6 60 6Q86 6 86 34Z" fill="#f0c48a" />
            <path d="M74 34Q76 12 66 7Q86 8 86 34Z" fill={PAL.card} />
            <path d="M34 28H86V34H34Z" fill={PAL.red} />
          </g>
        }
      />
    </g>
  ),

  // "de deur": the door — a plain blue front door in its frame, with a little window and a
  // brass knob, on a doorstep.
  'w.kl.deur': () => (
    <g>
      <Ground cx={60} cy={106} rx={44} ry={4} />
      <rect x="22" y="100" width="76" height="7" rx="2.5" fill={PAL.slate} />
      <Shade color={PAL.paperShade} opacity={1} at={[96, 60, 8, 50]}>
        <rect x="28" y="10" width="64" height="92" rx="3" fill={PAL.paper} />
      </Shade>
      <rect x="28" y="10" width="64" height="92" rx="3" fill="none" />
      <Shade color={PAL.blueShade} opacity={1} at={[90, 60, 9, 50]}>
        <rect x="35" y="17" width="50" height="85" rx="2" fill={PAL.blue} />
      </Shade>
      <rect x="42" y="24" width="36" height="18" rx="3" fill={PAL.ice} />
      <rect x="42" y="50" width="36" height="20" rx="2.5" fill={PAL.blueShade} />
      <rect x="42" y="76" width="36" height="20" rx="2.5" fill={PAL.blueShade} />
      <circle cx="76" cy="66" r="3.6" fill={PAL.yellow} />
      <Shine d="M38 34V50" width={2.6} opacity={0.5} />
    </g>
  ),

  // "duur": expensive — a red price tag with three big euro signs: it costs a lot.
  'w.kl.duur': () => (
    <g>
      <path d="M28 46Q16 30 24 14" fill="none" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      <g transform="rotate(12 60 62)">
        <path d="M10 62L30 34H104Q110 34 110 40V84Q110 90 104 90H30Z" fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="6" strokeLinejoin="round" transform="translate(0 4)" />
        <path d="M10 62L30 34H104Q110 34 110 40V84Q110 90 104 90H30Z" fill={PAL.red} stroke={PAL.red} strokeWidth="6" strokeLinejoin="round" />
        <circle cx="26" cy="62" r="5" fill={PAL.white} />
        <EuroSign cx={46} cy={62} s={9.5} color={PAL.white} width={4.4} />
        <EuroSign cx={69} cy={62} s={9.5} color={PAL.white} width={4.4} />
        <EuroSign cx={92} cy={62} s={9.5} color={PAL.white} width={4.4} />
        <Shine d="M34 40H58" width={3} opacity={0.5} />
      </g>
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * Lesson l.pbgk: p or b, g or k
   * ------------------------------------------------------------------------------------- */

  // "het pak": the suit — a navy suit jacket with a white shirt and a red tie, on a hanger.
  'w.kl.pak': () => (
    <g>
      {/* Hanger */}
      <path d="M60 26V20Q60 13 66 13Q71 13 71 18" fill="none" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M24 38L60 26L96 38" fill="none" stroke={PAL.wood} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Jacket */}
      <Shade color={PAL.navyShade} opacity={1} at={[106, 70, 18, 46]}>
        <path d="M46 32L26 38Q16 41 16 52V100Q16 104 20 104H100Q104 104 104 100V52Q104 41 94 38L74 32Z" fill={PAL.navy} />
      </Shade>
      {/* Shirt and tie */}
      <path d="M47 32H73L60 70Z" fill={PAL.paper} />
      <path d="M56 34H64L62 40H58Z" fill={PAL.redShade} />
      <path d="M58 40H62L65 60L60 68L55 60Z" fill={PAL.red} />
      {/* Lapels, buttons, the opening and the sleeves' edges */}
      <path d="M47 32L42 48L52 52L60 70M73 32L78 48L68 52L60 70" fill="none" stroke={PAL.navyShade} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M60 70V104" stroke={PAL.navyShade} strokeWidth="2.4" />
      <circle cx="64" cy="80" r="2.4" fill={PAL.slateDark} />
      <circle cx="64" cy="91" r="2.4" fill={PAL.slateDark} />
      <path d="M30 52V100M90 52V100" stroke={PAL.navyShade} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M38 84H50M72 84H82" stroke={PAL.navyShade} strokeWidth="2.2" strokeLinecap="round" />
      <Shine d="M21 56Q22 47 28 43" width={3} opacity={0.35} />
    </g>
  ),

  // "de bak": the crate — an empty green plastic crate with slots and a handle hole.
  'w.kl.bak': () => (
    <g>
      <Ground cx={62} cy={102} rx={46} ry={5} />
      {/* Inside, seen from above */}
      <path d="M16 46L32 32H106L90 46Z" fill="#25622d" stroke="#25622d" strokeWidth="2" strokeLinejoin="round" />
      {/* Right side */}
      <path d="M90 46L106 32V86L90 100Z" fill={PAL.greenShade} stroke={PAL.greenShade} strokeWidth="2" strokeLinejoin="round" />
      {/* Front */}
      <rect x="16" y="46" width="74" height="54" rx="2" fill={PAL.green} />
      <rect x="40" y="52" width="26" height="8" rx="4" fill="#25622d" />
      {[24, 40, 56, 72].map((x) => (
        <g key={x} fill={PAL.greenShade}>
          <rect x={x} y="66" width="10" height="12" rx="3" />
          <rect x={x} y="83" width="10" height="11" rx="3" />
        </g>
      ))}
      <path d="M94 50V84" stroke="#25622d" strokeWidth="3" strokeLinecap="round" opacity=".5" />
      <path d="M16 46L32 32H106" fill="none" stroke={PAL.leaf} strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
      <Shine d="M20 52V62" width={2.6} opacity={0.5} />
    </g>
  ),

  // "het goud": the gold — three shiny gold bars stacked, two below and one on top.
  'w.kl.goud': () => (
    <g>
      <Ground cx={60} cy={102} rx={50} ry={5} />
      <GoldBar x={12} y={100} w={48} />
      <GoldBar x={60} y={100} w={48} />
      <GoldBar x={36} y={72} w={48} />
      <Sparkle x={94} y={30} r={9} color={PAL.yellowShade} />
      <Sparkle x={24} y={38} r={6} color={PAL.yellowShade} />
    </g>
  ),

  // "koud": cold — Jada in a woolly hat and a thick scarf, shivering; snowflakes round her.
  'w.kl.koud': () => (
    <g>
      <Snowflake x={18} y={30} r={7} />
      <Snowflake x={102} y={26} r={6} />
      <Snowflake x={104} y={74} r={5} />
      <Snowflake x={16} y={76} r={5} />
      <Motion x={60} y={62} dir={180} spread={40} n={2} len={6} gap={36} color={PAL.sky} width={3} />
      <Motion x={60} y={62} dir={0} spread={40} n={2} len={6} gap={36} color={PAL.sky} width={3} />
      <Person
        who="jada"
        x={60}
        y={118}
        scale={0.78}
        emotion="worried"
        torso={
          <>
            <path d={BUST} fill={PAL.sky} />
            <path d="M81 92L100 92L100 134L84 134Z" fill={PAL.skyShade} />
            {/* The scarf: a thick roll round the neck and one end hanging down */}
            <path d="M34 98Q60 112 86 98L84 88Q60 98 36 88Z" fill={PAL.red} stroke={PAL.red} strokeWidth="6" strokeLinejoin="round" />
            <rect x="64" y="100" width="14" height="34" rx="4" fill={PAL.redShade} />
            <path d="M66 126H76" stroke={PAL.red} strokeWidth="2.4" strokeLinecap="round" />
          </>
        }
        hat={
          <g>
            <path d="M36 34Q36 6 60 6Q84 6 84 34Z" fill={PAL.purple} />
            <path d="M70 34Q72 12 62 7Q84 8 84 34Z" fill={PAL.purpleShade} />
            <rect x="33" y="28" width="54" height="11" rx="5" fill={PAL.purpleLight} />
            <circle cx="60" cy="5" r="6" fill={PAL.purpleLight} />
          </g>
        }
      />
    </g>
  ),

  // "de hoed": the hat — a classic felt hat with a dent in the top and a dark band.
  'w.kl.hoed': () => (
    <g>
      <Ground cx={60} cy={100} rx={44} ry={5} />
      {/* Brim, back half */}
      <ellipse cx="60" cy="80" rx="50" ry="14" fill={PAL.cardDark} />
      {/* Crown */}
      <Shade color={PAL.cardDark} opacity={1} at={[92, 60, 14, 40]}>
        <path d="M30 82C30 56 32 32 44 28Q52 34 60 30Q68 34 76 28C88 32 90 56 90 82Z" fill={PAL.wood} />
      </Shade>
      <path d="M30 66Q60 72 90 66V80Q60 86 30 80Z" fill={PAL.brown} />
      {/* Brim, front half */}
      <path d="M10 80Q60 76 110 80Q110 98 60 98Q10 98 10 80Z" fill={PAL.wood} />
      <path d="M86 80Q110 80 110 82Q108 96 76 97Z" fill={PAL.cardDark} opacity=".7" />
      <Shine d="M38 60Q38 44 44 36" width={3.4} opacity={0.45} />
    </g>
  ),

  // "goed": good — a big thumbs up, with sparkles.
  'w.kl.goed': () => (
    <g>
      <Hand pose="thumb" x={58} y={112} scale={1.7} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      <Sparkle x={92} y={30} r={10} />
      <Sparkle x={26} y={40} r={6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
