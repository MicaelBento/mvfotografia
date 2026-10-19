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

export interface Plano {
  nome: string
  publico: string
  preco: string
  destaque?: boolean
  itens: string[]
}

export const planos: Plano[] = [
  {
    nome: "Essencial",
    publico: "Casais, gestantes e famílias",
    preco: "R$ 890",
    itens: [
      "1h de ensaio em um local",
      "30 fotografias selecionadas e tratadas",
      "Direção de pose leve e natural",
      "Galeria online por 60 dias",
      "Entrega em até 10 dias úteis",
    ],
  },
  {
    nome: "Experiência Memória Viva",
    publico: "Para quem quer viver sem pressa",
    preco: "R$ 1.690",
    destaque: true,
    itens: [
      "2h30 de ensaio em até 2 locais",
      "80 fotografias selecionadas e tratadas",
      "Encontro prévio para conhecer sua história",
      "Trocas de figurino inclusas",
      "Galeria online por 1 ano",
      "5 impressões fine art 20x25cm",
    ],
  },
  {
    nome: "Casamentos",
    publico: "O grande dia, do início ao fim",
    preco: "Sob consulta",
    itens: [
      "Ensaio pré-wedding incluso",
      "Cobertura documental completa",
      "Segundo fotógrafo no grande dia",
      "400+ fotografias tratadas",
      "Álbum de luxo 30x30cm",
      "Galeria online para convidados",
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
