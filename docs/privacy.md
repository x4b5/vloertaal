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
| Toets-uitslag en stemopnames van de toets | `src/lib/toetsVoice.ts` (IndexedDB) | Nee |
| "Zeg het"-opname | `src/lib/speaking.ts` | Nee, en weg na de oefening |
| "Laat de telefoon luisteren" | `src/lib/listen.ts` | Nee: alleen als de herkenning op het toestel gebeurt (`processLocally`) |
| Lessen tellen | `src/lib/count.ts` | GoatCounter: alleen de les, het kwart en de minutenband |
| Fouten tellen | `src/lib/errors.ts` | GoatCounter: de soort, een code van 8 tekens en een opgeschoonde melding. Hooguit 3 per bezoek |
| Melden | `src/lib/report.ts` | Alleen als de leerling de mail zelf verstuurt |
| Herinnering | `src/lib/reminder.ts` | Alleen als de leerling Google Agenda kiest |
| Hosting | Vercel (VS) | IP-adres bij elk verzoek, zoals bij elke website |

**Tellen gebeurt nooit:**
- als "Anoniem meetellen" uit staat;
- als de browser Do Not Track of Global Privacy Control aanzet;
- buiten vloertaal.nl (previews, localhost, tests).

**Foutmeldingen bekijken:** ga in GoatCounter naar de paden `/e/fout/…`. Daar staat per fout:
- de soort: `scherm`, `script` of `belofte`;
- een code;
- als titel het bestand en een korte, opgeschoonde melding.

Dezelfde fout krijgt altijd dezelfde code. Zo zie je hoe vaak hij voorkomt.
