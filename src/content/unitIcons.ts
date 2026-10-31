import { nlId } from './regels/be/ids';

/**
 * The small picture next to each unit title on the path: a word picture of the topic, or an
 * own icon (i.*, src/pictures/icons.tsx) for an abstract topic.
 */
export const unitIcons: Record<string, string> = {
  'u.firstday': 'w.hallo',
  'u.help': 'i.help',
  'u.tools': 'w.vertaalapp',
  'u.sounds': 'w.kl.maan',
  'u.safety': 'w.helm',
  'u.warehouse': 'w.doos',
  'u.data': 'w.naam',
  'u.time': 'w.uren',
  // A calmer own icon (three stacked hands): the word picture "samen" was busy at 32-44 px.
  'u.teamwork': 'i.teamwork',
  'u.apply': 'w.cv',
  'u.contract': 'w.contract',
  'u.papers': 'w.gemeente',
  'u.pay': 'w.loonstrook',
  'u.house': 'w.kluisje',
  'u.social': 'w.compliment',
  'u.sayings': 'w.eitje',
  'u.rights': 'i.rights',
  'u.leave': 'w.ziekmelden',
  'u.exploit': 'w.paspoort',
  'u.contact': 'w.terugbellen',
  'u.grow': 'w.certificaat',
  'u.health': 'w.apotheek',
  'u.money': 'w.bankrekening',
  'u.travel': 'w.fietspad',
  'u.lost': 'w.werkzoekende',
  'u.build': 'w.steiger',
  'u.factory': 'w.lopendeband',
  'u.care': 'w.verpleegkundige',
  'u.horeca': 'w.pan',
  'u.clean': 'w.dweil',
  'u.shop': 'w.betalen',
  'u.numbers': 'w.uurloon',
  'u.ai': 'w.ai',
  'u.kas': 'w.kas',
  'u.finish': 'w.klaar',
  'u.tech': 'w.boor',
  'u.garage': 'w.garage',
  // Doing a work placement: the school backpack with a hard hat ("de stage"), not the mortarboard.
  'u.stage': 'w.stage',
  // Taking part in the Netherlands (the council and voting, the police): the ballot box, not a postbox.
  'u.society': 'w.stemmen',
  'u.online': 'w.computer',
};

/**
 * The same for the work-rules track (src/content/regels). One picture per unit within the track;
 * a sector's rules unit shares its picture with the language unit of that sector, and a topic the
 * two tracks share (the contract, the first day) its twin's. A Belgian unit ("r.be.loon") has its
 * Dutch twin's picture (see unitIcon).
 */
export const rulesUnitIcons: Record<string, string> = {
  'r.zoeken': 'w.vacature',
  'r.start': 'w.hallo',
  'r.afronden': 'w.klaar',
  'r.contract': 'w.contract',
  'r.stage': 'w.stage',
  'r.loon': 'w.loonstrook',
  'r.rekenen': 'w.uurloon',
  'r.tijd': 'w.werktijden',
  'r.winkel': 'w.betalen',
  'r.ziek': 'w.ziekmelden',
  'r.veilig': 'w.helm',
  'r.samen': 'i.teamwork',
  'r.rechten': 'i.rights',
  'r.geld': 'w.bankrekening',
  'r.digitaal': 'w.computer',
  'r.meedoen': 'w.stemmen',
  'r.duurzaam': 'w.prullenbak',
  'r.schrijven': 'w.mail',
  'r.loopbaan': 'w.diploma',
  'r.warehouse': 'w.doos',
  'r.build': 'w.steiger',
  'r.factory': 'w.lopendeband',
  'r.care': 'w.verpleegkundige',
  'r.horeca': 'w.pan',
  'r.clean': 'w.dweil',
  'r.kas': 'w.kas',
  'r.techniek': 'w.boor',
  'r.werkplaats': 'w.garage',
};

/** A unit's drawn icon in either track (a Belgian rules unit: its Dutch twin's), or '' (then its emoji). */
export function unitIcon(unitId: string): string {
  return unitIcons[unitId] ?? unitIcons[nlId(unitId)] ?? rulesUnitIcons[nlId(unitId)] ?? '';
}
