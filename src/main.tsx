import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { startScreens } from './lazyScreens';
import { loadProgress } from './lib/progress';
import { readTesterParam } from './lib/report';
import { watchForUpdates } from './lib/appUpdate';
import { applyTheme } from './lib/theme';
import { applyTextSize } from './lib/textSize';
import { applyEnglish } from './lib/english';
import { refreshOfflineShell, warmLanguageCache } from './lib/offline';
import { ensureLanguage, ensureRegionTexts, LANG_CODES } from './i18n';
import { ensureRegion } from './content/regio';
import { ensureRegionFor } from './lib/region';
import type { UiCode } from './i18n/types';
import { setRulesTrack } from './lib/track';
import { setDeviceRate } from './lib/audio';
import { loadPictures } from './pictures';
import '@fontsource-variable/lexend';
import '@fontsource/big-shoulders-stencil-display/800';
import './styles.css';
// The drawn cards of the work-rules track (after styles.css: they build on its .slip).
import './cards.css';

const params = new URLSearchParams(location.search);
// vloertaal.nl/?test: this phone shows "Iets melden" in lessons (testers; ?test=0 off). src/lib/report.ts
readTesterParam(location.search);

// Apply the saved theme before the first paint, so there is no light/dark flash.
// Dev screenshot pages follow the browser's colour scheme instead.
applyTheme(import.meta.env.DEV && params.get('shot') ? 'auto' : loadProgress().theme);
// The text size too, so the first paint already has it (screenshots: &text=large|xl).
applyTextSize(import.meta.env.DEV && params.get('shot') ? (params.get('text') as 'large' | 'xl' | null) ?? 'normal' : loadProgress().textSize);

// English next to the help language: hidden unless "Show English too" is on (screenshots: &en=1).
applyEnglish(import.meta.env.DEV && params.get('shot') ? params.get('lang') : loadProgress().helpLang, import.meta.env.DEV && params.get('shot') ? params.get('en') === '1' : undefined);

const langBoot = ensureLanguage(loadProgress().helpLang).catch(() => {});
// The learner's region's file and texts (only while the regions are on and a region is chosen:
// src/lib/region.ts), so a returning learner of a region has its unit and map on the first screen.
const regionBoot = ensureRegionFor(loadProgress().region, loadProgress().helpLang).catch(() => {});
// The word pictures load alongside (their own file); a returning learner's first screen has them.
const picsBoot = loadPictures().catch(() => {});
// The stylesheet loads without blocking the splash (vite.config.ts): React waits for it.
const appCss = document.querySelector<HTMLLinkElement>('link[data-app-css]');
const cssBoot = new Promise<void>((done) => {
  if (!appCss || appCss.media === 'all' || appCss.sheet?.cssRules.length) return done();
  appCss.addEventListener('load', () => done());
  appCss.addEventListener('error', () => done());
});
const render = (node: ReactNode) => createRoot(document.getElementById('root')!).render(<StrictMode>{node}</StrictMode>);

if (import.meta.env.DEV && params.get('shot')) {
  // Dev screenshots (never in the production bundle): the shot's help language and the pictures first.
  // &lang=nl is the work-rules track (its Dutch screens): RULES_TRACK is on for it (and with &rules=1).
  if (params.get('lang') === 'nl' || params.get('rules') === '1') setRulesTrack(true);
  if (params.get('lang') === 'nl') setDeviceRate('regels');
  const shotLang: UiCode | undefined = params.get('lang') === 'nl' ? 'nl' : LANG_CODES.find((c) => c === params.get('lang'));
  // The region Zuid-Limburg's file and texts too (development only: its shots, &region=zl).
  void Promise.all([import('./dev/ShotHarness'), loadPictures(), ensureLanguage(shotLang), ensureRegion('zl'), ensureRegionTexts(shotLang)]).then(([{ ShotHarness }]) =>
    render(<ShotHarness shot={params.get('shot')!} lang={params.get('lang')} word={params.get('word')} />));
} else {
  // The saved help language's texts first (index.html's static splash stays up meanwhile), so the
  // first screen has its help text. If that fails (offline, nothing saved), App shows the splash and retries.
  // Also the first screen's own file, when it has one (src/lazyScreens.tsx: a reload on Settings).
  // The first screen's file waits at most 2.5 s (a stalled connection): after that the screen's own
  // calm placeholder covers the rest (src/lazyScreens.tsx), never a splash that stays up.
  const screensBoot = Promise.race([startScreens(), new Promise<void>((done) => window.setTimeout(done, 2500))]);
  void Promise.all([langBoot, regionBoot, cssBoot, loadProgress().onboarded ? picsBoot : null, screensBoot]).then(() => render(<App />));
}

// Offline support: cache the app after the first visit (production only).
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
    // Units saved for offline use get the app files of this version (src/lib/offline.ts).
    // (After the help language's file is here: it is part of the app saved with them.)
    void Promise.all([langBoot, regionBoot, picsBoot]).then(() => window.setTimeout(() => { refreshOfflineShell(); }, 3000));
    // The help language's file may have loaded before the service worker ran: let it keep a copy.
    navigator.serviceWorker.ready.then(() => window.setTimeout(warmLanguageCache, 1500)).catch(() => {});
  });
  // An app kept open on the home screen picks up a new version when it comes back (src/lib/appUpdate.ts).
  watchForUpdates();
}
