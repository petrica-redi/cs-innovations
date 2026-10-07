// Static company site: no LLM calls, jobs, email, or database, so observability,
// queues, transactional mail, and error-tracking clients are omitted on purpose.
export const company = {
  brand: "CS Innovations",
  legalName: "CS INNOVATIONS SOLUTIONS SRL",
  founder: "Petrică Dulgheru",
  cui: "37754895",
  tradeRegister: "J2017000383345",
  founded: "2017",
  addressLines: [
    "Str. Trifoiului nr. 4",
    "sat Blejești, comuna Blejești",
    "județul Teleorman, 147015",
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
  "Stăm întâi cu oamenii care vor lucra în aplicație și scriem împreună ce trebuie să facă prima versiune.",
  "Arătăm devreme ecrane care funcționează, ca echipa să le încerce pe date de test și să ne spună ce lipsește.",
  "Pornim un pilot cu o parte din echipă și corectăm ce se vede abia în lucrul de zi cu zi.",
  "La final instruim utilizatorii și predăm codul sursă, împreună cu un manual în limba română.",
] as const;
