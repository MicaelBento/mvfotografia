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

  return (
    <section id="faq" className={cn("py-24 md:py-32", theme.stoneBg)}>
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeading
          modo={modo}
          label="07 · Dúvidas Frequentes"
          titulo="Informações"
          destaque="e processo"
          descricao="Detalhes sobre agenda, estrutura do estúdio próprio, prazos de entrega e formas de pagamento."
        />

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className={cn(
              "mt-10 rounded-md border px-6 md:px-8",
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
                    "py-5 text-left text-base font-medium leading-snug hover:no-underline md:text-[17px] [&>svg]:h-4 [&>svg]:w-4",
                    theme.inkText,
                    modo === "pessoal"
                      ? "hover:text-[#665E57]"
                      : "hover:text-[#57554F]"
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
