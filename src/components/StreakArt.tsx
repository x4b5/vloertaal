/**
 * Art for the day-streak milestone: our construction worker proudly on a podium,
 * thumbs up, and the big streak flame. Inline SVG so it follows the theme.
 */

/** Four-pointed twinkle. */
const twinkle = (x: number, y: number, r: number) => {
  const k = r * 0.18;
  return (
    `M${x} ${y - r}C${x + k} ${y - k} ${x + k} ${y - k} ${x + r} ${y}` +
    `C${x + k} ${y + k} ${x + k} ${y + k} ${x} ${y + r}` +
    `C${x - k} ${y + k} ${x - k} ${y + k} ${x - r} ${y}` +
    `C${x - k} ${y - k} ${x - k} ${y - k} ${x} ${y - r}z`
  );
};

export function StreakArt({ className }: { className?: string }) {
  const skin = '#f5c59a';
  const skinShade = '#e3a97a';
  const ink = '#3c3c3c';
  return (
    <svg className={`streak-art ${className ?? ''}`} viewBox="0 0 240 220" aria-hidden focusable="false">
      {/* Twinkles around the podium */}
      <g className="cel-twinkle cel-t1"><path d={twinkle(200, 44, 10)} fill="#ffc800" /></g>
      <g className="cel-twinkle cel-t3"><path d={twinkle(34, 70, 7)} fill="#ff9600" /></g>
      <g className="cel-twinkle cel-t2"><path d={twinkle(214, 132, 6)} fill="#ffc800" /></g>
      <circle cx="44" cy="140" r="3.4" fill="none" stroke="#ffc800" strokeWidth="2.4" className="cel-twinkle cel-t4" />

      {/* Podium: round plinth in our orange, lit from above */}
      <g className="streak-podium">
        <path d="M38 184v14c0 10 37 18 82 18s82-8 82-18v-14z" fill="#d96500" />
        <ellipse cx="120" cy="184" rx="82" ry="18" fill="#ff9600" />
        <ellipse cx="120" cy="184" rx="66" ry="12" fill="#ffad33" />
        <path d="M70 180c14-5 34-7 50-7" fill="none" stroke="#ffd08a" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g className="streak-worker">
        {/* Legs in navy work trousers, standing firm */}
        <path d="M108 150v26M132 150v26" stroke="#2b5d9b" strokeWidth="17" strokeLinecap="round" />
        {/* Safety boots */}
        <path d="M94 172h20a5 5 0 0 1 5 5v4a3 3 0 0 1-3 3h-26a5 5 0 0 1-5-5 7 7 0 0 1 9-7z" fill="#6b4423" />
        <path d="M146 172h-20a5 5 0 0 0-5 5v4a3 3 0 0 0 3 3h26a5 5 0 0 0 5-5 7 7 0 0 0-9-7z" fill="#6b4423" />

        {/* Right arm (viewer's right): hand on the hip */}
        <path d="M144 112l20 20" stroke="#1cb0f6" strokeWidth="16" strokeLinecap="round" />
        <path d="M164 132l-14 16" stroke={skin} strokeWidth="13" strokeLinecap="round" />

        {/* Body: blue shirt under an orange hi-vis vest with reflective stripes */}
        <rect x="92" y="100" width="56" height="58" rx="20" fill="#1cb0f6" />
        <path d="M92 120a20 20 0 0 1 20-20h4l4 16 4-16h4a20 20 0 0 1 20 20v18a20 20 0 0 1-20 20h-16a20 20 0 0 1-20-20z" fill="#ff7a00" />
        <path d="M92 132h56M92 144h56" stroke="#fff6d6" strokeWidth="5" />
        <path d="M120 116v42" stroke="#d96500" strokeWidth="2" />
        {/* Little flame badge on the vest */}
        <path d="M134 118c.4 2 3 3.3 3 6.5a3 3 0 0 1-6 0c0-1.3.6-2.1 1.3-2.8.1.9.6 1.5 1.2 1.8-.3-2.3 0-4.3.5-5.5z" fill="#ffc800" />

        {/* Left arm (viewer's left): thumbs up */}
        <path d="M96 112l-22 18" stroke="#1cb0f6" strokeWidth="16" strokeLinecap="round" />
        <path d="M74 130l-4-28" stroke={skin} strokeWidth="13" strokeLinecap="round" />
        <rect x="60" y="88" width="20" height="18" rx="7" fill={skin} />
        <rect x="64.5" y="72" width="9" height="22" rx="4.5" fill={skin} />
        <path d="M64 95h12M64 100h12" stroke={skinShade} strokeWidth="2" strokeLinecap="round" />
        <path d="M54 74l-7-4M62 62l-3-7M80 64l4-6" stroke="#ffc800" strokeWidth="3" strokeLinecap="round" />

        {/* Head */}
        <rect x="114" y="90" width="12" height="12" rx="4" fill={skinShade} />
        <circle cx="120" cy="70" r="26" fill={skin} />
        <circle cx="94.5" cy="72" r="5" fill={skin} />
        <circle cx="145.5" cy="72" r="5" fill={skin} />
        {/* One eye open, one wink */}
        <circle cx="110" cy="70" r="3.4" fill={ink} />
        <path d="M125 70.5q5-4.5 10 0" fill="none" stroke={ink} strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="103" cy="80" r="4.5" fill="#ff8c8c" opacity="0.55" />
        <circle cx="137" cy="80" r="4.5" fill="#ff8c8c" opacity="0.55" />
        {/* Confident grin */}
        <path d="M108 80q12 12 24 0z" fill="#7a2e2e" />
        <path d="M110 80.5h20l-1.5 2.6h-17z" fill="#fff" />

        {/* Hard hat */}
        <path d="M92 58a28 26 0 0 1 56 0z" fill="#ffc800" />
        <path d="M100 44a24 22 0 0 1 12-10" fill="none" stroke="#fff3b0" strokeWidth="4" strokeLinecap="round" />
        <rect x="115" y="32" width="10" height="26" rx="5" fill="#ffd94d" />
        <rect x="86" y="54" width="68" height="9" rx="4.5" fill="#e5a400" />
      </g>
    </svg>
  );
}

/** The big streak flame: orange outside, yellow heart, a glint of light. */
export function StreakFlame({ size = 88, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={`streak-flame ${className ?? ''}`}
      viewBox="0 0 64 72"
      width={size * (64 / 72)}
      height={size}
      aria-hidden
      focusable="false"
    >
      <path
        d="M30 3c2 9 14 15 21 25 5 7 7 13 7 19 0 14-11 23-26 23S6 61 6 47c0-8 3-14 9-20 1 5 3 8 7 10-2-12 2-24 8-34z"
        fill="#ff9600"
      />
      <path d="M14 44c-1 4 0 9 3 12" fill="none" stroke="#ffb340" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M32 68c-9 0-15-6-15-14 0-7 5-11 9-17 1 4 3 6 6 7 0-5 2-9 5-12 3 6 10 11 10 22 0 8-6 14-15 14z"
        fill="#ffc800"
      />
      <path d="M32 66c-5 0-8-3-8-7 0-4 3-6 5-9 2 3 4 4 6 4 1-1 2-3 2-5 2 3 3 6 3 10 0 4-3 7-8 7z" fill="#fff3b0" />
    </svg>
  );
}
