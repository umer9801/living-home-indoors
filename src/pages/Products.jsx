import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import './Products.css';

const Products = () => {
  const productCategories = [
    {
      title: "Modern European Cabinets",
      desc: "Sleek, handle-less designs with high-gloss or matte finishes. Perfect for contemporary Ottawa homes seeking a minimalist aesthetic.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Flat panel doors", "Integrated channels", "Soft-close mechanism"]
    },
    {
      title: "Classic Shaker Style",
      desc: "Timeless elegance that blends seamlessly with both traditional and transitional decor. Crafted from solid wood for ultimate durability.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["5-piece door construction", "Versatile painted finishes", "Durable hardwood frames"]
    },
    {
      title: "Rustic Farmhouse",
      desc: "Warm woods, distressed finishes, and charming details. Bring a cozy, inviting atmosphere to your kitchen space.",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Distressed textures", "Natural wood grains", "Decorative molding"]
    },
    {
      title: "Premium Hardware",
      desc: "The jewelry of your cabinetry. Choose from our curated selection of handles, knobs, and pulls in various premium finishes.",
      image: "https://images.unsplash.com/photo-1620645607379-46ab90c50ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Brushed Brass", "Matte Black", "Polished Nickel"]
    }
  ];

  return (
    <PageTransition>
      {/* Page Header */}
      <section className="page-header section-padding">
        <div className="container text-center">
          <motion.h1 
            className="header-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Premium <span className="text-gradient">Products</span>
          </motion.h1>
          <motion.p 
            className="header-desc mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our curated selection of custom cabinetry, hardware, and finishes designed to elevate your living spaces.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="products-grid-section section-padding">
        <div className="container">
          <div className="products-grid">
            {productCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="product-card glass"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="product-image">
                  <img src={category.image} alt={category.title} />
                  <div className="product-overlay">
                    <Link to="/contact" className="btn btn-outline product-btn">Inquire Now</Link>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">{category.title}</h3>
                  <p className="product-desc">{category.desc}</p>
                  <ul className="product-features">
                    {category.features.map((feature, i) => (
                      <li key={i}><Check size={16} className="text-gold" /> {feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Millwork Banner */}
      <section className="millwork-banner">
        <div className="container">
          <div className="millwork-content glass">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-4">Looking for something unique?</h2>
              <p className="mb-6">
                Our in-house master carpenters can create fully custom millwork, built-ins, and specialty storage solutions perfectly tailored to your space's exact dimensions and your personal aesthetic.
              </p>
              <Link to="/contact" className="btn btn-primary inline-flex">
                Discuss Custom Millwork <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Products;
