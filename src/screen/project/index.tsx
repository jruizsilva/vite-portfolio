import { useLocation } from 'react-router-dom'
import Header from '../../components/header'
import ProjectScreenCard from '../../components/project-screen-card'
import SectionTitle from '../../components/section-title'

import { motion } from 'framer-motion'
const ProjectScreen = (): JSX.Element => {
  const {
    state: { project }
  } = useLocation()

  return (
    <motion.div
      initial='initial'
      animate='animate'
      viewport={{
        once: true,
        margin: '0px'
      }}
      transition={{ staggerChildren: 0.3 }}
    >
      <Header />
      <div className='wrapper'>
        <div className='project-screen'>
          <SectionTitle>{project.title}</SectionTitle>
          <ProjectScreenCard project={project} />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectScreen
