/**
 * Batch 2 of the emoji that are drawn instead (no emoji in the app): emoji -> picture id. An
 * existing word picture (w.*) where it shows the same thing on every place; otherwise an own
 * drawing (e.*, src/pictures/group31.tsx). Keys are without the invisible U+FE0F.
 */
export const batch2: Readonly<Record<string, string>> = {
  '🧭': 'e.kompas', // tips "first day", "work and integration", rule "know what you want"
  '🩹': 'e.pleister', // tip "report every accident", rules about sick pay
  '🎣': 'e.hengel', // phishing: a hook caught in the button on a phone
  '🔒': 'e.hangslot', // privacy
  '💸': 'e.geldweg', // "you never pay for real work"
  '👶': 'e.kinderwagen', // pregnant, a baby: leave
  '💡': 'e.lamp', // lights off when you can
  '🌐': 'w.vertaalapp', // tip about translation apps
  '🪑': 'w.sollicitatiegesprek', // tip "the job interview"
  '🙈': 'w.fout', // tip "mistakes are normal"
  '🏝': 'w.vakantiedagen', // tip "holidays and emergency leave"
  '☂': 'e.zorgverzekering', // tip "health insurance"
  '🧳': 'e.koffer', // tip "your job ends"
  '🧓': 'w.client', // tip "respect for the client"
  '🎭': 'e.masker', // tip "fake voices and videos"
  '🏭': 'e.fabriek', // theme "your sector"
  '📊': 'e.staafgrafiek', // "why learn Dutch: the facts"
  '💬': 'e.tekstballon', // badge "Zo zeggen ze het" (one bubble reads better small than w.praten)
  '📝': 'w.opschrijven', // link "Wat is er nieuw?"
  '🗓': 'w.rooster', // rule card: the roster
  '📋': 'w.werkbon', // rule card: the work order
  '🏥': 'w.ziekenhuis', // Zuid-Limburg: hospitals and the GP emergency posts
  '🪙': 'w.euro', // Zuid-Limburg: bijstand (money to live on)
  '🪟': 'e.loket', // Zuid-Limburg: "het loket"
  '🛂': 'e.grens', // Zuid-Limburg: "de grens"
  '📄': 'w.formulier', // Zuid-Limburg: UWV and werk.nl (sign up, WW)
  '🏢': 'w.uitzendbureau', // Zuid-Limburg: a temp agency with a quality mark
};
