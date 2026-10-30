import { useEffect, useState } from 'react';
import { NOT_SURE, sectorChoiceGroup, sectorGroups, sectors, type SectorChoice, type SectorGroupId, type SectorId } from '../content/sectors';
import { ui, said } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import { CareIcon, ConveyorIcon, CupIcon, ForkliftIcon, HelmetIcon, QuestionIcon, SproutIcon, SprayIcon } from './Icons';
import { WordPicture } from '../pictures';
import { ChoiceCards, QuestionHead, type ChoiceOption } from './Choice';
import { ChromeHead } from './ChromeBack';
import { pushSubStep } from '../lib/onbHistory';

const ICONS: Record<SectorId | 'none', typeof ForkliftIcon> = {
  logistics: ForkliftIcon,
  construction: HelmetIcon,
  production: ConveyorIcon,
  care: CareIcon,
  hospitality: CupIcon,
  cleaning: SprayIcon,
  horticulture: SproutIcon,
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
};

const sectorPicture = (id: SectorId, size: number) => <WordPicture id={SECTOR_PICTURES[id]} emoji="" size={size} />;

/**
 * Step 1: the kind of work, three cards (each shown by its sectors' pictures; "Iets anders" by
 * the greenhouse and a question mark, as it holds "Weet ik nog niet").
 */
export function SectorGroupCards({ current, lang, onPick }: {
  current?: SectorChoice;
  lang?: HelpLanguage;
  onPick: (g: SectorGroupId) => void;
}) {
  const options: ChoiceOption<SectorGroupId>[] = sectorGroups.map((g) => ({
    id: g.id,
    nl: g.nl,
    text: ui(g.key, lang),
    picture: (
      <span className="max3-trio">
        {g.sectors.map((s) => <span key={s}>{sectorPicture(s, 44)}</span>)}
        {g.notSure && <span key="none"><QuestionIcon size={30} /></span>}
      </span>
    ),
    next: true,
  }));
  return <ChoiceCards options={options} current={sectorChoiceGroup(current)} onPick={onPick} label={said(ui('chooseSector', lang))} className="sector-step" />;
}

/** Step 2: the sectors of a group, each with its picture; in "Iets anders" also "Weet ik nog niet". */
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
  if (g.notSure) options.push({ id: 'none', nl: NOT_SURE.nl, text: ui(NOT_SURE.key, lang), picture: <QuestionIcon size={34} /> });
  return <ChoiceCards options={options} current={current ?? null} onPick={onPick} label={said(ui(g.key, lang))} className="sector-step sector-step-2" />;
}

/** The group whose second step this history entry is (a reload on the second step stays there). */
function openStep(): SectorGroupId | null {
  const g = (history.state as { sectorStep?: string } | null)?.sectorStep;
  return sectorGroups.some((x) => x.id === g) ? (g as SectorGroupId) : null;
}

/**
 * First run, after the password (and the gender question): where do you work? In two steps of
 * at most three cards: the kind of work, then the sector. The phone's Back button goes from the
 * second step to the first.
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
          <p className="max3-crumb"><Bi text={ui(g.key, lang)} /></p>
          <SectorCards group={g.id} lang={lang} onPick={onDone} />
        </>
      ) : (
        <>
          {onBack && <ChromeHead lang={lang} onBack={onBack} />}
          <QuestionHead nl="Waar werk je?" text={ui('chooseSector', lang)} hint={ui('sectorHint', lang)} say lang={lang} />
          <SectorGroupCards lang={lang} onPick={open} />
        </>
      )}
    </div>
  );
}
