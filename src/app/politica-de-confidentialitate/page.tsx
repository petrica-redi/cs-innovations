import type { Metadata } from "next";
import { LegalText } from "@/components/LegalText";
import { PageHead } from "@/components/PageHead";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: `Cum prelucrează ${company.legalName} datele personale ale vizitatorilor site-ului și ale utilizatorilor camerei de date.`,
  alternates: { canonical: "/politica-de-confidentialitate" },
};

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <PageHead label="Confidențialitate" title="Politica de confidențialitate">
        Ce date personale prelucrăm prin acest site, de ce, cât timp le păstrăm și ce drepturi aveți.
      </PageHead>
      <LegalText updated="29 octombrie 2026">
        <h2>Cine este operatorul</h2>
        <p>
          Operatorul datelor este <strong>{company.legalName}</strong>, CUI {company.cui}, înregistrată la registrul
          comerțului cu numărul {company.tradeRegister}, cu biroul în {company.addressLines.join(", ")}.
        </p>

        <h2>Ce nu facem</h2>
        <ul>
          <li>Nu folosim instrumente de analiză a traficului, pixeli de urmărire sau cookie-uri de marketing.</li>
          <li>Nu vindem și nu închiriem date personale.</li>
          <li>Nu folosim datele pentru publicitate și nici pentru antrenarea modelelor AI.</li>
        </ul>

        <h2>Ce date prelucrăm</h2>
        <p>
          <strong>Vizitarea site-ului.</strong> Furnizorul de găzduire (Vercel) înregistrează tehnic adresa IP, tipul
          browserului, pagina cerută și momentul cererii, pentru livrarea paginilor și protecția împotriva abuzurilor.
          Temeiul este interesul nostru legitim de a opera un site sigur (art. 6 alin. 1 lit. f GDPR).
        </p>
        <p>
          <strong>Camera de date.</strong> Când intrați cu un cod de acces, setăm un cookie de sesiune strict necesar
          (<code>cs_dr</code>), valabil cel mult 8 ore, care vă păstrează autentificat. Pentru a bloca încercările repetate de
          ghicire a codului păstrăm temporar o amprentă criptografică a adresei IP, nu adresa în sine. Documentele încărcate
          sunt stocate privat și sunt accesibile doar persoanelor care au codul. Temeiul este executarea demersurilor
          precontractuale sau a contractului (art. 6 alin. 1 lit. b GDPR) și interesul legitim de securitate.
        </p>
        <p>
          <strong>Corespondența.</strong> Dacă ne scrieți, folosim datele din mesaj doar pentru a vă răspunde și pentru
          eventuala relație contractuală care urmează.
        </p>

        <h2>Cât timp păstrăm datele</h2>
        <ul>
          <li>Cookie-ul de sesiune expiră după cel mult 8 ore sau la ieșirea din camera de date.</li>
          <li>Amprenta IP pentru limitarea încercărilor se șterge după expirarea ferestrei de limitare.</li>
          <li>Documentele din camera de date se păstrează pe durata procedurii sau a proiectului pentru care au fost transmise.</li>
          <li>Jurnalele tehnice ale furnizorului de găzduire se păstrează conform politicii acestuia.</li>
        </ul>

        <h2>Cui transmitem datele</h2>
        <p>
          Folosim furnizori care prelucrează date în numele nostru, pe bază de contract: Vercel Inc. pentru găzduire și
          stocarea fișierelor. Transferurile în afara Spațiului Economic European se fac pe baza clauzelor contractuale standard
          ale Comisiei Europene sau a cadrului UE-SUA privind protecția datelor.
        </p>

        <h2>Drepturile dumneavoastră</h2>
        <p>
          Aveți dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție, precum și dreptul de a
          retrage consimțământul acolo unde prelucrarea se bazează pe el. Ne puteți scrie la adresa biroului
          {company.email ? ` sau la ${company.email}` : ""}. Răspundem în cel mult o lună.
        </p>
        <p>
          Aveți și dreptul de a depune plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter
          Personal (ANSPDCP), www.dataprotection.ro.
        </p>

        <h2>Securitate</h2>
        <p>
          Site-ul se servește doar prin HTTPS. Accesul la camera de date este protejat prin cod, sesiune semnată și limitarea
          încercărilor, iar fișierele sunt stocate privat.
        </p>
      </LegalText>
    </main>
  );
}
