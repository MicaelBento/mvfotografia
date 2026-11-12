"use client"

import Image from "next/image"
import { ArrowRight, HelpCircle } from "lucide-react"
import { getCategoriasPorModo } from "@/lib/site-data"
import { irParaGaleria } from "@/lib/site-store"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { CommercialGuide } from "./commercial-guide"

interface ServicesProps {
  modo: SiteModo
}

export function Services({ modo }: ServicesProps) {
  const theme = modoThemes[modo]
  const categoriasDoModo = getCategoriasPorModo(modo)

  const irParaComercial = () =>
    document
      .getElementById("guia-comercial")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })

  if (modo === "pessoal") {
    return (
      <section id="servicos" className="bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            modo="pessoal"
            centralizado
            invertido
            label="O que eternizamos"
            titulo="Cada momento"
            destaque="merece ser lembrado"
            descricao="Seis histórias diferentes, um mesmo cuidado: o seu. Escolha a sua para conhecer um pouco do nosso olhar."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoriasDoModo.map((cat, i) => (
              <Reveal key={cat.key} delay={(i % 3) * 0.12}>
                <article className="group relative aspect-[4/5] cursor-pointer overflow-hidden bg-neutral-900">
                  <button
                    type="button"
                    onClick={() => irParaGaleria(cat.key)}
                    className="absolute inset-0 h-full w-full text-left focus-visible:!outline-white"
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

  return (
    <section id="servicos" className={cn("py-24 md:py-32", theme.lightBg)}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            modo={modo}
            titulo="Produção visual para"
            destaque="marcas e empresas"
            descricao="Retratos de autoridade e fotografia de produto com rigor técnico — realizados no estúdio próprio ou diretamente na sua empresa."
          />
          <Reveal delay={0.1}>
            <button
              type="button"
              onClick={irParaComercial}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-sm border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors",
                theme.secondaryBtn
              )}
            >
              <HelpCircle className="h-3.5 w-3.5" strokeWidth={1.75} />
              Entenda o Corporativo &amp; Marketing
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {categoriasDoModo.map((cat, i) => (
            <Reveal key={cat.key} delay={(i % 4) * 0.08}>
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden border transition-all duration-300",
                  theme.cardRadius,
                  theme.borderLight,
                  theme.borderHover,
                  theme.cardBg
                )}
              >
                <button
                  type="button"
                  onClick={() => irParaGaleria(cat.key)}
                  className="flex h-full w-full flex-col text-left"
                  aria-label={`Ver portfólio de ${cat.nome}`}
                >
                  <div
                    className={cn(
                      "relative aspect-[16/10] w-full overflow-hidden",
                      theme.stoneBg
                    )}
                  >
                    <Image
                      src={cat.imagem}
                      alt={`Fotografia de ${cat.nome}`}
                      fill
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {cat.tag && (
                      <span
                        className={cn(
                          "absolute left-3 top-3 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm",
                          theme.controlRadius,
                          theme.tagLightBg
                        )}
                      >
                        {cat.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className={cn("label-mini", theme.mutedText)}>
                        {cat.nome}
                      </p>
                      <h3
                        className={cn(
                          "mt-2 text-xl font-medium tracking-[-0.015em]",
                          theme.inkText
                        )}
                      >
                        {cat.titulo}
                      </h3>
                      <p
                        className={cn(
                          "mt-2.5 text-sm font-light leading-relaxed",
                          theme.mutedText
                        )}
                      >
                        {cat.descricao}
                      </p>
                    </div>

                    <span
                      className={cn(
                        "mt-6 inline-flex items-center gap-2 border-t pt-4 text-[11px] font-semibold uppercase tracking-[0.18em]",
                        theme.borderLight,
                        theme.inkText
                      )}
                    >
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

        <Reveal delay={0.12}>
          <CommercialGuide />
        </Reveal>
      </div>
    </section>
  )
}
