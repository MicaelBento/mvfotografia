"use client"

import Image from "next/image"
import { ArrowRight, HelpCircle } from "lucide-react"
import { categorias } from "@/lib/site-data"
import { irParaGaleria } from "@/lib/site-store"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { CommercialGuide } from "./commercial-guide"

export function Services() {
  const irParaComercial = () =>
    document
      .getElementById("guia-comercial")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <section id="servicos" className="bg-[#F6F5F0] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="03 · Especialidades"
            titulo="Frentes de atuação"
            destaque="do estúdio"
            descricao="De ensaios pessoais e familiares a retratos corporativos e produções de produto — com direção técnica no estúdio próprio ou in loco."
          />
          <Reveal delay={0.1}>
            <button
              type="button"
              onClick={irParaComercial}
              className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-[#141413]/25 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#141413] transition-colors hover:border-[#141413] hover:bg-[#ECEAE3]"
            >
              <HelpCircle className="h-3.5 w-3.5" strokeWidth={1.75} />
              Entenda o Corporativo &amp; Marketing
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((cat, i) => (
            <Reveal key={cat.key} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col rounded-sm border border-[#141413]/12 bg-[#FDFCFA] transition-colors hover:border-[#141413]/35">
                <button
                  type="button"
                  onClick={() => irParaGaleria(cat.key)}
                  className="flex h-full w-full flex-col text-left"
                  aria-label={`Ver portfólio de ${cat.nome}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECEAE3]">
                    <Image
                      src={cat.imagem}
                      alt={`Fotografia de ${cat.nome}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {cat.tag && (
                      <span className="absolute left-3 top-3 rounded-sm bg-[#141413]/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F6F5F0] backdrop-blur-sm">
                        {cat.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="label-mini text-[#57554F]">{cat.nome}</p>
                      <h3 className="mt-2 text-xl font-medium tracking-[-0.015em] text-[#141413]">
                        {cat.titulo}
                      </h3>
                      <p className="mt-2.5 text-sm font-light leading-relaxed text-[#57554F]">
                        {cat.descricao}
                      </p>
                    </div>

                    <span className="mt-6 inline-flex items-center gap-2 border-t border-[#141413]/10 pt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#141413]">
                      Explorar portfólio
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={1.75}
                      />
                    </span>
                  </div>
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Guia explicativo interativo das frentes comerciais */}
        <Reveal delay={0.12}>
          <CommercialGuide />
        </Reveal>

        {/* Atendimento sob consulta para casamentos e recém-nascidos */}
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-sm border border-[#141413]/12 bg-[#ECEAE3]/60 px-6 py-4 sm:flex-row sm:items-center">
            <p className="text-xs font-light leading-relaxed text-[#57554F]">
              <strong className="font-medium text-[#141413]">Casamentos e recém-nascidos:</strong>{" "}
              Atendidos sob consulta prévia de agenda e alinhamento de proposta pelo WhatsApp.
            </p>
            <a
              href="#contato"
              className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#141413] transition-colors hover:text-[#57554F]"
            >
              Consultar disponibilidade
              <ArrowRight className="h-3 w-3" strokeWidth={1.75} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
