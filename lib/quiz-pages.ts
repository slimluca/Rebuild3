export type QuizLink = {
  href: string;
  title: string;
  copy: string;
};

export type QuizOption = {
  label: string;
  value: string;
};

export type QuizQuestion = {
  question: string;
  options: QuizOption[];
};

export type QuizResult = {
  key: string;
  title: string;
  copy: string;
  links: QuizLink[];
  ctaHref: "/go/signup" | "/go/livejasmin";
  ctaLabel: string;
};

export type QuizPage = {
  slug: string;
  path: string;
  navTitle: string;
  h1: string;
  metaTitle: string;
  description: string;
  kicker: string;
  intro: string;
  questions: QuizQuestion[];
  results: QuizResult[];
};

const sharedResults: QuizResult[] = [
  {
    key: "free",
    title: "Percorso anteprima gratuita",
    copy: "Parti dalle anteprime e leggi bene limiti, registrazione e costi prima di usare funzioni private.",
    links: [
      { href: "/domande/le-chat-webcam-sono-gratis", title: "Le chat webcam sono gratis?", copy: "Anteprime, limiti e costi." },
      { href: "/siti/siti-cam-gratis", title: "Siti cam gratis", copy: "Guida alla scelta gratuita." },
      { href: "/ricerche/chat-webcam-gratis", title: "Chat webcam gratis", copy: "Ricerca rapida sulle anteprime." }
    ],
    ctaHref: "/go/livejasmin",
    ctaLabel: "Guarda opzioni live"
  },
  {
    key: "private",
    title: "Percorso chat privata",
    copy: "Concentrati su crediti, privacy, conferme e funzioni private prima di registrarti o spendere.",
    links: [
      { href: "/siti/siti-cam-private", title: "Siti cam private", copy: "Cosa valutare prima della chat privata." },
      { href: "/decisione/chat-webcam-private-sicure", title: "Chat private sicure", copy: "Privacy e costi da controllare." },
      { href: "/domande/quanto-costa-una-chat-privata-webcam", title: "Quanto costa una privata?", copy: "Risposta pratica sui costi." }
    ],
    ctaHref: "/go/livejasmin",
    ctaLabel: "Valuta chat private"
  },
  {
    key: "mobile",
    title: "Percorso mobile e discreto",
    copy: "Il tuo percorso ideale parte da smartphone, privacy del dispositivo, caricamento rapido e pagamenti leggibili.",
    links: [
      { href: "/siti/siti-webcam-mobile", title: "Siti webcam mobile", copy: "Chat live da smartphone." },
      { href: "/domande/posso-usare-chat-webcam-da-cellulare", title: "Chat webcam da cellulare", copy: "Domanda mobile essenziale." },
      { href: "/categorie/modelli-webcam-live", title: "Modelli webcam live", copy: "Profili live da esplorare." }
    ],
    ctaHref: "/go/signup",
    ctaLabel: "Apri da mobile"
  },
  {
    key: "privacy",
    title: "Percorso privacy prima di tutto",
    copy: "Prima di entrare, chiarisci account, browser, notifiche, pagamenti e dati salvati sul dispositivo.",
    links: [
      { href: "/decisione/chat-webcam-privacy", title: "Privacy chat webcam", copy: "Guida decisionale." },
      { href: "/domande/come-proteggere-la-privacy-in-chat-webcam", title: "Proteggere la privacy", copy: "Risposta pratica." },
      { href: "/decisione/chat-webcam-sicura", title: "Chat webcam sicura", copy: "Segnali da controllare." }
    ],
    ctaHref: "/go/signup",
    ctaLabel: "Entra in modo sicuro"
  },
  {
    key: "livejasmin",
    title: "Percorso LiveJasmin Italia",
    copy: "Valuta LiveJasmin con attenzione a profili live, crediti, privacy, mobile e alternative disponibili.",
    links: [
      { href: "/decisione/livejasmin-italia-recensione-guida", title: "LiveJasmin Italia", copy: "Guida pratica alla piattaforma." },
      { href: "/domande/livejasmin-e-sicuro", title: "LiveJasmin è sicuro?", copy: "Privacy e controlli." },
      { href: "/argomenti/livejasmin-italia", title: "LiveJasmin Italia", copy: "Approfondimento per utenti italiani." }
    ],
    ctaHref: "/go/livejasmin",
    ctaLabel: "Apri LiveJasmin"
  },
  {
    key: "alternatives",
    title: "Percorso alternative e confronti",
    copy: "Confronta piattaforme e percorsi senza cercare classifiche assolute o promesse non verificabili.",
    links: [
      { href: "/confronti/alternative-livejasmin", title: "Alternative LiveJasmin", copy: "Confronto qualitativo." },
      { href: "/ricerche/livejasmin-alternative-italia", title: "Alternative LiveJasmin Italia", copy: "Ricerca dedicata." },
      { href: "/domande/alternative-livejasmin-per-utenti-italiani", title: "Alternative per italiani", copy: "Domanda correlata." }
    ],
    ctaHref: "/go/livejasmin",
    ctaLabel: "Valuta opzioni live"
  },
  {
    key: "beginner",
    title: "Percorso principianti",
    copy: "Inizia dalle basi: registrazione, anteprime, crediti, privacy e differenza tra chat pubblica e privata.",
    links: [
      { href: "/siti/siti-webcam-per-principianti", title: "Siti per principianti", copy: "Percorso guidato." },
      { href: "/guida/consigli-per-principianti", title: "Consigli per principianti", copy: "Guida semplice." },
      { href: "/domande/differenza-tra-chat-pubblica-e-chat-privata", title: "Pubblica o privata", copy: "Differenza essenziale." }
    ],
    ctaHref: "/go/signup",
    ctaLabel: "Inizia con calma"
  }
];

const baseQuestions: QuizQuestion[] = [
  {
    question: "Qual è il tuo primo obiettivo?",
    options: [
      { label: "Vedere anteprime prima di decidere", value: "free" },
      { label: "Capire le chat private", value: "private" },
      { label: "Usare il sito da smartphone", value: "mobile" },
      { label: "Controllare privacy e sicurezza", value: "privacy" }
    ]
  },
  {
    question: "Cosa vuoi chiarire prima della registrazione?",
    options: [
      { label: "Costi e crediti", value: "private" },
      { label: "Carta e pagamenti", value: "privacy" },
      { label: "LiveJasmin e alternative", value: "livejasmin" },
      { label: "Le basi per iniziare", value: "beginner" }
    ]
  },
  {
    question: "Che tipo di percorso preferisci?",
    options: [
      { label: "Rapido e mobile", value: "mobile" },
      { label: "Prudente e discreto", value: "privacy" },
      { label: "Confrontare più opzioni", value: "alternatives" },
      { label: "Partire dalle anteprime", value: "free" }
    ]
  }
];

export const quizPages: QuizPage[] = [
  {
    slug: "che-chat-webcam-fa-per-te",
    path: "/quiz/che-chat-webcam-fa-per-te",
    navTitle: "Chat webcam per te",
    h1: "Che Chat Webcam Fa per Te?",
    metaTitle: "Che Chat Webcam Fa per Te? Quiz Rapido e Discreto",
    description:
      "Rispondi a poche domande e scopri quale percorso webcam valutare tra chat gratis, privata, mobile, privacy e piattaforme premium.",
    kicker: "Quiz decisionale",
    intro: "Un quiz breve e discreto per orientarti tra anteprime, privacy, mobile, chat privata e percorsi premium.",
    questions: baseQuestions,
    results: sharedResults
  },
  {
    slug: "chat-gratis-o-chat-privata",
    path: "/quiz/chat-gratis-o-chat-privata",
    navTitle: "Gratis o privata",
    h1: "Chat Gratis o Chat Privata: Quale Percorso Valutare?",
    metaTitle: "Chat Gratis o Chat Privata? Quiz per Scegliere Meglio",
    description:
      "Quiz italiano per capire se ti conviene esplorare anteprime gratis, chat private webcam, modelli live o guide sui costi.",
    kicker: "Gratis o privata",
    intro: "Rispondi a poche domande per capire se partire dalle anteprime o approfondire costi e chat private.",
    questions: [
      baseQuestions[0],
      {
        question: "Cosa ti interessa di più?",
        options: [
          { label: "Capire cosa si vede gratis", value: "free" },
          { label: "Capire costi e crediti", value: "private" },
          { label: "Confrontare pubblico e privato", value: "beginner" },
          { label: "Controllare privacy prima di tutto", value: "privacy" }
        ]
      },
      baseQuestions[2]
    ],
    results: sharedResults
  },
  {
    slug: "quiz-webcam-mobile",
    path: "/quiz/quiz-webcam-mobile",
    navTitle: "Quiz webcam mobile",
    h1: "Quiz Webcam Mobile: Chat Live da Smartphone",
    metaTitle: "Quiz Webcam Mobile: Sei Pronto per le Chat da Smartphone?",
    description:
      "Scopri con un quiz se una chat webcam mobile è adatta al tuo modo di navigare, considerando privacy, velocità, schermo e pagamenti.",
    kicker: "Quiz mobile",
    intro: "Un controllo rapido per capire se il tuo percorso dovrebbe partire da smartphone, privacy e pagamenti leggibili.",
    questions: [
      {
        question: "Da dove pensi di navigare più spesso?",
        options: [
          { label: "Smartphone", value: "mobile" },
          { label: "Desktop o laptop", value: "privacy" },
          { label: "Dipende dal momento", value: "beginner" },
          { label: "Prima voglio vedere anteprime", value: "free" }
        ]
      },
      baseQuestions[1],
      baseQuestions[2]
    ],
    results: sharedResults
  },
  {
    slug: "quiz-privacy-chat-webcam",
    path: "/quiz/quiz-privacy-chat-webcam",
    navTitle: "Quiz privacy",
    h1: "Quiz Privacy Chat Webcam: Controlla la Tua Preparazione",
    metaTitle: "Quiz Privacy Chat Webcam: Quanto Sei Preparato?",
    description:
      "Quiz discreto sulla privacy nelle chat webcam: browser, account, pagamenti, mobile e controlli da fare prima di entrare.",
    kicker: "Quiz privacy",
    intro: "Verifica se hai già chiari browser, account, pagamenti, notifiche e accesso mobile prima di entrare.",
    questions: [
      {
        question: "Quale controllo ti sembra più importante?",
        options: [
          { label: "Privacy e dati account", value: "privacy" },
          { label: "Pagamenti e crediti", value: "private" },
          { label: "Uso da smartphone", value: "mobile" },
          { label: "Capire prima le basi", value: "beginner" }
        ]
      },
      baseQuestions[1],
      baseQuestions[2]
    ],
    results: sharedResults
  },
  {
    slug: "livejasmin-o-alternative",
    path: "/quiz/livejasmin-o-alternative",
    navTitle: "LiveJasmin o alternative",
    h1: "LiveJasmin o Alternative: Quale Percorso Esplorare?",
    metaTitle: "LiveJasmin o Alternative? Quiz per Utenti Italiani",
    description:
      "Quiz per capire se orientarti verso LiveJasmin, alternative webcam live, chat private, anteprime gratuite o guide alla scelta.",
    kicker: "Quiz confronto",
    intro: "Un quiz per capire se iniziare da LiveJasmin Italia o da pagine di confronto e alternative.",
    questions: [
      {
        question: "Cosa vuoi confrontare?",
        options: [
          { label: "LiveJasmin in italiano", value: "livejasmin" },
          { label: "Alternative a LiveJasmin", value: "alternatives" },
          { label: "Costi e crediti", value: "private" },
          { label: "Privacy e sicurezza", value: "privacy" }
        ]
      },
      baseQuestions[0],
      baseQuestions[2]
    ],
    results: sharedResults
  },
  {
    slug: "quiz-principianti-chat-webcam",
    path: "/quiz/quiz-principianti-chat-webcam",
    navTitle: "Quiz principianti",
    h1: "Quiz Chat Webcam per Principianti",
    metaTitle: "Quiz Chat Webcam per Principianti: Da Dove Iniziare?",
    description:
      "Quiz semplice per principianti: capisci quali guide leggere prima, cosa controllare e quale percorso webcam esplorare con più sicurezza.",
    kicker: "Quiz principianti",
    intro: "Un percorso semplice per chi vuole capire termini, registrazione, crediti, privacy e differenze tra chat gratis e privata.",
    questions: [
      {
        question: "Quanto conosci già le chat webcam?",
        options: [
          { label: "Sono all'inizio", value: "beginner" },
          { label: "Voglio capire le anteprime", value: "free" },
          { label: "Mi interessano costi e crediti", value: "private" },
          { label: "Voglio prima proteggere la privacy", value: "privacy" }
        ]
      },
      baseQuestions[1],
      baseQuestions[2]
    ],
    results: sharedResults
  }
];

export const quizHubCards: QuizLink[] = quizPages.map((page) => ({
  href: page.path,
  title: page.navTitle,
  copy: page.description
}));

export const quizPublicPages = [
  { path: "/quiz", label: "Quiz chat webcam" },
  ...quizPages.map((page) => ({ path: page.path, label: page.navTitle }))
];

export function getQuizPage(slug: string) {
  return quizPages.find((page) => page.slug === slug);
}
