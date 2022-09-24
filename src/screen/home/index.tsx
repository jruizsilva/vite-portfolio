import { motion } from 'framer-motion'

import About from '../../components/about'
import Projects from '../../components/projects'
import VerMas from '../../components/ver-mas'
import Contact from '../../components/contact'
import HeaderHome from '../../components/header-home'

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const HomeScreen = (): JSX.Element => {
  return (
    <motion.div
      className='home'
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <HeaderHome />
      <div className='wrapper'>
        <About />
        <Projects
          title='Proyectos'
          limit={2}
          category='full-stack'
        />
        <VerMas />
        <Contact />
      </div>
    </motion.div>
  )
}

export default HomeScreen
