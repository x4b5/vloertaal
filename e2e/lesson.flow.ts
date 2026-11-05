import { expect, test } from '@playwright/test';
import { finishLesson, lessonPlace, openAsLearner, playSteps, progress, tapUntilChanged } from './helpers';

test('a first start, to lesson 1.1 finished', async ({ page }) => {
  await page.goto('/');
  // The first page is the list of languages; then the sector and the country.
  // (A page ignores a tap that came in the moment it opened, meant for the page before: tap again.)
  await tapUntilChanged(page, page.locator('.onb-lang-list .lang-btn', { hasText: 'Türkçe' }));
  await tapUntilChanged(page, page.locator('.sector-group-row[data-group="none"]'));
  await tapUntilChanged(page, page.locator('.country-screen .max3-card').first());
  // The home: lesson 1.1 to start.
  await page.locator('.home3 button.bay-card').click();
  await expect(page.locator('.player .lbar')).toBeVisible();
  await finishLesson(page);
  expect(Object.keys((await progress(page)).completed)).toEqual(['l.hello']);
  // On from the result: the app goes on (the screens after a first lesson), no error.
  await tapUntilChanged(page, page.locator('.result-screen .result-go'));
  await expect(page.locator('.player .lbar')).toHaveCount(0);
});

test('a reload in the middle of a lesson goes on where it was', async ({ page }) => {
  await openAsLearner(page);
  await page.locator('.home3 button.bay-card').click();
  await playSteps(page, 4);
  // The place is kept after each answer (on the exercise that comes next).
  const at = await lessonPlace(page);
  await page.reload();
  // The home offers to go on (and to start again); Continue opens the lesson at the same place.
  await expect(page.locator('.home3 .bay-restart')).toBeVisible();
  await page.locator('.home3 button.bay-card').click();
  await expect(page.locator('.player .lbar')).toBeVisible();
  expect(await lessonPlace(page)).toBe(at);
});

test('Pause: Keep going, the phone\'s Back, and Stop', async ({ page }) => {
  await openAsLearner(page);
  await page.locator('.home3 button.bay-card').click();
  await playSteps(page, 2);
  const at = await lessonPlace(page);
  const sheet = page.locator('.pause-sheet');
  // The ✕ opens the pause sheet; Keep going closes it, the lesson is where it was.
  await page.locator('.player-top .lesson-close').click();
  await expect(sheet).toBeVisible();
  await sheet.locator('.btn-go').click();
  await expect(sheet).toBeHidden();
  expect(await lessonPlace(page)).toBe(at);
  // The phone's Back opens it too, and Back again closes it.
  await page.goBack();
  await expect(sheet).toBeVisible();
  await page.goBack();
  await expect(sheet).toBeHidden();
  await expect(page.locator('.player .lbar')).toBeVisible();
  // Stop: to the home, which offers to go on.
  await page.locator('.player-top .lesson-close').click();
  await sheet.locator('.sheet-stop').click();
  await expect(page.locator('.home3 .bay-restart')).toBeVisible();
});
