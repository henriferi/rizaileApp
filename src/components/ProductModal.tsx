import { Products } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; 

interface ProductModalProps {
  product: Products | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const { addToCart } = useCart();
  const VENDEDORA_WHATSAPP = "5581996825207"; 
  if (!product) {
    return null;
  }

  const generateWhatsAppLink = () => {
    const message = `Olá! Tenho interesse no produto: *${product.name}* (R$ ${product.price.toFixed(2).replace('.', ',')}). Podemos continuar?`;
    return `https://wa.me/${VENDEDORA_WHATSAPP}?text=${encodeURIComponent(message)}`;
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } },
    exit: { y: "100vh", opacity: 0 },
  } as const;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="product-modal__backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="product-modal__content"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="product-modal__close-btn" onClick={onClose}>
              <X size={28} />
            </button>
            <div className="product-modal__image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-modal__details">
              <span className="product-modal__category">{product.category}</span>
              <h2>{product.name}</h2>
              <p className="product-modal__description">{product.description}</p>
              <p className="product-modal__price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
              <div className="product-modal__actions">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp"
                >
                  <FaWhatsapp size={22} />
                  Comprar via WhatsApp
                </a>
                <button
                  className="btn btn--primary"
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                >
                  <ShoppingCartIcon size={20} />
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;