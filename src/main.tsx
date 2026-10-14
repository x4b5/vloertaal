import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ShotHarness } from './dev/ShotHarness';
import { loadProgress } from './lib/progress';
import { applyTheme } from './lib/theme';
import { applyTextSize } from './lib/textSize';
import { refreshOfflineShell } from './lib/offline';
import '@fontsource-variable/lexend';
import '@fontsource/big-shoulders-stencil-display/800';
import './styles.css';

const params = new URLSearchParams(location.search);

// Apply the saved theme before the first paint, so there is no light/dark flash.
// Dev screenshot pages follow the browser's colour scheme instead.
applyTheme(import.meta.env.DEV && params.get('shot') ? 'auto' : loadProgress().theme);
// The text size too, so the first paint already has it (screenshots: &text=large|xl).
applyTextSize(import.meta.env.DEV && params.get('shot') ? (params.get('text') as 'large' | 'xl' | null) ?? 'normal' : loadProgress().textSize);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {import.meta.env.DEV && params.get('shot') ? (
      <ShotHarness shot={params.get('shot')!} lang={params.get('lang')} word={params.get('word')} />
    ) : (
      <App />
    )}
  </StrictMode>,
);

// Offline support: cache the app after the first visit (production only).
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
    // Units saved for offline use get the app files of this version (src/lib/offline.ts).
    window.setTimeout(() => { refreshOfflineShell(); }, 3000);
  });
}
