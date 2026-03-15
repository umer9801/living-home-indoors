import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="hero">
      <motion.div 
        className="hero-bg-parallax"
        style={{ y: backgroundY }}
      ></motion.div>
      <div className="hero-overlay"></div>
      
      {/* Floating Particles/Shapes */}
      <div className="floating-elements w-full h-full absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-gold/20 blur-xl"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight - 200],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              background: 'radial-gradient(circle, rgba(229,193,88,0.15) 0%, rgba(229,193,88,0) 70%)'
            }}
          />
        ))}
      </div>

      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Elevate Your <br />
            <span className="text-gradient inline-flex items-center gap-4">
              Living Space <Sparkles className="text-gold animate-pulse" size={40} />
            </span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Premium kitchen design, custom cabinets, and full-scale renovations in Ottawa. We bring your vision to life with uncompromising quality and craftsmanship.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/projects" className="btn btn-primary hero-btn">
              View Our Work <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/contact" className="btn btn-outline hero-btn">
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
