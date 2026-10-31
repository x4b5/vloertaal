/**
 * CSV for Excel and Google Sheets (docs/nakijken.md).
 *
 * Writing: UTF-8 with a BOM, a semicolon between the columns and CRLF at the end of a line. With
 * the BOM, Excel reads the file as UTF-8 (Polish, Arabic and Tigrinya letters stay right). The
 * semicolon is what Excel in Dutch and Belgian settings expects: a double click opens the file in
 * columns. Google Sheets finds the semicolon by itself. Every cell is quoted, so a ; or a line
 * break in a text never breaks a row.
 *
 * Reading: whatever comes back. A BOM or not, a semicolon, a comma or a tab (Excel in English
 * settings, or a download from Google Sheets, saves with commas), quoted or not.
 */

export type Row = Record<string, string>;

const BOM = '﻿';

const quote = (cell: string): string => `"${cell.replace(/"/g, '""')}"`;

/** A CSV text with these columns, in this order. Missing cells are empty. */
export function toCsv(columns: readonly string[], rows: readonly Row[]): string {
  const lines = [columns.map(quote).join(';'), ...rows.map((r) => columns.map((c) => quote(r[c] ?? '')).join(';'))];
  return BOM + lines.join('\r\n') + '\r\n';
}

/** The separator of a CSV text: the one of ; , and tab that occurs most in its first line (outside quotes). */
function separatorOf(text: string): string {
  const counts: Record<string, number> = { ';': 0, ',': 0, '\t': 0 };
  let inQuote = false;
  for (const ch of text) {
    if (ch === '"') inQuote = !inQuote;
    else if (!inQuote && (ch === '\n' || ch === '\r')) break;
    else if (!inQuote && ch in counts) counts[ch]++;
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

/** The rows of a CSV text as arrays of cells (quotes and doubled quotes undone). */
export function parseCells(input: string): string[][] {
  const text = input.startsWith(BOM) ? input.slice(1) : input;
  const sep = separatorOf(text);
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let inQuote = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuote) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') inQuote = false;
      else cell += ch;
    } else if (ch === '"') inQuote = true;
    else if (ch === sep) {
      row.push(cell);
      cell = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else cell += ch;
  }
  if (cell !== '' || row.length) {
    row.push(cell);
    rows.push(row);
  }
  // Excel adds empty rows (";;;;") at the end, sometimes in between: those are no rows.
  return rows.filter((r) => r.some((c) => c.trim() !== ''));
}

/** The rows of a CSV text as objects by column name (the first row), with the 1-based line number of each row. */
export function parseCsv(input: string): { columns: string[]; rows: (Row & { _rij: string })[] } {
  const [head, ...body] = parseCells(input);
  const columns = (head ?? []).map((c) => c.trim());
  return {
    columns,
    rows: body.map((cells, i) => {
      const row: Row & { _rij: string } = { _rij: String(i + 2) };
      columns.forEach((c, j) => (row[c] = cells[j] ?? ''));
      return row;
    }),
  };
}

/** Whether these bytes are valid UTF-8. Excel's plain "CSV" saves in Windows-1252, which loses letters. */
export function isUtf8(bytes: Uint8Array): boolean {
  try {
    new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    return true;
  } catch {
    return false;
  }
}
