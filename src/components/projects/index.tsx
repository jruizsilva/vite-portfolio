import { useEffect, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useInView
} from 'framer-motion'
import ProjectCard from '../project-card'
import { projectList } from './const'
import SectionTitle from '../section-title'

const titleVariants = {
  initial: { opacity: 0, y: -50 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3
    }
  })
}

interface Props {
  title?: string
  limit?: number
  category: string
}

const Projects = ({
  title,
  limit = projectList.length,
  category
}: Props): JSX.Element => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: '0px 0px -350px 0px'
  })

  useEffect(() => {
    console.log('Element Projects: ', isInView)
  }, [isInView])

  return (
    <div ref={ref} className='projects' id='projects'>
      <AnimatePresence exitBeforeEnter>
        {title !== undefined && isInView && (
          <SectionTitle
            variants={titleVariants}
            initial='initial'
            animate='animate'
            custom={1}
          >
            {title}
          </SectionTitle>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {isInView && (
          <motion.ul
            className='projects__ul'
            variants={titleVariants}
            initial='initial'
            animate='animate'
            custom={2}
          >
            {projectList.length > 0 &&
              projectList
                .filter(p => p.category === category)
                .slice(0, limit)
                .map(project => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                  />
                ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
