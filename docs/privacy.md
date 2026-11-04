# Privacy: waar het in de code staat

De privacyverklaring op vloertaal.nl/privacy (`src/lib/privacyPage.ts`) zegt precies wat de code doet. Verander je de code op een van deze plekken? Pas dan ook de tekst aan:
- de verklaring zelf (`PRIVACY` en `PRIVACY_DATE`);
- "Jouw privacy" bij Over (`a.free` in `src/content/about.ts`, met de 13 vertalingen in `src/i18n/about/`);
- de uitleg bij "Anoniem meetellen" (`countHint`);
- de pagina voor begeleiders (`p.privacy` in `src/content/pro.ts`);
- een regel in het logboek (`src/content/updates.ts`).

| Wat | Waar | Gaat er iets weg? |
|---|---|---|
| Voortgang, keuzes, certificaten | `src/lib/progress.ts` (localStorage) | Nee |
| "Voortgang wissen" | `src/App.tsx` (`onReset`) | Wist lessen, certificaten, de naam en de toets met opnames. Hulptaal, land, sector, regio, gender, de eerste dag en de instellingen blijven staan; de privacytekst zegt dat. Alles weg: de sitegegevens in de browser wissen, of de app verwijderen |
| Toets-uitslag en stemopnames van de toets | `src/lib/toetsVoice.ts` (IndexedDB) | Nee |
| "Zeg het"-opname | `src/lib/speaking.ts` | Nee, en weg na de oefening |
| "Laat de telefoon luisteren" | `src/lib/listen.ts` | Nee: alleen als de herkenning op het toestel gebeurt (`processLocally`) |
| Lessen tellen | `src/lib/count.ts` | GoatCounter: alleen de les, het kwart en de minutenband |
| De start tellen | `src/lib/count.ts` (`countFirstOpen`, `countStartDone`), aangeroepen in `src/App.tsx` | GoatCounter: eenmalig per toestel `/e/eerste/geopend` (de app voor het eerst open, op een toestel dat de start nog niet begon) en `/e/eerste/start-af` (Verder bij "Welke kleur wil je?"). Niets erbij: geen taal, sector, land of kleur. Het eerste openen gaat vóórdat de leerling de knop kan vinden; Do Not Track en GPC houden het tegen, en de privacytekst zegt dat. Welke al geteld zijn, staat lokaal (`vloertaal:count-eerste`). Een toestel dat al begonnen was vóór deze telling (4 nov 2026), telt niets |
| Oefendagen tellen | `src/lib/count.ts` (`countDayMilestones`) | GoatCounter: eenmalig per toestel `/e/dag/1`, `/2`, `/7`, `/14`, `/28` (het aantal verschillende oefendagen uit `Progress.days`). Welke al geteld zijn, staat lokaal (`vloertaal:count-dagen`) |
| "Gelukt?" tellen | `src/lib/workTry.ts` (`answerGelukt`) | GoatCounter: alleen `/e/gelukt/ja` of `/e/gelukt/nog-niet`. Lokaal staan de les en de dag van de werkzin (`vloertaal:work-try-ask`), tot het antwoord |
| Fouten tellen | `src/lib/errors.ts` | GoatCounter: de soort, een code van 8 tekens en een opgeschoonde melding. Hooguit 3 per bezoek |
| Melden | `src/lib/report.ts` | Alleen als de leerling de mail zelf verstuurt |
| Taal gemist (startlijst) | `src/lib/missingLang.ts` | Alleen als de leerling de mail zelf verstuurt; in de mail staat alleen de getypte taal |
| Herinnering | `src/lib/reminder.ts` | Alleen als de leerling Google Agenda kiest |
| Code op de begeleiderskaart | `src/lib/groepCode.ts`, `src/lib/kaart.ts` | Nee: alleen de getallen van de kaart, zonder naam. Gaat mee in de deeltekst als de leerling de kaart zelf deelt |
| Groepsoverzicht `/groep/` | `src/lib/groepPage.ts`, `src/lib/groep.ts` | Nee: rekent in de browser van de begeleider. De eigen CSP verbiedt elke verbinding (`connect-src 'none'`). Bewaart niets |
| Hosting | statichost.eu (Zweden; servers in Duitsland en Slovenië, sinds 2 nov 2026; daarvoor Vercel, VS) | IP-adres bij elk verzoek, zoals bij elke website; niet bewaard. Het oude adres `vloertaal.vercel.app` werkt nog en staat bij Vercel (VS): de privacytekst zegt dat en raadt vloertaal.nl aan. Daar telt de app niet (`LIVE` in `src/lib/count.ts`) |

**Tellen gebeurt nooit:**
- als "Anoniem meetellen" uit staat;
- als de browser Do Not Track of Global Privacy Control aanzet;
- buiten vloertaal.nl (previews, localhost, tests).

**Foutmeldingen bekijken:** ga in GoatCounter naar de paden `/e/fout/…`. Daar staat per fout:
- de soort: `scherm`, `script` of `belofte`;
- een code;
- als titel het bestand en een korte, opgeschoonde melding.

Dezelfde fout krijgt altijd dezelfde code. Zo zie je hoe vaak hij voorkomt.
