import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Manifesto } from "@/components/site/manifesto"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { Gallery } from "@/components/site/gallery"
import { Pricing } from "@/components/site/pricing"
import { Testimonials } from "@/components/site/testimonials"
import { Faq } from "@/components/site/faq"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

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
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
