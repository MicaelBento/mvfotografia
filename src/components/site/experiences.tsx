"use client"

import { useState } from "react"
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
  type CategoriaKey,
} from "@/lib/site-data"
import { irParaContato, irParaGaleria } from "@/lib/site-store"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

function formatoPadraoDe(categoria: CategoriaKey): string {
  const momento = experienciasPorMomento.find((e) => e.categoria === categoria)
  return (
    momento?.formatos.find((f) => f.destaque)?.id ??
    momento?.formatos[0].id ??
    ""
  )
}

export function Experiences() {
  const [momentoAtivo, setMomentoAtivo] = useState<CategoriaKey>("casais")
  const [formatoId, setFormatoId] = useState<string>(() =>
    formatoPadraoDe("casais")
  )
  const [extrasMarcados, setExtrasMarcados] = useState<string[]>([])

  const atual =
    experienciasPorMomento.find((e) => e.categoria === momentoAtivo) ??
    experienciasPorMomento[0]

  const formatoAtivo =
    atual.formatos.find((f) => f.id === formatoId) ?? atual.formatos[0]

  function selecionarMomento(categoria: CategoriaKey) {
    if (categoria === momentoAtivo) return
    setMomentoAtivo(categoria)
    setFormatoId(formatoPadraoDe(categoria))
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
    `Olá, Micael e Vanusa! Vim pelo site e tenho interesse em ${atual.servicoContato.toLowerCase()}.`,
    `Formato de referência: ${formatoAtivo.nome} (${formatoAtivo.ritmo}).`,
    extrasMarcados.length > 0
      ? `Também gostaria de conversar sobre: ${extrasMarcados.join(", ")}.`
      : null,
  ]
    .filter(Boolean)
    .join(" ")

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
    textoWhatsapp
  )}`

  return (
    <section id="experiencias" className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          invertido
          label="Experiências"
          titulo="Cada história pede"
          destaque="um ritmo próprio"
          descricao="Escolha o momento que você deseja viver para explorar exemplos de formatos. Nada aqui é engessado — adaptamos cada proposta à sua história."
        />

        {/* Passo 1: Seletor de momento */}
        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Escolher momento para ver exemplos de formatos"
            className="mt-12 flex flex-wrap items-center justify-center gap-2.5"
          >
            {experienciasPorMomento.map((exp) => {
              const ativo = exp.categoria === atual.categoria
              return (
                <button
                  key={exp.categoria}
                  id={`tab-${exp.categoria}`}
                  type="button"
                  role="tab"
                  aria-selected={ativo}
                  aria-controls={`painel-${exp.categoria}`}
                  onClick={() => selecionarMomento(exp.categoria)}
                  className={cn(
                    "rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all focus-visible:!outline-white",
                    ativo
                      ? "border-white bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.16)]"
                      : "border-white/25 text-neutral-300 hover:border-white hover:text-white"
                  )}
                >
                  {exp.nomeCurto}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Painel do momento selecionado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={atual.categoria}
            id={`painel-${atual.categoria}`}
            role="tabpanel"
            aria-labelledby={`tab-${atual.categoria}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-10"
          >
            {/* Contexto do momento + atalho ao portfólio */}
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
              <p className="text-sm font-light leading-relaxed text-neutral-300 md:text-base">
                {atual.descricaoMomento}
              </p>
              <button
                type="button"
                onClick={() => irParaGaleria(atual.categoria)}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400 transition-colors hover:text-white focus-visible:!outline-white"
              >
                Ver fotos de {atual.nomeCurto} no portfólio
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Passo 2: 2 Formatos exemplificativos */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {atual.formatos.map((formato) => {
                const selecionado = formato.id === formatoAtivo.id
                return (
                  <button
                    key={formato.id}
                    type="button"
                    aria-pressed={selecionado}
                    onClick={() => setFormatoId(formato.id)}
                    className={cn(
                      "group relative flex h-full flex-col rounded-2xl border p-8 text-left transition-all duration-300 md:p-10 focus-visible:!outline-white",
                      selecionado
                        ? "border-white bg-white text-black shadow-[0_20px_60px_rgba(255,255,255,0.08)]"
                        : "border-white/15 bg-neutral-950 text-white hover:border-white/45"
                    )}
                  >
                    {formato.destaque && (
                      <span
                        className={cn(
                          "absolute -top-3.5 left-8 flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.26em] transition-colors",
                          selecionado
                            ? "bg-black text-white ring-1 ring-black/15"
                            : "bg-neutral-900 text-white ring-1 ring-white/25"
                        )}
                      >
                        <Sparkles className="h-3 w-3" strokeWidth={1.5} />
                        Mais escolhido
                      </span>
                    )}

                    <p
                      className={cn(
                        "label-mini",
                        selecionado ? "text-neutral-500" : "text-neutral-400"
                      )}
                    >
                      {formato.ritmo}
                    </p>

                    <h3 className="font-serif-site mt-3 text-3xl font-medium md:text-4xl">
                      {formato.nome}
                    </h3>

                    <p
                      className={cn(
                        "mt-3 border-b pb-6 text-sm font-light leading-relaxed",
                        selecionado
                          ? "border-neutral-200 text-neutral-600"
                          : "border-white/15 text-neutral-400"
                      )}
                    >
                      {formato.subtitulo}
                    </p>

                    <ul className="mt-6 flex-1 space-y-3.5">
                      {formato.itens.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                        >
                          <Check
                            className={cn(
                              "mt-0.5 h-4 w-4 shrink-0",
                              selecionado ? "text-black" : "text-white"
                            )}
                            strokeWidth={2}
                          />
                          <span
                            className={cn(
                              "font-light",
                              selecionado
                                ? "text-neutral-700"
                                : "text-neutral-300"
                            )}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={cn(
                        "mt-8 flex items-center justify-between border-t pt-5 text-[11px] font-semibold uppercase tracking-[0.24em]",
                        selecionado
                          ? "border-neutral-200 text-black"
                          : "border-white/10 text-neutral-300 group-hover:text-white"
                      )}
                    >
                      <span>
                        {selecionado
                          ? "Formato escolhido como base"
                          : "Escolher este formato"}
                      </span>
                      <span
                        className={cn(
                          "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                          selecionado
                            ? "border-black bg-black text-white"
                            : "border-white/30 text-transparent group-hover:border-white/70"
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
            <div className="mt-8 rounded-2xl border border-white/15 bg-neutral-950 p-6 md:p-8">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="label-mini text-neutral-400">
                    Personalize como preferir (opcional)
                  </p>
                  <p className="mt-2 text-sm font-light text-neutral-300">
                    Marque o que faz sentido para a sua ideia — ajustamos cada
                    detalhe na conversa:
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {atual.extras.map((extra) => {
                    const marcado = extrasMarcados.includes(extra)
                    return (
                      <button
                        key={extra}
                        type="button"
                        aria-pressed={marcado}
                        onClick={() => alternarExtra(extra)}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-light transition-all focus-visible:!outline-white",
                          marcado
                            ? "border-white bg-white font-medium text-black"
                            : "border-white/20 bg-white/[0.03] text-neutral-300 hover:border-white/50 hover:text-white"
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

              <div className="mt-7 flex flex-col gap-5 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500">
                    Seu ponto de partida
                  </p>
                  <p className="mt-1.5 text-sm font-light text-neutral-200">
                    <span className="font-medium text-white">
                      {atual.nomeCurto}
                    </span>{" "}
                    · {formatoAtivo.nome}
                    {extrasMarcados.length > 0 && (
                      <span className="text-neutral-400">
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
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-black transition-all hover:bg-neutral-200 focus-visible:!outline-white"
                  >
                    Montar minha proposta
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-all hover:border-white hover:bg-white/10 focus-visible:!outline-white"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Transparência de processo sem fricção */}
        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm font-light leading-relaxed text-neutral-400">
            Proposta personalizada em até{" "}
            <span className="text-white">24h úteis</span> · Reserva de data com
            sinal de 30% e parcelamento em até{" "}
            <span className="text-white">6x sem juros</span>. Realizamos apenas
            uma história por dia e viajamos para todo o Brasil.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

