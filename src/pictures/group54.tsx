import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine, r1 } from './kit';

/**
 * Word pictures, group 54 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Lesson "Tiles, glue and the centre line" (u.afbouw), ported one to one from the drawings the
 * owner approved on 20 November 2026:
 *  - the tile: one flat tile seen at an angle, an ice-blue face, its blue thickness on the front
 *    and side, two light streaks on the glaze;
 *  - the tile glue: a paper bag with a stitched top and a white label showing a blue tile, a grey heap
 *    of glue beside it;
 *  - the tile spacer: four whole blue tiles in a light-grey frame (the joints), a big white
 *    plus-shaped spacer in the crossing (the approved drawing, scaled to 88 %);
 *  - the centre line: a grey wall face with a red line straight down the middle and a blue double
 *    arrow on each side (the same distance left and right);
 *  - the tiling board: a thin wooden board lying at an angle, four blue tiles with white spacers in
 *    one corner and combed grey glue on the rest (redrawn 20 November 2026 at the owner's yes: the
 *    upright board on feet read as a cabinet);
 *  - the pencil: one red pencil lying slanted, the sharpened wood tip with a grey graphite lead at the
 *    bottom left, over a grey line it has drawn.
 * Six silhouettes and colours: blue slab, brown bag, blue grid with a white cross, grey with a
 * red line, flat wood board with tiles, red stick.
 */

/** Light wood (the cut face of a board, a sharpened pencil): one step lighter than PAL.card. */
const WOOD_LIGHT = '#f0c48a';
/** Combed tile glue: between PAL.line and PAL.mist. */
const MORTAR = '#b3bdc4';

/** A tile seen from the front: a sky-blue depth edge under an ice-blue face. */
const FrontTile = ({ x, y, w, h, face }: { x: number; y: number; w: number; h: number; face: number }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={w > 30 ? 3 : 2.5} fill={PAL.sky} />
    <rect x={x} y={y} width={w} height={face} rx={w > 30 ? 3 : 2.5} fill={PAL.ice} />
  </g>
);

/** A point on the tiling board, seen from above at an angle: (u, v) on the board, z up. */
const iso = (u: number, v: number, z = 0): [number, number] => [r1(14 + u + 0.42 * v), r1(98 - 0.62 * v - z)];
const quad = (...p: [number, number][]) => `M${p.map(([x, y]) => `${x} ${y}`).join('L')}Z`;

export default {
  // "de tegel": the tile — one flat tile at an angle, the blue front and side edges showing its
  // thickness, an ice-blue face with two light streaks on the glaze.
  'w.tegel': () => (
    <g>
      {/* Ground shadow, exactly as approved */}
      <path d="M8.6 87.7L82.6 87.7L113.1 47.6L39.2 47.6Z" fill="#000" opacity="0.14" />
      <path d="M12.3 84.7L79.5 84.7L79.5 76.9L12.3 76.9Z" fill={PAL.sky} />
      <path d="M79.5 84.7L107.7 47.8L107.7 39.9L79.5 76.9Z" fill={PAL.skyShade} />
      <path d="M12.3 76.9L79.5 76.9L107.7 39.9L40.5 39.9Z" fill={PAL.ice} />
      <Shine d="M38.2 54.7L59.1 44.8" width={3.4} opacity={0.75} />
      <Shine d="M51.4 53.5L65.6 46.7" width={2.4} opacity={0.6} />
    </g>
  ),

  // "de tegellijm": the tile glue — a paper bag with a stitched top, a white label with a blue tile
  // on it, and a grey heap of glue on the floor beside it.
  'w.tegellijm': () => (
    <g>
      <Ground cx={60} cy={104} rx={40} ry={4.5} />
      <Shade color={PAL.cardDark} opacity={0.5} at={[98, 66, 20, 42]}>
        <path d="M30 30Q27 66 31 100Q60 105 89 100Q93 66 90 30Z" fill={PAL.card} />
      </Shade>
      <rect x="28" y="21" width="64" height="12" rx="3" fill={PAL.cardShade} />
      <path d="M33 27H87" fill="none" stroke={PAL.cardDark} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4.5" />
      {/* The label */}
      <rect x="39" y="45" width="42" height="35" rx="3" fill={PAL.paperShade} />
      <rect x="39" y="45" width="42" height="32" rx="3" fill={PAL.paper} />
      <FrontTile x={44} y={50} w={15} h={15} face={12.5} />
      <path d="M64 53H76M64 60H73M45 71H75" fill="none" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      <Shine d="M35 40Q33.5 58 35.5 76" width={3} opacity={0.4} />
      {/* The heap of glue */}
      <path d="M78 106Q78 93 90 94Q95 85 101 94Q110 97 108 106Z" fill={PAL.line} />
      <path d="M83 100Q84 96.5 90 97" fill="none" stroke={PAL.mist} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),

  // "het tegelkruisje": the tile spacer — four whole blue tiles in a light-grey frame, a big white
  // plus-shaped spacer with a grey depth edge in the crossing of the joints.
  'w.tegelkruisje': () => (
    // The approved drawing, scaled to 88 % around the centre so it fills about 75 % of the safe area
    <g transform="translate(60 60) scale(0.88) translate(-60 -60)">
      <rect x="11" y="11" width="98" height="98" rx="6" fill={PAL.line} />
      {[[14, 14], [14, 66], [66, 14], [66, 66]].map(([x, y]) => (
        <FrontTile key={`${x}-${y}`} x={x} y={y} w={40} h={40} face={36.5} />
      ))}
      {/* The spacer: grey depth edge, white top */}
      <rect x="34" y="57.3" width="52" height="11" rx="2.5" fill={PAL.steel} />
      <rect x="54.5" y="36.8" width="11" height="52" rx="2.5" fill={PAL.steel} />
      <rect x="34" y="54.5" width="52" height="11" rx="2.5" fill={PAL.paper} />
      <rect x="54.5" y="34" width="11" height="52" rx="2.5" fill={PAL.paper} />
      <Shine d="M20 30Q21 21 30 20" width={3} opacity={0.7} />
    </g>
  ),

  // "de hartlijn": the centre line — a grey wall face with a red line straight down the middle
  // and a blue double arrow on each side of it: the same distance left and right.
  'w.hartlijn': () => (
    <g>
      <rect x="14" y="24" width="92" height="78" rx="4" fill={PAL.steel} />
      <rect x="14" y="20" width="92" height="78" rx="4" fill={PAL.mist} />
      <g fill="none" stroke={PAL.sky} strokeWidth="4.5" strokeLinecap="round">
        <path d="M21 59H52M68 59H99" />
        <path d="M26.5 53.5L21 59L26.5 64.5M46.5 53.5L52 59L46.5 64.5M73.5 53.5L68 59L73.5 64.5M93.5 53.5L99 59L93.5 64.5" strokeLinejoin="round" />
      </g>
      {/* The centre line, exactly as approved */}
      <path d="M60 12V106" fill="none" stroke={PAL.red} strokeWidth="5.5" strokeLinecap="round" />
    </g>
  ),

  // "de tegelplaat": the tiling board — a thin wooden board lying at an angle, its thin edges show it
  // is a board; four blue tiles with white spacers set in one corner, combed glue on the rest.
  'w.tegelplaat': () => {
    const W = 70;
    const D = 66;
    const T = 6;
    return (
      <g>
        <path d={quad(iso(-3, -4), iso(W + 3, -4), iso(W + 3, D + 2), iso(-3, D + 2))} fill="#000" opacity="0.14" />
        {/* The board: front edge, side edge, top */}
        <path d={quad(iso(0, 0, 0), iso(W, 0, 0), iso(W, 0, T), iso(0, 0, T))} fill={PAL.cardShade} />
        <path d={quad(iso(W, 0, 0), iso(W, D, 0), iso(W, D, T), iso(W, 0, T))} fill={PAL.cardDark} />
        <path d={quad(iso(0, 0, T), iso(W, 0, T), iso(W, D, T), iso(0, D, T))} fill={PAL.card} />
        {/* Combed glue on the back half: grey ridges */}
        {[44, 51, 58].map((v) => (
          <path key={v} d={`M${iso(4, v, T).join(' ')}L${iso(W - 4, v, T).join(' ')}`} stroke={MORTAR} strokeWidth="4" strokeLinecap="round" />
        ))}
        {/* Four tiles in the front left corner, white spacers in the joints */}
        {[[5, 5], [27, 5], [5, 23], [27, 23]].map(([u, v]) => (
          <g key={`${u}-${v}`}>
            <path d={quad(iso(u, v, T), iso(u + 20, v, T), iso(u + 20, v, T + 2.6), iso(u, v, T + 2.6))} fill={PAL.sky} />
            <path d={quad(iso(u + 20, v, T), iso(u + 20, v + 16, T), iso(u + 20, v + 16, T + 2.6), iso(u + 20, v, T + 2.6))} fill={PAL.skyShade} />
            <path d={quad(iso(u, v, T + 2.6), iso(u + 20, v, T + 2.6), iso(u + 20, v + 16, T + 2.6), iso(u, v + 16, T + 2.6))} fill={PAL.ice} />
          </g>
        ))}
        <path d={`M${iso(26, 3, T + 3).join(' ')}L${iso(26, 41, T + 3).join(' ')}M${iso(3, 22, T + 3).join(' ')}L${iso(49, 22, T + 3).join(' ')}`} stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" />
        <path d={`M${iso(4, 2, T).join(' ')}L${iso(W - 6, 2, T).join(' ')}`} stroke={WOOD_LIGHT} strokeWidth="2.4" strokeLinecap="round" opacity="0.9" />
      </g>
    );
  },
  // "het potlood": the pencil — one rounded red pencil lying slanted, the sharpened wood tip and
  // grey graphite lead at the bottom left, over the grey line it has drawn.
  'w.potlood': () => (
    <g>
      <path d="M21 89Q52 103 96 95" fill="none" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      <g transform="rotate(-35 60 60)">
        <rect x="34" y="53" width="72" height="14" rx="3.5" fill={PAL.redShade} />
        <path d="M34 53H102.5Q106 53 106 56.5V60H34Z" fill={PAL.red} />
        <path d="M34 53V67L15 60Z" fill={PAL.card} />
        <path d="M34 53V60H15Z" fill={WOOD_LIGHT} />
        {/* Graphite lead in steel grey (approved: ink), so the point reads on the dark card too */}
        <path d="M22.5 57.2V62.8L12 60Z" fill={PAL.steel} />
        <Shine d="M42 56.3H82" color={PAL.redLight} width={2.2} opacity={0.85} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
