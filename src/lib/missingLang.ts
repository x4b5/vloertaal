import { CONTACT_EMAIL } from '../content/about';

/**
 * "Is your language missing?" (the first-run language list): the learner types the language they
 * miss, and their own mail app opens with a short mail to hoi@vloertaal.nl (the owner's request,
 * 2 November 2026). Vloertaal has no server of its own: as with "Melden" and "Vraag of fout?",
 * nothing reaches us until the learner sends the mail (the privacy statement says so).
 * Only what they typed goes in the mail: no help language, no phone, nothing else.
 */

/** The longest name the field takes: a language's name, not a letter. */
export const MISSING_MAX = 60;

/** What was typed, tidied: spaces squeezed, at most MISSING_MAX characters. Empty: nothing to send. */
export function missingName(typed: string): string {
  return typed.replace(/\s+/g, ' ').trim().slice(0, MISSING_MAX);
}

/** The mailto: link for a missing language (Dutch for us, the English beside it for the learner). */
export function missingLangMail(typed: string): string {
  const name = missingName(typed);
  const subject = `Taal gemist: ${name}`;
  const body = `Ik mis deze taal in Vloertaal: ${name}\n(My language is missing in Vloertaal: ${name})\n`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
