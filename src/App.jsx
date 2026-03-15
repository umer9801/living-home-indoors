import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Page Imports
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Products from './pages/Products';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      <main className="main-content" style={{ minHeight: 'calc(100vh - 400px)' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<Products />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
