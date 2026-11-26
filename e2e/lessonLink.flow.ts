import { expect, test } from '@playwright/test';
import { finishLesson, openAsLearner, progress, tapUntilChanged } from './helpers';

/**
 * A word poster on a work-learning spot (26 November 2026): its QR code is a lesson link
 * (?les=paint), and the learner lands in that lesson, also when it is not the first of its topic.
 */

test('a new learner scans the poster "Schilderen": the first run, then the painting lesson', async ({ page }) => {
  test.setTimeout(90_000);
  await page.goto('/?les=paint');
  // The link is read once and taken out of the address.
  await expect(page).not.toHaveURL(/les=/);
  await tapUntilChanged(page, page.locator('.onb-lang-list .lang-btn', { hasText: 'Türkçe' }));
  await tapUntilChanged(page, page.locator('.sector-group-row[data-group="none"]'));
  await tapUntilChanged(page, page.locator('.country-screen .max3-card').first());
  await tapUntilChanged(page, page.locator('.one-phone .one-phone-ok'));
  // Straight into the lesson, not the home.
  await expect(page.locator('.player .lbar')).toBeVisible();
  await finishLesson(page);
  expect(Object.keys((await progress(page)).completed)).toEqual(['l.paint']);
});

test('a learner who has the app already scans the poster: the painting lesson opens', async ({ page }) => {
  test.setTimeout(90_000);
  await openAsLearner(page);
  await page.goto('/?les=paint');
  await expect(page.locator('.player .lbar')).toBeVisible();
  await finishLesson(page);
  expect(Object.keys((await progress(page)).completed)).toEqual(['l.paint']);
});
