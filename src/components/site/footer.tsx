import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, MessageCircle, ExternalLink, Heart } from "lucide-react"
import { estudioLocalizacao } from "@/lib/site-data"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { LogoEmblema } from "./logo-emblema"

const navegacaoCorporativo = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Especialidades" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#experiencias", label: "Experiências & Projetos" },
  { href: "#faq", label: "Dúvidas Frequentes" },
  { href: "#contato", label: "Contato" },
]

const navegacaoPessoal = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "Nossa História" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#faq", label: "Perguntas Frequentes" },
  { href: "#contato", label: "Contato" },
]

const navegacaoPreview = [
  { href: "/pessoal", label: "Frente Pessoal" },
  { href: "/corporativo", label: "Corporativo & Marketing" },
  { href: "#localizacao", label: "Localização do Estúdio" },
  { href: "#contato", label: "WhatsApp Direto" },
]

const frentesLinks = [
  { href: "/", label: "Escolha inicial (Preview)" },
  { href: "/pessoal", label: "Pessoal · Ensaios & Afeto" },
  { href: "/corporativo", label: "Corporativo & Marketing" },
]

const sociais = [
  {
    href: "https://instagram.com/memoriaviva.estudio",
    label: "Instagram",
    icone: <Instagram className="h-4 w-4" strokeWidth={1.5} />,
  },
  {
    href: "https://wa.me/5548998599989",
    label: "WhatsApp",
    icone: <MessageCircle className="h-4 w-4" strokeWidth={1.5} />,
  },
  {
    href: "https://facebook.com/memoriaviva.estudio",
    label: "Facebook",
    icone: <Facebook className="h-4 w-4" strokeWidth={1.5} />,
  },
]

interface FooterProps {
  modo?: "preview" | SiteModo
}

export function Footer({ modo = "preview" }: FooterProps) {
  const theme =
    modo === "pessoal" ? modoThemes.pessoal : modoThemes.corporativo
  const isPessoal = modo === "pessoal"
  const navegacao =
    modo === "preview"
      ? navegacaoPreview
      : isPessoal
        ? navegacaoPessoal
        : navegacaoCorporativo

  return (
    <footer
      className={cn(
        "border-t",
        isPessoal ? "border-white/10 bg-black" : cn(theme.darkBorder, theme.darkBg)
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-6 pb-8 pt-16",
          isPessoal ? "md:px-8" : "md:px-10"
        )}
      >
        <div className="grid gap-12 md:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-5">
            {isPessoal ? (
              <>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-4 focus-visible:!outline-white"
                >
                  <LogoEmblema tamanho="md" />
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-white">
                      Micael &amp; Vanusa
                    </p>
                    <p className="mt-1.5 text-[9px] uppercase tracking-[0.42em] text-neutral-400">
                      Memória Viva Fotografia
                    </p>
                  </div>
                </Link>
                <p className="font-serif-site mt-6 max-w-sm text-xl italic leading-snug text-neutral-300">
                  “O tempo passa. A memória fica.”
                </p>
                <p className="mt-3 max-w-sm text-xs font-light leading-relaxed text-neutral-500">
                  Estúdio próprio no Centro de Sombrio · SC (3º andar, Sala 302
                  — acima da CDL). Atendimento em Sombrio, região e sob
                  consulta.
                </p>
              </>
            ) : (
              <>
                <Link href="/" className="inline-flex items-center gap-3.5">
                  <Image
                    src="/logo-branco.svg"
                    alt="Logotipo Memória Viva Estúdio"
                    width={540}
                    height={504}
                    unoptimized
                    loading="eager"
                    className="h-10 w-auto shrink-0"
                  />
                  <div>
                    <p
                      className={cn(
                        "text-xs font-semibold uppercase tracking-[0.22em]",
                        theme.darkInkText
                      )}
                    >
                      Memória Viva Estúdio
                    </p>
                    <p
                      className={cn(
                        "mt-1 text-[10px] uppercase tracking-[0.22em]",
                        theme.darkMutedText
                      )}
                    >
                      Micael &amp; Vanusa
                    </p>
                  </div>
                </Link>
                <p
                  className={cn(
                    "mt-5 max-w-sm text-sm font-light leading-relaxed",
                    theme.darkMutedText
                  )}
                >
                  Estúdio próprio no Centro de Sombrio · SC (3º andar, Sala 302
                  — acima da CDL). Fotografia pessoal, corporativa, produtos e
                  marketing com atendimento em Sombrio, região e sob consulta.
                </p>
              </>
            )}
          </div>

          {/* Navegação */}
          <nav className="md:col-span-3" aria-label="Links do rodapé">
            <p
              className={cn(
                "label-mini",
                isPessoal ? "text-neutral-500" : theme.darkAccentText
              )}
            >
              Navegue
            </p>
            <ul className={cn(isPessoal ? "mt-5 space-y-3" : "mt-4 space-y-2.5")}>
              {navegacao.map((n) => (
                <li key={n.href + n.label}>
                  {n.href.startsWith("/") ? (
                    <Link
                      href={n.href}
                      className={cn(
                        "text-sm font-light transition-colors focus-visible:!outline-[#F6F5F0]",
                        isPessoal
                          ? "text-neutral-400 hover:text-white"
                          : cn(theme.darkBodyText, "hover:text-[#F6F5F0]")
                      )}
                    >
                      {n.label}
                    </Link>
                  ) : (
                    <a
                      href={n.href}
                      className={cn(
                        "text-sm font-light transition-colors focus-visible:!outline-[#F6F5F0]",
                        isPessoal
                          ? "text-neutral-400 hover:text-white"
                          : cn(theme.darkBodyText, "hover:text-[#F6F5F0]")
                      )}
                    >
                      {n.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Frentes */}
          <div className="md:col-span-2">
            <p
              className={cn(
                "label-mini",
                isPessoal ? "text-neutral-500" : theme.darkAccentText
              )}
            >
              Frentes
            </p>
            <ul className={cn(isPessoal ? "mt-5 space-y-3" : "mt-4 space-y-2.5")}>
              {frentesLinks.map((f) => (
                <li key={f.href}>
                  <Link
                    href={f.href}
                    className={cn(
                      "text-sm font-light transition-colors focus-visible:!outline-[#F6F5F0]",
                      isPessoal
                        ? "text-neutral-400 hover:text-white"
                        : cn(theme.darkMutedText, "hover:text-[#F6F5F0]")
                    )}
                  >
                    {f.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p
              className={cn(
                "label-mini",
                isPessoal ? "text-neutral-500" : theme.darkAccentText
              )}
            >
              {isPessoal ? "Siga" : "Canais"}
            </p>
            <div className={cn(isPessoal ? "mt-5 flex gap-3" : "mt-4 flex gap-2.5")}>
              {sociais.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={cn(
                    "flex items-center justify-center border transition-all focus-visible:!outline-[#F6F5F0]",
                    isPessoal
                      ? "h-11 w-11 rounded-full border-white/20 text-neutral-300 hover:border-white hover:bg-white hover:text-black"
                      : cn(
                          "h-10 w-10 hover:border-[#F6F5F0] hover:bg-[#F6F5F0] hover:text-[#141413]",
                          theme.controlRadius,
                          theme.darkBorder,
                          theme.darkBodyText
                        )
                  )}
                >
                  {s.icone}
                </a>
              ))}
            </div>
            <div
              className={cn(
                "mt-5 space-y-1.5 text-xs font-light leading-relaxed",
                isPessoal ? "text-neutral-500" : theme.darkMutedText
              )}
            >
              <p className={isPessoal ? "text-neutral-300" : theme.darkBodyText}>
                {estudioLocalizacao.referencia}
                <br />
                {estudioLocalizacao.complemento} ·{" "}
                {estudioLocalizacao.cidadeEstado}
              </p>
              <p>Seg a Sáb, 9h às 20h</p>
              <a
                href={estudioLocalizacao.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-1.5 pt-1 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors focus-visible:!outline-[#F6F5F0]",
                  isPessoal
                    ? "text-white hover:text-neutral-300"
                    : cn(theme.darkInkText, "hover:text-[#D4D1C7]")
                )}
              >
                Abrir no Google Maps
                <ExternalLink className="h-3 w-3" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div
          className={cn(
            "flex flex-col items-center justify-between gap-3 border-t text-center md:flex-row md:text-left",
            isPessoal
              ? "mt-14 border-white/10 pt-8"
              : cn("mt-12 pt-7", theme.darkBorder)
          )}
        >
          <p
            className={cn(
              "text-xs font-light",
              isPessoal ? "text-neutral-500" : theme.darkMutedText
            )}
          >
            © {new Date().getFullYear()} Micael &amp; Vanusa · Memória Viva
            Fotografia. Todos os direitos reservados.
          </p>
          {isPessoal ? (
            <p className="flex items-center gap-1.5 text-xs font-light text-neutral-500">
              Feito com
              <Heart
                className="h-3.5 w-3.5 fill-neutral-600 text-neutral-600"
                strokeWidth={0}
                aria-hidden="true"
              />
              para histórias que não podem ser esquecidas.
            </p>
          ) : (
            <p className={cn("text-xs font-light", theme.darkMutedText)}>
              Sombrio &amp; Região · Atendimento externo sob consulta
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
