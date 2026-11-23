import type { JSX } from 'react';
import { ExclaimMark, Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het virus": the virus (a program that harms your computer) — an open laptop; on its dark screen a
  // red, spiky virus with mean little eyes, and a yellow warning sign in the corner of the screen.
  'w.virus': () => {
    const spikes = Array.from({ length: 10 }, (_, i) => (i * Math.PI) / 5);
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={60} cy={104} rx={50} ry={4} />
        {/* The laptop: lid and screen */}
        <Shade color={PAL.slateDark} opacity={1} at={[110, 50, 10, 40]}>
          <rect x="16" y="14" width="88" height="66" rx="6" fill={PAL.slate} />
        </Shade>
        <rect x="22" y="20" width="76" height="54" rx="3" fill={PAL.navyShade} />
        {/* The virus */}
        {spikes.map((a, i) => (
          <g key={i}>
            <path d={`M${60 + Math.cos(a) * 12} ${48 + Math.sin(a) * 12}L${60 + Math.cos(a) * 20} ${48 + Math.sin(a) * 20}`} stroke={PAL.red} strokeWidth="3.4" />
            <circle cx={60 + Math.cos(a) * 21} cy={48 + Math.sin(a) * 21} r="3.4" fill={PAL.red} />
          </g>
        ))}
        <Shade color={PAL.redShade} opacity={1} at={[76, 52, 8, 16]}>
          <circle cx="60" cy="48" r="15" fill={PAL.red} />
        </Shade>
        <path d="M51 42L57 45M69 42L63 45" stroke={PAL.ink} strokeWidth="2.4" />
        <circle cx="54.5" cy="48" r="2.8" fill={PAL.white} />
        <circle cx="65.5" cy="48" r="2.8" fill={PAL.white} />
        <circle cx="55" cy="48.6" r="1.4" fill={PAL.ink} />
        <circle cx="65" cy="48.6" r="1.4" fill={PAL.ink} />
        <path d="M55 56Q60 53 65 56" fill="none" stroke={PAL.ink} strokeWidth="2" />
        <Shine d="M52 38Q54 35 58 34" width={2.6} opacity={0.6} />
        {/* The warning sign */}
        <path d="M88 24L97 40H79Z" fill={PAL.yellow} />
        <ExclaimMark x={88} y={34} size={10} color={PAL.ink} />
        {/* The keyboard base */}
        <path d="M10 82H110L104 96H16Z" fill={PAL.mist} />
        <path d="M16 96H104L103 99H17Z" fill={PAL.steel} />
        <path d="M22 86H98M26 91H94" stroke={PAL.steel} strokeWidth="2.2" strokeDasharray="4 3" />
        <rect x="16" y="78" width="88" height="5" rx="2" fill={PAL.slateDark} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
