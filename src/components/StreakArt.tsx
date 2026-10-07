/** The streak flame, used big on the day-streak milestone. Inline SVG so it follows the theme. */

/** The flame's shapes in a 64 x 72 box (base at the bottom centre, about (32, 70)). */
export function FlameArt({ face = false }: { face?: boolean }) {
  return (
    <g>
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
      {face && (
        // A happy little face: eyes squeezed shut, open smile (it is being hugged).
        <g>
          <path d="M22.5 52.5q2.6-3.4 5.2 0M36.3 52.5q2.6-3.4 5.2 0" fill="none" stroke="#7a3a00" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M27.4 57.4q4.6 4.4 9.2 0q-.6 4.6-4.6 4.6t-4.6-4.6z" fill="#7a3a00" />
          <ellipse cx="20.6" cy="57" rx="2.6" ry="1.6" fill="#ff7b5b" opacity=".6" />
          <ellipse cx="43.4" cy="57" rx="2.6" ry="1.6" fill="#ff7b5b" opacity=".6" />
        </g>
      )}
    </g>
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
      <FlameArt />
    </svg>
  );
}
