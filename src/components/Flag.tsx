import { useId } from 'react';

/**
 * The flags beside a language's name, drawn (3:2, 30×20): the colour-emoji font for flags alone was
 * 709 KB, the largest download of the first screen. Only the flags src/i18n/meta.ts uses.
 */
const STRIPES: Record<string, { dir: 'h' | 'v'; colors: string[] }> = {
  '🇺🇦': { dir: 'h', colors: ['#0057b7', '#ffd700'] },
  '🇵🇱': { dir: 'h', colors: ['#ffffff', '#dc143c'] },
  '🇧🇬': { dir: 'h', colors: ['#ffffff', '#00966e', '#d62612'] },
  '🇳🇱': { dir: 'h', colors: ['#ae1c28', '#ffffff', '#21468b'] },
  '🇷🇴': { dir: 'v', colors: ['#002b7f', '#fcd116', '#ce1126'] },
};

export function Flag({ flag, className }: { flag: string; className?: string }) {
  const s = STRIPES[flag];
  const clip = `flag-${useId().replace(/:/g, '')}`;
  return (
    <svg className={className} viewBox="0 0 30 20" width="30" height="20" aria-hidden focusable="false">
      <defs><clipPath id={clip}><rect width="30" height="20" rx="3" /></clipPath></defs>
      <g clipPath={`url(#${clip})`}>
        {s
          ? s.colors.map((c, i) => s.dir === 'h'
            ? <rect key={c} y={(20 / s.colors.length) * i} width="30" height={20 / s.colors.length + 0.2} fill={c} />
            : <rect key={c} x={(30 / s.colors.length) * i} width={30 / s.colors.length + 0.2} height="20" fill={c} />)
          : flag === '🇹🇷' && (
            <>
              <rect width="30" height="20" fill="#e30a17" />
              <circle cx="11" cy="10" r="5" fill="#ffffff" />
              <circle cx="12.3" cy="10" r="4" fill="#e30a17" />
              <polygon points="13.00,10.00 14.75,9.38 14.80,7.53 15.92,9.00 17.70,8.47 16.65,10.00 17.70,11.53 15.92,11.00 14.80,12.47 14.75,10.62" fill="#ffffff" />
            </>
          )}
      </g>
      <rect x="0.25" y="0.25" width="29.5" height="19.5" rx="3" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="0.5" />
    </svg>
  );
}
