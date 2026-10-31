import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Diploma’s en verder komen" (u.grow), a B unit (docs/taal-belgie.md):
 *  - l.diploma: laten waarderen → laten erkennen; tip: NARIC-Vlaanderen, a required training is free.
 *  - l.mychoice (an Entree lesson about the Flemish school here): de bijbaan → de studentenjob, de
 *    meeloopdag → de snuffelstage; tip: the CLB and the VDAB help you choose.
 *  - l.nextstep (C in the inventory, written as B lines: all six words, two sentences, the chat):
 *    no Entree, niveau 2, startkwalificatie or bbl, but het secundair onderwijs, het
 *    volwassenenonderwijs (CVO, once tweedekansonderwijs), duaal leren and de VDAB-opleiding.
 *    Its lesson title ("After Entree", l.nextstep) cannot change through `lines`: see the report.
 * l.certs (VCA, the forklift) is the same in both countries.
 * The facts are the ones of the Belgian Werkregels unit loopbaan (src/content/regels/be/units/
 * loopbaan.ts). Translations: src/i18n/be/units/grow.ts.
 *
 * Sources: vlaanderen.be, onderwijs.vlaanderen.be and vdab.be could not be opened from the
 * Werkregels session (30 October 2026); the facts come from search results, cited per note.
 * werk.belgie.be "Verplichte opleidingen" and "Individueel opleidingsrecht": search results of 31
 * October 2026. No expert has checked the ⚖️ notes below yet.
 */

const BE_ADVICE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';

// ⚖️ check: In Flanders you have a foreign diploma recognised (erkennen: gelijkwaardigheid) at
// NARIC-Vlaanderen ⚖️ (vlaanderen.be "gelijkwaardigheidserkenning van diploma aanvragen bij
// NARIC-Vlaanderen").
// ⚖️ check: A student job is a studentenjob; a short visit to see the work a snuffelstage; a
// school's open day an opendeurdag ⚖️ (Werkregels loopbaan.ts r.be.l.loopbaan.1; vlaanderen.be
// "studentenarbeid").
// ⚖️ check: Flemish schools: het secundair onderwijs (leerplicht until 18), het
// volwassenenonderwijs in a centrum voor volwassenenonderwijs (CVO), duaal leren, and courses of
// the VDAB; you sign up (inschrijven) at the school ⚖️ (vlaanderen.be "leerplicht van 5 tot 18 jaar";
// vdab.be "behaal je diploma"; eurydice; Werkregels loopbaan.ts r.be.l.loopbaan.2).
const lines: BeTaal['lines'] = {
  // l.diploma
  'w.waarderen': { nl: 'laten erkennen', en: 'to have (a diploma) recognised' },
  // l.mychoice
  'w.bijbaan': { nl: 'de studentenjob', en: 'the student job (a small job next to school)' },
  'w.meeloopdag': { nl: 'de snuffelstage', en: 'the taster placement (a short visit to see the work)' },
  // l.nextstep
  'w.niveau2': { nl: 'het secundair onderwijs', en: 'secondary school (for young people, until about 18)', emoji: '🏫' },
  'w.startkwalificatie': { nl: 'het volwassenenonderwijs', en: 'adult education (school for adults, at a CVO)', emoji: '🧑‍🏫' },
  'w.bbl': { nl: 'duaal leren', en: 'dual learning (you learn at a company and at school)' },
  'w.doorstromen': { nl: 'de VDAB-opleiding', en: 'the VDAB course (a training for a job)', emoji: '🛠️' },
  'w.aanmelden': { nl: 'inschrijven', en: 'to sign up, to register (for a school or a course)' },
  'w.opendag': { nl: 'de opendeurdag', en: 'the open day (you can visit a school)' },
  's.nextstep.1': { nl: 'Ik wil mijn diploma secundair onderwijs halen.', en: 'I want to get my secondary school diploma.' },
  's.nextstep.3': { nl: 'Wanneer is de opendeurdag?', en: 'When is the open day?' },
  'c.nextstep.q': { nl: 'Wat wil je hierna doen?', en: 'What do you want to do next?' },
  'c.nextstep.a': { nl: 'Ik kies voor duaal leren. Dan werk ik en leer ik.', en: 'I choose dual learning. Then I work and I learn.' },
};

const tips = [
  // ⚖️ check: NARIC-Vlaanderen compares a foreign diploma with a Flemish one; you apply through its
  // e-loket ⚖️ (vlaanderen.be "gelijkwaardigheidserkenning van diploma aanvragen bij NARIC-Vlaanderen").
  // ⚖️ check: Recognised refugees and people with subsidiary protection do not pay ⚖️ (vlaanderen.be
  // "kostprijs van een erkenningsaanvraag bij NARIC-Vlaanderen"; asylum seekers too? nakijken).
  // ⚖️ check: For a regulated profession (for example nurse) you sometimes need a separate
  // recognition ⚖️ (vlaanderen.be "toegang tot gereglementeerd beroep").
  // ⚖️ check: A training the employer requires for the work is free for the worker, and in
  // principle in working time (it counts as working time) ⚖️ (werk.belgie.be "Verplichte
  // opleidingen", search result of 31 October 2026; wet 7 oktober 2022, richtlijn (EU) 2019/1152 art.
  // 13; Codex welzijn op het werk: a safety training is free and in working time).
  // ⚖️ check: Many workers also have a right to training days every year (individueel
  // opleidingsrecht, wet 3 oktober 2022; the number differs per sector and company size, so no
  // number in the tip) ⚖️ (werk.belgie.be "Individueel opleidingsrecht", search result).
  {
    ...beTip({
      slug: 'diploma',
      lessonId: 'l.diploma',
      emoji: '📜',
      title: 'Your diploma counts',
      body: `Do you have a diploma from another country? You can ask NARIC-Vlaanderen to recognise it. NARIC compares it with a Flemish diploma. Recognised refugees do not pay for this. For some jobs, like nurse, you need an extra recognition. Is a training required for your job? Then your employer must pay for it, and it counts as working time. Many workers also have a right to some training days every year. Ask your supervisor or the VDAB about courses. ${BE_ADVICE}`,
      phrase: ['Zijn er cursussen voor mij?', 'Are there courses for me?'],
      situation: 'Your employer says you must do a required safety training on Saturday, without pay. What is true?',
      ask: 'which',
      options: [
        'The employer pays it, and it is working time.',
        'Training is always in your own free time.',
        'You must pay for the training yourself.',
      ],
      why: 'If a training is required for your work, the employer pays and it counts as working time. If it is not clear, ask for advice.',
    }),
  },
  // ⚖️ check: Care for family (mantelzorg) and a student job are experience you may name ⚖️ (custom;
  // vdab.be cv-tips; Werkregels loopbaan.ts r.be.l.loopbaan.1).
  // ⚖️ check: The CLB helps students choose a study, for free ⚖️ (vlaanderen.be "centrum voor
  // leerlingenbegeleiding").
  // ⚖️ check: Adults can get free career guidance (loopbaanbegeleiding) and advice from the VDAB ⚖️
  // (vdab.be "loopbaanbegeleiding"; the loopbaancheques: conditions, nakijken).
  {
    ...beTip({
      slug: 'mychoice',
      lessonId: 'l.mychoice',
      emoji: '🌟',
      title: 'Your strong points count',
      body: 'What are you good at? Think of work, school and home. Caring for family, a student job (studentenjob) or volunteer work count too. What do you like, and what do you not like? Not sure what work fits you? Ask for a short taster placement (snuffelstage), or go to an open day (opendeurdag). At school, the CLB helps you choose, for free. Adults can ask the VDAB.',
      phrase: ['Ik kan goed met mensen omgaan. Ik help thuis veel.', 'I get on well with people. I help a lot at home.'],
      situation: 'At school they ask: "What are you good at?" You never had a paid job. What do you say?',
      ask: 'whatsay',
      options: [
        'What you do well at home, like caring for others.',
        'That you do not know yet, because you never had a job.',
        'That you can do every kind of work, all of it.',
      ],
      why: 'Skills from home count too. Caring, planning and helping are skills that employers need. Say what you did, with an example.',
    }),
  },
  // ⚖️ check: In Belgium school is compulsory from 5 to 18 (leerplicht); it ends on your 18th
  // birthday or on 30 June of that year; with a secondary school diploma you are no longer
  // leerplichtig ⚖️ (vlaanderen.be "leerplicht van 5 tot 18 jaar"; onderwijs.vlaanderen.be ABC leerplicht).
  // ⚖️ check: From 15 or 16 a young person can learn part-time at school and part-time at a company:
  // duaal leren (from 15 after the first grade, else from 16; nakijken) ⚖️ (vlaanderen.be
  // leerplicht; eurydice "organisatie van het onderwijssysteem").
  // ⚖️ check: In adult education (volwassenenonderwijs, once tweedekansonderwijs), at a CVO, an adult
  // can get the diploma secundair onderwijs ⚖️ (vdab.be "behaal je diploma"; eurydice).
  // ⚖️ check: A job seeker registered at the VDAB can follow many courses for free, or pay less at a
  // CVO, under conditions ⚖️ (vdab.be "gratis leren voor wie geen werk heeft"; vdab.be "geen of minder
  // inschrijvingsgeld volwassenenonderwijs").
  // ⚖️ check: The CLB helps students, the VDAB adults (vlaanderen.be "centrum voor
  // leerlingenbegeleiding"; vdab.be "advies duaal leren") ⚖️ (Werkregels loopbaan.ts r.be.l.loopbaan.2).
  // ⚖️ check: The age in the situation (24) is an example.
  {
    ...beTip({
      slug: 'nextstep',
      lessonId: 'l.nextstep',
      emoji: '🎓',
      title: 'A diploma, also as an adult',
      body: 'Under 18, you must go to school (leerplicht). From 15 or 16, you can also learn at a company and at school: dual learning (duaal leren). Older, and no diploma yet? In adult education (volwassenenonderwijs), at a CVO, you can still get your secondary school diploma. People used to call this tweedekansonderwijs. Looking for work? The VDAB has courses for many jobs. For job seekers, many are free. Go to an open day (opendeurdag), and ask the VDAB for help. Still at school? Ask the CLB.',
      phrase: ['Kan ik als volwassene nog mijn diploma halen?', 'Can I still get my diploma as an adult?'],
      situation: 'You are 24 and have no secondary school diploma. You want a better job. What do you do?',
      options: [
        'Ask the VDAB or a CVO how to get your diploma.',
        'Wait: at 24 you are too old to learn.',
        'Take any job, and stop learning for good.',
      ],
      why: 'Adults can still learn. At a CVO you can get your diploma. The VDAB has courses for many jobs, and for job seekers many are free.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.grow', lines, tips };
