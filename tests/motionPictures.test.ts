import { readFileSync } from 'node:fs';
import { createElement, type JSX } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { allWords, findLesson } from '../src/content/curriculum';
import { buildLesson } from '../src/lib/exercises';
import { hasPicture, introPicture } from '../src/lib/wordPicture';
import { loadPictures } from '../src/pictures';

/*
 * Moving word pictures (the owner's trial, 5 November 2026; docs/tekenstijl.md "Beweging"): a few
 * pictures whose meaning is a movement move once on the word's intro card, and nowhere else.
 *  - each chosen picture (the trial, then the second round after the owner's "go on") has a
 *    moving part (src/pictures/kit.tsx Move: a <g class="mv-…">);
 *  - only a rule under .intro-card animates it: in a choice, on the path, on the pocket cards and
 *    in the lists the same picture stands still;
 *  - the keyframes say only where a part comes from, so its base style is the still picture;
 *  - short and calm: it plays once (at most twice), no step shorter than 0.4 s, no loop;
 *  - abstract words such as "ontruimen" and "bijna" have a moving picture only ('motion'): on
 *    the intro card, never in a picture choice or a match.
 * Less motion and "Rustig scherm" stop it: tests/a11yMotionSound.test.ts.
 */

const MOTION_TRIAL = ['w.glad', 'w.tillen', 'w.ontruimen', 'w.inchecken', 'w.uitchecken', 'w.bijna', 'w.langzaam', 'w.snel', 'w.telaat'];
/**
 * The second round (the owner's "go on", 5 November 2026), by group of docs/tekenstijl.md
 * "Beweging": the body, from A to B, A becomes B, time and order. Left out on purpose: "beginnen"
 * (a start button, not the scene of "uitzetten") and "gevallen" (stays still next to "vallen").
 */
const MOTION_ROUND2 = [
  'w.vallen', 'w.bukken',
  'w.inklokken', 'w.uitklokken', 'w.inloggen', 'w.uitloggen', 'w.ruilen', 'w.versturen', 'w.doorgeven', 'w.sorteren', 'w.ophalen',
  'w.uitzetten', 'w.automatisch', 'w.verbeteren', 'w.lek', 'w.mengen',
  'w.eerst', 'w.daarna', 'w.voordoen', 'w.verlengen', 'w.tellen', 'w.herhalen',
];
/**
 * The last round (the owner: "do the rest of the words where movement helps", 5 November 2026):
 * the report's "later" list and a pass over every word, by the same rules; in doubt, not.
 */
const MOTION_ROUND3 = ['w.opruimen', 'w.afruimen', 'w.inpakken', 'w.afpakken', 'w.kiezen', 'w.beter', 'w.duren', 'w.verhuizen', 'w.vergrendelen'];
/**
 * Tools and machines whose function is a movement (the owner's choice, 22 November 2026;
 * docs/tekenstijl.md "Gereedschap en machines"): the movement shows what the thing is for.
 */
const MOTION_FUNCTION = [
  // Productie (src/pictures/maken).
  'w.hendel', 'w.meetklok', 'w.sealmachine', 'w.tapepistool', 'w.persluchtpistool', 'w.oliekannetje', 'w.smeerpistool',
  // Montage (src/pictures/montage).
  'w.schroefmachine', 'w.momentsleutel', 'w.takel', 'w.tilhulp', 'w.draaitafel', 'w.rolbaan', 'w.voetpedaal', 'w.stempel',
  // Techniek (src/pictures/techniek).
  'w.striptang', 'w.lasklem', 'w.zekering', 'w.hangslot', 'w.pijpsnijder', 'w.afsluiter', 'w.bankschroef', 'w.kolomboormachine', 'w.draadtap',
  // Tuinbouw (src/pictures/kweek).
  'w.gieter', 'w.druppelaar', 'w.luchtraam', 'w.kasscherm', 'w.sorteermachine', 'w.etiketpistool', 'w.tomatenschaar', 'w.buisrailkar',
  // Garage (src/pictures/autoservice).
  'w.bandenspanningsmeter', 'w.bandenwisselaar', 'w.trechter', 'w.oliepeilstok',
  // Bouw (group53, group56, group57, group61).
  'w.tegelsnijder', 'w.duimstok', 'w.roerstok', 'w.verfkrabber', 'w.passer',
  // The second round (the owner: "look further", 22 November 2026).
  'w.lijmkam', 'w.mixer', 'w.zwaaihaak', 'w.rolmaat', 'w.waterpas', 'w.afzuiging', 'w.schuifmaat', 'w.spanningzoeker',
  'w.hefbrug', 'w.krik', 'w.ruitenwisser', 'w.tillift', 'w.aftapplug', 'w.koplamp', 'w.opvangbak', 'w.stoelhoes',
  'w.popnageltang', 'w.hijshaak', 'w.goedkeursticker', 'w.testbank', 'w.ventilator', 'w.thermometer', 'w.vangplaat', 'w.ontsmettingsmat',
  'w.weegschaal', 'w.sensor', 'w.krimpfolie', 'w.afbreekmes', 'w.steeksleutel', 'w.poetsdoek', 'w.lekbak', 'w.monster', 'w.loep',
  'w.heftruck', 'w.scanner', 'w.kraan', 'w.lopendeband', 'w.dweil', 'w.steekwagen', 'w.folie', 'w.pompwagen',
  // The owner's "look at zagen" (22 November 2026): the saw pulls back and pushes once, the sawdust comes.
  'w.zagen',
];
/**
 * Round 4 (the owner, 22 November 2026: "zagen is an example ... there are probably many others"):
 * every still picture whose meaning or function is a movement or an action.
 */
const MOTION_ROUND4 = [
  'w.zoeken', 'w.bewaren', 'w.hamer', 'w.afkeuren', 'w.wassen', 'w.prullenbak', 'w.verzamelen', 'w.lossen', 'w.tanken', 'w.opladen', 'w.parkeren', 'w.retour', 'w.typen', 'w.opslaan', 'w.ophangen', 'w.tempo', 'w.vakkenvullen', 'w.pakken', 'w.kruishout', 'w.aftekenen', 'w.mal', 'w.tiewrap',
  'w.betalen', 'w.pinnen', 'w.kijken', 'w.licht', 'w.snijden', 'w.bezorgen', 'w.inladen', 'w.aanbellen', 'w.rijden', 'w.handje', 'w.aandebel', 'w.motorkap', 'w.lamp', 'w.morsen', 'w.samen', 'w.penseel', 'w.achterlamp', 'w.waarschuwingslampje', 'w.signaallamp', 'w.rolcontainer',
  'w.drinken', 'w.repareren', 'w.stemmen', 'w.klikken', 'w.proefrit', 'w.korting', 'w.bestellen', 'w.stelen', 'w.schreeuwen', 'w.geldterug', 'w.storen', 'w.aanwijzen', 'w.slijpen', 'w.nijptang', 'w.slagmoersleutel', 'w.afscherming', 'w.accuboor', 'w.boormachine', 'w.vonk', 'w.bel', 'w.aankleden',
  // The Belgian twin of "stemmen" shares its picture.
  'be.w.stemmen',
];
const MOVING = [...MOTION_TRIAL, ...MOTION_ROUND2, ...MOTION_ROUND3, ...MOTION_FUNCTION, ...MOTION_ROUND4];
/** Abstract words whose picture is a moving one only (`picture: 'motion'`): [word, its lesson]. */
const MOTION_ONLY: [string, string][] = [
  ['w.ontruimen', 'l.alarm'], ['w.bijna', 'l.task'],
  ['w.uitloggen', 'l.login'], ['w.ruilen', 'l.texting'], ['w.versturen', 'l.email'], ['w.doorgeven', 'l.privacy'],
  ['w.automatisch', 'l.aiplan'], ['w.verbeteren', 'l.mistakes'], ['w.eerst', 'l.task'], ['w.daarna', 'l.task'],
  ['w.voordoen', 'l.notyet'], ['w.verlengen', 'l.agency'], ['w.tellen', 'l.measures'],
  ['w.kiezen', 'l.mychoice'],
];

const css = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

/** Every plain rule (selector + body) of the stylesheet, at any depth of @media. */
function rules(src: string): { sel: string; body: string }[] {
  const out: { sel: string; body: string }[] = [];
  for (const m of src.matchAll(/([^{}]+)\{([^{}]*)\}/g)) out.push({ sel: m[1].trim(), body: m[2] });
  return out;
}
const all = rules(css);
const mvRules = all.filter((r) => /\.mv-/.test(r.sel));
const keyframes = (name: string) => {
  const at = css.indexOf(`@keyframes ${name} `);
  if (at < 0) return undefined;
  let depth = 0;
  for (let i = css.indexOf('{', at); i < css.length; i++) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}' && --depth === 0) return css.slice(css.indexOf('{', at) + 1, i);
  }
  return undefined;
};

let words: Record<string, () => JSX.Element>;
beforeAll(async () => {
  await loadPictures();
  words = (await import('../src/pictures/words')).default;
});

describe('moving word pictures: the trial', () => {
  it('each moving word has a picture with a moving part', () => {
    for (const id of MOVING) {
      expect(words[id], id).toBeDefined();
      expect(renderToStaticMarkup(createElement(words[id])), id).toMatch(/class="mv-(from|slow|fast|drop|then|steps|turn|tip|grow|sag|show)"/);
    }
  });

  it('no other picture moves (only the words chosen, one by one)', () => {
    const moving = Object.entries(words).filter(([, draw]) => /class="mv-/.test(renderToStaticMarkup(createElement(draw)))).map(([id]) => id);
    // A Belgian twin of a moving word shares its picture (and moves on its own intro card too).
    const twins = MOVING.map((id) => `be.${id}`).filter((id) => id in words);
    expect(moving.sort()).toEqual([...MOVING, ...twins].sort());
  });

  it('the moving-only words are abstract: their picture is on the intro card, never in a choice', () => {
    expect(allWords.filter((w) => w.picture === 'motion').map((w) => w.id).sort()).toEqual(MOTION_ONLY.map(([id]) => id).sort());
    for (const [id, lessonId] of MOTION_ONLY) {
      const w = allWords.find((x) => x.id === id)!;
      expect(w.picture, id).toBe('motion');
      expect(introPicture(w), id).toBe(true);
      expect(hasPicture(w), id).toBe(false);
      expect(findLesson(lessonId)!.lesson.words.map((x) => x.id), id).toContain(id);
    }
    for (const [id, lessonId] of MOTION_ONLY) {
      const { lesson } = findLesson(lessonId)!;
      for (const seed of [1, 2, 3, 7, 42, 99]) {
        for (const review of [false, true]) {
          for (const ex of buildLesson(lesson, { review, seed })) {
            if (ex.kind === 'dutch' && !ex.textOnly) for (const o of ex.options) expect(o.id, `${lessonId} ${seed}`).not.toBe(id);
            if (ex.kind === 'match' && 'pictures' in ex && ex.pictures) for (const p of ex.pairs ?? []) expect(p.id).not.toBe(id);
          }
        }
      }
    }
  });

  it('the intro card shows the moving picture', async () => {
    const { IntroCard } = await import('../src/components/Exercises');
    for (const id of MOVING) {
      const word = allWords.find((x) => x.id === id)!;
      const html = renderToStaticMarkup(createElement(IntroCard as never, { ex: { kind: 'intro', word }, onAnswer: () => {} } as never));
      expect(html, id).toContain('intro-card');
      expect(html, id).toMatch(/class="mv-/);
    }
  });
});

describe('moving word pictures: the motion (styles.css)', () => {
  const animating = mvRules.filter((r) => /\banimation\b/.test(r.body));

  it('only a rule under .intro-card moves a picture', () => {
    expect(animating.length).toBeGreaterThanOrEqual(7);
    for (const r of animating) for (const sel of r.sel.split(',')) expect(sel.trim(), sel).toMatch(/^\.intro-card \.word-pic \.mv-[\w-]+$/);
    // The other .mv- rules only say where a part turns or grows from.
    for (const r of mvRules.filter((x) => !animating.includes(x))) {
      const props = [...r.body.matchAll(/([\w-]+)\s*:/g)].map((m) => m[1]);
      for (const p of props) expect(['transform-box', 'transform-origin'], `${r.sel}: ${p}`).toContain(p);
    }
  });

  it('every kind of moving part has its rule', () => {
    for (const kind of ['from', 'slow', 'fast', 'drop', 'then', 'steps', 'turn', 'tip', 'grow', 'sag', 'show']) {
      expect(animating.some((r) => r.sel.includes(`.mv-${kind}`)), kind).toBe(true);
    }
  });

  it('plays once (at most twice), never loops, and no step is shorter than 0.4 s', () => {
    for (const r of animating) {
      const decl = /animation\s*:\s*([^;]+)/.exec(r.body)![1];
      expect(decl, r.sel).not.toMatch(/infinite|!important/);
      const times = [...decl.matchAll(/(\d*\.?\d+)(m?s)\b/g)].map((m) => Number(m[1]) * (m[2] === 's' ? 1000 : 1));
      expect(times[0], `${r.sel}: duration`).toBeGreaterThanOrEqual(400);
      expect(times[0], `${r.sel}: duration`).toBeLessThanOrEqual(2000);
      // The count: a bare number outside the timing function's brackets.
      const count = decl.replace(/\([^)]*\)/g, '').split(/\s+/).filter((t) => /^\d*\.?\d+$/.test(t)).map(Number);
      expect(count.length, r.sel).toBe(1);
      expect(count[0], r.sel).toBeLessThanOrEqual(2);
      expect(/animation-iteration-count/.test(r.body), r.sel).toBe(false);
      // Ends on the still picture (no fill "forwards" that would hold the first frame's opposite).
      expect(decl, r.sel).toMatch(/\bbackwards\b/);
    }
  });

  it('the keyframes say only where a part comes from: its base style is the still picture', () => {
    const names = new Set(animating.map((r) => /animation\s*:\s*([\w-]+)/.exec(r.body)![1]));
    for (const name of names) {
      const body = keyframes(name);
      expect(body, name).toBeDefined();
      expect(body!.trim(), name).toMatch(/^from\s*\{[^{}]*\}$/);
      // Only a slide, a turn, a growth or a fade.
      const props = [...body!.matchAll(/([\w-]+)\s*:/g)].map((m) => m[1]);
      for (const p of props) expect(['transform', 'opacity'], `${name}: ${p}`).toContain(p);
    }
  });
});
