import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Clock, HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import './WhyUs.css';

const AnimatedCounter = ({ from, to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function for smoother slowdown at the end (easeOutQuart)
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

const WhyUs = () => {
  const stats = [
    { target: 15, suffix: '+', label: 'Years Experience' },
    { target: 500, suffix: '+', label: 'Projects Completed' },
    { target: 100, suffix: '%', label: 'Client Satisfaction' },
    { target: 1, suffix: '', label: 'Dedicated Team' }
  ];

  const values = [
    {
      icon: <Award size={32} />,
      title: 'Uncompromising Quality',
      desc: 'We never cut corners. From the materials we source to our final finishing touches, excellence is our standard.'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaborative Approach',
      desc: 'Your vision leads the way. We listen intently and work closely with you throughout the entire process.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Reliable Timelines',
      desc: 'We recognize that renovations disrupt your life. We provide realistic schedules and stick to them.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Fully Insured & Licensed',
      desc: 'Peace of mind guaranteed. We operate with full licensing and comprehensive insurance for all our projects.'
    },
    {
      icon: <HeartHandshake size={32} />,
      title: 'Local to Ottawa',
      desc: 'Proudly serving the Ottawa region. We understand local building codes and aesthetics.'
    }
  ];

  return (
    <PageTransition>
      {/* Header */}
      <section className="page-header section-padding text-center">
        <div className="container">
          <motion.h1 
            className="header-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="text-gradient">Living Home Indoors</span>
          </motion.h1>
          <motion.p 
            className="header-desc mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A reputation built on trust, craftsmanship, and a genuine passion for transforming homes in the Ottawa community.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-image-col"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="image-stack">
                <img 
                  src="https://images.unsplash.com/photo-1581858326442-167882255d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Team at Work" 
                  className="img-back"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Finished Project" 
                  className="img-front"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="story-text-col"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-6">Building Dreams Since 2008</h2>
              <p className="mb-4 text-secondary text-lg">
                Living Home Indoors began with a simple belief: that everyone deserves a home that not only functions perfectly but also inspires them every single day.
              </p>
              <p className="mb-6 text-secondary text-lg">
                Over the past 15 years, we have grown from a small custom cabinet shop into one of Ottawa's premier full-service renovation companies. What hasn't changed is our dedication to the craft and our commitment to our clients. When you work with us, you're not just hiring contractors; you're partnering with craftsmen who care about your home as much as you do.
              </p>
              
              <div className="stats-grid mt-8">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <h3 className="stat-number text-gradient">
                      <AnimatedCounter from={0} to={stat.target} suffix={stat.suffix} />
                    </h3>
                    <p className="stat-label">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section-padding glass">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="header-desc mx-auto mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The principles that guide every cut, every cabinet, and every client interaction.
            </motion.p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="value-card glass-glow interactive"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="container relative z-10">
          <h2>Experience the Difference</h2>
          <p className="header-desc mx-auto mt-4 mb-8">Let us show you what true craftsmanship looks like.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Start Your Renovation Journey</Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default WhyUs;
