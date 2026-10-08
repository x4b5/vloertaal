import type { JSX, ReactNode } from 'react';
import { CastHead } from '../components/Characters';
import type { CharacterId } from '../components/Characters';
import { Bubble, Bust, Calendar, Clock, CurveArrow, ExclaimMark, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle, Tick, Arrow } from './kit';

/** Word pictures, group 10 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

const r1 = (n: number) => Math.round(n * 10) / 10;
const TINT = '#e3f5ff';
const BURGUNDY = '#9c2b1c';
const BURGUNDY_DARK = '#7a1f13';

/** A sheet of paper: light fill, grey shade on the right, a depth edge underneath. */
function Paper({ x, y, w, h, rot = 0, fill = PAL.paper, children }: {
  x: number; y: number; w: number; h: number; rot?: number; fill?: string; children?: ReactNode;
}) {
  return (
    <g transform={rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined}>
      <rect x={x} y={y + 4} width={w} height={h} rx="5" fill={PAL.mist} />
      <Shade color={PAL.paperShade} opacity={1} at={[x + w + 4, y + h / 2, 12, h]}>
        <rect x={x} y={y} width={w} height={h} rx="5" fill={fill} />
      </Shade>
      {children}
    </g>
  );
}

/** Grey "text" lines on paper: one per width, starting at x, from y0 down with `gap`. */
function Lines({ x, y0, widths, gap = 8, color = PAL.line, width = 3.2 }: {
  x: number; y0: number; widths: number[]; gap?: number; color?: string; width?: number;
}) {
  return <path d={widths.map((w, i) => `M${x} ${r1(y0 + i * gap)}h${w}`).join('')} stroke={color} strokeWidth={width} strokeLinecap="round" />;
}

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

/** A gold euro coin seen from the front, centred on (cx, cy). */
function Coin({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy + r * 0.14} r={r} fill={PAL.yellowShade} />
      <Shade color={PAL.yellowShade} opacity={0.8} at={[cx + r * 1.15, cy, r * 0.5, r * 1.3]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      </Shade>
      <circle cx={cx} cy={cy} r={r * 0.78} fill="none" stroke={PAL.yellowLight} strokeWidth={Math.max(1.4, r * 0.08)} />
      <EuroSign cx={cx} cy={cy} s={r * 0.42} color={PAL.yellowShade} />
      <Shine d={`M${r1(cx - r * 0.62)} ${r1(cy - r * 0.18)}A${r * 0.66} ${r * 0.66} 0 0 1 ${r1(cx - r * 0.18)} ${r1(cy - r * 0.62)}`} color={PAL.yellowShine} width={Math.max(2.4, r * 0.14)} opacity={0.9} />
    </g>
  );
}

/** A sun: yellow disc with orange rays. */
function Sun({ cx, cy, r = 16 }: { cx: number; cy: number; r?: number }) {
  const rays = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4;
    const o = r * 1.32;
    const e = r * 1.72;
    return `M${r1(cx + Math.cos(a) * o)} ${r1(cy + Math.sin(a) * o)}L${r1(cx + Math.cos(a) * e)} ${r1(cy + Math.sin(a) * e)}`;
  });
  return (
    <g>
      <path d={rays.join('')} stroke={PAL.orangeLight} strokeWidth={Math.max(3.6, r * 0.3)} strokeLinecap="round" />
      <Shade color={PAL.orange} opacity={0.5} at={[cx + r * 1.1, cy, r * 0.55, r * 1.3]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      </Shade>
    </g>
  );
}

/** A little house: clay roof, light wall, wooden door. (x, y) = middle of the bottom; `s` = scale (44 wide at 1). */
function House({ x, y, s = 1, wall = PAL.paper, door = PAL.wood }: { x: number; y: number; s?: number; wall?: string; door?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="10" y="-52" width="8" height="16" rx="1.5" fill={PAL.slate} />
      <Shade color={PAL.paperShade} opacity={1} at={[30, -18, 14, 30]}>
        <rect x="-21" y="-32" width="42" height="32" rx="2" fill={wall} />
      </Shade>
      <path d="M-27 -29L0 -54L27 -29Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="4" strokeLinejoin="round" />
      <path d="M0 -54L27 -29H0Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="4" strokeLinejoin="round" />
      <rect x="-6" y="-19" width="12" height="19" rx="2" fill={door} />
      <rect x="-17" y="-24" width="9" height="9" rx="1.5" fill={PAL.sky} />
      <rect x="9" y="-24" width="9" height="9" rx="1.5" fill={PAL.sky} />
    </g>
  );
}

/** A small person icon (head and shoulders, flat). */
function PersonIcon({ x, y, s = 1, color = PAL.navy }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={color}>
      <circle cx="0" cy="-22" r="9" />
      <path d="M-16 0C-16 -8 -9 -12 0 -12C9 -12 16 -8 16 0Z" />
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
      <rect x={len - 20} y="-7.5" width="14" height="3" rx="1.5" fill={PAL.steel} />
    </g>
  );
}

/** A signature squiggle starting at (x, y). */
function Signature({ x, y, color = PAL.navy }: { x: number; y: number; color?: string }) {
  return (
    <path
      d={`M${x} ${y}c3 -10 6 -12 7 -6s-4 9 1 6 5 -9 8 -6 2 7 6 3 4 -5 7 -2`}
      fill="none"
      stroke={color}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

/** A yellow hard hat seen from the front, brim centred on (x, y); 96 wide at s = 1. */
function HardHat({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -70)`}>
      <Shade color={PAL.yellowShade} opacity={0.75} at={[96, 46, 18, 40]}>
        <path d="M22 66C22 34 38 16 60 16C82 16 98 34 98 66Z" fill={PAL.yellow} />
      </Shade>
      <rect x="53" y="16" width="14" height="48" rx="7" fill={PAL.yellowLight} />
      <rect x="12" y="60" width="96" height="13" rx="6.5" fill={PAL.yellowShade} />
    </g>
  );
}

/** A small job card: paper with a job icon on top and two lines. */
function JobCard({ x, y, icon, rot = 0 }: { x: number; y: number; icon: 'hat' | 'box' | 'leaf'; rot?: number }) {
  return (
    <Paper x={x} y={y} w={28} h={32} rot={rot}>
      {icon === 'hat' && <HardHat x={x + 14} y={y + 17} s={0.2} />}
      {icon === 'box' && (
        <g>
          <rect x={x + 6} y={y + 6} width="16" height="12" rx="1.5" fill={PAL.card} />
          <rect x={x + 6} y={y + 6} width="16" height="3.5" rx="1.5" fill={PAL.cardShade} />
          <rect x={x + 12.5} y={y + 6} width="3" height="6" fill="#f6dcae" />
        </g>
      )}
      {icon === 'leaf' && (
        <g>
          <path d={`M${x + 14} ${y + 19}V${y + 10}`} stroke={PAL.greenShade} strokeWidth="2.4" strokeLinecap="round" />
          <ellipse cx={x + 9.5} cy={y + 10} rx="5.5" ry="3.2" fill={PAL.leaf} transform={`rotate(-30 ${x + 9.5} ${y + 10})`} />
          <ellipse cx={x + 18.5} cy={y + 9} rx="5.5" ry="3.2" fill={PAL.green} transform={`rotate(30 ${x + 18.5} ${y + 9})`} />
        </g>
      )}
      <Lines x={x + 6} y0={y + 23} widths={[16, 11]} gap={5} width={2.4} />
    </Paper>
  );
}

/** A CV sheet: photo of a cast member top left, name lines, then two sections. */
function CvSheet({ x, y, w, h, who = 'jada', rot = 0, id }: {
  x: number; y: number; w: number; h: number; who?: CharacterId; rot?: number; id: string;
}) {
  const pw = w * 0.36;
  const ph = pw * 1.18;
  const px = x + w * 0.12;
  const py = y + h * 0.09;
  const s = (pw * 1.05) / 60;
  const lx = px + pw + w * 0.08;
  const lw = x + w - w * 0.12 - lx;
  return (
    <Paper x={x} y={y} w={w} h={h} rot={rot}>
      <clipPath id={id}>
        <rect x={px} y={py} width={pw} height={ph} rx="3" />
      </clipPath>
      <rect x={px} y={py} width={pw} height={ph} rx="3" fill={TINT} />
      <g clipPath={`url(#${id})`}>
        <g transform={`translate(${r1(px + pw / 2 - 60 * s)} ${r1(py + ph - 92 * s)}) scale(${r1(s * 100) / 100})`}>
          <path d="M18 134C18 108 36 96 60 96C84 96 102 108 102 134Z" fill={who === 'henk' ? PAL.navy : who === 'amina' ? PAL.green : who === 'bram' ? PAL.orange : PAL.sky} />
          <CastHead who={who} expr="pleased" />
        </g>
      </g>
      <Lines x={lx} y0={py + ph * 0.18} widths={[lw]} color={PAL.navy} width={Math.max(2.6, w * 0.06)} />
      <Lines x={lx} y0={py + ph * 0.5} widths={[lw * 0.85, lw * 0.6]} gap={ph * 0.26} width={Math.max(2.2, w * 0.045)} />
      <rect x={px} y={py + ph + h * 0.08} width={w * 0.26} height={Math.max(3, h * 0.045)} rx="1.5" fill={PAL.sky} />
      <Lines x={px} y0={py + ph + h * 0.2} widths={[w * 0.74, w * 0.6, w * 0.68]} gap={h * 0.1} width={Math.max(2.2, w * 0.045)} />
    </Paper>
  );
}

/** A table seen from the front: wooden top with a light edge, two legs. */
function Table({ x0, x1, y }: { x0: number; x1: number; y: number }) {
  return (
    <g>
      <rect x={x0 + 6} y={y + 6} width="7" height={110 - y - 6} rx="2" fill={PAL.cardDark} />
      <rect x={x1 - 13} y={y + 6} width="7" height={110 - y - 6} rx="2" fill={PAL.cardDark} />
      <rect x={x0} y={y} width={x1 - x0} height="10" rx="3" fill={PAL.wood} />
      <rect x={x0} y={y} width={x1 - x0} height="3.5" rx="1.75" fill={PAL.card} />
    </g>
  );
}

/** A closed passport booklet (burgundy, gold crest and the chip symbol), centred on (cx, cy). */
function Passport({ cx, cy, s = 1, rot = 0 }: { cx: number; cy: number; s?: number; rot?: number }) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rot}) scale(${s})`}>
      <rect x="-28" y="-38" width="58" height="80" rx="6" fill={PAL.paperShade} />
      <rect x="-30" y="-42" width="58" height="80" rx="6" fill={BURGUNDY_DARK} transform="translate(0 4)" />
      <Shade color={BURGUNDY_DARK} opacity={0.8} at={[36, 0, 14, 60]}>
        <rect x="-30" y="-42" width="58" height="80" rx="6" fill={BURGUNDY} />
      </Shade>
      <rect x="-30" y="-42" width="7" height="80" rx="3" fill={BURGUNDY_DARK} opacity=".6" />
      <path d="M-11 -30H10" stroke={PAL.yellow} strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="-0.5" cy="-6" r="13" fill="none" stroke={PAL.yellow} strokeWidth="3.2" />
      <path d="M-7 -12H6V-4Q6 4 -0.5 7Q-7 4 -7 -4Z" fill={PAL.yellow} />
      <rect x="-10" y="18" width="19" height="12" rx="3" fill="none" stroke={PAL.yellow} strokeWidth="2.6" />
      <circle cx="-0.5" cy="24" r="3" fill={PAL.yellow} />
      <Shine d="M-24 -20V-34" width={3} opacity={0.35} />
    </g>
  );
}

/** A ring with two brass keys hanging from it; ring centre (x, y). */
function Keys({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  const key = (rot: number) => (
    <g transform={`rotate(${rot})`}>
      <path d="M0 8V30M0 22H5M0 27H4" stroke={PAL.yellowShade} strokeWidth="4.2" strokeLinecap="round" />
      <circle cx="0" cy="7" r="7" fill={PAL.yellow} />
      <circle cx="0" cy="5" r="2.4" fill={PAL.yellowShade} />
    </g>
  );
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="0" cy="0" r="7" fill="none" stroke={PAL.steel} strokeWidth="2.8" />
      <g transform="translate(0 6)">
        {key(28)}
        {key(-18)}
      </g>
    </g>
  );
}

/** A banknote, top-left (x, y), with a euro sign in a round window. */
function Note({ x, y, w = 64, h = 36, color, shade, rot = 0 }: { x: number; y: number; w?: number; h?: number; color: string; shade: string; rot?: number }) {
  return (
    <g transform={rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined}>
      <rect x={x} y={y + 3.5} width={w} height={h} rx="5" fill={shade} />
      <rect x={x} y={y} width={w} height={h} rx="5" fill={color} />
      <rect x={x + 4} y={y + 4} width={w - 8} height={h - 8} rx="3" fill="none" stroke={PAL.white} strokeWidth="1.8" opacity=".55" />
      <circle cx={x + w * 0.62} cy={y + h / 2} r={h * 0.3} fill={PAL.white} opacity=".9" />
      <EuroSign cx={x + w * 0.62} cy={y + h / 2} s={h * 0.15} color={shade} />
      <path d={`M${x + 9} ${y + h * 0.36}h${w * 0.24}M${x + 9} ${y + h * 0.62}h${w * 0.16}`} stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" opacity=".7" />
    </g>
  );
}

/** A mobile phone (screen tint), top-left (x, y). */
function Phone({ x, y, w = 22, h = 40, screen = TINT, children }: { x: number; y: number; w?: number; h?: number; screen?: string; children?: ReactNode }) {
  return (
    <g>
      <rect x={x + 2} y={y + 3} width={w} height={h} rx="5" fill={PAL.slateDark} />
      <rect x={x} y={y} width={w} height={h} rx="5" fill={PAL.slate} />
      <rect x={x + 2.8} y={y + 5} width={w - 5.6} height={h - 10} rx="2.5" fill={screen} />
      {children}
    </g>
  );
}

const pt = (cx: number, cy: number, r: number, t: number): [number, number] => {
  const a = (t * Math.PI) / 180;
  return [r1(cx + Math.sin(a) * r), r1(cy - Math.cos(a) * r)];
};

export default {
  // "het sollicitatiegesprek": the job interview — Amina and Henk face each other across a
  // table; Henk has her CV in front of him.
  'w.sollicitatiegesprek': () => (
    <g>
      <Bust who="amina" x={30} y={98} scale={0.52} expr="pleased" />
      <Bust who="henk" x={90} y={98} scale={0.52} expr="neutral" flip />
      <CvSheet x={68} y={62} w={26} h={30} who="amina" rot={-8} id="g10-gesprek-cv" />
      <Table x0={6} x1={114} y={86} />
    </g>
  ),

  // "het cv": a CV sheet — a photo of the applicant, the name and two short sections.
  'w.cv': () => (
    <g>
      <CvSheet x={24} y={10} w={70} h={94} who="jada" id="g10-cv-photo" />
    </g>
  ),

  // "vertellen": to tell — Bram tells his story (a bubble full of lines), Jada listens.
  'w.vertellen': () => (
    <g>
      <Bust who="bram" x={34} y={122} scale={0.62} expr="pleased" />
      <Bust who="jada" x={96} y={122} scale={0.4} expr="neutral" flip />
      <Bubble x={50} y={10} w={60} h={42} tail="left">
        <Lines x={60} y0={22} widths={[40, 32, 22]} gap={9} color={PAL.skyShade} width={4} />
      </Bubble>
    </g>
  ),

  // "de functie": the job, the position — a clip-on job badge with a hard hat for the job.
  'w.functie': () => (
    <g>
      <rect x="52" y="8" width="16" height="16" rx="4" fill={PAL.steel} />
      <rect x="56" y="12" width="8" height="6" rx="2" fill={PAL.slate} />
      <rect x="24" y="22" width="72" height="84" rx="10" fill={PAL.mist} transform="translate(0 4)" />
      <Shade color={PAL.paperShade} opacity={1} at={[104, 64, 14, 50]}>
        <rect x="24" y="22" width="72" height="84" rx="10" fill={PAL.paper} />
      </Shade>
      <path d="M24 32A10 10 0 0 1 34 22H86A10 10 0 0 1 96 32V36H24Z" fill={PAL.sky} />
      <rect x="49" y="18" width="22" height="10" rx="3" fill={PAL.steel} />
      <circle cx="60" cy="62" r="20" fill={TINT} />
      <HardHat x={60} y={68} s={0.4} />
      <path d="M38 90H82" stroke={PAL.navy} strokeWidth="5" strokeLinecap="round" />
      <path d="M46 99H74" stroke={PAL.line} strokeWidth="3.4" strokeLinecap="round" />
    </g>
  ),

  // "de baan": the job — Jada has work: her box on the table in front of her, and a green tick.
  'w.baan': () => (
    <g>
      <Bust who="jada" x={44} y={120} scale={0.64} expr="joy" />
      <Ground cx={86} cy={106} rx={22} ry={4} />
      <g>
        <rect x="68" y="74" width="34" height="30" rx="2" fill={PAL.card} />
        <path d="M68 74L76 66H110L102 74Z" fill="#f0c48a" />
        <path d="M102 74L110 66V96L102 104Z" fill={PAL.cardShade} />
        <rect x="81" y="74" width="8" height="10" fill="#f6dcae" />
      </g>
      <Tick x={92} y={30} r={16} />
    </g>
  ),

  // "de vacature": the job opening — a "help wanted" poster pinned up: a person with a plus.
  'w.vacature': () => (
    <g transform="rotate(-3 60 60)">
      <Paper x={20} y={14} w={80} h={90}>
        <path d="M20 19A5 5 0 0 1 25 14H95A5 5 0 0 1 100 19V30H20Z" fill={PAL.yellow} />
        <PersonIcon x={54} y={74} s={1.25} />
        <circle cx="78" cy="62" r="13" fill={PAL.okShade} transform="translate(0 2)" />
        <circle cx="78" cy="62" r="13" fill={PAL.ok} />
        <path d="M78 55V69M71 62H85" stroke={PAL.white} strokeWidth="4.4" strokeLinecap="round" />
        <Lines x={32} y0={86} widths={[56, 40]} gap={9} />
      </Paper>
      <circle cx="30" cy="22" r="4.5" fill={PAL.red} />
      <circle cx="90" cy="22" r="4.5" fill={PAL.red} />
    </g>
  ),

  // "het uitzendbureau": the temp agency — an agent at her desk, job cards on the wall behind.
  'w.uitzendbureau': () => (
    <g>
      <JobCard x={14} y={10} icon="hat" rot={-4} />
      <JobCard x={46} y={8} icon="box" />
      <JobCard x={78} y={10} icon="leaf" rot={4} />
      <Bust who="amina" x={42} y={98} scale={0.42} expr="pleased" />
      <rect x="70" y="58" width="34" height="24" rx="3" fill={PAL.slate} />
      <rect x="73" y="61" width="28" height="18" rx="2" fill={TINT} />
      <rect x="84" y="81" width="6" height="6" fill={PAL.slateDark} />
      <Table x0={6} x1={114} y={86} />
    </g>
  ),

  // "solliciteren": to apply — Amina's hand hands over her CV, Henk's hand reaches for it.
  'w.solliciteren': () => (
    <g>
      <CvSheet x={30} y={22} w={42} h={54} who="amina" rot={-6} id="g10-sol-cv" />
      <Hand pose="hold" x={36} y={110} rotate={18} scale={0.72} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <Hand pose="open" x={98} y={112} rotate={-28} scale={0.7} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} mirror />
      <CurveArrow from={[66, 12]} to={[104, 30]} bend={10} color={PAL.sky} width={6} head={11} />
    </g>
  ),

  // "het contract": a contract — lines of text, a signature on the line, and the pen.
  'w.contract': () => (
    <g>
      <Paper x={22} y={10} w={66} h={94} rot={-3}>
        <path d="M32 24H62" stroke={PAL.navy} strokeWidth="5" strokeLinecap="round" />
        <Lines x={32} y0={36} widths={[46, 42, 46, 36, 44]} gap={8} />
        <Signature x={36} y={88} />
        <path d="M32 92H76" stroke={PAL.steel} strokeWidth="2.4" strokeLinecap="round" />
      </Paper>
      <Pen x={76} y={86} angle={-58} len={44} />
    </g>
  ),

  // "de werkgever": the employer — Henk in front of his company building.
  'w.werkgever': () => (
    <g>
      <Ground cx={68} cy={106} rx={46} ry={4} />
      <Shade color={PAL.steel} opacity={0.5} at={[116, 60, 12, 60]}>
        <rect x="48" y="24" width="62" height="82" rx="3" fill={PAL.mist} />
      </Shade>
      <rect x="48" y="18" width="62" height="10" rx="3" fill={PAL.orange} />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={56 + c * 17} y={36 + r * 18} width="11" height="11" rx="2" fill={PAL.sky} />),
      )}
      <rect x="84" y="88" width="16" height="18" rx="2" fill={PAL.slate} />
      <Bust who="henk" x={38} y={120} scale={0.64} expr="pleased" />
    </g>
  ),

  // "de uren": the hours — a time sheet on a clipboard with bars for each day, and a clock.
  'w.uren': () => (
    <g>
      <rect x="18" y="16" width="66" height="90" rx="7" fill={PAL.cardDark} transform="translate(0 3)" />
      <rect x="18" y="16" width="66" height="90" rx="7" fill={PAL.wood} />
      <rect x="25" y="26" width="52" height="74" rx="3" fill={PAL.paper} />
      <rect x="38" y="10" width="26" height="12" rx="4" fill={PAL.slate} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="30" y={34 + i * 12} width="8" height="7" rx="2" fill={PAL.mist} />
          <rect x="42" y={34 + i * 12} width={[28, 28, 20, 28, 14][i]} height="7" rx="2" fill={PAL.sky} />
        </g>
      ))}
      <Clock cx={88} cy={82} r={21} hour={4} minute={0} />
    </g>
  ),

  // "de oproepkracht": the on-call worker — Bram gets a call: come to work (the day on the calendar).
  'w.oproepkracht': () => (
    <g>
      <Bust who="bram" x={42} y={122} scale={0.66} expr="pleased" />
      <g transform="rotate(14 70 70)">
        <Phone x={60} y={50} w={16} h={30} />
      </g>
      <Hand pose="hold" x={72} y={110} rotate={-8} scale={0.52} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
      <Motion x={74} y={50} dir={-45} spread={70} n={3} len={7} gap={8} color={PAL.sky} width={3.4} />
      <Calendar x={80} y={58} w={30} h={34} mark={5} />
    </g>
  ),

  // "de gemeente": the town hall — a stately building with a clock tower and the Dutch flag.
  'w.gemeente': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      <path d="M60 22V6" stroke={PAL.steel} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="60" y="6" width="20" height="4.5" fill={PAL.red} />
      <rect x="60" y="10.5" width="20" height="4.5" fill={PAL.white} />
      <rect x="60" y="15" width="20" height="4.5" fill={PAL.blue} />
      <path d="M46 36L60 22L74 36Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="3" strokeLinejoin="round" />
      <Shade color={PAL.cardShade} opacity={1} at={[76, 50, 6, 20]}>
        <rect x="48" y="34" width="24" height="30" fill={PAL.card} />
      </Shade>
      <circle cx="60" cy="46" r="7" fill={PAL.white} />
      <path d="M60 46V41.5M60 46H63.5" stroke={PAL.ink} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 58H108L102 50H18Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="3" strokeLinejoin="round" />
      <Shade color={PAL.cardShade} opacity={1} at={[116, 80, 16, 30]}>
        <rect x="16" y="56" width="88" height="44" fill={PAL.card} />
      </Shade>
      {[22, 36, 76, 90].map((x) => (
        <g key={x}>
          <rect x={x} y="64" width="9" height="12" rx="4.5" fill={PAL.sky} />
          <rect x={x} y="82" width="9" height="12" rx="4.5" fill={PAL.sky} />
        </g>
      ))}
      <path d="M52 100V80A8 8 0 0 1 68 80V100Z" fill={PAL.brown} />
      <rect x="10" y="98" width="100" height="7" rx="2" fill={PAL.mist} />
      <rect x="44" y="100" width="32" height="6" rx="2" fill={PAL.steel} />
    </g>
  ),

  // "inschrijven": to register — filling in a form at the counter, pen in hand.
  'w.inschrijven': () => (
    <g>
      <Paper x={22} y={10} w={62} h={74}>
        <path d="M30 20H60" stroke={PAL.navy} strokeWidth="4.4" strokeLinecap="round" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="30" y={30 + i * 13} width="8" height="8" rx="2" fill="none" stroke={PAL.sky} strokeWidth="2.2" />
            <path d={`M43 ${34 + i * 13}H${[74, 68, 74, 62][i]}`} stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
        <path d="M31 33.5L33.5 36L38 30.5" fill="none" stroke={PAL.ok} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 46.5L33.5 49L38 43.5" fill="none" stroke={PAL.ok} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </Paper>
      <rect x="4" y="86" width="112" height="24" rx="3" fill={PAL.wood} />
      <rect x="4" y="80" width="112" height="9" rx="3" fill={PAL.card} />
      <rect x="4" y="80" width="112" height="3" rx="1.5" fill="#f0c48a" />
      <Pen x={62} y={58} angle={58} len={40} />
      <Hand pose="hold" x={86} y={112} rotate={-28} scale={0.62} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
    </g>
  ),

  // "het adres": the address — one house, with the location pin on it and a number plate.
  'w.adres': () => (
    <g>
      <Ground cx={60} cy={106} rx={40} ry={4.5} />
      <Shade color={PAL.paperShade} opacity={1} at={[100, 84, 14, 30]}>
        <rect x="28" y="62" width="64" height="44" rx="2" fill={PAL.paper} />
      </Shade>
      <path d="M20 65L60 36L100 65Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="5" strokeLinejoin="round" />
      <path d="M60 36L100 65H60Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="5" strokeLinejoin="round" />
      <rect x="36" y="72" width="14" height="14" rx="2" fill={PAL.sky} />
      <rect x="54" y="80" width="14" height="26" rx="2" fill={PAL.wood} />
      <rect x="73" y="74" width="14" height="10" rx="2" fill={PAL.blue} />
      <rect x="75.5" y="76.5" width="9" height="5" rx="1" fill="none" stroke={PAL.white} strokeWidth="1.4" />
      <g>
        <path d="M60 52C52 42 45 34 45 26A15 15 0 0 1 75 26C75 34 68 42 60 52Z" fill={PAL.redShade} transform="translate(1.5 2)" />
        <path d="M60 52C52 42 45 34 45 26A15 15 0 0 1 75 26C75 34 68 42 60 52Z" fill={PAL.red} />
        <circle cx="60" cy="26" r="6" fill={PAL.white} />
        <Shine d="M50 22A10 10 0 0 1 55 15" width={3} opacity={0.5} />
      </g>
    </g>
  ),

  // "de kamer": the (rented) room — a bed, a window and a small table, in one room.
  'w.kamer': () => (
    <g>
      <rect x="10" y="12" width="100" height="74" rx="6" fill={TINT} />
      <path d="M10 86H110V100A6 6 0 0 1 104 106H16A6 6 0 0 1 10 100Z" fill={PAL.card} />
      <path d="M10 86H110" stroke={PAL.cardShade} strokeWidth="2.4" />
      <rect x="64" y="22" width="34" height="30" rx="3" fill={PAL.white} />
      <rect x="67" y="25" width="28" height="24" rx="2" fill={PAL.ice} />
      <path d="M81 25V49M67 37H95" stroke={PAL.white} strokeWidth="3" />
      {/* Bed */}
      <rect x="16" y="54" width="7" height="44" rx="3" fill={PAL.wood} />
      <rect x="20" y="70" width="44" height="18" rx="4" fill={PAL.paper} />
      <rect x="22" y="64" width="16" height="10" rx="4" fill={PAL.white} />
      <rect x="36" y="68" width="30" height="20" rx="4" fill={PAL.blue} />
      <rect x="36" y="68" width="30" height="5" rx="2.5" fill={PAL.blueLight} />
      <rect x="20" y="86" width="48" height="6" rx="2" fill={PAL.wood} />
      <rect x="61" y="80" width="6" height="18" rx="2" fill={PAL.wood} />
      {/* Table with a mug */}
      <rect x="78" y="76" width="26" height="5" rx="2" fill={PAL.wood} />
      <path d="M82 81V98M100 81V98" stroke={PAL.cardDark} strokeWidth="3.6" strokeLinecap="round" />
      <rect x="86" y="67" width="9" height="9" rx="2" fill={PAL.red} />
    </g>
  ),

  // "het huurcontract": the rental contract — a contract with a house on top, signed.
  'w.huurcontract': () => (
    <g>
      <Paper x={24} y={10} w={68} h={94} rot={-3}>
        <circle cx="58" cy="32" r="16" fill={TINT} />
        <House x={58} y={42} s={0.48} />
        <Lines x={34} y0={58} widths={[48, 42, 46]} gap={8} />
        <Signature x={38} y={88} />
        <path d="M34 92H82" stroke={PAL.steel} strokeWidth="2.4" strokeLinecap="round" />
      </Paper>
    </g>
  ),

  // "de huisbaas": the landlord — Henk holds up the house keys, in front of the house.
  'w.huisbaas': () => (
    <g>
      <Ground cx={78} cy={106} rx={30} ry={4} />
      <House x={82} y={106} s={1.02} />
      <Bust who="henk" x={40} y={122} scale={0.62} expr="pleased" />
      <Keys x={70} y={50} s={0.9} />
      <Hand pose="hold" x={70} y={92} scale={0.55} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
    </g>
  ),

  // "het paspoort": the passport — the burgundy booklet with the crest and the chip symbol.
  'w.paspoort': () => (
    <g>
      <Passport cx={60} cy={60} s={1.1} rot={-6} />
    </g>
  ),

  // "afpakken": to take away — a hand snatches the passport from an open hand. Warning sign.
  'w.afpakken': () => (
    <g>
      <Hand pose="open" x={30} y={118} rotate={32} scale={0.72} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      <Passport cx={78} cy={52} s={0.48} rot={12} />
      <Hand pose="hold" x={116} y={58} rotate={-80} scale={0.72} skin={SKIN.henk} sleeve={[PAL.slate, PAL.slateDark]} />
      <Motion x={58} y={52} dir={180} spread={50} n={3} len={8} gap={4} color={PAL.line} width={3.4} />
      <Arrow from={[56, 18]} to={[100, 18]} color={PAL.red} width={6} head={10} />
      <circle cx="22" cy="28" r="13" fill={PAL.redShade} transform="translate(0 1.5)" />
      <circle cx="22" cy="28" r="13" fill={PAL.red} />
      <ExclaimMark x={22} y={28} size={18} color={PAL.white} />
    </g>
  ),

  // "de loonstrook": the payslip — a slip with the euro sign, the amounts and the total in green.
  'w.loonstrook': () => (
    <g>
      <Paper x={28} y={10} w={64} h={94}>
        <circle cx="44" cy="27" r="9" fill={PAL.yellow} />
        <EuroSign cx={44} cy={27} s={4.2} color={PAL.yellowShade} />
        <Lines x={60} y0={23} widths={[24, 16]} gap={8} color={PAL.navy} width={3.4} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <path d={`M36 ${46 + i * 10}H${[54, 50, 56, 48][i]}`} stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
            <path d={`M${[70, 74, 68, 72][i]} ${46 + i * 10}H84`} stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
        <rect x="34" y="84" width="52" height="12" rx="4" fill={PAL.lime} />
        <path d="M40 90H52M68 90H82" stroke={PAL.okShade} strokeWidth="3.4" strokeLinecap="round" />
      </Paper>
    </g>
  ),

  // "het uurloon": pay per hour — a clock with a euro coin: so much money for each hour.
  'w.uurloon': () => (
    <g>
      <Clock cx={50} cy={50} r={36} hour={1} minute={0} />
      <Coin cx={84} cy={82} r={24} />
    </g>
  ),

  // "het vakantiegeld": holiday pay — money (notes and a coin) with the holiday sun.
  'w.vakantiegeld': () => (
    <g>
      <Sun cx={92} cy={26} r={12} />
      <Note x={10} y={42} w={70} h={40} color={PAL.sky} shade={PAL.skyShade} rot={-14} />
      <Note x={18} y={56} w={70} h={40} color={PAL.orange} shade={PAL.orangeShade} rot={-4} />
      <Coin cx={92} cy={88} r={16} />
    </g>
  ),

  // "de overuren": overtime hours — the clock runs past the end of the shift (the orange
  // wedge), with a plus badge: extra hours.
  'w.overuren': () => {
    const cx = 54;
    const cy = 62;
    const r = 40;
    const f = r * 0.8;
    const [ax, ay] = pt(cx, cy, f, 150);
    const [bx, by] = pt(cx, cy, f, 210);
    const [hx, hy] = pt(cx, cy, r * 0.42, 210);
    const [mx, my] = pt(cx, cy, r * 0.6, 0);
    return (
      <g>
        <Shade color={PAL.navyShade} opacity={1} at={[cx + r * 1.25, cy, r * 0.6, r * 1.4]}>
          <circle cx={cx} cy={cy} r={r} fill={PAL.navy} />
        </Shade>
        <Shade color={PAL.paperShade} opacity={1} at={[cx + r * 1.1, cy, r * 0.55, r * 1.2]}>
          <circle cx={cx} cy={cy} r={f} fill={PAL.white} />
        </Shade>
        <path d={`M${cx} ${cy}L${ax} ${ay}A${f} ${f} 0 0 1 ${bx} ${by}Z`} fill={PAL.orangeLight} />
        <path d={`M${cx} ${cy - f * 0.78}V${cy - f * 0.9}M${cx + f * 0.78} ${cy}H${cx + f * 0.9}M${cx - f * 0.78} ${cy}H${cx - f * 0.9}`} stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
        <path d={`M${cx} ${cy}L${hx} ${hy}`} stroke={PAL.ink} strokeWidth="5" strokeLinecap="round" />
        <path d={`M${cx} ${cy}L${mx} ${my}`} stroke={PAL.ink} strokeWidth="3.4" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="3.6" fill={PAL.red} />
        <circle cx="96" cy="26" r="15" fill={PAL.orangeShade} transform="translate(0 2)" />
        <circle cx="96" cy="26" r="15" fill={PAL.orange} />
        <path d="M96 18V34M88 26H104" stroke={PAL.white} strokeWidth="5" strokeLinecap="round" />
      </g>
    );
  },

  // "de bankrekening": the bank account — the bank card, with euro coins.
  'w.bankrekening': () => (
    <g>
      <g transform="rotate(-10 56 54)">
        <rect x="12" y="30" width="86" height="54" rx="8" fill={PAL.navyShade} transform="translate(0 4)" />
        <Shade color={PAL.navyShade} opacity={1} at={[106, 56, 16, 40]}>
          <rect x="12" y="30" width="86" height="54" rx="8" fill={PAL.navy} />
        </Shade>
        <rect x="12" y="40" width="86" height="9" fill={PAL.blue} />
        <rect x="22" y="55" width="16" height="12" rx="2.5" fill={PAL.yellow} />
        <path d="M22 61H38M30 55V67" stroke={PAL.yellowShade} strokeWidth="1.4" />
        <path d="M22 75h12M38 75h12M54 75h12" stroke={PAL.blueLight} strokeWidth="3.2" strokeLinecap="round" />
      </g>
      <Coin cx={88} cy={94} r={14} />
      <Coin cx={94} cy={80} r={14} />
    </g>
  ),

  // "de werkzoekende": the job seeker — Amina looks at the job ads through a magnifier.
  'w.werkzoekende': () => (
    <g>
      <rect x="58" y="10" width="54" height="62" rx="5" fill={PAL.cardShade} transform="translate(0 3)" />
      <rect x="58" y="10" width="54" height="62" rx="5" fill={PAL.card} />
      <JobCard x={62} y={16} icon="box" rot={-3} />
      <JobCard x={84} y={34} icon="hat" rot={4} />
      <Bust who="amina" x={34} y={122} scale={0.6} expr="thinking" />
      <path d="M66 86L76 72" stroke={PAL.slate} strokeWidth="7" strokeLinecap="round" />
      <circle cx="84" cy="58" r="16" fill={TINT} opacity=".55" />
      <circle cx="84" cy="58" r="16" fill="none" stroke={PAL.slate} strokeWidth="5" />
      <Shine d="M75 52A10 10 0 0 1 80 47" width={3} opacity={0.8} />
      <Hand pose="hold" x={66} y={112} rotate={20} scale={0.5} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),

  // "de training": the training — Henk teaches at the whiteboard; two co-workers listen.
  'w.training': () => (
    <g>
      <rect x="40" y="10" width="70" height="50" rx="4" fill={PAL.steel} />
      <rect x="43" y="13" width="64" height="44" rx="2" fill={PAL.white} />
      <rect x="54" y="30" width="18" height="16" rx="1.5" fill={PAL.card} />
      <Arrow from={[64, 26]} to={[64, 16]} color={PAL.sky} width={4} head={7} />
      <Tick x={92} y={35} r={9} />
      <Bust who="henk" x={22} y={88} scale={0.42} expr="pleased" />
      <path d="M32 66L52 42" stroke={PAL.cardDark} strokeWidth="3" strokeLinecap="round" />
      <Bust who="amina" x={62} y={122} scale={0.36} expr="neutral" />
      <Bust who="bram" x={96} y={122} scale={0.36} expr="neutral" flip />
    </g>
  ),
} as Record<string, () => JSX.Element>;

void Sparkle;
