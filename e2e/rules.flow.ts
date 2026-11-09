import { expect, test } from '@playwright/test';
import { tapUntilChanged } from './helpers';

test('the work-rules track (Werkregels), from the first start to its first question', async ({ page }) => {
  await page.goto('/');
  // The test phone is Dutch: "Spreek je Nederlands?" first, and Ja is the work-rules track.
  await tapUntilChanged(page, page.locator('.nl-question .nl-q-yes'));
  for (let guard = 0; guard < 12; guard++) {
    // The first run in Dutch (sector, country), "Goed om te weten" once, then the home.
    if (await page.locator('.home3 button.bay-card').isVisible()) break;
    const steps = ['.sector-group-row[data-group="none"]', '.country-screen .max3-card', '.rules-notice-ok'];
    let tapped = false;
    for (const sel of steps) {
      const b = page.locator(sel).first();
      if (await b.isVisible()) { await tapUntilChanged(page, b); tapped = true; break; }
    }
    // A page still coming in: wait for one of them.
    if (!tapped) await expect(page.locator([...steps, '.home3 button.bay-card'].join(', ')).first()).toBeVisible();
  }
  await expect(page.locator('html')).toHaveAttribute('lang', 'nl');
  await tapUntilChanged(page, page.locator('.home3 button.bay-card'));
  // A story, a rule card: Verder, until the first question (options to pick from).
  const question = page.locator('.player-body > .ex-slide .choice').first();
  for (let guard = 0; guard < 12 && !(await question.isVisible()); guard++) {
    await tapUntilChanged(page, page.locator('.player-foot .btn-go:not([disabled])'));
  }
  await expect(question).toBeVisible();
  // Its kind's label is Dutch (the track reads in Dutch only).
  await expect(page.locator('.player-body > .ex-slide')).toContainText(/\?/);
});
