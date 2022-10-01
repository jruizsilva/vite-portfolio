import { AnimatePresence, motion } from 'framer-motion'
import { icons } from '../../assets'
import useHorizontalDragScroll from '../../hooks/useHorizontalDragScroll'
import useTechModal from '../../hooks/useTechModal'
import { Technology } from '../../types'

interface Props {
  techList: Technology[]
  projectId: number
}

const TechStack = ({
  techList,
  projectId
}: Props): JSX.Element => {
  const ulRef = useHorizontalDragScroll()

  const { tech, openTechModal, closeTechModal } =
    useTechModal()

  const { index, modalTitle, modalDescription } = tech

  return (
    <>
      <motion.ul
        ref={ulRef}
        className='project__ul--tech-stack'
        layout
      >
        {techList.map(
          ({ id, svg, title, description }: Technology) => (
            <li
              key={id}
              className='project__li--tech-stack'
            >
              <motion.img
                src={svg}
                alt={title}
                layoutId={`${projectId}-${id}`}
                onClick={() =>
                  openTechModal({
                    index: `${projectId}-${id}`,
                    isOpen: true,
                    modalTitle: title,
                    modalDescription: description
                  })
                }
                title={`${title} icon`}
              />
            </li>
          )
        )}
      </motion.ul>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='project__overlay'
            onClick={closeTechModal}
          >
            <motion.div
              className='project__modal'
              key='tech-modal'
              layoutId={`${index}`}
              onClick={e => e.stopPropagation()}
            >
              <h3 className='project__h3--modal'>
                {modalTitle}
              </h3>
              <p className='project__p--modal'>
                {modalDescription}
              </p>
              <button
                className='project__button--modal'
                onClick={closeTechModal}
              >
                <img src={icons.close} alt='close' />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default TechStack
