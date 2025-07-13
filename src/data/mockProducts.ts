import { Product } from '../types/Product';

export const mockProducts: Product[] = [
  // Conjuntos de Legging
  {
    id: 1,
    nome: "Conjunto PowerFit Rosa Neon",
    preco: 189.90,
    categoria: "ConjuntoLegging",
    imagem: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Conjunto de alta compressão com tecido que não marca e tecnologia dry-fit. Top com bojo removível e legging com cintura alta modeladora. Perfeito para treinos intensos e yoga.",
    popular: true,
    criadoEm: "2024-01-15",
    atualizadoEm: "2024-01-15"
  },
  {
    id: 2,
    nome: "Conjunto Seamless Preto",
    preco: 199.90,
    categoria: "ConjuntoLegging",
    imagem: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Conjunto sem costura para máximo conforto. Tecido ultra macio que se ajusta perfeitamente ao corpo, oferecendo liberdade total de movimento durante os exercícios.",
    popular: true,
    criadoEm: "2024-01-16",
    atualizadoEm: "2024-01-16"
  },
  {
    id: 3,
    nome: "Conjunto Gradient Azul",
    preco: 179.90,
    categoria: "ConjuntoLegging",
    imagem: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Design exclusivo com estampa degradê. Tecido com proteção UV e tecnologia anti-odor. Ideal para atividades ao ar livre e academia.",
    popular: false,
    criadoEm: "2024-01-17",
    atualizadoEm: "2024-01-17"
  },
  {
    id: 4,
    nome: "Conjunto Marble Cinza",
    preco: 169.90,
    categoria: "ConjuntoLegging",
    imagem: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Estampa marmorizada moderna e sofisticada. Tecido de alta qualidade com elasticidade em 4 direções para máxima flexibilidade.",
    popular: false,
    criadoEm: "2024-01-18",
    atualizadoEm: "2024-01-18"
  },

  // Conjuntos de Short
  {
    id: 5,
    nome: "Conjunto Short Runner Pink",
    preco: 149.90,
    categoria: "ConjuntoShort",
    imagem: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Conjunto perfeito para corrida e treinos funcionais. Short com compressão média e top com sustentação alta. Tecido respirável e secagem rápida.",
    popular: true,
    criadoEm: "2024-01-19",
    atualizadoEm: "2024-01-19"
  },
  {
    id: 6,
    nome: "Conjunto Short Neon Verde",
    preco: 159.90,
    categoria: "ConjuntoShort",
    imagem: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Cores vibrantes para quem gosta de se destacar. Short com bolso lateral e top cruzado nas costas. Ideal para atividades outdoor.",
    popular: true,
    criadoEm: "2024-01-20",
    atualizadoEm: "2024-01-20"
  },
  {
    id: 7,
    nome: "Conjunto Short Classic Preto",
    preco: 139.90,
    categoria: "ConjuntoShort",
    imagem: "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Clássico e versátil, combina com tudo. Short com cintura alta e top básico. Perfeito para iniciantes no mundo fitness.",
    popular: false,
    criadoEm: "2024-01-21",
    atualizadoEm: "2024-01-21"
  },

  // Moda Praia
  {
    id: 8,
    nome: "Biquíni Esportivo Coral",
    preco: 119.90,
    categoria: "ModaPraia",
    imagem: "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1263347/pexels-photo-1263347.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1263346/pexels-photo-1263346.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Biquíni esportivo com proteção UV 50+. Top com bojo removível e calcinha com amarração lateral. Ideal para esportes aquáticos.",
    popular: true,
    criadoEm: "2024-01-22",
    atualizadoEm: "2024-01-22"
  },
  {
    id: 9,
    nome: "Maiô Fitness Azul Marinho",
    preco: 159.90,
    categoria: "ModaPraia",
    imagem: "https://images.pexels.com/photos/1263347/pexels-photo-1263347.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1263347/pexels-photo-1263347.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1263346/pexels-photo-1263346.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Maiô de uma peça com recortes estratégicos. Tecido com tecnologia chlorine resistant para piscinas. Design moderno e confortável.",
    popular: false,
    criadoEm: "2024-01-23",
    atualizadoEm: "2024-01-23"
  },
  {
    id: 10,
    nome: "Biquíni High Waist Listrado",
    preco: 129.90,
    categoria: "ModaPraia",
    imagem: "https://images.pexels.com/photos/1263346/pexels-photo-1263346.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1263346/pexels-photo-1263346.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1263347/pexels-photo-1263347.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Estilo retrô com cintura alta modeladora. Estampa listrada clássica e atemporal. Tecido de secagem rápida e proteção solar.",
    popular: true,
    criadoEm: "2024-01-24",
    atualizadoEm: "2024-01-24"
  },

  // Meias
  {
    id: 11,
    nome: "Kit 3 Meias Fitness Coloridas",
    preco: 39.90,
    categoria: "Meias",
    imagem: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Kit com 3 pares de meias esportivas em cores vibrantes. Tecido com tecnologia anti-odor e amortecimento na sola.",
    popular: false,
    criadoEm: "2024-01-25",
    atualizadoEm: "2024-01-25"
  },
  {
    id: 12,
    nome: "Meias Compressão Running",
    preco: 49.90,
    categoria: "Meias",
    imagem: "https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=800",
    imagens: [
      "https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    descricao: "Meias de compressão graduada para corrida. Melhora a circulação e reduz a fadiga muscular. Tecido respirável e anatômico.",
    popular: true,
    criadoEm: "2024-01-26",
    atualizadoEm: "2024-01-26"
  }
];