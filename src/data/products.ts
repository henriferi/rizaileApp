// 1. Defina a interface (o "molde") para um produto.
// O "export" permite que outros arquivos importem esta interface.
export interface Products {
  id: number;
  name: string;
  price: number;
  category: 'Legging' | 'Top' | 'Conjunto';
  image: string; // Este será o caminho para a imagem
  description: string;
  isPopular: boolean;
}

// 2. Crie uma lista (array) de produtos usando a interface como modelo.
// O "export" também permite que a lista de produtos seja importada.
export const products: Products[] = [
  {
    id: 1,
    name: 'Legging PowerFit Rosa',
    price: 189.90,
    category: 'Legging',
    // IMPORTANTE: Este caminho espera que suas imagens estejam na pasta /public/images/
    image: '/images/legging1.jpg',
    description: 'Legging de alta compressão com tecido que não marca e tecnologia dry-fit. Perfeita para treinos intensos.',
    isPopular: true,
  },
  {
    id: 2,
    name: 'Top Impacto Preto',
    price: 89.90,
    category: 'Top',
    image: '/images/top1.jpg',
    description: 'Top com sustentação média, alças cruzadas e design moderno. Conforto e estilo para qualquer atividade.',
    isPopular: true,
  },
  {
    id: 3,
    name: 'Conjunto Vitality Azul',
    price: 279.90,
    category: 'Conjunto',
    image: '/images/conjunto1.jpg',
    description: 'Conjunto de top e short com cores vibrantes e modelagem que valoriza o corpo. Ideal para corrida e treinos funcionais.',
    isPopular: false,
  },
  {
    id: 4,
    name: 'Legging Sem Costura Cinza',
    price: 199.90,
    category: 'Legging',
    image: '/images/legging2.jpg',
    description: 'Conforto máximo com nossa legging sem costura. Se ajusta perfeitamente ao corpo, oferecendo liberdade total de movimento.',
    isPopular: true,
  },
  {
    id: 5,
    name: 'Top Alça Fina Branco',
    price: 79.90,
    category: 'Top',
    image: '/images/top2.jpg',
    description: 'Top básico e essencial com alças finas e tecido de toque macio. Ótimo para combinar com qualquer peça.',
    isPopular: false,
  },
];