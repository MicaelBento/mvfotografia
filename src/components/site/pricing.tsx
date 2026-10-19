"use client"

import { Check, Sparkles } from "lucide-react"
import { planos } from "@/lib/site-data"
import { irParaContato } from "@/lib/site-store"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

export function Pricing() {
  return (
    <section id="investimentos" className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          invertido
          label="Investimentos"
          titulo="Pacotes para cada"
          destaque="tamanho de história"
          descricao="Valores transparentes, sem surpresas. E como toda história é única, qualquer pacote pode ser personalizado."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {planos.map((plano, i) => (
            <Reveal key={plano.nome} delay={i * 0.12} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8 md:p-10",
                  plano.destaque
                    ? "border-white bg-white text-black lg:-translate-y-4 lg:scale-[1.03]"
                    : "border-white/15 bg-neutral-950 text-white"
                )}
              >
                {plano.destaque && (
                  <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-white ring-1 ring-white/30">
                    <Sparkles className="h-3 w-3" strokeWidth={1.5} />
                    Mais escolhido
                  </span>
                )}

                <p
                  className={cn(
                    "label-mini",
                    plano.destaque ? "text-neutral-500" : "text-neutral-400"
                  )}
                >
                  {plano.publico}
                </p>
                <h3 className="font-serif-site mt-3 text-3xl font-medium md:text-4xl">
                  {plano.nome}
                </h3>
                <p
                  className={cn(
                    "font-serif-site mt-6 border-b pb-8 text-5xl font-medium leading-none",
                    plano.destaque
                      ? "border-neutral-200"
                      : "border-white/15"
                  )}
                >
                  {plano.preco}
                  {plano.preco.startsWith("R$") && (
                    <span className="mt-2 block text-xs font-normal uppercase tracking-[0.2em] opacity-60">
                      valor único
                    </span>
                  )}
                  {plano.preco === "Sob consulta" && (
                    <span className="mt-2 block text-xs font-normal uppercase tracking-[0.2em] opacity-60">
                      orçamento em 24h
                    </span>
                  )}
                </p>

                <ul className="mt-8 flex-1 space-y-4">
                  {plano.itens.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plano.destaque ? "text-black" : "text-white"
                        )}
                        strokeWidth={2}
                      />
                      <span
                        className={cn(
                          "font-light",
                          plano.destaque ? "text-neutral-700" : "text-neutral-300"
                        )}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() =>
                    irParaContato(
                      plano.nome === "Casamentos"
                        ? "Casamento"
                        : plano.nome === "Essencial"
                          ? "Ensaio de casal"
                          : "Ensaio de família"
                    )
                  }
                  className={cn(
                    "mt-10 rounded-full py-4 text-[11px] font-semibold uppercase tracking-[0.28em] transition-all",
                    plano.destaque
                      ? "bg-black text-white hover:bg-neutral-800"
                      : "border border-white/40 text-white hover:bg-white hover:text-black"
                  )}
                >
                  Quero este
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-14 max-w-2xl text-center text-sm font-light leading-relaxed text-neutral-400">
            Aniversários e recém-nascidos têm valores a partir de{" "}
            <span className="text-white">R$ 690</span>. Parcelamos em até 6x
            sem juros — e sim, viajamos: custos de deslocamento à parte, a
            vontade de conhecer sua história é por nossa conta.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
