import { Icon, type IconName } from "@/components/Icons";
import { SectionTitle } from "@/components/SectionTitle";
import { commitments, engagement, roles } from "@/lib/company";

const engagementIcons: IconName[] = ["audit", "platform", "ops", "security"];

export function HowWeWork() {
  return (
    <section className="bg-soft" aria-labelledby="cum-lucram">
      <div className="mx-auto max-w-[1200px] px-5 py-28">
        <SectionTitle
          eyebrow="Cum lucrăm"
          title="Modele de colaborare și ce vă garantăm prin contract"
          id="cum-lucram"
          aside={<p className="text-[15px]">Prețul îl stabilim după analiză, pe baza unui plan scris. Condițiile de mai jos intră în contract, nu rămân promisiuni.</p>}
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engagement.map((item, index) => (
            <li key={item.title} className="reveal group relative overflow-hidden border border-line bg-white p-8">
              <Icon name={engagementIcons[index]} className="size-11" />
              <h3 className="mt-5 text-[19px]">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.75]">{item.text}</p>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-flame transition-transform group-hover:scale-x-100" />
            </li>
          ))}
        </ul>
        <dl className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {commitments.map(([title, text]) => (
            <div key={title} className="flex gap-4">
              <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1.5 size-5 shrink-0 text-cta">
                <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <dt className="font-heading text-[17px] font-bold text-ink">{title}</dt>
                <dd className="mt-1 text-[15px]">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function TeamRoles() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-24" aria-labelledby="echipa">
      <SectionTitle
        eyebrow="Echipa"
        title="Rolurile acoperite în fiecare proiect"
        id="echipa"
        aside={<p className="text-[15px]">Echipa se formează pe proiect din aceste roluri. Componența nominală și CV-urile se transmit în ofertă sau prin camera de date.</p>}
      />
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map(([title, text], index) => (
          <li key={title} className="relative overflow-hidden border border-line bg-white p-8">
            <span aria-hidden="true" className="big-num big-num-light absolute top-4 right-5">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="relative text-[19px]">{title}</h3>
            <p className="relative mt-3 text-[15px] leading-[1.75]">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
