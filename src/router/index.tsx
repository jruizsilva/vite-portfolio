import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Footer from '../components/footer'
import HomeScreen from '../screen/home'
import ProjectScreen from '../screen/project'
import ProjectsScreen from '../screen/projects'
import Transitions from '../components/transitions'

const Router = (): JSX.Element => {
  const location = useLocation()

  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  return (
    <AnimatePresence mode='wait' initial={false}>
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
              path='/project/:stack/:id'
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
    </AnimatePresence>
  )
}

export default Router
