import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://www.grungehotel.com.kz";
  const pages = [
    { path: "", lastModified: "2026-10-09", priority: 1 },
    { path: "/live-band-almaty", lastModified: "2026-10-09", priority: 0.9 },
    { path: "/corporate-band-almaty", lastModified: "2026-10-09", priority: 0.9 },
    { path: "/wedding-band-almaty", lastModified: "2026-10-09", priority: 0.9 },
    { path: "/studio-recording-almaty", lastModified: "2026-10-09", priority: 0.9 },
    { path: "/alanaudio", lastModified: "2026-10-09", priority: 0.9 },
    { path: "/cover-band-almaty", lastModified: "2026-10-09", priority: 0.8 },
    { path: "/new-year-corporate-band-almaty", lastModified: "2026-10-09", priority: 0.8 },
    { path: "/musicians-for-corporate-almaty", lastModified: "2026-10-09", priority: 0.8 },
    { path: "/mixing-mastering-almaty", lastModified: "2026-10-09", priority: 0.8 },
    { path: "/arrangement-almaty", lastModified: "2026-10-09", priority: 0.8 },
    { path: "/audio-engineer-almaty", lastModified: "2026-10-09", priority: 0.8 },
  ];

  return pages.map(({ path, lastModified, priority }) => ({
    url: `${url}${path}`,
    lastModified: new Date(`${lastModified}T12:00:00+05:00`),
    changeFrequency: "weekly",
    priority,
  }));
}
