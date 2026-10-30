import { useEffect, useRef, useState, type ReactNode } from 'react';
import { NOT_SURE, sectorGroups, sectors, type SectorChoice } from '../content/sectors';
import { REGIONS, regionMetaOf, regionsOn, type RegionChoice } from '../content/regio';
import { ensureLanguage, hasGender, isLanguageLoaded, langTag, said, saidLang, ui, type Bilingual } from '../i18n';
import type { Gender, HelpLanguage, UiCode } from '../i18n/types';
import { dutchUi } from '../lib/track';
import { NlPair } from './NlPair';
import type { Access } from '../lib/access';
import { autoSpeak, recordedIndexSettled, setPreferredVoice, setTempo, speak } from '../lib/audio';
import { earnedCertificates } from '../lib/certificate';
import { countingOn, setCounting } from '../lib/count';
import { applyEnglish, setWantsEnglish, wantsEnglish } from '../lib/english';
import { installWay } from '../lib/install';
import { offlineAuto, offlineSupported } from '../lib/offline';
import type { Country, Progress, ThemeChoice } from '../lib/progress';
import { REMINDER_TIMES, reminderTapAdds, reminderTime } from '../lib/reminder';
import {
  settingsDepth, settingsRows, SETTINGS_LIST_PAGES, voiceChoiceOf, voiceRefs,
  type SettingsList, type SettingsPage, type VoiceChoice,
} from '../lib/settingsMenu';
import { setSpeakingOn, speakingOn } from '../lib/speaking';
import { installLocal, listenOn, localStatus, setListenOn, type LocalStatus } from '../lib/listen';
import { tempoOf, TEMPOS, type Tempo } from '../lib/tempo';
import { TEXT_SIZES, type TextSize } from '../lib/textSize';
import { VOICE_SAMPLE } from '../lib/voices';
import { nonLatinHelp, setWantsWriting, setWritingInput, wantsWriting, writingInput } from '../lib/writing';
import { Bi } from './Bi';
import { CertIcon } from './CertBadge';
import { CertificatesCard } from './Certificate';
import { ChoiceCards, type ChoiceOption } from './Choice';
import { ChromeBack } from './ChromeBack';
import { UpgradeCard } from './Gate';
import { GenderPicker, NeutralIcon } from './Gender';
import {
  AlertIcon, AutoThemeIcon, CalendarIcon, CheckIcon, ChevronIcon, CloseIcon, CrateIcon, GlobeIcon, KeyboardIcon,
  LettersIcon, LockIcon, MoonIcon, PencilIcon, RouteIcon, SpeakerIcon, SpeakerOffIcon, SunIcon,
} from './Icons';
import { BackupCard, ClockGlyph, InstallCard, OwnTime, addReminder, remindAddedKey, remindStoppedKey, stopReminder } from './Keep';
import { DownloadIcon, OfflineSettingCard } from './Offline';
import { LogoMark } from './Logo';
import { LanguagePicker } from './Screens';
import { NoVoiceNote } from './RulesHelp';
import { SectorCards, SectorGroupHead, SectorGroupList, SectorIcon } from './Sector';
import { MicIcon } from './Speaking';
import { useVoices } from './useVoices';
import { ToetsLine } from './Toets';

export type { SettingsPage } from '../lib/settingsMenu';

/** A small phone, for "This phone". */
const PhoneIcon = ({ size = 24 }: { size?: number }) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.6" fill="none" stroke="currentColor" strokeWidth="2.3" />
    <path d="M10.5 18.2h3" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
  </svg>
);
/** A map pin, for "Waar woon je?" (the region). */
const PinIcon = ({ size = 24 }: { size?: number }) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <path d="M12 21.2s-6.6-6.1-6.6-11.2a6.6 6.6 0 0 1 13.2 0c0 5.1-6.6 11.2-6.6 11.2Z" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.4" fill="currentColor" />
  </svg>
);
/** A flag on a pole, for "In welk land werk je?". */
const FlagIcon = ({ size = 24 }: { size?: number }) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <path d="M5.5 21.5V3.5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    <path d="M5.5 4.5h12.5l-2.6 4 2.6 4H5.5" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
  </svg>
);
/** The flag of the Netherlands or Belgium, drawn (a flag emoji is two letters on some phones). */
const CountryFlag = ({ country }: { country: Country }) => (
  <svg className="country-flag" viewBox="0 0 30 20" width={42} height={28} aria-hidden focusable="false">
    {country === 'nl'
      ? <><rect width="30" height="6.67" fill="#AE1C28" /><rect y="6.67" width="30" height="6.67" fill="#fff" /><rect y="13.33" width="30" height="6.67" fill="#21468B" /></>
      : <><rect width="10" height="20" fill="#000" /><rect x="10" width="10" height="20" fill="#FAE042" /><rect x="20" width="10" height="20" fill="#ED2939" /></>}
    <rect width="30" height="20" fill="none" stroke="currentColor" strokeOpacity="0.35" />
  </svg>
);
/** Three bars, for "Count anonymously". */
const BarsIcon = ({ size = 24 }: { size?: number }) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <path d="M5 20v-6M12 20V5M19 20v-9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);
/** A speedometer, for "Tempo": the needle low (calm) or up (the real pace). */
const TempoIcon = ({ size = 24, fast = false }: { size?: number; fast?: boolean }) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <path d="M3.5 17a8.5 8.5 0 1 1 17 0" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    <path d={fast ? 'M12 17l4.2-5.6' : 'M12 17l-4.6-3.4'} stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1.8" fill="currentColor" />
  </svg>
);
/** A card with lines, for "Laat zien hoe het gaat" (the coach card). */
const CardIcon = ({ size = 24 }: { size?: number }) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <rect x="4" y="2.8" width="16" height="18.4" rx="2.4" fill="none" stroke="currentColor" strokeWidth="2.3" />
    <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
const TEMPO_KEYS = { calm: 'tempoCalm', normal: 'tempoNormal' } as const;
const TEMPO_NL = { calm: 'Rustig', normal: 'Normaal' } as const;
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
  'sector-build': { nl: 'Waar werk je?', key: 'chooseSector', icon: null },
  'sector-make': { nl: 'Waar werk je?', key: 'chooseSector', icon: null },
  'sector-care': { nl: 'Waar werk je?', key: 'chooseSector', icon: null },
  region: { nl: 'Waar woon je?', key: 'regionTitle', icon: <PinIcon size={24} /> },
  country: { nl: 'In welk land werk je?', key: 'countryTitle', icon: <FlagIcon size={24} /> },
  english: { nl: 'Ook Engels tonen', key: 'showEnglish', icon: <span className="set-en" lang="en">EN</span> },
  certificates: { nl: 'Mijn certificaten', key: 'myCertificates', icon: <CertIcon size={24} /> },
  sound: { nl: 'Geluid', key: 'sound', icon: <SpeakerIcon size={24} /> },
  voice: { nl: 'Stem', key: 'voice', icon: <MicIcon size={24} /> },
  tempo: { nl: 'Tempo', key: 'tempo', icon: <TempoIcon size={24} /> },
  speaking: { nl: 'Spreken oefenen', key: 'speakingPractice', icon: <MicIcon size={24} /> },
  writing: { nl: 'Schrijven', key: 'settingWriting', icon: <PencilIcon size={24} /> },
  text: { nl: 'Tekstgrootte', key: 'textSize', icon: <TextA size="normal" /> },
  theme: { nl: 'Weergave', key: 'theme', icon: <AutoThemeIcon size={24} /> },
  // An arrow into the phone's tray: lessons downloaded (the crate is the backup's file).
  offline: { nl: 'Lessen op deze telefoon', key: 'settingKeepLessons', icon: <DownloadIcon size={24} /> },
  reminder: { nl: 'Herinner mij elke dag', key: 'remindTitle', icon: <CalendarIcon size={24} /> },
  'reminder-time': { nl: 'Hoe laat?', key: 'remindPickTime', icon: null },
  install: { nl: 'Op beginscherm', key: 'installTitle', icon: <LogoMark size={26} check={false} /> },
  backup: { nl: 'Bewaar je voortgang', key: 'backupTitle', icon: <CrateIcon size={24} /> },
  counting: { nl: 'Anoniem meetellen', key: 'countTitle', icon: <BarsIcon size={24} /> },
  reset: { nl: 'Voortgang wissen', key: 'resetProgress', icon: <AlertIcon size={24} /> },
  unlock: { nl: 'Volledige versie', key: 'unlockFull', icon: <LockIcon size={24} /> },
  toets: { nl: 'Wat ken je al?', key: 'toetsTitle', icon: <BarsIcon size={24} /> },
  kaart: { nl: 'Laat zien hoe het gaat', key: 'coachCard', icon: <CardIcon size={24} /> },
  listen: { nl: 'Laat de telefoon luisteren (proef)', key: 'listenTrial', icon: <MicIcon size={24} /> },
};

/** A short value in the help language only (English when there is none). */
function Value({ text }: { text: Bilingual }) {
  return text.help && text.lang
    ? <span className="set-row-value" lang={langTag(text.lang.code)} dir={text.lang.dir}>{text.help}</span>
    : <span className="set-row-value" lang="en">{text.en}</span>;
}

/** The page head: the back arrow (fixed chrome, not one of the choices) on every list and question
 *  page, so someone who only came to look has a way out; the menu has none. */
function Head({ page, lang, onBack }: { page: SettingsPage | null; lang?: HelpLanguage; onBack?: () => void }) {
  const row = page ? ROWS[page] : null;
  return (
    <div className="screen-head max3-head">
      {onBack && <ChromeBack lang={lang} onBack={onBack} />}
      <h1 className="max3-title">
        <NlPair text={ui(row ? row.key : 'settings', lang)} nl={row ? row.nl : 'Instellingen'} nlClass="max3-title-nl" />
      </h1>
    </div>
  );
}

export function Settings({
  progress, lang, page, onPage, onReturn, onLang, onGender, onSector, onRegion, onCountry, onTheme, onTextSize, onVoice, onQuiet, onTempo, onReset,
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
  onLang: (code: UiCode | null) => void;
  onGender: (gender: Gender) => void;
  onSector: (sector: SectorChoice) => void;
  /** "Waar woon je?": a region, or 'none' ("Andere plek / zeg ik liever niet"). */
  onRegion?: (region: RegionChoice) => void;
  /** "In welk land werk je?": the Netherlands or Belgium (Vlaanderen). */
  onCountry?: (country: Country) => void;
  onTheme: (theme: ThemeChoice) => void;
  onTextSize: (size: TextSize) => void;
  onVoice: (voice: string | null) => void;
  /** "Without sound" on (true) or off. */
  onQuiet: (quiet: boolean) => void;
  /** "Tempo": calm ("Rustig") or the real pace ("Normaal"). */
  onTempo?: (tempo: Tempo) => void;
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
  /** Can this phone recognise Dutch on the device? ("Laat de telefoon luisteren (proef)"). */
  const [listenStatus, setListenStatus] = useState<LocalStatus>('unavailable');
  useEffect(() => {
    let on = true;
    localStatus().then((st) => { if (on) setListenStatus(st); }, () => {});
    return () => { on = false; };
  }, []);
  const timer = useRef<number | null>(null);
  // An answer's way back (answered) is for the page it was given on: another page (Back, the
  // arrow) or leaving Settings cancels it, so it never takes the learner a page too far.
  useEffect(() => {
    return () => { if (timer.current) clearTimeout(timer.current); timer.current = null; };
  }, [page]);
  /** Still on screen: a help language whose file comes late does nothing once Settings is left. */
  const shown = useRef(true);
  useEffect(() => {
    shown.current = true;
    return () => { shown.current = false; };
  }, []);
  /** The language tapped last: a file that comes later than another tap's does not undo it. */
  const wanted = useRef<UiCode | null | undefined>(undefined);
  // Help language offline: a language whose file is not on the phone can't be switched to. The
  // old language stays and a calm line says why (no splash, no dead end).
  const [notHere, setNotHere] = useState<UiCode | null>(null);
  const notHereRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (!notHere) return;
    // A language far down the list was tapped: the line comes into view.
    notHereRef.current?.scrollIntoView?.({ block: 'nearest', behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    const back = () => setNotHere(null);
    window.addEventListener('online', back);
    return () => window.removeEventListener('online', back);
  }, [notHere]);
  /** The page on screen now: a file that comes after Back (another page) does nothing either. */
  const pageNow = useRef(page);
  pageNow.current = page;
  const pickLanguage = (code: UiCode | null) => {
    wanted.current = code;
    const on = page;
    const take = () => {
      if (!shown.current || wanted.current !== code || pageNow.current !== on) return;
      setNotHere(null);
      onLang(code);
      answered();
    };
    if (isLanguageLoaded(code)) { take(); return; }
    ensureLanguage(code).then(take, () => {
      // Online after all (a server hiccup): App's own splash retries. Offline: stay here.
      if (typeof navigator !== 'undefined' && navigator.onLine !== false) take();
      else if (shown.current && wanted.current === code) setNotHere(code);
    });
  };
  /**
   * An answer on a question page: the check shows a moment, then back to the list. A tap on the
   * option that is already chosen does the same: it keeps that choice, shows its check and leads
   * back. The back arrow at the top is the other way out, for someone who only came to look.
   */
  const answered = (steps = 1, wait = 420) => {
    setTick((n) => n + 1);
    if (timer.current) clearTimeout(timer.current);
    timer.current = window.setTimeout(() => onReturn(steps), wait);
  };
  const say = (key: Parameters<typeof ui>[0]) => ui(key, lang);
  const onOff = (on: boolean, set: (on: boolean) => void): ReactNode => (
    <ChoiceCards
      // The group is named by the page's question (its heading), in the help language.
      label={page ? said(say(ROWS[page].key)) : dutchUi(lang) ? 'Aan of uit' : 'On or off'}
      current={on ? 'on' : 'off'}
      onPick={(id) => { set(id === 'on'); answered(); }}
      options={[
        { id: 'on', nl: 'Aan', text: say('settingOn'), picture: <CheckIcon size={28} /> },
        { id: 'off', nl: 'Uit', text: say('settingOff'), picture: <CloseIcon size={26} /> },
      ]}
    />
  );

  const ctx = {
    listen: listenStatus !== 'unavailable',
    helpLang: Boolean(lang),
    gender: hasGender(lang?.code),
    preview: access !== 'full' && Boolean(onAccess),
    install: installWay() !== null,
    offline: offlineSupported(),
    rules: dutchUi(lang),
    recorded: recorded.length > 0,
    // Only when the regions are offered (src/content/regio regionsOn) and the app can store one.
    region: regionsOn() && Boolean(onRegion),
  };
  const writing = nonLatinHelp(lang) && !wantsWriting() ? 'pick' : writingInput(lang);
  const voice = voiceChoiceOf(progress.voice, recorded);
  const refs = voiceRefs(recorded);

  /** The current value shown on a row. */
  const value = (p: SettingsPage): ReactNode => {
    switch (p) {
      case 'language': return lang ? <span className="set-row-value" lang={langTag(lang.code)} dir={lang.dir}>{lang.nativeName}</span> : <span className="set-row-value" lang="en">English</span>;
      case 'gender': return progress.gender ? <Value text={say(progress.gender === 'f' ? 'genderWoman' : progress.gender === 'm' ? 'genderMan' : 'genderNone')} /> : null;
      case 'sector': {
        const s = sectors.find((x) => x.id === progress.sector);
        return progress.sector ? <Value text={say(s ? s.key : NOT_SURE.key)} /> : null;
      }
      case 'region': {
        const r = regionMetaOf(progress.region);
        return r ? <span className="set-row-value" lang="nl">{r.nl}</span> : <Value text={say('regionNone')} />;
      }
      case 'country': return <Value text={say(progress.country === 'be' ? 'countryBe' : 'countryNl')} />;
      case 'english': return <Value text={say(wantsEnglish() ? 'settingOn' : 'settingOff')} />;
      case 'certificates': return <span className="set-row-value">{earnedCertificates(progress).length}</span>;
      case 'sound': return <Value text={say(progress.quiet ? 'withoutSound' : 'soundOn')} />;
      case 'tempo': return <Value text={say(TEMPO_KEYS[tempoOf(progress)])} />;
      case 'voice': return voice ? <Value text={say(voice === 'f' ? 'voiceWoman' : voice === 'm' ? 'voiceMan' : 'voiceAuto')} /> : null;
      case 'speaking': return <Value text={say(speakingOn() ? 'settingOn' : 'settingOff')} />;
      case 'listen': return <Value text={say(listenOn() && listenStatus === 'available' ? 'settingOn' : 'settingOff')} />;
      case 'writing': return <Value text={say(writing === 'pick' ? 'writingPick' : writing === 'tiles' ? 'letterTiles' : 'useKeyboard')} />;
      case 'text': return <Value text={say(TEXT_KEYS[progress.textSize ?? 'normal'])} />;
      case 'theme': return <Value text={say(THEME_KEYS[progress.theme])} />;
      case 'offline': return <Value text={say(offlineAuto() ? 'settingOn' : 'settingOff')} />;
      case 'reminder': {
        const t = reminderTime();
        return t ? <span className="set-row-value" dir="ltr">{t}</span> : null;
      }
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
              {p === 'sector' && progress.sector ? <SectorIcon id={progress.sector} size={24} /> : ROWS[p].icon}
            </span>
            <span className="set-row-names">
              <NlPair className="set-row-help" text={say(ROWS[p].key)} nl={ROWS[p].nl} nlClass="set-row-nl" />
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
            {notHere && (
              <p className="lang-not-here" role="status" ref={notHereRef}>
                <GlobeIcon size={22} />
                <span className="lang-not-here-text">
                  <NlPair nlFirst nl="Deze taal staat nog niet op je telefoon. Maak verbinding met internet." nlClass="lang-not-here-nl" text={say('langNotOnPhone')} />
                </span>
              </p>
            )}
            <LanguagePicker current={progress.helpLang} onPick={pickLanguage} showBeta compact lang={lang} />
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
        // A list (one kind of row): the three kinds of work, then "Weet ik nog niet" ('none').
        return (
          <SectorGroupList
            current={progress.sector}
            lang={lang}
            onGroup={(g) => onPage(`sector-${g}`)}
            onNotSure={() => { onSector('none'); answered(); }}
          />
        );
      case 'sector-build':
      case 'sector-make':
      case 'sector-care': {
        const g = sectorGroups.find((x) => `sector-${x.id}` === page)!;
        return (
          <>
            <SectorGroupHead group={g.id} lang={lang} level={2} />
            <SectorCards group={g.id} current={progress.sector} lang={lang} onPick={(s) => { onSector(s); answered(2); }} />
          </>
        );
      }
      case 'region': {
        // Two cards (at most three): the region by its name (a name, never translated) and
        // "Andere plek / zeg ik liever niet". Asked here only, never in the first run.
        const zl = REGIONS[0];
        return (
          <>
            <p className="max3-hint max3-hint-top"><Bi text={say('regionHint')} /></p>
            <ChoiceCards
              label={said(ui('regionTitle', lang))}
              current={progress.region === 'none' ? 'none' : regionMetaOf(progress.region)?.id ?? null}
              onPick={(id) => { onRegion?.(id); answered(); }}
              options={[
                { id: zl.id, text: { en: zl.nl, lang }, picture: <PinIcon size={28} /> },
                { id: 'none', nl: 'Andere plek / zeg ik liever niet', text: say('regionOther'), picture: <GlobeIcon size={28} /> },
              ]}
            />
            <p className="max3-hint region-places" lang="nl">{zl.places.join(' · ')}</p>
          </>
        );
      }
      case 'country':
        // Two cards: the Netherlands (also when nothing is chosen) and Belgium (Vlaanderen).
        return (
          <>
            <p className="max3-hint max3-hint-top"><Bi text={say('countryHint')} /></p>
            <ChoiceCards
              label={said(ui('countryTitle', lang))}
              current={progress.country ?? 'nl'}
              onPick={(id) => { onCountry?.(id); answered(); }}
              options={[
                { id: 'nl', nl: 'Nederland', text: say('countryNl'), picture: <CountryFlag country="nl" /> },
                { id: 'be', nl: 'België (Vlaanderen)', text: say('countryBe'), picture: <CountryFlag country="be" /> },
              ]}
            />
          </>
        );
      case 'english':
        return onOff(wantsEnglish(), (on) => { setWantsEnglish(on); applyEnglish(lang?.code, on); });
      case 'certificates':
        return <><CertificatesCard progress={progress} lang={lang} onOpen={onCertificate} /><ToetsLine progress={progress} lang={lang} /></>;
      case 'sound':
        return (
          <>
            <ChoiceCards
              label={said(ui('sound', lang))}
              current={progress.quiet ? 'off' : 'on'}
              onPick={(id) => { onQuiet(id === 'off'); answered(); }}
              options={[
                { id: 'on', text: say('soundOn'), picture: <SpeakerIcon size={28} /> },
                { id: 'off', text: say('withoutSound'), picture: <SpeakerOffIcon size={28} /> },
              ]}
            />
            <p className="max3-hint"><Bi text={say('quietHint')} /></p>
            {/* The work-rules track on a phone without a Dutch voice: how to add one. */}
            <NoVoiceNote lang={lang} />
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
            <button type="button" className="speak speak-md max3-say" aria-label={`${said(ui('playAudio', lang))}: ${said(o.text)}`} lang={saidLang(ui('playAudio', lang))} onClick={() => speak(VOICE_SAMPLE, false, 'nl', refOf(o.id))}>
              <SpeakerIcon size={26} />
            </button>
          ),
        }));
        // (While the recorded voices are still coming: nothing yet, not "no voice".)
        if (!recorded.length && !device.length) return recordedIndexSettled() ? <p className="warn"><Bi text={say('voiceNone')} /></p> : null;
        return (
          <>
            <p className="max3-hint"><Bi text={say('voiceHint')} /></p>
            <ChoiceCards
              label={said(ui('voice', lang))}
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
      case 'tempo':
        // Two cards; a tap plays the sample line at that pace (unless sound is off), then leads back.
        return (
          <>
            <ChoiceCards
              label={said(ui('tempo', lang))}
              current={tempoOf(progress)}
              onPick={(t) => {
                setTempo(t);
                onTempo?.(t);
                autoSpeak(VOICE_SAMPLE);
                answered(1, 900);
              }}
              options={TEMPOS.map((t) => ({ id: t, nl: TEMPO_NL[t], text: say(TEMPO_KEYS[t]), picture: <TempoIcon size={28} fast={t === 'normal'} /> }))}
            />
            <p className="max3-hint"><Bi text={say('tempoHint')} /></p>
          </>
        );
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
          <>
            {/* Another script: "Pick the word" is not writing, Letters and Keyboard are. The question
                and its hint say what the three mean (else they are three bare words). */}
            {nonLatinHelp(lang) && <p className="max3-hint max3-hint-top"><Bi text={say('learnWriting')} /></p>}
            <ChoiceCards
              label={said(ui('settingWriting', lang))}
              current={writing}
              onPick={(id) => {
                if (nonLatinHelp(lang)) setWantsWriting(id !== 'pick');
                if (id !== 'pick') setWritingInput(id);
                answered();
              }}
              options={options}
            />
            {nonLatinHelp(lang) && <p className="max3-hint"><Bi text={say('learnWritingHint')} /></p>}
          </>
        );
      }
      case 'text':
        return (
          <ChoiceCards
            label={said(ui('textSize', lang))}
            current={progress.textSize ?? 'normal'}
            onPick={(size) => { onTextSize(size); answered(); }}
            options={TEXT_SIZES.map((size) => ({ id: size, text: say(TEXT_KEYS[size]), picture: <TextA size={size} /> }))}
          />
        );
      case 'theme':
        return (
          <ChoiceCards
            label={said(ui('theme', lang))}
            current={progress.theme}
            onPick={(t) => { onTheme(t); answered(); }}
            options={(['auto', 'light', 'dark'] as const).map((t) => {
              const Icon = THEME_ICONS[t];
              return { id: t, text: say(THEME_KEYS[t]), picture: <Icon size={28} /> };
            })}
          />
        );
      case 'offline':
        // Off leads back; On stays, so the learner sees the topic being saved (or why it was not).
        return <OfflineSettingCard cards progress={progress} lang={lang} access={access} onPicked={(on) => (on ? setTick((n) => n + 1) : answered())} />;
      case 'reminder':
        return <ReminderPage lang={lang} onOther={() => onPage('reminder-time')} onDone={(added) => answered(1, added ? 1600 : 420)} />;
      case 'reminder-time':
        return <ReminderTimes lang={lang} onDone={(added) => answered(2, added ? 1600 : 420)} />;
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
        // Cancel first and as the main button; wiping is the small red one under it. What goes
        // and what stays is said before (the language, the code and the settings stay).
        return (
          <>
            <p className="max3-hint max3-hint-top"><Bi text={say('resetConfirm')} /></p>
            <p className="max3-hint"><Bi text={say('resetKeeps')} /></p>
            <div className="reset-actions">
              <button type="button" className="btn btn-primary keep-btn reset-keep" onClick={() => onReturn(1)}>
                <NlPair nlFirst nl="Annuleren" className="keep-btn-gloss" text={say('cancel')} />
              </button>
              <button type="button" className="btn btn-ghost keep-btn danger reset-wipe" onClick={onReset}>
                <AlertIcon size={22} />
                <span className="reset-wipe-text">
                  <NlPair nlFirst nl="Voortgang wissen" className="keep-btn-gloss" text={say('resetProgress')} />
                </span>
              </button>
            </div>
          </>
        );
      case 'unlock':
        return onAccess ? <UpgradeCard lang={lang} onAccess={(a) => { onAccess(a); answered(); }} /> : null;
      case 'listen':
        return <ListenPage lang={lang} status={listenStatus} onStatus={setListenStatus} onOff={onOff} onDone={() => answered()} />;
    }
  };

  return (
    <div className={`screen max3-settings ${page ? (isList ? 'max3-list' : 'max3-setting') : 'max3-menu'}`} data-depth={settingsDepth(page)} dir={lang?.dir}>
      <Head page={page ?? null} lang={lang} onBack={page ? () => onReturn(1) : undefined} />
      {body()}
    </div>
  );
}

/**
 * "Remind me every day": before work, after work and "Kies zelf" (the phone's own time field, for
 * night and shift work; G4 r5: 3 tappables). A tap or a chosen time puts that daily reminder in the
 * phone's calendar, shows "added" a moment and leads back. The time already in the calendar carries
 * the check, and choosing it again only leads back (no second, identical reminder).
 */
const SETTINGS_TIMES = REMINDER_TIMES.filter((t) => t.time !== '12:00');
function ReminderTimes({ lang, onDone }: { lang?: HelpLanguage; onDone: (added: boolean) => void }) {
  const [current] = useState<string | null>(reminderTime);
  const [saved, setSaved] = useState<string | null>(null);
  const add = (time: string) => {
    if (saved) return; // already on its way back
    const adds = reminderTapAdds(time, current);
    if (adds) addReminder(time, lang);
    setSaved(time);
    onDone(adds);
  };
  const shown = saved ?? current;
  const own = shown && !SETTINGS_TIMES.some((t) => t.time === shown) ? shown : null;
  return (
    <>
      <ChoiceCards
        label={said(ui('remindTitle', lang))}
        current={shown}
        onPick={add}
        options={SETTINGS_TIMES.map((t) => ({
          id: t.time,
          nl: t.nl,
          text: ui(t.key, lang),
          picture: <span className="set-time">{t.time}</span>,
        }))}
      />
      <OwnTime card lang={lang} current={own} onTime={add} />
      <p className="max3-hint" role="status"><Bi text={ui(saved && reminderTapAdds(saved, current) ? remindAddedKey() : 'remindHint', lang)} /></p>
    </>
  );
}

/** The reminder page: the times, or (a reminder already in the calendar) ReminderNow. Which one
 *  is fixed when the page opens, so Stop's "open the file" line stays until it leads back. */
function ReminderPage({ lang, onOther, onDone }: { lang?: HelpLanguage; onOther: () => void; onDone: (changed: boolean) => void }) {
  const [now] = useState<string | null>(reminderTime);
  return now
    ? <ReminderNow time={now} lang={lang} onOther={onOther} onStopped={() => onDone(true)} />
    : <ReminderTimes lang={lang} onDone={onDone} />;
}

/**
 * The reminder page once a reminder is in the calendar: its time, then "Andere tijd" (the times
 * page) and "Stop de herinnering": a file that takes this phone's one reminder event out of the
 * calendar again (src/lib/reminder.ts reminderCancelIcs). Two tappables.
 */
function ReminderNow({ time, lang, onOther, onStopped }: {
  time: string;
  lang?: HelpLanguage;
  onOther: () => void;
  onStopped: () => void;
}) {
  const [stopped, setStopped] = useState(false);
  const every = ui('remindEveryDay', lang);
  const at = (s: string) => s.replace('{time}', time);
  return (
    <>
      <p className="max3-hint max3-hint-top set-remind-now">
        <CalendarIcon size={22} />
        <Bi text={{ ...every, en: at(every.en), help: every.help && at(every.help) }} />
      </p>
      <ChoiceCards
        label={said(ui('remindTitle', lang))}
        onPick={(id) => {
          if (stopped) return; // already on its way back
          if (id === 'time') { onOther(); return; }
          stopReminder(time, lang);
          setStopped(true);
          onStopped();
        }}
        options={[
          { id: 'time', nl: 'Andere tijd', text: ui('remindOwn', lang), picture: <ClockGlyph />, next: true },
          { id: 'stop', nl: 'Stop de herinnering', text: ui('remindStop', lang), picture: <CloseIcon size={26} /> },
        ]}
      />
      <p className="max3-hint" role="status"><Bi text={ui(stopped ? remindStoppedKey() : 'remindHint', lang)} /></p>
    </>
  );
}

/**
 * "Laat de telefoon luisteren (proef)" (src/lib/listen.ts): off unless turned on here. With Dutch
 * on the phone: On / Off. Without it yet (the browser can download it): "On" first says it is a big
 * download over wifi, and only "Download Dutch" (a tap of the learner's own) downloads it.
 */
function ListenPage({ lang, status, onStatus, onOff, onDone }: {
  lang?: HelpLanguage;
  status: LocalStatus;
  onStatus: (s: LocalStatus) => void;
  onOff: (on: boolean, set: (on: boolean) => void) => ReactNode;
  onDone: () => void;
}) {
  const [step, setStep] = useState<'pick' | 'pack' | 'busy' | 'failed'>('pick');
  const shown = useRef(true);
  useEffect(() => {
    shown.current = true;
    return () => { shown.current = false; };
  }, []);
  // The cards are gone after "On": the focus goes to "Download Dutch" (keyboard, screen reader).
  const first = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (step === 'pack' || step === 'failed') first.current?.focus({ preventScroll: true }); }, [step]);
  const say = (key: Parameters<typeof ui>[0]) => ui(key, lang);
  const download = () => {
    setStep('busy');
    installLocal().then((ok) => {
      if (!shown.current) return;
      if (ok) { setListenOn(true); onStatus('available'); onDone(); }
      else setStep('failed');
    }, () => { if (shown.current) setStep('failed'); });
  };
  if (status === 'available') {
    return (
      <>
        {onOff(listenOn(), setListenOn)}
        <p className="max3-hint"><Bi text={say('listenHint')} /></p>
      </>
    );
  }
  if (status === 'downloading') return <p className="max3-hint max3-hint-top" role="status"><Bi text={say('listenDownloading')} /></p>;
  if (step === 'pick') {
    // Not on yet: "On" leads to the download question first.
    return (
      <>
        <ChoiceCards
          label={said(say('listenTrial'))}
          current="off"
          onPick={(id) => { if (id === 'on') setStep('pack'); else { setListenOn(false); onDone(); } }}
          options={[
            { id: 'on', nl: 'Aan', text: say('settingOn'), picture: <CheckIcon size={28} /> },
            { id: 'off', nl: 'Uit', text: say('settingOff'), picture: <CloseIcon size={26} /> },
          ]}
        />
        <p className="max3-hint"><Bi text={say('listenHint')} /></p>
      </>
    );
  }
  return (
    <>
      <p className="max3-hint max3-hint-top" role="status">
        <Bi text={say(step === 'busy' ? 'listenDownloading' : step === 'failed' ? 'listenFailed' : 'listenNeedsPack')} />
      </p>
      <div className="reset-actions listen-actions">
        <button type="button" ref={first} className="btn btn-primary keep-btn listen-download" onClick={download} disabled={step === 'busy'}>
          <DownloadIcon size={22} />
          <NlPair nlFirst nl="Nederlands downloaden" className="keep-btn-gloss" text={say('listenDownload')} />
        </button>
        <button type="button" className="btn btn-ghost keep-btn listen-not-now" onClick={onDone}>
          <NlPair nlFirst nl="Nu niet" className="keep-btn-gloss" text={say('listenNotNow')} />
        </button>
      </div>
    </>
  );
}
