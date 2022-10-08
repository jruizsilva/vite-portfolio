import { Formik } from 'formik'
import { motion, Variants } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { icons } from '../../assets'
import { FormField } from '../../types'
import { Button } from '../buttons'
import SectionTitle from '../section-title'
import { contactFields } from './const'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

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

  const sendEmail = (form: HTMLFormElement): void => {
    toast
      .promise(
        emailjs.sendForm(
          'service_7bw4o4q',
          'template_2spbbys',
          form,
          'omBJgOPXFkjqPOqNn'
        ),
        {
          loading: t('contact.toast.loading'),
          success: t('contact.toast.success'),
          error: t('contact.toast.error')
        }
      )
      .then(() => {
        console.log('Email sended')
      })
      .catch(console.log)
  }

  return (
    <>
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
              .required(
                'contact.validation.email.required'
              ),
            subject: yup
              .string()
              .min(
                4,
                'contact.validation.subject.minlength'
              )
              .max(
                128,
                'contact.validation.subject.maxlength'
              )
              .required(
                'contact.validation.subject.required'
              ),
            message: yup
              .string()
              .min(
                4,
                'contact.validation.description.minlength'
              )
              .max(
                256,
                'contact.validation.description.maxlength'
              )
              .required(
                'contact.validation.description.required'
              )
          })}
          onSubmit={() =>
            sendEmail(form.current as HTMLFormElement)
          }
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props
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
                          className={`contact__textarea ${
                            errors[field] !== undefined &&
                            touched[field] !== undefined
                              ? 'error'
                              : ''
                          }`}
                          placeholder={t(
                            `contact.form.${field}.placeholder`
                          )}
                          name={field}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values[field]}
                          autoComplete='off'
                        ></textarea>
                      ) : (
                        <input
                          className={`contact__input ${
                            errors[field] !== undefined &&
                            touched[field] !== undefined
                              ? 'error'
                              : ''
                          }`}
                          placeholder={t(
                            `contact.form.${field}.placeholder`
                          )}
                          name={field}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values[field]}
                          autoComplete='off'
                        />
                      )}
                      {errors[field] !== undefined &&
                        touched[field] !== undefined && (
                          <span className='contact__error-message'>
                            {t(errors[field] as string)}
                          </span>
                        )}
                    </div>
                  )
                )}
                <div className='contact__box'>
                  <Button
                    type='submit'
                    icon={icons.send}
                    w='100%'
                    bg='transparent'
                    border='#fff'
                    disabled={
                      isSubmitting ||
                      Object.keys(errors).length > 0
                    }
                  >
                    {t('contact.button.submit')}
                  </Button>
                </div>
              </motion.form>
            )
          }}
        </Formik>
      </motion.div>
      <Toaster position='bottom-right' />
    </>
  )
}

export default Contact
