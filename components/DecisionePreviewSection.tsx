import { DecisioneCardGrid } from "@/components/DecisioneCardGrid";

const cards = [
  {
    href: "/decisione/costi-chat-webcam",
    title: "Costi chat webcam",
    copy: "Crediti, private e anteprime da controllare prima di spendere."
  },
  {
    href: "/decisione/chat-webcam-privacy",
    title: "Privacy chat webcam",
    copy: "Discrezione, account, pagamenti e accesso mobile."
  },
  {
    href: "/decisione/livejasmin-italia-recensione-guida",
    title: "LiveJasmin Italia",
    copy: "Guida decisionale senza voti o recensioni inventate."
  },
  {
    href: "/decisione/chat-webcam-sicura",
    title: "Chat webcam sicura",
    copy: "Segnali pratici prima della registrazione."
  },
  {
    href: "/decisione/siti-webcam-affidabili",
    title: "Siti affidabili",
    copy: "Come valutare trasparenza, privacy e pagamenti."
  }
];

export function DecisionePreviewSection() {
  return (
    <DecisioneCardGrid
      title="Prima di registrarti"
      copy="Guide alla scelta per utenti vicini alla decisione: costi, privacy, LiveJasmin, crediti e affidabilità."
      cards={[{ href: "/decisione", title: "Tutte le guide decisione", copy: "Hub buyer-intent per scegliere con più controllo." }, ...cards]}
    />
  );
}
