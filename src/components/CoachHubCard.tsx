import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { WordPicture } from '../pictures';
import { ChevronIcon } from './Icons';
import { NlPair } from './NlPair';

/**
 * "Voor je begeleider" on the Hulp tab, in both tracks: opens the coach card ("Laat zien hoe het
 * gaat"), the same card as under Settings › Taal en ik. One tap instead of three, so a coach can say
 * "Hulp, Voor je begeleider" to a whole group (review, 9 November 2026). Beside "Voor je collega".
 */
export function CoachHubCard({ lang, onOpen }: { lang?: HelpLanguage; onOpen: () => void }) {
  return (
    <button type="button" className="hub-card hub-coach" onClick={onOpen}>
      <span className="hub-icon" aria-hidden><WordPicture id="w.gesprek" emoji="💬" size={34} /></span>
      <span className="hub-text">
        <NlPair nlFirst nl="Voor je begeleider" nlClass="hub-nl" text={ui('forCoach', lang)} />
      </span>
      <ChevronIcon size={24} />
    </button>
  );
}
