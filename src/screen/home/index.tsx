import About from '../../components/about'
import Header from '../../components/header'
import Projects from '../../components/projects'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import VerMas from '../../components/ver-mas'
import Contact from '../../components/contact'

const theme = {
  bg: '#3870ba',
  white: '#fff',
  black: '#000',
  btn: '#006cfa',
  'card-title': '#004bad'
}

const Home = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className='container'>
          <Header />
          <About />
          <Projects />
          <VerMas />
          <Contact />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Home
