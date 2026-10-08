import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { coursePlan } from '../src/content/sectors';
import { blockAfterLesson, blockDoneCount, blockNext, currentBlock, doneBlocks, nextChoices, routeNextLesson } from '../src/lib/route';
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
