import { Mail, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <motion.div 
          className="newsletter-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content__text">
            <div className="newsletter-content__icon">
              <Gift size={48} />
            </div>
            <h2>Ganhe 10% OFF na primeira compra!</h2>
            <p>Cadastre-se em nossa newsletter e receba ofertas exclusivas, lançamentos e dicas de moda fitness</p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-form__input-group">
              <Mail className="newsletter-form__icon" size={20} />
              <input
                type="email"
                placeholder="Digite seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-form__input"
                required
              />
              <motion.button
                type="submit"
                className="newsletter-form__button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quero o desconto!
              </motion.button>
            </div>
            
            {isSubscribed && (
              <motion.p 
                className="newsletter-form__success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✨ Cadastro realizado! Verifique seu e-mail para receber o cupom de desconto.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;