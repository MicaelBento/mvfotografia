import type { MetadataRoute } from "next"
import { getAbsoluteUrl } from "@/lib/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: getAbsoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        getAbsoluteUrl("/og-image.jpg"),
        getAbsoluteUrl("/img/casais-4.jpg"),
        getAbsoluteUrl("/img/corporativo-1.jpg"),
        getAbsoluteUrl("/img/produtos-1.jpg"),
      ],
    },
    {
      url: getAbsoluteUrl("/pessoal"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        getAbsoluteUrl("/og-pessoal.jpg"),
        getAbsoluteUrl("/img/casais-4.jpg"),
        getAbsoluteUrl("/img/gestantes-3.jpg"),
        getAbsoluteUrl("/img/familias-3.jpg"),
      ],
    },
    {
      url: getAbsoluteUrl("/corporativo"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        getAbsoluteUrl("/og-corporativo.jpg"),
        getAbsoluteUrl("/img/corporativo-1.jpg"),
        getAbsoluteUrl("/img/corporativo-2.jpg"),
        getAbsoluteUrl("/img/corporativo-3.jpg"),
        getAbsoluteUrl("/img/produtos-1.jpg"),
        getAbsoluteUrl("/img/produtos-2.jpg"),
        getAbsoluteUrl("/img/produtos-3.jpg"),
      ],
    },
  ]
}
