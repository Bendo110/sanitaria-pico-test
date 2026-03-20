// Questo file è molto simile a data/siteContent.ts,
// ma è scritto in JavaScript CommonJS per il content service Node/Express.

const siteContent = {
  site: {
    name: "Sanitaria Pico",
    tagline: "Soluzioni ortopediche su misura a Mirandola",
    metadataTitle: "Sanitaria Pico",
    metadataDescription: "Landing page professionale di Sanitaria Pico",
    logoAlt: "Logo Sanitaria Pico",
  },

  navigation: {
    homeLabel: "Home",
    aboutLabel: "Chi siamo",
    locationLabel: "Dove ci troviamo",
    contactsLabel: "Orari e contatti",
  },

  footer: {
    copyright: "© 2026 Sanitaria Pico - Tutti i diritti riservati",
  },

  // Contenuti per la Home
  home: {
    siteName: "Il Mio Sito",
    tagline: "Landing page professionale",
    heroEyebrow: "Benvenuti in Sanitaria Pico",
    heroTitle: "Una presenza professionale online, chiara e affidabile",
    heroDescription:
      "Qui puoi presentare il tuo obiettivo, spiegare cosa fai e aiutare le persone a trovarti e contattarti facilmente.",
    primaryCtaLabel: "Scopri chi siamo",
    secondaryCtaLabel: "Dove ci troviamo",
    commitmentEyebrow: "Il nostro impegno",
    objectiveTitle: "Obiettivo",
    objectiveText:
      "Presentare in modo chiaro chi sei, cosa fai e come contattarti.",
    servicesTitle: "Cosa facciamo",
    servicesText:
      "In questa sezione puoi spiegare in modo semplice i tuoi servizi, la tua attività o la missione del sito.",
    commitmentDescription:
      "Offriamo un punto di riferimento affidabile, chiaro e accogliente, con attenzione alle esigenze delle persone e alla qualità del servizio.",
    whyChooseEyebrow: "Perché scegliere noi",
    whyChooseTitle: "Un servizio pensato per essere vicino alle persone",
    reliabilityTitle: "Affidabilità",
    reliabilityText:
      "Offrire un sito ordinato, professionale e facilmente consultabile.",
    contactsTitle: "Contatti rapidi",
    contactsText:
      "Dare accesso immediato a orari, email, telefono e posizione.",
    finalEyebrow: "Professionalità e cura",
    finalTitle:
      "Siamo a disposizione per aiutarti con attenzione e competenza",
    finalDescription:
      "Mettiamo al centro la persona, con un approccio affidabile, chiaro e orientato alla qualità del servizio. Contattaci per conoscere meglio la nostra attività, gli orari e tutte le informazioni utili.",
    finalCardTitle: "Hai bisogno di informazioni?",
    finalCardDescription:
      "Consulta gli orari, i contatti e tutti i riferimenti utili per raggiungerci o parlare con noi.",
    finalPrimaryCtaLabel: "Vai ai contatti",
    finalSecondaryCtaLabel: "Apri la sede",
  },

  // Contenuti per la pagina Chi siamo
  about: {
    sectionLabel: "Chi siamo",
    title: "La persona dietro il progetto",
    introText:
      "Conosci meglio la persona e i valori che guidano l’attività, con attenzione alla qualità del servizio e al rapporto con le persone.",
    profileEyebrow: "Profilo",
    personName: "Mario Rossi",
    personRole: "Responsabile attività",
    description:
      "Qui inserirai la descrizione della persona, la sua esperienza, il suo ruolo e le informazioni che vuoi comunicare in modo professionale e chiaro.",
    approachEyebrow: "Il nostro approccio",
    approachTitle: "Professionalità, ascolto e attenzione",
    approachDescription:
      "Crediamo in un servizio serio, affidabile e vicino alle esigenze delle persone. Ogni contatto è un’occasione per offrire supporto, chiarezza e competenza, in un ambiente accogliente e professionale.",
    photo: "/persona.jpg",
  },

  // Contenuti per la pagina Dove ci troviamo
  location: {
    sectionLabel: "Dove ci troviamo",
    title: "Vieni a trovarci",
    introText:
      "Ti aspettiamo presso la nostra sede. Qui trovi l’indirizzo, la posizione sulla mappa e un accesso rapido a Google Maps.",
    address: "Via Esempio 123, Milano",
    buildingAlt: "Foto dello stabile",
    buildingPhoto: "/stabile.jpg",
    addressEyebrow: "Indirizzo",
    addressTitle: "Vieni a trovarci",
    mapsCtaLabel: "Apri su Google Maps",
    infoEyebrow: "Informazioni utili",
    infoTitle: "Raggiungerci è semplice",
    infoDescription:
      "Consulta la mappa per individuare facilmente la nostra posizione e ottenere indicazioni stradali rapide. Per qualsiasi informazione aggiuntiva puoi contattarci direttamente tramite i riferimenti presenti nella sezione dedicata.",
    mapTitle: "Mappa sede Sanitaria Pico",
    finalEyebrow: "Punto di riferimento",
    finalTitle: "Una sede facilmente individuabile e accessibile",
    finalDescription:
      "Abbiamo pensato a uno spazio chiaro, accogliente e semplice da raggiungere, per offrire un’esperienza ordinata e professionale fin dal primo contatto.",
    googleMapsUrl: "https://www.google.com/maps?q=Via+Esempio+123,+Milano",
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Via+Esempio+123,+Milano&output=embed",
  },

  // Contenuti per la pagina Orari e contatti
  contacts: {
    sectionLabel: "Orari e contatti",
    title: "Come contattarci",
    introText:
      "Qui trovi tutti i riferimenti utili per contattarci, insieme agli orari di disponibilità e alle informazioni principali.",
    hoursEyebrow: "Disponibilità",
    hoursTitle: "Orari",
    description:
      "Qui puoi inserire una descrizione con gli orari e i giorni in cui è possibile contattarvi, insieme ai riferimenti principali.",
    hours: [
      "Lunedì - Venerdì: 09:00 - 18:00",
      "Sabato: 09:00 - 12:30",
      "Domenica: Chiuso",
    ],
    contactsEyebrow: "Riferimenti",
    contactsTitle: "Contatti",
    phoneLabel: "Telefono",
    phone: "0123 456789",
    mobileLabel: "Cellulare",
    mobile: "333 1234567",
    emailLabel: "Email",
    email: "info@esempio.it",
    finalEyebrow: "Siamo a disposizione",
    finalTitle: "Contattaci per informazioni e assistenza",
    finalDescription:
      "Saremo lieti di rispondere alle tue richieste e fornirti tutte le indicazioni necessarie con chiarezza, disponibilità e attenzione.",
  },
};

// module.exports esporta l'oggetto nel sistema CommonJS di Node.js.
module.exports = siteContent;
