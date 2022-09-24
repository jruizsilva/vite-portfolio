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

const Router = (): JSX.Element => {
  const location = useLocation()

  return (
    <div className='container'>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<HomeScreen />} />
          <Route
            path='/projects'
            element={<ProjectsScreen />}
          />
          <Route
            path='/project/:id'
            element={<ProjectScreen />}
          />
          <Route path='/loader' element={<Loader />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default Router
