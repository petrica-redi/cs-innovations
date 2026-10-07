import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const frames = [
  {
    src: "/photos/lab-screen.jpg",
    alt: "Masă de laborator cu un ecran pe care se vede un model molecular",
    label: "Chimie",
    href: "/servicii#chimie",
  },
  {
    src: "/photos/community-desk.jpg",
    alt: "Birou de comunitate, cu un laptop deschis pe un dosar digital",
    label: "Social",
    href: "/servicii#social",
  },
  {
    src: "/photos/ai-screen.jpg",
    alt: "Ecran întunecat cu un panou de asistență lângă un document",
    label: "Inteligență artificială",
    href: "/servicii#ai",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative min-h-[78vh] bg-night text-paper">
        <Image
          src="/photos/ops-wall.jpg"
          alt="Sală de lucru cu un perete de monitoare pe care rulează sisteme"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/35 to-night/10" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 py-12">
          <p className="text-sm tracking-wide text-copper">CS INNOVATIONS SOLUTIONS SRL</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Sisteme pe care le poți deschide.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper/85">
            Dezvoltăm platforme. Inteligența artificială asistă munca. Chimia și serviciile
            sociale au fiecare instrumentele lor.
          </p>
          <p className="mt-6">
            <Link
              href="/proiecte"
              className="inline-block border border-paper px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              {projects.length} proiecte din GitHub
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3" aria-label="Direcții">
        {frames.map((frame) => (
          <Link
            key={frame.href}
            href={frame.href}
            className="group relative block aspect-[4/3] overflow-hidden bg-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          >
            <Image
              src={frame.src}
              alt={frame.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent p-4 font-serif text-2xl text-paper">
              {frame.label}
            </span>
          </Link>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-8 lg:grid-cols-2">
        <div className="relative aspect-video bg-night">
          <Image
            src="/photos/map-wall.jpg"
            alt="Ecran mare cu o hartă de sistem, fără nume de localități lizibile"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl">De la ecran la predare</h2>
          <p className="mt-4 leading-7 text-ink-soft">
            Un sistem se vede devreme, pe date de probă. Predarea include codul, modul de
            instalare și un manual în limba română. Datele de lucru rămân la organizația
            care le deține.
          </p>
          <p className="mt-4">
            <Link
              href="/servicii"
              className="text-ink underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Cum lucrăm
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="relative aspect-[21/9] bg-night">
          <Image
            src="/photos/racks.jpg"
            alt="Culoar de rack-uri, cu lumini de stare și cabluri ordonate"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
