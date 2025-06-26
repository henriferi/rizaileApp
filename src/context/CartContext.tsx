import { createContext, useState, useContext, type ReactNode } from 'react';
// Certifique-se de que o caminho para seu arquivo de dados está correto
import { Products } from '../data/products'; 


// 1. Defina os tipos
export interface CartItem extends Products {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Products) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  // Adicione estes para o sidebar
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

// 2. Crie o Contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Crie o Provedor (Provider)
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: Products) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        // Se o item já existe, aumenta a quantidade
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Se não existe, adiciona ao carrinho com quantidade 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // Abre o carrinho ao adicionar um novo item
    openCart();
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // 4. Forneça os valores para os componentes filhos
  const value = { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    clearCart,
    isCartOpen,
    openCart,
    closeCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// 5. Crie um hook customizado para facilitar o uso do contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};