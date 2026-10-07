import Link from "next/link";
import { Screen } from "@/components/Screen";
import { company, programmes, steps } from "@/lib/company";
import { featured } from "@/lib/projects";

const areasOfWork = [
  {
    title: "Platforme informatice",
    href: "/proiecte?domeniu=Platforme",
    text: "Aplicații web pentru echipe care lucrează cu dosare, consultații sau date de la senzori. Pornim de la procedura pe care oamenii o aplică deja.",
  },
  {
    title: "Chimie",
    href: "/proiecte?domeniu=Chimie",
    text: "Proiecte de inovare în chimie și programe pentru laborator. Chemistry tools reunește șase simulatoare, de la orbitali atomici la titrare.",
  },
  {
    title: "Inovare socială",
    href: "/proiecte?domeniu=Social",
    text: "Instrumente pentru cei care lucrează direct cu oamenii dintr-o comunitate: asistenți sociali, mediatori sanitari, consilieri de afaceri.",
  },
];

export default function Home() {
  const showcase = featured.slice(0, 4);

  return (
    <main className="flex-1">
      <section className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 pt-14 pb-16 lg:grid-cols-[1fr_1.1fr] lg:pt-20">
        <div>
          <h1 className="max-w-[16em] font-serif text-[2.6rem] leading-[1.1] md:text-[3.4rem]">
            Proiectăm platforme pentru servicii sociale, sănătate și laborator.
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-ink-soft">
            Suntem CS Innovations, o firmă de inginerie înființată în {company.founded} la Blejești, în
            Teleorman. O conduce {company.founder}, chimist de formare, care proiectează și construiește
            platformele firmei.
          </p>
          <p className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/proiecte"
              className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Vezi proiectele
            </Link>
            <Link
              href="/pentru-autoritati"
              className="rounded-full border border-ink/30 px-5 py-2.5 text-sm hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Pentru autorități contractante
            </Link>
          </p>
        </div>
        <div className="relative pb-16 lg:pb-24">
          <Screen
            src="/screens/sisci-case.jpg"
            domain="sisci.vercel.app"
            alt="Dosarul unui beneficiar în SISCI, cu pașii de la evaluare la închidere"
            priority
          />
          <Screen
            src="/screens/redi-healthcare.jpg"
            domain="redi.healthcare"
            alt="Prima pagină REDI Health, cu explicarea unei rețete pe telefon"
            sizes="(min-width: 1024px) 30vw, 60vw"
            className="absolute right-0 bottom-0 w-[62%] xl:right-[-4%]"
          />
        </div>
      </section>

      <section className="border-y border-line bg-[#ece7dd]">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr] lg:items-center lg:gap-12">
          <p className="font-serif text-xl">Programe europene</p>
          {programmes.map((item) => (
            <p key={item.name} className="text-[15px] leading-relaxed text-ink-soft">
              <a
                href={item.href}
                rel="noreferrer"
                className="font-medium text-ink underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
              >
                {item.kind} {item.name}
              </a>
              . {item.text}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-20" aria-labelledby="ce-facem">
        <h2 id="ce-facem" className="font-serif text-3xl">
          Ce facem
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {areasOfWork.map((item) => (
            <div key={item.title} className="border-t-2 border-ink pt-5">
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-sm underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
              >
                Proiectele din acest domeniu
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-night text-paper" aria-labelledby="platforme">
        <div className="mx-auto max-w-[1180px] px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="platforme" className="font-serif text-3xl">
              Platforme pe care le-am construit
            </h2>
            <Link
              href="/proiecte"
              className="text-sm underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Toate proiectele
            </Link>
          </div>
          <ul className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {showcase.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  rel="noreferrer"
                  className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
                >
                  <Screen
                    src={project.screen!}
                    domain={project.domain!}
                    alt={`Pagina ${project.name}, așa cum arată online`}
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />
                  <h3 className="mt-4 font-serif text-2xl group-hover:underline">{project.name}</h3>
                  <p className="mt-2 leading-relaxed text-paper/75">{project.summary}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 lg:grid-cols-[1fr_1.4fr]" aria-labelledby="cum">
        <div>
          <h2 id="cum" className="font-serif text-3xl">
            Cum lucrăm
          </h2>
          <p className="mt-4 max-w-[44ch] leading-relaxed text-ink-soft">
            Punem aplicația devreme în mâna oamenilor care o vor folosi și o corectăm după ce ne spun ei.
          </p>
          <Link
            href="/pentru-autoritati"
            className="mt-4 inline-block text-sm underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          >
            Detalii pentru autorități contractante
          </Link>
        </div>
        <ol className="space-y-6">
          {steps.map((text, index) => (
            <li key={text} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line pb-6">
              <span className="font-serif text-2xl text-copper">{index + 1}</span>
              <p className="text-lg leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
