import { stats } from "@/lib/site-data"
import { Reveal } from "./reveal"

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Reveal className="text-center">
          <p className="label-mini text-neutral-500">Nosso compromisso</p>
          <blockquote className="font-serif-site mx-auto mt-6 max-w-4xl text-3xl font-medium leading-snug text-neutral-900 md:text-5xl md:leading-tight">
            Não buscamos a pose perfeita. Buscamos o momento em que você{" "}
            <em className="italic text-neutral-400">
              esquece que a câmera existe.
            </em>
          </blockquote>
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-neutral-600">
            Cada história tem um ritmo próprio, e a nossa missão é escutá-lo
            antes de apertar o obturador. Por isso não fazemos apenas
            fotografias: construímos memórias que serão revisitadas — e
            sentidas — por gerações.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.rotulo}
              delay={i * 0.1}
              className="text-center md:border-l md:border-neutral-200 md:first:border-l-0"
            >
              <p className="font-serif-site text-5xl font-medium text-neutral-900 md:text-6xl">
                {s.valor}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                {s.rotulo}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
