import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het notitieboekje": the notebook — a small notebook with a navy cover lying open, its spiral in
  // the middle: scribble lines on the left page, and on the right page a little pencil drawing of a
  // machine (a box with a wheel and a button) above two lines; a blue pen lies across it. No text.
  'w.notitieboekje': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <g transform="rotate(-6 60 62)">
        {/* The cover, under the pages */}
        <rect x="10" y="28" width="100" height="72" rx="5" fill={PAL.navyShade} transform="translate(0 4)" />
        <rect x="10" y="28" width="100" height="72" rx="5" fill={PAL.navy} />
        {/* The two pages */}
        <rect x="14" y="30" width="44" height="66" rx="2" fill={PAL.white} />
        <rect x="62" y="30" width="44" height="66" rx="2" fill={PAL.paper} />
        <rect x="92" y="30" width="14" height="66" rx="2" fill={PAL.paperShade} opacity=".6" />
        {/* Scribble lines on the left page */}
        <path d="M20 42Q24 39 28 42T36 42T44 42T50 41M20 52Q24 49 28 52T36 52T44 52M20 62Q24 59 28 62T36 62T44 62T52 61M20 72Q24 69 28 72T36 72M20 82Q24 79 28 82T36 82T44 82" fill="none" stroke={PAL.line} strokeWidth="1.8" />
        {/* The little machine drawing on the right page */}
        <rect x="68" y="38" width="22" height="18" rx="2" fill="none" stroke={PAL.blue} strokeWidth="2" />
        <circle cx="96" cy="50" r="6" fill="none" stroke={PAL.blue} strokeWidth="2" />
        <path d="M90 50H90.5M72 44H80M84 46V46.5" stroke={PAL.blue} strokeWidth="2" />
        <path d="M68 66H100M68 74H92M68 82H98" stroke={PAL.line} strokeWidth="1.8" />
        {/* The spiral */}
        {[36, 46, 56, 66, 76, 86].map((y) => (
          <rect key={y} x="55" y={y - 2} width="10" height="4" rx="2" fill={PAL.steel} />
        ))}
        <Shine d="M18 36H34" width={2.4} opacity={0.6} color={PAL.paperShade} />
      </g>
      {/* The pen */}
      <g transform="rotate(-38 84 76)">
        <rect x="58" y="72" width="50" height="8" rx="4" fill={PAL.blue} />
        <rect x="58" y="76" width="50" height="4" rx="2" fill={PAL.blueShade} />
        <path d="M58 72L50 76L58 80Z" fill={PAL.paperShade} />
        <rect x="94" y="70" width="4" height="12" rx="1.6" fill={PAL.slate} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
