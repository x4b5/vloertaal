import { useId } from 'react';
import type { LangCode } from '../i18n/types';

/**
 * Small flags for the language picker and the top bar, drawn inline (emoji flags do not show
 * on Windows, and the app loads no outside images). Simplified but recognisable at 40×28.
 * The owner's choices: Arabic → Arab League, Tigrinya → Eritrea, Persian → Iran, Dari →
 * Afghanistan's black-red-green tricolour without emblem (as the diaspora uses it), English
 * only → United Kingdom. Rounded corners and the thin edge come from the .flag class.
 */
export type FlagCode = LangCode | 'en';

const W = 40;
const H = 28;

/** Points of a five-pointed star, the first point at `turn` degrees (0 = right, 180 = left). */
function star(cx: number, cy: number, r: number, turn = -90) {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const a = ((turn + i * 36) * Math.PI) / 180;
    const k = i % 2 ? r * 0.382 : r;
    pts.push(`${(cx + k * Math.cos(a)).toFixed(2)},${(cy + k * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(' ');
}

/** Horizontal (rows) or vertical (cols) equal bands. */
const Bands = ({ colors, vertical = false }: { colors: string[]; vertical?: boolean }) => (
  <>
    {colors.map((c, i) =>
      vertical ? (
        <rect key={i} x={(W / colors.length) * i} y={0} width={W / colors.length + 0.05} height={H} fill={c} />
      ) : (
        <rect key={i} x={0} y={(H / colors.length) * i} width={W} height={H / colors.length + 0.05} fill={c} />
      ),
    )}
  </>
);

function UnionJack() {
  const id = useId().replace(/:/g, '');
  return (
    <svg x={0} y={0} width={W} height={H} viewBox="0 0 60 30" preserveAspectRatio="none">
      <clipPath id={`uj${id}`}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#uj${id})`} stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

const DRAW: Record<FlagCode, () => React.ReactNode> = {
  // Arab League: green field, a white crescent around the league's name (two short strokes).
  ar: () => (
    <>
      <rect width={W} height={H} fill="#007a3d" />
      <path d="M11.2 12.2 A8.9 8.9 0 0 0 28.8 12.2 A8.9 7.4 0 0 1 11.2 12.2 Z" fill="#fff" />
      <path d="M16.2 13.6 h7.6 M17.6 11.2 h4.8" stroke="#fff" strokeWidth={1.3} strokeLinecap="round" />
    </>
  ),
  // Eritrea: green and blue triangles, a red wedge from the hoist with a yellow olive wreath.
  ti: () => (
    <>
      <polygon points={`0,0 ${W},0 ${W},${H / 2}`} fill="#12ad2b" />
      <polygon points={`0,${H} ${W},${H} ${W},${H / 2}`} fill="#4189dd" />
      <polygon points={`0,0 ${W},${H / 2} 0,${H}`} fill="#ea0437" />
      <circle cx={9.5} cy={14} r={4.4} fill="none" stroke="#ffc726" strokeWidth={1.3} strokeDasharray="2.2 0.8" />
      <path d="M9.5 18 V10.6" stroke="#ffc726" strokeWidth={1.1} />
    </>
  ),
  // Iran: green, white, red; the red emblem in the middle and the white edging of the bands.
  fa: () => (
    <>
      <Bands colors={['#239f40', '#ffffff', '#da0000']} />
      <path d={`M0 ${H / 3 - 0.6} H${W} M0 ${(2 * H) / 3 + 0.6} H${W}`} stroke="#fff" strokeWidth={0.8} strokeDasharray="1.6 1" />
      <path d="M17.6 11.2 Q15.6 14 17.8 17 M22.4 11.2 Q24.4 14 22.2 17 M20 10.6 V17.2 M18.6 17.4 h2.8" stroke="#da0000" strokeWidth={1.1} fill="none" strokeLinecap="round" />
    </>
  ),
  // Afghanistan: black, red, green (vertical), no emblem.
  prs: () => <Bands vertical colors={['#000000', '#d32011', '#007a36']} />,
  uk: () => <Bands colors={['#0057b7', '#ffd700']} />,
  // Turkey: red field, white crescent and star (one point towards the hoist).
  tr: () => (
    <>
      <rect width={W} height={H} fill="#e30a17" />
      <circle cx={14.5} cy={14} r={7} fill="#fff" />
      <circle cx={16.3} cy={14} r={5.6} fill="#e30a17" />
      <polygon points={star(23, 14, 3.6, 180)} fill="#fff" />
    </>
  ),
  pl: () => <Bands colors={['#ffffff', '#dc143c']} />,
  ro: () => <Bands vertical colors={['#002b7f', '#fcd116', '#ce1126']} />,
  bg: () => <Bands colors={['#ffffff', '#00966e', '#d62612']} />,
  en: () => <UnionJack />,
};

export function Flag({ code, width = 40, className }: { code: FlagCode; width?: number; className?: string }) {
  return (
    <svg
      className={`flag ${className ?? ''}`}
      viewBox={`0 0 ${W} ${H}`}
      width={width}
      height={(width * H) / W}
      aria-hidden
      focusable="false"
    >
      {DRAW[code]()}
    </svg>
  );
}
