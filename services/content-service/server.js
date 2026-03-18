const express = require("express");
const cors = require("cors");
const siteContent = require("./siteContent");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Content service attivo" });
});

app.get("/api/content", (req, res) => {
  res.json(siteContent);
});

app.get("/api/home", (req, res) => {
  res.json(siteContent.home);
});

app.get("/api/about", (req, res) => {
  res.json(siteContent.about);
});

app.get("/api/location", (req, res) => {
  res.json(siteContent.location);
});

app.get("/api/contacts", (req, res) => {
  res.json(siteContent.contacts);
});

app.listen(PORT, () => {
  console.log(`Content service in esecuzione su http://localhost:${PORT}`);
});