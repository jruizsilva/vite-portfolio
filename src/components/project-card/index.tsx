import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import useImageModal from '../../hooks/useImageModal'
import { Project } from '../../types'
import CardButtons from '../card-buttons'
import TechStack from '../tech-stack'

const cardVariants = {
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
  lg?: boolean
}

const ProjectCard = ({
  project,
  lg
}: Props): JSX.Element => {
  const { t } = useTranslation(['projects'])

  const {
    github,
    deploy,
    techList,
    overview,
    id,
    category
  } = project

  const {
    isOpenImageModal,
    openImageModal,
    closeImageModal
  } = useImageModal()

  return (
    <>
      <motion.li
        className={`project ${lg === true ? 'screen' : ''}`}
        variants={cardVariants}
      >
        <h3 className='project__h3'>
          <Link
            to={`/project/${category}/${id}`}
            state={{ project }}
          >
            {t(`projects.${category}.${id}.title`)}
          </Link>
        </h3>

        <p
          className={`project__p ${
            lg === true ? 'screen' : ''
          }`}
          dangerouslySetInnerHTML={{
            __html: t(
              `projects.${category}.${id}.description`
            )
          }}
        />

        <motion.div
          className={`project__img-container border ${
            lg === true ? 'screen' : ''
          }`}
          onClick={openImageModal}
          layoutId={`project-${project.id}-image`}
          style={{
            backgroundImage: `url(${overview})`
          }}
        ></motion.div>
        {lg === true && (
          <TechStack
            techList={techList}
            projectId={project.id}
          />
        )}

        <CardButtons
          github={github}
          deploy={deploy ?? ''}
        />
      </motion.li>
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
              layoutId={`project-${project.id}-image`}
              style={{
                backgroundImage: `url(${overview})`
              }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard
