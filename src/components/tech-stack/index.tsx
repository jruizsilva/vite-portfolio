import { Technology } from '../../types'

interface Props {
  techList: Technology[]
}

const TechStack = ({ techList }: Props): JSX.Element => {
  return (
    <ul className='project__ul--tech-stack'>
      <>
        {console.log(techList)}
        <li style={{ color: 'black' }}>tech stack</li>
      </>
    </ul>
  )
}

export default TechStack
