import { BRIDGE_SHARE } from '../lib/bridge';
import { NUDGE_AGAIN, NUDGE_FIRST } from '../lib/backupNudge';
import { SHY_AFTER } from '../lib/chorus';
import { FEEL_AT } from '../lib/feel';
import { FLAWLESS_RUN } from '../lib/pace';
import { STREAK_TIERS } from '../lib/progress';
import { REASON_AFTER } from '../lib/reason';
import { END_DAYS, END_UNITS, INSTAP_FROM_LESSONS, INSTAP_UNTIL_LESSONS } from '../lib/toets';

/**
 * Everything the app shows of its own accord: a card, a question, an offer (docs/overzicht.md,
 * "Wat de app uit zichzelf laat zien"). The numbers come from the code. The order within a place
 * is the order in src/App.tsx today, written out by hand: App.tsx does not read this list yet.
 * tests/overzicht.test.ts checks the order of the cards on the home against App.tsx, and the order
 * after the result against src/lib/afterLesson.ts.
 */
export type Place = 'openen' | 'thuis-kaart' | 'thuis-regel' | 'uitslag' | 'na-uitslag' | 'in-de-les';

export const PLACES: Record<Place, { titel: string; regel: string }> = {
  openen: { titel: 'Bij het openen van de app', regel: 'In plaats van Route, één keer.' },
  'thuis-kaart': { titel: 'Op Route: een kaart in plaats van de volgende les', regel: 'Eén kaart tegelijk. De bovenste in deze lijst gaat voor.' },
  'thuis-regel': { titel: 'Op Route: een regel onder de volgende les', regel: 'Alleen zolang er plek is: hooguit drie dingen om op te tikken.' },
  uitslag: { titel: 'Op de uitslag na een les', regel: 'Hooguit één vraag per scherm: de noodzinnen gaan voor "Wil je sneller?", en die gaat voor de gezichtjes. De laatste twee zijn rijen, geen vragen; wanneer ze vervallen staat erbij.' },
  'na-uitslag': { titel: 'Na de uitslag', regel: 'Achter elkaar, in deze volgorde. Daarna terug naar Route.' },
  'in-de-les': { titel: 'In een les of op een onderwerp', regel: 'Kleine hulp, op het moment zelf.' },
};

export interface Moment {
  id: string;
  /** What the learner reads. */
  naam: string;
  plek: Place;
  wanneer: string;
  /** How often, and where the app remembers it. */
  onthoudt: string;
  /** The function that decides, and its file. */
  code: string;
}

const list = (ns: readonly (number | string)[]) => (ns.length > 1 ? `${ns.slice(0, -1).join(', ')} en ${ns[ns.length - 1]}` : String(ns[0]));

export const MOMENTS: Moment[] = [
  { id: 'reeks-gestopt', plek: 'openen', naam: 'Je reeks is gestopt', wanneer: 'Na een echte pauze: de reeks was 3 dagen of langer, en de leerling oefende op minder dan 3 van de laatste 7 dagen.', onthoudt: 'Eén keer per gestopte reeks.', code: 'stoppedToTell, src/lib/progress.ts' },

  { id: 'melding', plek: 'thuis-kaart', naam: 'Er is iets veranderd', wanneer: 'Een verandering in rechten, loon, ziekte, uitkering of veiligheid die na de eerste dag van de leerling in het logboek kwam.', onthoudt: 'Eén keer per melding (in de voortgang).', code: 'noticeFor, src/lib/notice.ts' },
  { id: 'werkregels', plek: 'thuis-kaart', naam: 'Wil je ook de werkregels leren?', wanneer: `Alleen in Taal, als ${Math.round(BRIDGE_SHARE * 100)}% van het eigen lespad af is.`, onthoudt: 'Eén keer (in de voortgang).', code: 'bridgeDue, src/lib/bridge.ts' },
  { id: 'bewaar', plek: 'thuis-kaart', naam: 'Bewaar je voortgang', wanneer: `Alleen op een telefoon die de voortgang kan kwijtraken, na ${NUDGE_FIRST} lessen. Daarna pas weer na ${NUDGE_AGAIN} lessen.`, onthoudt: 'Losse sleutel vloertaal:backup-nudge.', code: 'nudgeDue, src/lib/backupNudge.ts' },
  { id: 'waarom', plek: 'thuis-kaart', naam: 'Waarom leer jij Nederlands?', wanneer: `Na ${REASON_AFTER} lessen, tot de leerling antwoordt of het wegzet.`, onthoudt: 'Eén keer (in de voortgang).', code: 'reasonDue, src/lib/reason.ts' },

  { id: 'gelukt', plek: 'thuis-regel', naam: 'Gelukt?', wanneer: 'De dag na "Probeer het vandaag op je werk". Na "Nog niet" de dag erna nog één keer.', onthoudt: 'Losse sleutel vloertaal:work-try-ask.', code: 'geluktDue, src/lib/workTry.ts' },
  { id: 'toets', plek: 'thuis-regel', naam: 'Wat ken je al?', wanneer: `De eerste toets: vanaf ${INSTAP_FROM_LESSONS} les tot en met ${INSTAP_UNTIL_LESSONS} lessen. De tweede: na ${END_DAYS} dagen of ${END_UNITS} onderwerpen.`, onthoudt: 'In de voortgang.', code: 'toetsOffer, src/lib/toets.ts' },

  { id: 'noodzinnen', plek: 'uitslag', naam: 'Naar de noodzinnen', wanneer: 'Op de uitslag van de eerste les.', onthoudt: 'Eén keer (in de voortgang).', code: 'phrases, src/App.tsx' },
  { id: 'sneller', plek: 'uitslag', naam: 'Wil je sneller?', wanneer: `Alleen in Taal, na ${FLAWLESS_RUN} lessen achter elkaar zonder fout.`, onthoudt: 'Eén keer (in de voortgang).', code: 'paceAfterLesson, src/lib/pace.ts' },
  { id: 'gezichtjes', plek: 'uitslag', naam: 'Wat vind je van Vloertaal?', wanneer: `Na de ${list(FEEL_AT.map((n) => `${n}e`))} les, met drie gezichtjes.`, onthoudt: 'Losse sleutel vloertaal:gevoel.', code: 'feelDue, src/lib/feel.ts' },
  { id: 'samen', plek: 'uitslag', naam: 'Oefen samen', wanneer: 'Alleen in Taal, na een les met gesprekjes. Niet samen met de noodzinnen of de gezichtjes.', onthoudt: 'Elke keer.', code: 'hasSamen, src/lib/samen.ts' },
  { id: 'probeer', plek: 'uitslag', naam: 'Probeer het vandaag op je werk', wanneer: 'Na een les die de leerling voor het eerst doet. Niet samen met "Wil je sneller?" of de gezichtjes.', onthoudt: 'Hooguit één keer per dag (losse sleutel vloertaal:work-try).', code: 'workTryFor, src/lib/workTry.ts' },

  { id: 'certificaat', plek: 'na-uitslag', naam: 'Certificaat behaald', wanneer: 'De les maakte een onderwerp af. Daarna het certificaat of het spiekkaartje; bij het eerste certificaat in Taal "Voor je collega".', onthoudt: 'Eén keer per onderwerp (in de voortgang).', code: 'afterLessonSteps, src/lib/afterLesson.ts' },
  { id: 'dagen-op-rij', plek: 'na-uitslag', naam: 'Dagen op rij', wanneer: `Na de eerste les van de dag, als de reeks omhoog ging. Bij ${list(STREAK_TIERS)} dagen met een "Wist je dat?". Niet met "Rustig scherm".`, onthoudt: 'Elke dag hooguit één keer.', code: 'afterLessonSteps, src/lib/afterLesson.ts' },
  { id: 'blijf-oefenen', plek: 'na-uitslag', naam: 'Zo blijf je oefenen', wanneer: 'Het aanbod van een herinnering en de app op het beginscherm.', onthoudt: 'Eén keer (losse sleutel vloertaal.keepOffered).', code: 'keepOffered, src/lib/keepOffered.ts' },

  { id: 'zeg-samen', plek: 'in-de-les', naam: 'Zeg het samen', wanneer: `Voor het opnemen: bij de eerste spreekoefening ooit, of als de leerling ${SHY_AFTER} spreekoefeningen achter elkaar oversloeg.`, onthoudt: 'In de voortgang.', code: 'chorusDue, src/lib/chorus.ts' },
  { id: 'handje', plek: 'in-de-les', naam: 'Het handje doet het voor', wanneer: 'De eerste keer bij zin bouwen, paren verbinden en typen.', onthoudt: 'Eén keer per soort oefening (losse sleutel vloertaal:shown-how).', code: 'src/components/ShowHow.tsx' },
  { id: 'ken-dit-al', plek: 'in-de-les', naam: 'Ik ken dit al: korte check', wanneer: 'Op de pagina van een onderwerp: alleen in Taal, bij een deel van de thema\'s, na een goede eerste toets, als er nog lessen open zijn.', onthoudt: 'Eén check per onderwerp (in de voortgang).', code: 'checkOffered, src/lib/instapCheck.ts' },
];

/** The cards on the home, first to last: the order tests/overzicht.test.ts finds in src/App.tsx. */
export const HOME_CARD_ORDER = ['noticeFor(', 'bridgeDue(', 'nudgeDue(', 'reasonDue('] as const;

/** The moments after the result that are steps of src/lib/afterLesson.ts, by the step's name. */
export const AFTER_RESULT_STEP: Record<string, string> = { 'cert-earned': 'certificaat', streak: 'dagen-op-rij' };
