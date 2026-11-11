"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { estudioLocalizacao, stats } from "@/lib/site-data"
import { Header } from "@/components/site/header"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"
import { WhatsAppFloat } from "@/components/site/whatsapp-float"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

interface PreviewCardConfig {
  id: "pessoal" | "corporativo"
  href: "/pessoal" | "/corporativo"
  titulo: string
  subtitulo: string
  descricao: string
  imagemPrincipal: {
    src: string
    alt: string
    className?: string
  }
  miniaturas: {
    src: string
    alt: string
    className?: string
  }[]
  tags: string[]
  notaRodape: string
  cta: string
}

const frentes: PreviewCardConfig[] = [
  {
    id: "pessoal",
    href: "/pessoal",
    titulo: "Pessoal",
    subtitulo: "com tempo, leveza e verdade",
    descricao:
      "Sessões reservadas no estúdio climatizado ou ao ar livre na região — conduzidas com sensibilidade para guardar fases reais da vida.",
    imagemPrincipal: {
      src: "/img/casais-4.jpg",
      alt: "Casal sorrindo em ensaio pessoal da Memória Viva Estúdio",
    },
    miniaturas: [
      {
        src: "/img/casais-2.jpg",
        alt: "Ensaio de casal em conexão natural",
      },
      {
        src: "/img/gestantes-3.jpg",
        alt: "Ensaio editorial de gestante em estúdio",
      },
      {
        src: "/img/familias-3.jpg",
        alt: "Ensaio documental de família",
      },
    ],
    tags: ["Casais", "Gestantes", "Famílias", "Aniversários"],
    notaRodape: "Casamentos e recém-nascidos mediante consulta",
    cta: "Entrar na frente Pessoal",
  },
  {
    id: "corporativo",
    href: "/corporativo",
    titulo: "Corporativo & Marketing",
    subtitulo: "autoridade visual e imagens que convertem",
    descricao:
      "Retratos profissionais, padronização de equipes, still de produtos e campanhas publicitárias no estúdio equipado ou in loco na sua empresa.",
    imagemPrincipal: {
      src: "/img/corporativo-1.jpg",
      alt: "Retrato corporativo autoral em estúdio com luz controlada",
      className: "object-top",
    },
    miniaturas: [
      {
        src: "/img/produtos-1.jpg",
        alt: "Still de produto comercial sobre pedra e linho",
      },
      {
        src: "/img/corporativo-2.jpg",
        alt: "Retrato executivo masculino em estúdio minimalista",
        className: "object-top",
      },
      {
        src: "/img/produtos-3.jpg",
        alt: "Fotografia publicitária de cosmético em luz natural",
      },
    ],
    tags: [
      "Retratos Executivos",
      "Equipes & Clínicas",
      "Produtos & E-commerce",
      "Anúncios 9:16 & 4:5",
    ],
    notaRodape: "Produções in loco em Sombrio, região e sob consulta",
    cta: "Entrar em Corporativo & Marketing",
  },
]

export function HomePreview() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F5F0]">
      <Header modo="preview" />

      <main className="flex-1">
        {/* Vitrine inicial de escolha entre Pessoal e Corporativo & Marketing */}
        <section
          id="inicio"
          className="bg-[#F6F5F0] pb-16 pt-24 md:pb-24 md:pt-32"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.04}
                className="max-w-3xl"
              >
                <h1 className="text-3xl font-medium leading-[1.06] tracking-[-0.03em] text-[#141413] sm:text-4xl lg:text-[3.25rem]">
                  Escolha sua experiência{" "}
                  <span className="font-light text-[#57554F]">
                    no estúdio
                  </span>
                </h1>
                <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[#57554F] md:text-base">
                  Micael &amp; Vanusa atuam em duas frentes dedicadas com luz,
                  direção e entrega próprias. Selecione o universo ideal para o
                  que você precisa registrar hoje:
                </p>
              </motion.div>

              <motion.a
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.12}
                href="#contato"
                className="inline-flex w-fit items-center gap-2 rounded-sm border border-[#141413]/15 bg-[#ECEAE3]/70 px-4 py-2.5 text-xs font-light text-[#141413] transition-colors hover:border-[#141413]/40 hover:bg-[#ECEAE3]"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                <span>{estudioLocalizacao.resumoCurto}</span>
              </motion.a>
            </div>

            {/* Grade Split Preview */}
            <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
              {frentes.map((frente, idx) => {
                const isPessoal = frente.id === "pessoal"
                return (
                  <motion.div
                    key={frente.id}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.14 + idx * 0.08}
                  >
                    <Link
                      href={frente.href}
                      className={
                        isPessoal
                          ? "group flex h-full flex-col justify-between rounded-md border border-[#1D1917]/15 bg-[#FAF7F2] p-6 text-[#1D1917] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1D1917]/45 hover:shadow-lg sm:p-8"
                          : "group flex h-full flex-col justify-between rounded-md border border-[#F6F5F0]/15 bg-[#141413] p-6 text-[#F6F5F0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F6F5F0]/45 hover:shadow-xl sm:p-8"
                      }
                    >
                      <div>
                        {/* Título & Subtítulo */}
                        <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
                          {frente.titulo}
                        </h2>
                        <p
                          className={
                            isPessoal
                              ? "font-serif-site mt-1 text-xl italic text-[#665E57] sm:text-2xl"
                              : "mt-1.5 text-base font-light text-[#B8B5AC] sm:text-lg"
                          }
                        >
                          {frente.subtitulo}
                        </p>

                        {/* Mosaico Visual de Preview */}
                        <div className="mt-6 grid grid-cols-12 gap-2.5">
                          <div
                            className={
                              isPessoal
                                ? "relative col-span-8 aspect-[4/3] overflow-hidden rounded-sm border border-[#1D1917]/10 bg-[#EFE7DA]"
                                : "relative col-span-8 aspect-[4/3] overflow-hidden rounded-sm border border-[#F6F5F0]/12 bg-[#1C1C1A]"
                            }
                          >
                            <Image
                              src={frente.imagemPrincipal.src}
                              alt={frente.imagemPrincipal.alt}
                              fill
                              loading="eager"
                              sizes="(min-width: 1024px) 30vw, 65vw"
                              className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${frente.imagemPrincipal.className ?? ""}`}
                            />
                          </div>

                          <div className="col-span-4 grid grid-rows-3 gap-2">
                            {frente.miniaturas.map((mini) => (
                              <div
                                key={mini.src}
                                className={
                                  isPessoal
                                    ? "relative overflow-hidden rounded-sm border border-[#1D1917]/10 bg-[#EFE7DA]"
                                    : "relative overflow-hidden rounded-sm border border-[#F6F5F0]/12 bg-[#1C1C1A]"
                                }
                              >
                                <Image
                                  src={mini.src}
                                  alt={mini.alt}
                                  fill
                                  sizes="(min-width: 1024px) 12vw, 30vw"
                                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.05] ${mini.className ?? ""}`}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <p
                          className={
                            isPessoal
                              ? "mt-5 text-sm font-light leading-relaxed text-[#665E57]"
                              : "mt-5 text-sm font-light leading-relaxed text-[#B8B5AC]"
                          }
                        >
                          {frente.descricao}
                        </p>

                        {/* Chips das categorias */}
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {frente.tags.map((tag) => (
                            <span
                              key={tag}
                              className={
                                isPessoal
                                  ? "rounded-sm border border-[#1D1917]/12 bg-[#F2ECE2]/80 px-2.5 py-1 text-[11px] font-normal text-[#1D1917]"
                                  : "rounded-sm border border-[#F6F5F0]/15 bg-[#1C1C1A] px-2.5 py-1 text-[11px] font-light text-[#D4D1C7]"
                              }
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Rodapé + Botão */}
                      <div className="mt-7 space-y-4">
                        <p
                          className={
                            isPessoal
                              ? "text-xs font-light text-[#665E57]"
                              : "text-xs font-light text-[#9E9B93]"
                          }
                        >
                          {frente.notaRodape}
                        </p>

                        <div
                          className={
                            isPessoal
                              ? "flex items-center justify-between rounded-sm bg-[#1D1917] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FAF7F2] transition-colors group-hover:bg-[#342D29]"
                              : "flex items-center justify-between rounded-sm bg-[#F6F5F0] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#141413] transition-colors group-hover:bg-[#ECEAE3]"
                          }
                        >
                          <span>{frente.cta}</span>
                          <ArrowRight
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            strokeWidth={1.75}
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Faixa de credenciais & localização rápida */}
        <section
          id="localizacao"
          className="border-y border-[#141413]/10 bg-[#ECEAE3] py-14 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.rotulo}
                  className="md:border-l md:border-[#141413]/12 md:pl-6 md:first:border-l-0 md:first:pl-0"
                >
                  <p className="text-2xl font-medium tracking-[-0.02em] text-[#141413] md:text-3xl">
                    {s.valor}
                  </p>
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-[#57554F]">
                    {s.rotulo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato direto + mapa interativo */}
        <Contact modo="preview" />
      </main>

      <Footer modo="preview" />
      <WhatsAppFloat />
    </div>
  )
}

