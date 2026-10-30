/**
 * Every match of a global regex in a text, as String.prototype.matchAll gives them, which is
 * missing before Chrome 73 (old Android phones), where a lesson's text would then not draw
 * (tests/oldPhones.test.ts).
 */
export function allMatches(text: string, re: RegExp): RegExpExecArray[] {
  const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`);
  const out: RegExpExecArray[] = [];
  for (let m = g.exec(text); m; m = g.exec(text)) {
    out.push(m);
    if (!m[0].length) g.lastIndex++;
  }
  return out;
}
