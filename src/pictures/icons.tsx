import type { JSX } from 'react';
import { Ground, PAL, SKIN, Shade, Shine } from './kit';
import unitBanners from './units';

/** Unit icons that no word picture covers (abstract topics). Same style as the word pictures. */
const iconPictures: Record<string, () => JSX.Element> = {
  // Asking for help: a raised hand and a question bubble (the old unit banner).
  'i.help': unitBanners['u.help'],
  // Rules and rights: a balance scale.
  'i.rights': () => (
    <g>
      <Ground cy={108} rx={30} ry={4.5} />
      <rect x="36" y="96" width="48" height="10" rx="5" fill={PAL.slate} />
      <Shade at={[66, 20, 6, 80]}>
        <rect x="56" y="24" width="8" height="74" rx="4" fill={PAL.steel} />
      </Shade>
      <rect x="16" y="28" width="88" height="8" rx="4" fill={PAL.yellow} />
      <rect x="16" y="28" width="88" height="3" rx="1.5" fill={PAL.yellowLight} />
      <circle cx="60" cy="24" r="8" fill={PAL.yellowShade} />
      <path d="M24 36L12 68M24 36L36 68M96 36L84 68M96 36L108 68" stroke={PAL.line} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 68H40C40 80 32 86 24 86C16 86 8 80 8 68Z" fill={PAL.yellow} />
      <path d="M80 68H112C112 80 104 86 96 86C88 86 80 80 80 68Z" fill={PAL.yellow} />
      <path d="M26 86C33 85 40 79 40 68H34C34 77 30 83 26 86Z M98 86C105 85 112 79 112 68H106C106 77 102 83 98 86Z" fill={PAL.yellowShade} />
      <Shine d="M13 72Q15 78 20 81" color={PAL.yellowShine} width={3} opacity={1} />
      <Shine d="M85 72Q87 78 92 81" color={PAL.yellowShine} width={3} opacity={1} />
    </g>
  ),
  // Working together (u.teamwork): three hands stacked, from both sides. A calmer take on the
  // word picture "samen" (four hands and sparkles), which was busy at 32-44 px: fewer, bigger
  // hands, no sparkles.
  'i.teamwork': () => {
    const hand = (y: number, fromLeft: boolean, skin: [string, string], sleeve: [string, string]) => (
      <g transform={fromLeft ? undefined : 'translate(120 0) scale(-1 1)'}>
        <rect x="2" y={y - 12} width="36" height="24" rx="7" fill={sleeve[0]} />
        <rect x="31" y={y - 12.5} width="10" height="25" rx="5" fill={sleeve[1]} />
        <Shade color={skin[1]} opacity={1} at={[64, y + 12, 44, 5]}>
          <rect x="38" y={y - 10} width="58" height="20" rx="10" fill={skin[0]} />
        </Shade>
        <rect x="41" y={y - 16} width="19" height="9" rx="4.5" fill={skin[0]} transform={`rotate(-14 41 ${y - 11})`} />
      </g>
    );
    return (
      <g>
        {hand(84, true, SKIN.jada, [PAL.sky, PAL.skyShade])}
        {hand(60, false, SKIN.henk, [PAL.navy, PAL.navyShade])}
        {hand(36, true, SKIN.amina, [PAL.green, PAL.greenShade])}
      </g>
    );
  },
};

export default iconPictures;
