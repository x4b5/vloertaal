import type { JSX } from 'react';
import { PAL } from '../kit';
import { Bust } from '../bust';

export default {
  // "het baardnetje": the beard net — Henk in his white work coat wears a light-blue net over his chin and
  // the beard round his mouth, held by elastic over his ears.
  'w.baardnetje': () => (
    <g strokeLinejoin="round">
      <Bust who="henk" x={60} y={128} scale={0.94} expr="neutral" bold />
      {/* The white work coat over the shoulders */}
      <path d="M18 128L19.6 112Q22 101 38 98L50 98L60 114L70 98L82 98Q98 101 100.4 112L102 128Z" fill={PAL.paper} />
      <path d="M86 99Q98 102 100.4 112L102 128H88Z" fill={PAL.paperShade} />
      <path d="M50 98L60 114L70 98" fill="none" stroke={PAL.paperShade} strokeWidth="2.4" />
      {/* The beard */}
      <path d="M38 68Q40 96 60 98Q80 96 82 68Q76 80 60 80Q44 80 38 68Z" fill={PAL.mist} />
      {/* The net over it, and its elastic */}
      <path d="M33 62Q34 102 60 103Q86 102 87 62Q80 78 60 78Q40 78 33 62Z" fill={PAL.ice} opacity=".55" />
      <g fill="none" stroke={PAL.sky} strokeWidth="1.5" opacity=".9">
        <path d="M36 70L52 102M44 76L66 103M54 78L78 99M64 78L84 90M74 77L86 80" />
        <path d="M84 70L68 102M76 76L54 103M66 78L42 99M56 78L36 90M46 77L34 80" />
      </g>
      <path d="M33 62Q34 102 60 103Q86 102 87 62" fill="none" stroke={PAL.sky} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M33 62L30 52M87 62L90 52" stroke={PAL.sky} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
