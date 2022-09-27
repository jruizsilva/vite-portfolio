import { motion, Variants } from 'framer-motion'
import { icons } from '../../assets'
import { FormField } from '../../types'
import { AnchorButton } from '../buttons'
import SectionTitle from '../section-title'
import { contactFields } from './const'

const contactVariants: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.3,
      ease: 'easeInOut',
      duration: i * 0.3
    }
  }),
  exit: { opacity: 0, scale: 0.5 }
}

const Contact = (): JSX.Element => {
  return (
    <div className='contact' id='contact'>
      <SectionTitle
        custom={1}
        viewportMargin='0px 0px -300px 0px'
      >
        Contacto
      </SectionTitle>
      <motion.form
        className='contact__form'
        variants={contactVariants}
        initial='initial'
        whileInView='animate'
        custom={2}
      >
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
      </motion.form>
    </div>
  )
}

export default Contact
