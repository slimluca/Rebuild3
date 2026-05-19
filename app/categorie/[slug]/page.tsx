import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoriePageLayout } from "@/components/CategoriePageLayout";
import { categoriePages, getCategoriePage } from "@/lib/categorie-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return categoriePages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCategoriePage(slug);

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

export default async function CategorieChildPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getCategoriePage(slug);

  if (!page) {
    notFound();
  }

  return <CategoriePageLayout page={page} />;
}
