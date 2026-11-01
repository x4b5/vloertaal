import { afterEach, describe, expect, it, vi } from 'vitest';
import { iosBrowser, MIC_STEPS, micPlatform, micRefusedError, micSteps, watchMicPermission } from '../src/lib/micHelp';
import { micBlocked, micRefusedNow, resetMicForLesson, setMicRefused } from '../src/lib/speaking';
import { ensureLanguage, getHelpLanguage, ui } from '../src/i18n';
import { LANG_CODES } from '../src/i18n/meta';

/** "Zet de microfoon aan" (src/lib/micHelp.ts, components/Speaking.tsx). */
describe('a refused microphone', () => {
  afterEach(() => { vi.unstubAllGlobals(); resetMicForLesson(); });

  it('tells a refusal from a missing or busy microphone', () => {
    expect(micRefusedError({ name: 'NotAllowedError' })).toBe(true);
    expect(micRefusedError({ name: 'SecurityError' })).toBe(true);
    expect(micRefusedError({ name: 'NotFoundError' })).toBe(false);
    expect(micRefusedError({ name: 'NotReadableError' })).toBe(false);
    expect(micRefusedError(null)).toBe(false);
  });

  it('picks the steps for this kind of device', () => {
    expect(micPlatform('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)', 5, false)).toBe('ios');
    expect(micPlatform('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 5, false)).toBe('ios'); // iPad
    expect(micPlatform('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 0, false)).toBe('desktop');
    expect(micPlatform('Mozilla/5.0 (Linux; Android 14; Pixel 8)', 5, false)).toBe('android');
    expect(micPlatform('Mozilla/5.0 (Linux; Android 14; Pixel 8)', 5, true)).toBe('android-app');
    expect(micPlatform('Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 0, false)).toBe('desktop');
  });

  it('on an iPhone, tells Safari from Chrome, Edge and Firefox (no "aA" or "•••" menu there)', () => {
    const chrome = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 CriOS/130.0 Mobile/15E148 Safari/604.1';
    expect(micPlatform(chrome, 5, false)).toBe('ios-other');
    expect(iosBrowser(chrome)).toBe('Chrome');
    expect(iosBrowser('… EdgiOS/130 …')).toBe('Edge');
    expect(iosBrowser('… FxiOS/130 …')).toBe('Firefox');
    expect(iosBrowser('Mozilla/5.0 (iPhone) Version/18.0 Mobile/15E148 Safari/604.1')).toBeNull();
    expect(micSteps({ en: 'Settings › Apps › {app} › Microphone', help: 'Instellingen › Apps › {app}' }, chrome))
      .toEqual({ en: 'Settings › Apps › Chrome › Microphone', help: 'Instellingen › Apps › Chrome' });
    expect(micSteps({ en: '{app}' }, 'Safari/604.1').en).toBe('Safari');
  });

  it('is remembered for the lesson, and a new lesson tries again', () => {
    setMicRefused(true);
    expect(micRefusedNow()).toBe(true);
    expect(micBlocked()).toBe(true);
    resetMicForLesson();
    expect(micRefusedNow()).toBe(false);
    expect(micBlocked()).toBe(false);
  });

  it('goes on by itself once the microphone is allowed', async () => {
    const listeners: (() => void)[] = [];
    const status = { state: 'denied', addEventListener: (_: string, f: () => void) => listeners.push(f), removeEventListener: vi.fn() };
    vi.stubGlobal('navigator', { permissions: { query: () => Promise.resolve(status) } });
    const onAllowed = vi.fn();
    const stop = watchMicPermission(onAllowed);
    await Promise.resolve(); await Promise.resolve();
    listeners.forEach((f) => f());
    expect(onAllowed).not.toHaveBeenCalled();
    status.state = 'granted';
    listeners.forEach((f) => f());
    expect(onAllowed).toHaveBeenCalledTimes(1);
    stop();
    expect(status.removeEventListener).toHaveBeenCalled();
  });

  it('does not break where the browser cannot tell', () => {
    vi.stubGlobal('navigator', {});
    expect(() => watchMicPermission(() => {})()).not.toThrow();
  });

  it('has the texts in Dutch and in every help language', async () => {
    const keys = ['micRefused', 'micTurnOn', ...Object.values(MIC_STEPS)] as const;
    for (const code of ['nl', ...LANG_CODES] as const) {
      await ensureLanguage(code);
      const lang = getHelpLanguage(code, 'f');
      for (const k of keys) {
        const help = ui(k, lang).help;
        expect(help, `${code} ${k}`).toBeTruthy();
        expect(help, `${code} ${k}`).not.toBe(ui(k).en);
      }
    }
  });
});
