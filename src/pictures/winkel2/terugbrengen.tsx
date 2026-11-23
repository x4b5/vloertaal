import type { JSX } from 'react';
import { CurveArrow, Ground, Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "terugbrengen": to bring back (a product to the shop) — a hand carries an orange shopping bag with
  // the receipt sticking out back to a small shop (striped awning, door); a blue arrow curves from the
  // bag over to the shop. On the intro card the hand and the bag come in from the left to the shop:
  // once (one trip back, it has an end).
  'w.terugbrengen': () => (
    <g strokeLinejoin="round">
      <Ground cx={66} cy={105} rx={46} ry={4} />
      {/* The shop on the right: wall, window, door, awning */}
      <rect x="66" y="50" width="42" height="54" rx="2" fill={PAL.paper} />
      <rect x="98" y="50" width="10" height="54" fill={PAL.paperShade} />
      <rect x="70" y="60" width="16" height="18" rx="2" fill={PAL.ice} />
      <rect x="72" y="63" width="4" height="5" rx="1" fill={PAL.red} />
      <rect x="78" y="63" width="4" height="5" rx="1" fill={PAL.yellow} />
      <rect x="74" y="71" width="4" height="5" rx="1" fill={PAL.green} />
      <rect x="88" y="68" width="16" height="36" rx="1.5" fill={PAL.slate} />
      <rect x="90.5" y="71" width="11" height="33" fill={PAL.ice} opacity=".75" />
      <path d="M62 40H110L106 54H66Z" fill={PAL.red} />
      <path d="M70 40H78L77.5 54H70ZM86 40H94L94 54H86.5ZM102 40H110L106 54H102.5Z" fill={PAL.white} />
      <path d="M66 54H106" stroke={PAL.redShade} strokeWidth="3" strokeLinecap="round" />
      {/* The way back: an arrow from the bag to the shop */}
      <CurveArrow from={[34, 30]} to={[84, 28]} bend={14} color={PAL.sky} width={7} head={12} />
      {/* The hand and the bag going back to the shop */}
      <Move kind="slow" dx={-34} once>
        {/* The bag: handle, body, receipt */}
        <path d="M24 66V58Q24 48 34 48Q44 48 44 58V66" fill="none" stroke={PAL.orangeShade} strokeWidth="4" strokeLinecap="round" />
        <rect x="38" y="58" width="10" height="16" rx="1.5" fill={PAL.white} transform="rotate(10 43 66)" />
        <path d="M40 63H46M40 67H45" stroke={PAL.line} strokeWidth="1.4" strokeLinecap="round" transform="rotate(10 43 66)" />
        <Shade color={PAL.orangeShade} opacity={1} at={[56, 86, 9, 26]}>
          <path d="M14 64H54L56 102H12Z" fill={PAL.orange} />
        </Shade>
        <Shine d="M19 70L18 92" width={3.2} opacity={0.5} />
        <Hand pose="fist" x={34} y={24} rotate={180} scale={0.8} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
