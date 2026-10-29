// Company site. The data room stores files in private blob storage.
// There are no LLM calls, jobs, email, or a database, so those clients are omitted.
export const company = {
  brand: "CS Innovations",
  legalName: "CS INNOVATIONS SOLUTIONS SRL",
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
  { href: "/proiecte", label: "Proiecte" },
  { href: "/servicii", label: "Servicii" },
  { href: "/pentru-autoritati", label: "Pentru autorități" },
  { href: "/despre", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
  { href: "/camera-de-date", label: "Documente" },
] as const;

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

export const steps = [
  {
    title: "Analiză",
    text: "Analizăm procedura cu oamenii care vor lucra în aplicație și scriem ce trebuie să facă prima versiune.",
  },
  {
    title: "Dezvoltare",
    text: "Construim ecrane care funcționează și le dăm echipei pe date de test, ca să spună ce lipsește.",
  },
  {
    title: "Pilot",
    text: "Pornim un pilot cu o parte din echipă și corectăm ce se vede abia în lucrul de zi cu zi.",
  },
  {
    title: "Predare",
    text: "Instruim utilizatorii și predăm codul sursă, împreună cu un manual în limba română.",
  },
] as const;
