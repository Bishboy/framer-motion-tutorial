import React from 'react' 
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const backdropVariant = {
    visible: {opacity:1},
    hidden: {opacity:0

    }
}

const modal = {
    hidden:{
        y: '100vh',
        opacity:0
    },
    visible:{
        y: '200px',
        opacity:1,
        transition:{delay:0.5}
    }
}
const Modal = ({showModal, setShowModal}) => {
  return (
    <AnimatePresence exitBeforeEnter>
        {showModal && (
            <motion.div className='backdrop'
            variants={backdropVariant}
            initial='hidden'
            animate='visible'
            
            >
                <motion.div className='modal'
                variants={modal}>
                    <p>Want to make another pizza?</p>
                    <Link to='/'>
                    <button onClick={()=> setShowModal(false)}>Restart</button>
                    </Link>
                </motion.div>

            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Modal
