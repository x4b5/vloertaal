/**
 * A situation's text ends with the question that is already its heading ("… What do you do?",
 * in the help language too). On screen the heading says it once ("Vloertaal rustiger": say it
 * once), so the last sentence goes when it is a question after an earlier sentence. A text that
 * is only a question stays as it is.
 */
const END = '.!?。።»”“"\'…:';
const LAST_QUESTION = new RegExp(`^([\\s\\S]*[${END}])\\s*[^${END}]+[?？؟]\\s*$`, 'u');

export function dropAsk(text: string): string {
  const m = LAST_QUESTION.exec(text);
  return m ? m[1] : text;
}
