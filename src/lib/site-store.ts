"use client"

import { create } from "zustand"
import type { CategoriaKey } from "@/lib/site-data"

interface SiteStore {
  categoriaAtiva: CategoriaKey | "todas"
  setCategoria: (c: CategoriaKey | "todas") => void
  servicoSelecionado: string
  setServico: (s: string) => void
}

export const useSiteStore = create<SiteStore>((set) => ({
  categoriaAtiva: "todas",
  setCategoria: (categoriaAtiva) => set({ categoriaAtiva }),
  servicoSelecionado: "",
  setServico: (servicoSelecionado) => set({ servicoSelecionado }),
}))

export function irParaGaleria(categoria: CategoriaKey) {
  useSiteStore.getState().setCategoria(categoria)
  document
    .getElementById("portfolio")
    ?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function irParaContato(servico?: string) {
  if (servico) useSiteStore.getState().setServico(servico)
  document
    .getElementById("contato")
    ?.scrollIntoView({ behavior: "smooth", block: "start" })
}
