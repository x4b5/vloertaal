import type { JSX } from 'react';
import { Arrow, Hand, Move, PAL, SKIN } from '../kit';
import { Bust } from '../bust';

export default {
  // "kalmeren": to calm down — Amina, calm again with her eyes closed; in front of her the guard's two
  // hands, palms down, go slowly down ("easy, easy"); above her a red jagged line, an arrow and a flat
  // blue line: from angry to calm.
  // On the intro card the two hands go down: three rounds (the calming gesture is made again and again).
  'w.kalmeren': () => (
    <g strokeLinejoin="round">
      <Bust who="amina" x={60} y={112} scale={0.68} emotion="rest" bold />
      {/* From angry to calm: a red jagged line, an arrow, a flat blue line */}
      <path d="M12 22L18 14L24 28L30 14L36 28L40 22" fill="none" stroke={PAL.red} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <Arrow from={[48, 21]} to={[68, 21]} color={PAL.line} width={4.4} head={9} />
      <path d="M78 21H108" fill="none" stroke={PAL.sky} strokeWidth="4" strokeLinecap="round" />
      {/* The guard's hands, palms down, going down */}
      <Move kind="slow" dy={-22}>
        <Hand pose="open" x={12} y={104} rotate={84} scale={0.66} skin={SKIN.jada} sleeve={[PAL.navy, PAL.navyShade]} />
        <Hand pose="open" x={108} y={104} rotate={-84} scale={0.66} skin={SKIN.jada} sleeve={[PAL.navy, PAL.navyShade]} mirror />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
