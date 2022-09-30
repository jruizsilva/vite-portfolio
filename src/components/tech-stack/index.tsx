import { AnimatePresence, motion } from 'framer-motion'
import { icons } from '../../assets'
import useHorizontalDragScroll from '../../hooks/useHorizontalDragScroll'
import useTechModal from '../../hooks/useTechModal'
import { Technology } from '../../types'

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

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
  const { index, modalTitle, modalContent } = tech

  return (
    <>
      <ul ref={ulRef} className='project__ul--tech-stack'>
        {techList.map(
          ({ id, svg, name, content }: Technology) => (
            <motion.li
              layout
              key={id}
              className='project__li--tech-stack'
              onClick={() =>
                openTechModal({
                  index: `${projectId}-${id}`,
                  modalTitle: name,
                  modalContent: content
                })
              }
              title={`${name} icon`}
            >
              <motion.img
                src={svg}
                alt={name}
                layoutId={`${projectId}-${id}`}
              />
            </motion.li>
          )
        )}
      </ul>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            key='overlay'
            className='project__overlay'
            variants={overlayVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            onClick={closeTechModal}
          ></motion.div>
        )}
        {index !== null && (
          <motion.div
            key='tech-modal'
            layoutId={`${index}`}
            className='project__modal-container'
          >
            <div
              className='project__modal'
              onClick={e => e.stopPropagation()}
            >
              <h3 className='project__h3--modal'>
                {modalTitle}
              </h3>
              <p className='project__p--modal'>
                {modalContent}
              </p>
              <button
                className='project__button--modal'
                onClick={closeTechModal}
              >
                <img src={icons.close} alt='close' />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default TechStack
