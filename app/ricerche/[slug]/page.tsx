import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RicerchePageLayout } from "@/components/RicerchePageLayout";
import { getRicercaPage, ricerchePages } from "@/lib/ricerche-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return ricerchePages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getRicercaPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: page.path
    },
    openGraph: {
      title: `${page.metaTitle} | SessoChat.net`,
      description: page.description,
      url: `https://sessochat.net${page.path}`
    },
    twitter: {
      title: `${page.metaTitle} | SessoChat.net`,
      description: page.description
    }
  };
}

export default async function RicercaChildPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getRicercaPage(slug);

  if (!page) {
    notFound();
  }

  return <RicerchePageLayout page={page} />;
}
