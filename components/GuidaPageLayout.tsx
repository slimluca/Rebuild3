import Link from "next/link";
import { EditorialChecklist } from "@/components/EditorialChecklist";
import { FAQSection } from "@/components/FAQSection";
import { GuidaCardGrid } from "@/components/GuidaCardGrid";
import { GuidaHero } from "@/components/GuidaHero";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import {
  getRelatedGuidaPages,
  getRelatedSitiSlugsForGuida,
  type GuidaPage
} from "@/lib/guida-pages";
import { getRelatedSitiPages } from "@/lib/siti-pages";

type GuidaPageLayoutProps = {
  page: GuidaPage;
};

export function GuidaPageLayout({ page }: GuidaPageLayoutProps) {
  const related = getRelatedGuidaPages(page.related).map((relatedPage) => ({
    href: relatedPage.path,
    title: relatedPage.navTitle,
    copy: relatedPage.description
  }));
  const relatedSiti = getRelatedSitiPages(getRelatedSitiSlugsForGuida(page.slug)).map((sitiPage) => ({
    href: sitiPage.path,
    title: sitiPage.navTitle,
    copy: sitiPage.description
  }));

  return (
    <>
      <JsonLd
        data={[
          webPageSchema(page.path, page.h1, page.description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guida", path: "/guida" },
            { name: page.navTitle, path: page.path }
          ]),
          faqPageSchema(page.faq)
        ]}
      />
      <GuidaHero kicker={page.kicker} title={page.h1} intro={page.intro} />
      <ModelGrid />
      <section className="section">
        <div className="container editorial-stack">
          {page.sections.map((section) => (
            <article className="editorial-panel" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
      <EditorialChecklist title={page.checklistTitle} intro={page.checklistIntro} items={page.checklist} />
      <GuidaCardGrid
        id="guida-collegate-title"
        title="Guide collegate"
        copy="Approfondisci solo pagine già disponibili nella sezione guida."
        cards={related}
      />
      <GuidaCardGrid
        id="siti-collegati-title"
        title="Percorsi siti collegati"
        copy="Consulta anche le pagine /siti già pubblicate per leggere lo stesso tema da un punto di vista pratico."
        cards={relatedSiti}
      />
      <section className="section">
        <div className="container split-section">
          <article className="rich-panel">
            <p className="section-kicker">Collegamenti utili</p>
            <h2>Altre sezioni da consultare</h2>
            <p>
              Per completare la valutazione puoi confrontare questa guida con la sezione siti,
              dove i percorsi sono organizzati per esigenza pratica.
            </p>
            <div className="hero-actions">
              <Link className="button-secondary" href="/siti">
                Vai ai siti webcam
              </Link>
              <Link className="button-secondary" href="/risorse">
                Apri risorse
              </Link>
            </div>
          </article>
          <article className="rich-panel">
            <p className="section-kicker">Nota editoriale</p>
            <h2>Informazioni senza promesse inventate</h2>
            <p>
              Le guide spiegano criteri e controlli utili, ma le condizioni operative restano quelle
              della piattaforma partner. Prezzi, disponibilità e funzioni possono variare.
            </p>
          </article>
        </div>
      </section>
      <FAQSection items={page.faq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Accesso partner</p>
            <h2>{page.ctaTitle}</h2>
            <p>{page.ctaCopy}</p>
            <div className="hero-actions">
              <Link className="button" href={page.ctaHref} prefetch={false}>
                {page.ctaLabel}
              </Link>
              <Link className="button-secondary" href="/guida">
                Torna alla guida
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
