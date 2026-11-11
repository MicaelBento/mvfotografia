import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/site-data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function Faq() {
  return (
    <section id="faq" className="bg-[#ECEAE3] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeading
          label="07 · Dúvidas Frequentes"
          titulo="Informações"
          destaque="e processo"
          descricao="Detalhes sobre agenda, estrutura do estúdio próprio, prazos de entrega e formas de pagamento."
        />

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className="mt-10 rounded-md border border-[#141413]/12 bg-[#FDFCFA] px-6 md:px-8"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.pergunta}
                value={`item-${i}`}
                className="border-[#141413]/10 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium leading-snug text-[#141413] hover:no-underline hover:text-[#57554F] md:text-[17px] [&>svg]:h-4 [&>svg]:w-4">
                  {f.pergunta}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm font-light leading-relaxed text-[#57554F] md:text-base">
                  {f.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
