import type { ThemeChoice } from './progress';

/** The browser bar (theme-color) per colour: the floor of each palette (src/styles.css). */
export const THEME_BAR: Record<Exclude<ThemeChoice, 'auto'>, string> = {
  light: '#eee1cc',
  haven: '#d0e9e8',
  werkjas: '#d9e4f3',
  dark: '#1b1916',
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
