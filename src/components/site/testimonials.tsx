"use client"

import { Star, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { getDepoimentosPorModo, type Depoimento } from "@/lib/site-data"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

interface CardProps {
  item: Depoimento
  modo: SiteModo
}

function TestimonialCard({ item, modo }: CardProps) {
  const theme = modoThemes[modo]

  return (
    <figure
      className={cn(
        "flex h-full min-h-[290px] flex-col justify-between rounded-md border p-7 md:p-9",
        theme.borderLight,
        theme.cardBg
      )}
    >
      <div>
        <Quote
          className="h-6 w-6 text-[#B8B5AC]"
          strokeWidth={1.25}
          aria-hidden="true"
        />
        <blockquote
          className={cn(
            "font-serif-site mt-5 text-xl italic leading-snug md:text-2xl",
            theme.inkText
          )}
        >
          “{item.texto}”
        </blockquote>
      </div>
      <figcaption
        className={cn(
          "mt-8 flex items-end justify-between gap-4 border-t pt-5",
          theme.borderLight
        )}
      >
        <div>
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.16em]",
              theme.inkText
            )}
          >
            {item.nome}
          </p>
          <p
            className={cn(
              "mt-1 text-[11px] uppercase tracking-[0.16em]",
              theme.mutedText
            )}
          >
            {item.servico}
          </p>
        </div>
        <div className="flex gap-1" aria-label="Avaliação: 5 de 5 estrelas">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("h-3.5 w-3.5 fill-current", theme.inkText)}
              strokeWidth={0}
            />
          ))}
        </div>
      </figcaption>
    </figure>
  )
}

interface TestimonialsProps {
  modo: SiteModo
}

export function Testimonials({ modo }: TestimonialsProps) {
  const theme = modoThemes[modo]
  const items = getDepoimentosPorModo(modo)
  const isCorporativo = modo === "corporativo"

  return (
    <section
      id="depoimentos"
      className={cn("py-24 md:py-32", theme.lightBg)}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          modo={modo}
          label="06 · Avaliações"
          titulo={isCorporativo ? "Marcas e clínicas" : "Histórias reais"}
          destaque={isCorporativo ? "atendidas" : "sobre nós"}
        />

        {items.length <= 2 ? (
          <Reveal delay={0.1} className="mt-12 grid gap-6 md:grid-cols-2">
            {items.map((d) => (
              <TestimonialCard key={d.nome} item={d} modo={modo} />
            ))}
          </Reveal>
        ) : (
          <Reveal delay={0.1} className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-5">
                {items.map((d) => (
                  <CarouselItem
                    key={d.nome}
                    className="pl-5 md:basis-3/4 lg:basis-1/2"
                  >
                    <TestimonialCard item={d} modo={modo} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-6 flex items-center gap-2">
                <CarouselPrevious
                  className={cn(
                    "static h-10 w-10 translate-y-0 rounded-sm border",
                    theme.borderLight,
                    theme.cardBg,
                    theme.inkText,
                    modo === "pessoal"
                      ? "hover:bg-[#1D1917] hover:text-[#FAF7F2]"
                      : "hover:bg-[#141413] hover:text-[#F6F5F0]"
                  )}
                />
                <CarouselNext
                  className={cn(
                    "static h-10 w-10 translate-y-0 rounded-sm border",
                    theme.borderLight,
                    theme.cardBg,
                    theme.inkText,
                    modo === "pessoal"
                      ? "hover:bg-[#1D1917] hover:text-[#FAF7F2]"
                      : "hover:bg-[#141413] hover:text-[#F6F5F0]"
                  )}
                />
              </div>
            </Carousel>
          </Reveal>
        )}
      </div>
    </section>
  )
}
