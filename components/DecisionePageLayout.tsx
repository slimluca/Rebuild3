import Link from "next/link";
import { BuyerIntentPanel } from "@/components/BuyerIntentPanel";
import { CostPrivacyPanel } from "@/components/CostPrivacyPanel";
import { DecisionChecklist } from "@/components/DecisionChecklist";
import { DecisioneCardGrid } from "@/components/DecisioneCardGrid";
import { DecisioneHero } from "@/components/DecisioneHero";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { QuickAnswerPanel } from "@/components/QuickAnswerPanel";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import type { DecisionePage } from "@/lib/decisione-pages";

type DecisionePageLayoutProps = {
  page: DecisionePage;
};

export function DecisionePageLayout({ page }: DecisionePageLayoutProps) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(page.path, page.h1, page.description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Decisione", path: "/decisione" },
            { name: page.navTitle, path: page.path }
          ]),
          faqPageSchema(page.faq)
        ]}
      />
      <DecisioneHero kicker={page.kicker} title={page.h1} intro={page.intro} />
      <ModelGrid />
      <QuickAnswerPanel answer={page.quickAnswer} />
      <BuyerIntentPanel title={page.buyerTitle} copy={page.buyerCopy} />
      <DecisionChecklist title={page.checklistTitle} items={page.checklist} />
      <CostPrivacyPanel title={page.noteTitle} note={page.note} />
      <DecisioneCardGrid
        title="Percorsi collegati"
        copy="Guide e pagine già pubblicate per approfondire costi, privacy, sicurezza, modelli e alternative."
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
              <Link className="button-secondary" href="/decisione">
                Torna alle guide decisione
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
