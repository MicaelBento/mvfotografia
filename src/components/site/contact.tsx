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
  servicos,
  estudioLocalizacao,
  WHATSAPP_NUMERO,
} from "@/lib/site-data"
import { useSiteStore, type ContextoProposta } from "@/lib/site-store"
import { cn } from "@/lib/utils"
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

export function Contact() {
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

  const mensagemAutomatica = montarMensagemWhatsapp({
    nome,
    servico,
    detalhe,
    contexto: contextoProposta,
  })
  const mensagemFinal = textoCustomizado ?? mensagemAutomatica
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagemFinal)}`

  function alternarServico(opcao: string) {
    const proximo = servico === opcao ? "" : opcao
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

  const inputClasse =
    "h-11 w-full rounded-sm border border-[#F6F5F0]/15 bg-[#141413] px-3.5 text-sm font-light text-[#F6F5F0] placeholder:text-[#86837B] transition-colors focus:border-[#F6F5F0] focus:outline-none"

  return (
    <section id="contato" className="bg-[#141413] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-16">
        {/* Informações e localização */}
        <div className="lg:col-span-5">
          <SectionHeading
            invertido
            label="08 · Contato"
            titulo="Vamos planejar"
            destaque="sua produção?"
            descricao="Informe seu nome, escolha opcionalmente o tipo de sessão e envie a mensagem pronta direto para o nosso WhatsApp."
          />

          <Reveal delay={0.12}>
            <ul className="mt-10 space-y-5">
              {infos.map((info) => {
                const isExternal = info.href.startsWith("http")
                return (
                  <li key={info.titulo}>
                    <a
                      href={info.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 focus-visible:!outline-[#F6F5F0]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[#F6F5F0]/20 text-[#F6F5F0] transition-colors group-hover:border-[#F6F5F0] group-hover:bg-[#F6F5F0] group-hover:text-[#141413]">
                        {info.icone}
                      </span>
                      <span>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-[#9E9B93]">
                          {info.titulo}
                        </span>
                        <span className="mt-0.5 block text-sm font-light text-[#D4D1C7] transition-colors group-hover:text-[#F6F5F0]">
                          {info.valor}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-sm border border-[#F6F5F0]/12 bg-[#1C1C1A] p-4 text-xs font-light leading-relaxed text-[#B8B5AC]">
              <Clock
                className="mt-0.5 h-4 w-4 shrink-0 text-[#9E9B93]"
                strokeWidth={1.5}
              />
              <p>
                Atendimento de segunda a sábado, das 9h às 20h, em nosso estúdio
                próprio no Centro de Sombrio, em toda a região e sob consulta.
              </p>
            </div>

            <StudioMap />
          </Reveal>
        </div>

        {/* Gerador rápido de mensagem WhatsApp */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={handleSubmitEnter}
            className="rounded-md border border-[#F6F5F0]/15 bg-[#1C1C1A] p-7 md:p-9"
            noValidate
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#9E9B93]">
                  Contato sem fricção
                </p>
                <h3 className="mt-1.5 text-xl font-medium tracking-[-0.015em] text-[#F6F5F0]">
                  Atendimento direto no WhatsApp
                </h3>
                <p className="mt-1.5 text-sm font-light text-[#9E9B93]">
                  Preencha apenas seu nome para montarmos sua mensagem pronta em
                  segundos.
                </p>
              </div>
              <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[#F6F5F0]/15 bg-[#141413] text-[#F6F5F0] sm:flex">
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </div>

            {contextoProposta && (
              <div className="mt-6 flex items-start justify-between gap-4 rounded-sm border border-[#F6F5F0]/18 bg-[#141413] px-4 py-3 text-xs">
                <div className="space-y-1">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9E9B93]">
                    Experiência adicionada à mensagem
                  </p>
                  <p className="font-light text-[#D4D1C7]">
                    <span className="font-medium text-[#F6F5F0]">
                      {contextoProposta.momento}
                    </span>
                    {contextoProposta.formato &&
                      ` · ${contextoProposta.formato}`}
                  </p>
                  {contextoProposta.extras.length > 0 && (
                    <p className="font-light text-[#9E9B93]">
                      Adicionais: {contextoProposta.extras.join(", ")}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setContextoProposta(null)}
                  aria-label="Limpar formato selecionado"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#F6F5F0]/15 text-[#9E9B93] transition-colors hover:border-[#F6F5F0]/50 hover:text-[#F6F5F0] focus-visible:!outline-[#F6F5F0]"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={1.75} />
                </button>
              </div>
            )}

            <div className="mt-7 space-y-6">
              {/* Nome */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nome"
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8B5AC]"
                >
                  1. Seu nome ou empresa *
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
                  placeholder="Ex.: Mariana ou Studio Nord"
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
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8B5AC]">
                  2. O que deseja registrar (opcional)
                </span>
                <div className="flex flex-wrap gap-2">
                  {servicos.map((item) => {
                    const ativo = servico === item
                    return (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={ativo}
                        onClick={() => alternarServico(item)}
                        className={cn(
                          "rounded-sm border px-3 py-2 text-xs font-light transition-colors focus-visible:!outline-[#F6F5F0]",
                          ativo
                            ? "border-[#F6F5F0] bg-[#F6F5F0] font-medium text-[#141413]"
                            : "border-[#F6F5F0]/18 bg-[#141413] text-[#D4D1C7] hover:border-[#F6F5F0]/45 hover:text-[#F6F5F0]"
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
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8B5AC]"
                >
                  3. Data prevista ou ideia rápida (opcional)
                </label>
                <input
                  id="detalhe-rapido"
                  name="detalhe"
                  value={detalhe}
                  onChange={(e) => setDetalhe(e.target.value)}
                  placeholder="Ex.: próximo mês, período da tarde ou locação externa"
                  className={inputClasse}
                />
              </div>

              {/* Prévia da mensagem editável */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <label
                    htmlFor="mensagem-whatsapp"
                    className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8B5AC]"
                  >
                    Prévia da mensagem (editável)
                  </label>
                  {textoCustomizado !== null && (
                    <button
                      type="button"
                      onClick={() => setTextoCustomizado(null)}
                      className="inline-flex items-center gap-1.5 text-[11px] font-light text-[#B8B5AC] transition-colors hover:text-[#F6F5F0] focus-visible:!outline-[#F6F5F0]"
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
                  className="w-full resize-none rounded-sm border border-[#F6F5F0]/20 bg-[#141413] px-4 py-3.5 text-sm font-light leading-relaxed text-[#F6F5F0] transition-colors focus:border-[#F6F5F0] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className="flex flex-1 items-center justify-center gap-2.5 rounded-sm bg-[#F6F5F0] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#141413] transition-colors hover:bg-[#E4E1D8] focus-visible:!outline-[#F6F5F0]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.85} />
                Enviar no WhatsApp
              </a>

              <button
                type="button"
                onClick={copiarMensagem}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#F6F5F0]/25 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4D1C7] transition-colors hover:border-[#F6F5F0] hover:text-[#F6F5F0] focus-visible:!outline-[#F6F5F0]"
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

            <p className="mt-4 text-center text-xs font-light leading-relaxed text-[#9E9B93]">
              Abre sua conversa direta com Micael e Vanusa no WhatsApp — sem
              formulários longos nem espera.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
