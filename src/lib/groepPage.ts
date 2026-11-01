import {
  aandeelTekst, gemiddelde, getal, groepCsv, groepRegels, groepStat, groepTekst, groepTotaal, GROEP_KLEIN,
  leesAantal, leesGroepCsv, leesScore, mediaan, plus, procent, statTekst,
} from './groep';
import { readGroepCode } from './groepCode';
import { COACH_PATH, GROEP_PATH, PRIVACY_PATH } from './paths';
import { esc, plainPage } from './plainPage';

/**
 * vloertaal.nl/groep: the group overview for coaches. Per participant (a number, never a name) the
 * coach types the numbers of the learner's coach card (src/lib/kaart.ts), or pastes the card's
 * short code (src/lib/groepCode.ts); the page makes the group's totals (src/lib/groep.ts) and
 * gives them to copy, or to save as text or CSV. Everything happens in the page itself:
 *  - its Content-Security-Policy forbids every connection (connect-src 'none', form-action
 *    'none'), so even a mistake in this code could not send anything;
 *  - nothing is kept: no localStorage, no cookies. Close the page and it is gone (save the CSV
 *    first, and open it again later).
 * Not for search results (noindex, not in the sitemap): /voor-begeleiders links to it.
 * Made at build time (vite.config.ts); tests/groep.test.ts.
 */

/** The functions the page copies in (by the name the script calls them). */
export const GROEP_SCRIPT_FUNCTIONS: [string, (...args: never[]) => unknown][] = [
  ['readGroepCode', readGroepCode], ['gemiddelde', gemiddelde], ['mediaan', mediaan], ['groepStat', groepStat],
  ['procent', procent], ['groepTotaal', groepTotaal], ['getal', getal], ['plus', plus], ['statTekst', statTekst],
  ['aandeelTekst', aandeelTekst], ['groepRegels', groepRegels], ['leesScore', leesScore], ['leesAantal', leesAantal],
  ['groepCsv', groepCsv], ['leesGroepCsv', leesGroepCsv], ['groepTekst', groepTekst],
];

/**
 * The functions as source, and `G`, an object with each under its own name: a bundler may rename a
 * function (getal → getal$1) but then renames the calls inside the others too, so G holds them by
 * the names the page's script uses.
 */
export function groepLibSource(): string {
  return `${GROEP_SCRIPT_FUNCTIONS.map(([, f]) => f.toString()).join('\n')}
var G = {${GROEP_SCRIPT_FUNCTIONS.map(([k, f]) => `${k}: ${f.name}`).join(', ')}};`;
}

/** No connection of any kind, no form sent, nothing but this page's own inline code and the icon. */
export const GROEP_CSP = "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self'; connect-src 'none'; form-action 'none'; base-uri 'none'";

const PAGE_STYLE = `
  .rij { border: 2px solid var(--line); border-radius: 10px; padding: 10px 12px 12px; margin: 0 0 12px; }
  .rij legend { font-weight: 700; padding: 0 6px; }
  .velden { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  label { display: block; font-size: 0.9rem; color: var(--ink2); margin: 0 0 2px; }
  input, textarea { width: 100%; font: inherit; color: var(--ink); background: var(--bg); border: 2px solid var(--line); border-radius: 8px; padding: 8px 10px; }
  input:focus, textarea:focus, button:focus-visible, .knop:focus-within { outline: 3px solid var(--yellow); outline-offset: 1px; }
  input[aria-invalid="true"] { border-color: #b3261e; }
  .fout { color: #b3261e; font-size: 0.9rem; margin: 2px 0 0; min-height: 0; }
  @media (prefers-color-scheme: dark) { input[aria-invalid="true"] { border-color: #f2b8b5; } .fout { color: #f2b8b5; } }
  .knoppen { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0 0; }
  button, .knop { font: inherit; font-weight: 700; padding: 10px 14px; border-radius: 10px; border: 2px solid var(--ink); background: var(--card); color: var(--ink); cursor: pointer; }
  button.hoofd { background: var(--yellow); color: #1e2226; border-color: #1e2226; }
  button.weg { font-weight: 600; padding: 6px 10px; margin: 10px 0 0; border-color: var(--line); }
  .knop input { position: absolute; width: 1px; height: 1px; opacity: 0; }
  .knop { position: relative; display: inline-block; }
  dl.totaal { margin: 0; }
  dl.totaal div { padding: 6px 0; border-bottom: 1px solid var(--line); }
  dl.totaal div:last-child { border-bottom: 0; }
  dl.totaal dt { font-size: 0.9rem; color: var(--ink2); }
  dl.totaal dd { margin: 0; font-weight: 700; }
  code { font-size: 0.95em; background: var(--bg); padding: 1px 5px; border-radius: 5px; }
  .melding { font-weight: 600; margin: 8px 0 0; }
`;

/** What the page does with what is typed in, in plain words (shown first, and tested). */
export const GROEP_SAFE: readonly string[] = [
  'Vul geen namen in. Een deelnemer is hier alleen een nummer. Wil je weten wie welk nummer is? Houd dat zelf bij, apart van dit overzicht.',
  'Alles blijft op deze pagina, op jouw computer of telefoon. Er gaat niets naar een server, ook niet naar Vloertaal. De pagina mag zelfs geen verbinding maken: dat staat in de pagina zelf vast.',
  'De pagina bewaart niets. Sluit je hem, dan is alles weg. Bewaar dus eerst als CSV. Later open je die CSV hier weer.',
  `Stuur je de totalen door, bijvoorbeeld aan een fonds of gemeente? Stuur dan alleen de totalen, niet de rijen per deelnemer, en het liefst van een groep van ${GROEP_KLEIN} of meer.`,
];

export function groepPage(): string {
  const body = `<h1>Groepsoverzicht</h1>
<p class="lead">Voor begeleiders. Neem per deelnemer de getallen over van de begeleiderskaart. Deze pagina maakt de totalen van de groep: het gemiddelde, de mediaan en hoeveel deelnemers terugkwamen. Zonder namen, en er gaat niets naar een server.</p>
<section aria-labelledby="veilig"><h2 id="veilig">Zo blijft het veilig</h2>
<ul class="lines">${GROEP_SAFE.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></section>
<section aria-labelledby="codes"><h2 id="codes">Snel: plak de codes</h2>
<p>De leerling laat de kaart zien bij Instellingen › Taal en ik › “Laat zien hoe het gaat”. Onderaan de kaart staat een code, zoals <code>VT1 O3 D12 V11/18 N15/18</code>. Stuurde de leerling de kaart? Dan staat de code ook in het bericht. Plak een of meer codes hier, één per regel.</p>
<label for="codes-in">Codes van de kaarten</label>
<textarea id="codes-in" rows="3" autocomplete="off" spellcheck="false"></textarea>
<div class="knoppen"><button type="button" id="codes-add" class="hoofd">Zet in de lijst</button></div>
<p class="melding" id="codes-msg" role="status"></p>
</section>
<section aria-labelledby="lijst"><h2 id="lijst">Deelnemers</h2>
<p>Of typ de getallen over. Vul in wat je weet: een leeg veld telt niet mee. De toets: tel de drie onderdelen van de kaart op. Luisteren 4/6, Woorden 5/6 en Zinnen 4/6 is samen 13/18.</p>
<div id="rijen"></div>
<div class="knoppen"><button type="button" id="erbij">Deelnemer erbij</button></div>
</section>
<section aria-labelledby="totaal"><h2 id="totaal">Totalen van de groep</h2>
<dl class="totaal" id="som"></dl>
<p class="melding" id="klein" hidden>Een kleine groep: de getallen zeggen nog weinig.</p>
</section>
<section aria-labelledby="bewaar"><h2 id="bewaar">Bewaren of doorsturen</h2>
<p>De tekst en de CSV maak je hier zelf, op je eigen computer. Jij kiest waar ze blijven.</p>
<div class="knoppen">
<button type="button" id="kopieer" class="hoofd">Kopieer de totalen</button>
<button type="button" id="als-tekst">Bewaar als tekst</button>
<button type="button" id="als-csv">Bewaar als CSV</button>
<span class="knop"><label for="open-csv" style="display:inline;color:inherit;font-size:inherit;margin:0">Open een CSV</label><input type="file" id="open-csv" accept=".csv,text/csv,text/plain" /></span>
</div>
<p class="melding" id="bewaar-msg" role="status"></p>
</section>
<section aria-labelledby="betekenis"><h2 id="betekenis">Wat de getallen zeggen, en wat niet</h2>
<ul class="lines">
<li><strong>Dagen geoefend</strong> telt de dagen met een les in de laatste 4 weken, zoals op de kaart. “Kwamen terug” is: op 2 of meer dagen geoefend.</li>
<li><strong>De toets “Wat ken je al?”</strong> is kort, zonder cijfer of niveau. Instap en eind zijn twee verschillende versies. Hij is nog niet nagekeken door een expert. Een verschil zegt dus iets, maar bewijst niets.</li>
<li><strong>De mediaan</strong> is het middelste getal: de helft zit eronder, de helft erboven. Bij een kleine groep zegt die vaak meer dan het gemiddelde.</li>
<li><strong>Werkregels</strong> heeft geen toets: daar vul je alleen onderwerpen en dagen in.</li>
</ul></section>
<noscript><p><strong>Deze pagina rekent met JavaScript, op je eigen computer.</strong> Zet JavaScript aan om hem te gebruiken.</p></noscript>
<footer><p><a href="${COACH_PATH}">Voor begeleiders en werkgevers</a> · <a href="${PRIVACY_PATH}">Privacy</a></p></footer>
<style>${PAGE_STYLE}</style>
<script>
${groepLibSource()}
${GROEP_SCRIPT}
</script>`;
  const html = plainPage(
    {
      path: GROEP_PATH, lang: 'nl', ogLocale: 'nl_NL', noindex: true,
      title: 'Groepsoverzicht voor begeleiders | Vloertaal',
      description: 'Maak de totalen van je groep uit de begeleiderskaarten van Vloertaal: zonder namen, en er gaat niets naar een server.',
    },
    body,
  );
  return html.replace('<meta charset="utf-8" />', `<meta charset="utf-8" />\n<meta http-equiv="Content-Security-Policy" content="${GROEP_CSP}" />`);
}

/** The page's own code: the rows, the totals, copy and save. Plain ES2019, no modules, no network. */
const GROEP_SCRIPT = `(function () {
  var rijen = [];
  var $ = function (id) { return document.getElementById(id); };
  var MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
  function vandaag() { var d = new Date(); return d.getDate() + ' ' + MAANDEN[d.getMonth()] + ' ' + d.getFullYear(); }
  function iso() { var d = new Date(); var p = function (n) { return (n < 10 ? '0' : '') + n; }; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); }
  function leeg() { return { onderwerpen: '', dagen: '', voor: '', na: '' }; }
  var VELDEN = [
    { k: 'onderwerpen', label: 'Onderwerpen af', mode: 'numeric', hint: '' },
    { k: 'dagen', label: 'Dagen geoefend', mode: 'numeric', hint: '' },
    { k: 'voor', label: 'Toets instap', mode: 'text', hint: '11/18' },
    { k: 'na', label: 'Toets eind', mode: 'text', hint: '15/18' }
  ];
  function lees(r) {
    var out = {};
    var o = G.leesAantal(r.onderwerpen, 999), d = G.leesAantal(r.dagen, 28), v = G.leesScore(r.voor), n = G.leesScore(r.na);
    if (o !== undefined) out.onderwerpen = o;
    if (d !== undefined) out.dagen = d;
    if (v) out.voor = v;
    if (n) out.na = n;
    return out;
  }
  function fout(k, waarde) {
    if (String(waarde).trim() === '') return '';
    if (k === 'onderwerpen') return G.leesAantal(waarde, 999) === undefined ? 'Typ een getal, bijvoorbeeld 3.' : '';
    if (k === 'dagen') return G.leesAantal(waarde, 28) === undefined ? 'Typ een getal van 0 tot 28.' : '';
    return G.leesScore(waarde) ? '' : 'Typ goed/van, bijvoorbeeld 11/18.';
  }
  function tekenRijen() {
    var box = $('rijen');
    box.textContent = '';
    rijen.forEach(function (r, i) {
      var fs = document.createElement('fieldset');
      fs.className = 'rij';
      var lg = document.createElement('legend');
      lg.textContent = 'Deelnemer ' + (i + 1);
      fs.appendChild(lg);
      var grid = document.createElement('div');
      grid.className = 'velden';
      VELDEN.forEach(function (v) {
        var id = 'r' + i + '-' + v.k;
        var cell = document.createElement('div');
        var lab = document.createElement('label');
        lab.htmlFor = id;
        lab.textContent = v.label;
        var inp = document.createElement('input');
        inp.id = id;
        inp.type = 'text';
        inp.inputMode = v.mode;
        inp.autocomplete = 'off';
        if (v.hint) inp.placeholder = v.hint;
        inp.value = r[v.k];
        var msg = document.createElement('p');
        msg.className = 'fout';
        msg.id = id + '-fout';
        var check = function () {
          var f = fout(v.k, inp.value);
          msg.textContent = f;
          if (f) { inp.setAttribute('aria-invalid', 'true'); inp.setAttribute('aria-describedby', msg.id); }
          else { inp.removeAttribute('aria-invalid'); inp.removeAttribute('aria-describedby'); }
        };
        inp.addEventListener('input', function () { r[v.k] = inp.value; check(); tekenSom(); });
        check();
        cell.appendChild(lab);
        cell.appendChild(inp);
        cell.appendChild(msg);
        grid.appendChild(cell);
      });
      fs.appendChild(grid);
      var weg = document.createElement('button');
      weg.type = 'button';
      weg.className = 'weg';
      weg.textContent = 'Deelnemer ' + (i + 1) + ' weghalen';
      weg.addEventListener('click', function () {
        rijen.splice(i, 1);
        if (!rijen.length) rijen.push(leeg());
        tekenRijen();
        tekenSom();
        $('erbij').focus();
      });
      fs.appendChild(weg);
      box.appendChild(fs);
    });
  }
  function gelezen() { return rijen.map(lees); }
  function tekenSom() {
    var t = G.groepTotaal(gelezen());
    var dl = $('som');
    dl.textContent = '';
    G.groepRegels(t).forEach(function (r) {
      var div = document.createElement('div');
      var dt = document.createElement('dt');
      dt.textContent = r.label;
      var dd = document.createElement('dd');
      dd.textContent = r.waarde;
      div.appendChild(dt);
      div.appendChild(dd);
      dl.appendChild(div);
    });
    $('klein').hidden = !(t.deelnemers > 0 && t.deelnemers < ${GROEP_KLEIN});
  }
  function heeftIets() { return gelezen().some(function (r) { return Object.keys(r).length > 0; }); }
  function zonderLege() { rijen = rijen.filter(function (r) { return Object.keys(lees(r)).length > 0; }); }
  function alsVeld(r) {
    return {
      onderwerpen: r.onderwerpen === undefined ? '' : String(r.onderwerpen),
      dagen: r.dagen === undefined ? '' : String(r.dagen),
      voor: r.voor ? r.voor.goed + '/' + r.voor.van : '',
      na: r.na ? r.na.goed + '/' + r.na.van : ''
    };
  }
  $('codes-add').addEventListener('click', function () {
    var regels = $('codes-in').value.split(/\\r?\\n/).filter(function (l) { return l.trim() !== ''; });
    var goed = 0, mis = [];
    zonderLege();
    regels.forEach(function (l) {
      var c = G.readGroepCode(l);
      if (c) { rijen.push(alsVeld(c)); goed++; } else mis.push(l.trim());
    });
    if (!rijen.length) rijen.push(leeg());
    $('codes-in').value = mis.join('\\n');
    $('codes-msg').textContent = (goed === 1 ? '1 deelnemer' : goed + ' deelnemers') + ' erbij.' + (mis.length ? ' Niet gelezen (staat nog in het vak): ' + mis.length + '. Klopt de code? Bijvoorbeeld VT1 O3 D12.' : '');
    tekenRijen();
    tekenSom();
  });
  $('erbij').addEventListener('click', function () {
    rijen.push(leeg());
    tekenRijen();
    tekenSom();
    var first = $('r' + (rijen.length - 1) + '-onderwerpen');
    if (first) first.focus();
  });
  function meld(t) { $('bewaar-msg').textContent = t; }
  function bewaar(naam, type, tekst) {
    var blob = new Blob([tekst], { type: type });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = naam;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    meld('Bewaard als ' + naam + '. Kijk bij je downloads.');
  }
  $('kopieer').addEventListener('click', function () {
    var tekst = G.groepTekst(gelezen(), vandaag());
    var klaar = function () { meld('Gekopieerd. Plak het in een mail of verslag.'); };
    var anders = function () {
      var ta = document.createElement('textarea');
      ta.value = tekst;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      ta.remove();
      if (ok) klaar(); else meld('Kopiëren lukt niet in deze browser. Kies dan Bewaar als tekst.');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(tekst).then(klaar, anders);
    else anders();
  });
  $('als-tekst').addEventListener('click', function () { bewaar('groepsoverzicht-vloertaal-' + iso() + '.txt', 'text/plain;charset=utf-8', G.groepTekst(gelezen(), vandaag())); });
  $('als-csv').addEventListener('click', function () { bewaar('groepsoverzicht-vloertaal-' + iso() + '.csv', 'text/csv;charset=utf-8', '\\ufeff' + G.groepCsv(gelezen(), vandaag())); });
  $('open-csv').addEventListener('change', function (e) {
    var file = e.target.files && e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var lijst = G.leesGroepCsv(String(reader.result || '').replace(/^\\ufeff/, ''));
      zonderLege();
      lijst.forEach(function (r) { rijen.push(alsVeld(r)); });
      if (!rijen.length) rijen.push(leeg());
      tekenRijen();
      tekenSom();
      meld(lijst.length ? (lijst.length === 1 ? '1 deelnemer' : lijst.length + ' deelnemers') + ' uit de CSV erbij.' : 'In dit bestand staan geen deelnemers.');
    };
    reader.readAsText(file);
    e.target.value = '';
  });
  window.addEventListener('beforeunload', function (e) { if (heeftIets()) { e.preventDefault(); e.returnValue = ''; } });
  rijen.push(leeg());
  tekenRijen();
  tekenSom();
})();`;
