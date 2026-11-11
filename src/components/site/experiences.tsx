"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
  Sparkles,
} from "lucide-react"
import {
  experienciasPorMomento,
  WHATSAPP_NUMERO,
  type ExperienciaId,
} from "@/lib/site-data"
import { irParaContato, irParaGaleria } from "@/lib/site-store"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

function formatoPadraoDe(id: ExperienciaId): string {
  const momento = experienciasPorMomento.find((e) => e.id === id)
  return (
    momento?.formatos.find((f) => f.destaque)?.id ??
    momento?.formatos[0].id ??
    ""
  )
}

export function Experiences() {
  const [momentoAtivo, setMomentoAtivo] = useState<ExperienciaId>("casais")
  const [formatoId, setFormatoId] = useState<string>(() =>
    formatoPadraoDe("casais")
  )
  const [extrasMarcados, setExtrasMarcados] = useState<string[]>([])

  const atual =
    experienciasPorMomento.find((e) => e.id === momentoAtivo) ??
    experienciasPorMomento[0]

  const formatoAtivo =
    atual.formatos.find((f) => f.id === formatoId) ?? atual.formatos[0]

  function selecionarMomento(id: ExperienciaId) {
    if (id === momentoAtivo) return
    setMomentoAtivo(id)
    setFormatoId(formatoPadraoDe(id))
    setExtrasMarcados([])
  }

  function alternarExtra(extra: string) {
    setExtrasMarcados((prev) =>
      prev.includes(extra)
        ? prev.filter((item) => item !== extra)
        : [...prev, extra]
    )
  }

  const textoWhatsapp = [
    `Olá, Micael e Vanusa! Vim pelo site e gostaria de conversar sobre ${atual.servicoContato.toLowerCase()}.`,
    `Formato de referência: ${formatoAtivo.nome} (${formatoAtivo.ritmo}).`,
    extrasMarcados.length > 0
      ? `Também gostaria de incluir/conversar sobre: ${extrasMarcados.join(", ")}.`
      : null,
  ]
    .filter(Boolean)
    .join(" ")

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
    textoWhatsapp
  )}`

  const indicePrimeiroComercial = experienciasPorMomento.findIndex(
    (e) => e.grupo === "comercial"
  )

  return (
    <section id="experiencias" className="bg-[#141413] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          invertido
          label="05 · Experiências & Projetos"
          titulo="Do seu momento"
          destaque="à sua marca"
          descricao="Selecione a categoria para explorar formatos exemplificativos. Sem tabelas rígidas: adaptamos duração, entregas e logística para a sua demanda."
        />

        {/* Passo 1: Seletor por categoria pessoal e comercial */}
        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Escolher tipo de ensaio ou projeto comercial"
            className="mt-10 flex flex-wrap items-center gap-2"
          >
            {experienciasPorMomento.map((exp, idx) => {
              const ativo = exp.id === atual.id
              return (
                <div key={exp.id} className="contents">
                  {idx === indicePrimeiroComercial && (
                    <span
                      aria-hidden="true"
                      className="mx-1 hidden h-5 w-px bg-[#F6F5F0]/20 md:inline-block"
                    />
                  )}
                  <button
                    id={`tab-${exp.id}`}
                    type="button"
                    role="tab"
                    aria-selected={ativo}
                    aria-controls={`painel-${exp.id}`}
                    onClick={() => selecionarMomento(exp.id)}
                    className={cn(
                      "rounded-sm border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors focus-visible:!outline-[#F6F5F0]",
                      ativo
                        ? "border-[#F6F5F0] bg-[#F6F5F0] text-[#141413]"
                        : "border-[#F6F5F0]/20 bg-[#1C1C1A] text-[#B8B5AC] hover:border-[#F6F5F0]/60 hover:text-[#F6F5F0]"
                    )}
                  >
                    {exp.nomeCurto}
                  </button>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Painel da categoria selecionada */}
        <AnimatePresence mode="wait">
          <motion.div
            key={atual.id}
            id={`painel-${atual.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${atual.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            {/* Contexto + atalho opcional ao portfólio */}
            <div className="flex flex-col gap-3 border-t border-[#F6F5F0]/12 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl text-sm font-light leading-relaxed text-[#B8B5AC] md:text-base">
                {atual.descricaoMomento}
              </p>
              {atual.categoriaGaleria ? (
                <button
                  type="button"
                  onClick={() => irParaGaleria(atual.categoriaGaleria!)}
                  className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#F6F5F0]/75 transition-colors hover:text-[#F6F5F0] focus-visible:!outline-[#F6F5F0]"
                >
                  Ver portfólio de {atual.nomeCurto}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              ) : (
                <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.18em] text-[#9E9B93]">
                  Cases enviados na conversa
                </p>
              )}
            </div>

            {/* Destaque visual explicativo para categorias comerciais */}
            {atual.grupo === "comercial" && (
              <div className="mt-6 flex flex-col gap-4 rounded-sm border border-[#F6F5F0]/15 bg-[#1C1C1A] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm border border-[#F6F5F0]/20 bg-[#242320]">
                    <Image
                      src={
                        atual.id === "corporativo"
                          ? "/img/corporativo-1.jpg"
                          : "/img/produtos-1.jpg"
                      }
                      alt={atual.nomeCurto}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9E9B93]">
                      {atual.id === "corporativo"
                        ? "Especialistas & Equipes"
                        : "E-commerce & Marcas"}
                    </span>
                    <p className="text-xs font-light text-[#D4D1C7]">
                      {atual.id === "corporativo"
                        ? "Retratos de autoridade para LinkedIn, WhatsApp e site no estúdio ou in loco."
                        : "Still de produto para loja virtual, cardápio e anúncios prontos para tráfego."}
                    </p>
                  </div>
                </div>

                <a
                  href="#guia-comercial"
                  className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#F6F5F0] transition-colors hover:text-[#D4D1C7]"
                >
                  Entenda o que está incluído
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </a>
              </div>
            )}

            {/* Passo 2: 2 Formatos exemplificativos */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {atual.formatos.map((formato) => {
                const selecionado = formato.id === formatoAtivo.id
                return (
                  <button
                    key={formato.id}
                    type="button"
                    aria-pressed={selecionado}
                    onClick={() => setFormatoId(formato.id)}
                    className={cn(
                      "group relative flex h-full flex-col rounded-md border p-7 text-left transition-colors duration-200 md:p-9 focus-visible:!outline-[#F6F5F0]",
                      selecionado
                        ? "border-[#F6F5F0] bg-[#F6F5F0] text-[#141413]"
                        : "border-[#F6F5F0]/15 bg-[#1C1C1A] text-[#F6F5F0] hover:border-[#F6F5F0]/45"
                    )}
                  >
                    {formato.destaque && (
                      <span
                        className={cn(
                          "absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-sm px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em]",
                          selecionado
                            ? "bg-[#141413] text-[#F6F5F0]"
                            : "border border-[#F6F5F0]/25 bg-[#141413] text-[#F6F5F0]"
                        )}
                      >
                        <Sparkles className="h-3 w-3" strokeWidth={1.5} />
                        Mais escolhido
                      </span>
                    )}

                    <p
                      className={cn(
                        "label-mini",
                        selecionado ? "text-[#57554F]" : "text-[#9E9B93]"
                      )}
                    >
                      {formato.ritmo}
                    </p>

                    <h3 className="mt-2.5 text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                      {formato.nome}
                    </h3>

                    <p
                      className={cn(
                        "mt-2.5 border-b pb-5 text-sm font-light leading-relaxed",
                        selecionado
                          ? "border-[#141413]/12 text-[#57554F]"
                          : "border-[#F6F5F0]/12 text-[#B8B5AC]"
                      )}
                    >
                      {formato.subtitulo}
                    </p>

                    <ul className="mt-5 flex-1 space-y-3">
                      {formato.itens.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                        >
                          <Check
                            className={cn(
                              "mt-0.5 h-4 w-4 shrink-0",
                              selecionado ? "text-[#141413]" : "text-[#F6F5F0]"
                            )}
                            strokeWidth={2}
                          />
                          <span
                            className={cn(
                              "font-light",
                              selecionado ? "text-[#2E2E2B]" : "text-[#D4D1C7]"
                            )}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={cn(
                        "mt-7 flex items-center justify-between border-t pt-4 text-[11px] font-semibold uppercase tracking-[0.18em]",
                        selecionado
                          ? "border-[#141413]/12 text-[#141413]"
                          : "border-[#F6F5F0]/10 text-[#B8B5AC] group-hover:text-[#F6F5F0]"
                      )}
                    >
                      <span>
                        {selecionado
                          ? "Formato selecionado como base"
                          : "Selecionar formato"}
                      </span>
                      <span
                        className={cn(
                          "flex h-5 w-5 items-center justify-center rounded-sm border transition-colors",
                          selecionado
                            ? "border-[#141413] bg-[#141413] text-[#F6F5F0]"
                            : "border-[#F6F5F0]/30 text-transparent group-hover:border-[#F6F5F0]/70"
                        )}
                        aria-hidden="true"
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Passo 3: Personalização leve + Barra de ação */}
            <div className="mt-6 rounded-md border border-[#F6F5F0]/15 bg-[#1C1C1A] p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="label-mini text-[#9E9B93]">
                    Personalização opcional
                  </p>
                  <p className="mt-1.5 text-sm font-light text-[#B8B5AC]">
                    Marque recursos adicionais que gostaria de incluir no
                    orçamento:
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {atual.extras.map((extra) => {
                    const marcado = extrasMarcados.includes(extra)
                    return (
                      <button
                        key={extra}
                        type="button"
                        aria-pressed={marcado}
                        onClick={() => alternarExtra(extra)}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-sm border px-3.5 py-2 text-xs transition-colors focus-visible:!outline-[#F6F5F0]",
                          marcado
                            ? "border-[#F6F5F0] bg-[#F6F5F0] font-medium text-[#141413]"
                            : "border-[#F6F5F0]/20 bg-[#141413]/60 font-light text-[#D4D1C7] hover:border-[#F6F5F0]/55 hover:text-[#F6F5F0]"
                        )}
                      >
                        {marcado && (
                          <Check className="h-3.5 w-3.5" strokeWidth={2} />
                        )}
                        {extra}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-5 border-t border-[#F6F5F0]/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9E9B93]">
                    Resumo da seleção
                  </p>
                  <p className="mt-1 text-sm font-light text-[#D4D1C7]">
                    <span className="font-medium text-[#F6F5F0]">
                      {atual.nomeCurto}
                    </span>{" "}
                    · {formatoAtivo.nome}
                    {extrasMarcados.length > 0 && (
                      <span className="text-[#9E9B93]">
                        {" "}
                        + {extrasMarcados.join(", ")}
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() =>
                      irParaContato({
                        servico: atual.servicoContato,
                        momento: atual.nomeCurto,
                        formato: formatoAtivo.nome,
                        extras: extrasMarcados,
                      })
                    }
                    className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#F6F5F0] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#141413] transition-colors hover:bg-[#ECEAE3] focus-visible:!outline-[#F6F5F0]"
                  >
                    Levar para mensagem
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-[#F6F5F0]/30 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F6F5F0] transition-colors hover:border-[#F6F5F0] hover:bg-[#F6F5F0]/10 focus-visible:!outline-[#F6F5F0]"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                    WhatsApp direto
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Projetos especiais, casamentos e recém-nascidos mediante consulta */}
        <Reveal delay={0.14}>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-md border border-[#F6F5F0]/12 bg-[#1C1C1A]/70 px-6 py-5 md:flex-row md:items-center md:px-8">
            <div className="space-y-1">
              <p className="text-sm font-light text-[#D4D1C7]">
                <span className="font-medium text-[#F6F5F0]">
                  Casamentos, recém-nascidos e projetos externos fora da rota
                </span>{" "}
                são atendidos mediante consulta de agenda.
              </p>
              <p className="text-xs font-light text-[#9E9B93]">
                Estúdio próprio em Sombrio/SC · Atendimento em toda a região ·
                Parcelamento em até 6x sem juros e planos para empresas.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                irParaContato({
                  servico: "Outro / projeto sob consulta",
                  momento: "Projeto sob consulta",
                  formato: "Casamento, recém-nascido ou demanda especial",
                  extras: [],
                })
              }
              className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-[#F6F5F0]/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F6F5F0] transition-colors hover:border-[#F6F5F0] hover:bg-[#F6F5F0] hover:text-[#141413] focus-visible:!outline-[#F6F5F0]"
            >
              Consultar projeto especial
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
