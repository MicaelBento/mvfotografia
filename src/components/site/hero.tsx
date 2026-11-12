"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { LogoEmblema } from "./logo-emblema"

const fadeUpCorporativo = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const fadeUpPessoal = {
  hidden: { opacity: 0, y: 36 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: d, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
}

const heroCorporativoConfig = {
  titulo: "Imagem com precisão.",
  destaque: "Posicionamento e conversão.",
  descricao:
    "No nosso estúdio próprio equipado em Sombrio ou in loco na sua empresa, produzimos retratos executivos, padronização de equipes, catálogos de produtos e campanhas com rigor técnico e entrega ágil.",
  ctaPrimario: "Explorar formatos B2B",
  ctaSecundario: "Ver portfólio comercial",
  specs: [
    {
      titulo: "Estúdio Equipado ou In Loco",
      detalhe: "Sala 302 (Centro de Sombrio) ou estrutura móvel até sua sede",
    },
    {
      titulo: "Licença & Fidelidade",
      detalhe: "Reprodução exata de cores e recortes 9:16 / 4:5 para anúncios",
    },
    {
      titulo: "Entrega Expressa",
      detalhe: "Prévia em até 48h e planos recorrentes para empresas",
    },
  ],
  imagem: "/img/corporativo-1.jpg",
  imagemAlt: "Retrato corporativo autoral em estúdio com iluminação suave",
  imagemSecundaria: {
    src: "/img/produtos-1.jpg",
    alt: "Fotografia comercial still life de produto sobre pedra e linho",
  },
  legendaEsq: "Corporativo & Marketing · Estúdio & In Loco",
  legendaDir: "Produção B2B",
}

interface HeroProps {
  modo: SiteModo
}

export function Hero({ modo }: HeroProps) {
  const theme = modoThemes[modo]

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  if (modo === "pessoal") {
    return (
      <section
        id="inicio"
        className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-black"
      >
        {/* Imagem de fundo com efeito Ken Burns */}
        <div className="absolute inset-0">
          <div className="animate-kenburns relative h-full w-full">
            <Image
              src="/img/hero-2.jpg"
              alt="Casal em silhueta ao entardecer"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-28 pt-32 text-center">
          <motion.span
            variants={fadeUpPessoal}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="mb-8 block"
          >
            <LogoEmblema
              tamanho="lg"
              alt="Símbolo do estúdio Memória Viva Fotografia"
            />
          </motion.span>

          <motion.p
            variants={fadeUpPessoal}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="label-mini text-shadow-hero text-neutral-300"
          >
            Micael &amp; Vanusa · Memória Viva Fotografia
          </motion.p>

          <motion.h1
            variants={fadeUpPessoal}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="text-shadow-hero font-serif-site mt-6 text-5xl font-medium leading-[1.02] text-white md:text-7xl lg:text-8xl"
          >
            O tempo passa.
            <br />
            <em className="italic text-neutral-300">A memória fica.</em>
          </motion.h1>

          <motion.p
            variants={fadeUpPessoal}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="text-shadow-hero mt-8 max-w-2xl text-base font-light leading-relaxed text-neutral-200 md:text-lg"
          >
            Somos Micael &amp; Vanusa: um casal de fotógrafos que transforma
            instantes reais em memória viva — histórias de casais, gestantes,
            famílias e celebrações em nosso estúdio próprio em Sombrio, região e
            sob consulta.
          </motion.p>

          <motion.div
            variants={fadeUpPessoal}
            initial="hidden"
            animate="visible"
            custom={0.75}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => scrollTo("portfolio")}
              className="rounded-full bg-white px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-black transition-all hover:bg-neutral-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] focus-visible:!outline-white"
            >
              Ver portfólio
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contato")}
              className="rounded-full border border-white/40 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition-all hover:border-white hover:bg-white/10 focus-visible:!outline-white"
            >
              Agendar conversa
            </button>
          </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.button
          type="button"
          onClick={() => scrollTo("manifesto")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white focus-visible:!outline-white"
          aria-label="Rolar para o conteúdo"
        >
          <span className="animate-floaty flex flex-col items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400">
              Explore
            </span>
            <ChevronDown className="h-5 w-5" strokeWidth={1.25} />
          </span>
        </motion.button>

        {/* Texto lateral decorativo */}
        <span className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 text-[9px] uppercase tracking-[0.5em] text-neutral-500 xl:block">
          Sombrio · Santa Catarina · Brasil
        </span>
      </section>
    )
  }

  const cfg = heroCorporativoConfig

  return (
    <section
      id="inicio"
      className={cn(
        "relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36",
        theme.lightBg
      )}
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        {/* Coluna editorial esquerda */}
        <div className="lg:col-span-7">
          <motion.h1
            variants={fadeUpCorporativo}
            initial="hidden"
            animate="visible"
            custom={0.14}
            className={cn(
              "text-4xl font-medium leading-[1.03] tracking-[-0.03em] sm:text-5xl lg:text-[4.25rem]",
              theme.inkText
            )}
          >
            {cfg.titulo}
            <span className={cn("mt-1 block", theme.serifAccentClass)}>
              {cfg.destaque}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpCorporativo}
            initial="hidden"
            animate="visible"
            custom={0.24}
            className={cn(
              "mt-7 max-w-xl text-base font-light leading-relaxed md:text-lg",
              theme.mutedText
            )}
          >
            {cfg.descricao}
          </motion.p>

          <motion.div
            variants={fadeUpCorporativo}
            initial="hidden"
            animate="visible"
            custom={0.34}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <button
              type="button"
              onClick={() => scrollTo("experiencias")}
              className={cn(
                "inline-flex items-center gap-2.5 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors",
                theme.controlRadius,
                theme.primaryBtn
              )}
            >
              {cfg.ctaPrimario}
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("portfolio")}
              className={cn(
                "border px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors",
                theme.controlRadius,
                theme.secondaryBtn
              )}
            >
              {cfg.ctaSecundario}
            </button>
          </motion.div>

          {/* Especificações */}
          <motion.dl
            variants={fadeUpCorporativo}
            initial="hidden"
            animate="visible"
            custom={0.44}
            className={cn(
              "mt-12 grid grid-cols-1 gap-6 border-t pt-7 sm:grid-cols-3",
              theme.borderLight
            )}
          >
            {cfg.specs.map((spec) => (
              <div key={spec.titulo}>
                <dt
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.16em]",
                    theme.inkText
                  )}
                >
                  {spec.titulo}
                </dt>
                <dd
                  className={cn(
                    "mt-1 text-xs font-light leading-relaxed",
                    theme.mutedText
                  )}
                >
                  {spec.detalhe}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Coluna visual direita */}
        <motion.div
          variants={fadeUpCorporativo}
          initial="hidden"
          animate="visible"
          custom={0.22}
          className="lg:col-span-5"
        >
          <figure
            className={cn(
              "relative border p-3.5",
              theme.borderLight,
              theme.cardRadius,
              theme.stoneBg
            )}
          >
            <div
              className={cn(
                "relative aspect-[4/5] w-full overflow-hidden bg-[#DCD9D0]",
                theme.frameRadius
              )}
            >
              <Image
                src={cfg.imagem}
                alt={cfg.imagemAlt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
              {cfg.imagemSecundaria && (
                <div className="absolute bottom-3 right-3 hidden w-28 overflow-hidden rounded-sm border border-[#F6F5F0]/80 bg-[#F6F5F0] p-1 shadow-lg sm:block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#ECEAE3]">
                    <Image
                      src={cfg.imagemSecundaria.src}
                      alt={cfg.imagemSecundaria.alt}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
            <figcaption
              className={cn(
                "flex items-center justify-between gap-4 pt-3.5 text-[10px] font-medium uppercase tracking-[0.18em]",
                theme.mutedText
              )}
            >
              <span>{cfg.legendaEsq}</span>
              <span>{cfg.legendaDir}</span>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}
