import { motion } from 'framer-motion';
import { LayoutDashboard, Paintbrush, Hammer, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 'kitchens',
      title: 'Premium Kitchen Design',
      icon: <LayoutDashboard size={40} />,
      desc: 'The heart of your home deserves the best. We create kitchens that are as stunning as they are functional. From spatial planning to selecting the perfect finishes, our design process is highly collaborative and focused on your unique lifestyle.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: ['3D Spatial Rendering', 'Material Selection', 'Ergonomic Layouts', 'Lighting Design'],
      reverse: false
    },
    {
      id: 'cabinets',
      title: 'Custom Cabinetry',
      icon: <PenTool size={40} />,
      desc: 'Our bespoke cabinets are built to last. We use only the finest materials and hardware to ensure your storage solutions are both beautiful and durable. Available in a wide variety of styles, finishes, and configurations.',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: ['Precision Millwork', 'Soft-close Hardware', 'Custom Finishes', 'Space Optimization'],
      reverse: true
    },
    {
      id: 'installations',
      title: 'Professional Installation',
      icon: <Hammer size={40} />,
      desc: 'Flawless execution is key to a perfect finish. Our experienced installation team ensures that every cabinet, countertop, and fixture is fitted with absolute precision.',
      image: 'https://images.unsplash.com/photo-1581858326442-167882255d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: ['Expert Craftsmanship', 'Timely Execution', 'Clean Worksite', 'Final Inspection'],
      reverse: false
    },
    {
      id: 'renovations',
      title: 'Full-Scale Renovations',
      icon: <Paintbrush size={40} />,
      desc: 'Looking to transform your entire living space? We handle comprehensive renovations, coordinating all trades to deliver a seamless, stress-free experience from demolition to the final reveal.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: ['Project Management', 'Structural Changes', 'Permit Coordination', 'Turnkey Solutions'],
      reverse: true
    }
  ];

  return (
    <PageTransition>
      {/* Services Hero */}
      <section className="page-hero" style={{backgroundImage: "linear-gradient(rgba(13, 17, 23, 0.8), rgba(13, 17, 23, 0.9)), url('https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"}}>
        <div className="container text-center">
          <motion.h1 
            className="hero-title pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevating Ottawa homes with unparalleled craftsmanship and visionary design.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding">
        <div className="container services-container">
          {servicesList.map((service, index) => (
            <div key={service.id} id={service.id} className={`service-detail-row ${service.reverse ? 'reverse' : ''}`}>
              <motion.div 
                className="service-image-col"
                initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="image-frame glass">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon-large">
                    {service.icon}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="service-text-col"
                initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-gradient service-detail-title">{service.title}</h2>
                <p className="service-detail-desc">{service.desc}</p>
                
                <h4 className="features-heading">What's Included:</h4>
                <ul className="service-features-list">
                  {service.features.map((feature, i) => (
                    <li key={i}><span className="gold-dot"></span> {feature}</li>
                  ))}
                </ul>
                
                <Link to="/contact" className="btn btn-outline mt-8">
                  Get a Quote for this Service
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Ready Banner */}
      <section className="ready-banner glass text-center">
        <div className="container section-padding">
          <h2>Ready to bring your vision to life?</h2>
          <Link to="/projects" className="btn btn-primary mt-6">View Our Portfolio</Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
