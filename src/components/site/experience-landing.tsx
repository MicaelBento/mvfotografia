import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { cn } from "@/lib/utils"
import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Manifesto } from "@/components/site/manifesto"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { Gallery } from "@/components/site/gallery"
import { Experiences } from "@/components/site/experiences"
import { Testimonials } from "@/components/site/testimonials"
import { CorporateCta } from "@/components/site/corporate-cta"
import { Faq } from "@/components/site/faq"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"
import { WhatsAppFloat } from "@/components/site/whatsapp-float"

interface ExperienceLandingProps {
  modo: SiteModo
}

export function ExperienceLanding({ modo }: ExperienceLandingProps) {
  const theme = modoThemes[modo]
  const isPessoal = modo === "pessoal"

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col",
        theme.pageBg,
        isPessoal && "pessoal-prototype"
      )}
    >
      <Header modo={modo} />
      <main className="flex-1">
        <Hero modo={modo} />
        <Manifesto modo={modo} />
        {isPessoal && <About />}
        <Services modo={modo} />
        <Gallery modo={modo} />
        {!isPessoal && <Experiences modo={modo} />}
        <Testimonials modo={modo} />
        {!isPessoal && <CorporateCta />}
        <Faq modo={modo} />
        <Contact modo={modo} />
      </main>
      <Footer modo={modo} />
      <WhatsAppFloat modo={modo} />
    </div>
  )
}

