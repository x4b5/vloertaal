import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { sentencePicture } from '../src/lib/exercises';

describe('sentencePicture', () => {
  it('finds the pictured word in a sentence, without its article', () => {
    const w = sentencePicture({ id: 's.x', nl: 'Draag altijd je helm.', en: '' });
    expect(w?.nl).toMatch(/helm$/);
  });
  it('gives nothing for a sentence without a pictured word', () => {
    expect(sentencePicture({ id: 's.y', nl: 'Ja, dat is goed.', en: '' }, [])).toBeUndefined();
  });
  it('covers some course sentences', () => {
    const all = units.flatMap((u) => u.lessons.flatMap((l) => l.sentences));
    expect(all.filter((s) => sentencePicture(s)).length).toBeGreaterThan(0);
  });
});
