import Image from "next/image"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function About() {
  return (
    <section id="historia" className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Colagem de fotos */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Reveal className="relative z-10 aspect-[4/5] w-[82%] overflow-hidden">
            <Image
              src="/img/bio-2.jpg"
              alt="Micael e Vanusa fotografando um casamento"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover grayscale transition-transform duration-700 hover:scale-105"
            />
          </Reveal>
          <Reveal
            delay={0.2}
            className="absolute -bottom-10 right-0 z-20 aspect-square w-[46%] overflow-hidden border-[6px] border-neutral-50"
          >
            <Image
              src="/img/bio-1.jpg"
              alt="Detalhe do equipamento fotográfico do casal"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover grayscale transition-transform duration-700 hover:scale-105"
            />
          </Reveal>
          {/* Moldura decorativa */}
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-40 w-40 border-l border-t border-neutral-300"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-40 w-40 border-b border-r border-neutral-300"
          />
        </div>

        {/* Texto */}
        <div>
          <SectionHeading
            centralizado={false}
            label="Nossa história"
            titulo="Um casal, duas câmeras"
            destaque="e a mesma paixão"
          />

          <Reveal delay={0.15}>
            <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-neutral-600">
              <p>
                Tudo começou em 2013, com uma câmera emprestada e a descoberta
                de que fotografar pessoas era a nossa forma de amar o mundo.
                Micael enxerga a luz onde ninguém vê; Vanusa encontra a história
                que ninguém conta. Juntos, viramos uma dupla impossível de
                separar — dentro e fora dos bastidores.
              </p>
              <p>
                Hoje, mais de 750 histórias depois, seguimos com a mesma
                inquietação do primeiro clique: fazer com que cada pessoa se
                veja nas fotos não como gostaria de ser, mas como realmente é —
                porque é assim que a memória permanece viva.
              </p>
            </div>

            <blockquote className="font-serif-site mt-10 border-l-2 border-neutral-900 pl-6 text-2xl italic leading-snug text-neutral-800 md:text-3xl">
              “Não fotografamos cenas. Fotografamos pessoas sendo elas mesmas —
              e isso muda tudo.”
            </blockquote>
            <p className="mt-4 pl-6 text-[11px] uppercase tracking-[0.3em] text-neutral-500">
              — Micael &amp; Vanusa
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
