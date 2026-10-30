import { isBeId } from './be/ids';
import type { AskWho } from './types';

/**
 * The places to go for help ("Wie vraag je het?"), as an answer card shows them: a clear Dutch
 * name, a simple picture and `what`: a short second line under the name that says what the
 * place is (at most 6 words, A2), so a learner who has not met the UWV yet can still choose.
 * Plain Dutch, no abbreviations a learner has to know (UWV is the name people use; WW is
 * explained in the lessons). `npm run taal` (scripts/taal-a2.ts) checks the `what` lines too.
 */
export const ASK_WHO: Record<AskWho, { label: string; emoji: string; what: string }> = {
  // ⚖️ check: leidinggevende = wie je werk regelt en zegt wat je doet (rooster, taken)
  leidinggevende: { label: 'Je leidinggevende', emoji: '🧑‍💼', what: 'je baas op het werk' },
  collega: { label: 'Een collega', emoji: '🤝', what: 'iemand die met jou werkt' },
  // ⚖️ check: HR of loonadministratie = contract, loonstrook en verlof
  hr: { label: 'HR of de loonadministratie', emoji: '🗂️', what: 'contract, loon en vrije dagen' },
  // ⚖️ check: bij uitzendwerk is het uitzendbureau de werkgever (art. 7:690 BW), niet het bedrijf waar je werkt
  uitzendbureau: { label: 'Het uitzendbureau', emoji: '🏢', what: 'je werkgever bij uitzendwerk' },
  // ⚖️ check: bedrijfsarts = adviseert over ziek zijn en werk (verzuim, re-integratie, Arbowet)
  bedrijfsarts: { label: 'De bedrijfsarts', emoji: '🩺', what: 'dokter voor ziek zijn en werk' },
  // ⚖️ check: vertrouwenspersoon = steun bij ongewenst gedrag op het werk (pesten, intimidatie, discriminatie)
  vertrouwenspersoon: { label: 'De vertrouwenspersoon', emoji: '🛡️', what: 'helpt bij pesten op je werk' },
  // ⚖️ check: vakbond = vereniging van werknemers; helpt leden en maakt cao-afspraken
  vakbond: { label: 'De vakbond', emoji: '✊', what: 'club die werkenden helpt' },
  // ⚖️ check: Juridisch Loket = gratis juridisch advies (telefoon, website, loket)
  juridischloket: { label: 'Het Juridisch Loket', emoji: '⚖️', what: 'advies over je rechten' },
  // ⚖️ check: huisarts = je eigen dokter bij ziekte (over ziek zijn en werk: de bedrijfsarts)
  huisarts: { label: 'De huisarts', emoji: '🏥', what: 'je eigen dokter bij ziekte' },
  // ⚖️ check: Nederlandse Arbeidsinspectie = toezicht op arbeidsomstandigheden, werktijden, minimumloon, uitbuiting
  arbeidsinspectie: { label: 'De Arbeidsinspectie', emoji: '🔍', what: 'controleert of bedrijven de regels volgen' },
  // ⚖️ check: UWV = WW, hulp bij werk zoeken, Ziektewet als je ziek bent zonder werkgever
  uwv: { label: 'Het UWV', emoji: '📄', what: 'WW, werk zoeken, ziek zonder baas' },
  // ⚖️ check: gemeente = inschrijving adres (BRP), bijstand (Participatiewet), schuldhulpverlening
  gemeente: { label: 'De gemeente', emoji: '🏛️', what: 'adres, bijstand en hulp bij schulden' },
  // ⚖️ check: politie = bij gevaar (112), geweld, bedreiging en diefstal (aangifte)
  politie: { label: 'De politie', emoji: '👮', what: 'bij gevaar, geweld of diefstal' },
  // The Entree additions (docs/entree-aanvulling.md). On stage you have two guides: one at school
  // (stagebegeleider or bpv-begeleider), one at work (praktijkopleider).
  // ⚖️ check: bpv-begeleider = begeleidt de stage namens de school
  school: { label: 'Je begeleider van school', emoji: '🏫', what: 'helpt bij je stage, vanuit school' },
  // ⚖️ check: praktijkopleider = begeleidt de stagiair in het leerbedrijf
  praktijkopleider: { label: 'Je praktijkopleider', emoji: '🧑‍🏫', what: 'helpt je op je stageplek' },
  // ⚖️ check: bibliotheek = Informatiepunt Digitale Overheid: gratis hulp met computer en DigiD
  bibliotheek: { label: 'De bibliotheek', emoji: '📚', what: 'hulp met computer en DigiD' },
  // ⚖️ check: antidiscriminatievoorziening = gratis melding en hulp bij discriminatie (Wet gemeentelijke antidiscriminatievoorzieningen)
  meldpunt: { label: 'Een meldpunt discriminatie', emoji: '📣', what: 'gratis hulp bij discriminatie' },
  // ⚖️ check: ICT-afdeling = computers en accounts van je werk
  ict: { label: 'De ICT-afdeling', emoji: '💻', what: 'helpt met computers op je werk' },
  // ⚖️ check: bank = je rekening en bankpas (blokkeren bij fraude)
  bank: { label: 'Je bank', emoji: '🏦', what: 'voor je rekening en bankpas' },
  // The regional modules (docs/regio-zuid-limburg.md).
  // ⚖️ check: GrensInfoPunt = gratis advies over wonen of werken over de grens
  grensinfopunt: { label: 'Het GrensInfoPunt', emoji: '🌍', what: 'advies bij werk over de grens' },
  // ⚖️ check: woningcorporatie = verhuurt sociale huurwoningen (lagere huur)
  woningcorporatie: { label: 'De woningcorporatie', emoji: '🏘️', what: 'verhuurt huizen met een lage huur' },
  // Belgium (Vlaanderen, docs/werkregels-belgie.md): only in the Belgian units (src/content/regels/be).
  // ⚖️ check: RVA (Rijksdienst voor Arbeidsvoorziening) beslist over de werkloosheidsuitkering en het tijdskrediet (rva.be, opgezocht 30 okt 2026)
  rva: { label: 'De RVA', emoji: '📄', what: 'werkloosheid en tijdskrediet' },
  // ⚖️ check: HVW (Hulpkas voor Werkloosheidsuitkeringen) = openbare uitbetalingsinstelling, voor wie geen lid is van een vakbond (hvw.fgov.be)
  hvw: { label: 'De Hulpkas (HVW)', emoji: '💶', what: 'betaalt je uitkering, zonder vakbond' },
  // ⚖️ check: ziekenfonds (mutualiteit) betaalt de uitkering bij ziekte na het gewaarborgd loon, en een deel van de dokter terug (riziv.fgov.be)
  ziekenfonds: { label: 'Je ziekenfonds', emoji: '🏥', what: 'geld bij ziekte, kosten van dokter' },
  // ⚖️ check: VDAB = de Vlaamse dienst voor arbeidsbemiddeling: inschrijven als werkzoekende, vacatures, opleiding (vdab.be)
  vdab: { label: 'De VDAB', emoji: '🔎', what: 'werk zoeken en opleiding' },
  // ⚖️ check: bij uitzendarbeid is het interimkantoor de werkgever (wet van 24 juli 1987; federgon.be)
  interimkantoor: { label: 'Het interimkantoor', emoji: '🏢', what: 'je werkgever bij interimwerk' },
  // ⚖️ check: sociaal secretariaat = maakt voor de werkgever de loonbrief en betaalt de RSZ en de bedrijfsvoorheffing door
  socsec: { label: 'Het sociaal secretariaat', emoji: '🗂️', what: 'maakt de loonbrief voor je baas' },
  // ⚖️ check: OCMW = leefloon (recht op maatschappelijke integratie) en hulp bij schulden (schuldbemiddeling) (mi-is.be)
  ocmw: { label: 'Het OCMW', emoji: '🏛️', what: 'leefloon en hulp bij geldzorgen' },
  // ⚖️ check: juridische eerstelijnsbijstand = gratis eerste juridisch advies, o.a. in het justitiehuis (justitie.belgium.be, vlaanderen.be/justitiehuizen)
  justitiehuis: { label: 'Het justitiehuis', emoji: '⚖️', what: 'gratis eerste advies over je rechten' },
  // ⚖️ check: arbeidsarts = preventieadviseur-arbeidsarts van de (externe) dienst voor preventie en bescherming op het werk (codex welzijn op het werk)
  arbeidsarts: { label: 'De arbeidsarts', emoji: '🩺', what: 'dokter voor ziek zijn en werk' },
  // ⚖️ check: Toezicht op de Sociale Wetten (FOD WASO) controleert loon, arbeidsduur en contracten (werk.belgie.be)
  tsw: { label: 'Toezicht op de Sociale Wetten', emoji: '🔍', what: 'controleert loon, uren en contracten' },
};

/** The places a Belgian unit may not use: they exist only in the Netherlands (tests/rulesBe.test.ts). */
export const ASK_WHO_NL_ONLY: readonly AskWho[] = ['uwv', 'juridischloket', 'uitzendbureau', 'arbeidsinspectie', 'bedrijfsarts', 'woningcorporatie'];
/** The places only the Belgian units use. */
export const ASK_WHO_BE_ONLY: readonly AskWho[] = ['rva', 'hvw', 'ziekenfonds', 'vdab', 'interimkantoor', 'socsec', 'ocmw', 'justitiehuis', 'arbeidsarts', 'tsw'];

/**
 * A shared place as a Belgian step shows it (an "r.be." step): another name or another second
 * line where the Dutch one does not fit Belgium. The rest is as in ASK_WHO.
 */
export const ASK_WHO_BE: Partial<Record<AskWho, { label: string; emoji: string; what: string }>> = {
  // ⚖️ check: in België heet het vaak de personeelsdienst; het sociaal secretariaat maakt de loonbrief
  hr: { label: 'HR of de personeelsdienst', emoji: '🗂️', what: 'contract, loon en vrije dagen' },
  // ⚖️ check: in België geeft het OCMW het leefloon, niet de gemeente; de gemeente doet je adres en je papieren
  gemeente: { label: 'De gemeente', emoji: '🏛️', what: 'je adres en je papieren' },
  // ⚖️ check: Unia = onafhankelijke openbare instelling tegen discriminatie, gratis melden (unia.be)
  meldpunt: { label: 'Unia', emoji: '📣', what: 'gratis hulp bij discriminatie' },
  // ⚖️ check: in veel Vlaamse bibliotheken helpt een digipunt met computer, itsme en de eID (vlaanderen.be)
  bibliotheek: { label: 'De bibliotheek', emoji: '📚', what: 'hulp met computer en itsme' },
  // ⚖️ check: bij stage of duaal leren heet de begeleider op het werk meestal mentor
  praktijkopleider: { label: 'Je mentor', emoji: '🧑‍🏫', what: 'helpt je op je stageplek' },
};

/** The card of a place for a step: the Belgian name and line for an "r.be." step. */
export const askWhoCard = (who: AskWho, stepId?: string): { label: string; emoji: string; what: string } =>
  (stepId && isBeId(stepId) ? ASK_WHO_BE[who] : undefined) ?? ASK_WHO[who];
