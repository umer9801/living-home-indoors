import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Minimalist Kitchen',
      category: 'kitchens',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'Classic White Cabinets',
      category: 'cabinets',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: 'Open Concept Renovation',
      category: 'renovations',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 4,
      title: 'Contemporary Island Design',
      category: 'kitchens',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 5,
      title: 'Custom Bathroom Vanity',
      category: 'cabinets',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 6,
      title: 'Full Home Transformation',
      category: 'renovations',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchens', label: 'Kitchen Design' },
    { id: 'cabinets', label: 'Custom Cabinets' },
    { id: 'renovations', label: 'Renovations' },
  ];

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
            Our <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <motion.p 
            className="header-desc mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of our finest work across Ottawa. See how we transform spaces into breathtaking living environments.
          </motion.p>
        </div>
      </section>

      <section className="portfolio-section section-padding">
        <div className="container">
          {/* Filters */}
          <div className="portfolio-filters">
            {filters.map(f => (
              <button 
                key={f.id}
                className={`filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="gallery-grid">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-item"
                >
                  <img src={project.image} alt={project.title} />
                  <div className="gallery-overlay">
                    <div className="gallery-info">
                      <h3>{project.title}</h3>
                      <p>{filters.find(f => f.id === project.category)?.label}</p>
                    </div>
                    <button className="zoom-btn" aria-label="View Project">
                      <ZoomIn size={24} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
