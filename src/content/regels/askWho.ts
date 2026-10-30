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
};
