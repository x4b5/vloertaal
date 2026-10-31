import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Stage lopen" (u.stage), a B unit (docs/taal-belgie.md). Only l.placement
 * differs (C in the inventory, written as B lines): de POK → de stageovereenkomst, de
 * praktijkopleider → de mentor, het leerbedrijf → het CLB (the student guidance centre); the tip
 * adds duaal leren and the CLB. l.review (feedback) is the same in both countries.
 * The facts are the ones of the Belgian Werkregels unit stage (src/content/regels/be/units/stage.ts).
 * Translations: src/i18n/be/units/stage.ts.
 *
 * Sources: onderwijs.vlaanderen.be and vlaanderen.be could not be opened from the Werkregels
 * session (30 October 2026); the facts come from search results, cited per note. No expert has
 * checked the ⚖️ notes below yet (the track shows its beta line until one has).
 */

// ⚖️ check: Before a school placement the school, the company and the student sign a
// stageovereenkomst ⚖️ (onderwijs.vlaanderen.be "leerlingenstages"; KB 21 september 2004 bescherming
// van stagiairs).
// ⚖️ check: At the company your guide is the mentor; the stagebegeleider comes from school ⚖️
// (securex.be "verplichtingen van de onderneming"; Werkregels stage.ts r.be.l.stage.1).
// ⚖️ check: The CLB (centrum voor leerlingenbegeleiding) helps students for free ⚖️ (vlaanderen.be
// "centrum voor leerlingenbegeleiding").
const lines: BeTaal['lines'] = {
  'w.praktijkopleider': { nl: 'de mentor', en: 'the mentor (your guide at the company)' },
  'w.pok': { nl: 'de stageovereenkomst', en: 'the placement agreement (you, the school and the company sign it)' },
  'w.leerbedrijf': { nl: 'het CLB', en: 'the CLB (a centre that helps students, for free)', emoji: '🤝' },
  's.placement.2': { nl: 'Wie is mijn mentor?', en: 'Who is my mentor?' },
  's.placement.3': { nl: 'Ik heb de stageovereenkomst nog niet getekend.', en: 'I have not signed the placement agreement yet.' },
  'c.placement.a': { nl: 'Maandag. Eerst tekenen we de stageovereenkomst.', en: 'On Monday. First we sign the placement agreement.' },
};

const tips = [
  // ⚖️ check: In dual learning (duaal leren) you learn at a company and at school, with an
  // overeenkomst alternerende opleiding (OAO) or a stageovereenkomst alternerende opleiding (SAO)
  // between student, company and school ⚖️ (vlaanderen.be "duaal leren"; assets.vlaanderen.be "een
  // OAO opmaken", 2024).
  // ⚖️ check: The school, the company and the student sign the stageovereenkomst before the
  // placement; a student younger than 18 (minderjarig) signs with the parents ⚖️
  // (onderwijs.vlaanderen.be "leerlingenstages"; KB 21 september 2004; who signs exactly: nakijken).
  // ⚖️ check: Without a signed agreement the placement may not count ⚖️ (school rules; nakijken).
  // ⚖️ check: The CLB helps students for free, independently and in confidence, also with problems
  // at school ⚖️ (vlaanderen.be "centrum voor leerlingenbegeleiding"; eurydice).
  // ⚖️ check: Sick on placement: tell the company and the school; how is in the stageovereenkomst or
  // the school's stagereglement ⚖️ (custom, per school; Werkregels stage.ts r.be.l.stage.3).
  {
    ...beTip({
      slug: 'placement',
      lessonId: 'l.placement',
      emoji: '🎒',
      title: 'Sign first, then start',
      body: 'At school you often learn at a company: your work placement (stage). In dual learning (duaal leren), you learn at school and at a company. Before you start, you, the school and the company sign an agreement: the stageovereenkomst. Under 18? Then your parents sign too. At the company, your mentor helps you. From school, your placement coach (stagebegeleider) helps you. Problems at school or at your placement? The CLB helps students for free, and in confidence. Sick? Call the company before your start time, and tell the school too. Rules differ per school: ask your placement coach.',
      phrase: ['Ik begin pas als de stageovereenkomst getekend is.', 'I only start when the placement agreement is signed.'],
      situation: 'The company asks you to start tomorrow. The stageovereenkomst is not signed yet. What do you do?',
      options: [
        'Ask your placement coach to arrange the agreement first.',
        'Start tomorrow, and sign the agreement when you have time.',
        'Start, but do not tell the school about it yet.',
      ],
      why: 'The stageovereenkomst says what you learn and who helps you. Without a signed agreement, your placement may not count. So you sign it before you start.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.stage', lines, tips };
