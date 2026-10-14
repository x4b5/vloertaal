import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { loadProgress } from './lib/progress';
import { applyTheme } from './lib/theme';
import { applyTextSize } from './lib/textSize';
import { applyEnglish } from './lib/english';
import { refreshOfflineShell, warmLanguageCache } from './lib/offline';
import { ensureLanguage, LANG_CODES } from './i18n';
import { loadPictures } from './pictures';
import '@fontsource-variable/lexend';
import '@fontsource/big-shoulders-stencil-display/800';
import './styles.css';

const params = new URLSearchParams(location.search);

// Apply the saved theme before the first paint, so there is no light/dark flash.
// Dev screenshot pages follow the browser's colour scheme instead.
applyTheme(import.meta.env.DEV && params.get('shot') ? 'auto' : loadProgress().theme);
// The text size too, so the first paint already has it (screenshots: &text=large|xl).
applyTextSize(import.meta.env.DEV && params.get('shot') ? (params.get('text') as 'large' | 'xl' | null) ?? 'normal' : loadProgress().textSize);

// English next to the help language: hidden unless "Show English too" is on (screenshots: &en=1).
applyEnglish(import.meta.env.DEV && params.get('shot') ? params.get('lang') : loadProgress().helpLang, import.meta.env.DEV && params.get('shot') ? params.get('en') === '1' : undefined);

const langBoot = ensureLanguage(loadProgress().helpLang).catch(() => {});
// The word pictures load alongside (their own file); a returning learner's first screen has them.
const picsBoot = loadPictures().catch(() => {});
const render = (node: ReactNode) => createRoot(document.getElementById('root')!).render(<StrictMode>{node}</StrictMode>);

if (import.meta.env.DEV && params.get('shot')) {
  // Dev screenshots (never in the production bundle): the shot's help language and the pictures first.
  const shotLang = LANG_CODES.find((c) => c === params.get('lang'));
  void Promise.all([import('./dev/ShotHarness'), loadPictures(), ensureLanguage(shotLang)]).then(([{ ShotHarness }]) =>
    render(<ShotHarness shot={params.get('shot')!} lang={params.get('lang')} word={params.get('word')} />));
} else {
  // The saved help language's texts first (index.html's static splash stays up meanwhile), so the
  // first screen has its help text. If that fails (offline, nothing saved), App shows the splash and retries.
  void Promise.all([langBoot, loadProgress().onboarded ? picsBoot : null]).then(() => render(<App />));
}

// Offline support: cache the app after the first visit (production only).
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
    // Units saved for offline use get the app files of this version (src/lib/offline.ts).
    // (After the help language's file is here: it is part of the app saved with them.)
    void Promise.all([langBoot, picsBoot]).then(() => window.setTimeout(() => { refreshOfflineShell(); }, 3000));
    // The help language's file may have loaded before the service worker ran: let it keep a copy.
    navigator.serviceWorker.ready.then(() => window.setTimeout(warmLanguageCache, 1500)).catch(() => {});
  });
}
