import { useEffect, useState } from 'react';

interface Credits {
  tier: string;
  used: number;
  limit: number;
  remaining: number;
  resetsAt: string | null;
  updatedAt: string;
}

const date = (iso: string) =>
  new Date(iso).toLocaleString('nl-NL', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });

/**
 * Hidden page for the app owner (open with #beheer): ElevenLabs credits left this
 * month, written to credits.json by the deploy workflow. Dutch only on purpose.
 */
export function Admin({ onBack }: { onBack: () => void }) {
  const [credits, setCredits] = useState<Credits | null | 'missing'>(null);

  useEffect(() => {
    fetch('./credits.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : 'missing'))
      .then(setCredits)
      .catch(() => setCredits('missing'));
  }, []);

  const pct = credits && credits !== 'missing' && credits.limit ? credits.remaining / credits.limit : 0;

  return (
    <div className="screen admin" lang="nl">
      <div className="screen-head">
        <button type="button" className="btn btn-ghost" onClick={onBack}>← Terug</button>
        <h1>Beheer</h1>
      </div>
      <h2>ElevenLabs-credits</h2>
      {credits === null && <p className="muted">Laden…</p>}
      {credits === 'missing' && (
        <div className="warn">
          <p>Nog geen gegevens. Zet in GitHub onder <em>Settings → Secrets and variables → Actions</em> een geheim
            met de naam <code>ELEVENLABS_API_KEY</code>. Na de volgende publicatie (of de dagelijkse update)
            verschijnt hier het saldo.</p>
        </div>
      )}
      {credits && credits !== 'missing' && (
        <div className="admin-card">
          <div className="admin-big">{credits.remaining.toLocaleString('nl-NL')}</div>
          <div className="muted">credits over van {credits.limit.toLocaleString('nl-NL')} ({credits.tier})</div>
          <div className="bar admin-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pct * 100)}>
            <div className="bar-fill" style={{ width: `${Math.max(2, pct * 100)}%`, background: pct < 0.15 ? 'var(--red)' : undefined }} />
          </div>
          {credits.resetsAt && <p>Wordt weer aangevuld op <strong>{date(credits.resetsAt)}</strong>.</p>}
          <p className="muted small">Bijgewerkt op {date(credits.updatedAt)}. Ververst bij elke publicatie en één keer per dag.</p>
        </div>
      )}
      <p className="muted small">
        Leerlingen gebruiken geen credits: de stemmen staan als bestanden in de app. Alleen het inspreken van
        nieuwe zinnen kost credits. Met een gratis abonnement stopt ElevenLabs als de credits op zijn; er wordt
        nooit iets afgeschreven.
      </p>
    </div>
  );
}
