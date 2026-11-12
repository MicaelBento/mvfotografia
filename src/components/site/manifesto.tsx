"use client"

import { ArrowUpRight, Building2, Check, MapPin } from "lucide-react"
import {
  estudioLocalizacao,
  stats,
  statsCorporativo,
} from "@/lib/site-data"
import { irParaContato } from "@/lib/site-store"
import { type SiteModo } from "@/lib/site-modes"
import { Reveal } from "./reveal"

interface ModalidadeEstudio {
  id: string
  etiqueta: string
  titulo: string
  descricao: string
  itens: string[]
  icone: "estudio" | "in-loco"
}

const modalidadesCorporativo: ModalidadeEstudio[] = [
  {
    id: "estudio-proprio",
    etiqueta: `Estúdio Próprio · ${estudioLocalizacao.complemento}`,
    titulo: "Estrutura completa e calibrada em Sombrio",
    descricao:
      "Espaço exclusivo no Centro (3º andar, acima da CDL) equipado com controle total de iluminação, fundos neutros e texturizados, bancada still para produtos e ambiente climatizado com privacidade.",
    itens: [
      "Luz contínua e flash com reprodução fiel de cor",
      "Set dedicado para retratos executivos, catálogos e still",
      "Atendimento reservado com hora marcada",
    ],
    icone: "estudio",
  },
  {
    id: "producao-in-loco",
    etiqueta: "Unidade Móvel · Sombrio, Região & Sob Consulta",
    titulo: "Levamos o estúdio completo até a sua empresa",
    descricao:
      "Quando o projeto pede o ambiente real do negócio ou agilidade para o time, montamos nosso set portátil em clínicas, escritórios, lojas e indústrias sem interromper a operação.",
    itens: [
      "Iluminação portátil com o mesmo padrão de estúdio",
      "Retratos padronizados de sócios e equipes no local",
      "Cobertura documental de espaços, rotinas e atendimento",
    ],
    icone: "in-loco",
  },
]

interface ManifestoProps {
  modo: SiteModo
}

export function Manifesto({ modo }: ManifestoProps) {
  if (modo === "pessoal") {
    return (
      <section id="manifesto" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <Reveal className="text-center">
            <p className="label-mini text-neutral-500">Nosso compromisso</p>
            <blockquote className="font-serif-site mx-auto mt-6 max-w-4xl text-3xl font-medium leading-snug text-neutral-900 md:text-5xl md:leading-tight">
              Não buscamos a pose perfeita. Buscamos o momento em que você{" "}
              <em className="italic text-neutral-400">
                esquece que a câmera existe.
              </em>
            </blockquote>
            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-neutral-600">
              Cada história tem um ritmo próprio, e a nossa missão é escutá-lo
              antes de apertar o obturador. Do nosso estúdio próprio no Centro
              de Sombrio (3º andar, Sala 302) às locações na região e sob
              consulta, construímos memórias que serão revisitadas — e sentidas —
              por gerações.
            </p>
          </Reveal>

          <div className="mt-20 grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.rotulo}
                delay={i * 0.1}
                className="text-center md:border-l md:border-neutral-200 md:first:border-l-0"
              >
                <p className="font-serif-site text-4xl font-medium text-neutral-900 sm:text-5xl lg:text-6xl">
                  {s.valor}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                  {s.rotulo}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="manifesto"
      className="relative overflow-hidden border-y border-white/8 bg-[#0E1012] py-20 text-[#F6F5F0] md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(214,151,95,0.08),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Síntese de abertura */}
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6975F]">
              O Estúdio · Estrutura &amp; Mobilidade B2B
            </p>
            <h2 className="mt-3 text-3xl font-light leading-[1.1] tracking-[-0.025em] text-[#F6F5F0] md:text-4xl lg:text-[2.5rem]">
              Toda a estrutura necessária em estúdio,{" "}
              <span className="font-semibold text-[#D6975F]">
                ou levamos o set até você.
              </span>
            </h2>
          </div>

          <p className="text-sm font-light leading-relaxed text-[#A8ABB0] md:text-[15px] lg:col-span-5">
            Direção técnica e estética de Micael &amp; Vanusa para garantir a
            mesma consistência visual tanto no nosso espaço no Centro de Sombrio
            quanto em produções realizadas na sua empresa.
          </p>
        </Reveal>

        {/* Síntese comparativa: Estúdio Próprio vs. Atendimento In Loco */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {modalidadesCorporativo.map((mod, idx) => {
            const Icone = mod.icone === "estudio" ? Building2 : MapPin
            return (
              <Reveal
                key={mod.id}
                delay={idx * 0.08}
                className="flex h-full flex-col justify-between rounded-[4px] border border-white/10 bg-[#15171A]/90 p-6 transition-colors hover:border-[#D6975F]/40 md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D6975F]">
                      {mod.etiqueta}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] border border-[#D6975F]/25 bg-[#D6975F]/10 text-[#D6975F]">
                      <Icone className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-medium tracking-[-0.015em] text-[#F6F5F0] md:text-2xl">
                    {mod.titulo}
                  </h3>

                  <p className="mt-3 text-sm font-light leading-relaxed text-[#A8ABB0]">
                    {mod.descricao}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/8 pt-5">
                    {mod.itens.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs font-light leading-relaxed text-[#D4D1C7] md:text-[13px]"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D6975F]"
                          strokeWidth={2}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/8 pt-4">
                  {mod.icone === "estudio" ? (
                    <>
                      <span className="text-[11px] font-light text-[#8D9096]">
                        {estudioLocalizacao.enderecoLinha} ·{" "}
                        {estudioLocalizacao.referencia}
                      </span>
                      <a
                        href="#mapa-estudio"
                        className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D6975F] transition-colors hover:text-[#F6F5F0]"
                      >
                        Ver no mapa
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </a>
                    </>
                  ) : (
                    <>
                      <span className="text-[11px] font-light text-[#8D9096]">
                        Atendimento sem deslocar sua equipe
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          irParaContato({
                            servico: "Fotografia corporativa & retratos",
                            momento: "Produção In Loco",
                            formato: "Set portátil na sede da empresa",
                            extras: [],
                          })
                        }
                        className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D6975F] transition-colors hover:text-[#F6F5F0]"
                      >
                        Solicitar in loco
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </button>
                    </>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Faixa de especificações B2B */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
          {statsCorporativo.map((s, i) => (
            <Reveal
              key={s.rotulo}
              delay={i * 0.06}
              className="md:border-l md:border-white/10 md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <p className="text-2xl font-medium tracking-[-0.02em] text-[#F6F5F0] md:text-3xl">
                {s.valor}
              </p>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-[#9A9D9E]">
                {s.rotulo}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
