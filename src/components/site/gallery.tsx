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
    () => setIndice((i) => (i === null ? null : (i - 1 + filtradas.length) % filtradas.length)),
    [filtradas.length]
  )
  const proximo = useCallback(
    () => setIndice((i) => (i === null ? null : (i + 1) % filtradas.length)),
    [filtradas.length]
  )

  // Navegação por teclado dentro do lightbox
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
    <section id="portfolio" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          label="Portfólio"
          titulo="Histórias que"
          destaque="ficaram para sempre"
          descricao="Uma seleção de instantes que tivemos o privilégio de testemunhar. Toque em qualquer imagem para ampliar."
        />

        {/* Filtros */}
        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Filtrar portfólio por categoria"
            className="mt-12 flex flex-wrap items-center justify-center gap-2.5"
          >
            {opcoes.map((o) => (
              <button
                key={o.key}
                role="tab"
                aria-selected={categoriaAtiva === o.key}
                onClick={() => setCategoria(o.key)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all",
                  categoriaAtiva === o.key
                    ? "border-black bg-black text-white"
                    : "border-neutral-300 text-neutral-500 hover:border-black hover:text-black"
                )}
              >
                {o.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grade masonry */}
        <div className="masonry mt-12">
          {filtradas.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.08}
              className="masonry-item"
            >
              <button
                type="button"
                onClick={() => setIndice(i)}
                className="group relative block w-full overflow-hidden bg-neutral-100"
                style={{ aspectRatio: `${img.w} / ${img.h}` }}
                aria-label={`Ampliar foto: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1280px) 24vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-left text-[10px] font-medium uppercase tracking-[0.25em] text-white">
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
          className="fixed inset-0 z-[70] flex h-screen w-screen max-w-none translate-x-0 translate-y-0 flex-col items-center justify-center gap-4 overflow-hidden rounded-none border-0 bg-black p-4 left-0 top-0 sm:p-8"
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
                  className="max-h-[78vh] w-auto max-w-full rounded-sm object-contain shadow-2xl"
                  priority
                />
              </div>

              <div className="flex w-full max-w-3xl flex-col items-center gap-2 pb-2">
                <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                  {nomeCategoria(atual.categoria)}
                </p>
                <p className="font-serif-site text-xl italic text-neutral-200 md:text-2xl">
                  {atual.alt}
                </p>
                <p className="text-xs tabular-nums text-neutral-500">
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
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-all hover:border-white hover:bg-white hover:text-black md:left-6"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={1.25} />
          </button>
          <button
            type="button"
            onClick={proximo}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-all hover:border-white hover:bg-white hover:text-black md:right-6"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={1.25} />
          </button>
          <button
            type="button"
            onClick={() => setIndice(null)}
            aria-label="Fechar visualização"
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-all hover:border-white hover:bg-white hover:text-black"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  )
}
