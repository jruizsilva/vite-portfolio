import { AnimatePresence, motion } from 'framer-motion'
import useTabs from '../../hooks/useTabs'
import Projects from '../projects'

const tabVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1
  }
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
          className='tabs__li'
          key={1}
          onClick={showFullStackTab}
          variants={tabVariants}
        >
          FULL-STACK
          {index === 1 && (
            <motion.div
              className='tabs__underline'
              layoutId='tabs__underline'
            ></motion.div>
          )}
        </motion.li>
        <motion.li
          className='tabs__li'
          key={2}
          onClick={showFrontEndTab}
          variants={tabVariants}
        >
          FRONT-END
          {index === 2 && (
            <motion.div
              className='tabs__underline'
              layoutId='tabs__underline'
            ></motion.div>
          )}
        </motion.li>
        <motion.li
          className='tabs__li'
          key={3}
          onClick={showHTMLCSSTab}
          variants={tabVariants}
        >
          HTML/CSS
          {index === 3 && (
            <motion.div
              className='tabs__underline'
              layoutId='tabs__underline'
            ></motion.div>
          )}
        </motion.li>
      </ul>
      <div className='tabs__content-container'>
        <AnimatePresence mode='wait'>
          <motion.div key={index} variants={tabVariants}>
            {index === 1 && (
              <Projects category='full-stack' />
            )}
            {index === 2 && (
              <Projects category='front-end' />
            )}
            {index === 3 && (
              <Projects category='html-css' />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Tabs
