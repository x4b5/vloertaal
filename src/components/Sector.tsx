import { useEffect, useState } from 'react';
import { NOT_SURE, sectorGroupOf, sectorGroups, sectors, type SectorChoice, type SectorGroupId, type SectorId } from '../content/sectors';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import { CareIcon, ConveyorIcon, CupIcon, ForkliftIcon, HelmetIcon, QuestionIcon, SprayIcon } from './Icons';
import { WordPicture } from '../pictures';
import { ChoiceCards, QuestionHead, type ChoiceOption } from './Choice';
import { ChromeHead } from './ChromeBack';

const ICONS: Record<SectorId | 'none', typeof ForkliftIcon> = {
  logistics: ForkliftIcon,
  construction: HelmetIcon,
  production: ConveyorIcon,
  care: CareIcon,
  hospitality: CupIcon,
  cleaning: SprayIcon,
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
};

const sectorPicture = (id: SectorId, size: number) => <WordPicture id={SECTOR_PICTURES[id]} emoji="" size={size} />;

/** Step 1: the kind of work (two groups, each shown by its three pictures) or "not sure yet". */
export function SectorGroupCards({ current, lang, onPick }: {
  current?: SectorChoice;
  lang?: HelpLanguage;
  onPick: (g: SectorGroupId | 'none') => void;
}) {
  const group = current === 'none' ? 'none' : sectorGroupOf(current);
  const options: ChoiceOption<SectorGroupId | 'none'>[] = [
    ...sectorGroups.map((g) => ({
      id: g.id,
      nl: g.nl,
      text: ui(g.key, lang),
      picture: <span className="max3-trio">{g.sectors.map((s) => <span key={s}>{sectorPicture(s, 34)}</span>)}</span>,
      next: true,
    })),
    { id: 'none' as const, nl: NOT_SURE.nl, text: ui(NOT_SURE.key, lang), picture: <QuestionIcon size={30} /> },
  ];
  return <ChoiceCards options={options} current={group} onPick={onPick} label={ui('chooseSector').en} className="sector-step" />;
}

/** Step 2: the three sectors of a group, each with its picture. */
export function SectorCards({ group, current, lang, onPick }: {
  group: SectorGroupId;
  current?: SectorChoice;
  lang?: HelpLanguage;
  onPick: (s: SectorId) => void;
}) {
  const g = sectorGroups.find((x) => x.id === group)!;
  const options: ChoiceOption<SectorId>[] = g.sectors.map((id) => {
    const s = sectors.find((x) => x.id === id)!;
    return { id, nl: s.nl, text: ui(s.key, lang), picture: sectorPicture(id, 52) };
  });
  return <ChoiceCards options={options} current={current === 'none' ? null : current} onPick={onPick} label={ui(g.key).en} className="sector-step sector-step-2" />;
}

/**
 * First run, after the password (and the gender question): where do you work? In two steps of
 * at most three cards: the kind of work, then the sector. The phone's Back button goes from the
 * second step to the first.
 */
export function SectorScreen({ lang, onDone, initialGroup }: {
  lang?: HelpLanguage;
  onDone: (s: SectorChoice) => void;
  /** Open on the second step (screenshots). */
  initialGroup?: SectorGroupId;
}) {
  const [group, setGroup] = useState<SectorGroupId | null>(initialGroup ?? null);
  useEffect(() => {
    if (!group) return;
    const onPop = () => setGroup(null);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [group]);
  const open = (g: SectorGroupId | 'none') => {
    if (g === 'none') return onDone('none');
    history.pushState({ ...(history.state ?? {}), sectorStep: g }, '');
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
          <QuestionHead nl="Waar werk je?" text={ui('chooseSector', lang)} />
          <p className="max3-crumb"><Bi text={ui(g.key, lang)} /></p>
          <SectorCards group={g.id} lang={lang} onPick={onDone} />
        </>
      ) : (
        <>
          <QuestionHead nl="Waar werk je?" text={ui('chooseSector', lang)} hint={ui('sectorHint', lang)} />
          <SectorGroupCards lang={lang} onPick={open} />
        </>
      )}
    </div>
  );
}
