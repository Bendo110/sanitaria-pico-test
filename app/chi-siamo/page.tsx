import { getSiteContent } from "../../lib/api";
import ChiSiamoTimelineLoader from "./ChiSiamoTimelineLoader";

export default async function ChiSiamoPage() {
  const content = await getSiteContent();
  const { about } = content;

  const timeline = [
    {
      year: "2008",
      title: "L'inizio",
      description:
        "Abbiamo iniziato con l'obiettivo di offrire un punto di riferimento affidabile per il benessere ortopedico, con attenzione alla persona e alle sue esigenze.",
      image: "/stabile.jpg",
      imageAlt: "La sede all'inizio del progetto",
    },
    {
      year: "2014",
      title: "La crescita",
      description:
        "Nel tempo abbiamo ampliato i servizi e consolidato un metodo di lavoro basato su ascolto, competenza e soluzioni personalizzate.",
      image: "/persona.JPG",
      imageAlt: "Crescita professionale e consulenza",
    },
    {
      year: "2017",
      title: "Oggi",
      description:
        "Oggi continuiamo a supportare ogni persona con un approccio chiaro e professionale, mantenendo al centro la qualità del servizio.",
      image: about.photo,
      imageAlt: "Situazione attuale dell'attività",
    },
  ];

  return (
    <ChiSiamoTimelineLoader
      sectionLabel={about.sectionLabel}
      timeline={timeline}
    />
  );
}
