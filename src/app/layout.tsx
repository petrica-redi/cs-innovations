import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/lib/company";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const description =
  "CS Innovations dezvoltă platforme software și sisteme AI orchestrate pentru sectorul public, sănătate și cercetare, cu validare, aprobare umană și date păstrate în UE. București, din 2017.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.brand} | Dezvoltare software și orchestrare AI`,
    template: `%s | ${company.brand}`,
  },
  description,
  authors: [{ name: company.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${company.brand} | Dezvoltare software și orchestrare AI`,
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
      taxID: company.cui,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bulevardul Corneliu Coposu nr. 6-8, Spaces Unirii View",
        addressLocality: "București",
        postalCode: "030167",
        addressCountry: "RO",
      },
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#site`, url: siteUrl, name: company.brand, inLanguage: "ro", publisher: { "@id": `${siteUrl}/#org` } },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${geist.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#continut"
          className="sr-only z-50 rounded-md bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
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
