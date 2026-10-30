import { describe, expect, it } from 'vitest';
import { teachingLessons, units } from '../src/content/curriculum';
import { buildLesson } from '../src/lib/exercises';
import { addDays, applyReview, dailyLesson, dailyWordIds, seedCards, type Cards } from '../src/lib/spaced';

/** G4 b3: today's review brings back all the sentences and chats of a lesson, not only its first. */
describe('Herhaal vandaag rotates sentences and chats', () => {
  const lesson = teachingLessons[12];
  const ids = lesson.words.map((w) => w.id);

  it('shows another sentence of the lesson on other days, the same on the same day', () => {
    const seen = new Set<string>();
    for (let d = 0; d < 12; d++) {
      const day = addDays('2026-10-15', d);
      const a = dailyLesson(ids, {}, day);
      expect(dailyLesson(ids, {}, day)).toEqual(a);
      for (const s of a.sentences) seen.add(s.id);
    }
    expect(seen.size).toBe(lesson.sentences.length);
  });

  it('takes the chat from the lesson with the weakest words, else the most recent one', () => {
    const early = teachingLessons[2];
    const late = teachingLessons[20];
    const both = [...early.words.slice(0, 3), ...late.words.slice(0, 3)].map((w) => w.id);
    const strong = (ws: typeof early.words, box: number): Cards => Object.fromEntries(ws.map((w) => [w.id, { box, due: '2026-10-15' }]));
    // Same box: the most recent lesson one day, the one before it the next day.
    const chatOn = (day: string, c: Cards = {}) => dailyLesson(both, c, day).dialogues![0];
    const pair = [chatOn('2026-10-16'), chatOn('2026-10-17')];
    expect(pair.some((c) => late.dialogues!.includes(c))).toBe(true);
    expect(pair.some((c) => early.dialogues!.includes(c))).toBe(true);
    // The early lesson's words are weaker: its chat.
    const cards = { ...strong(early.words, 1), ...strong(late.words, 4) };
    for (const day of ['2026-10-16', '2026-10-17']) expect(early.dialogues).toContain(chatOn(day, cards));
  });

  it('stays short: two sentences, one chat, one build', () => {
    const many = teachingLessons.slice(0, 8).flatMap((l) => l.words.slice(0, 2)).map((w) => w.id).slice(0, 10);
    const daily = dailyLesson(many, {}, '2026-10-20');
    expect(daily.sentences.length).toBeLessThanOrEqual(2);
    expect(daily.dialogues).toHaveLength(1);
    const ex = buildLesson(daily, { review: true, seed: 3 });
    expect(ex.filter((e) => e.kind === 'build')).toHaveLength(1);
    expect(ex.filter((e) => e.kind === 'chat')).toHaveLength(1);
    expect(ex.length).toBeLessThanOrEqual(16);
  });

  it('over 42 days of reviews most sentences and chats of the finished lessons come back', () => {
    const completed: Record<string, unknown> = {};
    for (const u of units.slice(0, 16)) for (const l of u.lessons) completed[l.id] = 1;
    const done = teachingLessons.filter((l) => completed[l.id]);
    let cards = seedCards(completed, '2026-09-01');
    let today = '2026-10-15';
    const sentences = new Set<string>();
    const chats = new Set<string>();
    const chatsBy42 = new Set<string>();
    const sentencesBy42 = new Set<string>();
    // 84 days: the chat comes from the lesson with the weakest words, so chats come back more
    // slowly than sentences (one a day); by then nearly all of them have.
    for (let d = 0; d < 84; d++) {
      if (d === 42) {
        for (const c of chats) chatsBy42.add(c);
        for (const x of sentences) sentencesBy42.add(x);
      }
      const ids = dailyWordIds(cards, today);
      if (ids.length) {
        const l = dailyLesson(ids, cards, today);
        for (const s of l.sentences) sentences.add(s.id);
        for (const c of l.dialogues ?? []) chats.add(c.reply.id);
        // About one in six wrong.
        cards = applyReview(cards, Object.fromEntries(ids.map((id, k) => [id, k % 6 !== 0])), today);
      }
      today = addDays(today, 1);
    }
    const allSentences = done.reduce((a, l) => a + l.sentences.length, 0);
    const allChats = done.reduce((a, l) => a + (l.dialogues?.length ?? 0), 0);
    // Before: only the first sentence of each lesson (37 of 111).
    expect(sentencesBy42.size / allSentences).toBeGreaterThan(0.6);
    // After 6 weeks more than half of the chats came back (a weak lesson keeps the chat to itself:
    // with "Klanken" in the first 16 units 58%), after 12 weeks nearly all.
    expect(chatsBy42.size / allChats).toBeGreaterThan(0.55);
    // One chat a day: more lessons in the first 16 units means more chats to share the 84 days
    // (30 October 2026: with "Getallen en gegevens" and l.permit, 44 chats, 39 of them back).
    expect(chats.size / allChats).toBeGreaterThan(0.85);
    // Second and third sentences of lessons come back too.
    const later = done.flatMap((l) => l.sentences.slice(1)).filter((s) => sentencesBy42.has(s.id));
    expect(later.length).toBeGreaterThan(30);
  });
});
