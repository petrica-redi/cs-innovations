import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/lib/company";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const description =
  "CS INNOVATIONS SOLUTIONS SRL construiește sisteme informatice pentru instituții: dosar, rapoarte, hartă, teren și suport. Înscrisă în competițiile EIT RawMaterials și 28DIGITAL.";

export const metadata: Metadata = {
  title: {
    default: `${company.brand} | Dezvoltare și platforme`,
    template: `%s | ${company.brand}`,
  },
  description,
  authors: [{ name: company.legalName }],
  openGraph: {
    title: `${company.brand} | Dezvoltare și platforme`,
    description,
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
