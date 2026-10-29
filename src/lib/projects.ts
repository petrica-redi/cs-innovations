export type Area = "Public și social" | "Sănătate" | "Date și cercetare";

export type Project = {
  name: string;
  area: Area;
  summary: string;
  tags?: string[];
  ai?: string;
  href?: string;
  domain?: string;
  screen?: string;
};

export const areas: Area[] = ["Public și social", "Sănătate", "Date și cercetare"];

export function countByArea(area: Area) {
  return [...featured, ...others].filter((p) => p.area === area).length;
}

export const featured: Project[] = [
  {
    name: "SISCI",
    area: "Public și social",
    summary:
      "Management de caz pentru servicii comunitare integrate: dosarul beneficiarului de la prima evaluare până la închidere, cu planul de intervenție, vizitele de monitorizare și anexele tipărite. Versiunea publică folosește date de test.",
    tags: ["Roluri și acces", "Flux de dosar", "Anexe tipărite", "Hartă agregată"],
    href: "https://sisci.vercel.app",
    domain: "sisci.vercel.app",
    screen: "/screens/sisci-case.jpg",
  },
  {
    name: "REDI Health",
    area: "Sănătate",
    summary:
      "Spațiu de lucru pentru mediatori și cadre medicale, cu cereri de ajutor, pacienți, programări și urmărirea cazurilor, plus educație pentru sănătate pentru familii. Interfață în română, engleză, albaneză și italiană.",
    tags: ["Multilingv", "Spațiu de lucru", "Programări"],
    ai: "Familia fotografiază o rețetă, iar un model de imagine o explică în cuvinte simple.",
    href: "https://redi-health.vercel.app/ro/demo",
    domain: "redi-health.vercel.app",
    screen: "/screens/redi-health-staff.jpg",
  },
  {
    name: "Scriva",
    area: "Sănătate",
    summary:
      "Asistent pentru medic în timpul consultației: transcrie discuția și pregătește nota clinică, pe care medicul o verifică și o semnează.",
    tags: ["Vorbire în text", "Notă structurată", "Semnătura medicului"],
    ai: "Flux în pași: transcriere, structurare pe schemă, verificare și aprobare umană.",
    href: "https://scriva.doctor",
    domain: "scriva.doctor",
    screen: "/screens/scriva.jpg",
  },
  {
    name: "Sentinel",
    area: "Date și cercetare",
    summary:
      "Hartă a României care adună date publice despre calitatea aerului și debitul dozei gamma, din surse precum Open-Meteo și Safecast, și afișează o alertă când o valoare trece de prag.",
    tags: ["Surse publice", "Praguri și alerte", "Hartă"],
    href: "https://sentinel-cbrn.vercel.app",
    domain: "sentinel-cbrn.vercel.app",
    screen: "/screens/sentinel-map.jpg",
  },
  {
    name: "REDI Business",
    area: "Public și social",
    summary:
      "Platformă gratuită pentru antreprenorii romi din Balcani: cursuri, plan de afaceri, mentori și pregătirea pentru un credit. Interfață în română, engleză și romani.",
    tags: ["Învățare", "Mentorat", "Multilingv"],
    href: "https://redi.business",
    domain: "redi.business",
    screen: "/screens/redi-business.jpg",
  },
  {
    name: "REDI NGO",
    area: "Public și social",
    summary:
      "Site-ul public al rețelei REDI: programe, echipă, rezultate, știri și o hartă a celor șapte țări în care lucrează, în engleză și română. Realizat împreună cu echipa REDI.",
    tags: ["Conținut", "Hartă", "Bilingv"],
    href: "https://redi-ngo.eu",
    domain: "redi-ngo.eu",
    screen: "/screens/redi-ngo.jpg",
  },
  {
    name: "Rural Digital Health",
    area: "Sănătate",
    summary: "Prototip de telemedicină pentru sate din România și Bulgaria: programare, consultație la distanță și fișa pacientului.",
    tags: ["Telemedicină", "Prototip"],
    href: "https://rural-digital-health.vercel.app",
    domain: "rural-digital-health.vercel.app",
    screen: "/screens/rural-health.jpg",
  },
  {
    name: "Chemistry tools",
    area: "Date și cercetare",
    summary:
      "Șase simulatoare legate între ele: orbitali atomici, cinetică, titrare, indici Miller, ecuația van der Waals și microscopie cu emisie de câmp.",
    tags: ["Simulare", "Calcul științific"],
    href: "https://chemistry-tools.vercel.app",
    domain: "chemistry-tools.vercel.app",
    screen: "/screens/chemistry-tools.jpg",
  },
];

export const others: Project[] = [
  { name: "Optim Dental", href: "https://optim-dental-ai-stoma.vercel.app", area: "Sănătate", summary: "Citirea radiografiilor dentare cu un model de imagine, ca sprijin pentru planul de tratament stabilit de medic." },
  { name: "Levio", href: "https://levio-app.vercel.app", area: "Sănătate", summary: "Notițele unei consultații, scrise pe măsură ce medicul vorbește." },
  { name: "Zeljko", href: "https://zeljko-platform.vercel.app", area: "Date și cercetare", summary: "Bază de date cu înregistrări legate între ele, drepturi de acces și jurnal al modificărilor." },
  { name: "CAPTURE AI", area: "Date și cercetare", summary: "Spațiu de lucru pentru un studiu de fezabilitate." },
  { name: "Evidență", area: "Public și social", summary: "Sistem de evidență cu acces pe niveluri." },
];
