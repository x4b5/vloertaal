/**
 * Emoji -> drawing, batch 1: the emoji of the tips, work rules, About and coaches pages, Hulp and
 * the regional social map that had no drawing yet. A word picture (w.*) or an own icon (i.*) where
 * it shows the same thing, otherwise a new drawing (e.*, src/pictures/group30.tsx).
 * Keys are without the invisible variation selector (U+FE0F).
 */
export const batch1: Readonly<Record<string, string>> = {
  '🧪': 'e.reageerbuis', // a test tube: the trial period, a test version
  '🧹': 'e.bezem', // a broom: tidy up when you are done
  '🤐': 'e.geheim', // a speech bubble with a padlock: private, you need not answer
  '🔢': 'e.cijfers', // four number tiles: your BSN, counting
  '🌍': 'e.wereldbol', // the globe: for people from everywhere
  '🧮': 'e.rekenmachine', // a calculator: work out your gross pay
  '📰': 'e.nepnieuws', // a newspaper under a magnifying glass: check before you share
  '🥛': 'e.melk', // a milk carton on the shop shelf
  '🤞': 'w.afspraak', // "Afspraak is afspraak": two hands shake on it
  '🚭': 'e.rookverbod', // a cigarette in the red "forbidden" ring
  '🤫': 'w.roddelen', // gossip: Bram whispers behind Amina's back
  '⛓': 'e.ketting', // a heavy chain: exploitation
  '🛟': 'w.hulp', // the life ring: the unemployment benefit catches you
  '⭐': 'e.ster', // a big star: quality
  '🕧': 'e.halfacht', // a clock at half past seven
  '🏠': 'e.huis', // a house: living in the Netherlands
  '🔊': 'w.stem', // a voice with sound waves: the voices in the app
  '🚨': 'e.zwaailicht', // the blue emergency light: 112
  '🤝': 'w.afspraak', // two hands shake: for coaches and employers
  '🗺': 'w.vinden', // a map with a route to a pin: the social map
  '🏷': 'w.etiket', // a label on a box
  '🏛': 'w.gemeente', // the town hall
  '🏘': 'e.huizen', // a row of houses: other municipalities, housing
  '💶': 'w.contant', // banknotes and coins: money and debts
  '🛡': 'e.schild', // a shield with a house: Veilig Thuis
  '📬': 'e.brievenbus', // a letterbox full of mail: help with your post
  '🐢': 'w.langzaam', // slowly (the language track shows a snail)
  '⚖': 'i.rights', // a balance scale: the legal help desk
};
