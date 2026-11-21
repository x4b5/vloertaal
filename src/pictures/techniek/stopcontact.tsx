import { useId, type JSX } from 'react';
import { PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

/** The wall plate: front face top left, size, thickness into the wall. */
const X = 18;
const Y = 24;
const S = 78;
const T = 7;
/** The round recess: centre, radius, how deep it goes. */
const CX = X + S / 2;
const CY = Y + S / 2;
const R = 27;
const D = 9;

export default {
  // "het stopcontact": the wall socket — a white Dutch (Schuko) socket on a square plate, a deep round recess
  // with two dark holes and the two metal earth clips at the top and bottom
  'w.stopcontact': () => {
    const id = `stc-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    const dx = r1(T * DX);
    const dy = r1(T * DY);
    const fx = r1(CX + D * DX);
    const fy = r1(CY + D * DY);
    return (
      <g strokeLinejoin="round">
        {/* The plate's top edge (lit) and right edge (shade), going back into the wall */}
        <path d={`M${X + 4} ${Y}L${X + 4 + dx} ${Y + dy}H${X + S + dx - 2}L${X + S} ${Y + 2}Z`} fill={PAL.paperShade} />
        <path d={`M${X + S} ${Y + 3}L${X + S + dx} ${Y + dy + 3}V${Y + S + dy - 4}L${X + S} ${Y + S - 4}Z`} fill={PAL.line} />
        {/* The front face */}
        <rect x={X} y={Y} width={S} height={S} rx="9" fill={PAL.paper} />
        <rect x={X} y={Y + S - 9} width={S} height="9" rx="4" fill={PAL.paperShade} />
        <rect x={X} y={Y} width={S} height={S - 4} rx="9" fill={PAL.paper} />
        {/* The recess: its inner wall, then its floor set back into the wall */}
        <clipPath id={id}>
          <circle cx={CX} cy={CY} r={R} />
        </clipPath>
        <circle cx={CX} cy={CY} r={R} fill={PAL.line} />
        <circle cx={fx} cy={fy} r={R} fill={PAL.mist} clipPath={`url(#${id})`} />
        {/* The two holes */}
        <circle cx={fx - 11} cy={fy} r="5" fill={PAL.slateDark} />
        <circle cx={fx + 11} cy={fy} r="5" fill={PAL.slateDark} />
        {/* The earth clips: metal tabs at the top and bottom of the recess */}
        <g clipPath={`url(#${id})`}>
          <rect x={CX - 7} y={CY - R - 2} width="14" height="9" rx="2" fill={PAL.steel} />
          <rect x={CX - 7} y={CY + R - 8} width="14" height="9" rx="2" fill={PAL.steel} />
          <path d={`M${CX - 4} ${CY - R + 4}H${CX + 4}M${CX - 4} ${CY + R - 5}H${CX + 4}`} stroke={PAL.white} strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
        </g>
        {/* The rim round the recess, lit on the top left */}
        <circle cx={CX} cy={CY} r={R + 2.2} fill="none" stroke={PAL.white} strokeWidth="2.4" />
        <Shine d={`M${X + 7} ${Y + 20}Q${X + 7} ${Y + 7} ${X + 20} ${Y + 7}`} color={PAL.white} width={3.4} opacity={0.9} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
