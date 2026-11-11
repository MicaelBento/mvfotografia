export interface GalleryImage {
  src: string
  w: number
  h: number
  alt: string
  categoria: CategoriaKey
}

export type CategoriaKey =
  | "casais"
  | "familias"
  | "gestantes"
  | "aniversarios"
  | "corporativo"
  | "produtos-marketing"
  | "casamentos"
  | "nova"

export interface Categoria {
  key: CategoriaKey
  nome: string
  titulo: string
  frase: string
  descricao: string
  imagem: string
  tag?: string
}

export const categorias: Categoria[] = [
  {
    key: "casais",
    nome: "Casais",
    titulo: "Conexão natural",
    frase: "Retratos autênticos, sem poses rígidas.",
    descricao:
      "Sessões em nosso estúdio próprio em Sombrio ou em locações externas na região, com direção leve, luz precisa e composição atemporal.",
    imagem: "/img/casais-2.jpg",
    tag: "Pessoal",
  },
  {
    key: "familias",
    nome: "Famílias",
    titulo: "Tempo real em família",
    frase: "Espontaneidade e técnica na medida certa.",
    descricao:
      "Encontros leves no estúdio climatizado, em casa ou ao ar livre em Sombrio e região, respeitando o ritmo das crianças e registrando vínculos reais.",
    imagem: "/img/familias-3.jpg",
    tag: "Pessoal",
  },
  {
    key: "gestantes",
    nome: "Gestantes",
    titulo: "Maternidade editorial",
    frase: "Luz controlada, conforto e presença.",
    descricao:
      "Produção em estúdio próprio equipado no Centro de Sombrio ou locação externa, com direção cuidadosa de postura, paleta e iluminação.",
    imagem: "/img/gestantes-3.jpg",
    tag: "Pessoal",
  },
  {
    key: "aniversarios",
    nome: "Aniversários",
    titulo: "Celebrações & ciclos",
    frase: "Olhar documental sobre encontros e detalhes.",
    descricao:
      "Cobertura de comemorações infantis, adultas e encontros íntimos em Sombrio e região, com atenção à atmosfera, aos convidados e à espontaneidade.",
    imagem: "/img/aniversarios-1.jpg",
    tag: "Pessoal",
  },
  {
    key: "corporativo",
    nome: "Corporativo & Retratos",
    titulo: "Posicionamento & Autoridade",
    frase: "Retratos profissionais para especialistas e equipes.",
    descricao:
      "Headshots e retratos editoriais para médicos, advogados, arquitetos e lideranças — no estúdio próprio com luz controlada ou in loco na sua empresa.",
    imagem: "/img/corporativo-1.jpg",
    tag: "Profissionais & Equipes",
  },
  {
    key: "produtos-marketing",
    nome: "Produtos & Marketing",
    titulo: "Fotografia Comercial de Marca",
    frase: "Imagens com fidelidade e alto apelo comercial.",
    descricao:
      "Still de produto para e-commerce, catálogos e campanhas publicitárias com iluminação controlada e enquadramentos pensados para tráfego e vendas.",
    imagem: "/img/produtos-1.jpg",
    tag: "E-commerce & Marcas",
  },
]

export const galeria: GalleryImage[] = [
  { src: "/img/casais-1.jpg", w: 1200, h: 1800, alt: "Casal abraçado em ensaio romântico", categoria: "casais" },
  { src: "/img/casais-3.jpg", w: 1000, h: 1500, alt: "Casal dançando ao pôr do sol", categoria: "casais" },
  { src: "/img/casais-4.jpg", w: 1800, h: 1200, alt: "Casal rindo juntos em campo aberto", categoria: "casais" },
  { src: "/img/casais-5.jpg", w: 1178, h: 1800, alt: "Casal em silhueta romântica", categoria: "casais" },
  { src: "/img/familias-1.jpg", w: 1350, h: 900, alt: "Família sorrindo ao ar livre", categoria: "familias" },
  { src: "/img/familias-2.jpg", w: 1200, h: 1800, alt: "Pais com criança no colo", categoria: "familias" },
  { src: "/img/familias-4.jpg", w: 1300, h: 956, alt: "Família brincando no parque", categoria: "familias" },
  { src: "/img/familias-5.jpg", w: 1800, h: 1200, alt: "Família reunida em abraço coletivo", categoria: "familias" },
  { src: "/img/gestantes-1.jpg", w: 900, h: 1200, alt: "Gestante em pose delicada", categoria: "gestantes" },
  { src: "/img/gestantes-2.jpg", w: 900, h: 1200, alt: "Barriga de gravidez em luz suave", categoria: "gestantes" },
  { src: "/img/gestantes-4.jpg", w: 894, h: 894, alt: "Gestante com vestido fluido", categoria: "gestantes" },
  { src: "/img/gestantes-5.jpg", w: 1200, h: 857, alt: "Casal esperando o bebê", categoria: "gestantes" },
  { src: "/img/corporativo-1.jpg", w: 896, h: 1200, alt: "Retrato corporativo autoral em estúdio com iluminação suave", categoria: "corporativo" },
  { src: "/img/produtos-1.jpg", w: 896, h: 1200, alt: "Fotografia comercial de produto still life sobre pedra e linho", categoria: "produtos-marketing" },
  { src: "/img/casamentos-1.jpg", w: 1200, h: 1800, alt: "Noiva no dia do casamento", categoria: "casamentos" },
  { src: "/img/casamentos-2.jpg", w: 1800, h: 1199, alt: "Cerimônia de casamento emocionante", categoria: "casamentos" },
  { src: "/img/casamentos-4.jpg", w: 1600, h: 1067, alt: "Noivos se olhando com ternura", categoria: "casamentos" },
  { src: "/img/casamentos-5.jpg", w: 1500, h: 1000, alt: "Beijo dos noivos na celebração", categoria: "casamentos" },
  { src: "/img/casamentos-6.jpg", w: 1250, h: 834, alt: "Primeira dança dos noivos", categoria: "casamentos" },
  { src: "/img/aniversarios-2.jpg", w: 1600, h: 890, alt: "Festa de aniversário à noite", categoria: "aniversarios" },
  { src: "/img/aniversarios-3.jpg", w: 1000, h: 1000, alt: "Aniversariante soprando velas", categoria: "aniversarios" },
  { src: "/img/aniversarios-4.jpg", w: 1500, h: 1000, alt: "Celebração com amigos e família", categoria: "aniversarios" },
  { src: "/img/nova-1.jpg", w: 1500, h: 1000, alt: "Recém-nascido dormindo tranquilo", categoria: "nova" },
  { src: "/img/nova-3.jpg", w: 1200, h: 1800, alt: "Bebê nos braços da mãe", categoria: "nova" },
  { src: "/img/nova-4.jpg", w: 1064, h: 1064, alt: "Detalhes do recém-nascido", categoria: "nova" },
]

export const WHATSAPP_NUMERO = "5548998599989"

export type ExperienciaId =
  | "casais"
  | "familias"
  | "gestantes"
  | "aniversarios"
  | "corporativo"
  | "produtos-marketing"

export type GrupoExperiencia = "pessoal" | "comercial"

export interface FormatoExperiencia {
  id: string
  nome: string
  ritmo: string
  subtitulo: string
  destaque?: boolean
  itens: string[]
}

export interface ExperienciaMomento {
  id: ExperienciaId
  grupo: GrupoExperiencia
  categoriaGaleria?: CategoriaKey
  nomeCurto: string
  servicoContato: string
  descricaoMomento: string
  formatos: [FormatoExperiencia, FormatoExperiencia]
  extras: string[]
}

export const experienciasPorMomento: ExperienciaMomento[] = [
  {
    id: "casais",
    grupo: "pessoal",
    categoriaGaleria: "casais",
    nomeCurto: "Casais",
    servicoContato: "Ensaio de casal",
    descricaoMomento:
      "Retratos naturais com direção leve e estética limpa — realizados no nosso estúdio próprio no Centro de Sombrio ou em locações externas na região.",
    formatos: [
      {
        id: "casais-essencial",
        nome: "Sessão Essencial",
        ritmo: "~1h a 1h30 · Estúdio ou locação",
        subtitulo: "Direto ao ponto para celebrar um ciclo, aniversário de relação ou atualizar retratos a dois.",
        itens: [
          "Realizado no estúdio próprio em Sombrio ou em 1 locação próxima",
          "Direção natural conduzida por Micael & Vanusa, sem poses forçadas",
          "Orientação prévia de cores e caimento de figurino",
          "Prévia de 5 fotos em 48h + galeria online em alta resolução",
        ],
      },
      {
        id: "casais-memoria-viva",
        nome: "Experiência Editorial",
        ritmo: "~2h30 · Até 2 ambientes",
        subtitulo: "Roteiro mais amplo combinando estúdio e locação externa na região, sem pressa.",
        destaque: true,
        itens: [
          "Alinhamento prévio de conceito visual, luz e locações",
          "Até 2 ambientes (ex.: estúdio + praia ou serra na região) e trocas de look",
          "Galeria online privada por 1 ano + backup seguro por 5 anos",
          "Seleção de impressões Fine Art em papel algodão",
        ],
      },
    ],
    extras: [
      "Impressões Fine Art",
      "Álbum editorial",
      "Combinação estúdio + externo",
      "Locação na região (sob consulta)",
    ],
  },
  {
    id: "familias",
    grupo: "pessoal",
    categoriaGaleria: "familias",
    nomeCurto: "Famílias",
    servicoContato: "Ensaio de família",
    descricaoMomento:
      "Sessões conduzidas no ritmo das crianças, no conforto climatizado do nosso estúdio próprio, na sua casa ou ao ar livre em Sombrio e região.",
    formatos: [
      {
        id: "familias-movimento",
        nome: "Retrato em Movimento",
        ritmo: "~1h a 1h30 · Estúdio ou externo",
        subtitulo: "Pensado para registrar a fase atual da família com leveza, conforto e agilidade.",
        itens: [
          "Opção de estúdio próprio no Centro de Sombrio, residência ou ar livre",
          "Condução paciente e dinâmica, respeitando pausas das crianças",
          "Participação de filhos, pais, avós ou pets",
          "Prévia em 48h + galeria online privada em alta resolução",
        ],
      },
      {
        id: "familias-dia-memoria",
        nome: "Memória Documental em Família",
        ritmo: "~2h30 · Dois ambientes",
        subtitulo: "Mais tempo para registrar a convivência real em casa ou combinar estúdio e passeio.",
        destaque: true,
        itens: [
          "Roteiro flexível entre estúdio próprio, casa da família ou área externa",
          "Tempo tranquilo para trocas de roupa, pausas e retratos entre gerações",
          "Galeria online por 1 ano pronta para compartilhar com familiares",
          "Seleção de impressões Fine Art prontas para emoldurar",
        ],
      },
    ],
    extras: [
      "Impressões Fine Art",
      "Álbum da família",
      "Participação dos avós",
      "Deslocamento na região",
    ],
  },
  {
    id: "gestantes",
    grupo: "pessoal",
    categoriaGaleria: "gestantes",
    nomeCurto: "Gestantes",
    servicoContato: "Ensaio de gestante",
    descricaoMomento:
      "Iluminação precisa, privacidade e conforto no nosso estúdio próprio em Sombrio — ou ao ar livre na região — para retratar a gestação com elegância.",
    formatos: [
      {
        id: "gestantes-doce-espera",
        nome: "Retrato de Espera",
        ritmo: "~1h a 1h30 · Luz controlada",
        subtitulo: "Sessão confortável e atemporal, priorizando o bem-estar da gestante.",
        itens: [
          "Estúdio próprio climatizado em Sombrio (Sala 302) ou locação externa",
          "Direção cuidadosa de postura, ângulos e iluminação",
          "Guia objetivo de peças, tecidos e paleta de cores",
          "Participação do parceiro(a) e filhos + prévia em 48h",
        ],
      },
      {
        id: "gestantes-maternidade",
        nome: "Editorial Maternidade",
        ritmo: "~2h30 · Até 2 propostas",
        subtitulo: "Variação completa de luz, figurinos e ambientes para um registro autoral da espera.",
        destaque: true,
        itens: [
          "Planejamento visual com múltiplas trocas de figurino e esquemas de luz",
          "Possibilidade de unir sessão em estúdio próprio + locação externa",
          "Galeria online por 1 ano + impressões Fine Art 20x25cm",
          "Prioridade para agendar ensaio dos primeiros dias (sob consulta)",
        ],
      },
    ],
    extras: [
      "Primeiros dias do bebê (sob consulta)",
      "Estúdio próprio + externo",
      "Álbum artesanal",
      "Impressões Fine Art",
    ],
  },
  {
    id: "aniversarios",
    grupo: "pessoal",
    categoriaGaleria: "aniversarios",
    nomeCurto: "Aniversários",
    servicoContato: "Aniversário",
    descricaoMomento:
      "Cobertura documental e discreta para festas infantis, comemorações adultas e marcos familiares em Sombrio e região.",
    formatos: [
      {
        id: "aniversarios-celebracao",
        nome: "Cobertura Essencial",
        ritmo: "~3h a 4h de evento",
        subtitulo: "Registro completo da recepção, decoração, interações espontâneas e parabéns.",
        itens: [
          "Atendimento em Sombrio e cidades da região",
          "Fotos detalhadas da ambientação + registros espontâneos dos convidados",
          "Prévia rápida em 48h + galeria online em alta resolução",
          "Retratos posados objetivos com a família e amigos próximos",
        ],
      },
      {
        id: "aniversarios-completa",
        nome: "Cobertura Integral + Álbum",
        ritmo: "Evento completo",
        subtitulo: "Para celebrações maiores que pedem acompanhamento do início ao encerramento.",
        destaque: true,
        itens: [
          "Cobertura estendida sem pressa, dos bastidores ao último brinde",
          "Dois olhares atentos aos detalhes e momentos simultâneos",
          "Galeria online ativa por 1 ano para compartilhar com convidados",
          "Álbum editorial diagramado ou caixa com impressões Fine Art",
        ],
      },
    ],
    extras: [
      "Álbum do evento",
      "Mini-ensaio prévio em estúdio",
      "Horas adicionais",
      "Impressões Fine Art",
    ],
  },
  {
    id: "corporativo",
    grupo: "comercial",
    categoriaGaleria: "corporativo",
    nomeCurto: "Corporativo & Retratos",
    servicoContato: "Fotografia corporativa & retratos",
    descricaoMomento:
      "Retratos estratégicos em nosso estúdio próprio em Sombrio ou na sede da sua empresa na região — imagens que transmitem autoridade e confiança imediata.",
    formatos: [
      {
        id: "corporativo-posicionamento",
        nome: "Retrato de Posicionamento",
        ritmo: "~1h30 · Individual",
        subtitulo: "Para médicos, advogados, arquitetos, empresários e especialistas em Sombrio e região.",
        itens: [
          "Briefing prático de posicionamento, vestimenta e mensagem visual",
          "Sessão no estúdio próprio (Centro de Sombrio) ou no seu consultório/escritório",
          "Direção de expressão e postura segura, sem aspecto artificial",
          "Prévia em 48h + arquivos prontos para LinkedIn, site, redes e imprensa",
        ],
      },
      {
        id: "corporativo-equipe",
        nome: "Dia de Marca & Equipe",
        ritmo: "~3h · Equipe e ambiente",
        subtitulo: "Para clínicas, escritórios e empresas que buscam padronizar a imagem do time.",
        destaque: true,
        itens: [
          "Retratos padronizados de sócios e equipe (em estúdio ou in loco na empresa)",
          "Registro da estrutura física, atendimento e bastidores reais do negócio",
          "Banco de imagens proprietário para site institucional, tráfego e propostas",
          "Licença de uso comercial e entrega organizada por finalidade",
        ],
      },
    ],
    extras: [
      "Atendimento in loco na empresa",
      "Mais colaboradores",
      "Combinação estúdio + sede",
      "Entrega expressa em 48h",
    ],
  },
  {
    id: "produtos-marketing",
    grupo: "comercial",
    categoriaGaleria: "produtos-marketing",
    nomeCurto: "Produtos & Marketing",
    servicoContato: "Produtos & Marketing",
    descricaoMomento:
      "Produção comercial em estúdio próprio equipado ou em locação — pensada para valorizar produtos, alimentar campanhas e aumentar conversão.",
    formatos: [
      {
        id: "produtos-catalogo",
        nome: "Catálogo & E-commerce",
        ritmo: "Estúdio próprio · Luz controlada",
        subtitulo: "Fotografia técnica de produto para lojas virtuais, catálogos, cardápios e marketplaces.",
        itens: [
          "Recebimento ou produção dos itens no nosso estúdio no Centro de Sombrio",
          "Iluminação controlada e reprodução fiel de cores, texturas e acabamentos",
          "Padronização de ângulos e proporções para cada plataforma de venda",
          "Arquivos em alta resolução + versões otimizadas para web e anúncios",
        ],
      },
      {
        id: "produtos-campanha",
        nome: "Campanha & Conteúdo de Marca",
        ritmo: "Direção criativa · Redes e tráfego",
        subtitulo: "Fotografia publicitária e lifestyle para lançamentos, redes sociais e anúncios pagos.",
        destaque: true,
        itens: [
          "Planejamento visual de conceito, superfície, props e ambientação",
          "Fotos de produto em contexto de uso alinhadas ao posicionamento da marca",
          "Enquadramentos pensados para feed, stories e criativos de performance (4:5 e 9:16)",
          "Disponibilidade para produções avulsas ou calendário recorrente sob consulta",
        ],
      },
    ],
    extras: [
      "Produção em locação na região",
      "Cenografia & elementos de cena",
      "Plano recorrente de conteúdo",
      "Recortes para anúncios (9:16 e 4:5)",
    ],
  },
]

export interface Depoimento {
  nome: string
  servico: string
  texto: string
}

export const depoimentos: Depoimento[] = [
  {
    nome: "Juliana M.",
    servico: "Ensaio de gestante · Estúdio próprio",
    texto:
      "O ambiente do estúdio em Sombrio é super reservado e acolhedor. A Vanusa me dirigiu com tanta segurança e o Micael cuidou de cada luz que esqueci completamente a timidez. As fotos ficaram com nível de revista.",
  },
  {
    nome: "Dr. Henrique & Equipe",
    servico: "Retratos corporativos & clínica",
    texto:
      "Precisávamos renovar a imagem do consultório e os retratos profissionais da equipe. A direção foi objetiva, sem tomar nosso dia inteiro, e o material elevou imediatamente a percepção da nossa marca no site e no Instagram.",
  },
  {
    nome: "Família Schmitt",
    servico: "Ensaio de família",
    texto:
      "Com duas crianças pequenas, achávamos difícil conseguir fotos naturais. Eles conduziram tudo no ritmo dos meninos, sem poses forçadas. O resultado é a nossa família de verdade — autêntica e cheia de vida.",
  },
  {
    nome: "Atelier & Marca Local",
    servico: "Produtos & campanha de lançamento",
    texto:
      "As fotos de catálogo e campanha mudaram a apresentação dos nossos produtos no e-commerce e no WhatsApp. Fidelidade de cor impecável e entrega dentro do prazo combinado.",
  },
  {
    nome: "Camila & Rafael",
    servico: "Ensaio de casal",
    texto:
      "O Micael e a Vanusa capturaram exatamente quem nós somos, sem encenação. A direção é leve, precisa e faz a gente se sentir confortável desde os primeiros minutos.",
  },
  {
    nome: "Regina Alves",
    servico: "Aniversário de 80 anos",
    texto:
      "Nossa celebração foi eternizada com uma sensibilidade e discrição admiráveis. Cada neto, cada abraço e cada detalhe da festa registrados com perfeição.",
  },
]

export interface Faq {
  pergunta: string
  resposta: string
}

export const faqs: Faq[] = [
  {
    pergunta: "Onde fica o estúdio e qual é a região de atendimento?",
    resposta:
      "Nosso estúdio próprio fica no Centro de Sombrio/SC — no 3º andar, Sala 302 (andar acima da CDL de Sombrio, Av. Getúlio Vargas, 150). Atendemos regularmente em Sombrio e em toda a região (Extremo Sul Catarinense e Litoral Norte Gaúcho), além de projetos em outras cidades mediante consulta.",
  },
  {
    pergunta: "Como funciona o agendamento de ensaio ou diária comercial?",
    resposta:
      "O primeiro contato é feito direto pelo WhatsApp, sem formulários longos. Alinhamos o objetivo da sessão, apresentamos o formato ideal e reservamos sua data mediante sinal de 30%, trabalhando sempre com agenda dedicada.",
  },
  {
    pergunta: "Qual é o prazo de entrega das fotografias?",
    resposta:
      "Enviamos uma prévia selecionada em até 48h após a sessão. A galeria final tratada em alta resolução é entregue em até 10 dias úteis para ensaios, retratos corporativos e catálogos (com opção de entrega expressa para campanhas urgentes).",
  },
  {
    pergunta: "Vocês realizam produções na sede da minha empresa ou em locações externas?",
    resposta:
      "Sim. Além da estrutura completa com iluminação controlada no nosso estúdio próprio, levamos equipamento móvel até empresas, clínicas, escritórios, residências e locações externas em Sombrio, região e sob consulta.",
  },
  {
    pergunta: "Como funciona a orientação de roupas, estilo e briefing comercial?",
    resposta:
      "Para ensaios pessoais e retratos corporativos, enviamos orientações práticas de cores, caimentos e combinações que valorizam sua imagem. Para fotografia de produtos e marketing, alinhamos previamente os ângulos, fundos e proporções ideais para cada canal (e-commerce, redes sociais ou anúncios).",
  },
  {
    pergunta: "Casamentos, recém-nascidos e projetos específicos estão disponíveis?",
    resposta:
      "Sim, atendemos casamentos, sessões de recém-nascidos (lifestyle) e demandas especiais mediante consulta de agenda e escopo pelo WhatsApp.",
  },
  {
    pergunta: "Quais são as formas de pagamento e como recebo os arquivos?",
    resposta:
      "Aceitamos Pix, transferência, boleto ou cartão em até 6x sem juros (com emissão fiscal e planos recorrentes para empresas). As imagens são entregues em galeria online privada em alta resolução e versões otimizadas para web, com backup ativo por 5 anos.",
  },
]

export const servicos = [
  "Ensaio de casal",
  "Ensaio de família",
  "Ensaio de gestante",
  "Aniversário",
  "Fotografia corporativa & retratos",
  "Produtos & Marketing",
  "Casamento (sob consulta)",
  "Recém-nascido (sob consulta)",
  "Outro / projeto sob consulta",
]

export const stats = [
  { valor: "12+", rotulo: "anos de experiência" },
  { valor: "750+", rotulo: "projetos e ensaios entregues" },
  { valor: "Próprio", rotulo: "estúdio no Centro de Sombrio" },
  { valor: "48h", rotulo: "entrega da prévia inicial" },
]

export const estudioLocalizacao = {
  titulo: "Estúdio Próprio",
  referencia: "Andar acima da CDL de Sombrio",
  complemento: "3º andar, Sala 302",
  enderecoLinha: "Av. Getúlio Vargas, 150 · Centro",
  cidadeEstado: "Sombrio · SC",
  cep: "88960-000",
  resumoCurto: "Acima da CDL de Sombrio · 3º andar, Sala 302",
  googleMapsUrl: "https://maps.app.goo.gl/7pdKRJAAUtwDCb7AA",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=CDL-C%C3%A2mara+de+Dirigentes+Lojistas,+Sombrio+-+SC&ll=-29.1134067,-49.63443&z=17&hl=pt-BR&output=embed",
} as const
