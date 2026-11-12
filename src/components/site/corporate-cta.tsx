"use client"

import { ArrowUpRight } from "lucide-react"
import { WHATSAPP_NUMERO } from "@/lib/site-data"
import { irParaContato } from "@/lib/site-store"
import { Reveal } from "./reveal"

const WHATSAPP_DIAGNOSTICO_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  "Olá, Micael e Vanusa! Vim pela página Corporativo & Marketing e gostaria de agendar um diagnóstico visual de 15 minutos para a minha empresa."
)}`

export function CorporateCta() {
  return (
    <section
      id="diagnostico"
      className="relative overflow-hidden border-y border-white/8 bg-[#0E1012] py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_88%_50%,rgba(214,151,95,0.08),transparent_58%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:px-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6975F]">
            Seu próximo projeto começa aqui
          </p>
          <h2 className="mt-4 text-3xl font-light leading-[1.12] tracking-[-0.025em] text-[#F6F5F0] sm:text-4xl lg:text-[2.75rem]">
            A presença digital da sua empresa está pronta para o{" "}
            <span className="font-semibold text-[#D6975F]">próximo nível?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
          <p className="text-sm font-light leading-relaxed text-[#A8ABB0] md:text-[15px]">
            Elimine produções improvisadas e imagens sem padrão visual. Agende
            uma conversa objetiva de 15 minutos com Micael &amp; Vanusa para
            mapear as necessidades de retratos, produtos e campanhas do seu
            negócio.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => irParaContato("Outro / projeto sob consulta")}
              className="inline-flex items-center gap-3 rounded-[3px] bg-[#C98A52] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#B87A43] focus-visible:!outline-[#F6F5F0]"
            >
              Solicitar diagnóstico
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </button>

            <a
              href={WHATSAPP_DIAGNOSTICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-[3px] bg-[#1EE66B] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B2214] transition-colors hover:bg-[#19CF5F] focus-visible:!outline-[#F6F5F0]"
            >
              WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

