import Image from "next/image"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function About() {
  return (
    <section id="historia" className="bg-[#ECEAE3] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-16">
        {/* Grade editorial da dupla */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
          <Reveal>
            <figure className="rounded-sm border border-[#141413]/12 bg-[#F6F5F0] p-2.5">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCD9D0]">
                <Image
                  src="/img/vanusa.jpg"
                  alt="Vanusa — Fotógrafa e Diretora de Retrato da Memória Viva Estúdio"
                  fill
                  sizes="(min-width: 1024px) 24vw, 80vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-center justify-between pt-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#57554F]">
                <span className="text-[#141413]">Vanusa</span>
                <span>Direção &amp; Retrato</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="sm:mt-10">
            <figure className="rounded-sm border border-[#141413]/12 bg-[#F6F5F0] p-2.5">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCD9D0]">
                <Image
                  src="/img/micael.jpg"
                  alt="Micael — Fotógrafo e Diretor de Luz da Memória Viva Estúdio"
                  fill
                  sizes="(min-width: 1024px) 24vw, 80vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-center justify-between pt-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#57554F]">
                <span className="text-[#141413]">Micael</span>
                <span>Luz &amp; Composição</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Texto */}
        <div className="lg:col-span-6">
          <SectionHeading
            label="02 · O Estúdio"
            titulo="Micael &amp; Vanusa,"
            destaque="dois olhares complementares"
          />

          <Reveal delay={0.12}>
            <div className="mt-7 space-y-4 text-base font-light leading-relaxed text-[#57554F]">
              <p>
                Desde 2013, construímos uma prática fotográfica baseada em
                escuta, clareza visual e técnica apurada. Micael conduz luz,
                enquadramento e precisão comercial; Vanusa conduz expressão,
                linguagem corporal e narrativa humana.
              </p>
              <p>
                Essa combinação permite transitar com naturalidade entre o
                cuidado que uma gestante ou família espera e a objetividade que
                uma empresa, executivo ou campanha de marketing exige — sempre
                com a mesma assinatura limpa e atemporal.
              </p>
            </div>

            <blockquote className="font-serif-site mt-8 border-l-2 border-[#141413] pl-5 text-2xl italic leading-snug text-[#141413]">
              “Direção segura deixa pessoas à vontade e transforma produtos e
              marcas em presença real.”
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
