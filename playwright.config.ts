import { defineConfig, devices } from '@playwright/test';

/**
 * Flow tests: a phone-sized Chromium clicks through the production build (npm run build, then
 * vite preview), with its service worker, the way a learner does (phase 3, 4 November 2026).
 * `npm run e2e` (after `npm run build`); in CI: .github/workflows/flows.yml. The files are
 * e2e/*.flow.ts, so vitest (npm test) never picks them up. E2E_PORT: another port (a preview that
 * already runs there is used as it is, outside CI).
 */
const PORT = Number(process.env.E2E_PORT ?? 4317);
const CI = Boolean(process.env.CI);

export default defineConfig({
  testDir: 'e2e',
  testMatch: '**/*.flow.ts',
  // Each test has its own browser context: its own storage, caches and service worker.
  fullyParallel: true,
  workers: CI ? 2 : 3,
  forbidOnly: CI,
  // One retry in CI only: a shared runner can hiccup; locally a failure shows at once.
  retries: CI ? 1 : 0,
  timeout: 60_000,
  expect: { timeout: 10_000 },
  reporter: CI ? [['list'], ['github']] : 'list',
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    ...devices['Pixel 7'],
    // Chromium for every project (the Pixel profile alone would not say which browser).
    browserName: 'chromium',
    locale: 'nl-NL',
    serviceWorkers: 'allow',
    trace: CI ? 'retain-on-failure' : 'off',
  },
  webServer: {
    command: `npx vite preview --port ${PORT} --strictPort --host 127.0.0.1`,
    url: `http://127.0.0.1:${PORT}/`,
    reuseExistingServer: !CI,
    timeout: 120_000,
  },
});
