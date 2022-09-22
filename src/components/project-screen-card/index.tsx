import { Project } from '../../types'
import CardButtons from '../card-buttons'
import TechStack from '../tech-stack'

const ProjectScreenCard = (project: Project): JSX.Element => {
  const { title, description, github, deploy, techList, overview } = project
  return (
    <div className='project screen'>
      <p className='project__p screen'>{description}</p>
      <TechStack techList={techList} />
      <div className='project__img-container'>
        <img className='project__img' src={overview} alt={title} />
      </div>
      <CardButtons github={github} deploy={deploy ?? ''} />
    </div>
  )
}

export default ProjectScreenCard
