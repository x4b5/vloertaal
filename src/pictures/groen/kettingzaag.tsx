import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** The chain's cutters along the top (y 50) and the bottom (y 74) of the bar, every 8 units. */
const cutters = (y: number, x0: number, n: number) =>
  Array.from({ length: n }, (_, i) => `M${x0 + i * 8} ${y}h5v4.6h-5Z`).join('');

export default {
  // "de kettingzaag": the chainsaw — an orange motor body from the side with a dark wrap-around handle
  // on top and a loop handle at the back, and a long steel bar to the right with the dark chain and its
  // cutters running round it.
  // On the intro card the chain runs round the bar: the cutters on top move to the nose, the ones
  // underneath back (three rounds: the machine at work).
  'w.kettingzaag': () => {
    const id = `kettingzaag-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={58} cy={102} rx={48} ry={4} />
        {/* The bar: the dark chain round it, the steel inside */}
        <rect x="56" y="54" width="56" height="20" rx="10" fill={PAL.slateDark} />
        <rect x="56" y="58" width="50" height="12" rx="6" fill={PAL.mist} />
        <path d="M62 61H98" stroke={PAL.white} strokeWidth="2" opacity=".7" />
        {/* The cutters, clipped to the straight part of the bar so they run round it */}
        <clipPath id={id}>
          <rect x="58" y="44" width="46" height="40" />
        </clipPath>
        <g clipPath={`url(#${id})`} fill={PAL.slateDark}>
          <Move kind="from" dx={-20}>
            <path d={cutters(50.4, 38, 9)} />
          </Move>
          <Move kind="from" dx={20}>
            <path d={cutters(73, 58, 9)} />
          </Move>
        </g>
        {/* The rear loop handle */}
        <path d="M28 58H16Q12 58 12 62V82Q12 86 16 86H34" fill="none" stroke={PAL.slateDark} strokeWidth="7" />
        {/* The orange body and the dark cover over the chain wheel */}
        <Shade color={PAL.orangeShade} opacity={1} at={[64, 74, 10, 26]}>
          <rect x="24" y="44" width="40" height="46" rx="9" fill={PAL.orange} />
        </Shade>
        <rect x="48" y="52" width="16" height="26" rx="5" fill={PAL.slate} />
        <rect x="30" y="64" width="12" height="6" rx="3" fill={PAL.orangeShade} />
        <Shine d="M30 52V60" width={3.4} opacity={0.6} />
        {/* The wrap-around handle on top and the hand guard in front of it */}
        <path d="M30 46Q30 26 46 24H54Q60 26 60 44" fill="none" stroke={PAL.slateDark} strokeWidth="6" />
        <path d="M66 28L70 48" stroke={PAL.slate} strokeWidth="6" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
