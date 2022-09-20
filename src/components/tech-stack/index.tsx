import { icons } from '../../assets'
import useHorizontalDragScroll from '../../hooks/useHorizontalDragScroll'
import useModal from '../../hooks/useModal'
import { Technology } from '../../types'

interface Props {
  techList: Technology[]
}

const TechStack = ({ techList }: Props): JSX.Element => {
  const ulRef = useHorizontalDragScroll()

  const { isOpenModal, openModal, closeModal, modalTitle, modalContent } =
    useModal()

  return (
    <>
      <ul ref={ulRef} className='project__ul--tech-stack'>
        {techList.map(({ id, svg, name, content }: Technology) => (
          <li
            key={id}
            className='project__li--tech-stack'
            onClick={() => openModal(name, content)}
            title={`${name} icon`}
          >
            <img src={svg} alt={name} />
          </li>
        ))}
      </ul>
      {isOpenModal && (
        <div className='project__overlay' onClick={closeModal}>
          <div className='project__modal' onClick={e => e.stopPropagation()}>
            <h3 className='project__h3--modal'>{modalTitle}</h3>
            <p className='project__p--modal'>{modalContent}</p>
            <button className='project__button--modal' onClick={closeModal}>
              <img src={icons.close} alt='close' />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default TechStack
