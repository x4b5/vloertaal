import { PRIVACY_PATH } from '../lib/paths';

/**
 * The foot of "Over": where the site is hosted (links to that section of the privacy statement)
 * and who built it. Same as the foot of digi-fort.nl. Dutch only, like the version line above it.
 */

// The European flag: twelve yellow stars in a circle on blue, sizes and colours from the official
// design (european-union.europa.eu, "The European flag"). The only drawing with its own colours,
// because a flag in other colours is no longer the flag.
const HEIGHT = 36;
const WIDTH = HEIGHT * 1.5;
const STARS = 12;
const RING = HEIGHT / 3; // radius of the circle the stars sit on
const TIP = HEIGHT / 18; // radius of a star to its points
const DIP = TIP * 0.382; // radius to the notch between two points
const BLUE = '#003399';
const YELLOW = '#FFCC00';

function star(cx: number, cy: number): string {
  const corners = Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 === 0 ? TIP : DIP;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    return `${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`;
  });
  return `M${corners.join(' L')} Z`;
}

const STAR_PATHS = Array.from({ length: STARS }, (_, i) => {
  const a = (i * 2 * Math.PI) / STARS;
  return star(WIDTH / 2 + RING * Math.sin(a), HEIGHT / 2 - RING * Math.cos(a));
});

export function EuFlag({ size = 20 }: { size?: number }) {
  return (
    <svg width={size * 1.5} height={size} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden="true" focusable="false">
      <rect width={WIDTH} height={HEIGHT} fill={BLUE} />
      {STAR_PATHS.map((d) => <path key={d} d={d} fill={YELLOW} />)}
    </svg>
  );
}

export function AboutFooter() {
  return (
    <div className="about-foot" lang="nl" dir="ltr">
      <a className="about-europe" href={`${PRIVACY_PATH}#website`} target="_blank" rel="noopener">
        <EuFlag />
        <span>Gehost in Europa</span>
      </a>
      {/* Shown at 96 wide, smaller than its true size (127×19), so the logo stays modest. */}
      <p className="about-maker">
        <span>Built by</span>
        <img className="about-maker-light" src="/a-bit-odd/a-bit-odd-logo-licht.svg" width="96" height="14" alt="a-bit-odd" />
        <img className="about-maker-dark" src="/a-bit-odd/a-bit-odd-logo-donker.svg" width="96" height="14" alt="a-bit-odd" />
      </p>
    </div>
  );
}
