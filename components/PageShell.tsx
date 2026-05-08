import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import type { ReactNode } from "react";

type PageShellProps = {
  path: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ path, title, description, children }: PageShellProps) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(path, title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: title, path }
          ])
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">SessoChat.net</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
      <div className="container page-grid">{children}</div>
    </>
  );
}
