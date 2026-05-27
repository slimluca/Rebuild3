import { DomandeCardGrid } from "@/components/DomandeCardGrid";

const cards = [
  {
    href: "/domande/le-chat-webcam-sono-gratis",
    title: "Le chat webcam sono gratis?",
    copy: "Anteprime, limiti e costi da capire prima di entrare."
  },
  {
    href: "/domande/serve-registrazione-per-vedere-webcam",
    title: "Serve registrazione?",
    copy: "Quando puoi vedere webcam live prima dell'account."
  },
  {
    href: "/domande/serve-carta-di-credito-per-chat-webcam",
    title: "Serve carta di credito?",
    copy: "Pagamenti, crediti e controlli prima dei dati."
  },
  {
    href: "/domande/livejasmin-e-sicuro",
    title: "LiveJasmin è sicuro?",
    copy: "Privacy, pagamenti e segnali da valutare."
  },
  {
    href: "/domande/come-proteggere-la-privacy-in-chat-webcam",
    title: "Come proteggere la privacy?",
    copy: "Account, mobile, browser e dati personali."
  }
];

export function DomandePreviewSection() {
  return (
    <DomandeCardGrid
      title="Domande frequenti"
      copy="Risposte rapide per utenti italiani su costi, registrazione, carta, privacy, LiveJasmin e chat private."
      cards={[{ href: "/domande", title: "Tutte le domande", copy: "Hub Q&A per scegliere con più controllo." }, ...cards]}
    />
  );
}
