/**
 * The inventory of the language track for Belgium (Vlaanderen), docs/taal-belgie.md: every unit,
 * lesson and tip of the Dutch course, with what changes in Belgium.
 *
 *   A  holds in Belgium too: nothing changes, at most one word ("Dutch supervisors").
 *   B  a few words or one fact differ (loonstrook → loonbrief, DigiD → itsme, uitzendbureau →
 *      interimkantoor): a B change in the unit's file (`lines`, and a Belgian tip).
 *   C  wholly different (Meedoen in Nederland, DigiD, toeslagen, Entree): a new lesson or unit.
 *
 * Per lesson two marks: its items (words, sentences, the chat) and its "Zo werkt het hier" tip
 * ('-': a lesson without a tip). A tip whose only Dutch part is the closing line ("… or the
 * Juridisch Loket") is A: the Belgian course swaps that line by itself (src/content/taalBe/index.ts
 * beClosing). This table drives the line "Dit gaat over Nederland. In België is het anders." for a
 * lesson or tip that has no Belgian version yet, and tests/taalBe.test.ts checks that a written
 * unit file covers every B and C of its unit.
 */
export type BeKind = 'A' | 'B' | 'C';

export interface BeLessonInventory {
  items: BeKind;
  tip: BeKind | '-';
  why: string;
}

export interface BeUnitInventory {
  /** C: the unit itself is about the Netherlands (its title too); else the most of its lessons. */
  kind: BeKind;
  lessons: Record<string, BeLessonInventory>;
}

const L = (items: BeKind, tip: BeKind | '-', why = ''): BeLessonInventory => ({ items, tip, why });

export const TAAL_BE_INVENTORY: Record<string, BeUnitInventory> = {
  'u.firstday': { kind: 'B', lessons: {
    'l.hello': L('A', 'B', 'tip "Je of u": in Vlaanderen zeg je op het werk vaker "u" (en tussen collega’s soms "ge")'),
    'l.people': L('A', 'A'),
    'l.arrive': L('B', 'A', 'de kantine heet in Vlaanderen vaak de refter (zelfde plaatje)'),
  } },
  'u.help': { kind: 'A', lessons: {
    'l.understand': L('A', 'A', 'één woord: "Dutch supervisors"'),
  } },
  'u.tools': { kind: 'B', lessons: {
    'l.translate': L('A', 'A'),
    'l.understood': L('A', 'A'),
    'l.keeplearning': L('B', 'B', 'het Taalhuis → het Huis van het Nederlands; NOS Jeugdjournaal → Karrewiet (VRT)'),
  } },
  'u.safety': { kind: 'B', lessons: {
    'l.gear': L('A', 'A'),
    'l.danger': L('A', 'A'),
    'l.accident': L('B', 'B', 'de BHV’er → de EHBO’er; Nederlandse Arbeidsinspectie → Toezicht op het Welzijn op het Werk; arbeidsongevallenverzekeraar'),
    'l.notyet': L('A', 'A'),
  } },
  'u.warehouse': { kind: 'B', lessons: {
    'l.things': L('A', 'B', 'tip "Direct is not rude": Vlaamse collega’s zijn vaak minder direct'),
    'l.directions': L('A', 'A'),
  } },
  'u.data': { kind: 'B', lessons: {
    'l.details': L('B', 'B', 'de Belastingdienst → FOD Financiën; BSN → rijksregisternummer; payslip → loonbrief'),
    'l.dates': L('A', 'A'),
  } },
  'u.time': { kind: 'B', lessons: {
    'l.shift': L('A', 'A'),
    'l.sick': L('A', 'B', 'vaak een ziektebriefje, soms vanaf de eerste dag (het arbeidsreglement zegt wanneer)'),
  } },
  'u.sounds': { kind: 'A', lessons: {
    'l.shortlong': L('A', '-'),
    'l.roundsounds': L('A', '-'),
    'l.pbgk': L('A', '-'),
  } },
  'u.teamwork': { kind: 'B', lessons: {
    'l.speakup': L('A', 'B', '"Dutch colleagues prefer to hear it directly": in Vlaanderen vaker voorzichtig'),
    'l.agree': L('A', 'A'),
    'l.task': L('A', 'B', '"In the Netherlands a supervisor …"'),
  } },
  'u.apply': { kind: 'A', lessons: {
    'l.cv': L('A', 'A', 'één woord: "A Dutch CV"'),
    'l.interview': L('A', 'A', 'één woord: "Dutch employers"'),
  } },
  'u.contract': { kind: 'B', lessons: {
    'l.findwork': L('B', 'B', 'het uitzendbureau → het interimkantoor'),
    'l.contract': L('C', 'C', 'geen proeftijd meer (eenheidsstatuut); oproepkracht en cao anders: variabel uurrooster, paritair comité'),
    'l.agency': L('B', 'C', 'de intercedent → de consulent; uitzend-cao en 8% vakantiegeld → dagcontracten, PC 322'),
    'l.permit': L('B', 'C', 'de zzp’er → de zelfstandige; IND, UWV, VluchtelingenWerk → DVZ, VDAB, Vluchtelingenwerk Vlaanderen; inburgering via het Agentschap Integratie en Inburgering'),
  } },
  'u.papers': { kind: 'B', lessons: {
    'l.bsn': L('C', 'C', 'ook de titel; BSN, DigiD, zorgverzekering → rijksregisternummer, eID en itsme, ziekenfonds'),
    'l.housing': L('B', 'C', 'de borg → de huurwaarborg; Huurcommissie en Juridisch Loket → Vlaamse huurregels, justitiehuis'),
  } },
  'u.pay': { kind: 'B', lessons: {
    'l.payslip': L('B', 'C', 'de loonstrook → de loonbrief; loonheffing → RSZ en bedrijfsvoorheffing'),
    'l.extra': L('B', 'C', 'de toeslag → de premie; 8% vakantiegeld → enkel en dubbel vakantiegeld, eindejaarspremie'),
  } },
  'u.house': { kind: 'B', lessons: {
    'l.phone': L('A', 'A'),
    'l.smoking': L('A', 'B', 'rookverbod: een andere wet en andere data ("Since 2022 …")'),
    'l.clock': L('A', 'A'),
    'l.hygiene': L('A', 'A'),
  } },
  'u.social': { kind: 'A', lessons: {
    'l.smalltalk': L('A', 'A'),
    'l.mistakes': L('A', 'A'),
    'l.respect': L('A', 'A', 'vertrouwenspersoon bestaat ook in België'),
    'l.gossip': L('A', 'A'),
    'l.boundaries': L('A', 'A', 'vertrouwenspersoon en HR; in België ook de preventieadviseur (psychosociaal)'),
  } },
  'u.sayings': { kind: 'B', lessons: {
    'l.easy': L('A', 'A', 'één woord: "Dutch people"'),
    'l.plain': L('A', 'B', '"Dutch colleagues often say directly": Vlamingen zijn vaak minder direct'),
  } },
  'u.rights': { kind: 'B', lessons: {
    'l.health': L('C', 'C', 'Arbowet, Arbeidsinspectie, pauze na 5,5 uur → Welzijnswet, Arbeidswet, pauze na 6 uur, Toezicht op de Sociale Wetten'),
    'l.rights': L('B', 'C', 'het Juridisch Loket → het justitiehuis; ontslag via UWV, vaststellingsovereenkomst, FNV, WW → opzegtermijn, C4, ABVV/ACV/ACLVB'),
  } },
  'u.leave': { kind: 'B', lessons: {
    'l.leave': L('B', 'B', 'het calamiteitenverlof → het verlof om dwingende redenen (zonder loon)'),
    'l.illness': L('B', 'C', 'de bedrijfsarts → de arbeidsarts; 70% voor 2 jaar, wachtdag → gewaarborgd loon, dan het ziekenfonds'),
    'l.kids': L('B', 'B', 'calamiteitenverlof; ouderschapsverlof en zorgverlof anders geregeld (RVA)'),
  } },
  'u.exploit': { kind: 'B', lessons: {
    'l.warning': L('B', 'A', 'zin "Ik krijg geen loonstrook." → loonbrief; de tip: alleen de slotregel'),
    'l.gethelp': L('A', 'C', 'Arbeidsinspectie, Meld Misdaad Anoniem, Juridisch Loket → Toezicht op de Sociale Wetten, Payoke, justitiehuis'),
  } },
  'u.contact': { kind: 'A', lessons: {
    'l.callin': L('A', 'A'),
    'l.texting': L('A', 'A'),
    'l.email': L('A', 'A', '"Groet" mag, "Groeten" is in Vlaanderen gewoner'),
  } },
  'u.grow': { kind: 'B', lessons: {
    'l.certs': L('A', 'A', 'VCA bestaat ook in België'),
    'l.diploma': L('B', 'B', 'laten waarderen → laten erkennen; IDW → NARIC-Vlaanderen'),
    'l.mychoice': L('B', 'B', 'de bijbaan → de studentenjob, de meeloopdag → de snuffelstage; de coach op school → het CLB, de VDAB'),
    'l.nextstep': L('C', 'C', 'Entree, niveau 2, startkwalificatie, bbl → duaal leren, volwassenenonderwijs, VDAB-opleiding'),
  } },
  'u.health': { kind: 'B', lessons: {
    'l.doctor': L('B', 'B', 'de huisartsenpost → de huisartsenwachtpost (1733)'),
    'l.insurance': L('C', 'C', 'zorgverzekering, eigen risico, zorgtoeslag → ziekenfonds, remgeld, verhoogde tegemoetkoming'),
    'l.body': L('A', 'A'),
    'l.healthy': L('A', 'A'),
  } },
  'u.money': { kind: 'B', lessons: {
    'l.letters': L('C', 'C', 'Belastingdienst, aangifte voor 1 mei, toeslagen → FOD Financiën, MyMinfin, Groeipakket'),
    'l.scams': L('A', 'A'),
    'l.budget': L('A', 'A'),
  } },
  'u.travel': { kind: 'B', lessons: {
    'l.bike': L('A', 'A'),
    'l.transit': L('C', 'C', 'inchecken, OVpay, reiskostenvergoeding → De Lijn en NMBS, de werkgever betaalt mee aan de trein'),
  } },
  'u.lost': { kind: 'B', lessons: {
    'l.ww': L('C', 'C', 'WW, UWV, werk.nl → werkloosheidsuitkering, RVA, C4, VDAB'),
    'l.jobends': L('B', 'B', 'zinnen met het Juridisch Loket en de zorgverzekering; tip: gemeente, zorgverzekering'),
    'l.newjob': L('B', 'B', 'loonstroken → loonbrieven; werk.nl en uitzendbureaus → VDAB en interimkantoren'),
  } },
  'u.build': { kind: 'A', lessons: {
    'l.tools': L('A', 'A'),
    'l.site': L('A', 'A', 'LMRA bestaat ook in België; alleen de slotregel'),
  } },
  'u.factory': { kind: 'A', lessons: {
    'l.line': L('A', 'A'),
    'l.quality': L('A', 'A'),
  } },
  'u.care': { kind: 'A', lessons: {
    'l.client': L('A', 'A'),
    'l.privacy': L('A', 'A'),
  } },
  'u.horeca': { kind: 'A', lessons: {
    'l.kitchen': L('A', 'A', 'HACCP en de autocontrole gelden ook in België'),
    'l.service': L('A', 'A'),
  } },
  'u.clean': { kind: 'A', lessons: {
    'l.cleaning': L('A', 'A'),
    'l.cleansafe': L('A', 'A'),
  } },
  'u.shop': { kind: 'B', lessons: {
    'l.shelves': L('A', 'A'),
    'l.checkout': L('B', 'B', 'pinnen → met je kaart betalen; bier en wijn vanaf 16, sterke drank en tabak vanaf 18'),
  } },
  'u.numbers': { kind: 'A', lessons: {
    'l.hours': L('A', 'A'),
    'l.measures': L('A', 'A'),
  } },
  'u.ai': { kind: 'B', lessons: {
    'l.aihelp': L('A', 'B', 'het Juridisch Loket; "In the Netherlands almost every worker gets holiday pay"'),
    'l.aiprivate': L('A', 'B', 'het BSN → het rijksregisternummer'),
    'l.aifake': L('A', 'A'),
    'l.aiplan': L('A', 'A', 'alleen de slotregel'),
  } },
  'u.kas': { kind: 'B', lessons: {
    'l.harvest': L('A', 'B', 'stukloon en minimumloon (rijksoverheid.nl) → seizoensarbeid, PC 145'),
    'l.greensafe': L('A', 'A', 'alleen de slotregel'),
  } },
  'u.finish': { kind: 'A', lessons: {
    'l.workorder': L('A', 'A'),
    'l.handover': L('A', 'A'),
  } },
  'u.tech': { kind: 'A', lessons: {
    'l.workshop': L('A', 'A', 'alleen de slotregel'),
    'l.power': L('A', 'A', 'alleen de slotregel'),
  } },
  'u.garage': { kind: 'A', lessons: {
    'l.garage': L('A', 'A'),
    'l.carjob': L('A', 'A', 'alleen de slotregel'),
  } },
  'u.stage': { kind: 'B', lessons: {
    'l.placement': L('C', 'C', 'POK, praktijkopleider, stagebegeleider, bpv → stageovereenkomst, mentor, school'),
    'l.review': L('A', 'B', 'tip: "workplace trainer" (praktijkopleider) → de mentor, zoals in l.placement'),
  } },
  'u.society': { kind: 'C', lessons: {
    'l.council': L('C', 'C', 'gemeenteraad, Tweede Kamer, stempas → gemeenteraad, opkomstplicht, oproepingsbrief'),
    'l.police': L('C', 'C', 'identificatieplicht, bezwaar, Juridisch Loket → identiteitskaart, bezwaar, justitiehuis'),
  } },
  'u.online': { kind: 'B', lessons: {
    'l.login': L('B', 'B', 'DigiD → itsme'),
    'l.phish': L('A', 'A'),
  } },
};

/** The units of the inventory that need a Belgian version (B or C). */
export const BE_TAAL_UNITS: string[] = Object.entries(TAAL_BE_INVENTORY).filter(([, u]) => u.kind !== 'A').map(([id]) => id);
