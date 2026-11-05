import type { Gloss } from '../types';

// The translations of the Belgian version of u.sick, "Ziekte" (src/content/taalBe/units/sick.ts),
// one object per help language. The lines and the tip of "Sick at home" (l.illness) kept their ids
// when the unit was split (5 November 2026): their translations stay in ./leave.ts.
// TO DO (the translation round): the new ids of "Back to work after illness" (l.backtowork):
// be.s.backtowork.3, and the tip be.c.backtowork (.b, .p, .s, .o1-.o3, .w; .b ends with the
// Belgian closing line, as in ./leave.ts: end(…, <lang>Base, 'advice')); then import this file in
// src/i18n/be/<lang>.ts like ./leave.ts. Until then the Belgian lesson shows English there.

export const ar: Gloss = {};
export const ti: Gloss = {};
export const fa: Gloss = {};
export const prs: Gloss = {};
export const uk: Gloss = {};
export const tr: Gloss = {};
export const pl: Gloss = {};
export const ro: Gloss = {};
export const bg: Gloss = {};
export const es: Gloss = {};
export const pt: Gloss = {};
export const fr: Gloss = {};
export const de: Gloss = {};
