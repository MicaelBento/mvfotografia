import Image from "next/image"
import { Instagram, Facebook, MessageCircle, Heart } from "lucide-react"

const navegacao = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "Nossa História" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#investimentos", label: "Investimentos" },
  { href: "#faq", label: "Perguntas Frequentes" },
  { href: "#contato", label: "Contato" },
]

const servicosFooter = [
  "Casais",
  "Famílias",
  "Gestantes",
  "Casamentos",
  "Aniversários",
  "Recém-nascidos",
]

const sociais = [
  {
    href: "https://instagram.com/micalevanusa",
    label: "Instagram",
    icone: <Instagram className="h-5 w-5" strokeWidth={1.25} />,
  },
  {
    href: "https://wa.me/5548988000000",
    label: "WhatsApp",
    icone: <MessageCircle className="h-5 w-5" strokeWidth={1.25} />,
  },
  {
    href: "https://facebook.com/micalevanusa",
    label: "Facebook",
    icone: <Facebook className="h-5 w-5" strokeWidth={1.25} />,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 pb-8 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <span className="relative block h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/20">
                <Image
                  src="/logo.png"
                  alt="Logotipo Memória Viva Fotografia"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-white">
                  Micael &amp; Vanusa
                </p>
                <p className="mt-1.5 text-[9px] uppercase tracking-[0.42em] text-neutral-400">
                  Memória Viva Fotografia
                </p>
              </div>
            </div>
            <p className="font-serif-site mt-6 max-w-sm text-xl italic leading-snug text-neutral-300">
              “O tempo passa. A memória fica.”
            </p>
          </div>

          {/* Navegação */}
          <nav className="md:col-span-3" aria-label="Links do rodapé">
            <p className="label-mini text-neutral-500">Navegue</p>
            <ul className="mt-5 space-y-3">
              {navegacao.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm font-light text-neutral-400 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <div className="md:col-span-2">
            <p className="label-mini text-neutral-500">Eternizamos</p>
            <ul className="mt-5 space-y-3">
              {servicosFooter.map((s) => (
                <li
                  key={s}
                  className="text-sm font-light text-neutral-400"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="label-mini text-neutral-500">Siga</p>
            <div className="mt-5 flex gap-3">
              {sociais.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-neutral-300 transition-all hover:border-white hover:bg-white hover:text-black"
                >
                  {s.icone}
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs font-light leading-relaxed text-neutral-500">
              Florianópolis · SC
              <br />
              Seg a Sáb, 9h às 20h
            </p>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-xs font-light text-neutral-500">
            © {new Date().getFullYear()} Micael &amp; Vanusa · Memória Viva
            Fotografia. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5 text-xs font-light text-neutral-500">
            Feito com
            <Heart
              className="h-3.5 w-3.5 fill-neutral-600 text-neutral-600"
              strokeWidth={0}
              aria-hidden="true"
            />
            para histórias que não podem ser esquecidas.
          </p>
        </div>
      </div>
    </footer>
  )
}
