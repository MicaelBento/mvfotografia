"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "Nossa História" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#investimentos", label: "Investimentos" },
  { href: "#faq", label: "Dúvidas" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuAberto)
    return () => document.body.classList.remove("overflow-hidden")
  }, [menuAberto])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-black transition-all duration-500",
          scrolled
            ? "border-b border-white/10 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
            : "border-b border-transparent py-4"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          {/* Marca */}
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Micael e Vanusa — voltar ao início"
          >
            <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-white/25">
              <Image
                src="/logo.png"
                alt="Logotipo Memória Viva Fotografia"
                fill
                sizes="44px"
                className="object-cover"
                priority
                loading="eager"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-medium uppercase tracking-[0.22em] text-white">
                Micael &amp; Vanusa
              </span>
              <span className="mt-1.5 text-[9px] uppercase tracking-[0.42em] text-neutral-400">
                Memória Viva
              </span>
            </span>
          </a>

          {/* Navegação desktop */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Navegação principal"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="ml-2 rounded-full border border-white/40 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-all hover:bg-white hover:text-black"
            >
              Agendar
            </a>
          </nav>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setMenuAberto(true)}
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Menu mobile em tela cheia */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-black"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-400">
                Memória Viva Fotografia
              </span>
              <button
                type="button"
                onClick={() => setMenuAberto(false)}
                className="flex h-11 w-11 items-center justify-center text-white"
                aria-label="Fechar menu"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-8 pb-16">
              {[...links, { href: "#contato", label: "Contato" }].map(
                (l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuAberto(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                    className="font-serif-site py-3 text-4xl font-medium text-neutral-200 transition-colors hover:text-white"
                  >
                    {l.label}
                  </motion.a>
                )
              )}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-10 text-[10px] uppercase tracking-[0.4em] text-neutral-500"
              >
                O tempo passa. A memória fica.
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
