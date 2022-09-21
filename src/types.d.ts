interface Technology {
  id: number
  name: string
  content: string
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

interface NavbarLink {
  id: number
  href: string
  name: string
  offset: number
}

export { Technology, Project, FormField, NavbarLink }
