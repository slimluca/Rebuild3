import { RicercheCardGrid } from "@/components/RicercheCardGrid";

const cards = [
  {
    href: "/ricerche/chat-webcam-gratis",
    title: "Chat webcam gratis",
    copy: "Anteprime live, limiti e registrazione spiegati senza promesse eccessive."
  },
  {
    href: "/ricerche/chat-webcam-live",
    title: "Chat webcam live",
    copy: "Come valutare piattaforme cam, profili e privacy."
  },
  {
    href: "/ricerche/videochat-adulti",
    title: "Videochat adulti",
    copy: "Scelta discreta tra anteprime, mobile e funzioni private."
  },
  {
    href: "/ricerche/livejasmin-alternative-italia",
    title: "Alternative LiveJasmin",
    copy: "Criteri italiani per confrontare altri siti webcam."
  },
  {
    href: "/ricerche/sesso-chat-webcam",
    title: "Sesso chat webcam",
    copy: "Ricerca adulta trattata con tono professionale e discreto."
  }
];

export function RicerchePreviewSection() {
  return (
    <RicercheCardGrid
      title="Ricerche più cercate"
      copy="Pagine rapide per intercettare ricerche italiane su chat webcam, videochat adulti, mobile e accesso live."
      cards={[{ href: "/ricerche", title: "Tutte le ricerche", copy: "Hub delle ricerche chat webcam più utili." }, ...cards]}
    />
  );
}
