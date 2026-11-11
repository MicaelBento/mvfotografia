import { stats } from "@/lib/site-data"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { Reveal } from "./reveal"

const manifestoTexto: Record<
  SiteModo,
  { titulo: string; p1: string; p2: string }
> = {
  pessoal: {
    titulo: "Acolhimento e método para fotografar sem pressa.",
    p1: "Nosso estúdio próprio no Centro de Sombrio (3º andar, Sala 302 — acima da CDL) foi preparado com iluminação suave, climatização e total privacidade para que casais, gestantes e famílias se sintam à vontade do primeiro ao último clique.",
    p2: "Quando a sua história pede ambiente aberto, casa da família, praia ou serra, levamos nossa estrutura até você em Sombrio, toda a região e outras cidades sob consulta.",
  },
  corporativo: {
    titulo: "Estrutura própria para produzir com consistência.",
    p1: "Operamos em estúdio próprio no Centro de Sombrio (3º andar, Sala 302 — acima da CDL) equipado com controle completo de iluminação, reprodução fiel de cor para catálogos de produtos, retratos executivos e criativos publicitários.",
    p2: "Para padronizar equipes ou fotografar sua operação em andamento, levamos nosso set portátil até empresas, consultórios, clínicas e indústrias em Sombrio, toda a região e outras cidades sob consulta.",
  },
}

interface ManifestoProps {
  modo: SiteModo
}

export function Manifesto({ modo }: ManifestoProps) {
  const theme = modoThemes[modo]
  const texto = manifestoTexto[modo]

  return (
    <section
      id="manifesto"
      className={cn("py-20 text-[#F6F5F0] md:py-28", theme.darkBg)}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="label-mini text-[#B5AAA0]">
              01 · Estrutura &amp; Método
            </p>
            <h2
              className={cn(
                "mt-4 text-3xl font-medium leading-[1.1] tracking-[-0.025em] md:text-4xl",
                modo === "pessoal" && "font-serif-site text-4xl md:text-5xl"
              )}
            >
              {texto.titulo}
            </h2>
          </div>

          <div className="space-y-4 text-sm font-light leading-relaxed text-[#C5BBB1] md:text-base lg:col-span-7">
            <p>{texto.p1}</p>
            <p>{texto.p2}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-[#F6F5F0]/12 pt-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.rotulo}
              delay={i * 0.06}
              className="md:border-l md:border-[#F6F5F0]/10 md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <p className="text-3xl font-medium tracking-[-0.02em] text-[#F6F5F0] md:text-4xl">
                {s.valor}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#A8A199]">
                {s.rotulo}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
