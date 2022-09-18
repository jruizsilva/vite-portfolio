import Card from '../card'
import { projectList } from './const'

const Projects = (): JSX.Element => {
  return (
    <div className='projects'>
      <h2 className='projects__h2'>Projects</h2>
      <ul className='projects__ul'>
        {projectList.map(project => (
          <Card key={project.id} {...project} />
        ))}
      </ul>
    </div>
  )
}

export default Projects
