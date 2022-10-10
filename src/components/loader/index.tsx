import { motion } from 'framer-motion'
const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const Loader = (): JSX.Element => {
  return (
    <motion.div
      className='loader-container'
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='loader'>
        <div className='loader__isometric'>
          <div className='loader__box'></div>
          <div className='loader__box'></div>
          <div className='loader__box'></div>
          <div className='loader__box'></div>
        </div>
        <h3 className='loader__h3'>
          Loading<span className='loader__span'>...</span>
        </h3>
      </div>
    </motion.div>
  )
}

export default Loader
