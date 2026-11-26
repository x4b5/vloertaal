import { useId, type JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Bust } from '../bust';
import { BUST_TORSO, Hand, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de begeleider": the guide (the colleague who helps you in your first weeks) — Henk, the older
  // colleague, stands next to Jada, the new worker, at a machine: he points at its control panel and
  // explains (mouth open, mid-word); Jada looks at the panel and listens.
  'w.begeleider': () => {
    const id = `bg-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The machine: its body and the control panel */}
        <path d="M30 22L38 14H86L78 22Z" fill={PAL.mist} />
        <path d="M78 22L86 14V90L78 98Z" fill={PAL.slate} />
        <Shade color={PAL.steel} opacity={1} at={[84, 60, 8, 40]}>
          <rect x="30" y="22" width="48" height="76" rx="2" fill={PAL.mist} />
        </Shade>
        <rect x="36" y="28" width="36" height="30" rx="3" fill={PAL.slate} />
        <rect x="40" y="32" width="18" height="10" rx="1.6" fill={PAL.ice} />
        <circle cx="45" cy="50" r="4" fill={PAL.ok} />
        <circle cx="58" cy="50" r="4" fill={PAL.red} />
        <circle cx="66" cy="38" r="3.4" fill={PAL.yellow} />
        <Shine d="M33 64V88" width={2.6} opacity={0.6} />
        {/* Jada, the new worker, looking at the panel */}
        <g transform="translate(30 126) scale(0.5) translate(-60 -134)">
          {BUST_TORSO.jada(`${id}-j`)}
          <CastHead who="jada" expr="thinking" gaze={[1, -0.8]} bold />
        </g>
        {/* Henk, explaining, his hand on the side of the panel */}
        <Bust who="henk" x={92} y={128} scale={0.56} expr="pleased" talk bold />
        <path d="M82 104L76 76" stroke="#2d5a92" strokeWidth="8" />
        <Hand pose="point" x={76} y={78} rotate={-34} scale={0.42} skin={SKIN.henk} mirror />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
