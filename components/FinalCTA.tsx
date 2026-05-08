import Link from "next/link";

type FinalCTAProps = {
  variant?: "models" | "final";
};

export function FinalCTA({ variant = "final" }: FinalCTAProps) {
  const isModels = variant === "models";

  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <p className="section-kicker">{isModels ? "Scoperta modelli" : "Prossimo passo"}</p>
          <h2>
            {isModels
              ? "Vuoi esplorare modelli webcam live senza passare da link esterni in pagina?"
              : "Confronta, leggi con calma e scegli solo quando hai le informazioni giuste."}
          </h2>
          <p>
            {isModels
              ? "Il percorso interno porta alla piattaforma partner mantenendo pulita la struttura editoriale di SessoChat.net."
              : "SessoChat.net nasce per aiutare adulti italiani a orientarsi tra chat cam live, anteprime, privacy e pagamenti senza recensioni inventate."}
          </p>
          <div className="hero-actions">
            <Link className="button" href={isModels ? "/go/random" : "/go/signup"} prefetch={false}>
              {isModels ? "Scopri un profilo" : "Entra ora"}
            </Link>
            <Link className="button-secondary" href="/risorse">
              Vedi risorse
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
