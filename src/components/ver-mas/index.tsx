import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { icons } from '../../assets'
import { NavLinkButton } from '../buttons'
import SectionTitle from '../section-title'

const VerMas = (): JSX.Element => {
  const { t } = useTranslation(['projects'])
  const navigate = useNavigate()

  return (
    <motion.div
      className='ver-mas'
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
        margin: '0px 0px -250px 0px'
      }}
      transition={{ staggerChildren: 0.3 }}
    >
      <SectionTitle>
        {t('projects.section-view-more')}
      </SectionTitle>
      <NavLinkButton
        onClick={() => navigate('/projects')}
        bg='transparent'
        border='#fff'
        icon={icons.link}
      >
        {t('projects.button.view-more')}
      </NavLinkButton>
    </motion.div>
  )
}

export default VerMas
