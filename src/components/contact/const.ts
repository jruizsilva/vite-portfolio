import { FormField } from '../../types'

const contactFields: FormField[] = [
  {
    id: 1,
    field: 'email'
  },
  {
    id: 2,
    field: 'subject'
  },
  {
    id: 3,
    field: 'description',
    type: 'textarea'
  }
]

export { contactFields }
