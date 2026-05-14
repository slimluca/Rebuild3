import Link from "next/link";
import { ModelCard } from "@/components/ModelCard";
import { getLiveModels } from "@/lib/livejasmin";

export async function ModelGrid() {
  const feed = await getLiveModels(12);

  return (
    <section className="section model-section" id="modelli-live" aria-labelledby="modelli-live-title">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Modelli live</p>
            <h2 id="modelli-live-title">Modelli webcam live disponibili</h2>
            <p className="section-copy">
              Le anteprime live possono variare in base alla disponibilità della piattaforma
              partner. Questa sezione mostra solo dati reali dal feed configurato, senza nomi,
              stati, valutazioni o conteggi inventati.
            </p>
          </div>
          <Link className="button-secondary" href="/go/livejasmin" prefetch={false}>
            Guarda le opzioni live
          </Link>
        </div>
        {feed.models.length > 0 ? (
          <div className="model-grid">
            {feed.models.map((model) => (
              <ModelCard key={`${model.id}-${model.username ?? "profilo"}`} model={model} />
            ))}
          </div>
        ) : (
          <div className="fallback-panel">
            <div>
              <h3>Le anteprime live possono variare</h3>
              <p>
                Le anteprime dei modelli live possono cambiare in base alla disponibilità della
                piattaforma partner. Puoi comunque aprire l&apos;accesso live tramite il collegamento
                interno sicuro e valutare le opzioni disponibili prima della registrazione.
              </p>
            </div>
            <div className="fallback-actions">
              <Link className="button" href="/go/livejasmin" prefetch={false}>
                Guarda le opzioni live
              </Link>
              <Link className="button-secondary" href="/go/signup" prefetch={false}>
                Apri accesso partner
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
