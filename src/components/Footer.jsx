import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <Link to="/" className="brand mb-4">
            <span className="brand-living">LIVING</span>
            <span className="brand-home">HOME INDOORS</span>
          </Link>
          <p className="footer-desc">
            Premium kitchen design, custom cabinets, and full-scale renovations in Ottawa, Canada. Elevating your living spaces with uncompromising quality.
          </p>
          <div className="social-links mt-4">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/why-us">Why Us?</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services#kitchens">Kitchen Design</Link></li>
            <li><Link to="/services#cabinets">Custom Cabinets</Link></li>
            <li><Link to="/services#installations">Cabinet Installation</Link></li>
            <li><Link to="/services#renovations">Full Renovations</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="contact-item">
            <MapPin size={18} className="contact-icon" />
            <span>Ottawa, ON, Canada</span>
          </div>
          <div className="contact-item">
            <Phone size={18} className="contact-icon" />
            <span>(613) 555-0199</span>
          </div>
          <div className="contact-item">
            <Mail size={18} className="contact-icon" />
            <span>info@livinghomeindoors.ca</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Living Home Indoors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
