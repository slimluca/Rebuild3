import { normalizePublicPath } from "@/lib/valid-public-paths";

const legacyRedirectMap = new Map<string, string>([
  ["/latina", "/categorie/modelli-webcam-latine"],
  ["/latinas", "/categorie/modelli-webcam-latine"],
  ["/mature", "/categorie/modelli-webcam-mature"],
  ["/asian", "/categorie/modelli-webcam-asiatiche"],
  ["/asiatiche", "/categorie/modelli-webcam-asiatiche"],
  ["/bionde", "/categorie/modelli-webcam-bionde"],
  ["/blonde", "/categorie/modelli-webcam-bionde"],
  ["/brune", "/categorie/modelli-webcam-brune"],
  ["/brunette", "/categorie/modelli-webcam-brune"],
  ["/trans", "/categorie/modelli-webcam-live"],
  ["/teens", "/categorie/modelli-webcam-live"],
  ["/sex-chat-russian-teen", "/categorie/modelli-webcam-live"],
  ["/joss-caprice-chaturbate-live-cam", "/categorie/modelli-webcam-live"],
  ["/joss-caprice-chaturbate-live-cam-model", "/categorie/modelli-webcam-live"],
  ["/chat-webcam", "/guida"],
  ["/webcam-chat", "/guida"],
  ["/sesso-chat", "/ricerche/sesso-chat-webcam"],
  ["/sesso-chat-online", "/argomenti/videochat-adulti-online"],
  ["/videochat-adulti", "/argomenti/videochat-adulti-online"],
  ["/siti-webcam", "/siti"],
  ["/siti-webcam-live", "/siti/siti-webcam-live"],
  ["/migliori-siti-webcam", "/confronti/migliori-siti-webcam-live"],
  ["/migliori-siti-webcam-live", "/confronti/migliori-siti-webcam-live"],
  ["/alternative-livejasmin", "/confronti/alternative-livejasmin"],
  ["/livejasmin", "/decisione/livejasmin-italia-recensione-guida"],
  ["/livejasmin-italia", "/decisione/livejasmin-italia-recensione-guida"],
  ["/prezzi-livejasmin", "/decisione/prezzi-livejasmin"],
  ["/prezzi-chat-webcam", "/guida/prezzi-chat-webcam"],
  ["/costi-chat-webcam", "/decisione/costi-chat-webcam"],
  ["/chat-webcam-sicura", "/guida/chat-webcam-sicura"],
  ["/privacy-chat-webcam", "/decisione/chat-webcam-privacy"],
  ["/chat-webcam-privacy", "/decisione/chat-webcam-privacy"],
  ["/pagamenti-chat-webcam", "/decisione/chat-webcam-pagamenti"],
  ["/chat-webcam-pagamenti", "/decisione/chat-webcam-pagamenti"],
  ["/chat-webcam-gratis", "/ricerche/chat-webcam-gratis"],
  ["/chat-webcam-live", "/ricerche/chat-webcam-live"],
  ["/webcam-senza-registrazione", "/argomenti/chat-webcam-senza-registrazione"],
  ["/chat-webcam-senza-registrazione", "/argomenti/chat-webcam-senza-registrazione"],
  ["/chat-webcam-senza-carta-di-credito", "/argomenti/chat-webcam-senza-carta-di-credito"],
  ["/webcam-mobile", "/categorie/modelli-webcam-mobile"],
  ["/modelli-webcam", "/categorie/modelli-webcam-live"],
  ["/modelli-webcam-live", "/categorie/modelli-webcam-live"],
  ["/modelli-webcam-online", "/categorie/modelli-webcam-online"],
  ["/modelli-webcam-hd", "/categorie/modelli-webcam-hd"]
]);

function keywordRedirect(pathname: string, fallback: string) {
  const normalizedPath = normalizePublicPath(pathname);
  const compact = normalizedPath.replace(/^\/(?:category|tag)\//, "/");

  if (/(prezzi-livejasmin|crediti-livejasmin|costi-livejasmin)/.test(compact)) return "/decisione/prezzi-livejasmin";
  if (/(livejasmin|jasmin)/.test(compact)) return "/decisione/livejasmin-italia-recensione-guida";
  if (/(prezzi|costi|crediti|pagamenti)/.test(compact)) return "/decisione/costi-chat-webcam";
  if (/(privacy|sicura|sicurezza|affidabili)/.test(compact)) return "/guida/chat-webcam-sicura";
  if (/(gratis|gratuita|anteprima)/.test(compact)) return "/ricerche/chat-webcam-gratis";
  if (/(registrazione|senza-account)/.test(compact)) return "/argomenti/chat-webcam-senza-registrazione";
  if (/(carta|pagamento)/.test(compact)) return "/argomenti/chat-webcam-senza-carta-di-credito";
  if (/(mobile|cellulare|smartphone)/.test(compact)) return "/categorie/modelli-webcam-mobile";
  if (/(latina|latinas|latine)/.test(compact)) return "/categorie/modelli-webcam-latine";
  if (/(mature|matura)/.test(compact)) return "/categorie/modelli-webcam-mature";
  if (/(asian|asiatiche|asiatica)/.test(compact)) return "/categorie/modelli-webcam-asiatiche";
  if (/(bionde|blonde)/.test(compact)) return "/categorie/modelli-webcam-bionde";
  if (/(brune|brunette)/.test(compact)) return "/categorie/modelli-webcam-brune";
  if (/(modelli|model|webcam-live|cam-live)/.test(compact)) return "/categorie/modelli-webcam-live";
  if (/(siti-webcam|piattaforme)/.test(compact)) return "/siti";
  if (/(confronti|alternative|migliori)/.test(compact)) return "/confronti/migliori-siti-webcam-live";
  if (/(sesso-chat|videochat)/.test(compact)) return "/ricerche/sesso-chat-webcam";

  return fallback;
}

export function getLegacyRedirectPath(pathname: string) {
  const normalizedPath = normalizePublicPath(pathname);
  const directRedirect = legacyRedirectMap.get(normalizedPath);
  if (directRedirect) return directRedirect;

  if (/^\/(?:category|tag)\//.test(normalizedPath)) {
    return keywordRedirect(normalizedPath, "/risorse");
  }

  if (/^\/20\d{2}\/\d{2}\//.test(normalizedPath)) {
    return keywordRedirect(normalizedPath, "/guida");
  }

  if (/^\/page\/\d+$/.test(normalizedPath)) {
    return "/mappa-del-sito";
  }

  return null;
}
