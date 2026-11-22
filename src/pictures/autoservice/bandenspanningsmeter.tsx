import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine, r1 } from '../kit';

/** The darker side of the black parts. */
const INK = '#1b232a';

/** The dial: centre and radius, and the needle angle (degrees, 0 = right). */
const DCX = 76;
const DCY = 38;
const DR = 26;
const tick = (a: number, r0: number, r1v: number) => {
  const t = (a * Math.PI) / 180;
  return `M${r1(DCX + Math.cos(t) * r0)} ${r1(DCY + Math.sin(t) * r0)}L${r1(DCX + Math.cos(t) * r1v)} ${r1(DCY + Math.sin(t) * r1v)}`;
};
const TICKS = [150, 180, 210, 240, 270, 300, 330, 360, 390];
const NEEDLE = 300;

export default {
  // "de bandenspanningsmeter": the tyre pressure gauge — a big round dial gauge (black rubber ring, white
  // face with ticks, a red needle) on a short black hose whose steel chuck is pressed onto the valve of a tyre.
  'w.bandenspanningsmeter': () => {
    const nt = (NEEDLE * Math.PI) / 180;
    return (
      <g strokeLinejoin="round">
        <Ground cx={46} cy={104} rx={40} ry={4.5} />
        {/* The tyre (lower left): tread, sidewall, the rim inside */}
        <circle cx="38" cy="78" r="28" fill={PAL.slate} />
        <path d="M58 58A28 28 0 0 1 38 106A28 28 0 0 0 58 58Z" fill={INK} opacity=".5" />
        <circle cx="38" cy="78" r="17" fill={PAL.mist} />
        <circle cx="38.8" cy="78.6" r="13" fill={PAL.steel} />
        <circle cx="38" cy="78" r="6" fill={PAL.mist} />
        <Shine d="M16 70Q19 58 30 52" color={PAL.steel} width={3} opacity={0.9} />
        {/* The valve stem sticking out of the rim, top right */}
        <path d="M49 67L55 61" stroke={INK} strokeWidth="5.5" strokeLinecap="round" />
        {/* The short hose from the chuck up to the gauge */}
        <path d="M60 55Q66 50 60 44Q55 39 56 33" stroke={PAL.slateDark} strokeWidth="5" strokeLinecap="round" fill="none" />
        {/* The steel chuck pressed onto the valve */}
        <rect x="53" y="51" width="9" height="13" rx="3" fill={PAL.mist} transform="rotate(45 57.5 57.5)" />
        <rect x="57" y="51" width="5" height="13" rx="2.5" fill={PAL.steel} transform="rotate(45 57.5 57.5)" />
        {/* The gauge: black rubber ring, white face, ticks, needle */}
        <Shade color={INK} opacity={1} at={[DCX + 22, DCY + 10, 16, 30]}>
          <circle cx={DCX} cy={DCY} r={DR} fill={PAL.slateDark} />
        </Shade>
        <circle cx={DCX} cy={DCY} r={DR - 6} fill={PAL.white} />
        {TICKS.map((a) => (
          <path key={a} d={tick(a, DR - 10, DR - 7)} stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
        ))}
        {/* On the intro card the needle swings up from the lowest tick to its value */}
        <Move kind="turn" turn={TICKS[0] - NEEDLE} at={[DCX, DCY]}>
          <path d={`M${DCX} ${DCY}L${r1(DCX + Math.cos(nt) * (DR - 9))} ${r1(DCY + Math.sin(nt) * (DR - 9))}`} stroke={PAL.red} strokeWidth="3" strokeLinecap="round" />
        </Move>
        <circle cx={DCX} cy={DCY} r="3.5" fill={PAL.slateDark} />
        <Shine d={`M${DCX - DR + 3} ${DCY - 4}A${DR - 3} ${DR - 3} 0 0 1 ${DCX - 6} ${DCY - DR + 3}`} color={PAL.steel} width={2.6} opacity={0.9} />
        {/* The neck of the gauge where the hose comes in */}
        <rect x="52" y="27" width="8" height="10" rx="2" fill={PAL.steel} transform="rotate(-20 56 32)" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
