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
    field: 'message',
    type: 'textarea'
  }
]

export { contactFields }
