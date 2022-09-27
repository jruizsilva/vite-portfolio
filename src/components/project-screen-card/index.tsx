import { motion } from 'framer-motion'
import { icons } from '../../assets'
import useImageModal from '../../hooks/useImageModal'
import { Project } from '../../types'
import CardButtons from '../card-buttons'
import TechStack from '../tech-stack'

const projectCardVariants = {
  initial: { opacity: 0, x: '500', scale: 0.2 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      ease: 'easeInOut'
    }
  }
}

interface Props {
  project: Project
  custom: number
}

const ProjectScreenCard = ({
  project,
  custom
}: Props): JSX.Element => {
  const {
    title,
    description,
    github,
    deploy,
    techList,
    overview
  } = project

  const {
    isOpenImageModal,
    openImageModal,
    closeImageModal
  } = useImageModal()
  return (
    <>
      <motion.div
        className='project screen'
        variants={projectCardVariants}
        initial='initial'
        animate='animate'
        custom={custom}
      >
        <p className='project__p screen'>{description}</p>
        <TechStack techList={techList} />
        <div
          className='project__img-container border'
          onClick={openImageModal}
        >
          <img
            className='project__img border'
            src={overview}
            alt={title}
          />
        </div>
        <CardButtons
          github={github}
          deploy={deploy ?? ''}
        />
      </motion.div>
      {isOpenImageModal && (
        <div
          className='project__overlay'
          onClick={closeImageModal}
        >
          <div
            className='project__modal image'
            onClick={e => e.stopPropagation()}
          >
            <div className='project__img-container'>
              <img
                className='project__img modal'
                src={overview}
                alt={title}
              />
            </div>
          </div>
          <button
            className='project__button--modal'
            onClick={closeImageModal}
          >
            <img src={icons.close_white} alt='close' />
          </button>
        </div>
      )}
    </>
  )
}

export default ProjectScreenCard
