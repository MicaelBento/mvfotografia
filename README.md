# 📷 Micael & Vanusa — Memória Viva Fotografia

> *"O tempo passa. A memória fica."*

Site institucional e portfólio de alta performance desenvolvido para o estúdio de fotografia autoral **Micael & Vanusa (Memória Viva Fotografia)**, com estética editorial refinada em preto e branco, galeria masonry dinâmica, lightbox interativo e formulário de orçamento integrado.

🌐 **Site no ar (Vercel):** [https://mvfotografia-f9hn.vercel.app](https://mvfotografia-f9hn.vercel.app)  
📦 **Repositório GitHub:** [https://github.com/MicaelBento/mvfotografia](https://github.com/MicaelBento/mvfotografia)

---

## ✨ Funcionalidades

- **Design Editorial & Identidade Visual:** Tipografia com *Cormorant Garamond* (serifa elegante) e *Montserrat*, paleta monocromática sofisticada com suporte a transição sutil em hover (efeito P&B para colorido).
- **Hero Cinematográfico:** Animação de fundo suave com efeito Ken Burns e chamadas de ação diretas.
- **Galeria Interativa:** Layout estilo *masonry* responsivo, filtro instantâneo por categorias (Casais, Famílias, Gestantes, Casamentos, Ensaios, etc.) e Lightbox com suporte a navegação por teclado (setas e `Esc`).
- **Seção de Serviços:** Cards com apresentação detalhada e navegação contextual para pré-selecionar o serviço no formulário de contato.
- **Planos & Investimento:** Exibição clara de pacotes com destaques visuais para tomada de decisão.
- **Carrossel de Depoimentos:** Feedback de clientes reais implementado com *Embla Carousel*.
- **FAQ Expansível:** Dúvidas frequentes com animação fluida (*Radix UI Accordion*).
- **Formulário de Contato & Orçamento:** Validação com *Zod*, integração com *Prisma ORM* e feedback imediato com toasts elegantes via *Sonner*.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Biblioteca de UI:** [React 19](https://react.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) + `tw-animate-css`
- **Componentes:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Ícones:** [Lucide Icons](https://lucide.dev/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **ORM & Banco de Dados:** [Prisma](https://www.prisma.io/) com SQLite (compatível com Turso / PostgreSQL em produção)
- **Validação de Formulários:** [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)
- **Gerenciamento de Estado:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Notificações:** [Sonner](https://sonner.emilkowal.ski/)
- **Hospedagem & Deploy:** [Vercel](https://vercel.com/) com CI/CD automático via GitHub

---

## 📂 Estrutura de Pastas

```text
├── db/                     # Banco de dados SQLite local (custom.db)
├── prisma/                 # Schema do Prisma ORM (schema.prisma)
├── public/                 # Imagens estáticas otimizadas e logotipo
│   ├── img/                # Acervo fotográfico por categorias
│   └── logo.png            # Logotipo oficial Memória Viva Fotografia
├── src/
│   ├── app/                # Next.js App Router (layout, páginas e rotas de API)
│   │   ├── api/contato/    # Endpoint POST para recebimento de orçamentos
│   │   ├── layout.tsx      # Configuração global de fontes, SEO e Toaster
│   │   └── page.tsx        # Página principal reunindo todas as seções
│   ├── components/
│   │   ├── site/           # Componentes específicos do site (Hero, Gallery, Services, etc.)
│   │   └── ui/             # Componentes base do shadcn/ui
│   └── lib/                # Configurações de banco (db.ts), dados estáticos (site-data.ts) e Zustand (site-store.ts)
├── .env.example            # Exemplo de variáveis de ambiente
├── package.json            # Dependências e scripts de build
└── tsconfig.json           # Configurações de TypeScript
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18.18+ (recomendado v20 ou v24)
- npm, bun ou pnpm

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MicaelBento/mvfotografia.git
   cd mvfotografia
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto (ou copie de `.env.example`):
   ```env
   DATABASE_URL="file:../db/custom.db"
   ```

4. **Gere o cliente do Prisma:**
   ```bash
   npx prisma generate
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

6. Acesse no seu navegador em: **[http://localhost:3000](http://localhost:3000)**.

---

## ☁️ Deploy na Vercel

O projeto está otimizado para deploy contínuo na Vercel:

1. Importe o repositório `MicaelBento/mvfotografia` no painel da Vercel.
2. O framework preset será detectado automaticamente como **Next.js**.
3. Adicione a variável de ambiente:
   * **`DATABASE_URL`**: `file:../db/custom.db` *(ou a URL do seu provedor de banco em nuvem, ex: Turso / Supabase / Neon)*.
4. O script de build executa `prisma generate && next build` automaticamente.
5. A cada novo commit na branch `main`, um novo deploy é publicado automaticamente.

---

## 📄 Licença

Este projeto foi desenvolvido com exclusividade para o estúdio **Micael & Vanusa — Memória Viva Fotografia**. Todos os direitos das fotografias e marcas são reservados.
