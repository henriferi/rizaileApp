import { Shield, Truck, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield size={40} />,
      title: "Qualidade Garantida",
      description: "Tecidos premium com tecnologia dry-fit e proteção UV"
    },
    {
      icon: <Truck size={40} />,
      title: "Entrega Rápida",
      description: "Enviamos para todo Brasil com frete grátis acima de R$ 200"
    },
    {
      icon: <Heart size={40} />,
      title: "Conforto Total",
      description: "Modelagem anatômica que valoriza seu corpo e performance"
    },
    {
      icon: <Award size={40} />,
      title: "Satisfação 100%",
      description: "Garantia de troca em até 30 dias se não ficar satisfeita"
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <motion.div 
          className="features-section__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Por que escolher a Rizaile?</h2>
          <p>Compromisso com qualidade, conforto e estilo em cada peça</p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-card__icon">
                {feature.icon}
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;