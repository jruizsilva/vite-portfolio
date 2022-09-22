import { Link } from 'react-router-dom'
import { Project } from '../../types'
import CardButtons from '../card-buttons'
import TechStack from '../tech-stack'

const ProjectCard = (project: Project): JSX.Element => {
  const { title, description, to, github, deploy, techList } = project
  return (
    <li className='project'>
      <h3 className='project__h3'>
        <Link to={to} state={{ project }}>
          {title}
        </Link>
      </h3>
      <p className='project__p'>{description}</p>
      <TechStack techList={techList} />
      <CardButtons github={github} deploy={deploy ?? ''} />
    </li>
  )
}

export default ProjectCard
