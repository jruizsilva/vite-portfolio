import { projectList } from '../components/projects/const'
import { Project } from '../types'

const getProjectById = (
  id: number
): Project | undefined => {
  return projectList.find(project => project.id === id)
}

export { getProjectById }
