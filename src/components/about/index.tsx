import { motion, Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AboutCard from '../about-card'
import SectionTitle from '../section-title'

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

const About = (): JSX.Element => {
  const { t } = useTranslation(['about'])
  return (
    <div className='about' id='about'>
      <motion.h1
        className='about__h1'
        variants={titleVariants}
        dangerouslySetInnerHTML={{
          __html: t('about.title')
        }}
      />

      <SectionTitle>
        {t('about.section-title')}
      </SectionTitle>
      <AboutCard />
    </div>
  )
}

export default About
