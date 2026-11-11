"use client"

import { Star, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { depoimentos } from "@/lib/site-data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[#F6F5F0] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          label="06 · Avaliações"
          titulo="Quem produziu"
          destaque="conosco"
        />

        <Reveal delay={0.1} className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-5">
              {depoimentos.map((d) => (
                <CarouselItem
                  key={d.nome}
                  className="pl-5 md:basis-3/4 lg:basis-1/2"
                >
                  <figure className="flex h-full min-h-[300px] flex-col justify-between rounded-md border border-[#141413]/12 bg-[#FDFCFA] p-7 md:p-9">
                    <div>
                      <Quote
                        className="h-6 w-6 text-[#B8B5AC]"
                        strokeWidth={1.25}
                        aria-hidden="true"
                      />
                      <blockquote className="font-serif-site mt-5 text-xl italic leading-snug text-[#141413] md:text-2xl">
                        “{d.texto}”
                      </blockquote>
                    </div>
                    <figcaption className="mt-8 flex items-end justify-between gap-4 border-t border-[#141413]/10 pt-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#141413]">
                          {d.nome}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#57554F]">
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
                            className="h-3.5 w-3.5 fill-[#141413] text-[#141413]"
                            strokeWidth={0}
                          />
                        ))}
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-6 flex items-center gap-2">
              <CarouselPrevious className="static h-10 w-10 translate-y-0 rounded-sm border-[#141413]/20 bg-[#FDFCFA] text-[#141413] hover:bg-[#141413] hover:text-[#F6F5F0]" />
              <CarouselNext className="static h-10 w-10 translate-y-0 rounded-sm border-[#141413]/20 bg-[#FDFCFA] text-[#141413] hover:bg-[#141413] hover:text-[#F6F5F0]" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  )
}
