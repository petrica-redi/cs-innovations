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
    href: "https://eitrawmaterials.eu/",
    text: "Competiție a Institutului European de Inovare și Tehnologie pentru materii prime: de la procesare și trasabilitate până la materiale folosite mai departe.",
  },
  {
    name: "28DIGITAL",
    href: "https://28digital.eu/",
    text: "Competiție a comunității digitale a aceluiași institut. 28DIGITAL este numele actual al fostului EIT Digital.",
  },
] as const;

export const delivery = [
  ["Analiză", "Cerințele se scriu înainte de ecrane: cine folosește sistemul, ce intră în prima versiune, ce rămâne pe mai târziu."],
  ["Construire", "Aplicație web cu roluri, dosar, registre, rapoarte și nomenclatoare pe care autoritatea le poate modifica fără o nouă instalare."],
  ["Teritoriu și public", "Hartă, portal cu date agregate și fără nume sau coduri personale, plus bibliotecă și mesaje către echipă."],
  ["Teren", "Aplicație pentru lucru în afara biroului, inclusiv atunci când rețeaua lipsește, cu sincronizare la revenire."],
  ["Legături", "Integrare prin interfață de programare, când instituția dă specificația și un mediu de test."],
  ["Recepție", "Testare, pilot, instruire și o perioadă de suport. Predarea include codul, manualul în limba română și scenariile pe care s-a făcut recepția."],
] as const;
