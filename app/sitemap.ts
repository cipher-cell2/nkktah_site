import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://nuktah.app", changeFrequency: "monthly", priority: 1 },
    { url: "https://nuktah.app/en", changeFrequency: "monthly", priority: 0.9 }
  ];
}