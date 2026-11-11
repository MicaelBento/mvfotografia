import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Memória Viva Estúdio — Micael & Vanusa",
    short_name: "Memória Viva",
    description:
      "Estúdio próprio no Centro de Sombrio/SC. Retratos corporativos, produtos & marketing, gestantes, famílias e casais.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F5F0",
    theme_color: "#141413",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}

