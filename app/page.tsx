import type { Metadata } from "next";
import { ArgomentiPreviewSection } from "@/components/ArgomentiPreviewSection";
import { CategoryPreviewSection } from "@/components/CategoryPreviewSection";
import { ComparisonPreviewSection } from "@/components/ComparisonPreviewSection";
import { DecisionePreviewSection } from "@/components/DecisionePreviewSection";
import { DomandePreviewSection } from "@/components/DomandePreviewSection";
import { FinalCTA } from "@/components/FinalCTA";
import { GuidePreviewSection } from "@/components/GuidePreviewSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { QuickPathCards } from "@/components/QuickPathCards";
import { QuizPreviewSection } from "@/components/QuizPreviewSection";
import { RicerchePreviewSection } from "@/components/RicerchePreviewSection";
import { TrustSection } from "@/components/TrustSection";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SessoChat.net | Guida Italiana alle Chat Webcam Live",
  description:
    "Guida italiana per confrontare chat webcam live, modelli online, chat private, opzioni mobile, privacy e accesso prima della registrazione.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "SessoChat.net | Guida Italiana alle Chat Webcam Live",
    description:
      "Guida italiana per confrontare chat webcam live, modelli online, chat private, opzioni mobile, privacy e accesso prima della registrazione.",
    url: "https://sessochat.net/"
  },
  twitter: {
    title: "SessoChat.net | Guida Italiana alle Chat Webcam Live",
    description:
      "Guida italiana per confrontare chat webcam live, modelli online, chat private, opzioni mobile, privacy e accesso prima della registrazione."
  }
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/",
          "SessoChat.net | Guida Italiana alle Chat Webcam Live",
          "Guida italiana per confrontare chat webcam live, modelli online, chat private, opzioni mobile, privacy e accesso prima della registrazione."
        )}
      />
      <Hero />
      <ModelGrid />
      <QuickPathCards />
      <TrustSection />
      <GuidePreviewSection />
      <ComparisonPreviewSection />
      <CategoryPreviewSection />
      <ArgomentiPreviewSection />
      <RicerchePreviewSection />
      <DecisionePreviewSection />
      <DomandePreviewSection />
      <QuizPreviewSection />
      <FinalCTA variant="models" />
      <FinalCTA />
    </>
  );
}
