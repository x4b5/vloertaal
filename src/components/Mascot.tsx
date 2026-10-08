import { CastHead } from './Characters';

/**
 * The celebration mascots, built from a handful of flat geometric primitives:
 *
 *  - limbs are slim rounded rectangles (capsules) that start inside the torso, so shoulders and
 *    hips attach cleanly with no seams;
 *  - hands and boots are slim, squarish blocks (no mittens, no balloon shapes);
 *  - the head is the cast's own flat, oval head (CastHead) with a calm closed smile.
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

export type MitKind = 'fist' | 'open' | 'thumb';

/**
 * A hand at the end of a forearm of thickness w, drawn along +x (the forearm's direction).
 * Slim and squarish, no wider than the wrist: no mittens or balls.
 */
export function Mitt({ kind, w, skin, shade }: { kind: MitKind; w: number; skin: string; shade: string }) {
  const palm = <rect x={r1(-w * 0.1)} y={r1(-w * 0.48)} width={r1(w * 0.95)} height={r1(w * 0.96)} rx={r1(w * 0.2)} fill={skin} />;
  const knuckle = <path d={`M${r1(w * 0.6)} ${r1(-w * 0.28)}V${r1(w * 0.28)}`} stroke={shade} strokeWidth={r1(w * 0.07)} />;
  if (kind === 'thumb') {
    // A fist with the thumb standing up, square to the forearm (a calm "well done").
    return (
      <g>
        <rect x={r1(w * 0.08)} y={r1(-w * 1.25)} width={r1(w * 0.3)} height={r1(w * 0.9)} rx={r1(w * 0.14)} fill={skin} />
        {palm}
        {knuckle}
      </g>
    );
  }
  if (kind === 'fist') {
    return (
      <g>
        {palm}
        {knuckle}
      </g>
    );
  }
  // Open palm: fingers together, the thumb a little apart.
  return (
    <g>
      <rect x={r1(w * 0.1)} y={r1(-w * 0.95)} width={r1(w * 0.26)} height={r1(w * 0.62)} rx={r1(w * 0.12)} fill={skin} transform={`rotate(-24 ${r1(w * 0.2)} ${r1(-w * 0.4)})`} />
      <rect x={r1(-w * 0.1)} y={r1(-w * 0.45)} width={r1(w * 1.45)} height={r1(w * 0.9)} rx={r1(w * 0.2)} fill={skin} />
      <path d={`M${r1(w * 0.75)} ${r1(-w * 0.15)}H${r1(w * 1.3)}M${r1(w * 0.75)} ${r1(w * 0.15)}H${r1(w * 1.3)}`} stroke={shade} strokeWidth={r1(w * 0.06)} />
    </g>
  );
}

/** A work boot: a low block with a straight sole, toes along +x. */
export function Boot({ w, fill }: { w: number; fill: string }) {
  return (
    <g>
      <path d={`M${r1(-w * 0.55)} ${r1(-w * 0.5)}H${r1(w * 0.45)}L${r1(w * 1.15)} ${r1(-w * 0.05)}V${r1(w * 0.5)}H${r1(-w * 0.55)}Z`} fill={fill} />
      <rect x={r1(-w * 0.6)} y={r1(w * 0.3)} width={r1(w * 1.8)} height={r1(w * 0.22)} rx={r1(w * 0.05)} fill="#000" opacity=".25" />
    </g>
  );
}

export type HeadId = 'bram' | 'jada';

const SKIN: Record<HeadId, [string, string]> = {
  bram: ['#f7c49b', '#e2a376'],
  jada: ['#8d5536', '#6e3f25'],
};

/**
 * A mascot head with the neck base at (0, 0), head centred near (0, -24): the cast's own head
 * (CastHead, so the celebrations show exactly the colleagues from the lessons), scaled down, with
 * a calm closed smile. `gaze` shifts the eyes a little (-1..1 each way); `shout` is kept for the
 * callers but shows the same calm smile (no open mouths).
 */
export function MascotHead({ who, gaze = [0, 0], blink }: {
  who: HeadId;
  gaze?: [number, number];
  blink?: number;
  /** Formerly a wide victory shout; the calm style keeps the mouth closed. */
  shout?: boolean;
}) {
  const [, shade] = SKIN[who];
  return (
    <g className="mascot-head">
      <rect x="-5.6" y="-14" width="11.2" height="16" fill={shade} />
      <g transform="translate(-49.8 -74.6) scale(.83)">
        <CastHead who={who} expr="pleased" blink={blink} bold gaze={gaze} neck={false} />
      </g>
    </g>
  );
}
