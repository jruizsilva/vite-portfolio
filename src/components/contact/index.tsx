import { motion, Variants } from 'framer-motion'
import { icons } from '../../assets'
import { FormField } from '../../types'
import { AnchorButton } from '../buttons'
import SectionTitle from '../section-title'
import { contactFields } from './const'

const contactVariants: Variants = {
  initial: { opacity: 0, x: -50, scale: 0.2 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      ease: 'easeInOut'
    }
  }
}

const Contact = (): JSX.Element => {
  return (
    <motion.div
      className='contact'
      id='contact'
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
        margin: '0px 0px -250px 0px'
      }}
      transition={{ staggerChildren: 0.3 }}
    >
      <SectionTitle>Contacto</SectionTitle>
      <motion.form
        className='contact__form'
        variants={contactVariants}
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
    </motion.div>
  )
}

export default Contact
