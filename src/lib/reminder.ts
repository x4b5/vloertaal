/**
 * "Herinner mij elke dag" without a server: a calendar file (.ics) with one event that repeats
 * every day. The phone's own calendar does the reminding, so nothing is sent anywhere.
 */

import type { Track } from './track';

/** Bram, the mascot, says it: calm, one line, the time it takes. */
export const REMINDER_TITLE = 'Bram: tijd voor je Nederlands (10 minuten)';
/** The same in the work-rules track (src/lib/track.ts): a rules lesson takes about 5 minutes. */
export const REMINDER_TITLE_RULES = 'Bram: tijd voor de werkregels (5 minuten)';

/** What the calendar event says, per track: its title, the line under it and how long it lasts. */
export function reminderText(track: Track = 'taal'): { title: string; description: string; minutes: number } {
  return track === 'regels'
    ? { title: REMINDER_TITLE_RULES, description: 'Bram van Vloertaal: leer in 5 minuten hoe het werk in Nederland gaat.', minutes: 5 }
    : { title: REMINDER_TITLE, description: 'Bram van Vloertaal: oefen 10 minuten Nederlands voor je werk.', minutes: 10 };
}

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
 * The calendar file: a daily event of 10 minutes (the work-rules track: 5) at `time` (local, "floating" time, so it stays at
 * 07:00 wherever the phone is), starting today if that time is still to come, else tomorrow.
 * It links back to the app and has an alert at the start. `event`: this phone's one reminder
 * (reminderEvent), so a new time updates that event instead of adding a second alarm.
 */
export function reminderIcs(time: string, appUrl: string, now: Date, track: Track = 'taal', help?: string, event: ReminderEvent = oneOffEvent()): string {
  return calendar('PUBLISH', time, appUrl, now, track, help, event);
}

/**
 * "Stop de herinnering": the same event (same UID, a higher SEQUENCE) as cancelled. Opening it
 * takes the daily reminder out of the calendar; `time` is the reminder's last time, so a calendar
 * that shows it before removing it shows the right one.
 */
export function reminderCancelIcs(time: string, appUrl: string, now: Date, track: Track = 'taal', help: string | undefined, event: ReminderEvent): string {
  return calendar('CANCEL', time, appUrl, now, track, help, event);
}

function calendar(method: 'PUBLISH' | 'CANCEL', time: string, appUrl: string, now: Date, track: Track, help: string | undefined, event: ReminderEvent): string {
  const text = reminderText(track);
  // The help language too (the learner may not read the Dutch yet): "Bram: tijd voor je
  // Nederlands (10 minuten) · Czas na niderlandzki (10 minut)".
  const title = help ? `${text.title} · ${help}` : text.title;
  const [h, m] = parseTime(time);
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
  if (start <= now) start.setDate(start.getDate() + 1);
  const end = new Date(start.getTime() + text.minutes * 60_000);
  const local = (d: Date) =>
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
  const utc = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Vloertaal//Herinnering//NL',
    'CALSCALE:GREGORIAN',
    `METHOD:${method}`,
    'BEGIN:VEVENT',
    `UID:${event.uid}`,
    `SEQUENCE:${event.sequence}`,
    `DTSTAMP:${utc(now)}`,
    `DTSTART:${local(start)}`,
    `DTEND:${local(end)}`,
    'RRULE:FREQ=DAILY',
    `SUMMARY:${escapeText(title)}`,
    `DESCRIPTION:${escapeText(`${text.description} ${appUrl}`)}`,
    `URL:${appUrl}`,
    // A cancelled event has no alarm left to ring.
    ...(method === 'CANCEL' ? ['STATUS:CANCELLED'] : [
      'BEGIN:VALARM',
      'ACTION:DISPLAY',
      `DESCRIPTION:${escapeText(title)}`,
      'TRIGGER:PT0M',
      'END:VALARM',
    ]),
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

/** Stop: no reminder in the calendar any more, so Settings offers the times again. */
export function forgetReminder(): void {
  try { localStorage.removeItem(REMINDER_KEY); } catch { /* private mode: nothing was remembered */ }
}

/** The calendar event's identity: its UID and its version (SEQUENCE, higher on every new file). */
export interface ReminderEvent { uid: string; sequence: number }

const UID_KEY = 'vloertaal:reminder-uid';
const SEQ_KEY = 'vloertaal:reminder-seq';

/** A random id, from the phone's crypto where it has one. */
function randomId(): string {
  try {
    const b = new Uint8Array(10);
    crypto.getRandomValues(b);
    return [...b].map((x) => x.toString(16).padStart(2, '0')).join('');
  } catch {
    return Math.random().toString(36).slice(2, 12) + Math.random().toString(36).slice(2, 12);
  }
}

/** Without storage (private mode) every file is its own event, as before. */
const oneOffEvent = (): ReminderEvent => ({ uid: `vloertaal-${randomId()}@vloertaal`, sequence: 0 });

/**
 * The one reminder event of this phone, for the next file: the same UID every time (random,
 * made once, kept on this phone only and never sent anywhere) and a SEQUENCE one higher than the
 * last file's. So a new time, or Stop, changes that one event in the calendar: no second alarm.
 */
export function reminderEvent(): ReminderEvent {
  try {
    let uid = localStorage.getItem(UID_KEY);
    if (!uid) {
      uid = `vloertaal-${randomId()}@vloertaal`;
      localStorage.setItem(UID_KEY, uid);
    }
    const last = Number(localStorage.getItem(SEQ_KEY) ?? -1);
    const sequence = Number.isInteger(last) && last >= 0 ? last + 1 : 0;
    localStorage.setItem(SEQ_KEY, String(sequence));
    return { uid, sequence };
  } catch {
    return oneOffEvent();
  }
}

/** A tap on a time in Settings adds a calendar event only for a new time; the one already there
 *  only leads back (another .ics for the same time would make a second, identical reminder). */
export function reminderTapAdds(time: string, current: string | null): boolean {
  return time !== current;
}
