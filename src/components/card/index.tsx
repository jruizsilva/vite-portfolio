import { Project } from '../../types'
import CardButtons from '../card-buttons'

const Card = ({
  title,
  description,
  to,
  github,
  deploy
}: Project): JSX.Element => {
  return (
    <li className='projects__li--project'>
      <h3 className='projects__h3'>{title}</h3>
      <p className='projects__p'>{description}</p>
      <CardButtons github={github} deploy={deploy ?? ''} />
    </li>
  )
}

export default Card
