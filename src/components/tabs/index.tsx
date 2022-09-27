import { motion } from 'framer-motion'
import useTabs from '../../hooks/useTabs'
import Projects from '../projects'

const tabVariants = {
  initial: { opacity: 0 },
  animate: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3
    }
  })
}

const Tabs = (): JSX.Element => {
  const {
    index,
    showFullStackTab,
    showFrontEndTab,
    showHTMLCSSTab
  } = useTabs()

  return (
    <div className='tabs'>
      <ul className='tabs__ul'>
        <motion.li
          className={`tabs__li ${
            index === 1 ? 'tabs__li--active' : ''
          }`}
          onClick={showFullStackTab}
          variants={tabVariants}
          initial='initial'
          animate='animate'
          custom={2}
        >
          FULL-STACK
        </motion.li>
        <motion.li
          className={`tabs__li ${
            index === 2 ? 'tabs__li--active' : ''
          }`}
          onClick={showFrontEndTab}
          variants={tabVariants}
          initial='initial'
          animate='animate'
          custom={3}
        >
          FRONT-END
        </motion.li>
        <motion.li
          className={`tabs__li ${
            index === 3 ? 'tabs__li--active' : ''
          }`}
          onClick={showHTMLCSSTab}
          variants={tabVariants}
          initial='initial'
          animate='animate'
          custom={4}
        >
          HTML/CSS
        </motion.li>
      </ul>
      <div className='tabs__content-container'>
        <div
          className={`tabs__content ${
            index === 1 ? 'tabs__content--active' : ''
          }`}
        >
          <Projects category='full-stack' custom={5} />
        </div>
        <div
          className={`tabs__content ${
            index === 2 ? 'tabs__content--active' : ''
          }`}
        >
          FRONT-END
        </div>
        <div
          className={`tabs__content ${
            index === 3 ? 'tabs__content--active' : ''
          }`}
        >
          HTML/CSS
        </div>
      </div>
    </div>
  )
}

export default Tabs
