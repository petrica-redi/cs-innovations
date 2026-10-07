export type Area = "Social" | "Sănătate" | "Chimie" | "Platforme";

export type Project = {
  name: string;
  area: Area;
  summary: string;
  credit?: string;
  href?: string;
  domain?: string;
  screen?: string;
};

export const areas: Area[] = ["Social", "Sănătate", "Chimie", "Platforme"];

export const featured: Project[] = [
  {
    name: "SISCI",
    area: "Social",
    summary:
      "Dosarul unui beneficiar de servicii comunitare integrate, de la prima evaluare până la închidere, cu planul de intervenție, vizitele de monitorizare și anexele tipărite. Versiunea publică folosește date de test.",
    credit: "CS Innovations",
    href: "https://sisci.vercel.app",
    domain: "sisci.vercel.app",
    screen: "/screens/sisci-case.jpg",
  },
  {
    name: "REDI Health",
    area: "Sănătate",
    summary:
      "Educație pentru sănătate pentru familii, inclusiv din comunitățile rome, și un spațiu de lucru pentru mediatori și cadre medicale: cereri de ajutor, pacienți, programări și urmărirea cazurilor. Familiile pot fotografia o rețetă și primesc explicația în cuvinte simple. Aplicația este disponibilă în română, engleză, albaneză și italiană.",
    credit: "Petrică Dulgheru",
    href: "https://redi-health.vercel.app/ro/demo",
    domain: "redi-health.vercel.app",
    screen: "/screens/redi-health-staff.jpg",
  },
  {
    name: "REDI Business",
    area: "Social",
    summary:
      "Platformă gratuită pentru antreprenorii romi din Balcani: cursuri, plan de afaceri, mentori și pregătirea pentru un credit. Interfața este disponibilă în română, engleză și romani.",
    credit: "Petrică Dulgheru",
    href: "https://redi.business",
    domain: "redi.business",
    screen: "/screens/redi-business.jpg",
  },
  {
    name: "REDI NGO",
    area: "Social",
    summary:
      "Site-ul public al rețelei REDI: programe, echipă, rezultate, știri și o hartă a celor șapte țări în care lucrează, în engleză și română.",
    credit: "Petrică Dulgheru, împreună cu echipa REDI",
    href: "https://redi-ngo.eu",
    domain: "redi-ngo.eu",
    screen: "/screens/redi-ngo.jpg",
  },
  {
    name: "Chemistry tools",
    area: "Chimie",
    summary:
      "Șase simulatoare legate între ele: orbitali atomici, cinetică, titrare, indici Miller, ecuația van der Waals și microscopie cu emisie de câmp.",
    credit: "Petrică Dulgheru",
    href: "https://chemistry-tools.vercel.app",
    domain: "chemistry-tools.vercel.app",
    screen: "/screens/chemistry-tools.jpg",
  },
  {
    name: "Sentinel",
    area: "Platforme",
    summary:
      "Hartă a României care adună date publice despre calitatea aerului și debitul dozei gamma, din surse precum Open-Meteo și Safecast, și afișează o alertă când o valoare trece de prag.",
    credit: "Petrică Dulgheru",
    href: "https://sentinel-cbrn.vercel.app",
    domain: "sentinel-cbrn.vercel.app",
    screen: "/screens/sentinel-map.jpg",
  },
  {
    name: "Scriva",
    area: "Sănătate",
    summary:
      "Asistent pentru medic în timpul consultației: transcrie discuția și pregătește nota clinică, pe care medicul o verifică și o semnează.",
    credit: "Petrică Dulgheru",
    href: "https://scriva.doctor",
    domain: "scriva.doctor",
    screen: "/screens/scriva.jpg",
  },
  {
    name: "Rural Digital Health",
    area: "Sănătate",
    summary:
      "Prototip de telemedicină pentru sate din România și Bulgaria: programare, consultație la distanță și fișa pacientului.",
    credit: "Petrică Dulgheru",
    href: "https://rural-digital-health.vercel.app",
    domain: "rural-digital-health.vercel.app",
    screen: "/screens/rural-health.jpg",
  },
];

export const others: Project[] = [
  { name: "Optim Dental", href: "https://optim-dental-ai-stoma.vercel.app", area: "Sănătate", summary: "Citirea radiografiilor dentare, ca sprijin pentru planul de tratament." },
  { name: "Levio", href: "https://levio-app.vercel.app", area: "Sănătate", summary: "MedScribe, notițele unei consultații scrise pe măsură ce medicul vorbește." },
  { name: "Three Worlds", href: "https://3worlds.vercel.app", area: "Chimie", summary: "Site personal despre chimie, capital și comunitate." },
  { name: "CAPTURE AI", area: "Platforme", summary: "Spațiul de lucru pentru un studiu de fezabilitate." },
  { name: "Zeljko", href: "https://zeljko-platform.vercel.app", area: "Platforme", summary: "Bază de date cu înregistrări legate între ele, drepturi de acces și jurnal al modificărilor." },
  { name: "Evidență", area: "Platforme", summary: "Sistem de evidență cu acces pe niveluri." },
  { name: "Summit 2026", href: "https://redi-summit-2026-six.vercel.app", area: "Social", summary: "Site de eveniment, cu program și înscrieri." },
  { name: "DBI4Roma", href: "https://dbi4roma-mockup.vercel.app", area: "Social", summary: "Machetă de interfață." },
  { name: "360 Disruption", area: "Platforme", summary: "Site de prezentare pentru o platformă industrială." },
  { name: "Lumière", href: "https://lumiere-beauty-fatima.vercel.app", area: "Platforme", summary: "Programări și prezentare pentru un salon." },
  { name: "SEO engine", area: "Platforme", summary: "Pachet comun pentru metadate, sitemap și verificarea site-urilor noastre." },
];
