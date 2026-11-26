import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de pers": the press (a machine that presses clay or powder into a shape) — a heavy tile press: a
  // blue frame of two columns under a thick crown, the hydraulic cylinder in the crown, and the dark
  // steel upper block pressing down onto the mould with its layer of grey powder on the press table;
  // on the right the fresh, pale tile that came out, on the outfeed. On the intro card the upper block
  // comes down onto the mould (three rounds: the press at work, stroke after stroke).
  'w.pers': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={52} ry={4} />
      {/* The outfeed on the right, with the fresh tile */}
      <rect x="90" y="80" width="22" height="5" rx="1.6" fill={PAL.steel} />
      <path d="M96 85V104" stroke={PAL.slate} strokeWidth="4" />
      <path d="M92 79L95 75H113L110 79Z" fill={PAL.paper} />
      <rect x="92" y="78.4" width="18" height="2.6" rx="1" fill={PAL.mist} />
      {/* The press table */}
      <path d="M14 76L20 70H96L90 76Z" fill={PAL.mist} />
      <path d="M90 76L96 70V98L90 104Z" fill={PAL.slateDark} />
      <rect x="14" y="76" width="76" height="28" rx="2" fill={PAL.slate} />
      {/* The two columns */}
      <rect x="18" y="20" width="10" height="56" fill={PAL.blue} />
      <rect x="25" y="20" width="3" height="56" fill={PAL.blueShade} />
      <rect x="76" y="20" width="10" height="56" fill={PAL.blue} />
      <rect x="83" y="20" width="3" height="56" fill={PAL.blueShade} />
      {/* The mould with its layer of grey powder */}
      <rect x="32" y="64" width="40" height="12" rx="1.6" fill={PAL.slateDark} />
      <rect x="35" y="64" width="34" height="5" rx="1" fill={PAL.line} />
      {/* The upper block and its piston rod: they come down */}
      <Move kind="from" dy={-22}>
        <rect x="47" y="24" width="10" height="20" fill={PAL.mist} />
        <Shade color={PAL.slateDark} opacity={1} at={[82, 54, 10, 14]}>
          <rect x="30" y="42" width="44" height="22" rx="2" fill={PAL.steel} />
        </Shade>
        <path d="M30 58H74" stroke={PAL.slate} strokeWidth="2" />
        <Shine d="M34 46H52" width={2.6} opacity={0.5} />
      </Move>
      {/* The cylinder and the crown */}
      <rect x="42" y="22" width="20" height="10" rx="2" fill={PAL.slate} />
      <path d="M12 12L18 6H98L92 12Z" fill={PAL.blueLight} />
      <path d="M92 12L98 6V20L92 26Z" fill={PAL.navy} />
      <rect x="12" y="12" width="80" height="14" rx="2" fill={PAL.blue} />
      <rect x="76" y="12" width="16" height="14" rx="2" fill={PAL.blueShade} />
      <Shine d="M17 17H42" width={2.6} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
