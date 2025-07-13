import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Carolina",
      location: "São Paulo, SP",
      rating: 5,
      comment: "Simplesmente apaixonada pelos conjuntos! A qualidade é incrível e o tecido não marca nada. Já comprei 3 conjuntos e pretendo comprar mais!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      name: "Mariana Silva",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      comment: "A entrega foi super rápida e o produto chegou exatamente como nas fotos. O conjunto de short é perfeito para corrida. Recomendo muito!",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 3,
      name: "Juliana Costa",
      location: "Belo Horizonte, MG",
      rating: 5,
      comment: "Finalmente encontrei uma marca que entende o corpo feminino! Os biquínis são lindos e super confortáveis. Atendimento nota 10!",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div 
          className="testimonials-section__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>O que nossas clientes dizem</h2>
          <p>Mais de 10.000 mulheres já escolheram a Rizaile</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-card__rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="testimonial-card__comment">"{testimonial.comment}"</p>
              
              <div className="testimonial-card__author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-card__avatar"
                />
                <div>
                  <h4 className="testimonial-card__name">{testimonial.name}</h4>
                  <p className="testimonial-card__location">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;