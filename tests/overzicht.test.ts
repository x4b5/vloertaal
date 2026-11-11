import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { overzichtMarkdown } from '../src/overzicht/markdown';
import { AFTER_RESULT_STEP, MOMENTS, PLACES, momentsAt } from '../src/overzicht/moments';
import { SCREENS } from '../src/overzicht/screens';
import { IN_BACKUP, STORED_KEYS } from '../src/overzicht/storageKeys';
import { SWITCHES } from '../src/overzicht/switches';
import { afterLessonSteps } from '../src/lib/afterLesson';
import { HOME_CARDS, RESULT_QUESTIONS, RESULT_ROW_HIDDEN_BY } from '../src/lib/momentOrder';
import { backupFile, emptyProgress } from '../src/lib/progress';

/**
 * docs/overzicht.md: the map of the app in plain Dutch (src/overzicht/). The app keeps it true:
 * the document is the lists, and the lists are the code's own keys, switches and screens.
 */
const read = (path: string) => readFileSync(path, 'utf8');

/** Every .ts/.tsx file of the app itself (not the dev harness, not the map). */
function appFiles(dir = 'src'): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const path = join(dir, e.name).replace(/\\/g, '/');
    if (e.isDirectory()) return path === 'src/dev' || path === 'src/overzicht' ? [] : appFiles(path);
    return /\.tsx?$/.test(e.name) ? [path] : [];
  });
}

/** A name on the phone written out as a string: 'vloertaal:…', 'vloertaal.…', 'vloertaal-demo:…', a database or the cache. */
const KEY_LITERAL = /['"`](vloertaal(?:-demo|-toets|-stem|-offline-v1)?(?:[:.][A-Za-z][A-Za-z0-9:_-]*)?)['"`]/g;
/** Not a key: the site's own name, and the name of the app in the backup file (BACKUP_APP). */
const NOT_A_KEY = new Set(['vloertaal.nl', 'vloertaal']);

describe('docs/overzicht.md', () => {
  it('is what `npm run overzicht` writes now', () => {
    expect(read('docs/overzicht.md')).toBe(overzichtMarkdown());
  });
});

describe('what the phone remembers', () => {
  it('no file writes a key out itself: every name comes from src/lib/storageKeys.ts', () => {
    const written: string[] = [];
    for (const file of appFiles()) {
      if (file === 'src/lib/storageKeys.ts') continue;
      for (const m of read(file).matchAll(KEY_LITERAL)) if (!NOT_A_KEY.has(m[1])) written.push(`${file}: ${m[1]}`);
    }
    expect(written).toEqual([]);
  });

  it('every line names the file that uses the key', () => {
    for (const k of STORED_KEYS) expect(read(k.file), `${k.ref} in ${k.file}`).toMatch(new RegExp(`\\b${k.ref.replace('.', '\\.')}\\b`));
  });

  it('the names on the phone are the ones of 12 November 2026 (a changed name loses what is kept under it)', () => {
    expect(Object.fromEntries(STORED_KEYS.map((k) => [k.ref, k.key]))).toMatchInlineSnapshot(`
      {
        "KEYS.aboutNl": "vloertaal:aboutNl",
        "KEYS.access": "vloertaal.access",
        "KEYS.admin": "vloertaal:admin",
        "KEYS.backupNudge": "vloertaal:backup-nudge",
        "KEYS.be": "vloertaal:be",
        "KEYS.certName": "vloertaal:cert-name",
        "KEYS.countDays": "vloertaal:count-dagen",
        "KEYS.countFirst": "vloertaal:count-eerste",
        "KEYS.countOff": "vloertaal:count-off",
        "KEYS.demoOn": "vloertaal-demo:on",
        "KEYS.demoOwn": "vloertaal-demo:own",
        "KEYS.demoStopped": "vloertaal-demo:stopped",
        "KEYS.feel": "vloertaal:gevoel",
        "KEYS.firstTimes": "vloertaal:first-times",
        "KEYS.goKnown": "vloertaal:go-known",
        "KEYS.greeted": "vloertaal:greeted",
        "KEYS.keepOffered": "vloertaal.keepOffered",
        "KEYS.learnWriting": "vloertaal:learn-writing",
        "KEYS.linkedUnit": "vloertaal.linkedUnit",
        "KEYS.listen": "vloertaal:listen",
        "KEYS.noVoiceNoted": "vloertaal:no-voice-noted",
        "KEYS.offline": "vloertaal:offline",
        "KEYS.offlineAuto": "vloertaal:offline-auto",
        "KEYS.oneApp": "vloertaal:nieuw",
        "KEYS.persist": "vloertaal:persist",
        "KEYS.persistAsked": "vloertaal:persist-asked",
        "KEYS.progress": "vloertaal:v1",
        "KEYS.reminderSeq": "vloertaal:reminder-seq",
        "KEYS.reminderTime": "vloertaal:reminder-time",
        "KEYS.reminderUid": "vloertaal:reminder-uid",
        "KEYS.reportHint": "vloertaal:report-hint",
        "KEYS.resume": "vloertaal:resume",
        "KEYS.rules": "vloertaal:rules",
        "KEYS.samenHelp": "vloertaal:samen-help",
        "KEYS.showEnglish": "vloertaal:show-english",
        "KEYS.shownHow": "vloertaal:shown-how",
        "KEYS.speaking": "vloertaal:speaking",
        "KEYS.tester": "vloertaal:tester",
        "KEYS.topicsOrder": "vloertaal:topicsOrder",
        "KEYS.updateFor": "vloertaal:update-for",
        "KEYS.updateReload": "vloertaal:update-reload",
        "KEYS.workTry": "vloertaal:work-try",
        "KEYS.workTryAsk": "vloertaal:work-try-ask",
        "KEYS.writingInput": "vloertaal:writing-input",
        "STORES.firstVoiceDb": "vloertaal-stem",
        "STORES.offlineCache": "vloertaal-offline-v1",
        "STORES.toetsDb": "vloertaal-toets",
      }
    `);
  });

  it('no key twice, and every line says what it is', () => {
    expect(new Set(STORED_KEYS.map((k) => k.key)).size).toBe(STORED_KEYS.length);
    for (const k of STORED_KEYS) expect(k.wat.length, k.key).toBeGreaterThan(10);
  });

  it('the backup file holds the progress and nothing else', () => {
    expect(STORED_KEYS.find((k) => k.key === IN_BACKUP)?.kind).toBe('voortgang');
    expect(Object.keys(JSON.parse(backupFile(emptyProgress, new Date(2026, 10, 11)))).sort()).toEqual(['app', 'progress', 'saved', 'track', 'version']);
  });
});

describe('the switches', () => {
  it('each names the file and the constant it reads', () => {
    for (const s of SWITCHES) {
      const [, file, constant] = /^(\S+) \((\w+)\)$/.exec(s.file) ?? [];
      expect(read(file), s.naam).toMatch(new RegExp(`export const ${constant}\\b`));
    }
  });
});

describe('what the app shows of its own accord', () => {
  it('every moment has a place, and every place has a moment', () => {
    for (const m of MOMENTS) expect(PLACES[m.plek], m.id).toBeDefined();
    for (const plek of Object.keys(PLACES)) expect(MOMENTS.some((m) => m.plek === plek), plek).toBe(true);
    expect(new Set(MOMENTS.map((m) => m.id)).size).toBe(MOMENTS.length);
  });

  it('the file each moment names is there', () => {
    for (const m of MOMENTS) {
      const file = /src\/\S+\.tsx?/.exec(m.code)?.[0];
      expect(file, m.id).toBeTruthy();
      const name = /^(\w+), /.exec(m.code)?.[1];
      if (name) expect(read(file!), m.id).toContain(name);
    }
  });

  it('the cards on the home and the result follow the app\'s own order (src/lib/momentOrder.ts)', () => {
    expect(momentsAt('thuis-kaart').map((m) => m.key)).toEqual([...HOME_CARDS]);
    expect(momentsAt('uitslag').map((m) => m.key)).toEqual([...RESULT_QUESTIONS, ...Object.keys(RESULT_ROW_HIDDEN_BY)]);
    // Each of those names is one moment, and a row says which questions it makes room for.
    for (const key of [...HOME_CARDS, ...RESULT_QUESTIONS, ...Object.keys(RESULT_ROW_HIDDEN_BY)]) expect(MOMENTS.filter((m) => m.key === key), key).toHaveLength(1);
    expect(momentsAt('uitslag').find((m) => m.key === 'samen')!.wanneer).toMatch(/Maakt plaats voor "Naar de noodzinnen" en "Wat vind je van Vloertaal\?"\.$/);
  });

  it('the screens after the result are in the order of src/lib/afterLesson.ts', () => {
    const steps = afterLessonSteps({ cert: 'u.pay', streakUp: 3 }).map((s) => AFTER_RESULT_STEP[s.name]);
    const listed = MOMENTS.filter((m) => m.plek === 'na-uitslag').map((m) => m.id);
    expect(steps.every(Boolean)).toBe(true);
    expect(listed.slice(0, steps.length)).toEqual(steps);
  });
});

describe('who gets what', () => {
  it('the table asks the passport itself, for the three kinds of learner', async () => {
    const { LEARNER_KINDS, LEARNER_ROWS } = await import('../src/overzicht/learners');
    const { learnerOf } = await import('../src/lib/learner');
    expect(LEARNER_KINDS.map((k) => k.me)).toEqual([learnerOf({ helpLang: 'pl' }, false), learnerOf({ helpLang: 'nl' }, false), learnerOf({ helpLang: 'pl' }, true)]);
    // Every answer of the passport has a row, and every row an answer in words.
    expect(Object.keys(LEARNER_ROWS).sort()).toEqual(Object.keys(LEARNER_KINDS[0].me).sort());
    for (const kind of LEARNER_KINDS) for (const [key, row] of Object.entries(LEARNER_ROWS)) expect((row.antwoord as (v: unknown) => string)(kind.me[key as keyof typeof kind.me]), `${kind.naam} ${key}`).toBeTruthy();
  });
});

describe('the screens', () => {
  it('every screen has a name, what is on it and how to get there', () => {
    for (const [id, s] of Object.entries(SCREENS)) {
      expect(s.naam, id).toBeTruthy();
      expect(s.wat, id).toBeTruthy();
      expect(s.via, id).toBeTruthy();
    }
  });
});
