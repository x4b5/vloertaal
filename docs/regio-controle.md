# Controle Sociale kaart Zuid-Limburg

*16 oktober 2026. Tweede controle van de Sociale kaart (`src/content/regio/zuid-limburg.ts`) en van
de regiofeiten met ⚖️ in de lessen (`zuid-limburg-regels.ts`).*

## Eerst dit: wat ik wel en niet kon doen

- **Ik kon geen enkele officiële site openen.** Elke poging om een pagina te laden mislukte. Het
  netwerk van deze omgeving weigert die adressen (bijvoorbeeld www.gemeentemaastricht.nl,
  www.juridischloket.nl, www.thuisinlimburg.nl, grenzinfo.eu, ook rijksoverheid.nl).
- **Wat wel lukte:** zoeken, alleen binnen de site van de organisatie zelf (bijvoorbeeld alleen
  op `heerlen.nl`). Zo zie ik stukjes tekst van die site, maar niet de pagina zelf. Die stukjes
  kunnen oud zijn.
- **Daarom is geen enkele rij `official` geworden.** Volgens de regel in de code betekent
  `official`: gelezen op de site zelf. Dat heb ik niet gedaan. Alle rijen staan nog op `'other'`
  met `checked: '2026-10-15'`. Er is geen nieuwe datumconstante nodig.
- **Wel verbeterd:** waar de zoekresultaten van de eigen site duidelijk iets anders zeiden, heb ik
  de rij verbeterd. Bij elke rij staat nu een opmerking `16-10: …` met de bron.
- Telefoonnummers heb ik niet veranderd of toegevoegd. Ik heb ook geen rij weggehaald.

**Uitkomst:** 0 ✅ official · 15 ✏️ verbeterd (maar nog `other`) · 31 ❓ niet bevestigd (bij 25
daarvan zegt het zoekresultaat van de eigen site wel dat het klopt, soms maar voor een deel).

`npx tsc --noEmit -p .` en `npx vitest run tests/regio.test.ts tests/regioLazy.test.ts`: geslaagd (35 tests).

## 1. De rijen van de kaart

Uitleg bij "Uitkomst":
- ❓ *klopt volgens zoekresultaat*: het stukje tekst van de eigen site past bij de rij. Een mens
  moet de pagina nog één keer openen.
- ❓ *niet gevonden*: ook in de zoekresultaten geen bevestiging.
- ✏️ *verbeterd*: de rij is aangepast. Ook deze rij moet nog één keer op de site zelf bekeken worden.

| Naam | Wat ik gecontroleerd heb | Bron-URL (zoekresultaat) | Uitkomst |
|---|---|---|---|
| Gemeente Maastricht: GemeenteLoket (Mosae Forum) | naam balie, 14 043, afspraak | https://www.gemeentemaastricht.nl/en/contact-and-opening-hours · https://www.gemeentemaastricht.nl/paspoort-identiteitskaart | ✏️ "Altijd op afspraak" → "Op afspraak". Een paspoort ophalen kan zonder afspraak. GemeenteLoket en 14 043 kloppen. |
| Gemeente Heerlen: Stadskantoor | naam, 14 045, afspraak | https://www.heerlen.nl/contact · https://www.heerlen.nl/openingstijden-stadskantoor | ❓ klopt volgens zoekresultaat |
| Gemeente Kerkrade: Burgerplein | naam, 14 045, afspraak | https://www.kerkrade.nl/contact | ❓ klopt volgens zoekresultaat (Burgerplein in het Stadskantoor, alleen op afspraak) |
| Gemeente Sittard-Geleen | naam balie, 14 046, afspraak | https://sittard-geleen.nl/adressen-en-openingstijden/ · https://sittard-geleen.nl/nieuws/tijdelijke-stadswinkel-en-jongerenpunt-openen-deuren-op-markt-116-in-geleen/ | ✏️ naam → "Gemeente Sittard-Geleen: Stadswinkel Geleen". Een balie "Stadskantoor Sittard" vond ik niet (alleen als trouwlocatie). De Stadswinkel zit sinds 29-06-2026 tijdelijk in een ander gebouw in Geleen, tot 2028. 14 046 klopt. |
| Andere gemeenten | — | — | ❓ niet per gemeente gecontroleerd (rij verwijst naar de eigen gemeente) |
| Het Juridisch Loket | 0800-8020, gratis, wat ze doen | https://www.juridischloket.nl/contact/ · https://www.juridischloket.nl/actueel/0800-8020/ | ✏️ "Gratis advies" → "Gratis informatie … Heb je een laag inkomen? Dan krijg je ook persoonlijk advies." Persoonlijk advies is er alleen onder de inkomensgrens (Wrb). Nummer klopt. |
| UWV en werk.nl | site, wat ze doen | https://www.werk.nl/nl/uitkering-aanvragen/inschrijven-werkzoekende · https://www.uwv.nl/nl/ww/ww-aanvragen/stappenplan-ww | ❓ klopt volgens zoekresultaat (WW vraag je aan in Mijn UWV) |
| Werkcentrum Zuid-Limburg | site, wat ze doen, gebied | https://www.werkcentrumzuidlimburg.nl/vragen-ik-zoek-werk/… · https://www.werkcentrumzuidlimburg.nl/ik-wil-me-ontwikkelen/ | ❓ klopt volgens zoekresultaat (gratis gesprek met een "gids", werk, solliciteren, opleiding; in Maastricht aan de Wilhelminasingel) |
| Werkgeversservicepunt (WSP) Zuid-Limburg | site, voor wie | https://zuid-limburg.werkgeversanno.nu/over-werkgeversservicepunt/ | ✏️ Het WSP is er voor **werkgevers**. Nieuwe regel: "Voor werkgevers: … Zoek je zelf werk? Ga naar het Werkcentrum." |
| Sociale Zaken Maastricht Heuvelland (werk) | gebied, wat ze doen | https://www.socialezaken-mh.nl/werk-vinden · https://sdg.government.nl/government-services-in-the-netherlands/applying-support-reintegrate-labour-market/municipality-maastricht | ✏️ De vijf gemeenten erbij gezet: Maastricht, Meerssen, Vaals, Valkenburg en Gulpen-Wittem. Niet Eijsden-Margraten. |
| WSP Parkstad en WerkvoorHeerlen | bestaat het nog, voor wie | https://www.wspparkstad.nl/voor-werkzoekenden | ❓ WSP Parkstad is actief volgens de eigen site. WerkvoorHeerlen alleen in een brief van de gemeente (april 2024); geen eigen site gevonden. |
| Vidar en WSP Westelijke Mijnstreek | gebied | https://vidar.nl/meer-vidar/over-vidar/ | ❓ Vidar klopt volgens zoekresultaat (Sittard-Geleen, Stein, Beek). WSP Westelijke Mijnstreek niet gecontroleerd. |
| Sociale Zaken Maastricht Heuvelland (bijstand) | gebied, via werk.nl met DigiD | https://www.socialezaken-mh.nl/bijstand-uitkering/bijstandsuitkering · https://www.eijsden-margraten.nl/inwoners/zorg-werk-en-inkomen/sociale-zaken-eijsden-margraten/bijstand-en-uitkering | ✏️ **Belangrijk.** Eijsden-Margraten heeft een eigen "Sociale zaken Eijsden-Margraten". De regel noemt nu de vijf gemeenten en zegt: "Woon je in Eijsden-Margraten? Vraag het bij je eigen gemeente." |
| Gemeente Heerlen: werk en inkomen | bijstand, hulp op het Maanplein | https://www.heerlen.nl/bijstandsuitkering-aanvragen | ❓ klopt volgens zoekresultaat (eerst werk.nl, dan online, met een telefoongesprek). Hulp op het Maanplein voor bijstand: niet gevonden. De regel zei dat al niet. |
| Vidar (bijstand) | bijstand, gebied | https://vidar.nl/onderwerpen/regelen/uitkeringen/bijstandsuitkering-aanvragen/ | ❓ klopt volgens zoekresultaat |
| Andere gemeenten (bijstand) | — | — | ❓ niet gecontroleerd (rij verwijst naar de eigen gemeente) |
| Een uitzendbureau met een keurmerk | site SNA-register | https://www.normeringarbeid.nl/nieuws/raadplegen-openbaar-register-sna | ❓ klopt volgens zoekresultaat (het openbare register staat op normeringarbeid.nl) |
| Trajekt | bestaat het, wat ze doen | https://www.trajekt.nl/ · https://www.trajekt.nl/volwassenen/individuele-ondersteuning | ❓ klopt volgens zoekresultaat (welzijn in Maastricht en Heuvelland, in de wijk, binnenlopen zonder afspraak) |
| Buurtteams Heerlen | uitvoerder, nummer | https://en.heerlen.nl/buurtteam.html | ❓ klopt volgens zoekresultaat (Incluzio). Er is een eigen nummer 088-298 6395 (werkdagen 9-17). Niet in de rij gezet: eerst op de pagina lezen. |
| Alcander | gebied | https://www.alcander.nl/ | ✏️ "Heerlen, Nuth en Voerendaal" → "Heerlen". De site zegt: welzijnsorganisatie voor de gemeente Heerlen. Nuth en Voerendaal niet gevonden. |
| Impuls | site, gebied | https://www.kerkrade.nl/_flysystem/media/stadsjournaal-18-11-2020.pdf (gemeente, 2020) | ✏️ "Kerkrade en Simpelveld" → "Kerkrade". Simpelveld niet gevonden. Nog steeds geen web-adres: impulskerkrade.nl staat alleen in een krantje van de gemeente uit 2020. |
| Westelijke Mijnstreek (welzijn) | welke organisatie | — | ❓ niet gevonden (Partners in Welzijn: alleen gegevens van 2019). Rij verwijst naar de gemeente. |
| Je gemeente (schulden) | "gratis" | https://www.rijksoverheid.nl/onderwerpen/schulden/vraag-en-antwoord/wat-doet-de-gemeente-om-mij-te-helpen-bij-schulden | ❓ klopt volgens zoekresultaat ("gratis advies en hulp … uw gemeente") |
| Kredietbank Limburg | site, wat ze doen | https://kredietbanklimburg.nl/ · https://kredietbanklimburg.nl/info/overige-informatie/informatie-locaties | ❓ klopt volgens zoekresultaat (19 gemeenten, inloop). De nummers op de site verschillen (045-560 5705, 088-101 99 99). |
| Geldfit | 0800-8115, gratis, anoniem | https://geldfit.nl/nietalleen/ | ❓ klopt volgens zoekresultaat |
| Humanitas: thuisadministratie | in alle drie de gebieden | https://www.humanitas.nl/afdeling/maastricht-heuvelland/activiteiten/thuisadministratie/ · https://www.humanitas.nl/afdeling/westelijke-mijnstreek/ · https://www.humanitas.nl/afdeling/parkstad/vacatures/ | ❓ klopt volgens zoekresultaat |
| Centre Céramique | hulp bij Nederlands | https://bibliotheek.centreceramique.nl/nederlandsleren · https://bibliotheek.centreceramique.nl/digitaalpunt | ✏️ Het heet daar "digiTAALpunt+", geen Taalhuis. Nieuwe regel: "Gratis hulp bij Nederlands en de computer. Vraag naar het digiTAALpunt. Er is ook een taalcafé." |
| SCHUNCK: bibliotheek en Taalhuis Heerlen | Taalhuis, gratis | https://schunck.nl/bibliotheek/leren-en-ontwikkelen/taalhuis | ❓ klopt volgens zoekresultaat |
| De Domijnen | site, Taalhuis | https://www.dedomijnen.nl/ · https://www.dedomijnen.nl/bibliotheek/digi_taal_informatievraagbaak/taalhuis/ | ✏️ Web-adres toegevoegd: https://www.dedomijnen.nl (de eigen site bestaat). Taalhuis bevestigd in Bibliotheek Ligne in Sittard: dat staat nu in de regel. |
| 112 (zorg) | — | — | ❓ niet apart gecontroleerd (landelijk nummer, klopt zeker; geen site geopend) |
| Huisartsenspoedpost Maastricht en Heuvelland | eigen site, nummer | https://hapmaastricht.nl/en/ · https://www.mumc.nl/contact-verwijzer | ✏️ Web-adres toegevoegd: https://hapmaastricht.nl. Regel: "Het nummer staat op de site." Nummer volgens de eigen site en het MUMC+: 043-750 0123 (niet in de rij: regionaal). |
| Huisartsenspoedpost Oostelijk Zuid-Limburg | eigen site, plek | https://huisartsenspoedpost-ozl.nl/bereikbaarheid/ · https://zuyderland.nl/spoedzorg/ | ✏️ Web-adres → https://huisartsenspoedpost-ozl.nl (eigen site, in plaats van zuyderland.nl). Op het Spoedplein van Zuyderland Heerlen. Nummer 045-577 8844 (niet in de rij). |
| Huisartsenspoedpost Westelijke Mijnstreek | nog open, eigen site | https://spoedzorgmeditta.nl/locaties/spoedpost-westelijke-mijnstreek/ · https://zuyderland.nl/spoedzorg/ | ✏️ Web-adres → https://spoedzorgmeditta.nl. De post in Geleen is **nog open** (avond, nacht, weekend; eerst bellen). Nummer 046-400 99 25 (niet in de rij). Niet zeker: ligt hij echt "bij Zuyderland Geleen" (adres Demystraat)? |
| MUMC+ | verwijzing | https://www.mumc.nl/contact-verwijzer | ❓ klopt volgens zoekresultaat |
| Zuyderland Medisch Centrum | 088-459 7777, twee plekken | https://zuyderland.nl/contact/ | ❓ klopt volgens zoekresultaat |
| Adelante | eigen site, plekken | https://www.adelante-zorggroep.nl/nl/volwassenenrevalidatie/ · https://www.adelante-zorggroep.nl/nl/contact/adelante-arbeid/ | ✏️ Web-adres toegevoegd: https://www.adelante-zorggroep.nl (de eigen site bestaat; geen gok meer). Hoofdlocatie Hoensbroek, ook Heerlen, Maastricht en Venlo. |
| GrensInfoPunt Maastricht | site, gratis advies | https://grenzinfo.eu/emrm/en/ | ❓ klopt volgens zoekresultaat (gratis, per telefoon of op afspraak). grensinfopunt.nl niet gevonden. |
| GrenzInfoPunkt Aachen-Eurode | site, op afspraak | https://grenzinfo.eu/emra/en/consulting-hours/ | ❓ klopt volgens zoekresultaat (alleen op afspraak; spreekdagen in Herzogenrath) |
| Grensarbeid | wat ze doen | https://grenzinfo.eu/emrm/?p=15532 | ❓ klopt volgens zoekresultaat (vacatures en cv voor NL, BE, DE) |
| FNV Limburg | 088-368 0368 | https://www.fnv.nl/service-contact | ❓ klopt volgens zoekresultaat (werkdagen 8.30-17.30) |
| CNV | hulp in Limburg | https://www.cnv.nl/contact/ | ✏️ Geen kantoor of hulp in Limburg gevonden, alleen landelijk contact. "Kijk op de site voor hulp in Limburg" is weg. Nieuwe regel: "Ook een vakbond. Je bent lid, of je wilt lid worden. Hulp bij je werk en je contract." |
| Refugee Team | kantoor, gebied | https://refugeeteam.nl/contact · https://refugeeteam.nl/nieuws/begin-2026-starten-wij-in-zes-nieuwe-gemeenten | ❓ Kantoor Capucijnenstraat: klopt volgens zoekresultaat. De zes gemeenten staan alleen in een vacature. |
| Parkstad en Westelijke Mijnstreek (nieuwkomers) | wie begeleidt statushouders | — | ❓ niet gevonden. Rij verwijst naar de gemeente. |
| Veilig Thuis | 0800-2000, gratis, dag en nacht, anoniem | https://www.veiligthuis.nl/en/contact | ❓ klopt volgens zoekresultaat |
| 112 (veilig) | — | — | ❓ niet apart gecontroleerd (landelijk nummer) |
| Thuis in Limburg | gratis, verlengen, hulp zonder internet | https://www.thuisinlimburg.nl/inschrijven/inschrijven-als-woningzoekende · https://www.thuisinlimburg.nl/informatie-en-contact | ❓ klopt volgens zoekresultaat (gratis, 18+, in Nederland mogen wonen, elk jaar verlengen; zelf geen balie, de corporaties helpen) |

## 2. Regiofeiten met ⚖️ (in de lessen en tips)

Lesteksten heb ik **niet** veranderd. Alleen twee opmerkingen (`// …`) in `zuid-limburg-regels.ts`.

| Feit | Waar | Bron-URL (zoekresultaat) | Uitkomst |
|---|---|---|---|
| Verhuizing doorgeven: vanaf 4 weken vóór tot 5 dagen na de verhuizing (Wet BRP) | les ZL.1, tip rg.zl.c.1 | https://www.rijksoverheid.nl/vraag-en-antwoord/gemeenten/hoe-kan-ik-mijn-verhuizing-doorgeven-aan-de-gemeente · https://www.heerlen.nl/verhuizen-binnen-nederland | ✅ klopt volgens zoekresultaat |
| Je oude gemeente krijgt het vanzelf | les ZL.1 wd1 | zelfde rijksoverheid-pagina | ✅ klopt volgens zoekresultaat |
| Binnen Nederland vaak online met DigiD | les ZL.1 | https://www.heerlen.nl/verhuizen-binnen-nederland | ✅ klopt volgens zoekresultaat |
| Uit het buitenland: zelf naar de gemeente, op afspraak, met paspoort/id en huurcontract | les ZL.1, tip | https://www.heerlen.nl/verhuizen-vanuit-het-buitenland-naar-nederland | ✅ klopt. Let op: Heerlen schrijft "binnen 5 **werk**dagen na aankomst" en vraagt ook een geboorteakte als je niet in Nederland geboren bent. ❓ Moet dat in de les? (mens beslist) |
| Brief van de hoofdbewoner bij inwonen | les ZL.1 wd2 | — | ❓ niet bevestigd (Heerlen noemt het BSN van de hoofdbewoner bij doorgeven binnen Nederland) |
| Bijna alles op afspraak; 14 + netnummer | les ZL.1 | gemeentesites hierboven | ✅ klopt volgens zoekresultaat (Maastricht, Heerlen, Kerkrade, Sittard-Geleen) |
| Loketnamen (Redactie-opmerking les ZL.1) | opmerking | zie tabel 1 | ✏️ Sittard-Geleen: alleen de Stadswinkel Geleen gevonden. Opmerking aangevuld. |
| Thuis in Limburg: gratis, 18+, in Nederland mogen wonen, elk jaar verlengen | les ZL.2, tip | https://www.thuisinlimburg.nl/inschrijven/inschrijven-als-woningzoekende | ✅ klopt volgens zoekresultaat. Aantal corporaties: de site zegt 17 én 18 (❓). |
| OVpay in bus en trein van Arriva Limburg; dezelfde pas; OV-chipkaart kan ook | les ZL.2 tf1 | https://www.arriva.nl/kaartjes-abonnementen/ovpay/ · https://www.arriva.nl/media/1ozcsugk/ov-pay-spiekkaartje.pdf | ✅ klopt volgens zoekresultaat |
| Over de grens eerst kijken welk kaartje | les ZL.2 tf1 | https://www.arriva.nl/kaartjes-abonnementen/acties-uitjes/limburg/hoe-reis-jij-vandaag/ | ✅ klopt: op de RE18 Eijsden–Luik kan het niet met betaalpas of OV-chipkaart |
| 9292.nl | les ZL.2 wd2 | https://9292.nl/openbaar-vervoer/reizen-met-bus/ | ✅ bestaat |
| GrensInfoPunt: gratis advies per telefoon, online of op afspraak | les ZL.3, tip rg.zl.c.2 | https://grenzinfo.eu/emrm/en/ | ✅ klopt volgens zoekresultaat ("online" = het contactformulier) |
| Een GrensInfoPunt in Maastricht, en een in Aken en Herzogenrath | les ZL.3 wd1 | https://grenzinfo.eu/emra/en/ | ✅ klopt volgens zoekresultaat |
| Grensarbeid: samen met GIP, UWV en gemeenten; spreekuren in Maastricht en Heerlen | les ZL.3 wa1 | https://grenzinfo.eu/emrm/?p=15532 · https://2026.grenzinfo.eu/emrm/?p=36241 | ❓ deels. Spreekuren gevonden in Maastricht (in het Werkcentrum), Heerlen **en** Sittard-Geleen. De samenwerking met UWV heb ik niet gezien. De les is niet fout, wel onvolledig. |
| Belasting en sociale zekerheid bij grenswerk (EU 883/2004) | les ZL.3 tf1 | — | ❓ juridisch: niet door mij te beoordelen. Laat het GIP of een jurist kijken. |
| Carnaval is geen officiële feestdag | les ZL.4, tip rg.zl.c.2 | https://www.rijksoverheid.nl/vraag-en-antwoord/arbeidsovereenkomst-en-cao/officiele-feestdagen | ✅ klopt: carnaval staat niet op de lijst |
| Geen recht op vrij met carnaval | les ZL.4 | zelfde pagina | ✅ klopt (er is zelfs op officiële feestdagen geen wettelijk recht op vrij; dat staat in cao of contract) |
| Vakantiedagen bij collectieve sluiting, als het klopt met contract of cao | les ZL.4 tf1 | https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/vakantiedagen-en-vakantiegeld/hoe-kan-ik-mijn-vakantiedagen-opnemen | ❓ juridisch. Rijksoverheid noemt een collectieve vakantie als reden voor bezwaar van de werkgever. Laat een jurist het nakijken (BW 7:638). |
| Carnaval: februari of maart, zondag t/m dinsdag, in Limburg vaak al zaterdag | les ZL.4 wd1 | — | ❓ geen bron geopend. Februari of maart klopt met de kalender (carnavalszondag is 7 weken voor Pasen). |
| Dialectwoorden: Goojemorge, Goojendaag, "Wie is 't mèt diech?", Bedaank, Vastelaovend | les ZL.4 ru2 | https://www.mestreechtertaol.nl/dictionair/mst/goojemorge/ · https://www.veldekemestreech.nl/veldeke/talk-like-a-local/ | ❓ Goojemorge staat in het woordenboek. "Wie is 't mèt diech?" en "Bedaank" staan bij Veldeke. Goojendaag en Vastelaovend niet opnieuw gezocht. Spelling: blijft voor Veldeke. |
| Huisartsenpost: eerst bellen; drie posten (MUMC+, Zuyderland Heerlen, Geleen); is Geleen nog open? | les ZL.5 | https://zuyderland.nl/spoedzorg/ · https://hapmaastricht.nl/veelgestelde-vragen/kan-ik-zomaar-naar-de-huisartsen-spoedpost/ · https://spoedzorgmeditta.nl/locaties/spoedpost-westelijke-mijnstreek/ | ✅ klopt volgens zoekresultaat: drie posten, Geleen is nog open, alle drie zeggen "eerst bellen". Opmerking aangevuld. |
| SEH alleen in Heerlen; rond 2030 naar Sittard-Geleen | Redactie les ZL.5 | https://zuyderland.nl/contact/ | ❓ SEH in Heerlen: klopt volgens zoekresultaat. 2030: niet gecontroleerd. |
| Schuldhulp van de gemeente is gratis | les ZL.5 | https://www.rijksoverheid.nl/onderwerpen/schulden/vraag-en-antwoord/wat-doet-de-gemeente-om-mij-te-helpen-bij-schulden | ✅ klopt volgens zoekresultaat. De voorwaarde "als je nog niet eerder schuldhulp had" (doc 7.26) heb ik niet gevonden ❓. |
| Kredietbank Limburg doet het voor veel gemeenten | les ZL.5 wa1 | https://kredietbanklimburg.nl/ | ✅ klopt volgens zoekresultaat (19 gemeenten) |
| Vrijwilligers voor post en geld | les ZL.5 wa1 | Humanitas, zie tabel 1 | ✅ klopt volgens zoekresultaat |
| Taalhuis, vrijwilligers, taalcafé; Centre Céramique, SCHUNCK, De Domijnen | les ZL.5 tf1 | zie tabel 1 | ✅ klopt volgens zoekresultaat. In Maastricht heet het digiTAALpunt+, maar de les zegt niet dat daar een "Taalhuis" is. |
| Geldfit 0800-8115 | opmerking les ZL.5 | https://geldfit.nl/nietalleen/ | ✅ klopt volgens zoekresultaat |
| Refugee Team: sinds januari 2026, zes gemeenten, Capucijnenstraat | kaart (doc 7.4) | https://refugeeteam.nl/contact | ❓ kantoor klopt; de zes gemeenten alleen in een vacature |
| Wtta: register vanaf 2027 | kaart (doc 7.16) | — | ❓ niet gecontroleerd |

"✅ klopt volgens zoekresultaat" betekent hier: gezien in een zoekresultaat van de officiële site.
Het is geen bewijs dat de pagina nu zo is. Open de pagina één keer.

## 3. Nog te doen door een mens

1. **Open elke site uit tabel 1 één keer zelf** (in een gewone browser). Klopt het? Zet dan in
   `zuid-limburg.ts` bij die rij `source: 'official'` en `checked: '<die dag>'`. Gebruik een tweede
   constante voor de datum, bijvoorbeeld `const CHECKED = '2026-10-…'`. Verander `C` niet.
   Of: zet de domeinen open in de netwerkinstellingen van deze omgeving (Network access →
   Allowed domains), dan kan een volgende sessie het doen.
2. **Eijsden-Margraten:** wie helpt daar met werk? Sociale Zaken Maastricht Heuvelland noemt vijf
   gemeenten, Eijsden-Margraten heeft een eigen Sociale zaken (SEM). Krijgt SEM een eigen rij?
3. **Nieuw sociaal ontwikkelbedrijf Maastricht-Heuvelland** (Annex, MTB en Podium24 samen): bestaat
   het al, en hoe heet het? Dan de rij "werk" in Maastricht aanpassen.
4. **Buurtteams Heerlen:** het nummer 088-298 6395 lezen op heerlen.nl. Klopt het? Dan mag het in
   de rij (het is een 088-nummer) in plaats van 14 045.
5. **Huisartsenposten:** de nummers lezen op hapmaastricht.nl (043-750 0123),
   huisartsenspoedpost-ozl.nl (045-577 8844) en spoedzorgmeditta.nl (046-400 99 25). Ze mogen niet
   in de rij (regionaal), maar de les zegt "het nummer staat op de site". Klopt de naam "bij
   Zuyderland Geleen" voor de post aan de Demystraat?
6. **Juridisch Loket Heerlen (Maanplein, Huis van het Recht):** de pagina bestaat nog. Wil je er
   een eigen rij van? Ook servicepunten in Kerkrade en Sittard.
7. **Alcander en Impuls:** werken ze ook in Nuth, Voerendaal en Simpelveld? Ik heb die plaatsen
   weggehaald omdat ik ze niet vond. Wat is de site van Impuls?
8. **Welzijn Westelijke Mijnstreek** en **begeleiding statushouders in Parkstad en Westelijke
   Mijnstreek:** niets gevonden. Vraag het aan de gemeenten.
9. **Grensarbeid in les ZL.3:** de les noemt spreekuren in Maastricht en Heerlen. Er is er ook een
   in Sittard-Geleen. Toevoegen? En werkt Grensarbeid echt samen met UWV?
10. **Inschrijven uit het buitenland:** Heerlen zegt "binnen 5 werkdagen" en vraagt ook een
    geboorteakte. Moet de les dat zeggen? (Juridisch: niet door mij beslist.)
11. **Juridisch (laat een jurist kijken):** belasting en sociale zekerheid bij grenswerk (les
    ZL.3), vakantiedagen bij collectieve sluiting met carnaval (les ZL.4), en of schuldhulp altijd
    gratis is (les ZL.5, doc 7.26).
12. **Kredietbank Limburg:** welk nummer is het goede, 045-560 5705 of 088-101 99 99? (Alleen het
    088-nummer zou in de rij mogen.)
