import { ruleIconId } from './regels/ruleIcons';
import { emojiArt } from './emojiArt';

/**
 * The drawings for the emoji of the language course's Hulp tab: the "Zo werkt het hier" tips
 * (src/content/culture) and "Wie bel je?". The work-rules table (src/content/regels/ruleIcons.ts)
 * first, then these: tip emoji that are not in the work rules. Same rule as there: only a drawing
 * that shows the same thing; a doubtful one is left out and the emoji stays.
 * Keys are without the invisible variation selector (U+FE0F).
 */
export const tipIcons: Readonly<Record<string, string>> = {
  '👋': 'w.hallo',
  '⚠': 'w.gevaar',
  '📅': 'w.datum',
  '⏰': 'w.optijd',
  '✅': 'w.klaar',
  '🔑': 'w.sleutel',
  '⏲': 'w.werktijd',
  '⏸': 'w.pauze',
  '🦺': 'w.hesje',
  '🧰': 'w.gereedschap',
  '🔌': 'w.stroom',
  '🍽': 'w.eten',
  '☎': 'w.bellen',
  '☣': 'w.gevaarlijk',
  '🎒': 'w.stage',
  '🧑‍⚕': 'w.dokter',
  '👩‍⚕': 'w.verpleegkundige',
  '🤕': 'w.gewond',
  '🛢': 'w.olie',
  '🏅': 'w.certificaat',
  '📜': 'w.diploma',
  '🌟': 'w.compliment',
  '🦹': 'w.oplichter',
  '🚚': 'w.bestelbus',
  // "Tegels, stuc en verf" (u.afbouw, 20 November 2026): the comb of the notched trowel (c.tiletools:
  // clean it before the glue is hard), the plus of the tile spacer (c.tiling) and the flat steel
  // plate of the plastering trowel, with its lump of plaster (c.plaster: plaster needs time to dry).
  '🪮': 'w.lijmkam',
  '➕': 'w.tegelkruisje',
  '🔳': 'w.stucspaan',
  // The next lessons of 20 November 2026 (l.paint, l.prep, u.ruwbouw and the shapes of u.numbers):
  // each tip shows a word of its own lesson.
  '🖌': 'w.kwast',
  '🧻': 'w.schuurpapier',
  '🧱': 'w.baksteen',
  '🧵': 'w.metseltouw',
  '🪚': 'w.handzaag',
  '✏': 'w.aftekenen',
  '🪛': 'w.schroevendraaier',
  '🔩': 'w.vastzetten',
  '⬜': 'w.vierkant',
  '🔺': 'w.geodriehoek',
  '🏁': 'w.oppervlakte',
  // Machines en gereedschap (u.machines, 21 November 2026): each tip shows a word of its own lesson.
  '🚧': 'w.afscherming',
  '🔬': 'w.loep',
  '🎁': 'w.verpakking',
  '💧': 'w.lekbak',
  // Elektra, leidingen en metaal (u.install, 21 November 2026): each tip shows a word of its own lesson.
  '🟤': 'w.draad',
  '🔒': 'w.hangslot',
  '🚰': 'w.afsluiter',
  '🗜': 'w.bankschroef',
  // Assemblage en montage (u.montage, 21 November 2026): each tip shows a word of its own lesson.
  '🗒': 'w.werkinstructie',
  '🔧': 'w.momentsleutel',
  '🪝': 'w.hijshaak',
  '☑': 'w.goedkeursticker',
  // Kweken, sorteren en de kas and Banden, olie en remmen (22 November 2026): each tip shows a word of its own lesson.
  '🌱': 'w.zaaibak',
  '🍅': 'w.tros',
  '💨': 'w.luchtraam',
  '🐞': 'w.luis',
  '🛞': 'w.bandenprofiel',
  '🫗': 'w.opvangbak',
  '🔴': 'w.remblok',
  '🏷': 'w.autosleutel',
  // Groen and Facilitair (23 November 2026): each tip shows a word of its own lesson (placeholder
  // drawings for now); the roadside tip has the vest (🦺 above), the moving tip lifting (emojiArt).
  '🪨': 'w.bosmaaier',
  '✂': 'w.snoeischaar',
  '🪺': 'w.heg',
  '🪵': 'w.kettingzaag',
  '🌼': 'w.onkruidbrander',
  '🌳': 'w.schep',
  '💉': 'w.grijper',
  '🛎': 'w.balie',
  '📛': 'w.bezoekerspasje',
  '📫': 'w.postvak',
  '🫖': 'w.thermoskan',
  '📢': 'w.melding',
  '🪜': 'w.ladder',
  '🗝': 'w.sleutelbos',
  // Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026): each tip
  // shows a word of its own lesson (placeholder drawings for now); the bin lorry tip has the vest
  // (🦺 above).
  '🔦': 'w.zaklamp',
  '💳': 'w.toegangspas',
  '📹': 'w.camerabeelden',
  '📻': 'w.portofoon',
  '🚒': 'w.brandweer',
  '🫀': 'w.reanimeren',
  '🚥': 'w.detectiepoortje',
  '😡': 'w.agressie',
  '🧔': 'w.baardnetje',
  '🌰': 'w.noten',
  '🧥': 'w.thermokleding',
  '🧲': 'w.metaaldetector',
  '🍖': 'w.uitbenen',
  '🖨': 'w.printer',
  '💦': 'w.hogedrukspuit',
  '📉': 'w.afwijking',
  '🔙': 'w.achteruitrijden',
  '🥫': 'w.blik',
  '🩸': 'w.snijwond',
  '🛋': 'w.grofvuil',
  '☠': 'w.asbest',
  '⬇': 'w.persen',
  '🟠': 'w.zwaailamp',
  '🧷': 'w.luier',
  '🍼': 'w.fles',
  '💤': 'w.slaapzak',
  '🛝': 'w.glijbaan',
  '👪': 'w.ouder',
  '🖐': 'w.vingerstrip',
  '🤮': 'w.overgeven',
  '👁': 'w.vierogenprincipe',
  // The basis units at four lessons (23 November 2026): each new tip shows a word of its own lesson
  // (placeholder drawings for now); the other new tips have emoji that are drawn already.
  '🚿': 'w.koelen',
  '🥳': 'w.aangenomen',
  '📇': 'w.verblijfsvergunning',
  '📪': 'w.brievenbus',
  '💵': 'w.voorschot',
  '☀': 'w.zomervakantie',
  '💒': 'w.bruiloft',
  '🤧': 'w.griep',
  '🕵': 'w.inspectie',
  '🪢': 'w.gordel',
  '🚉': 'w.station',
  '💐': 'w.bedanken',
  '⚽': 'w.sportclub',
  '📟': 'w.werktelefoon',
  '💾': 'w.usbstick',
  // "Veiligheid op het werk" and the VOG lesson (23 November 2026): each new tip shows a word of its
  // own lesson (placeholder drawings for now); c.permitwork keeps the clipboard of 📋.
  '🪧': 'w.waarschuwingsbord',
  '😷': 'w.stofmasker',
  '🧣': 'w.blusdeken',
  '📁': 'w.vog',
  // The five units of 23 November 2026 (Schoonmaak, Horeca, Zorg, Winkel, uitzendwerk): each tip shows
  // a word of its own lesson (placeholder drawings for now); the bill (💶, the work-rules table: cash)
  // and home care (🗝, the bunch of keys above) keep the drawings those emoji already have.
  '🚽': 'w.toiletpot',
  '🛌': 'w.opmaken',
  '🥄': 'w.maatbeker',
  '🌃': 'w.alleenwerken',
  '🔪': 'w.koksmes',
  '🍗': 'w.gaar',
  '🔔': 'w.pass',
  '🪥': 'w.tandenpoetsen',
  '📓': 'w.zorgdossier',
  '🛷': 'w.glijlaken',
  '🔄': 'w.terugbrengen',
  '❄': 'w.diepvries',
  '👜': 'w.tassencontrole',
  '🏦': 'w.kluis',
  '🏭': 'w.inlener',
  '🅰': 'w.fase',
  '➖': 'w.inhouding',
  '🏘': 'w.huisvesting',
  // Operator in de procesindustrie (u.process, 23 November 2026): the round shows the control room
  // and the fault the start-up of its own lesson (placeholders for now); the heat tip shows the
  // heat (w.hitte, the thermometer in the sun); the night tip keeps the moon of the work rules (🌙).
  '🎛': 'w.controlekamer',
  '⏯': 'w.opstarten',
  '🥵': 'w.hitte',
  // The eight new lessons of 26 November 2026: each new tip shows a word of its own lesson
  // (placeholders for now, src/pictures/top8); discrimination keeps the megaphone of "Discriminatie
  // melden" (📣) and the union the ballot box of voting (🗳: the works council is elected).
  '📮': 'w.aanmaning',
  '📩': 'w.blauweenvelop',
  '🦾': 'w.armbeschermer',
  '🥼': 'w.labjas',
  '📒': 'w.notitieboekje',
  '🚶': 'w.voetganger',
  // The sector lessons of 14 November 2026: each tip shows a word of its own lesson.
  '📏': 'w.rolmaat',
  '🛏': 'w.bed',
  '♨': 'w.heet',
  '🟥': 'w.rood',
  '⛈': 'w.onweer',
  '📐': 'w.tekening',
  '🔥': 'w.lassen',
  '💺': 'w.stoel',
  '🟧': 'w.oranje',
  '🤒': 'w.koorts',
  // The logistics lessons of 14 November 2026: the truck you never walk behind (c.loading), and
  // the damage you take a photo of before you drive (c.vancheck).
  '🚛': 'w.vrachtwagen',
  '📸': 'w.schade',
  // "Hulp vragen" at four lessons (14 November 2026): a colleague looks at your work (c.howto:
  // the eyes of "kijken"), the moment your colleague has time (c.mayask: the watch of "de tijd";
  // not ⏱, which the work rules draw as the pay per hour) and the way out (c.whereis).
  '👀': 'w.kijken',
  '🕐': 'w.tijd',
  '🚪': 'w.uitgang',
  // "Instructies" (u.do, 14 November 2026): something goes from hand to hand (c.putdown: "geven";
  // c.onoff's 🛑 is the stop sign of the work rules), "Ik ben klaar" (c.fillempty: the tick of
  // "klaar"; the lesson's own words are push, pull, fill) and which job comes first (c.order: the
  // list of "eerst"; the words of l.order have no picture).
  '🤲': 'w.geven',
  '✔': 'w.klaar',
  '📑': 'w.eerst',
  // "Coming back step by step" (c.backtowork, 5 November 2026): the supervisor's welcome back.
  '🤗': 'w.welkomterug',
  // "Stay calm, also when it is hard" (c.calm, 5 November 2026): a slow breath out (group39).
  '😮‍💨': 'w.ademhalen',
};

const bare = (emoji: string): string => emoji.replace(/️/g, '');

/** The drawing's id for an emoji of either track, or '' (then the emoji itself is shown). */
export function emojiIconId(emoji: string): string {
  return ruleIconId(emoji) || tipIcons[bare(emoji)] || emojiArt[bare(emoji)] || '';
}
