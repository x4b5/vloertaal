import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "het beeldscherm": the monitor, the screen — a big flat monitor on its foot, seen a little from the
  // side: a dark frame with its depth edge on the right, and a lit blue screen with a gleam on it.
  'w.beeldscherm': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={30} ry={4} />
      {/* The foot */}
      <path d="M54 80H66L68 98H52Z" fill={PAL.steel} />
      <rect x="38" y="96" width="44" height="8" rx="3" fill={PAL.slate} />
      <rect x="66" y="96" width="16" height="8" rx="3" fill={PAL.slateDark} />
      {/* The frame, its depth edge */}
      <path d="M12 18H104L110 22V84L104 86H12Z" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={0.6} at={[108, 52, 8, 40]}>
        <rect x="10" y="16" width="96" height="68" rx="5" fill={PAL.slate} />
      </Shade>
      {/* The screen */}
      <rect x="16" y="22" width="84" height="56" rx="2.5" fill={PAL.sky} />
      <path d="M16 78L68 22H100V30L56 78Z" fill={PAL.blueLight} opacity=".35" />
      <Shine d="M22 30Q24 27 30 26" width={3.2} opacity={0.75} />
      <circle cx="58" cy="81" r="1.6" fill={PAL.leaf} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
