import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de onderhoudsmonteur": the maintenance technician — Jada in blue overalls at a grey machine, her
  // spanner on the machine's gear and a red padlock hanging from her belt (to lock the machine off before she
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
        {/* The spanner on the machine's gear, and the arm that holds it */}
        <rect x="60" y="57" width="22" height="6" rx="2.5" fill={PAL.mist} />
        <path d="M80 54.5A8 8 0 1 1 80 65.5L82.5 63H90V57H82.5Z" fill={PAL.paper} />
        <Shine d="M64 58.6H76" width={1.6} opacity={0.9} />
        <path d="M48 58L61 60" stroke={PAL.blueShade} strokeWidth="8" />
        <circle cx="63" cy="60" r="4.6" fill={s} />
        {/* Her body, the belt with the padlock */}
        <Shade color={PAL.blueShade} opacity={1} at={[56, 64, 7, 24]}>
          <rect x="27" y="48" width="26" height="35" rx="9" fill={PAL.blue} />
        </Shade>
        <path d="M27 75H53" stroke={PAL.slate} strokeWidth="3.4" strokeLinecap="butt" />
        <path d="M31 80V76.5Q31 72 36 72Q41 72 41 76.5V80" fill="none" stroke={PAL.steel} strokeWidth="2.8" />
        <rect x="28.5" y="79" width="15" height="13" rx="2.5" fill={PAL.red} />
        <rect x="38" y="79" width="5.5" height="13" rx="2" fill={PAL.redShade} />
        <circle cx="35" cy="85" r="1.8" fill={PAL.redShade} />
        <Shine d="M30 54V66" width={2.4} opacity={0.4} />
        <g transform="translate(40 50) scale(0.42) translate(-60 -96)">
          <CastHead who="jada" expr="neutral" gaze={[0, 0]} bold />
        </g>
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
