import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "het mengvat": the mixing tank (a big tank with a mixer in it) — a big steel tank on four legs, open
  // at the top: inside, yellow paint with an orange swirl round the stirrer's shaft, which comes down from
  // a blue motor on a bracket above the tank. On the intro card the swirl turns round the shaft (three
  // rounds: the mixer at work).
  'w.mengvat': () => {
    const id = `mv-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={60} cy={105} rx={42} ry={4} />
        {/* The legs */}
        <path d="M32 84L28 104M88 84L92 104M48 90V104M72 90V104" stroke={PAL.slate} strokeWidth="5" />
        {/* The bracket with the motor */}
        <path d="M94 50V22H70" fill="none" stroke={PAL.slate} strokeWidth="5" />
        {/* The tank: its side, then its open top */}
        <Shade color={PAL.steel} opacity={1} at={[100, 70, 14, 40]}>
          <path d="M24 46V82Q24 92 60 92Q96 92 96 82V46Z" fill={PAL.mist} />
        </Shade>
        <path d="M24 60Q24 66 60 66Q96 66 96 60" fill="none" stroke={PAL.steel} strokeWidth="1.8" />
        <ellipse cx="60" cy="46" rx="36" ry="11" fill={PAL.steel} />
        <ellipse cx="60" cy="47" rx="32" ry="9" fill={PAL.yellow} />
        <clipPath id={id}>
          <ellipse cx="60" cy="47" rx="32" ry="9" />
        </clipPath>
        <g clipPath={`url(#${id})`}>
          <g transform="translate(60 47) scale(1 0.28)">
            <Move kind="turn" turn={-120} at={[0, 0]}>
              <path d="M0 -4C10 -6 14 6 6 12C-6 22 -22 8 -20 -6C-18 -24 6 -32 20 -22C30 -14 32 0 28 8" fill="none" stroke={PAL.orange} strokeWidth="5" />
            </Move>
          </g>
        </g>
        {/* The shaft and the motor */}
        <rect x="58" y="24" width="4" height="23" fill={PAL.slateDark} />
        <Shade color={PAL.blueShade} opacity={1} at={[76, 20, 6, 14]}>
          <rect x="50" y="10" width="22" height="16" rx="4" fill={PAL.blue} />
        </Shade>
        <path d="M55 14V22M60 14V22" stroke={PAL.blueShade} strokeWidth="1.6" />
        <Shine d="M28 54V76" width={3} opacity={0.7} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
