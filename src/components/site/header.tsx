"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { LogoEmblema } from "./logo-emblema"

const linksCorporativo = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Especialidades" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#faq", label: "Dúvidas" },
]

const linksPessoal = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "Nossa História" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
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
  const isPessoal = modo === "pessoal"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > (isPessoal ? 40 : 32))
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isPessoal])

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuAberto)
    return () => document.body.classList.remove("overflow-hidden")
  }, [menuAberto])

  const navItems = isPreview
    ? [{ href: "#localizacao", label: "Estúdio & Localização" }]
    : isPessoal
      ? linksPessoal
      : linksCorporativo

  const ctaLabel = isPreview
    ? "Falar no WhatsApp"
    : isPessoal
      ? "Agendar"
      : "Agendar / Orçar"
  const ctaHref = "#contato"

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all",
          isPessoal
            ? cn(
                "bg-black duration-500",
                scrolled
                  ? "border-b border-white/10 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
                  : "border-b border-transparent py-4"
              )
            : cn(
                "border-b duration-300",
                scrolled
                  ? "border-[#141413]/12 bg-[#F6F5F0]/95 py-3 backdrop-blur-md"
                  : "border-[#141413]/8 bg-[#F6F5F0]/90 py-4 backdrop-blur-sm"
              )
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4",
            isPessoal ? "px-5 md:px-8" : "px-6 md:px-10"
          )}
        >
          {/* Marca */}
          <Link
            href="/"
            className={cn(
              "group flex items-center gap-3.5",
              isPessoal && "focus-visible:!outline-white"
            )}
            aria-label="Memória Viva Estúdio — escolher experiência inicial"
          >
            {isPessoal ? (
              <>
                <LogoEmblema tamanho="sm" />
                <span className="flex flex-col leading-none">
                  <span className="text-[13px] font-medium uppercase tracking-[0.22em] text-white">
                    Micael &amp; Vanusa
                  </span>
                  <span className="mt-1.5 text-[9px] uppercase tracking-[0.42em] text-neutral-400">
                    Memória Viva
                  </span>
                </span>
              </>
            ) : (
              <>
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
              </>
            )}
          </Link>

          {/* Navegação desktop */}
          <nav
            className={cn(
              "hidden items-center lg:flex",
              isPessoal ? "gap-5 xl:gap-6" : "gap-5 xl:gap-6"
            )}
            aria-label="Navegação principal"
          >
            {/* Alternador de frente */}
            <div
              className={cn(
                "flex items-center gap-1 border p-0.5",
                isPessoal
                  ? "rounded-full border-white/15 bg-white/5"
                  : cn(
                      theme.controlRadius,
                      theme.borderLight,
                      "bg-[#ECEAE3]/70"
                    )
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
                      "whitespace-nowrap px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors",
                      isPessoal
                        ? cn(
                            "rounded-full focus-visible:!outline-white",
                            ativo
                              ? "bg-white text-black"
                              : "text-neutral-400 hover:text-white"
                          )
                        : cn(
                            theme.controlRadius,
                            ativo
                              ? theme.primaryBtn
                              : cn(theme.mutedText, "hover:text-[#141413]")
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
                  "whitespace-nowrap text-[11px] font-medium uppercase transition-colors",
                  isPessoal
                    ? "tracking-[0.22em] text-neutral-300 hover:text-white focus-visible:!outline-white"
                    : cn("tracking-[0.18em]", theme.mutedText, "hover:text-[#141413]")
                )}
              >
                {l.label}
              </a>
            ))}

            <a
              href={ctaHref}
              className={cn(
                "ml-1 whitespace-nowrap text-[11px] font-semibold uppercase transition-all",
                isPessoal
                  ? "rounded-full border border-white/40 px-6 py-2.5 tracking-[0.24em] text-white hover:bg-white hover:text-black focus-visible:!outline-white"
                  : cn(
                      "px-5 py-2.5 tracking-[0.18em]",
                      theme.controlRadius,
                      theme.primaryBtn
                    )
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
              "flex items-center justify-center lg:hidden",
              isPessoal
                ? "h-11 w-11 text-white focus-visible:!outline-white"
                : cn("h-10 w-10 border", theme.controlRadius, theme.borderLight, theme.inkText)
            )}
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
          >
            <Menu className={isPessoal ? "h-6 w-6" : "h-5 w-5"} strokeWidth={1.5} />
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
            transition={{ duration: isPessoal ? 0.35 : 0.25 }}
            className={cn(
              "fixed inset-0 z-[60] flex flex-col",
              isPessoal ? "bg-black text-white" : cn(theme.darkBg, "text-[#F6F5F0]")
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div
              className={cn(
                "flex items-center justify-between px-5 py-5",
                !isPessoal && cn("border-b px-6 py-4", theme.darkBorder)
              )}
            >
              <span
                className={cn(
                  "text-[11px] font-medium uppercase",
                  isPessoal
                    ? "tracking-[0.3em] text-neutral-400"
                    : cn("text-[10px] tracking-[0.26em]", theme.darkMutedText)
                )}
              >
                {isPessoal ? "Memória Viva Fotografia" : "Memória Viva Estúdio"}
              </span>
              <button
                type="button"
                onClick={() => setMenuAberto(false)}
                className={cn(
                  "flex items-center justify-center focus-visible:!outline-[#F6F5F0]",
                  isPessoal
                    ? "h-11 w-11 text-white"
                    : cn(
                        "h-10 w-10 border",
                        theme.controlRadius,
                        theme.darkBorder,
                        theme.darkInkText
                      )
                )}
                aria-label="Fechar menu"
              >
                <X className={isPessoal ? "h-6 w-6" : "h-5 w-5"} strokeWidth={1.5} />
              </button>
            </div>

            <div
              className={cn(
                "border-y px-6 py-4",
                isPessoal ? "border-white/10" : cn("border-t-0 px-8 py-5", theme.darkBorder)
              )}
            >
              <p
                className={cn(
                  "mb-3 text-[10px] font-medium uppercase tracking-[0.22em]",
                  isPessoal ? "text-center text-neutral-500" : theme.darkMutedText
                )}
              >
                Escolher frente de atendimento
              </p>
              <div className="mx-auto grid max-w-md grid-cols-1 gap-2 sm:grid-cols-2">
                <Link
                  href="/pessoal"
                  onClick={() => setMenuAberto(false)}
                  className={cn(
                    "border px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                    isPessoal
                      ? "rounded-full border-white bg-white text-black"
                      : cn(
                          theme.controlRadius,
                          "border-[#F6F5F0]/25 text-[#D4D1C7] hover:border-[#F6F5F0]"
                        )
                  )}
                >
                  Pessoal (Ensaios &amp; Afeto)
                </Link>
                <Link
                  href="/corporativo"
                  onClick={() => setMenuAberto(false)}
                  className={cn(
                    "border px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                    isPessoal
                      ? "rounded-full border-white/25 text-neutral-300 hover:border-white hover:text-white"
                      : cn(
                          theme.controlRadius,
                          modo === "corporativo"
                            ? "border-[#F6F5F0] bg-[#F6F5F0] text-[#141413]"
                            : "border-[#F6F5F0]/25 text-[#D4D1C7] hover:border-[#F6F5F0]"
                        )
                  )}
                >
                  Corporativo &amp; Marketing
                </Link>
              </div>
            </div>

            <nav
              className={cn(
                "flex flex-1 flex-col justify-center gap-2 px-8",
                isPessoal ? "items-center pb-14" : "pb-12"
              )}
            >
              {[
                ...navItems,
                { href: ctaHref, label: isPessoal ? "Contato" : ctaLabel },
              ].map((l, i) => (
                <motion.a
                  key={l.href + l.label}
                  href={l.href}
                  onClick={() => setMenuAberto(false)}
                  initial={{ opacity: 0, y: isPessoal ? 24 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (isPessoal ? 0.08 : 0.04) + i * (isPessoal ? 0.06 : 0.04),
                    duration: isPessoal ? 0.5 : 0.35,
                  }}
                  className={cn(
                    "transition-colors focus-visible:!outline-[#F6F5F0]",
                    isPessoal
                      ? "font-serif-site py-2.5 text-3xl font-medium text-neutral-200 hover:text-white sm:text-4xl"
                      : cn(
                          "border-b py-3.5 text-2xl font-medium tracking-[-0.02em] text-[#E6E4DD] hover:text-[#F6F5F0]",
                          theme.darkBorder
                        )
                  )}
                >
                  {l.label}
                </motion.a>
              ))}

              {isPessoal ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-8 flex flex-col items-center gap-3 text-center"
                >
                  <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                    O tempo passa. A memória fica.
                  </p>
                  <Link
                    href="/"
                    onClick={() => setMenuAberto(false)}
                    className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400 underline underline-offset-4 hover:text-white"
                  >
                    Tela Inicial (Preview)
                  </Link>
                </motion.div>
              ) : (
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
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
