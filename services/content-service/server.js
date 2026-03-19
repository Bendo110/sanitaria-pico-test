// Importiamo Express, un framework Node.js per creare server web/API.
const express = require("express");

// Importiamo CORS.
// Serve per permettere richieste tra origini diverse,
// ad esempio frontend su una porta e backend su un'altra.
const cors = require("cors");

// Importiamo i dati contenuti nel file siteContent.js
const siteContent = require("./siteContent");

// Creiamo l'app Express.
const app = express();

// Scegliamo la porta del server.
// Se esiste una variabile d'ambiente PORT, usa quella.
// Altrimenti usa 4000.
const PORT = process.env.PORT || 4000;

// Abilitiamo CORS per tutte le richieste.
app.use(cors());

// Permettiamo a Express di leggere JSON nel body delle richieste.
app.use(express.json());

// Endpoint base di test.
// Se visiti /, risponde con un piccolo JSON che dice che il servizio è attivo.
app.get("/", (req, res) => {
  res.json({ message: "Content service attivo" });
});

// Endpoint che restituisce TUTTI i contenuti del sito.
app.get("/api/content", (req, res) => {
  res.json(siteContent);
});

// Endpoint che restituisce solo la parte home.
app.get("/api/home", (req, res) => {
  res.json(siteContent.home);
});

// Endpoint che restituisce solo la parte about.
app.get("/api/about", (req, res) => {
  res.json(siteContent.about);
});

// Endpoint che restituisce solo la parte location.
app.get("/api/location", (req, res) => {
  res.json(siteContent.location);
});

// Endpoint che restituisce solo la parte contacts.
app.get("/api/contacts", (req, res) => {
  res.json(siteContent.contacts);
});

// Avviamo il server sulla porta scelta.
app.listen(PORT, () => {
  console.log(`Content service in esecuzione su http://localhost:${PORT}`);
});
