import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { kunJeNu } from '../src/content/kunJeNu';
import { relatedUnits } from '../src/content/review';
import { themeOf, THEME_UNITS } from '../src/content/themes';
import { unitIcons } from '../src/content/unitIcons';
import { earnCertificates, earnedCertificates, unitDone } from '../src/lib/certificate';
import { emptyProgress } from '../src/lib/progress';
import { blockDoneCount, currentBlock, homeSuggestions, routeNextLesson, routeOrder } from '../src/lib/route';
import { TOPIC_PAGES } from '../src/lib/topicPages';

/**
 * "Verlof en ziekte" (u.leave) became two topics on 5 November 2026 (the owner's request):
 * "Verlof" (u.leave, the same id, so progress and certificates stay: Days off and Children and
 * work) and "Ziekte" (u.sick: Sick at home, l.illness with its old id, and the new lesson Back to
 * work after illness, l.backtowork). No migration: the lesson ids did not change.
 */

const unit = (id: string) => units.find((u) => u.id === id)!;
const ids = (id: string) => unit(id).lessons.map((l) => l.id);
const rec = { best: 1, times: 1 };
const doneLessons = (...lessonIds: string[]) => Object.fromEntries(lessonIds.map((id) => [id, rec]));

describe('Verlof and Ziekte, two topics', () => {
  it('Verlof keeps its id with Days off and Children and work; Ziekte has Sick at home and the new lesson', () => {
    expect(unit('u.leave').titleNl).toBe('Verlof');
    expect(ids('u.leave')).toEqual(['l.leave', 'l.kids', 'l.leave.mix']);
    expect(unit('u.sick').titleNl).toBe('Ziekte');
    expect(ids('u.sick')).toEqual(['l.illness', 'l.backtowork', 'l.sick.mix']);
  });

  it('Ziekte comes right after Verlof: in the course, in the path and in the theme "Je baan"', () => {
    const at = units.findIndex((u) => u.id === 'u.leave');
    expect(units[at + 1].id).toBe('u.sick');
    const path = routeOrder('none').map((u) => u.id);
    expect(path.indexOf('u.sick')).toBe(path.indexOf('u.leave') + 1);
    expect(themeOf('u.sick')?.id).toBe('theme.job');
    const job = THEME_UNITS['theme.job'].taal;
    expect(job.indexOf('u.sick')).toBe(job.indexOf('u.leave') + 1);
  });

  it('both are registered: related units both ways, an icon, "Wat kun je nu?", a topic page', () => {
    expect(relatedUnits['u.leave']).toContain('u.sick');
    expect(relatedUnits['u.sick']).toContain('u.leave');
    expect(relatedUnits['u.health']).toContain('u.sick');
    expect(unitIcons['u.sick']).toBeTruthy();
    expect(unitIcons['u.sick']).not.toBe(unitIcons['u.leave']);
    expect(kunJeNu('u.leave').map((z) => z.nl)).toEqual(['Ik kan verlof aanvragen.', 'Ik kan zeggen dat mijn kind ziek is.']);
    expect(kunJeNu('u.sick')[0].nl).toBe('Ik kan me ziek melden en beter melden.');
    expect(kunJeNu('u.sick')).toHaveLength(3);
    const pages = TOPIC_PAGES.map((p) => p.path);
    expect(pages).toContain('/onderwerpen/verlof/');
    expect(pages).toContain('/onderwerpen/ziekte/');
    expect(pages).not.toContain('/onderwerpen/verlof-en-ziekte/');
  });
});

describe('a learner who was busy in "Verlof en ziekte"', () => {
  it('halfway through Sick at home, with Verlof as the current topic: goes on in Verlof (Children and work)', () => {
    // Before the split the order was Days off, Sick at home, Children and work: done Days off,
    // stopped halfway in Sick at home (that save is kept per lesson, src/lib/resume.ts).
    const input = { sector: 'none' as const, completed: doneLessons('l.leave'), currentUnit: 'u.leave' };
    expect(currentBlock(input)?.id).toBe('u.leave');
    expect(routeNextLesson(input)?.id).toBe('l.kids');
    // Ziekte is open, from its first lesson: Sick at home.
    expect(blockDoneCount(unit('u.sick'), input.completed)).toBe(0);
    expect(routeNextLesson({ ...input, currentUnit: 'u.sick' })?.id).toBe('l.illness');
  });

  it('once Verlof is done, Ziekte is the recommended next topic', () => {
    const path = routeOrder('none');
    const before = path.slice(0, path.findIndex((u) => u.id === 'u.leave') + 1);
    const completed = doneLessons(...before.flatMap((u) => u.lessons.map((l) => l.id)));
    expect(currentBlock({ sector: 'none', completed, currentUnit: 'u.leave' })).toBeNull();
    expect(homeSuggestions('none', completed)[0].id).toBe('u.sick');
  });

  it('Sick at home already done: Ziekte is half started, and it is next after Verlof', () => {
    const completed = doneLessons('l.leave', 'l.illness');
    expect(blockDoneCount(unit('u.sick'), completed)).toBe(1);
    expect(unitDone(unit('u.sick'), completed)).toBe(false);
    // Still in Verlof (the chosen topic) until it is finished.
    expect(routeNextLesson({ sector: 'none', completed, currentUnit: 'u.leave' })?.id).toBe('l.kids');
    // No current topic saved (older saves): the first started topic that is not finished.
    expect(currentBlock({ sector: 'none', completed: doneLessons('l.illness') })?.id).toBe('u.sick');
    expect(routeNextLesson({ sector: 'none', completed: doneLessons('l.illness') })?.id).toBe('l.backtowork');
  });

  it('keeps the certificate of "Verlof en ziekte" (now Verlof); Ziekte waits for its new lesson', () => {
    const now = new Date('2026-11-05T10:00:00');
    const old = doneLessons('l.leave', 'l.illness', 'l.kids', 'l.leave.mix');
    const p = earnCertificates({ ...emptyProgress, completed: old, certs: { 'u.leave': '2026-11-01' } }, now);
    expect(p.certs).toEqual({ 'u.leave': '2026-11-01' });
    const earned = earnedCertificates(p, now).map((e) => e.unit.id);
    expect(earned).toContain('u.leave');
    expect(earned).not.toContain('u.sick');
    expect(blockDoneCount(unit('u.sick'), old)).toBe(1);
    // With the new lesson and the mixed review of Ziekte, its own certificate comes.
    const all = { ...old, ...doneLessons('l.backtowork', 'l.sick.mix') };
    expect(earnCertificates({ ...p, completed: all }, now).certs?.['u.sick']).toBe('2026-11-05');
  });
});
