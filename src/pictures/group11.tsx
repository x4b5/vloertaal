import type { JSX, ReactNode } from 'react';
import { Arrow, Bubble, Bust, Clock, CurveArrow, Dots, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/** Word pictures, group 11 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

const SCREEN = '#e3f5ff';

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

/** The green call button with a white handset, centred on (cx, cy). */
function CallButton({ cx, cy, r = 11, color = PAL.ok }: { cx: number; cy: number; r?: number; color?: string }) {
  const s = r / 11;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={color} />
      <g transform={`translate(${cx} ${cy}) scale(${s}) rotate(-45)`}>
        <path d="M-6 -3Q0 3 6 -3" fill="none" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" />
        <rect x="-9" y="-6" width="5.4" height="6" rx="2" fill={PAL.white} transform="rotate(30 -6 -3)" />
        <rect x="3.6" y="-6" width="5.4" height="6" rx="2" fill={PAL.white} transform="rotate(-30 6 -3)" />
      </g>
    </g>
  );
}

/** A small chat message on a phone screen (white = received, lime = sent). */
function Msg({ x, y, w, h = 10, sent = false }: { x: number; y: number; w: number; h?: number; sent?: boolean }) {
  const fill = sent ? PAL.lime : PAL.white;
  const shade = sent ? PAL.leaf : PAL.mist;
  const tail = sent ? `M${x + w - 5} ${y + h - 3}L${x + w + 3} ${y + h + 2}L${x + w - 9} ${y + h}Z` : `M${x + 5} ${y + h - 3}L${x - 3} ${y + h + 2}L${x + 9} ${y + h}Z`;
  return (
    <g>
      <rect x={x} y={y + 1.6} width={w} height={h} rx={h / 2.4} fill={shade} />
      <path d={tail} fill={fill} />
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
  for (let i = 0; i < n; i++) d += `q${(step / 2).toFixed(1)} ${i % 2 ? 5 : -5} ${step.toFixed(1)} 0`;
  return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />;
}

/** "Writing" in a blocky script: a row of small square signs from (x, y) (vertical centre). */
function BlockScript({ x, y, w, color, size = 7 }: { x: number; y: number; w: number; color: string; size?: number }) {
  const n = Math.max(1, Math.floor((w + 3) / (size + 3)));
  const s = size;
  const sign = (i: number) => {
    const sx = x + i * (s + 3);
    const t = y - s / 2;
    switch (i % 3) {
      case 0:
        return `M${sx} ${t}H${sx + s}M${sx + s / 2} ${t}V${t + s}M${sx} ${t + s}H${sx + s}`;
      case 1:
        return `M${sx} ${t}V${t + s}H${sx + s}V${t}M${sx} ${t + s / 2}H${sx + s}`;
      default:
        return `M${sx} ${t + s / 2}H${sx + s}M${sx + s / 2} ${t}V${t + s}M${sx + 1} ${t + s}L${sx + s / 2} ${t + s / 2}`;
    }
  };
  return (
    <path d={Array.from({ length: n }, (_, i) => sign(i)).join('')} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  );
}

/** A glossy yellow hard hat seen from the front, about 96 wide at s = 1, brim centred on (x, y). */
function HardHat({ x = 60, y = 70, s = 1, rotate = 0 }: { x?: number; y?: number; s?: number; rotate?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${s}) translate(-60 -70)`}>
      <Shade color={PAL.yellowShade} opacity={0.75} at={[96, 46, 18, 40]}>
        <path d="M22 66C22 34 38 16 60 16C82 16 98 34 98 66Z" fill={PAL.yellow} />
      </Shade>
      <rect x="53" y="16" width="14" height="48" rx="7" fill={PAL.yellowLight} />
      <Shine d="M32 54Q34 36 48 26" color={PAL.yellowShine} width={5} opacity={1} />
      <rect x="12" y="60" width="96" height="13" rx="6.5" fill={PAL.yellowShade} />
      <rect x="12" y="60" width="96" height="4.5" rx="2.25" fill={PAL.yellowLight} opacity=".7" />
    </g>
  );
}

/** A sheet of paper with a darker depth edge; `children` draw on it. */
function Sheet({ x, y, w, h, rx = 5, children }: { x: number; y: number; w: number; h: number; rx?: number; children?: ReactNode }) {
  return (
    <g>
      <rect x={x} y={y + 4} width={w} height={h} rx={rx} fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={PAL.white} />
      {children}
    </g>
  );
}

/** Sound waves: `n` arcs opening towards `dir` (1 = right, -1 = left) from (x, y). */
function Waves({ x, y, dir = 1, n = 2, color = PAL.sky, r0 = 6, gap = 6 }: { x: number; y: number; dir?: 1 | -1; n?: number; color?: string; r0?: number; gap?: number }) {
  const d = Array.from({ length: n }, (_, i) => {
    const r = r0 + i * gap;
    const a = 0.8;
    const x0 = x + dir * Math.cos(a) * r;
    return `M${x0.toFixed(1)} ${(y - Math.sin(a) * r).toFixed(1)}A${r} ${r} 0 0 ${dir === 1 ? 1 : 0} ${x0.toFixed(1)} ${(y + Math.sin(a) * r).toFixed(1)}`;
  }).join('');
  return <path d={d} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />;
}

/** A sun: yellow disc with orange rays, centred on (cx, cy). */
function Sun({ cx, cy, r = 14 }: { cx: number; cy: number; r?: number }) {
  const rays = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4;
    const o = r * 1.32;
    const e = r * 1.72;
    return `M${(cx + Math.cos(a) * o).toFixed(1)} ${(cy + Math.sin(a) * o).toFixed(1)}L${(cx + Math.cos(a) * e).toFixed(1)} ${(cy + Math.sin(a) * e).toFixed(1)}`;
  });
  return (
    <g>
      <path d={rays.join('')} stroke={PAL.orangeLight} strokeWidth={Math.max(3.4, r * 0.3)} strokeLinecap="round" />
      <Shade color={PAL.orange} opacity={0.5} at={[cx + r * 1.1, cy, r * 0.55, r * 1.3]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      </Shade>
      <Shine d={`M${cx - r * 0.62} ${cy - r * 0.1}A${r * 0.66} ${r * 0.66} 0 0 1 ${cx - r * 0.1} ${cy - r * 0.62}`} color={PAL.yellowShine} width={Math.max(2.6, r * 0.2)} opacity={0.9} />
    </g>
  );
}

/** A wall-calendar page with a 4 x 3 grid of days; `cell(i, cx, cy, r)` may draw a cell itself. */
function CalPage({ x = 14, y = 22, w = 92, h = 80, cell }: {
  x?: number; y?: number; w?: number; h?: number;
  cell?: (i: number, cx: number, cy: number, r: number) => ReactNode | null;
}) {
  const cw = (w - 14) / 4;
  const ch = (h - 32) / 3;
  const r = Math.min(cw, ch) * 0.5;
  return (
    <g>
      <rect x={x} y={y + 5} width={w} height={h} rx="10" fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height={h} rx="10" fill={PAL.white} />
      <path d={`M${x} ${y + 10}A10 10 0 0 1 ${x + 10} ${y}H${x + w - 10}A10 10 0 0 1 ${x + w} ${y + 10}V${y + 22}H${x}Z`} fill={PAL.red} />
      <path d={`M${x + w * 0.7} ${y}H${x + w - 10}A10 10 0 0 1 ${x + w} ${y + 10}V${y + 22}H${x + w * 0.7}Z`} fill={PAL.redShade} opacity=".6" />
      <rect x={x + w * 0.24} y={y - 7} width="7" height="15" rx="3.5" fill={PAL.slate} />
      <rect x={x + w * 0.76 - 7} y={y - 7} width="7" height="15" rx="3.5" fill={PAL.slate} />
      {Array.from({ length: 12 }, (_, i) => {
        const cx = x + 7 + (i % 4) * cw + cw / 2;
        const cy = y + 27 + Math.floor(i / 4) * ch + ch / 2;
        const own = cell?.(i, cx, cy, r);
        return own ? <g key={i}>{own}</g> : <rect key={i} x={cx - cw * 0.3} y={cy - ch * 0.24} width={cw * 0.6} height={ch * 0.48} rx="2.5" fill={PAL.mist} />;
      })}
    </g>
  );
}

/** A hi-vis work vest seen from the front, about 64 wide at s = 1, centred on x, top at y. */
function Vest({ x = 60, y = 24, s = 1 }: { x?: number; y?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -24)`}>
      <path d="M44 24L60 54L76 24Z" fill={PAL.orangeShade} />
      <Shade color={PAL.orangeShade} opacity={0.9} at={[100, 70, 14, 50]}>
        <path d="M30 32Q36 24 46 24L60 54L74 24Q84 24 90 32Q84 46 92 62V100Q92 106 86 106H34Q28 106 28 100V62Q36 46 30 32Z" fill={PAL.orange} />
      </Shade>
      <path d="M28 72H92M28 88H92" stroke={PAL.paper} strokeWidth="7" />
      <path d="M28 74.5H92M28 90.5H92" stroke={PAL.paperShade} strokeWidth="2" />
      <path d="M60 54V106" stroke={PAL.orangeShade} strokeWidth="2.4" strokeLinecap="round" />
      <Shine d="M34 40Q36 50 32 60" width={3.4} opacity={0.5} />
    </g>
  );
}

/** A round germ (no face): a green blob with knobs, centred on (cx, cy). */
function Germ({ cx, cy, r, color = PAL.leaf, shade = PAL.leafShade }: { cx: number; cy: number; r: number; color?: string; shade?: string }) {
  const knobs = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4 + 0.3;
    return <circle key={k} cx={cx + Math.cos(a) * r * 1.18} cy={cy + Math.sin(a) * r * 1.18} r={r * 0.24} fill={shade} />;
  });
  const legs = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4 + 0.3;
    return `M${(cx + Math.cos(a) * r * 0.8).toFixed(1)} ${(cy + Math.sin(a) * r * 0.8).toFixed(1)}L${(cx + Math.cos(a) * r * 1.15).toFixed(1)} ${(cy + Math.sin(a) * r * 1.15).toFixed(1)}`;
  });
  return (
    <g>
      <path d={legs.join('')} stroke={shade} strokeWidth={Math.max(2, r * 0.2)} strokeLinecap="round" />
      {knobs}
      <Shade color={shade} opacity={0.9} at={[cx + r * 1.1, cy + r * 0.3, r * 0.6, r * 1.3]}>
        <circle cx={cx} cy={cy} r={r} fill={color} />
      </Shade>
      <circle cx={cx - r * 0.25} cy={cy + r * 0.2} r={r * 0.2} fill={shade} opacity=".7" />
      <circle cx={cx + r * 0.3} cy={cy - r * 0.25} r={r * 0.15} fill={shade} opacity=".7" />
      <Shine d={`M${cx - r * 0.62} ${cy - r * 0.1}A${r * 0.66} ${r * 0.66} 0 0 1 ${cx - r * 0.1} ${cy - r * 0.62}`} width={Math.max(2, r * 0.16)} opacity={0.6} />
    </g>
  );
}

/** A stack of books seen from the side (spines), standing on y. */
function bookRow(x0: number, y: number, h: number, seed: number) {
  const colors: [string, string][] = [
    [PAL.red, PAL.redShade], [PAL.sky, PAL.skyShade], [PAL.green, PAL.greenShade], [PAL.yellow, PAL.yellowShade],
    [PAL.purple, PAL.purpleShade], [PAL.orange, PAL.orangeShade], [PAL.navy, PAL.navyShade], [PAL.clay, PAL.clayShade],
  ];
  const widths = [9, 7, 10, 8, 7, 9, 8, 10, 7];
  const heights = [1, 0.86, 0.95, 0.8, 1, 0.9, 0.84, 0.97, 0.88];
  const out: ReactNode[] = [];
  let x = x0;
  for (let i = 0; i < 9; i++) {
    const k = (i + seed) % 9;
    const w = widths[k];
    const bh = h * heights[k];
    const [c, cs] = colors[(i * 3 + seed) % colors.length];
    out.push(
      <g key={i}>
        <rect x={x} y={y - bh} width={w} height={bh} rx="1.6" fill={c} />
        <rect x={x + w * 0.62} y={y - bh} width={w * 0.38} height={bh} rx="1.2" fill={cs} />
        <path d={`M${x + 1.6} ${y - bh + 5}H${x + w - 1.6}`} stroke={PAL.white} strokeWidth="1.6" strokeLinecap="round" opacity=".6" />
      </g>,
    );
    x += w + 1;
  }
  return { nodes: out, end: x };
}

export default {
  // "terugbellen": to call back — a phone with the green call button and a big arrow that
  // goes out and comes back to the phone.
  'w.terugbellen': () => (
    <g>
      <Phone x={20} y={16} w={46} h={84}>
        <CallButton cx={43} cy={58} r={14} />
        <path d="M32 34H54M32 82H54" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" />
      </Phone>
      <CurveArrow from={[70, 26]} to={[70, 82]} bend={36} color={PAL.sky} width={8} head={14} />
    </g>
  ),

  // "inspreken": to leave a voice message — Jada speaks into her phone; the screen shows a
  // voice message (sound bars) and a red record button.
  'w.inspreken': () => (
    <g>
      <Bust who="jada" x={34} y={120} scale={0.6} expr="pleased" talk />
      <Waves x={52} y={74} dir={1} n={2} r0={6} gap={7} />
      <g transform="rotate(8 88 66)">
        <Phone x={70} y={28} w={36} h={70}>
          <rect x={76} y={40} width={24} height={20} rx="6" fill={PAL.white} />
          <path d="M80 50V50M84 46V54M88 43V57M92 47V53M96 49V51" stroke={PAL.sky} strokeWidth="2.6" strokeLinecap="round" />
          <circle cx={88} cy={76} r={9} fill={PAL.red} />
          <rect x={85.5} y={69.5} width="5" height="9" rx="2.5" fill={PAL.white} />
          <path d="M83.5 76Q83.5 81 88 81Q92.5 81 92.5 76M88 81V83.5" fill="none" stroke={PAL.white} strokeWidth="1.6" strokeLinecap="round" />
        </Phone>
      </g>
    </g>
  ),

  // "het bericht": the message — a phone in the hand with one new chat message on the screen
  // and a red "new" dot (not a paper letter).
  'w.bericht': () => (
    <g>
      <Phone x={32} y={10} w={56} h={92}>
        <Bubble x={40} y={22} w={40} h={30} tail="left" fill={PAL.white} depth={PAL.mist}>
          <path d="M47 32H73M47 42H64" stroke={PAL.line} strokeWidth="3.2" strokeLinecap="round" />
        </Bubble>
      </Phone>
      <circle cx={85} cy={15} r={9} fill={PAL.redShade} />
      <circle cx={85} cy={13.5} r={9} fill={PAL.red} />
      <Hand pose="hold" x={60} y={124} scale={1.1} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),

  // "de app": the app — a phone screen full of colourful app tiles.
  'w.app': () => {
    const tiles: [string, string][] = [
      [PAL.sky, PAL.skyShade], [PAL.orange, PAL.orangeShade], [PAL.green, PAL.greenShade],
      [PAL.red, PAL.redShade], [PAL.purple, PAL.purpleShade], [PAL.yellow, PAL.yellowShade],
      [PAL.navy, PAL.navyShade], [PAL.leaf, PAL.leafShade], [PAL.clay, PAL.clayShade],
      [PAL.blue, PAL.blueShade], [PAL.ok, PAL.okShade], [PAL.orange, PAL.orangeShade],
    ];
    return (
      <g>
        <Phone x={28} y={10} w={64} h={100}>
          {tiles.map(([c, cs], i) => {
            const tx = 37 + (i % 3) * 16.5;
            const ty = 22 + Math.floor(i / 3) * 19;
            return (
              <g key={i}>
                <rect x={tx} y={ty + 1.6} width="13" height="13" rx="4" fill={cs} />
                <rect x={tx} y={ty} width="13" height="13" rx="4" fill={c} />
                <circle cx={tx + 6.5} cy={ty + 6.5} r="2.6" fill={PAL.white} opacity=".85" />
              </g>
            );
          })}
        </Phone>
      </g>
    );
  },

  // "appen": to send app messages — two thumbs typing on a phone, chat messages on the screen.
  'w.appen': () => (
    <g>
      <Phone x={34} y={8} w={52} h={88}>
        <Msg x={41} y={19} w={28} h={10} />
        <Msg x={51} y={35} w={28} h={10} sent />
        <Msg x={41} y={51} w={24} h={10} />
        <rect x={40} y={68} width={40} height={20} rx="3" fill={PAL.mist} />
        <path d="M44 73H76M44 78H76M48 83H72" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" strokeDasharray="2.6 3.2" />
      </Phone>
      <Hand pose="thumb" x={30} y={120} rotate={32} scale={0.95} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
      <Hand pose="thumb" x={90} y={120} rotate={-32} scale={0.95} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} mirror />
    </g>
  ),

  // "het certificaat": the certificate — a framed paper with a title bar and a red seal with ribbons.
  'w.certificaat': () => (
    <g>
      <Sheet x={10} y={20} w={100} h={70} rx={4}>
        <rect x={16} y={26} width={88} height={58} rx="2" fill="none" stroke={PAL.yellowShade} strokeWidth="2.4" />
        <path d="M34 40H86" stroke={PAL.navy} strokeWidth="5" strokeLinecap="round" />
        <path d="M30 54H90M30 64H70" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      </Sheet>
      <path d="M80 82L74 108L82 103L87 110L90 84Z" fill={PAL.redShade} />
      <path d="M92 82L98 108L90 103L86 110L84 84Z" fill={PAL.red} />
      <path d={Array.from({ length: 12 }, (_, k) => {
        const a = (k * Math.PI) / 6;
        const r = k % 2 ? 13 : 15;
        return `${k ? 'L' : 'M'}${(86 + Math.cos(a) * r).toFixed(1)} ${(78 + Math.sin(a) * r).toFixed(1)}`;
      }).join('') + 'Z'} fill={PAL.red} stroke={PAL.red} strokeWidth="3" strokeLinejoin="round" />
      <circle cx={86} cy={78} r={9} fill={PAL.yellow} />
      <circle cx={86} cy={78} r={5} fill={PAL.yellowShade} />
      <Shine d="M79 74A8 8 0 0 1 83 70" color={PAL.yellowShine} width={2.4} opacity={0.9} />
    </g>
  ),

  // "de cursus": the course — a teacher (Henk) at a board, two learners seen from behind, a book.
  'w.cursus': () => (
    <g>
      {/* Board */}
      <rect x={12} y={14} width={64} height={44} rx="5" fill={PAL.slateDark} transform="translate(0 3)" />
      <rect x={12} y={14} width={64} height={44} rx="5" fill={PAL.slate} />
      <rect x={16} y={18} width={56} height={36} rx="3" fill={PAL.white} />
      <path d="M22 28H48M22 37H42M22 46H52" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      <circle cx={61} cy={36} r={7} fill="none" stroke={PAL.sky} strokeWidth="3" />
      {/* Teacher */}
      <Bust who="henk" x={94} y={84} scale={0.42} expr="pleased" flip />
      <Hand pose="point" x={80} y={70} rotate={-62} scale={0.5} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      {/* Learners from behind */}
      <path d="M10 120L11.5 108Q13 100.5 21 99.5H43Q51 100.5 52.5 108L54 120Z" fill={PAL.green} />
      <path d="M21 90C21 81 25.6 76 32 76C38.4 76 43 81 43 90C43 96 41.6 100 39.5 102.5H24.5C22.4 100 21 96 21 90Z" fill={PAL.purple} />
      <path d="M37.4 77.6C41 80 43 84.4 43 90C43 96 41.6 100 39.5 102.5H36C38 99 38.8 95 38.8 90C38.8 84.6 38.4 80.6 37.4 77.6Z" fill={PAL.purpleShade} />
      <path d="M66 120L67.5 110Q69 102.5 77 101.5H99Q107 102.5 108.5 110L110 120Z" fill={PAL.orange} />
      <rect x={82.5} y={88} width={11} height={14} fill={SKIN.bram[1]} />
      <path d="M76 92C76 81 81 75 88 75C95 75 100 81 100 92Z" fill={PAL.yellow} />
      <rect x={73} y={90} width={30} height={4.4} rx="1.2" fill={PAL.yellowShade} />
      {/* Open book between them */}
      <path d="M46 108L60 104L74 108V116L60 112L46 116Z" fill={PAL.paperShade} />
      <path d="M47 106L60 102V110L47 114Z" fill={PAL.white} />
      <path d="M73 106L60 102V110L73 114Z" fill={PAL.paper} />
    </g>
  ),

  // "het examen": the exam — Amina at a desk with a test paper, a stopwatch running.
  'w.examen': () => (
    <g>
      <Bust who="amina" x={46} y={100} scale={0.58} expr="thinking" />
      {/* Desk */}
      <rect x={6} y={84} width={108} height={8} rx="3" fill={PAL.cardShade} />
      <rect x={6} y={80} width={108} height={7} rx="3" fill={PAL.card} />
      <rect x={10} y={92} width={8} height={18} rx="2" fill={PAL.cardDark} />
      <rect x={102} y={92} width={8} height={18} rx="2" fill={PAL.cardDark} />
      {/* Test paper on the desk */}
      <g transform="rotate(-6 50 76)">
        <Sheet x={26} y={56} w={46} h={30} rx={3}>
          <rect x={31} y={61} width="6" height="6" rx="1.5" fill="none" stroke={PAL.ok} strokeWidth="1.8" />
          <path d="M32 64L34 66L38 61" fill="none" stroke={PAL.ok} strokeWidth="2" strokeLinecap="round" />
          <path d="M41 64H66" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
          <rect x={31} y={73} width="6" height="6" rx="1.5" fill="none" stroke={PAL.line} strokeWidth="1.8" />
          <path d="M41 76H62" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
        </Sheet>
      </g>
      {/* Pencil */}
      <g transform="rotate(-40 74 70)">
        <rect x={70} y={50} width="7" height="26" rx="1.5" fill={PAL.yellow} />
        <rect x={70} y={48} width="7" height="5" rx="2" fill={PAL.redLight} />
        <path d="M70 76L73.5 84L77 76Z" fill={PAL.card} />
      </g>
      {/* Stopwatch */}
      <rect x={90} y={10} width={8} height={7} rx="2" fill={PAL.slate} />
      <circle cx={94} cy={34} r={18} fill={PAL.redShade} />
      <circle cx={94} cy={32} r={18} fill={PAL.red} />
      <circle cx={94} cy={32} r={13} fill={PAL.white} />
      <path d="M94 32L94 19A13 13 0 0 1 106.3 36.2Z" fill={PAL.redLight} />
      <path d="M94 32L104 26" stroke={PAL.ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx={94} cy={32} r="2.4" fill={PAL.ink} />
    </g>
  ),

  // "de werktijd": the working time — a clock wearing a yellow hard hat.
  'w.werktijd': () => (
    <g>
      <Ground cy={106} rx={30} />
      <Clock cx={60} cy={68} r={36} hour={8} minute={0} />
      <HardHat x={60} y={38} s={0.56} rotate={-8} />
    </g>
  ),

  // "de bibliotheek": the library — a big bookcase, every shelf full of books.
  'w.bibliotheek': () => {
    const rows = [
      bookRow(20, 40, 22, 0),
      bookRow(20, 70, 22, 3),
      bookRow(20, 100, 22, 6),
    ];
    return (
      <g>
        <Ground cy={108} rx={48} />
        <rect x={12} y={10} width={96} height={98} rx="4" fill={PAL.cardDark} />
        <rect x={98} y={10} width={10} height={98} rx="3" fill={PAL.brown} opacity=".55" />
        <rect x={18} y={14} width={82} height={88} rx="2" fill={PAL.brown} />
        {rows.map((r, i) => (
          <g key={i}>{r.nodes}</g>
        ))}
        <rect x={14} y={40} width={88} height={5} rx="2" fill={PAL.wood} />
        <rect x={14} y={70} width={88} height={5} rx="2" fill={PAL.wood} />
        <rect x={14} y={100} width={88} height={6} rx="2" fill={PAL.wood} />
        <Shine d="M16 18V36" width={2.6} opacity={0.35} />
      </g>
    );
  },

  // "de foto": the photo — two printed photos with a landscape (sun, hills), not a camera.
  'w.foto': () => {
    const print = (rot: number, cx: number, cy: number) => (
      <g transform={`rotate(${rot} ${cx} ${cy})`}>
        <rect x={cx - 34} y={cy - 36} width={68} height={78} rx="3" fill={PAL.paperShade} transform="translate(2 4)" />
        <rect x={cx - 34} y={cy - 36} width={68} height={78} rx="3" fill={PAL.white} />
        <rect x={cx - 28} y={cy - 30} width={56} height={52} rx="1.5" fill={PAL.ice} />
        <circle cx={cx + 12} cy={cy - 16} r={7} fill={PAL.yellow} />
        <path d={`M${cx - 28} ${cy + 6}Q${cx - 14} ${cy - 14} ${cx + 2} ${cy + 4}Q${cx + 14} ${cy - 6} ${cx + 28} ${cy + 4}V${cy + 22}H${cx - 28}Z`} fill={PAL.green} />
        <path d={`M${cx - 28} ${cy + 14}Q${cx} ${cy + 2} ${cx + 28} ${cy + 14}V${cy + 22}H${cx - 28}Z`} fill={PAL.leaf} />
      </g>
    );
    return (
      <g>
        {print(10, 70, 58)}
        {print(-7, 52, 62)}
      </g>
    );
  },

  // "de vertaalapp": the translation app — a phone with a message in one script, swap arrows,
  // and the same message in another script.
  'w.vertaalapp': () => (
    <g>
      <Phone x={28} y={8} w={64} h={104}>
        <Bubble x={36} y={18} w={44} h={24} tail="left">
          <WaveScript x={43} y={30} w={30} color={PAL.skyShade} />
        </Bubble>
        <Arrow from={[52, 50]} to={[52, 70]} color={PAL.orange} width={5} head={8} />
        <Arrow from={[68, 70]} to={[68, 50]} color={PAL.sky} width={5} head={8} />
        <Bubble x={40} y={74} w={44} h={22} tail="right" fill="#fff3d6" depth={PAL.yellowLight}>
          <BlockScript x={47} y={85} w={32} color={PAL.orangeShade} />
        </Bubble>
      </Phone>
    </g>
  ),

  // "vertalen": to translate — two speech bubbles in different scripts with arrows between them.
  'w.vertalen': () => (
    <g>
      <Bubble x={8} y={10} w={60} h={38} tail="left">
        <WaveScript x={17} y={23} w={42} color={PAL.skyShade} width={3.4} />
        <WaveScript x={17} y={36} w={28} color={PAL.skyShade} width={3.4} />
      </Bubble>
      <Bubble x={52} y={64} w={60} h={34} tail="right" fill="#fff3d6" depth={PAL.yellowLight}>
        <BlockScript x={60} y={76} w={44} color={PAL.orangeShade} size={8} />
        <BlockScript x={60} y={89} w={24} color={PAL.orangeShade} size={8} />
      </Bubble>
      <CurveArrow from={[76, 26]} to={[98, 54]} bend={12} color={PAL.sky} width={7} head={12} />
      <CurveArrow from={[42, 92]} to={[22, 66]} bend={12} color={PAL.orange} width={7} head={12} />
    </g>
  ),

  // "de vertaling": the translation — a sheet: lines in one script, an arrow, the same lines
  // in another script.
  'w.vertaling': () => (
    <g>
      <Sheet x={22} y={8} w={76} h={100} rx={6}>
        <WaveScript x={32} y={24} w={54} color={PAL.skyShade} width={3.4} />
        <WaveScript x={32} y={38} w={38} color={PAL.skyShade} width={3.4} />
        <Arrow from={[60, 48]} to={[60, 70]} color={PAL.sky} width={7} head={11} />
        <BlockScript x={32} y={82} w={56} color={PAL.orangeShade} size={8} />
        <BlockScript x={32} y={96} w={34} color={PAL.orangeShade} size={8} />
      </Sheet>
    </g>
  ),

  // "herhalen": to repeat — Bram says it again: a repeat loop in his speech bubble.
  'w.herhalen': () => (
    <g>
      <Bust who="bram" x={36} y={120} scale={0.6} expr="pleased" talk />
      <Bubble x={54} y={8} w={58} h={50} tail="left">
        <CurveArrow from={[68, 34]} to={[98, 32]} bend={14} color={PAL.sky} width={5.5} head={10} />
        <CurveArrow from={[98, 36]} to={[68, 38]} bend={14} color={PAL.sky} width={5.5} head={10} />
      </Bubble>
    </g>
  ),

  // "laten zien": to show — Jada holds up her phone so Henk can see the screen.
  'w.latenzien': () => (
    <g>
      <Bust who="jada" x={28} y={122} scale={0.5} expr="pleased" />
      <Bust who="henk" x={94} y={122} scale={0.5} expr="thinking" flip />
      <g transform="rotate(10 60 40)">
        <rect x={44} y={18} width={34} height={46} rx="5" fill={PAL.slateDark} transform="translate(2 3)" />
        <rect x={44} y={18} width={34} height={46} rx="5" fill={PAL.slate} />
        <rect x={47.5} y={22} width={27} height={38} rx="3" fill={PAL.ice} />
        <circle cx={66} cy={31} r={4} fill={PAL.yellow} />
        <path d="M47.5 52Q55 40 62 48Q68 43 74.5 50V60H47.5Z" fill={PAL.green} />
      </g>
      <Hand pose="hold" x={52} y={88} rotate={12} scale={0.6} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
      <Motion x={62} y={40} dir={-90} spread={140} n={3} len={6} gap={32} color={PAL.sky} width={3.4} />
    </g>
  ),

  // "de ondertiteling": the captions — a video on a phone (sideways), a dark caption bar with
  // lines of text under the speaking face.
  'w.ondertiteling': () => (
    <g>
      <rect x={10} y={26} width={100} height={66} rx="9" fill={PAL.slateDark} transform="translate(2.5 3)" />
      <rect x={10} y={26} width={100} height={66} rx="9" fill={PAL.slate} />
      <svg x={18} y={31} width={84} height={56} viewBox="18 31 84 56" overflow="hidden">
        <rect x={18} y={31} width={84} height={56} rx="3" fill={PAL.ice} />
        <Bust who="jada" x={60} y={92} scale={0.5} expr="joy" />
      </svg>
      <rect x={22} y={68} width={76} height={15} rx="4" fill={PAL.ink} opacity=".85" />
      <path d="M29 75.5H52M57 75.5H73M78 75.5H91" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" />
    </g>
  ),

  // "de instructie": the instruction — a sheet with three picture steps (one, two, three dots).
  'w.instructie': () => {
    const badge = (y: number, n: number) => (
      <g>
        <circle cx={36} cy={y + 1} r={8} fill={PAL.skyShade} />
        <circle cx={36} cy={y} r={8} fill={PAL.sky} />
        {Array.from({ length: n }, (_, i) => (
          <circle key={i} cx={36 + (i - (n - 1) / 2) * 4.4} cy={y} r="1.8" fill={PAL.white} />
        ))}
      </g>
    );
    return (
      <g>
        <Sheet x={20} y={8} w={80} h={100} rx={6}>
          {badge(28, 1)}
          {/* 1: a box */}
          <rect x={54} y={20} width={20} height={16} rx="2" fill={PAL.card} />
          <rect x={74} y={17} width={6} height={16} rx="1.5" fill={PAL.cardShade} />
          <rect x={54} y={16} width={22} height={5} rx="2" fill="#f0c48a" />
          <path d="M84 28H90" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
          {badge(58, 2)}
          {/* 2: move it (arrow) */}
          <Arrow from={[52, 58]} to={[88, 58]} color={PAL.orange} width={6} head={10} />
          {badge(88, 3)}
          {/* 3: done (tick) */}
          <Tick x={68} y={87} r={10} />
          <path d="M82 88H90" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
          <path d="M28 43H92M28 73H92" stroke={PAL.paperShade} strokeWidth="2" strokeLinecap="round" />
        </Sheet>
      </g>
    );
  },

  // "opschrijven": to write down — a hand writing on a notepad with a pencil.
  'w.opschrijven': () => (
    <g>
      <Sheet x={14} y={14} w={70} h={92} rx={5}>
        <rect x={14} y={14} width={70} height={12} rx="5" fill={PAL.sky} />
        {[24, 36, 48, 60, 72].map((x) => (
          <rect key={x} x={x - 2} y={9} width="4" height="12" rx="2" fill={PAL.slate} />
        ))}
        <path d="M22 40H76M22 52H76M22 64H76M22 76H76M22 88H76" stroke={PAL.paperShade} strokeWidth="2" strokeLinecap="round" />
        <WaveScript x={24} y={51} w={48} color={PAL.navy} width={2.8} />
        <WaveScript x={24} y={63} w={28} color={PAL.navy} width={2.8} />
      </Sheet>
      {/* Hand holding the pencil, tip on the end of the written line */}
      <Hand pose="hold" x={84} y={91} rotate={-45} scale={0.62} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <g transform="translate(53 63) rotate(38.8)">
        <path d="M0 0L9 -4V4Z" fill={PAL.card} />
        <path d="M0 0L3 -1.4V1.4Z" fill={PAL.ink} />
        <rect x={9} y={-4} width={46} height={8} rx="1.5" fill={PAL.yellow} />
        <rect x={9} y={1} width={46} height={3} fill={PAL.yellowShade} />
        <rect x={53} y={-4} width={8} height={8} rx="2" fill={PAL.redLight} />
      </g>
    </g>
  ),

  // "het compliment": the compliment — Henk gives Amina a thumbs up; she smiles, proud, with sparkles.
  'w.compliment': () => (
    <g>
      <Bust who="henk" x={28} y={122} scale={0.52} expr="pleased" bold />
      <Hand pose="thumb" x={56} y={98} rotate={8} scale={0.66} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <Bust who="amina" x={88} y={122} scale={0.6} emotion="proud" tilt={-4} bold flip />
      <Sparkle x={66} y={24} r={8} />
      <Sparkle x={112} y={30} r={6} />
      <Sparkle x={108} y={10} r={4} color={PAL.yellowShade} />
    </g>
  ),

  // "pesten": to bully — three laugh at one and point; she stands apart, sad.
  'w.pesten': () => (
    <g>
      <Bust who="bram" x={18} y={98} scale={0.38} expr="joy" squint />
      <Bust who="henk" x={46} y={98} scale={0.38} expr="joy" squint />
      <Bust who="amina" x={30} y={124} scale={0.4} expr="joy" squint />
      <Hand pose="point" x={58} y={104} rotate={68} scale={0.55} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <Bust who="jada" x={96} y={122} scale={0.46} expr="disappointed" flip />
      <path d="M86 70Q90 77 90 79A4 4 0 0 1 82 79Q82 77 86 70Z" fill={PAL.ice} />
    </g>
  ),

  // "de vertrouwenspersoon": the confidential adviser — behind a closed door, Henk listens
  // calmly while Amina tells him something.
  'w.vertrouwenspersoon': () => (
    <g>
      {/* Closed door with a "do not disturb" sign */}
      <rect x={40} y={8} width={40} height={86} rx="3" fill={PAL.cardDark} />
      <rect x={44} y={12} width={32} height={82} rx="2" fill={PAL.wood} />
      <rect x={66} y={12} width={10} height={82} fill={PAL.cardDark} opacity=".35" />
      <circle cx={70} cy={56} r={3} fill={PAL.yellow} />
      <circle cx={60} cy={30} r={9} fill={PAL.red} />
      <path d="M55 30H65" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" />
      <Bust who="amina" x={26} y={122} scale={0.5} expr="disappointed" />
      <Bust who="henk" x={94} y={122} scale={0.5} expr="pleased" flip />
      <Bubble x={6} y={12} w={30} h={20} tail="left">
        <Dots cx={21} cy={22} gap={7} r={2.4} color={PAL.skyShade} />
      </Bubble>
    </g>
  ),

  // "de werktijden": the working hours — a clock with a green band from the start (green
  // dot) to the end (red dot).
  'w.werktijden': () => {
    const cx = 60;
    const cy = 62;
    const r = 44;
    const f = r * 0.8;
    const at = (h: number, len: number) => {
      const a = (h / 12) * 2 * Math.PI - Math.PI / 2;
      return [cx + Math.cos(a) * len, cy + Math.sin(a) * len] as const;
    };
    const p = (h: number, len: number) => at(h, len).map((n) => n.toFixed(1)).join(' ');
    const [sx, sy] = at(8, f - 6);
    const [ex, ey] = at(4, f - 6);
    return (
      <g>
        <Shade color={PAL.skyShade} opacity={1} at={[cx + r * 1.25, cy, r * 0.6, r * 1.4]}>
          <circle cx={cx} cy={cy} r={r} fill={PAL.sky} />
        </Shade>
        <circle cx={cx} cy={cy} r={f} fill={PAL.white} />
        <path d={`M${p(8, f - 6)}A${f - 6} ${f - 6} 0 1 1 ${p(4, f - 6)}`} fill="none" stroke={PAL.lime} strokeWidth="11" />
        <path d={`M${cx} ${cy}L${p(10, f * 0.5)}`} stroke={PAL.ink} strokeWidth="5" strokeLinecap="round" />
        <path d={`M${cx} ${cy}L${p(0, f * 0.7)}`} stroke={PAL.ink} strokeWidth="3.6" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="3.6" fill={PAL.red} />
        <circle cx={sx} cy={sy} r={9} fill={PAL.ok} />
        <path d={`M${sx - 2.5} ${sy - 4.5}L${sx + 4.5} ${sy}L${sx - 2.5} ${sy + 4.5}Z`} fill={PAL.white} stroke={PAL.white} strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx={ex} cy={ey} r={9} fill={PAL.red} />
        <rect x={ex - 3.6} y={ey - 3.6} width="7.2" height="7.2" rx="1.4" fill={PAL.white} />
        <Shine d={`M${cx - r * 0.86} ${cy - r * 0.3}A${r * 0.9} ${r * 0.9} 0 0 1 ${cx - r * 0.32} ${cy - r * 0.86}`} width={3.4} opacity={0.6} />
      </g>
    );
  },

  // "de rust": the rest (break) — Jada leans back with her eyes calmly closed and a hot cup of coffee.
  'w.rust': () => (
    <g>
      <g transform="rotate(-7 50 122)">
        <Bust who="jada" x={50} y={122} scale={0.72} emotion="rest" tilt={-6} bold />
      </g>
      {/* Mug */}
      <path d="M96 84A8 8 0 0 1 96 100" fill="none" stroke={PAL.paperShade} strokeWidth="4.5" strokeLinecap="round" />
      <rect x={74} y={78} width={24} height={28} rx="5" fill={PAL.white} />
      <rect x={90} y={78} width={8} height={28} rx="4" fill={PAL.paperShade} />
      <ellipse cx={86} cy={80} rx={11} ry={3} fill={PAL.brown} />
      <path d="M80 72Q76 66 80 60Q84 54 80 48M90 70Q86 64 90 58Q94 52 90 46" fill="none" stroke={PAL.mist} strokeWidth="3.4" strokeLinecap="round" />
      <Hand pose="hold" x={84} y={124} scale={0.8} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
    </g>
  ),

  // "ziek melden": to call in sick — Henk sits up in bed, under the blanket, and phones in.
  'w.ziekmelden': () => (
    <g>
      <Ground cy={110} rx={50} ry={4} />
      {/* Bed: headboard with posts, pillow */}
      <path d="M16 90V44Q60 26 104 44V90Z" fill={PAL.wood} />
      <path d="M84 34Q96 38 104 44V90H84Z" fill={PAL.cardDark} opacity=".45" />
      <rect x={10} y={38} width={10} height={72} rx="4" fill={PAL.cardDark} />
      <rect x={100} y={38} width={10} height={72} rx="4" fill={PAL.cardDark} />
      <rect x={24} y={54} width={72} height={24} rx="11" fill={PAL.paperShade} />
      <rect x={24} y={52} width={72} height={22} rx="11" fill={PAL.white} />
      <Bust who="henk" x={54} y={112} scale={0.52} expr="disappointed" />
      {/* Phone at his ear */}
      <rect x={70} y={46} width={12} height={22} rx="3" fill={PAL.slate} transform="rotate(16 76 57)" />
      <Hand pose="hold" x={79} y={84} rotate={10} scale={0.46} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <Waves x={86} y={46} dir={1} n={2} r0={6} gap={6} color={PAL.sky} />
      {/* Blanket */}
      <path d="M14 90Q14 84 20 84H100Q106 84 106 90V104Q106 108 102 108H18Q14 108 14 104Z" fill={PAL.blueLight} />
      <path d="M14 90Q14 84 20 84H100Q106 84 106 90V93H14Z" fill={PAL.white} />
      <path d="M86 93H106V104Q106 108 102 108H86Z" fill={PAL.blue} opacity=".35" />
      <path d="M26 24Q32 34 32 38A6 6 0 0 1 20 38Q20 34 26 24Z" fill={PAL.ice} />
    </g>
  ),

  // "beter melden": to say you are better — Bram, happy, on the phone; a green tick and the sun.
  'w.betermelden': () => (
    <g>
      <Bust who="bram" x={46} y={122} scale={0.68} expr="joy" />
      <rect x={68} y={50} width={14} height={26} rx="3" fill={PAL.slate} transform="rotate(18 75 63)" />
      <Hand pose="hold" x={80} y={96} rotate={10} scale={0.56} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
      <Waves x={86} y={52} dir={1} n={2} r0={6} gap={6} color={PAL.sky} />
      <Tick x={96} y={98} r={14} />
      <Sun cx={20} cy={22} r={9} />
    </g>
  ),

  // "de bedrijfsarts": the company doctor — a doctor in a white coat with a stethoscope,
  // holding a work file with a hard hat on it.
  'w.bedrijfsarts': () => (
    <g>
      <Bust who="henk" x={44} y={122} scale={0.68} expr="pleased" />
      {/* White coat and stethoscope, in the bust's own coordinates */}
      <g transform="translate(44 122) scale(0.68) translate(-60 -134)">
        <path d="M18 134C18 104 35 92 60 92C85 92 102 104 102 134Z" fill={PAL.white} />
        <path d="M88 100C97 107 102 118 102 134H86C88 120 89 110 88 100Z" fill={PAL.paperShade} />
        <path d="M49 92L60 116L71 92Z" fill={PAL.sky} />
        <path d="M44 94L56 122M76 94L64 122" stroke={PAL.paperShade} strokeWidth="3" strokeLinecap="round" />
        <path d="M42 96Q36 120 50 128M78 96Q84 112 76 118" fill="none" stroke={PAL.slate} strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="76" cy="122" r="6" fill={PAL.steel} />
      </g>
      {/* Clipboard with a hard hat */}
      <g transform="rotate(8 92 80)">
        <rect x={74} y={56} width={36} height={48} rx="4" fill={PAL.cardDark} />
        <rect x={78} y={62} width={28} height={38} rx="2" fill={PAL.white} />
        <rect x={85} y={52} width={14} height={8} rx="2.5" fill={PAL.steel} />
        <HardHat x={92} y={78} s={0.24} />
        <path d="M82 88H102M82 94H96" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </g>
  ),

  // "de ziekte": the illness — a thermometer in the red and germs around it (no faces).
  'w.ziekte': () => (
    <g>
      <rect x={38} y={10} width={20} height={80} rx="10" fill={PAL.paperShade} transform="translate(2 3)" />
      <rect x={38} y={10} width={20} height={80} rx="10" fill={PAL.white} />
      <rect x={44} y={22} width={8} height={70} rx="4" fill={PAL.red} />
      <path d="M58 30H52M58 44H52M58 58H52M58 72H52" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      <circle cx={48} cy={94} r={15} fill={PAL.redShade} />
      <circle cx={48} cy={92} r={15} fill={PAL.red} />
      <Shine d="M40 88A9 9 0 0 1 45 83" width={3} opacity={0.6} />
      <Motion x={48} y={12} dir={-90} spread={100} n={3} len={6} gap={8} color={PAL.red} width={3.4} />
      <Germ cx={88} cy={34} r={12} />
      <Germ cx={90} cy={78} r={9} color={PAL.purpleLight} shade={PAL.purple} />
      <Germ cx={18} cy={56} r={8} />
    </g>
  ),

  // "de dienst": the shift — the hi-vis work vest and the clock: your time in work clothes.
  'w.dienst': () => (
    <g>
      <Vest x={48} y={22} s={1} />
      <Clock cx={90} cy={34} r={22} hour={7} minute={0} />
    </g>
  ),

  // "morgen": tomorrow — a calendar: today has a ring, an arrow jumps to the next day,
  // which is filled in.
  'w.morgen': () => (
    <g>
      <CalPage
        cell={(i, cx, cy, r) =>
          i === 5 ? <circle cx={cx} cy={cy} r={r} fill="none" stroke={PAL.line} strokeWidth="3" /> : i === 6 ? <circle cx={cx} cy={cy} r={r} fill={PAL.sky} /> : null
        }
      />
      <CurveArrow from={[47, 58]} to={[74, 58]} bend={18} color={PAL.orange} width={7} head={12} />
    </g>
  ),

  // "vandaag": today — a calendar with one day filled in, and a finger on it: this day.
  'w.vandaag': () => (
    <g>
      <CalPage cell={(i, cx, cy, r) => (i === 5 ? <circle cx={cx} cy={cy} r={r * 1.1} fill={PAL.orange} /> : null)} />
      <Hand pose="point" x={66} y={124} rotate={-14} scale={0.7} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),

  // "nieuw": new — a shiny hard hat, still with its tag on, and big sparkles.
  'w.nieuw': () => (
    <g>
      <Ground cy={104} rx={36} />
      <HardHat x={56} y={92} s={0.8} />
      {/* Tag on a string */}
      <path d="M86 86Q96 88 98 76" fill="none" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      <g transform="rotate(18 100 66)">
        <path d="M92 58L100 52L108 58V80Q108 82 106 82H94Q92 82 92 80Z" fill={PAL.okShade} transform="translate(0 3)" />
        <path d="M92 58L100 52L108 58V80Q108 82 106 82H94Q92 82 92 80Z" fill={PAL.ok} />
        <circle cx={100} cy={59} r="2.4" fill={PAL.white} />
        <path d="M96 68H104M96 74H102" stroke={PAL.lime} strokeWidth="2.2" strokeLinecap="round" />
      </g>
      <Sparkle x={20} y={34} r={12} />
      <Sparkle x={58} y={18} r={8} />
      <Sparkle x={86} y={28} r={6} color={PAL.yellowShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
