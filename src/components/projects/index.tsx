import ProjectCard from '../project-card'
import { projectList } from './const'

interface Props {
  title?: string
}

const Projects = ({ title }: Props): JSX.Element => {
  return (
    <div className='projects' id='projects'>
      {title !== '' && <h2 className='projects__h2'>{title}</h2>}
      <ul className='projects__ul'>
        {projectList.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </div>
  )
}

export default Projects
