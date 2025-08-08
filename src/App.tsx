import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAdmin } from './context/AdminContext';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartSidebar from './components/CartSidebar';
import ShinyText from './components/ShinyText';
import { Product } from './types/Product';
import { mockProducts } from './data/mockProducts';

function MainApp() {
  const [products, setProducts] = useState<Product[]>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [loading, setLoading] = useState(false);

  const filters = [
    { label: 'Todos', value: 'Todos' },
    { label: 'Conjunto Legging', value: 'ConjuntoLegging' },
    { label: 'Conjunto Short', value: 'ConjuntoShort' },
    { label: 'Moda Praia', value: 'ModaPraia' },
    { label: 'Meias', value: 'Meias' }
  ];


  // Usando produtos mock locais
  useEffect(() => {
    setProducts(mockProducts);
    setLoading(false);
  }, []);

  const filteredProducts = activeFilter === 'Todos'
    ? products
    : products?.filter(p => p.categoria === activeFilter);

  const popularProducts = products?.filter(p => p.popular);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  if (loading) return <p style={{ textAlign: 'center' }}>Carregando produtos...</p>;

  return (
    <>
      <Header onCartClick={() => setCartOpen(true)} />
      <HeroBanner />

      {/* Seção de Benefícios */}
      <FeaturesSection />

      <main className="container">
        {/* Seção de Catálogo */}
        <section id="catalogo" className="page-section">
          <ShinyText text="Encontre seu look perfeito" />

          <div className="filters">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`filters__btn ${activeFilter === filter.value ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts?.map(product => (
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
            {popularProducts?.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onImageClick={() => handleOpenModal(product)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Seção de Depoimentos */}
      <TestimonialsSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />

      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
