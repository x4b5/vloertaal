import type { AskWho } from './types';

/**
 * The places to go for help ("Wie vraag je het?"), as an answer card shows them: a clear Dutch
 * name and a simple picture. Plain Dutch, no abbreviations a learner has to know (UWV is the
 * name people use).
 */
export const ASK_WHO: Record<AskWho, { label: string; emoji: string }> = {
  leidinggevende: { label: 'Je leidinggevende', emoji: '🧑‍💼' },
  collega: { label: 'Een collega', emoji: '🤝' },
  hr: { label: 'HR of de loonadministratie', emoji: '🗂️' },
  uitzendbureau: { label: 'Het uitzendbureau', emoji: '🏢' },
  bedrijfsarts: { label: 'De bedrijfsarts', emoji: '🩺' },
  vertrouwenspersoon: { label: 'De vertrouwenspersoon', emoji: '🛡️' },
  vakbond: { label: 'De vakbond', emoji: '✊' },
  juridischloket: { label: 'Het Juridisch Loket', emoji: '⚖️' },
  huisarts: { label: 'De huisarts', emoji: '🏥' },
  arbeidsinspectie: { label: 'De Arbeidsinspectie', emoji: '🔍' },
  uwv: { label: 'Het UWV', emoji: '📄' },
  gemeente: { label: 'De gemeente', emoji: '🏛️' },
  politie: { label: 'De politie', emoji: '👮' },
};

/** The Dutch name of a place to go for help. */
export const askWhoLabel = (who: AskWho): string => ASK_WHO[who].label;
