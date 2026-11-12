"use client"

import { useRef, useState, type FormEvent, type MouseEvent } from "react"
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  Clock,
  X,
  MessageCircle,
  Copy,
  Check,
  RotateCcw,
} from "lucide-react"
import { toast } from "sonner"
import {
  getServicosPorModo,
  estudioLocalizacao,
  WHATSAPP_NUMERO,
} from "@/lib/site-data"
import { useSiteStore, type ContextoProposta } from "@/lib/site-store"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { StudioMap } from "./studio-map"

interface ContatoInfo {
  icone: React.ReactNode
  titulo: string
  valor: string
  href: string
}

const infos: ContatoInfo[] = [
  {
    icone: <Phone className="h-4 w-4" strokeWidth={1.5} />,
    titulo: "WhatsApp",
    valor: "(48) 9985-99989",
    href: "https://wa.me/5548998599989",
  },
  {
    icone: <Mail className="h-4 w-4" strokeWidth={1.5} />,
    titulo: "E-mail",
    valor: "contato@micalevanusa.com.br",
    href: "mailto:contato@micalevanusa.com.br",
  },
  {
    icone: <Instagram className="h-4 w-4" strokeWidth={1.5} />,
    titulo: "Instagram",
    valor: "@memoriaviva.estudio",
    href: "https://instagram.com/memoriaviva.estudio",
  },
  {
    icone: <MapPin className="h-4 w-4" strokeWidth={1.5} />,
    titulo: estudioLocalizacao.titulo,
    valor: `${estudioLocalizacao.referencia} · ${estudioLocalizacao.complemento}`,
    href: estudioLocalizacao.googleMapsUrl,
  },
]

const frasesPorServico: Record<string, (quem: string) => string> = {
  "Ensaio de casal": (quem) =>
    `Olá, Micael e Vanusa! Sou ${quem} e quero planejar um ensaio de casal. Vamos registrar essa memória!`,
  "Ensaio de família": (quem) =>
    `Olá, Micael e Vanusa! Sou ${quem} e quero planejar um ensaio em família. Vamos registrar essa memória!`,
  "Ensaio de gestante": (quem) =>
    `Olá, Micael e Vanusa! Sou ${quem} e quero planejar um ensaio de gestante. Vamos registrar essa memória!`,
  Aniversário: (quem) =>
    `Olá, Micael e Vanusa! Sou ${quem} e quero planejar a cobertura de um aniversário. Vamos registrar essa memória!`,
  "Fotografia corporativa & retratos": (quem) =>
    `Olá, Micael e Vanusa! Sou ${quem} e quero planejar uma sessão de fotografia corporativa e retratos.`,
  "Produtos & Marketing": (quem) =>
    `Olá, Micael e Vanusa! Sou ${quem} e quero planejar uma produção de fotografia de produtos e marketing.`,
  "Casamento (sob consulta)": (quem) =>
    `Olá, Micael e Vanusa! Sou ${quem} e gostaria de consultar disponibilidade para fotografia de casamento. Vamos registrar essa memória!`,
  "Recém-nascido (sob consulta)": (quem) =>
    `Olá, Micael e Vanusa! Sou ${quem} e gostaria de consultar disponibilidade para um ensaio recém-nascido. Vamos registrar essa memória!`,
  "Outro / projeto sob consulta": (quem) =>
    `Olá, Micael e Vanusa! Sou ${quem} e quero planejar um projeto fotográfico especial com vocês.`,
}

function montarMensagemWhatsapp(params: {
  nome: string
  servico: string
  detalhe: string
  contexto: ContextoProposta | null
}): string {
  const quem = params.nome.trim() || "[Seu nome]"
  const montarBase =
    frasesPorServico[params.servico] ??
    ((identificacao: string) =>
      `Olá, Micael e Vanusa! Sou ${identificacao} e quero planejar um ensaio. Vamos registrar essa memória!`)

  const linhas = [montarBase(quem)]

  if (params.contexto) {
    const referencia = params.contexto.formato
      ? `${params.contexto.momento} · ${params.contexto.formato}`
      : params.contexto.momento
    linhas.push(`Experiência de referência: ${referencia}.`)

    if (params.contexto.extras.length > 0) {
      linhas.push(`Adicionais de interesse: ${params.contexto.extras.join(", ")}.`)
    }
  }

  const detalheLimpo = params.detalhe.trim()
  if (detalheLimpo) {
    linhas.push(`Detalhes: ${detalheLimpo}`)
  }

  return linhas.join("\n")
}

interface ContactProps {
  modo?: "preview" | SiteModo
}

export function Contact({ modo = "corporativo" }: ContactProps) {
  const theme =
    modo === "pessoal" ? modoThemes.pessoal : modoThemes.corporativo
  const modoSection: SiteModo = modo === "pessoal" ? "pessoal" : "corporativo"
  const isPessoal = modo === "pessoal"
  const servicosLista = getServicosPorModo(modo)

  const servico = useSiteStore((s) => s.servicoSelecionado)
  const setServico = useSiteStore((s) => s.setServico)
  const contextoProposta = useSiteStore((s) => s.contextoProposta)
  const setContextoProposta = useSiteStore((s) => s.setContextoProposta)

  const [nome, setNome] = useState("")
  const [detalhe, setDetalhe] = useState("")
  const [textoCustomizado, setTextoCustomizado] = useState<string | null>(null)
  const [erroNome, setErroNome] = useState(false)
  const [copiado, setCopiado] = useState(false)

  const nomeInputRef = useRef<HTMLInputElement>(null)

  const servicoAtivo = servicosLista.includes(servico) ? servico : ""
  const contextoAtivo =
    contextoProposta && servicosLista.includes(contextoProposta.servico)
      ? contextoProposta
      : null

  const mensagemAutomatica = montarMensagemWhatsapp({
    nome,
    servico: servicoAtivo,
    detalhe,
    contexto: contextoAtivo,
  })
  const mensagemFinal = textoCustomizado ?? mensagemAutomatica
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagemFinal)}`

  function alternarServico(opcao: string) {
    const proximo = servicoAtivo === opcao ? "" : opcao
    setServico(proximo)
    if (contextoProposta && contextoProposta.servico !== proximo) {
      setContextoProposta(null)
    }
  }

  function validarNome(): boolean {
    if (nome.trim().length >= 2) {
      setErroNome(false)
      return true
    }
    setErroNome(true)
    nomeInputRef.current?.focus()
    return false
  }

  function handleWhatsappClick(e: MouseEvent<HTMLAnchorElement>) {
    if (!validarNome()) {
      e.preventDefault()
    }
  }

  function handleSubmitEnter(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validarNome()) return
    window.open(whatsappHref, "_blank", "noopener,noreferrer")
  }

  async function copiarMensagem() {
    if (!validarNome()) return
    try {
      await navigator.clipboard.writeText(mensagemFinal)
      setCopiado(true)
      toast.success("Mensagem copiada", {
        description: "Agora é só colar no WhatsApp caso prefira.",
      })
      window.setTimeout(() => setCopiado(false), 2500)
    } catch {
      toast.error("Não foi possível copiar automaticamente.")
    }
  }

  const inputClasse = cn(
    "w-full border text-sm font-light transition-colors focus:outline-none",
    isPessoal
      ? "h-12 rounded-lg border-white/15 bg-white/5 px-4 text-white placeholder:text-neutral-500 focus:border-white focus:ring-1 focus:ring-white/40"
      : cn(
          "h-11 rounded-sm border-[#F6F5F0]/15 px-3.5 text-[#F6F5F0] placeholder:text-[#86837B] focus:border-[#F6F5F0]",
          theme.darkBg
        )
  )

  const tituloContato =
    modo === "pessoal" ? "Vamos eternizar" : "Vamos planejar"
  const destaqueContato =
    modo === "pessoal" ? "a sua história?" : "sua produção?"
  const nomePlaceholder =
    modo === "pessoal"
      ? "Como podemos te chamar?"
      : modo === "corporativo"
        ? "Ex.: Dr. Henrique · Clínica Sombrio"
        : "Ex.: Mariana ou Clínica Sombrio"
  const detalhePlaceholder =
    modo === "corporativo"
      ? "Ex.: 15 produtos para catálogo, equipe de 6 pessoas ou locação na empresa"
      : "Ex.: próximo mês, período da tarde ou locação externa"

  return (
    <section
      id="contato"
      className={cn(
        "relative overflow-hidden py-24 md:py-32",
        isPessoal ? "bg-black" : theme.darkBg
      )}
    >
      <div
        className={cn(
          "relative mx-auto grid max-w-7xl gap-16",
          isPessoal
            ? "px-6 md:px-8 lg:grid-cols-2 lg:gap-20"
            : "gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-16"
        )}
      >
        {/* Informações e localização */}
        <div className={isPessoal ? "" : "lg:col-span-5"}>
          <SectionHeading
            invertido
            centralizado={false}
            modo={modoSection}
            label={isPessoal ? "Contato" : undefined}
            titulo={tituloContato}
            destaque={destaqueContato}
            descricao={
              isPessoal
                ? "Informe seu nome e envie a mensagem pronta direto para o nosso WhatsApp. Respondemos em até 24h úteis — geralmente em muito menos."
                : "Informe seu nome, escolha opcionalmente o tipo de sessão e envie a mensagem pronta direto para o nosso WhatsApp."
            }
          />

          <Reveal delay={isPessoal ? 0.2 : 0.12}>
            <ul className={cn(isPessoal ? "mt-12 space-y-6" : "mt-10 space-y-5")}>
              {infos.map((info) => {
                const isExternal = info.href.startsWith("http")
                return (
                  <li key={info.titulo}>
                    <a
                      href={info.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={cn(
                        "group flex items-center focus-visible:!outline-[#F6F5F0]",
                        isPessoal ? "gap-5" : "gap-4"
                      )}
                    >
                      <span
                        className={cn(
                          "flex shrink-0 items-center justify-center rounded-full border transition-all",
                          isPessoal
                            ? "h-12 w-12 border-white/20 text-white group-hover:border-white group-hover:bg-white group-hover:text-black"
                            : cn(
                                "h-10 w-10 border-[#F6F5F0]/20 text-[#F6F5F0] group-hover:border-[#F6F5F0] group-hover:bg-[#F6F5F0] group-hover:text-[#141413]",
                                theme.controlRadius
                              )
                        )}
                      >
                        {info.icone}
                      </span>
                      <span>
                        <span
                          className={cn(
                            "block text-[10px] uppercase",
                            isPessoal
                              ? "tracking-[0.28em] text-neutral-500"
                              : cn("tracking-[0.2em]", theme.darkMutedText)
                          )}
                        >
                          {info.titulo}
                        </span>
                        <span
                          className={cn(
                            "block font-light transition-colors",
                            isPessoal
                              ? "mt-1 text-base text-neutral-200 group-hover:text-white"
                              : cn("mt-0.5 text-sm group-hover:text-[#F6F5F0]", theme.darkBodyText)
                          )}
                        >
                          {info.valor}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div
              className={cn(
                "flex items-start gap-3 border font-light leading-relaxed",
                isPessoal
                  ? "mt-10 rounded-xl border-white/10 bg-white/5 p-5 text-sm text-neutral-400"
                  : cn(
                      "mt-8 p-4 text-xs",
                      theme.frameRadius,
                      theme.darkBorder,
                      theme.darkMutedText,
                      theme.darkCardBg
                    )
              )}
            >
              <Clock
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0",
                  isPessoal ? "text-neutral-500" : theme.darkAccentText
                )}
                strokeWidth={isPessoal ? 1.25 : 1.5}
              />
              <p>
                Atendimento de segunda a sábado, das 9h às 20h, em nosso estúdio
                próprio no Centro de Sombrio, em toda a região e sob consulta.
              </p>
            </div>

            <StudioMap modo={modo} />
          </Reveal>
        </div>

        {/* Gerador rápido de mensagem WhatsApp */}
        <Reveal delay={isPessoal ? 0.15 : 0.1} className={isPessoal ? "" : "lg:col-span-7"}>
          <form
            onSubmit={handleSubmitEnter}
            className={cn(
              "border",
              isPessoal
                ? "rounded-2xl border-white/15 bg-neutral-950 p-8 md:p-10"
                : cn(
                    "p-7 md:p-9",
                    theme.cardRadius,
                    theme.darkBorder,
                    theme.darkCardBg
                  )
            )}
            noValidate
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className={cn(
                    isPessoal
                      ? "font-serif-site text-2xl font-medium text-white md:text-3xl"
                      : cn("text-xl font-medium tracking-[-0.015em]", theme.darkInkText)
                  )}
                >
                  {isPessoal
                    ? "Pedir orçamento no WhatsApp"
                    : "Atendimento direto no WhatsApp"}
                </h3>
                <p
                  className={cn(
                    "font-light",
                    isPessoal
                      ? "mt-2 text-sm text-neutral-400"
                      : cn("mt-1.5 text-sm", theme.darkMutedText)
                  )}
                >
                  {isPessoal
                    ? "Sem compromisso — informe seu nome para abrir a conversa pronta."
                    : "Preencha apenas seu nome para montarmos sua mensagem pronta em segundos."}
                </p>
              </div>
              <span
                className={cn(
                  "hidden h-10 w-10 shrink-0 items-center justify-center border sm:flex",
                  isPessoal
                    ? "rounded-full border-white/20 bg-black text-white"
                    : cn(
                        theme.controlRadius,
                        theme.darkBorder,
                        theme.darkInkText,
                        theme.darkBg
                      )
                )}
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </div>

            {contextoAtivo && (
              <div
                className={cn(
                  "mt-6 flex items-start justify-between gap-4 border px-4 py-3 text-xs",
                  theme.frameRadius,
                  theme.darkBorder,
                  theme.darkBg
                )}
              >
                <div className="space-y-1">
                  <p
                    className={cn(
                      "text-[10px] font-medium uppercase tracking-[0.2em]",
                      theme.darkAccentText
                    )}
                  >
                    Experiência adicionada à mensagem
                  </p>
                  <p className={cn("font-light", theme.darkBodyText)}>
                    <span className={cn("font-medium", theme.darkInkText)}>
                      {contextoAtivo.momento}
                    </span>
                    {contextoAtivo.formato && ` · ${contextoAtivo.formato}`}
                  </p>
                  {contextoAtivo.extras.length > 0 && (
                    <p className={cn("font-light", theme.darkMutedText)}>
                      Adicionais: {contextoAtivo.extras.join(", ")}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setContextoProposta(null)}
                  aria-label="Limpar formato selecionado"
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center border transition-colors hover:border-[#F6F5F0]/50 hover:text-[#F6F5F0] focus-visible:!outline-[#F6F5F0]",
                    theme.controlRadius,
                    theme.darkBorder,
                    theme.darkMutedText
                  )}
                >
                  <X className="h-3.5 w-3.5" strokeWidth={1.75} />
                </button>
              </div>
            )}

            <div className={cn(isPessoal ? "mt-8 space-y-6" : "mt-7 space-y-6")}>
              {/* Nome */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nome"
                  className={cn(
                    "text-[10px] font-medium uppercase",
                    isPessoal
                      ? "tracking-[0.28em] text-neutral-400"
                      : cn("tracking-[0.2em]", theme.darkMutedText)
                  )}
                >
                  1. {modo === "corporativo" ? "Seu nome ou empresa" : "Seu nome"} *
                </label>
                <input
                  ref={nomeInputRef}
                  id="nome"
                  name="nome"
                  value={nome}
                  onChange={(e) => {
                    const valor = e.target.value
                    setNome(valor)
                    if (erroNome && valor.trim().length >= 2) {
                      setErroNome(false)
                    }
                  }}
                  aria-invalid={erroNome}
                  autoComplete="name"
                  placeholder={nomePlaceholder}
                  className={cn(
                    inputClasse,
                    erroNome && "border-[#E58D8D] focus:border-[#E58D8D]"
                  )}
                />
                {erroNome && (
                  <p role="alert" className="text-xs font-light text-[#F2A6A6]">
                    Digite seu nome para completar a mensagem antes de enviar.
                  </p>
                )}
              </div>

              {/* Seleção rápida com 1 clique */}
              <div className="flex flex-col gap-2.5">
                <span
                  className={cn(
                    "text-[10px] font-medium uppercase",
                    isPessoal
                      ? "tracking-[0.28em] text-neutral-400"
                      : cn("tracking-[0.2em]", theme.darkMutedText)
                  )}
                >
                  2. O que você quer eternizar? (opcional)
                </span>
                <div className="flex flex-wrap gap-2">
                  {servicosLista.map((item) => {
                    const ativo = servicoAtivo === item
                    return (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={ativo}
                        onClick={() => alternarServico(item)}
                        className={cn(
                          "border px-3.5 py-2 text-xs font-light transition-colors focus-visible:!outline-[#F6F5F0]",
                          isPessoal
                            ? cn(
                                "rounded-full",
                                ativo
                                  ? "border-white bg-white font-medium text-black"
                                  : "border-white/15 bg-white/5 text-neutral-300 hover:border-white/50 hover:text-white"
                              )
                            : cn(
                                theme.controlRadius,
                                ativo
                                  ? "border-[#F6F5F0] bg-[#F6F5F0] font-medium text-[#141413]"
                                  : cn(
                                      theme.darkBorder,
                                      theme.darkBodyText,
                                      "hover:border-[#F6F5F0]/45 hover:text-[#F6F5F0]",
                                      theme.darkBg
                                    )
                              )
                        )}
                      >
                        {item}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Observação opcional em 1 linha */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="detalhe-rapido"
                  className={cn(
                    "text-[10px] font-medium uppercase",
                    isPessoal
                      ? "tracking-[0.28em] text-neutral-400"
                      : cn("tracking-[0.2em]", theme.darkMutedText)
                  )}
                >
                  3. Data prevista ou ideia rápida (opcional)
                </label>
                <input
                  id="detalhe-rapido"
                  name="detalhe"
                  value={detalhe}
                  onChange={(e) => setDetalhe(e.target.value)}
                  placeholder={detalhePlaceholder}
                  className={inputClasse}
                />
              </div>

              {/* Prévia da mensagem editável */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <label
                    htmlFor="mensagem-whatsapp"
                    className={cn(
                      "text-[10px] font-medium uppercase",
                      isPessoal
                        ? "tracking-[0.28em] text-neutral-400"
                        : cn("tracking-[0.2em]", theme.darkMutedText)
                    )}
                  >
                    Prévia da mensagem (editável)
                  </label>
                  {textoCustomizado !== null && (
                    <button
                      type="button"
                      onClick={() => setTextoCustomizado(null)}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[11px] font-light transition-colors focus-visible:!outline-[#F6F5F0]",
                        isPessoal
                          ? "text-neutral-400 hover:text-white"
                          : cn(theme.darkMutedText, "hover:text-[#F6F5F0]")
                      )}
                    >
                      <RotateCcw className="h-3 w-3" strokeWidth={1.75} />
                      Restaurar automática
                    </button>
                  )}
                </div>

                <textarea
                  id="mensagem-whatsapp"
                  rows={4}
                  value={mensagemFinal}
                  onChange={(e) => setTextoCustomizado(e.target.value)}
                  className={cn(
                    "w-full resize-none border px-4 py-3.5 text-sm font-light leading-relaxed transition-colors focus:outline-none",
                    isPessoal
                      ? "rounded-lg border-white/15 bg-white/5 text-white placeholder:text-neutral-500 focus:border-white focus:ring-1 focus:ring-white/40"
                      : cn(
                          "rounded-sm border-[#F6F5F0]/20 text-[#F6F5F0] focus:border-[#F6F5F0]",
                          theme.darkBg
                        )
                  )}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2.5 px-6 py-4 text-[11px] font-semibold uppercase transition-all focus-visible:!outline-[#F6F5F0]",
                  isPessoal
                    ? "rounded-full bg-white tracking-[0.28em] text-black hover:bg-neutral-200"
                    : cn("tracking-[0.2em]", theme.controlRadius, theme.darkPrimaryBtn)
                )}
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.85} />
                Enviar no WhatsApp
              </a>

              <button
                type="button"
                onClick={copiarMensagem}
                className={cn(
                  "inline-flex items-center justify-center gap-2 border px-5 py-4 text-[11px] font-semibold uppercase transition-colors focus-visible:!outline-[#F6F5F0]",
                  isPessoal
                    ? "rounded-full border-white/30 tracking-[0.22em] text-white hover:border-white hover:bg-white/10"
                    : cn("tracking-[0.18em]", theme.controlRadius, theme.darkSecondaryBtn)
                )}
              >
                {copiado ? (
                  <>
                    <Check className="h-4 w-4" strokeWidth={1.75} />
                    Copiada
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" strokeWidth={1.75} />
                    Copiar texto
                  </>
                )}
              </button>
            </div>

            <p
              className={cn(
                "mt-5 text-center text-xs font-light leading-relaxed",
                isPessoal ? "text-neutral-500" : theme.darkMutedText
              )}
            >
              {isPessoal
                ? "Seus dados ficam entre nós — abre sua conversa direta no WhatsApp em segundos."
                : "Abre sua conversa direta com Micael e Vanusa no WhatsApp — sem formulários longos nem espera."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
