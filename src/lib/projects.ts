export type Area =
  | "Platforme"
  | "Inteligență artificială"
  | "Chimie"
  | "Social"
  | "Sănătate";

export type Project = {
  name: string;
  repo: string;
  area: Area;
  summary: string;
  image: string;
  href?: string;
  draft?: boolean;
};

export const areas: Area[] = [
  "Platforme",
  "Inteligență artificială",
  "Chimie",
  "Social",
  "Sănătate",
];

const photos = {
  ops: "/photos/ops-wall.jpg",
  lab: "/photos/lab-screen.jpg",
  desk: "/photos/community-desk.jpg",
  racks: "/photos/racks.jpg",
  ai: "/photos/ai-screen.jpg",
  map: "/photos/map-wall.jpg",
  clinic: "/photos/clinic-tablet.jpg",
};

export const projects: Project[] = [
  {
    name: "SISCI",
    repo: "sisci",
    area: "Social",
    summary:
      "Management de caz pentru servicii comunitare integrate: dosar, evaluare, plan și roluri de supervizare. Demonstrație după documentul funcțional din 2022.",
    image: photos.desk,
    href: "https://sisci.vercel.app",
  },
  {
    name: "Scriva",
    repo: "Scriva-e-consultation-2Aug",
    area: "Inteligență artificială",
    summary: "Consultație clinică asistată, pentru echipe medicale din Europa.",
    image: photos.clinic,
    href: "https://scriva.doctor",
  },
  {
    name: "Sastipe",
    repo: "REDI-Healthcare-2AUG",
    area: "Sănătate",
    summary: "Platformă de literație în sănătate pentru comunități rome.",
    image: photos.desk,
    href: "https://zuvo-three.vercel.app",
  },
  {
    name: "ZUVO",
    repo: "ZUVO",
    area: "Sănătate",
    summary: "Versiunea anterioară a aceleiași platforme de literație în sănătate.",
    image: photos.clinic,
    href: "https://zuvo-three.vercel.app",
  },
  {
    name: "REDI Health",
    repo: "redi-health",
    area: "Sănătate",
    summary: "Portalul ZUVO și consultația Scriva, puse pe același domeniu.",
    image: photos.clinic,
  },
  {
    name: "Rural Digital Health",
    repo: "rural-digital-health",
    area: "Sănătate",
    summary: "Telemedicină pentru comunități rurale din sud-estul Europei.",
    image: photos.desk,
    href: "https://rural-digital-health.vercel.app",
  },
  {
    name: "Optim Dental",
    repo: "optim-dental-ai-stoma",
    area: "Inteligență artificială",
    summary: "Citirea unei radiografii dentare ca suport pentru planul de tratament.",
    image: photos.ai,
    href: "https://optim-dental-ai-stoma.vercel.app",
  },
  {
    name: "Levio",
    repo: "levio",
    area: "Inteligență artificială",
    summary: "Aplicația MedScribe: notarea unei consultații, cu documentația alături.",
    image: photos.ai,
    href: "https://levio-app.vercel.app",
  },
  {
    name: "CAPTURE AI",
    repo: "capture-ai",
    area: "Inteligență artificială",
    summary: "Spațiu de lucru pentru un pilot de fezabilitate cu un client.",
    image: photos.ai,
  },
  {
    name: "Chemistry tools",
    repo: "chemistry-tools",
    area: "Chimie",
    summary: "Șase instrumente de simulare: structuri, grafice și scenarii de laborator.",
    image: photos.lab,
    href: "https://chemistry-tools.vercel.app",
  },
  {
    name: "Three Worlds",
    repo: "3worlds",
    area: "Chimie",
    summary: "Platformă pe trei piloni: chimie, capital și comunitate.",
    image: photos.lab,
    href: "https://3worlds.vercel.app",
  },
  {
    name: "Sentinel",
    repo: "sentinel-cbrn",
    area: "Platforme",
    summary:
      "Hartă cu aer, radiații și vreme, din stații de senzori. Datele afișate sunt citiri de mediu, nu un plan de intervenție.",
    image: photos.map,
    href: "https://sentinel-cbrn.vercel.app",
  },
  {
    name: "Summit 2026",
    repo: "redi-summit-2026",
    area: "Social",
    summary: "Pagină pentru Brussels Economic Inclusion Forum.",
    image: photos.desk,
    href: "https://redi-summit-2026-six.vercel.app",
  },
  {
    draft: true,
    name: "REDI NGO",
    repo: "redi-ngo-site",
    area: "Social",
    summary: "Copie statică a site-ului redi-ngo.eu.",
    image: photos.ops,
    href: "https://redi-ngo-site.vercel.app",
  },
  {
    name: "DBI4Roma",
    repo: "dbi4roma-mockup",
    area: "Social",
    summary: "Machetă de interfață. Depozitul nu are o descriere de produs.",
    image: photos.desk,
    href: "https://dbi4roma-mockup.vercel.app",
  },
  {
    name: "DG NEAR",
    repo: "dg-near-dashboard",
    area: "Platforme",
    summary:
      "Panou de livrare pentru un program în Turcia, Serbia și Macedonia de Nord. Rămâne închis, fără adresă publică.",
    image: photos.map,
  },
  {
    name: "RPG Neda",
    repo: "rpg-neda",
    area: "Platforme",
    summary:
      "Urmărire vizuală pentru un proiect european: indicatori de la parteneri și execuție de buget. Fără adresă publică.",
    image: photos.ops,
  },
  {
    name: "RFE",
    repo: "redi-rfe-dashboard",
    area: "Platforme",
    summary: "Panou de cheltuieli pentru un program. Fără adresă publică.",
    image: photos.ops,
  },
  {
    name: "RFE app",
    repo: "rfe-app",
    area: "Platforme",
    summary: "Aplicație din aceeași familie. Depozitul nu are descriere publicată.",
    image: photos.racks,
  },
  {
    name: "Lichiditate",
    repo: "redi-ceo-liquidity",
    area: "Platforme",
    summary: "Panou intern: buget rămas, ritm de cheltuire, bancă față de cerere. Fără adresă publică.",
    image: photos.ops,
  },
  {
    name: "Zeljko",
    repo: "zeljko-platform",
    area: "Platforme",
    summary: "Intrări legate pe categorii, niveluri de acces, validare și jurnal de audit.",
    image: photos.racks,
    href: "https://zeljko-platform.vercel.app",
  },
  {
    name: "Evidență",
    repo: "intelligence-database",
    area: "Platforme",
    summary: "Sistem de evidență cu acces controlat. Fără adresă publică.",
    image: photos.racks,
  },
  {
    name: "SEO engine",
    repo: "seo-engine",
    area: "Platforme",
    summary: "Pachet reutilizabil pentru metadata, sitemap, robots și un audit din linia de comandă.",
    image: photos.racks,
  },
  {
    name: "Lumière",
    repo: "Lumiere-Beauty-Fatima",
    area: "Platforme",
    summary: "Platformă pentru un salon.",
    image: photos.desk,
    href: "https://lumiere-beauty-fatima.vercel.app",
  },
  {
    name: "360 Disruption",
    repo: "360-disruption-website",
    area: "Platforme",
    summary: "Site pentru o platformă de execuție industrială.",
    image: photos.racks,
  },
  {
    draft: true,
    name: "Glow Up Studio",
    repo: "glow-up-studio",
    area: "Platforme",
    summary: "Schiță de interfață, fără produs publicat.",
    image: photos.ops,
  },
  {
    draft: true,
    name: "Shine Bright",
    repo: "dashboard-shine-bright",
    area: "Platforme",
    summary: "Schiță de panou, fără produs publicat.",
    image: photos.ops,
  },
];
