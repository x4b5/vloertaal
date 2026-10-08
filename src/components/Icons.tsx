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

/** Speaker with a cross: "Without sound". */
export const SpeakerOffIcon = (p: IconProps) => (
  <Svg {...p} viewBox="0 0 32 32">
    <path d="M4 12.5a2 2 0 0 1 2-2h4l7-5.6c.9-.7 2-.1 2 1V25.1c0 1.1-1.1 1.7-2 1l-7-5.6H6a2 2 0 0 1-2-2z" fill="currentColor" />
    <path d="M22.5 12.5l7 7M29.5 12.5l-7 7" {...stroke} strokeWidth={2.6} />
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

/** An "i" in a circle: the "Over" tab (about Vloertaal). */
export const InfoIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" {...stroke} strokeWidth={2.4} />
    <path d="M12 11v6" {...stroke} strokeWidth={2.6} />
    <circle cx="12" cy="7.4" r="1.6" fill="currentColor" />
  </Svg>
);

/** A gear: the "Instellingen" tab. */
export const GearIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10.30 4.90 L10.72 2.49 L13.28 2.49 L13.70 4.90 L15.81 5.78 L17.82 4.37 L19.63 6.18 L18.22 8.19 L19.10 10.30 L21.51 10.72 L21.51 13.28 L19.10 13.70 L18.22 15.81 L19.63 17.82 L17.82 19.63 L15.81 18.22 L13.70 19.10 L13.28 21.51 L10.72 21.51 L10.30 19.10 L8.19 18.22 L6.18 19.63 L4.37 17.82 L5.78 15.81 L4.90 13.70 L2.49 13.28 L2.49 10.72 L4.90 10.30 L5.78 8.19 L4.37 6.18 L6.18 4.37 L8.19 5.78Z" {...stroke} strokeWidth={2.1} />
    <circle cx="12" cy="12" r="3.2" {...stroke} strokeWidth={2.2} />
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

/* Sector icons (the sector choice): simple line drawings in the stroke style above. */

/** Forklift with a box on its forks: logistics. */
export const ForkliftIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 16.8V11.5h5.2l2.6 5.3M3 16.8h11.5" {...stroke} strokeWidth={1.9} />
    <path d="M4.6 11.5V7.2h3l1.4 4.3" {...stroke} strokeWidth={1.9} />
    <path d="M14.5 4.5v15h7" {...stroke} strokeWidth={1.9} />
    <rect x="16.6" y="12.6" width="4.9" height="4.6" rx="0.5" {...stroke} strokeWidth={1.9} />
    <circle cx="6" cy="19.2" r="1.6" {...stroke} strokeWidth={1.9} />
    <circle cx="11.3" cy="19.2" r="1.6" {...stroke} strokeWidth={1.9} />
  </Svg>
);

/** Hard hat: construction. */
export const HelmetIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 17v-2a7.5 7.5 0 0 1 15 0v2" {...stroke} strokeWidth={2} />
    <path d="M10 7.8v5.4M14 7.8v5.4" {...stroke} strokeWidth={2} />
    <path d="M2.5 17.5h19" {...stroke} strokeWidth={2.6} />
  </Svg>
);

/** A gear over a conveyor belt: production. */
export const ConveyorIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="7.5" r="3" {...stroke} strokeWidth={2} />
    <path
      d="M12 2.6v1.4M12 11v1.4M7.1 7.5h1.4M15.5 7.5h1.4M8.6 4.1l1 1M15.4 4.1l-1 1M8.6 10.9l1-1M15.4 10.9l-1-1"
      {...stroke}
      strokeWidth={2}
    />
    <path d="M5 15.2h14a2.6 2.6 0 0 1 0 5.2H5a2.6 2.6 0 0 1 0-5.2z" {...stroke} strokeWidth={2} />
    <circle cx="5.2" cy="17.8" r="0.9" fill="currentColor" />
    <circle cx="12" cy="17.8" r="0.9" fill="currentColor" />
    <circle cx="18.8" cy="17.8" r="0.9" fill="currentColor" />
  </Svg>
);

/** A heart held in an open hand: care. */
export const CareIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 12.6s-4.6-2.8-4.6-6.1A2.5 2.5 0 0 1 12 5.1a2.5 2.5 0 0 1 4.6 1.4c0 3.3-4.6 6.1-4.6 6.1z" {...stroke} strokeWidth={2} />
    <path d="M2.5 15h3l3.2 2.2h5.1a1.4 1.4 0 0 1 0 2.8H9.5" {...stroke} strokeWidth={2} />
    <path d="M2.5 21H14l6.2-4.3a1.5 1.5 0 0 0-1.9-2.3l-3.4 2.3" {...stroke} strokeWidth={2} />
  </Svg>
);

/** A steaming cup on a saucer: hospitality. */
export const CupIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 10h10.5v4.8a4.6 4.6 0 0 1-4.6 4.6H9.6A4.6 4.6 0 0 1 5 14.8z" {...stroke} strokeWidth={2} />
    <path d="M15.5 11.3h1.4a2.5 2.5 0 0 1 0 5h-1.6" {...stroke} strokeWidth={2} />
    <path d="M3 21.5h15.5" {...stroke} strokeWidth={2} />
    <path d="M8.4 3.2c-1 1.2 1 2.1 0 3.6M12.2 3.2c-1 1.2 1 2.1 0 3.6" {...stroke} strokeWidth={1.8} />
  </Svg>
);

/** A spray bottle: cleaning. */
export const SprayIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.8 12.5h7.4l.8 7.5a1.5 1.5 0 0 1-1.5 1.6H7.5A1.5 1.5 0 0 1 6 20z" {...stroke} strokeWidth={2} />
    <path d="M8.5 12.5V9.5h4v3" {...stroke} strokeWidth={2} />
    <path d="M7.5 9.5V5.5h6.8l1.7 2.2M12.6 9.5l1.6 2" {...stroke} strokeWidth={2} />
    <circle cx="19" cy="4.6" r="1" fill="currentColor" />
    <circle cx="20.8" cy="7.4" r="1" fill="currentColor" />
    <circle cx="19" cy="10.2" r="1" fill="currentColor" />
  </Svg>
);

/** A question mark in a circle: "not sure yet". */
export const QuestionIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" {...stroke} strokeWidth={2} />
    <path d="M9.4 9.4a2.6 2.6 0 1 1 3.7 2.4c-.7.3-1.1.9-1.1 1.7v.5" {...stroke} strokeWidth={2.2} />
    <circle cx="12" cy="17" r="1.3" fill="currentColor" />
  </Svg>
);
