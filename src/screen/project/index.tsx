import {
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import Header from '../../components/header'
import SectionTitle from '../../components/section-title'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getProjectById } from '../../helper/getProjectById'
import { Project } from '../../types'
import Loader from '../../components/loader'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../../components/project-card'
const ProjectScreen = (): JSX.Element => {
  const [project, setProject] = useState<Project | null>(
    null
  )
  const { t } = useTranslation(['projects'])

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
    <>
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
              <SectionTitle>
                {t(
                  `projects.${project.category}.${project.id}.title`
                )}
              </SectionTitle>
              <ProjectCard project={project} lg />
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default ProjectScreen
