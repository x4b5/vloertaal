import { expect, test, type Page } from '@playwright/test';
import { lessonStep, openAsLearner } from './helpers';

/**
 * Until the service worker runs this page and keeps every app file it loaded (its help
 * language's file too, src/lib/offline.ts warmLanguageCache): then the app opens offline.
 */
async function appKept(page: Page): Promise<void> {
  await expect.poll(() => page.evaluate(async () => {
    if (!navigator.serviceWorker?.controller) return false;
    const files = performance.getEntriesByType('resource').map((e) => e.name).filter((u) => /\/assets\/[^/]+\.js$/.test(u));
    for (const u of files) if (!(await caches.match(u))) return false;
    return files.length > 0;
  }), { timeout: 30_000 }).toBe(true);
}

test('offline, a reload opens the app (and a lesson)', async ({ page, context }) => {
  await openAsLearner(page);
  await expect(page.locator('.home3 button.bay-card')).toBeVisible();
  await appKept(page);
  await context.setOffline(true);
  await page.reload();
  await expect(page.locator('.home3 button.bay-card')).toBeVisible();
  // In the help language (its file came from the phone), and a lesson opens.
  await expect(page.locator('html')).toHaveAttribute('lang', /^tr/);
  await page.locator('.home3 button.bay-card').click();
  await expect(page.locator('.player .lbar')).toBeVisible();
});

test('the current topic is on the phone by default: offline its lesson still has its sound', async ({ page, context }) => {
  await openAsLearner(page);
  await expect(page.locator('.home3 button.bay-card')).toBeVisible();
  // "Lessen bewaren" is on without asking (src/lib/offline.ts offlineAuto): the topic is saved.
  await page.waitForFunction(() => Boolean(JSON.parse(localStorage.getItem('vloertaal:offline') ?? '{}').units?.['u.firstday']), undefined, { timeout: 45_000, polling: 250 });
  await appKept(page);
  await context.setOffline(true);
  await page.reload();
  await page.locator('.home3 button.bay-card').click();
  await expect(page.locator('.player .lbar')).toBeVisible();
  // The first word's clip comes from the phone (the service worker answers from the saved topic).
  const clip = await page.evaluate(async () => {
    const res = await fetch('./audio-el/thijmen/w.hallo.mp3').catch(() => null);
    return res ? { ok: res.ok, size: (await res.blob()).size } : null;
  });
  expect(clip?.ok).toBe(true);
  expect(clip?.size).toBeGreaterThan(1000);
  // A few steps: never the line "Geen internet" (nothing of this topic needs the network).
  for (let i = 0; i < 6; i++) await lessonStep(page);
  await expect(page.locator('.sound-note-net')).toHaveCount(0);
});
