export type DecisioneLink = {
  href: string;
  title: string;
  copy: string;
};

export type DecisionePage = {
  slug: string;
  path: string;
  navTitle: string;
  h1: string;
  metaTitle: string;
  description: string;
  kicker: string;
  intro: string;
  quickAnswer: string;
  buyerTitle: string;
  buyerCopy: string;
  checklistTitle: string;
  checklist: string[];
  noteTitle: string;
  note: string;
  relatedLinks: DecisioneLink[];
  faq: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaCopy: string;
  ctaHref: "/go/signup" | "/go/livejasmin";
  ctaLabel: string;
};

export const decisionePages: DecisionePage[] = [
  {
    slug: "costi-chat-webcam",
    path: "/decisione/costi-chat-webcam",
    navTitle: "Costi chat webcam",
    h1: "Costi Chat Webcam: Come Capire Crediti, Private e Anteprime",
    metaTitle: "Costi Chat Webcam: Crediti, Private e Anteprime Spiegati",
    description:
      "Capisci i costi delle chat webcam live: crediti, chat private, anteprime gratuite, pagamenti e controlli da fare prima di spendere.",
    kicker: "Costi e crediti",
    intro:
      "Prima di entrare in una chat webcam conviene distinguere accesso iniziale, anteprime, funzioni private e possibili crediti.",
    quickAnswer:
      "Non cercare un prezzo unico valido per tutti: controlla sempre come sono spiegati crediti, durata, funzioni private e conferme di pagamento.",
    buyerTitle: "Quando questa pagina ti aiuta",
    buyerCopy:
      "Se stai decidendo se registrarti o aggiungere credito, questa guida ti aiuta a leggere i passaggi economici senza promesse inventate.",
    checklistTitle: "Controlli prima di spendere",
    checklist: [
      "Verifica cosa puoi vedere in anteprima.",
      "Controlla se le funzioni private usano crediti.",
      "Leggi conferme e condizioni prima del pagamento.",
      "Evita scelte rapide quando il costo non è chiaro."
    ],
    noteTitle: "Nessun prezzo inventato",
    note:
      "SessoChat.net non pubblica numeri non verificati: i costi effettivi vanno controllati sulla piattaforma prima di procedere.",
    relatedLinks: [
      { href: "/guida/prezzi-chat-webcam", title: "Prezzi chat webcam", copy: "Guida più ampia su crediti e private." },
      { href: "/siti/siti-cam-private", title: "Siti cam private", copy: "Come valutare funzioni private." },
      { href: "/confronti/chat-privata-vs-chat-gratis", title: "Privata o gratis", copy: "Differenze pratiche prima della scelta." }
    ],
    faq: [
      { question: "Quanto costa una chat webcam?", answer: "Il costo dipende dalla piattaforma, dai crediti e dalla funzione usata." },
      { question: "Le anteprime sono sempre gratuite?", answer: "Possono esserlo in parte, ma limiti e accessi cambiano da servizio a servizio." },
      { question: "Quando devo controllare i crediti?", answer: "Prima di usare funzioni private o completare una registrazione con pagamento." }
    ],
    ctaTitle: "Valuta costi e opzioni prima di entrare",
    ctaCopy: "Apri l'accesso live e controlla anteprime, percorso di registrazione e condizioni disponibili.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Guarda opzioni live"
  },
  {
    slug: "prezzi-livejasmin",
    path: "/decisione/prezzi-livejasmin",
    navTitle: "Prezzi LiveJasmin",
    h1: "Prezzi LiveJasmin: Cosa Controllare Prima di Registrarti",
    metaTitle: "Prezzi LiveJasmin: Cosa Sapere su Costi e Crediti",
    description:
      "Guida italiana ai prezzi LiveJasmin: come valutare crediti, chat private, anteprime, pagamenti e aspetti da controllare prima della registrazione.",
    kicker: "LiveJasmin e costi",
    intro:
      "Chi cerca prezzi LiveJasmin vuole capire cosa guardare prima di creare un account o usare funzioni a pagamento.",
    quickAnswer:
      "Controlla crediti, schermate di pagamento, condizioni delle chat private e opzioni visibili prima della registrazione.",
    buyerTitle: "Una guida per decidere con calma",
    buyerCopy:
      "Questa pagina non sostituisce i termini ufficiali della piattaforma: serve a prepararti ai punti economici da leggere con attenzione.",
    checklistTitle: "Prima della registrazione",
    checklist: [
      "Osserva quali anteprime sono accessibili.",
      "Individua dove vengono spiegati crediti e pagamenti.",
      "Controlla privacy, account e conferme finali.",
      "Confronta alternative se vuoi un quadro più ampio."
    ],
    noteTitle: "Costi da verificare alla fonte",
    note:
      "I prezzi possono cambiare sulla piattaforma. Per questo qui parliamo di criteri e non di cifre inventate.",
    relatedLinks: [
      { href: "/argomenti/livejasmin-italia", title: "LiveJasmin Italia", copy: "Guida italiana alla piattaforma." },
      { href: "/decisione/livejasmin-costi-crediti", title: "LiveJasmin costi e crediti", copy: "Focus sui crediti." },
      { href: "/confronti/alternative-livejasmin", title: "Alternative LiveJasmin", copy: "Opzioni da confrontare." }
    ],
    faq: [
      { question: "Questa pagina indica prezzi ufficiali?", answer: "No. Aiuta a capire cosa controllare sulla piattaforma prima di spendere." },
      { question: "LiveJasmin usa crediti?", answer: "Le funzioni a pagamento possono prevedere sistemi di credito da verificare nel percorso ufficiale." },
      { question: "Posso valutare prima di pagare?", answer: "Puoi osservare il percorso iniziale e leggere condizioni, limiti e schermate disponibili." }
    ],
    ctaTitle: "Controlla LiveJasmin con criteri chiari",
    ctaCopy: "Apri l'accesso live e valuta il percorso prima di procedere con account o crediti.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Apri LiveJasmin"
  },
  {
    slug: "chat-webcam-pagamenti",
    path: "/decisione/chat-webcam-pagamenti",
    navTitle: "Pagamenti chat webcam",
    h1: "Chat Webcam e Pagamenti: Cosa Sapere Prima di Spendere",
    metaTitle: "Chat Webcam e Pagamenti: Metodi, Crediti e Controlli",
    description:
      "Scopri cosa controllare sui pagamenti nelle chat webcam: metodi disponibili, crediti, privacy, limiti di spesa e sicurezza dell'account.",
    kicker: "Pagamenti",
    intro:
      "Il momento del pagamento è quello in cui serve più ordine: metodi, crediti, privacy e conferme devono essere leggibili.",
    quickAnswer:
      "Prima di inserire dati di pagamento, verifica il sistema crediti, le conferme finali, la privacy dell'account e la possibilità di controllare la spesa.",
    buyerTitle: "Per chi è vicino alla registrazione",
    buyerCopy:
      "Questa pagina è pensata per chi ha già visto una piattaforma e vuole decidere se procedere senza confondere anteprima e servizio completo.",
    checklistTitle: "Checklist pagamenti",
    checklist: [
      "Controlla se i crediti sono spiegati prima dell'acquisto.",
      "Verifica eventuali conferme prima della spesa.",
      "Leggi privacy e gestione account.",
      "Non salvare metodi di pagamento se non sei sicuro."
    ],
    noteTitle: "Privacy e controllo",
    note:
      "La discrezione dipende anche da browser, dispositivo, notifiche e abitudini personali, non solo dalla piattaforma.",
    relatedLinks: [
      { href: "/argomenti/chat-webcam-senza-carta-di-credito", title: "Senza carta di credito", copy: "Cosa aspettarsi prima del pagamento." },
      { href: "/guida/prezzi-chat-webcam", title: "Prezzi e crediti", copy: "Approfondimento sui costi." },
      { href: "/privacy-policy", title: "Privacy Policy", copy: "Informazioni sul sito SessoChat.net." }
    ],
    faq: [
      { question: "Le chat webcam richiedono sempre pagamento?", answer: "No. Alcune funzioni possono essere visibili in anteprima, altre possono richiedere crediti." },
      { question: "Come controllo la spesa?", answer: "Leggendo crediti, conferme e limiti prima di usare funzioni private." },
      { question: "Devo salvare la carta?", answer: "Valuta sempre le opzioni disponibili e scegli solo se il percorso è chiaro." }
    ],
    ctaTitle: "Apri l'accesso con attenzione ai pagamenti",
    ctaCopy: "Valuta opzioni, anteprime e passaggi economici prima di registrarti.",
    ctaHref: "/go/signup",
    ctaLabel: "Entra in modo sicuro"
  },
  {
    slug: "chat-webcam-privacy",
    path: "/decisione/chat-webcam-privacy",
    navTitle: "Privacy chat webcam",
    h1: "Chat Webcam Privacy: Navigare in Modo Più Discreto",
    metaTitle: "Chat Webcam Privacy: Come Navigare con Più Discrezione",
    description:
      "Guida alla privacy nelle chat webcam live: account, pagamenti, cronologia, mobile, dati personali e scelte più consapevoli prima di entrare.",
    kicker: "Privacy",
    intro:
      "La privacy in una chat webcam riguarda account, dispositivo, cronologia, pagamenti e modo in cui entri nelle piattaforme live.",
    quickAnswer:
      "Usa un browser aggiornato, controlla impostazioni e notifiche, leggi privacy e pagamenti, e registra solo i dati necessari.",
    buyerTitle: "Decisione discreta",
    buyerCopy:
      "Quando una scelta coinvolge dati personali o pagamenti, la pagina più utile è quella che ti fa rallentare e controllare i passaggi.",
    checklistTitle: "Controlli privacy",
    checklist: [
      "Verifica privacy e termini prima dell'account.",
      "Controlla cronologia, password salvate e notifiche.",
      "Fai attenzione su dispositivi condivisi.",
      "Usa solo percorsi di accesso chiari."
    ],
    noteTitle: "Discrezione pratica",
    note:
      "Nessuna guida può garantire privacy assoluta; può però aiutarti a evitare scelte frettolose e poco leggibili.",
    relatedLinks: [
      { href: "/guida/chat-webcam-sicura", title: "Chat webcam sicura", copy: "Guida completa su sicurezza e privacy." },
      { href: "/argomenti/siti-webcam-sicuri", title: "Siti webcam sicuri", copy: "Criteri rapidi per valutare affidabilità." },
      { href: "/ricerche/webcam-live-sicure", title: "Webcam live sicure", copy: "Ricerca correlata sulla sicurezza." }
    ],
    faq: [
      { question: "Come proteggo la privacy?", answer: "Controlla browser, account, notifiche, dati salvati e condizioni della piattaforma." },
      { question: "Il mobile è più discreto?", answer: "Non sempre. Smartphone e notifiche richiedono attenzione specifica." },
      { question: "Serve creare un account?", answer: "Dipende dalla piattaforma e dalle funzioni che vuoi usare." }
    ],
    ctaTitle: "Procedi solo dopo i controlli privacy",
    ctaCopy: "Apri l'accesso live e valuta impostazioni, anteprime e condizioni con calma.",
    ctaHref: "/go/signup",
    ctaLabel: "Apri accesso sicuro"
  },
  {
    slug: "chat-webcam-sicura",
    path: "/decisione/chat-webcam-sicura",
    navTitle: "Chat webcam sicura",
    h1: "Chat Webcam Sicura: Segnali da Valutare Prima di Entrare",
    metaTitle: "Chat Webcam Sicura: Segnali da Controllare Prima di Usarla",
    description:
      "Criteri pratici per valutare una chat webcam sicura: privacy, pagamenti, modelli verificati, trasparenza, accesso mobile e supporto.",
    kicker: "Sicurezza",
    intro:
      "Una chat webcam sicura non si riconosce da uno slogan, ma da segnali concreti: pagamenti leggibili, privacy, profili e supporto.",
    quickAnswer:
      "Cerca trasparenza su account, crediti, privacy, modelli verificati quando dichiarati e percorsi mobile senza confusione.",
    buyerTitle: "Segnali da usare prima della scelta",
    buyerCopy:
      "Questa pagina aiuta a passare dalla curiosità alla decisione senza trasformare la sicurezza in una promessa assoluta.",
    checklistTitle: "Segnali positivi",
    checklist: [
      "Privacy e termini facili da trovare.",
      "Pagamenti spiegati prima dell'uso.",
      "Profili presentati senza dati fantasiosi.",
      "Layout mobile chiaro e accessibile."
    ],
    noteTitle: "Nessuna garanzia assoluta",
    note:
      "Parliamo di criteri di valutazione: evita chi promette sicurezza totale senza spiegare come funziona il servizio.",
    relatedLinks: [
      { href: "/guida/chat-webcam-sicura", title: "Guida chat sicura", copy: "Approfondimento educativo." },
      { href: "/decisione/siti-webcam-affidabili", title: "Siti affidabili", copy: "Criteri per piattaforme live." },
      { href: "/categorie/modelli-webcam-verificati", title: "Modelli verificati", copy: "Perché la verifica può aiutare." }
    ],
    faq: [
      { question: "Qual è la chat webcam più sicura?", answer: "Non dichiariamo vincitori assoluti; spieghiamo segnali da verificare." },
      { question: "I modelli verificati bastano?", answer: "Aiutano, ma privacy, pagamenti e account restano importanti." },
      { question: "Cosa guardo per primo?", answer: "Privacy, costi, registrazione, mobile e chiarezza della piattaforma." }
    ],
    ctaTitle: "Valuta una piattaforma con più criterio",
    ctaCopy: "Apri le opzioni live e controlla i segnali essenziali prima di procedere.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Valuta opzioni live"
  },
  {
    slug: "siti-webcam-affidabili",
    path: "/decisione/siti-webcam-affidabili",
    navTitle: "Siti webcam affidabili",
    h1: "Siti Webcam Affidabili: Come Scegliere con Più Criterio",
    metaTitle: "Siti Webcam Affidabili: Come Valutare una Piattaforma Live",
    description:
      "Scopri come riconoscere siti webcam affidabili valutando privacy, pagamenti, modelli live, accesso mobile, trasparenza e contenuti disponibili.",
    kicker: "Affidabilità",
    intro:
      "L'affidabilità di un sito webcam si valuta leggendo come presenta modelli, registrazione, pagamenti, privacy e accesso mobile.",
    quickAnswer:
      "Una piattaforma affidabile dovrebbe rendere chiari limiti, crediti, account, privacy e modalità di accesso senza spingere a clic frettolosi.",
    buyerTitle: "Una pagina per scegliere, non per classificare",
    buyerCopy:
      "Non usiamo classifiche finte: offriamo criteri per capire se un sito merita attenzione prima della registrazione.",
    checklistTitle: "Criteri di affidabilità",
    checklist: [
      "Informazioni su privacy e pagamenti raggiungibili.",
      "Accesso mobile leggibile.",
      "Modelli e anteprime presentati in modo ordinato.",
      "Nessuna pressione con promesse eccessive."
    ],
    noteTitle: "Affidabilità senza voti inventati",
    note:
      "Evitiamo punteggi sintetici perché non aggiungono valore se non sono basati su dati verificabili.",
    relatedLinks: [
      { href: "/siti/siti-webcam-live", title: "Siti webcam live", copy: "Hub per valutare piattaforme." },
      { href: "/argomenti/siti-webcam-sicuri", title: "Siti webcam sicuri", copy: "Criteri rapidi di sicurezza." },
      { href: "/confronti/migliori-siti-webcam-live", title: "Scelta dei siti live", copy: "Framework senza ranking falsi." }
    ],
    faq: [
      { question: "Come riconosco un sito webcam affidabile?", answer: "Guarda trasparenza, privacy, pagamenti, mobile e chiarezza delle funzioni." },
      { question: "Serve leggere i termini?", answer: "Sì, soprattutto prima di pagamenti o funzioni private." },
      { question: "Perché non ci sono voti?", answer: "Per evitare valutazioni non verificabili e decisioni basate su numeri finti." }
    ],
    ctaTitle: "Apri una piattaforma da valutare",
    ctaCopy: "Usa il percorso interno per osservare profili live, anteprime e condizioni disponibili.",
    ctaHref: "/go/signup",
    ctaLabel: "Apri accesso live"
  },
  {
    slug: "livejasmin-italia-recensione-guida",
    path: "/decisione/livejasmin-italia-recensione-guida",
    navTitle: "LiveJasmin guida Italia",
    h1: "LiveJasmin Italia: Guida Pratica per Valutare la Piattaforma",
    metaTitle: "LiveJasmin Italia: Guida, Costi, Privacy e Alternative",
    description:
      "Guida italiana a LiveJasmin per capire chat webcam live, crediti, privacy, accesso mobile, modelli online e alternative da valutare.",
    kicker: "LiveJasmin Italia",
    intro:
      "Questa è una guida decisionale per utenti italiani che vogliono valutare LiveJasmin senza affidarsi a voti o recensioni inventate.",
    quickAnswer:
      "Valuta LiveJasmin controllando profili live, mobile, privacy, crediti, funzioni private e alternative prima della registrazione.",
    buyerTitle: "Non una recensione con punteggio",
    buyerCopy:
      "Il termine recensione intercetta l'intento di ricerca, ma la pagina resta una guida: niente voti, graduatorie o affermazioni di prova non documentate.",
    checklistTitle: "Cosa valutare su LiveJasmin",
    checklist: [
      "Anteprime e profili disponibili.",
      "Sistema crediti e passaggi di pagamento.",
      "Uso da smartphone e chiarezza del layout.",
      "Alternative se cerchi un'esperienza diversa."
    ],
    noteTitle: "Scelta informata",
    note:
      "La piattaforma va valutata nel momento dell'accesso, leggendo condizioni e funzioni disponibili prima di procedere.",
    relatedLinks: [
      { href: "/argomenti/livejasmin-italia", title: "LiveJasmin Italia", copy: "Approfondimento generale." },
      { href: "/decisione/prezzi-livejasmin", title: "Prezzi LiveJasmin", copy: "Costi e crediti da controllare." },
      { href: "/ricerche/livejasmin-alternative-italia", title: "Alternative LiveJasmin Italia", copy: "Confronto con altre opzioni." }
    ],
    faq: [
      { question: "Questa pagina assegna un giudizio ufficiale?", answer: "No. È una guida editoriale per capire cosa valutare." },
      { question: "Date un voto a LiveJasmin?", answer: "No. Non usiamo valutazioni numeriche inventate." },
      { question: "Posso confrontare alternative?", answer: "Sì, trovi link interni a pagine confronto e ricerche correlate." }
    ],
    ctaTitle: "Valuta LiveJasmin direttamente",
    ctaCopy: "Apri l'accesso live e controlla profili, mobile, privacy e condizioni.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Apri LiveJasmin"
  },
  {
    slug: "livejasmin-costi-crediti",
    path: "/decisione/livejasmin-costi-crediti",
    navTitle: "LiveJasmin costi e crediti",
    h1: "LiveJasmin Costi e Crediti: Guida per Utenti Italiani",
    metaTitle: "LiveJasmin Costi e Crediti: Guida per Utenti Italiani",
    description:
      "Capisci come valutare costi e crediti su LiveJasmin, cosa controllare prima di una chat privata e come gestire pagamenti e privacy.",
    kicker: "Crediti LiveJasmin",
    intro:
      "Costi e crediti sono uno dei punti decisivi per chi valuta LiveJasmin: conviene leggerli prima di usare funzioni private.",
    quickAnswer:
      "Controlla come vengono acquistati o usati i crediti, quali funzioni li richiedono e quali conferme appaiono prima della spesa.",
    buyerTitle: "Decisione economica",
    buyerCopy:
      "Questa pagina aiuta a non confondere anteprima, registrazione e funzioni a credito, senza pubblicare cifre che potrebbero non essere aggiornate.",
    checklistTitle: "Cosa controllare sui crediti",
    checklist: [
      "Quando vengono richiesti i crediti.",
      "Se il costo è indicato prima della funzione privata.",
      "Quali conferme precedono il pagamento.",
      "Come proteggere account e metodo di pagamento."
    ],
    noteTitle: "Leggere prima di cliccare",
    note:
      "La scelta più prudente è fermarsi quando non sono chiari crediti, durata o condizioni.",
    relatedLinks: [
      { href: "/decisione/prezzi-livejasmin", title: "Prezzi LiveJasmin", copy: "Guida collegata sui prezzi." },
      { href: "/guida/prezzi-chat-webcam", title: "Prezzi chat webcam", copy: "Contesto generale sui costi." },
      { href: "/decisione/chat-webcam-con-crediti", title: "Chat webcam con crediti", copy: "Come funzionano i crediti." }
    ],
    faq: [
      { question: "I crediti sono sempre necessari?", answer: "Dipende dalle funzioni: controlla prima di usare chat private o opzioni avanzate." },
      { question: "Perché non indicate importi?", answer: "Per evitare cifre non aggiornate o non verificabili." },
      { question: "Come posso limitare la spesa?", answer: "Leggi crediti, conferme e condizioni prima di procedere." }
    ],
    ctaTitle: "Controlla crediti e funzioni live",
    ctaCopy: "Apri LiveJasmin tramite il percorso interno e verifica le informazioni disponibili.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Apri LiveJasmin"
  },
  {
    slug: "come-scegliere-chat-webcam-premium",
    path: "/decisione/come-scegliere-chat-webcam-premium",
    navTitle: "Chat webcam premium",
    h1: "Chat Webcam Premium: Come Scegliere la Piattaforma Giusta",
    metaTitle: "Chat Webcam Premium: Come Scegliere una Piattaforma",
    description:
      "Guida per scegliere una chat webcam premium valutando modelli verificati, private, costi, privacy, accesso mobile e qualità dell'esperienza.",
    kicker: "Scelta premium",
    intro:
      "Una chat webcam premium non dovrebbe convincerti con promesse forti, ma con chiarezza su esperienza, privacy, modelli, costi e mobile.",
    quickAnswer:
      "Scegli una piattaforma premium valutando profili reali, funzioni private, crediti, privacy, mobile e trasparenza prima della registrazione.",
    buyerTitle: "Premium significa più controllo",
    buyerCopy:
      "Per un utente vicino alla decisione, il valore sta nella chiarezza: sapere cosa accade prima di account, pagamento o chat privata.",
    checklistTitle: "Criteri premium",
    checklist: [
      "Profili live presentati in modo ordinato.",
      "Verifica dei modelli quando indicata dalla piattaforma.",
      "Percorso mobile pulito.",
      "Costi e crediti spiegati prima dell'uso."
    ],
    noteTitle: "Niente migliore assoluto",
    note:
      "Una piattaforma può essere più adatta a un certo uso, ma non esiste un migliore assoluto valido per tutti.",
    relatedLinks: [
      { href: "/confronti/siti-premium-vs-siti-gratis", title: "Premium vs gratis", copy: "Differenze principali." },
      { href: "/categorie/modelli-webcam-verificati", title: "Modelli verificati", copy: "Perché la verifica può contare." },
      { href: "/siti/siti-webcam-con-modelli-verificati", title: "Siti con modelli verificati", copy: "Criteri per piattaforme trasparenti." }
    ],
    faq: [
      { question: "Premium significa sempre migliore?", answer: "No. Significa che devi valutare chiarezza, funzioni, costi e privacy." },
      { question: "Cosa cambia rispetto ai siti gratis?", answer: "Spesso cambiano limiti, funzioni private, crediti e livello di controllo." },
      { question: "Come scelgo senza ranking?", answer: "Usa checklist, confronti e guide interne basate su criteri." }
    ],
    ctaTitle: "Valuta una piattaforma premium",
    ctaCopy: "Apri l'accesso live e controlla profili, privacy, mobile e condizioni.",
    ctaHref: "/go/signup",
    ctaLabel: "Valuta accesso premium"
  },
  {
    slug: "chat-webcam-con-crediti",
    path: "/decisione/chat-webcam-con-crediti",
    navTitle: "Chat webcam con crediti",
    h1: "Chat Webcam con Crediti: Funzionamento, Limiti e Controlli",
    metaTitle: "Chat Webcam con Crediti: Come Funzionano e Cosa Controllare",
    description:
      "Scopri come funzionano le chat webcam con crediti, quali limiti verificare, come controllare la spesa e cosa sapere prima della registrazione.",
    kicker: "Sistema crediti",
    intro:
      "Le chat webcam con crediti richiedono attenzione perché il costo può dipendere da funzioni, durata e modalità di interazione.",
    quickAnswer:
      "Prima di acquistare o usare crediti, capisci a cosa servono, quando vengono scalati e quali conferme appaiono.",
    buyerTitle: "Quando i crediti contano",
    buyerCopy:
      "Il sistema a crediti può essere pratico solo se è leggibile: questa pagina ti aiuta a individuare i punti da controllare.",
    checklistTitle: "Checklist crediti",
    checklist: [
      "Verifica il rapporto tra crediti e funzioni.",
      "Controlla se la chat privata consuma crediti.",
      "Leggi eventuali limiti o condizioni.",
      "Mantieni il controllo prima di ogni conferma."
    ],
    noteTitle: "Controllo della spesa",
    note:
      "Se il consumo dei crediti non è chiaro, conviene fermarsi e leggere meglio prima di procedere.",
    relatedLinks: [
      { href: "/decisione/costi-chat-webcam", title: "Costi chat webcam", copy: "Quadro generale sui costi." },
      { href: "/decisione/livejasmin-costi-crediti", title: "LiveJasmin costi e crediti", copy: "Focus LiveJasmin." },
      { href: "/argomenti/chat-webcam-senza-carta-di-credito", title: "Senza carta", copy: "Valutare prima del pagamento." }
    ],
    faq: [
      { question: "Cosa sono i crediti?", answer: "Sono unità usate da alcune piattaforme per accedere a funzioni o chat private." },
      { question: "I crediti hanno sempre lo stesso valore?", answer: "No. Devi verificare il funzionamento sulla piattaforma specifica." },
      { question: "Come evito sorprese?", answer: "Leggi condizioni, conferme e consumo prima di usare funzioni private." }
    ],
    ctaTitle: "Valuta il sistema crediti prima di usarlo",
    ctaCopy: "Apri l'accesso live e controlla come sono presentate funzioni e condizioni.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Controlla opzioni live"
  },
  {
    slug: "chat-webcam-private-sicure",
    path: "/decisione/chat-webcam-private-sicure",
    navTitle: "Chat private sicure",
    h1: "Chat Webcam Private Sicure: Cosa Controllare Prima",
    metaTitle: "Chat Webcam Private Sicure: Privacy, Costi e Controlli",
    description:
      "Guida alle chat webcam private sicure: cosa controllare su crediti, privacy, piattaforma, modelli verificati e accesso prima di entrare.",
    kicker: "Private e sicurezza",
    intro:
      "Le chat private richiedono più attenzione perché uniscono privacy, crediti, account e scelta della piattaforma.",
    quickAnswer:
      "Prima di una chat privata, controlla costi, crediti, privacy, conferme, gestione account e segnali di affidabilità della piattaforma.",
    buyerTitle: "Decisione prima della funzione privata",
    buyerCopy:
      "Questa guida non descrive contenuti: aiuta a capire cosa verificare prima di usare un servizio privato a pagamento o con crediti.",
    checklistTitle: "Prima di entrare in privata",
    checklist: [
      "Leggi il sistema crediti.",
      "Controlla privacy e dati account.",
      "Verifica profili e condizioni disponibili.",
      "Procedi solo se il costo è comprensibile."
    ],
    noteTitle: "Private non significa senza controllo",
    note:
      "Una scelta privata dovrebbe essere consapevole: evita percorsi che non spiegano bene costi, durata o conferme.",
    relatedLinks: [
      { href: "/siti/siti-cam-private", title: "Siti cam private", copy: "Approfondimento sulla chat privata." },
      { href: "/confronti/chat-privata-vs-chat-gratis", title: "Privata vs gratis", copy: "Differenze pratiche." },
      { href: "/guida/chat-webcam-sicura", title: "Chat webcam sicura", copy: "Privacy e controlli." }
    ],
    faq: [
      { question: "Una chat privata è sempre a pagamento?", answer: "Spesso può richiedere crediti o pagamento, ma va verificato prima." },
      { question: "Cosa rende più sicura una privata?", answer: "Chiarezza su privacy, costi, account, conferme e piattaforma." },
      { question: "Devo registrarmi?", answer: "Molte funzioni private richiedono un account, secondo le regole della piattaforma." }
    ],
    ctaTitle: "Valuta le opzioni private con attenzione",
    ctaCopy: "Apri l'accesso live e controlla funzioni, crediti e condizioni prima di procedere.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Valuta chat private"
  },
  {
    slug: "siti-webcam-con-modelli-verificati",
    path: "/decisione/siti-webcam-con-modelli-verificati",
    navTitle: "Siti con modelli verificati",
    h1: "Siti Webcam con Modelli Verificati: Perché Possono Contare",
    metaTitle: "Siti Webcam con Modelli Verificati: Perché Valutarli",
    description:
      "Scopri perché i modelli verificati possono aiutare a scegliere siti webcam più trasparenti, con attenzione a privacy, affidabilità e sicurezza.",
    kicker: "Modelli verificati",
    intro:
      "I modelli verificati possono essere un segnale utile, ma vanno letti insieme a privacy, pagamenti e trasparenza della piattaforma.",
    quickAnswer:
      "La verifica può aiutare a ridurre confusione e profili poco chiari, ma non sostituisce controlli su costi, account e privacy.",
    buyerTitle: "Perché la verifica interessa chi deve decidere",
    buyerCopy:
      "Chi sta scegliendo una piattaforma premium spesso cerca profili più trasparenti. La verifica è un criterio, non una garanzia totale.",
    checklistTitle: "Come valutare la verifica",
    checklist: [
      "Cerca indicazioni ufficiali della piattaforma.",
      "Non attribuire verifiche se non sono dichiarate.",
      "Considera anche privacy e pagamenti.",
      "Evita pagine con dati personali inventati."
    ],
    noteTitle: "Nessuna attribuzione inventata",
    note:
      "SessoChat.net non dichiara che un singolo profilo sia verificato se il dato non è disponibile in modo affidabile.",
    relatedLinks: [
      { href: "/guida/modelli-webcam-verificati", title: "Modelli verificati", copy: "Guida educativa sulla verifica." },
      { href: "/siti/siti-webcam-con-modelli-verificati", title: "Siti con modelli verificati", copy: "Pagina di selezione dedicata." },
      { href: "/categorie/modelli-webcam-verificati", title: "Categoria verificati", copy: "Percorso di scoperta modelli." }
    ],
    faq: [
      { question: "La verifica garantisce tutto?", answer: "No. È un segnale utile, ma non sostituisce privacy, pagamenti e buon senso." },
      { question: "Dichiarate verifiche sui singoli modelli?", answer: "Solo se un dato reale e affidabile lo consente; altrimenti non lo inventiamo." },
      { question: "Perché valutare modelli verificati?", answer: "Per cercare piattaforme più ordinate e trasparenti nella presentazione dei profili." }
    ],
    ctaTitle: "Esplora profili live con criteri chiari",
    ctaCopy: "Apri l'accesso live e valuta modelli, privacy e condizioni senza dati inventati.",
    ctaHref: "/go/signup",
    ctaLabel: "Apri accesso live"
  }
];

export const decisioneHubCards: DecisioneLink[] = decisionePages.map((page) => ({
  href: page.path,
  title: page.navTitle,
  copy: page.description
}));

export const decisionePublicPages = [
  { path: "/decisione", label: "Decisione chat webcam" },
  ...decisionePages.map((page) => ({ path: page.path, label: page.navTitle }))
];

export function getDecisionePage(slug: string) {
  return decisionePages.find((page) => page.slug === slug);
}
