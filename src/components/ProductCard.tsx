import { Product } from '../types/Product';
import { ShoppingCart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onImageClick: () => void;
}

const ProductCard = ({ product, onImageClick }: ProductCardProps) => {
  const { addToCart } = useCart();
  const VENDEDORA_WHATSAPP = "5581996825207";

  const generateWhatsAppLink = () => {
    const message = `Olá! Tenho interesse no produto: *${product.nome}* (R$ ${product.preco.toFixed(2).replace('.', ',')}). Podemos continuar?`;
    return `https://wa.me/${VENDEDORA_WHATSAPP}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper" onClick={onImageClick}>
        <img src={product.imagem} alt={product.nome} className="product-card__image" />
        <div className="product-card__overlay">
          <p>Ver Detalhes</p>
        </div>
      </div>
      <div className="product-card__info">
        <h3>{product.nome}</h3>
        <p className="product-card__price">
          R$ {product.preco.toFixed(2).replace('.', ',')}
        </p>

        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp"
        >
          <FaWhatsapp size={22} />
          Fazer pedido
        </a>

        <button className="product-card__button" onClick={() => addToCart(product)}>
          <ShoppingCart size={18} />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
