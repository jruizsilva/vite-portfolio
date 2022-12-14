import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('techList')
  const ulRef = useHorizontalDragScroll()

  const { tech, openTechModal, closeTechModal } =
    useTechModal()

  const { index, modalTitle, modalDescription } = tech

  return (
    <>
      <ul ref={ulRef} className='project__ul--tech-stack'>
        {techList.map(({ id, svg, title }: Technology) => (
          <li key={id} className='project__li--tech-stack'>
            <motion.img
              src={svg}
              alt={title}
              layoutId={`${projectId}-${id}`}
              onClick={() =>
                openTechModal({
                  index: `${projectId}-${id}`,
                  isOpen: true,
                  modalTitle: title,
                  modalDescription: t(
                    `techList.${title}.description`
                  )
                })
              }
              title={`${title} icon`}
            />
          </li>
        ))}
      </ul>
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
