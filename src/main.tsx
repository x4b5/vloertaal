import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ShotHarness } from './dev/ShotHarness';
import './styles.css';

const params = new URLSearchParams(location.search);

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
