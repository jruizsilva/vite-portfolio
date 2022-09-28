import { motion } from 'framer-motion'
import Header from '../../components/header'
import SectionTitle from '../../components/section-title'
import Tabs from '../../components/tabs'

const ProjectsScreen = (): JSX.Element => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      viewport={{
        once: true
      }}
      transition={{ staggerChildren: 0.3 }}
    >
      <Header />
      <div className='wrapper'>
        <div className='projects-screen'>
          <SectionTitle>Mis proyectos</SectionTitle>
          <Tabs />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectsScreen
