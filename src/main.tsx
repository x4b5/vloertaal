import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ShotHarness } from './dev/ShotHarness';
import { loadProgress } from './lib/progress';
import { applyTheme } from './lib/theme';
import '@fontsource-variable/lexend';
import '@fontsource/big-shoulders-stencil-display/800.css';
import './styles.css';

const params = new URLSearchParams(location.search);

// Apply the saved theme before the first paint, so there is no light/dark flash.
// Dev screenshot pages follow the browser's colour scheme instead.
applyTheme(import.meta.env.DEV && params.get('shot') ? 'auto' : loadProgress().theme);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {import.meta.env.DEV && params.get('shot') ? (
      <ShotHarness shot={params.get('shot')!} lang={params.get('lang')} />
    ) : (
      <App />
    )}
  </StrictMode>,
);

// Offline support: cache the app after the first visit (production only).
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
