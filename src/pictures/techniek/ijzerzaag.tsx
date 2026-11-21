import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** The frame: the back post, the long top bar and the front post down to the blade. */
const FRAME = 'M30 74V36H98V74';

/** Fine teeth along the bottom of the blade, from x0 to x1 at the line y. */
const teeth = (x0: number, x1: number, y: number) => {
  let d = `M${x0} ${y}`;
  for (let x = x0; x < x1; x += 4) d += `L${x + 2} ${y + 3.2}L${x + 4} ${y}`;
  return `${d}Z`;
};

export default {
  // "de ijzerzaag": the hacksaw — a red square-cornered frame, a thin steel blade with fine teeth
  // stretched along its bottom between the posts, a wing nut at the front and a dark pistol grip.
  'w.ijzerzaag': () => (
    <g transform="translate(0 4)" strokeLinejoin="round">
      {/* The frame on its depth edge */}
      <path d={FRAME} fill="none" stroke={PAL.redShade} strokeWidth="8" strokeLinecap="round" transform="translate(1.5 2.5)" />
      <path d={FRAME} fill="none" stroke={PAL.red} strokeWidth="8" strokeLinecap="round" />
      <Shine d="M36 34.6H70" color={PAL.redLight} width={2.6} opacity={0.9} />
      {/* The thin blade and its fine teeth */}
      <path d={teeth(32, 96, 77)} fill={PAL.slate} />
      <rect x="28" y="72" width="72" height="5.5" rx="1.5" fill={PAL.mist} />
      <path d="M32 74.5H96" stroke={PAL.steel} strokeWidth="1.2" />
      {/* The wing nut at the front post */}
      <rect x="94" y="68" width="8" height="12" rx="2" fill={PAL.steel} />
      <path d="M98 66V82" stroke={PAL.slate} strokeWidth="3.4" strokeLinecap="round" />
      {/* The pistol grip at the back */}
      <path d="M22 66H36L33 98Q32 102 27 102H18Q13 102 14 97Z" fill={PAL.slateDark} transform="translate(1.5 1.5)" />
      <path d="M22 66H36L33 98Q32 102 27 102H18Q13 102 14 97Z" fill={PAL.slate} />
      <path d="M20 74L17 96" stroke={PAL.steel} strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
