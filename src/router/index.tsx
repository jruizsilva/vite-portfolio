import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top/scroll-to-top'
import HomeScreen from '../screen/home'
import ProjectScreen from '../screen/project'
import ProjectsScreen from '../screen/projects'

const theme = {
  bg: '#3870ba',
  white: '#fff',
  black: '#000',
  btn: '#006cfa',
  'card-title': '#004bad'
}

const Router = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className='container'>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/projects' element={<ProjectsScreen />} />
            <Route path='/project/:id' element={<ProjectScreen />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
