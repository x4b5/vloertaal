import type { JSX, ReactNode } from 'react';
import type { CharacterId } from '../components/Characters';
import { Arrow, Bubble, Bust, Cross, Dots, ExclaimMark, Ground, Hand, Motion, PAL, QuestionMark, SKIN, Shade, Shine, Sparkle, Tick, type Pt } from './kit';

/** Word pictures, group 12 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

const r1 = (n: number) => Math.round(n * 10) / 10;
const SCREEN = '#e3f5ff';

/** A point of a Bust's own 120-box drawing (px, py) in picture coordinates. */
const onBust = (x: number, y: number, s: number, px: number, py: number, flip = false): Pt => [
  r1(x + (flip ? -1 : 1) * s * (px - 60)),
  r1(y + s * (py - 134)),
];

/** A smartphone seen from the front; the screen is x+4..x+w-4, y+7..y+h-7. */
function Phone({ x, y, w = 44, h = 80, screen = SCREEN, children }: {
  x: number; y: number; w?: number; h?: number; screen?: string; children?: ReactNode;
}) {
  return (
    <g>
      <rect x={x + 2.5} y={y + 3} width={w} height={h} rx="8" fill={PAL.slateDark} />
      <rect x={x} y={y} width={w} height={h} rx="8" fill={PAL.slate} />
      <rect x={x + 4} y={y + 7} width={w - 8} height={h - 14} rx="4" fill={screen} />
      <rect x={x + w / 2 - 5} y={y + 2.4} width="10" height="2.4" rx="1.2" fill={PAL.slateDark} />
      {children}
    </g>
  );
}

/** A small landscape photo (sky, sun, hills) filling the box. */
function MiniPhoto({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill={PAL.ice} />
      <circle cx={x + w * 0.72} cy={y + h * 0.3} r={Math.min(w, h) * 0.14} fill={PAL.yellow} />
      <path d={`M${x} ${r1(y + h * 0.7)}Q${r1(x + w * 0.3)} ${r1(y + h * 0.34)} ${r1(x + w * 0.56)} ${r1(y + h * 0.66)}Q${r1(x + w * 0.78)} ${r1(y + h * 0.5)} ${x + w} ${r1(y + h * 0.62)}V${r1(y + h - 2)}Q${x + w} ${y + h} ${x + w - 2} ${y + h}H${x + 2}Q${x} ${y + h} ${x} ${y + h - 2}Z`} fill={PAL.green} />
    </g>
  );
}

/** A chat message on a phone screen (white = received, lime = sent). */
function Msg({ x, y, w, h = 10, sent = false }: { x: number; y: number; w: number; h?: number; sent?: boolean }) {
  const fill = sent ? PAL.lime : PAL.white;
  const shade = sent ? PAL.leaf : PAL.mist;
  return (
    <g>
      <rect x={x} y={y + 1.6} width={w} height={h} rx={h / 2.4} fill={shade} />
      <rect x={x} y={y} width={w} height={h} rx={h / 2.4} fill={fill} />
      <path d={`M${x + 4} ${y + h / 2}H${x + w - 5}`} stroke={sent ? PAL.leafShade : PAL.line} strokeWidth="2" strokeLinecap="round" opacity=".7" />
    </g>
  );
}

/** "Writing" in a rounded, joined script: a wavy line from (x, y), `w` long. */
function WaveScript({ x, y, w, color, width = 3 }: { x: number; y: number; w: number; color: string; width?: number }) {
  const n = Math.max(2, Math.round(w / 7));
  const step = w / n;
  let d = `M${x} ${y}`;
  for (let i = 0; i < n; i++) d += `q${r1(step / 2)} ${i % 2 ? 4.5 : -4.5} ${r1(step)} 0`;
  return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />;
}

/** Sound waves: `n` arcs opening towards `dir` (1 = right, -1 = left) from (x, y). */
function Waves({ x, y, dir = 1, n = 2, color = PAL.sky, r0 = 6, gap = 6, width = 4 }: {
  x: number; y: number; dir?: 1 | -1; n?: number; color?: string; r0?: number; gap?: number; width?: number;
}) {
  const d = Array.from({ length: n }, (_, i) => {
    const r = r0 + i * gap;
    const a = 0.8;
    const x0 = x + dir * Math.cos(a) * r;
    return `M${r1(x0)} ${r1(y - Math.sin(a) * r)}A${r} ${r} 0 0 ${dir === 1 ? 1 : 0} ${r1(x0)} ${r1(y + Math.sin(a) * r)}`;
  }).join('');
  return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />;
}

/** A heart ("like"), centred on (cx, cy), about 2r wide. */
function Heart({ cx, cy, r, color = PAL.red, shade = PAL.redShade }: { cx: number; cy: number; r: number; color?: string; shade?: string }) {
  const d = (dy: number) =>
    `M${cx} ${r1(cy + r * 0.95 + dy)}C${r1(cx - r * 1.7)} ${r1(cy - r * 0.05 + dy)} ${r1(cx - r * 0.95)} ${r1(cy - r * 1.35 + dy)} ${cx} ${r1(cy - r * 0.45 + dy)}` +
    `C${r1(cx + r * 0.95)} ${r1(cy - r * 1.35 + dy)} ${r1(cx + r * 1.7)} ${r1(cy - r * 0.05 + dy)} ${cx} ${r1(cy + r * 0.95 + dy)}Z`;
  return (
    <g>
      <path d={d(r * 0.16)} fill={shade} />
      <path d={d(0)} fill={color} />
    </g>
  );
}

/** A light bulb (an idea), centred on the glass at (cx, cy). */
function Bulb({ cx, cy, r = 12 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <Motion x={cx} y={cy} dir={-90} spread={150} n={5} len={r * 0.5} gap={r * 1.35} color={PAL.yellowShade} width={3} />
      <Shade color={PAL.yellowShade} opacity={0.8} at={[cx + r * 1.1, cy, r * 0.5, r * 1.4]}>
        <path d={`M${cx - r * 0.5} ${r1(cy + r * 0.9)}C${cx - r * 0.5} ${cy + r * 0.4} ${cx - r} ${cy + r * 0.2} ${cx - r} ${cy - r * 0.15}A${r} ${r} 0 0 1 ${cx + r} ${cy - r * 0.15}C${cx + r} ${cy + r * 0.2} ${cx + r * 0.5} ${cy + r * 0.4} ${cx + r * 0.5} ${r1(cy + r * 0.9)}Z`} fill={PAL.yellow} />
      </Shade>
      <rect x={cx - r * 0.52} y={cy + r * 0.92} width={r * 1.04} height={r * 0.62} rx={r * 0.2} fill={PAL.steel} />
      <rect x={cx - r * 0.34} y={cy + r * 1.5} width={r * 0.68} height={r * 0.3} rx={r * 0.15} fill={PAL.slate} />
      <Shine d={`M${cx - r * 0.6} ${cy - r * 0.2}A${r * 0.62} ${r * 0.62} 0 0 1 ${cx - r * 0.2} ${cy - r * 0.62}`} color={PAL.yellowShine} width={Math.max(2.2, r * 0.18)} opacity={1} />
    </g>
  );
}

/** A pen: tip at (x, y), lying at `angle` degrees (0 = body to the right of the tip). */
function Pen({ x, y, angle = -45, len = 40, color = PAL.blue, shade = PAL.blueShade }: {
  x: number; y: number; angle?: number; len?: number; color?: string; shade?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <path d="M0 0L9 -4V4Z" fill={PAL.card} stroke={PAL.card} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M0 0L3.4 -1.5V1.5Z" fill={PAL.ink} />
      <rect x="8" y="-4.5" width={len - 8} height="9" rx="3" fill={color} />
      <rect x="8" y="0.5" width={len - 8} height="4" rx="2" fill={shade} />
      <rect x={len - 10} y="-5" width="10" height="10" rx="3" fill={PAL.slate} />
    </g>
  );
}

/** A cast member seen from behind: hair or headscarf and shoulders, no face. */
function BackView({ who, x, y, s }: { who: CharacterId; x: number; y: number; s: number }) {
  const look: Record<CharacterId, [string, string, string, string]> = {
    // [shirt, shirt shade, hair/scarf, hair/scarf shade]
    amina: [PAL.green, PAL.greenShade, PAL.purple, PAL.purpleShade],
    bram: [PAL.orange, PAL.orangeShade, PAL.brown, '#4f2e18'],
    henk: [PAL.navy, PAL.navyShade, PAL.mist, PAL.steel],
    jada: ['#ffc929', PAL.yellowShade, PAL.ink, '#1d1a19'],
  };
  const [c, cs, h, hs] = look[who];
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -134)`}>
      <path d="M22 134C22 106 38 94 60 94C82 94 98 106 98 134Z" fill={c} />
      <path d="M84 102C93 108 98 119 98 134H82C84 121 85 111 84 102Z" fill={cs} opacity=".7" />
      <Shade color={hs} opacity={0.9} at={[96, 60, 16, 44]}>
        <path d="M30 60C30 36 44 24 60 24C76 24 90 36 90 60C90 80 82 96 60 104C38 96 30 80 30 60Z" fill={h} />
      </Shade>
      <path d="M44 92Q60 100 76 92" fill="none" stroke={hs} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M40 44Q44 34 54 30" width={4} opacity={0.35} />
    </g>
  );
}

export default {
  // "de camera": the camera — a compact camera with a big lens, a flash and a shutter button.
  'w.camera': () => (
    <g>
      <Ground cy={102} rx={44} ry={4.5} />
      <rect x={26} y={26} width={30} height={16} rx="5" fill={PAL.slateDark} />
      <rect x={28} y={30} width={14} height={8} rx="3" fill={PAL.red} />
      <Shade color={PAL.slateDark} opacity={1} at={[118, 66, 16, 44]}>
        <rect x={12} y={36} width={96} height={62} rx="11" fill={PAL.slate} />
      </Shade>
      <rect x={12} y={54} width={96} height={30} fill={PAL.slateDark} opacity=".45" />
      <rect x={84} y={42} width={16} height={9} rx="2.5" fill={PAL.paper} />
      <circle cx={60} cy={67} r={27} fill={PAL.mist} />
      <circle cx={60} cy={67} r={22} fill={PAL.slateDark} />
      <circle cx={60} cy={67} r={15} fill={PAL.navy} />
      <circle cx={60} cy={67} r={8} fill={PAL.blue} />
      <circle cx={54} cy={61} r={4} fill={PAL.white} opacity=".75" />
      <Shine d="M18 52Q19 44 26 42" width={3.5} opacity={0.45} />
      <Motion x={92} y={46} dir={-60} spread={70} n={3} len={7} gap={10} color={PAL.yellowShade} width={3.4} />
    </g>
  ),

  // "het briefje": the note — a small handwritten slip of paper held between the fingers.
  'w.briefje': () => (
    <g>
      <g transform="rotate(-8 60 50)">
        <rect x={24} y={16} width={70} height={64} rx="3" fill={PAL.paperShade} transform="translate(2 4)" />
        <rect x={24} y={16} width={70} height={64} rx="3" fill={PAL.white} />
        <path d="M24 46H94" stroke={PAL.paperShade} strokeWidth="2.4" />
        <WaveScript x={32} y={28} w={50} color={PAL.navy} width={3.2} />
        <WaveScript x={32} y={40} w={36} color={PAL.navy} width={3.2} />
        <WaveScript x={32} y={58} w={44} color={PAL.navy} width={3.2} />
      </g>
      <Hand pose="hold" x={62} y={122} scale={1.15} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
    </g>
  ),

  // "spreken": to speak — Bram speaks out loud: big sound waves come from his open mouth
  // (no speech bubble, no phone).
  'w.spreken': () => {
    const [mx, my] = onBust(42, 122, 0.74, 80, 80);
    return (
      <g>
        <Bust who="bram" x={42} y={122} scale={0.74} expr="joy" />
        <Waves x={mx + 8} y={my - 2} dir={1} n={3} r0={12} gap={11} width={5.5} color={PAL.sky} />
      </g>
    );
  },

  // "het plaatje": the picture — a framed picture hanging on a nail (a drawing of hills and sun).
  'w.plaatje': () => (
    <g>
      <path d="M60 14L26 36M60 14L94 36" stroke={PAL.steel} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx={60} cy={14} r={4} fill={PAL.slate} />
      <rect x={16} y={34} width={88} height={70} rx="5" fill={PAL.cardDark} transform="translate(2 4)" />
      <Shade color={PAL.cardDark} opacity={0.8} at={[112, 70, 14, 50]}>
        <rect x={16} y={34} width={88} height={70} rx="5" fill={PAL.wood} />
      </Shade>
      <MiniPhoto x={26} y={44} w={68} h={50} />
      <path d="M26 94H94" stroke={PAL.leaf} strokeWidth="0" />
      <Shine d="M20 90V44" width={3} opacity={0.4} />
    </g>
  ),

  // "luisteren": to listen — Henk cups his hand behind his ear; sound waves come in.
  'w.luisteren': () => {
    const [ex, ey] = onBust(68, 122, 0.74, 33.5, 64);
    return (
      <g>
        <Hand pose="hold" x={ex - 2} y={ey + 24} rotate={-8} scale={0.7} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
        <Bust who="henk" x={68} y={122} scale={0.74} expr="thinking" />
        <Waves x={4} y={ey - 6} dir={1} n={3} r0={6} gap={8} width={5} color={PAL.sky} />
      </g>
    );
  },

  // "de opleiding": the education, the training — a graduation cap on a rolled-up diploma.
  'w.opleiding': () => (
    <g>
      <Ground cy={104} rx={40} ry={4.5} />
      {/* Diploma roll with a red ribbon */}
      <rect x={18} y={80} width={84} height={20} rx="10" fill={PAL.paperShade} transform="translate(0 2)" />
      <rect x={18} y={80} width={84} height={20} rx="10" fill={PAL.paper} />
      <ellipse cx={98} cy={90} rx={5} ry={10} fill={PAL.paperShade} />
      <ellipse cx={98} cy={90} rx={2} ry={4} fill={PAL.mist} />
      <rect x={54} y={79} width={10} height={22} rx="2" fill={PAL.red} />
      <path d="M57 100L52 110M61 100L66 110" stroke={PAL.redShade} strokeWidth="4" strokeLinecap="round" />
      {/* Cap */}
      <path d="M36 44V60Q60 72 84 60V44Z" fill={PAL.navyShade} />
      <path d="M60 14L106 34L60 54L14 34Z" fill={PAL.navy} stroke={PAL.navy} strokeWidth="3" strokeLinejoin="round" />
      <path d="M60 54L106 34L84 24Z" fill={PAL.navyShade} opacity=".5" />
      <circle cx={60} cy={34} r={4} fill={PAL.yellow} />
      <path d="M60 34L92 44V62" fill="none" stroke={PAL.yellow} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x={88} y={60} width={8} height={12} rx="3" fill={PAL.yellowShade} />
      <Shine d="M30 34L52 24" width={3} opacity={0.4} />
    </g>
  ),

  // "begroeten": to greet — Amina and Henk shake hands.
  'w.begroeten': () => {
    const [as, ash] = SKIN.amina;
    const [hs, hsh] = SKIN.henk;
    return (
      <g>
        <Bust who="amina" x={22} y={124} scale={0.66} expr="pleased" />
        <Bust who="henk" x={98} y={124} scale={0.66} expr="pleased" flip />
        <g transform="translate(0 10)">
          {/* Forearms, level, meeting in the middle */}
          <path d="M10 106L40 94" stroke={PAL.green} strokeWidth="15" strokeLinecap="round" />
          <path d="M110 106L80 94" stroke={PAL.navy} strokeWidth="15" strokeLinecap="round" />
          <rect x={34} y={84} width={9} height={19} rx="4" fill={PAL.greenShade} transform="rotate(-24 38 94)" />
          <rect x={77} y={84} width={9} height={19} rx="4" fill={PAL.navyShade} transform="rotate(24 82 94)" />
          {/* Amina's hand (fingertips show under Henk's hand) */}
          <rect x={40} y={84} width={30} height={16} rx="8" fill={as} />
          <rect x={62} y={93} width={14} height={9} rx="4.5" fill={ash} />
          {/* Henk's hand wraps over it: the back of the hand, finger gaps, thumb over the top */}
          <rect x={50} y={80} width={30} height={18} rx="8" fill={hs} />
          <path d="M56 86V97M62 85V97M68 86V97" stroke={hsh} strokeWidth="1.8" strokeLinecap="round" />
          <rect x={40} y={77} width={20} height={8} rx="4" fill={hs} transform="rotate(8 50 81)" />
        </g>
      </g>
    );
  },

  // "een vraag stellen": to ask a question — Jada raises her hand and asks: a question mark
  // in her speech bubble.
  'w.vraagstellen': () => (
    <g>
      <Bust who="jada" x={44} y={124} scale={0.62} expr="pleased" />
      <Hand pose="open" x={90} y={86} rotate={10} scale={0.74} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} mirror />
      <Bubble x={8} y={6} w={42} h={34} tail="right">
        <QuestionMark x={29} y={23} size={26} color={PAL.sky} />
      </Bubble>
    </g>
  ),

  // "tekenen": to sign — a hand with a pen finishes a signature on the signature line.
  'w.tekenen': () => (
    <g>
      <rect x={6} y={44} width={104} height={64} rx="5" fill={PAL.paperShade} transform="translate(0 4)" />
      <rect x={6} y={44} width={104} height={64} rx="5" fill={PAL.white} />
      <path d="M16 56H70M16 66H58" stroke={PAL.mist} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M16 96H100" stroke={PAL.steel} strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M18 92C22 74 30 68 30 78S24 96 34 88 42 74 46 82 48 92 54 86 60 80 64 86"
        fill="none"
        stroke={PAL.navy}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Pen x={64} y={86} angle={-62} len={50} />
      <Hand pose="hold" x={98} y={62} rotate={-62} scale={0.78} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),

  // "het identiteitsbewijs": the ID document — an ID card with a passport photo, the
  // holder's details as lines and an official stamp (no lanyard, not a bank card).
  'w.identiteitsbewijs': () => (
    <g>
      <rect x={8} y={26} width={104} height={70} rx="8" fill={PAL.ice} transform="translate(0 4)" />
      <rect x={8} y={26} width={104} height={70} rx="8" fill={SCREEN} />
      <path d="M8 34A8 8 0 0 1 16 26H104A8 8 0 0 1 112 34V40H8Z" fill={PAL.navy} />
      <circle cx={100} cy={33} r={4.5} fill={PAL.yellow} />
      <svg x={16} y={46} width={32} height={42} viewBox="16 46 32 42" overflow="hidden">
        <rect x={16} y={46} width={32} height={42} rx="3" fill={PAL.white} />
        <Bust who="amina" x={32} y={94} scale={0.36} expr="neutral" />
      </svg>
      <path d="M56 52H96" stroke={PAL.navy} strokeWidth="4.4" strokeLinecap="round" />
      <path d="M56 63H100M56 72H88" stroke={PAL.line} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M56 84H104" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="3 2.4" />
      <circle cx={92} cy={76} r={0} fill="none" />
      <Shine d="M14 46V60" width={2.6} opacity={0.6} />
    </g>
  ),

  // "de telefoon": the phone — a plain smartphone, screen on, nothing on it.
  'w.telefoon': () => (
    <g>
      <Ground cy={108} rx={30} ry={4} />
      <rect x={92} y={30} width={4} height={14} rx="2" fill={PAL.slateDark} />
      <rect x={92} y={50} width={4} height={20} rx="2" fill={PAL.slateDark} />
      <Phone x={30} y={8} w={62} h={98} screen={PAL.sky}>
        <path d="M34 15H68L34 60Z" fill={PAL.white} opacity=".18" />
        <path d="M34 72L88 34V48L34 86Z" fill={PAL.white} opacity=".1" />
        <rect x={51} y={96} width={20} height="3" rx="1.5" fill={PAL.white} opacity=".6" />
      </Phone>
    </g>
  ),

  // "uitzetten": to switch off — a finger presses the side button; the screen goes black and
  // shows the power symbol.
  'w.uitzetten': () => (
    <g>
      <Phone x={18} y={10} w={60} h={98} screen={PAL.slateDark}>
        <path d="M38.8 46A15 15 0 1 0 57.2 46" fill="none" stroke={PAL.steel} strokeWidth="5.5" strokeLinecap="round" />
        <path d="M48 38V58" stroke={PAL.steel} strokeWidth="5.5" strokeLinecap="round" />
      </Phone>
      <rect x={78} y={28} width={6} height={18} rx="2.5" fill={PAL.red} />
      <Hand pose="point" x={122} y={30} rotate={-90} scale={0.78} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
      <Motion x={81} y={37} dir={-90} spread={0} n={1} len={6} gap={14} color={PAL.red} width={3.4} />
      <Motion x={81} y={37} dir={90} spread={0} n={1} len={6} gap={14} color={PAL.red} width={3.4} />
    </g>
  ),

  // "roddelen": to gossip — Bram whispers to Jada behind Amina's back (Amina is seen from behind).
  'w.roddelen': () => (
    <g>
      <Bust who="jada" x={50} y={124} scale={0.5} expr="joy" squint />
      <Bust who="bram" x={24} y={124} scale={0.54} expr="pleased" />
      <Hand pose="open" x={42} y={110} rotate={-20} scale={0.42} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} mirror />
      <Bubble x={10} y={14} w={40} h={24} tail="right" fill={PAL.paper} depth={PAL.mist}>
        <Dots cx={30} cy={26} gap={9} r={3} color={PAL.line} />
      </Bubble>
      <BackView who="amina" x={94} y={124} s={0.56} />
    </g>
  ),

  // "posten": to post online — a photo goes up from the phone onto the internet and gets likes.
  'w.posten': () => (
    <g>
      <Phone x={14} y={50} w={46} h={74}>
        <rect x={20} y={60} width={34} height={6} rx="3" fill={PAL.mist} />
      </Phone>
      <Hand pose="hold" x={37} y={128} scale={0.9} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
      <Arrow from={[38, 70]} to={[56, 40]} color={PAL.sky} width={7} head={11} />
      <g transform="rotate(8 82 34)">
        <rect x={56} y={10} width={50} height={46} rx="4" fill={PAL.paperShade} transform="translate(2 3)" />
        <rect x={56} y={10} width={50} height={46} rx="4" fill={PAL.white} />
        <MiniPhoto x={60} y={14} w={42} h={30} />
        <path d="M62 50H80" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      </g>
      <Heart cx={96} cy={72} r={8} />
      <Heart cx={80} cy={86} r={6} />
      <Heart cx={100} cy={96} r={5} />
    </g>
  ),

  // "de groepsapp": the group chat — a phone with chat messages from several people (each
  // with their own round photo) and a group of faces at the top.
  'w.groepsapp': () => {
    const avatar = (cx: number, cy: number, who: CharacterId, bg: string, id: string) => (
      <g>
        <circle cx={cx} cy={cy} r={8} fill={bg} />
        <svg x={cx - 8} y={cy - 8} width={16} height={16} viewBox={`${cx - 8} ${cy - 8} 16 16`} overflow="hidden">
          <clipPath id={id}><circle cx={cx} cy={cy} r={8} /></clipPath>
          <g clipPath={`url(#${id})`}>
            <Bust who={who} x={cx} y={cy + 12} scale={0.17} expr="pleased" />
          </g>
        </svg>
      </g>
    );
    return (
      <g>
        <Phone x={24} y={6} w={72} h={108}>
          <rect x={28} y={13} width={64} height={20} rx="4" fill={PAL.green} />
          <circle cx={44} cy={23} r={6} fill={PAL.orange} />
          <circle cx={54} cy={23} r={6} fill={PAL.purple} />
          <circle cx={64} cy={23} r={6} fill={PAL.navy} />
          <circle cx={74} cy={23} r={6} fill={PAL.yellow} />
          {avatar(38, 46, 'bram', PAL.orange, 'g12-ga-1')}
          <Msg x={50} y={40} w={34} h={11} />
          {avatar(38, 66, 'amina', PAL.purpleLight, 'g12-ga-2')}
          <Msg x={50} y={60} w={28} h={11} />
          {avatar(38, 86, 'henk', PAL.blueLight, 'g12-ga-3')}
          <Msg x={50} y={80} w={34} h={11} />
          <Msg x={58} y={97} w={28} h={8} sent />
        </Phone>
      </g>
    );
  },

  // "delen": to share — one phone sends the same photo out to three other phones.
  'w.delen': () => (
    <g>
      <Phone x={10} y={30} w={40} h={68}>
        <MiniPhoto x={16} y={44} w={28} h={24} />
      </Phone>
      {([[94, 14], [100, 50], [94, 86]] as Pt[]).map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 11} y={y - 1} width={22} height={34} rx="4" fill={PAL.slateDark} />
          <rect x={x - 12} y={y - 3} width={22} height={34} rx="4" fill={PAL.slate} />
          <MiniPhoto x={x - 9} y={y + 4} w={16} h={14} />
        </g>
      ))}
      <Arrow from={[54, 50]} to={[76, 30]} color={PAL.sky} width={6} head={10} />
      <Arrow from={[56, 64]} to={[82, 64]} color={PAL.sky} width={6} head={10} />
      <Arrow from={[54, 78]} to={[76, 98]} color={PAL.sky} width={6} head={10} />
    </g>
  ),

  // "de screenshot": the screenshot — a phone screen caught in corner brackets with a flash,
  // and the small copy of the screen drops into the corner.
  'w.screenshot': () => (
    <g>
      <Phone x={30} y={10} w={60} h={100}>
        <Msg x={38} y={24} w={30} h={10} />
        <Msg x={50} y={40} w={32} h={10} sent />
        <Msg x={38} y={56} w={26} h={10} />
        <rect x={34} y={17} width={52} height={86} rx="4" fill={PAL.white} opacity=".35" />
      </Phone>
      <path
        d="M24 26V14Q24 8 30 8H40M80 8H90Q96 8 96 14V26M96 92V106Q96 112 90 112H80M40 112H30Q24 112 24 106V92"
        fill="none"
        stroke={PAL.orange}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="rotate(-8 50 88)">
        <rect x={38} y={70} width={26} height={34} rx="3" fill={PAL.slateDark} />
        <rect x={40} y={72} width={22} height={30} rx="2" fill={PAL.white} />
        <path d="M43 78H54M48 84H59M43 90H52" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <Sparkle x={104} y={44} r={9} />
      <Sparkle x={14} y={56} r={6} />
    </g>
  ),

  // "aanraken": to touch — a colleague's hand rests on Amina's shoulder.
  'w.aanraken': () => {
    const [sx, sy] = onBust(48, 124, 0.76, 86, 104);
    return (
      <g>
        <Bust who="amina" x={48} y={124} scale={0.76} expr="thinking" />
        <path d={`M${sx + 12} ${sy - 18}L128 ${sy - 66}`} stroke={PAL.navy} strokeWidth="19" strokeLinecap="round" />
        <path d={`M${sx + 22} ${sy - 12}L128 ${sy - 54}`} stroke={PAL.navyShade} strokeWidth="6" strokeLinecap="round" />
        <Hand pose="open" x={sx + 12} y={sy - 14} rotate={212} scale={0.64} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      </g>
    );
  },

  // "de opmerking": the remark — Bram makes a sharp remark (a spiky speech bubble) to Amina,
  // who does not like it.
  'w.opmerking': () => {
    const spikes = Array.from({ length: 16 }, (_, k) => {
      const a = (k * Math.PI) / 8;
      const r = k % 2 ? 1 : 1.32;
      return `${k ? 'L' : 'M'}${r1(66 + Math.cos(a) * 30 * r)} ${r1(32 + Math.sin(a) * 19 * r)}`;
    }).join('') + 'Z';
    return (
      <g>
        <Bust who="bram" x={28} y={124} scale={0.56} expr="joy" squint />
        <Bust who="amina" x={96} y={124} scale={0.5} expr="disappointed" flip />
        <path d="M44 48L36 70L56 52Z" fill={PAL.yellow} />
        <path d={spikes} fill={PAL.yellowShade} transform="translate(0 3)" stroke={PAL.yellowShade} strokeWidth="3" strokeLinejoin="round" />
        <path d={spikes} fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="3" strokeLinejoin="round" />
        <path d="M50 28H82M50 37H72" stroke={PAL.orangeShade} strokeWidth="4" strokeLinecap="round" />
      </g>
    );
  },

  // "de getuige": the witness — Jada saw what happened and tells it: an eye and a red
  // warning mark in her speech bubble.
  'w.getuige': () => (
    <g>
      <Bust who="jada" x={38} y={124} scale={0.64} expr="thinking" />
      <Bubble x={50} y={6} w={62} h={46} tail="left">
        <path d="M58 29Q76 9 94 29Q76 49 58 29Z" fill={PAL.white} />
        <path d="M58 29Q76 9 94 29" fill="none" stroke={PAL.skyShade} strokeWidth="3.6" strokeLinecap="round" />
        <circle cx={76} cy={29} r={9} fill={PAL.sky} />
        <circle cx={76} cy={29} r={4.4} fill={PAL.ink} />
        <circle cx={73} cy={26} r={2} fill={PAL.white} />
        <ExclaimMark x={104} y={29} size={22} color={PAL.red} />
      </Bubble>
    </g>
  ),

  // "de fout": the mistake — a work list where one line is wrong: a red cross between ticks.
  'w.fout': () => (
    <g>
      <rect x={18} y={8} width={84} height={100} rx="6" fill={PAL.paperShade} transform="translate(0 4)" />
      <rect x={18} y={8} width={84} height={100} rx="6" fill={PAL.white} />
      <Tick x={34} y={26} r={9} />
      <path d="M50 26H88" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <rect x={22} y={44} width={76} height={26} rx="5" fill="#ffe1db" />
      <path d="M50 57H86" stroke={PAL.redLight} strokeWidth="4" strokeLinecap="round" />
      <Cross x={34} y={57} r={11} />
      <Tick x={34} y={88} r={9} />
      <path d="M50 88H84" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <Cross x={92} y={92} r={16} />
    </g>
  ),

  // "uitleggen": to explain — Henk explains to Jada how it works: step, arrow, done.
  'w.uitleggen': () => (
    <g>
      <Bust who="henk" x={30} y={124} scale={0.58} expr="pleased" />
      <Bust who="jada" x={98} y={124} scale={0.44} expr="thinking" flip />
      <Hand pose="open" x={60} y={104} rotate={30} scale={0.5} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} mirror />
      <Bubble x={40} y={6} w={72} h={40} tail="left">
        <rect x={48} y={16} width={16} height={16} rx="3" fill={PAL.card} />
        <path d="M54 16V22" stroke={PAL.cardShade} strokeWidth="3" />
        <Arrow from={[68, 24]} to={[84, 24]} color={PAL.orange} width={5} head={8} />
        <Tick x={96} y={24} r={9} />
      </Bubble>
    </g>
  ),

  // "leren": to learn — Amina reads an open book and gets the idea (a light bulb).
  'w.leren': () => (
    <g>
      <Bust who="amina" x={56} y={128} scale={0.62} expr="pleased" />
      <Bulb cx={94} cy={30} r={12} />
      {/* Open book held in front of her */}
      <path d="M22 92L56 98V122L22 116Z" fill={PAL.redShade} />
      <path d="M90 92L56 98V122L90 116Z" fill={PAL.red} />
      <path d="M25 88Q42 86 56 94V116Q42 108 25 110Z" fill={PAL.white} />
      <path d="M87 88Q70 86 56 94V116Q70 108 87 110Z" fill={PAL.paperShade} />
      <path d="M30 95Q42 93 51 98M30 102Q42 100 51 105M61 98Q70 93 82 95M61 105Q70 100 82 102" fill="none" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
    </g>
  ),

  // "nee zeggen": to say no — Bram says no: a red cross in his speech bubble, his hand up.
  'w.neezeggen': () => (
    <g>
      <Bust who="bram" x={38} y={124} scale={0.64} expr="neutral" />
      <Bubble x={58} y={8} w={52} h={44} tail="left" fill="#ffe1db" depth={PAL.redLight}>
        <Cross x={84} y={30} r={15} />
      </Bubble>
      <Hand pose="open" x={86} y={118} rotate={6} scale={0.62} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} mirror />
    </g>
  ),
} as Record<string, () => JSX.Element>;
