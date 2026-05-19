import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConfrontiPageLayout } from "@/components/ConfrontiPageLayout";
import { confrontiPages, getConfrontiPage } from "@/lib/confronti-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return confrontiPages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getConfrontiPage(slug);

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

export default async function ConfrontiChildPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getConfrontiPage(slug);

  if (!page) {
    notFound();
  }

  return <ConfrontiPageLayout page={page} />;
}
