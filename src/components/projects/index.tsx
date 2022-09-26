import { AnimatePresence } from 'framer-motion'
import ProjectCard from '../project-card'
import { projectList } from './const'
import SectionTitle from '../section-title'

interface Props {
  title?: string
  limit?: number
  category: string
}

const Projects = ({
  title,
  limit = projectList.length,
  category
}: Props): JSX.Element => {
  return (
    <div className='projects' id='projects'>
      <AnimatePresence exitBeforeEnter>
        {title !== undefined && (
          <SectionTitle custom={1}>{title}</SectionTitle>
        )}
      </AnimatePresence>
      <ul className='projects__ul'>
        {projectList.length > 0 &&
          projectList
            .filter(p => p.category === category)
            .slice(0, limit)
            .map((project, i) => (
              <ProjectCard key={project.id} {...project} />
            ))}
      </ul>
    </div>
  )
}

export default Projects
