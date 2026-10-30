import type { ThemeId } from './themes';
import { THEME_UNITS } from './themes';

/**
 * "Wat kun je nu?": per onderwerp 2 of 3 korte can-do-zinnen in de ik-vorm (werkplan stap 2.6,
 * "Uitlijnen op A2/1F"). Ze staan op het certificaat-scherm, op het certificaat zelf als het past
 * (src/lib/certCanvas.ts certKunFits), als aantal op de begeleiderskaart (src/lib/kaart.ts) en
 * als tabel op de pagina voor begeleiders (src/content/pro.ts) en in docs/kun-je-nu.md.
 *
 * CONCEPT: een NT2-docent moet deze zinnen en de niveaus nog nakijken. De zinnen zeggen alleen
 * wat de lessen van het onderwerp echt oefenen (de woorden, zinnen, gesprekjes en
 * spreekopdrachten; in Werkregels de verhalen, regelkaarten, kaartjes en "Zo zeg je het").
 *
 * "Past bij": elke zin heeft een niveau en een vaardigheid waar hij bij **past**. Taal: A1 of A2
 * van het ERK. Werkregels: 1F (Referentiekader taal, ongeveer A2). Dat is een richtlijn voor
 * begeleiders, geen officieel niveau en geen toets: zeg altijd "past bij", nooit "officieel".
 *
 * Vertalingen (alleen het spoor Taal; Werkregels is alleen Nederlands): de `id` van een zin is
 * zijn sleutel in src/i18n/kunjenu/<taal>.ts, zoals een unit-id in src/i18n/<taal>.ts. Verplicht
 * voor de onderwerpen van de thema's in KUN_VERTAALD (tests/kunJeNu.test.ts, tests/i18n.test.ts).
 * TODO: de thema's Samenwerken, Je rechten, Leven in Nederland en Jouw sector vertalen; tot dan
 * staat daar de Engelse zin (`en`) onder het Nederlands.
 */

/** Het niveau waar een zin bij past: A1 of A2 (ERK), of 1F (Werkregels). */
export type KunNiveau = 'A1' | 'A2' | '1F';
/** De vaardigheid waar een zin bij past. */
export type KunVaardigheid = 'luisteren' | 'spreken' | 'lezen' | 'gesprekken';

export interface KunZin {
  /** "kjn.u.time.1": ook de sleutel van de vertaling (Taal). */
  id: string;
  nl: string;
  /** Engels (alleen Taal): de hulptaal Engels, en de terugval zolang een vertaling ontbreekt. */
  en?: string;
  niveau: KunNiveau;
  vaardigheid: KunVaardigheid;
}

export interface KunOnderwerp {
  /** Het id van de unit ("u.time", "r.loon"). */
  unit: string;
  /** De Nederlandse titel van het onderwerp (tests/kunJeNu.test.ts: gelijk aan de unit). */
  titel: string;
  zinnen: KunZin[];
}

type Rij = [nl: string, niveau: KunNiveau, vaardigheid: KunVaardigheid, en?: string];

const onderwerp = (unit: string, titel: string, rijen: Rij[]): KunOnderwerp => ({
  unit,
  titel,
  zinnen: rijen.map(([nl, niveau, vaardigheid, en], i) => ({ id: `kjn.${unit}.${i + 1}`, nl, ...(en ? { en } : {}), niveau, vaardigheid })),
});

/** Spoor Taal: per onderwerp, in de volgorde van de thema's. */
export const KUN_TAAL: KunOnderwerp[] = [
  // Starten
  onderwerp('u.firstday', 'Eerste werkdag', [
    ['Ik kan mezelf voorstellen aan een collega.', 'A1', 'gesprekken', 'I can introduce myself to a colleague.'],
    ['Ik kan vragen bij wie ik me moet melden.', 'A1', 'spreken', 'I can ask who I need to report to.'],
  ]),
  onderwerp('u.help', 'Hulp vragen', [
    ['Ik kan zeggen dat ik het niet begrijp.', 'A1', 'gesprekken', 'I can say that I do not understand.'],
    ['Ik kan vragen of iemand langzamer praat.', 'A1', 'spreken', 'I can ask someone to speak more slowly.'],
  ]),
  onderwerp('u.tools', 'Slimme hulpmiddelen', [
    ['Ik kan vragen of iemand het opschrijft of laat zien.', 'A1', 'spreken', 'I can ask someone to write it down or show me.'],
    ['Ik kan een opdracht herhalen om te checken.', 'A2', 'gesprekken', 'I can repeat a task to check I understood.'],
    ['Ik kan zeggen dat ik Nederlands wil oefenen.', 'A1', 'gesprekken', 'I can say that I want to practise Dutch.'],
  ]),
  onderwerp('u.data', 'Getallen en gegevens', [
    ['Ik kan mijn naam spellen.', 'A1', 'spreken', 'I can spell my name.'],
    ['Ik kan zeggen op welke dagen ik kan werken.', 'A1', 'gesprekken', 'I can say on which days I can work.'],
    ['Ik kan een datum verstaan.', 'A1', 'luisteren', 'I can understand a date.'],
  ]),
  onderwerp('u.sounds', 'Klanken', [
    ['Ik kan woorden als man en maan uit elkaar houden.', 'A1', 'luisteren', 'I can hear the difference between words like man and maan.'],
    ['Ik kan korte zinnen met lastige klanken nazeggen.', 'A1', 'spreken', 'I can repeat short sentences with difficult sounds.'],
  ]),
  // Veilig werken
  onderwerp('u.safety', 'Veiligheid', [
    ['Ik kan een waarschuwing als "Pas op!" verstaan.', 'A1', 'luisteren', 'I can understand a warning like "Pas op!".'],
    ['Ik kan een ongeluk melden.', 'A2', 'spreken', 'I can report an accident.'],
    ['Ik kan zeggen dat ik iets nog niet geleerd heb.', 'A2', 'gesprekken', 'I can say that I have not learned something yet.'],
  ]),
  // Werk vinden
  onderwerp('u.apply', 'Solliciteren', [
    ['Ik kan vertellen welke ervaring ik heb.', 'A2', 'spreken', 'I can say what experience I have.'],
    ['Ik kan in een sollicitatiegesprek iets over mezelf vertellen.', 'A2', 'gesprekken', 'I can talk about myself in a job interview.'],
  ]),
  onderwerp('u.contract', 'Werk en contract', [
    ['Ik kan vragen hoeveel uur ik per week werk.', 'A2', 'spreken', 'I can ask how many hours a week I work.'],
    ['Ik kan vragen of mijn contract tijdelijk of vast is.', 'A2', 'spreken', 'I can ask if my contract is temporary or permanent.'],
    ['Ik kan zeggen wanneer ik wel en niet kan werken.', 'A2', 'gesprekken', 'I can say when I can and cannot work.'],
  ]),
  onderwerp('u.grow', 'Diploma’s en verder komen', [
    ['Ik kan vertellen welke diploma’s en certificaten ik heb.', 'A2', 'spreken', 'I can say which diplomas and certificates I have.'],
    ['Ik kan zeggen waar ik goed in ben.', 'A2', 'gesprekken', 'I can say what I am good at.'],
  ]),
  onderwerp('u.lost', 'Werk kwijt', [
    ['Ik kan zeggen dat mijn contract stopt.', 'A2', 'spreken', 'I can say that my contract is ending.'],
    ['Ik kan vragen of mijn vakantiegeld wordt uitbetaald.', 'A2', 'gesprekken', 'I can ask if my holiday pay will be paid out.'],
  ]),
  onderwerp('u.stage', 'Stage lopen', [
    ['Ik kan vragen wie mijn praktijkopleider is.', 'A2', 'spreken', 'I can ask who my placement supervisor is.'],
    ['Ik kan om feedback en een voorbeeld vragen.', 'A2', 'gesprekken', 'I can ask for feedback and an example.'],
  ]),
  // Je baan
  onderwerp('u.time', 'Tijd en rooster', [
    ['Ik kan zeggen hoe laat mijn dienst begint.', 'A1', 'gesprekken', 'I can say what time my shift starts.'],
    ['Ik kan zeggen dat ik ziek ben.', 'A1', 'spreken', 'I can say that I am sick.'],
  ]),
  onderwerp('u.pay', 'Loon', [
    ['Ik kan zeggen dat mijn loonstrook niet klopt.', 'A2', 'spreken', 'I can say that my payslip is not right.'],
    ['Ik kan woorden als bruto en netto lezen.', 'A2', 'lezen', 'I can read words like bruto and netto.'],
  ]),
  onderwerp('u.leave', 'Verlof en ziekte', [
    ['Ik kan verlof aanvragen.', 'A2', 'spreken', 'I can ask for leave.'],
    ['Ik kan me ziek melden en beter melden.', 'A2', 'gesprekken', 'I can call in sick and report back when I am better.'],
  ]),
  onderwerp('u.contact', 'Bellen en appen met je werk', [
    ['Ik kan bellen en zeggen wie ik ben.', 'A1', 'gesprekken', 'I can call and say who I am.'],
    ['Ik kan vragen of iemand mij terugbelt.', 'A2', 'spreken', 'I can ask someone to call me back.'],
    ['Ik kan een kort bericht van mijn werk lezen.', 'A2', 'lezen', 'I can read a short message from work.'],
  ]),
  onderwerp('u.house', 'Huisregels', [
    ['Ik kan regels als "Roken verboden" lezen.', 'A1', 'lezen', 'I can read rules like "Roken verboden".'],
    ['Ik kan vragen waar ik mag roken.', 'A1', 'spreken', 'I can ask where I am allowed to smoke.'],
    ['Ik kan zeggen dat iets niet mag.', 'A2', 'gesprekken', 'I can say that something is not allowed.'],
  ]),
  onderwerp('u.numbers', 'Rekenen: tijd, geld, maten', [
    ['Ik kan tijden als "kwart over vier" verstaan.', 'A1', 'luisteren', 'I can understand times like "kwart over vier".'],
    ['Ik kan zeggen hoeveel iets kost of weegt.', 'A1', 'spreken', 'I can say how much something costs or weighs.'],
  ]),
  onderwerp('u.shop', 'In de winkel', [
    ['Ik kan vragen of een klant wil pinnen.', 'A2', 'gesprekken', 'I can ask a customer if they want to pay by card.'],
    ['Ik kan een klant de weg in de winkel wijzen.', 'A2', 'gesprekken', 'I can show a customer the way in the shop.'],
  ]),
  onderwerp('u.ai', 'Slimme apps en AI', [
    ['Ik kan vragen of een antwoord klopt.', 'A2', 'spreken', 'I can ask if an answer is right.'],
    ['Ik kan zeggen dat ik met een mens wil praten.', 'A2', 'gesprekken', 'I can say that I want to talk to a person.'],
  ]),
  onderwerp('u.finish', 'Je werk afronden', [
    ['Ik kan vragen wat een woord op de werkbon betekent.', 'A2', 'gesprekken', 'I can ask what a word on the work order means.'],
    ['Ik kan zeggen wat klaar is en wat niet.', 'A2', 'spreken', 'I can say what is finished and what is not.'],
  ]),
  onderwerp('u.online', 'Online op je werk', [
    ['Ik kan zeggen dat mijn wachtwoord niet werkt.', 'A2', 'gesprekken', 'I can say that my password does not work.'],
    ['Ik kan een verdachte mail herkennen.', 'A2', 'lezen', 'I can recognise a suspicious e-mail.'],
  ]),
  // Samenwerken
  onderwerp('u.teamwork', 'Samenwerken', [
    ['Ik kan zeggen dat ik ergens mee zit.', 'A2', 'gesprekken', 'I can say that something is bothering me.'],
    ['Ik kan rustig nee zeggen tegen extra werk.', 'A2', 'gesprekken', 'I can calmly say no to extra work.'],
    ['Ik kan vragen wat ik eerst moet doen.', 'A1', 'spreken', 'I can ask what I need to do first.'],
  ]),
  onderwerp('u.social', 'Omgang met collega’s', [
    ['Ik kan een praatje maken in de pauze.', 'A2', 'gesprekken', 'I can make small talk during the break.'],
    ['Ik kan zeggen dat ik een fout heb gemaakt.', 'A2', 'spreken', 'I can say that I made a mistake.'],
    ['Ik kan zeggen dat iets over mijn grens gaat.', 'A2', 'spreken', 'I can say that something crosses my line.'],
  ]),
  onderwerp('u.sayings', 'Uitdrukkingen en gezegden', [
    ['Ik kan een paar gewone uitdrukkingen verstaan.', 'A2', 'luisteren', 'I can understand a few common expressions.'],
    ['Ik kan zeggen dat iets een eitje is.', 'A2', 'spreken', 'I can say that something is a piece of cake.'],
  ]),
  // Je rechten
  onderwerp('u.rights', 'Regels en rechten', [
    ['Ik kan zeggen dat ik recht heb op pauze.', 'A2', 'spreken', 'I can say that I have a right to a break.'],
    ['Ik kan zeggen dat ik een klacht wil indienen.', 'A2', 'spreken', 'I can say that I want to make a complaint.'],
  ]),
  onderwerp('u.exploit', 'Uitbuiting herkennen', [
    ['Ik kan zeggen dat ik mijn paspoort zelf houd.', 'A2', 'gesprekken', 'I can say that I keep my passport myself.'],
    ['Ik kan vragen of ik iets anoniem kan melden.', 'A2', 'spreken', 'I can ask if I can report something anonymously.'],
  ]),
  // Leven in Nederland
  onderwerp('u.papers', 'Wonen en papieren', [
    ['Ik kan zeggen dat mijn adres is veranderd.', 'A2', 'spreken', 'I can say that my address has changed.'],
    ['Ik kan vragen hoeveel de huur is.', 'A2', 'spreken', 'I can ask how much the rent is.'],
  ]),
  onderwerp('u.health', 'Gezondheid', [
    ['Ik kan zeggen waar ik pijn heb.', 'A1', 'spreken', 'I can say where it hurts.'],
    ['Ik kan een afspraak bij de huisarts vragen.', 'A2', 'gesprekken', 'I can ask for an appointment with the GP.'],
  ]),
  onderwerp('u.money', 'Geld en post', [
    ['Ik kan zeggen dat ik een brief niet begrijp.', 'A2', 'spreken', 'I can say that I do not understand a letter.'],
    ['Ik kan nee zeggen tegen een oplichter aan de telefoon.', 'A2', 'gesprekken', 'I can say no to a scammer on the phone.'],
  ]),
  onderwerp('u.travel', 'Naar je werk', [
    ['Ik kan vertellen hoe ik naar mijn werk kom.', 'A1', 'gesprekken', 'I can say how I get to work.'],
    ['Ik kan vragen waar de bushalte is.', 'A1', 'spreken', 'I can ask where the bus stop is.'],
  ]),
  onderwerp('u.society', 'Meedoen in Nederland', [
    ['Ik kan vragen of ik mag stemmen.', 'A2', 'spreken', 'I can ask if I am allowed to vote.'],
    ['Ik kan zeggen dat ik bezwaar wil maken.', 'A2', 'spreken', 'I can say that I want to object.'],
  ]),
  // Jouw sector
  onderwerp('u.warehouse', 'In het magazijn', [
    ['Ik kan korte opdrachten in het magazijn verstaan.', 'A1', 'luisteren', 'I can understand short instructions in the warehouse.'],
    ['Ik kan zeggen waar iets staat: links of rechts.', 'A1', 'gesprekken', 'I can say where something is: left or right.'],
  ]),
  onderwerp('u.build', 'Op de bouw', [
    ['Ik kan een waarschuwing op de bouw verstaan.', 'A1', 'luisteren', 'I can understand a warning on the building site.'],
    ['Ik kan om gereedschap vragen.', 'A1', 'spreken', 'I can ask for a tool.'],
  ]),
  onderwerp('u.factory', 'In de productie', [
    ['Ik kan zeggen dat er een storing is.', 'A1', 'spreken', 'I can say that there is a breakdown.'],
    ['Ik kan zeggen wat er mis is met een product.', 'A2', 'gesprekken', 'I can say what is wrong with a product.'],
  ]),
  onderwerp('u.care', 'In de zorg', [
    ['Ik kan een cliënt vragen of ik mag helpen.', 'A2', 'gesprekken', 'I can ask a client if I may help.'],
    ['Ik kan iets doorgeven aan de verpleegkundige.', 'A2', 'spreken', 'I can pass something on to the nurse.'],
  ]),
  onderwerp('u.horeca', 'In de horeca', [
    ['Ik kan gasten vragen wat ze willen drinken.', 'A1', 'gesprekken', 'I can ask guests what they would like to drink.'],
    ['Ik kan zeggen dat ik het aan de chef vraag.', 'A2', 'gesprekken', 'I can say that I will ask the chef.'],
  ]),
  onderwerp('u.clean', 'Schoonmaken', [
    ['Ik kan vragen waar de schoonmaakspullen staan.', 'A1', 'spreken', 'I can ask where the cleaning things are.'],
    ['Ik kan iemand waarschuwen dat de vloer glad is.', 'A1', 'spreken', 'I can warn someone that the floor is slippery.'],
  ]),
  onderwerp('u.kas', 'In de kas', [
    ['Ik kan vragen in welke rij ik begin.', 'A1', 'spreken', 'I can ask which row I start in.'],
    ['Ik kan vragen of een kas bespoten is.', 'A2', 'gesprekken', 'I can ask if a greenhouse has been sprayed.'],
  ]),
  onderwerp('u.tech', 'In de werkplaats', [
    ['Ik kan vragen of er nog stroom op staat.', 'A2', 'spreken', 'I can ask if the power is still on.'],
    ['Ik kan zeggen dat een kabel kapot is.', 'A1', 'spreken', 'I can say that a cable is broken.'],
  ]),
  onderwerp('u.garage', 'In de garage', [
    ['Ik kan zeggen dat een band lek is.', 'A1', 'spreken', 'I can say that a tyre is flat.'],
    ['Ik kan zeggen dat de klant eerst akkoord moet zijn.', 'A2', 'gesprekken', 'I can say that the customer must agree first.'],
  ]),
];

/** Spoor Werkregels (alleen Nederlands): per onderwerp, in de volgorde van de thema's. */
export const KUN_REGELS: KunOnderwerp[] = [
  // Starten
  onderwerp('r.start', 'Je eerste dag', [
    ['Ik kan zeggen dat ik te laat kom.', '1F', 'gesprekken'],
    ['Ik kan terugzeggen wat ik heb begrepen.', '1F', 'gesprekken'],
  ]),
  // Veilig werken
  onderwerp('r.veilig', 'Veilig en gezond werken', [
    ['Ik kan zeggen dat iets niet veilig is.', '1F', 'gesprekken'],
    ['Ik kan een ongeluk melden, ook een klein ongeluk.', '1F', 'spreken'],
    ['Ik kan zeggen dat ik te moe ben.', '1F', 'gesprekken'],
  ]),
  // Werk vinden
  onderwerp('r.zoeken', 'Werk zoeken en solliciteren', [
    ['Ik kan een echte vacature van nepwerk onderscheiden.', '1F', 'lezen'],
    ['Ik kan in een gesprek vragen stellen over de baan.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.contract', 'Contract en soorten werk', [
    ['Ik kan de belangrijkste afspraken in mijn contract lezen.', '1F', 'lezen'],
    ['Ik kan nee zeggen als ik te laat word opgeroepen.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.stage', 'Stage lopen', [
    ['Ik kan zelf om feedback vragen.', '1F', 'gesprekken'],
    ['Ik kan zeggen dat het niet goed gaat op stage.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.loopbaan', 'Jouw weg: kiezen en verder leren', [
    ['Ik kan zeggen wat ik goed kan.', '1F', 'gesprekken'],
    ['Ik kan vertellen wat ik na Entree wil doen.', '1F', 'spreken'],
  ]),
  // Je baan
  onderwerp('r.loon', 'Loon en loonstrook', [
    ['Ik kan mijn loonstrook lezen en checken.', '1F', 'lezen'],
    ['Ik kan vragen naar uren die missen.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.tijd', 'Werktijden, pauze en vrij', [
    ['Ik kan lezen wanneer ik recht heb op pauze.', '1F', 'lezen'],
    ['Ik kan nee zeggen tegen extra uren.', '1F', 'gesprekken'],
    ['Ik kan op tijd vrij vragen.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.ziek', 'Ziek zijn', [
    ['Ik kan mij op tijd ziek melden.', '1F', 'gesprekken'],
    ['Ik kan met de bedrijfsarts praten over mijn herstel.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.rekenen', 'Rekenen op je werk', [
    ['Ik kan op een rooster uitrekenen hoeveel uur ik werk.', '1F', 'lezen'],
    ['Ik kan mijn loon per uur narekenen.', '1F', 'lezen'],
  ]),
  onderwerp('r.afronden', 'Je werk goed afronden', [
    ['Ik kan een werkbon lezen.', '1F', 'lezen'],
    ['Ik kan zeggen wat klaar is en wat niet.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.duurzaam', 'Duurzaam werken', [
    ['Ik kan lezen hoe ik afval scheid.', '1F', 'lezen'],
    ['Ik kan een lek of verspilling melden.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.winkel', 'Werken in de winkel', [
    ['Ik kan eerlijk zeggen dat ik iets niet weet.', '1F', 'gesprekken'],
    ['Ik kan vragen om een ID bij alcohol.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.schrijven', 'Schrijven op je werk', [
    ['Ik kan een kort bericht aan mijn werk nalezen.', '1F', 'lezen'],
    ['Ik kan zien wat in een sollicitatiemail hoort.', '1F', 'lezen'],
  ]),
  // Samenwerken
  onderwerp('r.samen', 'Samenwerken: de ongeschreven regels', [
    ['Ik kan rustig zeggen dat ik het oneens ben.', '1F', 'gesprekken'],
    ['Ik kan op tijd zeggen dat iets niet lukt.', '1F', 'gesprekken'],
  ]),
  // Je rechten
  onderwerp('r.rechten', 'Problemen en je rechten', [
    ['Ik kan discriminatie herkennen en melden.', '1F', 'lezen'],
    ['Ik kan stop zeggen als iemand over mijn grens gaat.', '1F', 'gesprekken'],
  ]),
  // Leven in Nederland
  onderwerp('r.geld', 'Uitkering, werk en geld', [
    ['Ik kan een brief van de overheid lezen.', '1F', 'lezen'],
    ['Ik kan op tijd hulp vragen bij geldzorgen.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.digitaal', 'Digitaal op je werk', [
    ['Ik kan een nepbericht herkennen.', '1F', 'lezen'],
    ['Ik kan mijn DigiD veilig gebruiken.', '1F', 'lezen'],
  ]),
  onderwerp('r.meedoen', 'Meedoen in Nederland', [
    ['Ik kan nieuws checken voor ik het doorstuur.', '1F', 'lezen'],
    ['Ik kan mijn mening geven met respect.', '1F', 'gesprekken'],
  ]),
  // Jouw sector
  onderwerp('r.warehouse', 'Werken in de logistiek', [
    ['Ik kan zeggen dat ik geen heftruckopleiding heb.', '1F', 'gesprekken'],
    ['Ik kan vragen hoe de norm werkt.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.build', 'Werken in de bouw', [
    ['Ik kan lezen welke beschermende spullen verplicht zijn.', '1F', 'lezen'],
    ['Ik kan de uitleg in de toolbox volgen.', '1F', 'luisteren'],
  ]),
  onderwerp('r.factory', 'Werken in de productie', [
    ['Ik kan uitleggen waarom een machine eerst stil moet.', '1F', 'spreken'],
    ['Ik kan lezen welke rust ik krijg na nachtwerk.', '1F', 'lezen'],
  ]),
  onderwerp('r.care', 'Werken in de zorg', [
    ['Ik kan de hygiëneregels in de zorg lezen.', '1F', 'lezen'],
    ['Ik kan zeggen dat ik geen medicijnen mag geven.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.horeca', 'Werken in de horeca', [
    ['Ik kan de regels voor schoon werken lezen.', '1F', 'lezen'],
    ['Ik kan een vraag over allergie navragen in de keuken.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.clean', 'Werken in de schoonmaak', [
    ['Ik kan het etiket van een schoonmaakmiddel lezen.', '1F', 'lezen'],
    ['Ik kan op tijd zeggen dat ik pijn heb.', '1F', 'gesprekken'],
  ]),
  onderwerp('r.kas', 'Werken in de tuinbouw', [
    ['Ik kan vragen of ik een bespoten kas in mag.', '1F', 'gesprekken'],
    ['Ik kan lezen hoeveel ik bij stukloon minstens krijg.', '1F', 'lezen'],
  ]),
  onderwerp('r.techniek', 'Werken in de techniek', [
    ['Ik kan vragen of de stroom eraf is.', '1F', 'gesprekken'],
    ['Ik kan een kapotte kabel melden.', '1F', 'spreken'],
  ]),
  onderwerp('r.werkplaats', 'Werken in de garage', [
    ['Ik kan een werkorder lezen.', '1F', 'lezen'],
    ['Ik kan zeggen dat de klant eerst ja moet zeggen.', '1F', 'gesprekken'],
  ]),
];

const byUnit = new Map([...KUN_TAAL, ...KUN_REGELS].map((o) => [o.unit, o] as const));

/** Een rij van "Wat kun je nu?" zoals een Belgische unit hem meebrengt (src/content/regels/be). */
export type KunRij = [nl: string, niveau: KunNiveau, vaardigheid: KunVaardigheid];

/**
 * De zinnen van de Belgische units (ids "r.be.…", docs/werkregels-belgie.md): elke unit brengt ze
 * zelf mee (`kun` in src/content/regels/be/units/<naam>.ts), src/content/regels/be/index.ts zet ze
 * hier. Zonder eigen zinnen krijgt een Belgische unit de zinnen van de Nederlandse.
 */
const byUnitBe = new Map<string, KunOnderwerp>();
export function addKunBe(unit: string, titel: string, rijen: KunRij[]): void {
  byUnitBe.set(unit, onderwerp(unit, titel, rijen));
}

/** De zinnen van een onderwerp ([] voor een onderwerp zonder zinnen, zoals dat van een regio). */
export function kunJeNu(unitId: string): KunZin[] {
  const be = unitId.startsWith('r.be.') ? byUnitBe.get(unitId) ?? byUnit.get(`r.${unitId.slice(5)}`) : undefined;
  return (be ?? byUnit.get(unitId))?.zinnen ?? [];
}

/** "past bij A2 · spreken" */
export const pastBij = (z: Pick<KunZin, 'niveau' | 'vaardigheid'>): string => `past bij ${z.niveau} · ${z.vaardigheid}`;

/** Hoeveel zinnen bij deze onderwerpen horen (de begeleiderskaart). */
export function kunAantal(unitIds: string[]): number {
  return unitIds.reduce((n, id) => n + kunJeNu(id).length, 0);
}

/**
 * De thema's waarvan de zinnen (spoor Taal) in alle 13 hulptalen vertaald moeten zijn: de eerste
 * vier. TODO: de andere vier thema's.
 */
export const KUN_VERTAALD: ThemeId[] = ['theme.start', 'theme.safe', 'theme.find', 'theme.job'];

/** De ids van de zinnen die vertaald moeten zijn (src/i18n/kunjenu/<taal>.ts). */
export function kunGlossIds(): string[] {
  const units = new Set(KUN_VERTAALD.flatMap((t) => THEME_UNITS[t].taal));
  return KUN_TAAL.filter((o) => units.has(o.unit)).flatMap((o) => o.zinnen.map((z) => z.id));
}
