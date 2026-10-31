import { LANG_CODES } from '../i18n/meta';
import { type HelpLanguage, uiEn } from '../i18n/types';

/**
 * What goes along when the learner shares a picture (the certificate, the pocket card, the coach
 * card): the site's address, small at the foot of the picture, and a short text with the link for
 * the share sheet. With a help language the link is that language's page (vloertaal.nl/pl), else
 * the site itself. A plain address: no tracking parameters, nothing about the learner.
 */

/** "vloertaal.nl/pl" for a help language with its own page, else "vloertaal.nl". */
export function siteLink(code?: string): string {
  return code && (LANG_CODES as readonly string[]).includes(code) ? `vloertaal.nl/${code}` : 'vloertaal.nl';
}

/** The text with the shared picture, in the help language (English when there is none or it lacks it). */
export function shareText(lang?: HelpLanguage): string {
  const text = lang?.ui.shareInvite ?? uiEn.shareInvite;
  return text.replace('{link}', `https://${siteLink(lang?.code)}`);
}
