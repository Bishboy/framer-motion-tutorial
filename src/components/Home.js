import React from 'react';
import { Link } from 'react-router-dom';
import { motion, } from 'framer-motion';
import Loader from './Loader';


const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 1.5,
    },
  },
  exit:{y:'-100vw', transition:{ease: 'easeInOut'}}
};

const Home = () => { 
  return (
    <motion.div
      className="home container"
      variants={containerVariant}
      animate="visible"
      initial="hidden"
      exit='exit'
    >
      <motion.h2 initial={{ x: -20 }} animate={{ x: 20 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{}}>Create Your Pizza</motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
}

export default Home;