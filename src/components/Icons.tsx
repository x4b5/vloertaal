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

/** "You" in a chat: a new colleague in a blue work shirt with a hair bun. */
export const LearnerIcon = (p: IconProps) => (
  <Svg {...p} viewBox="0 0 64 64">
    {/* Hair: bun and back of the head */}
    <circle cx="32" cy="12" r="7" fill="#2b2118" />
    <path d="M15 38c0-13 7-21 17-21s17 8 17 21v6H15z" fill="#2b2118" />
    {/* Face */}
    <rect x="19" y="24" width="26" height="25" rx="11" fill="#a86a43" />
    <path d="M18 31c4-1 9-5 11-9 4 5 11 8 17 9v-4c0-6-6-10-14-10s-14 4-14 10z" fill="#2b2118" />
    <circle cx="26.5" cy="36" r="2.2" fill="#1f1a17" />
    <circle cx="37.5" cy="36" r="2.2" fill="#1f1a17" />
    <path d="M27.5 42.5c2.6 2.2 6.4 2.2 9 0" fill="none" stroke="#1f1a17" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="18.5" cy="40" r="1.8" fill="#ffc800" />
    <circle cx="45.5" cy="40" r="1.8" fill="#ffc800" />
    {/* Work shirt with collar */}
    <path d="M14 64c1-8 8-12 18-12s17 4 18 12z" fill="#1cb0f6" />
    <path d="M26 52.5l6 6 6-6" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const BoltIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M13.6 1.8L4.6 13.4h6.1l-1.6 8.8 9.4-12.1h-6.3z" fill="#ffc800" stroke="#e5a400" strokeWidth="1.1" strokeLinejoin="round" />
    <path d="M12.6 4.6L7.8 11.4h3" fill="none" stroke="#fff3b0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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

/** Four-pointed twinkle used around the celebration. */
const sparkle = (x: number, y: number, r: number) =>
  `M${x} ${y - r}C${x + r * 0.18} ${y - r * 0.18} ${x + r * 0.18} ${y - r * 0.18} ${x + r} ${y}` +
  `C${x + r * 0.18} ${y + r * 0.18} ${x + r * 0.18} ${y + r * 0.18} ${x} ${y + r}` +
  `C${x - r * 0.18} ${y + r * 0.18} ${x - r * 0.18} ${y + r * 0.18} ${x - r} ${y}` +
  `C${x - r * 0.18} ${y - r * 0.18} ${x - r * 0.18} ${y - r * 0.18} ${x} ${y - r}z`;

/** Firework burst: eight rays around a centre, alternating long and short. */
function Burst({ x, y, r, color, className }: { x: number; y: number; r: number; color: string; className?: string }) {
  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    const long = i % 2 === 0;
    const r0 = r * 0.42;
    const r1 = long ? r : r * 0.72;
    return (
      <path
        key={i}
        d={`M${(x + Math.cos(a) * r0).toFixed(1)} ${(y + Math.sin(a) * r0).toFixed(1)}L${(x + Math.cos(a) * r1).toFixed(1)} ${(y + Math.sin(a) * r1).toFixed(1)}`}
        stroke={color}
        strokeWidth={long ? 4 : 3.4}
        strokeLinecap="round"
      />
    );
  });
  return <g className={className}>{rays}</g>;
}

/**
 * Lesson-complete scene: our construction worker jumps for joy, both fists in the air,
 * eyes squeezed shut with a big grin, with fireworks and twinkles around.
 */
export function CelebrationArt({ className }: { className?: string }) {
  const skin = '#f5c59a';
  const skinShade = '#e3a97a';
  const ink = '#3c3c3c';
  return (
    <svg className={`celebration ${className ?? ''}`} viewBox="0 0 280 230" aria-hidden focusable="false">
      {/* Fireworks and twinkles */}
      <Burst x={36} y={66} r={30} color="#93d333" className="cel-burst cel-b1" />
      <Burst x={240} y={128} r={22} color="#1cb0f6" className="cel-burst cel-b2" />
      <g className="cel-twinkle cel-t1"><path d={sparkle(206, 30, 10)} fill="#ffc800" /></g>
      <g className="cel-twinkle cel-t2"><path d={sparkle(86, 18, 7)} fill="#ff9600" /></g>
      <g className="cel-twinkle cel-t3"><path d={sparkle(232, 76, 6)} fill="#ce82ff" /></g>
      <g className="cel-twinkle cel-t4"><path d={sparkle(30, 150, 8)} fill="#ffc800" /></g>
      <circle cx="176" cy="16" r="4.5" fill="none" stroke="#ffc800" strokeWidth="2.6" className="cel-twinkle cel-t2" />
      <circle cx="66" cy="120" r="3" fill="#ff86d0" className="cel-twinkle cel-t3" />
      <circle cx="252" cy="44" r="3" fill="#93d333" className="cel-twinkle cel-t1" />
      <circle cx="210" cy="176" r="3.4" fill="none" stroke="#ff9600" strokeWidth="2.2" className="cel-twinkle cel-t4" />

      {/* Ground shadow (stays put while the worker jumps) */}
      <ellipse cx="140" cy="214" rx="58" ry="6" fill="var(--line)" className="cel-shadow" />

      <g className="cel-worker">
        {/* Legs in navy work trousers, knees bent mid-jump */}
        <path d="M128 160l-10 22 6 14" fill="none" stroke="#2b5d9b" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M152 160l10 22-6 14" fill="none" stroke="#2b5d9b" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" />
        {/* Safety boots */}
        <path d="M112 192h20a6 6 0 0 1 6 6v3a3 3 0 0 1-3 3h-27a6 6 0 0 1-6-6 6 6 0 0 1 6-6z" fill="#6b4423" />
        <path d="M168 192h-20a6 6 0 0 0-6 6v3a3 3 0 0 0 3 3h27a6 6 0 0 0 6-6 6 6 0 0 0-6-6z" fill="#6b4423" />
        <path d="M104 201h31M176 201h-31" stroke="#4a2e17" strokeWidth="3" strokeLinecap="round" />

        {/* Arms up: blue sleeves, then forearms */}
        <path d="M116 118l-20-18" stroke="#1cb0f6" strokeWidth="16" strokeLinecap="round" />
        <path d="M96 100l-8-32" stroke={skin} strokeWidth="13" strokeLinecap="round" />
        <path d="M164 118l20-18" stroke="#1cb0f6" strokeWidth="16" strokeLinecap="round" />
        <path d="M184 100l8-32" stroke={skin} strokeWidth="13" strokeLinecap="round" />
        {/* Fists */}
        <circle cx="87" cy="62" r="10" fill={skin} />
        <path d="M81 58h11M81 63h11" stroke={skinShade} strokeWidth="2" strokeLinecap="round" />
        <circle cx="193" cy="62" r="10" fill={skin} />
        <path d="M188 58h11M188 63h11" stroke={skinShade} strokeWidth="2" strokeLinecap="round" />
        {/* Joy lines next to the fists */}
        <path d="M74 44l-6-5M190 40l3-8M206 52l7-4M86 40l-3-8" stroke="#ffc800" strokeWidth="3" strokeLinecap="round" />

        {/* Body: blue shirt under an orange hi-vis vest with reflective stripes */}
        <rect x="112" y="108" width="56" height="58" rx="20" fill="#1cb0f6" />
        <path d="M112 128a20 20 0 0 1 20-20h4l4 16 4-16h4a20 20 0 0 1 20 20v18a20 20 0 0 1-20 20h-16a20 20 0 0 1-20-20z" fill="#ff7a00" />
        <path d="M112 140h56M112 152h56" stroke="#fff6d6" strokeWidth="5" />
        <path d="M140 124v42" stroke="#d96500" strokeWidth="2" />
        <rect x="147" y="128" width="12" height="8" rx="2" fill="#ffc800" />

        {/* Head */}
        <rect x="134" y="98" width="12" height="12" rx="4" fill={skinShade} />
        <circle cx="140" cy="78" r="26" fill={skin} />
        <circle cx="114.5" cy="80" r="5" fill={skin} />
        <circle cx="165.5" cy="80" r="5" fill={skin} />
        {/* Happy squeezed eyes */}
        <path d="M122 76l7 4-7 4" fill="none" stroke={ink} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M158 76l-7 4 7 4" fill="none" stroke={ink} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="122" cy="91" r="4.5" fill="#ff8c8c" opacity="0.6" />
        <circle cx="158" cy="91" r="4.5" fill="#ff8c8c" opacity="0.6" />
        {/* Big open grin */}
        <path d="M128 88h24a12 12 0 0 1-24 0z" fill="#7a2e2e" />
        <path d="M131 89h18v3h-18z" fill="#fff" />
        <path d="M133.5 96.5a8 5 0 0 1 13 0 10 10 0 0 1-13 0z" fill="#ff7c8a" />

        {/* Hard hat */}
        <path d="M112 66a28 26 0 0 1 56 0z" fill="#ffc800" />
        <path d="M120 52a24 22 0 0 1 12-10" fill="none" stroke="#fff3b0" strokeWidth="4" strokeLinecap="round" />
        <rect x="135" y="40" width="10" height="26" rx="5" fill="#ffd94d" />
        <rect x="106" y="62" width="68" height="9" rx="4.5" fill="#e5a400" />
      </g>
    </svg>
  );
}
