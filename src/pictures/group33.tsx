import type { JSX } from 'react';
import { Calendar, Ground, PAL, Shade, Shine } from './kit';

/**
 * Word pictures, group 33 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Five words that were taught without a picture (`picture: false`) but are one plain thing to
 * draw (the owner's request, 2 November 2026: a picture where it helps, kept simple; no picture
 * where a drawing would be complex or could be mistaken for another word in the same lesson).
 */

/** The outline of a cog: `teeth` square teeth around (cx, cy). */
function cogPath(cx: number, cy: number, outer: number, inner: number, teeth: number): string {
  const pts: string[] = [];
  const step = (Math.PI * 2) / teeth;
  for (let k = 0; k < teeth; k++) {
    const a = k * step - Math.PI / 2;
    const corners = [
      [a - step * 0.25, inner],
      [a - step * 0.17, outer],
      [a + step * 0.17, outer],
      [a + step * 0.25, inner],
    ] as const;
    for (const [ang, r] of corners) pts.push(`${(cx + Math.cos(ang) * r).toFixed(1)} ${(cy + Math.sin(ang) * r).toFixed(1)}`);
  }
  return `M${pts.join('L')}Z`;
}

export default {
  // "de deur": the door — a plain green door, closed, in its frame, with a yellow handle.
  // (The word's id is "bijzonderheid": the word became "de deur", the id stayed.)
  'w.bijzonderheid': () => (
    <g>
      <Ground cx={60} cy={106} rx={36} ry={4} />
      <rect x="28" y="12" width="64" height="94" rx="4" fill={PAL.mist} />
      <Shade color={PAL.greenShade} opacity={1} at={[88, 60, 10, 52]}>
        <rect x="35" y="19" width="50" height="87" rx="2" fill={PAL.green} />
      </Shade>
      <rect x="42" y="27" width="36" height="30" rx="3" fill={PAL.greenShade} opacity=".45" />
      <rect x="42" y="65" width="36" height="34" rx="3" fill={PAL.greenShade} opacity=".45" />
      <rect x="68" y="58" width="13" height="6" rx="3" fill={PAL.yellow} />
      <circle cx="70" cy="61" r="4" fill={PAL.yellowShade} />
      <Shine d="M40 26V52" opacity={0.35} />
    </g>
  ),

  // "op slot": locked — a closed padlock: the steel shackle shut into a yellow body with a keyhole.
  'w.opslot': () => (
    <g>
      <path d="M40 60V42A20 20 0 0 1 80 42V60" fill="none" stroke={PAL.steel} strokeWidth="12" strokeLinecap="round" />
      <path d="M45 41A15 15 0 0 1 55 28" fill="none" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" opacity=".55" />
      <rect x="22" y="58" width="76" height="48" rx="11" fill={PAL.yellowShade} />
      <Shade color={PAL.yellowShade} opacity={0.9} at={[100, 80, 14, 30]}>
        <rect x="22" y="54" width="76" height="48" rx="11" fill={PAL.yellow} />
      </Shade>
      <circle cx="60" cy="72" r="7.5" fill={PAL.slate} />
      <path d="M56.5 75H63.5L66 92H54Z" fill={PAL.slate} />
      <Shine d="M30 64V90" color={PAL.yellowShine} opacity={0.8} />
    </g>
  ),

  // "het onderdeel": the part (of a car or machine) — one grey cog with a hole in the middle.
  'w.onderdeel': () => (
    <g>
      <path d={cogPath(61, 63, 46, 36, 10)} fill={PAL.slate} />
      <Shade color={PAL.slate} opacity={0.75} at={[100, 70, 20, 44]}>
        <path d={cogPath(60, 60, 46, 36, 10)} fill={PAL.steel} />
      </Shade>
      <circle cx="60" cy="60" r="17" fill={PAL.mist} />
      <circle cx="60" cy="60" r="9" fill={PAL.slate} />
      <Shine d="M34 46A30 30 0 0 1 46 33" opacity={0.55} />
    </g>
  ),

  // "het cijfer": the mark, the grade — a test paper with a big red 8 on it.
  'w.cijfer': () => (
    <g>
      <rect x="24" y="16" width="72" height="92" rx="5" fill={PAL.paperShade} />
      <rect x="24" y="12" width="72" height="92" rx="5" fill={PAL.white} />
      <path d="M34 26H66M34 35H58" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
      <circle cx="62" cy="55" r="11" fill="none" stroke={PAL.red} strokeWidth="7" />
      <circle cx="62" cy="80" r="13.5" fill="none" stroke={PAL.red} strokeWidth="7" />
    </g>
  ),

  // "de houdbaarheidsdatum": the best-before date — a carton of milk with a small calendar
  // (one day marked) in front of it.
  'w.houdbaarheidsdatum': () => (
    <g>
      <Ground cx={56} cy={106} rx={40} ry={4} />
      <rect x="32" y="12" width="36" height="12" rx="2" fill={PAL.paperShade} />
      <path d="M20 40L32 22H68L80 40Z" fill={PAL.mist} />
      <Shade color={PAL.paperShade} opacity={1} at={[82, 72, 12, 40]}>
        <rect x="20" y="40" width="60" height="66" rx="3" fill={PAL.paper} />
      </Shade>
      <rect x="20" y="52" width="60" height="18" fill={PAL.sky} />
      <Calendar x={60} y={62} w={44} h={42} mark={6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
