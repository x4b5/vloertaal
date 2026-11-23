import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { PAL, SKIN, Shade, Shine } from '../kit';
import { Bust } from '../bust';

/** A child's head in the cast's flat style (as in group24), centred on (x, y), radius `r`. */
function ChildHead({ x, y, r = 12, skin = SKIN.bram, hair = PAL.brown }: { x: number; y: number; r?: number; skin?: [string, string]; hair?: string }) {
  const k = r / 12;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <circle cx="0" cy="-1.5" r="13.2" fill={hair} />
      <circle cx="-12" cy="2" r="3.2" fill={skin[0]} />
      <circle cx="12" cy="2" r="3.2" fill={skin[1]} />
      <Shade color={skin[1]} opacity={1} at={[13, 4, 6, 16]}>
        <ellipse cx="0" cy="2" rx="11.6" ry="11.2" fill={skin[0]} />
      </Shade>
      <path d="M-12.4 -1Q-12 -13 0 -13.6Q12 -13 12.4 -1Q8 -6.5 1 -7Q-4 -4 -12.4 -1Z" fill={hair} />
      <ellipse cx="-4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <ellipse cx="4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <path d="M-3.6 7Q0 11 3.6 7" fill={PAL.mouth} stroke={PAL.mouth} strokeWidth="1.4" strokeLinecap="round" />
    </g>
  );
}

export default {
  // "het vierogenprincipe": the four-eyes rule — Amina sits with a toddler; behind the glass of the
  // door a second worker (Jada) can always look in and see them. Two adults, four eyes.
  'w.vierogenprincipe': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The door with its big window, Jada looking in */}
      <rect x="66" y="8" width="46" height="102" rx="3" fill={PAL.card} />
      <rect x="104" y="8" width="8" height="102" fill={PAL.cardShade} />
      <rect x="72" y="16" width="32" height="44" rx="2" fill="#e3f5ff" />
      <g transform="translate(88 60) scale(0.36) translate(-60 -96)">
        <CastHead who="jada" expr="pleased" gaze={[0, 0]} />
      </g>
      <rect x="72" y="52" width="32" height="8" fill="#ffc929" />
      <rect x="72" y="16" width="32" height="44" rx="2" fill={PAL.white} opacity=".18" />
      <Shine d="M76 22L84 18" width={2.6} opacity={0.8} />
      <rect x="70" y="72" width="5" height="14" rx="2.5" fill={PAL.slate} />
      {/* Amina with the toddler */}
      <Bust who="amina" x={34} y={116} scale={0.68} expr="pleased" bold />
      <rect x="50" y="94" width="26" height="20" rx="8" fill={PAL.red} />
      <ChildHead x={63} y={82} r={13} skin={SKIN.jada} hair="#2e201a" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
