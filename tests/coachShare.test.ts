import { describe, expect, it } from 'vitest';
import { COACH_PITCH, COACH_SHARE, coachShareLinks } from '../src/content/pro';
import { coachPage } from '../src/lib/coachPage';
import { COACH_PATH } from '../src/lib/paths';
import { SITE } from '../src/lib/plainPage';

/**
 * "Stuur door aan een collega" (the owner's request, 9 November 2026: more exposure, through the
 * coaches first): one tap sends a colleague the professionals' page with a short line, ready to go.
 */
describe('Voor begeleiders: send it on to a colleague', () => {
  it('sends the professionals page, with the pitch', () => {
    expect(COACH_SHARE.url).toBe(`${SITE}${COACH_PATH}?via=begeleider`);
    expect(COACH_SHARE.text).toContain(COACH_PITCH);
  });

  it('has a WhatsApp and a mail link with the text and the address in them', () => {
    const { whatsapp, mail } = coachShareLinks();
    expect(decodeURIComponent(whatsapp)).toContain(COACH_SHARE.text);
    expect(decodeURIComponent(whatsapp)).toContain(COACH_SHARE.url);
    expect(mail.startsWith('mailto:?subject=Vloertaal')).toBe(true);
    expect(decodeURIComponent(mail)).toContain(COACH_SHARE.url);
  });

  it('puts both links near the top of vloertaal.nl/voor-begeleiders, before what Vloertaal is', () => {
    const page = coachPage();
    const { whatsapp, mail } = coachShareLinks();
    const at = page.indexOf('Stuur door aan een collega');
    expect(at).toBeGreaterThan(-1);
    expect(at).toBeLessThan(page.indexOf('id="what"'));
    expect(page).toContain(`href="${whatsapp.replace(/&/g, '&amp;')}"`);
    expect(page).toContain(`href="${mail.replace(/&/g, '&amp;')}"`);
  });
});
