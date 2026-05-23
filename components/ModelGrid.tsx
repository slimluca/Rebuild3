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
              Esplora profili live e scegli con calma prima della registrazione. Le schede mostrano
              solo informazioni reali, senza valutazioni o conteggi inventati.
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
          <div className="live-empty-panel">
            <div>
              <h3>Anteprime live momentaneamente non visibili</h3>
              <p>
                Puoi comunque aprire l&apos;accesso live e valutare le opzioni disponibili prima
                della registrazione.
              </p>
            </div>
            <div className="live-empty-actions">
              <Link className="button" href="/go/livejasmin" prefetch={false}>
                Guarda le opzioni live
              </Link>
              <Link className="button-secondary" href="/go/signup" prefetch={false}>
                Entra in modo sicuro
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


