import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** A block in the slanted view: front rectangle (x, y, w, h), its top and right faces `d` deep. */
const block = (x: number, y: number, w: number, h: number, d: number, front: string, top: string, side: string) => {
  const ox = r1(d * DX);
  const oy = r1(d * DY);
  return (
    <g>
      <path d={`M${x} ${y}L${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + ox)} ${r1(y + oy)}Z`} fill={top} />
      <path d={`M${x + w} ${y}L${r1(x + w + ox)} ${r1(y + oy)}L${r1(x + w + ox)} ${r1(y + h + oy)}L${x + w} ${y + h}Z`} fill={side} />
      <rect x={x} y={y} width={w} height={h} fill={front} />
    </g>
  );
};

/** The darker side of the black parts. */
const INK = '#1b232a';

/** The wheel lying flat on the turntable: centre, radius across, how flat it looks, the tyre's height. */
const WX = 48;
const WY = 60;
const WR = 32;
const FL = 0.36;
const TH = 10;

export default {
  // "de bandenwisselaar": the tyre changer — a red workshop machine: a box base with foot pedals, a round
  // steel turntable on top holding a wheel lying flat, an upright red column at the back with an arm
  // reaching over the wheel, its black head pressing down on the tyre's edge.
  'w.bandenwisselaar': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={48} ry={4.5} />
      {/* The arm reaching from the column over the wheel, then the upright column at the back right */}
      {block(42, 20, 48, 8, 8, PAL.red, PAL.redLight, PAL.redShade)}
      {block(84, 13, 11, 65, 8, PAL.red, PAL.redLight, PAL.redShade)}
      {/* The base box */}
      {block(18, 72, 66, 28, 18, PAL.red, PAL.redLight, PAL.redShade)}
      {/* The foot pedals */}
      <rect x="28" y="96" width="9" height="6" rx="2" fill={PAL.slateDark} />
      <rect x="42" y="96" width="9" height="6" rx="2" fill={PAL.slateDark} />
      <rect x="56" y="96" width="9" height="6" rx="2" fill={PAL.slateDark} />
      <Shine d="M24 78H52" width={3} opacity={0.5} />
      {/* The turntable */}
      <ellipse cx={WX} cy={WY + 6} rx={WR - 6} ry={(WR - 6) * FL} fill={PAL.steel} />
      {/* The wheel lying flat: the tyre's side band, the top of the tyre, the rim inside */}
      <ellipse cx={WX} cy={WY} rx={WR} ry={WR * FL} fill={INK} />
      <rect x={WX - WR} y={WY - TH} width={WR * 2} height={TH} fill={PAL.slateDark} />
      <ellipse cx={WX} cy={WY - TH} rx={WR} ry={WR * FL} fill={PAL.slate} />
      <ellipse cx={WX} cy={WY - TH} rx={WR - 9} ry={(WR - 9) * FL} fill={PAL.mist} />
      <ellipse cx={WX + 1} cy={WY - TH + 1} rx={WR - 14} ry={(WR - 14) * FL} fill={PAL.steel} />
      <ellipse cx={WX} cy={WY - TH} rx={6} ry={6 * FL} fill={PAL.mist} />
      {/* The shaft going down from the arm to the head */}
      <rect x="50" y="27" width="6" height="15" fill={PAL.steel} />
      <rect x="53" y="27" width="3" height="15" fill={PAL.line} />
      {/* The black mount head pressing on the tyre's edge (near the back of the rim); on the intro
          card it comes down out of the arm onto the tyre */}
      <Move kind="from" dy={-22}>
        <path d="M45 38H61L59 46Q53 50 47 46Z" fill={PAL.slateDark} />
        <rect x="45" y="37" width="16" height="4" rx="1.5" fill={PAL.slate} />
      </Move>
      {/* The arm's front and top again (left of the column, above the shaft), over the head as it starts */}
      <path d="M42 20H84V13.6H46.8Z" fill={PAL.redLight} />
      <rect x="42" y="20" width="42" height="7" fill={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
