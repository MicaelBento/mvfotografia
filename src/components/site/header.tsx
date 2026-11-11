"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#historia", label: "O Estúdio" },
  { href: "#servicos", label: "Especialidades" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#faq", label: "Dúvidas" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
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
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-[#141413]/12 bg-[#F6F5F0]/95 py-3 backdrop-blur-md"
            : "border-[#141413]/8 bg-[#F6F5F0]/90 py-4 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Marca */}
          <a
            href="#inicio"
            className="group flex items-center gap-3.5"
            aria-label="Memória Viva Estúdio — voltar ao início"
          >
            <Image
              src="/logo-preto.svg"
              alt="Logotipo Memória Viva Estúdio"
              width={540}
              height={504}
              unoptimized
              loading="eager"
              className="h-8 w-auto shrink-0 transition-opacity duration-200 group-hover:opacity-75"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#141413]">
                Memória Viva
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.26em] text-[#57554F]">
                Estúdio · Micael &amp; Vanusa
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
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#57554F] transition-colors hover:text-[#141413]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="ml-1 rounded-sm bg-[#141413] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F6F5F0] transition-colors hover:bg-[#2E2E2B]"
            >
              Agendar / Orçar
            </a>
          </nav>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setMenuAberto(true)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#141413]/15 text-[#141413] lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#141413] text-[#F6F5F0]"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div className="flex items-center justify-between border-b border-[#F6F5F0]/10 px-6 py-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-[#9E9B93]">
                Memória Viva Estúdio
              </span>
              <button
                type="button"
                onClick={() => setMenuAberto(false)}
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#F6F5F0]/20 text-[#F6F5F0] focus-visible:!outline-[#F6F5F0]"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-8 pb-12">
              {[...links, { href: "#contato", label: "Agendar / Orçar" }].map(
                (l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuAberto(false)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + i * 0.04, duration: 0.35 }}
                    className="border-b border-[#F6F5F0]/8 py-3.5 text-2xl font-medium tracking-[-0.02em] text-[#E6E4DD] transition-colors hover:text-[#F6F5F0] focus-visible:!outline-[#F6F5F0]"
                  >
                    {l.label}
                  </motion.a>
                )
              )}
              <p className="mt-8 text-[10px] uppercase tracking-[0.26em] text-[#86837B]">
                Estúdio em Sombrio · Região &amp; Sob Consulta
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
