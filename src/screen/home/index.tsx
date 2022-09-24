import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import About from '../../components/about'
import Projects from '../../components/projects'
import VerMas from '../../components/ver-mas'
import Contact from '../../components/contact'
import HeaderHome from '../../components/header-home'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setLoading } from '../../redux/slice/ui'
import Loader from '../../components/loader'
import { useLocation } from 'react-router-dom'

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const HomeScreen = (): JSX.Element => {
  const location = useLocation()
  const { loading } = useAppSelector(state => state.ui)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false))
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {loading ? (
        <Loader key={location.key} />
      ) : (
        <motion.div
          variants={containerVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <HeaderHome />
          <div className='wrapper'>
            <About />
            <Projects
              title='Proyectos'
              limit={2}
              category='full-stack'
            />
            <VerMas />
            <Contact />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default HomeScreen
