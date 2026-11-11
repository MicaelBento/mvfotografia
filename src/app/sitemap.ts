import type { MetadataRoute } from "next"
import { getAbsoluteUrl } from "@/lib/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getAbsoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        getAbsoluteUrl("/og-image.jpg"),
        getAbsoluteUrl("/img/corporativo-1.jpg"),
        getAbsoluteUrl("/img/produtos-1.jpg"),
        getAbsoluteUrl("/img/casais-4.jpg"),
        getAbsoluteUrl("/img/gestantes-3.jpg"),
      ],
    },
  ]
}

