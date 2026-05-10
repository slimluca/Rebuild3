import Link from "next/link";
import type { LiveModel } from "@/types/model";

type ModelCardProps = {
  model: LiveModel;
};

export function ModelCard({ model }: ModelCardProps) {
  const label = model.displayName ?? model.username ?? "Profilo dal feed partner";
  const targetId = model.username ?? model.id;

  return (
    <article className="model-card">
      <div className="model-media">
        {model.imageUrl ? (
          // Feed image hosts can vary by partner endpoint, so this stays as a plain HTML image.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={model.imageUrl} alt={`Anteprima webcam ${label}`} loading="lazy" />
        ) : (
          <div className="model-placeholder">Immagine non disponibile dal feed</div>
        )}
      </div>
      <div className="model-body">
        <h3 className="model-title">{label}</h3>
        <p className="model-meta">
          Scheda dal feed partner. I dettagli disponibili possono variare in base alla piattaforma.
        </p>
        {model.tags && model.tags.length > 0 ? (
          <p className="model-meta">{model.tags.join(" - ")}</p>
        ) : null}
        <Link className="button-secondary" href={`/go/model/${encodeURIComponent(targetId)}`} prefetch={false}>
          Apri profilo
        </Link>
      </div>
    </article>
  );
}
