import { useEffect, useState } from 'react';
import { said, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { helpVoice, speakHelp } from '../lib/audio';
import { GlobeIcon, HelpVoiceIcon } from './Icons';

/** Whether this device has a voice for the help language (voices load late on some phones). */
function useHelpVoice(lang?: HelpLanguage): boolean {
  const [has, setHas] = useState(() => Boolean(lang && helpVoice(lang.code)));
  useEffect(() => {
    if (!lang || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const update = () => setHas(Boolean(helpVoice(lang.code)));
    update();
    window.speechSynthesis.addEventListener?.('voiceschanged', update);
    return () => window.speechSynthesis.removeEventListener?.('voiceschanged', update);
  }, [lang]);
  return has;
}

/**
 * "Read aloud" for a long help-language text (a situation, a tip): the device's own voice for that
 * language says it. Shown only when the device has such a voice; nothing is recorded for it.
 */
export function HelpSay({ text, lang }: { text?: string; lang?: HelpLanguage }) {
  const has = useHelpVoice(lang);
  if (!has || !text || !lang) return null;
  const label = ui('readAloud', lang);
  return (
    <button
      type="button"
      className="help-say"
      aria-label={said(label)}
      title={said(label)}
      onClick={() => speakHelp(text, lang.code)}
    >
      {/* A globe and a speech bubble (no flag): never the Dutch speaker's look. */}
      <GlobeIcon size={18} />
      <HelpVoiceIcon size={22} />
    </button>
  );
}
