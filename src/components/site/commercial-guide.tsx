"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  UserCheck,
  Package,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Smartphone,
  Globe,
  ShoppingBag,
} from "lucide-react"
import { irParaContato } from "@/lib/site-store"
import { cn } from "@/lib/utils"

type AbaComercial = "corporativo" | "produtos"

interface GuiaItem {
  id: AbaComercial
  tituloAba: string
  iconeAba: React.ReactNode
  tituloPrincipal: string
  subtitulo: string
  imagem: string
  legendaImagem: string
  oQueE: string
  paraQuem: string
  ondeFazemos: string
  pilares: {
    titulo: string
    descricao: string
  }[]
  aplicacoes: {
    icone: React.ReactNode
    rotulo: string
  }[]
  servicoContato: string
  botaoTexto: string
}

const guias: Record<AbaComercial, GuiaItem> = {
  corporativo: {
    id: "corporativo",
    tituloAba: "Corporativo & Retratos",
    iconeAba: <UserCheck className="h-4 w-4" strokeWidth={1.75} />,
    tituloPrincipal: "Retratos que comunicam autoridade e confiança",
    subtitulo: "Para profissionais liberais, especialistas, clínicas e lideranças empresariais.",
    imagem: "/img/corporativo-1.jpg",
    legendaImagem: "Retrato de posicionamento com iluminação de estúdio suave e postura natural",
    oQueE:
      "Uma sessão de retratos profissionais direcionada para quem precisa de uma imagem de alto valor percebido. Esqueça poses artificiais ou fotos de celular: trabalhamos direção corporal sutil, iluminação precisa e enquadramentos modernos que transmitem competência e acessibilidade.",
    paraQuem:
      "Médicos, advogados, psicólogos, arquitetos, dentistas, contadores, consultores, corretores, executivos e equipes de clínicas e empresas que precisam padronizar sua imagem.",
    ondeFazemos:
      "No nosso estúdio próprio no Centro de Sombrio (climatizado, com provador e espelho) ou levamos nossa estrutura móvel de iluminação até o seu consultório, escritório ou empresa em Sombrio e região.",
    pilares: [
      {
        titulo: "1. Retrato de Posicionamento (Headshots)",
        descricao:
          "Fotos individuais com múltiplos ângulos, trocas de roupa e esquemas de luz pensados para sua área de atuação.",
      },
      {
        titulo: "2. Padronização de Equipe & Corpo Clínico",
        descricao:
          "Todos os sócios e colaboradores fotografados com a mesma luz, fundo e identidade visual uniforme para o site da empresa.",
      },
      {
        titulo: "3. Estrutura & Rotina em Ação (Lifestyle)",
        descricao:
          "Registros humanizados da sua recepção, salas de atendimento, equipamentos e interação com clientes sem engessamento.",
      },
    ],
    aplicacoes: [
      { icone: <Smartphone className="h-3.5 w-3.5" />, rotulo: "WhatsApp Profissional" },
      { icone: <Globe className="h-3.5 w-3.5" />, rotulo: "LinkedIn & Site Oficial" },
      { icone: <Building2 className="h-3.5 w-3.5" />, rotulo: "Apresentações & Crachás" },
      { icone: <Sparkles className="h-3.5 w-3.5" />, rotulo: "Artigos, Palestras & Imprensa" },
    ],
    servicoContato: "Fotografia corporativa & retratos",
    botaoTexto: "Planejar Retrato Corporativo no WhatsApp",
  },
  produtos: {
    id: "produtos",
    tituloAba: "Produtos & Marketing",
    iconeAba: <Package className="h-4 w-4" strokeWidth={1.75} />,
    tituloPrincipal: "Fotografia de produto que valoriza e converte",
    subtitulo: "Para e-commerces, marcas de moda, cosméticos, artesanato, indústrias e criadores.",
    imagem: "/img/produtos-1.jpg",
    legendaImagem: "Still life comercial sobre pedra travertino com fidelidade de cores e texturas",
    oQueE:
      "Produção fotográfica comercial de produto com iluminação profissional de estúdio. Criamos desde fotos limpas em fundo neutro (still de catálogo para cadastro e vendas) até composições publicitárias ambientadas (lifestyle) que geram desejo imediato e valorizam sua marca.",
    paraQuem:
      "Lojas virtuais, confecções, calçados, cosméticos, joias e semijoias, cerâmicas, velas, papelarias, alimentos embalados, cardápios e marcas locais que vendem online ou pelo WhatsApp.",
    ondeFazemos:
      "Você pode enviar ou entregar os produtos diretamente no nosso estúdio no Centro de Sombrio, ou realizamos a produção na sua fábrica, loja ou locação externa na região.",
    pilares: [
      {
        titulo: "1. Catálogo & E-commerce (Still de Produto)",
        descricao:
          "Fotos limpas com fundo uniforme, luz difusa sem reflexos indesejados e fidelidade exata de cores, acabamentos e texturas.",
      },
      {
        titulo: "2. Campanha & Editorial de Marca (Lifestyle)",
        descricao:
          "Produtos ambientados em cenários elegantes com props (elementos de cena), texturas minerais e modelos para campanhas sazonais.",
      },
      {
        titulo: "3. Formatos para Anúncios (Tráfego Pago)",
        descricao:
          "Arquivos prontos nos formatos verticais nativos (9:16 para Stories/Reels) e 4:5 para o Feed, gerando maior taxa de clique.",
      },
    ],
    aplicacoes: [
      { icone: <ShoppingBag className="h-3.5 w-3.5" />, rotulo: "Lojas Virtuais & E-commerce" },
      { icone: <Smartphone className="h-3.5 w-3.5" />, rotulo: "Catálogo PDF & WhatsApp Business" },
      { icone: <Sparkles className="h-3.5 w-3.5" />, rotulo: "Anúncios Meta Ads (9:16 e 4:5)" },
      { icone: <Globe className="h-3.5 w-3.5" />, rotulo: "Banners de Site & Redes Sociais" },
    ],
    servicoContato: "Produtos & Marketing",
    botaoTexto: "Planejar Produção de Produtos no WhatsApp",
  },
}

export function CommercialGuide() {
  const [abaAtiva, setAbaAtiva] = useState<AbaComercial>("corporativo")
  const atual = guias[abaAtiva]

  return (
    <div
      id="guia-comercial"
      className="mt-16 rounded-md border border-[#141413]/12 bg-[#FDFCFA] p-6 shadow-sm md:p-10"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="label-mini text-[#57554F]">Guia Prático · Negócios &amp; Marcas</span>
          <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-[#141413] md:text-3xl">
            Como funcionam as frentes comerciais
          </h3>
          <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-[#57554F]">
            Entenda o que está incluído, onde as fotos são feitas e como aplicá-las para gerar autoridade profissional e vendas.
          </p>
        </div>

        {/* Seletor de Abas */}
        <div
          role="tablist"
          aria-label="Escolher guia comercial"
          className="flex shrink-0 items-center gap-1.5 rounded-sm border border-[#141413]/12 bg-[#ECEAE3]/70 p-1"
        >
          {(["corporativo", "produtos"] as const).map((aba) => {
            const ativa = abaAtiva === aba
            return (
              <button
                key={aba}
                type="button"
                role="tab"
                aria-selected={ativa}
                onClick={() => setAbaAtiva(aba)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-sm px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-all focus-visible:!outline-[#141413]",
                  ativa
                    ? "bg-[#141413] text-[#F6F5F0] shadow-sm"
                    : "text-[#57554F] hover:bg-[#F6F5F0] hover:text-[#141413]"
                )}
              >
                {guias[aba].iconeAba}
                {guias[aba].tituloAba}
              </button>
            )
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={atual.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid gap-8 border-t border-[#141413]/10 pt-8 lg:grid-cols-12 lg:gap-12"
        >
          {/* Coluna visual esquerda */}
          <div className="lg:col-span-5">
            <figure className="overflow-hidden rounded-sm border border-[#141413]/12 bg-[#ECEAE3] p-2.5">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#DCD9D0]">
                <Image
                  src={atual.imagem}
                  alt={atual.legendaImagem}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="pt-2.5 text-[11px] font-light leading-relaxed text-[#57554F]">
                {atual.legendaImagem}
              </figcaption>
            </figure>

            {/* Onde fotografamos */}
            <div className="mt-5 rounded-sm border border-[#141413]/10 bg-[#ECEAE3]/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#141413]">
                Onde realizamos a sessão
              </p>
              <p className="mt-1.5 text-xs font-light leading-relaxed text-[#57554F]">
                {atual.ondeFazemos}
              </p>
            </div>
          </div>

          {/* Coluna de conteúdo explicativo */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#57554F]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#141413]" />
                  {atual.subtitulo}
                </span>
                <h4 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-[#141413]">
                  {atual.tituloPrincipal}
                </h4>
                <p className="mt-3 text-sm font-light leading-relaxed text-[#57554F]">
                  {atual.oQueE}
                </p>
              </div>

              {/* 3 Pilares práticos */}
              <div className="space-y-3.5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#141413]">
                  Formatos e tipos de foto incluídos
                </p>
                <div className="grid gap-3 sm:grid-cols-1">
                  {atual.pilares.map((p) => (
                    <div
                      key={p.titulo}
                      className="rounded-sm border border-[#141413]/10 bg-[#F6F5F0]/80 p-3.5"
                    >
                      <p className="text-xs font-medium text-[#141413]">{p.titulo}</p>
                      <p className="mt-1 text-xs font-light leading-relaxed text-[#57554F]">
                        {p.descricao}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Onde você usa as fotos */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#141413]">
                  Onde você usa essas fotos na prática
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {atual.aplicacoes.map((app) => (
                    <span
                      key={app.rotulo}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-[#141413]/12 bg-[#ECEAE3] px-3 py-1.5 text-xs font-light text-[#141413]"
                    >
                      {app.icone}
                      {app.rotulo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ação rápida */}
            <div className="mt-8 flex flex-col gap-3 border-t border-[#141413]/10 pt-6 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => irParaContato(atual.servicoContato)}
                className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#141413] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F6F5F0] transition-colors hover:bg-[#2E2E2B]"
              >
                {atual.botaoTexto}
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>

              <span className="text-center text-xs font-light text-[#57554F] sm:text-left">
                Sem burocracia: abre a conversa com a mensagem pré-preenchida no WhatsApp.
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

