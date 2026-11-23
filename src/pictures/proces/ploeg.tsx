import type { JSX } from 'react';
import { CastHead, type CharacterId } from '../../components/Characters';
import { Ground, PAL, Shade } from '../kit';

/** A cast member's own head, its neck base at (x, y). */
const head = (who: CharacterId, x: number, y: number, s = 0.4) => (
  <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -96)`}>
    <CastHead who={who} expr="pleased" gaze={[0, 0]} bold />
  </g>
);

/** One worker of the team at x, neck at y: the same orange hi-vis jacket with silver bands and navy trousers. */
const worker = (x: number, y: number, who: CharacterId) => (
  <g>
    <path d={`M${x - 5} ${y + 28}L${x - 5.5} ${y + 51}M${x + 5} ${y + 28}L${x + 5.5} ${y + 51}`} stroke={PAL.navy} strokeWidth="8.5" />
    <path d={`M${x + 5} ${y + 28}L${x + 5.5} ${y + 51}`} stroke={PAL.navyShade} strokeWidth="8.5" />
    <ellipse cx={x - 6.5} cy={y + 52.5} rx="5.6" ry="3" fill={PAL.slateDark} />
    <ellipse cx={x + 6.5} cy={y + 52.5} rx="5.6" ry="3" fill={PAL.slateDark} />
    <Shade color={PAL.orangeShade} opacity={1} at={[x + 13, y + 14, 6, 22]}>
      <rect x={x - 12} y={y - 2} width="24" height="34" rx="8.5" fill={PAL.orange} />
    </Shade>
    <path d={`M${x - 12} ${y + 22}H${x + 12}`} stroke="#eef5f7" strokeWidth="3.2" strokeLinecap="butt" />
    {head(who, x, y)}
  </g>
);

export default {
  // "de ploeg": the shift team — four workers side by side in the same orange hi-vis jackets with silver
  // bands and navy trousers (Henk, Amina, Bram and Jada): one group, one set of work clothes.
  'w.ploeg': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={54} ry={4} />
      {worker(24, 50, 'henk')}
      {worker(96, 50, 'jada')}
      {worker(48, 52, 'amina')}
      {worker(72, 52, 'bram')}
    </g>
  ),
} as Record<string, () => JSX.Element>;
