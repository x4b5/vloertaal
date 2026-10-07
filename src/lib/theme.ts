import type { ThemeChoice } from './progress';

/** 'auto' follows the device; light/dark override it via <html data-theme>. */
export function applyTheme(theme: ThemeChoice): void {
  const root = document.documentElement;
  if (theme === 'auto') delete root.dataset.theme;
  else root.dataset.theme = theme;
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
    const metaIsDark = m.getAttribute('media')?.includes('dark');
    const dark = theme === 'auto' ? metaIsDark : theme === 'dark';
    m.setAttribute('content', dark ? '#131f24' : '#ffffff');
  });
}
