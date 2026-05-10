import Link from "next/link";
import { EditorialChecklist } from "@/components/EditorialChecklist";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { SitiCardGrid } from "@/components/SitiCardGrid";
import { SitiHero } from "@/components/SitiHero";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import { getRelatedSitiPages, type SitiPage } from "@/lib/siti-pages";

type SitiPageLayoutProps = {
  page: SitiPage;
};

export function SitiPageLayout({ page }: SitiPageLayoutProps) {
  const related = getRelatedSitiPages(page.related).map((relatedPage) => ({
    href: relatedPage.path,
    title: relatedPage.navTitle,
    copy: relatedPage.description
  }));

  return (
    <>
      <JsonLd
        data={[
          webPageSchema(page.path, page.h1, page.description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Siti webcam", path: "/siti" },
            { name: page.navTitle, path: page.path }
          ]),
          faqPageSchema(page.faq)
        ]}
      />
      <SitiHero kicker={page.kicker} title={page.h1} intro={page.intro} />
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
      <SitiCardGrid title="Guide collegate" copy="Approfondisci solo pagine gia disponibili nella sezione siti." cards={related} />
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
              <Link className="button-secondary" href="/siti">
                Torna ai siti webcam
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
