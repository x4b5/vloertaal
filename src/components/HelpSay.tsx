import { useEffect, useState } from 'react';
import { said, saidLang, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { helpVoice, speakHelp } from '../lib/audio';
import { helpClipUrl, helpSource, loadHelpIndex, onHelpIndex, type HelpSource } from '../lib/helpAudio';
import { GlobeIcon, HelpVoiceIcon } from './Icons';

const sourceFor = (lang?: HelpLanguage, text?: string): HelpSource =>
  lang ? helpSource(Boolean(helpClipUrl(lang.code, text)), Boolean(helpVoice(lang.code))) : null;

/**
 * Where this text can be heard in the help language: its recording, else the device's voice for that
 * language, else nowhere (null). Voices load late on some phones, and the recordings' list too.
 */
export function useHelpSource(lang?: HelpLanguage, text?: string): HelpSource {
  const [source, setSource] = useState<HelpSource>(() => sourceFor(lang, text));
  useEffect(() => {
    if (!lang) { setSource(null); return; }
    const update = () => setSource(sourceFor(lang, text));
    update();
    void loadHelpIndex();
    const off = onHelpIndex(update);
    const speech = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : undefined;
    speech?.addEventListener?.('voiceschanged', update);
    return () => { off(); speech?.removeEventListener?.('voiceschanged', update); };
  }, [lang, text]);
  return source;
}

/**
 * "Read aloud" for a help-language text (a question, a hint, a tip): its recording in that language
 * when there is one (public/audio-help, src/lib/helpAudio.ts), else the device's own voice for it.
 * Neither: no button.
 */
export function HelpSay({ text, lang }: { text?: string; lang?: HelpLanguage }) {
  const source = useHelpSource(lang, text);
  // The work-rules track: every text is Dutch and has its own Dutch speaker; no second one.
  if (!source || !text || !lang || lang.code === 'nl') return null;
  const label = ui('readAloud', lang);
  return (
    <button
      type="button"
      className="help-say"
      aria-label={said(label)}
      lang={saidLang(label)}
      title={said(label)}
      data-source={source}
      onClick={() => speakHelp(text, lang.code)}
    >
      {/* A globe and a speech bubble (no flag): never the Dutch speaker's look. */}
      <GlobeIcon size={18} />
      <HelpVoiceIcon size={22} />
    </button>
  );
}
