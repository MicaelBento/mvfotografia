"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { categorias } from "@/lib/site-data"
import { irParaGaleria } from "@/lib/site-store"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function Services() {
  return (
    <section id="servicos" className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          invertido
          label="O que eternizamos"
          titulo="Cada momento"
          destaque="merece ser lembrado"
          descricao="Seis histórias diferentes, um mesmo cuidado: o seu. Escolha a sua para conhecer um pouco do nosso olhar."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((cat, i) => (
            <Reveal key={cat.key} delay={(i % 3) * 0.12}>
              <article className="group relative aspect-[4/5] cursor-pointer overflow-hidden bg-neutral-900">
                <button
                  type="button"
                  onClick={() => irParaGaleria(cat.key)}
                  className="absolute inset-0 h-full w-full text-left"
                  aria-label={`Ver portfólio de ${cat.nome}`}
                >
                  <Image
                    src={cat.imagem}
                    alt={`Ensaios de ${cat.nome}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-70 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="label-mini text-neutral-400">{cat.nome}</p>
                    <h3 className="font-serif-site mt-2 text-3xl font-medium leading-tight text-white">
                      {cat.titulo}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-neutral-300 md:opacity-0 md:transition-all md:duration-500 md:group-hover:opacity-100">
                      {cat.descricao}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                      Ver no portfólio
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
