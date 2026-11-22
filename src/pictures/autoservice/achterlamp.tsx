import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de achterlamp": the rear light — the back half of a blue hatchback, side on (its rear on the right), with a
  // tall red rear light lit up at the rear corner and a red glow round it; the exhaust pipe under the bumper.
  // On the intro card: the rear light switches on, its glow and rays appear.
  'w.achterlamp': () => (
    <g strokeLinejoin="round">
      <Ground cx={54} cy={104} rx={42} ry={4.5} />
      {/* The red glow round the lamp */}
      <Move kind="show">
        <ellipse cx="88" cy="66" rx="22" ry="26" fill={PAL.red} opacity=".14" />
        <ellipse cx="88" cy="66" rx="14" ry="18" fill={PAL.red} opacity=".2" />
      </Move>
      {/* The body: roof, the sloping rear window, the upright rear */}
      <Shade color={PAL.blueShade} opacity={1} at={[60, 98, 70, 14]}>
        <path d="M10 36H56Q61 36 65 40L84 52Q88 55 88 60V88Q88 96 80 96H10Z" fill={PAL.blue} />
      </Shade>
      {/* The rear side window */}
      <path d="M14 42H55Q58 42 61 44L72 52H14Z" fill={PAL.ice} />
      <path d="M38 42V52" stroke={PAL.blue} strokeWidth="4" />
      {/* The exhaust pipe and the bumper */}
      <rect x="76" y="90" width="16" height="6" rx="3" fill={PAL.steel} />
      <rect x="54" y="82" width="38" height="9" rx="4" fill={PAL.slate} />
      {/* The wheel in its arch */}
      <path d="M28 96A16 16 0 0 1 60 96Z" fill={PAL.slateDark} />
      <circle cx="44" cy="96" r="12" fill={PAL.slate} />
      <circle cx="44" cy="96" r="5.5" fill={PAL.mist} />
      {/* The rear light: a tall red lamp at the corner, lit */}
      <path d="M80 52Q86 52 89 56Q92 60 92 66V76Q92 80 88 80H82Q78 80 78 76V54Q78 52 80 52Z" fill={PAL.red} />
      <Move kind="show">
        <path d="M82 58Q86 58 87 62V72Q87 74 85 74H83Q81 74 81 72V60Z" fill={PAL.redLight} />
        {/* Short red rays */}
        <path d="M98 50L104 45M100 66H108M98 82L104 87" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" />
      </Move>
      <Shine d="M16 36H48" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
