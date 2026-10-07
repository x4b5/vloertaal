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

export const FlameIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.5c.6 3.2 4.8 5.3 4.8 10.4a4.8 4.8 0 0 1-9.6 0c0-2 1-3.4 2.1-4.4.2 1.4.9 2.4 1.9 2.8C10.6 8.5 11 5.2 12 2.5z" fill="#ff9600" />
    <path d="M12 21.5a3.4 3.4 0 0 1-3.4-3.4c0-2.2 2.1-3.3 2.9-5.4 1.3 1.4 3.9 2.9 3.9 5.4a3.4 3.4 0 0 1-3.4 3.4z" fill="#ffc800" />
  </Svg>
);

export const StarIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill="#ffc800" stroke="#e5a400" strokeWidth="1.2" strokeLinejoin="round" />
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

export const PlayStarIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" fill="currentColor" />
  </Svg>
);

export const AlertIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10.3 3.9a2 2 0 0 1 3.4 0l8 13.8a2 2 0 0 1-1.7 3H4a2 2 0 0 1-1.7-3z" fill="#ff4b4b" />
    <path d="M12 9v5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="12" cy="17.3" r="1.5" fill="#fff" />
  </Svg>
);

export const TargetIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.4" />
    <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2.4" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" />
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

export const MascotIcon = (p: IconProps) => (
  <Svg {...p} viewBox="0 0 64 64">
    {/* Hard hat */}
    <path d="M12 30a20 20 0 0 1 40 0z" fill="#ffc800" />
    <rect x="8" y="28" width="48" height="6" rx="3" fill="#e5a400" />
    <rect x="29" y="11" width="6" height="17" rx="3" fill="#ffd94d" />
    {/* Face */}
    <circle cx="32" cy="42" r="14" fill="#f5c59a" />
    <circle cx="26.5" cy="41" r="2.2" fill="#3c3c3c" />
    <circle cx="37.5" cy="41" r="2.2" fill="#3c3c3c" />
    <path d="M26 47.5c3.5 3 8.5 3 12 0" fill="none" stroke="#3c3c3c" strokeWidth="2.4" strokeLinecap="round" />
    {/* Hi-vis collar */}
    <path d="M18 60c2-4 7-6 14-6s12 2 14 6z" fill="#ff7a00" />
    <path d="M24 56.5l3 3.5M40 56.5l-3 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);
