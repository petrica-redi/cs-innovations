// Static company site: no LLM calls, jobs, email, or database, so observability,
// queues, transactional mail, and error-tracking clients are omitted on purpose.
export const company = {
  brand: "CS Innovations",
  legalName: "CS INNOVATIONS SOLUTIONS SRL",
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
  caenLabel: "Activități de inginerie și consultanță tehnică",
} as const;

export const nav = [
  { href: "/pentru-autoritati", label: "Pentru autorități" },
  { href: "/servicii", label: "Servicii" },
  { href: "/proiecte", label: "Proiecte" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
] as const;

export const competitions = [
  {
    name: "EIT RawMaterials",
    status: "Incubator",
    href: "https://eitrawmaterials.eu/",
    text: "Firma a fost selectată în incubatorul pentru materii prime al Institutului European de Inovare și Tehnologie. Programul este finanțat de Uniunea Europeană.",
  },
  {
    name: "28DIGITAL",
    status: "Accelerator",
    href: "https://28digital.eu/",
    text: "Firma a fost selectată în acceleratorul 28DIGITAL (Digital28), denumirea actuală a fostei comunități EIT Digital. Programul este finanțat de Uniunea Europeană.",
  },
] as const;

export const delivery = [
  ["Analiză", "Cerințele se scriu înainte de ecrane: cine folosește sistemul și ce intră în prima versiune."],
  ["Construire", "Aplicație cu roluri, dosar, registre, rapoarte și nomenclatoare pe care instituția le modifică fără o nouă instalare."],
  ["Teritoriu", "Hartă și portal cu date agregate, fără nume și fără cod numeric personal."],
  ["Teren", "Lucru în afara biroului, inclusiv fără rețea, cu sincronizare la revenire."],
  ["Legături", "Integrare prin interfață de programare, pe specificația și mediul de test date de instituție."],
  ["Recepție", "Testare, pilot, instruire și suport, cu cod, manual în limba română și scenariile de recepție."],
] as const;
