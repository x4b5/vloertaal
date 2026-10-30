import { test } from 'vitest';
import { cultureTips } from '../src/content/culture';
const SIG = /\b(politely|calmly|ask)\b/i;
test('scan', () => {
  let longest = 0; const hits: string[] = [];
  for (const t of cultureTips) {
    const best = t.options.find(o => o.best)!; const bad = t.options.filter(o => !o.best);
    const maxBad = Math.max(...bad.map(o => o.en.length)); const avg = bad.reduce((n,o)=>n+o.en.length,0)/bad.length;
    if (best.en.length > maxBad) longest++;
    const ratio = best.en.length / maxBad;
    const sig = SIG.test(best.en) && !bad.some(o => SIG.test(o.en));
    if (ratio > 1.3 || sig) hits.push(`${t.id}\t${ratio.toFixed(2)}\t${sig?'SIG':''}\tlen=${best.en.length} avg=${avg.toFixed(0)} target=${Math.round(avg*0.8)}-${Math.round(avg*1.2)}\n  BEST: ${best.en}\n${bad.map(o=>'  bad: '+o.en).join('\n')}`);
  }
  console.log(`tips=${cultureTips.length} longest=${longest} hits=${hits.length}\n` + hits.join('\n'));
});
