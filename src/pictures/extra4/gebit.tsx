import { useId, type JSX } from 'react';
import { PAL, Shine, Sparkle } from '../kit';

/** The open smile: a wide mouth, flat-ish on top, round below. */
const MOUTH = 'M12 46Q60 30 108 46Q106 98 60 100Q14 98 12 46Z';

export default {
  // "het gebit": the teeth (all your teeth together) — a wide, friendly open smile: pink lips round
  // a dark mouth, a full upper row of clean white teeth hanging from the pink gum and a lower row
  // standing on it, and a sparkle (clean). No face, nothing sore.
  'w.gebit': () => {
    const id = `gebit-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    // Upper teeth: x of each tooth's left edge, width, and how far it hangs down.
    const upper: [number, number, number][] = [
      [22, 10, 15], [33, 11, 18], [45, 14, 22], [60, 14, 22], [75, 11, 18], [87, 10, 15],
    ];
    const lower: [number, number, number][] = [
      [28, 10, 12], [39, 10, 14], [50, 9.5, 15], [60.5, 9.5, 15], [71, 10, 14], [82, 10, 12],
    ];
    return (
      <g strokeLinecap="round" strokeLinejoin="round">
        <clipPath id={id}>
          <path d="M20 50Q60 38 100 50Q98 88 60 90Q22 88 20 50Z" />
        </clipPath>
        {/* The lips: a darker lower lip, the upper lip on top */}
        <path d={MOUTH} fill={PAL.clayShade} transform="translate(0 3)" />
        <path d={MOUTH} fill={PAL.clay} />
        <path d="M12 46Q60 30 108 46Q100 50 92 48Q60 40 28 48Q20 50 12 46Z" fill={PAL.clayLight} />
        {/* Inside the mouth */}
        <path d="M20 50Q60 38 100 50Q98 88 60 90Q22 88 20 50Z" fill={PAL.mouth} />
        <g clipPath={`url(#${id})`}>
          {/* Upper gum and teeth */}
          <path d="M14 40H106V54Q60 44 14 54Z" fill={PAL.redLight} />
          {upper.map(([x, w, h]) => {
            const top = 49 - Math.abs(x + w / 2 - 60) * 0.18;
            return (
              <g key={`u${x}`}>
                <rect x={x} y={top - 6} width={w} height={h + 6} rx="3.4" fill={PAL.white} />
                <rect x={x + w * 0.62} y={top} width={w * 0.38} height={h - 1} rx="2.4" fill={PAL.paperShade} />
              </g>
            );
          })}
          {/* Lower gum and teeth */}
          <path d="M14 96V84Q60 92 106 84V96Z" fill={PAL.redLight} />
          {lower.map(([x, w, h]) => {
            const base = 86 - Math.abs(x + w / 2 - 60) * 0.12;
            return (
              <g key={`l${x}`}>
                <rect x={x} y={base - h} width={w} height={h + 6} rx="3" fill={PAL.white} />
                <rect x={x + w * 0.62} y={base - h + 1} width={w * 0.38} height={h - 1} rx="2.2" fill={PAL.paperShade} />
              </g>
            );
          })}
        </g>
        <Shine d="M20 43Q30 39 40 37.5" width={3} opacity={0.6} />
        <Sparkle x={100} y={22} r={9} />
        <Sparkle x={86} y={12} r={5} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
