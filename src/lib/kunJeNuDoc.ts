import { KUN_REGELS, KUN_TAAL, KUN_VERTAALD, type KunOnderwerp } from '../content/kunJeNu';
import { THEMES } from '../content/themes';

/**
 * docs/kun-je-nu.md, made from src/content/kunJeNu.ts (`npm run kunjenu` writes it;
 * tests/kunJeNu.test.ts checks that the file is up to date). Not used by the app.
 */
export function kunJeNuMarkdown(): string {
  const cel = (t: string) => t.replace(/\|/g, '\\|');
  const tabel = (lijst: KunOnderwerp[]) => [
    '| Onderwerp | Zinnen | Past bij |',
    '|---|---|---|',
    ...lijst.flatMap((o) => o.zinnen.map((z, i) => `| ${i === 0 ? cel(o.titel) : ''} | ${cel(z.nl)} | ${z.niveau} · ${z.vaardigheid} |`)),
  ].join('\n');
  const vertaald = KUN_VERTAALD.map((id) => THEMES.find((t) => t.id === id)!.titleNl).join(', ');
  const taal = KUN_TAAL.reduce((n, o) => n + o.zinnen.length, 0);
  const regels = KUN_REGELS.reduce((n, o) => n + o.zinnen.length, 0);
  return `# Wat kun je nu? Zinnen per onderwerp

*Gemaakt uit \`src/content/kunJeNu.ts\` met \`npm run kunjenu\`. Pas de zinnen daar aan, niet hier.*

**Concept: een NT2-docent moet deze zinnen en niveaus nog nakijken.**

Bij elk onderwerp staan 2 of 3 korte zinnen in de ik-vorm: wat een leerling na de lessen van dat
onderwerp kan. De zinnen zeggen alleen wat de lessen echt oefenen. Ze staan in de app op het
certificaat-scherm, onder "Wat kun je nu?", en op het certificaat zelf als ze passen (hoogstens
3 regels). De begeleiderskaart laat alleen het aantal zien, met één voorbeeld.

## Wat "past bij" betekent

Bij elke zin staat een niveau en een vaardigheid waar de zin bij **past**:

- **Taal**: A1 of A2 van het ERK (Europees Referentiekader).
- **Werkregels**: 1F (Referentiekader taal; ongeveer A2).
- Vaardigheden: luisteren, spreken, lezen of gesprekken.

Dit is een richtlijn om de app in een les of traject in te passen. Het is **geen officieel
niveau**, geen toets en geen bewijs van een niveau.

## Vertalingen

De zinnen van Taal hebben een vertaling in de 13 hulptalen voor de thema's ${vertaald}
(\`src/i18n/kunjenu/\`, gemarkeerd met "nieuw, nalezen"). De andere thema's staan nog open
(TODO): daar staat de Engelse zin onder het Nederlands. Werkregels is alleen Nederlands.

## Taal (${KUN_TAAL.length} onderwerpen, ${taal} zinnen)

${tabel(KUN_TAAL)}

## Werkregels (${KUN_REGELS.length} onderwerpen, ${regels} zinnen)

${tabel(KUN_REGELS)}
`;
}
