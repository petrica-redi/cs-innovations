// Company site. The data room stores files in private blob storage.
// There are no LLM calls, jobs, email, or a database, so those clients are omitted.
export const company = {
  brand: "CS Innovations",
  legalName: "CS INNOVATIONS SOLUTIONS SRL",
  tagline: "Dezvoltare software și orchestrare AI",
  cui: "37754895",
  tradeRegister: "J2017000383345",
  founded: "2017",
  addressLines: [
    "Spaces Unirii View",
    "Bulevardul Corneliu Coposu nr. 6-8",
    "București, 030167",
  ],
  email: "",
  phone: "",
  caen: "7112",
  caenLabel: "Activități de inginerie și consultanță tehnică legate de acestea",
} as const;

export const nav = [
  { href: "/servicii", label: "Servicii" },
  { href: "/orchestrare-ai", label: "Orchestrare AI" },
  { href: "/proiecte", label: "Proiecte" },
  { href: "/pentru-autoritati", label: "Sector public" },
  { href: "/despre", label: "Companie" },
  { href: "/contact", label: "Contact" },
] as const;

export const dataRoomLink = { href: "/camera-de-date", label: "Cameră de date" } as const;

export const programmes = [
  {
    name: "EIT RawMaterials",
    kind: "Incubator",
    href: "https://eitrawmaterials.eu/",
    text: "Comunitatea Institutului European de Inovare și Tehnologie pentru materii prime, finanțată de Uniunea Europeană.",
  },
  {
    name: "28DIGITAL",
    kind: "Accelerator",
    href: "https://28digital.eu/",
    text: "Program de accelerare pentru firme digitale, cunoscut și ca Digital28, finanțat de Uniunea Europeană.",
  },
] as const;

export const capabilities = [
  {
    code: "01",
    title: "Platforme software la comandă",
    text: "Aplicații web pentru instituții și echipe care lucrează cu dosare, programări, registre și rapoarte. Roluri separate, jurnal al acțiunilor, export și interfață în limba română.",
    points: ["Analiză de proces", "Arhitectură și UX", "Dezvoltare și testare", "Operare și mentenanță"],
  },
  {
    code: "02",
    title: "Orchestrare AI",
    text: "Fluxuri în care modelele de limbaj, vorbire și imagine lucrează în pași controlați, cu surse verificabile, ieșiri validate și un om care aprobă ce contează.",
    points: ["Rutare între modele", "Căutare în documente", "Validare pe schemă", "Evaluare și urmărire"],
  },
  {
    code: "03",
    title: "Date și integrări",
    text: "Legăm platforma de sistemele existente prin API, importăm date istorice și construim hărți și tablouri de bord care arată cifre agregate, fără date personale.",
    points: ["API și importuri", "Surse publice", "Hărți și tablouri", "Alerte pe praguri"],
  },
  {
    code: "04",
    title: "Securitate și conformitate",
    text: "Datele rămân în Uniunea Europeană, accesul se dă pe roluri, fiecare acțiune intră în jurnal, iar codul sursă și documentația se predau instituției.",
    points: ["GDPR din proiectare", "Găzduire în UE", "Jurnal de audit", "Predarea codului"],
  },
] as const;

export const principles = [
  {
    title: "Modelul potrivit pentru fiecare pas",
    text: "Un flux folosește mai multe modele: unul pentru vorbire, unul pentru extragere, unul pentru redactare. Le alegem după precizie, cost și locul în care pot fi procesate datele.",
  },
  {
    title: "Răspunsuri cu sursă",
    text: "Când modelul răspunde din documentele instituției, răspunsul arată pasajul din care a pornit, ca utilizatorul să îl poată verifica.",
  },
  {
    title: "Ieșiri validate",
    text: "Ce produce modelul trece printr-o schemă și prin reguli de business înainte să ajungă în dosar. Ce nu trece validarea se întoarce, nu se salvează.",
  },
  {
    title: "Omul aprobă",
    text: "O notă clinică, o decizie sau un document oficial ajunge în sistem doar după ce persoana responsabilă îl citește și îl semnează.",
  },
  {
    title: "Fiecare apel este urmărit",
    text: "Înregistrăm intrarea, modelul, versiunea promptului, costul și rezultatul. Pe un set de cazuri de test măsurăm calitatea înainte de fiecare schimbare.",
  },
  {
    title: "Datele nu pleacă din UE",
    text: "Configurăm furnizorii și regiunile de procesare astfel încât datele instituției să rămână în Uniunea Europeană și să nu fie folosite la antrenarea modelelor.",
  },
] as const;

export const stack = [
  { group: "Aplicație", items: ["TypeScript", "React", "Next.js", "Node.js"] },
  { group: "Date", items: ["PostgreSQL", "Drizzle ORM", "Stocare privată de fișiere"] },
  { group: "AI", items: ["Modele de limbaj", "Vorbire în text", "Modele de imagine", "Langfuse"] },
  { group: "Operare", items: ["Vercel, regiuni UE", "Sentry", "Trigger.dev", "GitHub Actions"] },
  { group: "Calitate", items: ["Vitest", "Playwright", "Revizie de cod", "Verificări automate"] },
] as const;

export const standards = [
  ["Tipuri stricte", "Cod TypeScript în mod strict, verificat la fiecare modificare."],
  ["Teste automate", "Teste pe logica de business și teste end-to-end pe fluxurile critice."],
  ["Integrare continuă", "Fiecare modificare trece prin verificare de tipuri, lint, teste și build înainte de publicare."],
  ["Monitorizare", "Erorile și performanța din producție se văd în timp real, nu din reclamații."],
  ["Accesibilitate", "Interfețe care merg cu tastatura și cititorul de ecran, cu contrast suficient."],
  ["Documentație", "Manual de utilizare în limba română și documentație tehnică pentru echipa care preia codul."],
] as const;

export const steps = [
  {
    title: "Analiză",
    text: "Analizăm procedura cu oamenii care vor lucra în aplicație și scriem ce trebuie să facă prima versiune.",
  },
  {
    title: "Arhitectură",
    text: "Stabilim modelul de date, rolurile, integrările și, unde e cazul, ce pași preia un model AI și cum îi verificăm.",
  },
  {
    title: "Dezvoltare",
    text: "Livrăm în iterații scurte, cu ecrane care funcționează pe date de test, ca echipa să spună devreme ce lipsește.",
  },
  {
    title: "Pilot",
    text: "Pornim cu o parte din echipă și corectăm ce se vede abia în lucrul de zi cu zi.",
  },
  {
    title: "Predare și operare",
    text: "Instruim utilizatorii, predăm codul sursă și manualul și rămânem pentru mentenanță.",
  },
] as const;
