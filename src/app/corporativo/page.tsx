import type { Metadata } from "next"
import { ExperienceLanding } from "@/components/site/experience-landing"

const titulo = "Corporativo, Retratos, Produtos & Marketing"
const descricao =
  "Produção comercial em estúdio próprio em Sombrio/SC ou in loco na sua empresa. Retratos executivos, equipes, catálogos de produtos e campanhas de marketing."
const ogAlt =
  "Memória Viva Estúdio — Retratos corporativos, equipes, produtos para e-commerce e campanhas em Sombrio/SC"

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: {
    canonical: "/corporativo",
  },
  openGraph: {
    title: `${titulo} | Memória Viva Estúdio`,
    description: descricao,
    url: "/corporativo",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-corporativo.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: ogAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${titulo} | Memória Viva Estúdio`,
    description: descricao,
    images: [
      {
        url: "/og-corporativo.jpg",
        width: 1200,
        height: 630,
        alt: ogAlt,
      },
    ],
  },
}

export default function CorporativoPage() {
  return <ExperienceLanding modo="corporativo" />
}

