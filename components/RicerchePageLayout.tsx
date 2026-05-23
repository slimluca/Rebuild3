import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { QuickAnswerPanel } from "@/components/QuickAnswerPanel";
import { RicercheCardGrid } from "@/components/RicercheCardGrid";
import { RicercheHero } from "@/components/RicercheHero";
import { TrafficIntentPanel } from "@/components/TrafficIntentPanel";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import type { RicercaPage } from "@/lib/ricerche-pages";

type RicerchePageLayoutProps = {
  page: RicercaPage;
};

export function RicerchePageLayout({ page }: RicerchePageLayoutProps) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(page.path, page.h1, page.description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Ricerche", path: "/ricerche" },
            { name: page.navTitle, path: page.path }
          ]),
          faqPageSchema(page.faq)
        ]}
      />
      <RicercheHero kicker={page.kicker} title={page.h1} intro={page.intro} />
      <ModelGrid />
      <QuickAnswerPanel answer={page.quickAnswer} />
      <TrafficIntentPanel title={page.guidanceTitle} items={page.guidance} noteTitle={page.noteTitle} note={page.note} />
      <RicercheCardGrid
        title="Percorsi collegati"
        copy="Approfondimenti già pubblicati per passare dalla ricerca rapida a guide più complete."
        cards={page.relatedLinks}
      />
      <FAQSection items={page.faq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Accesso live</p>
            <h2>{page.ctaTitle}</h2>
            <p>{page.ctaCopy}</p>
            <div className="hero-actions">
              <Link className="button" href={page.ctaHref} prefetch={false}>
                {page.ctaLabel}
              </Link>
              <Link className="button-secondary" href="/ricerche">
                Torna alle ricerche
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
