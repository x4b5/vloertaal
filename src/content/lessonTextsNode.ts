import * as work from './work';
import { registerLessonTexts } from './lessonTexts';

/**
 * The lesson texts at once, for code that runs in Node and reads the course while it is being
 * read: the site build (vite.config.ts) and the scripts in scripts/. Import it first, before any
 * file of the course. The app never imports this file: it loads the texts after its start
 * (src/content/lessonTexts.ts, tests/lessonTexts.test.ts).
 */
registerLessonTexts(work);
