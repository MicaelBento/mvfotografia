"use client"

import { ExternalLink, MapPin, ZoomIn } from "lucide-react"
import { estudioLocalizacao } from "@/lib/site-data"
import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"

interface StudioMapProps {
  modo?: "preview" | SiteModo
}

/**
 * Mini-mapa interativo do estúdio com suporte nativo a zoom de pinça (dois dedos)
 * no player incorporado do Google Maps e atalho direto para abrir a rota externa.
 */
export function StudioMap({ modo = "corporativo" }: StudioMapProps) {
  const theme =
    modo === "pessoal" ? modoThemes.pessoal : modoThemes.corporativo

  return (
    <div
      id="mapa-estudio"
      className={cn(
        "mt-6 scroll-mt-24 overflow-hidden border",
        theme.cardRadius,
        theme.darkBorder,
        theme.darkCardBg
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3",
          theme.darkBorder
        )}
      >
        <div className="flex items-center gap-2">
          <MapPin
            className={cn("h-3.5 w-3.5", theme.darkAccentText)}
            strokeWidth={1.75}
          />
          <span
            className={cn(
              "text-[10px] font-medium uppercase tracking-[0.2em]",
              theme.darkMutedText
            )}
          >
            Mapa do Estúdio
          </span>
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 text-[11px] font-light",
            theme.darkMutedText
          )}
        >
          <ZoomIn className="h-3 w-3" strokeWidth={1.75} />
          Pinça (2 dedos) ou +/− para zoom
        </span>
      </div>

      <div
        className={cn(
          "relative w-full",
          modo === "pessoal" ? "bg-neutral-900" : "bg-[#242320]"
        )}
      >
        <iframe
          src={estudioLocalizacao.googleMapsEmbedUrl}
          title="Mapa interativo do Memória Viva Estúdio — 3º andar, Sala 302, acima da CDL de Sombrio"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-60 w-full border-0 contrast-[1.02] saturate-[0.82] sm:h-64"
        />
      </div>

      <div
        className={cn(
          "flex flex-col gap-3.5 border-t p-4 sm:flex-row sm:items-center sm:justify-between",
          theme.darkBorder
        )}
      >
        <div>
          <p className={cn("text-xs font-medium", theme.darkInkText)}>
            {estudioLocalizacao.referencia} · {estudioLocalizacao.complemento}
          </p>
          <p
            className={cn(
              "mt-0.5 text-[11px] font-light",
              theme.darkMutedText
            )}
          >
            {estudioLocalizacao.enderecoLinha} ·{" "}
            {estudioLocalizacao.cidadeEstado}
          </p>
        </div>

        <a
          href={estudioLocalizacao.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex shrink-0 items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:!outline-[#F6F5F0]",
            theme.controlRadius,
            theme.darkPrimaryBtn
          )}
        >
          Abrir no Google Maps
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
        </a>
      </div>
    </div>
  )
}

