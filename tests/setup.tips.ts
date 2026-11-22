import { loadTips } from '../src/lib/tips';
import { loadLessonTexts } from '../src/content/lessonTexts';

// The app loads the "Zo werkt het hier" tips and the lesson texts right after its start and shows
// no lesson before they are there (src/lib/tips.ts, src/content/lessonTexts.ts, App.tsx). The tests
// start the same way: loaded before a test file is read, as some files ask for a tip or a lesson's
// words while they are being read.
await Promise.all([loadTips(), loadLessonTexts()]);
