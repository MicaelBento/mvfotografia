import Image from "next/image"
import { Instagram, Facebook, MessageCircle, ExternalLink } from "lucide-react"
import { estudioLocalizacao } from "@/lib/site-data"

const navegacao = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "O Estúdio" },
  { href: "#servicos", label: "Especialidades" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#experiencias", label: "Experiências & Projetos" },
  { href: "#faq", label: "Dúvidas Frequentes" },
  { href: "#contato", label: "Contato" },
]

const servicosFooter = [
  "Casais & Famílias",
  "Gestantes",
  "Aniversários",
  "Corporativo & Retratos",
  "Produtos & Marketing",
  "Projetos sob consulta",
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

export function Footer() {
  return (
    <footer className="border-t border-[#F6F5F0]/12 bg-[#141413]">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5">
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
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F6F5F0]">
                  Memória Viva Estúdio
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#9E9B93]">
                  Micael &amp; Vanusa
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-[#B8B5AC]">
              Estúdio próprio no Centro de Sombrio · SC (3º andar, Sala 302 —
              acima da CDL). Fotografia pessoal, corporativa, produtos e
              marketing com atendimento em Sombrio, região e sob consulta.
            </p>
          </div>

          {/* Navegação */}
          <nav className="md:col-span-3" aria-label="Links do rodapé">
            <p className="label-mini text-[#9E9B93]">Navegue</p>
            <ul className="mt-4 space-y-2.5">
              {navegacao.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm font-light text-[#D4D1C7] transition-colors hover:text-[#F6F5F0] focus-visible:!outline-[#F6F5F0]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Atuação */}
          <div className="md:col-span-2">
            <p className="label-mini text-[#9E9B93]">Atuação</p>
            <ul className="mt-4 space-y-2.5">
              {servicosFooter.map((s) => (
                <li key={s} className="text-sm font-light text-[#B8B5AC]">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="label-mini text-[#9E9B93]">Canais</p>
            <div className="mt-4 flex gap-2.5">
              {sociais.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#F6F5F0]/20 text-[#D4D1C7] transition-colors hover:border-[#F6F5F0] hover:bg-[#F6F5F0] hover:text-[#141413] focus-visible:!outline-[#F6F5F0]"
                >
                  {s.icone}
                </a>
              ))}
            </div>
            <div className="mt-5 space-y-1.5 text-xs font-light leading-relaxed text-[#9E9B93]">
              <p className="text-[#D4D1C7]">
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
                className="inline-flex items-center gap-1.5 pt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#F6F5F0] transition-colors hover:text-[#D4D1C7] focus-visible:!outline-[#F6F5F0]"
              >
                Abrir no Google Maps
                <ExternalLink className="h-3 w-3" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#F6F5F0]/10 pt-7 text-center md:flex-row md:text-left">
          <p className="text-xs font-light text-[#9E9B93]">
            © {new Date().getFullYear()} Memória Viva Estúdio · Micael &amp;
            Vanusa. Todos os direitos reservados.
          </p>
          <p className="text-xs font-light text-[#86837B]">
            Sombrio &amp; Região · Atendimento externo sob consulta
          </p>
        </div>
      </div>
    </footer>
  )
}
