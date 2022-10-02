import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
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
}

const ProjectCard = ({ project }: Props): JSX.Element => {
  const { t } = useTranslation(['projects'])
  const { to, github, deploy, techList, id } = project

  return (
    <motion.li className='project' variants={cardVariants}>
      <h3 className='project__h3'>
        <Link to={to} state={{ project }}>
          {t(`projects.${id}.title`)}
        </Link>
      </h3>
      <p className='project__p'>
        {t(`projects.${id}.description`)}
      </p>
      <TechStack techList={techList} projectId={id} />
      <CardButtons github={github} deploy={deploy ?? ''} />
    </motion.li>
  )
}

export default ProjectCard
