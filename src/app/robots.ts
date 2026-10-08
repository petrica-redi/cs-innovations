import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/camera-de-date", "/api/camera-de-date"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
