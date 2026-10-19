# Worklog — Projeto Micael & Vanusa (Memória Viva Fotografia)

---
Task ID: 1
Agent: main (Z.ai)
Task: Construir site frontend em TS/TSX para estúdio de fotografia "Micael & Vanusa — Memória Viva Fotografia", usando deniseelenine.com como referência (sem copiar), com logo fornecido pelo usuário.

Work Log:
- Analisado site de referência (deniseelenine.com): estrutura de seções de fotografia (casais, famílias, gestantes, casamentos, aniversários, investimentos, FAQ, bio)
- Analisado logo enviado (fundo preto, círculo branco com respingos de tinta, monograma M/V geométrico) → definida estética preto & branco
- Inicializado ambiente fullstack (Next.js 16 + TypeScript + Tailwind 4 + shadcn/ui)
- Criados favicon/apple-icon a partir do monograma do logo (PIL)
- Buscadas e baixadas 36 imagens reais de fotografia via z-ai image-search (8 categorias)
- Otimizadas imagens para web (17MB → 6MB, resize máx 1800px, JPEG progressivo q82)
- Criado src/lib/site-data.ts com todo o conteúdo em pt-BR (categorias, galeria, planos, depoimentos, FAQ, stats)
- Criado src/lib/site-store.ts (Zustand) para comunicação entre seções (filtro da galeria, pré-seleção de serviço no contato)
- Configurado layout.tsx: fontes Cormorant Garamond (serif) + Montserrat (sans), metadata pt-BR, Toaster sonner
- Criados componentes: Header (fixo, menu mobile fullscreen animado), Hero (Ken Burns, tagline "O tempo passa. A memória fica."), Manifesto+Stats, About (colagem de fotos), Services (6 tiles com hover P&B→cor), Gallery (masonry + filtros + lightbox com navegação por teclado), Pricing (3 planos, destaque central), Testimonials (carrossel Embla), FAQ (accordion), Contact (formulário + toasts), Footer
- Criada API POST /api/contato com validação Zod + persistência Prisma/SQLite (modelo Contato)
- Configurado allowedDevOrigins no next.config.ts

Bugs encontrados e corrigidos:
- Bug 1: navegação por setas no lightbox avançava 2 fotos por clique (handler de teclado duplicado: window listener + onKeyDown do Dialog) → removido o onKeyDown
- Bug 2: toast do shadcn (use-toast) nunca renderizava → migrado para sonner (toast.success/toast.error)
- Bug 3 (falso alarme): screenshots full-page mostravam seções "vazias" — era o whileInView do framer-motion que não dispara sem scroll real; imagens da galeria "faltando" era lazy loading + estado acumulado da sessão do navegador de teste; verificado com reload limpo: 23/23 imagens carregam

Verificações com agent-browser:
- Hero renderiza corretamente (VLM confirmou: header, título, botões, foto de fundo OK)
- Clique em tile de serviço → rola para galeria e filtra categoria corretamente
- Lightbox: abre, setas navegam (1→2→3→2 após correção), Esc fecha
- FAQ: accordion abre/fecha (um item por vez)
- Carrossel depoimentos: 5 slides, botão next funciona
- Fluxo preços→contato: "Quero este" rola e pré-seleciona serviço
- Formulário e2e: validação (400 com mensagem amigável), sucesso (200 + toast), dados salvos no SQLite (verificado: 3 registros)
- Mobile iPhone 14: menu hambúrguer abre/fecha/navega corretamente
- Lint limpo, dev.log sem erros

Stage Summary:
- Site completo e funcional em Next.js 16/TSX, estética P&B elegante alinhada ao logo
- Formulário de contato com backend real (Zod + Prisma + SQLite) e feedback via toasts
- Arquivos principais: src/app/page.tsx, src/app/layout.tsx, src/components/site/* (10 componentes), src/app/api/contato/route.ts, src/lib/site-data.ts, src/lib/site-store.ts, prisma/schema.prisma (modelo Contato)
- 36 imagens em public/img/, logo e ícones em public/
