import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "het perron": the platform (where you get on the train) — a long grey platform with the yellow
  // safety line along its edge, the track right next to it below, a green roof on two posts and a
  // blue sign with a white train front hanging from it; a traveller waits with her bag.
  'w.perron': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The track */}
      <path d="M14 106V101M30 106V101M46 106V101M62 106V101M78 106V101M94 106V101M110 106V101" stroke={PAL.wood} strokeWidth="5" />
      <path d="M6 100.5H114" stroke={PAL.steel} strokeWidth="3.4" />
      {/* The platform: its top and its front edge */}
      <path d="M6 78H114V92H6Z" fill={PAL.steel} />
      <path d="M6 64H114V80H6Z" fill={PAL.mist} />
      <path d="M8 75H112" stroke={PAL.yellow} strokeWidth="3" />
      <rect x="6" y="80" width="108" height="3" fill={PAL.slate} opacity=".35" />
      {/* The roof on its posts */}
      <rect x="27" y="30" width="6" height="38" rx="2" fill={PAL.slate} />
      <rect x="87" y="30" width="6" height="38" rx="2" fill={PAL.slate} />
      <Shade color={PAL.greenShade} opacity={1} at={[118, 26, 18, 14]}>
        <path d="M10 30L18 18H102L110 30Z" fill={PAL.green} />
      </Shade>
      <rect x="10" y="29" width="100" height="5" rx="2" fill={PAL.greenShade} />
      <Shine d="M22 22H50" width={2.6} opacity={0.5} />
      {/* The hanging sign */}
      <path d="M52 34V40M68 34V40" stroke={PAL.slate} strokeWidth="2" />
      <rect x="46" y="40" width="28" height="20" rx="4" fill={PAL.skyShade} transform="translate(0 2)" />
      <rect x="46" y="40" width="28" height="20" rx="4" fill={PAL.sky} />
      <path d="M54 55V47Q54 44 57 44H63Q66 44 66 47V55Z" fill={PAL.white} />
      <rect x="56" y="46.5" width="8" height="4" rx="1.2" fill={PAL.sky} />
      {/* The traveller and her bag */}
      <rect x="92" y="62" width="12" height="10" rx="3" fill={PAL.navy} />
      <path d="M84 72V58Q84 50 90 50Q96 50 96 58V72Z" fill={PAL.purple} />
      <circle cx="90" cy="44" r="6.4" fill="#b97a52" />
      <path d="M83.4 44Q83 36.6 90 36.6Q97 36.6 96.6 44Q93 39.6 83.4 44Z" fill={PAL.ink} />
      <path d="M86 72V75M94 72V75" stroke={PAL.navyShade} strokeWidth="4" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
