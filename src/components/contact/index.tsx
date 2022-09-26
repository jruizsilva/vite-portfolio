import { icons } from '../../assets'
import { FormField } from '../../types'
import { AnchorButton } from '../buttons'
import SectionTitle from '../section-title'
import { contactFields } from './const'

const Contact = (): JSX.Element => {
  return (
    <div className='contact' id='contact'>
      <SectionTitle>Contacto</SectionTitle>
      <form className='contact__form'>
        {contactFields.map(
          ({ id, label, type, placeholder }: FormField) => (
            <div key={id} className='contact__box'>
              <label className='contact__label'>
                {label}
              </label>
              {type === 'textarea' ? (
                <textarea
                  className='contact__textarea'
                  placeholder={placeholder}
                ></textarea>
              ) : (
                <input
                  className='contact__input'
                  placeholder={placeholder}
                />
              )}
            </div>
          )
        )}
        <div className='contact__box'>
          <AnchorButton
            type='submit'
            href='#'
            icon={icons.send}
            w='100%'
            bg='transparent'
            border='#fff'
          >
            Enviar correo
          </AnchorButton>
        </div>
      </form>
    </div>
  )
}

export default Contact
