import { describe, expect, it } from 'vitest';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import type { Lesson } from '../src/content/types';
import { lessonIcon } from '../src/lib/lessonIcon';

const lesson = (over: Partial<Lesson>): Lesson => ({ id: 'l.x', title: 'X', words: [], sentences: [], ...over }) as Lesson;

describe('lessonIcon (the picture beside a lesson in the overview)', () => {
  it('takes the first word that has a picture', () => {
    const icon = lessonIcon(lesson({ words: [
      { id: 'w.recht', emoji: '⚖️', picture: false },
      { id: 'w.helm', emoji: '⛑️' },
    ] as Lesson['words'] }));
    expect(icon).toEqual({ id: 'w.helm', emoji: '⛑️' });
  });

  it('gives a work-rules lesson the picture of its first rule card (drawn when there is a drawing)', () => {
    const icon = lessonIcon(lesson({ steps: [
      { kind: 'scene', id: 's', picture: '', lines: [] },
      { kind: 'rule', id: 'r1', emoji: '🧤', title: 'T', body: [], rule: 'geschreven' },
      { kind: 'rule', id: 'r2', emoji: '📄', title: 'T', body: [], rule: 'geschreven' },
    ] }));
    expect(icon).toEqual({ id: 'w.handschoenen', emoji: '🧤' });
  });

  it("prefers a lesson's own icon over its first rule card", () => {
    const icon = lessonIcon(lesson({
      rule: { goal: 'g', remember: 'r', icon: '🤝' },
      steps: [{ kind: 'rule', id: 'r1', emoji: '🤐', title: 'T', body: [], rule: 'geschreven' }],
    }));
    expect(icon).toEqual({ id: 'w.afspraak', emoji: '🤝' });
  });

  it('shows the job interview with a handshake, not a closed mouth', () => {
    const units = toCourseUnits([...rulesUnits, ...sectorRulesUnits]);
    const interview = units.flatMap((u) => u.lessons).find((l) => l.id === 'r.l.zoeken.3');
    expect(interview && lessonIcon(interview)?.emoji).toBe('🤝');
  });

  it('keeps the emoji of a rule card without a drawing', () => {
    const icon = lessonIcon(lesson({ steps: [{ kind: 'rule', id: 'r1', emoji: '🧭', title: 'T', body: [], rule: 'ongeschreven' }] }));
    expect(icon).toEqual({ id: '', emoji: '🧭' });
  });

  it('gives nothing when there is neither a picture nor a rule card', () => {
    expect(lessonIcon(lesson({}))).toBeUndefined();
  });

  it('finds an icon for every work-rules lesson', () => {
    for (const unit of toCourseUnits([...rulesUnits, ...sectorRulesUnits])) for (const l of unit.lessons) expect(lessonIcon(l), l.id).toBeDefined();
  });
});
