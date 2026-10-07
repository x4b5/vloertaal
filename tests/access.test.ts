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
    expect(Object.keys(PASSWORD_HASHES)).toHaveLength(3);
    expect(normalizePassword('  Vlaai-Toer ')).toBe('vlaai-toer');
  });

  it('checks typed passwords (trimmed, any case)', async () => {
    expect(await checkPassword(' SneekPeak ')).toBe('preview');
    expect(await checkPassword('vlaai-toer')).toBe('full');
    expect(await checkPassword('vlaaitoer')).toBeNull();
    expect(await checkPassword('')).toBeNull();
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
