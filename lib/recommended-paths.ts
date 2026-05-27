export type RecommendedPath = {
  href: string;
  title: string;
  copy: string;
};

export const recommendedPathGroups = {
  home: [
    { href: "/decisione", title: "Prima di registrarti", copy: "Costi, privacy, crediti e scelta della piattaforma." },
    { href: "/domande", title: "Domande frequenti", copy: "Risposte rapide su registrazione, carta, crediti e LiveJasmin." },
    { href: "/quiz", title: "Quiz rapidi", copy: "Percorsi interattivi senza raccolta dati personali." },
    { href: "/ricerche", title: "Ricerche popolari", copy: "Ingressi rapidi per chat webcam gratis, live e mobile." },
    { href: "/argomenti", title: "Argomenti utili", copy: "Landing dirette su privacy, accesso e LiveJasmin Italia." },
    { href: "/confronti", title: "Confronti", copy: "Differenze tra piattaforme, premium, gratis e private." },
    { href: "/categorie", title: "Categorie modelli", copy: "Modelli live, verificati, mobile e online." },
    { href: "/siti", title: "Siti webcam", copy: "Percorsi per scegliere siti live, gratis e privati." },
    { href: "/guida", title: "Guida pratica", copy: "Approfondimenti su sicurezza, prezzi e principianti." }
  ],
  siti: [
    { href: "/decisione/siti-webcam-affidabili", title: "Siti affidabili", copy: "Criteri per valutare una piattaforma live." },
    { href: "/guida/come-scegliere-un-sito-webcam", title: "Come scegliere", copy: "Metodo pratico prima della registrazione." },
    { href: "/confronti/migliori-siti-webcam-live", title: "Scelta senza classifiche false", copy: "Criteri editoriali per confrontare siti live." },
    { href: "/domande/come-scegliere-un-sito-webcam-affidabile", title: "Domanda chiave", copy: "Risposta rapida sui segnali di affidabilità." }
  ],
  guida: [
    { href: "/decisione/costi-chat-webcam", title: "Costi e pagamenti", copy: "Crediti, private e anteprime prima di spendere." },
    { href: "/decisione/chat-webcam-privacy", title: "Privacy", copy: "Account, browser, dispositivo e navigazione discreta." },
    { href: "/domande/serve-carta-di-credito-per-chat-webcam", title: "Carta di credito", copy: "Quando può servire e cosa controllare." },
    { href: "/quiz/quiz-principianti-chat-webcam", title: "Quiz principianti", copy: "Percorso rapido per capire da dove iniziare." }
  ],
  confronti: [
    { href: "/decisione/livejasmin-italia-recensione-guida", title: "LiveJasmin Italia", copy: "Guida decisionale su piattaforma, costi e privacy." },
    { href: "/ricerche/livejasmin-alternative-italia", title: "Alternative LiveJasmin", copy: "Ricerca dedicata per utenti italiani." },
    { href: "/decisione/costi-chat-webcam", title: "Costi chat webcam", copy: "Prima di confrontare, chiarisci crediti e private." },
    { href: "/quiz/livejasmin-o-alternative", title: "Quiz confronto", copy: "Scegli se partire da LiveJasmin o alternative." }
  ],
  categorie: [
    { href: "/guida/modelli-webcam-verificati", title: "Modelli verificati", copy: "Cosa significa verifica e perché può contare." },
    { href: "/decisione/siti-webcam-con-modelli-verificati", title: "Siti con verifica", copy: "Valuta piattaforme con più trasparenza." },
    { href: "/siti/siti-webcam-mobile", title: "Da cellulare", copy: "Scopri categorie e profili live da smartphone." },
    { href: "/confronti/migliori-siti-webcam-live", title: "Siti live", copy: "Criteri per scegliere senza ranking inventati." }
  ],
  argomenti: [
    { href: "/decisione/chat-webcam-sicura", title: "Privacy e sicurezza", copy: "Segnali da controllare prima di entrare." },
    { href: "/domande/le-chat-webcam-sono-gratis", title: "Chat gratis?", copy: "Risposta rapida su anteprime e limiti." },
    { href: "/siti/siti-webcam-senza-carta-di-credito", title: "Senza carta", copy: "Opzioni e limiti prima dei pagamenti." },
    { href: "/quiz/che-chat-webcam-fa-per-te", title: "Percorso guidato", copy: "Quiz discreto per scegliere la sezione giusta." }
  ],
  ricerche: [
    { href: "/decisione/chat-webcam-pagamenti", title: "Pagamenti", copy: "Metodi, crediti e controlli prima di spendere." },
    { href: "/decisione/chat-webcam-privacy", title: "Privacy", copy: "Navigazione più discreta su desktop e mobile." },
    { href: "/domande/serve-registrazione-per-vedere-webcam", title: "Registrazione", copy: "Cosa puoi vedere prima dell'account." },
    { href: "/argomenti/livejasmin-italia", title: "LiveJasmin Italia", copy: "Approfondimento per utenti italiani." }
  ],
  decisione: [
    { href: "/domande/quanto-costa-una-chat-privata-webcam", title: "Costo chat privata", copy: "Risposta rapida prima di usare crediti." },
    { href: "/guida/prezzi-chat-webcam", title: "Prezzi chat webcam", copy: "Spiegazione più ampia su crediti e private." },
    { href: "/confronti/siti-premium-vs-siti-gratis", title: "Premium o gratis", copy: "Differenze da capire prima della scelta." },
    { href: "/quiz/chat-gratis-o-chat-privata", title: "Quiz scelta", copy: "Capisci se partire da gratis o privata." }
  ],
  domande: [
    { href: "/decisione/chat-webcam-pagamenti", title: "Pagamenti", copy: "Controlli utili dopo le domande sui crediti." },
    { href: "/decisione/chat-webcam-privacy", title: "Privacy", copy: "Approfondisci browser, account e dati personali." },
    { href: "/siti/siti-webcam-senza-registrazione", title: "Senza registrazione", copy: "Percorso dedicato alle anteprime." },
    { href: "/quiz/quiz-privacy-chat-webcam", title: "Quiz privacy", copy: "Controllo rapido prima di entrare." }
  ],
  quiz: [
    { href: "/decisione", title: "Guide decisione", copy: "Costi, privacy e scelta prima della registrazione." },
    { href: "/domande", title: "Risposte rapide", copy: "Domande frequenti su crediti, carta e LiveJasmin." },
    { href: "/ricerche/chat-webcam-gratis", title: "Chat gratis", copy: "Anteprime e limiti da conoscere." },
    { href: "/confronti/alternative-livejasmin", title: "Alternative", copy: "Confronti qualitativi senza classifiche false." }
  ],
  risorse: [
    { href: "/decisione/costi-chat-webcam", title: "Costi e crediti", copy: "Pagina chiave per utenti vicini alla scelta." },
    { href: "/decisione/chat-webcam-privacy", title: "Privacy", copy: "Percorso decisionale su discrezione e dati." },
    { href: "/domande/livejasmin-e-sicuro", title: "LiveJasmin è sicuro?", copy: "Risposta rapida con link di approfondimento." },
    { href: "/quiz/che-chat-webcam-fa-per-te", title: "Quiz orientamento", copy: "Aiuta a scegliere il percorso interno giusto." }
  ]
} satisfies Record<string, RecommendedPath[]>;
