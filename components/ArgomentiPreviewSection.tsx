import { ArgomentiCardGrid } from "@/components/ArgomentiCardGrid";

const cards = [
  {
    href: "/argomenti/chat-webcam-senza-registrazione",
    title: "Chat senza registrazione",
    copy: "Accesso iniziale, limiti realistici e privacy prima dell'account."
  },
  {
    href: "/argomenti/chat-webcam-senza-carta-di-credito",
    title: "Senza carta di credito",
    copy: "Anteprime, crediti e pagamenti da controllare prima di entrare."
  },
  {
    href: "/argomenti/siti-webcam-sicuri",
    title: "Siti webcam sicuri",
    copy: "Privacy, affidabilità e segnali pratici da valutare."
  },
  {
    href: "/argomenti/livejasmin-italia",
    title: "LiveJasmin Italia",
    copy: "Guida rapida per utenti italiani che cercano LiveJasmin."
  },
  {
    href: "/argomenti/sesso-chat-online",
    title: "Sesso chat online",
    copy: "Risposta discreta a una ricerca ampia sulle webcam live."
  }
];

export function ArgomentiPreviewSection() {
  return (
    <ArgomentiCardGrid
      title="Argomenti più cercati"
      copy="Landing page rapide per ricerche italiane ad alto intento, con modelli live subito visibili e link verso guide più profonde."
      cards={[{ href: "/argomenti", title: "Tutti gli argomenti", copy: "Hub delle ricerche più utili su chat webcam e videochat adulti." }, ...cards]}
    />
  );
}
