import { isValidElement, type ReactElement } from 'react';
import { beforeAll, describe, expect, it } from 'vitest';
import { isolateLatin } from '../src/components/Bi';
import { loadPictures, pictureCast } from '../src/pictures';

describe('a Dutch quote in right-to-left text', () => {
  const parts = (t: string) => ([] as unknown[]).concat(isolateLatin(t));
  const bdis = (t: string) => parts(t).filter(isValidElement) as ReactElement<{ children: string; className?: string }>[];

  it('keeps its quote marks inside the isolated phrase, and a short quote on one line', () => {
    const [q] = bdis('مشرفتك الجديدة تقول: «Zeg maar je, hoor!» ماذا تقصد؟');
    expect(q.props.children).toBe('«Zeg maar je, hoor!»');
    expect(q.props.className).toBe('nl-quote');
  });

  it('lets a long quote wrap, and leaves unquoted Latin words alone', () => {
    const [long] = bdis('قل: «Kunt u dat nog een keer langzaam herhalen?» من فضلك');
    expect(long.props.children.startsWith('«')).toBe(true);
    expect(long.props.className).toBeUndefined();
    const [plain] = bdis('كلمة helm هنا');
    expect(plain.props.children).toBe('helm');
    expect(plain.props.className).toBeUndefined();
  });
});

describe('the speaker of a picture', () => {
  beforeAll(() => loadPictures());
  it('is the cast member drawn in it, or none', () => {
    expect(pictureCast('w.dankjewel')).toBe('jada');
    expect(pictureCast('w.goedemorgen')).toBe('amina');
    expect(pictureCast('w.helm')).toBeUndefined();
    expect(pictureCast('no.such.picture')).toBeUndefined();
  });
});
