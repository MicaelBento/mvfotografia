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
  const isCorporativo = modo === "corporativo"

  const irParaComercial = () =>
    document
      .getElementById("guia-comercial")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <section id="servicos" className={cn("py-24 md:py-32", theme.lightBg)}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            modo={modo}
            titulo={
              isCorporativo
                ? "Produção visual para"
                : "Momentos conduzidos"
            }
            destaque={isCorporativo ? "marcas e empresas" : "com sensibilidade"}
            descricao={
              isCorporativo
                ? "Retratos de autoridade e fotografia de produto com rigor técnico — realizados no estúdio próprio ou diretamente na sua empresa."
                : "Ensaios pessoais, de gestante, família e celebrações — no nosso estúdio próprio reservado em Sombrio ou em locações na região."
            }
          />
          {isCorporativo && (
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
          )}
        </div>

        <div
          className={cn(
            "mt-14 grid gap-6",
            isCorporativo
              ? "md:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {categoriasDoModo.map((cat, i) => (
            <Reveal key={cat.key} delay={(i % 4) * 0.08}>
              <article
                className={cn(
                  "group flex h-full flex-col rounded-sm border transition-colors",
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
                      "relative w-full overflow-hidden",
                      isCorporativo ? "aspect-[16/10]" : "aspect-[4/3]",
                      theme.stoneBg
                    )}
                  >
                    <Image
                      src={cat.imagem}
                      alt={`Fotografia de ${cat.nome}`}
                      fill
                      sizes={
                        isCorporativo
                          ? "(min-width: 768px) 46vw, 100vw"
                          : "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                      }
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {cat.tag && (
                      <span
                        className={cn(
                          "absolute left-3 top-3 rounded-sm px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm",
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

        {isCorporativo ? (
          <Reveal delay={0.12}>
            <CommercialGuide />
          </Reveal>
        ) : (
          <Reveal delay={0.16}>
            <div
              className={cn(
                "mt-10 flex flex-col items-start justify-between gap-4 rounded-sm border px-6 py-4 sm:flex-row sm:items-center",
                theme.borderLight,
                theme.cardBgMuted
              )}
            >
              <p
                className={cn(
                  "text-xs font-light leading-relaxed",
                  theme.mutedText
                )}
              >
                <strong className={cn("font-medium", theme.inkText)}>
                  Casamentos e recém-nascidos:
                </strong>{" "}
                Atendidos sob consulta prévia de agenda e alinhamento de proposta
                pelo WhatsApp.
              </p>
              <a
                href="#contato"
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-70",
                  theme.inkText
                )}
              >
                Consultar disponibilidade
                <ArrowRight className="h-3 w-3" strokeWidth={1.75} />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
