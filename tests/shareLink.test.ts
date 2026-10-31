import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { getHelpLanguage } from '../src/i18n/all';
import { registerPack } from '../src/i18n';
import nlPack from '../src/i18n/packs/nl';
import { LANG_CODES } from '../src/i18n/meta';
import { uiNl } from '../src/i18n/nl';
import { uiEn } from '../src/i18n/types';
import { sharePng } from '../src/lib/canvasShare';
import { shareText, siteLink } from '../src/lib/shareLink';

beforeAll(() => registerPack(nlPack));
afterEach(() => {
  vi.unstubAllGlobals();
});

describe('a shared picture leads somewhere', () => {
  it('the address: the help language page, else the site itself', () => {
    expect(siteLink('pl')).toBe('vloertaal.nl/pl');
    expect(siteLink('prs')).toBe('vloertaal.nl/prs');
    expect(siteLink('nl')).toBe('vloertaal.nl');
    expect(siteLink(undefined)).toBe('vloertaal.nl');
    expect(siteLink('../x')).toBe('vloertaal.nl');
  });

  it('the text is in the help language, with a plain link (no tracking parameters)', () => {
    expect(shareText(getHelpLanguage('pl'))).toBe('Uczę się niderlandzkiego do pracy z Vloertaal. Za darmo: https://vloertaal.nl/pl');
    expect(shareText(getHelpLanguage('nl'))).toBe('Ik leer Nederlands voor mijn werk met Vloertaal. Gratis: https://vloertaal.nl');
    expect(shareText(undefined)).toBe('I am learning Dutch for my work with Vloertaal. It is free: https://vloertaal.nl');
    for (const code of LANG_CODES) {
      const text = shareText(getHelpLanguage(code));
      expect(text, code).toContain(`https://vloertaal.nl/${code}`);
      expect(text, code).not.toMatch(/[?#&]|utm|\{link\}/);
      expect(text, code).not.toBe(shareText(undefined).replace('https://vloertaal.nl', `https://vloertaal.nl/${code}`));
    }
    expect(uiEn.shareInvite).toContain('{link}');
    expect(uiNl.shareInvite).toContain('{link}');
  });

  it('passes the text to the share sheet with the picture', async () => {
    const share = vi.fn(() => Promise.resolve());
    vi.stubGlobal('navigator', { share, canShare: () => true });
    const how = await sharePng(new Blob(['x'], { type: 'image/png' }), 'a.png', 'Certificaat', 'Gratis: https://vloertaal.nl/pl');
    expect(how).toBe('shared');
    expect(share).toHaveBeenCalledTimes(1);
    const data = (share.mock.calls[0] as unknown[])[0] as ShareData;
    expect(data.text).toBe('Gratis: https://vloertaal.nl/pl');
    expect(data.title).toBe('Certificaat');
    expect(data.files).toHaveLength(1);
    expect(data.url).toBeUndefined();
  });

  it('every picture draws the address at its foot', async () => {
    const { readFileSync } = await import('node:fs');
    for (const f of ['certCanvas', 'pocketCanvas', 'kaartCanvas']) {
      expect(readFileSync(`src/lib/${f}.ts`, 'utf8'), f).toMatch(/fillText\(siteLink\(d\.helpCode\)/);
    }
  });
});
