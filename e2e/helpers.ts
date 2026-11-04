import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Helpers for the flow tests (e2e/*.flow.ts). No fixed waits: every step waits for something
 * on screen. A tap that came too soon (the lesson ignores a tap within 300 ms of its footer
 * button changing, and a tile tap while the tiles settle) is simply tapped again.
 */

/** The page's own state, to see whether a tap did something: where, progress, what can be tapped, text. */
function pageSignature(): string {
  const player = document.querySelector('.player');
  return [
    location.href,
    document.querySelector('#root > *')?.className ?? '',
    document.querySelector('.lbar')?.getAttribute('aria-valuenow') ?? '',
    player?.classList.contains('is-answered') ? 'answered' : '',
    document.querySelectorAll('.player-body > .ex-slide button[disabled], .player-body > .ex-slide [aria-disabled="true"]').length,
    // A sentence built word by word: the words placed so far.
    document.querySelectorAll('.player-body > .ex-slide .answer-line .tile-placed').length,
    document.querySelector('.player-foot .btn-go')?.className ?? '',
    (player ?? document.body).textContent?.length ?? 0,
  ].join('|');
}

/** Taps until the page changes (a few tries: see the top of this file). */
export async function tapUntilChanged(page: Page, target: Locator, tries = 8): Promise<void> {
  for (let i = 0; i < tries; i++) {
    const before = await page.evaluate(pageSignature);
    await target.click();
    const changed = await page
      .waitForFunction(`(${pageSignature.toString()})() !== ${JSON.stringify(before)}`, undefined, { timeout: 600, polling: 50 })
      .then(() => true, () => false);
    if (changed) return;
  }
  throw new Error('the tap changed nothing');
}

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

/**
 * A learner who did the first run already (help language, sector, country, colour), opening the
 * app: the home. "Wat ken je al?" passed over today, as a learner who said "later".
 */
export async function openAsLearner(page: Page, extra: Record<string, unknown> = {}): Promise<void> {
  // Before the app's own script, once (a reload later keeps what the app saved since): set
  // afterwards, the open app could write its own empty progress over it as the page goes.
  await page.addInitScript(([x, day]) => {
    if (localStorage.getItem('e2e:seeded')) return;
    localStorage.setItem('e2e:seeded', '1');
    localStorage.setItem('vloertaal.access', 'full');
    localStorage.setItem('vloertaal:v1', JSON.stringify({
      onboarded: true, helpLang: 'tr', sector: 'none', country: 'nl', colourAsked: true, completed: {},
      toets: { v: 1, skipped: day, start: day, unitsAt: 0 }, ...x,
    }));
  }, [extra, today()] as const);
  await page.goto('/');
}

/** The saved progress (src/lib/progress.ts). */
export async function progress(page: Page): Promise<{ completed: Record<string, unknown> } & Record<string, unknown>> {
  return page.evaluate(() => JSON.parse(localStorage.getItem('vloertaal:v1') ?? '{}'));
}

/** The lesson's place: steps done (the progress bar). */
export async function lessonPlace(page: Page): Promise<number> {
  return Number(await page.locator('.player-top .lbar').getAttribute('aria-valuenow'));
}

/**
 * One step of a lesson, whatever is on screen: Continue when it is there, otherwise an answer
 * (the first option, a guided match, a sentence built tile by tile, speaking said out loud).
 * Right or wrong does not matter: a mistake comes back once, then the lesson ends.
 */
export async function lessonStep(page: Page): Promise<void> {
  const body = page.locator('.player-body > .ex-slide');
  const go = page.locator('.player-foot .btn-go:not([disabled])');
  if (await go.isVisible()) return tapUntilChanged(page, go);
  for (const sel of ['.say-aloud-instead', '.situation-show']) {
    const b = body.locator(sel);
    if (await b.isVisible()) return tapUntilChanged(page, b);
  }
  const match = body.locator('.match-en:not([disabled])');
  if (await match.count()) {
    // Guided matching: the meaning of the word that is on; a wrong card only shakes.
    const before = await body.locator('.match-en[disabled]').count();
    for (let j = 0; j < (await match.count()); j++) {
      // (The board may finish and go while a card is tapped: then this step is done.)
      if (!(await match.nth(j).click({ timeout: 2000 }).then(() => true, () => false))) return;
      const done = await page
        .waitForFunction((n) => document.querySelectorAll('.player-body > .ex-slide .match-en[disabled]').length > n, before, { timeout: 800 })
        .then(() => true, () => false);
      if (done) return;
    }
    return;
  }
  const build = body.locator('.build-steps[data-nl]');
  if (await build.count()) {
    // Word by word: the tile that is next in the sentence (its first word may be written small).
    const words = ((await build.getAttribute('data-nl')) ?? '').replace(/[.,!?]/g, '').split(/\s+/).filter(Boolean);
    const placed = await body.locator('.answer-line .tile-placed').count();
    for (const word of words.slice(placed)) {
      // Its tile (a long word may have soft hyphens in it); the next place's tiles come in a moment.
      const letters = [...word].map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\u00ad?');
      const tile = body.locator('.tile-with-say:not([disabled])').filter({ hasText: new RegExp(`^\\s*${letters}[.,!?]?\\s*$`, 'i') }).first();
      // Placed only when the tiles have settled (a tap right after the last one is dropped): again.
      const before = await body.locator('.answer-line .tile-placed').count();
      for (let i = 0; i < 8; i++) {
        if (!(await tile.click({ timeout: 3000 }).then(() => true, () => false))) return;
        const done = await page
          .waitForFunction((n) => document.querySelectorAll('.player-body > .ex-slide .answer-line .tile-placed').length > n || Boolean(document.querySelector('.player.is-answered')), before, { timeout: 600, polling: 50 })
          .then(() => true, () => false);
        if (done) break;
      }
    }
    return;
  }
  const choice = body.locator('.choice:not([aria-disabled="true"])').first();
  if (await choice.isVisible()) return tapUntilChanged(page, choice);
  // Nothing to tap yet (a screen still coming in): wait until something is.
  await expect(page.locator('.player-foot .btn-go:not([disabled]), .player-body > .ex-slide .choice, .player-body > .ex-slide .tile-with-say, .player-body > .ex-slide .say-aloud-instead, .player-body > .ex-slide .situation-show, .result-screen').first()).toBeVisible();
}

/** Plays the open lesson to its end (the result screen). */
export async function finishLesson(page: Page, maxSteps = 150): Promise<void> {
  const result = page.locator('.result-screen');
  for (let n = 0; n < maxSteps && !(await result.isVisible()); n++) await lessonStep(page);
  await expect(result).toBeVisible();
}

/** Steps on until `n` steps of the lesson are done (the progress bar). */
export async function playSteps(page: Page, n: number): Promise<void> {
  for (let guard = 0; guard < 40 && (await lessonPlace(page)) < n; guard++) await lessonStep(page);
  expect(await lessonPlace(page)).toBeGreaterThanOrEqual(n);
}
