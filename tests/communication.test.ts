import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { COMMUNICATION, COMMUNICATION_LESSONS } from '../src/content/communication';
import { proSections } from '../src/content/pro';

describe('"Communicatie" across the topics (src/content/communication.ts)', () => {
  it('names real lessons, in their own topic, with the topic name of the course', () => {
    for (const t of COMMUNICATION) {
      const unit = units.find((u) => u.id === t.unit);
      expect(unit, t.unit).toBeDefined();
      expect(t.titleNl).toBe(unit!.titleNl);
      for (const [id, nl] of t.lessons) {
        expect(unit!.lessons.some((l) => l.id === id), id).toBe(true);
        expect(nl.length).toBeGreaterThan(3);
      }
    }
  });

  it('has every lesson of "Goed communiceren" and "Feedback en overleg", and no lesson twice', () => {
    for (const id of ['u.communicate', 'u.feedback']) {
      for (const l of units.find((u) => u.id === id)!.lessons.filter((x) => !x.id.endsWith('.mix'))) expect(COMMUNICATION_LESSONS.has(l.id), l.id).toBe(true);
    }
    const all = COMMUNICATION.flatMap((t) => t.lessons.map(([id]) => id));
    expect(new Set(all).size).toBe(all.length);
  });

  it('is on the page for coaches, one line per topic', () => {
    const s = proSections.find((p) => p.id === 'p.comm')!;
    expect(s.lines).toHaveLength(COMMUNICATION.length);
    expect(s.lines!.find((l) => l.lead === 'Goed communiceren.')!.text).toContain('Praat er op tijd over');
  });
});
