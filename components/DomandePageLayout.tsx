import Link from "next/link";
import { DecisionChecklist } from "@/components/DecisionChecklist";
import { DirectAnswerPanel } from "@/components/DirectAnswerPanel";
import { DomandeCardGrid } from "@/components/DomandeCardGrid";
import { DomandeHero } from "@/components/DomandeHero";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { RelatedQuestionPanel } from "@/components/RelatedQuestionPanel";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import type { DomandaPage } from "@/lib/domande-pages";

type DomandePageLayoutProps = {
  page: DomandaPage;
};

export function DomandePageLayout({ page }: DomandePageLayoutProps) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(page.path, page.h1, page.description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Domande", path: "/domande" },
            { name: page.navTitle, path: page.path }
          ]),
          faqPageSchema(page.faq)
        ]}
      />
      <DomandeHero kicker={page.kicker} title={page.h1} intro={page.intro} />
      <ModelGrid />
      <DirectAnswerPanel answer={page.directAnswer} />
      <section className="section">
        <div className="container">
          <div className="quick-answer-panel">
            <p className="section-kicker">Spiegazione pratica</p>
            <h2>{page.explanationTitle}</h2>
            <p>{page.explanation}</p>
          </div>
        </div>
      </section>
      <DecisionChecklist title={page.stepsTitle} items={page.steps} />
      <DomandeCardGrid
        title="Approfondimenti collegati"
        copy="Pagine interne per passare dalla risposta rapida a una scelta più completa."
        cards={page.relatedLinks}
      />
      <RelatedQuestionPanel questions={page.relatedQuestions} />
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
              <Link className="button-secondary" href="/domande">
                Torna alle domande
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
