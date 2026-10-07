import Image from "next/image";
import Link from "next/link";
import { company, competitions, delivery } from "@/lib/company";

const practices = [
  {
    title: "Platforme informatice",
    href: "/proiecte?domeniu=Platforme",
    image: "/photos/racks.jpg",
    alt: "Culoar de rack-uri, cu lumini de stare",
    caption: "Infrastructura pe care se predă un sistem.",
    text: "Sisteme cu roluri, dosar, rapoarte și hartă, predate cu cod și cu manual în limba română. Un model poate căuta sau redacta o primă variantă; omul confirmă.",
  },
  {
    title: "Chimie",
    href: "/proiecte?domeniu=Chimie",
    image: "/photos/lab-screen.jpg",
    alt: "Laborator cu un model molecular pe ecran",
    caption: "Versiuni, loturi și pași, pe ecranul de lucru.",
    text: "Proiectele țin versiunile unei formule, loturile și cine a schimbat un pas. Rețetele rămân nepublicate.",
    flip: true,
  },
  {
    title: "Inovație socială",
    href: "/proiecte?domeniu=Social",
    image: "/photos/community-desk.jpg",
    alt: "Birou cu un laptop deschis pe o listă de dosare",
    caption: "Dosarul de lucru, pe biroul echipei.",
    text: "Instrumente pentru echipe care lucrează cu oameni. SISCI este platforma de management de caz pentru servicii comunitare integrate: evaluare, plan, monitorizare și roluri.",
  },
];

const systems = [
  {
    name: "SISCI",
    text: "Management de caz: evaluare, plan, monitorizare și roluri.",
    image: "/photos/community-desk.jpg",
    alt: "Listă de dosare pe un laptop",
    href: "https://sisci.vercel.app",
  },
  {
    name: "Chemistry tools",
    text: "Șase instrumente de simulare pentru laborator.",
    image: "/photos/lab-screen.jpg",
    alt: "Model molecular și un grafic pe un monitor de laborator",
    href: "https://chemistry-tools.vercel.app",
  },
  {
    name: "Sentinel",
    text: "Hartă cu aer, radiații și vreme, din stații de senzori.",
    image: "/photos/map-wall.jpg",
    alt: "Hartă de sistem pe un ecran de sală",
    href: "https://sentinel-cbrn.vercel.app",
  },
  {
    name: "Scriva",
    text: "Consultație clinică asistată, pentru echipe medicale.",
    image: "/photos/clinic-tablet.jpg",
    alt: "Tabletă cu o imagine medicală abstractă, pe un birou de clinică",
    href: "https://scriva.doctor",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto grid max-w-[1120px] items-start gap-8 px-5 py-12 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-7">
          <p className="text-[13px] tracking-[0.08em] text-copper uppercase">
            Platforme, chimie, inovare socială
          </p>
          <h1 className="mt-4 max-w-[18em] font-serif text-[2.5rem] leading-[1.15] md:text-5xl">
            Proiectăm platforme. Ducem proiecte de chimie și de inovare socială.
          </h1>
          <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">
            Din {company.founded} proiectăm platforme informatice și ducem proiecte de
            inovare în chimie și inovare socială. {company.legalName} a fost selectată în
            incubatorul EIT RawMaterials și în acceleratorul 28DIGITAL, programe finanțate
            de Uniunea Europeană.
          </p>
          <p className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pentru-autoritati"
              className="inline-block bg-ink px-4 py-2 text-sm text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Pentru autorități
            </Link>
            <Link
              href="/proiecte"
              className="inline-block border border-ink px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Sisteme
            </Link>
          </p>
        </div>
        <figure className="lg:col-span-5">
          <div className="relative aspect-[4/3] max-h-[560px] bg-night">
            <Image
              src="/photos/ops-wall.jpg"
              alt="Sală de lucru cu un perete de monitoare pe care rulează sisteme"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
          <figcaption className="mt-2 text-sm text-ink-soft">
            Sală de lucru: hartă, liste și grafice pe același perete.
          </figcaption>
        </figure>
      </section>

      <dl className="mx-auto grid max-w-[1120px] gap-4 border-t border-line px-5 py-5 text-sm sm:grid-cols-4">
        <div>
          <dt className="text-ink-soft">Firmă</dt>
          <dd>{company.legalName}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">CUI</dt>
          <dd>{company.cui}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">CAEN</dt>
          <dd>
            {company.caen} · {company.caenLabel}
          </dd>
        </div>
        <div>
          <dt className="text-ink-soft">Sediu</dt>
          <dd>
            {company.founded}, Blejești, Teleorman
          </dd>
        </div>
      </dl>

      <section className="mx-auto max-w-[1120px] space-y-16 px-5 py-16" aria-label="Direcții">
        {practices.map((item) => (
          <article key={item.title} className="grid items-start gap-8 lg:grid-cols-2">
            <figure className={item.flip ? "lg:order-2" : ""}>
              <div className="relative aspect-[4/3] bg-night">
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-sm text-ink-soft">{item.caption}</figcaption>
            </figure>
            <div>
              <h2 className="font-serif text-[1.75rem] leading-tight">{item.title}</h2>
              <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">{item.text}</p>
              <p className="mt-4">
                <Link
                  href={item.href}
                  className="text-sm underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
                >
                  Vezi sistemele
                </Link>
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="border-y border-line" aria-labelledby="programe">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <h2 id="programe" className="font-serif text-[1.75rem]">
            Programe europene
          </h2>
          <ul className="mt-8 grid gap-8 lg:grid-cols-2">
            {competitions.map((item) => (
              <li key={item.name} className="border-t border-line pt-5">
                <p className="text-[13px] tracking-[0.08em] text-copper uppercase">{item.status}</p>
                <h3 className="mt-2 font-serif text-[1.375rem]">{item.name}</h3>
                <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">{item.text}</p>
                <a
                  href={item.href}
                  className="mt-3 inline-block text-sm underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
                  rel="noreferrer"
                >
                  Pagina programului
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-16" aria-labelledby="predare">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="predare" className="font-serif text-[1.75rem]">
            Cum se predă
          </h2>
          <Link
            href="/pentru-autoritati"
            className="text-sm underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          >
            Pagina pentru autorități
          </Link>
        </div>
        <ol className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {delivery.map(([title, text], index) => (
            <li key={title} className="bg-paper p-5">
              <p className="text-[13px] text-copper">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-serif text-[1.375rem]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 pb-20" aria-labelledby="sisteme">
        <h2 id="sisteme" className="font-serif text-[1.75rem]">
          Patru sisteme
        </h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2">
          {systems.map((item) => (
            <li key={item.name}>
              <a href={item.href} rel="noreferrer" className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper">
                <div className="relative aspect-[16/10] bg-night">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <h3 className="mt-3 font-serif text-[1.375rem] group-hover:underline">{item.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
