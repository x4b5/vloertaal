import type { RuleStep } from './types';

type ModelStep = Extract<RuleStep, { kind: 'model' }>;
type WhatdoStep = Extract<RuleStep, { kind: 'whatdo' }>;

/**
 * "Wat zeg je?": in a review the model sentence of a lesson ("Zo zeg je het") comes back as a
 * question, with two worse sentences beside it. Each wrong one is something a person could
 * really say, worse for one plain reason (too vague, says nothing, too angry, gives away what
 * you need not give), and about as long as the model sentence. By the id of the model step.
 */
export const zegHetWrong: Record<string, readonly [{ text: string; feedback: string }, { text: string; feedback: string }]> = {
  'r.l.zoeken.1.mo1': [
    { text: 'Hallo, ik zoek werk. Heeft u misschien iets voor mij?', feedback: 'Dan weet het bedrijf niet over welke vacature je belt.' },
    { text: 'Hallo, ik wil die baan. Wanneer kan ik beginnen?', feedback: 'Je weet nog niet of de vacature open is. Vraag dat eerst.' },
  ],
  'r.l.zoeken.2.mo1': [
    { text: 'Mijn cv is af. Ik stuur het meteen weg.', feedback: 'Dan kijkt niemand of er fouten in staan.' },
    { text: 'Ik zet er wat extra banen bij, oké?', feedback: 'Je cv moet eerlijk zijn. Een werkgever kan het nakijken.' },
  ],
  'r.l.zoeken.3.mo1': [
    { text: 'Dat gaat u helemaal niets aan. Stel maar een andere vraag.', feedback: 'Dat klinkt boos. Je kunt ook rustig iets anders voorstellen.' },
    { text: 'Oké, ik vertel het wel. Ik wil deze baan heel graag.', feedback: 'Je hoeft niet alles te vertellen. Je mag beleefd nee zeggen.' },
  ],
  'r.l.zoeken.4.mo1': [
    { text: 'Goed, ik teken het nu. U zegt vast wel wat erin staat.', feedback: 'Dan teken je iets wat je niet hebt gelezen.' },
    { text: 'Ik teken niets. Ik vertrouw dit bedrijf helemaal niet.', feedback: 'Dat klinkt boos. Je mag gewoon rustig om tijd vragen.' },
  ],
  'r.l.start.1.mo1': [
    { text: 'Hallo. Ik ben nieuw hier. Ik wacht wel even bij de deur.', feedback: 'Dan weet niemand wie je bent. Zeg je naam en vraag het.' },
    { text: 'Hallo. Ik begin vandaag. Waar kan ik mijn spullen laten?', feedback: 'Je zegt niet wie je bent. En je weet nog niet bij wie je je meldt.' },
  ],
  'r.l.start.2.mo1': [
    { text: 'Hoi. Ik ben nieuw hier. Ik ga maar aan het werk.', feedback: 'Dan weet je collega je naam niet. Je vraagt ook niets.' },
    { text: 'Hoi. Ik ben Jayden. Hoe oud ben jij eigenlijk?', feedback: 'Naar iemands leeftijd vraag je niet meteen. Vraag eerst de naam.' },
  ],
  'r.l.start.3.mo1': [
    { text: 'Ja ja, ik snap het. Ik begin wel gewoon.', feedback: 'Dan weet niemand of je het echt goed begrijpt.' },
    { text: 'Kunt u alles nog een keer helemaal uitleggen?', feedback: 'Dan weet de ander niet wat je al begrepen hebt.' },
  ],
  'r.l.afronden.1.mo1': [
    { text: 'Ik snap de werkbon niet. Kun je alles nog eens zeggen?', feedback: 'Dan weet de ander niet welk stuk je niet snapt.' },
    { text: 'Ik weet niet wat type B is. Ik pak wel gewoon iets.', feedback: 'Dan gok je. Zo kan het werk fout gaan.' },
  ],
  'r.l.afronden.2.mo1': [
    { text: 'Ik ben klaar. Ik ga nu naar huis. Tot morgen!', feedback: 'Dan weet je leidinggevende niet dat kamer 4 op slot zat.' },
    { text: 'Ik ben bijna overal klaar. Er was een probleem, maar oké.', feedback: 'Dan weet je leidinggevende niet welk probleem. Zeg wat er was.' },
  ],
  'r.l.contract.1.mo1': [
    { text: 'Oké, we spreken het gewoon samen af. Dat is ook goed.', feedback: 'Een afspraak die je alleen zegt, is moeilijk te bewijzen.' },
    { text: 'Ik vertrouw u niet. Zet het nu meteen op papier!', feedback: 'Dat klinkt boos. Je kunt het ook rustig vragen.' },
  ],
  'r.l.contract.2.mo1': [
    { text: 'Oké, dan ga ik maar. Jammer dan.', feedback: 'Dan weet je niet waarom. Je mag om de reden vragen.' },
    { text: 'Dit is oneerlijk! U bent een slechte baas!', feedback: 'Dat klinkt boos. Vraag liever rustig om de reden op papier.' },
  ],
  'r.l.contract.3.mo1': [
    { text: 'Oké, dan kom ik zaterdag toch maar. Ik zeg wel iets anders af.', feedback: 'Je mag nee zeggen als de oproep te laat komt.' },
    { text: 'Zaterdag? Nee, dat gaat niet. Bel me maar niet meer zo laat.', feedback: 'Dat klinkt boos. Zeg ook wanneer je wel kunt.' },
  ],
  'r.l.contract.4.mo1': [
    { text: 'Het maakt mij niet uit wat ik ben. Als ik maar werk heb.', feedback: 'Het is wel belangrijk. Werknemer of zzp\'er geeft andere rechten.' },
    { text: 'Ik vraag het wel aan een collega. Die weet het vast.', feedback: 'Een collega weet het misschien niet. Vraag het aan je baas.' },
  ],
  'r.l.stage.1.mo1': [
    { text: 'Oké, ik begin vandaag al. De POK komt later wel.', feedback: 'Zonder getekende POK begin je beter nog niet.' },
    { text: 'Ik weet niet of het mag. Ik zeg maar niets.', feedback: 'Dan weet je niet of de POK klaar is. Vraag het gewoon.' },
  ],
  'r.l.stage.2.mo1': [
    { text: 'Ik ben klaar. Ik ga maar door met de volgende klus.', feedback: 'Dan hoor je niet wat goed ging en wat beter kan.' },
    { text: 'Het ging toch goed? Ik heb geen tips nodig.', feedback: 'Zo vraag je geen feedback. Dan leer je minder.' },
  ],
  'r.l.stage.3.mo1': [
    { text: 'Het is hier saai. Ik kom morgen gewoon niet meer.', feedback: 'Dan los je niets op. Praat eerst met school en het bedrijf.' },
    { text: 'Ik leer weinig, maar ik zeg er maar niets over.', feedback: 'Dan verandert er niets. Je mag het zeggen.' },
  ],
  'r.l.loon.1.mo1': [
    { text: 'Mijn loon is te laag. U betaalt mij gewoon te weinig!', feedback: 'Netto is minder dan bruto. Vraag eerst rustig om uitleg.' },
    { text: 'Ik snap mijn loonstrook niet. Maar het is vast wel goed.', feedback: 'Dan weet je niet of het klopt. Je mag om uitleg vragen.' },
  ],
  'r.l.loon.2.mo1': [
    { text: 'Mijn loonstrook klopt niet. Er is iets mis met de uren, denk ik.', feedback: 'Dan weet de baas niet welke uren fout zijn. Noem de getallen.' },
    { text: 'Op mijn loonstrook staan te weinig uren. U wilt mij oplichten!', feedback: 'Dat klinkt boos. Het kan ook een fout zijn.' },
  ],
  'r.l.loon.3.mo1': [
    { text: 'Ik heb wat langer gewerkt de laatste tijd. Dat is toch goed?', feedback: 'Dan weet de baas niet hoeveel uur. En je vraagt niets.' },
    { text: 'Ik heb 10 uur overgewerkt. Maar dat geeft niet, hoor. Laat maar.', feedback: 'Je mag vragen wat je voor je overuren krijgt.' },
  ],
  'r.l.rekenen.1.mo1': [
    { text: 'Mijn rooster is raar. Er staan volgens mij te veel uren op.', feedback: 'Noem de uren. Dan kan de baas het snel nakijken.' },
    { text: '26 uur is te veel. Ik werk maar 24 uur, en verder niet!', feedback: 'Dat klinkt boos. Vraag eerst of het klopt.' },
  ],
  'r.l.rekenen.2.mo1': [
    { text: 'Ik heb deze week gewerkt. Ik weet niet wat ik krijg.', feedback: 'Zeg je uren en het bedrag. Dan kun je het samen nakijken.' },
    { text: 'Ik reken het niet na. De baas doet dat wel goed.', feedback: 'Ook een baas maakt soms fouten. Reken het zelf ook na.' },
  ],
  'r.l.rekenen.3.mo1': [
    { text: 'Er staan 40 dozen op de pakbon. Ik teken gewoon voor 40.', feedback: 'Dan teken je voor dozen die er niet zijn.' },
    { text: 'Ik geloof dat er een paar dozen missen, of zo.', feedback: 'Dan weet niemand hoeveel. Noem wat je telt.' },
  ],
  'r.l.tijd.1.mo1': [
    { text: '13 uur is wel lang. Maar ik zeg er maar niets van.', feedback: 'Dan verandert er niets. Je mag vragen wat de regels zijn.' },
    { text: '13 uur? Dat doe ik echt niet. Zoek maar iemand anders!', feedback: 'Dat klinkt boos. Vraag liever rustig naar de regels.' },
  ],
  'r.l.tijd.2.mo1': [
    { text: 'Ik heb nog geen pauze gehad. Maar het is goed, ik werk door.', feedback: 'Je hebt recht op pauze. Vraag wanneer je kunt gaan.' },
    { text: 'Ik heb geen pauze gehad. Ik ga nu weg, ik zie jullie straks.', feedback: 'Dan weet niemand waar je bent. Vraag het eerst.' },
  ],
  'r.l.tijd.3.mo1': [
    { text: 'Eh, ja, oké. Ik blijf vandaag dan wel langer.', feedback: 'Je mag nee zeggen. Zeg dan wanneer het wel kan.' },
    { text: 'Nee. Ik werk nooit langer dan mijn uren. Klaar.', feedback: 'Dat klinkt hard. Je kunt ook zeggen wanneer het wel kan.' },
  ],
  'r.l.tijd.4.mo1': [
    { text: 'Ik wil in de zomer een tijdje vrij. Is dat goed?', feedback: 'Dan weet de baas niet welke dagen. Noem de data.' },
    { text: 'Ik ben van 1 tot en met 21 juli weg. Dat zeg ik nu.', feedback: 'Je vraagt vrij aan. De baas moet eerst ja zeggen.' },
  ],
  'r.l.tijd.5.mo1': [
    { text: 'Mijn kind is ziek. Ik ben nu weg, ik bel later wel.', feedback: 'Wacht even op antwoord. Dan weet je baas wat er gebeurt.' },
    { text: 'Er is iets thuis. Ik moet misschien even weg, denk ik.', feedback: 'Dan weet je baas niet wat er is. Zeg dat je kind ziek is.' },
  ],
  'r.l.winkel.1.mo1': [
    { text: 'U kunt er wel langs. Het past heus wel.', feedback: 'De klant kan er niet goed langs. Zet de container opzij.' },
    { text: 'Ik ben aan het werk. Loop maar om.', feedback: 'Dat klinkt onbeleefd. De klant gaat voor.' },
  ],
  'r.l.winkel.2.mo1': [
    { text: 'Ik denk dat het zo is. Dat klopt vast wel, hoor.', feedback: 'Dan gok je. De klant krijgt dan misschien een fout antwoord.' },
    { text: 'Dat weet ik niet. Dat is niet mijn afdeling, sorry.', feedback: 'Dan heeft de klant nog geen antwoord. Vraag het na.' },
  ],
  'r.l.winkel.3.mo1': [
    { text: 'Daar kan ik niets aan doen. Dat moet u maar thuis oplossen.', feedback: 'Dan help je de klant niet. Vraag naar de bon of haal hulp.' },
    { text: 'U hoeft niet zo te schreeuwen. Doe eens even rustig, mevrouw.', feedback: 'Dat maakt de klant bozer. Zeg eerst dat het vervelend is.' },
  ],
  'r.l.ziek.1.mo1': [
    { text: 'Hoi, ik voel me niet zo goed. Misschien kom ik later nog.', feedback: 'Dan weet je werk niet of je komt. Zeg duidelijk dat je ziek bent.' },
    { text: 'Goedemorgen. Ik ben ziek. Ik heb koorts en buikpijn en hoofdpijn.', feedback: 'Dat mag, maar het hoeft niet. Zeg alleen dat je ziek bent.' },
  ],
  'r.l.ziek.2.mo1': [
    { text: 'Ik vertel u precies wat ik heb en welke pillen ik slik.', feedback: 'Dat mag, maar het hoeft niet. Zeg hoe lang het ongeveer duurt.' },
    { text: 'Ik weet het niet. Ik bel wel als ik weer beter ben.', feedback: 'Dan weet je baas niets. Zeg hoe lang het ongeveer duurt.' },
  ],
  'r.l.ziek.3.mo1': [
    { text: 'Ik voel me wat beter. Ik kom wel een keer terug.', feedback: 'Dan weet je baas niet wanneer je komt. Noem een dag.' },
    { text: 'Ik ben beter. Dat zeg ik morgen wel tegen een collega.', feedback: 'Je meldt je beter bij je leidinggevende. Niet bij een collega.' },
  ],
  'r.l.veilig.1.mo1': [
    { text: 'Mijn handschoenen zijn kapot. Ik werk wel zonder verder.', feedback: 'Dan kun je je pijn doen. Vraag om nieuwe handschoenen.' },
    { text: 'Ik koop zelf wel nieuwe handschoenen. Wat kosten ze?', feedback: 'Je baas geeft beschermende spullen. Je hoeft ze niet zelf te kopen.' },
  ],
  'r.l.veilig.2.mo1': [
    { text: 'Hm, dit lijkt me niet zo fijn.', feedback: 'Dat is te zacht. Bij direct gevaar zeg je duidelijk stop.' },
    { text: 'Ik zeg het straks wel tegen de baas.', feedback: 'Bij direct gevaar wacht je niet. Zeg meteen stop.' },
  ],
  'r.l.veilig.3.mo1': [
    { text: 'Ik ben gevallen. Maar het is niets, laat maar.', feedback: 'Meld het toch. Soms merk je later pas dat je pijn hebt.' },
    { text: 'Ik ben gevallen. Dit is jullie schuld, echt waar!', feedback: 'Dat klinkt boos. Meld eerst rustig wat er is gebeurd.' },
  ],
  'r.l.samen.1.mo1': [
    { text: 'Waarom zeg je dat zo? Dat is niet aardig.', feedback: 'Directe feedback is hier normaal. De ander wil je helpen.' },
    { text: 'Ja, ja. Ik doe het wel op mijn manier.', feedback: 'Dan leer je niets van de feedback. Probeer het eens zo.' },
  ],
  'r.l.samen.2.mo1': [
    { text: 'Nou ja, het is goed. Ik zeg maar niets.', feedback: 'Je mag je mening zeggen. Dat is normaal in een overleg.' },
    { text: 'Dat is echt een dom plan. Dat werkt nooit.', feedback: 'Dat klinkt onbeleefd. Zeg rustig dat je het anders ziet.' },
  ],
  'r.l.samen.3.mo1': [
    { text: 'Ik zeg het vrijdag wel als het niet lukt.', feedback: 'Zeg het zo snel als je het weet. Dan kan de ander plannen.' },
    { text: 'Vrijdag gaat misschien niet. We zien wel.', feedback: 'Dan weet de ander het nog niet. Zeg ook een nieuwe dag.' },
  ],
  'r.l.samen.4.mo1': [
    { text: 'Ik ben jarig. Wat hebben jullie voor mij gekocht?', feedback: 'Hier neem je zelf iets mee als je jarig bent.' },
    { text: 'Ik ben jarig, maar ik zeg het maar niet.', feedback: 'Dat mag. Maar collega\'s vinden het vaak leuk om te weten.' },
  ],
  'r.l.rechten.1.mo1': [
    { text: 'Iedereen hier is tegen mij. Jullie zijn allemaal racisten!', feedback: 'Dat klinkt boos. Dan is een goed gesprek moeilijk.' },
    { text: 'Ik merk het wel, maar ik zeg er niets van. Het gaat wel.', feedback: 'Dan verandert er niets. Je mag erover praten.' },
  ],
  'r.l.rechten.2.mo1': [
    { text: 'Eh, haha, dat is wel goed.', feedback: 'Dan denkt de ander dat het mag. Zeg duidelijk stop.' },
    { text: 'Ik vind het niet zo fijn, hoor.', feedback: 'Dat is te zacht. Zeg kort en duidelijk: stop.' },
  ],
  'r.l.rechten.3.mo1': [
    { text: 'Oké, houd mijn paspoort maar. Dan is het veilig.', feedback: 'Je paspoort is van jou. Je baas mag het niet houden.' },
    { text: 'Ik vraag het later wel. Ik wil geen ruzie.', feedback: 'Je hoeft niet te wachten. Vraag het nu terug.' },
  ],
  'r.l.rechten.4.mo1': [
    { text: 'Oké, ik teken wel. Dan is het maar klaar.', feedback: 'Je hoeft niet meteen te tekenen. Laat het eerst nakijken.' },
    { text: 'Ik teken niets! U bent een slechte baas!', feedback: 'Dat klinkt boos. Zeg rustig dat je het eerst laat nakijken.' },
  ],
  'r.l.geld.1.mo1': [
    { text: 'Mijn contract stopt. Ik wacht wel tot er geld komt.', feedback: 'WW komt niet vanzelf. Je moet het zelf aanvragen.' },
    { text: 'Ik vraag mijn baas wel om de WW voor mij te regelen.', feedback: 'Je baas regelt je WW niet. Dat doe je zelf.' },
  ],
  'r.l.geld.2.mo1': [
    { text: 'Ik heb werk gevonden. Dat hoeft niemand te weten, toch?', feedback: 'Nieuw werk moet je doorgeven. Vraag wat het betekent voor je uitkering.' },
    { text: 'Ik heb werk. Ik stop gewoon zelf met mijn uitkering.', feedback: 'Dan weet je niet wat je moet regelen. Vraag het eerst.' },
  ],
  'r.l.geld.3.mo1': [
    { text: 'Ik heb een brief van de Belastingdienst. Ik gooi hem maar weg.', feedback: 'Dan mis je misschien iets belangrijks. Vraag om hulp.' },
    { text: 'Ik heb een brief gekregen. Kun je ergens mee helpen?', feedback: 'Dan weet de ander niet waarmee. Zeg van wie de brief is.' },
  ],
  'r.l.geld.4.mo1': [
    { text: 'Ik heb wat problemen. Het gaat wel.', feedback: 'Dan weet niemand dat het om schulden gaat.' },
    { text: 'Ik leen wel weer geld bij een vriend.', feedback: 'Dan worden je schulden groter. Vraag liever vroeg hulp.' },
  ],
  'r.l.geld.5.mo1': [
    { text: 'Mijn contract stopt. Ik heb nog vrije dagen, maar die laat ik zitten.', feedback: 'Je hebt recht op je vakantiegeld en je vrije dagen. Vraag ernaar.' },
    { text: 'Mijn contract stopt. Ik krijg vast nog wel wat geld, denk ik.', feedback: 'Dan weet je niet wat je krijgt. Vraag het precies.' },
  ],
  'r.l.digitaal.1.mo1': [
    { text: 'Oké, hier is mijn DigiD. Mijn wachtwoord stuur ik ook.', feedback: 'Je DigiD is alleen van jou. Deel hem met niemand.' },
    { text: 'Wat een rare vraag. U bent vast een oplichter!', feedback: 'Dat klinkt boos. Zeg rustig nee en vraag om een andere manier.' },
  ],
  'r.l.digitaal.2.mo1': [
    { text: 'Ik heb op een rare link geklikt. Ik zeg het maar niet.', feedback: 'Zeg het meteen. Dan kan iemand snel helpen.' },
    { text: 'Ik heb op een link geklikt. Ik vul mijn wachtwoord wel in.', feedback: 'Vul niets in. Vraag eerst wat je moet doen.' },
  ],
  'r.l.digitaal.3.mo1': [
    { text: 'Ik gebruik gewoon AI. Dat doet toch iedereen?', feedback: 'Dat mag niet altijd. Vraag het eerst.' },
    { text: 'Ik zet alles van het werk in AI.', feedback: 'Informatie van je werk kan geheim zijn. Vraag eerst of het mag.' },
  ],
  'r.l.meedoen.1.mo1': [
    { text: 'Ik weet niet of ik mag stemmen. Ik ga maar niet.', feedback: 'Vraag het aan de gemeente. Dan weet je het zeker.' },
    { text: 'Hallo, ik heb een vraag over de verkiezingen.', feedback: 'Dan weet de gemeente nog niet wat je wilt weten.' },
  ],
  'r.l.meedoen.2.mo1': [
    { text: 'Er is iets naars gebeurd. Ik weet niet zo goed wat.', feedback: 'Dan weet het meldpunt niet waarom je belt. Zeg het duidelijk.' },
    { text: 'Ik wil discriminatie melden. Maar het helpt toch niet.', feedback: 'Een melding kan wel helpen. Vraag wat je moet doen.' },
  ],
  'r.l.meedoen.3.mo1': [
    { text: 'Deze boete klopt niet. Ik betaal hem dan maar.', feedback: 'Je mag bezwaar maken als de boete niet klopt.' },
    { text: 'Deze boete is onzin! Ik betaal helemaal niets, hoor!', feedback: 'Dat klinkt boos. Vraag rustig hoe je bezwaar maakt.' },
  ],
  'r.l.duurzaam.1.mo1': [
    { text: 'Ik gooi het wel ergens.', feedback: 'Dan komt het misschien in de verkeerde bak.' },
    { text: 'Zoek jij maar uit waar dit moet.', feedback: 'Dat klinkt onbeleefd. Vraag het gewoon zelf.' },
  ],
  'r.l.duurzaam.2.mo1': [
    { text: 'De lampen en de kraan? Dat is niet mijn probleem.', feedback: 'Zuinig zijn helpt iedereen. Zeg het tegen iemand.' },
    { text: 'Ik doe alle lampen uit en ik maak de kraan zelf.', feedback: 'Vraag eerst of het mag. Misschien zijn de lampen nodig.' },
  ],
  'r.l.warehouse.1.mo1': [
    { text: 'Oké, ik probeer het wel even. Zo moeilijk is het niet.', feedback: 'Zonder certificaat mag je niet op de heftruck. Dat is gevaarlijk.' },
    { text: 'Eh, misschien later. Ik heb nu even geen tijd.', feedback: 'Zeg de echte reden. Dan vraagt niemand het je weer.' },
  ],
  'r.l.warehouse.2.mo1': [
    { text: 'Ik haal de norm niet. Ik sla de pauze wel over.', feedback: 'Je pauze heb je nodig. Vraag liever om tips.' },
    { text: 'Die norm is veel te hoog. Dat haalt niemand.', feedback: 'Misschien is dat zo. Maar vraag eerst hoe de norm werkt.' },
  ],
  'r.l.build.1.mo1': [
    { text: 'Ik werk vandaag wel even op mijn gewone schoenen.', feedback: 'Dan kun je je voeten pijn doen. Vraag om veiligheidsschoenen.' },
    { text: 'Ik heb geen veiligheidsschoenen. Mag ik die van een collega?', feedback: 'Schoenen moeten passen. Vraag je baas om eigen veiligheidsschoenen.' },
  ],
  'r.l.build.2.mo1': [
    { text: 'Er hangt iets boven het pad. Ik loop er wel snel onder door.', feedback: 'Dat is gevaarlijk. Begin pas als het veilig is.' },
    { text: 'Ik vind het hier niet fijn. Ik begin later wel.', feedback: 'Dan weet niemand wat het gevaar is. Zeg wat je ziet.' },
  ],
  'r.l.factory.1.mo1': [
    { text: 'Henk, er zit een doos vast. Ik haal hem er snel zelf uit.', feedback: 'Eerst moet de machine uit. Anders kun je je pijn doen.' },
    { text: 'Henk, de machine doet raar. Kom je even?', feedback: 'Dan weet Henk niet wat er is. Zeg ook wat je al deed.' },
  ],
  'r.l.factory.2.mo1': [
    { text: 'Ik heb net nachtdienst gehad. Maar ik kom wel, hoor.', feedback: 'Na een nachtdienst heb je rust nodig. Je mag dat zeggen.' },
    { text: 'Ik kom niet. Zoek maar een ander, ik ben moe.', feedback: 'Dat klinkt boos. Zeg rustig dat je eerst rust nodig hebt.' },
  ],
  'r.l.care.1.mo1': [
    { text: 'Mijn ring blijft om. Hij is klein, dat is wel goed.', feedback: 'Ook een kleine ring houdt vuil vast. Sieraden gaan af.' },
    { text: 'Mijn ring en horloge gaan af. Ik leg ze wel ergens neer.', feedback: 'Dan raak je ze misschien kwijt. Vraag waar het veilig is.' },
  ],
  'r.l.care.2.mo1': [
    { text: 'Ik heb dit nog niet geleerd. Maar ik probeer het wel even.', feedback: 'Dan kan het fout gaan. Vraag eerst om uitleg.' },
    { text: 'Ik heb dit niet geleerd. Doe jij het maar, ik doe het niet.', feedback: 'Dat klinkt onbeleefd. Vraag liever of iemand het je leert.' },
  ],
  'r.l.horeca.1.mo1': [
    { text: 'Deze saus stond lang buiten. Ik gebruik hem toch maar.', feedback: 'Dan kan iemand ziek worden. Vraag het eerst aan de chef.' },
    { text: 'Ik denk dat er iets mis is met iets. Is dat erg?', feedback: 'Dan weet de chef niet wat je bedoelt. Zeg welke saus.' },
  ],
  'r.l.horeca.2.mo1': [
    { text: 'Ik denk dat het wel goed is. Er zit vast niets in.', feedback: 'Bij allergenen gok je niet. Een gast kan er ziek van worden.' },
    { text: 'Dat weet ik niet. Kijkt u maar zelf op de kaart.', feedback: 'Dan help je de gast niet. Vraag het in de keuken.' },
  ],
  'r.l.clean.1.mo1': [
    { text: 'Ik werk vanavond alleen. Dat lukt wel, ik bel niemand.', feedback: 'Er kan iets gebeuren. Vraag wie je dan kunt bellen.' },
    { text: 'Ik werk vanavond alleen. Ik bel dan wel een vriend.', feedback: 'Een vriend kan op je werk niet helpen. Vraag wie je kunt bellen.' },
  ],
  'r.l.clean.2.mo1': [
    { text: 'Ik krijg pijn in mijn rug. Maar dat hoort er wel bij.', feedback: 'Pijn hoort er niet bij. Vraag om betere spullen.' },
    { text: 'Mijn rug doet een beetje pijn. Ik weet niet waarom.', feedback: 'Zeg wat de pijn geeft. Dan kan je baas iets doen.' },
  ],
  'rg.zl.r.l.1.mo1': [
    { text: 'Goedemorgen. Ik woon ergens anders nu. Wat moet ik daarmee doen?', feedback: 'Zeg dat je je wilt inschrijven. Dan weet de gemeente wat je wilt.' },
    { text: 'Goedemorgen. Ik ben verhuisd, maar inschrijven doe ik later wel een keer.', feedback: 'Je moet je op tijd inschrijven. Wacht er niet mee.' },
  ],
  'rg.zl.r.l.2.mo1': [
    { text: 'Ik begin om 6 uur. Ik kom dan maar wat later, dat is goed toch?', feedback: 'Dan kom je te laat. Vraag liever om een oplossing.' },
    { text: 'Er rijdt geen bus om 6 uur. Dat is jullie probleem, niet het mijne.', feedback: 'Dat klinkt boos. Vraag rustig of er een oplossing is.' },
  ],
  'rg.zl.r.l.3.mo1': [
    { text: 'Ik krijg werk in Duitsland. Ik regel het later wel, als het nodig is.', feedback: 'Wacht niet te lang. Vraag het voor je begint.' },
    { text: 'Ik heb een vraag over werk en over de grens en zo.', feedback: 'Dan weet het GrensInfoPunt niet wat je bedoelt. Zeg waar je woont en werkt.' },
  ],
  'rg.zl.r.l.4.mo1': [
    { text: 'Ja hoor, ik snap het. Ik doe wel gewoon mee met jullie.', feedback: 'Dan weet je niet wat je collega zegt. Vraag het gewoon.' },
    { text: 'Praat eens normaal! Dit dialect versta ik echt niet.', feedback: 'Dat klinkt onbeleefd. Vraag het vriendelijk.' },
  ],
  'rg.zl.r.l.5.mo1': [
    { text: 'Ik heb wat problemen thuis. Weet u misschien iets voor mij?', feedback: 'Dan weet de gemeente niet waarmee. Zeg dat het over rekeningen gaat.' },
    { text: 'Ik heb rekeningen open. Ik wacht wel tot het beter gaat.', feedback: 'Wachten maakt het vaak erger. Vraag op tijd hulp.' },
  ],
  // Sector Tuinbouw (PR #136).
  'r.l.kas.1.mo1': [
    { text: 'Er hangt een bordje op de deur. Dat lees ik straks wel.', feedback: 'Het bordje kan zeggen dat de kas net bespoten is. Vraag het eerst.' },
    { text: 'Ik ga gewoon naar binnen. Het is maar een bordje.', feedback: 'Dan kun je ziek worden van de spuitmiddelen. Vraag of het al mag.' },
  ],
  'r.l.kas.2.mo1': [
    { text: 'Mijn loon is vast wel goed. Ik kijk er niet naar.', feedback: 'Dan zie je een fout niet. Vergelijk je uren met je loonstrook.' },
    { text: 'Mijn loon is te laag! Jullie betalen altijd te weinig.', feedback: 'Dat klinkt boos. Laat je lijst zien en vraag of het klopt.' },
  ],
  // The second Entree round (docs/werkregels-curriculum.md, deel 7).
  'r.l.veilig.4.mo1': [
    { text: 'Ik ben moe, maar dat maakt niet uit. Ik werk gewoon.', feedback: 'Moe werken is gevaarlijk. Zeg het, en vraag ander werk.' },
    { text: 'Ik ben moe. Ik ga maar even op de wc zitten.', feedback: 'Dan weet niemand het. Zeg het eerlijk.' },
  ],
  'r.l.veilig.5.mo1': [
    { text: 'Mijn collega is weer dronken. Die is echt niet normaal!', feedback: 'Dat klinkt boos. Zeg rustig wat je ziet.' },
    { text: 'Er is iets met een collega, maar ik zeg niet wie.', feedback: 'Dan kan je leidinggevende niets doen. Zeg wat er is.' },
  ],
  'r.l.geld.6.mo1': [
    { text: 'Ik spaar wel. Maar alleen als er geld over is.', feedback: 'Vaak is er dan niets meer over. Spaar meteen na je loon.' },
    { text: 'Kan ik alvast geld lenen? Dan heb ik altijd genoeg.', feedback: 'Lenen is geen sparen. Je moet het terugbetalen, met rente.' },
  ],
  'r.l.geld.7.mo1': [
    { text: 'Die jas is te klein. Ik betaal hem dus ook niet.', feedback: 'Dan komen er kosten bij. Meld eerst dat je hem terugstuurt.' },
    { text: 'Jullie jassen zijn waardeloos! Ik wil nu mijn geld!', feedback: 'Dat klinkt boos. Vraag het rustig, dan helpen ze je sneller.' },
  ],
  'r.l.meedoen.4.mo1': [
    { text: 'Wauw, wat erg! Ik stuur het meteen naar iedereen.', feedback: 'Dan deel je misschien nepnieuws. Check het eerst.' },
    { text: 'Dit is nep. Jij gelooft ook echt alles, hè?', feedback: 'Dat klinkt onaardig. Vraag liever rustig waar het vandaan komt.' },
  ],
  'r.l.schrijven.1.mo1': [
    { text: 'Ik ben dinsdag niet op mijn werk. Ik moet naar school.', feedback: 'Je zegt het, maar je vraagt het niet.' },
    { text: 'Mag ik een keer vrij? Ik moet ergens heen.', feedback: 'Dan weet je leidinggevende niet wanneer, en niet waarom.' },
  ],
  'r.l.schrijven.2.mo1': [
    { text: 'Ik heb gemaild, maar jullie zeggen niks. Waarom niet?', feedback: 'Dat klinkt ongeduldig. Vraag rustig of je mail er is.' },
    { text: 'Hallo, ik zoek werk. Heeft u nog iets voor mij?', feedback: 'Dan weet het bedrijf niet dat je al gemaild hebt.' },
  ],
  'r.l.loopbaan.1.mo1': [
    { text: 'Niks eigenlijk. Ik ben gewoon niet zo slim.', feedback: 'Je kunt meer dan je denkt. Noem iets wat je goed doet.' },
    { text: 'Ik kan alles. Ik ben overal de beste in.', feedback: 'Dat klinkt te groot. Noem één ding dat je echt kunt.' },
  ],
  'r.l.loopbaan.2.mo1': [
    { text: 'Ik wil verder leren, maar dat zie ik later wel.', feedback: 'Wacht niet te lang. Je moet je op tijd aanmelden.' },
    { text: 'Ik ben klaar met school. Ik ga gewoon werken.', feedback: 'Ben je nog geen 18? Dan moet je vaak nog naar school.' },
  ],
  'r.l.loopbaan.3.mo1': [
    { text: 'Ik zet u gewoon op mijn cv. Dat vindt u vast goed.', feedback: 'Vraag het eerst. Dan weet de ander dat er iemand belt.' },
    { text: 'Doei! Bedankt voor alles. Misschien zien we elkaar nog.', feedback: 'Vriendelijk. Maar zo vraag je niet om een referentie.' },
  ],
  // Sector techniek en garage (deel 7).
  'r.l.techniek.1.mo1': [
    { text: 'Ik heb geen bril, maar het gaat wel. Ik ben zo klaar.', feedback: 'Dan werk je zonder bescherming. Vraag eerst een bril.' },
    { text: 'Wie heeft mijn bril gepakt? Dit is echt niet normaal!', feedback: 'Dat klinkt boos. Vraag liever rustig waar je er een krijgt.' },
  ],
  'r.l.techniek.2.mo1': [
    { text: 'De klant zegt dat het uit is. Dan begin ik maar.', feedback: 'Dan weet je het niet zeker. Laat het eerst meten.' },
    { text: 'Ik doe het gewoon met stroom erop. Ik ben voorzichtig.', feedback: 'Voorzichtig is niet genoeg. Eerst moet de stroom eraf.' },
  ],
  'r.l.werkplaats.1.mo1': [
    { text: 'Het is maar even. Ik kruip er gewoon snel onder.', feedback: 'Een krik kan wegzakken. Vraag eerst om bokken.' },
    { text: 'Ik ga niet onder die auto. Doe het zelf maar!', feedback: 'Dat klinkt boos. Zeg liever wat er nodig is.' },
  ],
  'r.l.werkplaats.2.mo1': [
    { text: 'De remmen zijn bijna op. Ik doe ze er meteen bij.', feedback: 'Eerst moet de klant ja zeggen. Meld het eerst.' },
    { text: 'Ik zag iets aan de remmen. Maar goed, niet mijn werk.', feedback: 'Dan hoort de klant het niet. Vraag of iemand haar belt.' },
  ],
};

/** Two wrong sentences for a model step, as in zegHetWrong. */
export type ZegHetWrong = readonly [{ text: string; feedback: string }, { text: string; feedback: string }];

/**
 * The same for the Belgian units (ids "r.be.…"): each unit file brings its own (`zegHet` in
 * src/content/regels/be/units/<name>.ts); src/content/regels/be/index.ts puts them here when the
 * Belgian course loads.
 */
const zegHetWrongBe: Record<string, ZegHetWrong> = {};
export function addZegHetBe(table: Record<string, ZegHetWrong>): void {
  Object.assign(zegHetWrongBe, table);
}

/** The model step as a question (same id: it is the card in the box), or none without wrong sentences. */
export function modelQuestion(step: ModelStep): WhatdoStep | undefined {
  const wrong = zegHetWrong[step.id] ?? zegHetWrongBe[step.id];
  if (!wrong) return undefined;
  return {
    kind: 'whatdo',
    id: step.id,
    situation: `${step.context} Wat zeg je?`,
    options: [
      { id: 'a', text: step.nl, best: true, feedback: 'Goed. Zo zeg je het.', say: true },
      { id: 'b', text: wrong[0].text, best: false, feedback: wrong[0].feedback, say: true },
      { id: 'c', text: wrong[1].text, best: false, feedback: wrong[1].feedback, say: true },
    ],
    why: 'Dit is de zin uit de les. Zo weet de ander wat je bedoelt.',
  };
}
