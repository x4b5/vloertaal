import type { ThemeChoice } from './progress';

/** The browser bar (theme-color) per colour: the floor of each palette (src/styles.css). */
export const THEME_BAR: Record<Exclude<ThemeChoice, 'auto'>, string> = {
  light: '#f3ede3',
  haven: '#e8f0f0',
  werkjas: '#eceff3',
  dark: '#16191c',
};

/** 'auto' follows the device; a colour overrides it via <html data-theme>. */
export function applyTheme(theme: ThemeChoice): void {
  const root = document.documentElement;
  if (theme === 'auto') delete root.dataset.theme;
  else root.dataset.theme = theme;
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
    const metaIsDark = m.getAttribute('media')?.includes('dark');
    m.setAttribute('content', THEME_BAR[theme === 'auto' ? (metaIsDark ? 'dark' : 'light') : theme]);
  });
}
