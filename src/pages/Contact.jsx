import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Contact.css';

const Contact = () => {
  return (
    <PageTransition>
      <section className="page-header section-padding text-center">
        <div className="container">
          <motion.h1 
            className="header-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p 
            className="header-desc mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start your renovation journey? Reach out to schedule a consultation with our experts in Ottawa.
          </motion.p>
        </div>
      </section>

      <section className="section-padding contact-section">
        <div className="container">
          <div className="contact-grid">
            
            <motion.div 
              className="contact-info-col glass"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="mb-6">Contact Information</h3>
              <p className="mb-8 text-secondary">
                We'd love to hear about your project. Fill out the form or contact us directly using the information below.
              </p>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="info-content">
                    <h4>Visit Us</h4>
                    <p>123 Design Avenue<br/>Ottawa, ON K1A 0B1<br/>Canada</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div className="info-content">
                    <h4>Call Us</h4>
                    <p>(613) 555-0199<br/>Mon-Fri, 8am-5pm</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div className="info-content">
                    <h4>Email Us</h4>
                    <p>info@livinghomeindoors.ca<br/>design@livinghomeindoors.ca</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-col"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" id="firstName" className="form-control" placeholder="John" />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className="form-group">
                    <input type="text" id="lastName" className="form-control" placeholder="Doe" />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input type="email" id="email" className="form-control" placeholder="john@example.com" />
                    <label htmlFor="email">Email Address</label>
                  </div>
                  <div className="form-group">
                    <input type="tel" id="phone" className="form-control" placeholder="(613) 555-0000" />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                </div>

                <div className="form-group">
                  <select id="service" className="form-control select-control" defaultValue="">
                    <option value="" disabled hidden>Select a service...</option>
                    <option value="kitchen">Kitchen Design</option>
                    <option value="cabinets">Custom Cabinets</option>
                    <option value="renovation">Full Renovation</option>
                    <option value="other">Other</option>
                  </select>
                  <label htmlFor="service" style={{ top: '-10px', fontSize: '0.8rem', color: 'var(--accent-gold)' }}>Service of Interest</label>
                </div>

                <div className="form-group">
                  <textarea id="message" className="form-control" rows="5" placeholder="Tell us about your project..."></textarea>
                  <label htmlFor="message">Project Details</label>
                </div>

                <button type="submit" className="btn btn-primary submit-btn mt-4">
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
