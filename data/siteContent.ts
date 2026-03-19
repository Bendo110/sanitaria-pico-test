// Questo file contiene i contenuti del sito in formato oggetto JavaScript/TypeScript.
// In pratica qui non stai scrivendo la grafica, ma i testi e alcuni dati da mostrare nelle pagine.

// "export const" significa:
// - export = questo valore può essere importato in altri file
// - const = il riferimento alla variabile non cambia
export const siteContent = {
  // Sezione contenuti della Home page
  home: {
    siteName: "Il Mio Sito",
    tagline: "Landing page professionale",
    heroTitle: "Una presenza professionale online, chiara e affidabile",
    heroDescription:
      "Qui puoi presentare il tuo obiettivo, spiegare cosa fai e aiutare le persone a trovarti e contattarti facilmente.",
    objectiveTitle: "Obiettivo",
    objectiveText:
      "Presentare in modo chiaro chi sei, cosa fai e come contattarti.",
    servicesTitle: "Cosa facciamo",
    servicesText:
      "In questa sezione puoi spiegare in modo semplice i tuoi servizi, la tua attività o la missione del sito.",
    reliabilityTitle: "Affidabilità",
    reliabilityText:
      "Offrire un sito ordinato, professionale e facilmente consultabile.",
    contactsTitle: "Contatti rapidi",
    contactsText:
      "Dare accesso immediato a orari, email, telefono e posizione.",
  },

  // Sezione pagina "Chi siamo"
  about: {
    sectionLabel: "Chi siamo",
    title: "La persona dietro il progetto",
    personName: "Mario Rossi",
    personRole: "Responsabile attività",
    description:
      "Qui inserirai la descrizione della persona, la sua esperienza, il suo ruolo e le informazioni che vuoi comunicare in modo professionale e chiaro.",

    // Percorso di un'immagine dentro la cartella public.
    photo: "/persona.jpg",
  },

  // Sezione pagina "Dove ci troviamo"
  location: {
    sectionLabel: "Dove ci troviamo",
    title: "Vieni a trovarci",
    address: "Via Esempio 123, Milano",
    buildingPhoto: "/stabile.jpg",
    googleMapsUrl: "https://www.google.com/maps?q=Via+Esempio+123,+Milano",
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Via+Esempio+123,+Milano&output=embed",
  },

  // Sezione pagina contatti
  contacts: {
    sectionLabel: "Orari e contatti",
    title: "Come contattarci",
    description:
      "Qui puoi inserire una descrizione con gli orari e i giorni in cui è possibile contattarvi, insieme ai riferimenti principali.",

    // Array di stringhe con gli orari.
    hours: [
      "Lunedì - Venerdì: 09:00 - 18:00",
      "Sabato: 09:00 - 12:30",
      "Domenica: Chiuso",
    ],

    phone: "0123 456789",
    mobile: "333 1234567",
    email: "info@esempio.it",
  },
};
