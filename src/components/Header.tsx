// src/components/Header.tsx
import { ShoppingBag, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo">
          <Flame size={28} />
          <span>Rizaile</span>
        </Link>
        <nav className="header__nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#populares">Populares</a>
          <a href="#">Contato</a>
          <Link to="/admin" style={{ color: '#6c757d', fontSize: '0.9rem' }}>
            Admin
          </Link>
        </nav>
        <div className="header__cart-icon" onClick={onCartClick}>
          <ShoppingBag size={28} />
          {totalItems > 0 && (
            <span className="header__cart-badge">{totalItems}</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;