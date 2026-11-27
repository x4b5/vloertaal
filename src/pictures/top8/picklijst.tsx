import type { JSX } from 'react';
import { Box, PAL, Shine } from '../kit';

export default {
  // "de picklijst": the pick list (the list of items you must collect) — a clipboard with a list of six
  // rows, each with a box to tick: the top three ticked in blue, the others still empty; next to it a
  // cardboard box, where the items go. No text: grey lines only.
  'w.picklijst': () => {
    const rows = [38, 50, 62, 74, 86, 98];
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The clipboard and its paper */}
        <g transform="rotate(-5 46 64)">
          <rect x="12" y="18" width="62" height="90" rx="5" fill={PAL.cardDark} transform="translate(2 3)" />
          <rect x="12" y="18" width="62" height="90" rx="5" fill={PAL.wood} />
          <rect x="17" y="26" width="52" height="78" rx="2" fill={PAL.white} />
          {rows.map((y, i) => (
            <g key={y}>
              <rect x="22" y={y - 4} width="8" height="8" rx="1.6" fill={i < 3 ? PAL.white : PAL.paper} stroke={PAL.line} strokeWidth="1.6" />
              <path d={`M35 ${y}H${i % 2 ? 56 : 62}`} stroke={PAL.line} strokeWidth="2.2" />
              {i < 3 && <path d={`M22 ${y - 1}L26 ${y + 3}L32 ${y - 6}`} fill="none" stroke={PAL.blue} strokeWidth="2.8" />}
            </g>
          ))}
          <rect x="31" y="12" width="24" height="12" rx="3" fill={PAL.steel} />
          <rect x="37" y="9" width="12" height="6" rx="2" fill={PAL.slate} />
          <Shine d="M15 30V50" width={2.4} opacity={0.5} />
        </g>
        {/* The box */}
        <Box x={70} y={74} w={30} h={28} depth={10} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
