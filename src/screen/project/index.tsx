import {
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import Header from '../../components/header'
import ProjectScreenCard from '../../components/project-screen-card'
import SectionTitle from '../../components/section-title'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getProjectById } from '../../helper/getProjectById'
import { Project } from '../../types'
import Loader from '../../components/loader'
const ProjectScreen = (): JSX.Element => {
  const [project, setProject] = useState<Project | null>(
    null
  )

  const navigate = useNavigate()
  const { state } = useLocation()
  const { id } = useParams()

  useEffect(() => {
    if (state?.project !== undefined) {
      setProject(state.project)
    } else {
      const project = getProjectById(Number(id))
      if (project !== undefined) {
        setProject(project)
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
              <SectionTitle>{project.title}</SectionTitle>
              <ProjectScreenCard project={project} />
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default ProjectScreen
