import { describe, expect, it } from 'vitest';
import { buildVersion } from '../vite.config';

/**
 * "Versie …" in About and in a tester's report: the build's commit. Since the move to statichost
 * (2 November 2026) only Vercel's variable was read, so it said "Versie dev" (evaluation, 4
 * November 2026).
 */
describe('the version of a build', () => {
  const noGit = () => { throw new Error('not a git repository'); };

  it('is the short commit hash from git', () => {
    expect(buildVersion(() => '88efebd\n', {})).toBe('88efebd');
    // Git's own short form, also when it needs more letters to be unique.
    expect(buildVersion(() => '88efebda1', { VERCEL_GIT_COMMIT_SHA: '1234567890abcdef' })).toBe('88efebda1');
  });

  it('else the commit the host gives in the environment, short', () => {
    expect(buildVersion(noGit, { COMMIT_SHA: '4F2A9C1D0E8B7A6F5E4D3C2B1A0F9E8D7C6B5A49' })).toBe('4f2a9c1');
    expect(buildVersion(noGit, { VERCEL_GIT_COMMIT_SHA: '1234567890abcdef' })).toBe('1234567');
    // Something that is not a commit (a branch name, empty) does not count.
    expect(buildVersion(() => 'fatal: not a git repository', { GIT_COMMIT: 'main' })).toBe('dev');
  });

  it('else "dev"', () => {
    expect(buildVersion(noGit, {})).toBe('dev');
  });

  it('here: a hash in a git checkout (as on GitHub), never an error', () => {
    expect(buildVersion()).toMatch(/^([0-9a-f]{7,40}|dev)$/);
  });
});
