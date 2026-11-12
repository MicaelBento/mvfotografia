import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getFaqsPorModo } from "@/lib/site-data"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

interface FaqProps {
  modo: SiteModo
}

export function Faq({ modo }: FaqProps) {
  const theme = modoThemes[modo]
  const items = getFaqsPorModo(modo)

  if (modo === "pessoal") {
    return (
      <section id="faq" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <SectionHeading
            modo="pessoal"
            centralizado
            label="Perguntas frequentes"
            titulo="Antes de perguntar,"
            destaque="talvez esteja aqui"
          />

          <Reveal delay={0.15}>
            <Accordion
              type="single"
              collapsible
              className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 md:px-8"
            >
              {items.map((f, i) => (
                <AccordionItem
                  key={f.pergunta}
                  value={`item-${i}`}
                  className="border-neutral-200 last:border-b-0"
                >
                  <AccordionTrigger className="py-6 text-left text-base font-medium leading-snug text-neutral-900 hover:no-underline hover:text-neutral-600 md:text-lg [&>svg]:h-5 [&>svg]:w-5">
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

  return (
    <section id="faq" className={cn("py-24 md:py-32", theme.stoneBg)}>
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeading
          modo={modo}
          titulo="Informações"
          destaque="e processo"
          descricao="Detalhes sobre agenda, estrutura do estúdio próprio, prazos de entrega e formas de pagamento."
        />

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className={cn(
              "mt-10 border px-6 md:px-8",
              theme.cardRadius,
              theme.borderLight,
              theme.cardBg
            )}
          >
            {items.map((f, i) => (
              <AccordionItem
                key={f.pergunta}
                value={`item-${i}`}
                className={cn(theme.borderLight, "last:border-b-0")}
              >
                <AccordionTrigger
                  className={cn(
                    "py-5 text-left text-base font-medium leading-snug hover:no-underline hover:text-[#57554F] md:text-[17px] [&>svg]:h-4 [&>svg]:w-4",
                    theme.inkText
                  )}
                >
                  {f.pergunta}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "pb-6 text-sm font-light leading-relaxed md:text-base",
                    theme.mutedText
                  )}
                >
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
