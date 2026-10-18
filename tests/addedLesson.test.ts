import { describe, expect, it } from 'vitest';
import { findCourseUnit } from '../src/content/courses';
import { earnedCertificates, unitJustDone } from '../src/lib/certificate';
import { currentBlock } from '../src/lib/route';
import { sectorOwnUnit } from '../src/content/sectors';
import { emptyProgress, settleStreak, type Progress } from '../src/lib/progress';
import { restedYesterday } from '../src/lib/greeting';
import { higherAccess } from '../src/lib/access';

const done = (...ids: string[]) => Object.fromEntries(ids.map((i) => [i, { best: 1, times: 1 }]));
const all = (u: string) => findCourseUnit(u)!.lessons.map((l) => l.id);
const teach = (u: string) => all(u).filter((l) => !l.endsWith('.mix'));
const today = new Date(2026, 9, 18, 10);

describe('a lesson added to a unit the learner already finished', () => {
  // Safety finished on 1 October, before l.accident was added to it.
  const completed = done(...all('u.safety').filter((id) => id !== 'l.accident'));
  const p: Progress = { ...emptyProgress, onboarded: true, sector: 'logistics', completed, certs: { 'u.safety': '2026-10-01' }, currentUnit: 'u.safety' };

  it('keeps the certificate earned then, with its date', () => {
    expect(earnedCertificates(p, today).find((c) => c.unit.id === 'u.safety')?.day).toBe('2026-10-01');
  });

  it('offers the new lesson, and finishing it gives no second certificate', () => {
    expect(currentBlock(p, today, 'full')?.id).toBe('u.safety');
    expect(unitJustDone(completed, { ...completed, ...done('l.accident') }, 'l.accident', p.certs)).toBeUndefined();
    // Without a certificate yet, finishing the unit still gives one.
    expect(unitJustDone(completed, { ...completed, ...done('l.accident') }, 'l.accident', {})?.id).toBe('u.safety');
  });
});

describe('the sector\'s own unit while the first focus unit waits for its mixed review', () => {
  it('logistics, building and factory work: the own unit comes next, not the general order', () => {
    for (const sector of ['logistics', 'construction', 'production'] as const) {
      const completed = { ...done(...all('u.firstday')), ...done(...teach('u.safety')) };
      const next = currentBlock({ completed, currentUnit: 'u.safety', reviewDay: '2026-10-18', sector }, today, 'full')?.id;
      expect(sectorOwnUnit(sector), sector).toBeTruthy();
      expect(next, sector).toBe(sectorOwnUnit(sector));
    }
  });
});

describe('words still waiting after a free day', () => {
  it('a used free day counts as being away', () => {
    const base: Progress = { ...emptyProgress, onboarded: true, streak: 5, lastDay: '2026-10-16', freezes: 1 };
    const settled = settleStreak(base, today).progress;
    expect(settled.lastDay).toBe('2026-10-17');
    expect(restedYesterday(settled, '2026-10-18')).toBe(true);
    expect(restedYesterday({ ...base }, '2026-10-18')).toBe(false);
  });
});

describe('a code never lowers the access', () => {
  it('keeps the bigger one', () => {
    expect(higherAccess('full', 'preview')).toBe('full');
    expect(higherAccess('full', 'sample')).toBe('full');
    expect(higherAccess('sample', 'full')).toBe('full');
    expect(higherAccess('preview', 'full')).toBe('full');
    expect(higherAccess(null, 'sample')).toBe('sample');
  });
});
