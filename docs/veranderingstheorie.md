# Veranderingstheorie Vloertaal

*Eén pagina, voor fondsen, gemeenten en partners. Versie 1 november 2026. Vloertaal is een testversie. Wat hieronder staat, is een verwachting en nog geen bewezen effect.*

## Het probleem
Plaatsingen op werk lopen soms mis door taal. Iemand begrijpt een instructie of een veiligheidsregel niet goed, durft niet te vragen wat iets betekent, of mist hoe het op de werkvloer gaat: ziekmelden, het rooster, de loonstrook. Dat leidt tot misverstanden, onveilige situaties en uitval in de eerste weken. Een taalcursus helpt, maar is er vaak niet meteen, sluit niet altijd aan bij het werk en past slecht naast ploegendiensten. De eigenaar ziet dit in zijn werk als arbeidsbemiddelaar. Uit onderzoek (Kenniscentrum Arbeidsmigranten, panel 2023) blijkt dat meer dan de helft van de arbeidsmigranten weinig of geen Nederlands spreekt.

## De doelgroep
- **Leerlingen.** Nieuwkomers en arbeidsmigranten die (gaan) werken in Nederland of Vlaanderen, vooral in logistiek, productie, bouw, tuinbouw, schoonmaak, zorg en winkel. Ze lezen vaak weinig en hebben weinig tijd. Daarnaast mensen die al Nederlands spreken, maar de regels van het werk nog niet kennen (het spoor Werkregels, ook voor Entree/mbo).
- **Begeleiders.** Taalcoaches, NT2-docenten, jobcoaches, uitzendbureaus, werkgevers en taalhuizen. Zij zetten de app in en zien de voortgang alleen als de leerling die zelf laat zien.

## Wat de app doet
- Korte lessen van een paar minuten, op de eigen telefoon: woorden, zinnen en gesprekjes van de werkvloer, met geluid (AI-stemmen).
- Uitleg in 13 hulptalen, of in eenvoudig Nederlands dat de telefoon voorleest.
- Het spoor Werkregels: contract, loonstrook, ziekmelden en omgangsvormen, voor Nederland en België.
- Geen account, geen kosten, geen reclame. De voortgang blijft op de telefoon.
- Voor begeleiders: een kaart die de leerling zelf laat zien, een korte toets “Wat ken je al?” aan het begin en na ongeveer 4 weken, en een groepsoverzicht zonder namen (`/groep/`).

Vloertaal is een **aanvulling** op een taalcursus of coach, geen vervanging. De inhoud is nog niet nagekeken door een expert (NT2, juridisch).

## Wat we verwachten dat verandert

| Termijn | Verwachte verandering | Aanname |
|---|---|---|
| Kort (weken) | Leerlingen oefenen op meerdere dagen, een paar minuten per keer. | Korte lessen op de eigen telefoon passen naast het werk. |
| Kort (4 weken) | Ze kennen meer woorden en zinnen van hun eigen werk, en verstaan ze beter. | Herhalen in de context van het werk helpt onthouden. |
| Middellang (maanden) | Ze gebruiken die zinnen op het werk: vragen, melden, bevestigen. Ze durven vaker iets te vragen. | Wat geoefend is, wordt op het werk ook gezegd, zeker met een begeleider erbij. |
| Lang (jaar) | Minder misverstanden en onveilige situaties, minder uitval in de eerste weken, en vaker een volgende stap naar een taalcursus. | Taal is een van de oorzaken van uitval, niet de enige. De app kan hooguit een deel bijdragen. |

## Hoe we dat meten
Zonder account en zonder namen. Wat we niet kunnen meten, zeggen we eerlijk.

1. **Terugkomen.** De app telt per telefoon één keer de 1e, 2e, 7e, 14e en 28e oefendag (`/e/dag/1` … `/e/dag/28`, zie `src/lib/count.ts` en `/privacy/`). Daarvoor telt elke telefoon één keer dat de app voor het eerst opent en dat de start klaar is (`/e/eerste/geopend`, `/e/eerste/start-af`). Dat geeft een trechter: hoeveel nieuwe telefoons, hoeveel daarvan door de start en bij les 1, en hoeveel op dag 2, 7, 14 en 28. Zonder taal, sector of nummer, en uit te zetten.
2. **De toets “Wat ken je al?”.** Instap en eind, per onderdeel (luisteren, woorden, zinnen). De uitslag blijft op de telefoon. Alleen de begeleider ziet hem, als de leerling de kaart laat zien.
3. **Het groepsoverzicht** (`vloertaal.nl/groep`). De begeleider neemt per deelnemer de getallen van de kaart over, of plakt de korte code (bijvoorbeeld `VT1 O3 D12 V9/18 N13/18`). De pagina maakt groepstotalen: gemiddelde en mediaan van onderwerpen en oefendagen, hoeveel deelnemers terugkwamen, en de toets voor en na. Er gaat niets naar een server. De begeleider stuurt alleen de totalen door.
4. **De begeleiders.** Een kort gesprek of vragenlijst na 4 weken en na 3 maanden: wat zien ze op het werk? Wordt er vaker gevraagd en bevestigd? Zijn er minder misverstanden? Dat zijn waarnemingen, geen metingen.

**Wat dit niet bewijst.** Er is geen controlegroep. De toets is kort, heeft twee versies die nog niet vergeleken zijn, en is niet nagekeken. Wie meedoet, is waarschijnlijk al gemotiveerd. Een effect op uitval kunnen we alleen samen met een werkgever, uitzendbureau of onderzoekspartner onderzoeken. Zie `docs/evaluatie.md`.
