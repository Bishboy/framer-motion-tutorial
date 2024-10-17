import React,{useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true)
    },5000)
  },[setShowModal])

  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

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
        // delay: 0.2,
        mass: 0.4,
        damping: 8,
        duration: 1.5,
        when: "beforeChildren",
        staggerChildren: 2,
      },
    },
  };
  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>

      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariant}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;