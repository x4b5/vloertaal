import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BackupNudge, NUDGE_NL } from '../src/components/BackupNudge';
import { BackupCard } from '../src/components/Keep';
import { units } from '../src/content/curriculum';
import { getHelpLanguage, helpLanguages, ui } from '../src/i18n/all';
import { uiNl } from '../src/i18n/nl';
import { uiEn } from '../src/i18n/types';
import { NUDGE_AGAIN, NUDGE_FIRST, NUDGE_KEY, nudgeClosed, nudgeDue, nudgeEnv, nudgeRecord, nudgeShown, progressAtRisk, type NudgeEnv } from '../src/lib/backupNudge';
import { backupName, canShareBackup, sendBackup } from '../src/lib/backupShare';
import { PERSIST_ANSWER_KEY, keepStorageAgain, persistAnswer, persistStorage } from '../src/lib/install';
import { backupFile, emptyProgress, knownLessons, mergeBackup, parseBackup, replaceWithBackup, type Progress } from '../src/lib/progress';

/**
 * Stap 2, bewaren: the browser is asked (quietly) to keep the storage and its answer is kept; where
 * the progress is at risk the home shows "Bewaar je voortgang" once, after 3 lessons; the backup
 * file goes out through the share sheet (or as a download) and comes back in unchanged.
 */

const store = new Map<string, string>();
const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';
const ANDROID = 'Mozilla/5.0 (Linux; Android 13; SM-A136B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Mobile Safari/537.36';
const FACEBOOK = 'Mozilla/5.0 (Linux; Android 13; SM-A136B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/129.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/480.0.0.0;]';

beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
  });
});
afterEach(() => { vi.unstubAllGlobals(); store.clear(); });

function phone(ua: string, storage?: object, extra: object = {}) {
  vi.stubGlobal('navigator', { userAgent: ua, maxTouchPoints: 5, storage, ...extra });
  vi.stubGlobal('window', { matchMedia: () => ({ matches: false }) });
}

const env = (e: Partial<NudgeEnv>): NudgeEnv => ({ ios: false, installed: false, inApp: false, persist: null, ...e });

describe('persist: asked quietly, the answer kept', () => {
  it('remembers a yes and a no', async () => {
    phone(ANDROID, { persist: () => Promise.resolve(true) });
    expect(persistAnswer()).toBeNull();
    expect(await persistStorage()).toBe('granted');
    expect(persistAnswer()).toBe('granted');
    phone(ANDROID, { persist: () => Promise.resolve(false) });
    expect(await persistStorage()).toBe('denied');
    expect(store.get(PERSIST_ANSWER_KEY)).toBe('denied');
  });

  it('a browser without persist: nothing asked, nothing kept, nothing breaks', async () => {
    phone(ANDROID, undefined);
    expect(await persistStorage()).toBeNull();
    phone(ANDROID, { persist: () => Promise.reject(new Error('no')) });
    expect(await persistStorage()).toBeNull();
    expect(persistAnswer()).toBeNull();
  });

  it('asking again keeps the newest answer (a later yes replaces the no)', async () => {
    const persist = vi.fn(() => Promise.resolve(false));
    phone(ANDROID, { persisted: () => Promise.resolve(false), persist });
    await keepStorageAgain(10 * 86400_000);
    expect(persist).toHaveBeenCalledTimes(1);
    expect(persistAnswer()).toBe('denied');
    // Granted meanwhile (installed, more use): persisted() says so, without asking.
    phone(ANDROID, { persisted: () => Promise.resolve(true), persist });
    await keepStorageAgain(11 * 86400_000);
    expect(persist).toHaveBeenCalledTimes(1);
    expect(persistAnswer()).toBe('granted');
  });

  it('a garbled stored answer counts as never asked', () => {
    store.set(PERSIST_ANSWER_KEY, 'maybe');
    expect(persistAnswer()).toBeNull();
  });
});

describe('where the progress is at risk', () => {
  it('iPhone in Safari, an in-app browser, or persist said no', () => {
    expect(progressAtRisk(env({ ios: true }))).toBe(true);
    expect(progressAtRisk(env({ ios: true, installed: true }))).toBe(false);
    // Even granted: Safari's 7-day rule clears a site that is not on the home screen.
    expect(progressAtRisk(env({ ios: true, persist: 'granted' }))).toBe(true);
    expect(progressAtRisk(env({ inApp: true }))).toBe(true);
    expect(progressAtRisk(env({ persist: 'denied' }))).toBe(true);
    expect(progressAtRisk(env({ persist: 'granted' }))).toBe(false);
    // An Android phone never asked (yet): no card.
    expect(progressAtRisk(env({}))).toBe(false);
  });

  it('reads the phone itself', () => {
    phone(IPHONE);
    expect(nudgeEnv()).toMatchObject({ ios: true, installed: false, inApp: false });
    phone(FACEBOOK);
    expect(nudgeEnv()).toMatchObject({ ios: false, inApp: true });
    phone(ANDROID);
    store.set(PERSIST_ANSWER_KEY, 'denied');
    expect(progressAtRisk(nudgeEnv())).toBe(true);
    store.set(PERSIST_ANSWER_KEY, 'granted');
    expect(progressAtRisk(nudgeEnv())).toBe(false);
  });

  it('an iPhone with the app on the home screen is safe', () => {
    vi.stubGlobal('navigator', { userAgent: IPHONE, maxTouchPoints: 5, standalone: true });
    vi.stubGlobal('window', { matchMedia: () => ({ matches: false }) });
    expect(progressAtRisk(nudgeEnv())).toBe(false);
  });
});

describe('when the card comes, and when not', () => {
  it('not before 3 lessons, and never where the progress is safe', () => {
    expect(NUDGE_FIRST).toBe(3);
    expect(nudgeDue(0, null, true)).toBe(false);
    expect(nudgeDue(2, null, true)).toBe(false);
    expect(nudgeDue(3, null, true)).toBe(true);
    expect(nudgeDue(12, null, true)).toBe(true);
    expect(nudgeDue(3, null, false)).toBe(false);
    expect(nudgeDue(500, null, false)).toBe(false);
  });

  it('once: shown, it stays on the home until a tap or the next lesson, then waits many lessons', () => {
    nudgeShown(3);
    expect(nudgeRecord()).toEqual({ at: 3, closed: false });
    // Back on the home before the next lesson: still there.
    expect(nudgeDue(3, nudgeRecord(), true)).toBe(true);
    // Left for a lesson without a tap: gone.
    expect(nudgeDue(4, nudgeRecord(), true)).toBe(false);
    expect(nudgeDue(3 + NUDGE_AGAIN - 1, nudgeRecord(), true)).toBe(false);
    // Many lessons later: once more.
    expect(nudgeDue(3 + NUDGE_AGAIN, nudgeRecord(), true)).toBe(true);
    expect(NUDGE_AGAIN).toBeGreaterThanOrEqual(20);
  });

  it('a second mount for the same lessons does not move the record', () => {
    nudgeShown(3);
    nudgeShown(3);
    expect(nudgeRecord()).toEqual({ at: 3, closed: false });
  });

  it('tapped (Bewaar nu or Later): gone at once, back only after many lessons', () => {
    nudgeShown(3);
    nudgeClosed(3);
    expect(nudgeDue(3, nudgeRecord(), true)).toBe(false);
    expect(nudgeDue(3 + NUDGE_AGAIN, nudgeRecord(), true)).toBe(true);
  });

  it('a backup made in Settings (before the card) also counts', () => {
    nudgeClosed(1);
    expect(nudgeDue(3, nudgeRecord(), true)).toBe(false);
    expect(nudgeDue(1 + NUDGE_AGAIN, nudgeRecord(), true)).toBe(true);
  });

  it('a broken record is ignored; blocked storage never throws', () => {
    store.set(NUDGE_KEY, '{oops');
    expect(nudgeRecord()).toBeNull();
    store.set(NUDGE_KEY, JSON.stringify({ at: -1 }));
    expect(nudgeRecord()).toBeNull();
    vi.stubGlobal('localStorage', { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } });
    expect(nudgeRecord()).toBeNull();
    expect(() => nudgeShown(3)).not.toThrow();
    expect(() => nudgeClosed(3)).not.toThrow();
  });
});

describe('the card on the home', () => {
  const draw = (lang?: ReturnType<typeof getHelpLanguage>) =>
    renderToStaticMarkup(createElement(BackupNudge, { lang, lessons: 3, onKeep: () => {}, onLater: () => {} }));

  it('has two buttons (with "Ander onderwerp" under it: three), in every language', () => {
    for (const l of [undefined, getHelpLanguage('nl'), ...helpLanguages]) {
      const html = draw(l);
      expect(html.match(/<button/g)?.length, l?.code).toBe(2);
      expect(html).toContain('Bewaar je voortgang');
      expect(html).toContain('Bewaar nu');
    }
    expect(draw(getHelpLanguage('ar'))).toContain('dir="rtl"');
  });

  it('every new text is there in English, Dutch and all 13 languages', () => {
    for (const key of ['bewaarNudge', 'bewaarGo', 'backupShare', 'backupShareHint', 'backupMade'] as const) {
      expect(uiEn[key], key).toBeTruthy();
      expect(uiNl[key], key).toBeTruthy();
      for (const l of helpLanguages) {
        for (const g of ['m', 'f', 'x'] as const) {
          const t = ui(key, getHelpLanguage(l.code, g));
          expect(t.help, `${l.code} ${g} ${key}`).toBeTruthy();
          expect(t.help, `${l.code} ${key} not English`).not.toBe(uiEn[key]);
        }
      }
    }
    expect(uiNl.bewaarNudge).toBe(NUDGE_NL);
  });
});

describe('the backup, there and back', () => {
  const ids = units.flatMap((u) => u.lessons.map((l) => l.id)).slice(0, 7);
  const mine: Progress = {
    ...emptyProgress, onboarded: true, helpLang: 'pl', xp: 140, streak: 4, bestStreak: 6, lastDay: '2026-10-30',
    days: ['2026-10-27', '2026-10-28', '2026-10-29', '2026-10-30'],
    completed: Object.fromEntries(ids.map((id, i) => [id, { best: i % 2 ? 1 : 0.8, times: 1 + (i % 3) }])),
  };
  const now = new Date(2026, 9, 31, 10);

  it('shared as a .txt file: the file read back puts every lesson back', async () => {
    let shared: File | null = null;
    const share = vi.fn(async (d: { files: File[] }) => { shared = d.files[0]; });
    phone(ANDROID, undefined, { share, canShare: (d: { files?: File[] }) => Boolean(d.files?.length) });
    expect(canShareBackup()).toBe(true);
    const download = vi.fn();
    expect(await sendBackup(backupFile(mine, now), now, download)).toBe('shared');
    expect(download).not.toHaveBeenCalled();
    expect(shared!.name).toBe('vloertaal-voortgang-2026-10-31.txt');
    expect(shared!.type).toBe('text/plain');
    // The new phone: an empty start, "Zet terug" with that file.
    const back = parseBackup(await shared!.text())!;
    expect(back).not.toBeNull();
    const fresh = { ...emptyProgress, onboarded: true, helpLang: 'pl' as const };
    const replaced = replaceWithBackup(fresh, back);
    expect(replaced.completed).toEqual(mine.completed);
    expect(replaced.xp).toBe(140);
    expect(replaced.bestStreak).toBe(6);
    expect(knownLessons(mergeBackup(fresh, back).completed)).toBe(ids.length);
  });

  it('no share sheet: downloaded as .json, as before, with the same content', async () => {
    phone(ANDROID);
    expect(canShareBackup()).toBe(false);
    const download = vi.fn();
    expect(await sendBackup(backupFile(mine, now), now, download)).toBe('saved');
    const [name, type, content] = download.mock.calls[0];
    expect(name).toBe(backupName(now, 'json'));
    expect(type).toBe('application/json');
    expect(replaceWithBackup(emptyProgress, parseBackup(content)!).completed).toEqual(mine.completed);
  });

  it('closed share sheet: nothing else happens; a failing share falls back to the download', async () => {
    const abort = Object.assign(new Error('closed'), { name: 'AbortError' });
    phone(ANDROID, undefined, { share: () => Promise.reject(abort), canShare: () => true });
    const download = vi.fn();
    expect(await sendBackup('{}', now, download)).toBe('cancelled');
    expect(download).not.toHaveBeenCalled();
    phone(ANDROID, undefined, { share: () => Promise.reject(Object.assign(new Error('no'), { name: 'NotAllowedError' })), canShare: () => true });
    expect(await sendBackup('{}', now, download)).toBe('saved');
    expect(download).toHaveBeenCalledTimes(1);
  });

  it('a backup saved before this change (version 1 and 2 files) still goes back in', () => {
    const v1 = JSON.stringify({ app: 'vloertaal', version: 1, saved: '2026-09-01T10:00:00.000Z', progress: { xp: 30, streak: 2, completed: { [ids[0]]: { best: 1, times: 2 }, [ids[1]]: { best: 0.5, times: 1 } } } });
    const v2 = `{\n "app": "vloertaal",\n "version": 2,\n "saved": "2026-10-20T08:00:00.000Z",\n "track": "taal",\n "progress": {\n  "xp": 50,\n  "completed": {\n   "${ids[2]}": {\n    "best": 1,\n    "times": 1\n   }\n  }\n }\n}`;
    expect(Object.keys(replaceWithBackup(emptyProgress, parseBackup(v1)!).completed)).toEqual([ids[0], ids[1]]);
    expect(replaceWithBackup(emptyProgress, parseBackup(v1)!).xp).toBe(30);
    expect(Object.keys(replaceWithBackup(emptyProgress, parseBackup(v2)!).completed)).toEqual([ids[2]]);
  });

  it('Settings › Bewaar je voortgang: "Stuur naar jezelf" where the phone can share, else "Download"', () => {
    const draw = () => renderToStaticMarkup(createElement(BackupCard, { progress: mine, lang: getHelpLanguage('pl'), onRestore: () => {} }));
    phone(ANDROID, undefined, { share: () => Promise.resolve(), canShare: () => true });
    const sharing = draw();
    expect(sharing).toContain('Stuur naar jezelf');
    expect(sharing).toContain('keep-hint-share');
    expect(sharing).not.toContain('>Download<');
    phone(ANDROID);
    const plain = draw();
    expect(plain).toContain('Download');
    expect(plain).not.toContain('Stuur naar jezelf');
    // Two buttons either way (Bewaren, Zet terug): max-3.
    for (const html of [sharing, plain]) expect(html.match(/<button/g)?.length).toBe(2);
  });
});

