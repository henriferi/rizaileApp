import { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartSidebar from './components/CartSidebar';
import { products, Products } from './data/products';
import ShinyText from './components/ShinyText';



function App() {
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);
  const [isCartOpen, setCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filters = ['Todos', 'Legging', 'Top', 'Conjunto'];

  const filteredProducts = activeFilter === 'Todos'
    ? products
    : products.filter(p => p.category === activeFilter);

  const popularProducts = products.filter(p => p.isPopular);

  const handleOpenModal = (product: Products) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header onCartClick={() => setCartOpen(true)} />

      <main className="container">
        {/* Seção de Catálogo */}
        <section id="catalogo" className="page-section">
          <ShinyText text="Encontre seu look perfeito" />

          <div className="filters">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filters__btn ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onImageClick={() => handleOpenModal(product)}
              />
            ))}
          </div>
        </section>

        {/* Seção Mais Populares */}
        <section id="populares" className="page-section">
          <h2 className="page-section__title">Mais Populares 🔥</h2>
          <div className="product-grid">
            {popularProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onImageClick={() => handleOpenModal(product)}
              />
            ))}
          </div>
        </section>
      </main>

      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default App;