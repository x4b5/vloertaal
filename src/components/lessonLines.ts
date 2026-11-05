import { ruleStepTexts } from '../content/regels/course';
import { sayingQuestion } from '../content/sayings';
import type { Gender } from '../i18n/types';
import { tokenize } from '../lib/answers';
import { isRuleExercise, sentencePicture, type Exercise } from '../lib/exercises';
import { isWord } from '../lib/speaking';
import { learnerCharacter, learnerVoice, voiceFor, type VoiceRef } from '../lib/voices';
import { hasPicture } from '../lib/wordPicture';
import { pictureCast } from '../pictures';
import { CAST, castFor, colleaguesOf, snapColleague, tipCast, wordCast, type CharacterId } from './Characters';
import { findKlank } from '../content/klankMond';
import { klankVoice, soundText } from './KlankCard';

/**
 * The Dutch lines a lesson's exercises play, each in the voice it is played with (undefined: the
 * learner's own choice), in the order of the exercises: so the lesson's sound can be fetched
 * ahead, the next exercise's first (src/lib/lessonClips.ts), and only what is likely heard (a
 * lesson of the course: about 35 clips, 290 kB; every line in every voice would be four times
 * that). The voices are the ones the exercises speak with (src/components/Exercises.tsx,
 * Speaking.tsx, RuleSteps.tsx): a line missed here is only not fetched ahead, it still plays when
 * tapped (phase 3, 4 November 2026).
 */
export interface Line {
  text: string;
  voice?: VoiceRef;
}

const by = (who: CharacterId): VoiceRef => voiceFor(who);

/** The lines one exercise plays (said by itself, or by one of its speakers). */
export function exerciseLines(ex: Exercise, gender?: Gender): Line[] {
  // A rules step: each text block has one speaker (the work-rules track has no recordings yet:
  // the phone's voice reads it, and nothing is fetched).
  if (isRuleExercise(ex)) return ruleStepTexts(ex.step).map((text) => ({ text }));
  switch (ex.kind) {
    case 'intro':
      return [{ text: ex.word.nl }];
    case 'meaning':
      return [{ text: ex.word.nl, voice: by(wordCast(ex.word.id, 'meaning')) }];
    case 'dutch':
      // Text cards: each card's own speaker (the learner's voice); picture cards: the word.
      return ex.textOnly
        ? ex.options.map((w) => ({ text: w.nl }))
        : [{ text: ex.word.nl, voice: by(ex.ear !== undefined ? CAST[ex.ear % CAST.length] : wordCast(ex.word.id, 'dutch')) }];
    case 'listen':
    case 'type':
      return [ex.word, ...(ex.options ?? []).filter((w) => w.id !== ex.word.id)].map((w) => ({ text: w.nl }));
    case 'match': {
      const voice = by(wordCast(ex.words.map((w) => w.id).join('|'), 'match'));
      return ex.words.map((w) => ({ text: w.nl, voice }));
    }
    case 'build': {
      // The sentence and its own words (each right tile says its word), by the sentence's speaker;
      // not the tiles that do not fit (only heard when the learner taps their speaker).
      const voice = by(castFor(ex.sentence.id));
      return [ex.sentence.nl, ...tokenize(ex.sentence.nl)].map((text) => ({ text, voice }));
    }
    case 'chat': {
      const them = by(castFor(ex.dialogue.prompt.id, colleaguesOf(gender)));
      const me = learnerVoice(gender);
      // The lines to pick from are the reply's (yours), or the colleague's question when reversed.
      const pick = ex.reverse ? them : me;
      return [{ text: ex.dialogue.prompt.nl, voice: them }, { text: ex.dialogue.reply.nl, voice: me }, ...ex.options.map((o) => ({ text: o.nl, voice: pick }))];
    }
    // The tip's phrase ("Zeg het zo"), the situation's Dutch: said by the tip's colleague.
    case 'tip':
      return [{ text: ex.tip.phrase.nl, voice: by(tipCast(ex.tip, gender)) }];
    case 'situation':
      return ex.tip.situation.nl ? [{ text: ex.tip.situation.nl, voice: by(tipCast(ex.tip, gender)) }] : [];
    case 'saying':
      return [{ text: ex.saying.nl, voice: by(tipCast(sayingQuestion(ex.saying), gender)) }];
    // A sound card: the sound (where it is recorded on its own) and its example word, in Bram's voice.
    case 'klank': {
      const k = findKlank(ex.klank);
      if (!k) return [];
      const voice = klankVoice();
      return [...new Set([soundText(k, voice).text, k.word.nl])].map((text) => ({ text, voice }));
    }
    // "Snap je het?": the colleague's sentence (at the real pace, and slowly), and "Kunt u dat herhalen?" in your voice.
    case 'snap':
      return [{ text: ex.sentence.nl, voice: by(snapColleague(ex.sentence.id)) }, { text: ex.ask.nl, voice: learnerVoice(gender) }];
    case 'speak': {
      const { item, turn } = ex;
      if (turn) return [{ text: turn.prompt.nl, voice: by(castFor(turn.prompt.id, colleaguesOf(gender))) }, { text: item.nl, voice: by(learnerCharacter(gender)) }];
      const picture = isWord(item) ? (hasPicture(item) ? item : undefined) : sentencePicture(item);
      const who = (picture && pictureCast(picture.id)) || (isWord(item) ? 'bram' : castFor(item.id));
      return [{ text: item.nl, voice: by(who) }];
    }
  }
}

/**
 * The lines of these exercises, once each (same text, same voice), in order. With every word
 * asked also in the learner's own voice: a mistake comes back in another form (a word asked by
 * ear), and offline the lesson must know whether that one can be heard (surelySilent).
 */
export function lessonLines(exercises: readonly Exercise[], gender?: Gender): Line[] {
  const seen = new Set<string>();
  const out: Line[] = [];
  const add = (line: Line) => {
    const text = line.text.trim();
    const key = `${line.voice ?? ''}|${text}`;
    if (!text || seen.has(key)) return;
    seen.add(key);
    out.push({ ...line, text });
  };
  for (const ex of exercises) {
    for (const line of exerciseLines(ex, gender)) add(line);
    if ('word' in ex && ex.word) add({ text: ex.word.nl });
  }
  return out;
}

/**
 * The voice a step that can only be heard is heard in (lib/exercises.ts heardText): a sentence
 * built by ear in its speaker's voice, "Snap je het?" in its colleague's; a listening or writing
 * step in the learner's own.
 */
export function heardVoice(ex: Exercise): VoiceRef | undefined {
  return ex.kind === 'build' ? by(castFor(ex.sentence.id)) : ex.kind === 'snap' ? by(snapColleague(ex.sentence.id)) : undefined;
}
