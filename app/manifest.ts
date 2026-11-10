import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nuktah — نقطة",
    short_name: "Nuktah",
    description: "Handwritten grade-sheet tools for Algerian teachers.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf7",
    theme_color: "#176b4b",
    lang: "ar",
    dir: "rtl",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }]
  };
}
