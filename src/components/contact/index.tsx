import { useFormik } from 'formik'
import { motion, Variants } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
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

const initialValues = {
  email: '',
  subject: '',
  message: ''
}

const Contact = (): JSX.Element => {
  const { t } = useTranslation('contact')
  const form = useRef<HTMLFormElement>(null)
  const formik = useFormik({
    initialValues,
    validationSchema: yup.object({
      email: yup
        .string()
        .min(
          6,
          t('contact.form.email.validation.minlength')
        )
        .email(t('contact.form.email.validation.email'))
        .max(
          24,
          t('contact.form.email.validation.maxlength')
        )
        .required(
          t('contact.form.email.validation.required')
        ),
      subject: yup
        .string()
        .min(
          4,
          t('contact.form.email.validation.minlength')
        )
        .max(
          128,
          t('contact.form.email.validation.maxlength')
        )
        .required(
          t('contact.form.email.validation.required')
        ),
      message: yup
        .string()
        .min(
          4,
          t('contact.form.email.validation.minlength')
        )
        .max(
          256,
          t('contact.form.email.validation.maxlength')
        )
        .required(
          t('contact.form.email.validation.required')
        )
    }),
    onSubmit: () => {
      console.log(formik.values)
    }
  })

  console.log(formik.errors)

  return (
    <motion.div
      className='contact'
      id='contact'
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
        margin: '0px 0px -300px 0px'
      }}
      transition={{ staggerChildren: 0.3 }}
    >
      <SectionTitle>{t('contact.title')}</SectionTitle>
      <motion.form
        ref={form}
        onSubmit={formik.handleSubmit}
        className='contact__form'
        variants={contactVariants}
      >
        {contactFields.map(
          ({ id, field, type }: FormField) => (
            <div key={id} className='contact__box'>
              <label className='contact__label'>
                {t(`contact.form.${field}.label`)}
              </label>
              {type === 'textarea' ? (
                <textarea
                  className='contact__textarea'
                  placeholder={t(
                    `contact.form.${field}.placeholder`
                  )}
                  name={field}
                  value={formik.values[field]}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                ></textarea>
              ) : (
                <input
                  className='contact__input'
                  placeholder={t(
                    `contact.form.${field}.placeholder`
                  )}
                  name={field}
                  value={formik.values[field]}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
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
            {t('contact.button.submit')}
          </AnchorButton>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default Contact
