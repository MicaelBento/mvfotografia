"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="inicio"
      className="bg-[#F6F5F0] pb-20 pt-28 md:pb-28 md:pt-36"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        {/* Coluna editorial esquerda */}
        <div className="lg:col-span-7">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.05}
            className="label-mini text-[#57554F]"
          >
            Estúdio Próprio · Sombrio, Região &amp; Sob Consulta
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.14}
            className="mt-5 text-4xl font-medium leading-[1.03] tracking-[-0.03em] text-[#141413] sm:text-5xl lg:text-[4.25rem]"
          >
            Imagem com precisão.
            <span className="mt-1 block font-light text-[#57554F]">
              Direção com propósito.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.24}
            className="mt-7 max-w-xl text-base font-light leading-relaxed text-[#57554F] md:text-lg"
          >
            No nosso estúdio próprio no Centro de Sombrio ou em locações na
            região, Micael &amp; Vanusa unem técnica de iluminação e direção
            humana — de ensaios de gestante e família a retratos corporativos,
            produtos e campanhas de marketing.
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
              className="inline-flex items-center gap-2.5 rounded-sm bg-[#141413] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F6F5F0] transition-colors hover:bg-[#2E2E2B]"
            >
              Explorar formatos
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("portfolio")}
              className="rounded-sm border border-[#141413]/25 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#141413] transition-colors hover:border-[#141413] hover:bg-[#ECEAE3]"
            >
              Ver portfólio
            </button>
          </motion.div>

          {/* Especificações do estúdio */}
          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.44}
            className="mt-12 grid grid-cols-1 gap-6 border-t border-[#141413]/12 pt-7 sm:grid-cols-3"
          >
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#141413]">
                Estúdio Próprio
              </dt>
              <dd className="mt-1 text-xs font-light leading-relaxed text-[#57554F]">
                3º andar, Sala 302 · Acima da CDL de Sombrio/SC
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#141413]">
                Pessoal &amp; Marcas
              </dt>
              <dd className="mt-1 text-xs font-light leading-relaxed text-[#57554F]">
                De gestantes e famílias a corporativo e produtos
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#141413]">
                Entrega Ágil
              </dt>
              <dd className="mt-1 text-xs font-light leading-relaxed text-[#57554F]">
                Prévia em 48h e galeria em alta resolução
              </dd>
            </div>
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
          <figure className="rounded-sm border border-[#141413]/12 bg-[#ECEAE3] p-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCD9D0]">
              <Image
                src="/img/casais-4.jpg"
                alt="Retrato autoral em preto e branco com direção natural"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 pt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#57554F]">
              <span>01 / Direção de Imagem</span>
              <span>Micael &amp; Vanusa</span>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}
