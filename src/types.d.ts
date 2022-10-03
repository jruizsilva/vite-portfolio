import { store } from './redux/store'
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

type projectCategory =
  | 'full-stack'
  | 'front-end'
  | 'html-css'

interface Technology {
  id: number
  title: string
  svg: string
}

interface Project {
  id: number
  title: string
  description: string
  to: string
  github: string
  deploy?: string
  techList: Technology[]
  overview: string
  category: projectCategory
}

interface FormField {
  id: number
  placeholder: string
  label: string
  type?: string
}

interface NavbarLink {
  id: number
  href: string
}

export { Technology, Project, FormField, NavbarLink }
