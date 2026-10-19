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
    <section id="faq" className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <SectionHeading
          label="Perguntas frequentes"
          titulo="Antes de perguntar,"
          destaque="talvez esteja aqui"
        />

        <Reveal delay={0.15}>
          <Accordion
            type="single"
            collapsible
            className="mt-12 rounded-2xl border border-neutral-200 bg-white px-6 md:px-8"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.pergunta}
                value={`item-${i}`}
                className="border-neutral-200 last:border-b-0"
              >
                <AccordionTrigger className="py-6 text-left text-base font-medium leading-snug hover:no-underline hover:text-neutral-600 md:text-lg [&>svg]:h-5 [&>svg]:w-5">
                  {f.pergunta}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-sm font-light leading-relaxed text-neutral-600 md:text-base">
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
