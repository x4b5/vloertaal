import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

/** A milk carton, bottom at (x, y): blue band, gable top. */
const milk = (x: number, y: number) => (
  <g>
    <rect x={x} y={y - 20} width="11" height="20" rx="1" fill={PAL.white} />
    <path d={`M${x} ${y - 20}L${x + 2} ${y - 25}H${x + 9}L${x + 11} ${y - 20}Z`} fill={PAL.paperShade} />
    <rect x={x} y={y - 13} width="11" height="6" fill={PAL.blue} />
  </g>
);
/** A yoghurt cup, bottom at (x, y). */
const cup = (x: number, y: number, c: string) => (
  <g>
    <path d={`M${x} ${y - 13}H${x + 12}L${x + 10.5} ${y}H${x + 1.5}Z`} fill={c} />
    <rect x={x - 0.6} y={y - 15} width="13.2" height="3" rx="1.2" fill={PAL.white} />
  </g>
);

export default {
  // "het koelvak": the fridge shelf (the cold shelf in a shop) — an open shop fridge: a dark body with a
  // light strip on top, an ice-blue cold inside with three shelves of milk cartons, yoghurt cups and
  // cheese, and a strip of cold air (light blue lines) along the front edges. Open at the front, not the
  // closed door of "de koelcel". A thing: it stays still.
  'w.koelvak': () => (
    <g strokeLinejoin="round">
      <ellipse cx="60" cy="107" rx="50" ry="4" fill="#000" opacity=".14" />
      {/* The body */}
      <Shade color={PAL.slateDark} opacity={1} at={[114, 60, 10, 60]}>
        <rect x="12" y="10" width="96" height="96" rx="4" fill={PAL.slate} />
      </Shade>
      <rect x="16" y="13" width="88" height="7" rx="2" fill={PAL.ice} />
      {/* The cold inside */}
      <rect x="18" y="22" width="84" height="78" rx="2" fill="#e3f5ff" />
      <rect x="88" y="22" width="14" height="78" fill={PAL.ice} opacity=".6" />
      {/* Shelves with their front edges */}
      {[44, 68, 92].map((y) => (
        <g key={y}>
          <rect x="16" y={y} width="88" height="5" rx="1.5" fill={PAL.steel} />
          <path d={`M22 ${y + 8}H98`} stroke={PAL.ice} strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
        </g>
      ))}
      {/* Top shelf: milk */}
      {milk(22, 44)}{milk(36, 44)}{milk(50, 44)}{milk(66, 44)}{milk(80, 44)}
      {/* Middle shelf: yoghurt */}
      {cup(22, 68, PAL.red)}{cup(37, 68, PAL.red)}{cup(52, 68, PAL.leaf)}{cup(67, 68, PAL.leaf)}{cup(82, 68, PAL.purpleLight)}
      {/* Bottom shelf: cheese wedges and butter */}
      <path d="M22 92L34 80L46 92Z" fill={PAL.yellow} />
      <path d="M48 92L60 80L72 92Z" fill={PAL.yellow} />
      <rect x="76" y="82" width="20" height="10" rx="1.5" fill={PAL.yellowLight} />
      <rect x="76" y="82" width="20" height="3" fill={PAL.yellowShade} />
      <Shine d="M15 26V60" width={2.4} opacity={0.3} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
