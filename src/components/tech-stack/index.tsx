import { useState } from 'react'
import useHorizontalDragScroll from '../../hooks/useHorizontalDragScroll'
import { Technology } from '../../types'

interface Props {
  techList: Technology[]
}

const TechStack = ({ techList }: Props): JSX.Element => {
  const ulRef = useHorizontalDragScroll()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [techName, setTechName] = useState('')

  const handleOpenModal = (name: string): void => {
    console.log('open modal')
    setIsOpenModal(true)
    setTechName(name)
  }

  const handleCloseModal = (): void => {
    console.log('close modal')
    setIsOpenModal(false)
    setTechName('')
  }
  console.log(isOpenModal)

  return (
    <>
      <ul ref={ulRef} className='project__ul--tech-stack'>
        {techList.map(({ id, svg, name }: Technology) => (
          <li
            key={id}
            className='project__li--tech-stack'
            onClick={() => handleOpenModal(name)}
            data-title={name}
          >
            <img src={svg} alt={name} />
          </li>
        ))}
      </ul>
      {isOpenModal && (
        <div className='project__overlay'>
          <div className='project__modal'>
            <h3 className='project__modal-title'>{techName}</h3>
            <button
              className='project__btn project__btn-modal-close'
              onClick={handleCloseModal}
            >
              Close Me!
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default TechStack
