import { afterEach, describe, expect, it, vi } from 'vitest';
import { units } from '../src/content/curriculum';
import { fillCount, getHelpLanguage, helpLanguages } from '../src/i18n/all';
import { uiNl } from '../src/i18n/nl';
import { emptyProgress, knownLessonId, knownLessons, mergeBackup, parseBackup, replaceWithBackup } from '../src/lib/progress';
import { reminderCancelIcs, reminderEvent, reminderIcs } from '../src/lib/reminder';
import { SETTINGS_PARENT, settingsDepth } from '../src/lib/settingsMenu';

/** Backup and reminder, a second look (2026-10-18): unknown lessons, both numbers, one calendar event. */

const store = new Map<string, string>();
function storage(broken = false) {
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => { if (broken) throw new Error('blocked'); return store.get(k) ?? null; },
    setItem: (k: string, v: string) => { if (broken) throw new Error('blocked'); store.set(k, v); },
    removeItem: (k: string) => void store.delete(k),
  });
}
afterEach(() => { vi.unstubAllGlobals(); store.clear(); });

const file = (completed: Record<string, unknown>) => JSON.stringify({ app: 'vloertaal', version: 1, progress: { completed } });
const done = { best: 1, times: 1 };

describe('backup: only lessons the app knows', () => {
  const ids = units.flatMap((u) => u.lessons.map((l) => l.id));

  it('an unknown lesson id is neither counted nor merged', () => {
    expect(knownLessonId(ids[0])).toBe(true);
    expect(knownLessonId('l.oldlesson')).toBe(false);
    const phone = { ...emptyProgress, completed: Object.fromEntries(ids.slice(0, 5).map((id) => [id, done])) };
    const back = parseBackup(file({ [ids[0]]: done, 'l.oldlesson': done }))!;
    expect(Object.keys(back.completed!)).toEqual([ids[0]]);
    expect(knownLessons(mergeBackup(phone, back).completed)).toBe(5);
    expect(Object.keys(mergeBackup(phone, back).completed)).not.toContain('l.oldlesson');
    // A phone that still holds an old id does not count it either.
    expect(knownLessons({ ...phone.completed, 'l.oldlesson': done })).toBe(5);
  });

  it('keeps ids of a course whose file is not on this phone yet (work rules, a region)', () => {
    // The work-rules course and the region packs are not loaded in this test.
    expect(knownLessonId('r.l.zoeken.1')).toBe(true);
    expect(knownLessonId('rg.zl.l.1')).toBe(true);
    expect(knownLessonId('rg.nowhere.l.1')).toBe(false);
  });

  it('replace takes the file as it is (the app asks first when it has fewer lessons)', () => {
    const phone = { ...emptyProgress, completed: Object.fromEntries(ids.slice(0, 6).map((id) => [id, done])) };
    const back = parseBackup(file({ [ids[0]]: done }))!;
    expect(knownLessons(back.completed!)).toBeLessThan(knownLessons(phone.completed));
    expect(knownLessons(replaceWithBackup(phone, back).completed)).toBe(1);
  });

  it('says "1 lesson", not "1 lessons", in every language with its own plural', () => {
    expect(fillCount('backupFileN', 1).en).toBe('This file has 1 lesson.');
    expect(fillCount('backupFileN', 6).en).toBe('This file has 6 lessons.');
    expect(fillCount('backupPhoneN', 1).en).toBe('You have 1 lesson.');
    const pl = helpLanguages.find((l) => l.code === 'pl')!;
    expect([1, 2, 5].map((n) => fillCount('backupFileN', n, pl).help)).toEqual(['Ten plik ma 1 lekcję.', 'Ten plik ma 2 lekcje.', 'Ten plik ma 5 lekcji.']);
    // The work-rules track's Dutch screens: the old pair, "les" for one.
    expect(uiNl.backupPhoneOne).toBe('Je hebt {n} les.');
    expect(uiNl.backupFileN).toBe('Dit bestand heeft {n} lessen.');
    expect(fillCount('backupFileN', 2, getHelpLanguage('ar')).help).toBe('في هذا الملف درسان.');
    for (const lang of helpLanguages) {
      for (const n of [0, 1, 2, 6]) expect(fillCount('backupFileN', n, lang).help, `${lang.code} ${n}`).toBeTruthy();
    }
  });
});

describe('reminder: one event per phone', () => {
  const now = new Date(2026, 9, 18, 9, 30);
  const line = (ics: string, key: string) => ics.split('\r\n').find((l) => l.startsWith(`${key}:`))?.slice(key.length + 1);

  it('keeps one random UID on this phone and raises SEQUENCE with every file', () => {
    storage();
    const a = reminderEvent();
    const b = reminderEvent();
    expect(a.sequence).toBe(0);
    expect(a.uid).toMatch(/^vloertaal-[0-9a-f]{20}@vloertaal$/);
    expect(b.uid).toBe(a.uid);
    expect(b.sequence).toBe(a.sequence + 1);
    const morning = reminderIcs('07:00', 'https://vloertaal.nl/', now, 'taal', undefined, a);
    const evening = reminderIcs('18:00', 'https://vloertaal.nl/', now, 'taal', undefined, b);
    expect(line(morning, 'UID')).toBe(line(evening, 'UID'));
    expect(Number(line(evening, 'SEQUENCE'))).toBeGreaterThan(Number(line(morning, 'SEQUENCE')));
    expect(line(evening, 'DTSTAMP')).toMatch(/^\d{8}T\d{6}Z$/);
    expect(line(evening, 'METHOD')).toBe('PUBLISH');
  });

  it('without storage each file is its own event (nothing breaks)', () => {
    storage(true);
    const a = reminderEvent();
    expect(a.sequence).toBe(0);
    expect(reminderEvent().uid).not.toBe(a.uid);
  });

  it('Stop cancels that same event: METHOD:CANCEL, STATUS:CANCELLED, a higher SEQUENCE, no alarm', () => {
    storage();
    const added = reminderEvent();
    const ics = reminderCancelIcs('18:00', 'https://vloertaal.nl/', now, 'taal', 'Czas na niderlandzki (10 minut)', reminderEvent());
    expect(line(ics, 'METHOD')).toBe('CANCEL');
    expect(line(ics, 'STATUS')).toBe('CANCELLED');
    expect(line(ics, 'UID')).toBe(added.uid);
    expect(Number(line(ics, 'SEQUENCE'))).toBe(added.sequence + 1);
    expect(ics).not.toContain('BEGIN:VALARM');
    // RFC 5545: CRLF line ends, no line over 75 octets (folded), BEGIN/END in pairs.
    expect(ics.endsWith('\r\n')).toBe(true);
    expect(ics.replace(/\r\n/g, '')).not.toMatch(/[\r\n]/);
    expect(ics.split('\r\n').every((l) => new TextEncoder().encode(l).length <= 75)).toBe(true);
    for (const part of ['VCALENDAR', 'VEVENT']) expect(ics.split(`BEGIN:${part}`).length).toBe(ics.split(`END:${part}`).length);
  });

  it('Settings: with a reminder set, "Andere tijd" opens the times one page deeper', () => {
    expect(SETTINGS_PARENT['reminder-time']).toBe('reminder');
    expect(settingsDepth('reminder-time')).toBe(3);
  });
});
