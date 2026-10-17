import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { coursePlan } from '../src/content/sectors';
import { HOME_SUGGESTIONS, blockAfterLesson, blockDoneCount, blockNext, currentBlock, doneBlocks, homeLessonState, homeSuggestions, nextChoices, onlyMixLeft, pickBlock, routeNextLesson } from '../src/lib/route';
import { emptyProgress, replaceWithBackup } from '../src/lib/progress';

const unit = (id: string) => units.find((u) => u.id === id)!;
const done = (...unitIds: string[]) => Object.fromEntries(unitIds.flatMap((id) => unit(id).lessons.map((l) => [l.id, { best: 1, times: 1 }])));
const lesson = (id: string) => ({ [id]: { best: 1, times: 1 } });

describe('route: one block at a time', () => {
  it('gives a brand-new learner the first unit of their course, and no choice', () => {
    expect(currentBlock({ sector: 'none', completed: {} })?.id).toBe(coursePlan('none').main[0].id);
    expect(currentBlock({ sector: 'construction', completed: {} })?.id).toBe('u.firstday');
    expect(routeNextLesson({ sector: 'none', completed: {} })?.id).toBe('l.hello');
  });

  it('keeps a started block as the current block until it is finished', () => {
    const completed = lesson('l.hello');
    expect(currentBlock({ sector: 'none', completed })?.id).toBe('u.firstday');
    expect(routeNextLesson({ sector: 'none', completed })?.id).toBe('l.people');
    // A chosen block stays, even when an earlier unit is half done.
    expect(currentBlock({ sector: 'none', completed, currentUnit: 'u.pay' })?.id).toBe('u.pay');
    expect(routeNextLesson({ sector: 'none', completed, currentUnit: 'u.pay' })?.id).toBe('l.payslip');
  });

  it('asks for a choice once the block is finished', () => {
    const completed = done('u.firstday');
    expect(currentBlock({ sector: 'none', completed })).toBeNull();
    expect(currentBlock({ sector: 'none', completed, currentUnit: 'u.firstday' })).toBeNull();
    expect(routeNextLesson({ sector: 'none', completed, currentUnit: 'u.firstday' })).toBeUndefined();
  });

  it('offers the next 3 unfinished units in course order, the recommended one first', () => {
    expect(nextChoices('none', done('u.firstday')).map((u) => u.id)).toEqual(['u.help', 'u.tools', 'u.safety']);
    // Finished units are skipped, wherever they are.
    expect(nextChoices('none', done('u.firstday', 'u.tools')).map((u) => u.id)).toEqual(['u.help', 'u.safety', 'u.warehouse']);
    // The own sector unit comes in its slot (right after Safety).
    expect(nextChoices('construction', done('u.firstday', 'u.help', 'u.tools')).map((u) => u.id)).toEqual(['u.safety', 'u.build', 'u.time']);
  });

  it('includes the unfinished current block when the learner chooses another topic', () => {
    const completed = { ...done('u.firstday', 'u.help'), ...lesson('l.payslip') };
    const list = nextChoices('none', completed, 'u.pay');
    expect(list.map((u) => u.id)).toEqual(['u.tools', 'u.safety', 'u.pay']);
    // Already among the first 3: nothing changes.
    expect(nextChoices('none', lesson('l.hello'), 'u.firstday').map((u) => u.id)).toEqual(['u.firstday', 'u.help', 'u.tools']);
  });

  it('fills up with the other sectors, and is empty when everything is done', () => {
    const { main, other } = coursePlan('care');
    const allMain = done(...main.map((u) => u.id));
    expect(nextChoices('care', allMain).map((u) => u.id)).toEqual(other.slice(0, 3).map((u) => u.id));
    expect(nextChoices('none', done(...units.map((u) => u.id)))).toEqual([]);
  });

  it('lists finished units for the shelf, in course order', () => {
    expect(doneBlocks('none', done('u.safety', 'u.firstday')).map((u) => u.id)).toEqual(['u.firstday', 'u.safety']);
  });

  it('counts and finds the next lesson inside a block', () => {
    const u = unit('u.tools');
    expect(blockNext(u, {})?.id).toBe(u.lessons[0].id);
    expect(blockNext(u, lesson(u.lessons[0].id))?.id).toBe(u.lessons[1].id);
    expect(blockDoneCount(u, lesson(u.lessons[0].id))).toBe(1);
    expect(blockNext(u, done('u.tools'))).toBeUndefined();
  });

  it('moves the block to the unit of a finished lesson while that unit is unfinished', () => {
    expect(blockAfterLesson('u.firstday', 'l.payslip', lesson('l.payslip'))).toBe('u.pay');
    // The block just finished stays chosen, so the home offers the next 3.
    expect(blockAfterLesson('u.firstday', 'l.firstday.mix', done('u.firstday'))).toBe('u.firstday');
    // Practising a finished unit does not move the learner out of their block.
    expect(blockAfterLesson('u.pay', 'l.hello', { ...done('u.firstday'), ...lesson('l.payslip') })).toBe('u.pay');
  });

  it('lets a preview learner play only the first block', () => {
    expect(routeNextLesson({ sector: 'none', completed: {} }, 'preview')?.id).toBe('l.hello');
    expect(routeNextLesson({ sector: 'none', completed: done('u.firstday'), currentUnit: 'u.help' }, 'preview')).toBeUndefined();
  });

  it('forgets the chosen block when a backup is put back', () => {
    const p = { ...emptyProgress, currentUnit: 'u.pay' };
    expect(replaceWithBackup(p, { completed: {} }).currentUnit).toBeUndefined();
  });
});

describe('route: "choose next" weighs the sector', () => {
  const choices = (sector: Parameters<typeof nextChoices>[0]) => nextChoices(sector, done('u.firstday')).map((u) => u.id);

  it('puts the sector\'s first focus unit first, then the next unit in course order and the sector\'s own unit', () => {
    // Safety comes in week 1 for warehouse, building and factory work.
    expect(choices('logistics')).toEqual(['u.safety', 'u.help', 'u.warehouse']);
    expect(choices('construction')).toEqual(['u.safety', 'u.help', 'u.build']);
    expect(choices('production')).toEqual(['u.safety', 'u.help', 'u.factory']);
    expect(choices('cleaning')).toEqual(['u.time', 'u.help', 'u.clean']);
    expect(choices('care')).toEqual(['u.teamwork', 'u.help', 'u.care']);
    // The focus unit done: the next unit in course order is first again.
    expect(nextChoices('logistics', done('u.firstday', 'u.safety')).map((u) => u.id)).toEqual(['u.help', 'u.warehouse', 'u.time']);
    // The global course order is not changed (saved progress keeps its place).
    expect(coursePlan('logistics').main.slice(0, 4).map((u) => u.id)).toEqual(['u.firstday', 'u.help', 'u.tools', 'u.safety']);
    // No sector: plain course order.
    expect(choices('none')).toEqual(['u.help', 'u.tools', 'u.safety']);
    expect(choices(undefined)).toEqual(['u.help', 'u.tools', 'u.safety']);
  });

  it('gives different sectors different choices', () => {
    const sets = (['logistics', 'cleaning', 'care', 'hospitality', 'construction', 'production'] as const).map((s) => choices(s).join());
    expect(new Set(sets).size).toBe(sets.length);
  });

  it('skips weighted units that are done and fills up in course order', () => {
    expect(nextChoices('care', done('u.firstday', 'u.care', 'u.teamwork')).map((u) => u.id)).toEqual(['u.help', 'u.health', 'u.tools']);
    expect(nextChoices('care', done('u.firstday', 'u.teamwork')).map((u) => u.id)).toEqual(['u.help', 'u.care', 'u.health']);
  });
});

describe('route: at most 3 choices on the home', () => {
  it('offers 2 suggestions after a finished block ("Other topic" is the third)', () => {
    expect(HOME_SUGGESTIONS).toBe(2);
    expect(homeSuggestions('none', done('u.firstday')).map((u) => u.id)).toEqual(['u.help', 'u.tools']);
    expect(homeSuggestions('logistics', done('u.firstday')).map((u) => u.id)).toEqual(['u.safety', 'u.help']);
    expect(homeSuggestions('none', done(...units.map((u) => u.id)))).toEqual([]);
  });

  it('lets only the next lesson of the block be tapped; done lessons are not buttons', () => {
    const u = unit('u.firstday');
    const completed = lesson(u.lessons[0].id);
    expect(u.lessons.map((l) => homeLessonState(u, l.id, completed))).toEqual(['done', 'now', ...u.lessons.slice(2).map(() => 'later')]);
    expect(u.lessons.filter((l) => homeLessonState(u, l.id, completed) === 'now')).toHaveLength(1);
    // A preview block outside the first unit: nothing to start.
    const pay = unit('u.pay');
    expect(pay.lessons.map((l) => homeLessonState(pay, l.id, {}, 'preview'))).toEqual(pay.lessons.map(() => 'later'));
  });
});

describe('route: no day is only review', () => {
  // 15 October 2026.
  const today = new Date(2026, 9, 15, 12);
  const firstday = unit('u.firstday');
  const newDone = Object.fromEntries(firstday.lessons.filter((l) => !l.id.endsWith('.mix')).map((l) => [l.id, { best: 1, times: 1 }]));

  it('knows when only the mixed review of a unit is left', () => {
    expect(onlyMixLeft(firstday, newDone)).toBe(true);
    expect(onlyMixLeft(firstday, {})).toBe(false);
    expect(onlyMixLeft(firstday, done('u.firstday'))).toBe(false);
  });

  it('goes on past the mixed review to the next new lesson once today\'s review is done', () => {
    const input = { sector: 'logistics' as const, completed: newDone, currentUnit: 'u.firstday' };
    // Review not done today: the mixed review is the next lesson.
    expect(routeNextLesson(input, 'full', today)?.id).toBe('l.firstday.mix');
    expect(routeNextLesson({ ...input, reviewDay: '2026-10-14' }, 'full', today)?.id).toBe('l.firstday.mix');
    // Done today: the recommended next unit's first lesson (Safety for warehouse work).
    const after = { ...input, reviewDay: '2026-10-15' };
    expect(currentBlock(after, today, 'full')?.id).toBe('u.safety');
    expect(routeNextLesson(after, 'full', today)?.id).toBe(unit('u.safety').lessons[0].id);
    // The mixed review stays: the unit is not finished, and it is still among the choices.
    expect(nextChoices('logistics', newDone, undefined, 5).map((u) => u.id)).toContain('u.firstday');
    // The recommended choice always brings new lessons; the mixed review comes right after it.
    expect(nextChoices('none', newDone).map((u) => u.id)).toEqual(['u.help', 'u.firstday', 'u.tools']);
  });

  it('never goes past a mixed review the learner picked, nor out of the preview', () => {
    const pick = pickBlock('u.firstday', newDone);
    expect(pick).toEqual({ currentUnit: 'u.firstday', pickedUnit: 'u.firstday' });
    expect(routeNextLesson({ sector: 'none', completed: newDone, ...pick, reviewDay: '2026-10-15' }, 'full', today)?.id).toBe('l.firstday.mix');
    // A block picked with new lessons left is not marked.
    expect(pickBlock('u.help', newDone).pickedUnit).toBeUndefined();
    // A preview (old code) also has the sneak preview: after the first unit's lessons it goes on
    // to the first lesson of the next theme, never to a lesson the preview does not open.
    expect(routeNextLesson({ sector: 'none', completed: newDone, currentUnit: 'u.firstday', reviewDay: '2026-10-15' }, 'preview', today)?.id).toBe('l.gear');
    expect(routeNextLesson({ sector: 'none', completed: newDone, currentUnit: 'u.firstday', reviewDay: '2026-10-15' }, 'sample', today)?.id).toBe('l.gear');
  });
});
