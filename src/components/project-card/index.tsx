import { Link } from 'react-router-dom'
import { Project } from '../../types'
import CardButtons from '../card-buttons'
import TechStack from '../tech-stack'

const ProjectCard = ({
  title,
  description,
  to,
  github,
  deploy,
  techList
}: Project): JSX.Element => {
  return (
    <li className='project'>
      <h3 className='project__h3'>
        <Link to={to}>{title}</Link>
      </h3>
      <p className='project__p'>{description}</p>
      <TechStack techList={techList} />
      <CardButtons github={github} deploy={deploy ?? ''} />
    </li>
  )
}

export default ProjectCard
