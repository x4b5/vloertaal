import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { checkPassword, lessonAllowed, normalizePassword, PASSWORD_HASHES } from '../src/lib/access';
import { isUnlocked } from '../src/lib/exercises';

const sha = (s: string) => createHash('sha256').update(s).digest('hex');

describe('access', () => {
  it('stores hashes of the normalised passwords, not the passwords', () => {
    expect(PASSWORD_HASHES[sha('sneekpeak')]).toBe('preview');
    expect(PASSWORD_HASHES[sha('sneakpeek')]).toBe('preview');
    expect(PASSWORD_HASHES[sha('vlaai-toer')]).toBe('full');
    // The full-version password as it is normalised now (without the hyphen).
    expect(PASSWORD_HASHES[sha(normalizePassword('vlaai-toer'))]).toBe('full');
    // The pilot code (October 2026) is not written in the repository, only its hash.
    const PILOT = '94f3f76d391ed7e22dfd2fa93a9c9c0fbfa125385ca45c1ea7702fb28457979e';
    expect(PASSWORD_HASHES[PILOT]).toBe('full');
    expect(Object.keys(PASSWORD_HASHES)).toHaveLength(5);
    // Every other stored hash is reached by some normalised form of a known password.
    const known = ['sneekpeak', 'sneakpeek', 'vlaai-toer'];
    const reached = new Set(known.flatMap((p) => [sha(p), sha(normalizePassword(p))]));
    for (const h of Object.keys(PASSWORD_HASHES).filter((k) => k !== PILOT)) expect(reached.has(h), h).toBe(true);
  });

  it('normalises: lower case, no spaces, hyphens or dots, Eastern digits as 0-9', () => {
    expect(normalizePassword('  Vlaai-Toer ')).toBe('vlaaitoer');
    expect(normalizePassword('vlaai toer')).toBe('vlaaitoer');
    expect(normalizePassword('vlaai.toer')).toBe('vlaaitoer');
    expect(normalizePassword('vlaai\u2013toer')).toBe('vlaaitoer'); // a dash a phone keyboard puts in
    expect(normalizePassword('code \u0661\u0662\u0663')).toBe('code123'); // Arabic-Indic
    expect(normalizePassword('code \u06f4\u06f5\u06f6')).toBe('code456'); // Persian
    expect(normalizePassword('\u0660\u0669\u06f0\u06f9')).toBe('0909');
  });

  it('checks typed passwords (any case, with or without separators)', async () => {
    expect(await checkPassword(' SneekPeak ')).toBe('preview');
    expect(await checkPassword('sneak peek')).toBe('preview');
    expect(await checkPassword('Sneak-Peek.')).toBe('preview');
    expect(await checkPassword('vlaai-toer')).toBe('full');
    expect(await checkPassword('vlaaitoer')).toBe('full');
    expect(await checkPassword('Vlaai Toer')).toBe('full');
    expect(await checkPassword('vlaai')).toBeNull();
    expect(await checkPassword('')).toBeNull();
    expect(await checkPassword(' - . ')).toBeNull();
  });

  it('a preview only opens the first unit, whatever the progress says', () => {
    const [first, second] = units;
    const done = Object.fromEntries(units.flatMap((u) => u.lessons).map((l) => [l.id, {}]));
    expect(first.lessons.every((l) => lessonAllowed(l.id, 'preview'))).toBe(true);
    expect(second.lessons.some((l) => lessonAllowed(l.id, 'preview'))).toBe(false);
    expect(isUnlocked(second.lessons[0].id, done, 'preview')).toBe(false);
    expect(isUnlocked(second.lessons[0].id, done, 'full')).toBe(true);
  });
});
