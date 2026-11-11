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
  | "casamentos"
  | "aniversarios"
  | "nova"

export interface Categoria {
  key: CategoriaKey
  nome: string
  titulo: string
  frase: string
  descricao: string
  imagem: string
}

export const categorias: Categoria[] = [
  {
    key: "casais",
    nome: "Casais",
    titulo: "O olhar que diz tudo",
    frase: "O amor não precisa de pose — precisa de verdade.",
    descricao:
      "Ensaios românticos em cenários que contam a história de vocês: o pôr do sol, a cidade, a casa onde tudo começou. Registramos o jeito de olhar, rir e se abraçar que só existe entre vocês dois.",
    imagem: "/img/casais-2.jpg",
  },
  {
    key: "familias",
    nome: "Famílias",
    titulo: "O caos mais bonito do mundo",
    frase: "Crianças crescem. As fotos ficam.",
    descricao:
      "O coração da casa em movimento: correria, gargalhadas, abraços apertados e aquele olhar de quem se pertence. Um ensaio descontraído para eternizar a família como ela realmente é.",
    imagem: "/img/familias-3.jpg",
  },
  {
    key: "gestantes",
    nome: "Gestantes",
    titulo: "A espera mais doce",
    frase: "Nove meses de amor em um único clique.",
    descricao:
      "A barriga que cresce, os pontapés, a ansiedade e a certeza de que a vida está prestes a mudar. Um ensaio delicado para celebrar a maternidade e a força que ela carrega.",
    imagem: "/img/gestantes-3.jpg",
  },
  {
    key: "casamentos",
    nome: "Casamentos",
    titulo: "O dia que não pode ser esquecido",
    frase: "A festa passa. A memória fica para sempre.",
    descricao:
      "Cobertura documental e sensível do primeiro ao último minuto: a preparação, o sim, as lágrimas da mãe, a pista de dança lotada. Sua história contada como ela merece.",
    imagem: "/img/casamentos-3.jpg",
  },
  {
    key: "aniversarios",
    nome: "Aniversários",
    titulo: "Cada ciclo merece festa",
    frase: "Idades passam. A alegria fica registrada.",
    descricao:
      "De 1 aninho aos 80, cada aniversário é uma história à parte. Registramos as velinhas, os amigos, a decoração e aquela emoção que não cabe em palavras.",
    imagem: "/img/aniversarios-1.jpg",
  },
  {
    key: "nova",
    nome: "Recém-nascidos",
    titulo: "Os primeiros dias de tudo",
    frase: "Tão pequenos, e já tão grandes em nossos corações.",
    descricao:
      "As mãozinhas, o bocejo, o sono profundo no colo. Os primeiros dias passam voando — eternizamos cada detalhe com calma, conforto e todo o cuidado que esse momento pede.",
    imagem: "/img/nova-2.jpg",
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

export interface FormatoExperiencia {
  id: string
  nome: string
  ritmo: string
  subtitulo: string
  destaque?: boolean
  itens: string[]
}

export interface ExperienciaMomento {
  categoria: CategoriaKey
  nomeCurto: string
  servicoContato: string
  descricaoMomento: string
  formatos: [FormatoExperiencia, FormatoExperiencia]
  extras: string[]
}

export const experienciasPorMomento: ExperienciaMomento[] = [
  {
    categoria: "casais",
    nomeCurto: "Casais",
    servicoContato: "Ensaio de casal",
    descricaoMomento:
      "Ensaios pensados para deixar vocês à vontade, entre conversas, risadas e o cenário que faz sentido para a história dos dois.",
    formatos: [
      {
        id: "casais-essencial",
        nome: "Encontro Essencial",
        ritmo: "~1h a 1h30 · 1 cenário",
        subtitulo: "Ideal para celebrar um ciclo, o namoro ou guardar o agora.",
        itens: [
          "1 cenário externo ou no aconchego da casa de vocês",
          "Direção leve e natural com Micael & Vanusa",
          "Guia de estilo para ajudar na escolha das roupas",
          "Prévia de 5 fotos em 48h + galeria online em alta resolução",
        ],
      },
      {
        id: "casais-memoria-viva",
        nome: "Experiência Memória Viva",
        ritmo: "~2h30 · Até 2 cenários",
        subtitulo: "Para viver o ensaio sem pressa, do café ao pôr do sol.",
        destaque: true,
        itens: [
          "Conversa prévia para desenhar o roteiro com a cara de vocês",
          "Até 2 locações e trocas de figurino no tempo de vocês",
          "Galeria online estendida por 1 ano + backup de 5 anos",
          "Seleção de impressões fine art em papel algodão",
        ],
      },
    ],
    extras: [
      "Impressões Fine Art",
      "Álbum de mesa",
      "Ensaio em casa",
      "Outra cidade / praia",
    ],
  },
  {
    categoria: "familias",
    nomeCurto: "Famílias",
    servicoContato: "Ensaio de família",
    descricaoMomento:
      "Sem poses rígidas para as crianças: entramos na brincadeira para registrar a casa e os abraços como eles realmente acontecem.",
    formatos: [
      {
        id: "familias-movimento",
        nome: "Retrato em Movimento",
        ritmo: "~1h a 1h30 · Ritmo das crianças",
        subtitulo: "Perfeito para registrar a fase atual de forma leve e divertida.",
        itens: [
          "Ensaio ao ar livre ou no conforto da casa de vocês",
          "Abordagem lúdica e paciente, respeitando pausas e brincadeiras",
          "Participação livre de filhos, avós e pets",
          "Prévia em 48h + galeria online protegida por senha",
        ],
      },
      {
        id: "familias-dia-memoria",
        nome: "Um Dia de Memória em Família",
        ritmo: "~2h30 · Casa + externo",
        subtitulo: "Para transformar uma manhã ou tarde comum em recordação de geração.",
        destaque: true,
        itens: [
          "Início em casa (café, brincadeiras) + passeio ao ar livre",
          "Tempo livre para trocas, lanches e abraços sem correria",
          "Galeria online por 1 ano para compartilhar com os avós",
          "Impressões fine art prontas para guardar ou emoldurar",
        ],
      },
    ],
    extras: [
      "Impressões Fine Art",
      "Álbum da família",
      "Participação dos avós",
      "Outra cidade",
    ],
  },
  {
    categoria: "gestantes",
    nomeCurto: "Gestantes",
    servicoContato: "Ensaio de gestante",
    descricaoMomento:
      "Um tempo tranquilo para celebrar a espera, respeitando o conforto e o ritmo da mãe em cada detalhe.",
    formatos: [
      {
        id: "gestantes-doce-espera",
        nome: "Doce Espera",
        ritmo: "~1h a 1h30 · Luz suave",
        subtitulo: "Delicado e confortável, respeitando o bem-estar da gestante.",
        itens: [
          "Realizado ao ar livre, em casa ou em estúdio parceiro",
          "Guia completo de cores, tecidos fluidos e conforto",
          "Participação especial do parceiro(a) e irmãos mais velhos",
          "Prévia em 48h + galeria online em alta resolução",
        ],
      },
      {
        id: "gestantes-maternidade",
        nome: "História da Maternidade",
        ritmo: "~2h30 · Até 2 cenários",
        subtitulo: "Da intimidade do quartinho ao pôr do sol, sem pressa.",
        destaque: true,
        itens: [
          "Planejamento prévio de roteiro e trocas de figurino",
          "Combinação de cenário íntimo (casa/estúdio) + natureza",
          "Galeria online por 1 ano + impressões fine art 20x25cm",
          "Possibilidade de integrar com o ensaio de recém-nascido",
        ],
      },
    ],
    extras: [
      "Combo Gestante + Recém-nascido",
      "Estúdio parceiro",
      "Álbum artesanal",
      "Impressões Fine Art",
    ],
  },
  {
    categoria: "casamentos",
    nomeCurto: "Casamentos",
    servicoContato: "Casamento",
    descricaoMomento:
      "Cobertura documental com dois olhares atentos do início ao fim — para vocês viverem cada abraço enquanto guardamos tudo.",
    formatos: [
      {
        id: "casamentos-intima",
        nome: "Cerimônia Íntima & Elopement",
        ritmo: "Cobertura enxuta · Até 5h",
        subtitulo: "Para mini weddings, cerimônias no civil com almoço ou a dois.",
        itens: [
          "Olhar documental e discreto focado na emoção real",
          "Dois fotógrafos (Micael & Vanusa) em ângulos paralelos",
          "Retratos do casal logo após a cerimônia sem perder a festa",
          "Prévia em até 48h + galeria online para convidados",
        ],
      },
      {
        id: "casamentos-completo",
        nome: "O Grande Dia Completo",
        ritmo: "Do making of à pista",
        subtitulo: "Cobertura integral para não perder um único abraço ou lágrima.",
        destaque: true,
        itens: [
          "Ensaio pré-wedding incluso para criar conexão antes do altar",
          "Cobertura completa sem limite rígido de momentos-chave",
          "Segundo olhar fotográfico dedicado durante todo o evento",
          "Álbum de luxo 30x30cm + galeria de 1 ano para convidados",
        ],
      },
    ],
    extras: [
      "Ensaio Pré-Wedding",
      "Álbum de luxo 30x30cm",
      "Álbuns para os pais",
      "Prévia ampliada em 48h",
    ],
  },
  {
    categoria: "aniversarios",
    nomeCurto: "Aniversários",
    servicoContato: "Aniversário",
    descricaoMomento:
      "Do 1º aninho aos 80 anos, registramos a alegria espontânea, os encontros e a emoção de celebrar mais um ciclo.",
    formatos: [
      {
        id: "aniversarios-celebracao",
        nome: "Cobertura de Celebração",
        ritmo: "~3h a 4h de festa",
        subtitulo: "Para registrar a chegada, detalhes, parabéns e afetos.",
        itens: [
          "Olhar atento às crianças, amigos e família reunida",
          "Fotos espontâneas de decoração e encontros antes do parabéns",
          "Prévia rápida em 48h para compartilhar com quem esteve lá",
          "Galeria online completa em alta resolução",
        ],
      },
      {
        id: "aniversarios-completa",
        nome: "Festa Completa + Memória Impressa",
        ritmo: "Evento integral",
        subtitulo: "De 1 aninho aos 80 anos, do começo ao último abraço.",
        destaque: true,
        itens: [
          "Cobertura estendida incluindo preparação e encerramento",
          "Retratos com familiares sem travar o ritmo da festa",
          "Galeria estendida por 1 ano para baixar e compartilhar",
          "Álbum impresso de recordação ou caixa fine art",
        ],
      },
    ],
    extras: [
      "Álbum da festa",
      "Ensaio prévio do aniversariante",
      "Horas adicionais",
      "Impressões Fine Art",
    ],
  },
  {
    categoria: "nova",
    nomeCurto: "Recém-nascidos",
    servicoContato: "Recém-nascido",
    descricaoMomento:
      "Os primeiros dias passam num piscar de olhos — fotografamos com calma, silêncio e conforto no tempo do bebê.",
    formatos: [
      {
        id: "nova-primeiros-dias",
        nome: "Primeiros Dias em Casa",
        ritmo: "~1h30 · Estilo lifestyle",
        subtitulo: "No conforto, cheiro e segurança do lar — sem poses forçadas.",
        itens: [
          "Realizado preferencialmente entre o 5º e o 20º dia de vida",
          "Pausas livres e ilimitadas para mamadas, trocas e colo",
          "Foco nos detalhes: mãozinhas, bocejos, quarto e olhar dos pais",
          "Prévia em 48h + galeria online protegida por senha",
        ],
      },
      {
        id: "nova-boas-vindas",
        nome: "Boas-vindas Completo",
        ritmo: "~2h30 · Sem pressa",
        subtitulo: "Tempo extra para o ritmo natural do bebê e de toda a família.",
        destaque: true,
        itens: [
          "Sessão em casa ou estúdio parceiro com conforto térmico",
          "Participação tranquila de irmãos mais velhos e pets",
          "Galeria estendida por 1 ano para toda a família",
          "Mini álbum ou seleção de impressões fine art em papel algodão",
        ],
      },
    ],
    extras: [
      "Estúdio parceiro",
      "Combo Acompanhamento",
      "Álbum primeiros dias",
      "Impressões Fine Art",
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
    nome: "Camila & Rafael",
    servico: "Ensaio de casal",
    texto:
      "Choramos vendo cada foto. O Micael e a Vanusa conseguiram capturar exatamente quem a gente é — sem pose, sem encenação, só a gente. O ensaio pareceu um encontro, não uma sessão de fotos.",
  },
  {
    nome: "Família Schmitt",
    servico: "Ensaio de família",
    texto:
      "Com duas crianças pequenas, achávamos impossível sair com foto decente. Eles brincaram, correram e se jogaram no chão com os meninos. O resultado é a nossa família de verdade, e isso não tem preço.",
  },
  {
    nome: "Juliana",
    servico: "Ensaio de gestante",
    texto:
      "Me senti a mulher mais linda do mundo. A Vanusa me guiou com tanto carinho que esqueci completamente a câmera. Guardo cada foto como um tesouro — e minha filha já adora vê-las.",
  },
  {
    nome: "Mariana & Pedro",
    servico: "Casamento",
    texto:
      "No dia do casamento, eles eram praticamente convidados invisíveis: discretos, atentos a tudo. Quando abrimos a galeria, revivemos o dia inteiro — até momentos que nem sabíamos que tinham acontecido.",
  },
  {
    nome: "Regina Alves",
    servico: "Aniversário de 80 anos",
    texto:
      "Minha festa ficou eternaizada com um carinho que eu nunca vi em fotógrafo algum. Cada neto, cada abraço, cada lágrima de felicidade. Recomendo de olhos fechados — e de coração aberto.",
  },
]

export interface Faq {
  pergunta: string
  resposta: string
}

export const faqs: Faq[] = [
  {
    pergunta: "Como funciona a reserva da data?",
    resposta:
      "Após conversarmos sobre sua história, enviamos a proposta por e-mail ou WhatsApp. A data é reservada mediante sinal de 30% do valor. O restante pode ser parcelado até a entrega final das imagens. Só trabalhamos com um ensaio por dia, para dedicarmos 100% da nossa atenção a você.",
  },
  {
    pergunta: "Quanto tempo leva para receber as fotos?",
    resposta:
      "Ensaios e aniversários: até 10 dias úteis, com uma prévia de 5 fotos em 48h para matar a saudade. Casamentos levam de 30 a 45 dias, pois selecionamos e tratamos imagem por imagem com todo o cuidado que o dia merece.",
  },
  {
    pergunta: "Onde os ensaios acontecem?",
    resposta:
      "Trabalhamos com cenários naturais e urbanos: praias, campos, dunas, centro histórico, ou até a sua casa — às vezes o lugar mais bonito é onde a vida acontece. Também temos parceria com estúdios para ensaios de recém-nascidos e gestantes. A definição do local faz parte da conversa prévia, sempre pensando na sua história.",
  },
  {
    pergunta: "O que devemos vestir no ensaio?",
    resposta:
      "Enviamos um guia completo de estilo após a confirmação, com paletas de cores e sugestões que valorizam cada tipo de ensaio. A regra de ouro: vista roupas em que você se sinta você mesmo. Fotos boas começam com pessoas confortáveis.",
  },
  {
    pergunta: "Quais são as formas de pagamento?",
    resposta:
      "Pix, transferência, cartão de crédito em até 6x ou boleto. Para casamentos, elaboramos um plano de pagamento personalizado que caiba no seu orçamento sem aperto — afinal, casar já é caro o suficiente.",
  },
  {
    pergunta: "Vocês viajam para outras cidades?",
    resposta:
      "Sim! Atendemos todo o Brasil e já registramos histórias em mais de dez estados. Para ensaios fora da nossa região, incluímos apenas os custos de deslocamento e hospedagem — a paixão por viajar é por nossa conta.",
  },
  {
    pergunta: "Como recebo as imagens finais?",
    resposta:
      "Você recebe uma galeria online pessoal, protegida por senha, com download em alta resolução e opção de impressão profissional. As fotos ficam disponíveis por 60 dias (ensaios) ou 1 ano (casamentos e Experiência Memória Viva) — e guardamos um backup extra por 5 anos, porque memória viva é compromisso pra valer.",
  },
]

export const servicos = [
  "Ensaio de casal",
  "Ensaio de família",
  "Ensaio de gestante",
  "Casamento",
  "Aniversário",
  "Recém-nascido",
  "Outro / não sei ainda",
]

export const stats = [
  { valor: "12", rotulo: "anos de história" },
  { valor: "750+", rotulo: "histórias eternizadas" },
  { valor: "30 mil", rotulo: "fotografias entregues" },
  { valor: "2", rotulo: "fotógrafos, um só olhar" },
]
