import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/lib/company";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "CS Innovations proiectează platforme informatice pentru servicii sociale, sănătate și laborator și lucrează la proiecte de chimie și de inovare socială. Blejești, Teleorman, din 2017.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.brand} | Firmă de inginerie și platforme informatice`,
    template: `%s | ${company.brand}`,
  },
  description,
  authors: [{ name: company.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${company.brand} | Firmă de inginerie și platforme informatice`,
    description,
    locale: "ro_RO",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#org`,
      name: company.legalName,
      alternateName: company.brand,
      url: siteUrl,
      foundingDate: company.founded,
      founder: { "@type": "Person", name: company.founder },
      taxID: company.cui,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.addressLines[0],
        addressLocality: "Blejești",
        addressRegion: "Teleorman",
        postalCode: "147015",
        addressCountry: "RO",
      },
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#site`, url: siteUrl, name: company.brand, inLanguage: "ro", publisher: { "@id": `${siteUrl}/#org` } },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#continut"
          className="sr-only z-50 rounded-sm bg-flame px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Sari la conținut
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <Header />
        <div id="continut" className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
