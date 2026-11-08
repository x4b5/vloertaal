import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { AdminLessons } from '../src/components/AdminLessons';
import { courseUnits } from '../src/content/courses';

describe('admin lesson list', () => {
  const html = renderToStaticMarkup(createElement(AdminLessons, { onLesson: () => {} }));

  it('has a button for every lesson of the Dutch course', () => {
    const lessons = courseUnits('taal').flatMap((u) => u.lessons);
    expect(lessons.length).toBeGreaterThan(0);
    for (const l of lessons) expect(html).toContain(`data-lesson="${l.id}"`);
    expect(html.match(/data-lesson=/g)?.length).toBe(lessons.length);
  });

  it('heads each unit with its Dutch name', () => {
    for (const u of courseUnits('taal')) expect(html).toContain(u.titleNl);
  });
});
