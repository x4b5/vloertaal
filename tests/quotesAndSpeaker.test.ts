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

  it('keeps a quoted message of a few sentences in one piece, with its marks', () => {
    // c.texting: "Sorry!" in the middle no longer ends the run ("«… laat. Sorry !Groet, Ali»").
    const msg = '«Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali»';
    expect(bdis(`مثلاً: ${msg}. انظر في جدول عملك.`).map((b) => b.props.children)).toEqual([msg]);
    expect(bdis('لذلك اسأل: «Mag ik mijn dienst ruilen?».').map((b) => b.props.children)).toEqual(['«Mag ik mijn dienst ruilen?»']);
  });

  it('keeps a time or an amount in one piece ("8:30", never "30:8")', () => {
    expect(bdis('في الساعة 8:30.').map((b) => b.props.children)).toEqual(['8:30']);
    expect(bdis('يكلف 6,50 يورو').map((b) => b.props.children)).toEqual(['6,50']);
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
