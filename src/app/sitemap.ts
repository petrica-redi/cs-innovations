import type { MetadataRoute } from "next";
import { legalLinks, nav } from "@/lib/company";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ href: "" }, ...nav, ...legalLinks, { href: "/en" }].map((item) => ({
    url: `${siteUrl}${item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "" ? 1 : item.href.startsWith("/termeni") || item.href.startsWith("/politica") ? 0.2 : 0.7,
  }));
}
