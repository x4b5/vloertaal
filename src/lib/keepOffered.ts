/**
 * Whether the reminder and home-screen offer was shown already (KeepScreen in
 * src/components/Milestone.tsx marks it, once). Its own small file so App.tsx can ask without
 * loading the Milestone screens' file (src/lazyScreens.tsx). The same key and answer as
 * Milestone.tsx's keepOffered (tests/lazyScreens.test.ts keeps the two together).
 */
const KEEP_OFFERED = 'vloertaal.keepOffered';

export function keepOffered(): boolean {
  try { return localStorage.getItem(KEEP_OFFERED) === '1'; } catch { return false; }
}
