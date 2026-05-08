const guides = [
  {
    title: "Chat webcam per principianti",
    copy: "Una futura guida spiegherà cosa guardare prima dell’iscrizione, dai profili alle funzioni base."
  },
  {
    title: "LiveJasmin Italia e alternative",
    copy: "Uno spazio editoriale per confrontare approcci, anteprime, privacy e differenze tra piattaforme."
  },
  {
    title: "Siti webcam sicuri",
    copy: "Controlli pratici su privacy, pagamenti, trasparenza e navigazione mobile senza toni allarmistici."
  }
];

export function GuidePreviewSection() {
  return (
    <section className="section" aria-labelledby="guide-title">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Guide in arrivo</p>
            <h2 id="guide-title">Anteprima delle risorse italiane più utili</h2>
            <p className="section-copy">
              Le sezioni complete arriveranno nelle fasi successive. In Phase 1 teniamo solo una
              mappa editoriale chiara, senza creare pagine vuote o link rotti.
            </p>
          </div>
        </div>
        <div className="guide-grid">
          {guides.map((guide) => (
            <article className="guide-card" key={guide.title}>
              <h3>{guide.title}</h3>
              <p>{guide.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
