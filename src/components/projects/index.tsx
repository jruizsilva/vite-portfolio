import { motion } from 'framer-motion'
import ProjectCard from '../project-card'
import { projectList } from './const'
import SectionTitle from '../section-title'

interface Props {
  title?: string
  limit?: number
  category: string
  custom: number
}

const Projects = ({
  title,
  limit = projectList.length,
  category
}: Props): JSX.Element => {
  return (
    <motion.div
      className='projects'
      id='projects'
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
        margin: '0px 0px -250px 0px'
      }}
      transition={{ staggerChildren: 0.3 }}
    >
      {title !== undefined && (
        <SectionTitle>{title}</SectionTitle>
      )}
      <ul className='projects__ul'>
        {projectList.length > 0 &&
          projectList
            .filter(p => p.category === category)
            .slice(0, limit)
            .map(project => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
      </ul>
    </motion.div>
  )
}

export default Projects
