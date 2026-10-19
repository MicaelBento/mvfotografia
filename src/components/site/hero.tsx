"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: d, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Imagem de fundo com efeito Ken Burns */}
      <div className="absolute inset-0">
        <div className="animate-kenburns relative h-full w-full">
          <Image
            src="/img/hero-1.jpg"
            alt="Casal em silhueta ao pôr do sol"
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
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="mb-8 block"
        >
          <span className="relative block h-20 w-20 overflow-hidden rounded-full ring-1 ring-white/30 md:h-24 md:w-24">
            <Image
              src="/logo.png"
              alt="Símbolo do estúdio Memória Viva Fotografia"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </span>
        </motion.span>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="label-mini text-shadow-hero text-neutral-300"
        >
          Micael &amp; Vanusa · Memória Viva Fotografia
        </motion.p>

        <motion.h1
          variants={fadeUp}
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
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="text-shadow-hero mt-8 max-w-2xl text-base font-light leading-relaxed text-neutral-200 md:text-lg"
        >
          Somos Micael &amp; Vanusa: um casal de fotógrafos que transforma
          instantes reais em memória viva — histórias de casais, famílias e
          casamentos contadas com luz, sensibilidade e arte.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.75}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            type="button"
            onClick={() => scrollTo("portfolio")}
            className="rounded-full bg-white px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-black transition-all hover:bg-neutral-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
          >
            Ver portfólio
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contato")}
            className="rounded-full border border-white/40 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition-all hover:border-white hover:bg-white/10"
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
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white"
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
        Fotografia · Santa Catarina · Brasil
      </span>
    </section>
  )
}
