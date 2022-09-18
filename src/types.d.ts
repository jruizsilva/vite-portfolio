interface Project {
  id: number
  title: string
  description: string
  to: string
  github: string
  deploy?: string
}

interface FormField {
  id: number
  placeholder: string
  label: string
  type?: string
}

export { Project, FormField }
