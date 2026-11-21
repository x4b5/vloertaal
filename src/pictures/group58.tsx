import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from './kit';

/**
 * Word pictures, group 58 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Lesson "Bricklaying" (u.ruwbouw): six things of the bricklayer, drawn like the tiler's tools the
 * owner approved (group53): slanted, a light top, a darker side and a ground shadow.
 *
 *  - the mortar tub (de speciekuip): a wide, low green tub seen from above at an angle, a thick grey
 *    heap of mortar rising above its rim.
 *  - the brick trowel (de metseltroffel): a pointed steel blade flat on the ground with a heap of
 *    grey mortar on it (so it is not the tiler's empty trowel), a cranked neck, a wooden handle.
 *  - the brick (de baksteen): one orange-red brick as a long block, a light top, the long face at the
 *    front and the darker short end on the right.
 *  - the cement (het cement): a grey paper sack, open at the top with a rounded heap of grey powder
 *    in it, a heap of powder at its foot, and on its label a grey heap and grey lines (no bricks, so
 *    it is never the pick for "de baksteen"). Grey, with no header strip, so it is not the brown
 *    tile-adhesive bag (group53).
 *  - the jointer (het voegijzer): big, a wooden handle at the top left, a Z-shaped steel neck and a
 *    long steel rod running into the grey joint of a small piece of wall at the bottom right.
 *  - the hand brush (de handveger): from the side, a wooden back running out into a long handle with
 *    a hanging hole, soft yellow bristles that splay out at the bottom, a little heap of sand.
 *
 * The six stand side by side in a picture choice, so each has its own main shape and colour:
 * a green tub with a grey heap, a pointed grey blade with a cranked neck, an orange-red block (one
 * brick, in 3D), a standing grey sack, a thin rod in a flat brick wall, a wooden back with yellow
 * bristles. The trowel is all broad blade, the jointer is all thin rod over a wall, so the two steel
 * tools do not look alike.
 */

/** The mortar and the cement powder: between PAL.line and PAL.mist (as in group53). */
const MORTAR = '#b3bdc4';

/** A line with round ends: a handle, a neck, a rib. */
const line = (d: string, stroke: string, w: number, extra: { opacity?: number; cap?: 'round' | 'butt' } = {}) => (
  <path d={d} fill="none" stroke={stroke} strokeWidth={w} strokeLinecap={extra.cap ?? 'round'} strokeLinejoin="round" opacity={extra.opacity} />
);

/** A flat face of a block, as a path. */
const face = (d: string, fill: string) => <path d={d} fill={fill} />;

/** A wooden handle from a to b (x, y pairs): a dark underside, the wood, a light stripe. */
const handle = (ax: number, ay: number, bx: number, by: number, w = 14) => {
  const len = Math.hypot(bx - ax, by - ay);
  const nx = ((by - ay) / len) * w * 0.12;
  const ny = (-(bx - ax) / len) * w * 0.12;
  const k = 0.18;
  return (
    <g>
      {line(`M${ax} ${ay}L${bx} ${by}`, PAL.cardDark, w)}
      {line(`M${ax + nx} ${ay + ny}L${bx + nx} ${by + ny}`, PAL.wood, w * 0.64)}
      {line(
        `M${ax + (bx - ax) * k + nx * 2.6} ${ay + (by - ay) * k + ny * 2.6}L${bx - (bx - ax) * k + nx * 2.6} ${by - (by - ay) * k + ny * 2.6}`,
        PAL.card,
        2.4,
      )}
    </g>
  );
};

/** The tub: its wall below the rim. */
const TUB = 'M14 54L24 92Q60 104 96 92L106 54Z';

/** The mortar heaped up in the tub, above the rim. */
const HEAP = 'M22 56Q24 44 38 41Q46 30 60 31Q74 29 84 38Q96 42 98 56Q60 66 22 56Z';

/** The brick trowel's blade, flat on the ground: a sharp point on the left, a broad heel on the right
 *  (the approved trowel of group53, drawn a little longer). */
const BLADE = 'M11 84Q38 59 71 58Q77 58 78.5 64L83 82Q84 88 78 89Q44 96 11 84Z';

/** The standing cement sack, a little wider at the foot. */
const SACK = 'M25 40Q59 52 94 40Q100 70 94 100Q59 107 24 100Q18 70 25 40Z';

/** The hand brush's wooden back with its long handle. */
const BRUSH_BACK = 'M12 72Q11 57 25 56H60Q68 56 72 60L80 61H101Q107 61 107 66Q107 71 101 71H80L72 72Q68 73 60 73Z';

/** The hand brush's bristles: narrow under the back, splaying out to soft tufts at the bottom. */
function bristles(): string {
  const left = 10;
  const right = 78;
  const n = 9;
  const step = (right - left) / n;
  let d = `M16 72H68L${right} 98`;
  for (let i = n; i > 0; i -= 1) {
    const x1 = right - (n - i + 1) * step;
    d += `Q${(x1 + step / 2).toFixed(1)} 105 ${x1.toFixed(1)} 98`;
  }
  return `${d}Z`;
}

export default {
  // "de speciekuip": the mortar tub — a wide, low green tub seen at an angle, a thick grey heap of
  // mortar rising above its rim.
  'w.speciekuip': () => (
    <g>
      <Ground cx={60} cy={100} rx={46} ry={5} />
      <Shade color={PAL.greenShade} opacity={1} at={[110, 76, 24, 40]}>
        <path d={TUB} fill={PAL.green} />
      </Shade>
      {line('M18 71Q60 84 102 71', PAL.greenShade, 3)}
      {/* The rim (shaded on the right) and the dark inside wall */}
      <Shade color={PAL.green} opacity={1} at={[112, 56, 22, 20]}>
        <ellipse cx="60" cy="54" rx="48" ry="14" fill={PAL.leaf} />
      </Shade>
      <ellipse cx="60" cy="55" rx="42" ry="10" fill={PAL.greenShade} />
      {/* The thick mortar heaped up above the rim, its right side in shade */}
      <Shade color={PAL.line} opacity={1} at={[100, 50, 22, 26]}>
        <path d={HEAP} fill={MORTAR} />
      </Shade>
      {line('M44 50Q56 44 70 47', PAL.line, 2.4)}
      <Shine d="M32 47Q38 40 46 39" color={PAL.white} width={3} opacity={0.8} />
      <Shine d="M21 66Q23 75 27 83" color={PAL.lime} width={3.2} opacity={0.7} />
    </g>
  ),

  // "de metseltroffel": the brick trowel — a pointed steel blade flat on the ground with a heap of
  // grey mortar on it, a dark cranked neck rising from its heel to a wooden handle at the top right.
  'w.metseltroffel': () => (
    <g>
      <Ground cx={52} cy={95} rx={42} ry={5} />
      {/* The blade with its dark thick edge, its heel in shade */}
      <path d={BLADE} fill={PAL.slate} transform="translate(0 3.5)" />
      <Shade color={PAL.slate} opacity={0.3} at={[90, 78, 21, 28]}>
        <path d={BLADE} fill={PAL.steel} />
      </Shade>
      <Shine d="M22 80Q40 67 62 64" width={3.2} opacity={0.6} />
      {/* A heap of mortar on the blade: that is what this trowel carries to the wall */}
      <path d="M28 80Q27 66 40 62Q46 52 56 58Q68 58 66 70Q70 78 62 82Q44 86 28 80Z" fill={MORTAR} />
      <path d="M36 66Q40 60 47 60" fill="none" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" opacity="0.7" />
      {/* The cranked neck from the heel up to the handle */}
      {line('M75 77L79.5 57Q80.5 52 85 49L89 46', PAL.slate, 6.5)}
      {handle(89, 46, 103, 32, 15)}
      {line('M85.5 49.5L90.5 44.5', PAL.steel, 15.5, { cap: 'butt' })}
    </g>
  ),

  // "de baksteen": the brick — one orange-red brick as a long block: a light top, the long face at
  // the front, the darker short end on the right.
  'w.baksteen': () => (
    <g>
      <path d="M10 94L88 94L112 74L34 74Z" fill="#000" opacity="0.14" />
      {face('M12 68L86 68L86 90L12 90Z', PAL.clay)}
      {face('M86 68L108 50L108 72L86 90Z', PAL.clayShade)}
      {face('M12 68L86 68L108 50L34 50Z', PAL.clayLight)}
      {line('M26 64L40 53', '#f6b48e', 3, { opacity: 0.9 })}
      {/* A few pores in the fired clay */}
      <g fill={PAL.clayShade}>
        <circle cx="28" cy="78" r="2.2" />
        <circle cx="56" cy="83" r="2.2" />
        <circle cx="72" cy="75" r="2" />
        <circle cx="98" cy="70" r="2" fill="#a3461f" />
      </g>
    </g>
  ),

  // "het cement": the cement — a grey paper sack, open at the top with a rounded heap of grey powder
  // in it, a heap of powder at its foot, and on its label a grey heap and grey lines.
  'w.cement': () => (
    <g>
      <Ground cx={60} cy={104} rx={42} ry={4.5} />
      {/* The back of the open sack, its paper edge in soft folds, then the powder heaped up in it */}
      <path d="M27 46Q25 33 34 31Q40 25 47 30Q53 23 60 28Q67 22 74 29Q81 25 87 31Q95 33 92 46Z" fill={PAL.line} />
      <Shade color={PAL.slate} opacity={0.45} at={[92, 34, 16, 16]}>
        <path d="M30 46Q33 33 47 32Q58 23 71 28Q86 30 90 46Z" fill={PAL.steel} />
      </Shade>
      {/* The front of the sack, its top edge dipping where it is open; its right side in shade */}
      <Shade color={PAL.steel} opacity={0.75} at={[102, 70, 16, 44]}>
        <path d={SACK} fill={PAL.mist} />
      </Shade>
      {line('M27 41Q59 52 93 41', PAL.paper, 3)}
      {/* The label: a little grey heap and two grey lines, no words */}
      <rect x="36" y="56" width="44" height="31" rx="3" fill={PAL.paperShade} />
      <rect x="36" y="56" width="44" height="28" rx="3" fill={PAL.white} />
      <path d="M41 76Q42 67 50 67Q54 60 59 66Q65 67 66 76Z" fill={PAL.steel} />
      {line('M69 66H75', PAL.line, 2.4)}
      {line('M69 73H75', PAL.line, 2.4)}
      <Shine d="M28 52Q25.5 66 27.5 84" width={3} opacity={0.6} />
      {/* The heap of spilled powder at its foot */}
      <path d="M76 106Q76 93 88 93Q94 83 101 93Q110 96 109 106Z" fill={PAL.steel} />
      <path d="M101 93Q110 96 109 106H100Q104 99 101 93Z" fill={PAL.slate} opacity="0.55" />
      <path d="M82 99Q84 95.5 89 96" fill="none" stroke={PAL.mist} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),

  // "het voegijzer": the jointer, to smooth the joints between bricks — at work: a wooden handle at
  // the top left, a Z-shaped neck, a long thin rod with a round end pressed into a wall's grey joint.
  'w.voegijzer': () => (
    <g>
      <Ground cx={78} cy={106} rx={32} ry={3.5} />
      {/* A small piece of wall at the bottom right: two rows of bricks and the grey joint between */}
      <rect x="62" y="80" width="48" height="24" rx="2" fill={PAL.line} />
      {[[62, 80, 22], [88, 80, 22], [62, 94, 10], [76, 94, 22], [102, 94, 8]].map(([x, y, w]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width={w} height={10} rx={1.5} fill={PAL.clayShade} />
          <rect x={x} y={y} width={w} height={8} rx={1.5} fill={PAL.clay} />
        </g>
      ))}
      {/* The jointer, big: a wooden handle at the top left, a Z-shaped steel neck, a long steel rod
          running down into the joint */}
      {line('M30 92L106 92', '#000', 8, { opacity: 0.18 })}
      {line('M28 88.5H105', PAL.slate, 9)}
      {line('M30 86.5H103', PAL.mist, 4)}
      {line('M30 40H36Q42 40 43 46L44 80Q44.5 88.5 32 88.5', PAL.slate, 7)}
      {handle(10, 40, 34, 40, 19)}
      {line('M31 40H38', PAL.steel, 19.5, { cap: 'butt' })}
    </g>
  ),

  // "de handveger": the hand brush — from the side, a wooden back running out into a long handle with
  // a hanging hole, soft yellow bristles splaying out at the bottom, a little heap of sand.
  'w.handveger': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={102} rx={50} ry={4.5} />
      {/* The sand */}
      <path d="M84 102Q86 93 92 93Q96 88 101 93Q108 95 109 102Z" fill={PAL.card} />
      <path d="M101 93Q108 95 109 102H102Q104 97 101 93Z" fill={PAL.cardShade} />
      <circle cx="79" cy="100" r="2.4" fill={PAL.card} />
      {/* The bristles, splaying out to soft tufts, their right side in shade */}
      <Shade color={PAL.yellowShade} opacity={1} at={[84, 88, 16, 24]}>
        <path d={bristles()} fill={PAL.yellow} />
      </Shade>
      <path d="M24 77L20 98M32 77L30 99M40 77L39.5 99M48 77L49 99M56 77L59 99" stroke={PAL.yellowShade} strokeWidth="2" strokeLinecap="round" />
      {/* The wooden back and its handle */}
      <path d={BRUSH_BACK} fill={PAL.cardDark} transform="translate(0 2.5)" />
      <Shade color={PAL.cardDark} opacity={1} at={[60, 79, 60, 9]}>
        <path d={BRUSH_BACK} fill={PAL.wood} />
      </Shade>
      <circle cx="101" cy="65.5" r="2.4" fill={PAL.cardDark} />
      <Shine d="M18 64Q20 59 28 58.5H60" color={PAL.card} width={3} opacity={0.95} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
