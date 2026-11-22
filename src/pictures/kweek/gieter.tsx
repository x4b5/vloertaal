import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de gieter": the watering can — a green can with a round body, a big loop handle over the top, a
  // long spout up to the right ending in a round sprinkler head (the rose), three blue drops falling from it.
  'w.gieter': () => (
    <g strokeLinejoin="round">
      <Ground cx={50} cy={104} rx={36} ry={4} />
      {/* The long spout, from the bottom of the body up to the rose */}
      <path d="M60 88L88 46" stroke={PAL.greenShade} strokeWidth="7" strokeLinecap="round" />
      <path d="M59 84L84 47" stroke={PAL.green} strokeWidth="3" strokeLinecap="round" />
      {/* The rose: a cone and its round face */}
      <path d="M84 50L94 36L102 46L90 54Z" fill={PAL.greenShade} />
      <ellipse cx="98" cy="41" rx="7" ry="9" transform="rotate(38 98 41)" fill={PAL.lime} />
      <g fill={PAL.green}>
        <circle cx="96" cy="39" r="1.3" />
        <circle cx="100" cy="42" r="1.3" />
        <circle cx="97" cy="44" r="1.3" />
        <circle cx="99" cy="38" r="1.3" />
      </g>
      {/* The loop handle over the top */}
      <path d="M22 60Q20 26 50 28Q70 30 68 52" fill="none" stroke={PAL.greenShade} strokeWidth="7" strokeLinecap="round" />
      {/* The body */}
      <Shade color={PAL.greenShade} opacity={1} at={[76, 80, 16, 30]}>
        <path d="M16 56Q16 50 22 50H64Q70 50 70 56V98Q70 104 64 104H22Q16 104 16 98Z" fill={PAL.green} />
      </Shade>
      <ellipse cx="43" cy="52" rx="27" ry="5" fill={PAL.leaf} />
      <ellipse cx="34" cy="52" rx="9" ry="2.4" fill={PAL.greenShade} />
      <Shine d="M22 62V90" width={3.6} opacity={0.6} />
      {/* The drops */}
      {[[104, 58], [96, 66], [108, 74]].map(([x, y]) => (
        <path key={x} d={`M${x} ${y}Q${x + 4} ${y + 6} ${x + 4} ${y + 8}A4 4 0 0 1 ${x - 4} ${y + 8}Q${x - 4} ${y + 6} ${x} ${y}Z`} fill={PAL.sky} />
      ))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
