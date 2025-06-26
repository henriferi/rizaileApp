import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const VENDEDORA_WHATSAPP = "5581996825207";

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const generateCartWhatsAppLink = () => {
    let message = "Olá! Gostaria de finalizar minha compra com os seguintes itens:\n\n";
    cartItems.forEach(item => {
      message += `*${item.name}* (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    message += `\n*Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}*`;
    return `https://wa.me/${VENDEDORA_WHATSAPP}?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-sidebar__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="cart-sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
          >
            <div className="cart-sidebar__header">
              <h3>Meu Carrinho</h3>
              <button onClick={onClose}><X /></button>
            </div>

            {cartItems.length === 0 ? (
              <p className="cart-sidebar__empty">Seu carrinho está vazio.</p>
            ) : (
              <>
                <div className="cart-sidebar__items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item__image" />
                      <div className="cart-item__details">
                        <span className="cart-item__name">{item.name}</span>
                        <span className="cart-item__price">
                          {item.quantity} x R$ {item.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="cart-item__remove">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-sidebar__footer">
                  <div className="cart-sidebar__total">
                    <span>Total</span>
                    <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <a
                    href={generateCartWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp"
                  >
                    <FaWhatsapp size={20} />
                    Finalizar no WhatsApp
                  </a>
                  <button onClick={clearCart} className="cart-sidebar__clear-btn">
                    Limpar Carrinho
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;