import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../../components/header'
import ProjectScreenCard from '../../components/project-screen-card'

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const ProjectScreen = (): JSX.Element => {
  const {
    state: { project }
  } = useLocation()

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
        <div className='project-screen'>
          <h2 className='project-screen__h2'>
            {project.title}
          </h2>
          <ProjectScreenCard {...project} />
        </div>
      </motion.div>
    </>
  )
}

export default ProjectScreen
