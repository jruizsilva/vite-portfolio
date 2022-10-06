import { projectList } from '../components/projects/const'
import { Project } from '../types'

const getProjectById = (
  id: number,
  stack: 'html-css' | 'front-end' | 'full-stack' | undefined
): Project | undefined => {
  if (stack === undefined) return undefined
  return projectList[stack].find(
    project => project.id === id
  )
}

export { getProjectById }
