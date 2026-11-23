import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "de zomervakantie": the summer holiday — a big yellow summer sun over the blue sea, a beach with a
  // red-and-white sunshade and a towel on the sand. ("de vakantiedagen" is the calendar with a sunshade;
  // this is the holiday itself, in summer.)
  'w.zomervakantie': () => {
    const rays = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The sun */}
        {rays.map((a, i) => (
          <path key={i} d={`M${84 + Math.cos(a) * 21} ${32 + Math.sin(a) * 21}L${84 + Math.cos(a) * 27} ${32 + Math.sin(a) * 27}`} stroke={PAL.yellow} strokeWidth="5" />
        ))}
        <Shade color={PAL.yellowShade} opacity={1} at={[100, 36, 8, 18]}>
          <circle cx="84" cy="32" r="16" fill={PAL.yellow} />
        </Shade>
        <Shine d="M75 28Q77 22 82 21" color={PAL.yellowShine} width={3.4} opacity={0.9} />
        {/* The sea */}
        <path d="M10 66Q10 62 14 62H106Q110 62 110 66V82H10Z" fill={PAL.sky} />
        <path d="M18 70Q22 67 26 70Q30 73 34 70M58 74Q62 71 66 74Q70 77 74 74M86 68Q90 65 94 68Q98 71 102 68" fill="none" stroke={PAL.ice} strokeWidth="2.6" />
        {/* The sand */}
        <path d="M10 82Q40 74 110 80V100Q110 106 104 106H16Q10 106 10 100Z" fill={PAL.yellowLight} />
        <path d="M70 80Q90 79 110 80V100Q110 106 104 106H80Q84 92 70 80Z" fill={PAL.yellowShade} opacity=".35" />
        {/* The towel */}
        <path d="M54 96L60 86H88L84 96Z" fill={PAL.blue} />
        <path d="M62 86L56 96M70 86L65 96" stroke={PAL.white} strokeWidth="2.4" />
        {/* The sunshade */}
        <path d="M38 40L34 100" stroke={PAL.slate} strokeWidth="3.4" />
        <path d="M12 52Q20 26 42 24Q62 26 66 46Q56 40 48 46Q40 40 30 48Q22 44 12 52Z" fill={PAL.red} />
        <path d="M42 24Q36 30 30 48Q40 40 48 46Q48 32 42 24Z" fill={PAL.white} />
        <path d="M42 24Q56 28 66 46Q58 41 52 44Q50 34 42 24Z" fill={PAL.redShade} opacity=".6" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
