import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Conjuntos de Legging',
      subtitle: 'Conforto e estilo para seus treinos',
      description: 'Descubra nossa coleção de conjuntos de legging com tecnologia dry-fit e alta compressão',
      cta: 'Ver Coleção'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Conjuntos de Short',
      subtitle: 'Liberdade de movimento total',
      description: 'Perfeitos para corrida, funcional e atividades ao ar livre',
      cta: 'Explorar'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Moda Praia Fitness',
      subtitle: 'Estilo e proteção na praia',
      description: 'Biquínis e maiôs esportivos para suas atividades aquáticas',
      cta: 'Descobrir'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

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
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
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
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.h2 
                className="hero-banner__subtitle"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p 
                className="hero-banner__description"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {slides[currentSlide].description}
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
                {slides[currentSlide].cta}
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
          {slides.map((_, index) => (
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