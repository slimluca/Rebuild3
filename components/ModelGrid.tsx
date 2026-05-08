import Link from "next/link";
import { ModelCard } from "@/components/ModelCard";
import { getLiveModels } from "@/lib/livejasmin";

export async function ModelGrid() {
  const feed = await getLiveModels(8);

  return (
    <section className="section" id="modelli-live">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Modelli live</p>
            <h2>Anteprime webcam disponibili dal feed partner</h2>
            <p className="section-copy">
              Questa area mostra solo dati reali quando il collegamento LiveJasmin è configurato.
              Non vengono inventati nomi, stati, valutazioni o conteggi.
            </p>
          </div>
          <Link className="button-secondary" href="/go/livejasmin" prefetch={false}>
            Apri LiveJasmin
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
                Il feed dei modelli non è configurato o non restituisce profili in questo momento.
                Puoi comunque entrare nella piattaforma partner tramite il percorso interno sicuro.
              </p>
            </div>
            <Link className="button" href="/go/livejasmin" prefetch={false}>
              Vai alla piattaforma
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
