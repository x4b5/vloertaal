import type { JSX } from 'react';
import { Ground, Motion, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de diarree": the diarrhoea — a toddler with a sick face holds its tummy with both hands, rumble
  // lines on its belly, and hurries to the toilet next to it.
  'w.diarree': () => {
    const [s, sh] = SKIN.bram;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={60} cy={105} rx={52} ry={4} />
        {/* The toilet: tank, bowl, seat, foot */}
        <rect x="88" y="34" width="20" height="34" rx="4" fill={PAL.paperShade} />
        <rect x="88" y="34" width="14" height="34" rx="4" fill={PAL.white} />
        <path d="M66 66H108V74Q108 90 92 92H86Q70 90 66 74Z" fill={PAL.white} />
        <path d="M98 66H108V74Q108 88 98 91Z" fill={PAL.paperShade} />
        <rect x="64" y="62" width="46" height="6" rx="3" fill={PAL.mist} />
        <path d="M80 92H98L100 104H78Z" fill={PAL.paperShade} />
        {/* The toddler: legs pressed together, body, hands on the tummy */}
        <path d="M30 88V102M38 88V102" stroke={PAL.navy} strokeWidth="7" />
        <ellipse cx="28" cy="103" rx="5" ry="2.8" fill={PAL.slateDark} />
        <ellipse cx="40" cy="103" rx="5" ry="2.8" fill={PAL.slateDark} />
        <Shade color={PAL.purpleShade} opacity={1} at={[52, 76, 6, 18]}>
          <rect x="20" y="58" width="28" height="34" rx="11" fill={PAL.purpleLight} />
        </Shade>
        <path d="M22 66Q22 80 30 80M46 66Q46 80 38 80" fill="none" stroke={PAL.purpleLight} strokeWidth="7" />
        <ellipse cx="34" cy="80" rx="8" ry="4.6" fill={s} />
        <path d="M26 74L30 71L34 74L38 71L42 74" fill="none" stroke={PAL.purple} strokeWidth="2" />
        {/* The head, sick: worried brows, wavy mouth, pale-green cheeks */}
        <circle cx="34" cy="38" r="17" fill={PAL.brown} />
        <circle cx="18" cy="42" r="3.8" fill={s} />
        <circle cx="50" cy="42" r="3.8" fill={sh} />
        <Shade color={sh} opacity={1} at={[50, 44, 6, 18]}>
          <ellipse cx="34" cy="42" rx="15" ry="14.6" fill={s} />
        </Shade>
        <path d="M19 38Q20 24 34 24Q48 24 49 38Q42 30 34 31Q26 32 19 38Z" fill={PAL.brown} />
        <path d="M24 37L30 35M44 37L38 35" stroke={PAL.ink} strokeWidth="1.8" />
        <ellipse cx="28" cy="42" rx="1.8" ry="2.2" fill={PAL.ink} />
        <ellipse cx="40" cy="42" rx="1.8" ry="2.2" fill={PAL.ink} />
        <path d="M28 51Q31 48 34 51Q37 54 40 51" fill="none" stroke={PAL.mouth} strokeWidth="2" />
        <circle cx="24" cy="48" r="3" fill={PAL.lime} opacity=".7" />
        <circle cx="44" cy="48" r="3" fill={PAL.lime} opacity=".7" />
        {/* Hurry lines behind it */}
        <Motion x={12} y={70} dir={180} spread={50} n={3} len={6} gap={2} />
        <Shine d="M92 40V56" width={2.6} opacity={0.9} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
