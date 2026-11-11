import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Manifesto } from "@/components/site/manifesto"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { Gallery } from "@/components/site/gallery"
import { Experiences } from "@/components/site/experiences"
import { Testimonials } from "@/components/site/testimonials"
import { Faq } from "@/components/site/faq"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"
import { WhatsAppFloat } from "@/components/site/whatsapp-float"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <About />
        <Services />
        <Gallery />
        <Experiences />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
