import {
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import Header from '../../components/header'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getProjectById } from '../../helper/getProjectById'
import { Project } from '../../types'
import ProjectCard from '../../components/project-card'
import Loader from '../../components/loader'
const ProjectScreen = (): JSX.Element => {
  const [project, setProject] = useState<Project | null>(
    null
  )

  const navigate = useNavigate()
  const { state } = useLocation()
  const { id, stack } = useParams<{
    id: string
    stack:
      | 'html-css'
      | 'front-end'
      | 'full-stack'
      | undefined
  }>()

  useEffect(() => {
    if (state?.project !== undefined) {
      setProject(state.project)
    } else {
      if (stack !== undefined) {
        const project = getProjectById(Number(id), stack)
        if (project !== undefined) {
          setProject(project)
        } else {
          navigate('/projects')
        }
      } else {
        navigate('/projects')
      }
    }
  }, [])

  return (
    <AnimatePresence mode='wait'>
      {project === null ? (
        <Loader />
      ) : (
        <motion.div
          initial='initial'
          animate='animate'
          viewport={{
            once: true
          }}
          transition={{ staggerChildren: 0.3 }}
        >
          <Header />

          <div className='wrapper'>
            <div className='project-screen'>
              <ProjectCard project={project} lg />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectScreen
