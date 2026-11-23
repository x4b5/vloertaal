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
 *  - the keyframes start where a part comes from and end on the still picture (its base style);
 *  - long enough to see, still calm (the owner, 23 November 2026: once was too short): three rounds
 *    (a picture in two steps two), under 5 s in all (WCAG 2.2.2), no step shorter than 0.4 s, no loop;
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
  'w.bewegen', 'w.sparen', 'w.oogsten', 'w.zetten', 'w.leggen', 'w.brengen', 'w.geven', 'w.loslaten', 'w.aanzetten', 'w.opendoen',
  'w.dichtdoen', 'w.drukken', 'w.draaien', 'w.stoppen', 'w.duwen', 'w.trekken', 'w.vullen', 'w.leegmaken', 'w.schoonmaken', 'w.bijvullen',
  'w.hallo', 'w.goedemorgen', 'w.totmorgen', 'w.werk', 'w.afdrogen', 'w.passen', 'w.lassen', 'w.stucspaan', 'w.rei', 'w.sponsspaan',
  'w.handzaag', 'w.kapzaag', 'w.houtbeitel', 'w.handschaaf', 'w.timmermanshamer', 'w.houtenhamer', 'w.helpen', 'w.plamuurmes', 'w.stoffertje', 'w.schuren',
  'w.afplakken', 'w.ijzerzaag', 'w.vertalen', 'w.opschrijven', 'w.latenzien', 'w.ondertiteling', 'w.appen', 'w.handenwassen', 'w.stoffen', 'w.luchten',
  'w.spoelen', 'w.stilstaan', 'w.lampje', 'w.komen', 'w.aankijken', 'w.ademhalen', 'w.opnemen', 'w.knippen', 'w.regen', 'w.meten',
  'w.struikelen', 'w.vinden', 'w.opstaan', 'w.gaanzitten', 'w.bevestigen', 'w.vastzetten', 'w.lijmen', 'w.opbouwen', 'w.lichtwerk', 'w.welkomterug',
  'w.diagnosecomputer', 'w.onderdelenkar', 'w.koppeling', 'w.spreken', 'w.luisteren', 'w.begroeten', 'w.vraagstellen', 'w.tekenen', 'w.uitleggen', 'w.leren',
  'w.neezeggen', 'w.posten', 'w.delen', 'w.vertellen', 'w.solliciteren', 'w.inschrijven', 'w.boor', 'w.beton', 'w.weigeren', 'w.machine',
  'w.noodstop', 'w.productie', 'w.beginnen', 'w.bellen', 'w.totenmet', 'w.dichtplakken', 'w.idee', 'w.handopsteken', 'w.voegijzer', 'w.handveger',
  'w.startknop', 'w.waterpomptang',
  // Groen and Facilitair (23 November 2026): the new sectors' tools and events.
  'w.afsluiten', 'w.afvoer', 'w.airco', 'w.alarmcode', 'w.beamer', 'w.begeleiden', 'w.deurklink', 'w.doorverbinden', 'w.intercom', 'w.koffieautomaat',
  'w.lekkage', 'w.lift', 'w.nachtslot', 'w.postvak', 'w.ronde', 'w.rookmelder', 'w.scharnier', 'w.vervangen', 'w.verwarming', 'w.whiteboard',
  'w.bladblazer', 'w.bosmaaier', 'w.gelaatsscherm', 'w.grasmaaier', 'w.grijper', 'w.hark', 'w.heggenschaar', 'w.kettingzaag', 'w.maaien', 'w.onkruidbrander',
  'w.planten', 'w.schep', 'w.schoffel', 'w.snoeien', 'w.snoeischaar', 'w.snoeizaag', 'w.verkeer', 'w.wieden', 'w.zeil',
  // Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
  'w.aanhouden', 'w.ademen', 'w.bewegingsmelder', 'w.branddeur', 'w.brandmelder', 'w.draaihek', 'w.heterdaad', 'w.inbraak', 'w.inzoomen', 'w.kalmeren',
  'w.openstaan', 'w.oproepen', 'w.reanimeren', 'w.schelden', 'w.slagboom', 'w.surveilleren', 'w.toegang', 'w.toegangspas', 'w.verstoppen', 'w.zaklamp',
  'w.borstel', 'w.demonteren', 'w.desinfecteren', 'w.etiketteren', 'w.fileren', 'w.hogedrukspuit', 'w.koelketen', 'w.kruisbesmetting', 'w.laarzenwasser', 'w.metaaldetector',
  'w.naspoelen', 'w.ontdooien', 'w.printer', 'w.steekproef', 'w.temperatuur', 'w.uitbenen', 'w.wegen', 'w.aanwijzer', 'w.achteruitrijden', 'w.balenpers',
  'w.kieplift', 'w.lekken', 'w.opscheppen', 'w.persen', 'w.piepen', 'w.prikken', 'w.tetanusprik', 'w.toeteren', 'w.vastlopen', 'w.vulopening',
  'w.weegbrug', 'w.zwaailamp', 'w.adrenalinepen', 'w.afscheid', 'w.babyfoon', 'w.billendoekje', 'w.boertje', 'w.buitenspelen', 'w.observeren', 'w.puzzel',
  'w.spelen', 'w.temperaturen', 'w.traphekje', 'w.verschonen', 'w.verslikken', 'w.wennen',
  // Round 5 (the owner, 23 November 2026: "de bus die je dan toch ziet rijden"): vehicles drive in once,
  // animals move, smoke, steam and rain keep going.
  'w.busje', 'w.plukkar', 'w.brandweer', 'w.fietser', 'w.rook', 'w.pauze', 'w.vrachtwagen', 'w.alseentrein', 'w.elektrischeauto', 'w.postkar',
  'w.luis', 'w.pijpenstelen', 'w.rust', 'w.dankjewel', 'w.examen', 'w.bericht', 'w.meter', 'w.hitte', 'w.lawaai', 'w.band',
  'w.olie', 'w.brand', 'w.heet', 'w.kopje', 'w.sirene', 'w.vuilniswagen', 'w.pijlwagen', 'w.zitmaaier', 'w.bladeren', 'w.roken',
  'w.koffie', 'w.weer', 'w.politie', 'w.ambulance', 'w.post', 'w.rookplek', 'w.esigaret', 'w.damp', 'w.storing', 'w.bestelbus',
  'w.kar', 'w.rollator', 'w.shovel', 'w.rups', 'w.fiets', 'w.bus', 'w.trein', 'w.eten', 'w.schoonmaakmiddel', 'w.zeep',
  'w.thermoskan', 'w.schuim', 'w.gemeente', 'w.oproepkracht', 'w.vervuild', 'w.regenpak', 'w.asbest', 'w.spuitbus', 'w.controlepunt', 'w.aanhanger',
  'w.kruiwagen', 'w.sluipwesp', 'w.kerntemperatuur',
  // Second units of Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
  'w.aflopen', 'w.doorwerken', 'w.inhouding', 'w.vervoer', 'w.navragen', 'w.schillen', 'w.hakken', 'w.raspen', 'w.gaar', 'w.spoelkeuken',
  'w.voorspoelen', 'w.afdekken', 'w.bon', 'w.warmhoudlamp', 'w.apartbetalen', 'w.ontstopper', 'w.sprayflacon', 'w.schrobzuigmachine', 'w.opmaken', 'w.doseren',
  'w.terugbrengen', 'w.statiegeld', 'w.kassalade', 'w.afschrijven', 'w.winkelwagen', 'w.sluitingstijd', 'w.rolluik', 'w.facen', 'w.afprijzen', 'w.uitpakken',
  'w.tassencontrole', 'w.douchestoel', 'w.tandenpoetsen', 'w.kammen', 'w.scheren', 'w.rapporteren', 'w.plassen', 'w.glijlaken', 'w.thuiszorg', 'w.alarmknop',
  'w.stalift', 'w.werkhoogte', 'w.bedhek',
  // The basis units at four lessons (23 November 2026).
  'w.vegen', 'w.terugzetten', 'w.uitdoen', 'w.voorschot', 'w.brievenbus', 'w.verhuisdag', 'w.opwachten', 'w.naarhuis', 'w.bedrijfsongeval', 'w.afvinken',
  'w.aandelijn', 'w.flauwvallen', 'w.vingerafdruk', 'w.volgnummer', 'w.bedanken', 'w.trakteren', 'w.koelen', 'w.oogdouche', 'w.inspectie', 'w.carpoolen',
  'w.meerijden', 'w.gordel', 'w.instappen', 'w.uitstappen', 'w.overstappen', 'w.invallen', 'w.eerderweg', 'w.tussenpersoon', 'w.urenlijst', 'w.wifi',
  // Veiligheid op het werk (23 November 2026).
  'w.opbergen', 'w.dop', 'w.blusdeken', 'w.openvuur', 'w.hijsen', 'w.blussen', 'w.gasmeting', 'w.signaalgever',
  // Operator in de procesindustrie (23 November 2026).
  'w.niveau', 'w.opstarten', 'w.stilzetten', 'w.resetten', 'w.ploegwissel', 'w.aflosser', 'w.drukmeter', 'w.snelheid', 'w.volcontinu', 'w.smeltoven', 'w.stoom', 'w.stoomleiding', 'w.kwartsstof',
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
/** A selector list split at its top-level commas (not those inside :has() or :is()). */
function splitSel(sel: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = '';
  for (const ch of sel) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ',' && depth === 0) { out.push(cur.trim()); cur = ''; } else cur += ch;
  }
  return [...out, cur.trim()];
}
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
      expect(renderToStaticMarkup(createElement(words[id])), id).toMatch(/class="mv-(from|slow|fast|drop|then|steps|turn|tip|grow|sag|show)( mv-once)?"/);
    }
  });

  it('no other picture moves (only the words chosen, one by one)', () => {
    const moving = Object.entries(words).filter(([, draw]) => /class="mv-/.test(renderToStaticMarkup(createElement(draw)))).map(([id]) => id);
    // A Belgian twin of a moving word shares its picture (and moves on its own intro card too).
    const twins = MOVING.map((id) => `be.${id}`).filter((id) => words[id] && words[id] === words[id.slice(3)]);
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
    // (A picture in two steps: its rounds are longer, chosen with :has() on the picture.)
    const sels = animating.flatMap((r) => splitSel(r.sel));
    for (const sel of sels) expect(sel, sel).toMatch(/^\.intro-card \.word-pic(:has\([^()]*\))* (\.mv-[\w-]+|:is\([^()]*\))$/);
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

  it('plays three rounds at most (two in two steps), under 5 s in all, never loops, no step under 0.4 s', () => {
    for (const r of animating) {
      const decl = /animation\s*:\s*([^;]+)/.exec(r.body)![1];
      expect(decl, r.sel).not.toMatch(/infinite|!important/);
      const times = [...decl.replace(/\([^)]*\)/g, '').matchAll(/(\d*\.?\d+)(m?s)\b/g)].map((m) => Number(m[1]) * (m[2] === 's' ? 1000 : 1));
      const [duration, delay] = times;
      // The count: a bare number outside the timing function's brackets.
      const count = decl.replace(/\([^)]*\)/g, '').split(/\s+/).filter((t) => /^\d*\.?\d+$/.test(t)).map(Number);
      expect(count.length, r.sel).toBe(1);
      expect(count[0], r.sel).toBeLessThanOrEqual(3);
      expect(delay + duration * count[0], `${r.sel}: all rounds`).toBeLessThanOrEqual(5000);
      expect(/animation-iteration-count/.test(r.body), r.sel).toBe(false);
      // The moving part of a round (from its last held start to its first still stop) is 0.4 s or
      // more; a count in three stops holds each stop 0.4 s or more.
      const name = /animation\s*:\s*([\w-]+)/.exec(r.body)![1];
      const stops = [...keyframes(name)!.matchAll(/([\d%,\s]+)\{/g)].map((m) => m[1].split(',').map((x) => parseFloat(x)));
      const move = (stops[1][0] - Math.max(...stops[0])) / 100 * duration;
      expect(move / (/steps\(3/.test(decl) ? 3 : 1), `${r.sel}: one step`).toBeGreaterThanOrEqual(400);
      // Ends on the still picture (no fill "forwards" that would hold a frame other than the last).
      expect(decl, r.sel).toMatch(/\bbackwards\b/);
    }
  });

  it('each round starts where a part comes from and ends on the still picture: its base style', () => {
    const names = new Set(animating.map((r) => /animation\s*:\s*([\w-]+)/.exec(r.body)![1]));
    for (const name of names) {
      const body = keyframes(name);
      expect(body, name).toBeDefined();
      const stops = [...body!.matchAll(/([\d%,\s]+)\{([^{}]*)\}/g)];
      expect(stops.length, name).toBe(2);
      expect(stops[0][1].trim(), name).toMatch(/^0%/);
      expect(stops[1][1], name).toMatch(/100%\s*$/);
      expect(stops[1][2].trim(), name).toMatch(/^(transform: none|opacity: 1);?$/);
      // Only a slide, a turn, a growth or a fade.
      const props = [...body!.matchAll(/([\w-]+)\s*:/g)].map((m) => m[1]);
      for (const p of props) expect(['transform', 'opacity'], `${name}: ${p}`).toContain(p);
    }
  });
});
