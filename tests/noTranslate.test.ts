import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// The browser must not translate the app: it would change the Dutch the learner is learning
// ("Hij belt het" became "Hij riem het"), and the voice would no longer match the text.
describe('no browser translation', () => {
  const html = readFileSync('index.html', 'utf8');
  it('says so on the page and for Chrome', () => {
    expect(html).toMatch(/<html[^>]*\btranslate="no"/);
    expect(html).toContain('<meta name="google" content="notranslate" />');
  });
});
