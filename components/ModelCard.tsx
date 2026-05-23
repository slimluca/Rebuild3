import Link from "next/link";
import type { LiveModel } from "@/types/model";

type ModelCardProps = {
  model: LiveModel;
};

export function ModelCard({ model }: ModelCardProps) {
  const label = model.displayName ?? model.username ?? "Profilo live";
  const targetId = model.username ?? model.id;
  const safeTags = model.tags?.slice(0, 2) ?? [];

  return (
    <article className="model-card">
      <div className="model-media">
        {model.imageUrl ? (
          // Image hosts come from the live model source, so this stays as a plain HTML image.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={model.imageUrl} alt={`Anteprima webcam ${label}`} loading="lazy" />
        ) : (
          <div className="model-placeholder">Profilo live</div>
        )}
      </div>
      <div className="model-body">
        <h3 className="model-title">{label}</h3>
        {safeTags.length > 0 ? (
          <p className="model-meta">{safeTags.join(" - ")}</p>
        ) : null}
        <Link className="button-secondary" href={`/go/model/${encodeURIComponent(targetId)}`} prefetch={false}>
          Apri profilo
        </Link>
      </div>
    </article>
  );
}
