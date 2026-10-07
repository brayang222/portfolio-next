import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { PROJECTS } from "@/constants/projects";

const BASE_URL = "https://brayangomez.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });

    for (const project of PROJECTS) {
      entries.push({
        url: `${BASE_URL}/${locale}/${project.path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
