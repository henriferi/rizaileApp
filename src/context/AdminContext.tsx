import { createContext, useState, useContext, type ReactNode } from 'react';
import { Product } from '../types/Product';
import { Slide } from '../types/Slide';
import { mockProducts } from '../data/mockProducts';

// Slides iniciais do banner
const initialSlides: Slide[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Conjuntos de Legging',
    subtitle: 'Conforto e estilo para seus treinos',
    description: 'Descubra nossa coleção de conjuntos de legging com tecnologia dry-fit e alta compressão',
    cta: 'Ver Coleção',
    active: true,
    order: 1,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Conjuntos de Short',
    subtitle: 'Liberdade de movimento total',
    description: 'Perfeitos para corrida, funcional e atividades ao ar livre',
    cta: 'Explorar',
    active: true,
    order: 2,
    createdAt: '2024-01-16',
    updatedAt: '2024-01-16'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Moda Praia Fitness',
    subtitle: 'Estilo e proteção na praia',
    description: 'Biquínis e maiôs esportivos para suas atividades aquáticas',
    cta: 'Descobrir',
    active: true,
    order: 3,
    createdAt: '2024-01-17',
    updatedAt: '2024-01-17'
  }
];

interface AdminContextType {
  // Products
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'criadoEm' | 'atualizadoEm'>) => void;
  updateProduct: (id: number, product: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  
  // Slides
  slides: Slide[];
  addSlide: (slide: Omit<Slide, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateSlide: (id: number, slide: Partial<Slide>) => void;
  deleteSlide: (id: number) => void;
  
  // Auth
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Senha simples para demo (em produção seria mais seguro)
  const ADMIN_PASSWORD = 'admin123';

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  // Product management
  const addProduct = (productData: Omit<Product, 'id' | 'criadoEm' | 'atualizadoEm'>) => {
    const newProduct: Product = {
      ...productData,
      id: Math.max(...products.map(p => p.id)) + 1,
      criadoEm: new Date().toISOString().split('T')[0],
      atualizadoEm: new Date().toISOString().split('T')[0]
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: number, productData: Partial<Product>) => {
    setProducts(prev => prev.map(product => 
      product.id === id 
        ? { ...product, ...productData, atualizadoEm: new Date().toISOString().split('T')[0] }
        : product
    ));
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  // Slide management
  const addSlide = (slideData: Omit<Slide, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newSlide: Slide = {
      ...slideData,
      id: Math.max(...slides.map(s => s.id)) + 1,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setSlides(prev => [...prev, newSlide]);
  };

  const updateSlide = (id: number, slideData: Partial<Slide>) => {
    setSlides(prev => prev.map(slide => 
      slide.id === id 
        ? { ...slide, ...slideData, updatedAt: new Date().toISOString().split('T')[0] }
        : slide
    ));
  };

  const deleteSlide = (id: number) => {
    setSlides(prev => prev.filter(slide => slide.id !== id));
  };

  const value = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    slides,
    addSlide,
    updateSlide,
    deleteSlide,
    isAuthenticated,
    login,
    logout
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin deve ser usado dentro de um AdminProvider');
  }
  return context;
};