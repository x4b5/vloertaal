import type { JSX } from 'react';
import { CastHead, type CharacterId } from '../../components/Characters';
import { Ground, PAL, Shade, Shine } from '../kit';

/** A cast member's own head, its neck base at (x, y). */
const head = (who: CharacterId, x: number, y: number, s = 0.42) => (
  <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -96)`}>
    <CastHead who={who} expr="neutral" gaze={[0, 0]} bold />
  </g>
);

/** A technician in blue overalls standing at x, the neck at y 50. */
const tech = (x: number, who: CharacterId) => (
  <g>
    <path d={`M${x - 5} 78L${x - 6} 101M${x + 5} 78L${x + 6} 101`} stroke={PAL.blue} strokeWidth="9" />
    <path d={`M${x + 5} 78L${x + 6} 101`} stroke={PAL.blueShade} strokeWidth="9" />
    <ellipse cx={x - 7} cy="102.5" rx="6" ry="3.2" fill={PAL.slateDark} />
    <ellipse cx={x + 7} cy="102.5" rx="6" ry="3.2" fill={PAL.slateDark} />
    <Shade color={PAL.blueShade} opacity={1} at={[x + 14, 64, 7, 24]}>
      <rect x={x - 13} y="48" width="26" height="35" rx="9" fill={PAL.blue} />
    </Shade>
    <path d={`M${x - 13} 74H${x + 13}`} stroke={PAL.slate} strokeWidth="3" strokeLinecap="butt" />
    <rect x={x + 2} y="54" width="7" height="6" rx="1.2" fill={PAL.blueLight} />
    {head(who, x, 50)}
  </g>
);

export default {
  // "de technische dienst": the maintenance department — the workshop door with a round blue sign over it
  // (a white spanner), a red toolbox in front of it, and two technicians in blue overalls (Amina and Bram)
  // standing on either side: a team, not one person.
  'w.technischedienst': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={54} ry={4} />
      {/* The workshop door and its sign */}
      <rect x="38" y="34" width="44" height="70" rx="3" fill={PAL.slate} />
      <rect x="43" y="39" width="34" height="65" rx="1.5" fill={PAL.steel} />
      <path d="M43 52H77M43 65H77M43 78H77" stroke={PAL.line} strokeWidth="2" />
      <circle cx="60" cy="22" r="13" fill={PAL.blueShade} />
      <circle cx="60" cy="20" r="13" fill={PAL.blue} />
      <g transform="rotate(40 60 20)">
        <rect x="57.6" y="14" width="4.8" height="17" rx="2" fill={PAL.white} />
        <circle cx="60" cy="12" r="6.4" fill={PAL.white} />
        <rect x="57.6" y="4" width="4.8" height="8.6" rx="1" fill={PAL.blue} />
      </g>
      {/* The two technicians */}
      {tech(22, 'amina')}
      {tech(98, 'bram')}
      {/* The red toolbox */}
      <path d="M52 86V82Q52 79 55 79H65Q68 79 68 82V86" fill="none" stroke={PAL.slate} strokeWidth="3" />
      <rect x="44" y="86" width="32" height="18" rx="2.5" fill={PAL.red} />
      <rect x="44" y="86" width="32" height="6" rx="2" fill={PAL.redShade} />
      <rect x="70" y="86" width="6" height="18" rx="2" fill={PAL.redShade} />
      <Shine d="M47 96H60" width={2.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
