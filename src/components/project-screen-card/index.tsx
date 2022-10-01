import { AnimatePresence, motion } from 'framer-motion'
import { icons } from '../../assets'
import useImageModal from '../../hooks/useImageModal'
import { Project } from '../../types'
import CardButtons from '../card-buttons'
import TechStack from '../tech-stack'

const projectCardVariants = {
  initial: { opacity: 0, x: -50, scale: 0.2 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      ease: 'easeInOut'
    }
  }
}

interface Props {
  project: Project
}

const ProjectScreenCard = ({
  project
}: Props): JSX.Element => {
  const {
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
      >
        <p className='project__p screen'>{description}</p>
        <TechStack
          techList={techList}
          projectId={project.id}
        />
        <motion.div
          className='project__img-container border'
          onClick={openImageModal}
          layoutId={`project-${project.id}-image`}
          style={{ backgroundImage: `url(${overview})` }}
        ></motion.div>
        <CardButtons
          github={github}
          deploy={deploy ?? ''}
        />
      </motion.div>
      <AnimatePresence>
        {isOpenImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='project__overlay'
            onClick={closeImageModal}
          >
            <motion.div
              className='project__modal image'
              onClick={e => e.stopPropagation()}
              layoutId={`project-${project.id}-image`}
              style={{
                backgroundImage: `url(${overview})`
              }}
            ></motion.div>
            <button
              className='project__button--modal'
              onClick={closeImageModal}
            >
              <img src={icons.close_white} alt='close' />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectScreenCard
