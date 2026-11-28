import type { JSX } from 'react';
import { Bust } from '../bust';
import { Hand, Move, PAL, SKIN } from '../kit';

export default {
  // "beluisteren": to listen to (a message) — Bram holds his phone up to his ear and listens, his head
  // tilted to it; the phone's screen shows the voicemail sign (two rings joined by a line) and the
  // sound waves go from the phone to his ear.
  // On the intro card the waves come from the phone to his ear (three rounds: he listens).
  'w.beluisteren': () => (
    <g strokeLinecap="round" strokeLinejoin="round">
      <Bust who="bram" x={44} y={126} scale={0.74} expr="thinking" tilt={8} bold />
      {/* The sound, from the phone to his ear */}
      <Move kind="from" dx={18}>
        <path d="M74 44A12 12 0 0 0 74 62M67 38A20 20 0 0 0 67 68" fill="none" stroke={PAL.sky} strokeWidth="4" />
      </Move>
      {/* His hand holding the phone up beside his head */}
      <Hand pose="hold" x={94} y={112} rotate={6} scale={0.62} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      <g transform="rotate(8 93 60)">
        <rect x="79.5" y="29" width="30" height="58" rx="6" fill={PAL.slateDark} />
        <rect x="77" y="26" width="30" height="58" rx="6" fill={PAL.slate} />
        <rect x="80" y="32" width="24" height="46" rx="3" fill="#e3f5ff" />
        {/* The voicemail sign */}
        <circle cx="86.5" cy="50" r="4.6" fill="none" stroke={PAL.sky} strokeWidth="3.2" />
        <circle cx="97.5" cy="50" r="4.6" fill="none" stroke={PAL.sky} strokeWidth="3.2" />
        <path d="M86.5 54.6H97.5" stroke={PAL.sky} strokeWidth="3.2" />
        <path d="M88 64L94 67.5L88 71Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="1.6" />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
