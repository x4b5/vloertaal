import type { JSX, ReactNode } from 'react';
import { Arrow, Ground, Hand, PAL, SKIN, Shade, Shine } from './kit';

/**
 * Word pictures, group 57 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The lesson "Getting ready to paint" (u.afbouw): four things and two actions of the painter
 * before the paint goes on.
 *
 *  - the putty knife (het plamuurmes): lying on the floor, seen at a slant: a wide, thin steel
 *    blade with a white dab of filler on it, a short ferrule and a thick orange handle.
 *  - the sandpaper (het schuurpapier): a red-brown roll standing on its end (its top shows the
 *    rolled-up layers) with a strip unrolled in front of it, both covered in fine grit.
 *  - the paint scraper (de verfkrabber): lying on the floor at a slant: a steel triangle with a hole
 *    on a thin shaft and a blue handle, flakes of old green paint at its edge.
 *  - the hand brush (het stoffertje): a wooden brush with yellow bristles, tilted as it sweeps, and
 *    the grey heap of dust it sweeps together.
 *  - to sand (schuren): a hand on a sanding block with thick red-brown sandpaper under it, on a
 *    grey board, dust at both ends, under a double arrow (back and forth).
 *  - to mask off (afplakken): a wall next to a wooden window frame; a strip of yellow tape runs
 *    along the frame up to its roll (an orange arrow: it goes on upwards), and the blue paint on the
 *    wall runs onto the tape, so the frame stays clean (redrawn by hand on 20 November 2026).
 *
 * The six stand side by side in a picture choice, so each has its own main shape and colour:
 * a wide steel blade on an orange handle, a red-brown roll, a steel triangle on a blue handle,
 * a tilted wooden brush with yellow bristles, a hand on a block under an arrow, and a wall with blue
 * paint, a yellow tape strip and a wooden frame. Only the brush is wooden.
 */

/** Sandpaper (schuurpapier, schuren): grit face, its shade, the grains and the pale paper back. */
const GRIT = { base: PAL.clay, shade: PAL.clayShade, grain: '#a8471f', fleck: PAL.clayLight, back: '#f6dcae' } as const;

/**
 * Fine grit: a fixed, uneven scatter of small grains in the box (x, y, w, h), dark and light,
 * with `keep` to leave out grains outside a shape. Not a grid, so it reads as a rough surface.
 */
function Grit({ x, y, w, h, step = 5.2, keep }: { x: number; y: number; w: number; h: number; step?: number; keep?: (px: number, py: number) => boolean }) {
  const dark: string[] = [];
  const light: string[] = [];
  let k = 0;
  for (let gy = y + step / 2; gy < y + h; gy += step * 0.86) {
    for (let gx = x + step / 2; gx < x + w; gx += step) {
      k += 1;
      const px = Math.round((gx + (((k * 7919) % 17) / 17 - 0.5) * step * 0.9) * 10) / 10;
      const py = Math.round((gy + (((k * 104729) % 13) / 13 - 0.5) * step * 0.7) * 10) / 10;
      if (keep && !keep(px, py)) continue;
      (k % 3 === 0 ? light : dark).push(`M${px} ${py}h0.01`);
    }
  }
  return (
    <g>
      <path d={dark.join('')} stroke={GRIT.grain} strokeWidth="2.2" strokeLinecap="round" />
      <path d={light.join('')} stroke={GRIT.fleck} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/**
 * Lays a tool flat on the floor, seen at a slant: children are drawn in plan (x along the tool,
 * z across it), turned by `turn` degrees and squashed in height, from the origin (ox, oy).
 * `scale` sizes them; `lift` draws them that many units higher (a thick part, or the depth edge underneath).
 */
function Flat({ ox, oy, turn, scale = 1, lift = 0, children }: { ox: number; oy: number; turn: number; scale?: number; lift?: number; children: ReactNode }) {
  const a = (turn * Math.PI) / 180;
  const k = 0.62 * scale;
  const m = [scale * Math.cos(a), k * Math.sin(a), -scale * Math.sin(a), k * Math.cos(a), ox, oy - lift].map((n) => Math.round(n * 1000) / 1000);
  return <g transform={`matrix(${m.join(' ')})`}>{children}</g>;
}

/** The putty knife in plan: the blade (wide end at x 0), the ferrule and the oval handle. */
const PK_BLADE = 'M0 -25Q0 -27 3 -27L42 -7V7L3 27Q0 27 0 25Z';
const PK_FILLER = 'M5 -14Q12 -20 20 -12Q26 -4 20 6Q12 12 6 6Q2 -2 5 -14Z';
const PK_HANDLE = 'M50 -6Q64 -10 84 -10Q97 -10 97 0Q97 10 84 10Q64 10 50 6Z';
/** Where the putty knife lies: the blade's wide edge at the front left, the handle going back. */
const PK_AT = { ox: 40, oy: 92, turn: -60, scale: 1.1 } as const;

/** The paint scraper in plan: the steel triangle (a point towards the shaft) and the handle. */
const SC_BLADE = 'M3 -27Q0 -29 0 -25V25Q0 29 3 27L37 3Q41 0 37 -3Z';
const SC_HANDLE = 'M66 -7Q74 -10 92 -10Q104 -10 104 0Q104 10 92 10Q74 10 66 7Z';
/** Where the scraper lies: the triangle at the front right, the handle going back to the left. */
const SC_AT = { ox: 82, oy: 92, turn: -122, scale: 1.05 } as const;

/** The hand brush, side view, bristles down, the bristles' bottom-left corner at (0, 0). */
const HB_BACK = 'M-2 -34Q-2 -50 14 -50H58Q66 -50 70 -45L76 -43H104Q111 -43 111 -37Q111 -31 104 -31H76L70 -30Q66 -28 58 -28H4Q-2 -28 -2 -34Z';

/** The sandpaper roll standing on its end: the body, then the unrolled strip in front. */
const ROLL = { cx: 42, top: 26, bottom: 84, rx: 26, ry: 10 } as const;
const STRIP = 'M30 92L96 80Q100 79.5 102 82L108 96Q109 99 105 99.6L34 104Z';

export default {
  // "het plamuurmes": the putty knife — lying flat, its blade towards us: a wide thin steel blade
  // with a white dab of filler on it, a short ferrule and a thick orange handle going back.
  'w.plamuurmes': () => (
    <g strokeLinejoin="round">
      <g transform="rotate(-47 66 66)">
        <Ground cx={66} cy={68} rx={46} ry={7} />
      </g>
      {/* The handle and the ferrule, thick: underside first */}
      <Flat {...PK_AT} lift={1}>
        <path d={PK_HANDLE} fill={PAL.orangeShade} />
        <rect x="40" y="-7" width="13" height="14" rx="2" fill={PAL.steel} />
      </Flat>
      <Flat {...PK_AT} lift={7}>
        <path d={PK_HANDLE} fill={PAL.orange} />
        <path d="M60 -4Q72 -6 86 -6" fill="none" stroke={PAL.orangeLight} strokeWidth="3.4" strokeLinecap="round" />
      </Flat>
      <Flat {...PK_AT} lift={4}>
        <rect x="40" y="-7" width="13" height="14" rx="2" fill={PAL.mist} />
      </Flat>
      {/* The blade: its thin dark edge underneath, then the lit steel face */}
      <Flat {...PK_AT} lift={-3.5}>
        <path d={PK_BLADE} fill={PAL.slateDark} />
      </Flat>
      <Flat {...PK_AT}>
        <Shade color={PAL.slate} opacity={0.35} at={[20, 36, 40, 16]}>
          <path d={PK_BLADE} fill={PAL.steel} />
        </Shade>
        <path d="M8 -20L30 -9" fill="none" stroke={PAL.white} strokeWidth="4" strokeLinecap="round" opacity=".8" />
      </Flat>
      {/* The dab of filler on the blade */}
      <Flat {...PK_AT} lift={1.5}>
        <path d={PK_FILLER} fill={PAL.paperShade} />
      </Flat>
      <Flat {...PK_AT} lift={5}>
        <path d={PK_FILLER} fill={PAL.white} />
      </Flat>
    </g>
  ),

  // "het schuurpapier": the sandpaper — a red-brown roll standing on its end (the top shows the
  // rolled-up layers) with a strip unrolled in front of it, both covered in fine grit.
  'w.schuurpapier': () => (
    <g strokeLinejoin="round">
      <Ground cx={64} cy={100} rx={46} ry={7} />
      {/* The roll's body with its grit, darker on the right */}
      <Shade color={GRIT.shade} opacity={1} at={[ROLL.cx + 34, 60, 16, 50]}>
        <path d={`M${ROLL.cx - ROLL.rx} ${ROLL.top}V${ROLL.bottom}A${ROLL.rx} ${ROLL.ry} 0 0 0 ${ROLL.cx + ROLL.rx} ${ROLL.bottom}V${ROLL.top}Z`} fill={GRIT.base} />
      </Shade>
      <Grit x={17} y={30} w={44} h={60} keep={(px, py) => py < ROLL.bottom + 8 * Math.sqrt(Math.max(0, 1 - ((px - ROLL.cx) / ROLL.rx) ** 2))} />
      {/* The top: the rolled-up layers (pale back and grit in turns), the hollow core */}
      <ellipse cx={ROLL.cx} cy={ROLL.top} rx={ROLL.rx} ry={ROLL.ry} fill={GRIT.back} />
      <ellipse cx={ROLL.cx} cy={ROLL.top} rx={ROLL.rx - 5} ry={ROLL.ry - 2} fill={GRIT.shade} />
      <ellipse cx={ROLL.cx} cy={ROLL.top} rx={ROLL.rx - 8} ry={ROLL.ry - 3.2} fill={GRIT.back} />
      <ellipse cx={ROLL.cx} cy={ROLL.top} rx={ROLL.rx - 13} ry={ROLL.ry - 5} fill={PAL.slate} />
      {/* The strip unrolled in front: its pale edge, then its gritty face */}
      <path d={STRIP} fill={GRIT.back} transform="translate(0 3)" />
      <path d={STRIP} fill={GRIT.base} />
      <Grit x={30} y={80} w={78} h={24} step={4.8} keep={(px, py) => py > 92 - (px - 30) * 0.17 + 1.5 && py < 104 - (px - 34) * 0.06 - 1.5 && px > 33 && px < 104} />
      <Shine d="M21 36V58" color={PAL.clayLight} width={3.4} opacity={1} />
    </g>
  ),

  // "de verfkrabber": the paint scraper — lying flat, its blade towards us: a steel triangle with a
  // hole on a thin shaft and a blue handle going back; flakes of old green paint at its edge.
  'w.verfkrabber': () => (
    <g strokeLinejoin="round">
      <g transform="rotate(45 53 66)">
        <Ground cx={53} cy={68} rx={46} ry={7} />
      </g>
      {/* The handle, thick: underside first, then the shaft */}
      <Flat {...SC_AT} lift={1}>
        <path d={SC_HANDLE} fill={PAL.blueShade} />
      </Flat>
      <Flat {...SC_AT} lift={7}>
        <path d={SC_HANDLE} fill={PAL.blue} />
        <path d="M74 5Q84 6 96 5" fill="none" stroke={PAL.blueLight} strokeWidth="3.4" strokeLinecap="round" />
      </Flat>
      <Flat {...SC_AT} lift={3}>
        <rect x="30" y="-3" width="40" height="6" rx="2.6" fill={PAL.slate} />
        <rect x="60" y="-6" width="10" height="12" rx="2" fill={PAL.mist} />
      </Flat>
      {/* The triangle: its dark edge, then the lit steel face and the hole */}
      <Flat {...SC_AT} lift={-3.5}>
        <path d={SC_BLADE} fill={PAL.slateDark} />
      </Flat>
      <Flat {...SC_AT}>
        <Shade color={PAL.slate} opacity={0.35} at={[20, -34, 40, 16]}>
          <path d={SC_BLADE} fill={PAL.steel} />
        </Shade>
        <circle cx="13" cy="0" r="6.5" fill={PAL.slateDark} />
        <path d="M6 18L26 6" fill="none" stroke={PAL.white} strokeWidth="4" strokeLinecap="round" opacity=".8" />
      </Flat>
      {/* Flakes of old paint it scraped off */}
      <path d="M14 99L30 92L35 101L19 106Z" fill={PAL.leafShade} />
      <path d="M14 97L30 90L35 99L19 104Z" fill={PAL.leaf} />
      <path d="M15 95Q22 88 31 88" fill="none" stroke={PAL.lime} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M40 104L52 99L56 106L44 109Z" fill={PAL.leafShade} />
      <path d="M40 102L52 97L56 104L44 107Z" fill={PAL.leaf} />
      <path d="M41 100Q46 95 53 95" fill="none" stroke={PAL.lime} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),

  // "het stoffertje": the hand brush — a wooden brush with yellow bristles, tilted as it sweeps,
  // and the grey heap of dust it sweeps together.
  'w.stoffertje': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={102} rx={50} ry={5} />
      {/* The heap of dust */}
      <path d="M10 104Q11 88 20 87Q25 79 32 84Q39 85 41 104Z" fill={PAL.steel} />
      <path d="M15 95Q17 90 22 91" fill="none" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" />
      <circle cx="28" cy="93" r="2.2" fill={PAL.mist} />
      {/* The brush, tilted: bristles, then the wooden back and its handle */}
      <g transform="translate(35 101) rotate(-18) scale(0.8)">
        <path d="M2 -30H62L64 0H0Z" fill={PAL.yellow} />
        <path d="M66 -30L62 -30L64 0L68 -4Z" fill={PAL.yellowShade} />
        <path d="M9 -24V-2M18 -24V-2M27 -24V-2M36 -24V-2M45 -24V-2M54 -24V-2" stroke={PAL.yellowShade} strokeWidth="2.2" strokeLinecap="round" />
        <path d={HB_BACK} fill={PAL.cardDark} transform="translate(0 3)" />
        <Shade color={PAL.cardDark} opacity={1} at={[60, -24, 70, 8]}>
          <path d={HB_BACK} fill={PAL.wood} />
        </Shade>
        <circle cx="103" cy="-37" r="2.6" fill={PAL.cardDark} />
        <Shine d="M5 -40Q7 -46 16 -46H56" color={PAL.card} width={3.2} opacity={1} />
      </g>
    </g>
  ),

  // "schuren": to sand — a hand on a sanding block with thick red-brown sandpaper under it, on a
  // grey board, dust at both ends, under a double arrow (back and forth).
  'w.schuren': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={102} rx={50} ry={4} />
      {/* The board: front, side, top */}
      <polygon points="10,90 88,90 88,98 10,98" fill={PAL.line} />
      <polygon points="88,90 110,74 110,82 88,98" fill={PAL.steel} />
      <polygon points="10,90 88,90 110,74 32,74" fill={PAL.mist} />
      {/* Dust at both ends of the block */}
      <path d="M18 88Q19 81 25 82Q29 79 32 84L33 88Z" fill={PAL.paper} />
      <path d="M86 81Q87 75 92 76Q96 74 98 79L98 81Z" fill={PAL.paper} />
      {/* The sandpaper: thick, its grit on the front edge, then the block on it */}
      <polygon points="34,78 80,78 92,69 92,76 80,86 34,86" fill={GRIT.shade} />
      <polygon points="34,78 80,78 80,86 34,86" fill={GRIT.base} />
      <Grit x={34} y={78} w={46} h={8} step={4.4} />
      <polygon points="80,78 92,69 92,57 80,66" fill={PAL.slateDark} />
      <rect x="36" y="66" width="44" height="12" fill={PAL.slate} />
      <polygon points="36,66 80,66 92,57 48,57" fill={PAL.steel} />
      {/* The hand flat on the block, fingers forward, the sleeve to the right */}
      <Hand pose="open" x={88} y={58} rotate={-100} scale={0.82} skin={SKIN.amina} sleeve={[PAL.orange, PAL.orangeShade]} />
      {/* Back and forth */}
      <Arrow from={[52, 22]} to={[14, 22]} color={PAL.sky} width={7} head={12} />
      <Arrow from={[48, 22]} to={[86, 22]} color={PAL.sky} width={7} head={12} />
    </g>
  ),

  // "afplakken": to mask off — a wall next to a wooden window frame; a strip of yellow tape runs
  // along the frame, the roll at its top end (an arrow: it goes up). The blue paint on the wall
  // runs onto the tape, so the frame stays clean.
  'w.afplakken': () => (
    <g>
      {/* The wall */}
      <rect x="12" y="12" width="96" height="96" rx="5" fill={PAL.paperShade} />
      {/* The window frame on the right: wood, its shaded side */}
      <rect x="74" y="12" width="20" height="96" fill={PAL.card} />
      <rect x="88" y="12" width="6" height="96" fill={PAL.cardShade} />
      <rect x="94" y="12" width="14" height="96" rx="3" fill={PAL.ice} />
      {/* The tape along the frame, from the bottom up to the roll */}
      <rect x="61" y="34" width="13" height="74" fill={PAL.yellow} />
      <rect x="61" y="34" width="3" height="74" fill={PAL.yellowShine} opacity="0.7" />
      {/* Blue paint on the wall; it runs onto the tape, the frame stays clean */}
      <path d="M12 64Q14 58 20 58H67V108H17Q12 108 12 103Z" fill={PAL.sky} />
      <path d="M20 63H42" stroke={PAL.ice} strokeWidth="2.6" strokeLinecap="round" />
      {/* The roll at the top end */}
      <circle cx="68" cy="27" r="13" fill={PAL.yellowShade} />
      <circle cx="66.5" cy="25.5" r="12" fill={PAL.yellow} />
      <circle cx="66.5" cy="25.5" r="5" fill={PAL.card} />
      <circle cx="66.5" cy="25.5" r="3" fill={PAL.paperShade} />
      {/* The arrow: the tape goes on upwards, along the frame */}
      <Arrow from={[40, 32]} to={[40, 14]} color={PAL.orange} width={6} head={9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
