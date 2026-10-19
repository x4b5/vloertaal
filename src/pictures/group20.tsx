import type { JSX } from 'react';
import { Arrow, Bust, Ground, Hand, PAL, SKIN, Shade, Shine } from './kit';

/**
 * Word pictures, group 20 (keyed by word id): the words of "In the shop" (l.checkout) and "Time,
 * money and measures" (l.hours, l.measures) that had only their emoji. Each one sits next to the
 * drawn words of its lesson in a choice (the till, the change, the euro coin, the clocks that
 * fill a quarter, a half or the whole face), so it is drawn to look nothing like them.
 * See docs/tekenstijl.md and ./kit.tsx.
 */

const r1 = (n: number) => Math.round(n * 10) / 10;

/** A point on a circle, `turns` clockwise from 12 o'clock. */
const at = (cx: number, cy: number, r: number, turns: number): [number, number] => {
  const a = turns * 2 * Math.PI - Math.PI / 2;
  return [r1(cx + Math.cos(a) * r), r1(cy + Math.sin(a) * r)];
};

/** A red apple centred on (cx, cy), radius r, with a stalk and a leaf. */
function Apple({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <Shade color={PAL.redShade} opacity={1} at={[cx + r * 1.1, cy + r * 0.2, r * 0.6, r * 1.3]}>
        <path
          d={`M${cx} ${r1(cy - r * 0.62)}C${r1(cx + r * 0.5)} ${r1(cy - r * 1.05)} ${r1(cx + r * 1.08)} ${r1(cy - r * 0.6)} ${r1(cx + r)} ${cy}` +
            `C${r1(cx + r * 0.95)} ${r1(cy + r * 0.75)} ${r1(cx + r * 0.45)} ${r1(cy + r)} ${cx} ${r1(cy + r * 0.86)}` +
            `C${r1(cx - r * 0.45)} ${r1(cy + r)} ${r1(cx - r * 0.95)} ${r1(cy + r * 0.75)} ${r1(cx - r)} ${cy}` +
            `C${r1(cx - r * 1.08)} ${r1(cy - r * 0.6)} ${r1(cx - r * 0.5)} ${r1(cy - r * 1.05)} ${cx} ${r1(cy - r * 0.62)}Z`}
          fill={PAL.red}
        />
      </Shade>
      <path d={`M${cx} ${r1(cy - r * 0.6)}L${r1(cx + r * 0.12)} ${r1(cy - r * 1.05)}`} stroke={PAL.brown} strokeWidth={r1(Math.max(1.6, r * 0.18))} strokeLinecap="round" />
      <path
        d={`M${r1(cx + r * 0.14)} ${r1(cy - r * 0.86)}Q${r1(cx + r * 0.6)} ${r1(cy - r * 1.25)} ${r1(cx + r * 0.95)} ${r1(cy - r * 0.95)}Q${r1(cx + r * 0.5)} ${r1(cy - r * 0.62)} ${r1(cx + r * 0.14)} ${r1(cy - r * 0.86)}Z`}
        fill={PAL.leaf}
      />
      <Shine d={`M${r1(cx - r * 0.62)} ${r1(cy - r * 0.18)}Q${r1(cx - r * 0.56)} ${r1(cy - r * 0.52)} ${r1(cx - r * 0.3)} ${r1(cy - r * 0.62)}`} width={r1(Math.max(1.6, r * 0.2))} opacity={0.55} />
    </g>
  );
}

/** A banknote, centre (cx, cy), w x h, turned `rot` degrees, in a palette colour with a euro sign. */
function Note({ cx, cy, w, h, rot, color, shade, light }: { cx: number; cy: number; w: number; h: number; rot: number; color: string; shade: string; light: string }) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  const s = h * 0.22;
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <rect x={x + 2} y={y + 3} width={w} height={h} rx="4" fill={shade} />
      <rect x={x} y={y} width={w} height={h} rx="4" fill={color} />
      <rect x={x + 5} y={y + 5} width={w - 10} height={h - 10} rx="3" fill="none" stroke={light} strokeWidth="2" opacity=".7" />
      <circle cx={cx} cy={cy} r={h * 0.3} fill={light} opacity=".55" />
      {/* the euro sign, as strokes */}
      <path d={`M${r1(cx + s * 0.75)} ${r1(cy - s * 0.85)}A${r1(s * 1.1)} ${r1(s * 1.1)} 0 1 0 ${r1(cx + s * 0.75)} ${r1(cy + s * 0.85)}`} fill="none" stroke={shade} strokeWidth="3" strokeLinecap="round" />
      <path d={`M${r1(cx - s * 1.35)} ${r1(cy - s * 0.25)}H${r1(cx + s * 0.1)}M${r1(cx - s * 1.35)} ${r1(cy + s * 0.3)}H${r1(cx)}`} stroke={shade} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
}

/** A coin lying a little tilted: centre (cx, cy), radius r, `edge` = its visible thickness. */
function Coin({ cx, cy, r, color, shade, light, edge = 4 }: { cx: number; cy: number; r: number; color: string; shade: string; light: string; edge?: number }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy + edge} rx={r} ry={r * 0.92} fill={shade} />
      <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.92} fill={color} />
      <ellipse cx={cx} cy={cy} rx={r * 0.68} ry={r * 0.62} fill="none" stroke={light} strokeWidth={r1(Math.max(1.6, r * 0.12))} opacity=".8" />
    </g>
  );
}

export default {
  // "de klant": the customer — Amina with a full orange shopping bag in her hand.
  'w.klant': () => (
    <g>
      <Bust who="amina" x={42} y={124} scale={0.66} expr="pleased" bold />
      {/* The shopping bag in front of her, full: a baguette and a leek stick out */}
      <rect x="70" y="40" width="10" height="34" rx="5" fill={PAL.card} transform="rotate(-12 75 57)" />
      <path d="M78 52L80 46" stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M96 34L92 70" stroke={PAL.leaf} strokeWidth="7" strokeLinecap="round" />
      <path d="M96.5 34L95 46" stroke={PAL.green} strokeWidth="7" strokeLinecap="round" />
      <path d="M72 66Q74 50 80 50Q86 50 86 66M88 66Q90 50 96 50Q102 50 102 66" fill="none" stroke={PAL.orangeShade} strokeWidth="3.4" strokeLinecap="round" />
      <Shade color={PAL.orangeShade} opacity={1} at={[112, 88, 9, 30]}>
        <path d="M66 64H106L110 104Q110 108 106 108H66Q62 108 62 104Z" fill={PAL.orange} />
      </Shade>
      <rect x="66" y="64" width="40" height="6" fill={PAL.orangeShade} opacity=".45" />
      <Shine d="M68 76L67 96" width={3} opacity={0.45} />
    </g>
  ),

  // "het bonnetje": the receipt — a long paper strip with a torn zigzag bottom, grey lines with
  // the amounts on the right, and the total under a bold line.
  'w.bonnetje': () => {
    // the torn bottom: 8 teeth from right to left
    const zig = Array.from({ length: 8 }, (_, i) => `L${r1(84 - i * 6 - 3)} 105L${r1(84 - (i + 1) * 6)} 99`).join('');
    const paper = `M36 12H84V99${zig}Z`;
    return (
      <g>
        <path d={paper} fill={PAL.paperShade} transform="translate(4 3)" />
        <path d={paper} fill={PAL.white} />
        <path d="M78 12H84V99L81 105L78 99Z" fill={PAL.paperShade} opacity=".7" />
        {/* the shop's header, then lines: item on the left, amount on the right */}
        <rect x="47" y="19" width="26" height="6" rx="2" fill={PAL.mist} />
        <path d="M43 36H62M68 36H76M43 46H58M68 46H76M43 56H64M68 56H76M43 66H56M68 66H76" stroke={PAL.line} strokeWidth="3.2" strokeLinecap="round" />
        <path d="M42 76H78" stroke={PAL.slate} strokeWidth="3" strokeLinecap="round" strokeDasharray="0.1 6" />
        <path d="M43 87H58M66 87H76" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      </g>
    );
  },

  // "pinnen": to pay by card — a hand holds a blue bank card to a card terminal; waves between them.
  'w.pinnen': () => (
    <g>
      <Ground cx={78} cy={106} rx={24} ry={4} />
      {/* The terminal, standing */}
      <Shade color={PAL.slateDark} opacity={1} at={[100, 74, 8, 40]}>
        <rect x="60" y="34" width="36" height="72" rx="7" fill={PAL.slate} />
      </Shade>
      <rect x="65" y="40" width="26" height="18" rx="3" fill={PAL.ice} />
      <path d="M71 49L76 54L85 45" fill="none" stroke={PAL.ok} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      {[0, 1, 2].map((rI) => [0, 1, 2].map((c) => (
        <rect key={`${rI}${c}`} x={66 + c * 8.5} y={64 + rI * 8} width="6.5" height="5" rx="1.5" fill={rI === 2 && c === 2 ? PAL.leaf : PAL.mist} />
      )))}
      <rect x="66" y="90" width="23.5" height="5" rx="1.5" fill={PAL.steel} />
      {/* Contactless waves */}
      <path d="M52 30Q57 36 52 42M57 25Q65 36 57 47" fill="none" stroke={PAL.sky} strokeWidth="3.4" strokeLinecap="round" />
      {/* The card in the hand */}
      <Hand pose="hold" x={30} y={78} rotate={-8} scale={0.78} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <g transform="rotate(-18 32 44)">
        <rect x="12" y="32" width="40" height="26" rx="4" fill={PAL.blueShade} transform="translate(2 2.5)" />
        <rect x="12" y="32" width="40" height="26" rx="4" fill={PAL.blue} />
        <rect x="18" y="40" width="10" height="8" rx="2" fill={PAL.yellow} />
        <path d="M18 53H42" stroke={PAL.blueLight} strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {/* thumb over the card */}
      <rect x="34" y="44" width="7" height="15" rx="3" fill={SKIN.henk[0]} transform="rotate(-8 30 78)" />
    </g>
  ),

  // "contant": in cash — two banknotes, green and blue, fanned, with two coins in front.
  'w.contant': () => (
    <g>
      <Ground cx={60} cy={104} rx={40} ry={4} />
      <Note cx={54} cy={48} w={74} h={40} rot={-12} color={PAL.green} shade={PAL.greenShade} light={PAL.lime} />
      <Note cx={64} cy={64} w={74} h={40} rot={6} color={PAL.sky} shade={PAL.skyShade} light={PAL.ice} />
      <Coin cx={34} cy={92} r={12} color={PAL.yellow} shade={PAL.yellowShade} light={PAL.yellowShine} />
      <Coin cx={58} cy={95} r={10} color={PAL.mist} shade={PAL.steel} light={PAL.white} />
    </g>
  ),

  // "de minuut": the minute — a stopwatch (button on top) whose hand has gone one small step:
  // a thin slice of the face, nothing like the filled quarter, half or whole of the clocks.
  'w.minuut': () => {
    const cx = 60;
    const cy = 66;
    const r = 38;
    const face = r * 0.8;
    const part = 1 / 12;
    const [ex, ey] = at(cx, cy, face, part);
    const [hx, hy] = at(cx, cy, face * 0.9, part);
    const ticks = Array.from({ length: 12 }, (_, k) => {
      const [x0, y0] = at(cx, cy, face * (k % 3 === 0 ? 0.72 : 0.82), k / 12);
      const [x1, y1] = at(cx, cy, face * 0.94, k / 12);
      return `M${x0} ${y0}L${x1} ${y1}`;
    });
    return (
      <g>
        {/* crown and the side button */}
        <rect x="53" y="14" width="14" height="8" rx="3" fill={PAL.red} />
        <rect x="57" y="20" width="6" height="10" fill={PAL.slateDark} />
        <rect x="83" y="27" width="10" height="7" rx="2.5" fill={PAL.slateDark} transform="rotate(42 88 30)" />
        <Shade color={PAL.slateDark} opacity={1} at={[cx + r * 1.25, cy, r * 0.6, r * 1.4]}>
          <circle cx={cx} cy={cy} r={r} fill={PAL.slate} />
        </Shade>
        <circle cx={cx} cy={cy} r={face} fill={PAL.white} />
        <path d={`M${cx} ${cy}V${r1(cy - face)}A${face} ${face} 0 0 1 ${ex} ${ey}Z`} fill={PAL.yellow} />
        <path d={ticks.join('')} stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
        <path d={`M${cx} ${cy}L${hx} ${hy}`} stroke={PAL.red} strokeWidth="3.6" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="4" fill={PAL.red} />
        <Shine d={`M${r1(cx - r * 0.74)} ${r1(cy - r * 0.3)}A${r * 0.8} ${r * 0.8} 0 0 1 ${r1(cx - r * 0.3)} ${r1(cy - r * 0.74)}`} width={3} opacity={0.45} />
      </g>
    );
  },

  // "duren": to last, to take (time) — an hourglass, the sand running from the top to the bottom.
  'w.duren': () => (
    <g>
      <Ground cx={60} cy={106} rx={30} ry={4} />
      {/* glass: two bulbs, light blue tint with a darker right side */}
      <Shade color={PAL.ice} opacity={0.9} at={[84, 60, 10, 50]}>
        <path d="M38 22H82Q82 46 64 60Q82 74 82 98H38Q38 74 56 60Q38 46 38 22Z" fill="#e3f5ff" />
      </Shade>
      {/* sand: what is left on top, the stream, the heap below */}
      <path d="M47 38H73Q70 48 60 54Q50 48 47 38Z" fill={PAL.card} />
      <path d="M60 54V88" stroke={PAL.card} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M41 97Q44 80 60 78Q76 80 79 97Z" fill={PAL.card} />
      <path d="M66 82Q76 84 79 97H70Z" fill={PAL.cardShade} />
      {/* wooden frame: top and bottom plates, two posts */}
      <rect x="30" y="12" width="60" height="10" rx="3" fill={PAL.wood} />
      <rect x="30" y="98" width="60" height="10" rx="3" fill={PAL.wood} />
      <rect x="30" y="18" width="60" height="4" rx="1.5" fill={PAL.cardDark} />
      <rect x="30" y="104" width="60" height="4" rx="1.5" fill={PAL.cardDark} />
      <rect x="31" y="22" width="5" height="76" rx="2" fill={PAL.wood} />
      <rect x="84" y="22" width="5" height="76" rx="2" fill={PAL.cardDark} />
      <Shine d="M43 28Q44 40 51 47" width={3} opacity={0.8} />
    </g>
  ),

  // "optellen": to add up — two apples plus one apple, an arrow down, and the three together.
  'w.optellen': () => (
    <g>
      <Apple cx={20} cy={30} r={9.5} />
      <Apple cx={41} cy={30} r={9.5} />
      <path d="M64 21V39M55 30H73" stroke={PAL.sky} strokeWidth="6" strokeLinecap="round" />
      <Apple cx={91} cy={30} r={9.5} />
      <Arrow from={[60, 50]} to={[60, 70]} color={PAL.orange} width={7} head={11} />
      <Ground cx={60} cy={104} rx={40} ry={4} />
      <Apple cx={36} cy={90} r={12} />
      <Apple cx={60} cy={90} r={12} />
      <Apple cx={84} cy={90} r={12} />
    </g>
  ),

  // "de cent": the cent — one small copper coin (not the big navy euro).
  'w.cent': () => (
    <g>
      <Ground cx={62} cy={104} rx={40} ry={4} />
      {/* a second cent lying behind it */}
      <ellipse cx="88" cy="94" rx="20" ry="8" fill={PAL.clayShade} />
      <ellipse cx="88" cy="91" rx="20" ry="8" fill={PAL.clay} />
      <ellipse cx="88" cy="91" rx="13" ry="5" fill="none" stroke={PAL.clayLight} strokeWidth="1.8" />
      {/* the cent standing up: copper, with its edge, the ring of little stars and a small globe */}
      <ellipse cx="52" cy="60" rx="36" ry="38" fill={PAL.clayShade} />
      <Shade color={PAL.clayShade} opacity={0.9} at={[86, 56, 10, 38]}>
        <ellipse cx="48" cy="58" rx="36" ry="38" fill={PAL.clay} />
      </Shade>
      {Array.from({ length: 12 }, (_, k) => {
        const [sx, sy] = at(48, 58, 28, k / 12);
        return <circle key={k} cx={sx} cy={sy} r="2.6" fill={PAL.clayLight} />;
      })}
      <circle cx="48" cy="58" r="13" fill={PAL.clayLight} opacity=".75" />
      <path d="M36 55Q42 50 48 53Q54 57 60 53M38 63Q44 60 50 63Q55 66 59 63" fill="none" stroke={PAL.clayShade} strokeWidth="2" strokeLinecap="round" />
      <Shine d="M20 50Q23 32 38 24" width={3.5} opacity={0.55} />
    </g>
  ),

  // "de liter": the litre — a see-through measuring jug, filled with water up to its top line.
  'w.liter': () => (
    <g>
      <Ground cx={56} cy={106} rx={32} ry={4} />
      {/* handle */}
      <path d="M82 36H92Q100 36 100 46V70Q100 80 90 80H84" fill="none" stroke={PAL.mist} strokeWidth="7" strokeLinecap="round" />
      {/* jug */}
      <Shade color={PAL.paperShade} opacity={1} at={[90, 70, 10, 40]}>
        <path d="M26 22H84L80 102Q80 106 76 106H34Q30 106 30 102L28 34Q22 30 20 24Z" fill="#e3f5ff" />
      </Shade>
      {/* water, up to the top line */}
      <path d="M29.5 44H83L80 102Q80 106 76 106H34Q30 106 30 102Z" fill={PAL.blueLight} />
      <path d="M72 44H83L80 102Q80 106 76 106H72Z" fill={PAL.blue} opacity=".55" />
      <path d="M30 44H83" stroke={PAL.sky} strokeWidth="3" strokeLinecap="round" />
      {/* the scale on the side */}
      <path d="M36 44H48M36 59H43M36 74H48M36 89H43" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" />
      <path d="M36 30H48" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M33 50V86" width={3} opacity={0.5} />
    </g>
  ),

  // "de meter": the metre — a yellow tape measure: the round case on the left, the tape pulled
  // out straight to the right (chunky black ticks, a steel hook at its end).
  'w.meter': () => {
    const ticks = Array.from({ length: 10 }, (_, i) => `M${54 + i * 5} 70V${i % 2 === 0 ? 80 : 76}`).join('');
    return (
      <g>
        <Ground cx={60} cy={104} rx={48} ry={4} />
        {/* the tape */}
        <rect x="44" y="72" width="64" height="17" rx="1.5" fill={PAL.yellowShade} />
        <rect x="44" y="68" width="64" height="17" rx="1.5" fill={PAL.yellow} />
        <path d={ticks} stroke={PAL.ink} strokeWidth="2.2" strokeLinecap="round" />
        {/* the hook at its end */}
        <rect x="104" y="64" width="6" height="24" rx="1.5" fill={PAL.steel} />
        {/* the case */}
        <Shade color={PAL.yellowShade} opacity={1} at={[62, 66, 10, 40]}>
          <path d="M12 50Q12 34 28 34H40Q56 34 56 50V88Q56 100 44 100H24Q12 100 12 88Z" fill={PAL.yellow} />
        </Shade>
        <circle cx="34" cy="64" r="13" fill={PAL.slate} />
        <circle cx="34" cy="64" r="5" fill={PAL.steel} />
        <rect x="18" y="88" width="34" height="8" rx="3" fill={PAL.slateDark} />
        <Shine d="M17 56Q17 44 25 39" width={3.5} opacity={0.7} color={PAL.yellowShine} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
