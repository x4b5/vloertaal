import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de vestiging": the branch (the office of the agency in your town) — the agency's shop front on a
  // street: an orange sign band, a striped awning, a big window with job cards and a glass door, and a
  // red map pin on its roof: this office, here in your town.
  'w.vestiging': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={50} ry={4} />
      {/* The building */}
      <Shade color={PAL.paperShade} opacity={1} at={[110, 74, 14, 46]}>
        <rect x="14" y="40" width="92" height="64" rx="3" fill={PAL.paper} />
      </Shade>
      <rect x="14" y="40" width="92" height="12" rx="3" fill={PAL.orange} />
      <rect x="84" y="40" width="22" height="12" rx="3" fill={PAL.orangeShade} />
      {/* The awning */}
      <path d="M12 54H108L104 64H16Z" fill={PAL.orange} />
      {[24, 40, 56, 72, 88].map((x) => <path key={x} d={`M${x} 54L${x - 0.6} 64`} stroke={PAL.white} strokeWidth="6" />)}
      {/* The window with three job cards */}
      <rect x="20" y="68" width="52" height="30" rx="2" fill={PAL.ice} />
      <rect x="25" y="72" width="12" height="15" rx="1.5" fill={PAL.yellow} />
      <rect x="40" y="74" width="12" height="15" rx="1.5" fill={PAL.white} />
      <rect x="55" y="72" width="12" height="15" rx="1.5" fill={PAL.lime} />
      <path d="M28 82H34M43 84H49M58 82H64" stroke={PAL.line} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 94L34 70" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" opacity=".7" />
      {/* The door */}
      <rect x="78" y="68" width="22" height="36" rx="2" fill={PAL.slate} />
      <rect x="81" y="71" width="16" height="30" rx="1.5" fill={PAL.ice} />
      <rect x="92" y="84" width="3" height="8" rx="1.5" fill={PAL.slateDark} />
      {/* The map pin */}
      <path d="M60 42C52 32 46 26 46 19A14 14 0 0 1 74 19C74 26 68 32 60 42Z" fill={PAL.redShade} transform="translate(1.5 1.5)" />
      <path d="M60 42C52 32 46 26 46 19A14 14 0 0 1 74 19C74 26 68 32 60 42Z" fill={PAL.red} />
      <circle cx="60" cy="19" r="5.4" fill={PAL.white} />
      <Shine d="M50 16A10 10 0 0 1 55 9" width={2.6} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
