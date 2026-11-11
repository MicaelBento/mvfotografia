"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { categorias, galeria, type CategoriaKey } from "@/lib/site-data"
import { useSiteStore } from "@/lib/site-store"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

type Filtro = CategoriaKey | "todas"

export function Gallery() {
  const categoriaAtiva = useSiteStore((s) => s.categoriaAtiva)
  const setCategoria = useSiteStore((s) => s.setCategoria)
  const [indice, setIndice] = useState<number | null>(null)

  const filtradas = useMemo(
    () =>
      categoriaAtiva === "todas"
        ? galeria
        : galeria.filter((f) => f.categoria === categoriaAtiva),
    [categoriaAtiva]
  )

  const nomeCategoria = useCallback((key: CategoriaKey) => {
    return categorias.find((c) => c.key === key)?.nome ?? ""
  }, [])

  const anterior = useCallback(
    () =>
      setIndice((i) =>
        i === null ? null : (i - 1 + filtradas.length) % filtradas.length
      ),
    [filtradas.length]
  )
  const proximo = useCallback(
    () => setIndice((i) => (i === null ? null : (i + 1) % filtradas.length)),
    [filtradas.length]
  )

  useEffect(() => {
    if (indice === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") anterior()
      if (e.key === "ArrowRight") proximo()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [indice, anterior, proximo])

  const atual = indice !== null ? filtradas[indice] : null

  const opcoes: { key: Filtro; label: string }[] = [
    { key: "todas", label: "Todas" },
    ...categorias.map((c) => ({ key: c.key as Filtro, label: c.nome })),
  ]

  return (
    <section id="portfolio" className="bg-[#ECEAE3] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="04 · Portfólio"
          titulo="Seleção de trabalhos"
          destaque="e ensaios"
          descricao="Fidelidade de cor, direção de luz e espontaneidade. Clique em qualquer fotografia para ampliar."
        />

        {/* Filtros */}
        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Filtrar portfólio por categoria"
            className="mt-10 flex flex-wrap items-center gap-2"
          >
            {opcoes.map((o) => (
              <button
                key={o.key}
                role="tab"
                aria-selected={categoriaAtiva === o.key}
                onClick={() => setCategoria(o.key)}
                className={cn(
                  "rounded-sm border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors",
                  categoriaAtiva === o.key
                    ? "border-[#141413] bg-[#141413] text-[#F6F5F0]"
                    : "border-[#141413]/20 bg-[#F6F5F0]/70 text-[#57554F] hover:border-[#141413] hover:text-[#141413]"
                )}
              >
                {o.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grade masonry */}
        <div className="masonry mt-10">
          {filtradas.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.05}
              className="masonry-item"
            >
              <button
                type="button"
                onClick={() => setIndice(i)}
                className="group relative block w-full overflow-hidden rounded-sm border border-[#141413]/10 bg-[#DCD9D0]"
                style={{ aspectRatio: `${img.w} / ${img.h}` }}
                aria-label={`Ampliar foto: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1280px) 24vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-[#141413]/75 via-transparent to-transparent p-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-left text-[10px] font-medium uppercase tracking-[0.2em] text-[#F6F5F0]">
                    {nomeCategoria(img.categoria)}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog
        open={indice !== null}
        onOpenChange={(open) => {
          if (!open) setIndice(null)
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="fixed left-0 top-0 z-[70] flex h-screen w-screen max-w-none translate-x-0 translate-y-0 flex-col items-center justify-center gap-4 overflow-hidden rounded-none border-0 bg-[#141413] p-4 sm:p-8"
        >
          {atual && (
            <>
              <DialogTitle className="sr-only">
                Visualização ampliada de fotografia
              </DialogTitle>
              <DialogDescription className="sr-only">
                Use as setas do teclado para navegar entre as imagens e Esc para
                fechar.
              </DialogDescription>
              <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
                <Image
                  key={atual.src}
                  src={atual.src}
                  alt={atual.alt}
                  width={atual.w}
                  height={atual.h}
                  sizes="90vw"
                  className="max-h-[78vh] w-auto max-w-full rounded-sm object-contain"
                  priority
                />
              </div>

              <div className="flex w-full max-w-3xl flex-col items-center gap-1.5 pb-2 text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9E9B93]">
                  {nomeCategoria(atual.categoria)}
                </p>
                <p className="text-sm font-light text-[#E6E4DD] md:text-base">
                  {atual.alt}
                </p>
                <p className="text-xs tabular-nums text-[#86837B]">
                  {indice !== null ? indice + 1 : 0} / {filtradas.length}
                </p>
              </div>
            </>
          )}

          {/* Controles */}
          <button
            type="button"
            onClick={anterior}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-[#F6F5F0]/20 bg-[#141413]/70 text-[#F6F5F0] backdrop-blur transition-colors hover:border-[#F6F5F0] hover:bg-[#F6F5F0] hover:text-[#141413] focus-visible:!outline-[#F6F5F0] md:left-6"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={proximo}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-[#F6F5F0]/20 bg-[#141413]/70 text-[#F6F5F0] backdrop-blur transition-colors hover:border-[#F6F5F0] hover:bg-[#F6F5F0] hover:text-[#141413] focus-visible:!outline-[#F6F5F0] md:right-6"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => setIndice(null)}
            aria-label="Fechar visualização"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-sm border border-[#F6F5F0]/20 bg-[#141413]/70 text-[#F6F5F0] backdrop-blur transition-colors hover:border-[#F6F5F0] hover:bg-[#F6F5F0] hover:text-[#141413] focus-visible:!outline-[#F6F5F0]"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  )
}
