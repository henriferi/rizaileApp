import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const VENDEDORA_WHATSAPP = "5581996825207";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Logo e Descrição */}
          <div className="footer__section">
            <h3 className="footer__logo">Rizaile</h3>
            <p className="footer__description">
              Moda fitness feminina que combina estilo, conforto e qualidade. 
              Desperte sua melhor versão com nossas peças exclusivas.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a 
                href={`https://wa.me/${VENDEDORA_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link" 
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="footer__section">
            <h4 className="footer__title">Links Rápidos</h4>
            <ul className="footer__links">
              <li><a href="#catalogo">Catálogo</a></li>
              <li><a href="#populares">Mais Populares</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div className="footer__section">
            <h4 className="footer__title">Categorias</h4>
            <ul className="footer__links">
              <li><a href="#catalogo">Conjuntos de Legging</a></li>
              <li><a href="#catalogo">Conjuntos de Short</a></li>
              <li><a href="#catalogo">Moda Praia</a></li>
              <li><a href="#catalogo">Meias Fitness</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="footer__section">
            <h4 className="footer__title">Contato</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <Phone size={16} />
                <span>(81) 99682-5207</span>
              </div>
              <div className="footer__contact-item">
                <Mail size={16} />
                <span>contato@rizaile.com.br</span>
              </div>
              <div className="footer__contact-item">
                <MapPin size={16} />
                <span>Recife, PE - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Rizaile. Todos os direitos reservados.
          </p>
          <p className="footer__made-with">
            Feito com <Heart size={14} fill="currentColor" /> para mulheres que amam se exercitar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;