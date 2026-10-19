"use client"

import { useEffect, useState, type FormEvent } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2, Phone, Mail, Instagram, MapPin, Send, Clock } from "lucide-react"
import { toast } from "sonner"
import { servicos } from "@/lib/site-data"
import { useSiteStore, irParaContato } from "@/lib/site-store"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

interface ContatoInfo {
  icone: React.ReactNode
  titulo: string
  valor: string
  acao?: () => void
  href?: string
}

const infos: ContatoInfo[] = [
  {
    icone: <Phone className="h-5 w-5" strokeWidth={1.25} />,
    titulo: "WhatsApp",
    valor: "(48) 98800-0000",
    href: "https://wa.me/5548988000000",
  },
  {
    icone: <Mail className="h-5 w-5" strokeWidth={1.25} />,
    titulo: "E-mail",
    valor: "contato@micalevanusa.com.br",
    href: "mailto:contato@micalevanusa.com.br",
  },
  {
    icone: <Instagram className="h-5 w-5" strokeWidth={1.25} />,
    titulo: "Instagram",
    valor: "@micalevanusa",
    href: "https://instagram.com/micalevanusa",
  },
  {
    icone: <MapPin className="h-5 w-5" strokeWidth={1.25} />,
    titulo: "Estúdio",
    valor: "Florianópolis · SC — viajamos a qualquer lugar",
    acao: () => irParaContato(),
  },
]

export function Contact() {
  const servicoSelecionado = useSiteStore((s) => s.servicoSelecionado)
  const [servico, setServico] = useState("")
  const [enviando, setEnviando] = useState(false)

  useEffect(() => {
    if (servicoSelecionado) setServico(servicoSelecionado)
  }, [servicoSelecionado])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const dados = new FormData(form)

    setEnviando(true)
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: dados.get("nome"),
          email: dados.get("email"),
          whatsapp: dados.get("whatsapp"),
          servico: servico,
          data: dados.get("data"),
          mensagem: dados.get("mensagem"),
        }),
      })

      const json = await res.json()

      if (!res.ok || !json.ok) {
        throw new Error(json.erro ?? "Não foi possível enviar agora.")
      }

      toast.success("Mensagem recebida com carinho!", {
        description:
          "Respondemos em até 24h úteis. Enquanto isso, prepare o coração — a gente cuida do resto.",
        duration: 8000,
      })
      form.reset()
      setServico("")
    } catch (err) {
      toast.error("Ops, algo travou no caminho", {
        description:
          err instanceof Error
            ? err.message
            : "Tente novamente ou fale direto com a gente pelo WhatsApp.",
        duration: 8000,
      })
    } finally {
      setEnviando(false)
    }
  }

  const inputClasse =
    "h-12 w-full rounded-lg border border-white/15 bg-white/5 px-4 text-sm font-light text-white placeholder:text-neutral-500 transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white/40"

  return (
    <section id="contato" className="bg-black py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Informações */}
        <div>
          <SectionHeading
            centralizado={false}
            invertido
            label="Contato"
            titulo="Vamos eternizar"
            destaque="a sua história?"
            descricao="Conte para a gente o momento que você quer guardar. Respondemos em até 24h úteis — geralmente em muito menos."
          />

          <Reveal delay={0.2}>
            <ul className="mt-12 space-y-6">
              {infos.map((info) => (
                <li key={info.titulo}>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-5"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all group-hover:border-white group-hover:bg-white group-hover:text-black">
                        {info.icone}
                      </span>
                      <span>
                        <span className="block text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                          {info.titulo}
                        </span>
                        <span className="mt-1 block text-base font-light text-neutral-200 transition-colors group-hover:text-white">
                          {info.valor}
                        </span>
                      </span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={info.acao}
                      className="group flex w-full items-center gap-5 text-left"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all group-hover:border-white group-hover:bg-white group-hover:text-black">
                        {info.icone}
                      </span>
                      <span>
                        <span className="block text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                          {info.titulo}
                        </span>
                        <span className="mt-1 block text-base font-light text-neutral-200">
                          {info.valor}
                        </span>
                      </span>
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-sm font-light leading-relaxed text-neutral-400">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" strokeWidth={1.25} />
              <p>
                Atendimento de segunda a sábado, das 9h às 20h. Reservamos
                poucas histórias por mês para manter o cuidado que cada uma
                merece.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Formulário */}
        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/15 bg-neutral-950 p-8 md:p-10"
            noValidate={false}
          >
            <p className="font-serif-site text-2xl font-medium text-white">
              Pedir orçamento
            </p>
            <p className="mt-2 text-sm font-light text-neutral-400">
              Sem compromisso — só uma boa conversa começando.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nome"
                  className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400"
                >
                  Seu nome *
                </label>
                <input
                  id="nome"
                  name="nome"
                  required
                  minLength={2}
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  className={inputClasse}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400"
                >
                  E-mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="voce@email.com"
                  className={inputClasse}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="whatsapp"
                  className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400"
                >
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(00) 00000-0000"
                  className={inputClasse}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="data"
                  className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400"
                >
                  Data pretendida
                </label>
                <input
                  id="data"
                  name="data"
                  type="date"
                  className={`${inputClasse} [color-scheme:dark]`}
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label
                  htmlFor="servico-select"
                  className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400"
                >
                  O que você quer eternizar? *
                </label>
                <Select
                  value={servico}
                  onValueChange={setServico}
                  required
                  name="servico"
                >
                  <SelectTrigger
                    id="servico-select"
                    className="h-12 w-full rounded-lg border border-white/15 bg-white/5 px-4 text-sm font-light text-white focus:ring-1 focus:ring-white/40"
                  >
                    <SelectValue placeholder="Escolha um momento" />
                  </SelectTrigger>
                  <SelectContent className="border-white/15 bg-neutral-900 text-white">
                    {servicos.map((s) => (
                      <SelectItem
                        key={s}
                        value={s}
                        className="font-light focus:bg-white/10 focus:text-white"
                      >
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label
                  htmlFor="mensagem"
                  className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400"
                >
                  Conte um pouco da história *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  minLength={10}
                  rows={5}
                  placeholder="Como se conheceram, o que sonham para o dia, o que mais te emociona nessa história..."
                  className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-light text-white placeholder:text-neutral-500 transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white/40"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-white py-4.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-black transition-all hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {enviando ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensagem
                  <Send className="h-4 w-4" strokeWidth={1.5} />
                </>
              )}
            </button>

            <p className="mt-5 text-center text-xs font-light leading-relaxed text-neutral-500">
              Seus dados ficam entre nós — usamos apenas para responder sua
              mensagem. Prometido.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
