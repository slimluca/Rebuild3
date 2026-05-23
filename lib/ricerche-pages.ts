export type RicercaLink = {
  href: string;
  title: string;
  copy: string;
};

export type RicercaPage = {
  slug: string;
  path: string;
  navTitle: string;
  h1: string;
  metaTitle: string;
  description: string;
  kicker: string;
  intro: string;
  quickAnswer: string;
  guidanceTitle: string;
  guidance: string[];
  noteTitle: string;
  note: string;
  relatedLinks: RicercaLink[];
  faq: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaCopy: string;
  ctaHref: "/go/signup" | "/go/livejasmin";
  ctaLabel: string;
};

export const ricerchePages: RicercaPage[] = [
  {
    slug: "chat-webcam-gratis",
    path: "/ricerche/chat-webcam-gratis",
    navTitle: "Chat webcam gratis",
    h1: "Chat Webcam Gratis: Cosa Aspettarsi Prima di Entrare",
    metaTitle: "Chat Webcam Gratis: Anteprime Live e Limiti da Conoscere",
    description:
      "Guida italiana alle chat webcam gratis: cosa puoi vedere in anteprima, quali limiti aspettarti e quando può servire la registrazione.",
    kicker: "Ricerca gratis",
    intro: "Una chat webcam gratis di solito va letta come accesso iniziale o anteprima, non come promessa di funzioni complete senza limiti.",
    quickAnswer:
      "Puoi valutare anteprime live e capire il tono della piattaforma. Per chat private, crediti o funzioni complete può essere richiesta la registrazione.",
    guidanceTitle: "Come leggere la parola gratis",
    guidance: [
      "Distingui anteprima gratuita e uso completo.",
      "Controlla quando compare la registrazione.",
      "Leggi eventuali crediti prima delle funzioni private.",
      "Preferisci pagine che spiegano chiaramente i limiti."
    ],
    noteTitle: "Scelta realistica",
    note: "Questa pagina non promette accesso totale gratuito: aiuta a capire cosa verificare prima di entrare.",
    relatedLinks: [
      { href: "/siti/siti-cam-gratis", title: "Siti cam gratis", copy: "Approfondimento sulle anteprime." },
      { href: "/argomenti/webcam-live-gratis-anteprima", title: "Webcam gratis in anteprima", copy: "Focus sulla visione iniziale." },
      { href: "/guida/differenza-tra-chat-gratis-e-chat-privata", title: "Gratis o privata", copy: "Differenze tra modalità." }
    ],
    faq: [
      { question: "Chat webcam gratis significa tutto gratis?", answer: "No. Spesso indica anteprime o accesso iniziale." },
      { question: "Serve un account?", answer: "Dipende dalla funzione e dalla piattaforma." },
      { question: "Come evito confusione?", answer: "Leggi limiti, crediti e condizioni prima di usare funzioni private." }
    ],
    ctaTitle: "Guarda le opzioni live disponibili",
    ctaCopy: "Apri l'accesso live e valuta anteprime e condizioni prima della registrazione.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Guarda opzioni live"
  },
  {
    slug: "chat-webcam-live",
    path: "/ricerche/chat-webcam-live",
    navTitle: "Chat webcam live",
    h1: "Chat Webcam Live: Come Valutare le Opzioni Migliori per Te",
    metaTitle: "Chat Webcam Live: Come Scegliere una Piattaforma Cam",
    description:
      "Scopri come valutare una chat webcam live tra modelli online, anteprime, chat privata, mobile, privacy e accesso alla piattaforma.",
    kicker: "Cam live",
    intro: "La ricerca chat webcam live richiede criteri pratici: profili disponibili, anteprime, privacy, accesso mobile e chiarezza delle funzioni private.",
    quickAnswer:
      "Scegli una piattaforma live guardando prima esperienza mobile, anteprime, account, crediti e controlli privacy.",
    guidanceTitle: "Criteri rapidi",
    guidance: [
      "Valuta la griglia dei modelli senza affidarti a punteggi.",
      "Controlla cosa è visibile prima dell'account.",
      "Verifica se la chat privata è spiegata bene.",
      "Apri guide e confronti se vuoi più contesto."
    ],
    noteTitle: "Nessun vincitore assoluto",
    note: "La piattaforma migliore dipende dall'uso desiderato, non da classifiche inventate.",
    relatedLinks: [
      { href: "/siti/siti-webcam-live", title: "Siti webcam live", copy: "Guida completa alla scelta." },
      { href: "/confronti/migliori-siti-webcam-live", title: "Migliori siti webcam live", copy: "Criteri senza classifiche finte." },
      { href: "/categorie/modelli-webcam-live", title: "Modelli webcam live", copy: "Scoperta profili live." }
    ],
    faq: [
      { question: "Come scelgo una chat webcam live?", answer: "Valuta privacy, mobile, anteprime, registrazione e costi possibili." },
      { question: "Le schede modello sono reali?", answer: "Quando presenti, mostrano profili reali senza dati inventati." },
      { question: "Meglio gratis o privata?", answer: "Dipende dall'obiettivo; le modalità hanno limiti diversi." }
    ],
    ctaTitle: "Esplora chat webcam live",
    ctaCopy: "Apri l'accesso live e controlla profili, anteprime e opzioni disponibili.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Apri chat live"
  },
  {
    slug: "siti-webcam-italia",
    path: "/ricerche/siti-webcam-italia",
    navTitle: "Siti webcam Italia",
    h1: "Siti Webcam Italia: Guida per Utenti Italiani alle Chat Live",
    metaTitle: "Siti Webcam Italia: Guida per Utenti Italiani alle Chat Live",
    description:
      "Guida italiana ai siti webcam live per utenti italiani: privacy, accesso mobile, modelli online, anteprime e criteri per scegliere.",
    kicker: "Utenti italiani",
    intro: "Siti webcam Italia indica una guida in lingua italiana, non una promessa di aziende locali o servizi gestiti in Italia.",
    quickAnswer:
      "Usa SessoChat.net per leggere criteri italiani su privacy, mobile, registrazione e funzioni private prima di aprire una piattaforma live.",
    guidanceTitle: "Cosa controllare dall'Italia",
    guidance: [
      "Chiarezza di lingua e percorso di registrazione.",
      "Accesso mobile da smartphone.",
      "Condizioni economiche leggibili.",
      "Guide italiane di supporto prima della scelta."
    ],
    noteTitle: "Nessuna falsa localizzazione",
    note: "Il sito è una risorsa italiana, non dichiara che le piattaforme esterne siano locali.",
    relatedLinks: [
      { href: "/argomenti/livejasmin-italia", title: "LiveJasmin Italia", copy: "Focus per utenti italiani." },
      { href: "/siti", title: "Siti webcam", copy: "Hub editoriale sulle piattaforme." },
      { href: "/guida/come-scegliere-un-sito-webcam", title: "Come scegliere", copy: "Metodo pratico di valutazione." }
    ],
    faq: [
      { question: "Sono siti italiani?", answer: "Non necessariamente. La guida è scritta per utenti italiani." },
      { question: "Posso usare questi siti da mobile?", answer: "Dipende dalla piattaforma, ma il mobile è un criterio centrale." },
      { question: "Ci sono recensioni con voti?", answer: "No. Non usiamo rating inventati." }
    ],
    ctaTitle: "Valuta opzioni live in italiano",
    ctaCopy: "Apri l'accesso live quando hai chiaro cosa controllare.",
    ctaHref: "/go/signup",
    ctaLabel: "Entra in modo sicuro"
  },
  {
    slug: "videochat-adulti",
    path: "/ricerche/videochat-adulti",
    navTitle: "Videochat adulti",
    h1: "Videochat Adulti: Come Scegliere una Piattaforma Live",
    metaTitle: "Videochat Adulti: Come Valutare Siti Live e Chat Private",
    description:
      "Scopri come scegliere una videochat adulti online con attenzione a privacy, anteprime, chat privata, accesso mobile e piattaforme sicure.",
    kicker: "Videochat adulti",
    intro: "Una videochat adulti va scelta con tono discreto e criteri chiari: privacy, anteprime, profili live, chat privata e mobile.",
    quickAnswer:
      "Prima di registrarti, controlla se la piattaforma spiega bene limiti, crediti, account e accesso da smartphone.",
    guidanceTitle: "Percorso di scelta",
    guidance: [
      "Parti dalle anteprime live.",
      "Verifica registrazione e privacy.",
      "Leggi costi o crediti prima della chat privata.",
      "Confronta alternative se cerchi esperienze diverse."
    ],
    noteTitle: "Adulto ma non esplicito",
    note: "La pagina usa un linguaggio informativo e non descrittivo, pensato per una scelta consapevole.",
    relatedLinks: [
      { href: "/argomenti/videochat-adulti-online", title: "Videochat adulti online", copy: "Approfondimento long-tail." },
      { href: "/siti/siti-cam-private", title: "Siti cam private", copy: "Focus su funzioni private." },
      { href: "/guida/chat-webcam-sicura", title: "Chat webcam sicura", copy: "Privacy e controlli." }
    ],
    faq: [
      { question: "Videochat adulti significa chat privata?", answer: "Non sempre. Può includere anteprime, aree live e funzioni private." },
      { question: "È necessario pagare?", answer: "Dipende dalle funzioni usate; verifica sempre prima." },
      { question: "Come scelgo in modo discreto?", answer: "Controlla mobile, privacy, account e condizioni." }
    ],
    ctaTitle: "Valuta videochat live",
    ctaCopy: "Apri le opzioni live e osserva anteprime, profili e condizioni.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Guarda videochat live"
  },
  {
    slug: "webcam-senza-account",
    path: "/ricerche/webcam-senza-account",
    navTitle: "Webcam senza account",
    h1: "Webcam Senza Account: Anteprime e Limiti da Conoscere",
    metaTitle: "Webcam Senza Account: Cosa Puoi Vedere Prima di Registrarti",
    description:
      "Guida alle webcam senza account: anteprime disponibili, limiti realistici, privacy e quando può essere necessario creare un profilo.",
    kicker: "Prima dell'account",
    intro: "Webcam senza account significa esplorare prima di creare un profilo, ma non tutte le funzioni restano aperte.",
    quickAnswer:
      "Puoi spesso guardare anteprime iniziali. Account, crediti e preferenze possono diventare necessari per funzioni private o complete.",
    guidanceTitle: "Prima di creare un profilo",
    guidance: [
      "Capisci cosa puoi vedere subito.",
      "Controlla quando compare la richiesta di registrazione.",
      "Leggi privacy e cookie.",
      "Evita passaggi non chiari."
    ],
    noteTitle: "Limiti realistici",
    note: "Una ricerca senza account non equivale a uso illimitato senza registrazione.",
    relatedLinks: [
      { href: "/argomenti/webcam-online-senza-registrazione", title: "Webcam online senza registrazione", copy: "Approfondimento sulle anteprime." },
      { href: "/siti/siti-webcam-senza-registrazione", title: "Siti senza registrazione", copy: "Risorsa dedicata." },
      { href: "/guida/webcam-senza-registrazione", title: "Guida senza registrazione", copy: "Spiegazione più ampia." }
    ],
    faq: [
      { question: "Posso usare webcam senza account?", answer: "Puoi valutare alcune anteprime, ma i limiti cambiano." },
      { question: "Quando serve registrarsi?", answer: "Quando vuoi usare funzioni personali, private o avanzate." },
      { question: "È più privato?", answer: "Non automaticamente. Controlla sempre privacy e cookie." }
    ],
    ctaTitle: "Valuta senza creare subito un account",
    ctaCopy: "Apri le opzioni live e osserva cosa è visibile prima della registrazione.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Guarda anteprime"
  },
  {
    slug: "chat-cam-senza-carta",
    path: "/ricerche/chat-cam-senza-carta",
    navTitle: "Chat cam senza carta",
    h1: "Chat Cam Senza Carta: Come Capire Opzioni e Limiti",
    metaTitle: "Chat Cam Senza Carta: Opzioni, Anteprime e Pagamenti",
    description:
      "Capisci come funzionano le chat cam senza carta, quali anteprime puoi vedere e cosa controllare prima di aggiungere un metodo di pagamento.",
    kicker: "Senza carta",
    intro: "Chat cam senza carta è una ricerca orientata al controllo: vuoi vedere prima, capire limiti e decidere se registrarti.",
    quickAnswer:
      "Senza carta puoi valutare anteprime e percorso iniziale. Pagamenti o crediti possono servire per chat privata o funzioni avanzate.",
    guidanceTitle: "Controlli economici",
    guidance: [
      "Non confondere anteprima e servizio completo.",
      "Cerca informazioni sui crediti.",
      "Controlla schermate di pagamento con calma.",
      "Non inserire dati se il costo non è chiaro."
    ],
    noteTitle: "Spesa consapevole",
    note: "SessoChat.net non inventa prezzi e invita a leggere sempre le condizioni ufficiali.",
    relatedLinks: [
      { href: "/argomenti/chat-webcam-senza-carta-di-credito", title: "Senza carta di credito", copy: "Landing correlata." },
      { href: "/siti/siti-webcam-senza-carta-di-credito", title: "Siti senza carta", copy: "Pagina di selezione." },
      { href: "/guida/prezzi-chat-webcam", title: "Prezzi chat webcam", copy: "Crediti e costi spiegati." }
    ],
    faq: [
      { question: "Senza carta significa gratis?", answer: "No. Significa valutare prima di inserire un metodo di pagamento." },
      { question: "Ci sono crediti?", answer: "Possono esserci, dipende dalla piattaforma." },
      { question: "Quando devo fermarmi?", answer: "Quando costi o condizioni non sono chiari." }
    ],
    ctaTitle: "Controlla le opzioni prima del pagamento",
    ctaCopy: "Apri l'accesso live e valuta anteprime e condizioni disponibili.",
    ctaHref: "/go/signup",
    ctaLabel: "Entra in modo sicuro"
  },
  {
    slug: "siti-webcam-mobile",
    path: "/ricerche/siti-webcam-mobile",
    navTitle: "Siti webcam mobile",
    h1: "Siti Webcam Mobile: Chat Live da Smartphone con Più Controllo",
    metaTitle: "Siti Webcam Mobile: Chat Cam Live da Smartphone",
    description:
      "Guida ai siti webcam mobile: accesso rapido, privacy da smartphone, modelli live, chat privata e navigazione discreta.",
    kicker: "Mobile",
    intro: "I siti webcam mobile devono essere rapidi, leggibili e discreti su schermi piccoli.",
    quickAnswer:
      "Da smartphone controlla soprattutto layout, pulsanti, privacy, notifiche, schermate di pagamento e facilità di uscita.",
    guidanceTitle: "Cosa controllare su mobile",
    guidance: [
      "Griglia modelli senza overflow.",
      "CTA leggibili e non aggressive.",
      "Privacy del browser e notifiche.",
      "Pagamenti comprensibili su schermo piccolo."
    ],
    noteTitle: "Discrezione mobile",
    note: "La riservatezza dipende anche da dispositivo, cronologia, notifiche e password salvate.",
    relatedLinks: [
      { href: "/siti/siti-webcam-mobile", title: "Siti webcam mobile", copy: "Approfondimento principale." },
      { href: "/guida/webcam-mobile", title: "Guida mobile", copy: "Consigli pratici." },
      { href: "/categorie/modelli-webcam-mobile", title: "Modelli mobile", copy: "Profili live da smartphone." }
    ],
    faq: [
      { question: "Meglio mobile o desktop?", answer: "Dipende dall'uso; mobile richiede più attenzione a privacy e leggibilità." },
      { question: "Posso usare chat privata da telefono?", answer: "Se la piattaforma lo consente, controllando prima costi e privacy." },
      { question: "Serve app?", answer: "Non necessariamente; spesso basta un browser aggiornato." }
    ],
    ctaTitle: "Apri opzioni live da smartphone",
    ctaCopy: "Valuta il percorso mobile tramite accesso interno.",
    ctaHref: "/go/signup",
    ctaLabel: "Apri da mobile"
  },
  {
    slug: "modelli-webcam-online",
    path: "/ricerche/modelli-webcam-online",
    navTitle: "Modelli webcam online",
    h1: "Modelli Webcam Online: Come Esplorare Profili Live",
    metaTitle: "Modelli Webcam Online: Profili Live e Accesso alle Chat Cam",
    description:
      "Scopri come esplorare modelli webcam online, profili live, anteprime, accesso mobile e opzioni di chat privata in modo consapevole.",
    kicker: "Profili live",
    intro: "Modelli webcam online è una ricerca di scoperta: vuoi vedere profili live e capire come entrare senza confusione.",
    quickAnswer:
      "Osserva profili reali, anteprime e filtri disponibili, poi controlla registrazione e funzioni private solo se ti interessa procedere.",
    guidanceTitle: "Scoperta profili",
    guidance: [
      "Non affidarti a nomi o status inventati.",
      "Guarda se le schede sono compatte e chiare.",
      "Usa categorie solo quando sono indicate dal sito.",
      "Controlla mobile e privacy prima dell'account."
    ],
    noteTitle: "Nessun dato inventato",
    note: "La pagina non aggiunge rating, paesi, conteggi o recensioni ai profili.",
    relatedLinks: [
      { href: "/categorie/modelli-webcam-online", title: "Categoria modelli online", copy: "Percorso dedicato ai profili live." },
      { href: "/categorie/modelli-webcam-verificati", title: "Modelli verificati", copy: "Per capire la verifica." },
      { href: "/siti/siti-webcam-live", title: "Siti webcam live", copy: "Piattaforme e anteprime." }
    ],
    faq: [
      { question: "I profili sono inventati?", answer: "No. Non vengono creati profili fittizi." },
      { question: "Posso filtrare i modelli?", answer: "Solo usando i filtri disponibili sulla piattaforma." },
      { question: "Serve registrarsi?", answer: "Dipende dalle funzioni richieste." }
    ],
    ctaTitle: "Esplora profili live",
    ctaCopy: "Apri le opzioni live e valuta i profili disponibili.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Guarda profili live"
  },
  {
    slug: "chat-privata-online",
    path: "/ricerche/chat-privata-online",
    navTitle: "Chat privata online",
    h1: "Chat Privata Online: Cosa Controllare Prima di Usarla",
    metaTitle: "Chat Privata Online: Webcam Live, Costi e Privacy",
    description:
      "Guida alla chat privata online con webcam live: cosa controllare su crediti, privacy, accesso, modelli disponibili e scelta della piattaforma.",
    kicker: "Chat privata",
    intro: "La chat privata online richiede più attenzione di una semplice anteprima: entrano in gioco account, crediti e privacy.",
    quickAnswer:
      "Prima di usare chat private, controlla costi, crediti, durata, impostazioni account e chiarezza del percorso.",
    guidanceTitle: "Prima della chat privata",
    guidance: [
      "Leggi il sistema crediti.",
      "Controlla privacy e notifiche.",
      "Verifica se puoi uscire facilmente dal percorso.",
      "Non procedere se le condizioni sono ambigue."
    ],
    noteTitle: "Controllo prima dell'uso",
    note: "La chat privata deve essere una scelta chiara, non un passaggio spinto da pulsanti poco leggibili.",
    relatedLinks: [
      { href: "/argomenti/chat-privata-webcam-online", title: "Chat privata webcam", copy: "Landing correlata." },
      { href: "/siti/siti-cam-private", title: "Siti cam private", copy: "Guida principale." },
      { href: "/confronti/chat-privata-vs-chat-gratis", title: "Privata vs gratis", copy: "Confronto pratico." }
    ],
    faq: [
      { question: "La chat privata è gratis?", answer: "Può richiedere crediti o pagamento, da verificare prima." },
      { question: "Serve un account?", answer: "Spesso sì, soprattutto per funzioni private." },
      { question: "Cosa controllo prima?", answer: "Costi, privacy, crediti, durata e condizioni." }
    ],
    ctaTitle: "Valuta opzioni private",
    ctaCopy: "Apri l'accesso live e controlla funzioni e condizioni.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Apri opzioni private"
  },
  {
    slug: "livejasmin-alternative-italia",
    path: "/ricerche/livejasmin-alternative-italia",
    navTitle: "Alternative LiveJasmin Italia",
    h1: "Alternative LiveJasmin Italia: Come Confrontare Siti Webcam",
    metaTitle: "Alternative LiveJasmin Italia: Come Confrontare Siti Webcam",
    description:
      "Scopri come valutare alternative a LiveJasmin per utenti italiani, tra chat webcam live, modelli online, mobile, privacy e chat private.",
    kicker: "Alternative LiveJasmin",
    intro: "Chi cerca alternative LiveJasmin Italia vuole capire quali criteri usare prima di scegliere un altro sito webcam live.",
    quickAnswer:
      "Confronta stile della piattaforma, anteprime, chat privata, mobile, privacy e condizioni economiche senza affidarti a classifiche inventate.",
    guidanceTitle: "Come confrontare alternative",
    guidance: [
      "Parti dal tipo di esperienza desiderata.",
      "Controlla registrazione e funzioni private.",
      "Valuta mobile e privacy.",
      "Leggi confronti dedicati prima di decidere."
    ],
    noteTitle: "Confronto qualitativo",
    note: "Non dichiariamo un vincitore assoluto: ogni alternativa va valutata in base al tuo intento.",
    relatedLinks: [
      { href: "/confronti/alternative-livejasmin", title: "Alternative LiveJasmin", copy: "Pagina confronto principale." },
      { href: "/argomenti/livejasmin-italia", title: "LiveJasmin Italia", copy: "Guida per utenti italiani." },
      { href: "/confronti/livejasmin-vs-chaturbate", title: "LiveJasmin vs Chaturbate", copy: "Confronto specifico." }
    ],
    faq: [
      { question: "Esiste la migliore alternativa a LiveJasmin?", answer: "Dipende da cosa cerchi: anteprime, mobile, chat privata o stile della piattaforma." },
      { question: "Fate classifiche?", answer: "No. Usiamo criteri qualitativi." },
      { question: "Posso valutare LiveJasmin direttamente?", answer: "Sì, tramite accesso interno dedicato." }
    ],
    ctaTitle: "Confronta partendo dalle opzioni live",
    ctaCopy: "Apri l'accesso live e valuta anteprime e profili disponibili.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Valuta opzioni live"
  },
  {
    slug: "webcam-live-sicure",
    path: "/ricerche/webcam-live-sicure",
    navTitle: "Webcam live sicure",
    h1: "Webcam Live Sicure: Privacy, Pagamenti e Scelta Consapevole",
    metaTitle: "Webcam Live Sicure: Privacy e Criteri per Scegliere",
    description:
      "Guida alle webcam live sicure: come valutare privacy, pagamenti, modelli verificati, accesso mobile e trasparenza della piattaforma.",
    kicker: "Sicurezza e privacy",
    intro: "Webcam live sicure non significa garanzia assoluta: significa saper leggere privacy, pagamenti, verifiche e trasparenza.",
    quickAnswer:
      "Cerca percorsi chiari, pagamenti spiegati, profili presentati in modo trasparente e impostazioni privacy comprensibili.",
    guidanceTitle: "Segnali pratici",
    guidance: [
      "Privacy e termini facili da trovare.",
      "Pagamenti e crediti spiegati prima dell'uso.",
      "Modelli verificati solo quando dichiarati.",
      "Navigazione mobile ordinata."
    ],
    noteTitle: "Niente garanzie assolute",
    note: "La sicurezza si valuta con criteri concreti e attenzione personale.",
    relatedLinks: [
      { href: "/argomenti/siti-webcam-sicuri", title: "Siti webcam sicuri", copy: "Landing correlata." },
      { href: "/guida/chat-webcam-sicura", title: "Chat webcam sicura", copy: "Guida completa." },
      { href: "/categorie/modelli-webcam-verificati", title: "Modelli verificati", copy: "Categoria dedicata." }
    ],
    faq: [
      { question: "Quali webcam live sono sicure?", answer: "Non indichiamo garanzie assolute; spieghiamo criteri di valutazione." },
      { question: "La verifica basta?", answer: "No. Aiuta, ma privacy e pagamenti restano importanti." },
      { question: "Cosa controllo subito?", answer: "Account, condizioni, costi, privacy e mobile." }
    ],
    ctaTitle: "Valuta con criteri chiari",
    ctaCopy: "Apri l'accesso live solo dopo aver controllato privacy e condizioni.",
    ctaHref: "/go/signup",
    ctaLabel: "Entra in modo sicuro"
  },
  {
    slug: "sesso-chat-webcam",
    path: "/ricerche/sesso-chat-webcam",
    navTitle: "Sesso chat webcam",
    h1: "Sesso Chat Webcam: Guida Discreta per Scegliere Dove Entrare",
    metaTitle: "Sesso Chat Webcam: Guida Discreta alle Chat Live",
    description:
      "Guida italiana a sesso chat webcam e piattaforme live: anteprime, modelli online, chat privata, mobile, privacy e registrazione.",
    kicker: "Ricerca adulta discreta",
    intro: "Sesso chat webcam è una ricerca adulta ampia. La trattiamo con tono professionale, senza contenuti espliciti e senza promesse false.",
    quickAnswer:
      "Valuta piattaforme con anteprime chiare, modelli live reali, privacy comprensibile, mobile ordinato e costi spiegati prima della chat privata.",
    guidanceTitle: "Come scegliere",
    guidance: [
      "Parti dalle anteprime e dai profili live.",
      "Controlla registrazione e privacy.",
      "Distingui gratuito e privato.",
      "Usa link interni per aprire accessi live."
    ],
    noteTitle: "Tono editoriale",
    note: "La pagina risponde alla ricerca senza usare linguaggio volgare o contenuti espliciti.",
    relatedLinks: [
      { href: "/argomenti/sesso-chat-online", title: "Sesso chat online", copy: "Argomento correlato." },
      { href: "/siti/siti-webcam-live", title: "Siti webcam live", copy: "Piattaforme da valutare." },
      { href: "/guida/chat-webcam-sicura", title: "Chat sicura", copy: "Privacy e controlli." }
    ],
    faq: [
      { question: "Questa pagina è esplicita?", answer: "No. È una guida discreta per adulti." },
      { question: "Serve registrarsi?", answer: "Dipende dalla piattaforma e dalle funzioni desiderate." },
      { question: "Come apro le opzioni live?", answer: "Usa i percorsi interni /go/ presenti nelle CTA." }
    ],
    ctaTitle: "Esplora opzioni live con discrezione",
    ctaCopy: "Apri l'accesso live e valuta anteprime, profili e condizioni.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Apri opzioni live"
  }
];

export const ricercheHubCards: RicercaLink[] = ricerchePages.map((page) => ({
  href: page.path,
  title: page.navTitle,
  copy: page.description
}));

export const ricerchePublicPages = [
  { path: "/ricerche", label: "Ricerche chat webcam" },
  ...ricerchePages.map((page) => ({ path: page.path, label: page.navTitle }))
];

export function getRicercaPage(slug: string) {
  return ricerchePages.find((page) => page.slug === slug);
}
