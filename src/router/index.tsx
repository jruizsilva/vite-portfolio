import { useEffect } from 'react'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Footer from '../components/footer'
import Loader from '../components/loader'
import ScrollToTop from '../components/scroll-to-top/scroll-to-top'
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
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {loading ? (
        <Loader key={location.key} />
      ) : (
        <div className='container'>
          <ScrollToTop />
          <AnimatePresence exitBeforeEnter>
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
