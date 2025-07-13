import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from '../context/AdminContext';

const HeroBanner = () => {
  const { slides } = useAdmin();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filtrar apenas slides ativos e ordenar
  const activeSlides = slides.filter(slide => slide.active).sort((a, b) => a.order - b.order);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  useEffect(() => {
    if (activeSlides.length === 0) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [activeSlides.length]);

  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Se não há slides ativos, não renderizar o banner
  if (activeSlides.length === 0) {
    return null;
  }
  return (
    <section className="hero-banner">
      <div className="hero-banner__container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-banner__slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="hero-banner__image-wrapper">
              <img 
                src={activeSlides[currentSlide].image} 
                alt={activeSlides[currentSlide].title}
                className="hero-banner__image"
              />
              <div className="hero-banner__overlay" />
            </div>
            
            <div className="hero-banner__content">
              <motion.h1 
                className="hero-banner__title"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {activeSlides[currentSlide].title}
              </motion.h1>
              
              <motion.h2 
                className="hero-banner__subtitle"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {activeSlides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p 
                className="hero-banner__description"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {activeSlides[currentSlide].description}
              </motion.p>
              
              <motion.button 
                className="hero-banner__cta"
                onClick={scrollToCatalog}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} />
                {activeSlides[currentSlide].cta}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button 
          className="hero-banner__nav hero-banner__nav--prev"
          onClick={prevSlide}
          aria-label="Slide anterior"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          className="hero-banner__nav hero-banner__nav--next"
          onClick={nextSlide}
          aria-label="Próximo slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="hero-banner__dots">
          {activeSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-banner__dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;