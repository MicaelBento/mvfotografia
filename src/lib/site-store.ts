"use client"

import { create } from "zustand"
import type { CategoriaKey } from "@/lib/site-data"

export interface ContextoProposta {
  servico: string
  momento: string
  formato?: string
  extras: string[]
}

interface SiteStore {
  categoriaAtiva: CategoriaKey | "todas"
  setCategoria: (c: CategoriaKey | "todas") => void
  servicoSelecionado: string
  setServico: (s: string) => void
  contextoProposta: ContextoProposta | null
  setContextoProposta: (c: ContextoProposta | null) => void
}

export const useSiteStore = create<SiteStore>((set) => ({
  categoriaAtiva: "todas",
  setCategoria: (categoriaAtiva) => set({ categoriaAtiva }),
  servicoSelecionado: "",
  setServico: (servicoSelecionado) => set({ servicoSelecionado }),
  contextoProposta: null,
  setContextoProposta: (contextoProposta) => set({ contextoProposta }),
}))

export function irParaGaleria(categoria: CategoriaKey) {
  useSiteStore.getState().setCategoria(categoria)
  document
    .getElementById("portfolio")
    ?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function irParaContato(alvo?: string | ContextoProposta) {
  const store = useSiteStore.getState()
  if (typeof alvo === "string") {
    store.setServico(alvo)
    store.setContextoProposta(null)
  } else if (alvo) {
    store.setServico(alvo.servico)
    store.setContextoProposta(alvo)
  }
  document
    .getElementById("contato")
    ?.scrollIntoView({ behavior: "smooth", block: "start" })
}
