import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  const containerVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", delay: 0.5 },
    },
    exit: { x: "-100vw", transition: { ease: "easeInOut" } },
  };

  const buttonVariant = {
    
    
    hover:{
      scale : 1.1,
      textShadow:'0px 0px 8px rgb(225,225,225)',
      boxShadow:'0px 0px 8px rgb(225,225,225)',
      transition:{
        yoyo: Infinity, 
        duration:0.5
      }
    }
  }

  return (
    < motion.div className="base container"
    variants={containerVariant}
    initial= 'hidden'
    animate="visible"
    exit='exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        initial={{x:'-100vw'}}
        animate={{x:0}}
        transition={{type:'spring', stiffness:120}}
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}

      <motion.button 
      variants={buttonVariant}
      whileHover='hover'
      >hello world</motion.button>

    </ motion.div>
  )
}

export default Base;