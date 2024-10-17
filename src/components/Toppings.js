import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

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
  };
  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(225,225,225)",
      boxShadow: "0px 0px 8px rgb(225,225,225)",
      transition: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div className="toppings container" 
    variants={containerVariant}
    initial='hidden'
    animate='visible'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        variants={buttonVariant}
        whileHover='hover'
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;