/**
 * A line of a dialect word card (docs/regio-zuid-limburg.md, les ZL.4): "Goojemorge = goedemorgen
 * (Maastricht)". The word before " = " is Limburgish, marked lang="li" so a screen reader or the
 * phone does not read it as Dutch; the meaning after it is Dutch. A line without " = " is Dutch.
 */
export function DialectLine({ line }: { line: string }) {
  const at = line.indexOf(' = ');
  if (at < 0) return <>{line}</>;
  return (
    <>
      <span className="dialect-word" lang="li">{line.slice(0, at)}</span>
      {line.slice(at)}
    </>
  );
}
