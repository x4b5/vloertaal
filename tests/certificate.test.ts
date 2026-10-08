import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { certData, certDate, earnCertificates, earnedCertificates, keyPhrases, unitDone, unitJustDone } from '../src/lib/certificate';
import { completeLesson, emptyProgress, mergeBackup, parseBackup, backupFile, type Progress } from '../src/lib/progress';

const day = (d: number) => new Date(2026, 9, d, 12);
const first = units[0];
const finish = (p: Progress, ids: string[], d: number) => ids.reduce((q, id) => completeLesson(q, id, 1, false, day(d)), p);

describe('certificates', () => {
  it('a unit is done only with all its lessons, the Mixed review included', () => {
    const ids = first.lessons.map((l) => l.id);
    expect(ids[ids.length - 1]).toMatch(/\.mix$/);
    const almost = finish(emptyProgress, ids.slice(0, -1), 1);
    expect(unitDone(first, almost.completed)).toBe(false);
    expect(unitDone(first, finish(almost, ids.slice(-1), 1).completed)).toBe(true);
  });

  it('knows which lesson finished a unit, and only the first time', () => {
    const ids = first.lessons.map((l) => l.id);
    const before = finish(emptyProgress, ids.slice(0, -1), 1);
    const after = finish(before, ids.slice(-1), 2);
    expect(unitJustDone(before.completed, after.completed, ids[ids.length - 1])?.id).toBe(first.id);
    // Practising again later does not earn it again.
    const again = finish(after, [ids[0]], 3);
    expect(unitJustDone(after.completed, again.completed, ids[0])).toBeUndefined();
    // Any order: the last missing lesson is the one that finishes it.
    const other = finish(emptyProgress, [ids[2], ids[1]], 1);
    const done = finish(other, [ids[0]], 1);
    expect(unitJustDone(other.completed, done.completed, ids[0])?.id).toBe(first.id);
  });

  it('stores the date a unit was earned, and keeps it', () => {
    const ids = first.lessons.map((l) => l.id);
    let p = earnCertificates(finish(emptyProgress, ids, 5), day(5));
    expect(p.certs).toEqual({ [first.id]: '2026-10-05' });
    // Later changes keep the first date; nothing changes → the same object.
    p = earnCertificates(finish(p, [ids[0]], 9), day(9));
    expect(p.certs?.[first.id]).toBe('2026-10-05');
    expect(earnCertificates(p, day(10))).toBe(p);
  });

  it('old saves without dates still load; finished units get today lazily', () => {
    const ids = first.lessons.map((l) => l.id);
    const old = { ...finish(emptyProgress, ids, 1) };
    delete old.certs;
    expect(earnedCertificates(old, day(20))).toEqual([{ unit: first, day: '2026-10-20' }]);
    expect(earnCertificates(old, day(20)).certs).toEqual({ [first.id]: '2026-10-20' });
    expect(earnCertificates(emptyProgress, day(20))).toBe(emptyProgress);
  });

  it('a backup keeps the dates; merging keeps the earliest', () => {
    const ids = first.lessons.map((l) => l.id);
    const p = earnCertificates(finish(emptyProgress, ids, 3), day(3));
    const b = parseBackup(backupFile(p, day(4)))!;
    expect(b.certs).toEqual({ [first.id]: '2026-10-03' });
    const mine = { ...p, certs: { [first.id]: '2026-10-07' } };
    expect(mergeBackup(mine, b).certs).toEqual({ [first.id]: '2026-10-03' });
  });

  it('shows 6–10 key words and the line under them', () => {
    for (const u of units) {
      const n = keyPhrases(u).length;
      expect(n, u.id).toBeGreaterThanOrEqual(6);
      expect(n, u.id).toBeLessThanOrEqual(10);
    }
    const d = certData(first, '2026-10-08', '  Ali  ');
    expect(d.name).toBe('Ali');
    expect(d.lessons).toBe(first.lessons.length);
    expect(certDate('2026-10-08')).toMatch(/8 oktober 2026/);
  });
});
