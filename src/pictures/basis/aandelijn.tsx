import type { JSX } from 'react';
import { Bubble, Dots, Hand, Motion, Move, PAL, SKIN } from '../kit';
import { Bust } from '../bust';

export default {
  // "aan de lijn blijven": to stay on the line — Henk keeps his mobile phone at his ear and listens
  // calmly; out of the phone comes a speech bubble with talking dots (the emergency room still talks
  // to him). On the intro card the sound lines from the phone come up (three rounds: the call goes on).
  'w.aandelijn': () => (
    <g strokeLinejoin="round">
      <Bust who="henk" x={50} y={124} scale={0.7} expr="thinking" bold />
      {/* The phone at his ear, in his hand */}
      <Hand pose="hold" x={78} y={92} rotate={-8} scale={0.52} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <g transform="rotate(-8 76 70)">
        <rect x="70" y="52" width="14" height="30" rx="3.5" fill={PAL.slateDark} />
        <rect x="72" y="55" width="10" height="23" rx="2" fill={PAL.slate} />
      </g>
      <Move kind="show">
        <Motion x={90} y={72} dir={-10} spread={70} n={3} len={7} gap={5} color={PAL.sky} width={3.2} />
      </Move>
      {/* What the other side says */}
      <Bubble x={74} y={12} w={38} h={28} tail="left">
        <Dots cx={93} cy={26} gap={9} r={3.4} />
      </Bubble>
    </g>
  ),
} as Record<string, () => JSX.Element>;
