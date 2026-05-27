export type DomandaLink = {
  href: string;
  title: string;
  copy: string;
};

export type DomandaPage = {
  slug: string;
  path: string;
  navTitle: string;
  h1: string;
  metaTitle: string;
  description: string;
  kicker: string;
  intro: string;
  directAnswer: string;
  explanationTitle: string;
  explanation: string;
  stepsTitle: string;
  steps: string[];
  relatedLinks: DomandaLink[];
  relatedQuestions: DomandaLink[];
  faq: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaCopy: string;
  ctaHref: "/go/signup" | "/go/livejasmin";
  ctaLabel: string;
};

export const domandePages: DomandaPage[] = [
  {
    slug: "le-chat-webcam-sono-gratis",
    path: "/domande/le-chat-webcam-sono-gratis",
    navTitle: "Le chat webcam sono gratis?",
    h1: "Le Chat Webcam Sono Gratis? Cosa Aspettarsi Davvero",
    metaTitle: "Le Chat Webcam Sono Gratis? Anteprime, Limiti e Costi",
    description:
      "Capisci cosa significa chat webcam gratis, quali anteprime puoi vedere, quando serve registrarsi e quali costi possono comparire.",
    kicker: "Domanda sui costi",
    intro: "La parola gratis nelle chat webcam va letta con attenzione: spesso riguarda anteprime o accesso iniziale, non tutte le funzioni.",
    directAnswer:
      "In molti casi puoi vedere anteprime live o una parte del sito senza pagare, ma chat private, crediti o funzioni complete possono richiedere registrazione e costi.",
    explanationTitle: "Gratis non significa sempre completo",
    explanation:
      "Una piattaforma può offrire accesso iniziale, modelli visibili o pagine pubbliche, ma riservare funzioni private ad account e crediti. La scelta più prudente è controllare cosa è incluso prima di procedere.",
    stepsTitle: "Cosa controllare subito",
    steps: [
      "Distingui anteprima gratuita e uso completo.",
      "Controlla quando viene richiesta la registrazione.",
      "Leggi eventuali crediti prima della chat privata.",
      "Evita pagine che promettono tutto gratis senza spiegare i limiti."
    ],
    relatedLinks: [
      { href: "/decisione/costi-chat-webcam", title: "Costi chat webcam", copy: "Crediti, private e anteprime." },
      { href: "/siti/siti-cam-gratis", title: "Siti cam gratis", copy: "Come leggere le anteprime gratuite." },
      { href: "/guida/differenza-tra-chat-gratis-e-chat-privata", title: "Gratis o privata", copy: "Differenze pratiche." }
    ],
    relatedQuestions: [
      { href: "/domande/serve-registrazione-per-vedere-webcam", title: "Serve registrazione?", copy: "Quando l'account diventa necessario." },
      { href: "/domande/quanto-costa-una-chat-privata-webcam", title: "Quanto costa una privata?", copy: "Cosa incide sui costi." },
      { href: "/domande/perche-i-prezzi-delle-chat-webcam-variano", title: "Perché i prezzi variano?", copy: "Crediti, funzioni e piattaforme." }
    ],
    faq: [
      { question: "Le chat webcam sono davvero gratis?", answer: "Possono offrire anteprime gratuite, ma non sempre tutte le funzioni sono incluse." },
      { question: "La chat privata è gratis?", answer: "Spesso può richiedere crediti o pagamento, da verificare prima dell'uso." },
      { question: "Come evito sorprese?", answer: "Controlla limiti, account, crediti e conferme prima di registrarti." }
    ],
    ctaTitle: "Guarda le opzioni live con più chiarezza",
    ctaCopy: "Apri l'accesso live e valuta anteprime, limiti e condizioni prima della registrazione.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Guarda opzioni live"
  },
  {
    slug: "serve-registrazione-per-vedere-webcam",
    path: "/domande/serve-registrazione-per-vedere-webcam",
    navTitle: "Serve registrazione?",
    h1: "Serve Registrazione per Vedere Webcam Live?",
    metaTitle: "Serve Registrazione per Vedere Webcam Live? Risposta Chiara",
    description:
      "Scopri quando puoi vedere webcam live senza registrazione, quali limiti aspettarti e quando può essere necessario creare un account.",
    kicker: "Registrazione",
    intro: "Molti utenti vogliono capire se possono guardare webcam live prima di creare un account.",
    directAnswer:
      "A volte puoi vedere anteprime o profili iniziali senza registrazione, ma l'account può servire per chat private, preferenze, crediti o funzioni complete.",
    explanationTitle: "Quando l'account diventa utile",
    explanation:
      "La registrazione permette alle piattaforme di gestire preferenze, limiti, pagamenti e accesso a funzioni private. Prima di creare un account, controlla quali dati vengono richiesti e quali funzioni si sbloccano.",
    stepsTitle: "Prima di registrarti",
    steps: [
      "Osserva cosa è visibile senza account.",
      "Leggi privacy e condizioni di registrazione.",
      "Controlla se servono crediti dopo l'accesso.",
      "Procedi solo se il percorso è chiaro."
    ],
    relatedLinks: [
      { href: "/siti/siti-webcam-senza-registrazione", title: "Siti senza registrazione", copy: "Aspettative realistiche." },
      { href: "/guida/webcam-senza-registrazione", title: "Guida senza registrazione", copy: "Anteprime e limiti." },
      { href: "/decisione/chat-webcam-privacy", title: "Privacy chat webcam", copy: "Account e dati personali." }
    ],
    relatedQuestions: [
      { href: "/domande/serve-carta-di-credito-per-chat-webcam", title: "Serve carta di credito?", copy: "Pagamento e registrazione." },
      { href: "/domande/le-chat-webcam-sono-gratis", title: "Sono gratis?", copy: "Anteprime e costi possibili." },
      { href: "/domande/posso-usare-chat-webcam-da-cellulare", title: "Da cellulare?", copy: "Uso mobile e privacy." }
    ],
    faq: [
      { question: "Posso vedere webcam senza registrazione?", answer: "In alcuni casi puoi vedere anteprime, ma non tutte le funzioni." },
      { question: "Perché viene richiesto un account?", answer: "Per gestire preferenze, accesso, crediti o funzioni private." },
      { question: "Devo inserire molti dati?", answer: "Dipende dalla piattaforma; controlla sempre privacy e condizioni." }
    ],
    ctaTitle: "Valuta prima di creare un account",
    ctaCopy: "Apri le opzioni live e controlla cosa è visibile prima della registrazione.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Guarda anteprime live"
  },
  {
    slug: "serve-carta-di-credito-per-chat-webcam",
    path: "/domande/serve-carta-di-credito-per-chat-webcam",
    navTitle: "Serve carta di credito?",
    h1: "Serve Carta di Credito per una Chat Webcam?",
    metaTitle: "Serve Carta di Credito per una Chat Webcam? Cosa Sapere",
    description:
      "Guida italiana su carta di credito e chat webcam: anteprime, registrazione, pagamenti, crediti e controlli prima di inserire dati.",
    kicker: "Carta e pagamenti",
    intro: "La carta di credito è una delle domande più comuni prima di entrare in una chat webcam.",
    directAnswer:
      "Non sempre serve subito una carta: alcune anteprime possono essere visibili prima del pagamento, ma crediti e chat private possono richiedere un metodo valido.",
    explanationTitle: "Prima del metodo di pagamento",
    explanation:
      "Separare esplorazione, registrazione e pagamento aiuta a non confondere i passaggi. Inserisci dati solo quando costi, crediti e condizioni sono leggibili.",
    stepsTitle: "Controlli prima della carta",
    steps: [
      "Verifica cosa puoi vedere senza pagamento.",
      "Leggi come funzionano crediti o pacchetti.",
      "Controlla privacy e gestione account.",
      "Non procedere se il costo non è chiaro."
    ],
    relatedLinks: [
      { href: "/decisione/chat-webcam-pagamenti", title: "Pagamenti chat webcam", copy: "Metodi, crediti e controlli." },
      { href: "/argomenti/chat-webcam-senza-carta-di-credito", title: "Senza carta di credito", copy: "Opzioni e limiti reali." },
      { href: "/siti/siti-webcam-senza-carta-di-credito", title: "Siti senza carta", copy: "Guida alla scelta." }
    ],
    relatedQuestions: [
      { href: "/domande/come-funzionano-i-crediti-webcam", title: "Come funzionano i crediti?", copy: "Sistema crediti spiegato." },
      { href: "/domande/quanto-costa-una-chat-privata-webcam", title: "Costo chat privata", copy: "Cosa valutare." },
      { href: "/domande/come-proteggere-la-privacy-in-chat-webcam", title: "Privacy", copy: "Dati e pagamenti." }
    ],
    faq: [
      { question: "Serve carta per vedere anteprime?", answer: "Non sempre; dipende dalla piattaforma e dal tipo di accesso." },
      { question: "Serve carta per chat private?", answer: "Può servire un metodo di pagamento o crediti, da verificare prima." },
      { question: "Cosa controllo prima?", answer: "Crediti, costi, conferme, privacy e gestione account." }
    ],
    ctaTitle: "Controlla le opzioni prima del pagamento",
    ctaCopy: "Apri l'accesso live e valuta anteprime, registrazione e passaggi economici.",
    ctaHref: "/go/signup",
    ctaLabel: "Entra in modo sicuro"
  },
  {
    slug: "come-funzionano-i-crediti-webcam",
    path: "/domande/come-funzionano-i-crediti-webcam",
    navTitle: "Crediti webcam",
    h1: "Come Funzionano i Crediti nelle Chat Webcam?",
    metaTitle: "Come Funzionano i Crediti Webcam? Guida Semplice",
    description:
      "Scopri come funzionano i crediti nelle chat webcam, cosa controllare prima di usarli e come gestire costi, privacy e pagamenti.",
    kicker: "Crediti",
    intro: "I crediti sono spesso il punto da capire prima di usare funzioni private o avanzate.",
    directAnswer:
      "I crediti sono unità usate da alcune piattaforme per accedere a funzioni o chat private. Il valore e il consumo vanno verificati sulla piattaforma.",
    explanationTitle: "Perché i crediti contano",
    explanation:
      "Un sistema a crediti può rendere più ordinato il pagamento, ma solo se spiega bene cosa viene acquistato, quando viene scalato e quali conferme appaiono.",
    stepsTitle: "Prima di usare crediti",
    steps: [
      "Capisci quali funzioni richiedono crediti.",
      "Controlla eventuali conferme prima dell'uso.",
      "Leggi limiti, condizioni e privacy.",
      "Mantieni il controllo della spesa."
    ],
    relatedLinks: [
      { href: "/decisione/chat-webcam-con-crediti", title: "Chat con crediti", copy: "Funzionamento e controlli." },
      { href: "/decisione/livejasmin-costi-crediti", title: "LiveJasmin costi e crediti", copy: "Focus LiveJasmin." },
      { href: "/guida/prezzi-chat-webcam", title: "Prezzi chat webcam", copy: "Costi e crediti spiegati." }
    ],
    relatedQuestions: [
      { href: "/domande/perche-i-prezzi-delle-chat-webcam-variano", title: "Perché i prezzi variano?", copy: "Funzioni e durata." },
      { href: "/domande/quanto-costa-una-chat-privata-webcam", title: "Costo privata", copy: "Prima di spendere." },
      { href: "/domande/serve-carta-di-credito-per-chat-webcam", title: "Serve carta?", copy: "Pagamenti e dati." }
    ],
    faq: [
      { question: "I crediti hanno sempre lo stesso valore?", answer: "No. Ogni piattaforma può gestirli in modo diverso." },
      { question: "I crediti sono necessari?", answer: "Dipende dalle funzioni che vuoi usare." },
      { question: "Come evito spese non chiare?", answer: "Leggi consumo, conferme e condizioni prima di procedere." }
    ],
    ctaTitle: "Valuta crediti e funzioni live",
    ctaCopy: "Apri l'accesso live e controlla come sono presentati crediti e condizioni.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Controlla opzioni live"
  },
  {
    slug: "quanto-costa-una-chat-privata-webcam",
    path: "/domande/quanto-costa-una-chat-privata-webcam",
    navTitle: "Costo chat privata",
    h1: "Quanto Costa una Chat Privata Webcam?",
    metaTitle: "Quanto Costa una Chat Privata Webcam? Cosa Valutare",
    description:
      "Risposta chiara sui costi delle chat private webcam: crediti, durata, piattaforma, anteprime e controlli prima di spendere.",
    kicker: "Chat privata",
    intro: "Il costo di una chat privata webcam non va stimato con numeri inventati: dipende da piattaforma, crediti e funzione.",
    directAnswer:
      "Non esiste un costo unico affidabile per tutte le chat private. Devi controllare crediti, durata, conferme e condizioni prima di entrare.",
    explanationTitle: "Perché il costo cambia",
    explanation:
      "Le piattaforme possono usare crediti, pacchetti o funzioni diverse. Per questo è più utile sapere cosa leggere prima di spendere invece di fidarsi di cifre generiche.",
    stepsTitle: "Prima di una chat privata",
    steps: [
      "Controlla se la funzione richiede crediti.",
      "Verifica durata e conferme.",
      "Leggi privacy e condizioni.",
      "Procedi solo se il costo è comprensibile."
    ],
    relatedLinks: [
      { href: "/decisione/costi-chat-webcam", title: "Costi chat webcam", copy: "Quadro decisionale." },
      { href: "/decisione/chat-webcam-private-sicure", title: "Private sicure", copy: "Privacy e costi." },
      { href: "/siti/siti-cam-private", title: "Siti cam private", copy: "Guida alle funzioni private." }
    ],
    relatedQuestions: [
      { href: "/domande/come-funzionano-i-crediti-webcam", title: "Crediti webcam", copy: "Come vengono usati." },
      { href: "/domande/le-chat-webcam-sono-gratis", title: "Sono gratis?", copy: "Anteprime e limiti." },
      { href: "/domande/differenza-tra-chat-pubblica-e-chat-privata", title: "Pubblica o privata?", copy: "Differenze essenziali." }
    ],
    faq: [
      { question: "Quanto costa una chat privata?", answer: "Dipende da piattaforma, crediti e funzione usata; controlla prima di procedere." },
      { question: "La durata incide?", answer: "Può incidere, secondo il sistema della piattaforma." },
      { question: "Posso vedere prima le condizioni?", answer: "Dovresti cercarle prima di usare funzioni private." }
    ],
    ctaTitle: "Controlla prima della chat privata",
    ctaCopy: "Apri le opzioni live e valuta costi, crediti e privacy prima di usare funzioni private.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Valuta chat private"
  },
  {
    slug: "livejasmin-e-sicuro",
    path: "/domande/livejasmin-e-sicuro",
    navTitle: "LiveJasmin è sicuro?",
    h1: "LiveJasmin è Sicuro? Cosa Controllare",
    metaTitle: "LiveJasmin è Sicuro? Privacy, Pagamenti e Controlli",
    description:
      "Guida italiana per valutare LiveJasmin in modo consapevole: privacy, pagamenti, accesso mobile, modelli live e aspetti da controllare.",
    kicker: "LiveJasmin e sicurezza",
    intro: "La domanda non va trattata come garanzia assoluta: serve capire quali segnali controllare prima dell'accesso.",
    directAnswer:
      "Puoi valutare LiveJasmin controllando privacy, account, pagamenti, crediti, accesso mobile e chiarezza delle funzioni prima di registrarti.",
    explanationTitle: "Sicurezza come insieme di controlli",
    explanation:
      "Una piattaforma può essere più o meno adatta alle tue esigenze in base a trasparenza, privacy, pagamenti e modo in cui presenta profili e funzioni.",
    stepsTitle: "Controlli consigliati",
    steps: [
      "Leggi privacy e condizioni.",
      "Controlla crediti e pagamenti.",
      "Valuta esperienza mobile.",
      "Confronta alternative se vuoi più contesto."
    ],
    relatedLinks: [
      { href: "/decisione/livejasmin-italia-recensione-guida", title: "LiveJasmin Italia", copy: "Guida pratica alla valutazione." },
      { href: "/decisione/prezzi-livejasmin", title: "Prezzi LiveJasmin", copy: "Costi e crediti da controllare." },
      { href: "/confronti/alternative-livejasmin", title: "Alternative LiveJasmin", copy: "Confronto qualitativo." }
    ],
    relatedQuestions: [
      { href: "/domande/alternative-livejasmin-per-utenti-italiani", title: "Alternative LiveJasmin", copy: "Cosa valutare." },
      { href: "/domande/come-proteggere-la-privacy-in-chat-webcam", title: "Privacy in chat", copy: "Controlli personali." },
      { href: "/domande/come-funzionano-i-crediti-webcam", title: "Crediti webcam", copy: "Funzionamento e spesa." }
    ],
    faq: [
      { question: "LiveJasmin è sicuro?", answer: "Va valutato controllando privacy, pagamenti, account, mobile e condizioni." },
      { question: "È un giudizio ufficiale?", answer: "No. È una risposta editoriale per utenti italiani." },
      { question: "Posso confrontare alternative?", answer: "Sì, il sito include pagine confronto e guide dedicate." }
    ],
    ctaTitle: "Valuta LiveJasmin con criteri chiari",
    ctaCopy: "Apri LiveJasmin tramite percorso interno e controlla profili, privacy e condizioni.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Apri LiveJasmin"
  },
  {
    slug: "come-proteggere-la-privacy-in-chat-webcam",
    path: "/domande/come-proteggere-la-privacy-in-chat-webcam",
    navTitle: "Proteggere la privacy",
    h1: "Come Proteggere la Privacy in una Chat Webcam",
    metaTitle: "Come Proteggere la Privacy in una Chat Webcam",
    description:
      "Consigli pratici per proteggere la privacy nelle chat webcam: account, browser, pagamenti, mobile, dati personali e navigazione discreta.",
    kicker: "Privacy",
    intro: "La privacy dipende sia dalla piattaforma sia dalle tue impostazioni su browser, dispositivo e account.",
    directAnswer:
      "Per proteggere la privacy, controlla dati richiesti, cronologia, notifiche, password salvate, pagamenti e condizioni prima di registrarti.",
    explanationTitle: "La discrezione è pratica",
    explanation:
      "Non basta scegliere un sito: serve usare il dispositivo con attenzione, soprattutto su smartphone o computer condivisi.",
    stepsTitle: "Passi consigliati",
    steps: [
      "Usa un browser aggiornato.",
      "Controlla notifiche e cronologia.",
      "Leggi privacy e termini prima dell'account.",
      "Verifica pagamenti e dati salvati."
    ],
    relatedLinks: [
      { href: "/decisione/chat-webcam-privacy", title: "Privacy chat webcam", copy: "Guida decisionale." },
      { href: "/decisione/chat-webcam-sicura", title: "Chat webcam sicura", copy: "Segnali da controllare." },
      { href: "/guida/chat-webcam-sicura", title: "Guida sicurezza", copy: "Approfondimento pratico." }
    ],
    relatedQuestions: [
      { href: "/domande/livejasmin-e-sicuro", title: "LiveJasmin è sicuro?", copy: "Privacy e controlli." },
      { href: "/domande/posso-usare-chat-webcam-da-cellulare", title: "Usare da cellulare", copy: "Privacy mobile." },
      { href: "/domande/serve-carta-di-credito-per-chat-webcam", title: "Serve carta?", copy: "Pagamenti e dati." }
    ],
    faq: [
      { question: "Come navigo in modo più discreto?", answer: "Controlla browser, cronologia, notifiche, account e dati salvati." },
      { question: "Il cellulare è più privato?", answer: "Non necessariamente: notifiche e salvataggi possono creare rischi." },
      { question: "La privacy è garantita?", answer: "No. Puoi però ridurre rischi con controlli pratici e scelte consapevoli." }
    ],
    ctaTitle: "Procedi con attenzione alla privacy",
    ctaCopy: "Apri l'accesso live solo dopo aver controllato impostazioni e condizioni.",
    ctaHref: "/go/signup",
    ctaLabel: "Entra in modo sicuro"
  },
  {
    slug: "posso-usare-chat-webcam-da-cellulare",
    path: "/domande/posso-usare-chat-webcam-da-cellulare",
    navTitle: "Chat webcam da cellulare",
    h1: "Posso Usare una Chat Webcam da Cellulare?",
    metaTitle: "Posso Usare Chat Webcam da Cellulare? Guida Mobile",
    description:
      "Scopri come usare chat webcam da cellulare, cosa controllare su privacy, caricamento, account, pagamenti e navigazione mobile.",
    kicker: "Mobile",
    intro: "Molti utenti preferiscono lo smartphone, ma lo schermo piccolo richiede percorsi chiari e controlli privacy.",
    directAnswer:
      "Sì, molte piattaforme possono essere usate da cellulare. Controlla però caricamento, layout, notifiche, privacy e pagamenti prima di procedere.",
    explanationTitle: "Mobile significa più attenzione",
    explanation:
      "Su cellulare è facile cliccare rapidamente o non leggere tutto. Prima di registrarti, verifica che pulsanti, crediti e condizioni siano comprensibili.",
    stepsTitle: "Checklist mobile",
    steps: [
      "Controlla che la pagina non abbia overflow.",
      "Verifica notifiche e privacy del browser.",
      "Leggi pagamenti su schermo piccolo.",
      "Evita dispositivi condivisi."
    ],
    relatedLinks: [
      { href: "/siti/siti-webcam-mobile", title: "Siti webcam mobile", copy: "Guida alla scelta mobile." },
      { href: "/guida/webcam-mobile", title: "Guida webcam mobile", copy: "Consigli da smartphone." },
      { href: "/categorie/modelli-webcam-mobile", title: "Modelli mobile", copy: "Scoperta profili da telefono." }
    ],
    relatedQuestions: [
      { href: "/domande/come-proteggere-la-privacy-in-chat-webcam", title: "Proteggere privacy", copy: "Mobile e dati personali." },
      { href: "/domande/serve-registrazione-per-vedere-webcam", title: "Serve registrazione?", copy: "Account da mobile." },
      { href: "/domande/serve-carta-di-credito-per-chat-webcam", title: "Serve carta?", copy: "Pagamenti su smartphone." }
    ],
    faq: [
      { question: "Posso usare chat webcam da telefono?", answer: "Sì, se la piattaforma è compatibile e leggibile da mobile." },
      { question: "Serve un'app?", answer: "Non sempre; spesso basta un browser aggiornato." },
      { question: "Cosa controllo su mobile?", answer: "Privacy, notifiche, pagamenti, layout e facilità di uscita." }
    ],
    ctaTitle: "Apri opzioni live da mobile",
    ctaCopy: "Valuta l'accesso live da smartphone con attenzione a privacy e pagamenti.",
    ctaHref: "/go/signup",
    ctaLabel: "Apri da cellulare"
  },
  {
    slug: "cosa-sono-i-modelli-webcam-verificati",
    path: "/domande/cosa-sono-i-modelli-webcam-verificati",
    navTitle: "Modelli verificati",
    h1: "Cosa Sono i Modelli Webcam Verificati?",
    metaTitle: "Cosa Sono i Modelli Webcam Verificati? Significato e Utilità",
    description:
      "Spiegazione dei modelli webcam verificati: perché possono contare, cosa controllare sulla piattaforma e quali limiti considerare.",
    kicker: "Verifica modelli",
    intro: "La verifica dei modelli può essere un segnale utile quando valuti una piattaforma webcam live.",
    directAnswer:
      "I modelli webcam verificati sono profili che la piattaforma dichiara di aver controllato secondo proprie procedure. È un criterio utile, non una garanzia assoluta.",
    explanationTitle: "Perché la verifica può contare",
    explanation:
      "La verifica può aiutare a distinguere profili gestiti in modo più trasparente, ma va letta insieme a privacy, pagamenti e regole della piattaforma.",
    stepsTitle: "Come leggere la verifica",
    steps: [
      "Cerca indicazioni ufficiali della piattaforma.",
      "Non attribuire verifiche se non sono dichiarate.",
      "Controlla anche privacy e costi.",
      "Evita aspettative basate su dati inventati."
    ],
    relatedLinks: [
      { href: "/decisione/siti-webcam-con-modelli-verificati", title: "Siti con modelli verificati", copy: "Guida decisionale." },
      { href: "/guida/modelli-webcam-verificati", title: "Guida modelli verificati", copy: "Approfondimento." },
      { href: "/categorie/modelli-webcam-verificati", title: "Categoria verificati", copy: "Percorso di scoperta." }
    ],
    relatedQuestions: [
      { href: "/domande/come-scegliere-un-sito-webcam-affidabile", title: "Sito affidabile", copy: "Criteri più ampi." },
      { href: "/domande/livejasmin-e-sicuro", title: "LiveJasmin è sicuro?", copy: "Sicurezza e privacy." },
      { href: "/domande/differenza-tra-chat-pubblica-e-chat-privata", title: "Pubblica o privata", copy: "Funzioni e accesso." }
    ],
    faq: [
      { question: "La verifica garantisce sicurezza?", answer: "No. È un segnale utile, ma non sostituisce altri controlli." },
      { question: "SessoChat inventa verifiche?", answer: "No. Non attribuiamo verifiche non supportate da dati affidabili." },
      { question: "Perché è utile?", answer: "Può indicare una piattaforma più attenta alla presentazione dei profili." }
    ],
    ctaTitle: "Esplora profili live con criteri chiari",
    ctaCopy: "Apri l'accesso live e valuta profili, privacy e condizioni.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Guarda profili live"
  },
  {
    slug: "differenza-tra-chat-pubblica-e-chat-privata",
    path: "/domande/differenza-tra-chat-pubblica-e-chat-privata",
    navTitle: "Pubblica o privata",
    h1: "Differenza tra Chat Pubblica e Chat Privata Webcam",
    metaTitle: "Chat Pubblica o Chat Privata Webcam: Qual è la Differenza?",
    description:
      "Capisci la differenza tra chat pubblica e chat privata webcam, cosa cambia per accesso, interazione, privacy e possibili costi.",
    kicker: "Tipi di chat",
    intro: "Capire la differenza tra area pubblica e chat privata aiuta a evitare confusione su costi e privacy.",
    directAnswer:
      "La chat pubblica o anteprima può essere più aperta e limitata; la chat privata di solito offre funzioni più personali e può richiedere account o crediti.",
    explanationTitle: "Cosa cambia davvero",
    explanation:
      "La differenza non è solo tecnica: cambiano accesso, livello di interazione, possibili costi, privacy e regole della piattaforma.",
    stepsTitle: "Come scegliere",
    steps: [
      "Usa anteprime per capire la piattaforma.",
      "Leggi costi prima delle funzioni private.",
      "Controlla privacy e account.",
      "Scegli in base al tuo intento, non alla pressione dei CTA."
    ],
    relatedLinks: [
      { href: "/confronti/chat-privata-vs-chat-gratis", title: "Privata vs gratis", copy: "Confronto pratico." },
      { href: "/siti/siti-cam-private", title: "Siti cam private", copy: "Guida alla chat privata." },
      { href: "/decisione/chat-webcam-private-sicure", title: "Private sicure", copy: "Privacy e costi." }
    ],
    relatedQuestions: [
      { href: "/domande/quanto-costa-una-chat-privata-webcam", title: "Costo privata", copy: "Crediti e durata." },
      { href: "/domande/le-chat-webcam-sono-gratis", title: "Sono gratis?", copy: "Anteprime e limiti." },
      { href: "/domande/come-funzionano-i-crediti-webcam", title: "Crediti webcam", copy: "Sistema di pagamento." }
    ],
    faq: [
      { question: "La chat pubblica è gratis?", answer: "Può essere parte dell'anteprima, ma dipende dalla piattaforma." },
      { question: "La chat privata costa?", answer: "Può richiedere crediti o pagamento, da controllare prima." },
      { question: "Quale scegliere?", answer: "Dipende dal livello di interazione, privacy e controllo che desideri." }
    ],
    ctaTitle: "Valuta pubblica e privata prima di scegliere",
    ctaCopy: "Apri l'accesso live e controlla le opzioni disponibili con calma.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Apri opzioni live"
  },
  {
    slug: "come-scegliere-un-sito-webcam-affidabile",
    path: "/domande/come-scegliere-un-sito-webcam-affidabile",
    navTitle: "Sito webcam affidabile",
    h1: "Come Scegliere un Sito Webcam Affidabile",
    metaTitle: "Come Scegliere un Sito Webcam Affidabile",
    description:
      "Criteri pratici per scegliere un sito webcam affidabile: privacy, pagamenti, modelli verificati, mobile, trasparenza e accesso.",
    kicker: "Affidabilità",
    intro: "Un sito webcam affidabile si valuta con criteri concreti, non con slogan o classifiche inventate.",
    directAnswer:
      "Controlla privacy, pagamenti, chiarezza dei crediti, accesso mobile, presentazione dei profili e condizioni prima di registrarti.",
    explanationTitle: "Affidabilità come insieme di segnali",
    explanation:
      "La piattaforma dovrebbe rendere comprensibili limiti, costi, account e percorsi. Quando una pagina spinge senza spiegare, conviene rallentare.",
    stepsTitle: "Criteri rapidi",
    steps: [
      "Privacy e termini facili da trovare.",
      "Pagamenti spiegati prima dell'uso.",
      "Profili presentati senza dati fantasiosi.",
      "Esperienza mobile leggibile."
    ],
    relatedLinks: [
      { href: "/decisione/siti-webcam-affidabili", title: "Siti webcam affidabili", copy: "Guida decisionale." },
      { href: "/argomenti/siti-webcam-sicuri", title: "Siti webcam sicuri", copy: "Criteri di sicurezza." },
      { href: "/confronti/migliori-siti-webcam-live", title: "Scegliere siti live", copy: "Framework senza ranking falsi." }
    ],
    relatedQuestions: [
      { href: "/domande/cosa-sono-i-modelli-webcam-verificati", title: "Modelli verificati", copy: "Un criterio utile." },
      { href: "/domande/come-proteggere-la-privacy-in-chat-webcam", title: "Privacy", copy: "Controlli personali." },
      { href: "/domande/livejasmin-e-sicuro", title: "LiveJasmin è sicuro?", copy: "Esempio di valutazione." }
    ],
    faq: [
      { question: "Come scelgo un sito affidabile?", answer: "Valuta privacy, pagamenti, mobile, profili e chiarezza delle funzioni." },
      { question: "Serve una classifica?", answer: "No. I criteri pratici sono più utili di numeri non verificabili." },
      { question: "I modelli verificati bastano?", answer: "No. Sono solo uno dei segnali da considerare." }
    ],
    ctaTitle: "Valuta una piattaforma con criteri chiari",
    ctaCopy: "Apri l'accesso live e osserva profili, privacy e condizioni.",
    ctaHref: "/go/signup",
    ctaLabel: "Apri accesso live"
  },
  {
    slug: "alternative-livejasmin-per-utenti-italiani",
    path: "/domande/alternative-livejasmin-per-utenti-italiani",
    navTitle: "Alternative LiveJasmin",
    h1: "Alternative LiveJasmin per Utenti Italiani",
    metaTitle: "Alternative LiveJasmin per Utenti Italiani: Cosa Valutare",
    description:
      "Scopri come valutare alternative a LiveJasmin per utenti italiani, confrontando chat live, privacy, mobile, crediti e modelli online.",
    kicker: "Alternative",
    intro: "Chi cerca alternative a LiveJasmin di solito vuole capire quali criteri usare prima di cambiare piattaforma.",
    directAnswer:
      "Confronta alternative guardando esperienza live, privacy, pagamenti, mobile, crediti, profili disponibili e chiarezza delle condizioni.",
    explanationTitle: "Alternative senza ranking finti",
    explanation:
      "Non serve dichiarare un vincitore assoluto: una piattaforma può essere più adatta se risponde meglio al tuo intento e spiega bene costi e limiti.",
    stepsTitle: "Come confrontare",
    steps: [
      "Definisci cosa cerchi: anteprime, mobile o private.",
      "Controlla crediti e pagamenti.",
      "Leggi privacy e registrazione.",
      "Apri confronti specifici se hai dubbi."
    ],
    relatedLinks: [
      { href: "/confronti/alternative-livejasmin", title: "Alternative LiveJasmin", copy: "Confronto dedicato." },
      { href: "/ricerche/livejasmin-alternative-italia", title: "Alternative LiveJasmin Italia", copy: "Ricerca correlata." },
      { href: "/decisione/livejasmin-italia-recensione-guida", title: "LiveJasmin Italia", copy: "Guida alla piattaforma." }
    ],
    relatedQuestions: [
      { href: "/domande/livejasmin-e-sicuro", title: "LiveJasmin è sicuro?", copy: "Privacy e controlli." },
      { href: "/domande/come-scegliere-un-sito-webcam-affidabile", title: "Sito affidabile", copy: "Criteri generali." },
      { href: "/domande/perche-i-prezzi-delle-chat-webcam-variano", title: "Prezzi variabili", copy: "Costi e crediti." }
    ],
    faq: [
      { question: "Qual è la migliore alternativa a LiveJasmin?", answer: "Dipende dall'esperienza desiderata e dai criteri che vuoi privilegiare." },
      { question: "Devo confrontare i costi?", answer: "Sì, soprattutto crediti, funzioni private e condizioni." },
      { question: "Le alternative sono tutte uguali?", answer: "No. Cambiano approccio, mobile, privacy, profili e pagamenti." }
    ],
    ctaTitle: "Valuta LiveJasmin e alternative",
    ctaCopy: "Apri l'accesso live e usa i confronti interni per orientarti.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Valuta opzioni live"
  },
  {
    slug: "perche-i-prezzi-delle-chat-webcam-variano",
    path: "/domande/perche-i-prezzi-delle-chat-webcam-variano",
    navTitle: "Perché i prezzi variano?",
    h1: "Perché i Prezzi delle Chat Webcam Variano?",
    metaTitle: "Perché i Prezzi delle Chat Webcam Variano?",
    description:
      "Spiegazione dei prezzi nelle chat webcam: crediti, chat private, piattaforma, durata, funzioni disponibili e controlli da fare.",
    kicker: "Prezzi variabili",
    intro: "I prezzi delle chat webcam possono variare perché ogni piattaforma gestisce funzioni, crediti e accessi in modo diverso.",
    directAnswer:
      "I prezzi variano per sistema crediti, tipo di chat, durata, funzioni disponibili, piattaforma e condizioni applicate nel momento dell'uso.",
    explanationTitle: "La cifra non basta",
    explanation:
      "Un numero isolato non spiega cosa include una funzione. È più utile controllare crediti, conferme, durata e privacy prima di usare servizi privati.",
    stepsTitle: "Come leggere i prezzi",
    steps: [
      "Controlla cosa include la funzione.",
      "Leggi come vengono scalati i crediti.",
      "Verifica durata e conferme.",
      "Confronta guide e condizioni prima di spendere."
    ],
    relatedLinks: [
      { href: "/decisione/costi-chat-webcam", title: "Costi chat webcam", copy: "Quadro completo sui costi." },
      { href: "/decisione/chat-webcam-con-crediti", title: "Chat con crediti", copy: "Sistema crediti." },
      { href: "/guida/prezzi-chat-webcam", title: "Prezzi chat webcam", copy: "Guida pratica ai costi." }
    ],
    relatedQuestions: [
      { href: "/domande/come-funzionano-i-crediti-webcam", title: "Crediti webcam", copy: "Come funzionano." },
      { href: "/domande/quanto-costa-una-chat-privata-webcam", title: "Costo privata", copy: "Cosa valutare." },
      { href: "/domande/serve-carta-di-credito-per-chat-webcam", title: "Serve carta?", copy: "Pagamento e registrazione." }
    ],
    faq: [
      { question: "Perché i prezzi cambiano?", answer: "Per funzioni, crediti, durata, piattaforma e condizioni applicate." },
      { question: "Posso sapere un prezzo unico?", answer: "No, non in modo affidabile per tutte le piattaforme." },
      { question: "Cosa controllo prima?", answer: "Crediti, durata, conferme, privacy e condizioni." }
    ],
    ctaTitle: "Controlla prezzi e condizioni reali",
    ctaCopy: "Apri l'accesso live e verifica funzioni e crediti prima di procedere.",
    ctaHref: "/go/livejasmin",
    ctaLabel: "Guarda opzioni live"
  }
];

export const domandeHubCards: DomandaLink[] = domandePages.map((page) => ({
  href: page.path,
  title: page.navTitle,
  copy: page.description
}));

export const domandePublicPages = [
  { path: "/domande", label: "Domande chat webcam" },
  ...domandePages.map((page) => ({ path: page.path, label: page.navTitle }))
];

export function getDomandaPage(slug: string) {
  return domandePages.find((page) => page.slug === slug);
}
