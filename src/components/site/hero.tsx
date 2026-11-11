"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

interface HeroConfig {
  eyebrow: string
  titulo: string
  destaque: string
  descricao: string
  ctaPrimario: string
  ctaSecundario: string
  specs: { titulo: string; detalhe: string }[]
  imagem: string
  imagemAlt: string
  imagemSecundaria?: { src: string; alt: string }
  legendaEsq: string
  legendaDir: string
}

const heroConfig: Record<SiteModo, HeroConfig> = {
  pessoal: {
    eyebrow: "Frente Pessoal · Sombrio, Região & Sob Consulta",
    titulo: "Histórias reais,",
    destaque: "com tempo e verdade.",
    descricao:
      "No conforto reservado do nosso estúdio próprio no Centro de Sombrio ou em locações na região, Micael & Vanusa conduzem ensaios de casal, gestante, família e celebrações com direção gentil e luz atemporal.",
    ctaPrimario: "Explorar ensaios",
    ctaSecundario: "Ver portfólio afetivo",
    specs: [
      {
        titulo: "Estúdio Climatizado",
        detalhe: "3º andar, Sala 302 · Privacidade acima da CDL de Sombrio/SC",
      },
      {
        titulo: "Direção Acolhedora",
        detalhe: "Sem poses forçadas, respeitando o ritmo de casais e crianças",
      },
      {
        titulo: "Prévia em 48h",
        detalhe: "Galeria online privada e opção de impressões Fine Art",
      },
    ],
    imagem: "/img/casais-4.jpg",
    imagemAlt: "Casal sorrindo em ensaio fotográfico autoral",
    legendaEsq: "Pessoal & Afeto · Casais, Gestantes, Famílias",
    legendaDir: "Micael & Vanusa",
  },
  corporativo: {
    eyebrow: "Frente Comercial · Corporativo, Produtos & Marketing",
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
  },
}

interface HeroProps {
  modo: SiteModo
}

export function Hero({ modo }: HeroProps) {
  const theme = modoThemes[modo]
  const cfg = heroConfig[modo]

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="inicio"
      className={cn("pb-20 pt-28 md:pb-28 md:pt-36", theme.lightBg)}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        {/* Coluna editorial esquerda */}
        <div className="lg:col-span-7">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.02}
            className="mb-4"
          >
            <Link
              href="/"
              className={cn(
                "inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-75",
                theme.mutedText
              )}
            >
              <ArrowLeft className="h-3 w-3" strokeWidth={1.75} />
              Voltar à escolha inicial
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.06}
            className={cn("label-mini", theme.mutedText)}
          >
            {cfg.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.14}
            className={cn(
              "mt-5 text-4xl font-medium leading-[1.03] tracking-[-0.03em] sm:text-5xl lg:text-[4.25rem]",
              theme.inkText
            )}
          >
            {cfg.titulo}
            <span className={cn("mt-1 block", theme.serifAccentClass)}>
              {cfg.destaque}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
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
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.34}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <button
              type="button"
              onClick={() => scrollTo("experiencias")}
              className={cn(
                "inline-flex items-center gap-2.5 rounded-sm px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors",
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
                "rounded-sm border px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors",
                theme.secondaryBtn
              )}
            >
              {cfg.ctaSecundario}
            </button>
          </motion.div>

          {/* Especificações */}
          <motion.dl
            variants={fadeUp}
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
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.22}
          className="lg:col-span-5"
        >
          <figure
            className={cn(
              "relative rounded-sm border p-3",
              theme.borderLight,
              theme.stoneBg
            )}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCD9D0]">
              <Image
                src={cfg.imagem}
                alt={cfg.imagemAlt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={cn(
                  "object-cover",
                  modo === "corporativo" && "object-top"
                )}
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
                "flex items-center justify-between gap-4 pt-3 text-[10px] font-medium uppercase tracking-[0.18em]",
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
