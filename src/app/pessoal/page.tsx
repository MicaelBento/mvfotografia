import type { Metadata } from "next"
import { ExperienceLanding } from "@/components/site/experience-landing"

const titulo =
  "Ensaios Pessoais — Casais, Famílias, Gestantes, Casamentos & Celebrações"
const descricao =
  "Estúdio próprio reservado no Centro de Sombrio/SC (Sala 302, acima da CDL). O tempo passa, a memória fica: ensaios de casal, família, gestante, casamento, aniversário e recém-nascido em Sombrio, região e sob consulta."
const ogAlt =
  "Memória Viva Estúdio — Ensaios pessoais de gestante, família, casal e aniversários em Sombrio/SC"

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: {
    canonical: "/pessoal",
  },
  openGraph: {
    title: `${titulo} | Memória Viva Estúdio`,
    description: descricao,
    url: "/pessoal",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-pessoal.jpg",
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
        url: "/og-pessoal.jpg",
        width: 1200,
        height: 630,
        alt: ogAlt,
      },
    ],
  },
}

export default function PessoalPage() {
  return <ExperienceLanding modo="pessoal" />
}

