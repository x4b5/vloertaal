import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, PAL, SKIN, Shade, Shine } from '../kit';

/** Bram's head scale and where his neck sits; the cast head's own box has its neck base at (60, 96). */
const S = 0.5;
const NX = 42;
const NY = 50;
/** A point of the cast head's own box, on the card. */
const hp = (x: number, y: number): [number, number] => [NX + (x - 60) * S, NY + (y - 96) * S];

export default {
  // "de operator": the operator — Bram in navy work clothes with reflective bands, safety glasses and orange
  // ear defenders over his hard hat, holding a tablet; behind him a steel tank with a pipe coming out of it.
  'w.operator': () => {
    const [el, ey] = hp(37, 60);
    const [er] = hp(83, 60);
    const [gx, gy] = hp(60, 58);
    const [s, sh] = SKIN.bram;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={64} cy={104} rx={48} ry={4} />
        {/* The tank, with the pipe from its side running left and down to the floor */}
        <path d="M14 104V44Q14 38 20 38H78" fill="none" stroke={PAL.steel} strokeWidth="9" />
        <path d="M14 104V44Q14 38 20 38H78" fill="none" stroke={PAL.mist} strokeWidth="3" opacity=".7" transform="translate(-1.5 -1.5)" />
        <rect x="70" y="32" width="8" height="12" rx="1.5" fill={PAL.slate} />
        <Shade color={PAL.steel} opacity={1} at={[110, 60, 12, 60]}>
          <path d="M76 26Q76 18 92 18Q108 18 108 26V100Q108 104 92 104Q76 104 76 100Z" fill={PAL.mist} />
        </Shade>
        <path d="M76 26Q92 32 108 26" fill="none" stroke={PAL.steel} strokeWidth="2" />
        <path d="M76 66Q92 72 108 66" fill="none" stroke={PAL.steel} strokeWidth="2" />
        <Shine d="M81 30V58" width={3} opacity={0.8} />
        {/* Bram: legs, boots, body in navy with reflective bands */}
        <path d="M36 78L35 101M48 78L49 101" stroke={PAL.navy} strokeWidth="9.5" />
        <path d="M48 78L49 101" stroke={PAL.navyShade} strokeWidth="9.5" />
        <path d="M30.5 94H39.5M44.5 94H53.5" stroke="#eef5f7" strokeWidth="3" strokeLinecap="butt" />
        <ellipse cx="33" cy="102.5" rx="7" ry="3.4" fill={PAL.slateDark} />
        <ellipse cx="51" cy="102.5" rx="7" ry="3.4" fill={PAL.slateDark} />
        <Shade color={PAL.navyShade} opacity={1} at={[58, 66, 8, 26]}>
          <rect x="28" y="48" width="28" height="35" rx="9" fill={PAL.navy} />
        </Shade>
        <path d="M28.5 72H55.5" stroke="#eef5f7" strokeWidth="3.4" strokeLinecap="butt" />
        {/* The tablet, held in front of him with both hands */}
        <path d="M32 58L48 66" stroke="#2d5a92" strokeWidth="7" />
        <rect x="45" y="54" width="20" height="26" rx="3" fill={PAL.slate} transform="rotate(8 55 67)" />
        <rect x="48" y="57.5" width="14" height="19" rx="1.5" fill={PAL.ice} transform="rotate(8 55 67)" />
        <path d="M51 63.5L58 64.5M50.5 68L57 69" stroke={PAL.sky} strokeWidth="2" transform="rotate(8 55 67)" />
        <circle cx="47" cy="69" r="4" fill={s} />
        <circle cx="63" cy="74" r="4" fill={sh} />
        {/* His head, with ear defenders and safety glasses */}
        <g transform={`translate(${NX} ${NY}) scale(${S}) translate(-60 -96)`}>
          <CastHead who="bram" expr="neutral" gaze={[0, 0]} bold />
        </g>
        <path d={`M${el} ${ey - 2}Q${el - 1} ${ey - 26} ${NX} ${ey - 26}Q${er + 1} ${ey - 26} ${er} ${ey - 2}`} fill="none" stroke={PAL.slate} strokeWidth="3" />
        <rect x={el - 4.5} y={ey - 6} width="8" height="12" rx="3.5" fill={PAL.orange} />
        <rect x={er - 3.5} y={ey - 6} width="8" height="12" rx="3.5" fill={PAL.orangeShade} />
        <rect x={gx - 11} y={gy - 3.6} width="22" height="7.2" rx="3" fill={PAL.ice} opacity=".75" />
        <path d={`M${gx - 9} ${gy - 1.6}H${gx - 4}`} stroke={PAL.white} strokeWidth="1.6" opacity=".9" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
