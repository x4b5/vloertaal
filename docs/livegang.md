# Livegang Vloertaal

Vloertaal is gratis en heeft geen verdienmodel. Het doel is mensen een toegankelijke manier geven om
Nederlands te leren voor hun werk. Daarom past het gratis **Vercel Hobby**-plan: dat is bedoeld
voor niet-commercieel gebruik. Bij ongeveer 2.500 tot 5.000 actieve leerders per maand kom je aan
de 100 GB per maand. Daarboven is Pro nodig (ongeveer $20 per maand) of een andere host.

## Stand van zaken

| | Wat | Status |
|---|---|---|
| ✅ | App werkt, 873 automatische tests, max. 3 tikbare dingen per scherm | klaar |
| ✅ | Hosting op Vercel; GitHub draait alleen nog de tests (geen tweede kopie op GitHub Pages) | klaar |
| ✅ | Domein `vloertaal.nl` gekoppeld (vercel.json, deelplaatje, canonical, robots, sitemap) | klaar |
| ✅ | Contact `hoi@vloertaal.nl` en privacy op de pagina *Over* | klaar |
| ✅ | Stemmen: ElevenLabs betaald plan, commercieel gebruik toegestaan | klaar |
| ✅ | Pilot gestart (15 oktober 2026, LinkedIn); code per bericht, niet openbaar | loopt |
| ⏳ | Nieuwe zinnen opnemen na elke merge met nieuwe Nederlandse tekst | jij: workflow draaien, zie onderaan |
| ⏳ | Vertalingen laten nakijken door moedertaalsprekers | zie `vertaalcontrole.md` |
| ⏳ | Werkvloer-tips laten nakijken door FNV / Juridisch Loket / FairWork | zie `juridische-check.md` |
| ⏳ | Werkregels aanzetten (`RULES_TRACK`) | na de controle, zie hieronder |
| ⏳ | Regio Zuid-Limburg aanzetten (`REGIONS_LIVE`) | na controle van de sociale kaart, zie hieronder |

## Domein koppelen (vloertaal.nl)

1. **Aanvragen** bij een registrar naar keuze, bijvoorbeeld TransIP, Versio of Hostnet. Alleen de
   domeinnaam is genoeg: geen hosting- of e-mailpakket nodig, tenzij je ook een mailadres
   `@vloertaal.nl` wilt (zie "Contact" hieronder).
2. **In Vercel:** open het project → *Settings* → *Domains* → voeg `vloertaal.nl` toe en ook
   `www.vloertaal.nl`.
3. **DNS bij je registrar:** Vercel laat precies zien welke records nodig zijn. Neem die over.
   Meestal is dat:
   - voor `vloertaal.nl`: een **A-record** naar het IP-adres dat Vercel toont;
   - voor `www`: een **CNAME-record** naar het adres dat Vercel toont.

   Of zet in één keer de **nameservers** van het domein op die van Vercel. Dan regelt Vercel de
   DNS zelf.
4. Na een paar minuten tot een paar uur staat er een groen vinkje in Vercel. Het
   HTTPS-certificaat komt vanzelf.
5. `www.vloertaal.nl` stuurt automatisch door naar `vloertaal.nl` (dat staat in `vercel.json`).
   Zet in Vercel `vloertaal.nl` als hoofddomein (*primary*).
6. **Testen:**
   - open `https://vloertaal.nl` op je telefoon;
   - deel de link in WhatsApp: je ziet het plaatje met Bram;
   - installeer de app via "Toevoegen aan beginscherm".

Het oude `.vercel.app`-adres blijft werken. Wie de app al heeft geïnstalleerd, houdt die versie
met de voortgang op dat adres. Voortgang staat op de telefoon per adres en verhuist niet mee.
Deel daarom vanaf nu alleen nog `vloertaal.nl`.

## Instellingen in Vercel

- **Environment Variables** → `ELEVENLABS_API_KEY` (alleen *Production*): dan toont de verborgen
  beheerpagina (`vloertaal.nl/#beheer`) het ElevenLabs-saldo. Het saldo wordt bij elke publicatie
  ververst. Optioneel.
- Hobby-plan is genoeg zolang Vloertaal gratis en niet-commercieel blijft.

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

## Werkregels aanzetten

Werkregels is het spoor voor mensen die al Nederlands spreken ("Nederlands – ik spreek al
Nederlands" in de talenlijst). Het is klaar, maar staat in productie nog **uit**. Jij beslist wanneer
het aangaat. Tot dan zie je het alleen in ontwikkeling, met `?rules=1` achter het adres.

**De wijziging (één regel)** in `src/lib/track.ts`:

```ts
export const RULES_TRACK: boolean = true;   // was: false
```

Daarna een gewone merge naar `main`; Vercel publiceert vanzelf.

**Eerst afvinken:**

- [ ] Een deskundige (jurist, vakbond of Juridisch Loket) heeft elke ⚖️ nagekeken: de lijst in
      [`werkregels-bronnen.md`](werkregels-bronnen.md) (vooral §5, "Niet geverifieerd") en de
      ⚖️ in [`werkregels-curriculum.md`](werkregels-curriculum.md).
- [ ] Ook de telefoonnummers op de Hulp-pagina ("Wie bel je?", `src/content/regels/help.ts`).
      Nummers met `// ⚖️ check` staan nog niet in de lessen of de bronnen: politie zonder spoed
      0900-8844 en de site van FairWork (fairwork.nu).
- [ ] De datum in `RULES_CHECKED` (`src/content/regels/disclaimer.ts`) is de datum van die
      controle. Die datum staat in de app bij "Goed om te weten".
- [ ] Getest op een echte telefoon (Android en iPhone), met en zonder Nederlandse voorleesstem:
      taal kiezen → code → sector → eerste les → Hulp (een nummer bellen opent de telefoon) →
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

Vercel publiceert vanzelf. Lukt dat niet, kijk dan in Vercel bij *Deployments*.
Nieuwe of gewijzigde Nederlandse zinnen: draai in GitHub **Actions → Record ElevenLabs voices**.
