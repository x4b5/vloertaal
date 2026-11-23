import { useId, type JSX } from 'react';
import { PAL, Shine, Tick } from '../kit';
import { Bust } from '../bust';

const CARD = '#f7d6c4';
const CARD_SHADE = '#e9b89c';

export default {
  // "de verblijfsvergunning": the residence permit — a pale pink plastic card with a photo of Amina, grey lines
  // for the details and a small house (where you live), with a green tick badge: you may stay.
  'w.verblijfsvergunning': () => {
    const id = `verblijfsvergunning-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g>
        <g transform="rotate(-6 60 58)">
          <rect x="12" y="30" width="96" height="62" rx="7" fill={CARD_SHADE} transform="translate(0 4)" />
          <rect x="12" y="30" width="96" height="62" rx="7" fill={CARD} />
          <rect x="12" y="30" width="96" height="12" rx="6" fill={PAL.clay} />
          <rect x="12" y="36" width="96" height="6" fill={PAL.clay} />
          {/* Photo */}
          <clipPath id={id}>
            <rect x="20" y="48" width="28" height="36" rx="2" />
          </clipPath>
          <rect x="20" y="48" width="28" height="36" rx="2" fill="#e3f5ff" />
          <g clipPath={`url(#${id})`}>
            <Bust who="amina" x={34} y={92} scale={0.3} />
          </g>
          {/* Details */}
          <path d="M56 54H84M56 63H92M56 72H80M56 81H88" stroke={PAL.line} strokeWidth="3.4" strokeLinecap="round" />
          {/* Small house on the header */}
          <path d="M90 41V35L96 30L102 35V41Z" fill={PAL.white} />
          <Shine d="M18 36Q22 33 30 33" opacity={0.5} width={2.4} />
        </g>
        <Tick x={92} y={88} r={16} color={PAL.ok} shade={PAL.okShade} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
