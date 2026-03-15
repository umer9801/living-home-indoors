import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Home as HomeIcon, Layout, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Layout size={32} />,
      title: "Kitchen Design",
      desc: "Bespoke layouts maximizing functionality and aesthetic appeal."
    },
    {
      icon: <Wrench size={32} />,
      title: "Custom Cabinets",
      desc: "Hand-crafted cabinetry tailored precisely to your space."
    },
    {
      icon: <HomeIcon size={32} />,
      title: "Full Renovations",
      desc: "Complete interior transformations guided by experienced professionals."
    }
  ];

  return (
    <PageTransition>
      <Hero />
      
      {/* About Snippet Section */}
      <section className="section-padding about-preview">
        <div className="container about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-placeholder glass">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern Kitchen Renovation" 
                className="about-img"
              />
            </div>
            <div className="experience-badge glass">
              <span className="years">15+</span>
              <span className="text">Years<br/>Experience</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="section-subtitle">WELCOME TO LIVING HOME INDOORS</h5>
            <h2 className="section-title">Transforming Ottawa Homes Since 2008</h2>
            <p className="about-text">
              We specialize in creating breathtaking living spaces that reflect your unique style and needs. From concept to completion, our team handles every aspect of your renovation with meticulous attention to detail.
            </p>
            <motion.ul 
              className="feature-list"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                "Premium materials and finishes",
                "Transparent pricing and timelines",
                "Dedicated project management",
                "100% satisfaction guarantee"
              ].map((text, i) => (
                <motion.li 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                >
                  <CheckCircle size={20} className="check-icon" /> {text}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/why-us" className="btn btn-primary mt-4 interactive">
                Discover Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding services-preview">
        <div className="container">
          <div className="section-header text-center">
            <h5 className="section-subtitle">OUR EXPERTISE</h5>
            <h2 className="section-title">Comprehensive Solutions</h2>
            <p className="section-desc mx-auto">
              Whether you're looking for a simple cabinet upgrade or a complete home overhaul, we have the skills and experience to deliver outstanding results.
            </p>
          </div>

          <div className="services-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="service-card glass glass-glow interactive"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ y: -15 }}
              >
                <div className="service-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="service-title">{feature.title}</h3>
                <p className="service-desc">{feature.desc}</p>
                <Link to="/services" className="service-link">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container cta-content text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-desc">
              Schedule a free consultation with our design experts today and take the first step towards your dream home.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large inline-flex">
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
