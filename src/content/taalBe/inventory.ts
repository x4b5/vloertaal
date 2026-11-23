/**
 * The inventory of the language track for Belgium (Vlaanderen), docs/taal-belgie.md: every unit,
 * lesson and tip of the Dutch course, with what changes in Belgium.
 *
 *   A  holds in Belgium too: nothing changes (the tips say "here", not "Dutch").
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
    'l.understand': L('A', 'A', 'de tip zegt "Supervisors here" (was "Dutch supervisors")'),
    'l.howto': L('A', 'A'),
    'l.mayask': L('A', 'A'),
    'l.whereis': L('A', 'A', 'nakijken door een Vlaamse NT2-docent: in Vlaanderen zegt men ook "de refter" (de kantine; de zin en de tip noemen de kantine)'),
  } },
  'u.do': { kind: 'A', lessons: {
    'l.putdown': L('A', 'A'),
    'l.onoff': L('A', 'A'),
    'l.fillempty': L('A', 'A', 'nakijken door een Vlaamse NT2-docent: "kuisen" naast "schoonmaken"'),
    'l.order': L('A', 'A'),
  } },
  'u.tools': { kind: 'B', lessons: {
    'l.translate': L('A', 'A'),
    'l.understood': L('A', 'A'),
    'l.keeplearning': L('B', 'B', 'het Taalhuis → het Huis van het Nederlands; NOS Jeugdjournaal → Karrewiet (VRT)'),
  } },
  // "Veiligheid" became "Veiligheid" (u.safety) and "Als het misgaat" (u.emergency) on 8 November 2026.
  'u.safety': { kind: 'A', lessons: {
    'l.gear': L('A', 'A'),
    'l.danger': L('A', 'A'),
    'l.notyet': L('A', 'A'),
  } },
  'u.emergency': { kind: 'B', lessons: {
    'l.alarm': L('A', 'A', 'geen BHV’er in de les of de tip; in Vlaanderen hoor je ook evacueren en de vluchtweg (nakijken door een Vlaamse NT2-docent)'),
    'l.accident': L('B', 'B', 'de BHV’er → de EHBO’er; Nederlandse Arbeidsinspectie → Toezicht op het Welzijn op het Werk; arbeidsongevallenverzekeraar'),
  } },
  'u.warehouse': { kind: 'B', lessons: {
    'l.things': L('A', 'B', 'tip "Direct is not rude": Vlaamse collega’s zijn vaak minder direct'),
    'l.directions': L('A', 'A'),
    'l.picking': L('A', 'A'),
    'l.loading': L('A', 'A', 'nakijken door een Vlaamse NT2-docent: in Vlaanderen zegt men vaak "de transpallet" (de pompwagen) en "de camion" (de vrachtwagen wordt begrepen)'),
  } },
  'u.data': { kind: 'B', lessons: {
    'l.counting': L('A', 'A', 'getallen zijn in Vlaanderen dezelfde'),
    'l.details': L('B', 'B', 'de Belastingdienst → FOD Financiën; BSN → rijksregisternummer; payslip → loonbrief'),
    'l.dates': L('A', 'A'),
  } },
  'u.time': { kind: 'B', lessons: {
    'l.shift': L('A', 'A'),
    'l.sick': L('A', 'B', 'vaak een ziektebriefje, soms vanaf de eerste dag (het arbeidsreglement zegt wanneer)'),
  } },
  'u.sounds': { kind: 'A', lessons: {
    // The sound cards of "Hoe zeg je het?" at the start (src/content/klankMond.ts) hold in Vlaanderen too: the same vowels.
    'l.shortlong': L('A', '-', 'klankkaarten a en aa: dezelfde klinkers'),
    'l.roundsounds': L('A', '-', 'klankkaarten uu en oe: dezelfde klinkers'),
    'l.pbgk': L('A', '-'),
  } },
  'u.teamwork': { kind: 'B', lessons: {
    'l.speakup': L('A', 'B', '"Dutch colleagues prefer to hear it directly": in Vlaanderen vaker voorzichtig'),
    'l.agree': L('A', 'A'),
    'l.task': L('A', 'B', '"In the Netherlands a supervisor …"'),
    'l.clear': L('A', 'A', 'de tip zegt "At work here" (niet "in the Netherlands"): eerst de kern geldt ook in Vlaanderen, al verpakt men het daar vaak wat voorzichtiger (nakijken door een Vlaamse NT2-docent)'),
    'l.newcolleague': L('A', 'A', 'inwerken en de kast zeg je in Vlaanderen ook; de tip noemt geen land (nakijken door een Vlaamse NT2-docent)'),
  } },
  // "Goed communiceren" (5 November 2026): no country in the lessons or the tips ("here", "the agency").
  'u.communicate': { kind: 'A', lessons: {
    'l.explain': L('A', 'A'),
    'l.listen': L('A', 'A', 'de tip zegt "in many countries" en "here", zonder land'),
    'l.calm': L('A', 'A', 'de tip verwijst naar de lessen over respect en grenzen (in België met de preventieadviseur)'),
    'l.talkintime': L('A', 'A', 'de tip zegt "your benefit" en "a notice period" zonder wet of land (in België: de werkloosheidsuitkering bij vrijwillig ontslag, RVA; de opzegtermijn), en eindigt op de slotregel die de Belgische cursus zelf wisselt; de vertrouwenspersoon bestaat in België ook (naast de preventieadviseur psychosociale aspecten)'),
    'l.reachable': L('A', 'A', 'de tip zegt "the agency" (geen uitzendbureau of interimkantoor); "appen" en "het beltegoed" zeg je in Vlaanderen ook, al hoor je ook "sms’en" en "belkrediet" (nakijken door een Vlaamse NT2-docent)'),
  } },
  // "Feedback en overleg" (5 November 2026): no tip names a country ("at work here"), no rule.
  'u.feedback': { kind: 'A', lessons: {
    'l.getfeedback': L('A', 'A', 'de tip zegt "At work here": feedback is goed bedoeld, ook in Vlaanderen, al klinkt die daar vaak voorzichtiger (zie Werkregels r.be.l.samen.1; nakijken door een Vlaamse NT2-docent)'),
    'l.givefeedback': L('A', 'A', 'dichtplakken, netjes en scheef zeg je in Vlaanderen ook (nakijken door een Vlaamse NT2-docent)'),
    'l.meeting': L('A', 'A', 'het werkoverleg kent men in Vlaanderen ook, vaker zegt men de (team)vergadering of het overleg (nakijken door een Vlaamse NT2-docent)'),
  } },
  'u.apply': { kind: 'A', lessons: {
    'l.cv': L('A', 'A', 'de tip zegt "A CV here" (was "A Dutch CV")'),
    'l.interview': L('A', 'A', 'de tip zegt "Employers here" (was "Dutch employers")'),
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
  'u.social': { kind: 'B', lessons: {
    'l.smalltalk': L('A', 'A'),
    'l.mistakes': L('A', 'A'),
    'l.respect': L('A', 'B', 'vertrouwenspersoon "if your company has one"; in België moet elke werkgever een preventieadviseur psychosociale aspecten hebben'),
    'l.gossip': L('A', 'A'),
    'l.boundaries': L('A', 'B', 'vertrouwenspersoon "if there is one" en HR; in België ook de preventieadviseur psychosociale aspecten (verplicht)'),
  } },
  'u.sayings': { kind: 'B', lessons: {
    'l.easy': L('A', 'A', 'de tip zegt "Here, people" (was "Dutch people")'),
    'l.plain': L('A', 'B', '"Dutch colleagues often say directly": Vlamingen zijn vaak minder direct'),
  } },
  'u.rights': { kind: 'B', lessons: {
    'l.health': L('C', 'C', 'Arbowet, Arbeidsinspectie, pauze na 5,5 uur → Welzijnswet, Arbeidswet, pauze na 6 uur, Toezicht op de Sociale Wetten'),
    'l.rights': L('B', 'C', 'het Juridisch Loket → het justitiehuis; ontslag via UWV, vaststellingsovereenkomst, FNV, WW → opzegtermijn, C4, ABVV/ACV/ACLVB'),
    'l.mustmay': L('A', 'A', 'moeten, niet hoeven, mogen: dezelfde taal in Vlaanderen'),
  } },
  // "Verlof en ziekte" became "Verlof" (u.leave) and "Ziekte" (u.sick) on 5 November 2026.
  'u.leave': { kind: 'B', lessons: {
    'l.leave': L('B', 'B', 'het calamiteitenverlof → het verlof om dwingende redenen (zonder loon)'),
    'l.kids': L('B', 'B', 'calamiteitenverlof; ouderschapsverlof en zorgverlof anders geregeld (RVA)'),
  } },
  'u.sick': { kind: 'B', lessons: {
    'l.illness': L('B', 'C', 'de bedrijfsarts → de arbeidsarts; 70% voor 2 jaar, wachtdag → gewaarborgd loon, dan het ziekenfonds'),
    'l.backtowork': L('B', 'C', 'de bedrijfsarts → de arbeidsarts (zin 3); Wet verbetering poortwachter → het re-integratietraject met de arbeidsarts; deeltijds werken met een uitkering: eerst het ziekenfonds vragen. "herstellen" is in Vlaanderen ook "repareren" (de vertaling zegt "recover"; nakijken door een Vlaamse NT2-docent)'),
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
    'l.feelwell': L('A', 'B', 'de tip: de bedrijfsarts → de arbeidsarts, ook de preventieadviseur psychosociale aspecten, 113 → 1813; de ploegendienst heet in Vlaanderen ook ploegenwerk (nakijken door een Vlaamse NT2-docent)'),
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
    'l.measure': L('A', 'A'),
    'l.siteday': L('A', 'A', 'nakijken door een Vlaamse NT2-docent: de uitvoerder heet in Vlaanderen vaak de werfleider, de bouwplaats de werf'),
  } },
  'u.factory': { kind: 'A', lessons: {
    'l.line': L('A', 'A'),
    'l.quality': L('A', 'A'),
    'l.food': L('A', 'A', 'de meldplicht bij ziekte of een wond komt uit de EU-hygiëneverordening (852/2004): ook in België'),
    'l.shifts': L('A', 'A', 'nakijken: in Vlaanderen zegt men vaak de vroege, de late en de nachtploeg'),
  } },
  'u.care': { kind: 'A', lessons: {
    'l.client': L('A', 'A'),
    'l.privacy': L('A', 'A'),
    'l.signals': L('A', 'A'),
    'l.transfer': L('A', 'A'),
  } },
  'u.horeca': { kind: 'A', lessons: {
    'l.kitchen': L('A', 'A', 'HACCP en de autocontrole gelden ook in België'),
    'l.service': L('A', 'A'),
    'l.dishes': L('A', 'A'),
    'l.rush': L('A', 'A'),
  } },
  'u.clean': { kind: 'A', lessons: {
    'l.cleaning': L('A', 'A'),
    'l.cleansafe': L('A', 'A'),
    'l.rounds': L('A', 'A'),
    'l.colours': L('A', 'A', 'nakijken: in Vlaanderen zegt men vaak de vod of de dweil voor de doek'),
  } },
  'u.shop': { kind: 'B', lessons: {
    'l.shelves': L('A', 'A'),
    'l.checkout': L('B', 'B', 'pinnen → met je kaart betalen; bier en wijn vanaf 16, sterke drank en tabak vanaf 18'),
    'l.shophelp': L('A', 'A', 'nakijken: de aanbieding heet in Vlaanderen vaak de promotie of de actie'),
    'l.shoptrouble': L('A', 'A', 'nakijken: de bedrijfsleider heet in Vlaanderen vaak de winkelverantwoordelijke of de gerant'),
  } },
  'u.numbers': { kind: 'A', lessons: {
    'l.hours': L('A', 'A'),
    'l.measures': L('A', 'A'),
    // Shapes, angles and sizes (20 November 2026): the same words in Belgium.
    'l.shapes': L('A', 'A'),
    'l.angles': L('A', 'A'),
    'l.size': L('A', 'A'),
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
    'l.plantcare': L('A', 'A'),
    'l.outdoors': L('A', 'A'),
  } },
  'u.finish': { kind: 'A', lessons: {
    'l.workorder': L('A', 'A'),
    'l.handover': L('A', 'A'),
  } },
  'u.tech': { kind: 'A', lessons: {
    'l.workshop': L('A', 'A', 'alleen de slotregel'),
    'l.power': L('A', 'A', 'alleen de slotregel'),
    'l.drawing': L('A', 'A'),
    'l.weld': L('A', 'A', 'alleen de slotregel'),
  } },
  'u.garage': { kind: 'A', lessons: {
    'l.garage': L('A', 'A'),
    'l.carjob': L('A', 'A', 'alleen de slotregel'),
    'l.carparts': L('A', 'A'),
    'l.carsafe': L('A', 'A', 'alleen de slotregel; de opleiding voor werk aan hoogspanning in een auto heet in België anders (geen norm in de tekst)'),
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
  'u.delivery': { kind: 'A', lessons: {
    'l.parcel': L('A', 'A', 'nakijken door een Vlaamse NT2-docent: in Vlaanderen zegt men vaak "de bestelwagen" (de bestelbus wordt begrepen)'),
    'l.road': L('A', 'A', 'de tip zegt "zelfstandig" en "in loondienst" (niet "zzp’er"); telefoon in de hand verboden ook in België (Wegverkeersreglement art. 8.4); alleen de slotregel; nakijken: in Vlaanderen vaak "de steekkar"'),
    'l.vancheck': L('A', 'A', 'alleen de slotregel; nakijken: in Vlaanderen vaak "de bestelwagen" en "de bluts" (de deuk wordt begrepen)'),
    'l.delay': L('A', 'A', 'telefoon in de hand verboden ook in België (Wegverkeersreglement art. 8.4); alleen de slotregel; nakijken: in Vlaanderen ook "de wegomlegging" (de omleiding) en "de gps" (de navigatie)'),
  } },
  // Tegels, stuc en verf (20 November 2026): how the work is done, the same in Belgium. The tips
  // name no rule, right or amount. Flemish words to check, by a Flemish NT2 teacher.
  'u.afbouw': { kind: 'A', lessons: {
    'l.tiletools': L('A', 'A', 'nakijken door een Vlaamse NT2-docent: de tegelzetter heet in Vlaanderen ook zo, de lijmkam wordt begrepen; de troffel heet vaak "het truweel", de duimstok vaak "de plooimeter"'),
    'l.tiling': L('A', 'A', 'nakijken: de tegel, de tegellijm en de hartlijn zijn hetzelfde; het tegelkruisje heet soms "het voegkruisje"'),
    'l.plaster': L('A', 'A', 'nakijken: stukadoren heet in Vlaanderen vaak "plafonneren" of "pleisteren" (de stukadoor: de plafonneerder); "stuc" in de titel wordt begrepen; het spackmes heet ook "het plamuurmes"'),
    'l.paint': L('A', 'A', 'nakijken: de kwast en het penseel zijn hetzelfde; het strijkvaatje wordt begrepen'),
    'l.prep': L('A', 'A', 'nakijken: het schuurpapier en schuren zijn hetzelfde; het plamuurmes heet ook "het spackmes"'),
  } },
  // Metselen, hout en vastmaken (20 November 2026): how the work is done, the same in Belgium. The
  // tips name no rule, right or amount. Flemish words to check.
  'u.ruwbouw': { kind: 'A', lessons: {
    'l.brick': L('A', 'A', 'nakijken: de metseltroffel heet in Vlaanderen vaak "het truweel"; ook het Vlaamse woord voor de speciekuip'),
    'l.wall': L('A', 'A', 'nakijken: de Vlaamse woorden voor het metseltouw, de klos en de lagenmaatlat'),
    'l.wood': L('A', 'A', 'nakijken: de Vlaamse woorden voor de kapzaag en de handschaaf'),
    'l.square': L('A', 'A', 'nakijken: de Vlaamse woorden voor de winkelhaak, de zwaaihaak en het kruishout'),
    'l.screw': L('A', 'A', 'nakijken: de Vlaamse woorden voor de accuboor en de plug'),
    'l.fix': L('A', 'A', 'nakijken: het Vlaamse woord voor de inbussleutel'),
  } },
  // Machines en gereedschap (21 November 2026): how the work is done, the same in Belgium. The
  // tips name no rule, right or amount. Flemish words to check.
  'u.machines': { kind: 'A', lessons: {
    'l.atmachine': L('A', 'A', 'nakijken: de Vlaamse woorden voor het bedieningspaneel en de afscherming ("de beveiliging"?)'),
    'l.inspect': L('A', 'A', 'nakijken: de meetklok en de afkeurbak; "het staal" voor het monster'),
    'l.packing': L('A', 'A', 'nakijken: het afbreekmes heet in Vlaanderen vaak "de cutter"; het tapepistool, de sealmachine'),
    'l.upkeep': L('A', 'A', 'nakijken: de steeksleutel, het smeerpistool ("het vetspuit"?), de poetsdoek ("de poetslap")'),
  } },
  // Elektra, leidingen en metaal (21 November 2026): how the work is done, the same in Belgium. The
  // tips name no rule, right or amount. Flemish words to check.
  'u.install': { kind: 'A', lessons: {
    'l.wiring': L('A', 'A', 'nakijken: het stopcontact heet in Vlaanderen ook "de stekkerdoos"/"het stopcontact"; de lasklem ("de Wago-klem"?), de kabelgoot'),
    'l.testing': L('A', 'A', 'nakijken: de meterkast heet in Vlaanderen "de zekeringkast" of "het verdeelbord"; de zekering, de spanningzoeker'),
    'l.pipes': L('A', 'A', 'nakijken: de afsluiter ("de stopkraan"), de waterpomptang ("de waterpomptang"/"de pijptang")'),
    'l.metalwork': L('A', 'A', 'nakijken: de kolomboormachine ("de kolomboor"), de draadtap'),
  } },
  // Assemblage en montage (21 November 2026): how the work is done, the same in Belgium. The tips
  // name no rule, right or amount. Flemish words to check.
  'u.montage': { kind: 'A', lessons: {
    'l.assembly': L('A', 'A', 'nakijken: de werkinstructie, de mal, de rolbaan ("de rollenbaan")'),
    'l.fastening': L('A', 'A', 'nakijken: de momentsleutel, de tie-wrap ("de kabelbinder", "de serre-câble"), de popnageltang ("de blindklinktang")'),
    'l.handling': L('A', 'A', 'nakijken: de takel, de tilhulp, de rolcontainer'),
    'l.finalcheck': L('A', 'A', 'nakijken: het typeplaatje ("het kenplaatje"), de goedkeursticker'),
  } },
  // Kweken, sorteren en de kas (22 November 2026): how the work is done, the same in Belgium. The
  // tips name no rule, right or amount. Flemish words to check.
  'u.kweek': { kind: 'A', lessons: {
    'l.sowing': L('A', 'A', 'nakijken: de zaaibak ("de zaaitray"), de stek, de potgrond'),
    'l.sorting': L('A', 'A', 'nakijken: de tros, het bakje ("het schaaltje"), het etiketpistool'),
    'l.greenhouse': L('A', 'A', 'nakijken: de buisrailkar, het luchtraam ("het luchtvenster"), het kasscherm'),
    'l.pests': L('A', 'A', 'nakijken: de vangplaat, de sluipwesp, de ontsmettingsmat'),
  } },
  // Banden, olie en remmen (22 November 2026): how the work is done, the same in Belgium. Flemish words to check.
  'u.carservice': { kind: 'A', lessons: {
    'l.tyres': L('A', 'A', 'nakijken: de wielbout, de slagmoersleutel, de velg'),
    'l.oilchange': L('A', 'A', 'nakijken: de oliepeilstok ("de peilstok"), de aftapplug ("de aftapbout")'),
    'l.brakes': L('A', 'A', 'nakijken: het remblok ("de remblok"), de remklauw, de achterlamp ("het achterlicht")'),
    'l.diagnosis': L('A', 'A', 'nakijken: de werkorder ("de werkfiche"), de kentekenplaat ("de nummerplaat"; in België wit met rode letters)'),
  } },
  // Maaien en snoeien and Planten, onkruid en de straat (Groen, 23 November 2026): how the work is
  // done, the same in Belgium. The tips name no rule, right, amount or Dutch body. Flemish words to check.
  'u.mowing': { kind: 'A', lessons: {
    'l.mowing': L('A', 'A', 'nakijken: de zitmaaier, de bosmaaier ("de bosmaaier" of "de kantenmaaier"), het gelaatsscherm ("het vizier")'),
    'l.pruning': L('A', 'A', 'nakijken: de snoeischaar, de snoeizaag'),
    'l.hedge': L('A', 'A', 'nakijken: de heggenschaar ("de haagschaar"), de heg ("de haag"), het snoeiafval ("het snoeisel")'),
    'l.chainsaw': L('A', 'A', 'nakijken: de zaagbroek ("de kettingzaagbroek"), de jerrycan ("de bidon")'),
  } },
  'u.planting': { kind: 'A', lessons: {
    'l.weeding': L('A', 'A', 'nakijken: de schoffel, het perk ("het bloemperk"), de onkruidbrander'),
    'l.planting': L('A', 'A', 'nakijken: de schep ("de spade"), de kluit, de boompaal'),
    'l.roadside': L('A', 'A', 'nakijken: de pion ("de kegel", "de verkeerskegel"), de stoep ("het voetpad"), de pijlwagen ("de pijlkar")'),
    'l.litter': L('A', 'A', 'nakijken: het zwerfafval ("het zwerfvuil"), de grijper ("de afvalgrijper"), de aanhanger ("de aanhangwagen")'),
  } },
  // Receptie, post en vergaderen and Storingen, onderhoud en verhuizen (Facilitair, 23 November
  // 2026): how the work is done, the same in Belgium. Flemish words to check.
  'u.frontdesk': { kind: 'A', lessons: {
    'l.reception': L('A', 'A', 'nakijken: de balie ("het onthaal"), de wachtruimte ("de wachtzaal"), het toestel ("het toestelnummer")'),
    'l.visitors': L('A', 'A', 'nakijken: het bezoekerspasje ("de bezoekersbadge"), de garderobe ("de vestiaire")'),
    'l.mailroom': L('A', 'A', 'nakijken: de postkamer, het postvak, de koerier'),
    'l.meetingroom': L('A', 'A', 'nakijken: de beamer ("de projector"), de vergaderzaal, de thermoskan'),
  } },
  'u.maintenance': { kind: 'A', lessons: {
    'l.faults': L('A', 'A', 'nakijken: de lekkage ("het lek"), de verwarming ("de chauffage"), de wc ("het toilet")'),
    'l.repairs': L('A', 'A', 'nakijken: de deurklink, de gereedschapskist ("de gereedschapskoffer"), de trap ("de ladder")'),
    'l.moving': L('A', 'A', 'nakijken: de plattegrond ("het grondplan"), de steekwagen ("de steekkar")'),
    'l.closing': L('A', 'A', 'nakijken: het nachtslot, de sleutelbos'),
  } },
  // Ronde en toegang and Noodgevallen en de winkel (Beveiliging, 23 November 2026): how the work is
  // done, the same in Belgium (112 too). The shop-theft tip names no law (holding a thief is a
  // house rule; never search, little force). Flemish words to check.
  'u.guarding': { kind: 'A', lessons: {
    'l.patrol': L('A', 'A', 'nakijken: surveilleren ("patrouilleren"), de zaklamp ("de zaklantaarn"), het hek ("de poort", "de omheining")'),
    'l.access': L('A', 'A', 'nakijken: de legitimatie ("de identiteitskaart"), het kenteken ("de nummerplaat")'),
    'l.cameras': L('A', 'A', 'nakijken: de meldkamer ("de meldkamer" of "de controlekamer"), het beeldscherm'),
    'l.report': L('A', 'A', 'nakijken: de portofoon ("de walkietalkie"), het rapport ("het verslag")'),
  } },
  'u.incidents': { kind: 'A', lessons: {
    'l.evacuation': L('A', 'A', 'nakijken: de brandmelder ("de brandmeldknop"), het ontruimingsplan ("het evacuatieplan"), de branddeur ("de brandwerende deur")'),
    'l.firstaid': L('A', 'A', 'nakijken: de EHBO ("de eerste hulp"), de AED (ook in België), 112 (ook in België)'),
    'l.shoplifting': L('A', 'A', 'nakijken: aanhouden ("vasthouden"), het detectiepoortje ("het detectiepoortje" of "de antidiefstalpoort")'),
    'l.aggression': L('A', 'A', 'nakijken: het huisverbod ("het winkelverbod"), schelden ("uitschelden")'),
  } },
  // Hygiëne en kou and De productielijn (Voedingsindustrie, 23 November 2026): how the work is done,
  // the same in Belgium (HACCP too). Flemish words to check.
  'u.foodhygiene': { kind: 'A', lessons: {
    'l.hygienelock': L('A', 'A', 'nakijken: de hygiënesluis, de laarzenwasser ("de laarzenwasmachine"), de werkjas ("de stofjas")'),
    'l.allergens': L('A', 'A', 'nakijken: de pinda ("de nootjes", "de aardnoot"), het allergeen'),
    'l.coldroom': L('A', 'A', 'nakijken: de koelketen, de thermokleding ("de koelcelkledij")'),
    'l.foreignbody': L('A', 'A', 'nakijken: de ploegleider ("de ploegbaas"), de glasbreuk'),
  } },
  'u.foodline': { kind: 'A', lessons: {
    'l.cutting': L('A', 'A', 'nakijken: uitbenen ("uitbeenen"), de portie, de snijplank'),
    'l.labels': L('A', 'A', 'nakijken: het lotnummer, de omdoos ("de buitendoos"), de schaal ("de schotel")'),
    'l.linecleaning': L('A', 'A', 'nakijken: de hogedrukspuit ("de hogedrukreiniger"), naspoelen'),
    'l.haccp': L('A', 'A', 'nakijken: de kwaliteitsdienst ("de kwaliteitsafdeling"), de prikthermometer ("de insteekthermometer")'),
  } },
  // Afval ophalen and De milieustraat (Afval en recycling, 23 November 2026): how the work is done,
  // the same in Belgium; the names of the bins and the sorting differ (PMD), so these are words to check.
  'u.collection': { kind: 'A', lessons: {
    'l.binlorry': L('A', 'A', 'nakijken: de vuilniswagen ("de vuilniskar"), de kliko ("de container", "de rolcontainer"), de bijplaatsing'),
    'l.reversing': L('A', 'A', 'nakijken: de aanwijzer ("de begeleider"), de dode hoek'),
    'l.wastesorting': L('A', 'A', 'nakijken: het gft ("het gft-afval"), het plastic ("de PMD-zak" in Vlaanderen), het restafval'),
    'l.wastesafety': L('A', 'A', 'nakijken: de tetanusprik ("de tetanusvaccinatie"), de snijwond'),
  } },
  'u.recycling': { kind: 'A', lessons: {
    'l.yard': L('A', 'A', 'nakijken: de milieustraat ("het recyclagepark", "het containerpark"), het grofvuil ("het grofhuisvuil"), de afvalpas'),
    'l.hazardous': L('A', 'A', 'nakijken: het chemisch afval ("het klein gevaarlijk afval", KGA), de spuitbus'),
    'l.baler': L('A', 'A', 'nakijken: de balenpers, het binddraad ("de binddraad")'),
    'l.shovel': L('A', 'A', 'nakijken: de shovel ("de wiellader"), de bunker ("het vak", "de box")'),
  } },
  // De kinderen and Ouders, veiligheid en de groep (Kinderopvang, 23 November 2026): how the work is
  // done; the tips name no law (the four-eyes rule as a house rule). Flemish words to check.
  'u.toddlers': { kind: 'A', lessons: {
    'l.nappies': L('A', 'A', 'nakijken: de luier ("de pamper"), de commode ("de verzorgingstafel"), de billendoekjes'),
    'l.mealtime': L('A', 'A', 'nakijken: het slabbetje ("de slab"), de fruithap ("de fruitpap")'),
    'l.naptime': L('A', 'A', 'nakijken: de speen ("de fopspeen", "de tutter"), de babyfoon'),
    'l.playtime': L('A', 'A', 'nakijken: de zandbak, de glijbaan ("de schuifaf")'),
  } },
  'u.daycare': { kind: 'A', lessons: {
    'l.pickup': L('A', 'A', 'nakijken: het schriftje ("het heen-en-weerschriftje"), de oppas ("de babysit")'),
    'l.childsafety': L('A', 'A', 'nakijken: het traphekje ("het traphekje" of "het veiligheidshekje"), de bult ("de buil")'),
    'l.sickchild': L('A', 'A', 'nakijken: de adrenalinepen, temperaturen ("de temperatuur nemen")'),
    'l.grouprules': L('A', 'A', 'nakijken: de pedagogisch medewerker ("de kinderbegeleider"), het vierogenprincipe, de mentor'),
  } },
};

/** The units of the inventory that need a Belgian version (B or C). */
export const BE_TAAL_UNITS: string[] = Object.entries(TAAL_BE_INVENTORY).filter(([, u]) => u.kind !== 'A').map(([id]) => id);
