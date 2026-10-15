/**
 * "Herinner mij elke dag" without a server: a calendar file (.ics) with one event that repeats
 * every day. The phone's own calendar does the reminding, so nothing is sent anywhere.
 */

/** Bram, the mascot, says it: calm, one line, the time it takes. */
export const REMINDER_TITLE = 'Bram: tijd voor je Nederlands (10 minuten)';

/** The three quick choices: before work, in the break, after work. */
export const REMINDER_TIMES = [
  { time: '07:00', nl: 'Voor het werk', key: 'remindBefore' },
  { time: '12:00', nl: 'In de pauze', key: 'remindBreak' },
  { time: '18:00', nl: 'Na het werk', key: 'remindAfter' },
] as const;

const pad = (n: number) => String(n).padStart(2, '0');

/** Text values in .ics escape backslash, semicolon, comma and newlines. */
function escapeText(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
}

/** Lines longer than 75 bytes are folded (continued on the next line after a space). */
function fold(line: string): string {
  const bytes = new TextEncoder();
  if (bytes.encode(line).length <= 75) return line;
  const out: string[] = [];
  let cur = '';
  for (const ch of line) {
    if (bytes.encode(cur + ch).length > (out.length ? 74 : 75)) {
      out.push(cur);
      cur = '';
    }
    cur += ch;
  }
  out.push(cur);
  return out.join('\r\n ');
}

/** "07:00" → [7, 0]; anything odd falls back to 18:00. */
export function parseTime(time: string): [number, number] {
  const m = /^(\d{1,2}):(\d{2})$/.exec(time.trim());
  if (!m) return [18, 0];
  const h = Number(m[1]);
  const min = Number(m[2]);
  return h < 24 && min < 60 ? [h, min] : [18, 0];
}

/**
 * The calendar file: a daily event of 10 minutes at `time` (local, "floating" time, so it stays at
 * 07:00 wherever the phone is), starting today if that time is still to come, else tomorrow.
 * It links back to the app and has an alert at the start.
 */
export function reminderIcs(time: string, appUrl: string, now: Date): string {
  const [h, m] = parseTime(time);
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
  if (start <= now) start.setDate(start.getDate() + 1);
  const end = new Date(start.getTime() + 10 * 60_000);
  const local = (d: Date) =>
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
  const utc = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Vloertaal//Herinnering//NL',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:vloertaal-${local(start)}-${Math.random().toString(36).slice(2, 10)}@vloertaal`,
    `DTSTAMP:${utc(now)}`,
    `DTSTART:${local(start)}`,
    `DTEND:${local(end)}`,
    'RRULE:FREQ=DAILY',
    `SUMMARY:${escapeText(REMINDER_TITLE)}`,
    `DESCRIPTION:${escapeText(`Bram van Vloertaal: oefen 10 minuten Nederlands voor je werk. ${appUrl}`)}`,
    `URL:${appUrl}`,
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `DESCRIPTION:${escapeText(REMINDER_TITLE)}`,
    'TRIGGER:PT0M',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return lines.map(fold).join('\r\n') + '\r\n';
}

/** Hands a file to the learner (the phone's download or "open in Calendar"). */
export function saveFile(name: string, type: string, content: string): void {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

const REMINDER_KEY = 'vloertaal:reminder-time';

/** The time of the daily reminder last put in the calendar on this phone (null: none yet). */
export function reminderTime(): string | null {
  try { return localStorage.getItem(REMINDER_KEY); } catch { return null; }
}

/** Remember the time just put in the calendar, so Settings shows it as the chosen one. */
export function rememberReminder(time: string): void {
  try { localStorage.setItem(REMINDER_KEY, time); } catch { /* private mode: only not remembered */ }
}

/** A tap on a time in Settings adds a calendar event only for a new time; the one already there
 *  only leads back (another .ics for the same time would make a second, identical reminder). */
export function reminderTapAdds(time: string, current: string | null): boolean {
  return time !== current;
}
