import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de onderhoudsmonteur": the maintenance technician — Jada in blue overalls at a grey machine, a big
  // spanner raised in her hand and a red padlock hanging from her belt (to lock the machine off before she
  // works on it).
  'w.onderhoudsmonteur': () => {
    const [s] = SKIN.jada;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={60} cy={104} rx={50} ry={4} />
        {/* The machine: side, front, its dark window with a gear */}
        <path d="M104 40L110 35V98L104 104Z" fill={PAL.slate} />
        <path d="M66 40L72 35H110L104 40Z" fill={PAL.mist} />
        <rect x="66" y="40" width="38" height="64" rx="3" fill={PAL.steel} />
        <rect x="72" y="48" width="26" height="24" rx="2" fill={PAL.slateDark} />
        <circle cx="85" cy="60" r="7.5" fill="none" stroke={PAL.yellow} strokeWidth="4" strokeDasharray="3.2 2.6" />
        <circle cx="85" cy="60" r="5" fill={PAL.yellow} />
        <circle cx="85" cy="60" r="2" fill={PAL.slateDark} />
        <rect x="72" y="80" width="26" height="5" rx="2" fill={PAL.slate} />
        {/* Jada: legs and boots */}
        <path d="M34 78L33 101M46 78L47 101" stroke={PAL.blue} strokeWidth="9.5" />
        <path d="M46 78L47 101" stroke={PAL.blueShade} strokeWidth="9.5" />
        <ellipse cx="31" cy="102.5" rx="6.5" ry="3.3" fill={PAL.slateDark} />
        <ellipse cx="49" cy="102.5" rx="6.5" ry="3.3" fill={PAL.slateDark} />
        {/* The arm with the spanner, raised to the machine */}
        <path d="M50 56L60 44" stroke={PAL.blueShade} strokeWidth="8" />
        <g transform="rotate(-50 62 42)">
          <rect x="60" y="20" width="6" height="26" rx="2.5" fill={PAL.steel} />
          <path d="M57 22A8 8 0 1 1 69 22L66 19.5V14H60V19.5Z" fill={PAL.mist} />
        </g>
        <circle cx="61" cy="43" r="4.4" fill={s} />
        {/* Her body, the belt with the padlock */}
        <Shade color={PAL.blueShade} opacity={1} at={[56, 64, 7, 24]}>
          <rect x="27" y="48" width="26" height="35" rx="9" fill={PAL.blue} />
        </Shade>
        <path d="M27 75H53" stroke={PAL.slate} strokeWidth="3.4" strokeLinecap="butt" />
        <path d="M32 80V77Q32 73.5 35.5 73.5Q39 73.5 39 77V80" fill="none" stroke={PAL.steel} strokeWidth="2.4" />
        <rect x="30" y="79" width="11" height="10" rx="2" fill={PAL.red} />
        <circle cx="35.5" cy="84" r="1.5" fill={PAL.redShade} />
        <Shine d="M30 54V66" width={2.4} opacity={0.4} />
        <g transform="translate(40 50) scale(0.42) translate(-60 -96)">
          <CastHead who="jada" expr="neutral" gaze={[0, 0]} bold />
        </g>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
