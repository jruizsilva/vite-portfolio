import { Formik } from 'formik'
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
  const { t, i18n } = useTranslation('contact')
  const form = useRef<HTMLFormElement>(null)

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
      <Formik
        initialValues={initialValues}
        validationSchema={yup.object({
          email: yup
            .string()
            .min(6, 'contact.validation.email.minlength')
            .email('contact.validation.email.valid')
            .max(24, 'contact.validation.email.maxlength')
            .required('contact.validation.email.required'),
          subject: yup
            .string()
            .min(4, 'contact.validation.subject.minlength')
            .max(
              128,
              'contact.validation.subject.maxlength'
            )
            .required(
              'contact.validation.subject.required'
            ),
          message: yup
            .string()
            .min(4, 'contact.validation.subject.minlength')
            .max(
              256,
              'contact.validation.subject.maxlength'
            )
            .required('contact.validation.subject.required')
        })}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldTouched
          } = props
          i18n.on('languageChanged', () => {
            Object.keys(errors).forEach(fieldName => {
              if (
                Object.keys(touched).includes(fieldName)
              ) {
                setFieldTouched(fieldName)
              }
            })
          })
          console.log(errors)
          return (
            <motion.form
              ref={form}
              onSubmit={handleSubmit}
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
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values[field]}
                      ></textarea>
                    ) : (
                      <input
                        className='contact__input'
                        placeholder={t(
                          `contact.form.${field}.placeholder`
                        )}
                        name={field}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values[field]}
                      />
                    )}
                    {errors[field] !== undefined &&
                      touched[field] !== undefined && (
                        <div>
                          {t(errors[field] as string)}
                        </div>
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
                  disabled={isSubmitting}
                >
                  {t('contact.button.submit')}
                </AnchorButton>
              </div>
            </motion.form>
          )
        }}
      </Formik>
    </motion.div>
  )
}

export default Contact
