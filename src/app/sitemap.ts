import type { MetadataRoute } from "next";
import { nav } from "@/lib/company";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ href: "" }, ...nav.filter((item) => item.href !== "/camera-de-date")].map((item) => ({
    url: `${siteUrl}${item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "" ? 1 : 0.7,
  }));
}
