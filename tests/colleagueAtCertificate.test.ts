import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { colleagueAtCertificate } from '../src/lib/certificate';
import { completeLesson, emptyProgress, type Progress } from '../src/lib/progress';

/**
 * "Voor je collega" at the first certificate (the owner's request, 9 November 2026: more exposure;
 * a colleague on the floor helps the learner practise and sees vloertaal.nl). Only the first: after
 * that the certificate offers the pocket card again, as before, three things to tap either way.
 */
const day = new Date(2026, 10, 9, 12);
const finish = (p: Progress, unitIndex: number) => units[unitIndex].lessons.reduce((q, l) => completeLesson(q, l.id, 1, false, day), p);
const start: Progress = { ...emptyProgress, onboarded: true, helpLang: 'pl' };

describe('the colleague card at the first certificate (src/lib/certificate.ts)', () => {
  it('is offered with the first certificate', () => {
    expect(colleagueAtCertificate(finish(start, 0))).toBe(true);
  });

  it('is not offered with the second', () => {
    expect(colleagueAtCertificate(finish(finish(start, 0), 1))).toBe(false);
  });

  it('is not offered before any certificate', () => {
    expect(colleagueAtCertificate(start)).toBe(false);
  });

  it('is not offered in Werkregels: those learners speak Dutch already', () => {
    expect(colleagueAtCertificate({ ...finish(start, 0), helpLang: 'nl' })).toBe(false);
  });
});
