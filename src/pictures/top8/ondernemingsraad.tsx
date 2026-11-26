import type { JSX } from 'react';
import { CastHead, type CharacterId } from '../../components/Characters';
import { Bubble, Dots, PAL, SKIN, Shade } from '../kit';

/** A cast member's own head, its neck base at (x, y). */
const head = (who: CharacterId, x: number, y: number, s = 0.37) => (
  <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -96)`}>
    <CastHead who={who} expr="neutral" gaze={[0, 0]} bold />
  </g>
);

/** One member of the works council at x, neck at y: the orange hi-vis vest with its silver band. */
const member = (who: CharacterId, x: number, y: number) => (
  <g>
    <Shade color={PAL.orangeShade} opacity={1} at={[x + 11, y + 14, 5, 20]}>
      <rect x={x - 10} y={y - 2} width="20" height="30" rx="7" fill={PAL.orange} />
    </Shade>
    <path d={`M${x - 10} ${y + 14}H${x + 10}`} stroke="#eef5f7" strokeWidth="2.8" />
    {head(who, x, y)}
  </g>
);

export default {
  // "de ondernemingsraad": the works council (the OR: colleagues chosen to talk with the director) — four
  // colleagues in orange hi-vis vests (Henk, Amina, Bram, Jada) sit together on the left side of a long
  // table; on the right side, across the table, sits the director in a dark suit and tie (no face: not
  // one of the cast). A speech bubble with dots over the table: they talk.
  'w.ondernemingsraad': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bubble x={60} y={10} w={32} h={19} tail="right">
        <Dots cx={76} cy={19.5} r={2.8} gap={8} />
      </Bubble>
      {/* The four members: two at the back, two in front */}
      {member('amina', 15, 62)}
      {member('henk', 33, 62)}
      {member('bram', 51, 62)}
      {member('jada', 69, 62)}
      {/* The director */}
      <Shade color={PAL.slateDark} opacity={1} at={[114, 80, 8, 26]}>
        <path d="M84 98V70Q84 58 98 58Q112 58 112 70V98Z" fill={PAL.slate} />
      </Shade>
      <path d="M93 59L98 72L103 59Z" fill={PAL.white} />
      <path d="M96.8 61H99.2L100 72L98 74.6L96 72Z" fill={PAL.red} />
      <circle cx="98" cy="46" r="11" fill={SKIN.amina[0]} />
      <circle cx="102" cy="48" r="7" fill={SKIN.amina[1]} opacity=".45" />
      <path d="M87 46Q86 33 98 33Q110 33 109 45Q102 39 87 46Z" fill={PAL.ink} />
      {/* The table: its top, then its front */}
      <path d="M6 86L12 80H114L108 86Z" fill={PAL.card} />
      <rect x="6" y="86" width="102" height="8" rx="1.6" fill={PAL.cardShade} />
      <path d="M13 94V107M101 94V107" stroke={PAL.cardDark} strokeWidth="5" />
      {/* Papers on the table */}
      <path d="M24 84.5L28 81.5H44L40 84.5Z" fill={PAL.white} />
      <path d="M84 84.5L88 81.5H104L100 84.5Z" fill={PAL.white} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
