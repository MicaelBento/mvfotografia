import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { estudioLocalizacao } from "@/lib/site-data"
import { getAbsoluteUrl, getSiteUrl } from "@/lib/site-url"

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans-site",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const montserrat = Montserrat({
  variable: "--font-sans-pessoal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const siteTitle =
  "Memória Viva Estúdio | Fotografia Pessoal, Corporativa & Marketing"
const siteDescription =
  "Estúdio próprio no Centro de Sombrio/SC (Sala 302, acima da CDL). Retratos corporativos, produtos & marketing, gestantes, famílias e casais em Sombrio, região e sob consulta."
const ogImageAlt =
  "Memória Viva Estúdio — Retratos corporativos, produtos & marketing e ensaios pessoais em estúdio próprio em Sombrio/SC"

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  applicationName: "Memória Viva Estúdio",
  title: {
    default: siteTitle,
    template: "%s | Memória Viva Estúdio",
  },
  description: siteDescription,
  keywords: [
    "estúdio fotográfico Sombrio",
    "fotógrafo em Sombrio e região",
    "fotografia corporativa Sombrio",
    "fotografia de produto e e-commerce",
    "fotografia para marketing",
    "retratos profissionais",
    "ensaio gestante Sombrio",
    "ensaio família Sombrio",
    "Micael e Vanusa",
    "Memória Viva Estúdio",
  ],
  authors: [{ name: "Micael & Vanusa", url: "/" }],
  creator: "Memória Viva Estúdio — Micael & Vanusa",
  publisher: "Memória Viva Estúdio",
  category: "photography",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Memória Viva Estúdio — Micael & Vanusa",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#141413" },
  ],
  width: "device-width",
  initialScale: 1,
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": getAbsoluteUrl("/#estudio"),
  name: "Memória Viva Estúdio — Micael & Vanusa",
  alternateName: "MV Fotografia",
  description: siteDescription,
  url: getAbsoluteUrl("/"),
  image: [
    getAbsoluteUrl("/og-image.jpg"),
    getAbsoluteUrl("/img/corporativo-1.jpg"),
    getAbsoluteUrl("/img/produtos-1.jpg"),
  ],
  logo: getAbsoluteUrl("/icon-512.png"),
  telephone: "+55-48-99859-9989",
  priceRange: "$$",
  knowsLanguage: "pt-BR",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${estudioLocalizacao.enderecoLinha.split(" · ")[0]} - ${estudioLocalizacao.complemento} (${estudioLocalizacao.referencia})`,
    addressLocality: "Sombrio",
    addressRegion: "SC",
    postalCode: estudioLocalizacao.cep,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -29.1134067,
    longitude: -49.63443,
  },
  hasMap: estudioLocalizacao.googleMapsUrl,
  areaServed: [
    "Sombrio",
    "Extremo Sul Catarinense",
    "Litoral Norte Gaúcho",
  ],
  founder: [
    { "@type": "Person", name: "Micael" },
    { "@type": "Person", name: "Vanusa" },
  ],
  sameAs: [
    "https://instagram.com/memoriaviva.estudio",
    "https://facebook.com/memoriaviva.estudio",
    "https://wa.me/5548998599989",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${montserrat.variable} ${serif.variable} bg-[#F6F5F0] font-sans text-[#141413] antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
