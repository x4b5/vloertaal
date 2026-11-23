import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** A brush roller (x, y, w, h): blue bristles in rows, a darker side, along its length. */
const brush = (x: number, y: number, w: number, h: number, upright: boolean) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={Math.min(w, h) / 2} fill={PAL.blue} />
    {upright ? (
      <rect x={x + w * 0.6} y={y} width={w * 0.4} height={h} rx={w * 0.2} fill={PAL.blueShade} />
    ) : (
      <rect x={x} y={y + h * 0.6} width={w} height={h * 0.4} rx={h * 0.2} fill={PAL.blueShade} />
    )}
    <path
      d={upright
        ? Array.from({ length: Math.floor(h / 6) }, (_, i) => `M${x + 3} ${y + 4 + i * 6}H${x + w - 3}`).join('')
        : Array.from({ length: Math.floor(w / 6) }, (_, i) => `M${x + 4 + i * 6} ${y + 3}V${y + h - 3}`).join('')}
      stroke={PAL.blueLight}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </g>
);

export default {
  // "de laarzenwasser": the boot washer (brushes that clean your boots) — a steel trough with round blue
  // brush rollers (one under the boot, one upright on each side) and a rail to hold; a white rubber boot is scrubbed
  // between them, water splashing up.
  // On the intro card the boot moves along over the brushes: three rounds (back and forth, as you scrub).
  'w.laarzenwasser': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={52} ry={4} />
      {/* The rail */}
      <path d="M100 98V30Q100 22 92 22H70" fill="none" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      {/* The trough */}
      <rect x="10" y="78" width="98" height="26" rx="5" fill={PAL.steel} />
      <rect x="10" y="78" width="98" height="6" rx="3" fill={PAL.mist} />
      {/* The back brush, upright behind the boot */}
      {brush(24, 34, 16, 50, true)}
      {/* The boot */}
      <Move kind="from" dx={-24}>
        <Shade color={PAL.paperShade} opacity={1} at={[84, 60, 10, 40]}>
          <path d="M44 30H74V70Q86 72 88 80V88H44Z" fill={PAL.white} />
        </Shade>
        <rect x="42" y="26" width="34" height="8" rx="3" fill={PAL.mist} />
        <rect x="44" y="84" width="44" height="6" rx="2" fill={PAL.slate} />
        <Shine d="M50 38V62" width={3} opacity={0.9} color={PAL.mist} />
      </Move>
      {/* The brush under the boot and the front brush */}
      {brush(30, 88, 66, 12, false)}
      {brush(86, 40, 16, 50, true)}
      {/* Water splashing */}
      <g fill={PAL.sky}>
        <circle cx="26" cy="54" r="3" />
        <circle cx="18" cy="62" r="2.4" />
        <circle cx="94" cy="64" r="3" />
        <circle cx="104" cy="56" r="2.4" />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
