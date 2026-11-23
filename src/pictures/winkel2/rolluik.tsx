import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "het rolluik": the roller shutter — a shop front with its striped awning, the steel roller shutter
  // pulled all the way down over the window and door: grey ribs, a box for the roll at the top, guide
  // rails at the sides, a handle and a lock at the bottom. On the intro card the shutter rolls down
  // from its box: once (the shop closes).
  'w.rolluik': () => {
    const id = `rl-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinejoin="round">
        <Ground cx={60} cy={105} rx={52} ry={4} />
        {/* The shop wall */}
        <rect x="8" y="24" width="104" height="80" rx="2" fill={PAL.paper} />
        <rect x="100" y="24" width="12" height="80" fill={PAL.paperShade} />
        {/* Behind the shutter: the window with goods and the door (seen while it rolls down) */}
        <rect x="18" y="40" width="80" height="64" fill={PAL.ice} />
        <rect x="24" y="52" width="8" height="10" rx="1.4" fill={PAL.red} />
        <rect x="36" y="52" width="8" height="10" rx="1.4" fill={PAL.yellow} />
        <rect x="70" y="56" width="22" height="48" fill={PAL.slate} />
        {/* The shutter, clipped to its opening */}
        <clipPath id={id}>
          <rect x="18" y="40" width="80" height="64" />
        </clipPath>
        <g clipPath={`url(#${id})`}>
          <Move kind="slow" dy={-62} once>
            <Shade color={PAL.steel} opacity={0.7} at={[104, 72, 12, 40]}>
              <rect x="18" y="40" width="80" height="64" fill={PAL.mist} />
            </Shade>
            {[46, 52, 58, 64, 70, 76, 82, 88, 94].map((y) => (
              <path key={y} d={`M18 ${y}H98`} stroke={PAL.steel} strokeWidth="1.8" />
            ))}
            <rect x="18" y="98" width="80" height="6" fill={PAL.slate} />
            <rect x="50" y="94" width="16" height="4" rx="2" fill={PAL.slateDark} />
            <circle cx="88" cy="101" r="2" fill={PAL.yellow} />
          </Move>
        </g>
        {/* Guide rails and the box for the roll */}
        <rect x="14" y="38" width="5" height="66" rx="1.5" fill={PAL.steel} />
        <rect x="97" y="38" width="5" height="66" rx="1.5" fill={PAL.steel} />
        <rect x="12" y="32" width="92" height="10" rx="2" fill={PAL.slate} />
        {/* The awning */}
        <path d="M4 14H116L110 28H10Z" fill={PAL.red} />
        <path d="M12 14H22L21 28H12ZM32 14H42L41.5 28H32ZM52 14H62L62 28H52.5ZM72 14H82L82.5 28H73ZM92 14H102L103 28H93.5Z" fill={PAL.white} />
        <path d="M10 28H110" stroke={PAL.redShade} strokeWidth="3" strokeLinecap="round" />
        <Shine d="M22 46H50" width={2.4} opacity={0.6} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
