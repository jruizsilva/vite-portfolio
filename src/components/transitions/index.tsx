import { motion } from 'framer-motion'

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Transitions = ({ children }: Props): JSX.Element => {
  return (
    <motion.div
      className='transitions'
      variants={animationConfiguration}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ staggerChildren: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default Transitions
