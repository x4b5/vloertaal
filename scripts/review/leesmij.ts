/** The short explanations that go with each list (LEESMIJ.txt), in plain Dutch. */
import type { Lang } from './i18nSource';

export const LANG_NL: Record<Lang, string> = {
  ar: 'Arabisch',
  ti: 'Tigrinya',
  fa: 'Perzisch (Farsi)',
  prs: 'Dari',
  uk: 'Oekraïens',
  tr: 'Turks',
  pl: 'Pools',
  ro: 'Roemeens',
  bg: 'Bulgaars',
  es: 'Spaans',
  pt: 'Portugees',
  fr: 'Frans',
  de: 'Duits',
};

const MAIL = 'hoi@vloertaal.nl';

/** "ongeveer 3 uur" / "ongeveer 40 minuten". */
export function duur(seconds: number): string {
  const min = Math.max(5, Math.round(seconds / 60 / 5) * 5);
  if (min < 90) return `ongeveer ${min} minuten`;
  return `ongeveer ${Math.round(min / 60)} uur`;
}

/** Seconds per row: a translation about 20, a fact about a minute, a fact with priority (with a question) about 3. */
export const SECONDS_PER_TEXT = 20;
export const SECONDS_PER_FACT = 60;
export const SECONDS_PER_PRIORITY = 180;

export function leesmijTaal(lang: Lang, file: string, rows: number): string {
  const taal = LANG_NL[lang];
  return `Vloertaal: de vertaling nakijken (${taal})
==========================================

Dank je wel dat je wilt helpen!

Vloertaal is een gratis app. Nieuwkomers leren er Nederlands mee
voor hun werk, in Nederland en in België. De uitleg staat ook in
hun eigen taal. Die vertaling is gemaakt met AI (een computer).
Nog niemand met ${taal} als moedertaal heeft ernaar gekeken.
Dat vragen we aan jou.


Wat doe je?
-----------
1. Open ${file} in Excel of in Google Sheets.
2. Lees per rij "nederlands" en "engels": dat staat in de app.
3. Lees "vertaling". Is die goed, duidelijk en gewoon ${taal}?
   - Goed? Schrijf ja in de kolom "goed?".
   - Niet goed? Schrijf nee. Weet je een betere tekst?
     Zet die in "beter zo".
   - Een vraag of twijfel? Schrijf die in "opmerking".
4. Sla het bestand op en stuur het terug.


Let op
------
- Vul alleen de lege kolommen in: "goed?", "beter zo" en
  "opmerking". Verander de andere kolommen niet.
- Tekens zoals {n} of {word} laat je staan. Daar zet de app
  een getal of een woord.
- Kolom "vorm":
    m = tegen een man, f = tegen een vrouw,
    x = voor iedereen (als we niet weten wie het leest).
    one, few, many, other = vormen bij een getal
    (bijvoorbeeld 1 dag, 3 dagen, 5 dagen).
    Leeg = er is maar één vorm.
- Kolom "land": NL = over Nederland, BE = over België
  (Vlaanderen), beide = voor allebei.
- Kolom "status": "nieuw, nalezen" = nieuw, nog door niemand
  gelezen. "nagelezen AI" = alleen door een computer nagelezen.
- Bovenaan staan de teksten over veiligheid en over je rechten.
  Die zijn het belangrijkst.
- Excel: kies bij "Opslaan als" het type "CSV UTF-8".
  Anders gaan letters verloren.


Hoe lang duurt het?
-------------------
Er staan ${rows} rijen in. Alles samen: ${duur(rows * SECONDS_PER_TEXT)}.
Per 100 rijen ${duur(100 * SECONDS_PER_TEXT)}.
Je hoeft niet alles te doen. Elke rij helpt. Begin bovenaan.
Je mag ook een deel terugsturen, en later de rest.


Terugsturen
-----------
Mail het bestand naar ${MAIL}.
Onderwerp: "Vertaling ${taal}".
Een vraag? Mail ook naar ${MAIL}.
`;
}

export function leesmijFeiten(land: 'NL' | 'BE', file: string, rows: number, prioriteit: number): string {
  const naam = land === 'BE' ? 'België' : 'Nederland';
  const sites = land === 'BE' ? 'werk.belgie.be, socialsecurity.be, vlaanderen.be en de vakbonden' : 'rijksoverheid.nl, wetten.overheid.nl, het UWV en het Juridisch Loket';
  return `Vloertaal: de feiten nakijken (${naam})
==========================================

Dank je wel dat je wilt helpen!

Vloertaal is een gratis app voor mensen die in Nederland of in
België werken. Ze leren er Nederlands mee, en de regels op het
werk: loon, contract, ziek zijn, veiligheid, je rechten.
De feiten in de app zijn opgezocht met hulp van AI, op sites
zoals ${sites}.
Nog geen jurist of iemand van een vakbond heeft ze nagekeken.
Dat vragen we aan jou.


Wat doe je?
-----------
1. Open ${file} in Excel of in Google Sheets.
2. Lees per rij:
   - "bewering": het feit, zoals wij het opzochten;
   - "tekst in de app": de zin die de leerling leest
     (als we die konden vinden);
   - "bron": waar wij het vandaan hebben.
3. Klopt het? Schrijf ja of nee in de kolom "klopt?".
   Klopt het niet, of maar half? Schrijf in "correctie" wat het
   moet zijn. En in "bron expert" de wet, het artikel of de site.
4. Sla het bestand op en stuur het terug.


Let op
------
- Vul alleen de lege kolommen in: "klopt?", "correctie" en
  "bron expert". Verander de andere kolommen niet.
- De ${prioriteit} rijen met "prioriteit" staan bovenaan. Daar
  twijfelden we het meest (zie "twijfel van de maker").
  Begin daar.
- De app geeft algemene informatie, geen juridisch advies. Een
  zin mag eenvoudig zijn. Hij mag niet fout zijn, en niemand op
  het verkeerde been zetten.
- "bestand:regel" is voor ons: waar de zin in de app staat.
- Excel: kies bij "Opslaan als" het type "CSV UTF-8".


Hoe lang duurt het?
-------------------
Er staan ${rows} feiten in. Veel zijn kort. Alles samen:
${duur(rows * SECONDS_PER_FACT)}. Alleen de ${prioriteit} rijen met "prioriteit":
${duur(prioriteit * SECONDS_PER_PRIORITY)}. Dat helpt ons al veel.
Je hoeft niet alles te doen. Je mag ook een deel terugsturen.


Terugsturen
-----------
Mail het bestand naar ${MAIL}.
Onderwerp: "Feiten ${naam}".
Een vraag? Mail ook naar ${MAIL}.
`;
}
