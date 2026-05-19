import type { ComparisonRow } from "@/lib/confronti-pages";

type ComparisonMatrixProps = {
  leftLabel: string;
  rightLabel: string;
  rows: ComparisonRow[];
};

export function ComparisonMatrix({ leftLabel, rightLabel, rows }: ComparisonMatrixProps) {
  return (
    <section className="section" aria-labelledby="comparison-matrix-title">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Matrice decisionale</p>
            <h2 id="comparison-matrix-title">Confronto qualitativo senza punteggi finti</h2>
          </div>
        </div>
        <div className="comparison-matrix" role="table" aria-label={`Confronto tra ${leftLabel} e ${rightLabel}`}>
          <div className="comparison-row comparison-head" role="row">
            <div role="columnheader">Criterio</div>
            <div role="columnheader">{leftLabel}</div>
            <div role="columnheader">{rightLabel}</div>
          </div>
          {rows.map((row) => (
            <div className="comparison-row" role="row" key={row.label}>
              <div role="cell">{row.label}</div>
              <div role="cell">{row.left}</div>
              <div role="cell">{row.right}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
