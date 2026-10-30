import { useEffect, useRef, useState, type ReactNode } from 'react';
import { isSectorGroupId, NOT_SURE, sectorGroupOf, sectorGroups, sectors, type SectorChoice, type SectorGroupId, type SectorId } from '../content/sectors';
import { ui, said } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import {
  CareIcon, CarIcon, CheckIcon, ChevronIcon, ConveyorIcon, CupIcon, ForkliftIcon, HelmetIcon, QuestionIcon, SproutIcon, SprayIcon, WrenchIcon,
} from './Icons';
import { WordPicture } from '../pictures';
import { ChoiceCards, QuestionHead, type ChoiceOption } from './Choice';
import { ChromeHead } from './ChromeBack';
import { NlPair } from './NlPair';
import { useFreshCards } from './useFreshScreen';
import { pushSubStep } from '../lib/onbHistory';

const ICONS: Record<SectorId | 'none', typeof ForkliftIcon> = {
  logistics: ForkliftIcon,
  construction: HelmetIcon,
  production: ConveyorIcon,
  care: CareIcon,
  hospitality: CupIcon,
  cleaning: SprayIcon,
  horticulture: SproutIcon,
  technical: WrenchIcon,
  garage: CarIcon,
  none: QuestionIcon,
};

export function SectorIcon({ id, size = 24 }: { id: SectorChoice; size?: number }) {
  const Icon = ICONS[id];
  return <Icon size={size} />;
}

/** The picture of each sector (the word pictures of its own unit's world). */
export const SECTOR_PICTURES: Record<SectorId, string> = {
  logistics: 'w.heftruck',
  // A yellow hard hat: the scaffold read as warehouse racking at card size.
  construction: 'w.helm',
  production: 'w.lopendeband',
  care: 'w.verpleegkundige',
  hospitality: 'w.pan',
  cleaning: 'w.dweil',
  horticulture: 'w.kas',
  // The drill of "In de werkplaats" (u.tech), and a car in front of a garage (u.garage).
  technical: 'w.boor',
  garage: 'w.garage',
};

const sectorPicture = (id: SectorId, size: number) => <WordPicture id={SECTOR_PICTURES[id]} emoji="" size={size} />;

/**
 * The focus between the two steps: the second step's heading takes it when it opens, and going
 * back puts it on the row of the group that was open (not at the top of the page). A pick on the
 * second step leaves the choice, so there is nothing to go back to.
 */
const back = { group: null as SectorGroupId | null, at: 0, picked: false };
const BACK_MS = 2000;

/**
 * Step 1: one list of one kind of row (the list exception of max 3): the three kinds of work,
 * each shown by its sectors' pictures and leading on (›, mirrored right to left), and "Weet ik
 * nog niet", which is the choice 'none' at once. The row of the current choice is marked.
 */
export function SectorGroupList({ current, lang, onGroup, onNotSure }: {
  current?: SectorChoice;
  lang?: HelpLanguage;
  onGroup: (g: SectorGroupId) => void;
  onNotSure: () => void;
}) {
  const list = useRef<HTMLUListElement>(null);
  // A double tap on the second step's back arrow must not open a group at once.
  const fresh = useFreshCards('sector-groups');
  useEffect(() => {
    const g = back.group;
    back.group = null;
    if (!g || performance.now() - back.at > BACK_MS) return;
    list.current?.querySelector<HTMLElement>(`[data-group="${g}"]`)?.focus({ preventScroll: true });
  }, []);
  const mine = current === 'none' ? 'none' : sectorGroupOf(current);
  const row = (id: SectorGroupId | 'none', nl: string, text: ReturnType<typeof ui>, pic: ReactNode, onTap: () => void) => {
    const picked = mine === id;
    return (
      <li key={id}>
        <button
          type="button"
          className={`set-row sector-group-row ${picked ? 'picked' : ''}`}
          data-group={id}
          aria-current={picked ? 'true' : undefined}
          onClick={() => { if (!fresh()) onTap(); }}
        >
          <span className="set-row-icon sector-group-pic" aria-hidden>{pic}</span>
          <span className="set-row-names">
            <NlPair className="set-row-help" text={text} nl={nl} nlClass="set-row-nl" />
          </span>
          {id === 'none'
            ? picked && <CheckIcon size={22} className="set-row-chev" />
            : <ChevronIcon size={22} className="set-row-chev" />}
        </button>
      </li>
    );
  };
  return (
    <ul ref={list} className="set-rows sector-groups sector-step" aria-label={said(ui('chooseSector', lang))}>
      {sectorGroups.map((g) => row(
        g.id, g.nl, ui(g.key, lang),
        <span className="max3-trio">{g.sectors.map((s) => <span key={s}>{sectorPicture(s, 44)}</span>)}</span>,
        () => onGroup(g.id),
      ))}
      {row('none', NOT_SURE.nl, ui(NOT_SURE.key, lang), <QuestionIcon size={30} />, onNotSure)}
    </ul>
  );
}

/**
 * Step 2's heading: the group's name. It takes the focus when the step opens (a screen reader
 * says which group this is), and going back gives the focus to that group's row.
 */
export function SectorGroupHead({ group, lang, level = 3 }: { group: SectorGroupId; lang?: HelpLanguage; level?: 2 | 3 }) {
  const g = sectorGroups.find((x) => x.id === group)!;
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
    return () => {
      back.group = back.picked ? null : group;
      back.at = performance.now();
      back.picked = false;
    };
  }, [group]);
  const H = level === 2 ? 'h2' : 'h3';
  return <H ref={ref} tabIndex={-1} className="max3-crumb sector-group-head"><Bi text={ui(g.key, lang)} /></H>;
}

/** Step 2: the three sectors of a group, each with its picture. */
export function SectorCards({ group, current, lang, onPick }: {
  group: SectorGroupId;
  current?: SectorChoice;
  lang?: HelpLanguage;
  onPick: (s: SectorChoice) => void;
}) {
  const g = sectorGroups.find((x) => x.id === group)!;
  const options: ChoiceOption<SectorChoice>[] = g.sectors.map((id) => {
    const s = sectors.find((x) => x.id === id)!;
    return { id, nl: s.nl, text: ui(s.key, lang), picture: sectorPicture(id, 52) };
  });
  const pick = (s: SectorChoice) => {
    // The choice is made: no way back to step 1 to put the focus on.
    back.picked = true;
    onPick(s);
  };
  return <ChoiceCards options={options} current={current ?? null} onPick={pick} label={said(ui(g.key, lang))} className="sector-step sector-step-2" />;
}

/** The group whose second step this history entry is (a reload on the second step stays there). */
function openStep(): SectorGroupId | null {
  const g = (history.state as { sectorStep?: string } | null)?.sectorStep;
  return isSectorGroupId(g) ? g : null;
}

/**
 * First run, after the password (and the gender question): where do you work? In two steps: a
 * list of the kinds of work (and "Weet ik nog niet"), then the sector. The phone's Back button
 * goes from the second step to the first.
 */
export function SectorScreen({ lang, onDone, onBack, initialGroup }: {
  lang?: HelpLanguage;
  onDone: (s: SectorChoice) => void;
  /** The first step's back arrow: to the onboarding page before it (gender question or password). */
  onBack?: () => void;
  /** Open on the second step (screenshots). */
  initialGroup?: SectorGroupId;
}) {
  // After a reload on the second step, the history entry still says which group was open.
  const [group, setGroup] = useState<SectorGroupId | null>(() => initialGroup ?? openStep());
  useEffect(() => {
    if (!group) return;
    const onPop = () => setGroup(null);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [group]);
  const open = (g: SectorGroupId) => {
    pushSubStep({ sectorStep: g });
    setGroup(g);
    window.scrollTo(0, 0);
  };
  const g = group && sectorGroups.find((x) => x.id === group);
  return (
    <div className="screen onboarding sector-screen max3-page" dir={lang?.dir}>
      {g ? (
        <>
          {/* Back to the kind of work (the phone's Back button does the same). */}
          <ChromeHead lang={lang} onBack={() => (history.state?.sectorStep ? history.back() : setGroup(null))} />
          <QuestionHead nl="Waar werk je?" text={ui('chooseSector', lang)} say lang={lang} />
          <SectorGroupHead group={g.id} lang={lang} />
          <SectorCards group={g.id} lang={lang} onPick={onDone} />
        </>
      ) : (
        <>
          {onBack && <ChromeHead lang={lang} onBack={onBack} />}
          <QuestionHead nl="Waar werk je?" text={ui('chooseSector', lang)} hint={ui('sectorHint', lang)} say lang={lang} />
          <SectorGroupList lang={lang} onGroup={open} onNotSure={() => onDone('none')} />
        </>
      )}
    </div>
  );
}
