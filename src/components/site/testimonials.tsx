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
    <section id="depoimentos" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHeading
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
              {depoimentos.map((d) => (
                <CarouselItem
                  key={d.nome}
                  className="pl-6 md:basis-3/4 lg:basis-3/5"
                >
                  <figure className="flex h-full min-h-[340px] flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-12">
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
