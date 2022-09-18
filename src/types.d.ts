interface Technology {
  id: number
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
}

interface FormField {
  id: number
  placeholder: string
  label: string
  type?: string
  techList: string[]
}

export { Technology, Project, FormField }
