// src/types/Product.ts
export interface Product {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  imagem: string;
  imagens?: string[];
  descricao: string;
  popular: boolean;
  criadoEm: string;
  atualizadoEm: string;
}
