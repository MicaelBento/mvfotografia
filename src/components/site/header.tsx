"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"

const linksSecoes = [
  { href: "#historia", label: "O Estúdio" },
  { href: "#servicos", label: "Especialidades" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#faq", label: "Dúvidas" },
]

interface HeaderProps {
  modo?: "preview" | SiteModo
}

export function Header({ modo = "preview" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  const theme =
    modo === "pessoal" ? modoThemes.pessoal : modoThemes.corporativo
  const isPreview = modo === "preview"

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

  const navItems = isPreview
    ? [{ href: "#localizacao", label: "Estúdio & Localização" }]
    : linksSecoes

  const ctaLabel = isPreview ? "Falar no WhatsApp" : "Agendar / Orçar"
  const ctaHref = isPreview ? "#contato" : "#contato"

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          modo === "pessoal"
            ? scrolled
              ? "border-[#1D1917]/12 bg-[#FAF7F2]/95 py-3 backdrop-blur-md"
              : "border-[#1D1917]/8 bg-[#FAF7F2]/90 py-4 backdrop-blur-sm"
            : scrolled
              ? "border-[#141413]/12 bg-[#F6F5F0]/95 py-3 backdrop-blur-md"
              : "border-[#141413]/8 bg-[#F6F5F0]/90 py-4 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 md:px-10">
          {/* Marca */}
          <Link
            href="/"
            className="group flex items-center gap-3.5"
            aria-label="Memória Viva Estúdio — escolher experiência inicial"
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
              <span
                className={cn(
                  "text-[12px] font-semibold uppercase tracking-[0.2em]",
                  theme.inkText
                )}
              >
                Memória Viva
              </span>
              <span
                className={cn(
                  "mt-1 text-[9px] uppercase tracking-[0.24em]",
                  theme.mutedText
                )}
              >
                Estúdio · Micael &amp; Vanusa
              </span>
            </span>
          </Link>

          {/* Navegação desktop */}
          <nav
            className="hidden items-center gap-5 xl:gap-6 lg:flex"
            aria-label="Navegação principal"
          >
            {/* Alternador de frente */}
            <div
              className={cn(
                "flex items-center gap-1 rounded-sm border p-0.5",
                theme.borderLight,
                modo === "pessoal" ? "bg-[#F2ECE2]/70" : "bg-[#ECEAE3]/70"
              )}
              aria-label="Alternar frente do estúdio"
            >
              {(["pessoal", "corporativo"] as const).map((chave) => {
                const ativo = modo === chave
                return (
                  <Link
                    key={chave}
                    href={`/${chave}`}
                    aria-current={ativo ? "page" : undefined}
                    className={cn(
                      "rounded-sm px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors",
                      ativo
                        ? theme.primaryBtn
                        : cn(
                            theme.mutedText,
                            modo === "pessoal"
                              ? "hover:text-[#1D1917]"
                              : "hover:text-[#141413]"
                          )
                    )}
                  >
                    {chave === "pessoal" ? "Pessoal" : "Corporativo & Mkt"}
                  </Link>
                )
              })}
            </div>

            {navItems.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[11px] font-medium uppercase tracking-[0.18em] transition-colors",
                  theme.mutedText,
                  modo === "pessoal"
                    ? "hover:text-[#1D1917]"
                    : "hover:text-[#141413]"
                )}
              >
                {l.label}
              </a>
            ))}

            <a
              href={ctaHref}
              className={cn(
                "ml-1 rounded-sm px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors",
                theme.primaryBtn
              )}
            >
              {ctaLabel}
            </a>
          </nav>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setMenuAberto(true)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-sm border lg:hidden",
              theme.borderLight,
              theme.inkText
            )}
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
            className={cn(
              "fixed inset-0 z-[60] flex flex-col text-[#F6F5F0]",
              theme.darkBg
            )}
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

            <div className="border-b border-[#F6F5F0]/10 px-8 py-5">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#9E9B93]">
                Escolher frente de atendimento
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <Link
                  href="/pessoal"
                  onClick={() => setMenuAberto(false)}
                  className={cn(
                    "rounded-sm border px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                    modo === "pessoal"
                      ? "border-[#FAF7F2] bg-[#FAF7F2] text-[#1D1917]"
                      : "border-[#F6F5F0]/25 text-[#D4D1C7] hover:border-[#F6F5F0]"
                  )}
                >
                  Pessoal (Ensaios &amp; Afeto)
                </Link>
                <Link
                  href="/corporativo"
                  onClick={() => setMenuAberto(false)}
                  className={cn(
                    "rounded-sm border px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                    modo === "corporativo"
                      ? "border-[#F6F5F0] bg-[#F6F5F0] text-[#141413]"
                      : "border-[#F6F5F0]/25 text-[#D4D1C7] hover:border-[#F6F5F0]"
                  )}
                >
                  Corporativo &amp; Marketing
                </Link>
              </div>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-8 pb-12">
              {[...navItems, { href: ctaHref, label: ctaLabel }].map(
                (l, i) => (
                  <motion.a
                    key={l.href + l.label}
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
              <div className="mt-6 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMenuAberto(false)}
                  className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4D1C7] underline underline-offset-4"
                >
                  Tela Inicial (Preview)
                </Link>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#86837B]">
                  Sombrio · SC
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
