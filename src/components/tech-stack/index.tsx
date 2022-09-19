import useHorizontalDragScroll from '../../hooks/useHorizontalDragScroll'
import { Technology } from '../../types'

interface Props {
  techList: Technology[]
}

const TechStack = ({ techList }: Props): JSX.Element => {
  const ulRef = useHorizontalDragScroll()

  return (
    <ul ref={ulRef} className='project__ul--tech-stack'>
      {techList.map(({ id, svg, name }: Technology) => (
        <li className='project__li--tech-stack' key={id}>
          <img src={svg} alt={name} />
        </li>
      ))}
    </ul>
  )
}

export default TechStack
