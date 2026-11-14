# Livegang Vloertaal

Vloertaal is gratis en heeft geen verdienmodel. Het doel is mensen een toegankelijke manier geven om
Nederlands te leren voor hun werk. Sinds 2 november 2026 staat de app bij **statichost.eu**
(Zweden; servers in de EU), zodat ook het IP-adres van een bezoeker in Europa blijft. Daarvoor
stond hij op het gratis Vercel Hobby-plan (VS).

## Stand van zaken

| | Wat | Status |
|---|---|---|
| ✅ | App werkt, 873 automatische tests, max. 3 tikbare dingen per scherm | klaar |
| ✅ | Hosting op statichost.eu (sinds 2 november 2026; daarvoor Vercel); GitHub draait alleen de tests | klaar |
| ✅ | Domein `vloertaal.nl` gekoppeld (statichost, deelplaatje, canonical, robots, sitemap) | klaar |
| ✅ | Contact `hoi@vloertaal.nl` en privacy op de pagina *Over* | klaar |
| ✅ | Stemmen: ElevenLabs betaald plan, commercieel gebruik toegestaan | klaar |
| ✅ | Pilot gestart (15 oktober 2026, LinkedIn). Sinds 28 oktober staat de app open voor iedereen (`OPEN_TO_ALL`): geen toegangscode meer, alleen de link | loopt |
| ⏳ | Nieuwe zinnen opnemen na elke merge met nieuwe Nederlandse tekst | jij: workflow draaien, zie onderaan |
| ⏳ | Vertalingen laten nakijken door moedertaalsprekers | zie `vertaalcontrole.md` |
| ⏳ | Werkvloer-tips laten nakijken door FNV / Juridisch Loket / FairWork | zie `juridische-check.md` |
| ✅ | Werkregels staat aan als bèta (16 oktober 2026); de controle door een deskundige loopt nog | bèta, zie hieronder |
| ⏳ | Regio Zuid-Limburg aanzetten (`REGIONS_LIVE`) | na controle van de sociale kaart, zie hieronder |

## Domein koppelen (vloertaal.nl)

1. **Aanvragen** bij een registrar naar keuze, bijvoorbeeld TransIP, Versio of Hostnet. Alleen de
   domeinnaam is genoeg: geen hosting- of e-mailpakket nodig, tenzij je ook een mailadres
   `@vloertaal.nl` wilt (zie "Contact" hieronder).
2. **Bij statichost:** koppel `vloertaal.nl` en `www.vloertaal.nl` aan de site.
3. **DNS bij je registrar:** neem de records over die statichost toont. Meestal is dat een
   **A-record** voor `vloertaal.nl` en een **CNAME-record** voor `www`.
4. Wacht tot de DNS is bijgewerkt (een paar minuten tot een paar uur) en controleer dat
   `https://vloertaal.nl` een geldig certificaat heeft.
5. `www.vloertaal.nl` stuurt door naar `vloertaal.nl` met "Redirect to primary" in het dashboard
   van statichost (niet in een bestand).
6. **Testen:**
   - open `https://vloertaal.nl` op je telefoon;
   - deel de link in WhatsApp: je ziet het plaatje met Bram;
   - installeer de app via "Toevoegen aan beginscherm".

Het oude `.vercel.app`-adres blijft werken. Wie de app al heeft geïnstalleerd, houdt die versie
met de voortgang op dat adres. Voortgang staat op de telefoon per adres en verhuist niet mee.
Deel daarom vanaf nu alleen nog `vloertaal.nl`.

## Instellingen bij statichost

- **Bouwen:** `statichost.yml` (`npm ci && npm run build`, uitvoer in `dist/`), dezelfde bouw als lokaal.
- **Beveiliging en bewaartijden:** `public/_headers`. Mp3's blijven een dag in de cache (statichost
  kan niet kijken naar `?v=`); `/assets/*` een jaar.
- **Doorsturen:** `public/_redirects` (bijvoorbeeld `/onderwerpen/in-de-winkel/` → `/winkel/`).
- **ElevenLabs-saldo (optioneel):** zet bij de bouw een geheime variabele `ELEVENLABS_API_KEY`. Dan
  toont de verborgen beheerpagina (`vloertaal.nl/#beheer`) het saldo, ververst bij elke publicatie.
- **Vercel:** `vercel.json` staat nog in de repo zolang Vercel meedraait. Gebruik je Vercel niet
  meer, zet dan het project daar uit en haal `vercel.json` weg.

## GoatCounter (anonieme telling)

De telling werkt op elk adres. Kijk in GoatCounter bij *Settings* of er een lijst met toegestane
domeinen is ingevuld. Zo ja, voeg `vloertaal.nl` toe.

## Contact en privacy

Nodig in de app, op de pagina *Over*:

- wie Vloertaal maakt (naam of organisatie);
- een contactadres voor vragen en voor fouten in een vertaling;
- een korte privacyverklaring:
  - geen account;
  - voortgang alleen op de telefoon;
  - een anonieme telling via GoatCounter, die je kunt uitzetten;
  - de microfoon slaat niets op.

Een cookiebanner is niet nodig: de app gebruikt geen cookies.

Tip voor het contactadres: een apart adres zoals `hallo@vloertaal.nl` (een doorstuuradres bij je
registrar) of een apart Gmail-adres. Zo staat je persoonlijke adres niet in de app.

## Bèta

De hele app is nog een testversie (de pilot). Dat staat op twee plekken:

- een klein label "bèta" naast de naam Vloertaal, overal waar de naam staat (`APP_BETA` in
  `src/components/Logo.tsx`);
- de sectie "Een testversie" bij Over (`a.beta` in `src/content/about.ts`).

Is de pilot klaar en zijn vertalingen en tips nagekeken? Zet dan `APP_BETA` op `false` en haal de
sectie `a.beta` weg (met de vertalingen in `src/i18n/about/`).

## Werkregels (bèta)

Werkregels is het spoor voor mensen die al Nederlands spreken ("Nederlands – ik spreek al
Nederlands" in de talenlijst). Het staat sinds 16 oktober 2026 **aan als bèta**, zodat anderen het
kunnen bekijken en nakijken. De app zegt dat zelf:

- de hele app heeft "bèta" naast de naam Vloertaal (zie "Bèta" hieronder);
- de eerste regel van "Goed om te weten" (Hulp, Over, de eerste les) is `RULES_BETA` in
  `src/content/regels/disclaimer.ts`: nog een bètaversie, experts kijken het na, fouten naar
  hoi@vloertaal.nl.

Weer uitzetten kan met één regel in `src/lib/track.ts` (`RULES_TRACK = false`).

**Als de controle klaar is**, haal je `RULES_BETA` uit `RULES_DISCLAIMER` en zet je de datum in
`RULES_CHECKED` op de datum van de controle. Wat er nagekeken moet worden:

- [ ] Een deskundige (jurist, vakbond of Juridisch Loket) heeft elke ⚖️ nagekeken: de lijst in
      [`werkregels-bronnen.md`](werkregels-bronnen.md) (vooral §5, "Niet geverifieerd") en de
      ⚖️ in [`werkregels-curriculum.md`](werkregels-curriculum.md).
- [ ] Ook de telefoonnummers op de Hulp-pagina ("Wie bel je?", `src/content/regels/help.ts`).
      Nummers met `// ⚖️ check` staan nog niet in de lessen of de bronnen: politie zonder spoed
      0900-8844 en de site van FairWork (fairwork.nu).
- [ ] De datum in `RULES_CHECKED` (`src/content/regels/disclaimer.ts`) is de datum van die
      controle. Die datum staat in de app bij "Goed om te weten".
- [ ] Getest op een echte telefoon (Android en iPhone), met en zonder Nederlandse voorleesstem:
      taal kiezen → sector → land → eerste les → Hulp (een nummer bellen opent de telefoon) →
      Instellingen → terug naar een hulptaal en weer naar Nederlands (de voortgang blijft).
- [ ] `npm test` en `node scripts/max3/count.cjs --matrix` zijn groen.

In GoatCounter verschijnt het spoor als taal `lang-nl`.

## Regio's aanzetten

De regio Zuid-Limburg (wonen en werken in de regio, met de sociale kaart) staat in productie nog
**uit**. Zolang hij uit staat, wordt het bestand van de regio nooit opgehaald. In ontwikkeling zie je
hem wel.

**De wijziging (één regel)** in `src/content/regio/index.ts`:

```ts
export const REGIONS_LIVE: boolean = true;   // was: false
```

**Eerst afvinken:**

- **Stand 14 november 2026:** 41 van de 44 regels van de sociale kaart staan op `official`
  (derde ronde, op de eigen sites: `docs/regio-controle.md`). Open: Adelante, De Domijnen en het
  keurmerk voor uitzendbureaus.
- [ ] Elke regel van de sociale kaart (`src/content/regio/zuid-limburg.ts`) is nagekeken: naam,
      telefoonnummer, website en wanneer je er terecht kunt. Zet daarna bij elke regel
      `source: 'official'`. Een test laat de regio pas aangaan als dat bij alle regels zo is.
- [ ] De ⚖️ in de regiolessen (`src/content/regio/zuid-limburg-regels.ts` en `zuid-limburg.ts`) zijn
      nagekeken, net als bij Werkregels.
- [ ] De dialectwoorden zijn nagekeken (bijvoorbeeld door Mestreechter Taol).
- [ ] In `tests/regio.test.ts` staat een test die controleert dat de regio's nog uit staan
      (`expect(REGIONS_LIVE).toBe(false)`). Pas die in dezelfde wijziging aan.
- [ ] Draai **Record ElevenLabs voices**: de zinnen van de regio worden altijd al meegenomen.

## Na elke merge naar main

statichost bouwt en publiceert de site uit `main`. Lukt dat niet, kijk dan in het dashboard van statichost.
Nieuwe of gewijzigde Nederlandse zinnen: draai in GitHub **Actions → Record ElevenLabs voices**.
De stappen (ook zonder GitHub, en wat er nog ontbreekt) staan in `opnames.md`.
