import type { CultureTip } from '../culture';
import type { ChatLine, Dialogue, Unit } from '../types';
import { ADVICE_LINE } from '../adviceLine';
import { zlMeta } from './meta';
import type { Region, SocialMapEntry } from './types';

/**
 * Zuid-Limburg (docs/regio-zuid-limburg.md): the language track's unit "Jouw regio: Zuid-Limburg"
 * (2 lessons, in the shape of src/content/work.ts), its two "Zo werkt het hier" tips, and the
 * Sociale kaart. The work-rules unit "Leven in Zuid-Limburg" is Dutch-only content and lives in
 * ./zuid-limburg-regels.ts. Both come in the region's own file (./zuid-limburg-pack.ts), loaded
 * only for a learner who chose the region: never in the main bundle or a language's file.
 *
 * Plain standard Dutch, short sentences, no dialect: the voice only reads standard Dutch. Word
 * ids are the region's own (rg.zl.w.*): w.grens already means "the limit" (u.social) and
 * w.gemeente, w.inschrijven, w.bus, w.trein and w.huisartsenpost are in the course already.
 * Every id is also a translation key in src/i18n/regio/<lang>.ts.
 *
 * `// ⚖️ check:` marks a fact the expert must check before the region goes live (docs/livegang.md,
 * and section 7 of the doc). The marker is never shown or read aloud.
 */

const line = (id: string, nl: string, en: string): ChatLine => ({ id, nl, en });
const chat = (prompt: ChatLine, reply: ChatLine): Dialogue => ({ prompt, reply });
/** A tip with its closing line (as in src/content/work.ts): ADVICE_LINE, or '' for social norms. */
const tip = (t: CultureTip, end = ADVICE_LINE): CultureTip => ({ ...t, body: end ? `${t.body} ${end}` : t.body });
const NONE = '';

export const zlTaalUnit: Unit = {
  id: 'rg.zl.u',
  title: 'Your region: South Limburg',
  titleNl: 'Jouw regio: Zuid-Limburg',
  emoji: '🏞️',
  color: '#b5651d',
  lessons: [
    {
      id: 'rg.zl.l.1',
      title: 'The town hall and your home',
      words: [
        { id: 'rg.zl.w.gemeentehuis', nl: 'het gemeentehuis', en: 'the town hall (the building)', emoji: '🏛️' },
        { id: 'rg.zl.w.loket', nl: 'het loket', en: 'the service desk, the counter', emoji: '🪟' },
        { id: 'rg.zl.w.verhuizing', nl: 'de verhuizing', en: 'the move (to a new home)', emoji: '📦' },
        { id: 'rg.zl.w.woningcorporatie', nl: 'de woningcorporatie', en: 'the housing association (social rent)', emoji: '🏘️' },
        { id: 'rg.zl.w.wachtlijst', nl: 'de wachtlijst', en: 'the waiting list', emoji: '📋', picture: false },
        { id: 'rg.zl.w.buurt', nl: 'de buurt', en: 'the neighbourhood', emoji: '🏡' },
      ],
      sentences: [
        { id: 'rg.zl.s.1.1', nl: 'Ik wil me inschrijven bij de gemeente.', en: 'I want to register at the town hall.' },
        { id: 'rg.zl.s.1.2', nl: 'Ik heb om tien uur een afspraak.', en: 'I have an appointment at ten o’clock.' },
        { id: 'rg.zl.s.1.3', nl: 'Ik sta op de wachtlijst voor een huis.', en: 'I am on the waiting list for a house.' },
      ],
      dialogues: [
        chat(
          line('rg.zl.c.1.q', 'Waar woon je?', 'Where do you live?'),
          // "Heerlen" is said HEER-len: listen to the recording once more (docs, section 4).
          line('rg.zl.c.1.a', 'In Heerlen. Ik ben net verhuisd.', 'In Heerlen. I have just moved.'),
        ),
      ],
    },
    {
      id: 'rg.zl.l.2',
      title: 'The border, carnival and dialect',
      words: [
        // Not w.grens: that id is "the limit" (u.social). The same Dutch word, another meaning;
        // the two are in different units, so they never meet in one exercise.
        { id: 'rg.zl.w.grens', nl: 'de grens', en: 'the border (between two countries)', emoji: '🛂' },
        { id: 'rg.zl.w.buitenland', nl: 'het buitenland', en: 'abroad, another country', emoji: '🌍', picture: false },
        // "het carnaval" (also "de carnaval"; both are right, Van Dale ⚖️): the standard form.
        { id: 'rg.zl.w.carnaval', nl: 'het carnaval', en: 'carnival (a big street party in February or March)', emoji: '🎭' },
        { id: 'rg.zl.w.dialect', nl: 'het dialect', en: 'the dialect (the local way of speaking)', emoji: '🗣️', picture: false },
        { id: 'rg.zl.w.verstaan', nl: 'verstaan', en: 'to understand (what someone says)', emoji: '👂', picture: false },
        { id: 'rg.zl.w.langzaam', nl: 'langzaam', en: 'slowly', emoji: '🐢', picture: false },
      ],
      sentences: [
        { id: 'rg.zl.s.2.1', nl: 'Ik woon in Nederland en werk in Duitsland.', en: 'I live in the Netherlands and work in Germany.' },
        // "u" on purpose: to someone you do not know, or a supervisor. The chat below says "je".
        { id: 'rg.zl.s.2.2', nl: 'Kunt u Nederlands praten? Ik versta geen dialect.', en: 'Can you speak Dutch? I do not understand the dialect.' },
        { id: 'rg.zl.s.2.3', nl: 'Mag ik met carnaval vrij?', en: 'May I have time off for carnival?' },
      ],
      dialogues: [
        chat(
          line('rg.zl.c.2.q', 'Sorry, ik praat te snel.', 'Sorry, I am talking too fast.'),
          line('rg.zl.c.2.a', 'Ja, wat langzamer graag.', 'Yes, a bit slower, please.'),
        ),
      ],
    },
  ],
};

/** One "Zo werkt het hier" tip per lesson (the same shape as the tips in src/content/work.ts). */
export const zlTaalTips: CultureTip[] = [
  // ⚖️ check: within 5 days (Wet BRP), by appointment, passport or ID and the rental contract (doc 7.9, 7.10).
  // ⚖️ check: thuisinlimburg.nl, free, renew every year (doc 7.11).
  tip({
    id: 'rg.zl.c.1',
    lessonId: 'rg.zl.l.1',
    emoji: '🏛️',
    title: 'Register your address, and look for a home',
    body: 'When you move, tell your new gemeente (town hall) within 5 days. Most gemeenten work by appointment: look on their website first. If you come from abroad, go there in person with your passport or ID and your rental contract. For social rent, register for free on thuisinlimburg.nl and renew it every year. Never pay money for a house you have not seen.',
    phrase: { id: 'rg.zl.c.1.p', nl: 'Kan ik een afspraak maken?', en: 'Can I make an appointment?' },
    situation: { id: 'rg.zl.c.1.s', en: 'You moved to Maastricht last week. Your post still goes to your old address. What do you do?' },
    options: [
      { id: 'rg.zl.c.1.o1', en: 'Register your new address with the gemeente of Maastricht now.', best: true },
      { id: 'rg.zl.c.1.o2', en: 'Wait. The gemeente will find out by itself.', best: false },
      { id: 'rg.zl.c.1.o3', en: 'Only tell your employer your new address.', best: false },
    ],
    why: { id: 'rg.zl.c.1.w', en: 'You must tell your new gemeente yourself, within 5 days. Your address is needed for your post, your pay, your health insurance and benefits.' },
  }),
  // Carnival and dialect are unwritten rules: no closing advice line. The part about the border
  // already sends the learner to the GrensInfoPunt.
  // ⚖️ check: carnival is not an official holiday (doc 7.25); the GrensInfoPunt gives free advice (doc 7.13).
  tip({
    id: 'rg.zl.c.2',
    lessonId: 'rg.zl.l.2',
    emoji: '🎭',
    title: 'Carnival, dialect and the border',
    body: 'Carnival (in Limburg also "vastelaovend") moves every year, to February or March. It is not an official holiday: ask for days off early. Many people speak Limburgish dialect at work. It is normal not to understand it. Ask kindly: "Kunt u Nederlands praten?" Some colleagues speak German or French. Do you live in one country and work in another? Before you sign, ask the GrensInfoPunt for free advice about tax, insurance and benefits.',
    phrase: { id: 'rg.zl.c.2.p', nl: 'Wil je het in het Nederlands zeggen?', en: 'Will you say it in Dutch?' },
    situation: { id: 'rg.zl.c.2.s', en: 'A colleague explains a task in dialect. You do not understand it. What do you do?' },
    options: [
      { id: 'rg.zl.c.2.o1', en: 'Ask kindly if they can say it in Dutch.', best: true },
      { id: 'rg.zl.c.2.o2', en: 'Nod and just guess what to do.', best: false },
      { id: 'rg.zl.c.2.o3', en: 'Tell them that dialect is rude.', best: false },
    ],
    why: { id: 'rg.zl.c.2.w', en: 'For many people dialect is their own language, not rudeness. Most colleagues are happy to switch to Dutch. Guessing can lead to mistakes, and with safety you must always understand.' },
    // In a lesson: the sentences about dialect (the situation is about them), not carnival first.
    lead: [2, 3, 4],
  }, NONE),
];

/**
 * When the Sociale kaart was last checked as a whole: the oldest `checked` of its rows. Every row
 * was found in search results on 15 October 2026; none was read on its own site yet, so every row
 * is `source: 'other'` (doc, section 7: "Open elke site één keer zelf"). A row may only go live
 * as 'official' (tests/regio.test.ts, REGIONS_LIVE).
 *
 * Second round, 16 October 2026 (docs/regio-controle.md): every row was searched again, this time
 * only in the search index of the organisation's own domain. The official sites themselves could
 * still not be opened from here (the network refused every host), so no row became 'official' and
 * `checked` stays C. Where the own domain clearly said something else, the row was corrected; the
 * comment "16-10: …" says what the search result of which site showed. A person must still open
 * each site once and then set `source: 'official'` with that day's date.
 *
 * Rules for a row (doc, section 5): a number only when it is national (0800, 088, 112) or 14 + the
 * area code of the gemeente; no guessed web address (Impuls has none until it is checked: the row
 * then has no tap); no commercial brands, agencies by name or loose addresses.
 */
const C = '2026-10-15';

export const zlSocialMap: SocialMapEntry[] = [
  // ---- Gemeente ----
  // ⚖️ check: the desk names ("GemeenteLoket" in Mosae Forum, Stadskantoor, Burgerplein, Stadswinkel) and 14 + area code (doc 7.9).
  {
    // 16-10: gemeentemaastricht.nl/en/contact-and-opening-hours (search result): Mosae Forum, 14 043, an
    //   appointment for almost everything; picking up a passport or id-card needs none ("Altijd" was too strong).
    id: 'rg.zl.k.maastricht', category: 'gemeente', emoji: '🏛️',
    name: 'Gemeente Maastricht: GemeenteLoket (Mosae Forum)',
    when: 'Inschrijven, verhuizen, paspoort of id-kaart. Op afspraak.',
    url: 'https://www.gemeentemaastricht.nl', tel: '14 043', area: ['mh'], checked: C, source: 'other',
  },
  {
    // 16-10: heerlen.nl/contact and /openingstijden-stadskantoor (search result): Stadskantoor, 14045, op afspraak.
    id: 'rg.zl.k.heerlen', category: 'gemeente', emoji: '🏛️',
    name: 'Gemeente Heerlen: Stadskantoor',
    when: 'Inschrijven, verhuizen, paspoort. Op afspraak.',
    url: 'https://www.heerlen.nl', tel: '14 045', area: ['parkstad'], checked: C, source: 'other',
  },
  {
    // 16-10: kerkrade.nl/contact (search result): Burgerplein in the Stadskantoor, only by appointment, 14 045.
    id: 'rg.zl.k.kerkrade', category: 'gemeente', emoji: '🏛️',
    name: 'Gemeente Kerkrade: Burgerplein',
    when: 'Inschrijven, verhuizen, paspoort. Op afspraak.',
    url: 'https://www.kerkrade.nl', tel: '14 045', area: ['parkstad'], checked: C, source: 'other',
  },
  {
    // 16-10: sittard-geleen.nl/adressen-en-openingstijden and /contact (search result): 14 046; the Stadswinkel
    //   in Geleen, only by appointment (since 29-06-2026 in a temporary building, until 2028). No public desk
    //   "Stadskantoor Sittard" was found (only as a place to marry), so it is no longer in the name.
    id: 'rg.zl.k.sittardgeleen', category: 'gemeente', emoji: '🏛️',
    name: 'Gemeente Sittard-Geleen: Stadswinkel Geleen',
    when: 'Inschrijven, verhuizen, paspoort. Op afspraak.',
    url: 'https://www.sittard-geleen.nl', tel: '14 046', area: ['wm'], checked: C, source: 'other',
  },
  {
    // ⚖️ check: not checked per gemeente.
    id: 'rg.zl.k.gemeenten', category: 'gemeente', emoji: '🏘️',
    name: 'Andere gemeenten (Valkenburg, Vaals, Landgraaf, Beek, …)',
    when: 'Inschrijven, verhuizen, paspoort: kijk op de site van je eigen gemeente.',
    area: ['mh', 'parkstad', 'wm'], checked: C, source: 'other',
  },
  // ---- Juridisch advies ----
  // Not listed: "Juridisch Loket Heerlen, Huis van het Recht" (doc 7.14). 16-10: juridischloket.nl/contact/heerlen
  //   (search result) still shows an office on the Maanplein with walk-in hours, and servicepunten in Kerkrade and
  //   Sittard. ⚖️ check: open the page; then it can get its own row.
  {
    // 16-10: juridischloket.nl/contact and /actueel/0800-8020 (search result): 0800-8020, free, Mon-Fri 9-17.
    //   Personal advice only below the income limit (Wrb): the second sentence was added.
    id: 'rg.zl.k.juridischloket', category: 'juridisch', emoji: '⚖️',
    name: 'Het Juridisch Loket',
    when: 'Gratis informatie over je contract, je loon, ontslag, huur of schulden. Heb je een laag inkomen? Dan krijg je ook persoonlijk advies.',
    url: 'https://www.juridischloket.nl', tel: '0800-8020', area: ['all'], checked: C, source: 'other',
  },
  // ---- Werk ----
  {
    // 16-10: werk.nl (search result): inschrijven als werkzoekende, vacatures; WW itself is applied for in Mijn UWV.
    id: 'rg.zl.k.uwv', category: 'werk', emoji: '📄',
    name: 'UWV en werk.nl',
    when: 'Werk kwijt, WW, inschrijven als werkzoekende, vacatures.',
    url: 'https://www.werk.nl', area: ['all'], checked: C, source: 'other',
  },
  {
    // The name was confirmed by the owner (15-10-2026). 16-10: werkcentrumzuidlimburg.nl (search result): free
    //   appointments with a "gids" about work, solliciteren and opleiding; walk-in in Maastricht (Wilhelminasingel).
    id: 'rg.zl.k.werkcentrum', category: 'werk', emoji: '🧭',
    name: 'Werkcentrum Zuid-Limburg',
    when: 'Je zoekt werk: hulp bij werk zoeken, solliciteren en een opleiding.',
    url: 'https://www.werkcentrumzuidlimburg.nl', area: ['all'], checked: C, source: 'other',
  },
  {
    // 16-10: zuid-limburg.werkgeversanno.nu/over-werkgeversservicepunt (search result): UWV, gemeenten and
    //   SW-bedrijven; "hét aanspreekpunt voor werkgevers" in all 16 gemeenten. It is for employers, so the line
    //   now sends a job seeker to the Werkcentrum.
    id: 'rg.zl.k.wsp', category: 'werk', emoji: '🤝',
    name: 'Werkgeversservicepunt (WSP) Zuid-Limburg',
    when: 'Voor werkgevers: UWV, gemeenten en sociale werkbedrijven samen. Zoek je zelf werk? Ga naar het Werkcentrum.',
    url: 'https://zuid-limburg.werkgeversanno.nu', area: ['all'], checked: C, source: 'other',
  },
  {
    // 16-10: socialezaken-mh.nl/werk-vinden and sdg.government.nl (search result): help with work for people in
    //   Maastricht, Meerssen, Vaals, Valkenburg and Gulpen-Wittem; the site links to Podium24. Eijsden-Margraten
    //   has its own Sociale zaken. ⚖️ check: the new "sociaal ontwikkelbedrijf" (Annex, MTB, Podium24; doc 7.6).
    id: 'rg.zl.k.werkmh', category: 'werk', emoji: '💼',
    name: 'Sociale Zaken Maastricht Heuvelland',
    when: 'Je zoekt werk en je hebt een uitkering van de gemeente. Voor Maastricht, Meerssen, Vaals, Valkenburg en Gulpen-Wittem.',
    url: 'https://www.socialezaken-mh.nl', area: ['mh'], checked: C, source: 'other',
  },
  {
    // ⚖️ check: who does it now (the regulation ended on 15-06-2024, doc 7.7). 16-10: wspparkstad.nl (search
    //   result) is active: people with bijstand are guided to paid work, for the Parkstad gemeenten. WerkvoorHeerlen
    //   is only in a letter of the gemeente Heerlen (April 2024), its own site was not found.
    id: 'rg.zl.k.wspparkstad', category: 'werk', emoji: '💼',
    name: 'WSP Parkstad en WerkvoorHeerlen',
    when: 'Je zoekt werk vanuit de bijstand in Parkstad.',
    url: 'https://www.wspparkstad.nl', area: ['parkstad'], checked: C, source: 'other',
  },
  {
    // 16-10: vidar.nl (search result): work and income for Sittard-Geleen, Stein and Beek. WSP Westelijke Mijnstreek not checked.
    id: 'rg.zl.k.werkwm', category: 'werk', emoji: '💼',
    name: 'Vidar en WSP Westelijke Mijnstreek',
    when: 'Werk en inkomen in Sittard-Geleen, Beek en Stein.',
    url: 'https://www.vidar.nl', area: ['wm'], checked: C, source: 'other',
  },
  // ---- Bijstand ----
  {
    // 16-10 (doc 7.8): socialezaken-mh.nl/bijstand-uitkering (search result): five gemeenten, via werk.nl with DigiD.
    //   eijsden-margraten.nl (search result): Eijsden-Margraten has its own "Sociale zaken Eijsden-Margraten" (SEM),
    //   so the line now names the five and sends Eijsden-Margraten to its own gemeente.
    id: 'rg.zl.k.bijstandmh', category: 'bijstand', emoji: '🪙',
    name: 'Sociale Zaken Maastricht Heuvelland',
    when: 'Je hebt te weinig geld om van te leven. Voor Maastricht, Meerssen, Vaals, Valkenburg en Gulpen-Wittem. Je vraagt bijstand aan via werk.nl, met DigiD. Woon je in Eijsden-Margraten? Vraag het bij je eigen gemeente.',
    url: 'https://www.socialezaken-mh.nl', area: ['mh'], checked: C, source: 'other',
  },
  {
    // 16-10: heerlen.nl/bijstandsuitkering-aanvragen (search result): first werk.nl, then online, with a phone talk.
    //   No help desk for bijstand on the Maanplein was found, so the line stays general.
    id: 'rg.zl.k.bijstandheerlen', category: 'bijstand', emoji: '🪙',
    name: 'Gemeente Heerlen: werk en inkomen',
    when: 'Bijstand aanvragen. Lukt het online niet? Vraag om hulp bij de gemeente.',
    url: 'https://www.heerlen.nl', tel: '14 045', area: ['parkstad'], checked: C, source: 'other',
  },
  {
    // 16-10: vidar.nl/onderwerpen/regelen/uitkeringen/bijstandsuitkering-aanvragen (search result).
    id: 'rg.zl.k.bijstandwm', category: 'bijstand', emoji: '🪙',
    name: 'Vidar',
    when: 'Bijstand in Sittard-Geleen, Beek en Stein.',
    url: 'https://www.vidar.nl', area: ['wm'], checked: C, source: 'other',
  },
  {
    id: 'rg.zl.k.bijstandgemeenten', category: 'bijstand', emoji: '🏘️',
    name: 'Andere gemeenten',
    when: 'Kerkrade, Landgraaf, Brunssum en andere: vraag het bij je eigen gemeente.',
    area: ['parkstad'], checked: C, source: 'other',
  },
  // ---- Uitzendbureaus ----
  {
    // ⚖️ check: from 2027 the public register of admitted agencies (Wtta, doc 7.16). 16-10: normeringarbeid.nl
    //   (search result): the SNA-keurmerk and its public register are there.
    id: 'rg.zl.k.keurmerk', category: 'uitzend', emoji: '🏢',
    name: 'Een uitzendbureau met een keurmerk',
    when: 'Kies een bureau met een keurmerk: SNA, of lid van ABU of NBBU. Voor werk betaal je nooit.',
    url: 'https://www.normeringarbeid.nl', area: ['all'], checked: C, source: 'other',
  },
  // ---- Buurt en welzijn ----
  {
    // 16-10 (doc 7.18): trajekt.nl (search result): "de" welfare organisation of Maastricht and the Heuvelland;
    //   social workers in the neighbourhood, walk in without an appointment. ⚖️ check: who does the wijkteams.
    id: 'rg.zl.k.trajekt', category: 'buurt', emoji: '🏡',
    name: 'Trajekt',
    when: 'Welzijnswerk in Maastricht en het Heuvelland. Hulp in je wijk als je niet weet waar je heen moet.',
    url: 'https://www.trajekt.nl', area: ['mh'], checked: C, source: 'other',
  },
  {
    // Since 1 May 2024 ⚖️, carried out by Stichting Incluzio (doc 7.5). 16-10: en.heerlen.nl/buurtteam.html (search
    //   result) gives Incluzio and its own number 088-298 6395 (weekdays 9-17). ⚖️ check: put that number in the row
    //   once it is read on the page (it is national, so it fits the rule).
    id: 'rg.zl.k.buurtteamsheerlen', category: 'buurt', emoji: '🏡',
    name: 'Buurtteams Heerlen',
    when: 'Hulp in je buurt in Heerlen: bij zorg, geld, opvoeding of eenzaamheid. Bel en vraag naar je buurtteam.',
    url: 'https://www.heerlen.nl', tel: '14 045', area: ['parkstad'], checked: C, source: 'other',
  },
  {
    // ⚖️ check: does Alcander still do the welfare work after 2026 (doc 7.5)? 16-10: alcander.nl (search result):
    //   "brede welzijnsorganisatie voor de gemeente Heerlen". Nuth and Voerendaal were not found: taken out.
    id: 'rg.zl.k.alcander', category: 'buurt', emoji: '🤝',
    name: 'Alcander',
    when: 'Welzijnswerk en buurtcentra in Heerlen. Activiteiten, vrijwilligers, een maatje.',
    url: 'https://www.alcander.nl', area: ['parkstad'], checked: C, source: 'other',
  },
  {
    // No web address: impulskerkrade.nl is only in a Stadsjournaal of Kerkrade from 2020 (doc 7.17). ⚖️ check
    // 16-10: no source for Simpelveld was found: taken out.
    id: 'rg.zl.k.impuls', category: 'buurt', emoji: '🤝',
    name: 'Impuls',
    when: 'Welzijnswerk in Kerkrade.',
    area: ['parkstad'], checked: C, source: 'other',
  },
  {
    // ⚖️ check: the organisation was not found (doc 7.17). 16-10: still not found (Partners in Welzijn: only data of 2019).
    id: 'rg.zl.k.welzijnwm', category: 'buurt', emoji: '🏡',
    name: 'Westelijke Mijnstreek',
    when: 'Vraag bij de gemeente naar het sociaal team of het welzijnswerk in je wijk.',
    url: 'https://www.sittard-geleen.nl', tel: '14 046', area: ['wm'], checked: C, source: 'other',
  },
  // ---- Schulden ----
  {
    // ⚖️ check: "gratis" (Wet gemeentelijke schuldhulpverlening; doc 7.26). 16-10: rijksoverheid.nl, "Wat doet de
    //   gemeente om mij te helpen bij schulden?" (search result): "Voor gratis advies en hulp … gaat u naar uw gemeente."
    id: 'rg.zl.k.schuldhulp', category: 'schulden', emoji: '🏛️',
    name: 'Je gemeente',
    when: 'Je kunt je rekeningen niet meer betalen. De gemeente moet je helpen. Dat is gratis.',
    area: ['all'], checked: C, source: 'other',
  },
  {
    // Not in the row: a regional number (doc 7.19). 16-10: kredietbanklimburg.nl (search result): schuldhulp and
    //   budgetbeheer for the gemeenten, inloopspreekuren; the numbers on its pages differ (045-560 5705, 088-101 99 99).
    id: 'rg.zl.k.kredietbank', category: 'schulden', emoji: '💶',
    name: 'Kredietbank Limburg',
    when: 'Hulp bij schulden en budgetbeheer, voor de gemeente. Er zijn inloopspreekuren.',
    url: 'https://www.kredietbanklimburg.nl', area: ['all'], checked: C, source: 'other',
  },
  {
    // 16-10: geldfit.nl (search result): 0800-8115, free and anonymous, also WhatsApp and chat.
    id: 'rg.zl.k.geldfit', category: 'schulden', emoji: '💶',
    name: 'Geldfit',
    when: 'Je weet niet zeker of je geldzorgen hebt. Gratis en anoniem.',
    url: 'https://www.geldfit.nl', tel: '0800-8115', area: ['all'], checked: C, source: 'other',
  },
  {
    // 16-10: humanitas.nl/afdeling/maastricht-heuvelland, /parkstad, /westelijke-mijnstreek (search result):
    //   Thuisadministratie in all three areas.
    id: 'rg.zl.k.humanitas', category: 'schulden', emoji: '📬',
    name: 'Humanitas: thuisadministratie',
    when: 'Een vrijwilliger helpt je met je post en je geld.',
    url: 'https://www.humanitas.nl', area: ['mh', 'parkstad', 'wm'], checked: C, source: 'other',
  },
  // ---- Taal leren ----
  {
    // 16-10 (doc 7.20): bibliotheek.centreceramique.nl/nederlandsleren (search result): free help with Dutch and the
    //   computer at the "digiTAALpunt+" (not called Taalhuis), a weekly taalcafé, no library card needed.
    id: 'rg.zl.k.centreceramique', category: 'taal', emoji: '📚',
    name: 'Centre Céramique: bibliotheek Maastricht',
    when: 'Gratis hulp bij Nederlands en de computer. Vraag naar het digiTAALpunt. Er is ook een taalcafé.',
    url: 'https://www.centreceramique.nl', area: ['mh'], checked: C, source: 'other',
  },
  {
    // 16-10: schunck.nl/bibliotheek/leren-en-ontwikkelen/taalhuis (search result): Taalhuis, free taalcafés.
    id: 'rg.zl.k.schunck', category: 'taal', emoji: '📚',
    name: 'SCHUNCK: bibliotheek en Taalhuis Heerlen',
    when: 'Gratis hulp bij Nederlands, lezen en de computer.',
    url: 'https://www.schunck.nl', area: ['parkstad'], checked: C, source: 'other',
  },
  {
    // 16-10 (doc 7.20): dedomijnen.nl is the own site (search result, "De Domijnen - Dé culturele instelling in
    //   Sittard-Geleen"), so the row has a web address now. Its Taalhuis is in Bibliotheek Ligne in Sittard,
    //   with a taalcafé on Thursday morning.
    id: 'rg.zl.k.domijnen', category: 'taal', emoji: '📚',
    name: 'De Domijnen: bibliotheek Sittard en Geleen',
    when: 'Bibliotheek in Sittard, Geleen, Born, Beek en Stein. Hulp bij Nederlands: het Taalhuis in de bibliotheek in Sittard.',
    url: 'https://www.dedomijnen.nl', area: ['wm'], checked: C, source: 'other',
  },
  // ---- Zorg ----
  {
    id: 'rg.zl.k.112', category: 'zorg', emoji: '🚨',
    name: '112',
    when: 'Levensgevaar, brand, of een misdrijf dat nu gebeurt.',
    tel: '112', area: ['all'], checked: C, source: 'other',
  },
  // The huisartsenposten: no regional number until it is checked (doc 7.3, owner's answer 4). 16-10: each post has
  // its own site (search results), now the row's web address, so the tap goes to the page with the number:
  // hapmaastricht.nl (043-750 0123, also on mumc.nl/contact-verwijzer; 043-387 7777 is older), huisartsenspoedpost-
  // ozl.nl (045-577 8844), spoedzorgmeditta.nl (Geleen, 046-400 99 25). ⚖️ check: open them and read the numbers.
  {
    id: 'rg.zl.k.hapmaastricht', category: 'zorg', emoji: '🏥',
    name: 'Huisartsenspoedpost Maastricht en Heuvelland (bij het MUMC+)',
    when: 'Je huisarts is dicht en het kan niet wachten. Bel eerst. Het nummer staat op de site.',
    url: 'https://hapmaastricht.nl', area: ['mh'], checked: C, source: 'other',
  },
  {
    // 16-10: huisartsenspoedpost-ozl.nl (search result): on the Spoedplein of Zuyderland, Heerlen.
    id: 'rg.zl.k.hapheerlen', category: 'zorg', emoji: '🏥',
    name: 'Huisartsenspoedpost Oostelijk Zuid-Limburg (bij Zuyderland Heerlen)',
    when: 'Je huisarts is dicht en het kan niet wachten. Bel eerst.',
    url: 'https://huisartsenspoedpost-ozl.nl', area: ['parkstad'], checked: C, source: 'other',
  },
  {
    // ⚖️ check: is the post in Geleen still open (the SEH there closed; doc 7.3)? 16-10: zuyderland.nl/spoedzorg and
    //   spoedzorgmeditta.nl (search result): yes, "Spoedpost Westelijke Mijnstreek", Demystraat in Geleen, on
    //   appointment after a call. ⚖️ check: is that on the Zuyderland site ("bij Zuyderland Geleen")?
    id: 'rg.zl.k.hapgeleen', category: 'zorg', emoji: '🏥',
    name: 'Huisartsenspoedpost Westelijke Mijnstreek (bij Zuyderland Geleen)',
    when: 'Je huisarts is dicht en het kan niet wachten. Bel eerst de post van je eigen streek.',
    url: 'https://spoedzorgmeditta.nl', area: ['wm'], checked: C, source: 'other',
  },
  {
    // 16-10: mumc.nl (search result): the academic hospital; outpatient clinics need a referral.
    id: 'rg.zl.k.mumc', category: 'zorg', emoji: '🏥',
    name: 'MUMC+ (Maastricht UMC+)',
    when: 'Het ziekenhuis van de universiteit in Maastricht. Meestal ga je erheen met een verwijzing.',
    url: 'https://www.mumc.nl', area: ['mh'], checked: C, source: 'other',
  },
  {
    // 16-10: zuyderland.nl/contact (search result): 088 459 77 77 for both sites, Heerlen and Sittard-Geleen.
    id: 'rg.zl.k.zuyderland', category: 'zorg', emoji: '🏥',
    name: 'Zuyderland Medisch Centrum (Heerlen en Sittard-Geleen)',
    when: 'Ziekenhuis op twee plekken. Meestal ga je erheen met een verwijzing.',
    url: 'https://www.zuyderland.nl', tel: '088-459 7777', area: ['parkstad', 'wm'], checked: C, source: 'other',
  },
  {
    // A rehabilitation centre, not a neighbourhood team (doc 7.5): under Zorg, only with a referral.
    // 16-10: adelante-zorggroep.nl is the own site (search result: main location Hoensbroek, also Heerlen,
    //   Maastricht and Venlo; Adelante Arbeid), so the row has a web address now.
    id: 'rg.zl.k.adelante', category: 'zorg', emoji: '🦽',
    name: 'Adelante (Hoensbroek en andere plekken)',
    when: 'Revalidatie na een ongeluk of een ziekte, of met een beperking. Ook hulp om weer te gaan werken. Alleen met een verwijzing van je arts.',
    url: 'https://www.adelante-zorggroep.nl', area: ['all'], checked: C, source: 'other',
  },
  // ---- Grens ----
  // ⚖️ check: the numbers of doc 7.13. 16-10: grenzinfo.eu/emrm/en and /emra/en (search result): GIP Maastricht
  //   +31 (0)43 350 5020, free advice on tax and social security by phone or in person; Aachen-Eurode only by
  //   appointment, +49 (0)241 56861-0 or +31 (0)45 545 6178, consultation days in Herzogenrath (Eurode). Regional
  //   numbers: not in a row (rule of section 5). grensinfopunt.nl was not found.
  {
    id: 'rg.zl.k.gipmaastricht', category: 'grens', emoji: '🌍',
    name: 'GrensInfoPunt Maastricht',
    when: 'Je woont of werkt over de grens, of je wilt dat. Gratis advies over belasting, uitkering, pensioen en zorgverzekering.',
    url: 'https://grenzinfo.eu/emrm', area: ['all'], checked: C, source: 'other',
  },
  {
    id: 'rg.zl.k.gipaachen', category: 'grens', emoji: '🌍',
    name: 'GrenzInfoPunkt Aachen-Eurode (Aken en Herzogenrath)',
    when: 'Hetzelfde, vooral voor werk of wonen in Duitsland. Op afspraak.',
    url: 'https://grenzinfo.eu/emra', area: ['all'], checked: C, source: 'other',
  },
  {
    // 16-10: grenzinfo.eu/emrm/?p=15532 (search result): Grensarbeid (Kerkrade & Maastricht), help with vacancies
    //   and a cv for NL, BE and DE; spreekuren in Maastricht (Werkcentrum), Heerlen and Sittard-Geleen.
    id: 'rg.zl.k.grensarbeid', category: 'grens', emoji: '🧳',
    name: 'Grensarbeid (Kerkrade en Maastricht)',
    when: 'Je zoekt werk in België, Duitsland of Nederland. Hulp met vacatures en je cv.',
    url: 'https://grenzinfo.eu/emrm', area: ['all'], checked: C, source: 'other',
  },
  // ---- Vakbond ----
  {
    // 088-368 0368 is the national contact centre (doc 7.15). 16-10: fnv.nl/service-contact (search result): yes, workdays 8.30-17.30.
    id: 'rg.zl.k.fnv', category: 'vakbond', emoji: '✊',
    name: 'FNV Limburg',
    when: 'Je bent lid, of je wilt lid worden. Hulp bij je contract, je loon of een conflict.',
    url: 'https://www.fnv.nl', tel: '088-368 0368', area: ['all'], checked: C, source: 'other',
  },
  {
    // 16-10: cnv.nl/contact (search result): only national contact (030, not a number for the row); no office or
    //   help point in Limburg was found, so "Kijk op de site voor hulp in Limburg" is gone.
    id: 'rg.zl.k.cnv', category: 'vakbond', emoji: '✊',
    name: 'CNV',
    when: 'Ook een vakbond. Je bent lid, of je wilt lid worden. Hulp bij je werk en je contract.',
    url: 'https://www.cnv.nl', area: ['all'], checked: C, source: 'other',
  },
  // ---- Nieuwkomers met een verblijfsvergunning ----
  {
    // Since January 2026 ⚖️ in Maastricht, Eijsden-Margraten, Meerssen, Valkenburg, Gulpen-Wittem
    // and Vaals ⚖️; office in the Capucijnenstraat ⚖️ (doc 7.4). 16-10: refugeeteam.nl/contact and /nieuws (search
    // result): office Capucijnenstraat in Maastricht, maatschappelijke en juridische begeleiding in Maastricht-
    // Heuvelland from January. The six gemeenten are only in a vacancy on the same site.
    id: 'rg.zl.k.refugeeteam', category: 'nieuwkomers', emoji: '🧭',
    name: 'Refugee Team',
    when: 'Begeleiding voor statushouders in Maastricht en het Heuvelland.',
    url: 'https://refugeeteam.nl', area: ['mh'], checked: C, source: 'other',
  },
  {
    // 16-10: still not found who does it in Parkstad and the Westelijke Mijnstreek.
    id: 'rg.zl.k.nieuwkomers', category: 'nieuwkomers', emoji: '🏘️',
    name: 'Parkstad en Westelijke Mijnstreek',
    when: 'Vraag bij je gemeente wie je begeleidt.',
    area: ['parkstad', 'wm'], checked: C, source: 'other',
  },
  // ---- Huiselijk geweld ----
  {
    // 16-10: veiligthuis.nl (search result): 0800-2000, free, day and night, also anonymous; danger now: 112.
    //   In Zuid-Limburg Veilig Thuis is part of the GGD Zuid Limburg.
    id: 'rg.zl.k.veiligthuis', category: 'veilig', emoji: '🛡️',
    name: 'Veilig Thuis',
    when: 'Je voelt je niet veilig thuis, of je maakt je zorgen om iemand. Gratis, dag en nacht, ook anoniem.',
    url: 'https://www.veiligthuis.nl', tel: '0800-2000', area: ['all'], checked: C, source: 'other',
  },
  {
    id: 'rg.zl.k.112veilig', category: 'veilig', emoji: '🚨',
    name: '112',
    when: 'Er is nu gevaar.',
    tel: '112', area: ['all'], checked: C, source: 'other',
  },
  // ---- Wonen ----
  {
    // Always named (owner, 15-10-2026); the corporations are not listed one by one (doc 7.11). 16-10:
    //   thuisinlimburg.nl/inschrijven (search result): free, 18 or older and allowed to live in the Netherlands,
    //   renew once a year (or you are taken off the list). No desk or phone of its own: the corporations help you.
    id: 'rg.zl.k.thuisinlimburg', category: 'wonen', emoji: '🏠',
    name: 'Thuis in Limburg',
    when: 'Een huurhuis zoeken bij een woningcorporatie. Gratis inschrijven, elk jaar verlengen. Geen internet? De corporaties helpen je.',
    url: 'https://www.thuisinlimburg.nl', area: ['all'], checked: C, source: 'other',
  },
];

/** The region without its work-rules unit (that one is added in ./zuid-limburg-pack.ts). */
export const zuidLimburg: Region = {
  ...zlMeta,
  taalUnit: zlTaalUnit,
  taalTips: zlTaalTips,
  areas: {
    all: 'Heel Zuid-Limburg',
    mh: 'Maastricht en Heuvelland',
    parkstad: 'Parkstad',
    wm: 'Westelijke Mijnstreek',
  },
  socialMap: zlSocialMap,
};
