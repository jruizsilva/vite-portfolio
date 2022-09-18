import { FormField } from '../../types'

const contactFields: FormField[] = [
  {
    id: 1,
    label: 'Email',
    placeholder: 'Ingrese su email...'
  },
  {
    id: 2,
    label: 'Asunto',
    placeholder: 'Ingrese el asunto...'
  },
  {
    id: 3,
    label: 'Descripción',
    type: 'textarea',
    placeholder: 'Ingrese la descripción...'
  }
]

export { contactFields }
