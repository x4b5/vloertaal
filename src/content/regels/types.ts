/**
 * Werkregels: the track for learners who already speak Dutch ("Nederlands – ik spreek al
 * Nederlands"). Not about the language but about the written and unwritten rules of Dutch work
 * life. Every text here is plain Dutch (taalniveau 1F, about A2), read aloud by the phone, and is
 * shown as it is: there is no translation layer for this track.
 *
 * A rules lesson is a normal `Lesson` (src/content/types.ts) with `words: []`, `sentences: []`
 * and these `steps`, so the route, access, certificates and offline keep working.
 */

/** Who stands in a scene or says an option (the app's own characters). */
export type RuleCharacter = 'bram' | 'amina' | 'henk' | 'jada';

/** Where a learner can go for help ("Wie vraag je het?"). */
export type AskWho =
  | 'leidinggevende' | 'collega' | 'hr' | 'uitzendbureau' | 'bedrijfsarts' | 'vertrouwenspersoon'
  | 'vakbond' | 'juridischloket' | 'huisarts' | 'arbeidsinspectie' | 'uwv' | 'gemeente' | 'politie'
  // The Entree additions (docs/entree-aanvulling.md): stage, digital help, reporting discrimination.
  | 'school' | 'praktijkopleider' | 'bibliotheek' | 'meldpunt' | 'ict' | 'bank'
  // The regional modules (docs/regio-zuid-limburg.md): advice about living or working across the
  // border, and a home with social rent. Regional organisations get no AskWho: they are on the map.
  | 'grensinfopunt' | 'woningcorporatie';

export interface RuleOption {
  /** Stable id within the step ("a", "b", "c"). */
  id: string;
  text: string;
  /** Exactly one option of a step is the best one. */
  best: boolean;
  /** Short feedback shown after this option was picked. */
  feedback: string;
  /** The option is something said out loud (it gets its own speaker). */
  say?: true;
}

/** Fields of the drawn payslip that a question can point at. */
export type PayslipField = 'periode' | 'uren' | 'uurloon' | 'bruto' | 'loonheffing' | 'inhouding' | 'netto' | 'vakantiegeld';

export interface Payslip {
  periode: string;
  rows: { field: PayslipField; label: string; value: string }[];
}

/**
 * A drawn card (docs/entree-aanvulling.md, "Nieuw staptype: het kaartje"): a roster, a receipt, a
 * packing slip, a label, a work order or a payslip. The payslip step (`payslip`) is drawn as the
 * `loonstrook` card too (RuleSteps.tsx): one look, one way to answer.
 */
export type CardType = 'rooster' | 'kassabon' | 'pakbon' | 'etiket' | 'werkbon' | 'loonstrook';

export interface CardRow {
  label: string;
  /** What the card says. With `answer`: shown as "?" until Check (the thing to work out). */
  value: string;
  /** The row the answer is about: it lights up after Check. */
  hit?: true;
  /** The worked-out value, shown in this row (lit up) after Check. Equals the best option. */
  answer?: string;
}

export interface DrawnCard {
  type: CardType;
  /** The card's heading ("Kassabon", "Rooster maandag"). */
  title: string;
  /** A small line beside the heading (a date, a week, a shop), if any. */
  sub?: string;
  rows: CardRow[];
}

/**
 * Where a rule comes from: `geschreven` = law, contract or cao (shown with the "general
 * information, ask for your situation" line); `ongeschreven` = how it usually goes at work.
 */
export type RuleKind = 'geschreven' | 'ongeschreven';

export type RuleStep =
  /** A short story (3–5 sentences) with a picture idea; read aloud, not graded. */
  | { kind: 'scene'; id: string; who?: RuleCharacter; picture: string; lines: string[] }
  /**
   * The rule itself, as a card. `key` rules go on the pocket card and the certificate.
   * `dialect`: a word card of a regional dialect, only to recognise (docs/regio-zuid-limburg.md,
   * les ZL.4): no speaker (the phone's voice reads dialect badly), and in a line "woord = betekenis"
   * the word is marked as Limburgish (lang "li"), so it is not read as Dutch.
   */
  | { kind: 'rule'; id: string; emoji: string; title: string; body: string[]; rule: RuleKind; key?: true; dialect?: true }
  /** "Waar of niet waar?" */
  | { kind: 'truefalse'; id: string; statement: string; answer: boolean; why: string }
  /** "Wat doe je?": 3 options, one best, a why for after the answer. */
  | { kind: 'whatdo'; id: string; situation: string; quote?: string; who?: RuleCharacter; options: RuleOption[]; why: string }
  /** "Wie vraag je het?": up to 3 places to go, one best. */
  | { kind: 'whoask'; id: string; question: string; options: { id: string; who: AskWho; best: boolean; feedback: string }[]; why: string }
  /** "Zo zeg je het": a model sentence in context. */
  | { kind: 'model'; id: string; context: string; nl: string }
  /** A drawn payslip with a question about it. */
  | { kind: 'payslip'; id: string; slip: Payslip; question: string; highlight: PayslipField; options: RuleOption[]; why: string }
  /**
   * "Reken het uit" or "Lees het kaartje": a drawn card with a question about it, 3 options, one
   * best. For a sum each wrong option is a typical mistake (its feedback names it, without
   * blame), and `sum` holds the steps, shown after the answer. The generalisation of `payslip`.
   */
  | { kind: 'card'; id: string; card: DrawnCard; question: string; options: RuleOption[]; why: string; sum?: string[] };

/** One lesson of the track: the content, before it is turned into a `Lesson`. */
export interface RuleLesson {
  /** "r.l.<unit>.<n>", e.g. "r.l.pay.2". */
  id: string;
  title: string;
  /** One line: what the learner can do after this lesson. */
  goal: string;
  steps: RuleStep[];
  /** The "Onthoud" line (also on the pocket card). */
  remember: string;
  /** "Wie kan je helpen", if relevant. */
  help?: AskWho[];
  /** The lesson's icon in the overview, when its first rule card's emoji says too little about
   *  the whole lesson (src/lib/lessonIcon.ts). */
  icon?: string;
}

export interface RuleUnit {
  /** "r.<name>", e.g. "r.pay". */
  id: string;
  title: string;
  emoji: string;
  color: string;
  lessons: RuleLesson[];
}
