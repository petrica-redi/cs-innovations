import Image from "next/image";
import Link from "next/link";
import { company, competitions, delivery } from "@/lib/company";
import { projects } from "@/lib/projects";

const frames = [
  {
    src: "/photos/community-desk.jpg",
    alt: "Birou cu un laptop deschis pe o listă de dosare",
    label: "Dosar și plan",
    text: "Evaluare, plan, monitorizare și roluri diferite pentru teren și pentru supervizare.",
    href: "/servicii#social",
  },
  {
    src: "/photos/map-wall.jpg",
    alt: "Ecran mare cu o hartă de sistem",
    label: "Hartă și senzori",
    text: "Teritoriu, stații și citiri, afișate fără a amesteca datele personale.",
    href: "/proiecte",
  },
  {
    src: "/photos/lab-screen.jpg",
    alt: "Laborator cu un model molecular pe ecran",
    label: "Chimie",
    text: "Versiuni de formule, loturi și cine a schimbat un pas. Fără rețete publicate.",
    href: "/servicii#chimie",
  },
  {
    src: "/photos/ai-screen.jpg",
    alt: "Monitor cu un panou de asistență lângă un document",
    label: "Asistență",
    text: "Un model ajută la căutare și la o primă redactare. Omul confirmă.",
    href: "/servicii#ai",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section>
        <div className="relative h-[58vh] min-h-[380px] bg-night">
          <Image
            src="/photos/ops-wall.jpg"
            alt="Sală de lucru cu un perete de monitoare pe care rulează sisteme"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
        <div className="border-b border-line bg-night text-paper">
          <dl className="mx-auto grid max-w-6xl gap-4 px-5 py-4 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-paper/60">Firmă</dt>
              <dd>{company.legalName}</dd>
            </div>
            <div>
              <dt className="text-paper/60">CUI</dt>
              <dd>{company.cui}</dd>
            </div>
            <div>
              <dt className="text-paper/60">CAEN</dt>
              <dd>
                {company.caen} · {company.caenLabel}
              </dd>
            </div>
            <div>
              <dt className="text-paper/60">Din</dt>
              <dd>{company.founded}, Blejești, Teleorman</dd>
            </div>
          </dl>
        </div>
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="text-sm tracking-wide text-copper">Sisteme pentru instituții</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
            Construim sistemul pe care o autoritate îl poate recepționa.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
            Analiză, aplicație, rapoarte, hartă, lucru pe teren și suport. Inteligența
            artificială asistă. Chimia și serviciile sociale rămân domenii în care am
            construit deja.
          </p>
          <p className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pentru-autoritati"
              className="inline-block bg-ink px-4 py-2 text-sm text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Ce primește autoritatea
            </Link>
            <Link
              href="/proiecte"
              className="inline-block border border-ink px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              {projects.length} sisteme
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-4 sm:grid-cols-2" aria-label="Ce construim">
        {frames.map((frame) => (
          <Link
            key={frame.href + frame.label}
            href={frame.href}
            className="group grid overflow-hidden border border-line bg-paper sm:grid-cols-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          >
            <div className="relative aspect-[4/3] bg-night">
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                sizes="(min-width: 640px) 25vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
            <div className="p-5">
              <h2 className="font-serif text-2xl">{frame.label}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{frame.text}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12" aria-labelledby="livrare">
        <h2 id="livrare" className="text-3xl">
          Cum se predă
        </h2>
        <ol className="mt-6 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {delivery.map(([title, text], index) => (
            <li key={title} className="bg-paper p-5">
              <p className="text-sm text-copper">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-serif text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-white/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-3xl">În competițiile EIT</h2>
            <p className="mt-4 leading-7 text-ink-soft">
              Suntem înscriși la două competiții ale Institutului European de Inovare și
              Tehnologie. Una este despre materii prime. Cealaltă este despre tehnologie
              digitală. Înscrierea arată direcția de lucru. Nu este un contract și nu ține
              loc de proces-verbal de recepție.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {competitions.map((item) => (
              <li key={item.name} className="border border-line p-5">
                <h3 className="font-serif text-2xl">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{item.text}</p>
                <a
                  href={item.href}
                  className="mt-3 inline-block text-sm underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
                  rel="noreferrer"
                >
                  Pagina competiției
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="relative aspect-[21/9] min-h-56 bg-night">
          <Image
            src="/photos/racks.jpg"
            alt="Culoar de rack-uri"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
