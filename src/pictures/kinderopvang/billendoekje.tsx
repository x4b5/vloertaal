import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "het billendoekje": the baby wipe — a soft sky blue pack of baby wipes lying flat, its white flip
  // lid open at the back, and one white wipe pulled half out of the opening, a soft fold in it.
  // On the intro card the wipe is pulled up out of the pack (three rounds: one wipe after the other).
  'w.billendoekje': () => {
    const id = `billendoekje-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={60} cy={102} rx={48} ry={5} />
        {/* The soft pack: a pillow shape, shaded on the right */}
        <Shade color={PAL.skyShade} opacity={1} at={[110, 86, 22, 30]}>
          <path d="M12 76Q10 62 24 60H96Q110 62 108 76L106 92Q104 102 92 102H28Q14 102 14 92Z" fill={PAL.sky} />
        </Shade>
        <path d="M18 88Q60 96 104 88" fill="none" stroke={PAL.skyShade} strokeWidth="2" opacity=".7" />
        {/* The open lid at the back and the opening */}
        <path d="M34 62L40 40H80L86 62Z" fill={PAL.paperShade} />
        <path d="M38 60L43 44H77L82 60Z" fill={PAL.white} />
        <ellipse cx="60" cy="70" rx="24" ry="7" fill={PAL.skyShade} />
        <ellipse cx="60" cy="70" rx="19" ry="4.6" fill={PAL.slate} />
        {/* The wipe, pulled up out of the opening */}
        <clipPath id={id}>
          <path d="M0 0H120V70H79A19 4.6 0 0 0 41 70H0Z" />
        </clipPath>
        <g clipPath={`url(#${id})`}>
          <Move kind="from" dy={22}>
            <path d="M44 72Q42 52 50 36Q58 26 70 30Q78 34 74 48Q72 60 76 72Z" fill={PAL.white} />
            <path d="M62 30Q72 30 74 40Q72 54 76 72H66Q62 54 68 42Q68 34 62 30Z" fill={PAL.paperShade} />
            <path d="M52 40Q56 34 62 34" fill="none" stroke={PAL.ice} strokeWidth="2.4" />
          </Move>
        </g>
        <Shine d="M20 70Q22 64 30 64" width={3.2} opacity={0.6} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
