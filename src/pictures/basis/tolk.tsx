import type { JSX } from 'react';
import { Bubble, CurveArrow, PAL } from '../kit';
import { Bust } from '../bust';

export default {
  // "de tolk": the interpreter — Amina in the middle, talking; above her on the left a blue bubble with wavy
  // writing, on the right an orange bubble with blocky writing of another language, and a curved arrow carries
  // the words from one to the other through her.
  'w.tolk': () => (
    <g>
      <Bust who="amina" x={60} y={120} scale={0.6} talk />
      <Bubble x={6} y={14} w={44} h={30} tail="right">
        <path d="M14 25Q17 21 20 25T26 25T32 25T38 25M14 33Q17 29 20 33T26 33T32 33" stroke={PAL.sky} strokeWidth="2.6" fill="none" strokeLinecap="round" />
      </Bubble>
      <Bubble x={70} y={14} w={44} h={30} tail="left" fill="#fff3d6" depth={PAL.yellowLight}>
        <path d="M78 22H86M82 22V30M78 30H86M90 22V30H98M98 22V30M90 26H98M78 36H84V40M80 36V40M88 36H98" stroke={PAL.orangeShade} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </Bubble>
      <CurveArrow from={[30, 50]} to={[90, 52]} bend={-16} color={PAL.sky} width={5} head={10} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
