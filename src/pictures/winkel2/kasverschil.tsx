import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The beam's tilt: the coins' side is heavier. */
const TILT = -14;

export default {
  // "het kasverschil": the cash difference (more or less money in the till than there should be) — a
  // balance that does not stay level: on the low left pan a stack of gold coins and a banknote, on the
  // high right pan the till's receipt (the total it should be). Money that does not match the count.
  // Money as a noun: it stays still.
  'w.kasverschil': () => {
    const rad = (TILT * Math.PI) / 180;
    const end = (s: number): [number, number] => [Math.round((60 + s * 38 * Math.cos(rad)) * 10) / 10, Math.round((34 + s * 38 * Math.sin(rad)) * 10) / 10];
    const [lx, ly] = end(-1);
    const [rx, ry] = end(1);
    const pan = (x: number, y: number) => (
      <g>
        <path d={`M${x} ${y}L${x - 15} ${y + 26}M${x} ${y}L${x + 15} ${y + 26}`} stroke={PAL.steel} strokeWidth="1.8" />
        <path d={`M${x - 20} ${y + 26}H${x + 20}Q${x + 18} ${y + 34} ${x} ${y + 34}Q${x - 18} ${y + 34} ${x - 20} ${y + 26}Z`} fill={PAL.slate} />
      </g>
    );
    return (
      <g strokeLinejoin="round">
        <Ground cx={60} cy={105} rx={26} ry={4} />
        {/* The stand */}
        <path d="M44 104H76L70 96H50Z" fill={PAL.slate} />
        <rect x="57" y="34" width="6" height="64" rx="2" fill={PAL.steel} />
        {/* The beam */}
        <path d={`M${lx} ${ly}L${rx} ${ry}`} stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
        <circle cx="60" cy="34" r="5" fill={PAL.yellow} />
        {/* Left, low: the money */}
        {pan(lx, ly)}
        <rect x={lx - 16} y={ly + 14} width="22" height="12" rx="1.6" fill={PAL.green} transform={`rotate(-8 ${lx - 5} ${ly + 20})`} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <ellipse cx={lx + 6} cy={ly + 24 - i * 4} rx="9" ry="3.4" fill={PAL.yellowShade} />
            <ellipse cx={lx + 6} cy={ly + 22.6 - i * 4} rx="9" ry="3.4" fill={PAL.yellow} />
          </g>
        ))}
        {/* Right, high: the receipt */}
        {pan(rx, ry)}
        <Shade color={PAL.paperShade} opacity={1} at={[rx + 12, ry + 10, 4, 20]}>
          <path d={`M${rx - 9} ${ry + 26}V${ry - 2}H${rx + 9}V${ry + 26}Z`} fill={PAL.white} />
        </Shade>
        <path d={`M${rx - 5} ${ry + 4}H${rx + 5}M${rx - 5} ${ry + 10}H${rx + 3}M${rx - 5} ${ry + 16}H${rx + 5}`} stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
        <Shine d="M58.6 46V80" width={1.6} opacity={0.6} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
