import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { allLessons, allWords, findLesson } from '../src/content/curriculum';
import type { JSX } from 'react';
import { buildLesson, dutchExercise, type Exercise } from '../src/lib/exercises';
import { createRng } from '../src/lib/random';
import { hasPicture, lookKey, looksAlike, samePicture } from '../src/lib/wordPicture';

const SEEDS = [1, 2, 3, 7, 42, 99, 2026, 31337];
const runs = (fn: (exercises: Exercise[], label: string) => void) => {
  for (const lesson of allLessons) {
    for (const review of [false, true]) {
      for (const quiet of [false, true]) {
        for (const seed of SEEDS) fn(buildLesson(lesson, { review, seed, quiet }), `${lesson.id} review=${review} quiet=${quiet} seed=${seed}`);
      }
    }
  }
};

// Each check builds every lesson 32 times: room for a busy machine.
describe('abstract words (no picture)', { timeout: 20000 }, () => {
  it('are flagged in the content', () => {
    const abstract = allWords.filter((w) => !hasPicture(w)).map((w) => w.id);
    expect(abstract).toContain('w.recht');
    expect(abstract).toContain('w.premie');
    expect(abstract).toContain('w.eerlijk');
    // 105: the six words of l.hours (u.numbers) got pictures (drawn clocks, ⏱️ ⏳ ➕).
    // 106: "gebeuren" (to happen, l.accident) has no picture.
    expect(abstract).toContain('w.gebeuren');
    // 109: "de opdracht", "verlengen" and "uitbetalen" (l.agency) have no picture.
    for (const id of ['w.opdracht', 'w.verlengen', 'w.uitbetalen']) expect(abstract).toContain(id);
    // 112: "eerst", "daarna" and "bijna" (l.task) have no picture.
    for (const id of ['w.eerst', 'w.daarna', 'w.bijna']) expect(abstract).toContain(id);
    // 117: "nog niet", "mogen", "proberen", "voordoen" and "de uitleg" (l.notyet) have no picture
    // (🤞 would say "hope it goes well", 🧑‍🔧 "mechanic"); l.arrive has a picture for every word.
    for (const id of ['w.nogniet', 'w.mogen', 'w.proberen', 'w.voordoen', 'w.uitleg']) expect(abstract).toContain(id);
    // 125: kloppen, zeker, persoonlijk, de gegevens, echt, de haast, automatisch and het besluit (u.ai,
    // "Slimme apps en AI") have no picture.
    for (const id of ['w.kloppen', 'w.zeker', 'w.persoonlijk', 'w.gegevens', 'w.echt', 'w.haast', 'w.automatisch', 'w.besluit']) expect(abstract).toContain(id);
    // 143 (30 October 2026): 18 new abstract words. "de geboortedatum" (l.details), the six words
    // of l.dates (days, weeks, "tot en met"), "het hoofd", "de rug" and "de buik" (l.body), "het
    // ouderschapsverlof" and "het zorgverlof" (l.kids), "de eindafrekening", "opzeggen" and
    // "uitschrijven" (l.jobends), "de werkvergunning", "de zzp’er" and "de inburgering" (l.permit).
    // ("het hoofd", "de rug" and "de buik" have since been drawn: see 199 below.)
    // (The six of l.dates have since been drawn as a week strip: see 189 below.)
    for (const id of ['w.geboortedatum', 'w.zorgverlof', 'w.eindafrekening', 'w.zzper', 'w.inburgering']) expect(abstract).toContain(id);
    // 209 (30 October 2026, Entree in the Taal track): 66 new abstract words in 17 lessons, among
    // them "het aantal" and "klaarleggen" (l.workorder), "nakijken" and "op slot" (l.handover),
    // "onder spanning" (l.power), "de POK" (l.placement), all six of l.mychoice and l.nextstep, "de
    // bedenktijd" (l.budget), "somber" (l.healthy) and "de verkiezing" (l.council).
    for (const id of ['w.aantal', 'w.klaarleggen', 'w.nakijken', 'w.opslot', 'w.onderspanning', 'w.pok', 'w.goedin', 'w.startkwalificatie', 'w.bedenktijd', 'w.somber', 'w.verkiezing']) expect(abstract).toContain(id);
    // 199 (30 October 2026, group26): ten of them were concrete after all and got a drawing: "het
    // hoofd", "de rug", "de buik" (l.body), "slijpen", "de kabel", "de stroom", "de hefbrug", "lek",
    // "kapot" and "de rechter".
    for (const id of ['w.hoofd', 'w.rug', 'w.buik', 'w.slijpen', 'w.kabel', 'w.stroom', 'w.hefbrug', 'w.lek', 'w.kapot', 'w.rechter']) expect(abstract).not.toContain(id);
    // 189 (30 October 2026, group27): ten time words got a week strip (Monday first, the weekend
    // in a warm tint): the six of l.dates, "het weekend", "zaterdag", "overmorgen" and "elke dag".
    const weekWords = ['w.week', 'w.weekend', 'w.maandag', 'w.zaterdag', 'w.elkedag', 'w.totenmet', 'w.volgendeweek', 'w.vorigeweek', 'w.overmorgen', 'w.maand'];
    for (const id of weekWords) expect(abstract).not.toContain(id);
    expect(abstract.length).toBe(189);
    const { lesson: hours } = findLesson('l.hours')!;
    expect(hours.words.every(hasPicture)).toBe(true);
    // Every word still has its emoji (data compatibility).
    for (const w of allWords) expect(w.emoji, w.id).toBeTruthy();
  });

  it('no picture choice ever targets or offers an abstract word', () => {
    runs((exercises, label) => {
      for (const ex of exercises) {
        if (ex.kind !== 'dutch' || ex.textOnly) continue;
        expect(hasPicture(ex.word), label).toBe(true);
        for (const o of ex.options) expect(hasPicture(o), `${label}: ${o.id}`).toBe(true);
      }
    });
  });

  it('never shows two options with the same or a look-alike picture', () => {
    runs((exercises, label) => {
      for (const ex of exercises) {
        if (ex.kind !== 'dutch' || ex.textOnly) continue;
        for (const [i, a] of ex.options.entries()) {
          for (const b of ex.options.slice(i + 1)) {
            expect(samePicture(a, b), `${label}: ${a.id} ${b.id}`).toBe(false);
            expect(looksAlike(a, b), `${label}: ${a.id} ${b.id}`).toBe(false);
          }
        }
        expect(new Set(ex.options.map((o) => o.id)).size, label).toBe(ex.options.length);
      }
    });
  });

  it('always has the right answer among the options, once', () => {
    runs((exercises, label) => {
      for (const ex of exercises) {
        if (ex.kind === 'meaning' || ex.kind === 'dutch' || ex.kind === 'listen') {
          expect(ex.options.filter((o) => o.id === ex.word.id), label).toHaveLength(1);
          expect(new Set(ex.options.map((o) => o.nl)).size, label).toBe(ex.options.length);
          expect(new Set(ex.options.map((o) => o.en)).size, label).toBe(ex.options.length);
        }
      }
    });
  });

  it('uses a picture word as the target whenever the lesson has one', () => {
    for (const lesson of allLessons) {
      if (!lesson.words.some(hasPicture)) continue;
      for (const seed of SEEDS) {
        // The picture choice comes after the match board (a review asks "which one is …" before it).
        const list = buildLesson(lesson, { review: false, seed });
        const ex = list.slice(list.findIndex((e) => e.kind === 'match')).find((e) => e.kind === 'dutch');
        expect(ex && hasPicture(ex.word), `${lesson.id} seed ${seed}`).toBe(true);
      }
    }
  });

  it('falls back to text cards for an abstract word or a lesson without pictures', () => {
    const { lesson: rights } = findLesson('l.rights')!;
    expect(rights.words.every((w) => !hasPicture(w))).toBe(true);
    for (const seed of SEEDS) {
      for (const quiet of [false, true]) {
        const dutch = buildLesson(rights, { review: false, seed, quiet }).filter((e) => e.kind === 'dutch');
        expect(dutch.length).toBeGreaterThan(0);
        for (const ex of dutch) expect(ex.kind === 'dutch' && ex.textOnly).toBe(true);
      }
    }
    const abstract = rights.words[0];
    const ex = dutchExercise(abstract, rights, createRng(5));
    expect(ex.textOnly).toBe(true);
    expect(ex.options.map((o) => o.id)).toContain(abstract.id);
    // At most three answers on a screen (the "at most 3" rule).
    expect(ex.options).toHaveLength(3);
  });

  it('keeps match pairs and quiet replacements on the same words', () => {
    for (const lesson of allLessons) {
      for (const seed of [1, 42]) {
        const loud = buildLesson(lesson, { review: false, seed });
        const quiet = buildLesson(lesson, { review: false, seed, quiet: true });
        expect(quiet).toHaveLength(loud.length);
        // The listening tasks became reading ones on the same words.
        const listened = loud.filter((e) => e.kind === 'listen' || e.kind === 'type').map((e) => (e as { word: { id: string } }).word.id);
        const quietWords = quiet.filter((e) => 'word' in e).map((e) => (e as { word: { id: string } }).word.id);
        for (const id of listened) expect(quietWords, `${lesson.id} ${id}`).toContain(id);
      }
    }
  });
});

describe('time words (group 27, the week strip)', { timeout: 20000 }, () => {
  const byId = (id: string) => allWords.find((w) => w.id === id)!;
  const calendars = ['w.vandaag', 'w.morgen', 'w.datum', 'w.rooster', 'w.dienst'].map(byId);
  const timeWords = allWords.filter((w) => w.look?.startsWith('kalender/'));
  const svg = (draw: () => JSX.Element) => renderToStaticMarkup(createElement(draw));

  it('each have their own look and a drawing of their own', async () => {
    const { default: words } = await import('../src/pictures/words');
    expect(timeWords).toHaveLength(10);
    expect(new Set(timeWords.map(lookKey)).size).toBe(timeWords.length);
    const drawn = timeWords.map((w) => svg(words[w.id]));
    expect(new Set(drawn).size).toBe(timeWords.length);
  });

  it('can stand side by side, but never next to another calendar picture', () => {
    for (const a of timeWords) {
      for (const b of timeWords) if (a !== b) expect(looksAlike(a, b), `${a.id} ${b.id}`).toBe(false);
      for (const c of calendars) expect(looksAlike(a, c), `${a.id} ${c.id}`).toBe(true);
    }
  });

  it('a real picture choice offers two time words side by side (l.dates)', () => {
    let seen = 0;
    for (const lesson of allLessons.filter((l) => l.words.some((w) => w.look))) {
      for (const seed of SEEDS) {
        for (const ex of buildLesson(lesson, { review: false, seed })) {
          if (ex.kind !== 'dutch' || ex.textOnly) continue;
          // Never a time word next to another calendar page.
          if (ex.options.some((o) => o.look)) for (const c of calendars) expect(ex.options.map((o) => o.id)).not.toContain(c.id);
          if (ex.options.filter((o) => o.look?.startsWith('kalender/')).length >= 2) seen++;
        }
      }
    }
    expect(seen).toBeGreaterThan(0);
  });

  it('two different days can be offered together, with different drawings', async () => {
    const { default: words } = await import('../src/pictures/words');
    const { lesson: dates } = findLesson('l.dates')!;
    // maandag (l.dates) and zaterdag (l.agree) are in different units; put them in one lesson.
    const days = ['w.maandag', 'w.zaterdag', 'w.weekend'].map(byId);
    for (const seed of SEEDS) {
      const ex = dutchExercise(days[0], { ...dates, words: days }, createRng(seed));
      expect(ex.textOnly, `seed ${seed}`).toBeFalsy();
      expect(ex.options.map((o) => o.id).sort()).toEqual(['w.maandag', 'w.weekend', 'w.zaterdag']);
    }
    const drawn = days.map((d) => svg(words[d.id]));
    expect(new Set(drawn).size).toBe(days.length);
    // Their emoji differ from a plain calendar's look only by `look`: without it they would clash.
    expect(looksAlike({ emoji: days[0].emoji }, { emoji: days[1].emoji })).toBe(true);
  });
});

describe('drawn pictures (group 24)', () => {
  it('the 33 words that had only an emoji have a drawing', async () => {
    const { default: words } = await import('../src/pictures/words');
    const ids = [
      'w.voornaam', 'w.achternaam', 'w.spellen', 'w.telefoonnummer', 'w.formulier', 'w.papieren', 'w.werknemer',
      'w.taalles', 'w.zwanger', 'w.kinderopvang', 'w.ophalen', 'w.ziekkind', 'w.mail', 'w.arm', 'w.hand', 'w.oog',
      'w.slapen', 'w.ontbijt', 'w.bewegen', 'w.moe', 'w.sparen', 'w.sleutel', 'w.verhuizen', 'w.busje', 'w.gewas',
      'w.rij', 'w.oogsten', 'w.sorteren', 'w.krat', 'w.spuitmiddelen', 'w.bespoten', 'w.plukkar', 'w.bukken',
    ];
    expect(ids).toHaveLength(33);
    for (const id of ids) expect(typeof words[id], id).toBe('function');
  });
});

describe('drawn pictures', () => {
  it('the Entree words of group 25 have a drawing (no longer only an emoji)', async () => {
    const { default: words } = await import('../src/pictures/words');
    const ids = [
      'w.drinken', 'w.hitte', 'w.werkbon', 'w.lezen', 'w.handtekening', 'w.opruimen', 'w.gereedschap', 'w.zagen',
      'w.vonk', 'w.gehoorbescherming', 'w.lawaai', 'w.stekker', 'w.elektricien', 'w.band', 'w.olie', 'w.accu',
      'w.monteur', 'w.proefrit', 'w.rijbewijs', 'w.repareren', 'w.stage', 'w.school', 'w.leerdoel', 'w.portfolio',
      'w.stemmen', 'w.agent', 'w.scherm', 'w.vergrendelen', 'w.afzender', 'w.klikken', 'w.bijlage', 'w.ictafdeling',
    ];
    expect(ids).toHaveLength(32);
    for (const id of ids) {
      expect(allWords.some((w) => w.id === id), id).toBe(true);
      expect(typeof words[id], id).toBe('function');
    }
  });
});

describe('unit icons', () => {
  it('every unit has a drawn icon next to its title', async () => {
    const { units } = await import('../src/content/curriculum');
    const { unitIcons } = await import('../src/content/unitIcons');
    const { loadPictures, iconPictures } = await import('../src/pictures');
    await loadPictures();
    const { pictures } = await import('../src/pictures');
    for (const u of units) {
      const id = unitIcons[u.id];
      expect(id, u.id).toBeTruthy();
      expect(Boolean(pictures[id] ?? iconPictures[id]), `${u.id}: ${id}`).toBe(true);
    }
    // One picture per unit, so the path never shows the same icon twice.
    expect(new Set(Object.values(unitIcons)).size).toBe(Object.keys(unitIcons).length);
  });
});
