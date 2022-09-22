import { Project } from '../../types'
import CardButtons from '../card-buttons'
import TechStack from '../tech-stack'

const ProjectScreenCard = (project: Project): JSX.Element => {
  const { title, description, github, deploy, techList, overview } = project
  return (
    <li className='project screen'>
      <p className='project__p screen'>{description}</p>
      <TechStack techList={techList} />
      <img className='project__img' src={overview} alt={title} />
      <CardButtons github={github} deploy={deploy ?? ''} />
    </li>
  )
}

export default ProjectScreenCard
