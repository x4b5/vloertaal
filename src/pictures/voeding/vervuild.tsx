import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "vervuild": contaminated (something dirty got in) — a steel mixing bowl of white dough, with dark
  // specks of dirt all over the dough and a brown smear of dirt running over the rim; a fly buzzes above.
  // On the intro card the fly takes off from the dough along its dotted trail (once, slowly).
  'w.vervuild': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={36} ry={4} />
      {/* The bowl: steel, its right side in shade */}
      <Shade color={PAL.steel} opacity={1} at={[106, 80, 20, 30]}>
        <path d="M12 56H108Q106 94 78 102H42Q14 94 12 56Z" fill={PAL.mist} />
      </Shade>
      <ellipse cx="60" cy="56" rx="48" ry="15" fill={PAL.paperShade} />
      {/* The white dough with dirt in it */}
      <ellipse cx="60" cy="57" rx="43" ry="12" fill={PAL.paper} />
      <g fill={PAL.brown}>
        <circle cx="38" cy="54" r="3.2" /><circle cx="56" cy="60" r="2.6" /><circle cx="72" cy="52" r="3.6" /><circle cx="86" cy="60" r="2.4" />
        <circle cx="46" cy="62" r="2" /><circle cx="64" cy="50" r="2" />
      </g>
      <g fill={PAL.slateDark}>
        <circle cx="28" cy="60" r="2" /><circle cx="80" cy="56" r="1.8" /><circle cx="52" cy="52" r="1.6" />
      </g>
      {/* A brown smear over the rim and down the side */}
      <path d="M86 46Q96 46 100 54Q102 62 98 72Q96 78 93 72Q92 64 88 60Q82 56 86 46Z" fill={PAL.brown} />
      <Shine d="M20 66Q24 80 34 88" width={3.5} opacity={0.7} />
      {/* A fly */}
      <Move kind="slow" dx={20} dy={22} once>
        <ellipse cx="36" cy="24" rx="7" ry="5" fill={PAL.ice} transform="rotate(-30 36 24)" />
        <ellipse cx="46" cy="22" rx="7" ry="5" fill={PAL.ice} transform="rotate(30 46 22)" />
        <ellipse cx="41" cy="30" rx="6" ry="4.5" fill={PAL.slateDark} />
        <circle cx="35" cy="31" r="3.2" fill={PAL.slateDark} />
      </Move>
      <path d="M50 34Q58 38 56 44" fill="none" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 4" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
