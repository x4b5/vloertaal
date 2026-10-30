import { useEffect, useMemo, useRef, useState } from 'react';
import type { Dialogue } from '../content/types';
import { fillN, gloss, ui } from '../i18n';
import { dutchUi } from '../lib/track';
import type { HelpLanguage } from '../i18n/types';
import { canSay, speak } from '../lib/audio';
import { breakable } from '../lib/dutch';
import { samenNext, samenTurns, type SamenStep, type SamenTurn } from '../lib/samen';
import { learnerVoice, voiceFor } from '../lib/voices';
import { Bi } from './Bi';
import { BramSays } from './BramSays';
import { castFor, Character, colleaguesOf, MeAvatar, type CharacterId } from './Characters';
import { ChromeBack } from './ChromeBack';
import { ChevronIcon, SpeakerIcon } from './Icons';
import { NlPair } from './NlPair';
import { useVoices } from './useVoices';
import '../samen.css';

/** The cast's names, as the lessons and the coaches' page write them. */
const NAME: Record<CharacterId, string> = { bram: 'Bram', amina: 'Amina', henk: 'Henk', jada: 'Jada' };

/** The colleague of a chat: the same one as in the lesson's chat exercise (ChatExercise). */
export function samenColleague(line: SamenTurn['line'], lang?: HelpLanguage): CharacterId {
  return castFor(line.id, colleaguesOf(lang?.gender));
}

/** The translation shown under each turn: on unless the viewer turned it off (only a convenience). */
const HELP_KEY = 'vloertaal:samen-help';
function helpOn(): boolean {
  try { return localStorage.getItem(HELP_KEY) !== '0'; } catch { return true; }
}
function keepHelp(on: boolean) {
  try { localStorage.setItem(HELP_KEY, on ? '1' : '0'); } catch { /* private mode: only for now */ }
}

/**
 * "Oefen samen": two people on one phone read a lesson's chats aloud, turn by turn. Person 1
 * reads the colleague (Bram, Henk, Amina or Jada), person 2 answers; "Wissel de rollen" swaps
 * them. Every turn is big on the screen with who is talking, "Hoor het" (the line in the
 * character's voice) and "Volgende". No network, no microphone, no score: nothing is stored
 * except whether the translation is shown.
 *
 * At most three things to tap on every page (the back arrow is chrome): the explanation has
 * Start; a turn has Hoor het (a speaker), Vertaling and Volgende; the end has Wissel de rollen
 * and Klaar.
 */
export function Samen({ dialogues, lang, onBack, onDone, start = 'intro', startSwapped = false }: {
  dialogues: readonly Dialogue[];
  lang?: HelpLanguage;
  /** The back arrow. */
  onBack: () => void;
  /** "Klaar" at the end. */
  onDone: () => void;
  /** Screenshots: the page to start on, and the roles swapped. */
  start?: SamenStep;
  startSwapped?: boolean;
}) {
  useVoices();
  const [step, setStep] = useState<SamenStep>(start);
  const [swapped, setSwapped] = useState(startSwapped);
  const [help, setHelp] = useState(helpOn);
  const turns = useMemo(() => samenTurns(dialogues, swapped), [dialogues, swapped]);
  const rtl = lang?.dir === 'rtl';
  // A new page: the focus goes to its main text, so a screen reader reads the turn right away
  // and the keyboard is not left on a button that is gone.
  const mainRef = useRef<HTMLElement>(null);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; if (start === 'intro') return; }
    mainRef.current?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [step, swapped, start]);

  const next = () => setStep((s) => samenNext(s, turns.length));
  const again = () => { setSwapped((s) => !s); setStep(0); };
  const toggleHelp = () => setHelp((h) => { keepHelp(!h); return !h; });

  // The colleagues of these chats, for the roles on the first page ("Persoon 1 · Bram").
  const names = [...new Set(dialogues.map((d) => NAME[samenColleague(d.prompt, lang)]))].join(', ');
  const them: 1 | 2 = swapped ? 2 : 1;

  let body: React.ReactNode;
  let foot: React.ReactNode;
  if (step === 'intro') {
    body = (
      <>
        <p className="samen-intro" ref={mainRef as React.RefObject<HTMLParagraphElement>} tabIndex={-1}><Bi text={ui('samenIntro', lang)} /></p>
        <p className="samen-how"><Bi text={ui('samenHow', lang)} /></p>
        <ul className="samen-roles">
          <li className="samen-role">
            <span className="samen-face" aria-hidden><Character who={samenColleague(dialogues[0].prompt, lang)} size={64} /></span>
            <span className="samen-role-text">
              <Bi className="samen-person" text={fillN(ui('samenPerson', lang), them)} />
              <span className="samen-name" lang="nl">{names}</span>
            </span>
          </li>
          <li className="samen-role">
            <span className="samen-face samen-face-me" aria-hidden><MeAvatar /></span>
            <span className="samen-role-text">
              <Bi className="samen-person" text={fillN(ui('samenPerson', lang), them === 1 ? 2 : 1)} />
              <Bi className="samen-name" text={ui('samenAnswer', lang)} />
            </span>
          </li>
        </ul>
        <p className="samen-note muted"><Bi text={ui('samenNoScore', lang)} /></p>
      </>
    );
    foot = (
      <button type="button" className="btn btn-go btn-primary samen-go" onClick={next} dir={rtl ? 'rtl' : undefined}>
        <Bi className="btn-label" text={ui('start', lang)} />
        <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
      </button>
    );
  } else if (step === 'end') {
    body = (
      <div className="samen-end" ref={mainRef as React.RefObject<HTMLDivElement>} tabIndex={-1}>
        <BramSays text={ui('samenEnd', lang)} tail="down" />
        <span className="samen-end-cast" aria-hidden>
          <Character who="bram" mood="pleased" size={120} />
        </span>
      </div>
    );
    foot = (
      <>
        <button type="button" className="btn btn-go btn-primary samen-swap" onClick={again} dir={rtl ? 'rtl' : undefined}>
          <Bi className="btn-label" text={ui('samenSwap', lang)} />
          <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
        </button>
        <button type="button" className="btn btn-ghost samen-done" onClick={onDone} dir={rtl ? 'rtl' : undefined}>
          <Bi className="btn-label" text={ui('samenStop', lang)} />
        </button>
      </>
    );
  } else {
    const turn = turns[step];
    const colleague = turn.role === 'them' ? samenColleague(turn.line, lang) : null;
    const voice = colleague ? voiceFor(colleague) : learnerVoice(lang?.gender);
    const meaning = gloss(turn.line.id, turn.line.en, lang);
    const person = fillN(ui('samenPerson', lang), turn.person);
    // In Dutch only (the screens of Werkregels) there is no translation to show.
    const translated = !dutchUi(lang);
    body = (
      <>
        <p className="samen-count" dir="ltr" aria-hidden>{`${step + 1} / ${turns.length}`}</p>
        <article
          className={`samen-turn samen-turn-${turn.role}`}
          ref={mainRef as React.RefObject<HTMLElement>}
          tabIndex={-1}
        >
          <header className="samen-who">
            <span className="samen-face" aria-hidden>{colleague ? <Character who={colleague} size={96} /> : <MeAvatar />}</span>
            <span className="samen-role-text">
              <span className={`samen-badge samen-badge-${turn.person}`}><Bi text={person} /></span>
              {colleague ? <span className="samen-name" lang="nl">{NAME[colleague]}</span> : <Bi className="samen-name" text={ui('samenAnswer', lang)} />}
            </span>
          </header>
          <p className="samen-line" lang="nl" dir="ltr">{breakable(turn.line.nl)}</p>
          {translated && help && <p className="samen-help"><Bi text={meaning} /></p>}
        </article>
        <div className="samen-tools" dir={rtl ? 'rtl' : undefined}>
          {canSay(turn.line.nl, voice) && (
            <button
              type="button"
              className="btn samen-hear max3-say"
              onClick={() => speak(turn.line.nl, false, 'nl', voice)}
            >
              <SpeakerIcon size={24} />
              <Bi className="btn-label" text={ui('samenHear', lang)} />
            </button>
          )}
          {translated && (
            <button type="button" className="btn btn-ghost samen-help-toggle" aria-pressed={help} onClick={toggleHelp}>
              <span className="samen-check" aria-hidden>{help ? '✓' : ''}</span>
              <Bi className="btn-label" text={ui('samenTranslation', lang)} />
            </button>
          )}
        </div>
      </>
    );
    foot = (
      <button type="button" className="btn btn-go btn-primary samen-next" onClick={next} dir={rtl ? 'rtl' : undefined}>
        <Bi className="btn-label" text={ui('samenNext', lang)} />
        <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
      </button>
    );
  }

  return (
    <div className="player samen" dir={rtl ? 'rtl' : undefined}>
      <div className="screen-head samen-head" dir={rtl ? 'rtl' : undefined}>
        <ChromeBack lang={lang} onBack={onBack} />
        <h1 className="samen-title">
          <NlPair nlFirst nl="Oefen samen" nlClass="samen-title-nl" text={ui('samenTitle', lang)} />
        </h1>
      </div>
      <div className="player-body samen-body">{body}</div>
      <footer className="player-foot">
        <div className="foot-inner">
          <div className="foot-actions">{foot}</div>
        </div>
      </footer>
    </div>
  );
}
