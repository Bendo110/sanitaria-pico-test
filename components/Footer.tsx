// Componente Footer molto semplice e riutilizzabile.
export default function Footer() {
  return (
    // footer è il tag semantico per la parte finale della pagina.
    <footer className="border-t border-brand bg-brand-soft-2">
      {/*
        Questo div limita la larghezza e aggiunge padding.
        text-sm rende il testo più piccolo.
      */}
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-brand-primary">
        <p>© 2026 Sanitaria Pico - Tutti i diritti riservati</p>
      </div>
    </footer>
  );
}
