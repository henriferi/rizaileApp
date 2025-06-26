// src/components/ProductCard.tsx
import { Products } from '../data/products';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Products;
  onImageClick: () => void;
}

const ProductCard = ({ product, onImageClick }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper" onClick={onImageClick}>
        <img src={product.image} alt={product.name} className="product-card__image" />
        <div className="product-card__overlay">
          <p>Ver Detalhes</p>
        </div>
      </div>
      <div className="product-card__info">
        <h3>{product.name}</h3>
        <p className="product-card__price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
        <button className="product-card__button" onClick={() => addToCart(product)}>
          <ShoppingCart size={18} />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;