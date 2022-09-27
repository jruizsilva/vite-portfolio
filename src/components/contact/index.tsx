import { motion, Variants } from 'framer-motion'
import { icons } from '../../assets'
import { FormField } from '../../types'
import { AnchorButton } from '../buttons'
import SectionTitle from '../section-title'
import { contactFields } from './const'

const contactVariants: Variants = {
  initial: { opacity: 0, scale: 0.2 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.3,
      ease: 'easeInOut',
      duration: 1
    }
  }),
  exit: { opacity: 0, scale: 0.2 }
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
        exit='exit'
        custom={2}
        viewport={{
          margin: '0px'
        }}
      >
        {contactFields.map(
          ({ id, label, type, placeholder }: FormField) => (
            <motion.div
              key={id}
              className='contact__box'
              variants={contactVariants}
              custom={id + 2}
              viewport={{
                margin: '0px 0px -50px 0px'
              }}
            >
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
            </motion.div>
          )
        )}
        <motion.div
          className='contact__box'
          variants={contactVariants}
          custom={6}
          viewport={{
            margin: '0px 0px 0px 0px'
          }}
        >
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
        </motion.div>
      </motion.form>
    </div>
  )
}

export default Contact
