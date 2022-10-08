import { motion, Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const titleVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4
    }
  }
}

const Welcome = (): JSX.Element => {
  const { t } = useTranslation(['about'])
  return (
    <div className='welcome'>
      <motion.h1
        className='welcome__h1'
        variants={titleVariants}
        dangerouslySetInnerHTML={{
          __html: t('about.title')
        }}
      />
    </div>
  )
}

export default Welcome
