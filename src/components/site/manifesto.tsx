import { stats } from "@/lib/site-data"
import { Reveal } from "./reveal"

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-[#141413] py-20 text-[#F6F5F0] md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="label-mini text-[#9E9B93]">01 · Estrutura &amp; Método</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.1] tracking-[-0.025em] md:text-4xl">
              Estrutura própria para produzir com consistência.
            </h2>
          </div>

          <div className="space-y-4 text-sm font-light leading-relaxed text-[#B8B5AC] md:text-base lg:col-span-7">
            <p>
              Operamos em estúdio próprio no Centro de Sombrio (3º andar, Sala
              302 — acima da CDL), equipado com iluminação profissional,
              climatização e privacidade para gestantes e famílias, além de
              rigor técnico e fidelidade de cor para retratos corporativos,
              catálogos de produtos e campanhas.
            </p>
            <p>
              Quando a produção pede ambiente externo ou atendimento in loco,
              levamos nossa estrutura móvel até empresas, consultórios,
              residências e locações em Sombrio, toda a região e outras
              localidades sob consulta.
            </p>
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
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#9E9B93]">
                {s.rotulo}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
