import { useEffect } from 'react'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Footer from '../components/footer'
import Loader from '../components/loader'
import HomeScreen from '../screen/home'
import ProjectScreen from '../screen/project'
import ProjectsScreen from '../screen/projects'
import { useAppSelector } from '../hooks/useAppSelector'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { setLoading } from '../redux/slice/ui'
import Transitions from '../components/transitions'

const Router = (): JSX.Element => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { loading } = useAppSelector(state => state.ui)

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false))
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  return (
    <AnimatePresence mode='wait' initial={false}>
      {loading ? (
        <Loader key={location.key} />
      ) : (
        <div className='container'>
          <AnimatePresence
            mode='wait'
            onExitComplete={scrollToTop}
          >
            <Routes location={location} key={location.key}>
              <Route
                path='/'
                element={
                  <Transitions>
                    <HomeScreen />
                  </Transitions>
                }
              />
              <Route
                path='/projects'
                element={
                  <Transitions>
                    <ProjectsScreen />
                  </Transitions>
                }
              />
              <Route
                path='/project/:id'
                element={
                  <Transitions>
                    <ProjectScreen />
                  </Transitions>
                }
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      )}
    </AnimatePresence>
  )
}

export default Router
