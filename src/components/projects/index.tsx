import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../project-card'
import SectionTitle from '../section-title'
import { projectList } from './const'

interface Props {
  limit?: number
  category: 'html-css' | 'front-end' | 'full-stack'
  showTitle?: boolean
  lg?: boolean
}

const Projects = ({
  category,
  limit = projectList[category].length,
  showTitle = false
}: Props): JSX.Element => {
  const { t } = useTranslation(['projects'])
  return (
    <motion.div
      className='projects'
      id='projects'
      initial='initial'
      whileInView='animate'
      exit={{ opacity: 0 }}
      viewport={{
        once: true,
        margin: '0px 0px -250px 0px'
      }}
      transition={{ staggerChildren: 0.3 }}
    >
      {showTitle && (
        <SectionTitle>
          {t('projects.section-title')}
        </SectionTitle>
      )}

      <ul className='projects__ul'>
        {projectList[category].length > 0 &&
          projectList[category]
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
