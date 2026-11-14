import { loadTips } from '../src/lib/tips';

// The app loads the "Zo werkt het hier" tips right after its start and shows no lesson before they
// are there (src/lib/tips.ts, App.tsx). The tests start the same way: loaded before a test file is
// read, as some files ask for a tip while they are being read.
await loadTips();
