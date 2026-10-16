import type { UiKey } from '../i18n/types';

/**
 * "Waarom Nederlands leren?": facts, said positively, never as a warning. Learners are already
 * learning, so the app does not argue with them: one short "Wist je dat?" card on a few
 * day-streak milestones (src/components/Milestone.tsx), in the help language. The facts with
 * their sources and the nuance are for coaches (src/components/Coaches.tsx, COACH_FACTS).
 * Check the numbers when a new CBS or PIAAC report comes out.
 */

/** The card of a milestone (3, 7, 14 and 30 days in a row), as a UI text. */
export const MILESTONE_FACTS: Readonly<Record<number, UiKey>> = { 3: 'fact3', 7: 'fact7', 14: 'fact14', 30: 'fact30' };

export interface CoachFact {
  text: string;
  source: string;
}

/** "Voor begeleiders" (Dutch only): the facts with where they come from. */
export const COACH_FACTS: CoachFact[] = [
  {
    text: 'Van de migranten die zeer goed Nederlands spreken, had 69 procent betaald werk. Van wie het niet of nauwelijks tot redelijk spreekt, ongeveer de helft. Opleiding en de leeftijd bij aankomst spelen ook mee.',
    source: 'CBS (2023), Arbeidsparticipatie hoger bij goede beheersing Nederlands. Cijfers over 2021.',
  },
  {
    text: 'Ruim 3 miljoen mensen van 16 tot 75 jaar hebben moeite met taal, rekenen of digitale vaardigheden.',
    source: 'PIAAC 2023, nationaal rapport (Kohnstamm Instituut, december 2024); Kamerbrief basisvaardigheden, juli 2025.',
  },
  {
    text: 'Elke dag kort oefenen werkt beter dan af en toe lang. Daarom komt Vloertaal elke dag even terug, met woorden op het juiste moment.',
    source: 'Onderzoek naar gespreid leren, onder andere Cepeda e.a. (2006), Psychological Bulletin.',
  },
];
