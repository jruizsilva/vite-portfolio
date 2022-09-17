import About from '../../components/about'
import Header from '../../components/header'
import Projects from '../../components/projects'
import { ThemeProvider } from 'styled-components'

const theme = {
  bg: '#3870ba',
  white: '#fff',
  black: '#000',
  btn: '#006cfa',
  'card-title': '#004bad'
}

const Home = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <div className='container'>
        <Header />
        <About />
        <Projects />
      </div>
    </ThemeProvider>
  )
}

export default Home
