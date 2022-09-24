import { motion } from 'framer-motion'
import Header from '../../components/header'
import Tabs from '../../components/tabs'

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const ProjectsScreen = (): JSX.Element => {
  return (
    <>
      <Header />
      <motion.div
        className='wrapper'
        variants={containerVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <div className='projects-screen'>
          <h2 className='projects-screen__h2'>
            Mis proyectos
          </h2>
          <Tabs />
        </div>
      </motion.div>
    </>
  )
}

export default ProjectsScreen
