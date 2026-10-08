import { describe, expect, it } from 'vitest';
import { unitFromSearch } from '../src/lib/unitLink';

describe('coach links', () => {
  it('read a known unit from the address', () => {
    expect(unitFromSearch('?unit=pay')).toBe('u.pay');
    expect(unitFromSearch('?unit=Pay ')).toBe('u.pay');
    expect(unitFromSearch('?x=1&unit=tools')).toBe('u.tools');
  });
  it('ignore an unknown or missing unit', () => {
    expect(unitFromSearch('')).toBeNull();
    expect(unitFromSearch('?unit=')).toBeNull();
    expect(unitFromSearch('?unit=greenhouse')).toBeNull();
  });
});
