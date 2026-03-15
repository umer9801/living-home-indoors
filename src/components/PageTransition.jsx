import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: 'blur(10px)'
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)'
  },
  out: {
    opacity: 0,
    y: -40,
    scale: 1.02,
    filter: 'blur(10px)'
  },
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for snappy yet smooth motion
  duration: 0.7,
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
