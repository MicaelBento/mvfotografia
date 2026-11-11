"use client"

import { ExternalLink, MapPin, ZoomIn } from "lucide-react"
import { estudioLocalizacao } from "@/lib/site-data"

/**
 * Mini-mapa interativo do estúdio com suporte nativo a zoom de pinça (dois dedos)
 * no player incorporado do Google Maps e atalho direto para abrir a rota externa.
 */
export function StudioMap() {
  return (
    <div
      id="mapa-estudio"
      className="mt-6 overflow-hidden rounded-md border border-[#F6F5F0]/15 bg-[#1C1C1A]"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F6F5F0]/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-[#9E9B93]" strokeWidth={1.75} />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8B5AC]">
            Mapa do Estúdio
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-light text-[#9E9B93]">
          <ZoomIn className="h-3 w-3" strokeWidth={1.75} />
          Pinça (2 dedos) ou +/− para zoom
        </span>
      </div>

      <div className="relative w-full bg-[#242320]">
        <iframe
          src={estudioLocalizacao.googleMapsEmbedUrl}
          title="Mapa interativo do Memória Viva Estúdio — 3º andar, Sala 302, acima da CDL de Sombrio"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-60 w-full border-0 contrast-[1.02] saturate-[0.82] sm:h-64"
        />
      </div>

      <div className="flex flex-col gap-3.5 border-t border-[#F6F5F0]/10 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium text-[#F6F5F0]">
            {estudioLocalizacao.referencia} · {estudioLocalizacao.complemento}
          </p>
          <p className="mt-0.5 text-[11px] font-light text-[#9E9B93]">
            {estudioLocalizacao.enderecoLinha} ·{" "}
            {estudioLocalizacao.cidadeEstado}
          </p>
        </div>

        <a
          href={estudioLocalizacao.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-[#F6F5F0] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141413] transition-colors hover:bg-[#E4E1D8] focus-visible:!outline-[#F6F5F0]"
        >
          Abrir no Google Maps
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
        </a>
      </div>
    </div>
  )
}

