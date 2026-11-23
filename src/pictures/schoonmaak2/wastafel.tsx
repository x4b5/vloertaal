import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de wastafel": the washbasin — a white basin on its pedestal, seen a little from above: the wide
  // rim, the light-grey bowl with its drain, and a chrome tap at the back with a drop at the spout.
  'w.wastafel': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={26} ry={4} />
      {/* The pedestal */}
      <Shade color={PAL.paperShade} opacity={1} at={[74, 90, 8, 20]}>
        <path d="M48 74H72L69 102Q69 105 66 105H54Q51 105 51 102Z" fill={PAL.paper} />
      </Shade>
      <path d="M48 74H72L70 82H50Z" fill={PAL.mist} />
      {/* The basin's front */}
      <Shade color={PAL.paperShade} opacity={1} at={[104, 66, 22, 20]}>
        <path d="M12 52Q12 80 60 82Q108 80 108 52Z" fill={PAL.paper} />
      </Shade>
      {/* The rim and the bowl */}
      <ellipse cx="60" cy="52" rx="48" ry="14" fill={PAL.white} />
      <path d="M12 52A48 14 0 0 0 108 52" fill="none" stroke={PAL.mist} strokeWidth="2" />
      <ellipse cx="60" cy="54" rx="36" ry="9.5" fill={PAL.mist} />
      <path d="M24 54A36 9.5 0 0 1 96 54A36 7 0 0 0 24 54Z" fill={PAL.steel} opacity=".45" />
      <ellipse cx="62" cy="57" rx="4.5" ry="2" fill={PAL.slate} />
      {/* The tap at the back */}
      <rect x="54" y="28" width="12" height="18" rx="3" fill={PAL.steel} />
      <rect x="61" y="28" width="5" height="18" rx="2" fill={PAL.slate} />
      <path d="M60 30H78Q82 30 82 34V38" fill="none" stroke={PAL.steel} strokeWidth="7" strokeLinecap="round" />
      <path d="M60 28.5H77" stroke={PAL.mist} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="50" y="20" width="20" height="6" rx="3" fill={PAL.slate} />
      <path d="M82 44Q85 48 85 50A3 3 0 0 1 79 50Q79 48 82 44Z" fill={PAL.sky} />
      <Shine d="M22 47Q36 41 54 40" width={3} opacity={0.9} color={PAL.mist} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
