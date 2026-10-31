import type { LangText } from '../types';

/** The translations of one Belgian unit file in one help language: gloss id → text. */
export type Gloss = Record<string, LangText>;
