#!/usr/bin/env node
/**
 * Vloertaal "max 3 choices per screen" counter.
 *
 * Opens each named state in Chromium, counts the visible, enabled, tappable elements (in view or
 * reachable by scrolling), leaves out the fixed chrome (the bottom nav, the lesson ✕, the back
 * arrow `.chrome-back`, the "Melden" flag `.lesson-report` and its switch `.about-tester`) and speaker/play buttons, and
 * prints screen -> count -> elements with PASS/FAIL against the limit.
 *
 * A state FAILS when
 *  - more than --limit things can be tapped (list states: see below);
 *  - one item has more than one Dutch speaker (speakerDupes). The help-language read-aloud
 *    (`.help-say`) is counted on its own (helpSpeakers), never as a Dutch speaker;
 *  - a tappable is invisible (opacity 0 on it or an ancestor) or a React click handler sits on an
 *    element without a pointer cursor (a hidden or unmarked tap target);
 *  - an `expect` selector of the state is not on screen (the flow ended somewhere else).
 * A list state ({ list: true }, the named exception) is checked, not waved through: it needs a
 * list (ul / ol / .lang-grid / .set-rows) whose rows are one kind, with at most one tap per row
 * and no extra per-row buttons; outside its lists at most --limit things to tap (the back arrow is
 * chrome).
 *
 * Usage:
 *   node count.cjs                       # every state, one configuration
 *   node count.cjs route:mid lesson:*    # some states (a trailing * is a prefix match)
 *   node count.cjs --matrix              # the matrix: pl at 390x844 light, ar at 360x640 dark,
 *                                        # nl (the work-rules track) at 360x640 light
 *   node count.cjs --list                # list state names
 *   node count.cjs 'url:/?shot=meaning&lang=pl'   # any ad-hoc URL
 * Options:
 *   --base http://localhost:5173   dev server (start it with `npx vite`)
 *   --lang pl                      help language for the shot states and the flows (default pl)
 *   --viewport 390x844             phone size (default 390x844)
 *   --theme light|dark             the phone's colour scheme (default light)
 *   --matrix [cfg,cfg]             several configurations, each lang@WxH[:dark]; default
 *                                  "pl@390x844,ar@360x640:dark,nl@360x640". The nl configuration
 *                                  is the work-rules track: its own states (defineRuleStates)
 *   --limit 3                      the bar
 *   --out DIR                      write DIR[/<config>]/<state>.png and .json, and audit.json
 *   --no-shots                     skip screenshots
 *   --json                         print the result as JSON instead of the table
 *   --fail-exit                    exit code 1 when any state fails (for CI)
 *   --counter FILE                 another in-page counter in the format of v8/mycount.js (the
 *                                  tester's independent counter; see v8/count-mine.cjs)
 * Needs playwright at /opt/node22/lib/node_modules (or NODE_PATH) and its chromium.
 */
const path = require('path');
const fs = require('fs');
let playwright;
try { playwright = require('playwright'); } catch { playwright = require('/opt/node22/lib/node_modules/playwright'); }

/* ------------------------------------------------------------------ options */
const argv = process.argv.slice(2);
const opt = (name, def) => { const i = argv.indexOf(name); if (i < 0) return def; const v = argv[i + 1]; argv.splice(i, 2); return v; };
const flag = (name) => { const i = argv.indexOf(name); if (i < 0) return false; argv.splice(i, 1); return true; };
const optOrFlag = (name, def) => { const i = argv.indexOf(name); if (i < 0) return null; const v = argv[i + 1]; if (v && !v.startsWith('-') && /@/.test(v)) { argv.splice(i, 2); return v; } argv.splice(i, 1); return def; };
const BASE = opt('--base', 'http://localhost:5173');
const ONE = { lang: opt('--lang', 'pl'), vp: opt('--viewport', '390x844'), theme: opt('--theme', 'light') };
const MATRIX = optOrFlag('--matrix', 'pl@390x844,ar@360x640:dark,nl@360x640');
const LIMIT = Number(opt('--limit', 3));
const OUT = opt('--out', null);
const NO_SHOTS = flag('--no-shots');
const AS_JSON = flag('--json');
const FAIL_EXIT = flag('--fail-exit');
const LIST = flag('--list');
const COUNTER = opt('--counter', null);
const COUNTER_SRC = COUNTER ? fs.readFileSync(path.resolve(COUNTER), 'utf8') : null;
const parseCfg = (s) => { const m = /^(\w+)@(\d+x\d+)(?::(dark|light))?$/.exec(s.trim()); if (!m) throw new Error(`bad --matrix entry: ${s}`); return { lang: m[1], vp: m[2], theme: m[3] ?? 'light' }; };
const CONFIGS = MATRIX ? MATRIX.split(',').map(parseCfg) : [ONE];
const cfgName = (c) => `${c.lang}@${c.vp}${c.theme === 'dark' ? ':dark' : ''}`;

/* ------------------------------------------------------------------ helpers used in steps */
const settle = (page, ms = 700) => page.waitForTimeout(ms);
/** Click the n-th (0-based) visible element matching `sel`. */
async function tap(page, sel, n = 0) {
  const loc = page.locator(sel).filter({ visible: true }).nth(n);
  await loc.scrollIntoViewIfNeeded().catch(() => {});
  await loc.click({ timeout: 4000 });
  await settle(page, 350);
}
/** Click the visible element matching `sel` whose text contains `text`. */
async function tapText(page, sel, text) {
  const loc = page.locator(sel).filter({ visible: true, hasText: text }).first();
  await loc.scrollIntoViewIfNeeded().catch(() => {});
  await loc.click({ timeout: 4000 });
  await settle(page, 350);
}
const go = (page) => tap(page, '.player-foot .btn-go:not([disabled])');
const navTab = (page, i) => tap(page, '.bottom-nav .nav-tab', i);
/** Build word by word: for each place tap the offered word that is next in the sentence (read
 *  from the speaker's "Play: ..." label). `wrongFirst`: wrong taps on the first place before. */
async function buildRight(page, wrongFirst = 0) {
  // The sentence (its speaker is held back until a wrong tap, so read it from the exercise).
  const label = await page.locator('.build-steps[data-nl]').first().getAttribute('data-nl');
  const words = label.replace(/[.,!?]/g, '').split(/\s+/).filter(Boolean);
  for (const [k, w] of words.entries()) {
    const tiles = page.locator('.tile-steps .tile-with-say:not([disabled])');
    const n = await tiles.count();
    const texts = [];
    // Without soft hyphens (long compounds, src/lib/dutch.ts breakable).
    for (let i = 0; i < n; i++) texts.push((await tiles.nth(i).innerText()).replace(/[.,!?\u00ad]/g, '').trim());
    if (wrongFirst && k === 0) {
      const wrong = texts.map((t, j) => (t.toLowerCase() !== w.toLowerCase() ? j : -1)).filter((j) => j >= 0);
      for (let x = 0; x < wrongFirst; x++) { await tiles.nth(wrong[x % wrong.length]).click(); await settle(page, 150); }
    }
    // The first word's tiles are written small (src/lib/exercises.ts tileLabel): "draag" for "Draag".
    const i = texts.findIndex((t) => t === w || (k === 0 && t.toLowerCase() === w.toLowerCase()));
    if (i >= 0) { await tiles.nth(i).click(); await settle(page, 150); }
  }
  await settle(page, 300);
}
/** Guided match: for the word that is on, try the meaning cards until it matches (stop after `pairs`). */
async function matchPairs(page, pairs = 99) {
  let made = 0;
  for (let guard = 0; guard < 20 && made < pairs; guard++) {
    const before = await page.locator('.match-en[disabled]').count();
    const cards = page.locator('.match-en:not([disabled])');
    const k = await cards.count();
    if (!k) break;
    for (let j = 0; j < k; j++) {
      await page.locator('.match-en:not([disabled])').nth(j).click(); await settle(page, 600);
      if ((await page.locator('.match-en[disabled]').count()) > before) { made++; break; }
    }
  }
  await settle(page, 500);
}
/** Dictation with letter tiles: tap the right tile for each place (the shot word is "de helm"). */
async function spellRight(page, word = 'de helm') {
  const parts = word.startsWith('de ') ? ['de', ...word.slice(3)] : [...word];
  for (const ch of parts) {
    const tiles = page.locator('.letter-steps .letter-tile:not([disabled])');
    const n = await tiles.count();
    for (let i = 0; i < n; i++) {
      const t = (await tiles.nth(i).innerText()).trim();
      if (t === ch) { await tiles.nth(i).click(); await settle(page, 120); break; }
    }
  }
  await settle(page, 300);
}

/** Settings › "Bewaar je voortgang" › "Zet terug" with a backup file of these lesson ids (or `bytes`
 *  of filler: a file too big to be one). */
async function putBack(page, lessons, bytes = 0) {
  const completed = Object.fromEntries(lessons.map((id) => [id, { best: 1, times: 1 }]));
  const text = bytes ? 'x'.repeat(bytes) : JSON.stringify({ app: 'vloertaal', version: 1, progress: { completed } });
  await page.setInputFiles('.waybill input[type=file]', { name: 'vloertaal-voortgang.json', mimeType: 'application/json', buffer: Buffer.from(text) });
  await settle(page, 400);
}
/** A daily reminder already in the calendar (Settings › reminder then offers another time or Stop). */
async function withReminder(page, time = '18:00') {
  await page.evaluate((t) => localStorage.setItem('vloertaal:reminder-time', t), time);
  await page.reload(); await settle(page, 900);
}

const NATIVE = { ar: 'العربية', ti: 'ትግርኛ', fa: 'فارسی', prs: 'دری', uk: 'Українська', tr: 'Türkçe', pl: 'Polski', ro: 'Română', bg: 'Български' };
const GENDERED = ['ar', 'ti', 'uk', 'pl', 'ro', 'bg'];

/* ------------------------------------------------------------------ states */
/**
 * Every state for one help language. Options per state:
 *   list: true      the named list exception (checked: see the head of this file)
 *   expect: 'sel'   must be visible at the end (else FAIL: the flow went somewhere else)
 */
function defineStates(LANG) {
  if (LANG === 'nl') return defineRuleStates();
  const shot = (q, lang = LANG) => `/?shot=${q}${lang && !/[?&]lang=/.test(q) ? `&lang=${lang}` : ''}`;
  const S = [];
  const add = (name, url, steps, extra = {}) => S.push({ name, url, steps, ...extra });
  const gendered = GENDERED.includes(LANG);

  // Onboarding (shots), one question per page: language -> gender (gendered languages) -> password
  // -> sector (2 steps). The password page: the field, Unlock and "Try one lesson first".
  add('onb:language', shot('language', null), null, { list: true }); // no guess from the phone: the list
  add('onb:language-guess', shot(`language&guess=${LANG}`, null)); // "Polski?" [Yes] [Other language]
  add('onb:language-list', shot(`language&guess=${LANG}&list=1`, null), null, { list: true, expect: '.chrome-back' }); // the list, with Back
  add('onb:gate', shot('gate'));
  add('onb:gate-typed', shot('gate'), async (p) => { await p.fill('.pw-input', 'abc'); await settle(p, 200); });
  add('onb:gate-try', shot('gate&try=1'), async (p) => { await p.fill('.pw-input', 'abc'); await settle(p, 200); }, { expect: '.gate-try' });
  add('onb:gate-again', shot('gate&again=1&greet=1'), null, { expect: '.pw-ok' });
  add('onb:gender-greet', shot('gender&greet=1'), null, { expect: '.onb-greet' });
  add('onb:gender', shot('gender'));
  add('onb:gender-picked', shot('gender&gender=f'));
  add('onb:sector', shot('sector'));
  add('onb:sector-make', shot('sector&group=make'), null, { expect: '.chrome-back' });
  add('onb:sector-care', shot('sector&group=care'), null, { expect: '.chrome-back' });
  // ... and the real first-run flow from a clean device (the test browser is Dutch: no guess)
  const firstRun = (extra) => async (p) => {
    await p.evaluate(([x, lang]) => { localStorage.setItem('vloertaal.access', 'full'); localStorage.setItem('vloertaal:v1', JSON.stringify({ onboarded: true, helpLang: lang, ...x })); }, [extra, LANG]);
    await p.reload(); await settle(p, 900);
  };
  add('flow:language', '/', null, { list: true });
  // The language picked: "Woman or man?" first for a help language with gender, then the password.
  const toGate = async (p) => { await tapText(p, 'button', NATIVE[LANG] ?? 'Polski'); await settle(p); if (gendered) { await tap(p, '.gender-btn', 1); await settle(p); } };
  add('flow:gate', '/', toGate, { expect: '.pw-input' });
  add('flow:gate-tr', '/', async (p) => { await tapText(p, 'button', 'Türkçe'); await settle(p); }, { expect: '.pw-input' });
  // The password page's back arrow and the phone's Back go one page back (gender or language).
  add('flow:gate-back', '/', async (p) => { await toGate(p); await tap(p, '.chrome-back'); await settle(p); }, gendered ? { expect: '.gender-screen' } : { list: true, expect: '.lang-grid' });
  add('flow:gate-phone-back', '/', async (p) => { await toGate(p); await p.goBack(); await settle(p); }, gendered ? { expect: '.gender-screen' } : { list: true, expect: '.lang-grid' });
  // "No code? Start with the first lessons": the sneak preview without a code, on to the sector;
  // back from there, the password page again (still with the button, no code shown as accepted).
  add('flow:free-sector', '/', async (p) => { await toGate(p); await tap(p, '.gate-try'); await settle(p, 900); }, { expect: '.sector-step' });
  add('flow:free-sector-back', '/', async (p) => { await toGate(p); await tap(p, '.gate-try'); await settle(p, 900); await tap(p, '.chrome-back'); await settle(p); }, { expect: '.gate-try' });
  if (gendered) {
    // Right after the language: "Woman or man?", with the back arrow to the language.
    add('flow:gender', '/', firstRun({}), { expect: '.gender-screen .chrome-back' });
    add('flow:gender-back', '/', async (p) => { await firstRun({})(p); await tap(p, '.chrome-back'); await settle(p); }, { list: true, expect: '.lang-grid' });
  }
  add('flow:sector', '/', firstRun({ gender: 'm' }));
  // Back from the sector: the password page with the accepted code kept (not cleared).
  add('flow:sector-back', '/', async (p) => { await firstRun({ gender: 'm', genderAsked: true })(p); await tap(p, '.chrome-back'); await settle(p); }, { expect: '.pw-ok' });
  add('flow:sector-phone-back', '/', async (p) => { await toGate(p); await p.fill('.pw-input', 'testcode'); await tap(p, '.pw-go'); await settle(p, 900); await p.goBack(); await settle(p); }, { expect: '.pw-ok' });
  add('flow:sector-step2', '/', async (p) => { await firstRun({ gender: 'm' })(p); await tap(p, '.max3-card', 0); await settle(p); }, { expect: '.sector-step-2' });
  add('flow:sector-step2-back', '/', async (p) => { await firstRun({ gender: 'm' })(p); await tap(p, '.max3-card', 0); await settle(p); await tap(p, '.chrome-back'); await settle(p); }, { expect: '.sector-step:not(.sector-step-2)' });
  // A learner from before the gender question: a one-time page instead of the home card (no back).
  if (gendered) add('flow:old-gender', '/', firstRun({ sector: 'none', completed: { 'l.hello': { best: 1, times: 1 } } }), { expect: '.gender-screen' });
  const realHome = async (p, extra = {}) => {
    await p.evaluate(([x, lang]) => { localStorage.setItem('vloertaal.access', 'full'); localStorage.setItem('vloertaal:v1', JSON.stringify({ onboarded: true, helpLang: lang, gender: 'm', sector: 'none', completed: {}, ...x })); }, [extra, LANG]);
    await p.reload(); await settle(p, 900);
  };
  add('flow:home-new', '/', (p) => realHome(p), { expect: '.home3' });
  add('flow:home-quiet', '/', (p) => realHome(p, { quiet: true }), { expect: '.sound-off-mark' });
  const startFirstLesson = async (p) => { await realHome(p); await tap(p, '.bay-start, .route-start, .start-btn, button.btn-primary', 0); await settle(p, 900); };
  const stopHalfway = async (p) => {
    await startFirstLesson(p);
    for (let i = 0; i < 3; i++) { await go(p).catch(() => {}); await settle(p, 500); }
    await tap(p, '.player-top .lesson-close'); await tap(p, '.sheet-stop'); await settle(p, 900);
  };
  add('flow:lesson-first', '/', startFirstLesson);
  add('flow:quit-dialog', '/', async (p) => { await startFirstLesson(p); await tap(p, '.player-top .lesson-close'); }, { expect: '.pause-sheet .sheet-sound' });
  // A lesson stopped halfway: [Continue] [Start again] [Other topic].
  add('flow:home-resume', '/', stopHalfway, { expect: '.bay-restart' });
  add('flow:home-restart', '/', async (p) => { await stopHalfway(p); await tap(p, '.bay-restart'); await settle(p, 900); }, { expect: '.player-top .lesson-close' });
  // The pause sheet of a lesson picked up again: still [Keep going] [Without sound] [Stop].
  add('flow:pause-resumed', '/', async (p) => {
    await stopHalfway(p);
    await tap(p, '.bay-card', 0); await settle(p, 900);
    await tap(p, '.player-top .lesson-close');
  }, { expect: '.pause-sheet .sheet-sound' });
  // Stopped halfway with words due as well: [Herhaal vandaag] [Continue] [Other topic]; "Start
  // again" is then on the topic page (Other topic > the topic), next to the pocket card.
  const dueHome = (p) => realHome(p, { completed: { 'l.hello': { best: 1, times: 1 } }, cards: { 'w.hallo': { box: 1, due: '2000-01-01' }, 'w.ja': { box: 1, due: '2000-01-01' } } });
  const stopHalfwayDue = async (p) => {
    await dueHome(p); await tap(p, '.bay-card .bay-start', 0); await settle(p, 900);
    for (let i = 0; i < 3; i++) { await go(p).catch(() => {}); await settle(p, 500); }
    await tap(p, '.player-top .lesson-close'); await tap(p, '.sheet-stop'); await settle(p, 900);
  };
  add('flow:home-resume-daily', '/', stopHalfwayDue, { expect: '.home3 .daily-due ~ .rb-current .bay-saved' });
  add('flow:topic-restart', '/', async (p) => { await stopHalfwayDue(p); await tap(p, '.rb-other'); await settle(p); await tap(p, '.topic-row', 0); await settle(p); }, { list: true, expect: '.topic-tools .bay-restart' });
  add('flow:topic-restart-go', '/', async (p) => { await stopHalfwayDue(p); await tap(p, '.rb-other'); await settle(p); await tap(p, '.topic-row', 0); await settle(p); await tap(p, '.topic-tools .bay-restart'); await settle(p, 900); }, { expect: '.player-top .lesson-close' });
  // The Hulp tab: the phrases, then "Wie kan helpen" (a list of numbers to call, as in Werkregels).
  add('flow:help-tab', '/', async (p) => { await realHome(p); await navTab(p, 1); await settle(p); }, { list: true });
  add('flow:settings-tab', '/', async (p) => { await realHome(p); await navTab(p, 2); await settle(p); }, { expect: '.max3-menu' });
  add('flow:about-tab', '/', async (p) => { await realHome(p); await navTab(p, 3); await settle(p); });
  add('flow:coaches', '/', async (p) => { await realHome(p); await navTab(p, 3); await settle(p); await tap(p, '.coach-link'); await settle(p); }, { list: true });
  add('flow:settings-me', '/', async (p) => { await realHome(p); await navTab(p, 2); await settle(p); await tap(p, '.set-row', 0); await settle(p); }, { list: true });
  add('flow:settings-sector', '/', async (p) => {
    await realHome(p); await navTab(p, 2); await settle(p); await tap(p, '.set-row', 0); await settle(p);
    await tapText(p, '.set-row', 'Waar werk je'); await settle(p); await tap(p, '.max3-card', 1); await settle(p);
  }, { expect: '.chrome-back' });
  // The bottom bar from deep pages: Route always lands on the home, Settings on the Settings menu,
  // and the phone's Back from a tab goes home.
  const deepTopic = async (p) => { await realHome(p); await tap(p, '.rb-other'); await settle(p); await tap(p, '.topic-row', 0); await settle(p); };
  const deepSetting = async (p) => { await realHome(p); await navTab(p, 2); await settle(p); await tap(p, '.set-row', 1); await settle(p); await tap(p, '.set-row', 0); await settle(p); };
  add('flow:route-tab-from-topic', '/', async (p) => { await deepTopic(p); await navTab(p, 0); await settle(p); }, { expect: '.home3' });
  add('flow:route-tab-from-setting', '/', async (p) => { await deepSetting(p); await navTab(p, 0); await settle(p); }, { expect: '.home3' });
  add('flow:settings-tab-from-setting', '/', async (p) => { await deepSetting(p); await navTab(p, 2); await settle(p); }, { expect: '.max3-menu' });
  add('flow:settings-tab-from-topic', '/', async (p) => { await deepTopic(p); await navTab(p, 2); await settle(p); }, { expect: '.max3-menu' });
  add('flow:tab-then-phone-back', '/', async (p) => { await deepTopic(p); await navTab(p, 2); await settle(p); await p.goBack(); await settle(p); }, { expect: '.home3' });

  // Home / route
  for (const st of ['new', 'mid', 'finished', 'shelf', 'pick', 'coach', 'done']) add(`route:${st}`, shot(`route&state=${st}`));
  add('route:daily-due', shot('route&state=mid&daily=due'));
  // A finished topic with words due: the recommended topic, Herhaal vandaag, Other topic.
  add('route:finished-daily', shot('route&state=finished&daily=due'), null, { expect: '.daily-due' });
  add('route:preview-finished-daily', shot('route&state=finished&daily=due&access=preview'), null, { expect: '.daily-due' });
  add('route:quiet', shot('route&state=mid&quiet=1'), null, { expect: '.sound-off-mark' });
  if (gendered) add('route:ask-gender', shot('route&state=mid&askGender=1', LANG));
  add('route:preview', shot('route&state=mid&access=preview'));
  // The sneak preview (one lesson per theme): a new learner, and halfway (the open lessons played).
  add('route:sample-new', shot('route&state=new&access=sample'));
  add('route:sample', shot('route&state=mid&access=sample'));
  add('route:all-topics', shot('all&state=mid'), null, { list: true });
  add('route:offline-saved', shot('offline&offline=saved'));
  add('route:offline-saving', shot('offline&offline=saving'));
  add('route:offline-off', shot('offline&offline=off'));
  // The resume state: [Continue] [Start again] [Other topic]. With words due as well: [Herhaal
  // vandaag] [Continue] [Other topic], and "Start again" is on the topic page.
  add('route:resume', shot('path&resume=1'), null, { expect: '.bay-restart' });
  add('route:resume-daily', shot('path&resume=1&daily=due'), null, { expect: '.daily-due ~ .rb-current .bay-saved' });
  add('route:topic-resume', shot('topic&cu=u.firstday&state=mid&resume=1'), null, { list: true, expect: '.topic-tools .bay-restart' });
  // A topic page: the topic's name in the head, at most 3 actions plus its list of lessons.
  add('route:topic', shot('topic&cu=u.firstday&state=mid'), null, { list: true });
  add('route:topic-done', shot('topic&cu=u.firstday&state=shelf'), null, { list: true });
  add('route:topic-locked', shot('topic&cu=u.pay&state=mid&access=preview'), null, { list: true });
  add('route:topic-sample', shot('topic&cu=u.firstday&state=new&access=sample'), null, { list: true });
  add('route:all-topics-tap', shot('all&state=mid'), async (p) => { await tap(p, '.topic-row', 0); await settle(p); }, { list: true });
  // "Volgorde": the own course in the order of the path (the choice is kept on the device).
  add('route:all-topics-order', shot('all&state=mid'), async (p) => { await tap(p, '.topics-order-btn', 1); await settle(p); }, { list: true, expect: '.topic-list-order' });

  // Lesson exercises: before, after a right tap, after a wrong tap.
  // Shot option order is fixed: dutch -> 3rd right; meaning -> 3rd; listen -> 2nd; type(pick) -> 2nd; chat -> 1st; situation -> 1st.
  const choice = '.player-body .choice';
  const graded = (key, q, right, wrong, lang) => {
    add(`lesson:${key}`, shot(q, lang));
    add(`lesson:${key}:right`, shot(q, lang), async (p) => { await tap(p, choice, right); await settle(p, 900); });
    add(`lesson:${key}:wrong`, shot(q, lang), async (p) => { await tap(p, choice, wrong); await settle(p, 900); });
  };
  graded('meaning', 'meaning', 2, 0);
  graded('picture', 'dutch', 2, 0);
  graded('listen', 'listen', 1, 0);
  graded('hear-pick', 'type', 1, 0, 'ar');
  graded('chat', 'chat', 0, 1);
  graded('situation', 'situation', 0, 1);
  // A saying in a later lesson (src/content/sayings.ts): its card, and "What does he mean?".
  graded('saying-ask', 'saying-ask', 0, 1);
  // With a device voice for the help language: the situation and the tip show the help-language
  // read-aloud (.help-say, counted apart) next to at most one Dutch speaker per item.
  add('lesson:situation-voice', shot('situation'), null, { voices: true, expect: '.help-say' });
  add('lesson:tip-voice', shot('tip'), null, { voices: true, expect: '.help-say' });
  add('lesson:situation-quote-voice', shot('situation&tip=l.hello'), null, { voices: true, expect: '.situation-quote .speak-glyph' });
  add('lesson:word-card', shot('intro'));
  // Tester mode: the "Iets melden" flag in the header (chrome, like the ✕).
  add('lesson:report', shot('meaning&report=1'), null, { expect: '.player-top .lesson-report' });
  add('lesson:tip', shot('tip'));
  add('lesson:saying', shot('saying'));
  add('lesson:saying-long', shot('saying&saying=l.measures'));
  add('lesson:word-card-saying', shot('intro&word=w.blad'));
  // Klanken (src/content/sounds.ts): the picture choice and "What do you hear?" offer the word's pair.
  add('lesson:sounds-pick', shot('lesson&lesson=l.shortlong&at=8'));
  add('lesson:sounds-listen', shot('lesson&lesson=l.shortlong&at=10'));
  // "Een ongeluk melden" (l.accident, seed 1): a word card, the abstract word "gebeuren", the tip
  // and its situation, a sentence to build, the chat and typing "gewond".
  for (const [key, at] of [['intro', 0], ['word-abstract', 7], ['tip', 9], ['situation', 10], ['build', 14], ['chat', 17], ['type', 19]]) {
    add(`lesson:accident-${key}`, shot(`lesson&lesson=l.accident&at=${at}`));
  }
  // "Werken via een uitzendbureau" (l.agency, seed 1): a word card, the abstract word "de opdracht",
  // the tip and its situation, a sentence to build, the chat and typing "de opdracht".
  for (const [key, at] of [['intro', 0], ['word-abstract', 4], ['tip', 9], ['situation', 10], ['build', 14], ['chat', 17], ['type', 19]]) {
    add(`lesson:agency-${key}`, shot(`lesson&lesson=l.agency&at=${at}`));
  }
  // "Opdrachten van je leidinggevende" (l.task, seed 1): a word card, the abstract word "eerst",
  // the tip and its situation, a sentence to build, the chat and typing "de taak".
  for (const [key, at] of [['intro', 0], ['word-abstract', 1], ['tip', 9], ['situation', 10], ['build', 14], ['chat', 17], ['type', 19]]) {
    add(`lesson:task-${key}`, shot(`lesson&lesson=l.task&at=${at}`));
  }
  // "De eerste dag: je weg vinden" (l.arrive, seed 1): a word card, the picture choice "de buddy",
  // the tip and its situation, a sentence to build, the chat and typing "de ingang".
  for (const [key, at] of [['intro', 0], ['pick', 13], ['tip', 9], ['situation', 10], ['build', 14], ['chat', 17], ['type', 19]]) {
    add(`lesson:arrive-${key}`, shot(`lesson&lesson=l.arrive&at=${at}`));
  }
  // "Dit heb ik nog niet geleerd" (l.notyet, seed 1): the abstract word "nog niet", a word card, the
  // tip and its situation (a Dutch quote with its speaker), a sentence to build, the chat and typing "mogen".
  for (const [key, at] of [['word-abstract', 0], ['intro', 3], ['tip', 9], ['situation', 10], ['build', 14], ['chat', 17], ['type', 19]]) {
    add(`lesson:notyet-${key}`, shot(`lesson&lesson=l.notyet&at=${at}`));
  }
  // The tips of "Messages and the roster app" (l.texting: the example message on one line, never
  // split inside its quotes, and "Mag ik mijn dienst ruilen?") and "Beschermende kleding" (l.gear:
  // "Heb je dit ook in mijn maat?"), with their situations (seed 1).
  for (const [key, at] of [['tip', 9], ['situation', 10]]) {
    add(`lesson:texting-${key}`, shot(`lesson&lesson=l.texting&at=${at}`));
    add(`lesson:gear-${key}`, shot(`lesson&lesson=l.gear&at=${at}`));
  }
  add('lesson:match', shot('match'));
  add('lesson:match:half', shot('match'), async (p) => { await matchPairs(p, 1); });
  add('lesson:match:done', shot('match'), async (p) => { await matchPairs(p); });
  add('lesson:build', shot('build'));
  add('lesson:build:placed', shot('build'), async (p) => {
    const label = await p.locator('.build-steps[data-nl]').first().getAttribute('data-nl');
    await tapText(p, '.tile-steps .tile-with-say', label.split(/\s+/)[0]);
  });
  add('lesson:build:right', shot('build'), async (p) => { await buildRight(p); await settle(p, 900); });
  // One stray wrong tap is forgiven (still right); two or more make it a mistake.
  add('lesson:build:one-slip', shot('build'), async (p) => { await buildRight(p, 1); await settle(p, 900); }, { expect: '.answer-right' });
  // Two stray taps are forgiven in a built sentence (BUILD_FORGIVEN_TAPS); three are a mistake.
  add('lesson:build:two-slips', shot('build'), async (p) => { await buildRight(p, 2); await settle(p, 900); }, { expect: '.answer-right' });
  add('lesson:build:wrong', shot('build'), async (p) => { await buildRight(p, 3); await settle(p, 900); }, { expect: '.answer-wrong' });
  // Keyboard dictation is for a help language in Latin letters (another script gets hear-and-pick).
  const latin = ['pl', 'tr', 'ro'].includes(LANG) ? LANG : 'pl';
  add('lesson:dictation', shot('type', latin));
  add('lesson:dictation:typed', shot('type', latin), async (p) => { await p.fill('.type-input', 'helm'); await settle(p, 300); });
  add('lesson:dictation:right', shot('type', latin), async (p) => { await p.fill('.type-input', 'helm'); await go(p); await settle(p, 900); });
  add('lesson:dictation:wrong', shot('type', latin), async (p) => { await p.fill('.type-input', 'xyz'); await go(p); await settle(p, 900); });
  add('lesson:hear-pick-uk', shot('type', 'uk'));
  // Dictation with letter tiles (a help language in another script, writing switched on in Settings).
  const writingOn = async (p) => { await p.evaluate(() => localStorage.setItem('vloertaal:learn-writing', '1')); await p.reload(); await settle(p, 900); };
  add('lesson:dictation-tiles', shot('type', 'ar'), writingOn);
  add('lesson:dictation-tiles:right', shot('type', 'ar'), async (p) => { await writingOn(p); await spellRight(p); await settle(p, 900); });
  add('lesson:speak:idle', shot('speak'));
  add('lesson:speak:recording', shot('speak-rec'));
  add('lesson:speak:compare', shot('speak-compare'));
  add('lesson:speak:off', shot('speak-off'));
  add('lesson:retry', shot('retry'));
  add('lesson:quiet', shot('meaning&quiet=1'));
  add('lesson:quit-dialog', shot('meaning'), async (p) => { await tap(p, '.player-top .lesson-close'); }, { expect: '.sheet-stop .sheet-stop-icon' });
  add('lesson:quit-dialog-quiet', shot('meaning&quiet=1'), async (p) => { await tap(p, '.player-top .lesson-close'); });

  // After the lesson
  add('after:result', shot('result'));
  add('after:result-perfect', shot('result&perfect=1'));
  add('after:result-review', shot('result&review=1'));
  // The first lesson's result, once: Continue and the row to the emergency phrases.
  add('after:result-phrases', shot('result&phrases=1'));
  add('after:streak', shot('streak&n=7'));
  add('after:streak-first', shot('streak&n=1'));
  // The fullest milestone: "Wist je dat?" (src/content/facts.ts) with a record and a free day.
  add('after:streak-30', shot('streak&n=30&rest=1&best=40'));
  add('after:keep', shot('streak&n=1'), async (p) => { await settle(p, 900); await go(p); await settle(p, 900); }, { expect: '.keep-no.keep3-btn' });
  add('after:keep-install', shot('streak&n=1&install=prompt'), async (p) => { await settle(p, 900); await go(p); await settle(p, 900); await tap(p, '.keep-no'); await settle(p, 700); });
  // The reminder's "Other time" page: three times and the back arrow.
  add('after:keep-times', shot('streak&n=1'), async (p) => { await settle(p, 900); await go(p); await settle(p, 900); await tap(p, '.keep-other'); await settle(p, 700); }, { expect: '.keep3-step-times .chrome-back' });
  add('after:keep-times-back', shot('streak&n=1'), async (p) => { await settle(p, 900); await go(p); await settle(p, 900); await tap(p, '.keep-other'); await settle(p, 700); await tap(p, '.chrome-back'); await settle(p, 700); }, { expect: '.keep-yes' });
  add('after:keep-added', shot('streak&n=1'), async (p) => { await settle(p, 900); await go(p); await settle(p, 900); await tap(p, '.keep-yes'); await settle(p, 700); });
  add('after:keep-yes-install', shot('streak&n=1&install=prompt'), async (p) => { await settle(p, 900); await go(p); await settle(p, 900); await tap(p, '.keep-yes'); await settle(p, 700); });
  add('after:streak-stopped', shot('stopped'));
  add('after:cert-earned', shot('cert-earned'));
  add('after:certificate', shot('certificate&name=Ali%20Hassan'));
  add('after:certificate-ask-name', shot('certificate&name=ask'));
  add('after:pocket', shot('pocket'));

  // Tabs and other screens
  add('tab:settings', shot('settings'));
  // Settings: three lists (the list exception) and a page per setting (at most 3 options), each
  // with the back arrow (the "look only" way out).
  for (const pg of ['me', 'lessons', 'phone', 'language', 'certificates']) add(`settings:${pg}`, shot(`settings&page=${pg}`), null, { list: true, expect: '.chrome-back' });
  add('settings:phone-preview', shot('settings&page=phone&access=preview'), null, { list: true });
  for (const pg of ['gender', 'sector', 'sector-make', 'sector-care', 'english', 'sound', 'voice', 'speaking', 'writing', 'text', 'theme', 'offline', 'reminder', 'backup', 'counting', 'reset']) add(`settings:${pg}`, shot(`settings&page=${pg}`), null, { expect: '.chrome-back' });
  add('settings:writing-ar', shot('settings&page=writing', 'ar'));
  add('settings:install', shot('settings&page=install&install=prompt'));
  add('settings:unlock', shot('settings&page=unlock&access=preview'));
  add('settings:reminder-added', shot('settings&page=reminder'), async (p) => { await tap(p, '.max3-card', 1); });
  // A reminder in the calendar: its time, [Andere tijd] [Stop de herinnering]; the times one page
  // deeper; Stop downloads the file that cancels it.
  add('settings:reminder-set', shot('settings&page=reminder'), withReminder, { expect: '.set-remind-now' });
  add('settings:reminder-time', shot('settings&page=reminder'), async (p) => { await withReminder(p); await tap(p, '.max3-card', 0); await settle(p); }, { expect: '.set-own-cards' });
  add('settings:reminder-stopped', shot('settings&page=reminder'), async (p) => { await withReminder(p); await tap(p, '.max3-card', 1); }, { expect: '.set-remind-now' });
  // "Lessen op deze telefoon" switched on: it stays, and says what is being saved.
  add('settings:offline-on', shot('settings&page=offline&sector=logistics'), async (p) => { await tap(p, '.max3-card', 0); await settle(p, 400); });
  // "Zet terug": the file's lessons ([Samenvoegen] [Vervangen], Cancel); Replace with fewer lessons
  // asks again with both numbers; a file without lessons only adds; a file too big says so.
  add('settings:backup-ask', shot('settings&page=backup'), async (p) => { await putBack(p, ['l.hello', 'l.people', 'l.understand', 'l.gear', 'l.danger', 'l.accident', 'l.things', 'l.directions', 'l.shift']); }, { expect: '.waybill-ask' });
  add('settings:backup-fewer', shot('settings&page=backup'), async (p) => { await putBack(p, ['l.hello', 'l.oldlesson']); await tap(p, '.waybill-ask .danger'); }, { expect: '.waybill-fewer' });
  add('settings:backup-empty', shot('settings&page=backup'), async (p) => { await putBack(p, []); }, { expect: '.waybill-ask' });
  add('settings:backup-big', shot('settings&page=backup'), async (p) => { await putBack(p, [], 2_100_000); }, { expect: '.keep-note' });
  add('tab:help', shot('words'), null, { list: true });
  add('tab:about', shot('about'));
  add('screen:coaches', shot('coaches'), null, { list: true });
  add('screen:tips', shot('tips'), null, { list: true });
  add('screen:tips-open', shot('tips'), async (p) => { await tap(p, '.tips-head', 0); await settle(p); }, { list: true });

  // The region Zuid-Limburg (src/content/regio, docs/regio-zuid-limburg.md): Settings › "Waar woon
  // je?" (two cards), the Hulp tab with the map's link, the Sociale kaart (the list exception:
  // category headers without a tap, one tap per row), the region unit in All topics and its topic
  // page (no certificate), a step of its lesson, and the real way from the home to the map.
  add('settings:region', shot('settings&page=region&region=zl'), null, { expect: '.chrome-back' });
  add('settings:region-none', shot('settings&page=region'), null, { expect: '.chrome-back' });
  add('settings:me-region', shot('settings&page=me&region=zl'), null, { list: true, expect: '.chrome-back' });
  add('tab:help-region', shot('words&region=zl'), null, { list: true, expect: '.social-map-link' });
  add('screen:social-map', shot('socialmap&region=zl'), null, { list: true, expect: '.sm-rows' });
  add('route:all-topics-region', shot('all&state=mid&region=zl'), null, { list: true });
  add('route:topic-region', shot('topic&cu=rg.zl.u&state=mid&region=zl'), null, { list: true });
  add('lesson:region-tip', shot('lesson&lesson=rg.zl.l.1&at=9'));
  add('lesson:region-situation', shot('lesson&lesson=rg.zl.l.1&at=10'));
  add('flow:help-map', '/', async (p) => { await realHome(p, { region: 'zl' }); await navTab(p, 1); await settle(p); await tap(p, '.social-map-link'); await settle(p); }, { list: true, expect: '.sm-rows' });
  return S;
}

/**
 * The work-rules track (lang nl, src/components/RuleSteps.tsx): every kind of step before and
 * after answering, on real lessons (/?shot=rule&step=<kind>: the best option is the 1st card, a
 * wrong one the 2nd). With a Dutch phone voice (`voices`), so every speaker is on screen and
 * checked (one per text); one state without any voice (speakers hidden, nothing else changes).
 */
function defineRuleStates() {
  const shot = (q) => `/?shot=${q}&lang=nl`;
  const S = [];
  const add = (name, url, steps, extra = {}) => S.push({ name, url, steps, voices: true, ...extra });
  const choice = '.player-body .choice';
  // `right`/`wrong`: the cards to tap (the best option is the 1st; a false statement's is "Niet waar", the 2nd).
  const step = (key, q, graded, right = 0, wrong = 1) => {
    add(`rule:${key}`, shot(q), null, { expect: '.player-body .exercise' });
    if (!graded) {
      add(`rule:${key}:next`, shot(q), async (p) => { await go(p); await settle(p, 900); }, { expect: '.player-body .exercise' });
      return;
    }
    add(`rule:${key}:right`, shot(q), async (p) => { await tap(p, choice, right); await settle(p, 900); }, { expect: '.feedback-right' });
    add(`rule:${key}:wrong`, shot(q), async (p) => { await tap(p, choice, wrong); await settle(p, 900); }, { expect: '.feedback-wrong' });
  };
  step('scene', 'rule&step=scene', false);
  step('rule', 'rule&step=rule', false);
  step('rule-custom', 'rule&step=rule&lesson=r.l.samen.1', false);
  step('truefalse', 'rule&step=truefalse', true);
  step('truefalse-false', 'rule&step=truefalse&id=r.l.loon.1.tf1', true, 1, 0);
  step('whatdo', 'rule&step=whatdo', true);
  // Options said out loud: a speaker beside each card (not counted, one per option).
  step('whatdo-say', 'rule&step=whatdo&id=r.l.zoeken.3.wd2', true);
  step('whoask', 'rule&step=whoask', true);
  step('model', 'rule&step=model', false);
  step('model-clip', 'rule&step=model&id=r.l.veilig.2.mo1', false);
  step('payslip', 'rule&step=payslip', true);
  // The drawn card (docs/entree-aanvulling.md): a sum on a rooster (the default), a kassabon, a
  // pakbon, an etiket and a loonstrook; reading a werkbon. The card is not tappable; its speaker
  // is not counted.
  step('card', 'rule&step=card', true);
  step('card-week', 'rule&step=card&id=r.l.rekenen.1.ca2', true);
  step('card-kassabon', 'rule&step=card&id=r.l.winkel.3.ca1', true);
  step('card-pakbon', 'rule&step=card&id=r.l.rekenen.3.ca1', true);
  step('card-etiket', 'rule&step=card&id=r.l.rekenen.3.ca2', true);
  step('card-loonstrook', 'rule&step=card&id=r.l.rekenen.2.ca2', true);
  step('card-werkbon', 'rule&step=card&id=r.l.afronden.1.ca1', true);
  // The new places to go for help (school, praktijkopleider, ICT-afdeling).
  step('whoask-stage', 'rule&step=whoask&id=r.l.stage.1.wa1', true);
  step('whoask-ict', 'rule&step=whoask&id=r.l.digitaal.2.wa1', true);
  // A written rule with the civic line (Meedoen in Nederland).
  step('rule-civic', 'rule&step=rule&lesson=r.l.meedoen.1', false);
  add('rule:retry', shot('rule&step=whatdo&retry=1'), null, { expect: '.tag-repeat' });
  add('rule:quiet', shot('rule&step=scene&quiet=1'), null, { expect: '.player-body .exercise' });
  add('rule:quit-dialog', shot('rule&step=whatdo'), async (p) => { await tap(p, '.player-top .lesson-close'); }, { expect: '.pause-sheet .sheet-sound' });
  add('rule:no-voice', shot('rule&step=whatdo&id=r.l.zoeken.3.wd2'), null, { voices: false, expect: '.player-body .exercise' });
  // A real rules lesson from its start, played through the player (built from seed 1).
  add('rule:lesson-start', shot('lesson&lesson=r.l.loon.2'), null, { expect: '.player-body .exercise' });
  add('rule:lesson-stage', shot('lesson&lesson=r.l.stage.3'), null, { expect: '.player-body .exercise' });
  add('rule:lesson-meedoen', shot('lesson&lesson=r.l.meedoen.1'), null, { expect: '.player-body .exercise' });
  // M4 around the lessons: "Herhaal vandaag" with rules questions, the home with the rules count
  // and the review due, the result (with the "Onthoud" line and its speaker), the certificate and
  // the pocket card of a rules unit.
  add('rule:daily', shot('daily'), null, { expect: '.player-body .exercise' });
  add('rule:daily-right', shot('daily'), async (p) => { await tap(p, choice, 0); await settle(p, 900); }, { expect: '.feedback-right' });
  add('rule:daily-wrong', shot('daily'), async (p) => { await tap(p, choice, 1); await settle(p, 900); }, { expect: '.feedback-wrong' });
  add('rule:route-daily-due', shot('route&state=shelf&daily=due'), null, { expect: '.daily-due' });
  add('rule:route-finished-daily', shot('route&state=finished&daily=due'), null, { expect: '.daily-due' });
  add('rule:result', shot('result'), null, { expect: '.result-remember' });
  add('rule:result-review', shot('result&review=1'), null, { expect: '.result-stronger' });
  add('rule:result-no-voice', shot('result'), null, { voices: false, expect: '.result-remember' });
  add('rule:certificate', shot('certificate&cu=r.loon&name=Fatima%20Amrani'), null, { expect: '.cert-words-rules' });
  add('rule:cert-earned', shot('cert-earned&cu=r.zoeken'), null, { expect: '.cert-words-rules' });
  add('rule:pocket', shot('pocket&cu=r.loon'), null, { expect: '.pocket-list-rules' });
  add('rule:pocket-sector', shot('pocket&cu=r.build'), null, { expect: '.pocket-list-rules' });
  // M5: the Hulp tab ("Wie bel je?": one tap or one speaker per row, the list exception), "Alle
  // regels" (one list, one tap per rule), About in Dutch only, Settings of the track, and the
  // line for a phone without a Dutch voice (home and Settings › Geluid).
  add('rule:help', shot('words'), null, { list: true, expect: '.rh-rows' });
  add('rule:help-no-voice', shot('words'), null, { list: true, voices: false, expect: '.rh-rows' });
  add('rule:shelf', shot('words&shelf=1'), null, { list: true, expect: '.shelf-list' });
  add('rule:shelf-open', shot('words&shelf=1'), async (p) => { await tap(p, '.tips-head', 0); await settle(p); }, { list: true, expect: '.shelf-body .rule-advice' });
  add('rule:about', shot('about'), null, { expect: '.about-section' });
  add('rule:settings', shot('settings'), null, { expect: '.max3-menu' });
  for (const pg of ['me', 'lessons', 'phone', 'language']) add(`rule:settings-${pg}`, shot(`settings&page=${pg}`), null, { list: true, expect: '.chrome-back' });
  for (const pg of ['sector', 'sound', 'voice', 'text', 'theme', 'reminder', 'backup']) add(`rule:settings-${pg}`, shot(`settings&page=${pg}`), null, { expect: '.chrome-back' });
  add('rule:settings-reminder-set', shot('settings&page=reminder'), withReminder, { expect: '.set-remind-now' });
  add('rule:settings-backup-fewer', shot('settings&page=backup'), async (p) => { await putBack(p, ['r.l.zoeken.1']); await tap(p, '.waybill-ask .danger'); }, { expect: '.waybill-fewer' });
  add('rule:settings-reset', shot('settings&page=reset'), null, { expect: '.reset-actions' });
  add('rule:settings-sound-no-voice', shot('settings&page=sound&novoice=1'), null, { expect: '.no-voice-note' });
  add('rule:route-no-voice', shot('route&state=mid&novoice=1'), null, { expect: '.no-voice-note' });
  add('rule:gate', shot('gate&try=1&greet=1'), null, { expect: '.gate-try' });
  add('rule:sector', shot('sector'), null, { expect: '.sector-step' });
  add('rule:sector-make', shot('sector&group=make'), null, { expect: '.sector-step-2' });
  // The region Zuid-Limburg: Settings › "Waar woon je?", the Hulp tab with the map's link, the
  // Sociale kaart, the dialect word card of les ZL.4 (no speaker), the "Waar ga je heen?" step with
  // the GrensInfoPunt, and a lesson of the region unit from its start.
  add('rule:settings-region', shot('settings&page=region&region=zl'), null, { expect: '.chrome-back' });
  add('rule:help-region', shot('words&region=zl'), null, { list: true, expect: '.social-map-link' });
  add('rule:social-map', shot('socialmap&region=zl'), null, { list: true, expect: '.sm-rows' });
  step('dialect', 'rule&step=rule&id=rg.zl.r.l.4.ru2', false);
  step('whoask-grens', 'rule&step=whoask&id=rg.zl.r.l.3.wa1', true);
  add('rule:lesson-region', shot('lesson&lesson=rg.zl.r.l.3'), null, { expect: '.player-body .exercise' });

  // The real first run in this track, from a clean phone (?rules=1 turns the track on in dev):
  // Nederlands -> (no gender page) -> the code page in Dutch -> the sector -> the home.
  const RULES = '/?rules=1';
  const nlStore = (extra) => async (p) => {
    await p.evaluate((x) => { localStorage.setItem('vloertaal.access', 'full'); localStorage.setItem('vloertaal:v1', JSON.stringify({ onboarded: true, helpLang: 'nl', ...x })); }, extra);
    await p.reload(); await settle(p, 900);
  };
  const toNlGate = async (p) => { await tap(p, '.lang-btn-nl'); await settle(p); };
  add('flow:nl-language', RULES, null, { list: true, expect: '.lang-btn-nl' });
  add('flow:nl-gate', RULES, toNlGate, { expect: '.pw-input' });
  // Back from the code page: the language list (Dutch has no gender page in between).
  add('flow:nl-gate-back', RULES, async (p) => { await toNlGate(p); await tap(p, '.chrome-back'); await settle(p); }, { list: true, expect: '.lang-grid' });
  add('flow:nl-gate-phone-back', RULES, async (p) => { await toNlGate(p); await p.goBack(); await settle(p); }, { list: true, expect: '.lang-grid' });
  // Without a code: the sneak preview of the track, on to the sector.
  add('flow:nl-free-sector', RULES, async (p) => { await toNlGate(p); await tap(p, '.gate-try'); await settle(p, 900); }, { expect: '.sector-step' });
  add('flow:nl-sector', RULES, async (p) => { await toNlGate(p); await p.fill('.pw-input', 'testcode'); await tap(p, '.pw-go'); await settle(p, 900); }, { expect: '.sector-step' });
  add('flow:nl-sector-back', RULES, async (p) => { await toNlGate(p); await p.fill('.pw-input', 'testcode'); await tap(p, '.pw-go'); await settle(p, 900); await tap(p, '.chrome-back'); await settle(p); }, { expect: '.pw-ok' });
  add('flow:nl-home', RULES, async (p) => { await toNlGate(p); await p.fill('.pw-input', 'testcode'); await tap(p, '.pw-go'); await settle(p, 900); await tap(p, '.max3-card', 2); await settle(p, 900); }, { expect: '.home3' });
  const nlHome = nlStore({ sector: 'none', completed: { 'r.l.zoeken.1': { best: 1, times: 1 } } });
  add('flow:nl-help-tab', RULES, async (p) => { await nlHome(p); await navTab(p, 1); await settle(p); }, { list: true, expect: '.rh-rows' });
  add('flow:nl-shelf', RULES, async (p) => { await nlHome(p); await navTab(p, 1); await settle(p); await tap(p, '.rules-shelf-link'); await settle(p); }, { list: true, expect: '.shelf-list' });
  add('flow:nl-settings-tab', RULES, async (p) => { await nlHome(p); await navTab(p, 2); await settle(p); }, { expect: '.max3-menu' });
  add('flow:nl-about-tab', RULES, async (p) => { await nlHome(p); await navTab(p, 3); await settle(p); }, { expect: '.about-section' });
  return S;
}

/* ------------------------------------------------------------------ in-page counter */
function countInPage() {
  // Dutch speakers. `.help-say` (the help language read aloud) is counted apart; `say-play-me`
  // plays the learner's own recording.
  const SPEAKER_CLS = /(^|\s)(speak|speak-glyph|choice-say|replay-btn|answer-say|tile-say|say-play|max3-say)(\s|$)/;
  const W = innerWidth;
  const hiddenByAncestor = (el) => {
    for (let a = el; a && a !== document.documentElement; a = a.parentElement) {
      const s = getComputedStyle(a);
      if (s.display === 'none' || s.visibility === 'hidden') return true;
      if (a.getAttribute('aria-hidden') === 'true' || a.hasAttribute('inert')) return true;
    }
    return false;
  };
  const transparent = (el) => { for (let a = el; a && a !== document.documentElement; a = a.parentElement) if (Number(getComputedStyle(a).opacity) === 0) return true; return false; };
  const clipped = (el, r) => {
    for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
      const s = getComputedStyle(a);
      if (/(hidden|clip)/.test(s.overflow + s.overflowX + s.overflowY)) {
        const q = a.getBoundingClientRect();
        if (r.right <= q.left + 1 || r.left >= q.right - 1 || r.bottom <= q.top + 1 || r.top >= q.bottom - 1) {
          if (!/(auto|scroll)/.test(s.overflow + s.overflowX + s.overflowY)) return true;
        }
      }
    }
    return false;
  };
  const present = (el) => {
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) return false;
    if (hiddenByAncestor(el)) return false;
    if (r.right <= 0 || r.left >= W) return false; // off to the side (no sideways page scroll)
    if (clipped(el, r)) return false;
    return true;
  };
  const label = (el) => {
    const t = (el.getAttribute('aria-label') || el.getAttribute('title') || el.innerText || el.value || el.getAttribute('placeholder') || '').replace(/\s+/g, ' ').trim();
    return (t || `<${el.tagName.toLowerCase()}.${(typeof el.className === 'string' ? el.className : '').split(/\s+/)[0]}>`).slice(0, 60);
  };
  const reactProps = (el) => { const k = Object.keys(el).find((x) => x.startsWith('__reactProps$')); return k ? el[k] : null; };
  const CLICKS = ['onClick', 'onPointerDown', 'onPointerUp', 'onMouseDown', 'onMouseUp', 'onTouchStart', 'onTouchEnd', 'onDoubleClick'];
  const clickHandler = (el) => { const p = reactProps(el); return Boolean(p && CLICKS.some((h) => typeof p[h] === 'function')); };
  const SEL = 'button, a[href], [role=button], [role=link], [role=radio], [role=switch], [role=checkbox], [role=tab], [role=option], [role=menuitem], input:not([type=hidden]), select, textarea, summary, [tabindex]:not([tabindex="-1"])';
  let scope = document;
  const modals = [...document.querySelectorAll('[aria-modal="true"], [role=dialog], [role=alertdialog], dialog[open]')].filter((m) => !hiddenByAncestor(m) && m.getBoundingClientRect().height > 4);
  if (modals.length) scope = modals[modals.length - 1];
  const set = new Set();
  for (const el of scope.querySelectorAll(SEL)) {
    if (el.matches('input[type=radio], input[type=checkbox], input[type=file]') && !present(el)) {
      const lab = el.closest('label') || (el.id && document.querySelector(`label[for="${el.id}"]`));
      if (lab) { set.add(lab); continue; }
    }
    if (el.matches('[tabindex]') && !el.matches('button, a, input, select, textarea, [role]')) {
      // a focusable scroll box or heading is not a choice unless it is clickable
      if (getComputedStyle(el).cursor !== 'pointer' && !clickHandler(el)) continue;
    }
    set.add(el);
  }
  // Clickable cards without a role: a pointer cursor whose parent has none, or a React click
  // handler (with or without the cursor) on an element that is no container of other controls.
  const isBackdrop = (el) => /(^|\s)sheet-backdrop(\s|$)/.test(typeof el.className === 'string' ? el.className : '');
  const noPointer = [];
  for (const el of scope.querySelectorAll('*')) {
    if (el.matches(SEL) || el.closest('.bottom-nav')) continue;
    const handler = clickHandler(el);
    const pointer = getComputedStyle(el).cursor === 'pointer';
    if (!handler && !pointer) continue;
    if (!handler && el.parentElement && getComputedStyle(el.parentElement).cursor === 'pointer') continue;
    if (el.closest(SEL) || el.querySelector(SEL)) continue; // part of a control, or a container of controls
    if (isBackdrop(el)) continue;
    if (handler && !pointer && present(el)) noPointer.push(label(el));
    set.add(el);
  }
  // A native control with a click handler but no pointer cursor (enabled ones only).
  for (const el of set) {
    if (!el.matches('button, a[href], [role=button], [role=radio], [role=link]')) continue;
    if (el.disabled || el.getAttribute('aria-disabled') === 'true') continue;
    if (clickHandler(el) && getComputedStyle(el).cursor !== 'pointer' && present(el)) noPointer.push(label(el));
  }
  const counted = [], speakers = [], helpSpeakers = [], nav = [], disabled = [], chrome = [], hiddenTappables = [];
  const inner = [...set].filter((el) => ![...set].some((o) => o !== el && o.contains(el) && o.matches('label') && el.matches('input')));
  const ITEM = '.choice-wrap, .tile-slot, .speaker-bubble, .chat-bubble, .max3-card-wrap, .phrase, .tip-bubble, .situation-quote, .intro-nl, .listen-buttons, .say-row, li';
  const items = [];
  for (const el of inner) {
    if (!present(el)) continue;
    const r = el.getBoundingClientRect();
    const cls = (typeof el.className === 'string' ? el.className : '').trim();
    const item = { label: label(el), tag: el.tagName.toLowerCase(), cls: cls.slice(0, 60), inView: r.top < innerHeight && r.bottom > 0, y: Math.round(r.top + scrollY), _el: el };
    if (el.closest('.bottom-nav')) { nav.push(item); continue; }
    // Fixed chrome: the lesson ✕ and the back arrow (same component, same corner everywhere), and
    // the "Iets melden" flag (a tool, not a step of the lesson; src/lib/report.ts), and its
    // switch at the bottom of Over (after the credits, like the flag a tool).
    if (el.matches('.lesson-close') || el.matches('.lesson-report') || el.matches('.about-tester') || (el.closest('.player-top') && el.getAttribute('aria-label') === 'Quit lesson') || el.matches('.chrome-back')) { chrome.push(item); continue; }
    if (transparent(el)) { hiddenTappables.push(item); continue; }
    const al = el.getAttribute('aria-label') || '';
    if (/(^|\s)help-say(\s|$)/.test(cls)) { helpSpeakers.push(item); continue; }
    if (/(^|\s)say-play-me(\s|$)/.test(cls)) { speakers.push({ ...item, mine: true }); continue; }
    if (SPEAKER_CLS.test(cls) || /^(Play|Afspelen|Listen)\b/i.test(al)) { speakers.push(item); continue; }
    if (el.disabled || el.getAttribute('aria-disabled') === 'true') { disabled.push(item); continue; }
    const answer = /(^|\s)(choice|tile|tile-with-say|match|type-input|type-tile|letter-tile|chat-line|say-rate-btn|remind-chip|gender-opt|sector-opt)(\s|$)/.test(cls) && Boolean(el.closest('.player-body, .exercise'));
    item.kind = answer ? 'answer' : el.closest('.player-top, header, .topbar, .top-bar') ? 'header' : 'action';
    counted.push(item);
    items.push(item);
  }
  counted.sort((a, b) => a.y - b.y);
  // More than one Dutch speaker on one item ("Play" + "Play slowly", two speakers in a bubble).
  const groups = new Map();
  for (const s of speakers.filter((x) => !x.mine)) {
    const host = s._el.parentElement && s._el.parentElement.closest(ITEM);
    const key = host || `label:${s.label.toLowerCase().replace(/slowly|slow|langzaam/g, '').replace(/^(play|afspelen|listen)\s*:?\s*/, '').trim()}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s.label);
  }
  const speakerDupes = [...groups.values()].filter((g) => g.length > 1);
  // Lists: one kind of row, at most one tap per row, no extra per-row buttons.
  const lists = [];
  const listEls = [...scope.querySelectorAll('ul, ol, .lang-grid, .set-rows')].filter((l) => !l.parentElement.closest('ul, ol, .lang-grid, .set-rows'));
  for (const ul of listEls) {
    const rows = [...ul.children].filter((c) => getComputedStyle(c).display !== 'none' && c.getBoundingClientRect().height > 2);
    if (rows.length < 2) continue;
    const per = rows.map((row) => counted.filter((c) => row === c._el || row.contains(c._el)));
    const sig = (taps) => taps.map((c) => `${c.tag}.${c.cls.split(/\s+/)[0]}`).join('+');
    const kinds = [...new Set(per.filter((t) => t.length).map(sig))];
    lists.push({
      sel: `${ul.tagName.toLowerCase()}.${(typeof ul.className === 'string' ? ul.className : '').split(/\s+/)[0]}`,
      rows: rows.length,
      rowKinds: kinds,
      multiTapRows: per.filter((t) => t.length > 1).map((t) => t.map((c) => c.label).join(' + ')),
      _el: ul,
    });
  }
  const inList = (c) => lists.some((l) => l._el.contains(c._el));
  const outside = counted.filter((c) => !inList(c));
  const strip = (a) => a.map(({ _el, ...r }) => r);
  return {
    counted: strip(counted), outsideLists: strip(outside), speakers: strip(speakers), helpSpeakers: strip(helpSpeakers), speakerDupes,
    lists: lists.map(({ _el, ...r }) => r), noPointer, hiddenTappables: strip(hiddenTappables),
    nav: nav.length, chrome: chrome.length, disabled: strip(disabled), modal: modals.length > 0, scrollHeight: document.documentElement.scrollHeight,
  };
}

/** The verdict for a state: PASS / LIST / FAIL, with the reasons. */
function judge(st, res, expectOk) {
  const why = [];
  if (st.list) {
    if (!res.lists.length) why.push('list state without a list');
    if (res.outsideLists.length > LIMIT) why.push(`${res.outsideLists.length} outside the list`);
    for (const l of res.lists) {
      if (l.rowKinds.length > 1) why.push(`${l.sel}: ${l.rowKinds.length} kinds of row (${l.rowKinds.join(' / ')})`);
      if (l.multiTapRows.length) why.push(`${l.sel}: rows with more than one tap (${l.multiTapRows.slice(0, 2).join('; ')})`);
    }
  } else if (res.counted.length > LIMIT) why.push(`${res.counted.length} > ${LIMIT}`);
  if (res.speakerDupes.length) why.push(`>1 Dutch speaker per item: ${res.speakerDupes.map((g) => g.join(' + ')).join('; ')}`);
  if (res.hiddenTappables.length) why.push(`invisible tappables: ${res.hiddenTappables.map((h) => h.label).join(', ')}`);
  if (res.noPointer.length) why.push(`click handler without pointer cursor: ${res.noPointer.join(', ')}`);
  if (!expectOk) why.push(`expected ${st.expect}`);
  return why;
}

/**
 * The verdict with the other counter (v8/mycount.js format): over the limit, or a list state
 * whose lists have rows with more than one tap or several kinds of row, or more than the limit
 * outside its lists; invisible (opacity 0) tappables; and the state's `expect`.
 */
function judgeMine(st, r, expectOk) {
  const why = [];
  if (st.list) {
    if (r.outsideLists > LIMIT) why.push(`${r.outsideLists} outside the lists`);
    for (const l of r.lists) {
      if (l.multiTapRows) why.push(`${l.sel}: ${l.multiTapRows} rows with more than one tap`);
      if (l.rowKinds.length > 1) why.push(`${l.sel}: kinds of row ${l.rowKinds.join(' / ')}`);
    }
  } else if (r.count > LIMIT) why.push(`${r.count} > ${LIMIT}`);
  if (r.hiddenTappables.length) why.push(`invisible tappables: ${r.hiddenTappables.join(', ')}`);
  if (!expectOk) why.push(`expected ${st.expect}`);
  return why;
}

/* ------------------------------------------------------------------ run */
function pick(S, names) {
  if (!names.length || names.includes('all')) return S;
  const out = [];
  for (const n of names) {
    if (n.startsWith('url:')) { out.push({ name: n.slice(4).replace(/[^a-z0-9]+/gi, '_').slice(0, 50), url: n.slice(4) }); continue; }
    const m = n.endsWith('*') ? S.filter((s) => s.name.startsWith(n.slice(0, -1))) : S.filter((s) => s.name === n);
    if (!m.length) console.error(`unknown state: ${n} (see --list)`);
    out.push(...m);
  }
  return out;
}

async function runOne(browser, st, cfg, outDir) {
  const [VW, VH] = cfg.vp.split('x').map(Number);
  const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, reducedMotion: 'reduce', locale: 'nl-NL', colorScheme: cfg.theme });
  if (st.voices) {
    // A device voice for every help language (and Dutch), as on a phone that has them.
    await ctx.addInitScript(() => {
      const fake = ['ar-SA', 'ti-ER', 'fa-IR', 'prs-AF', 'uk-UA', 'tr-TR', 'pl-PL', 'ro-RO', 'bg-BG', 'nl-NL'].map((l) => ({ lang: l, name: l, voiceURI: l, localService: true, default: false }));
      speechSynthesis.getVoices = () => fake;
      // The fakes are plain objects: an utterance takes them without complaint, and nothing plays.
      Object.defineProperty(SpeechSynthesisUtterance.prototype, 'voice', { configurable: true, get() { return null; }, set() {} });
      speechSynthesis.speak = () => {};
    });
  }
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e.message).slice(0, 120)));
  try {
    await page.goto(BASE + st.url, { waitUntil: 'networkidle', timeout: 20000 });
    await settle(page, 900);
    if (st.steps) await st.steps(page);
    await settle(page, 500);
    const res = COUNTER_SRC ? await page.evaluate(`(${COUNTER_SRC})()`) : await page.evaluate(countInPage);
    const expectOk = !st.expect || (await page.locator(st.expect).filter({ visible: true }).count()) > 0;
    const file = st.name.replace(/[^a-z0-9-]+/gi, '_');
    if (outDir && !NO_SHOTS) await page.screenshot({ path: path.join(outDir, `${file}.png`), fullPage: true });
    const why = COUNTER_SRC ? judgeMine(st, res, expectOk) : judge(st, res, expectOk);
    if (errors.length) why.push(`page errors: ${errors.join(' | ')}`);
    const row = { config: cfgName(cfg), state: st.name, url: st.url, pass: why.length === 0, list: Boolean(st.list), why, ...res, count: res.counted.length, errors };
    if (outDir) fs.writeFileSync(path.join(outDir, `${file}.json`), JSON.stringify(row, null, 2));
    return row;
  } catch (e) {
    return { config: cfgName(cfg), state: st.name, url: st.url, count: null, pass: false, why: [String(e.message).split('\n')[0]], counted: [], speakers: [], speakerDupes: [], disabled: [] };
  } finally {
    await ctx.close();
  }
}

(async () => {
  if (LIST) { defineStates(CONFIGS[0].lang).forEach((s) => console.log(`${s.name.padEnd(32)} ${s.list ? 'list ' : '     '}${s.url}`)); return; }
  const browser = await playwright.chromium.launch();
  const all = [];
  for (const cfg of CONFIGS) {
    const states = pick(defineStates(cfg.lang), argv);
    const outDir = OUT ? (CONFIGS.length > 1 ? path.join(OUT, cfgName(cfg).replace(/[^a-z0-9@-]+/gi, '_')) : OUT) : null;
    if (outDir) fs.mkdirSync(outDir, { recursive: true });
    if (!AS_JSON) console.log(`\n=== ${cfgName(cfg)} (${states.length} states)`);
    const rows = [];
    for (const st of states) {
      const row = await runOne(browser, st, cfg, outDir);
      rows.push(row);
      if (!AS_JSON) {
        const verdict = row.count === null ? 'ERROR' : !row.pass ? 'FAIL' : row.list ? 'LIST' : 'PASS';
        const shown = row.list && Array.isArray(row.outsideLists) ? row.outsideLists : row.counted;
        const els = row.count === null ? '' : shown.map((c) => `${c.kind === 'answer' ? '[A] ' : c.kind === 'header' ? '[H] ' : c.kind === 'div-handler' ? '[DIV] ' : ''}${c.label}`).join(' | ');
        const extra = [
          row.list && row.lists ? `list ${row.lists.map((l) => `${l.sel}:${l.rows}r`).join(',')}${typeof row.outsideLists === 'number' ? `, ${row.outsideLists} outside` : ''}` : '',
          row.speakers && row.speakers.length ? `speakers ${row.speakers.length}` : '',
          row.helpSpeakers && row.helpSpeakers.length ? `help-say ${row.helpSpeakers.length}` : '',
          row.chrome ? 'chrome' : '',
        ].filter(Boolean).join(', ');
        console.log(`${verdict.padEnd(5)} ${row.state.padEnd(32)} ${String(row.count ?? '-').padStart(3)}  ${els}${extra ? `  (${extra})` : ''}${row.why.length ? `\n      !! ${row.why.join('\n      !! ')}` : ''}`);
      }
    }
    const fail = rows.filter((r) => !r.pass).length;
    if (!AS_JSON) console.log(`--- ${cfgName(cfg)}: ${rows.length} states, ${rows.length - fail} pass (${rows.filter((r) => r.pass && r.list).length} of them checked lists), ${fail} fail.`);
    if (outDir) fs.writeFileSync(path.join(outDir, 'audit.json'), JSON.stringify(rows, null, 2));
    all.push(...rows);
  }
  await browser.close();
  if (AS_JSON) console.log(JSON.stringify(all, null, 2));
  else {
    const fail = all.filter((r) => !r.pass).length;
    console.log(`\nALL: ${all.length} states in ${CONFIGS.length} configuration(s), ${all.length - fail} pass, ${fail} fail. Not counted: bottom nav, lesson ✕, back arrow (.chrome-back), speakers; [A]=answer, [H]=header.`);
  }
  if (FAIL_EXIT && all.some((r) => !r.pass)) process.exitCode = 1;
})();
