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
  // The Entree additions (docs/entree-aanvulling.md). On stage you have two guides: one at school
  // (stagebegeleider or bpv-begeleider), one at work (praktijkopleider).
  school: { label: 'Je begeleider van school', emoji: '🏫' },
  praktijkopleider: { label: 'Je praktijkopleider', emoji: '🧑‍🏫' },
  bibliotheek: { label: 'De bibliotheek', emoji: '📚' },
  meldpunt: { label: 'Een meldpunt discriminatie', emoji: '📣' },
  ict: { label: 'De ICT-afdeling', emoji: '💻' },
  bank: { label: 'Je bank', emoji: '🏦' },
  // The regional modules (docs/regio-zuid-limburg.md).
  grensinfopunt: { label: 'Het GrensInfoPunt', emoji: '🌍' },
  woningcorporatie: { label: 'De woningcorporatie', emoji: '🏘️' },
};

/** The Dutch name of a place to go for help. */
export const askWhoLabel = (who: AskWho): string => ASK_WHO[who].label;
