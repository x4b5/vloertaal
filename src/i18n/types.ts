export const uiEn = {
  appTagline: 'Dutch for the work floor',
  chooseLanguage: 'Choose your help language',
  chooseLanguageHint: 'You learn Dutch through English. We add short help in your own language.',
  englishOnly: 'English only',
  beta: 'Translation in review',
  dayStreak: 'day streak',
  start: 'Start',
  practice: 'Practise again',
  locked: 'Finish the lesson before this one first',
  newWord: 'New word',
  tapToHear: 'Tap to hear',
  whatDoesThisMean: 'What does this mean?',
  chooseDutch: 'Choose the Dutch word',
  whichOneIs: 'Which one is “{word}”?',
  whatDoYouHear: 'What do you hear?',
  matchPairs: 'Tap the matching pairs',
  buildSentence: 'Make this sentence in Dutch',
  typeWhatYouHear: 'Type what you hear',
  check: 'Check',
  continue: 'Continue',
  correct: 'Great job!',
  almost: 'Correct, but watch the spelling',
  incorrect: 'Not quite',
  correctAnswer: 'Correct answer',
  cantListen: 'I can’t listen now',
  lessonComplete: 'Lesson complete!',
  xpEarned: 'XP earned',
  accuracy: 'Accuracy',
  backToPath: 'Back to lessons',
  phrasebook: 'Emergency phrases',
  phrasebookHint: 'Tap a phrase to hear it. You can also show your screen to a colleague.',
  settings: 'Settings',
  helpLanguage: 'Help language',
  resetProgress: 'Reset my progress',
  resetConfirm: 'Delete all progress on this device?',
  audioUnavailable: 'Sound is not available on this device.',
  slow: 'Slow',
  theme: 'Appearance',
  themeAuto: 'Automatic',
  themeLight: 'Light',
  themeDark: 'Dark',
  voice: 'Dutch voice',
  voiceAuto: 'Automatic',
  voiceHint: 'Tap 🔊 to listen. The voices come from your phone, so the list is different on every device.',
  voiceNone: 'This device has no Dutch voice. You can add one in your phone settings (Text-to-speech).',
} as const;

export type UiKey = keyof typeof uiEn;

export type LangCode = 'ar' | 'ti' | 'fa' | 'prs' | 'uk' | 'tr' | 'pl' | 'ro' | 'bg';

export interface HelpLanguage {
  code: LangCode;
  /** English name of the language, e.g. "Dari (Afghanistan)". */
  name: string;
  /** Name in the language itself, shown in the language picker. */
  nativeName: string;
  dir: 'ltr' | 'rtl';
  /** Set to true once a native speaker has checked every string. */
  reviewed: boolean;
  /** UI strings; anything missing falls back to English only. */
  ui: Partial<Record<UiKey, string>>;
  /** Translations of curriculum ids (units, lessons, words, sentences). */
  gloss: Record<string, string>;
}
