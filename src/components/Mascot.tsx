import type { CSSProperties, ReactNode } from 'react';

/**
 * The celebration mascots, built from a handful of flat geometric primitives:
 *
 *  - limbs are rounded rectangles (capsules) that start inside the torso, so shoulders and hips
 *    attach cleanly with no seams;
 *  - the torso is one bean;
 *  - the head is a soft rounded square with small solid oval eyes (one highlight each), a nub
 *    nose and a D-shaped open smile; no catch-light stickers, no blush;
 *  - each character has one signature silhouette feature they keep everywhere: Bram's oversized,
 *    tilted hard hat, Jada's big hair puff with goggles.
 */

export type V = [number, number];
const RAD = Math.PI / 180;
export const r1 = (n: number) => Math.round(n * 10) / 10;

/** A rounded rectangle of thickness `w` running from a to b (round ends, so joints overlap cleanly). */
export function Capsule({ a, b, w, fill }: { a: V; b: V; w: number; fill: string }) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy);
  const ang = Math.atan2(dy, dx) / RAD;
  return (
    <rect
      x={r1(-w / 2)}
      y={r1(-w / 2)}
      width={r1(len + w)}
      height={r1(w)}
      rx={r1(w / 2)}
      fill={fill}
      transform={`translate(${r1(a[0])} ${r1(a[1])}) rotate(${r1(ang)})`}
    />
  );
}

export type MitKind = 'fist' | 'open';

/** A hand at the end of a forearm of thickness w, drawn along +x (the forearm's direction). */
export function Mitt({ kind, w, skin, shade }: { kind: MitKind; w: number; skin: string; shade: string }) {
  if (kind === 'fist') {
    return (
      <g>
        <circle cx={r1(w * 0.45)} cy="0" r={r1(w * 0.78)} fill={skin} />
        <rect x={r1(w * 0.55)} y={r1(-w * 0.5)} width={r1(w * 0.5)} height={r1(w * 0.22)} rx={r1(w * 0.11)} fill={shade} />
      </g>
    );
  }
  // Open palm for the high five: a broad mitten with a thumb sticking out.
  return (
    <g>
      <rect
        x={r1(w * 0.75)}
        y={r1(-w * 1.15)}
        width={r1(w * 0.48)}
        height={r1(w * 0.95)}
        rx={r1(w * 0.24)}
        fill={skin}
        transform={`rotate(-30 ${r1(w * 0.75)} ${r1(-w * 0.4)})`}
      />
      <rect x={r1(-w * 0.1)} y={r1(-w * 0.7)} width={r1(w * 1.75)} height={r1(w * 1.4)} rx={r1(w * 0.62)} fill={skin} />
    </g>
  );
}

/** A chunky boot: one rounded block and a sole, toes along +x. */
export function Boot({ w, fill }: { w: number; fill: string }) {
  return (
    <g>
      <rect x={r1(-w * 0.6)} y={r1(-w * 0.55)} width={r1(w * 1.85)} height={r1(w * 1.05)} rx={r1(w * 0.5)} fill={fill} />
      <rect x={r1(-w * 0.6)} y={r1(w * 0.25)} width={r1(w * 1.85)} height={r1(w * 0.3)} rx={r1(w * 0.15)} fill="#000" opacity=".22" />
    </g>
  );
}

export type HeadId = 'bram' | 'jada';

interface HeadLook {
  skin: string;
  shade: string;
  brow: string;
  back?: ReactNode;
  top: ReactNode;
}

const HEADS: Record<HeadId, HeadLook> = {
  bram: {
    skin: '#f7c49b',
    shade: '#e2a376',
    brow: '#6b3d1e',
    // The oversized hard hat, tipped back at a jaunty angle: wider than his head, low brim.
    top: (
      <g transform="rotate(-13 0 -40)">
        <path d="M-31 -37C-31 -66 -15 -80 2 -80C21 -80 35 -66 35 -37Z" fill="#ffc800" />
        <path d="M18 -76C29 -69 35 -55 35 -37H24C24 -52 22 -66 18 -76Z" fill="#e5a400" />
        <rect x="-4.5" y="-80" width="10" height="42" rx="5" fill="#ffe066" />
        <rect x="-37" y="-42" width="76" height="11" rx="5.5" fill="#e5a400" />
      </g>
    ),
  },
  jada: {
    skin: '#8d5536',
    shade: '#6e3f25',
    brow: '#24140c',
    // The big hair puff behind her head...
    back: (
      <>
        <circle cx="10" cy="-56" r="20" fill="#2b1a12" />
        <circle cx="-12" cy="-50" r="14" fill="#2b1a12" />
      </>
    ),
    // ...a cap of hair over the forehead, and her safety goggles pushed up on top.
    top: (
      <g>
        <path d="M-21 -26C-23 -46 -12 -52 0 -52C13 -52 23 -46 21 -26C14 -36 -2 -40 -21 -26Z" fill="#2b1a12" />
        <g transform="rotate(-8 0 -42)">
          <rect x="-22" y="-46" width="44" height="6" rx="3" fill="#1a6fae" />
          <rect x="-17" y="-50" width="14" height="12" rx="5" fill="#1cb0f6" />
          <rect x="3" y="-50" width="14" height="12" rx="5" fill="#1cb0f6" />
          <rect x="-14" y="-47.5" width="6" height="3" rx="1.5" fill="#bfe9ff" />
          <rect x="6" y="-47.5" width="6" height="3" rx="1.5" fill="#bfe9ff" />
        </g>
      </g>
    ),
  },
};

/**
 * A mascot head with the neck base at (0, 0), head centred near (0, -24).
 * `gaze` shifts the small eyes a little (-1..1 each way).
 */
export function MascotHead({ who, gaze = [0, 0], blink, shout = false }: {
  who: HeadId;
  gaze?: [number, number];
  blink?: number;
  /** A wider, taller mouth for the victory shout. */
  shout?: boolean;
}) {
  const h = HEADS[who];
  const [gx, gy] = gaze;
  const ex = gx * 2.6;
  const ey = gy * 2;
  const eye = (cx: number) => (
    <g>
      <ellipse cx={r1(cx + ex)} cy={r1(-25 + ey)} rx="3.4" ry="4.8" fill="#1d1714" />
      <circle cx={r1(cx + ex + 1.1)} cy={r1(-26.8 + ey)} r="1.3" fill="#fff" />
    </g>
  );
  const mouth = shout
    ? 'M-9 -14H9Q9 -1 0 -1Q-9 -1 -9 -14Z'
    : 'M-8.5 -13.5H8.5Q8 -4 0 -4Q-8 -4 -8.5 -13.5Z';
  return (
    <g className="mascot-head">
      {h.back}
      <rect x="-6" y="-8" width="12" height="10" rx="4" fill={h.shade} />
      <circle cx="-21" cy="-21" r="5" fill={h.skin} />
      <circle cx="21" cy="-21" r="5" fill={h.skin} />
      <rect x="-21" y="-47" width="42" height="45" rx="18" fill={h.skin} />
      <g className="ch-eyes" style={{ '--blink': `${blink ?? 3}s` } as CSSProperties}>
        {eye(-8)}
        {eye(8)}
      </g>
      <rect x={r1(-13 + ex)} y="-35.5" width="9" height="3.6" rx="1.8" fill={h.brow} transform={`rotate(-12 ${r1(-8.5 + ex)} -33.7)`} />
      <rect x={r1(4 + ex)} y="-35.5" width="9" height="3.6" rx="1.8" fill={h.brow} transform={`rotate(12 ${r1(8.5 + ex)} -33.7)`} />
      <ellipse cx={r1(ex * 1.2)} cy="-17.5" rx="3" ry="2.3" fill={h.shade} />
      <g className="ch-mouth">
        <path d={mouth} fill="#7a2230" transform={`translate(${r1(ex * 0.8)} 0)`} />
        <ellipse cx={r1(ex * 0.8)} cy={shout ? -4.5 : -6.5} rx={shout ? 4.6 : 4} ry="2.4" fill="#ff7b8a" />
      </g>
      {h.top}
    </g>
  );
}
