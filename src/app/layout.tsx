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
  "CS Innovations proiectează platforme informatice pentru servicii sociale, sănătate și laborator și lucrează la proiecte de chimie și de inovare socială. Blejești, Teleorman, din 2017.";

export const metadata: Metadata = {
  title: {
    default: `${company.brand} | Firmă de inginerie și platforme informatice`,
    template: `%s | ${company.brand}`,
  },
  description,
  authors: [{ name: company.legalName }],
  openGraph: {
    title: `${company.brand} | Firmă de inginerie și platforme informatice`,
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
