export const siteConfig = {
  name: "SessoChat.net",
  domain: "sessochat.net",
  url: "https://sessochat.net",
  tagline: "Guida italiana alle chat webcam live",
  description:
    "Guida italiana per confrontare chat webcam live, modelli online, chat private, opzioni mobile, privacy e accesso prima della registrazione.",
  publicPages: [
    { path: "/", label: "Home" },
    { path: "/chi-siamo", label: "Chi siamo" },
    { path: "/contatti", label: "Contatti" },
    { path: "/politica-editoriale", label: "Politica editoriale" },
    { path: "/privacy-policy", label: "Privacy Policy" },
    { path: "/termini-di-servizio", label: "Termini di servizio" },
    { path: "/risorse", label: "Risorse" },
    { path: "/mappa-del-sito", label: "Mappa del sito" }
  ]
} as const;

export function canonicalUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath === "/" ? "/" : cleanPath}`;
}
