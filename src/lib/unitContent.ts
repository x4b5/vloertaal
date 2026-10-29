import type { Unit } from '../content/types';
import { LANG_PAGES } from './langPages';
import { packText } from './pageTexts';
import { esc } from './plainPage';

/**
 * The words, sentences and chats of one or more units as page sections (the sector pages and the
 * topic pages, src/lib/sectorPages.ts and topicPages.ts): Dutch, with the app's own translation in
 * a few help languages beside each word.
 */

/** The translations shown beside a word: the largest groups of labour migrants, and Arabic. */
const SHOWN = ([['pl', 'Pools'], ['ro', 'Roemeens'], ['uk', 'Oekraïens'], ['ar', 'Arabisch']] as const).map(([code, nl]) => ({
  nl,
  page: LANG_PAGES.find((p) => p.code === code)!,
  text: packText(code),
}));

export function unitItems(list: Unit[]) {
  const lessons = list.flatMap((u) => u.lessons);
  // Once each: a unit's mixed review lesson asks the same words and sentences again.
  const once = <T,>(items: T[], key: (t: T) => string) => [...new Map(items.map((t) => [key(t), t])).values()];
  return {
    words: once(lessons.flatMap((l) => l.words), (w) => w.nl),
    sentences: once(lessons.flatMap((l) => l.sentences), (s) => s.nl),
    chats: once(lessons.flatMap((l) => l.dialogues ?? []), (c) => c.prompt.nl),
  };
}

export function unitSections(list: Unit[]): string {
  const { words, sentences, chats } = unitItems(list);
  const shownIn = SHOWN.map((l) => `<a href="${l.page.path}">${l.nl}</a>`).join(', ').replace(/, ([^,]*)$/, ' en $1');
  return `<section aria-labelledby="words"><h2 id="words">${words.length} woorden die je leert</h2>
<p>Met de vertaling uit de app, hier in het ${shownIn}:</p>
<ul class="lines">${words
    .map((w) => `<li><strong>${esc(w.nl)}</strong>: ${SHOWN.map((l) => {
      const t = l.text.gloss(w.id);
      return t ? `<span lang="${l.page.tag}" dir="${l.page.dir}">${esc(t)}</span>` : '';
    }).filter(Boolean).join(' · ')}</li>`)
    .join('')}</ul></section>
<section aria-labelledby="sentences"><h2 id="sentences">Zinnen die je oefent</h2>
<ul class="lines">${sentences.map((s) => `<li>${esc(s.nl)}</li>`).join('')}</ul>
${chats.length ? `<h3>Korte gesprekjes met collega’s</h3>
<ul class="lines">${chats.map((c) => `<li>${esc(c.prompt.nl)} — ${esc(c.reply.nl)}</li>`).join('')}</ul>` : ''}</section>`;
}
