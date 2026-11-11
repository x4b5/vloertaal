import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { overzichtMarkdown } from '../src/overzicht/markdown';
import { HOME_CARD_ORDER, MOMENTS, PLACES } from '../src/overzicht/moments';
import { SCREENS } from '../src/overzicht/screens';
import { IN_BACKUP, STORED_KEYS } from '../src/overzicht/storageKeys';
import { SWITCHES } from '../src/overzicht/switches';
import { backupFile, emptyProgress } from '../src/lib/progress';

/**
 * docs/overzicht.md: the map of the app in plain Dutch (src/overzicht/). The app keeps it true:
 * the document is the lists, and the lists are the code's own keys, switches and screens.
 */
const read = (path: string) => readFileSync(path, 'utf8');

/** Every .ts/.tsx file of the app itself (not the dev harness, not the map). */
function appFiles(dir = 'src'): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const path = join(dir, e.name).replace(/\\/g, '/');
    if (e.isDirectory()) return path === 'src/dev' || path === 'src/overzicht' ? [] : appFiles(path);
    return /\.tsx?$/.test(e.name) ? [path] : [];
  });
}

/** A key of local or session storage as the code writes it: 'vloertaal:…', 'vloertaal.…', 'vloertaal-demo:…'. */
const KEY_LITERAL = /['"`](vloertaal(?:-demo)?[:.][A-Za-z][A-Za-z0-9:_-]*)['"`]/g;
/** The site's own name, not a key. */
const NOT_A_KEY = new Set(['vloertaal.nl']);

describe('docs/overzicht.md', () => {
  it('is what `npm run overzicht` writes now', () => {
    expect(read('docs/overzicht.md')).toBe(overzichtMarkdown());
  });
});

describe('what the phone remembers', () => {
  const inCode = new Map<string, Set<string>>();
  for (const file of appFiles()) {
    for (const m of read(file).matchAll(KEY_LITERAL)) {
      if (NOT_A_KEY.has(m[1])) continue;
      if (!inCode.has(m[1])) inCode.set(m[1], new Set());
      inCode.get(m[1])!.add(file);
    }
  }
  const web = STORED_KEYS.filter((k) => k.store === 'telefoon' || k.store === 'tabblad');

  it('every key in the code has a line in the register', () => {
    const known = new Set(STORED_KEYS.map((k) => k.key));
    expect([...inCode.keys()].filter((k) => !known.has(k))).toEqual([]);
  });

  it('every line in the register is a key the code still uses, in the file it names', () => {
    for (const k of web) expect([...(inCode.get(k.key) ?? [])], k.key).toContain(k.file);
    // The recordings and the saved lessons: their names stand in their own files.
    for (const k of STORED_KEYS.filter((s) => s.store === 'databank' || s.store === 'cache')) expect(read(k.file), k.key).toContain(`'${k.key}'`);
  });

  it('no key twice, and every line says what it is', () => {
    expect(new Set(STORED_KEYS.map((k) => k.key)).size).toBe(STORED_KEYS.length);
    for (const k of STORED_KEYS) expect(k.wat.length, k.key).toBeGreaterThan(10);
  });

  it('the backup file holds the progress and nothing else', () => {
    expect(STORED_KEYS.find((k) => k.key === IN_BACKUP)?.kind).toBe('voortgang');
    expect(Object.keys(JSON.parse(backupFile(emptyProgress, new Date(2026, 10, 11)))).sort()).toEqual(['app', 'progress', 'saved', 'track', 'version']);
  });
});

describe('the switches', () => {
  it('each names the file and the constant it reads', () => {
    for (const s of SWITCHES) {
      const [, file, constant] = /^(\S+) \((\w+)\)$/.exec(s.file) ?? [];
      expect(read(file), s.naam).toMatch(new RegExp(`export const ${constant}\\b`));
    }
  });
});

describe('what the app shows of its own accord', () => {
  it('every moment has a place, and every place has a moment', () => {
    for (const m of MOMENTS) expect(PLACES[m.plek], m.id).toBeDefined();
    for (const plek of Object.keys(PLACES)) expect(MOMENTS.some((m) => m.plek === plek), plek).toBe(true);
    expect(new Set(MOMENTS.map((m) => m.id)).size).toBe(MOMENTS.length);
  });

  it('the file each moment names is there', () => {
    for (const m of MOMENTS) {
      const file = /src\/\S+\.tsx?/.exec(m.code)?.[0];
      expect(file, m.id).toBeTruthy();
      const name = /^(\w+), /.exec(m.code)?.[1];
      if (name) expect(read(file!), m.id).toContain(name);
    }
  });

  // Until App.tsx reads the order from the list itself: the cards on the home stand in the list
  // in the order App.tsx tries them (each next one only when the ones before are not due).
  it('the cards on the home are in the order of src/App.tsx', () => {
    const app = read('src/App.tsx');
    const at = HOME_CARD_ORDER.map((call) => app.indexOf(`= ${call}`) >= 0 ? app.indexOf(`= ${call}`) : app.indexOf(`&& ${call}`));
    expect(at.every((i) => i > 0)).toBe(true);
    expect([...at].sort((a, b) => a - b)).toEqual(at);
    const cards = MOMENTS.filter((m) => m.plek === 'thuis-kaart').map((m) => `${m.code.split(',')[0]}(`);
    expect(cards).toEqual([...HOME_CARD_ORDER]);
  });
});

describe('the screens', () => {
  it('every screen has a name, what is on it and how to get there', () => {
    for (const [id, s] of Object.entries(SCREENS)) {
      expect(s.naam, id).toBeTruthy();
      expect(s.wat, id).toBeTruthy();
      expect(s.via, id).toBeTruthy();
    }
  });
});
