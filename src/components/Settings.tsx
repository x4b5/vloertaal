import { useEffect, useRef, useState, type ReactNode } from 'react';
import { NOT_SURE, sectors, type SectorChoice } from '../content/sectors';
import { hasGender, ui, type Bilingual } from '../i18n';
import type { Gender, HelpLanguage, LangCode } from '../i18n/types';
import type { Access } from '../lib/access';
import { setPreferredVoice, speak } from '../lib/audio';
import { earnedCertificates } from '../lib/certificate';
import { countingOn, setCounting } from '../lib/count';
import { applyEnglish, setWantsEnglish, wantsEnglish } from '../lib/english';
import { installWay } from '../lib/install';
import { offlineAuto, offlineSupported, setOfflineAuto } from '../lib/offline';
import type { Progress, ThemeChoice } from '../lib/progress';
import { REMINDER_TIMES, reminderIcs, saveFile } from '../lib/reminder';
import {
  settingsDepth, settingsRows, SETTINGS_LIST_PAGES, voiceChoiceOf, voiceRefs,
  type SettingsList, type SettingsPage, type VoiceChoice,
} from '../lib/settingsMenu';
import { setSpeakingOn, speakingOn } from '../lib/speaking';
import { TEXT_SIZES, type TextSize } from '../lib/textSize';
import { VOICE_SAMPLE } from '../lib/voices';
import { nonLatinHelp, setWantsWriting, setWritingInput, wantsWriting, writingInput } from '../lib/writing';
import { Bi } from './Bi';
import { CertIcon, CertificatesCard } from './Certificate';
import { ChoiceCards, type ChoiceOption } from './Choice';
import { Flag } from './Flags';
import { UpgradeCard } from './Gate';
import { GenderPicker, NeutralIcon } from './Gender';
import {
  AlertIcon, AutoThemeIcon, BackIcon, CalendarIcon, CheckIcon, ChevronIcon, CloseIcon, CrateIcon, GlobeIcon, KeyboardIcon,
  LettersIcon, LockIcon, MoonIcon, PencilIcon, RouteIcon, SpeakerIcon, SpeakerOffIcon, SunIcon,
} from './Icons';
import { BackupCard, InstallCard } from './Keep';
import { LogoMark } from './Logo';
import { LanguagePicker } from './Screens';
import { SectorCards, SectorGroupCards, SectorIcon } from './Sector';
import { MicIcon } from './Speaking';
import { useVoices } from './useVoices';

export type { SettingsPage } from '../lib/settingsMenu';

/** A small phone, for "This phone". */
const PhoneIcon = ({ size = 24 }: { size?: number }) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.6" fill="none" stroke="currentColor" strokeWidth="2.3" />
    <path d="M10.5 18.2h3" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
  </svg>
);
/** Three bars, for "Count anonymously". */
const BarsIcon = ({ size = 24 }: { size?: number }) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <path d="M5 20v-6M12 20V5M19 20v-9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);
const TextA = ({ size }: { size: TextSize }) => <span className={`text-size-a text-size-${size}`} aria-hidden>A</span>;

const TEXT_KEYS = { normal: 'textNormal', large: 'textLarge', xl: 'textXl' } as const;
const THEME_KEYS = { auto: 'themeAuto', light: 'themeLight', dark: 'themeDark' } as const;
const THEME_ICONS = { auto: AutoThemeIcon, light: SunIcon, dark: MoonIcon };

/** Each row: its Dutch name, its UI key and its icon. */
const ROWS: Record<SettingsPage, { nl: string; key: Parameters<typeof ui>[0]; icon: ReactNode }> = {
  me: { nl: 'Taal en ik', key: 'settingsLangMe', icon: <GlobeIcon size={26} /> },
  lessons: { nl: 'Lessen', key: 'settingsLessons', icon: <RouteIcon size={26} /> },
  phone: { nl: 'Deze telefoon', key: 'settingsPhone', icon: <PhoneIcon size={26} /> },
  language: { nl: 'Hulptaal', key: 'helpLanguage', icon: <GlobeIcon size={24} /> },
  gender: { nl: 'Vrouw of man?', key: 'genderTitle', icon: <NeutralIcon size={24} /> },
  sector: { nl: 'Waar werk je?', key: 'chooseSector', icon: <SectorIcon id="logistics" size={24} /> },
  'sector-make': { nl: 'Waar werk je?', key: 'chooseSector', icon: null },
  'sector-care': { nl: 'Waar werk je?', key: 'chooseSector', icon: null },
  english: { nl: 'Ook Engels tonen', key: 'showEnglish', icon: <span className="set-en" lang="en">EN</span> },
  certificates: { nl: 'Mijn certificaten', key: 'myCertificates', icon: <CertIcon size={24} /> },
  sound: { nl: 'Geluid', key: 'sound', icon: <SpeakerIcon size={24} /> },
  voice: { nl: 'Stem', key: 'voice', icon: <MicIcon size={24} /> },
  speaking: { nl: 'Spreken oefenen', key: 'speakingPractice', icon: <MicIcon size={24} /> },
  writing: { nl: 'Schrijven', key: 'settingWriting', icon: <PencilIcon size={24} /> },
  text: { nl: 'Tekstgrootte', key: 'textSize', icon: <TextA size="normal" /> },
  theme: { nl: 'Weergave', key: 'theme', icon: <AutoThemeIcon size={24} /> },
  offline: { nl: 'Lessen op deze telefoon', key: 'settingKeepLessons', icon: <CrateIcon size={24} /> },
  reminder: { nl: 'Herinner mij elke dag', key: 'remindTitle', icon: <CalendarIcon size={24} /> },
  install: { nl: 'Op beginscherm', key: 'installTitle', icon: <LogoMark size={26} check={false} /> },
  backup: { nl: 'Bewaar je voortgang', key: 'backupTitle', icon: <CrateIcon size={24} /> },
  counting: { nl: 'Anoniem meetellen', key: 'countTitle', icon: <BarsIcon size={24} /> },
  reset: { nl: 'Voortgang wissen', key: 'resetProgress', icon: <AlertIcon size={24} /> },
  unlock: { nl: 'Volledige versie', key: 'unlockFull', icon: <LockIcon size={24} /> },
};

/** A short value in the help language only (English when there is none). */
function Value({ text }: { text: Bilingual }) {
  return text.help && text.lang
    ? <span className="set-row-value" lang={text.lang.code} dir={text.lang.dir}>{text.help}</span>
    : <span className="set-row-value" lang="en">{text.en}</span>;
}

/** The page head: Back on a list (one tap, the list exception), only the title on a question page. */
function Head({ page, lang, onBack }: { page: SettingsPage | null; lang?: HelpLanguage; onBack?: () => void }) {
  const row = page ? ROWS[page] : null;
  return (
    <div className="screen-head max3-head">
      {onBack && <button type="button" className="icon-btn" onClick={onBack} aria-label="Back"><BackIcon size={28} /></button>}
      <h1 className="max3-title">
        <Bi text={ui(row ? row.key : 'settings', lang)} />
        <span className="max3-title-nl" lang="nl">{row ? row.nl : 'Instellingen'}</span>
      </h1>
    </div>
  );
}

export function Settings({
  progress, lang, page, onPage, onReturn, onLang, onGender, onSector, onTheme, onTextSize, onVoice, onQuiet, onReset,
  onRestore, access = 'full', onAccess, onCertificate,
}: {
  progress: Progress;
  lang?: HelpLanguage;
  /** The page shown; none = the menu of three rows. */
  page?: SettingsPage;
  /** Open a list or a setting (App pushes it, so the phone's Back button returns). */
  onPage: (page: SettingsPage) => void;
  /** Back up `steps` pages (a list's Back, or after an answer on a question page). */
  onReturn: (steps?: number) => void;
  onLang: (code: LangCode | null) => void;
  onGender: (gender: Gender) => void;
  onSector: (sector: SectorChoice) => void;
  onTheme: (theme: ThemeChoice) => void;
  onTextSize: (size: TextSize) => void;
  onVoice: (voice: string | null) => void;
  /** "Without sound" on (true) or off. */
  onQuiet: (quiet: boolean) => void;
  onReset: () => void;
  /** "Bewaar je voortgang": a backup was put back (merged or replaced). */
  onRestore: (next: Progress) => void;
  access?: Access;
  /** Preview: the unlock page's password was right. */
  onAccess?: (a: Access) => void;
  /** Opens a certificate from "Mijn certificaten". */
  onCertificate: (unitId: string) => void;
}) {
  const { device, recorded } = useVoices();
  /** Bumped when a stored-on-this-device switch changes, so the page shows it at once. */
  const [, setTick] = useState(0);
  const timer = useRef<number | null>(null);
  useEffect(() => {
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, []);
  /** An answer on a question page: the check shows a moment, then back to the list. */
  const answered = (steps = 1) => {
    setTick((n) => n + 1);
    if (timer.current) clearTimeout(timer.current);
    timer.current = window.setTimeout(() => onReturn(steps), 420);
  };
  const say = (key: Parameters<typeof ui>[0]) => ui(key, lang);
  const onOff = (on: boolean, set: (on: boolean) => void): ReactNode => (
    <ChoiceCards
      label="On or off"
      current={on ? 'on' : 'off'}
      onPick={(id) => { set(id === 'on'); answered(); }}
      options={[
        { id: 'on', nl: 'Aan', text: say('settingOn'), picture: <CheckIcon size={28} /> },
        { id: 'off', nl: 'Uit', text: say('settingOff'), picture: <CloseIcon size={26} /> },
      ]}
    />
  );

  const ctx = {
    helpLang: Boolean(lang),
    gender: hasGender(lang?.code),
    preview: access === 'preview' && Boolean(onAccess),
    install: installWay() !== null,
    offline: offlineSupported(),
  };
  const writing = nonLatinHelp(lang) && !wantsWriting() ? 'pick' : writingInput(lang);
  const voice = voiceChoiceOf(progress.voice, recorded);
  const refs = voiceRefs(recorded);

  /** The current value shown on a row. */
  const value = (p: SettingsPage): ReactNode => {
    switch (p) {
      case 'language': return lang ? <span className="set-row-value" lang={lang.code} dir={lang.dir}>{lang.nativeName}</span> : <span className="set-row-value" lang="en">English</span>;
      case 'gender': return progress.gender ? <Value text={say(progress.gender === 'f' ? 'genderWoman' : progress.gender === 'm' ? 'genderMan' : 'genderNone')} /> : null;
      case 'sector': {
        const s = sectors.find((x) => x.id === progress.sector);
        return progress.sector ? <Value text={say(s ? s.key : NOT_SURE.key)} /> : null;
      }
      case 'english': return <Value text={say(wantsEnglish() ? 'settingOn' : 'settingOff')} />;
      case 'certificates': return <span className="set-row-value">{earnedCertificates(progress).length}</span>;
      case 'sound': return <Value text={say(progress.quiet ? 'withoutSound' : 'soundOn')} />;
      case 'voice': return voice ? <Value text={say(voice === 'f' ? 'voiceWoman' : voice === 'm' ? 'voiceMan' : 'voiceAuto')} /> : null;
      case 'speaking': return <Value text={say(speakingOn() ? 'settingOn' : 'settingOff')} />;
      case 'writing': return <Value text={say(writing === 'pick' ? 'writingPick' : writing === 'tiles' ? 'letterTiles' : 'useKeyboard')} />;
      case 'text': return <Value text={say(TEXT_KEYS[progress.textSize ?? 'normal'])} />;
      case 'theme': return <Value text={say(THEME_KEYS[progress.theme])} />;
      case 'offline': return <Value text={say(offlineAuto() ? 'settingOn' : 'settingOff')} />;
      case 'counting': return <Value text={say(countingOn() ? 'settingOn' : 'settingOff')} />;
      default: return null;
    }
  };

  const rowsOf = (pages: SettingsPage[], big = false) => (
    <ul className={`set-rows ${big ? 'set-rows-big' : ''}`}>
      {pages.map((p) => (
        <li key={p}>
          <button type="button" className={`set-row ${p === 'reset' ? 'danger' : ''}`} onClick={() => onPage(p)}>
            <span className="set-row-icon" aria-hidden>
              {p === 'language' && lang ? <Flag code={lang.code} width={30} /> : p === 'sector' && progress.sector ? <SectorIcon id={progress.sector} size={24} /> : ROWS[p].icon}
            </span>
            <span className="set-row-names">
              <Bi className="set-row-help" text={say(ROWS[p].key)} />
              <span className="set-row-nl" lang="nl">{ROWS[p].nl}</span>
            </span>
            {value(p)}
            <ChevronIcon size={22} className="set-row-chev" />
          </button>
        </li>
      ))}
    </ul>
  );

  const isList = page ? SETTINGS_LIST_PAGES.includes(page) : false;
  const body = (): ReactNode => {
    switch (page) {
      case undefined:
        return rowsOf(['me', 'lessons', 'phone'], true);
      case 'me':
      case 'lessons':
      case 'phone':
        return rowsOf(settingsRows(page as SettingsList, ctx));
      case 'language':
        return (
          <>
            <LanguagePicker current={progress.helpLang} onPick={(code) => { onLang(code); answered(); }} showBeta compact lang={lang} />
            {lang && !lang.reviewed && (
              <p className="beta-note">
                <span className={`beta-chip ${lang.ui.beta ? 'en-support' : ''}`} lang="en">beta</span>
                <Bi text={say('beta')} />
              </p>
            )}
          </>
        );
      case 'gender':
        return <GenderPicker current={progress.gender} lang={lang} onPick={(g) => { onGender(g); answered(); }} />;
      case 'sector':
        return (
          <SectorGroupCards
            current={progress.sector}
            lang={lang}
            onPick={(g) => { if (g === 'none') { onSector('none'); answered(); } else onPage(g === 'make' ? 'sector-make' : 'sector-care'); }}
          />
        );
      case 'sector-make':
      case 'sector-care':
        return (
          <>
            <p className="max3-crumb"><Bi text={say(page === 'sector-make' ? 'sectorGroupMake' : 'sectorGroupCare')} /></p>
            <SectorCards group={page === 'sector-make' ? 'make' : 'care'} current={progress.sector} lang={lang} onPick={(s) => { onSector(s); answered(2); }} />
          </>
        );
      case 'english':
        return onOff(wantsEnglish(), (on) => { setWantsEnglish(on); applyEnglish(lang?.code, on); });
      case 'certificates':
        return <CertificatesCard progress={progress} lang={lang} onOpen={onCertificate} />;
      case 'sound':
        return (
          <>
            <ChoiceCards
              label={ui('sound').en}
              current={progress.quiet ? 'off' : 'on'}
              onPick={(id) => { onQuiet(id === 'off'); answered(); }}
              options={[
                { id: 'on', text: say('soundOn'), picture: <SpeakerIcon size={28} /> },
                { id: 'off', text: say('withoutSound'), picture: <SpeakerOffIcon size={28} /> },
              ]}
            />
            <p className="max3-hint"><Bi text={say('quietHint')} /></p>
          </>
        );
      case 'voice': {
        const refOf = (id: VoiceChoice): string | null => (id === 'auto' ? null : refs[id] ?? null);
        const base: ChoiceOption<VoiceChoice>[] = [
          { id: 'auto', text: say('voiceAuto'), picture: <AutoThemeIcon size={26} /> },
        ];
        if (refs.f) base.push({ id: 'f', text: say('voiceWoman'), picture: <span className="set-face set-face-f" aria-hidden>♀</span> });
        if (refs.m) base.push({ id: 'm', text: say('voiceMan'), picture: <span className="set-face set-face-m" aria-hidden>♂</span> });
        const options = base.map((o) => ({
          ...o,
          extra: (
            <button type="button" className="speak speak-md max3-say" aria-label={`Listen: ${o.text.en}`} onClick={() => speak(VOICE_SAMPLE, false, 'nl', refOf(o.id))}>
              <SpeakerIcon size={26} />
            </button>
          ),
        }));
        if (!recorded.length && !device.length) return <p className="warn"><Bi text={say('voiceNone')} /></p>;
        return (
          <>
            <p className="max3-hint"><Bi text={say('voiceHint')} /></p>
            <ChoiceCards
              label={ui('voice').en}
              current={voice}
              onPick={(id) => {
                const ref = refOf(id);
                setPreferredVoice(ref);
                onVoice(ref);
                answered();
              }}
              options={options}
            />
          </>
        );
      }
      case 'speaking':
        return (
          <>
            {onOff(speakingOn(), setSpeakingOn)}
            <p className="max3-hint"><Bi text={say('speakingHint')} /></p>
          </>
        );
      case 'writing': {
        const options: ChoiceOption<'pick' | 'tiles' | 'keys'>[] = [
          ...(nonLatinHelp(lang) ? [{ id: 'pick' as const, text: say('writingPick'), picture: <span className="set-pick" aria-hidden>abc</span> }] : []),
          { id: 'tiles', text: say('letterTiles'), picture: <LettersIcon size={28} /> },
          { id: 'keys', text: say('useKeyboard'), picture: <KeyboardIcon size={28} /> },
        ];
        return (
          <ChoiceCards
            label={ui('settingWriting').en}
            current={writing}
            onPick={(id) => {
              if (nonLatinHelp(lang)) setWantsWriting(id !== 'pick');
              if (id !== 'pick') setWritingInput(id);
              answered();
            }}
            options={options}
          />
        );
      }
      case 'text':
        return (
          <ChoiceCards
            label={ui('textSize').en}
            current={progress.textSize ?? 'normal'}
            onPick={(size) => { onTextSize(size); answered(); }}
            options={TEXT_SIZES.map((size) => ({ id: size, text: say(TEXT_KEYS[size]), picture: <TextA size={size} /> }))}
          />
        );
      case 'theme':
        return (
          <ChoiceCards
            label={ui('theme').en}
            current={progress.theme}
            onPick={(t) => { onTheme(t); answered(); }}
            options={(['auto', 'light', 'dark'] as const).map((t) => {
              const Icon = THEME_ICONS[t];
              return { id: t, text: say(THEME_KEYS[t]), picture: <Icon size={28} /> };
            })}
          />
        );
      case 'offline':
        return (
          <>
            {onOff(offlineAuto(), setOfflineAuto)}
            <p className="max3-hint"><Bi text={say('settingKeepLessonsHint')} /></p>
          </>
        );
      case 'reminder':
        return <ReminderTimes lang={lang} />;
      case 'install':
        return <InstallCard lang={lang} />;
      case 'backup':
        return <BackupCard progress={progress} lang={lang} onRestore={onRestore} />;
      case 'counting':
        return (
          <>
            {onOff(countingOn(), setCounting)}
            <p className="max3-hint"><Bi text={say('countHint')} /></p>
          </>
        );
      case 'reset':
        return (
          <>
            <p className="max3-hint max3-hint-top"><Bi text={say('resetConfirm')} /></p>
            <ChoiceCards
              label={ui('resetProgress').en}
              onPick={(id) => { if (id === 'reset') onReset(); onReturn(1); }}
              options={[
                { id: 'reset', text: say('resetProgress'), picture: <AlertIcon size={26} />, danger: true },
                { id: 'keep', text: say('cancel'), picture: <BackIcon size={26} /> },
              ]}
            />
          </>
        );
      case 'unlock':
        return onAccess ? <UpgradeCard lang={lang} onAccess={(a) => { onAccess(a); answered(); }} /> : null;
    }
  };

  return (
    <div className={`screen max3-settings ${page ? (isList ? 'max3-list' : 'max3-setting') : 'max3-menu'}`} data-depth={settingsDepth(page)} dir={lang?.dir}>
      <Head page={page ?? null} lang={lang} onBack={isList ? () => onReturn(1) : undefined} />
      {body()}
    </div>
  );
}

/** "Remind me every day": the three times; a tap puts that daily reminder in the phone's calendar. */
function ReminderTimes({ lang }: { lang?: HelpLanguage }) {
  const [saved, setSaved] = useState<string | null>(null);
  const add = (time: string) => {
    saveFile('vloertaal-herinnering.ics', 'text/calendar;charset=utf-8', reminderIcs(time, `${location.origin}${location.pathname}`, new Date()));
    setSaved(time);
  };
  return (
    <>
      <ChoiceCards
        label={ui('remindTitle').en}
        current={saved}
        onPick={add}
        options={REMINDER_TIMES.map((t) => ({
          id: t.time,
          nl: t.nl,
          text: ui(t.key, lang),
          picture: <span className="set-time">{t.time}</span>,
        }))}
      />
      <p className="max3-hint" role="status"><Bi text={ui(saved ? 'remindAdded' : 'remindHint', lang)} /></p>
    </>
  );
}
