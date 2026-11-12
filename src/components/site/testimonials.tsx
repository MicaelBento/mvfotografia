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
        "flex h-full min-h-[290px] flex-col justify-between border p-7 md:p-9",
        theme.cardRadius,
        theme.borderLight,
        theme.cardBg
      )}
    >
      <div>
        <Quote
          className={cn("h-6 w-6", theme.quoteIconColor)}
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
              className={cn("h-3.5 w-3.5 fill-current", theme.starColor)}
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

  if (modo === "pessoal") {
    return (
      <section id="depoimentos" className="bg-neutral-50 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <SectionHeading
            modo="pessoal"
            centralizado
            label="Depoimentos"
            titulo="Quem viveu,"
            destaque="conta melhor"
          />

          <Reveal delay={0.15} className="mt-14">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {items.map((d) => (
                  <CarouselItem
                    key={d.nome}
                    className="pl-6 md:basis-3/4 lg:basis-3/5"
                  >
                    <figure className="flex h-full min-h-[340px] flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-8 md:p-12">
                      <div>
                        <Quote
                          className="h-8 w-8 text-neutral-300"
                          strokeWidth={1}
                          aria-hidden="true"
                        />
                        <blockquote className="font-serif-site mt-6 text-2xl font-light italic leading-snug text-neutral-800 md:text-[1.7rem]">
                          “{d.texto}”
                        </blockquote>
                      </div>
                      <figcaption className="mt-10 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
                            {d.nome}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                            {d.servico}
                          </p>
                        </div>
                        <div
                          className="flex gap-1"
                          aria-label="Avaliação: 5 de 5 estrelas"
                        >
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-black text-black"
                              strokeWidth={0}
                            />
                          ))}
                        </div>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-2 h-12 w-12 rounded-full border-neutral-300 bg-white text-black hover:bg-black hover:text-white md:left-[-2rem]" />
              <CarouselNext className="right-2 h-12 w-12 rounded-full border-neutral-300 bg-white text-black hover:bg-black hover:text-white md:right-[-2rem]" />
            </Carousel>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section
      id="depoimentos"
      className={cn("py-24 md:py-32", theme.lightBg)}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          modo={modo}
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
                    "static h-10 w-10 translate-y-0 border hover:bg-[#141413] hover:text-[#F6F5F0]",
                    theme.controlRadius,
                    theme.borderLight,
                    theme.cardBg,
                    theme.inkText
                  )}
                />
                <CarouselNext
                  className={cn(
                    "static h-10 w-10 translate-y-0 border hover:bg-[#141413] hover:text-[#F6F5F0]",
                    theme.controlRadius,
                    theme.borderLight,
                    theme.cardBg,
                    theme.inkText
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
