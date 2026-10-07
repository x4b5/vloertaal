/**
 * Interface icons as inline SVG, so they look identical on every phone
 * (emoji differ per platform and can't follow the theme colour).
 */
type IconProps = { size?: number; className?: string };

function Svg({ size = 24, className, children, viewBox = '0 0 24 24' }: IconProps & {
  children: React.ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      className={`icon ${className ?? ''}`}
      viewBox={viewBox}
      width={size}
      height={size}
      aria-hidden
      focusable="false"
    >
      {children}
    </svg>
  );
}

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}><path d="M6 6l12 12M18 6L6 18" {...stroke} /></Svg>
);

export const BackIcon = (p: IconProps) => (
  <Svg {...p}><path d="M15 5l-7 7 7 7" {...stroke} /></Svg>
);

export const ChevronIcon = (p: IconProps) => (
  <Svg {...p}><path d="M9 5l7 7-7 7" {...stroke} /></Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}><path d="M5 12.5l4.5 4.5L19 7.5" {...stroke} strokeWidth={3.4} /></Svg>
);

export const SpeakerIcon = (p: IconProps) => (
  <Svg {...p} viewBox="0 0 32 32">
    <path d="M4 12.5a2 2 0 0 1 2-2h4l7-5.6c.9-.7 2-.1 2 1V25.1c0 1.1-1.1 1.7-2 1l-7-5.6H6a2 2 0 0 1-2-2z" fill="currentColor" />
    <path d="M22.5 11.5a6 6 0 0 1 0 9M25.5 8a10.5 10.5 0 0 1 0 16" {...stroke} strokeWidth={2.4} />
  </Svg>
);

/** Snail-pace speaker: a turtle shell, for "play slowly". */
export const SlowIcon = (p: IconProps) => (
  <Svg {...p} viewBox="0 0 32 32">
    <path d="M6 20c0-5.5 4.5-10 10-10s10 4.5 10 10z" fill="currentColor" />
    <path d="M11 20l2.5-5h5l2.5 5M16 10v5" fill="none" stroke="var(--icon-cut, #fff)" strokeWidth="1.8" strokeLinejoin="round" opacity=".55" />
    <circle cx="27.5" cy="17.5" r="2.5" fill="currentColor" />
    <path d="M8 20v3M24 20v3" {...stroke} strokeWidth={2.6} />
  </Svg>
);

export const GlobeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" {...stroke} strokeWidth={2} />
    <path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z" {...stroke} strokeWidth={2} />
  </Svg>
);

export const LockIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="2.5" fill="currentColor" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" {...stroke} />
  </Svg>
);

export const CrownIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 8l4.5 4 4-6.5 4 6.5 4.5-4-1.8 10.5H5.3z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </Svg>
);

export const AlertIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10.3 3.9a2 2 0 0 1 3.4 0l8 13.8a2 2 0 0 1-1.7 3H4a2 2 0 0 1-1.7-3z" fill="#c2412d" />
    <path d="M12 9v5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="12" cy="17.3" r="1.5" fill="#fff" />
  </Svg>
);

export const SunIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4.2" fill="currentColor" />
    <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" {...stroke} strokeWidth={2.2} />
  </Svg>
);

export const MoonIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="currentColor" />
  </Svg>
);

export const AutoThemeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
    <path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" />
  </Svg>
);

/** Bullseye with an arrow in the middle: the accuracy card. Colour follows the card. */
export const BullseyeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="13" r="9" fill="currentColor" />
    <circle cx="11" cy="13" r="6.2" fill="var(--bg)" />
    <circle cx="11" cy="13" r="3.6" fill="currentColor" />
    <path d="M11 13l9-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M17.5 2.5l.6 3.4 3.4.6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

/** Calendar page with a tick: the day streak in the top bar (orange accent). */
export const CalendarIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" fill="#ff7a00" />
    <rect x="5.5" y="9.5" width="13" height="9" rx="1.2" fill="#fffdf8" />
    <path d="M8 3v4M16 3v4" stroke="#1e2226" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M8.8 14l2.2 2.2 4.4-4.4" fill="none" stroke="#ff7a00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

/** Kraft cardboard box: words learned (top bar, result, Woorden). */
export const CrateIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.8l8.5 4.4v9.6L12 21.2l-8.5-4.4V7.2z" fill="#c8955b" stroke="#7e5428" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3.8 7.3L12 11.6l8.2-4.3M12 11.6v9.4" fill="none" stroke="#7e5428" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M7.6 5L16 9.4v3.2" fill="none" stroke="#ebd6b5" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Svg {...p}><path d="M6 9l6 6 6-6" {...stroke} /></Svg>
);

/** Warehouse loading door: the "Route" tab (the lesson path). */
export const RouteIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 20V9.5L12 4.5l8.5 5V20" {...stroke} strokeWidth={2.4} />
    <path d="M7.5 20v-7.5h9V20M7.5 15.5h9M7.5 18h9" {...stroke} strokeWidth={2} />
  </Svg>
);

/** Ruled list: the "Woorden" tab (emergency phrases and workplace tips). */
export const ListIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 6.5h15M4.5 12h15M4.5 17.5h10" {...stroke} strokeWidth={2.4} />
  </Svg>
);

/** A lifebuoy: the "Hulp" tab (emergency phrases and workplace tips). */
export const LifebuoyIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.6" {...stroke} strokeWidth={2.4} />
    <circle cx="12" cy="12" r="3.6" {...stroke} strokeWidth={2.4} />
    <path d="M6 6l3.4 3.4M18 6l-3.4 3.4M6 18l3.4-3.4M18 18l-3.4-3.4" {...stroke} strokeWidth={2.4} />
  </Svg>
);

/** A worker in a hard hat: the "Ik" tab (settings and you). */
export const WorkerIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.5 9.5a5.5 5.5 0 0 1 11 0z" fill="currentColor" />
    <path d="M5 9.5h14" {...stroke} strokeWidth={2.2} />
    <circle cx="12" cy="12.6" r="2.6" {...stroke} strokeWidth={2.2} />
    <path d="M6 21c.6-3.6 3-5.4 6-5.4s5.4 1.8 6 5.4" {...stroke} strokeWidth={2.4} />
  </Svg>
);

/** Eye: show the password. */
export const EyeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" {...stroke} strokeWidth={2.2} />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </Svg>
);

/** Eye struck through: hide the password. */
export const EyeOffIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" {...stroke} strokeWidth={2.2} />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <path d="M4 4l16 16" {...stroke} strokeWidth={2.4} />
  </Svg>
);
