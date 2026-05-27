import { QuizCardGrid } from "@/components/QuizCardGrid";

const cards = [
  {
    href: "/quiz/che-chat-webcam-fa-per-te",
    title: "Che chat webcam fa per te?",
    copy: "Quiz generale per orientarti tra anteprime, privacy, mobile e chat private."
  },
  {
    href: "/quiz/chat-gratis-o-chat-privata",
    title: "Gratis o privata",
    copy: "Capisci se partire dalle anteprime o approfondire costi e private."
  },
  {
    href: "/quiz/quiz-privacy-chat-webcam",
    title: "Quiz privacy",
    copy: "Controlla preparazione su account, browser, pagamenti e mobile."
  },
  {
    href: "/quiz/livejasmin-o-alternative",
    title: "LiveJasmin o alternative",
    copy: "Scegli se partire da LiveJasmin o confrontare altre opzioni."
  }
];

export function QuizPreviewSection() {
  return (
    <QuizCardGrid
      title="Trova il percorso giusto"
      copy="Quiz rapidi, discreti e senza raccolta dati per scegliere quali guide leggere prima."
      cards={[{ href: "/quiz", title: "Tutti i quiz", copy: "Hub dei quiz chat webcam." }, ...cards]}
    />
  );
}
