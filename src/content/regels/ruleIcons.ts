/**
 * The drawings for the work-rules track's emoji (src/content/regels): the picture of a rule card,
 * of a lesson in the overview, of a row on the pocket card, of a "Wie kan je helpen" card and of a
 * row in "Wie bel je?". The content keeps its emoji; only what is drawn changes.
 *
 * An emoji is here only when its drawing (a word picture w.*, or an own icon i.*) shows the same
 * thing: the same object, or the drawing the language track already shows for a word with that
 * emoji, and it fits every card that uses it. A doubtful one is left out: then the emoji stays
 * (WordPicture falls back to it). Keys are without the invisible variation selector (U+FE0F).
 */
export const ruleIcons: Readonly<Record<string, string>> = {
  // Papers, writing, mail
  '📋': 'w.lijst', // a clipboard with a checklist
  '📄': 'w.contract', // a sheet of text with a signature
  '🗂': 'w.papieren', // an open folder full of documents
  '✍': 'w.tekenen', // a hand signs with a pen
  '🖊': 'w.handtekening', // a pen and a signature on a form
  '📝': 'w.opschrijven', // a hand writes on a notepad
  '✉': 'w.brief', // an envelope with the letter coming out
  '📨': 'w.brief',
  '📧': 'w.mail', // a laptop with an envelope on the screen
  '🪪': 'w.identiteitsbewijs', // an ID card with a photo
  '🛂': 'w.paspoort', // the passport ("je paspoort geef je nooit af")
  '🧾': 'w.bonnetje', // a receipt
  '🗳': 'w.stemmen', // a ballot paper into the ballot box
  '📚': 'w.bibliotheek', // a bookcase full of books
  '🎓': 'w.opleiding', // a graduation cap on a diploma

  // Money
  '💶': 'w.contant', // banknotes and coins
  '🏦': 'w.bankrekening', // the bank card with coins
  '🐷': 'w.sparen', // coins into a jar (the language track's "sparen")
  '⏱': 'w.uurloon', // a clock with a euro coin: pay per hour
  '🏖': 'w.vakantiegeld', // money with the holiday sun

  // Time and days
  '🕒': 'w.werktijden', // a clock with the band from start to end
  '🕔': 'w.overuren', // the clock runs past the end of the shift
  '🗓': 'w.week', // a week calendar
  '📆': 'w.vandaag', // one day page
  '🌴': 'w.vakantiedagen', // days off: a calendar and a beach umbrella (🌴 and 🏝️ are look-alikes)
  '☕': 'w.pauze', // a mug of coffee, the hard hat beside it
  '🌙': 'w.kl.maan', // the moon (after a night shift)
  '😴': 'w.slapen', // asleep
  '🎂': 'w.verjaardag', // a cake with candles

  // Phone and computer
  '📞': 'w.bellen', // a ringing phone
  '📲': 'w.oproepkracht', // a call: come to work
  '💻': 'w.computer',
  '🔐': 'w.wachtwoord', // a password field and a padlock
  '🤖': 'w.ai', // a friendly robot head

  // Talking and asking
  '🤝': 'w.afspraak', // two hands shake
  '🙋': 'w.vraagstellen', // a raised hand, a question
  '💬': 'w.praten', // two people talk, bubbles
  '🗣': 'w.spreken', // speaking out loud
  '👂': 'w.luisteren', // a hand cupped behind the ear
  '🧑‍🏫': 'w.uitleggen', // someone explains how it works
  '🔍': 'w.zoeken', // a magnifying glass
  '🔎': 'w.zoeken',
  '🆘': 'w.hulp', // a life ring

  // Health
  '🤒': 'w.ziek', // a thermometer, a hand on the forehead
  '🩺': 'w.dokter', // a stethoscope and a medical cross
  '🏥': 'w.ziekenhuis', // a building with a red cross
  '💊': 'w.medicijn', // pills
  '🚑': 'w.ambulance',
  '🧼': 'w.handenwassen', // soapy hands under the tap
  '🌡': 'w.hitte', // a thermometer red to the top in the sun

  // Safety and work
  '⛑': 'w.helm',
  '🧤': 'w.handschoenen',
  '🥽': 'w.bril',
  '🛑': 'w.stop', // the red octagon with a raised hand
  '🚫': 'w.verboden', // the round "forbidden" sign
  '⚡': 'w.stroom', // a lightning bolt
  '⚙': 'w.machine', // a machine with a gear
  '🛠': 'w.gereedschap', // a toolbox with a hammer and a wrench
  '🏗': 'w.kraan', // a tower crane
  '🚜': 'w.heftruck', // the language track's forklift (🚜)
  '🏋': 'w.tillen', // lifting something heavy above the head
  '📦': 'w.doos',
  '🗑': 'w.prullenbak',
  '🧊': 'w.koelcel', // the cold room (the language track's 🧊)
  '🚲': 'w.fiets',
  '🛍': 'w.kl.zak', // a carrier bag

  // Places and people
  '🏛': 'w.gemeente', // the town hall
  '🏢': 'w.uitzendbureau', // only the temp agency's card (the language track's 🏢)
  // In this track only the card of that person uses the emoji, and the drawing is that person.
  '🧑‍💼': 'w.leidinggevende', // the team leader on the floor
  '🛡': 'w.vertrouwenspersoon', // someone listens calmly behind a closed door
  '🏫': 'w.school',
  '👮': 'w.agent',
  '⚖': 'i.rights', // a balance scale
};

/** The emoji without the invisible variation selector, so "⚖️" and "⚖" are one key. */
const bare = (emoji: string): string => emoji.replace(/\uFE0F/g, '');

/** The drawing's id for a work-rules emoji, or '' (then the emoji itself is shown). */
export function ruleIconId(emoji: string): string {
  return ruleIcons[bare(emoji)] ?? '';
}

/** What WordPicture draws for a work-rules emoji: the drawing by id, the emoji as fallback. */
export function rulePicture(emoji: string): { id: string; emoji: string } {
  return { id: ruleIconId(emoji), emoji };
}
