/**
 * Drawings for the emoji of batch 3 (Hulp tips, "Wie kan je helpen", the about pages, the
 * work-rules cards and the social map). An existing word picture (w.*) where it shows the same
 * thing; else an own drawing (e.*, src/pictures/group32.tsx). Keys are without the invisible
 * variation selector (U+FE0F).
 */
export const batch3: Readonly<Record<string, string>> = {
  '✊': 'e.vakbond', // raised fists: stand up for your rights together
  '✋': 'w.hand', // one big open hand, raised
  '📣': 'e.megafoon', // a megaphone: report it, make it heard
  '🎯': 'e.doelwit', // a target with a dart in the bullseye
  '🙂': 'e.aanspreken', // Jada talks to Henk (the boss) in a friendly way
  '🔁': 'e.wijziging', // a form with the round "update" arrows: pass on a change
  '🥜': 'e.pinda', // a peanut and a red warning (allergy)
  '🔠': 'w.spellen', // the letters A, B, C in a speech bubble: your details, spelled right
  '📵': 'e.geentelefoon', // a phone with the "not allowed" sign over it
  '🫂': 'e.respect', // Amina and Bram lean in to each other, a heart above them
  '🧒': 'w.ziekkind', // a sick child in bed
  '🎫': 'e.kaartje', // a bus ticket
  '🔭': 'w.werkzoekende', // Amina looks at the job ads through a magnifier
  '🧴': 'w.schoonmaakmiddel', // a bottle of cleaner with its label
  '💼': 'e.aktetas', // a work briefcase
  '👷': 'e.bram', // Bram in his hard hat
  '👥': 'e.groep', // three of the cast side by side
  '📘': 'e.regelboek', // a closed blue book with a bookmark
  '📍': 'e.locatie', // a map pin on a folded map
  '🧾': 'w.bonnetje', // a receipt
  '📦': 'w.doos', // a box with its shipping label
  '🏡': 'w.kl.buur', // the neighbour waves over the garden fence (de buurt)
  '📚': 'w.bibliotheek', // a bookcase full of books
  '🦽': 'w.rolstoel', // a wheelchair
  '🗣': 'w.spreken', // speaking out loud
  '👂': 'w.luisteren', // a hand cupped behind the ear
  '🏞': 'e.heuvels', // a landscape: hills, a river, the sun
};
