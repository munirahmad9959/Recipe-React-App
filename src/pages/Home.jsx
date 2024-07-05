import React from 'react';
import Veggies from '../components/Veggies';
import Popular from '../components/Popular';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Veggies />
      <Popular />
    </motion.div>
  );
};

export default Home;
