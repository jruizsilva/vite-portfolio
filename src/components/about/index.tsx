import { useTranslation } from 'react-i18next'
import AboutCard from '../about-card'
import SectionTitle from '../section-title'

const About = (): JSX.Element => {
  const { t } = useTranslation(['about'])
  return (
    <div className='about' id='about'>
      <SectionTitle>
        {t('about.section-title')}
      </SectionTitle>
      <AboutCard />
    </div>
  )
}

export default About
