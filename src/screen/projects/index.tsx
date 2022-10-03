import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '../../components/header'
import SectionTitle from '../../components/section-title'
import Tabs from '../../components/tabs'

const ProjectsScreen = (): JSX.Element => {
  const { t } = useTranslation(['projects'])
  return (
    <motion.div
      initial='initial'
      animate='animate'
      viewport={{
        once: true
      }}
      transition={{ staggerChildren: 0.3 }}
    >
      <Header />
      <div className='wrapper'>
        <div className='projects-screen'>
          <SectionTitle>
            {t('projects.section-title')}
          </SectionTitle>
          <Tabs />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectsScreen
