import Image from "next/image"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const aboutCopy: Record<
  SiteModo,
  { p1: string; p2: string; quote: string }
> = {
  pessoal: {
    p1: "Desde 2013, construímos uma fotografia guiada pela escuta e pelo olhar atento às pequenas conexões. Vanusa conduz gestos, acolhimento e espontaneidade; Micael cuida da luz, da composição e da harmonia visual de cada cena.",
    p2: "Acreditamos que as melhores fotografias de casal, gestante ou família nascem quando ninguém se sente diante de uma pose artificial — por isso criamos um ambiente calmo, seguro e sem pressa para viver o momento.",
    quote:
      "“O que você sente hoje merece ser visto com verdade daqui a vinte anos.”",
  },
  corporativo: {
    p1: "Desde 2013, unimos direção de pessoas e precisão técnica em produção comercial. Micael conduz arquitetura de luz, controle cromático e enquadramento estratégico; Vanusa dirige postura, naturalidade e expressão comunicativa.",
    p2: "Essa soma faz profissionais liberais, clínicas e equipes se sentirem seguros diante da câmera, enquanto produtos e campanhas ganham imagens limpas, coerentes com a identidade da marca e prontas para vender.",
    quote:
      "“Direção segura deixa lideranças à vontade e transforma produtos em desejo e confiança.”",
  },
}

interface AboutProps {
  modo: SiteModo
}

export function About({ modo }: AboutProps) {
  const theme = modoThemes[modo]
  const copy = aboutCopy[modo]

  return (
    <section id="historia" className={cn("py-24 md:py-32", theme.stoneBg)}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-16">
        {/* Grade editorial da dupla */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
          <Reveal>
            <figure
              className={cn(
                "rounded-sm border p-2.5",
                theme.borderLight,
                theme.lightBg
              )}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCD9D0]">
                <Image
                  src="/img/vanusa.jpg"
                  alt="Vanusa — Fotógrafa e Diretora de Retrato da Memória Viva Estúdio"
                  fill
                  sizes="(min-width: 1024px) 24vw, 80vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={cn(
                  "flex items-center justify-between pt-2.5 text-[10px] font-medium uppercase tracking-[0.18em]",
                  theme.mutedText
                )}
              >
                <span className={theme.inkText}>Vanusa</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="sm:mt-10">
            <figure
              className={cn(
                "rounded-sm border p-2.5",
                theme.borderLight,
                theme.lightBg
              )}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCD9D0]">
                <Image
                  src="/img/micael.jpg"
                  alt="Micael — Fotógrafo e Diretor de Luz da Memória Viva Estúdio"
                  fill
                  sizes="(min-width: 1024px) 24vw, 80vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={cn(
                  "flex items-center justify-between pt-2.5 text-[10px] font-medium uppercase tracking-[0.18em]",
                  theme.mutedText
                )}
              >
                <span className={theme.inkText}>Micael</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Texto */}
        <div className="lg:col-span-6">
          <SectionHeading
            modo={modo}
            titulo="Micael & Vanusa,"
            destaque="dois olhares complementares"
          />

          <Reveal delay={0.12}>
            <div
              className={cn(
                "mt-7 space-y-4 text-base font-light leading-relaxed",
                theme.mutedText
              )}
            >
              <p>{copy.p1}</p>
              <p>{copy.p2}</p>
            </div>

            <blockquote
              className={cn(
                "font-serif-site mt-8 border-l-2 pl-5 text-2xl italic leading-snug",
                modo === "pessoal" ? "border-[#7A5C48]" : "border-[#141413]",
                theme.inkText
              )}
            >
              {copy.quote}
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
