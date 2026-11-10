import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ["", 1],
    ["/en", 0.9],
    ["/privacy", 0.5],
    ["/terms", 0.5],
    ["/support", 0.6],
    ["/en/privacy", 0.5],
    ["/en/terms", 0.5],
    ["/en/support", 0.6]
  ] as const;

  return routes.map(([path, priority]) => ({
    url: `https://nuktah.app${path}`,
    changeFrequency: "monthly" as const,
    priority
  }));
}
