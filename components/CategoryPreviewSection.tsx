import { CategorieCardGrid } from "@/components/CategorieCardGrid";

const categoryPreviewCards = [
  {
    href: "/categorie/modelli-webcam-live",
    title: "Modelli webcam live",
    copy: "Profili online, anteprime e disponibilita live da valutare con criterio."
  },
  {
    href: "/categorie/modelli-webcam-verificati",
    title: "Modelli verificati",
    copy: "Per capire perche la verifica puo essere un segnale di trasparenza."
  },
  {
    href: "/categorie/modelli-webcam-mobile",
    title: "Webcam mobile",
    copy: "Scoperta modelli e chat cam live da smartphone."
  },
  {
    href: "/categorie/modelli-webcam-online",
    title: "Modelli online",
    copy: "Disponibilita live, filtri e profili da controllare sulla piattaforma."
  },
  {
    href: "/categorie/modelli-webcam-hd",
    title: "Modelli webcam HD",
    copy: "Qualita video, anteprime, connessione e navigazione mobile."
  }
];

export function CategoryPreviewSection() {
  return (
    <CategorieCardGrid
      title="Categorie modelli webcam"
      copy="Percorsi di scoperta pensati per esplorare modelli live senza inventare stati, classifiche o attributi personali."
      cards={categoryPreviewCards}
    />
  );
}
