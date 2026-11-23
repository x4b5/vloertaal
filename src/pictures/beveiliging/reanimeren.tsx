import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, Motion, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "reanimeren": to do CPR (to press on the chest to save a life) — Henk lies on his back on the floor
  // (seen from the side, eyes closed); Bram kneels behind him, leans over him and presses with straight
  // arms and both hands, one on the other, in the middle of his chest; short lines show the push.
  // On the intro card Bram's upper body pushes down onto the chest: three rounds (the pressing is done
  // over and over).
  'w.reanimeren': () => {
    const [s, sh] = SKIN.bram;
    return (
      <g strokeLinejoin="round">
        <Ground cx={62} cy={104} rx={52} ry={4} />
        {/* Bram, kneeling behind him: his upper body, arms straight down, hands on Henk's chest */}
        <Move kind="fast" dy={-20}>
          <Shade color={PAL.orangeShade} opacity={1} at={[84, 60, 9, 30]}>
            <rect x="46" y="38" width="34" height="42" rx="11" fill={PAL.orange} />
          </Shade>
          <path d="M52 42V80M74 42V80" stroke="#eef5f7" strokeWidth="3.4" />
          <g transform="translate(63 40) scale(.42) translate(-60 -96)">
            <CastHead who="bram" expr="neutral" gaze={[0, 1]} bold />
          </g>
          <path d="M51 48L60 72M75 48L66 72" stroke={PAL.blue} strokeWidth="9" strokeLinecap="round" />
          <path d="M75 48L66 72" stroke={PAL.blueShade} strokeWidth="9" strokeLinecap="round" />
          <rect x="50" y="70" width="26" height="7" rx="3.5" fill={s} />
          <rect x="48" y="75" width="26" height="6" rx="3" fill={s} />
          <path d="M54 73.5H66" stroke={sh} strokeWidth="1.4" strokeLinecap="round" />
        </Move>
        {/* Henk's legs, toes up */}
        <rect x="82" y="86" width="26" height="15" rx="7" fill={PAL.navy} />
        <rect x="82" y="95" width="26" height="6" rx="3" fill={PAL.navyShade} />
        <rect x="102" y="76" width="10" height="25" rx="5" fill={PAL.slateDark} />
        {/* His chest */}
        <Shade color={PAL.purpleShade} opacity={1} at={[62, 108, 50, 10]}>
          <rect x="38" y="78" width="52" height="24" rx="11" fill={PAL.purple} />
        </Shade>
        <Shine d="M76 82H86" width={3} opacity={0.45} />
        {/* His head, lying back, eyes closed */}
        <g transform="translate(44 90) rotate(-90) scale(.56) translate(-60 -96)">
          <CastHead who="henk" emotion="rest" gaze={[0, 0]} />
        </g>
        <Motion x={62} y={80} dir={200} spread={30} n={2} len={7} gap={17} color={PAL.line} width={3} />
        <Motion x={62} y={80} dir={-20} spread={30} n={2} len={7} gap={17} color={PAL.line} width={3} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
