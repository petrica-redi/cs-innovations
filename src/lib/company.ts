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
} as const;

export const nav = [
  { href: "/servicii", label: "Servicii" },
  { href: "/proiecte", label: "Proiecte" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
] as const;
