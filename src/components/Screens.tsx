import { findItem, phrasebookIds, units } from '../content/curriculum';
import { gloss, helpLanguages, ui } from '../i18n';
import type { HelpLanguage, LangCode } from '../i18n/types';
import { speechAvailable } from '../lib/audio';
import { isUnlocked } from '../lib/exercises';
import type { Progress } from '../lib/progress';
import { Bi } from './Bi';
import { SpeakButton } from './SpeakButton';

export function LanguagePicker({ current, onPick }: {
  /** undefined = nothing chosen yet (onboarding). */
  current?: LangCode | null;
  onPick: (code: LangCode | null) => void;
}) {
  return (
    <div className="lang-grid">
      {helpLanguages.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-btn ${current === l.code ? 'picked' : ''}`}
          onClick={() => onPick(l.code)}
        >
          <span className="lang-native" lang={l.code} dir={l.dir}>{l.nativeName}</span>
          <span className="lang-en">{l.name}</span>
          {!l.reviewed && <span className="lang-beta">beta</span>}
        </button>
      ))}
      <button
        type="button"
        className={`lang-btn ${current === null ? 'picked' : ''}`}
        onClick={() => onPick(null)}
      >
        <span className="lang-native">English</span>
        <span className="lang-en">{ui('englishOnly').en}</span>
      </button>
    </div>
  );
}

export function Onboarding({ onDone }: { onDone: (code: LangCode | null) => void }) {
  return (
    <div className="screen onboarding">
      <div className="hero">
        <div className="mascot" aria-hidden>👷</div>
        <h1>Vloertaal</h1>
        <p className="tagline">{ui('appTagline').en}</p>
        <p className="tagline-nl" lang="nl">Nederlands voor op de werkvloer</p>
      </div>
      <h2>{ui('chooseLanguage').en}</h2>
      <p className="muted">{ui('chooseLanguageHint').en}</p>
      <LanguagePicker onPick={onDone} />
    </div>
  );
}

export function TopBar({ streak, xp, lang, onSettings }: {
  streak: number;
  xp: number;
  lang?: HelpLanguage;
  onSettings: () => void;
}) {
  return (
    <header className="topbar">
      <span className="brand">👷 Vloertaal</span>
      <span className="stat" title={ui('dayStreak').en}>🔥 {streak}</span>
      <span className="stat" title="XP">⭐ {xp}</span>
      <button type="button" className="stat stat-btn" onClick={onSettings} aria-label={ui('settings').en}>
        🌐 {lang ? lang.nativeName : 'EN'}
      </button>
    </header>
  );
}

export function Path({ progress, lang, onStart, onPhrasebook }: {
  progress: Progress;
  lang?: HelpLanguage;
  onStart: (lessonId: string, review: boolean) => void;
  onPhrasebook: () => void;
}) {
  let n = 0;
  return (
    <div className="path">
      <button type="button" className="phrase-banner" onClick={onPhrasebook}>
        <span aria-hidden>🆘</span>
        <Bi text={ui('phrasebook', lang)} />
        <span aria-hidden>›</span>
      </button>

      {units.map((unit, u) => (
        <section key={unit.id} className="unit" style={{ '--unit': unit.color } as React.CSSProperties}>
          <div className="unit-head">
            <div>
              <div className="unit-num">Unit {u + 1} · <span lang="nl">{unit.titleNl}</span></div>
              <h2><Bi text={gloss(unit.id, unit.title, lang)} /></h2>
            </div>
            <span className="unit-emoji" aria-hidden>{unit.emoji}</span>
          </div>
          <ol className="nodes">
            {unit.lessons.map((lesson) => {
              const record = progress.completed[lesson.id];
              const open = isUnlocked(lesson.id, progress.completed);
              const offset = [0, 1, 0, -1][n++ % 4];
              return (
                <li key={lesson.id} className="node-row" style={{ '--offset': offset } as React.CSSProperties}>
                  <button
                    type="button"
                    className={`node ${record ? 'node-done' : open ? 'node-open' : 'node-locked'}`}
                    disabled={!open}
                    onClick={() => onStart(lesson.id, Boolean(record))}
                    aria-label={`${lesson.title}${open ? '' : ` (${ui('locked').en})`}`}
                  >
                    <span aria-hidden>{record ? (record.best === 1 ? '👑' : '✓') : open ? '★' : '🔒'}</span>
                  </button>
                  <div className="node-label">
                    <Bi text={gloss(lesson.id, lesson.title, lang)} />
                    {open && (
                      <span className="node-cta">{record ? ui('practice').en : ui('start').en}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}

export function Phrasebook({ lang, onBack }: { lang?: HelpLanguage; onBack: () => void }) {
  return (
    <div className="screen">
      <div className="screen-head">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back">←</button>
        <h1><Bi text={ui('phrasebook', lang)} /></h1>
      </div>
      <p className="muted"><Bi text={ui('phrasebookHint', lang)} /></p>
      {!speechAvailable() && <p className="warn">{ui('audioUnavailable').en}</p>}
      <ul className="phrases">
        {phrasebookIds.map((id) => {
          const item = findItem(id);
          if (!item) return null;
          return (
            <li key={id} className="phrase">
              <SpeakButton text={item.nl} />
              <div className="phrase-text">
                <span className="phrase-nl" lang="nl">{item.nl}</span>
                <Bi text={gloss(id, item.en, lang)} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Settings({ progress, lang, onLang, onReset, onBack }: {
  progress: Progress;
  lang?: HelpLanguage;
  onLang: (code: LangCode | null) => void;
  onReset: () => void;
  onBack: () => void;
}) {
  return (
    <div className="screen">
      <div className="screen-head">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back">←</button>
        <h1><Bi text={ui('settings', lang)} /></h1>
      </div>
      <h2><Bi text={ui('helpLanguage', lang)} /></h2>
      <LanguagePicker current={progress.helpLang} onPick={onLang} />
      {lang && !lang.reviewed && <p className="muted small">beta: {ui('beta').en}</p>}
      <button
        type="button"
        className="btn btn-ghost danger"
        onClick={() => window.confirm(ui('resetConfirm').en) && onReset()}
      >
        <Bi text={ui('resetProgress', lang)} />
      </button>
    </div>
  );
}

export function Result({ accuracy, xp, lang, onDone }: {
  accuracy: number;
  xp: number;
  lang?: HelpLanguage;
  onDone: () => void;
}) {
  return (
    <div className="screen result">
      <div className="confetti" aria-hidden>🎉</div>
      <h1><Bi text={ui('lessonComplete', lang)} /></h1>
      <div className="result-stats">
        <div className="result-box xp">
          <span className="result-label">{ui('xpEarned').en}</span>
          <span className="result-value">⭐ {xp}</span>
        </div>
        <div className="result-box acc">
          <span className="result-label">{ui('accuracy').en}</span>
          <span className="result-value">🎯 {Math.round(accuracy * 100)}%</span>
        </div>
      </div>
      <button type="button" className="btn btn-green" onClick={onDone} autoFocus>
        {ui('continue', lang).en}
      </button>
    </div>
  );
}
