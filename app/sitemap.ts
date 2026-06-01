import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://www.grungehotel.com.kz";
  const lastModified = new Date();

  const pages = [
    "",
    "/live-band-almaty",
    "/corporate-band-almaty",
    "/wedding-band-almaty",
    "/studio-recording-almaty",
  ];

  return pages.map((path, index) => ({
    url: `${url}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.85,
  }));
}
