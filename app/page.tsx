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
import { RecommendedPaths } from "@/components/RecommendedPaths";
import { RicerchePreviewSection } from "@/components/RicerchePreviewSection";
import { TrustSection } from "@/components/TrustSection";
import { recommendedPathGroups } from "@/lib/recommended-paths";
import { webPageSchema } from "@/lib/schema";

const guidePrincipali = [
  {
    href: "/guida",
    title: "Guida chat webcam",
    copy: "Hub educativo per sicurezza, scelta piattaforme, prezzi, mobile e privacy."
  },
  {
    href: "/guida/chat-webcam-sicura",
    title: "Chat webcam sicura",
    copy: "Controlli concreti su privacy, account, pagamenti e browser prima della registrazione."
  },
  {
    href: "/guida/come-scegliere-un-sito-webcam",
    title: "Come scegliere un sito webcam",
    copy: "Metodo pratico per valutare anteprime, costi, modelli verificati e accesso mobile."
  },
  {
    href: "/guida/prezzi-chat-webcam",
    title: "Prezzi chat webcam",
    copy: "Crediti, chat private e anteprime spiegati senza cifre inventate."
  }
];

const decisioniSicurezza = [
  {
    href: "/decisione/costi-chat-webcam",
    title: "Costi chat webcam",
    copy: "Pagina decisionale per capire crediti, private, anteprime e controlli prima di spendere."
  },
  {
    href: "/decisione/prezzi-livejasmin",
    title: "Prezzi LiveJasmin",
    copy: "Guida italiana su costi, crediti e passaggi da verificare alla fonte."
  },
  {
    href: "/decisione/chat-webcam-privacy",
    title: "Privacy chat webcam",
    copy: "Account, browser, mobile, pagamenti e discrezione prima dell'accesso."
  },
  {
    href: "/decisione/chat-webcam-pagamenti",
    title: "Pagamenti chat webcam",
    copy: "Metodi, crediti, conferme e limiti da controllare prima di inserire dati."
  },
  {
    href: "/decisione/livejasmin-italia-recensione-guida",
    title: "LiveJasmin Italia",
    copy: "Guida decisionale senza voti, recensioni finte o promesse assolute."
  },
  {
    href: "/diventa-modella-webcam",
    title: "Diventa modella webcam",
    copy: "Guida discreta per adulti che valutano il lavoro webcam online da casa."
  }
];

const domandeFiducia = [
  {
    href: "/domande/le-chat-webcam-sono-gratis",
    title: "Le chat webcam sono gratis?",
    copy: "Risposta chiara su anteprime, limiti, registrazione e costi possibili."
  },
  {
    href: "/domande/serve-registrazione-per-vedere-webcam",
    title: "Serve registrazione?",
    copy: "Cosa puoi vedere prima dell'account e quando l'iscrizione diventa necessaria."
  },
  {
    href: "/domande/serve-carta-di-credito-per-chat-webcam",
    title: "Serve carta di credito?",
    copy: "Controlli su anteprime, crediti e pagamenti prima di inserire dati."
  },
  {
    href: "/quiz/chat-gratis-o-chat-privata",
    title: "Quiz gratis o privata",
    copy: "Percorso interattivo locale, senza raccolta dati, per scegliere con più criterio."
  }
];

const trasparenzaFiducia = [
  {
    href: "/chi-siamo",
    title: "Chi siamo",
    copy: "Ruolo editoriale, limiti del sito e criteri senza classifiche inventate."
  },
  {
    href: "/contatti",
    title: "Contatti",
    copy: "Pagina di contatto con modulo informativo e senza email visibili."
  },
  {
    href: "/politica-editoriale",
    title: "Politica editoriale",
    copy: "Standard su tono discreto, nessuna recensione falsa e trasparenza affiliate."
  },
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
    copy: "Informazioni su dati tecnici, form, redirect interni e navigazione."
  }
];

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
      <RecommendedPaths
        title="Guide principali"
        copy="Pagine chiave per iniziare: sicurezza, scelta del sito, prezzi e criteri pratici prima della registrazione."
        cards={guidePrincipali}
      />
      <RecommendedPaths
        title="Decisioni e sicurezza"
        copy="Percorsi buyer-intent da leggere prima di account, crediti, pagamenti, LiveJasmin o lavoro webcam."
        cards={decisioniSicurezza}
      />
      <RecommendedPaths
        title="Domande rapide prima di entrare"
        copy="Risposte e quiz interni per chiarire gratis, registrazione, carta di credito e chat privata."
        cards={domandeFiducia}
      />
      <RecommendedPaths
        title="Trasparenza e fiducia"
        copy="Pagine editoriali e legali che spiegano chi siamo, come lavoriamo e come trattiamo privacy e contatti."
        cards={trasparenzaFiducia}
      />
      <QuickPathCards />
      <RecommendedPaths
        title="Percorsi principali"
        copy="Le sezioni più importanti per Google e per chi deve decidere: guide, confronti, domande, quiz e pagine buyer-intent."
        cards={recommendedPathGroups.home}
      />
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
