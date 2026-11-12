"use client"

import { useMemo, useState } from "react"
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
  getExperienciasPorModo,
  WHATSAPP_NUMERO,
  type ExperienciaMomento,
  type ExperienciaId,
} from "@/lib/site-data"
import { irParaContato, irParaGaleria } from "@/lib/site-store"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

function formatoPadraoDe(momento: ExperienciaMomento): string {
  return (
    momento.formatos.find((f) => f.destaque)?.id ??
    momento.formatos[0].id
  )
}

interface ExperiencesProps {
  modo: SiteModo
}

export function Experiences({ modo }: ExperiencesProps) {
  const theme = modoThemes[modo]
  const experiencias = useMemo(() => getExperienciasPorModo(modo), [modo])
  const isCorporativo = modo === "corporativo"
  const isPessoal = modo === "pessoal"

  const [momentoAtivo, setMomentoAtivo] = useState<ExperienciaId>(
    () => experiencias[0].id
  )
  const [formatoId, setFormatoId] = useState<string>(() =>
    formatoPadraoDe(experiencias[0])
  )
  const [extrasMarcados, setExtrasMarcados] = useState<string[]>([])

  const atual =
    experiencias.find((e) => e.id === momentoAtivo) ?? experiencias[0]

  const formatoAtivo =
    atual.formatos.find((f) => f.id === formatoId) ??
    atual.formatos.find((f) => f.destaque) ??
    atual.formatos[0]

  function selecionarMomento(id: ExperienciaId) {
    if (id === atual.id) return
    const proximo = experiencias.find((e) => e.id === id) ?? experiencias[0]
    setMomentoAtivo(id)
    setFormatoId(formatoPadraoDe(proximo))
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

  return (
    <section
      id="experiencias"
      className={cn(
        "relative overflow-hidden py-24 md:py-32",
        theme.darkBg
      )}
    >
      {isPessoal && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,186,168,0.07),transparent_58%)]"
        />
      )}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          invertido
          modo={modo}
          titulo={isCorporativo ? "Planos sob medida" : "Formatos pensados"}
          destaque={isCorporativo ? "para sua marca" : "para o seu momento"}
          descricao={
            isCorporativo
              ? "Selecione a categoria para explorar formatos exemplificativos. Sem tabelas rígidas: adaptamos duração, entregas e logística para a sua demanda."
              : "Escolha o momento da sua vida para explorar propostas exemplificativas — ajustamos ritmo, cenário e impressões ao que faz sentido para você."
          }
        />

        {/* Passo 1: Seletor por categoria */}
        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Escolher tipo de ensaio ou projeto"
            className="mt-10 flex flex-wrap items-center gap-2"
          >
            {experiencias.map((exp) => {
              const ativo = exp.id === atual.id
              return (
                <button
                  key={exp.id}
                  id={`tab-${exp.id}`}
                  type="button"
                  role="tab"
                  aria-selected={ativo}
                  aria-controls={`painel-${exp.id}`}
                  onClick={() => selecionarMomento(exp.id)}
                  className={cn(
                    "border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors focus-visible:!outline-[#F6F5F0]",
                    theme.controlRadius,
                    ativo
                      ? isPessoal
                        ? "border-[#F4DDD1] bg-[#F4DDD1] text-[#2C211D]"
                        : "border-[#F6F5F0] bg-[#F6F5F0] text-[#141413]"
                      : cn(
                          "border-[#FAF4EC]/20 hover:border-[#FAF4EC]/55",
                          theme.darkMutedText,
                          isPessoal
                            ? "hover:text-[#FAF4EC]"
                            : "hover:text-[#F6F5F0]",
                          theme.darkCardBg
                        )
                  )}
                >
                  {exp.nomeCurto}
                </button>
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
            {/* Contexto + atalho ao portfólio */}
            <div
              className={cn(
                "flex flex-col gap-3 border-t pt-6 md:flex-row md:items-center md:justify-between",
                theme.darkBorder
              )}
            >
              <p
                className={cn(
                  "max-w-2xl text-sm font-light leading-relaxed md:text-base",
                  theme.darkBodyText
                )}
              >
                {atual.descricaoMomento}
              </p>
              {atual.categoriaGaleria ? (
                <button
                  type="button"
                  onClick={() => irParaGaleria(atual.categoriaGaleria!)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors focus-visible:!outline-[#F6F5F0]",
                    isPessoal
                      ? "text-[#E3BAA8] hover:text-[#FAF4EC]"
                      : "text-[#F6F5F0]/80 hover:text-[#F6F5F0]"
                  )}
                >
                  Ver portfólio de {atual.nomeCurto}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              ) : (
                <p
                  className={cn(
                    "shrink-0 text-[11px] font-medium uppercase tracking-[0.18em]",
                    theme.darkMutedText
                  )}
                >
                  Cases enviados na conversa
                </p>
              )}
            </div>

            {/* Destaque visual explicativo para categorias comerciais */}
            {atual.grupo === "comercial" && (
              <div
                className={cn(
                  "mt-6 flex flex-col gap-4 rounded-sm border border-[#F6F5F0]/15 p-4 sm:flex-row sm:items-center sm:justify-between",
                  theme.darkCardBg
                )}
              >
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

            {/* Passo 2: 2 Formatos */}
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
                      "group relative flex h-full flex-col border p-7 text-left transition-colors duration-200 md:p-9 focus-visible:!outline-[#F6F5F0]",
                      theme.cardRadius,
                      selecionado
                        ? cn(
                            isPessoal ? "border-[#E3BAA8]" : "border-[#F6F5F0]",
                            theme.cardBg,
                            theme.inkText
                          )
                        : cn(
                            theme.darkBorder,
                            theme.darkInkText,
                            isPessoal
                              ? "hover:border-[#E3BAA8]/55"
                              : "hover:border-[#F6F5F0]/45",
                            theme.darkCardBg
                          )
                    )}
                  >
                    {formato.destaque && (
                      <span
                        className={cn(
                          "absolute -top-3 left-7 inline-flex items-center gap-1.5 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em]",
                          theme.controlRadius,
                          selecionado
                            ? isPessoal
                              ? "bg-[#8E5947] text-[#FAF4EC]"
                              : cn(theme.darkBg, "text-[#F6F5F0]")
                            : cn(
                                "border",
                                theme.darkBorder,
                                theme.darkBg,
                                isPessoal ? "text-[#E3BAA8]" : "text-[#F6F5F0]"
                              )
                        )}
                      >
                        <Sparkles className="h-3 w-3" strokeWidth={1.5} />
                        Mais escolhido
                      </span>
                    )}

                    <h3
                      className={cn(
                        "text-2xl font-medium tracking-[-0.02em] md:text-3xl",
                        isPessoal && "font-serif-site text-3xl md:text-4xl"
                      )}
                    >
                      {formato.nome}
                    </h3>

                    <p
                      className={cn(
                        "mt-2.5 border-b pb-5 text-sm font-light leading-relaxed",
                        selecionado
                          ? cn(theme.borderLight, theme.mutedText)
                          : cn(theme.darkBorder, theme.darkMutedText)
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
                              selecionado
                                ? isPessoal
                                  ? theme.accentText
                                  : theme.inkText
                                : isPessoal
                                  ? theme.darkAccentText
                                  : "text-[#F6F5F0]"
                            )}
                            strokeWidth={2}
                          />
                          <span
                            className={cn(
                              "font-light",
                              selecionado ? theme.inkText : theme.darkBodyText
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
                          ? cn(theme.borderLight, theme.inkText)
                          : cn(
                              theme.darkBorder,
                              theme.darkMutedText,
                              isPessoal
                                ? "group-hover:text-[#FAF4EC]"
                                : "group-hover:text-[#F6F5F0]"
                            )
                      )}
                    >
                      <span>
                        {selecionado
                          ? "Formato selecionado como base"
                          : "Selecionar formato"}
                      </span>
                      <span
                        className={cn(
                          "flex h-5 w-5 items-center justify-center border transition-colors",
                          theme.controlRadius,
                          selecionado
                            ? isPessoal
                              ? "border-transparent bg-[#8E5947] text-[#FAF4EC]"
                              : cn(theme.darkBg, "border-transparent text-[#F6F5F0]")
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

            {/* Passo 3: Personalização + Ações */}
            <div
              className={cn(
                "mt-6 border p-6 md:p-8",
                theme.cardRadius,
                theme.darkBorder,
                theme.darkCardBg
              )}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <p className={cn("label-mini", theme.darkAccentText)}>
                    Personalização opcional
                  </p>
                  <p
                    className={cn(
                      "mt-1.5 text-sm font-light",
                      theme.darkMutedText
                    )}
                  >
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
                          "inline-flex items-center gap-2 border px-3.5 py-2 text-xs transition-colors focus-visible:!outline-[#F6F5F0]",
                          theme.controlRadius,
                          marcado
                            ? isPessoal
                              ? "border-[#F4DDD1] bg-[#F4DDD1] font-medium text-[#2C211D]"
                              : "border-[#F6F5F0] bg-[#F6F5F0] font-medium text-[#141413]"
                            : cn(
                                "bg-black/20 font-light",
                                theme.darkBorder,
                                theme.darkBodyText,
                                isPessoal
                                  ? "hover:border-[#E3BAA8]/60 hover:text-[#FAF4EC]"
                                  : "hover:border-[#F6F5F0]/55 hover:text-[#F6F5F0]"
                              )
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

              <div
                className={cn(
                  "mt-6 flex flex-col gap-5 border-t pt-6 lg:flex-row lg:items-center lg:justify-between",
                  theme.darkBorder
                )}
              >
                <div>
                  <p
                    className={cn(
                      "text-[10px] font-medium uppercase tracking-[0.2em]",
                      theme.darkMutedText
                    )}
                  >
                    Resumo da seleção
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-sm font-light",
                      theme.darkBodyText
                    )}
                  >
                    <span className={cn("font-medium", theme.darkInkText)}>
                      {atual.nomeCurto}
                    </span>{" "}
                    · {formatoAtivo.nome}
                    {extrasMarcados.length > 0 && (
                      <span className={theme.darkMutedText}>
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
                    className={cn(
                      "inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:!outline-[#F6F5F0]",
                      theme.controlRadius,
                      theme.darkPrimaryBtn
                    )}
                  >
                    Levar para mensagem
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center gap-2.5 border px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:!outline-[#F6F5F0]",
                      theme.controlRadius,
                      theme.darkSecondaryBtn
                    )}
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                    WhatsApp direto
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Sob consulta específico de cada frente */}
        <Reveal delay={0.14}>
          <div
            className={cn(
              "mt-8 flex flex-col items-start justify-between gap-5 border px-6 py-5 md:flex-row md:items-center md:px-8",
              theme.cardRadius,
              theme.darkBorder,
              theme.darkCardBg
            )}
          >
            <div className="space-y-1">
              <p className={cn("text-sm font-light", theme.darkBodyText)}>
                <span className={cn("font-medium", theme.darkInkText)}>
                  {isCorporativo
                    ? "Grandes catálogos, produções industriais ou logística fora da região"
                    : "Casamentos, recém-nascidos e locações fora da região"}
                </span>{" "}
                são atendidos mediante consulta personalizada de agenda.
              </p>
              <p className={cn("text-xs font-light", theme.darkMutedText)}>
                Estúdio próprio em Sombrio/SC · Atendimento em toda a região ·{" "}
                {isCorporativo
                  ? "Emissão fiscal e planos recorrentes para empresas."
                  : "Parcelamento em até 6x sem juros."}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                irParaContato({
                  servico: "Outro / projeto sob consulta",
                  momento: "Projeto sob consulta",
                  formato: isCorporativo
                    ? "Escopo comercial personalizado"
                    : "Casamento, recém-nascido ou demanda especial",
                  extras: [],
                })
              }
              className={cn(
                "inline-flex shrink-0 items-center gap-2 border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:!outline-[#F6F5F0]",
                theme.controlRadius,
                theme.darkSecondaryBtn
              )}
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
