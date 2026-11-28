import { useId, type JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, Hand, PAL, SKIN, Shine } from '../kit';

/** The bust's torso outline (as kit.tsx BUST), in the bust's own 120 x 140 box. */
const BUST = 'M25 134L26.5 109Q28.5 96.5 42 93.5H78Q91.5 96.5 93.5 109L95 134Z';

export default {
  // "de tandarts": the dentist — Amina in a white coat (over her green top, her purple headscarf)
  // holds up a small dentist's mirror; beside her the dentist chair: a light-blue reclining seat on
  // one grey foot, with the round lamp on its arm above it. Friendly, nothing sharp.
  'w.tandarts': () => {
    const id = `tandarts-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinecap="round" strokeLinejoin="round">
        <Ground cx={44} cy={106} rx={36} ry={4} />
        {/* The chair: foot, seat, back with headrest, leg rest */}
        <g transform="translate(-2 2)">
        <rect x="38" y="84" width="12" height="20" rx="3" fill={PAL.slate} />
        <rect x="24" y="100" width="40" height="6" rx="3" fill={PAL.slateDark} />
        <path d="M8 66L16 84H66L72 80L54 78H24L18 64Z" fill={PAL.skyShade} />
        <path d="M24 74H56Q62 74 66 70L78 52Q80 48 84 50L86 52Q88 55 86 58L72 80Q68 84 62 84H24Q20 84 18 80L10 64Q8 60 12 59L14 59Q17 59 18 62Z" fill={PAL.sky} />
        <path d="M24 76H58" stroke={PAL.ice} strokeWidth="2.4" opacity=".7" />
        {/* The lamp on its arm */}
        <path d="M44 84V60M44 60Q44 22 30 22" fill="none" stroke={PAL.steel} strokeWidth="4" />
        <ellipse cx="28" cy="24" rx="10" ry="6" fill={PAL.slate} />
        <ellipse cx="28" cy="27" rx="7" ry="2.6" fill={PAL.yellowLight} />
        </g>
        {/* The dentist */}
        <g transform="translate(86 126) scale(-0.64 0.64) translate(-60 -134)">
          <clipPath id={id}>
            <path d={BUST} />
          </clipPath>
          <g clipPath={`url(#${id})`}>
            <path d={BUST} fill={PAL.white} />
            <path d="M39 92L20 92L20 134L36 134Z" fill={PAL.paperShade} />
            <path d="M36 92L43 96H77L84 92L86 105H34Z" fill={PAL.purple} />
            <path d="M78 96L84 92L86 105H80Z" fill={PAL.purpleShade} />
            <path d="M50 105L60 118L70 105Z" fill={PAL.green} />
            <path d="M50 105L60 122M70 105L60 122M60 122V134" fill="none" stroke={PAL.paperShade} strokeWidth="2.4" />
            <rect x="66" y="112" width="3" height="9" rx="1.4" fill={PAL.blue} />
          </g>
          <CastHead who="amina" expr="pleased" bold gaze={[0, 0]} />
        </g>
        {/* Her hand with the mirror */}
        <g transform="translate(-6 8) rotate(-30 70 64)">
          <rect x="68.5" y="46" width="3.4" height="30" rx="1.7" fill={PAL.steel} />
          <circle cx="70.2" cy="44" r="6" fill={PAL.steel} />
          <circle cx="69.4" cy="43.2" r="4.2" fill={PAL.ice} />
        </g>
        <Hand pose="hold" x={78} y={114} rotate={-24} scale={0.5} skin={SKIN.amina} sleeve={[PAL.white, PAL.paperShade]} />
        <Shine d="M14 64L20 77" width={2.6} opacity={0.6} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
